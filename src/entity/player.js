let floor_height    = 620

let player_speed    = 400;
//let player_speed    = 350; ORIGINALE
let jump_init_speed = 450;

let curr_anim = "stop"; // Questa variabile contiene l'animazione corrente

let img_shockwave;
let shockwave;

let img_arrow;
let arrow;
let position_arrow_x;
let position_arrow_y;

let img_panning;
let panning;
let panning_verify = true;

let shockwave_return = false;
let shockwave_disabled = false;
let bow_disabled = true;
let bow_disabled_animation = false;
let b_shockwave = true;

let spawn = 1;

function back_shockwave(s) {
    b_shockwave = false;
}

function reenable_bow(s) {
    // Funzione che viene chiamata allo scadere del timer
    bow_disabled = false;
    bow_disabled_animation = true;

}

function reenable_bow_animation(s) {
    // Funzione che viene chiamata allo scadere del timer
    bow_disabled_animation = false;

}

function preload_player(s) {
    
    // Caricamento assets grafici
    img_arrow = PP.assets.image.load(s, "assets/entities/ss_arrow.png");
    img_shockwave = PP.assets.sprite.load_spritesheet(s, "assets/entities/ss_shockwave.png", 80, 200);
    img_panning = PP.assets.image.load(s, "assets/entities/ss_arrow.png");

}

function configure_player_animations(s, player) {s

    PP.assets.sprite.animation_add_list(player, "stop",  [51,52,53,54], 6, -1);
    PP.assets.sprite.animation_add_list(player, "stop-sword",  [7,15,23,31], 6, -1)
    PP.assets.sprite.animation_add_list(player, "run",  [18,19,20,21,22,24,25], 10, -1);
    PP.assets.sprite.animation_add_list(player, "jump_up",  [46,48], 5, 0);
    PP.assets.sprite.animation_add_list(player, "jump_down",  [49,50], 5, 0);
    PP.assets.sprite.animation_add_list(player, "sword",  [14,13,12,11,10,9,8,6,5,17,4], 12, 0);
    PP.assets.sprite.animation_add_list(player, "arrow",  [3,2,0,1,2,3], 20, 0);
    PP.assets.sprite.animation_add_list(player, "hurt",  [26,27,28,29,30,32,33,34,35,36,51,52,53,54,51,52,53,54], 8, 0);
    PP.assets.sprite.animation_add_list(player, "die",  [37,38,40,41,42], 5, 0);
    PP.assets.sprite.animation_add_list(player, "interaction",  [31,32,33,35,36], 5, 0);

    PP.assets.sprite.animation_play(player, "sword");

}

function return_panning(s) {
    PP.physics.set_velocity_x(panning, -600);
    PP.physics.set_velocity_y(panning, 60);
}

function stop_panning(s) {
    PP.physics.set_velocity_x(panning, 0);
    PP.physics.set_velocity_y(panning, 0);
}

let panning_destroy = true;

function destroy_panning(s) {
   panning_destroy = false;
   PP.camera.start_follow(s, s.myplayer, 0, 220);
}

