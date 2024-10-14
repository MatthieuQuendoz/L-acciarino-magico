let img_boss;
let boss;
let img_fireball
let fireball

function preload_boss(s) {
    // Caricamento assets grafici
    img_fireball = PP.assets.sprite.load_spritesheet(s, "assets/entities/SS_fireball.png", 50, 50);
    img_boss = PP.assets.sprite.load_spritesheet(s, "assets/entities/SS_boss.png", 161, 126);
}

let t = false;
function timer_gameover(s) {
    t = true;
}



// Modifica variabile "health"
function get_damage(s) {

    if (player_immunity == true || counter > 2)  {
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
    PP.timers.add_timer(s, 1500, reenable_immunity, false);

    //PP.assets.destroy(obj1);
    
}

function reenable_immunity(s, player) {
  player_immunity = false;

}

function create_boss(s, player, floor1, floor2, floor4) {

    boss = PP.assets.sprite.add(s, img_boss, 16400, 3800, 0.5, 1);
    boss.geometry.scale_x = 1.6;
    boss.geometry.scale_y = 1.6;
    
    //PP.assets.sprite.animation_add(boss, "attack", 0, 8, 2, 1);
    PP.assets.sprite.animation_add_list(boss, "attack", [0,1,2,3,2,3,5,6,5,6,7,8,10], 3, 0);
    PP.assets.sprite.animation_add_list(boss, "attack2", [0,1,2,3,5,6,7,8,10], 4, 0);
    PP.assets.sprite.animation_add_list(boss, "attack3", [0,1,2,3,5,6,7,8,10], 7, 0);
    PP.assets.sprite.animation_add_list(boss, "die", [16,17,18,20,21,22,23,4,12,13,15], 5, 0);
   
    PP.physics.add(s, boss, PP.physics.type.DYNAMIC);
    PP.physics.add_collider(s, boss, floor_b4);
    PP.physics.add_overlap_f(s, boss, player, get_damage);
    PP.physics.set_collision_rectangle(boss, 100, 100, 30, 20);
}

function update_boss(s, player) {

    if(!boss.destroyed) {
        if(player.geometry.x > boss.geometry.x) { 
            boss.geometry.flip_x = true;
        }
        else if (player.geometry.x < boss.geometry.x) {
            boss.geometry.flip_x = false;
        }

        if (counter >0) {
            if (boss.geometry.x > 17750) {
                PP.physics.set_velocity_x(boss, -100);
         }
            if (boss.geometry.x < 16200) {
                PP.physics.set_velocity_x(boss, 100);
            } 
        }
    }

}

let weapon_enemy_disabled5;

function reenable_weapon_enemy4(s) {
    weapon_enemy_disabled4 = false;
    weapon_enemy_disabled5 = false;

}


function manage_boss_weapon(s, player) {

    if(weapon_enemy_disabled5 == true || boss.destroyed == true) {
        return;
    }
 
    let offset5 = 70;
    let velocity5 = 350;

    if(player.geometry.x > boss.geometry.x) { 
        boss.geometry.flip_x = false;
    }

    else if (player.geometry.x < boss.geometry.x) {
        boss.geometry.flip_x = true;
        offset5   = - offset5;
        velocity5 = - velocity5;
    }
    
    if(player.geometry.x+4000 < boss.geometry.x) {
        return; 
    }

    weapon_enemy_disabled5 = true;
    if (weapon_enemy_disabled5 == true) {
        PP.assets.sprite.animation_play(boss, "attack");
    }


    let time_boss = 4000;

    if (counter > 0) {
        time_boss = 2000
        PP.assets.sprite.animation_play(boss, "attack2");
    }

    if (counter > 1) {
        time_boss = 1700
        PP.assets.sprite.animation_play(boss, "attack2");
    }

    console.log(time_boss);
    
    // Timer 5000 secondi x abilitazione arma (weapon disabled = false)
    PP.timers.add_timer(s, time_boss, reenable_weapon_enemy4, false);

    if(weapon_enemy_disabled5 == true && counter == 0) {
        PP.assets.sprite.animation_play(boss, "attack");
    } 
    
    // Creazione oggetto arma: Fireball
    fireball = PP.assets.sprite.add(s, img_fireball ,boss.geometry.x + offset5, boss.geometry.y - 70, 0.5, 0.5);
    //PP.assets.sprite.animation_add(fireball, "attack", 1, 1, 1, 0);
    //PP.assets.sprite.animation_add(fireball, "die", 0, 0, 5, 1);
    PP.assets.sprite.animation_add_list(fireball, "lancia", [0,1,2,3,4,3,2,1], 5, -1);

    PP.assets.sprite.animation_play(fireball, "lancia");


    // Specchio img arma (default: dx)
    if(boss.geometry.flip_x == true) {    
        fireball.geometry.flip_x = false;
    }
    if(boss.geometry.flip_x == false) {    
        fireball.geometry.flip_x = true;
    }
            
    PP.physics.add(s, fireball, PP.physics.type.DYNAMIC);
    PP.physics.set_collision_rectangle(fireball, 50, 80, 0, 0);
    PP.physics.set_allow_gravity(fireball, true);
    PP.physics.set_velocity_x(fireball, velocity5);
    PP.physics.add_collider(s, fireball, floor_b4);
    PP.physics.add_collider(s, fireball, floor_b3);
    PP.physics.add_collider(s, fireball, floor_b2);
    PP.physics.add_collider(s, fireball, floor_b1);
    PP.physics.add_collider(s, fireball, floor_b0);
    PP.physics.add_collider_f(s, fireball, barrel, destroy_fireball);

    

    
    // Creazione collider spear-player
    PP.physics.add_overlap_f(s, fireball, player, get_damage);

    if (t == true) {
        changeScene_game_over(s);
    }
}

function destroy_fireball(s, obj1, obj2) {
    PP.assets.destroy(obj1);

 }
