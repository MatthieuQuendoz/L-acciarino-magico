let img_wood_panel_01;
let img_player_icon;

let ss_counter_hearth;
let ss_counter_flint;
let ss_counter_arrow;

let wood_panel_01;
let player_icon;

let counter_hearth;
let counter_flint;
let counter_arrow;

let txt_score;
let player_health;

let health;
let score;
let n_arrow;

function preload_HUD (s){

    //img_wood_panel_01 = PP.assets.image.load(s, "assets/hud/wood_panel.png");
    //img_player_icon = PP.assets.image.load(s, "assets/hud/crown.png");

    ss_counter_hearth = PP.assets.sprite.load_spritesheet(s, "assets/hud/ss_counter_hearth.png", 347, 58);
    ss_counter_flint = PP.assets.sprite.load_spritesheet(s, "assets/hud/ss_counter_flint.png", 171, 51);
    ss_counter_arrow = PP.assets.sprite.load_spritesheet(s, "assets/hud/ss_counter_arrow.png", 85, 51);

    /*
    DIMENSIONI vecchie
    - Corona 95x100
    - Cuore 55x50
    - Pietra focaia 30x35
    - Bottone menu pausa 100x100
    */

}

function create_HUD (s){

    // Variabili x HUD
    health = 3;
    score = 0;
    n_arrow = 0;
    
    // Creazione counter cuori
    counter_hearth = PP.assets.sprite.add(s, ss_counter_hearth, 50, 50, 0, 0);
    //PP.physics.add(s, counter_arrow, PP.physics.type.STATIC); perchè fisica?
    counter_hearth.tile_geometry.scroll_factor_x = 0;
    counter_hearth.tile_geometry.scroll_factor_y = 0;

    PP.assets.sprite.animation_add(counter_hearth, "hearth: 5", 5, 5, 1, 0); 
    PP.assets.sprite.animation_add(counter_hearth, "hearth: 4", 4, 4, 1, 0);
    PP.assets.sprite.animation_add(counter_hearth, "hearth: 3", 3, 3, 1, 0); 
    PP.assets.sprite.animation_add(counter_hearth, "hearth: 2", 2, 2, 1, 0);
    PP.assets.sprite.animation_add(counter_hearth, "hearth: 1", 1, 1, 1, 0);
    PP.assets.sprite.animation_add(counter_hearth, "hearth: 0", 0, 0, 1, 0);
    PP.assets.sprite.animation_play(counter_hearth, "hearth: 0");
    

    // Creazione counter pietra focaia
    counter_flint = PP.assets.sprite.add(s, ss_counter_flint, 640, 50, 0.5, 0);
    //PP.physics.add(s, counter_arrow, PP.physics.type.STATIC); perchè fisica?
    counter_flint.tile_geometry.scroll_factor_x = 0;
    counter_flint.tile_geometry.scroll_factor_y = 0;

    PP.assets.sprite.animation_add(counter_flint, "flint: 3", 3, 3, 1, 0); 
    PP.assets.sprite.animation_add(counter_flint, "flint: 2", 2, 2, 1, 0);
    PP.assets.sprite.animation_add(counter_flint, "flint: 1", 1, 1, 1, 0);
    PP.assets.sprite.animation_add(counter_flint, "flint: 0", 0, 0, 1, 0);
    PP.assets.sprite.animation_play(counter_flint, "flint: 0");


    // Creazione counter frecce
    counter_arrow = PP.assets.sprite.add(s, ss_counter_arrow, 1230, 50, 1, 0);
    //PP.physics.add(s, counter_arrow, PP.physics.type.STATIC); perchè fisica?
    counter_arrow.tile_geometry.scroll_factor_x = 0;
    counter_arrow.tile_geometry.scroll_factor_y = 0;

    PP.assets.sprite.animation_add(counter_arrow, "arrow: 5", 5, 5, 1, 0); 
    PP.assets.sprite.animation_add(counter_arrow, "arrow: 4", 4, 4, 1, 0); 
    PP.assets.sprite.animation_add(counter_arrow, "arrow: 3", 3, 3, 1, 0); 
    PP.assets.sprite.animation_add(counter_arrow, "arrow: 2", 2, 2, 1, 0);
    PP.assets.sprite.animation_add(counter_arrow, "arrow: 1", 1, 1, 1, 0);
    PP.assets.sprite.animation_add(counter_arrow, "arrow: 0", 0, 0, 1, 0);
    PP.assets.sprite.animation_play(counter_arrow, "arrow: 3");

    /*
    // Panello legno 
    wood_panel_01 = PP.assets.image.add(s, img_wood_panel_01, -20, 30, 0, 0);

    wood_panel_01.geometry.scale_x = 1.1;
    wood_panel_01.tile_geometry.scroll_factor_x = 0;
    wood_panel_01.tile_geometry.scroll_factor_y = 0;
    
    // Icona player
    player_icon = PP.assets.image.add(s, img_player_icon, 50, 55, 0, 0);

    player_icon.geometry.scale_x = 0.9;
    player_icon.geometry.scale_y = 0.9;

    player_icon.tile_geometry.scroll_factor_x = 0;
    player_icon.tile_geometry.scroll_factor_y = 0;
   
    */

}


