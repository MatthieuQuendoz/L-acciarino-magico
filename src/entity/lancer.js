let img_lancer;

let lancer_01;
let lancer2;
let lancer3;
let lancer4;

let img_spear;
let spear;
let spear2;
let spear3;
let spear4;

let timer_spear = 2000;

function preload_lancer(s) {

    // Caricamento assets grafici
    img_lancer = PP.assets.sprite.load_spritesheet(s, "assets/entities/ss_lancer.png", 296, 183);
    img_spear = PP.assets.image.load(s, "assets/entities/spear.png");

}

// Modifica variabile "health"
function get_damage_lancer(s, obj1, obj2) {
    
   if (!obj1.destroyed && health > 0) {
        PP.assets.sprite.animation_play(obj1, "lancer_01: attack");
        PP.assets.sprite.animation_play(obj2, "hurt");
   }

    if (player_immunity == true || obj1.destroyed == true)  {
        console.log("hit");
        return;
    }

    if (health>0) {
        health = health - 1;
    }
    
    if (health == 0) {
       PP.timers.add_timer(s, 1500, timer_gameover, false);
    }
    player_immunity = true;

    // Timer 1000 secondi x rimozione cuori (reenable_immunity = false)
    PP.timers.add_timer(s, 1000, reenable_immunity, false);

    //PP.assets.destroy(obj1);
}


function get_damage_spear(s, obj1, obj2) {
    
 
     if (player_immunity == true || obj1.destroyed == true)  {
         return;
     }
 
     if (health>0) {
         health = health - 1;
         PP.assets.sprite.animation_play(obj2, "hurt");
     }
     
     if (health == 0) {
        PP.timers.add_timer(s, 2000, timer_gameover, false);
     }
     
     player_immunity = true;
 
     // Timer 1000 secondi x rimozione cuori (reenable_immunity = false)
     PP.timers.add_timer(s, 1000, reenable_immunity, false);
 
     //PP.assets.destroy(obj1);
 }

function reenable_immunity(s, player) {
  player_immunity = false;

}

function create_lancer(s, player, floor1, floor2, floor4) {
    
    // Creazione nemici + fisica + collider con floor-player
    // CREAZIONE LANCER_01
    lancer_01 = PP.assets.sprite.add(s, img_lancer, 2400, 2570, 0.5, 1);
    lancer_01.geometry.scale_x = 0.9;
    lancer_01.geometry.scale_y = 0.9;
    PP.physics.add(s, lancer_01, PP.physics.type.STATIC);
    PP.physics.set_collision_rectangle(lancer_01, 87, 136, 90, 29);
    PP.physics.add_overlap_f(s, lancer_01, player, get_damage_lancer);

    PP.assets.sprite.animation_add(lancer_01, "stand", 0, 0, 40, -1);
    PP.assets.sprite.animation_add_list(lancer_01, "lancer_01: attack",  [5,6,7, 2,1,0], 10, 0);
    PP.assets.sprite.animation_add_list(lancer_01, "die",  [8,9,10,11,12], 10, 0);
    PP.assets.sprite.animation_play(lancer_01, "stand");

    // CREAZIONE LANCER_02
    lancer2 = PP.assets.sprite.add(s, img_lancer, -311, 3039, 0.5, 1);
    lancer2.geometry.scale_x = 0.9;
    lancer2.geometry.scale_y = 0.9;
    PP.physics.add(s, lancer2, PP.physics.type.STATIC);
    PP.physics.set_collision_rectangle(lancer2, 87, 136, 90, 29);
    PP.physics.add_collider(s, lancer2, floor4);
    PP.physics.add_overlap_f(s, lancer2, player, get_damage_lancer);

    PP.assets.sprite.animation_add(lancer2, "stand", 0, 0, 40, -1);
    PP.assets.sprite.animation_add_list(lancer2, "lancer_01: attack",  [5,6,7, 2,1,0], 10, 0);
    PP.assets.sprite.animation_add_list(lancer2, "die",  [8,9,10,11,12], 10, 0);
    PP.assets.sprite.animation_play(lancer2, "stand");

    // CREAZIONE LANCER_03
    lancer3 = PP.assets.sprite.add(s, img_lancer, -311, 4009, 0.5, 1);
    lancer3.geometry.scale_x = 0.9;
    lancer3.geometry.scale_y = 0.9;
    PP.physics.add(s, lancer3, PP.physics.type.STATIC);
    PP.physics.set_collision_rectangle(lancer3, 87, 136, 90, 29);
    PP.physics.add_collider(s, lancer3, floor5);
    PP.physics.add_overlap_f(s, lancer3, player, get_damage_lancer);

    PP.assets.sprite.animation_add(lancer3, "stand", 0, 0, 40, -1);
    PP.assets.sprite.animation_add_list(lancer3, "lancer_01: attack",  [5,6,7, 2,1,0], 10, 0);
    PP.assets.sprite.animation_add_list(lancer3, "die",  [8,9,10,11,12], 10, 0);
    PP.assets.sprite.animation_play(lancer3, "stand");

    // CREAZIONE LANCER_04
    lancer4 = PP.assets.sprite.add(s, img_lancer, 2700, 4120, 0.5, 1);
    lancer4.geometry.scale_x = 0.9;
    lancer4.geometry.scale_y = 0.9;
    PP.physics.add(s, lancer4, PP.physics.type.STATIC);
    PP.physics.set_collision_rectangle(lancer4, 87, 136, 90, 29);
    PP.physics.add_overlap_f(s, lancer3, player, get_damage_lancer);
    
    PP.assets.sprite.animation_add(lancer4, "stand", 0, 0, 40, -1);
    PP.assets.sprite.animation_add_list(lancer4, "lancer_01: attack",  [5,6,7, 2,1,0], 10, 0);
    PP.assets.sprite.animation_add_list(lancer4, "die",  [8,9,10,11,12], 10, 0);
    PP.assets.sprite.animation_play(lancer4, "stand");

    

}

