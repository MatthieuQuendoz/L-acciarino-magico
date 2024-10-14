let img_chest;
let chest_01;
let chest_02;
let chest_03;
let chest_04;
let chest_05;
let chest_06;

let chest_01_opened = false;
let chest_02_opened = false;
let chest_03_opened = false;
let chest_04_opened = false;
let chest_05_opened = false;
let chest_06_opened = false;

let img_barrel;
let barrel;

let img_rock;
let img_sword;
let img_bow;

let sword_collectible;
let bow_collectible;

let rock5;
let rock6;

let hearth1;
let hearth2;
let hearth3;

let flint1;
let flint2;
let flint3;

let arrow1;
let arrow2;
let arrow3;

function preload_collectibles(s) {
    
    // Caricamento assets grafici
    img_chest     = PP.assets.sprite.load_spritesheet(s, "assets/objects/ss_chest.png", 58, 55);
    img_rock      = PP.assets.image.load(s, "assets/collectibles/coins.png", 36, 51);

    img_sword           = PP.assets.sprite.load_spritesheet(s, "assets/collectibles/ss_icon_sword.png", 75, 175);
    img_bow             = PP.assets.image.load(s, "assets/collectibles/icon_bow.png", 75, 329);
    
    img_icon_hearth    = PP.assets.image.load(s, "assets/collectibles/icon_hearth.png", 57, 53);
    img_icon_flint     = PP.assets.image.load(s, "assets/collectibles/icon_flint.png", 32, 37);
    img_icon_arrow     = PP.assets.image.load(s, "assets/collectibles/icon_arrow1.png", 85, 51);

    img_barrel    = PP.assets.image.load(s, "assets/collectibles/barrel.png", 85, 51);
}


 

function configure_chest_animations(s) {
    
    PP.assets.sprite.animation_add(chest_01, "closed", 0, 0, 10, 0); 
    PP.assets.sprite.animation_add(chest_01, "opened", 1, 5, 10, 0);
    PP.assets.sprite.animation_play(chest_01, "closed");

    PP.assets.sprite.animation_add(chest_02, "closed", 0, 0, 5, 0); 
    PP.assets.sprite.animation_add(chest_02, "opened", 1, 5, 5, 0);
    PP.assets.sprite.animation_play(chest_02, "closed");

    PP.assets.sprite.animation_add(chest_03, "closed", 0, 0, 5, 0); 
    PP.assets.sprite.animation_add(chest_03, "opened", 1, 5, 5, 0);
    PP.assets.sprite.animation_play(chest_03, "closed");

    PP.assets.sprite.animation_add(chest_04, "closed", 0, 0, 5, 0); 
    PP.assets.sprite.animation_add(chest_04, "opened", 1, 5, 5, 0);
    PP.assets.sprite.animation_play(chest_04, "closed");

    PP.assets.sprite.animation_add(chest_05, "closed", 0, 0, 5, 0); 
    PP.assets.sprite.animation_add(chest_05, "opened", 1, 5, 5, 0);
    PP.assets.sprite.animation_play(chest_05, "closed");

    PP.assets.sprite.animation_add(chest_06, "closed", 0, 0, 5, 0); 
    PP.assets.sprite.animation_add(chest_06, "opened", 1, 5, 5, 0);
    PP.assets.sprite.animation_play(chest_06, "closed");
    
}

function get_health (s, obj1, obj2) {
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        if (health < 5) {
            health = health + 1;
            PP.assets.destroy(obj2);
        } else {
            console.log("Salute massima raggiunta");
        }
    }
}

function get_score (s, obj1, obj2) {
    /*
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        score = score + 1;
        PP.assets.destroy(obj2);
    }
    */
        score = score + 1;
        PP.assets.destroy(obj2);
}

function get_sword (s, obj1, obj2) {
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        console.log ("Hai ottenuto spada");
        shockwave_disabled = false;
        PP.assets.destroy(obj2);
    }
    
}

