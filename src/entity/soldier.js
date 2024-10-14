let ss_soldier;
let soldier;
let get_soldier = false;

function preload_soldier(s) {
    
    // Caricamento assets grafici
    ss_soldier     = PP.assets.sprite.load_spritesheet(s, "assets/entities/ss_soldier.png", 596, 596);

}

let temp = false;
function timer_gamewin(s) {
    temp = true;
}

function create_soldier(s, player) {

    // Creazione chest
    soldier = PP.assets.sprite.add(s, ss_soldier, 18250, 4170, 0.5, 1);
    PP.physics.add(s, soldier, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, soldier, free_soldier);
    PP.physics.set_collision_rectangle(soldier, 180, 200, 230, 240);
    soldier.geometry.flip_x = true;


    PP.assets.sprite.animation_add(soldier, "Soldato: stuck", 0, 0, 1, 0); 
    PP.assets.sprite.animation_add(soldier, "Soldato: free", 1, 2, 2, 0);
    PP.assets.sprite.animation_play(soldier, "Soldato: stuck");

}

function free_soldier(s, player) {

    if(PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {

        if (get_soldier == true) {
            PP.timers.add_timer(s, 1500, timer_gamewin, false);
            console.log ("Soldato: free");
        }
        get_soldier = true;
        PP.assets.sprite.animation_stop(soldier, "Soldato: stuck");
        PP.assets.sprite.animation_play(soldier, "Soldato: free");
        
    }

}
function gotogamewin(s) {
    if (temp == true && score > 2){
        PP.scenes.start("game_win_2");
    } else if (temp == true && score <= 2){
        PP.scenes.start("game_win");
    }
}