function update_lancer(s, player) {

    // Direzione LANCER_01 verso player
    if(!lancer_01.destroyed) {
        if(player.geometry.x > lancer_01.geometry.x) { 
            lancer_01.geometry.flip_x = false;
        }
        else if (player.geometry.x < lancer_01.geometry.x) {
            lancer_01.geometry.flip_x = true;
        }
    }

    // Direzione LANCER_02 verso player
    if(!lancer2.destroyed) {
        if(player.geometry.x > lancer2.geometry.x) { 
            lancer2.geometry.flip_x = false;
        }
        else if (player.geometry.x < lancer2.geometry.x) {
            lancer2.geometry.flip_x = true;
        }
    }

    // Direzione LANCER_03 verso player
    if(!lancer3.destroyed) {
        if(player.geometry.x > lancer3.geometry.x) { 
            lancer3.geometry.flip_x = false;
        }
        else if (player.geometry.x < lancer3.geometry.x) {
            lancer3.geometry.flip_x = true;
        }
    }

    // Direzione LANCER_04 verso player
    if(!lancer4.destroyed) {
        if(player.geometry.x > lancer4.geometry.x) { 
            lancer4.geometry.flip_x = false;
        }
        else if (player.geometry.x < lancer4.geometry.x) {
            lancer4.geometry.flip_x = true;
        }
    }
}


let weapon_enemy_disabled;
let weapon_enemy_disabled2;
let weapon_enemy_disabled3;
let weapon_enemy_disabled4;