function get_bow (s, obj1, obj2) {
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        console.log ("Hai ottenuto arco");
        bow_disabled = false;
        PP.assets.destroy(obj2);
    }
    
}

function get_arrow (s, obj1, obj2) {
    if(PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {
        n_arrow = 3;
        PP.assets.destroy(obj2);
    }
}

function create_collectibles(s, player, fireball) {

    // Creazione chest
    chest_01 = PP.assets.sprite.add(s, img_chest, 1250, 640, 0.5, 1);
    PP.physics.add(s, chest_01, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, chest_01, open_chest_01);
    PP.physics.set_collision_rectangle(chest_01, 140, 103, -37.5, -48);
    chest_01.geometry.scale_x = 3.5;
    chest_01.geometry.scale_y = 3.5;
    
    chest_02 = PP.assets.sprite.add(s, img_chest, 5450, 2083, 0.5, 1);
    PP.physics.add(s, chest_02, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, chest_02, open_chest_02);
    PP.physics.set_collision_rectangle(chest_02, 140, 103, -37.5, -48);
    chest_02.geometry.scale_x = 3.5;
    chest_02.geometry.scale_y = 3.5;

    chest_03 = PP.assets.sprite.add(s, img_chest, 5605, 2083, 0.5, 1);
    PP.physics.add(s, chest_03, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, chest_03, open_chest_03);
    PP.physics.set_collision_rectangle(chest_03, 140, 103, -37.5, -48);
    chest_03.geometry.scale_x = 3.5;
    chest_03.geometry.scale_y = 3.5;

    chest_04 = PP.assets.sprite.add(s, img_chest, 1317, 3529, 0.5, 1);
    PP.physics.add(s, chest_04, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, chest_04, open_chest_04);
    PP.physics.set_collision_rectangle(chest_04, 140, 103, -37.5, -48);
    chest_04.geometry.scale_x = 3.5;
    chest_04.geometry.scale_y = 3.5;

    chest_05 = PP.assets.sprite.add(s, img_chest, 3500, 4480, 0.5, 1);
    PP.physics.add(s, chest_05, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, chest_05, open_chest_05);
    PP.physics.set_collision_rectangle(chest_05, 140, 103, -37.5, -48);
    chest_05.geometry.scale_x = 3.5;
    chest_05.geometry.scale_y = 3.5;

    chest_06 = PP.assets.sprite.add(s, img_chest, 13000, 4480, 0.5, 1);
    PP.physics.add(s, chest_06, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, chest_06, open_chest_06);
    PP.physics.set_collision_rectangle(chest_06, 140, 103, -37.5, -48);
    chest_06.geometry.scale_x = 3.5;
    chest_06.geometry.scale_y = 3.5;

    flint2 = PP.assets.image.add(s, img_icon_flint, 10500, 400+480*8+480/4*3, 0, 0);
    PP.physics.add(s, flint2, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, flint2, get_score);

    barrel = PP.assets.image.add(s, img_barrel, 13700, 4500, 0.5, 1);
    PP.physics.add(s, barrel, PP.physics.type.STATIC);
    barrel.geometry.scale_x = 0.2;
    barrel.geometry.scale_y = 0.2;
    PP.physics.set_collision_rectangle(barrel, 130, 130, 305, 680);
    PP.physics.add_collider(s, player, barrel);


    // Creazione collezionabili
    /*
    hearth2 = PP.assets.image.add(s, img_icon_hearth, 650, 610, 0.5, 1);
    PP.physics.add(s, hearth2, PP.physics.type.STATIC);
    PP.physics.add_overlap_f(s, player, hearth2, get_health);

    flint1 = PP.assets.image.add(s, img_icon_flint, chest_04.geometry.x, 3450, 0.5, 1);
        PP.physics.add(s, flint1, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, flint1, get_score);

    */
    

}

function open_chest_01(s, player) {

    if(PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {

        if (chest_01_opened==true) {
            console.log ("Chest_01: opened");
            return;
        }

        chest_01_opened = true;
        PP.assets.sprite.animation_stop(chest_01, "closed");
        PP.assets.sprite.animation_play(chest_01, "opened");

        sword_collectible = PP.assets.sprite.add(s, img_sword, chest_01.geometry.x+3, 570, 0.5, 1);
        PP.physics.add(s, sword_collectible, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, sword_collectible, get_sword);
        PP.physics.set_collision_rectangle(sword_collectible, 33, 100, 20, 75);
        sword_collectible.geometry.scale_x = 0.6;
        sword_collectible.geometry.scale_y = 0.6;

        PP.assets.sprite.animation_add_list(sword_collectible, "rotation", [0,1,2,3, 2,1,0, 1,2,3, 2,1,0], 7, 0); 
        PP.assets.sprite.animation_play(sword_collectible, "rotation");
        
    }

}

function open_chest_02(s, player) {

    if(PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {

        if (chest_02_opened==true) {
            console.log ("Chest_02: opened");
            return;
        }

        chest_02_opened = true;
        PP.assets.sprite.animation_stop(chest_02, "closed");
        PP.assets.sprite.animation_play(chest_02, "opened");

        bow_collectible = PP.assets.image.add(s, img_bow, chest_02.geometry.x+25, 2000, 0.5, 1);
        PP.physics.add(s, bow_collectible, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, bow_collectible, get_bow);
        PP.physics.set_collision_rectangle(bow_collectible, 55, 90, -15, 240);
        bow_collectible.geometry.scale_x = 0.3;
        bow_collectible.geometry.scale_y = 0.3;
        bow_collectible.geometry.angle = -30;

    }
}

function open_chest_03(s, player) {

    if(PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {

        if (chest_03_opened==true) {
            console.log ("Chest_03: opened");
            return;
        }

        chest_03_opened = true;
        PP.assets.sprite.animation_stop(chest_03, "closed");
        PP.assets.sprite.animation_play(chest_03, "opened");

        arrow1 = PP.assets.image.add(s, img_icon_arrow, chest_03.geometry.x+15, 2000, 0.5, 1);
        PP.physics.add(s, arrow1, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, arrow1, get_arrow);
        PP.physics.set_collision_rectangle(arrow1, 68, 51, 0, 0);

    }
}

function open_chest_04(s, player) {

    if(PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {

        if (chest_04_opened==true) {
            console.log ("Chest_04: opened");
            return;
        }

        chest_04_opened = true;
        PP.assets.sprite.animation_stop(chest_04, "closed");
        PP.assets.sprite.animation_play(chest_04, "opened");

        arrow2 = PP.assets.image.add(s, img_icon_arrow, chest_04.geometry.x+15, 3450, 0.5, 1);
        PP.physics.add(s, arrow2, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, arrow2, get_arrow);
        PP.physics.set_collision_rectangle(arrow2, 68, 51, 0, 0);

    }
}

function open_chest_05(s, player) {

    if(PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {

        if (chest_05_opened==true) {
            console.log ("Chest_05: opened");
            return;
        }

        chest_05_opened = true;
        PP.assets.sprite.animation_stop(chest_05, "closed");
        PP.assets.sprite.animation_play(chest_05, "opened");

        hearth1 = PP.assets.image.add(s, img_icon_hearth, chest_05.geometry.x+3, 4400, 0.5, 1);
        PP.physics.add(s, hearth1, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, hearth1, get_health);

    }
}

function open_chest_06(s, player) {

    if(PP.interactive.kb.is_key_down(s, PP.key_codes.E)) {

        if (chest_06_opened==true) {
            console.log ("Chest_06: opened");
            return;
        }

        chest_06_opened = true;
        PP.assets.sprite.animation_stop(chest_06, "closed");
        PP.assets.sprite.animation_play(chest_06, "opened");

        hearth2 = PP.assets.image.add(s, img_icon_hearth, chest_06.geometry.x+3, 4400, 0.5, 1);
        PP.physics.add(s, hearth2, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, hearth2, get_health);

    }
}