function manage_player_update(s, player) {

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.G)) {
        console.log ("x = " + player.geometry.x)
    }
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.H)) {
        console.log ("y = " + player.geometry.y)
    }

    if (player.geometry.x > 4900 && player.geometry.x < 11999) {
        spawn = 2;
        console.log(spawn);
    } if (player.geometry.x > 12000) {
        spawn = 3;
    }

    // Funzione chiamata ad ogni frame dalla update()

    // Creo una variabile che conterra' l'animazione futura
    // per poter verificare se cambia dalla attuale
    let next_anim = curr_anim;

    // Movimento: destra
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.D)) {
        PP.physics.set_velocity_x(player, player_speed);
        next_anim = "run";
    }
    // Movimento: sinistra
    else if(PP.interactive.kb.is_key_down(s, PP.key_codes.A)) {
        PP.physics.set_velocity_x(player, -player_speed);
        next_anim = "run";
    }
    // Movimento: nessuno
    else {
        
        if (shockwave_disabled == true){
            PP.physics.set_velocity_x(player, 0);
            next_anim = "stop";
        }
        if (shockwave_disabled == false){
            PP.physics.set_velocity_x(player, 0);
            next_anim = "stop-sword";
        }
    }

   

    if (health == 0){
        console.log(health);
        next_anim = "die";
        PP.physics.set_velocity_x(player, 0);
        PP.physics.set_velocity_y(player, 0);
    }
    
    if (verifica_floor == true || verifica_platform == true ) {
    
        if(PP.interactive.kb.is_key_down(s, PP.key_codes.SPACE) || PP.interactive.kb.is_key_down(s, PP.key_codes.W)) {
            PP.physics.set_velocity_y(player, -jump_init_speed);
            // Reset del flag a false quando il player è su una piattaforma
            verifica_floor = false;
            verifica_platform = false;
            
        }
    }


    // Animazioni di salto gestite in base alla velocità verticale
    if(PP.physics.get_velocity_y(player) < 0 && verifica_platform == false) {
        next_anim = "jump_up";
    }
    else if(PP.physics.get_velocity_y(player) > 0 && verifica_platform == false) {
       next_anim = "jump_down";
    }
    // Nota: non gestisco il caso == 0, perche' in quel caso l'animazione
    // e' quella del movimento scelta prima. 

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.L) && 
        PP.interactive.kb.is_key_up(s, PP.key_codes.D ) && PP.interactive.kb.is_key_up(s, PP.key_codes.A) &&
        shockwave_disabled == false) {
        next_anim = "sword";
    }

    if (PP.interactive.kb.is_key_down(s, PP.key_codes.K) && n_arrow > 0 && bow_disabled == false) {
        next_anim = "arrow";
    }
    
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        next_anim = "interaction";
    }

    // Verifica animazione scelta:
    // - se e' uguale a quella attuale, non faccio niente
    // - se e' cambiata, la applico e aggiorno curr_anim
   if(next_anim != curr_anim) {
       PP.assets.sprite.animation_play(player, next_anim);
        curr_anim = next_anim;
    }

    // Specchiare il giocatore
    if (PP.physics.get_velocity_x(player) < 0) {
        player.geometry.flip_x = true;
    }
    else if (PP.physics.get_velocity_x(player) > 0) {
        player.geometry.flip_x = false;
    }


    // Movimento camera in parkour
    let c = 480;
    if (player.geometry.x > c*6 && player.geometry.x <= c*7 && player.geometry.y > 170 && player.geometry.y < 170+c*5){
        let offset_y = 55 + (200-55) * (c*7 - player.geometry.x) / (c);
        PP.camera.start_follow(s, player, 0, offset_y);
    }
    else if(player.geometry.x > c*7 && player.geometry.y > 170 && player.geometry.y < 170+c*5){
        PP.camera.start_follow(s, player, 0, 55);
    }
    else if (player.geometry.x >= c*2 && player.geometry.x < c*3 && player.geometry.y > 170+c*4){
        let offset_y = 55 + (200-55) * (c*3 - (player.geometry.x)) / (-c) + (200-55);
        PP.camera.start_follow(s, player, 0, offset_y);
    }
    else if (player.geometry.x < c*2 && player.geometry.y > 170+c*4){
        PP.camera.start_follow(s, player, 0, 55);
    }
    else if (player.geometry.x > c*10 && player.geometry.x <= c*11 && player.geometry.y > 170+c*6){
        let offset_y = 55 + (200-55) * (c*11 - player.geometry.x) / (c);
        PP.camera.start_follow(s, player, 0, offset_y);
    }
    else if (player.geometry.x >= c*26 && player.geometry.x < c*27 && player.geometry.y > 170+c*6){
        let offset_y = 55 + (200-55) * (c*27 - (player.geometry.x)) / (-c) + (200-55);
        PP.camera.start_follow(s, player, 0, offset_y);
    }
    else if (player.geometry.x > c*11 && player.geometry.x < c*26 && player.geometry.y > 170+c*6){
        PP.camera.start_follow(s, player, 0, 55);
    }


     // Movimento camera Boss Fight
     if (player.geometry.x > 13300 && player.geometry.x < 14000 && panning_destroy == true){

        if (panning_verify == true) {
            panning = PP.assets.image.add(s, img_arrow, player.geometry.x, player.geometry.y, 0.5, 0.5); 
            panning.geometry.scale_x = 0.00001;
            panning.geometry.scale_y = 0.00001;

            PP.physics.add(s, panning, PP.physics.type.DYNAMIC);
            //PP.physics.set_rotation(arrow, 360);
            PP.physics.set_allow_gravity(panning, false);
            PP.physics.set_velocity_x(panning, 700);
            PP.physics.set_velocity_y(panning, -60);
            PP.camera.start_follow(s, panning, 0, 200);
            panning_verify = false;

            PP.timers.add_timer(s, 6000, return_panning, false);

            PP.timers.add_timer(s, 4000, stop_panning, false);

            s.myplayer = player;

            PP.timers.add_timer(s, 10000, destroy_panning, false);
            }
        }

    }