function reenable_weapon_enemy(s) {
    // Funzione che viene chiamata allo scadere del timer

    weapon_enemy_disabled = false;
    weapon_enemy_disabled2 = false;
    weapon_enemy_disabled3 = false;

}
// MANAGE LANCER_01
function manage_lancer01_weapon(s, player) {

    if(weapon_enemy_disabled == true || lancer_01.destroyed == true) {
     
        return; // Esce immediatamente dalla funzione senza eseguire
                // il codice sottostante
    }

    // Input da posizione del player
    //400 perchè la geometry x dello lancer_01 è 1000 allora ho tolto 600
   

        // Impostazione posizione iniziale e velocità arma
        let offset = 50;
        let velocity = 500;
    
        // Specchio direzione nemico e arma (default: dx)
        if(player.geometry.x > lancer_01.geometry.x) { 
            lancer_01.geometry.flip_x = false;
        }
        else if (player.geometry.x < lancer_01.geometry.x) {
            lancer_01.geometry.flip_x = true;
            offset   = - offset;
            velocity = - velocity;
        }

        if(lancer_01.geometry.x - 600 > player.geometry.x ||  player.geometry.x > 3000) {
            return; // Esce immediatamente dalla funzione senza eseguire
                    // il codice sottostante
        }

        // Disabilitazione arma
        weapon_enemy_disabled = true;
        if (weapon_enemy_disabled = true) {
            PP.assets.sprite.animation_play(lancer_01, "lancer_01: attack");
        }

        // Timer 5000 secondi x abilitazione arma (weapon disabled = false)

        PP.timers.add_timer(s, timer_spear, reenable_weapon_enemy, false);

        // Creazione oggetto arma: Lancia
        spear = PP.assets.image.add(s, img_spear,
                                lancer_01.geometry.x + offset,
                                lancer_01.geometry.y - 70,
                                0.5, 0.5);

        // Specchio img arma (default: dx)
        if(lancer_01.geometry.flip_x) {    
            spear.geometry.flip_x = true;
        }

        PP.physics.add(s, spear, PP.physics.type.DYNAMIC);
        PP.physics.set_collision_rectangle(spear, 126, 12, 0, 15);
        PP.physics.set_allow_gravity(spear, false);
        PP.physics.set_velocity_x(spear, velocity);
        PP.physics.add_overlap_f(s, spear, player, get_damage_spear);    

    }


// MANAGE LANCER_02
function manage_lancer02_weapon(s, player) {

    if(weapon_enemy_disabled2 == true || lancer2.destroyed == true) {

        return; // Esce immediatamente dalla funzione senza eseguire
                // il codice sottostante
    }

    // Input da posizione del player
    if (player.geometry.y  > 2800) {

        // Impostazione posizione iniziale e velocità arma
        let offset2 = 70;
        let velocity2 = 500;

        // Specchio direzione nemico e arma (default: dx)
        if(player.geometry.x > lancer2.geometry.x) { 
            lancer2.geometry.flip_x = false;
        }
        else if (player.geometry.x < lancer2.geometry.x) {
            lancer2.geometry.flip_x = true;
            offset2   = - offset2;
            velocity2 = - velocity2;
        }

        if(lancer2.geometry.x - 600 > player.geometry.x) {
            return; 
        }

        // Disabilitazione arma
        weapon_enemy_disabled2 = true;
        if (weapon_enemy_disabled = true) {
            PP.assets.sprite.animation_play(lancer2, "lancer_01: attack");
        }
     

        // Timer 5000 secondi x abilitazione arma (weapon disabled = false)
        PP.timers.add_timer(s, timer_spear, reenable_weapon_enemy, false);

        // Creazione oggetto arma: Lancia
        spear2 = PP.assets.image.add(s, img_spear,
                                lancer2.geometry.x + offset2,
                                lancer2.geometry.y - 70,
                                0.5, 0.5);

        // Specchio img arma (default: dx)
        if(lancer2.geometry.flip_x) {    
            spear2.geometry.flip_x = true;
        }
        
        PP.physics.add(s, spear2, PP.physics.type.DYNAMIC);
        PP.physics.set_collision_rectangle(spear2, 126, 12, 0, 15);
        PP.physics.set_allow_gravity(spear2, false);
        PP.physics.set_velocity_x(spear2, velocity2);
        PP.physics.add_overlap_f(s, spear2, player, get_damage_spear);

        if (t == true) {
            changeScene_game_over(s);
        }
    }
}