function update_HUD (s){
    
    // Gestione ss_counter_hearth
    if (health == 5) {
        PP.assets.sprite.animation_stop(counter_hearth, "hearth: 0");
        PP.assets.sprite.animation_play(counter_hearth, "hearth: 5");    
    }

    if (health == 4) {
        PP.assets.sprite.animation_stop(counter_hearth, "hearth: 5");
        PP.assets.sprite.animation_play(counter_hearth, "hearth: 4");    
    }

    if (health == 3) {
        PP.assets.sprite.animation_stop(counter_hearth, "hearth: 4");
        PP.assets.sprite.animation_play(counter_hearth, "hearth: 3");    
    }

    if (health == 2) {
        PP.assets.sprite.animation_stop(counter_hearth, "hearth: 3");
        PP.assets.sprite.animation_play(counter_hearth, "hearth: 2");
    }

    if (health == 1) {
        PP.assets.sprite.animation_stop(counter_hearth, "hearth: 2");
        PP.assets.sprite.animation_play(counter_hearth, "hearth: 1");
    }
    
    if (health == 0) {
        PP.assets.sprite.animation_stop(counter_hearth, "hearth: 1");
        PP.assets.sprite.animation_play(counter_hearth, "hearth: 0");
    }

    //console.log ("Ecco la mia vita: " + health);

    // Gestione ss_counter_flint
    if (score == 3) {
        PP.assets.sprite.animation_stop(counter_flint, "flint: 0");
        PP.assets.sprite.animation_play(counter_flint, "flint: 3");    
    }

    if (score == 2) {
        PP.assets.sprite.animation_stop(counter_flint, "flint: 3");
        PP.assets.sprite.animation_play(counter_flint, "flint: 2");
    }

    if (score == 1) {
        PP.assets.sprite.animation_stop(counter_flint, "flint: 2");
        PP.assets.sprite.animation_play(counter_flint, "flint: 1");
    }
    
    if (score == 0) {
        PP.assets.sprite.animation_stop(counter_flint, "flint: 1");
        PP.assets.sprite.animation_play(counter_flint, "flint: 0");
    }

    //console.log ("Ecco il mio score: " + score);


    // Gestione ss_counter_arrow
    if (n_arrow == 5) {
        PP.assets.sprite.animation_stop(counter_arrow, "arrow: 0");
        PP.assets.sprite.animation_play(counter_arrow, "arrow: 5");    
    }

    if (n_arrow == 4) {
        PP.assets.sprite.animation_stop(counter_arrow, "arrow: 5");
        PP.assets.sprite.animation_play(counter_arrow, "arrow: 4");    
    }

    if (n_arrow == 3) {
        PP.assets.sprite.animation_stop(counter_arrow, "arrow: 4");
        PP.assets.sprite.animation_play(counter_arrow, "arrow: 3");    
    }

    if (n_arrow == 2) {
        PP.assets.sprite.animation_stop(counter_arrow, "arrow: 3");
        PP.assets.sprite.animation_play(counter_arrow, "arrow: 2");
    }

    if (n_arrow == 1) {
        PP.assets.sprite.animation_stop(counter_arrow, "arrow: 2");
        PP.assets.sprite.animation_play(counter_arrow, "arrow: 1");
    }
    
    if (n_arrow == 0) {
        PP.assets.sprite.animation_stop(counter_arrow, "arrow: 1");
        PP.assets.sprite.animation_play(counter_arrow, "arrow: 0");
    }

    //console.log ("Ecco la mie frecce: " + n_arrow);

}