function manage_player_weapon(s, player) {
    
    // Arma corpo a corpo
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.L ) &&
        PP.interactive.kb.is_key_up(s, PP.key_codes.D ) && PP.interactive.kb.is_key_up(s, PP.key_codes.A) &&
        shockwave_disabled == false) {
        
        // Stato iniziale dell'arma (default: distrutta/non visibile)
        if (shockwave_return==false) {
            
            // Impostazione posizione iniziale e velocità arma
            let distanza = -20;
            let vel = 180;
            // Specchio direzione arma in base alla direzione del player(default: dx)
            if(player.geometry.flip_x) {    // == true
                distanza    = - distanza;
                vel         = - vel;
                
            }
                    //shockwave = PP.assets.image.add(s, img_arrow, player.geometry.x + distanza, player.geometry.y - 70, 0.5, 0.5);

                    shockwave = PP.assets.sprite.add(s, img_shockwave, player.geometry.x+distanza, player.geometry.y - 70, 0.5, 0.5);
                    PP.assets.sprite.animation_add_list(shockwave, "hit", [0,,0,0,1,2,3,4,5,0], 15, 0); 
                    PP.assets.sprite.animation_play(shockwave, "hit");
                  
                    if(player.geometry.flip_x) { 
                        shockwave.geometry.flip_x = true;
                    }

                    PP.physics.add(s, shockwave, PP.physics.type.DYNAMIC);
                    PP.physics.set_allow_gravity(shockwave, false);

                    PP.physics.set_velocity_x(shockwave, vel);

                    // Richiamo della funzione per distruggere gli oggetti "nemici"
                    PP.physics.add_overlap_f(s, shockwave, guard_01, hit_enemy)
                    PP.physics.add_overlap_f(s, shockwave, guard_02, hit_enemy)
                    PP.physics.add_overlap_f(s, shockwave, guard_03, hit_enemy)
                    PP.physics.add_overlap_f(s, shockwave, guard_04, hit_enemy)
        
                    PP.physics.add_overlap_f(s, shockwave, lancer_01, hit_lancer)
                    PP.physics.add_collider_f(s, shockwave, lancer2, hit_lancer);
                    PP.physics.add_collider_f(s, shockwave, lancer3, hit_lancer);
                    PP.physics.add_collider_f(s, shockwave, lancer4, hit_lancer);
        
                    s.thisplayer = player;
                    PP.physics.add_overlap_f(s, shockwave, boss, hit_enemy_boss);
                    shockwave_return = true;
        }

    // Distruzione arma dopo l'utilizzo (shockwave_return = true;)
    } else  if (shockwave_return == true) {
        PP.assets.destroy(shockwave);
        shockwave_return=false;
        return;
    }

    
    // Arma a distranza
    if (PP.interactive.kb.is_key_down(s, PP.key_codes.K) && bow_disabled == false) {

        if(bow_disabled == true) {
            return;
        }

        if(n_arrow == 0) {
            return;
        }

        if(bow_disabled_animation == true) {
            PP.timers.add_timer(s, 300, reenable_bow_animation, false);
            return;
        }


        let offset = 70;
        let velocity = 500;
        let acceleration = 1500;

        // Specchio direzione arma in base alla direzione del player(default: dx)
        if(player.geometry.flip_x) {    // == true
            offset   = - offset;
            velocity = - velocity;
            acceleration = - acceleration;
        }

        // Creazione oggetto arma: arrow
        arrow = PP.assets.image.add(s, img_arrow,
                                player.geometry.x + offset, player.geometry.y - 70,
                                0.5, 0.5);

                                arrow.geometry.scale_x = 0.35;
                                arrow.geometry.scale_y = 0.35;

                                if(player.geometry.flip_x) {    // == true
                                    arrow.geometry.flip_x = true;
                                }
                                
        PP.physics.add(s, arrow, PP.physics.type.DYNAMIC);
        //PP.physics.set_rotation(arrow, 360);
        PP.physics.set_allow_gravity(arrow, false);
        PP.physics.set_velocity_x(arrow, velocity);
        PP.physics.set_acceleration_x(arrow, acceleration);


        // Richiamo della funzione per distruggere gli oggetti "nemici"
        PP.physics.add_collider_f(s, arrow, guard_01, hit_enemy);
        PP.physics.add_collider_f(s, arrow, guard_02, hit_enemy);
        PP.physics.add_collider_f(s, arrow, guard_03, hit_enemy);
        PP.physics.add_collider_f(s, arrow, guard_04, hit_enemy);

        PP.physics.add_collider_f(s, arrow, lancer_01, hit_lancer);
        PP.physics.add_collider_f(s, arrow, lancer2, hit_lancer);
        PP.physics.add_collider_f(s, arrow, lancer3, hit_lancer);
        PP.physics.add_collider_f(s, arrow, lancer4, hit_lancer);

        PP.physics.add_overlap_f(s, arrow, cable, hit_cable);

        s.thisplayer = player;
        PP.physics.add_collider_f(s, arrow, boss, hit_enemy_boss);

        // Variabile per animazione di "taglio" al lampadario
        position_arrow_x = arrow.geometry.x;
        position_arrow_y = arrow.geometry.y;

        bow_disabled = true;
        n_arrow--;
    
    
        // Timer 500 secondi x abilitazione arma (weapon disabled = false)
        PP.timers.add_timer(s, 1500, reenable_bow, false);
    }

}