// MANAGE LANCER_03
function manage_lancer03_weapon(s, player) {

    if(weapon_enemy_disabled3 == true || lancer3.destroyed == true) {
        // Se l'arma e' disabilitata (v. timer)...
            
        return; // Esce immediatamente dalla funzione senza eseguire
                // il codice sottostante
    }
    
    // Input da posizione del player
    if (player.geometry.y  > 3800) {
    
        // Impostazione posizione iniziale e velocità arma
        let offset3 = 70;
        let velocity3 = 500;
        
        // Specchio direzione nemico e arma (default: dx)
        if(player.geometry.x > lancer3.geometry.x) { 
            lancer3.geometry.flip_x = false;
            
        }
        else if (player.geometry.x < lancer3.geometry.x) {
            lancer3.geometry.flip_x = true;
            offset3   = - offset3;
            velocity3 = - velocity3;
            
        }
    
        if(player.geometry.x > lancer3.geometry.x + 1000) {
                
            return; // Esce immediatamente dalla funzione senza eseguire
                    // il codice sottostante
        }
    
        // Disabilitazione arma
        weapon_enemy_disabled3 = true;
        if (weapon_enemy_disabled = true) {
            PP.assets.sprite.animation_play(lancer3, "lancer_01: attack");
        }
    
        // Timer 5000 secondi x abilitazione arma (weapon disabled = false)
        PP.timers.add_timer(s, timer_spear, reenable_weapon_enemy, false);
    
        // Creazione oggetto arma: Lancia
        spear3 = PP.assets.image.add(s, img_spear,
                                lancer3.geometry.x + offset3, 
                                lancer3.geometry.y - 70,
                                0.5, 0.5);

        // Specchio img arma (default: dx)
        if(lancer3.geometry.flip_x) {    
            spear3.geometry.flip_x = true;
        }
    
        PP.physics.add(s, spear3, PP.physics.type.DYNAMIC);
        PP.physics.set_collision_rectangle(spear3, 126, 12, 0, 15);
        PP.physics.set_allow_gravity(spear3, false);
        PP.physics.set_velocity_x(spear3, velocity3);
        PP.physics.add_overlap_f(s, spear3, player, get_damage_spear);

        if (t == true) {
            changeScene_game_over(s);
        }
    
    }
    
}

// MANAGE LANCER_04
function manage_lancer04_weapon(s, player) {

    if(weapon_enemy_disabled4 == true || lancer4.destroyed == true) {
        // Se l'arma e' disabilitata (v. timer)...
            
        return; // Esce immediatamente dalla funzione senza eseguire
                // il codice sottostante
    }
    
    let offset4 = 70;
    let velocity4 = 500;
      

    // Specchio direzione nemico e arma (default: dx)
    if(player.geometry.x > lancer4.geometry.x) { 
        lancer4.geometry.flip_x = false;
        
    }
    else if (player.geometry.x < lancer4.geometry.x) {
        lancer4.geometry.flip_x = true;
        offset4   = - offset4;
        velocity4 = - velocity4;
        
    }
    
    
    if(player.geometry.x > lancer4.geometry.x || player.geometry.x+700 < lancer4.geometry.x) {
                
        return; // Esce immediatamente dalla funzione senza eseguire
                    // il codice sottostante
    }
    
    // Disabilitazione arma
    weapon_enemy_disabled4 = true;
    if (weapon_enemy_disabled = true) {
        PP.assets.sprite.animation_play(lancer4, "lancer_01: attack");
    }
    
    // Timer 5000 secondi x abilitazione arma (weapon disabled = false)
    PP.timers.add_timer(s, timer_spear, reenable_weapon_enemy4, false);
    
    // Creazione oggetto arma: Lancia
    spear4 = PP.assets.image.add(s, img_spear,
                            lancer4.geometry.x + offset4, 
                            lancer4.geometry.y - 70,
                            0.5, 0.5);

    if(lancer4.geometry.flip_x) {    
        spear4.geometry.flip_x = true;
    }
            
    PP.physics.add(s, spear4, PP.physics.type.DYNAMIC);
    PP.physics.set_collision_rectangle(spear4, 126, 12, 0, 15);
    PP.physics.set_allow_gravity(spear4, false);
    PP.physics.set_velocity_x(spear4, velocity4);

    if (t == true) {
        changeScene_game_over(s);
    }
    
    // Creazione collider spear-player
    PP.physics.add_overlap_f(s, spear4, player, get_damage_spear);

 
    

}
