let guard_01_velocity = 200;

let img_guard;

let guard_01;
let guard_02;
let guard_03;
let guard_04;

function preload_guard(s) {

    // Caricamento assets grafici
    //img_guard = PP.assets.sprite.load_spritesheet(s, "assets/entities/ss_enemy.png", 72, 72);
    img_guard = PP.assets.sprite.load_spritesheet(s, "assets/entities/ss_guard.png", 174, 123);

}



// Cambio scena "game_over" tramite collisione player-guard_01
function changeScene_game_over(s) {
        PP.scenes.start("game_over");
}

// Modifica variabile "health"
function get_damage_guard(s, obj1, obj2) {

    if (!obj1.destroyed && health>0) {
        PP.assets.sprite.animation_play(obj1, "attack");
        PP.assets.sprite.animation_play(obj2, "hurt");
    }

    if (player_immunity == true || obj1.destroyed == true)  {
      
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

}

let player_immunity = false;

function reenable_immunity(s, player) {
  player_immunity = false;

}

function create_guard(s, player, floor1, floor2, floor4) {

    //NEMICI BASE
    // GUARD_01
    // Creazione nemico + fisica + velocità + collider con floor-player
    guard_01 = PP.assets.sprite.add(s, img_guard, 2000, 600, 0.5, 1);
    guard_01.geometry.scale_x = 1.3;
    guard_01.geometry.scale_y = 1.3;
    PP.physics.add(s, guard_01, PP.physics.type.DYNAMIC);
    PP.physics.set_collision_rectangle(guard_01, 60, 123, 55, 0);
    PP.physics.set_velocity_x(guard_01, guard_01_velocity);
    PP.physics.add_collider(s, guard_01, floorS);
    PP.physics.add_overlap_f(s, guard_01, player, get_damage_guard);

    // Creazione animazioni walk dx/sx (defualt: dx)
    PP.assets.sprite.animation_add(guard_01, "walk", 0, 9, 10, -1);
    PP.assets.sprite.animation_add_list(guard_01, "attack", [10,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9], 9, 0);
    PP.assets.sprite.animation_add(guard_01, "die", 11, 16, 10, 0);
    PP.assets.sprite.animation_play(guard_01, "walk");


    // GUARD_02
    // Creazione nemico + fisica + velocità + collider con floor-player
    guard_02 = PP.assets.sprite.add(s, img_guard, 2900, 600, 0.5, 1);
    guard_02.geometry.scale_x = 1.3;
    guard_02.geometry.scale_y = 1.3;
    PP.physics.add(s, guard_02, PP.physics.type.DYNAMIC);
    PP.physics.set_collision_rectangle(guard_02, 60, 123, 55, 0);
    PP.physics.set_velocity_x(guard_02, guard_01_velocity);
    PP.physics.add_collider(s, guard_02, floorS);
    PP.physics.add_overlap_f(s, guard_02, player, get_damage_guard);

    // Creazione animazioni walk dx/sx (defualt: dx)
    PP.assets.sprite.animation_add(guard_02, "walk", 0, 9, 10, -1);
    PP.assets.sprite.animation_add_list(guard_02, "attack", [10,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9], 9, 0);
    PP.assets.sprite.animation_add(guard_02, "die", 11, 16, 10, 0);
    PP.assets.sprite.animation_play(guard_02, "walk");

    // GUARD_03
    // Creazione nemico + fisica + velocità + collider con floor-player
    guard_03 = PP.assets.sprite.add(s, img_guard, 4750, 2000, 0.5, 1);
    guard_03.geometry.scale_x = 1.3;
    guard_03.geometry.scale_y = 1.3;
    PP.physics.add(s, guard_03, PP.physics.type.DYNAMIC);
    PP.physics.set_collision_rectangle(guard_03, 60, 123, 55, 0);
    PP.physics.set_velocity_x(guard_03, guard_01_velocity);
    PP.physics.add_collider(s, guard_03, floor7);
    PP.physics.add_overlap_f(s, guard_03, player, get_damage_guard);

    // Creazione animazioni walk dx/sx (defualt: dx)
    PP.assets.sprite.animation_add(guard_03, "walk", 0, 9, 10, -1);
    PP.assets.sprite.animation_add_list(guard_03, "attack", [10,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9], 9, 0);
    PP.assets.sprite.animation_add(guard_03, "die", 11, 16, 10, 0);
    PP.assets.sprite.animation_play(guard_03, "walk");

    // GUARD_04
    // Creazione nemico + fisica + velocità + collider con floor-player
    guard_04 = PP.assets.sprite.add(s, img_guard, 6400, 4480, 0.5, 1);
    guard_04.geometry.scale_x = 1.3;
    guard_04.geometry.scale_y = 1.3;
    PP.physics.add(s, guard_04, PP.physics.type.DYNAMIC);
    PP.physics.set_collision_rectangle(guard_04, 60, 123, 55, 0);
    PP.physics.set_velocity_x(guard_04, guard_01_velocity);
    PP.physics.add_collider(s, guard_04, floor6);
    PP.physics.add_overlap_f(s, guard_04, player, get_damage_guard);

    // Creazione animazioni walk dx/sx (defualt: dx)
    PP.assets.sprite.animation_add(guard_04, "walk", 0, 9, 10, -1);
    PP.assets.sprite.animation_add_list(guard_04, "attack", [10,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9], 9, 0);
    PP.assets.sprite.animation_add(guard_04, "die", 11, 16, 10, 0);
    PP.assets.sprite.animation_play(guard_04, "walk");

}

function update_guard(s, player) {


    if(!guard_01.destroyed) {

        if(guard_01.geometry.x >= 2200) {
            // Hit right boundary
            PP.physics.set_velocity_x(guard_01, -100);
            guard_01.geometry.flip_x = true;
            PP.assets.sprite.animation_play(guard_01, "walk");
        }
        else if (guard_01.geometry.x <= 1800) {
            // Hit left boundary
            PP.physics.set_velocity_x(guard_01, 100);
            guard_01.geometry.flip_x = false;
            PP.assets.sprite.animation_play(guard_01, "walk");
        }
        
    }

    if(guard_01.destroyed) {
        PP.physics.set_velocity_x(guard_01, 0);
    }
    
    // GUARD_02
    if(!guard_02.destroyed) {

        if(guard_02.geometry.x >= 3300) {
            // Hit right boundary
            // console.log(guard_02.geometry.x);
            PP.physics.set_velocity_x(guard_02, -100);
            guard_02.geometry.flip_x = true;
            PP.assets.sprite.animation_play(guard_02, "walk");
        }
        else if (guard_02.geometry.x <= 3000) {
            // Hit left boundary
            PP.physics.set_velocity_x(guard_02, 100);
            guard_02.geometry.flip_x = false;
            PP.assets.sprite.animation_play(guard_02, "walk");
        }
    }

    if(guard_02.destroyed) {
        PP.physics.set_velocity_x(guard_02, 0);
    }

    // GUARD_03
    if(!guard_03.destroyed) {

        if(guard_03.geometry.x >= 5200) {
            // Hit right boundary
            PP.physics.set_velocity_x(guard_03, -100);
            guard_03.geometry.flip_x = true;
            PP.assets.sprite.animation_play(guard_03, "walk");
        }
        else if (guard_03.geometry.x <= 4680) {
            // Hit left boundary
            PP.physics.set_velocity_x(guard_03, 100);
            guard_03.geometry.flip_x = false;
            PP.assets.sprite.animation_play(guard_03, "walk");
        }
    }

    if(guard_03.destroyed) {
        PP.physics.set_velocity_x(guard_03, 0);
    }

    // GUARD_04
    if(!guard_04.destroyed) {

        if(guard_04.geometry.x >= 7150) {
            // Hit right boundary
            PP.physics.set_velocity_x(guard_04, -100);
            guard_04.geometry.flip_x = true;
            PP.assets.sprite.animation_play(guard_04, "walk");
        }
        else if (guard_04.geometry.x <= 6300) {
            // Hit left boundary
            PP.physics.set_velocity_x(guard_04, 100);
            guard_04.geometry.flip_x = false;
            PP.assets.sprite.animation_play(guard_04, "walk");
        }
    }

    if(guard_04.destroyed) {
        PP.physics.set_velocity_x(guard_04, 0);
    }


    // Update di Timer per Game Over
    if (t == true) {
        changeScene_game_over(s);
    }
}