function hit_cable(s, obj1, obj2) {
    obj2.destroyed = true;
    if (obj2.destroyed == true) {
        PP.assets.sprite.animation_play(obj2, "Cavo: rotto");
    }
    
}

function hit_enemy(s, obj1, obj2) {
    console.log (obj2);
    // Se lo arrow colpisce il nemico, distruggo entrambi
    PP.assets.destroy(obj1);
    //PP.assets.destroy(obj2);
    obj2.destroyed = true;
    if (obj2.destroyed == true) {
        PP.assets.sprite.animation_play(obj2, "die");
        console.log ("Sono morto");
    }
    
}

function hit_lancer(s, obj1, obj2) {
    //console.log (obj2);
    // Se lo arrow colpisce il nemico, distruggo entrambi
    PP.assets.destroy(obj1);
    //PP.assets.destroy(obj2);
    obj2.destroyed = true;
    if (obj2.destroyed == true) {
        PP.assets.sprite.animation_play(obj2, "die");
    }
    
}



let counter = 0

function hit_enemy_boss(s, obj1, obj2) {
    console.log (obj2);

    counter++;
    PP.assets.destroy(obj1);

    if (counter <= 2) {
    PP.physics.set_velocity_x(obj2, 100);
    PP.physics.set_velocity_y(obj2, -600);
    }

    if (counter > 2) {
        PP.assets.destroy(obj1);
        PP.assets.sprite.animation_play(obj2, "die");
        PP.physics.set_velocity_x(obj2, 0);
        //PP.assets.destroy(obj2);
        obj2.destroyed = true;
        flint3 = PP.assets.image.add(s, img_icon_flint, obj2.geometry.x, obj2.geometry.y-100, 0, 0);
        PP.physics.add(s, flint3, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, s.thisplayer, flint3, get_score);
    
    }

    // Se lo arrow colpisce il nemico, distruggo entrambi
    
}