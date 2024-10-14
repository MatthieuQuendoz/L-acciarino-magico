let img_trap_01;
let img_trap_02;

let trap_01;
let trap_02;

let verifica_trap_01 = true;
let verifica_trap_02 = true;


function preload_trap(s) {
    img_trap_01 = PP.assets.sprite.load_spritesheet(s, "assets/objects/ss_chandelier.png",  284, 227);
    img_trap_02 = PP.assets.image.load(s, "assets/objects/ramo.png",  238, 60);
}

function get_damage_trap_01(s) {

    if (player_immunity == true || verifica_trap_01 == false)  {
        return;
    }

    if (health>0) {
        health = health - 1;
    }
    
    if (health == 0) {
        console.log ("Sei morto");
        changeScene_game_over(s, obj1, obj2);
    }
    
    player_immunity = true;

    // Timer 1000 secondi x rimozione cuori (reenable_immunity = false)
    PP.timers.add_timer(s, 1000, reenable_immunity, false);
    
}

function get_damage_trap_02(s) {

    if (player_immunity == true || verifica_trap_02 == false)  {
        return;
    }

    if (health>0) {
        health = health - 1;
    }
    
    if (health == 0) {
        console.log ("Sei morto");
        changeScene_game_over(s, obj1, obj2);
    }
    
    player_immunity = true;

    // Timer 1000 secondi x rimozione cuori (reenable_immunity = false)
    PP.timers.add_timer(s, 1000, reenable_immunity, false);
    
}

function animazione_trap_01 (s, obj1, obj2) {
    PP.assets.sprite.animation_play(trap_01, "Trappola_01: rotto");
    verifica_trap_01 = false;
}


function animazione_trap_02 (s, obj1, obj2) {
    //PP.assets.sprite.animation_play(trap_02, "Trappola_02: rotto");
    verifica_trap_02 = false;
}

function create_trap(s, player) {

    // TRAPPOLA_01
    trap_01 = PP.assets.sprite.add(s, img_trap_01, 1650, 2090, 0, 0);
    trap_01.geometry.scale_x = 0.9;
    trap_01.geometry.scale_y = 0.65;
    PP.assets.sprite.animation_add(trap_01, "Trappola_01: normale", 0, 0, 1, 0); 
    PP.assets.sprite.animation_add(trap_01, "Trappola_01: rotto", 2,2, 5, 0); 
    PP.assets.sprite.animation_play(trap_01, "Trappola_01: normale"); 

    PP.physics.add(s, trap_01, PP.physics.type.DYNAMIC);
    PP.physics.set_collision_rectangle(trap_01, 284, 180, 0, 0);
    PP.physics.set_allow_gravity(trap_01, false);
    PP.physics.add_overlap_f(s, player, trap_01, get_damage_trap_01);
    PP.physics.add_collider_f(s, trap_01, floor2, animazione_trap_01);

    /*
    // TRAPPOLA_02
    trap_02 = PP.assets.image.add(s, img_trap_02, 6700, 4000, 0, 0);
    trap_02.geometry.scale_x = 0.9;
    trap_02.geometry.scale_y = 0.65;
    
    //PP.assets.sprite.animation_add(trap_02, "Trappola_02: normale", 0, 0, 1, 0); 
    //PP.assets.sprite.animation_add(trap_02, "Trappola_02: rotto", 1,2, 5, 0); 
    //PP.assets.sprite.animation_play(trap_02, "Trappola_02: normale"); 

    PP.physics.add(s, trap_02, PP.physics.type.DYNAMIC);
    PP.physics.set_allow_gravity(trap_02, false);
    PP.physics.add_overlap_f(s, player, trap_02, get_damage_trap_02);
    PP.physics.add_collider_f(s, trap_02, floor6, animazione_trap_02);
    */

}


function update_trap(s, player) {
   
    // UPDATE TRAPPOLA_01
    // Condizione di posizione per attivazione trappola
    if (player.geometry.x > 1650 && player.geometry.x < 1890 &&
        player.geometry.y > 2400 && player.geometry.y < 2600) {
        PP.physics.set_velocity_y(trap_01, 400);
        PP.physics.set_acceleration_y(trap_01, 2500);
    }

    /*
    // UPDATE TRAPPOLA_02
    // Condizione di posizione per attivazione trappola
    if (player.geometry.x > 6670 && player.geometry.x < 6950 &&
        player.geometry.y > 4000 && player.geometry.y < 4600) {
        PP.physics.set_velocity_y(trap_02, 400);
        PP.physics.set_acceleration_y(trap_02, 2500);
    }
    */

}