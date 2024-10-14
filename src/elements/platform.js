let img_platform_Lv01_01;
let img_platform_Lv02_01;
let img_platform_Lv02_02;
let img_platform_Lv02_03;

let platform_01;

let platform_R_01;
let platform_R_02;
let platform_R_03;
let platform_R_04;
let platform_R_05;
let platform_R_06;
let platform_R_07;
let platform_R_08;

let platform_M_01;

let platform_02_001;
let platform_02_002;
let platform_02_003;
let platform_02_004;
let platform_02_005;
let platform_02_006;
let platform_02_007;
let platform_02_008;
let platform_02_009;
let platform_02_010;
let platform_02_011;
let platform_02_012;
let platform_02_013;
let platform_02_014;
let platform_02_015;

let platform_C_01;
   
let verifica_platform = false;
let verifica_platform1 = false;

let verifica_platform_02_001 = 0;
let verifica_platform_02_003 = 0;

let platform_count=true;

let timing = false;

function timer_platform(s) {
    timing = true;
}


function preload_platform(s) {
    
    // Caricamento assets grafici
    img_platform_Lv01_01 = PP.assets.image.load(s, "assets/structure/platform_Lv01_01.png");
    img_platform_Lv02_01 = PP.assets.image.load(s, "assets/structure/platform_Lv02_01.png");
    img_platform_Lv02_02 = PP.assets.image.load(s, "assets/structure/platform_Lv02_02.png");
    img_platform_Lv02_03 = PP.assets.image.load(s, "assets/structure/platform_Lv02_03.png");
    ss_platform_Lv02 = PP.assets.sprite.load_spritesheet (s, "assets/structure/ss_platform_Lv02.png", 122, 58);

    
}

function configure_platform_animations(s) {
    PP.assets.sprite.animation_add(platform_02_001, "platform_02_001: normal", 0, 0, 1, 0); 
    PP.assets.sprite.animation_add(platform_02_001, "platform_02_001: destroyed", 1, 2, 10, 0); 
    PP.assets.sprite.animation_play(platform_02_001, "platform_02_001: normal");

    PP.assets.sprite.animation_add(platform_02_003, "platform_02_003: normal", 0, 0, 1, 0); 
    PP.assets.sprite.animation_add(platform_02_003, "platform_02_003: destroyed", 1, 2, 10, 0); 
    PP.assets.sprite.animation_play(platform_02_003, "platform_02_003: normal");

    PP.assets.sprite.animation_add(platform_02_005, "platform_02_005: normal", 0, 0, 1, 0); 
    PP.assets.sprite.animation_add(platform_02_005, "platform_02_005: destroyed", 1, 2, 10, 0); 
    PP.assets.sprite.animation_play(platform_02_005, "platform_02_005: normal");

    PP.assets.sprite.animation_add(platform_02_006, "platform_02_006: normal", 0, 0, 1, 0); 
    PP.assets.sprite.animation_add(platform_02_006, "platform_02_006: destroyed", 1, 2, 10, 0); 
    PP.assets.sprite.animation_play(platform_02_006, "platform_02_006: normal");

    PP.assets.sprite.animation_add(platform_02_008, "platform_02_008: normal", 0, 0, 1, 0); 
    PP.assets.sprite.animation_add(platform_02_008, "platform_02_008: destroyed", 1, 2, 10, 0); 
    PP.assets.sprite.animation_play(platform_02_008, "platform_02_008: normal");

    PP.assets.sprite.animation_add(platform_02_009, "platform_02_009: normal", 0, 0, 1, 0); 
    PP.assets.sprite.animation_add(platform_02_009, "platform_02_009: destroyed", 1, 2, 10, 0); 
    PP.assets.sprite.animation_play(platform_02_009, "platform_02_009: normal");

    PP.assets.sprite.animation_add(platform_02_011, "platform_02_011: normal", 0, 0, 1, 0); 
    PP.assets.sprite.animation_add(platform_02_011, "platform_02_011: destroyed", 1, 2, 10, 0); 
    PP.assets.sprite.animation_play(platform_02_011, "platform_02_011: normal");

    PP.assets.sprite.animation_add(platform_02_013, "platform_02_013: normal", 0, 0, 1, 0); 
    PP.assets.sprite.animation_add(platform_02_013, "platform_02_013: destroyed", 1, 2, 10, 0); 
    PP.assets.sprite.animation_play(platform_02_013, "platform_02_013: normal");

    PP.assets.sprite.animation_add(platform_02_014, "platform_02_014: normal", 0, 0, 1, 0); 
    PP.assets.sprite.animation_add(platform_02_014, "platform_02_014: destroyed", 1, 2, 10, 0); 
    PP.assets.sprite.animation_play(platform_02_014, "platform_02_014: normal");

    PP.assets.sprite.animation_add(platform_02_015, "platform_02_015: normal", 0, 0, 1, 0); 
    PP.assets.sprite.animation_add(platform_02_015, "platform_02_015: destroyed", 1, 2, 10, 0); 
    PP.assets.sprite.animation_play(platform_02_015, "platform_02_015: normal");
    
}

function collision_platform(s, player, platform) {
    if( platform.geometry.y >=  player.geometry.y) {
            verifica_platform = true;
            console.log(verifica_platform);
            
    }
}

function collision_platform2(s, player, platform) {
    if(platform.geometry.y >=  player.geometry.y) {
            verifica_platform = true;
            console.log(verifica_platform);
    }
}


function create_platform(s, player) {

    let c = 480;
    // dim piattaforma: x=240 y=50

    // PLATFORM LV_01: CASTELLO
    // PLATFORM_01_01
    platform_01 = PP.assets.image.add(s, img_platform_Lv01_01, c*7+c/4*3, 170+c, 0, 0);
    PP.physics.add(s, platform_01, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform_01, collision_platform);

    // PLATFORM_01_02
    platform_01 = PP.assets.image.add(s, img_platform_Lv01_01, c*8+c/4*3, 170+c+c/2, 0, 0);
    PP.physics.add(s, platform_01, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform_01, collision_platform);

    // PLATFORM_01_03
    platform_01 = PP.assets.image.add(s, img_platform_Lv01_01, c*8, 170+c*2, 0, 0);
    PP.physics.add(s, platform_01, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform_01, collision_platform);

    // PLATFORM_01_04
    platform_01 = PP.assets.image.add(s, img_platform_Lv01_01, c*7, 170+c*2+c/2, 0, 0);
    PP.physics.add(s, platform_01, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform_01, collision_platform);

    // PLATFORM_01_05
    platform_01 = PP.assets.image.add(s, img_platform_Lv01_01, c*7+c/2, 170+c*3, 0, 0);
    PP.physics.add(s, platform_01, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform_01, collision_platform);

    // PLATFORM_01_06
    platform_01 = PP.assets.image.add(s, img_platform_Lv01_01, c*8, 170+c*3+c/2, 0, 0);
    PP.physics.add(s, platform_01, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform_01, collision_platform);

    // PLATFORM_01_07
    platform_01 = PP.assets.image.add(s, img_platform_Lv01_01, c*8, 170+c*4+c/2, 0, 0);
    PP.physics.add(s, platform_01, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform_01, collision_platform);

    // PLATFORM_01_07.5
    platform_01 = PP.assets.image.add(s, img_platform_Lv01_01, c*7+c/2, 170+c*4+c/4*3, 0, 0);
    PP.physics.add(s, platform_01, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform_01, collision_platform);

    // PLATFORM_01_08
    platform_01 = PP.assets.image.add(s, img_platform_Lv01_01, c, 170+c*6+c/2, 0, 0);
    PP.physics.add(s, platform_01, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform_01, collision_platform);

    // PLATFORM_01_09
    platform_01 = PP.assets.image.add(s, img_platform_Lv01_01, c+c/2, 170+c*8+c/2, 0, 0);
    PP.physics.add(s, platform_01, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform_01, collision_platform);

    // PLATFORM_01_10
    platform_01 = PP.assets.image.add(s, img_platform_Lv01_01, c*5+c/4*2, 170+c*8+c/5, 0, 0);
    PP.physics.add(s, platform_01, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform_01, collision_platform);


    // PIATTAFORME ROTANTI
    // PLATFORM_R_01
    platform_R_01 = PP.assets.image.add(s, img_platform_Lv01_01, c/4, 170+c*5+c/2, 0, 0);
    PP.physics.add(s, platform_R_01, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_R_01, true);
    PP.physics.set_allow_gravity(platform_R_01, false);
    PP.physics.add_collider_f(s, player, platform_R_01, collision_platform);
    PP.physics.set_velocity_x(platform_R_01, 0);
    PP.physics.set_velocity_y(platform_R_01, +100);

    // PLATFORM_R_02
    platform_R_02 = PP.assets.image.add(s, img_platform_Lv01_01, c/8*7, 170+c*6, 0, 0);
    PP.physics.add(s, platform_R_02, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_R_02, true);
    PP.physics.set_allow_gravity(platform_R_02, false);
    PP.physics.add_collider_f(s, player, platform_R_02, collision_platform);
    PP.physics.set_velocity_x(platform_R_02, +100);
    PP.physics.set_velocity_y(platform_R_02, 0);

    // PLATFORM_R_03
    platform_R_03 = PP.assets.image.add(s, img_platform_Lv01_01, c+c/2, 170+c*5+c/2, 0, 0);
    PP.physics.add(s, platform_R_03, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_R_03, true);
    PP.physics.set_allow_gravity(platform_R_03, false);
    PP.physics.add_collider_f(s, player, platform_R_03, collision_platform);
    PP.physics.set_velocity_x(platform_R_03, 0);
    PP.physics.set_velocity_y(platform_R_03, -100);

    // PLATFORM_R_04
    platform_R_04 = PP.assets.image.add(s, img_platform_Lv01_01, c/8*7, 170+c*5, 0, 0);
    PP.physics.add(s, platform_R_04, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_R_04, true);
    PP.physics.set_allow_gravity(platform_R_04, false);
    PP.physics.add_collider_f(s, player, platform_R_04, collision_platform);
    PP.physics.set_velocity_x(platform_R_04, -100);
    PP.physics.set_velocity_y(platform_R_04, 0);

    // PLATFORM_R_05
    platform_R_05 = PP.assets.image.add(s, img_platform_Lv01_01, c/4, 170+c*7+c/2, 0, 0);
    PP.physics.add(s, platform_R_05, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_R_05, true);
    PP.physics.set_allow_gravity(platform_R_05, false);
    PP.physics.add_collider_f(s, player, platform_R_05, collision_platform);
    PP.physics.set_velocity_x(platform_R_05, 0);
    PP.physics.set_velocity_y(platform_R_05, +100);

    // PLATFORM_R_06
    platform_R_06 = PP.assets.image.add(s, img_platform_Lv01_01, c/8*7, 170+c*8, 0, 0);
    PP.physics.add(s, platform_R_06, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_R_06, true);
    PP.physics.set_allow_gravity(platform_R_06, false);
    PP.physics.add_collider_f(s, player, platform_R_06, collision_platform);
    PP.physics.set_velocity_x(platform_R_06, +100);
    PP.physics.set_velocity_y(platform_R_06, 0);

    // PLATFORM_R_07
    platform_R_07 = PP.assets.image.add(s, img_platform_Lv01_01, c+c/2, 170+c*7+c/2, 0, 0);
    PP.physics.add(s, platform_R_07, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_R_07, true);
    PP.physics.set_allow_gravity(platform_R_07, false);
    PP.physics.add_collider_f(s, player, platform_R_07, collision_platform);
    PP.physics.set_velocity_x(platform_R_07, 0);
    PP.physics.set_velocity_y(platform_R_07, -100);

    // PLATFORM_R_08
    platform_R_08 = PP.assets.image.add(s, img_platform_Lv01_01, c/8*7, 170+c*7, 0, 0);
    PP.physics.add(s, platform_R_08, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_R_08, true);
    PP.physics.set_allow_gravity(platform_R_08, false);
    PP.physics.add_collider_f(s, player, platform_R_08, collision_platform);
    PP.physics.set_velocity_x(platform_R_08, -100);
    PP.physics.set_velocity_y(platform_R_08, 0);


    // PIATTAFORMA MOVIMENTO
    platform_M_01 = PP.assets.image.add(s, img_platform_Lv01_01, c*4+c/4, 170+c*8+c/4*3 +30, 0, 0);
    PP.physics.add(s, platform_M_01, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_M_01, true);
    PP.physics.set_allow_gravity(platform_M_01, false);
    //PP.physics.add_collider_f(s, player, platform_M_01, collision_platform && move_platform); ESEGUE SOLO L'ULTIMA FUNZIONE
    //PP.physics.add_collider_f(s, player, platform_M_01, collision_platform);
    PP.physics.add_collider_f(s, player, platform_M_01, move_platform);


    // PLATFORM LV_02: BOSCO
    // PLATFORM_02_01 - DINAMICA
    platform_02_001 = PP.assets.sprite.add(s, ss_platform_Lv02, c*11+c/8*3, 170+c*9, 0, 0);
    PP.physics.add(s, platform_02_001, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_02_001, true);
    PP.physics.set_allow_gravity(platform_02_001, false);
    PP.physics.add_collider_f(s, player, platform_02_001, collision_platform2);

    // PLATFORM_02_02
    platform_02_002 = PP.assets.image.add(s, img_platform_Lv02_02, c*12+c/8*3, 170+c*9, 0, 0);
    PP.physics.add(s, platform_02_002, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform_02_002, collision_platform);

    // PLATFORM_02_03 - DINAMICA
    platform_02_003 = PP.assets.sprite.add(s, ss_platform_Lv02, c*15+c/2, 170+c*8+c/4*3, 0, 0);
    PP.physics.add(s, platform_02_003, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_02_003, true);
    PP.physics.set_allow_gravity(platform_02_003, false);
    PP.physics.add_collider_f(s, player, platform_02_003, collision_platform2);

    // PLATFORM_02_04
    platform_02_004 = PP.assets.image.add(s, img_platform_Lv02_01, c*16+c/2, 170+c*9, 0, 0);
    PP.physics.add(s, platform_02_004, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform_02_004, collision_platform);

    // PLATFORM_02_05 - DINAMICA
    //platform_02_005 = PP.assets.image.add(s, img_platform_Lv02_01, c*17+c/4, 170+c*8+c/4*3, 0, 0);
    platform_02_005 = PP.assets.sprite.add(s, ss_platform_Lv02, c*17+c/4, 170+c*8+c/4*3, 0, 0);
    PP.physics.add(s, platform_02_005, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_02_005, true);
    PP.physics.set_allow_gravity(platform_02_005, false);
    PP.physics.add_collider_f(s, player, platform_02_005, collision_platform2);

    // PLATFORM_02_06 - DINAMICA
    //platform_02_006 = PP.assets.image.add(s, img_platform_Lv02_01, c*18, 170+c*8+c/2, 0, 0);
    platform_02_006 = PP.assets.sprite.add(s, ss_platform_Lv02, c*18, 170+c*8+c/2, 0, 0);
    PP.physics.add(s, platform_02_006, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_02_006, true);
    PP.physics.set_allow_gravity(platform_02_006, false);
    PP.physics.add_collider_f(s, player, platform_02_006, collision_platform2);

    // PLATFORM_02_07
    platform_02_007 = PP.assets.image.add(s, img_platform_Lv02_01, c*19, 170+c*9, 0, 0);
    PP.physics.add(s, platform_02_007, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform_02_007, collision_platform);

    // PLATFORM_02_08 - DINAMICA
    //platform_02_008 = PP.assets.image.add(s, img_platform_Lv02_01, c*19+c/4*3, 170+c*9, 0, 0);
    platform_02_008 = PP.assets.sprite.add(s, ss_platform_Lv02, c*19+c/4*3, 170+c*9, 0, 0);
    PP.physics.add(s, platform_02_008, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_02_008, true);
    PP.physics.set_allow_gravity(platform_02_008, false);
    PP.physics.add_collider_f(s, player, platform_02_008, collision_platform2);

    // PLATFORM_02_09 - DINAMICA
    //platform_02_009 = PP.assets.image.add(s, img_platform_Lv02_01, c*20+c/2, 170+c*8+c/4*3, 0, 0);
    platform_02_009 = PP.assets.sprite.add(s, ss_platform_Lv02, c*20+c/2, 170+c*8+c/4*3, 0, 0);
    PP.physics.add(s, platform_02_009, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_02_009, true);
    PP.physics.set_allow_gravity(platform_02_009, false);
    PP.physics.add_collider_f(s, player, platform_02_009, collision_platform2);

    // platform_02_010
    platform_02_010 = PP.assets.image.add(s, img_platform_Lv02_01, c*21+c/4, 170+c*9, 0, 0);
    PP.physics.add(s, platform_02_010, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform_02_010, collision_platform);

    // platform_02_011 - DINAMICA
    //platform_02_011 = PP.assets.image.add(s, img_platform_Lv02_01, c*22, 170+c*8+c/4*3, 0, 0);
    platform_02_011 = PP.assets.sprite.add(s, ss_platform_Lv02, c*22, 170+c*8+c/4*3, 0, 0);
    PP.physics.add(s, platform_02_011, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_02_011, true);
    PP.physics.set_allow_gravity(platform_02_011, false);
    PP.physics.add_collider_f(s, player, platform_02_011, collision_platform2);

    // platform_02_0012
    platform_02_012 = PP.assets.image.add(s, img_platform_Lv02_01, c*23, 60+c*9+c/4, 0, 0);
    PP.physics.add(s, platform_02_012, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, platform_02_012, collision_platform);

    // platform_02_013 - DINAMICA
    //platform_02_013 = PP.assets.image.add(s, img_platform_Lv02_01, c*23+c/4*3, 170+c*9, 0, 0);
    platform_02_013 = PP.assets.sprite.add(s, ss_platform_Lv02, c*23+c/4*3, 50+c*9, 0, 0);
    PP.physics.add(s, platform_02_013, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_02_013, true);
    PP.physics.set_allow_gravity(platform_02_013, false);
    PP.physics.add_collider_f(s, player, platform_02_013, collision_platform2);

    // platform_02_014 - DINAMICA
    //platform_02_014 = PP.assets.image.add(s, img_platform_Lv02_01, c*24+c/4*3, 170+c*9, 0, 0);
    platform_02_014 = PP.assets.sprite.add(s, ss_platform_Lv02, c*24+c/4*3, 170+c*9, 0, 0);
    PP.physics.add(s, platform_02_014, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_02_014, true);
    PP.physics.set_allow_gravity(platform_02_014, false);
    PP.physics.add_collider_f(s, player, platform_02_014, collision_platform2);

    // platform_02_015 - DINAMICA
    //platform_02_015 = PP.assets.image.add(s, img_platform_Lv02_01, c*25+c/2, 170+c*8+c/4*3, 0, 0);
    platform_02_015 = PP.assets.sprite.add(s, ss_platform_Lv02, c*25+c/2, 170+c*8+c/4*3, 0, 0);
    PP.physics.add(s, platform_02_015, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(platform_02_015, true);
    PP.physics.set_allow_gravity(platform_02_015, false);
    PP.physics.add_collider_f(s, player, platform_02_015, collision_platform2);

}



function platform_countdown(s) {
    platform_count = false;
    console.log(platform_count);
}

function move_platform(s, player) {

    verifica_platform = true;
    // AGGIORNAMENTO PIATTAFORMA MOVIMENTO
    /*if(platform_M_01.geometry.y >= 170+c*8+c/4*3+30) {
        PP.physics.set_velocity_y(platform_M_01, -100);
    }*/
    PP.physics.set_velocity_y(platform_M_01, -100);
    if(platform_M_01.geometry.y <= 170+c*7+c/2) {
        PP.physics.set_velocity_y(platform_M_01, 0);
    }
    
}

function update_platform(s, player) {

    let c = 480;

    // AGGIORNAMENTO PIATTAFORME ROTANTI
    // PLATFORM_R_01
    if(platform_R_01.geometry.x <= c/4 && platform_R_01.geometry.y <= 170+c*5) {
        PP.physics.set_velocity_x(platform_R_01, 0);
        PP.physics.set_velocity_y(platform_R_01, +100);
    }
    if(platform_R_01.geometry.y >= 170+c*6 && platform_R_01.geometry.x <= c/4) {
        PP.physics.set_velocity_x(platform_R_01, +100);
        PP.physics.set_velocity_y(platform_R_01, 0);
    }
    if(platform_R_01.geometry.x >= c+c/2 && platform_R_01.geometry.y >= 170+c*6) {
        PP.physics.set_velocity_x(platform_R_01, 0);
        PP.physics.set_velocity_y(platform_R_01, -100);
    }
    if(platform_R_01.geometry.y <= 170+c*5 && platform_R_01.geometry.x >= c+c/2) {
        PP.physics.set_velocity_x(platform_R_01, -100);
        PP.physics.set_velocity_y(platform_R_01, 0);
    }

    // PLATFORM_R_02
    if(platform_R_02.geometry.x <= c/4 && platform_R_02.geometry.y <= 170+c*5) {
        PP.physics.set_velocity_x(platform_R_02, 0);
        PP.physics.set_velocity_y(platform_R_02, +100);
    }
    if(platform_R_02.geometry.y >= 170+c*6 && platform_R_02.geometry.x <= c/4) {
        PP.physics.set_velocity_x(platform_R_02, +100);
        PP.physics.set_velocity_y(platform_R_02, 0);
    }
    if(platform_R_02.geometry.x >= c+c/2 && platform_R_02.geometry.y >= 170+c*6) {
        PP.physics.set_velocity_x(platform_R_02, 0);
        PP.physics.set_velocity_y(platform_R_02, -100);
    }
    if(platform_R_02.geometry.y <= 170+c*5 && platform_R_02.geometry.x >= c+c/2) {
        PP.physics.set_velocity_x(platform_R_02, -100);
        PP.physics.set_velocity_y(platform_R_02, 0);
    }

    // PLATFORM_R_03
    if(platform_R_03.geometry.x <= c/4 && platform_R_03.geometry.y <= 170+c*5) {
        PP.physics.set_velocity_x(platform_R_03, 0);
        PP.physics.set_velocity_y(platform_R_03, +100);
    }
    if(platform_R_03.geometry.y >= 170+c*6 && platform_R_03.geometry.x <= c/4) {
        PP.physics.set_velocity_x(platform_R_03, +100);
        PP.physics.set_velocity_y(platform_R_03, 0);
    }
    if(platform_R_03.geometry.x >= c+c/2 && platform_R_03.geometry.y >= 170+c*6) {
        PP.physics.set_velocity_x(platform_R_03, 0);
        PP.physics.set_velocity_y(platform_R_03, -100);
    }
    if(platform_R_03.geometry.y <= 170+c*5 && platform_R_03.geometry.x >= c+c/2) {
        PP.physics.set_velocity_x(platform_R_03, -100);
        PP.physics.set_velocity_y(platform_R_03, 0);
    }

    // PLATFORM_R_04
    if(platform_R_04.geometry.x <= c/4 && platform_R_04.geometry.y <= 170+c*5) {
        PP.physics.set_velocity_x(platform_R_04, 0);
        PP.physics.set_velocity_y(platform_R_04, +100);
    }
    if(platform_R_04.geometry.y >= 170+c*6 && platform_R_04.geometry.x <= c/4) {
        PP.physics.set_velocity_x(platform_R_04, +100);
        PP.physics.set_velocity_y(platform_R_04, 0);
    }
    if(platform_R_04.geometry.x >= c+c/2 && platform_R_04.geometry.y >= 170+c*6) {
        PP.physics.set_velocity_x(platform_R_04, 0);
        PP.physics.set_velocity_y(platform_R_04, -100);
    }
    if(platform_R_04.geometry.y <= 170+c*5 && platform_R_04.geometry.x >= c+c/2) {
        PP.physics.set_velocity_x(platform_R_04, -100);
        PP.physics.set_velocity_y(platform_R_04, 0);
    }

    // PLATFORM_R_05
    if(platform_R_05.geometry.x <= c/4 && platform_R_05.geometry.y <= 170+c*7) {
        PP.physics.set_velocity_x(platform_R_05, 0);
        PP.physics.set_velocity_y(platform_R_05, +100);
    }
    if(platform_R_05.geometry.y >= 170+c*8 && platform_R_05.geometry.x <= c/4) {
        PP.physics.set_velocity_x(platform_R_05, +100);
        PP.physics.set_velocity_y(platform_R_05, 0);
    }
    if(platform_R_05.geometry.x >= c+c/2 && platform_R_05.geometry.y >= 170+c*8) {
        PP.physics.set_velocity_x(platform_R_05, 0);
        PP.physics.set_velocity_y(platform_R_05, -100);
    }
    if(platform_R_05.geometry.y <= 170+c*7 && platform_R_05.geometry.x >= c+c/2) {
        PP.physics.set_velocity_x(platform_R_05, -100);
        PP.physics.set_velocity_y(platform_R_05, 0);
    }

    // PLATFORM_R_06
    if(platform_R_06.geometry.x <= c/4 && platform_R_06.geometry.y <= 170+c*7) {
        PP.physics.set_velocity_x(platform_R_06, 0);
        PP.physics.set_velocity_y(platform_R_06, +100);
    }
    if(platform_R_06.geometry.y >= 170+c*8 && platform_R_06.geometry.x <= c/4) {
        PP.physics.set_velocity_x(platform_R_06, +100);
        PP.physics.set_velocity_y(platform_R_06, 0);
    }
    if(platform_R_06.geometry.x >= c+c/2 && platform_R_06.geometry.y >= 170+c*8) {
        PP.physics.set_velocity_x(platform_R_06, 0);
        PP.physics.set_velocity_y(platform_R_06, -100);
    }
    if(platform_R_06.geometry.y <= 170+c*7 && platform_R_06.geometry.x >= c+c/2) {
        PP.physics.set_velocity_x(platform_R_06, -100);
        PP.physics.set_velocity_y(platform_R_06, 0);
    }

    // PLATFORM_R_07
    if(platform_R_07.geometry.x <= c/4 && platform_R_07.geometry.y <= 170+c*7) {
        PP.physics.set_velocity_x(platform_R_07, 0);
        PP.physics.set_velocity_y(platform_R_07, +100);
    }
    if(platform_R_07.geometry.y >= 170+c*8 && platform_R_07.geometry.x <= c/4) {
        PP.physics.set_velocity_x(platform_R_07, +100);
        PP.physics.set_velocity_y(platform_R_07, 0);
    }
    if(platform_R_07.geometry.x >= c+c/2 && platform_R_07.geometry.y >= 170+c*8) {
        PP.physics.set_velocity_x(platform_R_07, 0);
        PP.physics.set_velocity_y(platform_R_07, -100);
    }
    if(platform_R_07.geometry.y <= 170+c*7 && platform_R_07.geometry.x >= c+c/2) {
        PP.physics.set_velocity_x(platform_R_07, -100);
        PP.physics.set_velocity_y(platform_R_07, 0);
    }

    // PLATFORM_R_08
    if(platform_R_08.geometry.x <= c/4 && platform_R_08.geometry.y <= 170+c*7) {
        PP.physics.set_velocity_x(platform_R_08, 0);
        PP.physics.set_velocity_y(platform_R_08, +100);
    }
    if(platform_R_08.geometry.y >= 170+c*8 && platform_R_08.geometry.x <= c/4) {
        PP.physics.set_velocity_x(platform_R_08, +100);
        PP.physics.set_velocity_y(platform_R_08, 0);
    }
    if(platform_R_08.geometry.x >= c+c/2 && platform_R_08.geometry.y >= 170+c*8) {
        PP.physics.set_velocity_x(platform_R_08, 0);
        PP.physics.set_velocity_y(platform_R_08, -100);
    }
    if(platform_R_08.geometry.y <= 170+c*7 && platform_R_08.geometry.x >= c+c/2) {
        PP.physics.set_velocity_x(platform_R_08, -100);
        PP.physics.set_velocity_y(platform_R_08, 0);
    }
    

    // AGGIORNAMENTO PIATTAFORME CADENTI
    let velocity_platform =10;
    let acceleration_platform = 500;

    // Condizione per platform_02_001
    if( player.geometry.x >= platform_02_001.geometry.x &&
        player.geometry.x <= platform_02_001.geometry.x + platform_02_001.geometry.display_width+10 &&
        platform_02_001.geometry.y <=  player.geometry.y) {
            PP.physics.set_velocity_y(platform_02_001, velocity_platform);
            PP.physics.set_acceleration_y(platform_02_001, acceleration_platform);

            console.log("dioa");

            PP.assets.sprite.animation_stop(platform_02_001, "platform_02_001: normal");
            PP.assets.sprite.animation_play(platform_02_001, "platform_02_001: destroyed"); 

    }
           
            if (platform_02_001.geometry.y > 4729){
                PP.physics.set_velocity_y(platform_02_001, -200);
                PP.physics.set_acceleration_y(platform_02_001, 0);
            }

            if (platform_02_001.geometry.y < 4490 && verifica_platform == false){
                PP.physics.set_velocity_y(platform_02_001, 0);
                PP.physics.set_acceleration_y(platform_02_001, 0);

            }




  
   
    // Condizione per platform_02_003
    if( player.geometry.x >= platform_02_003.geometry.x-10 &&
        player.geometry.x <= platform_02_003.geometry.x + platform_02_003.geometry.display_width+10 &&
        platform_02_003.geometry.y <=  player.geometry.y) {
            PP.physics.set_velocity_y(platform_02_003, velocity_platform);
            PP.physics.set_acceleration_y(platform_02_003, acceleration_platform);

            PP.assets.sprite.animation_stop(platform_02_003, "platform_02_003: normal");
            PP.assets.sprite.animation_play(platform_02_003, "platform_02_003: destroyed"); 
    }

    // Condizione per platform_02_005
    if (player.geometry.x >= platform_02_005.geometry.x - 10 &&
        player.geometry.x <= platform_02_005.geometry.x + platform_02_005.geometry.display_width + 10 &&
        platform_02_005.geometry.y <= player.geometry.y) {
            PP.physics.set_velocity_y(platform_02_005, velocity_platform);
            PP.physics.set_acceleration_y(platform_02_005, acceleration_platform);

            PP.assets.sprite.animation_stop(platform_02_005, "platform_02_005: normal");
            PP.assets.sprite.animation_play(platform_02_005, "platform_02_005: destroyed"); 

    }
            
    // Condizione per platform_02_006
    if (player.geometry.x >= platform_02_006.geometry.x - 10 &&
        player.geometry.x <= platform_02_006.geometry.x + platform_02_006.geometry.display_width + 10 &&
        platform_02_006.geometry.y <= player.geometry.y) {
            PP.physics.set_velocity_y(platform_02_006, velocity_platform);
            PP.physics.set_acceleration_y(platform_02_006, acceleration_platform);

            PP.assets.sprite.animation_stop(platform_02_006, "platform_02_006: normal");
            PP.assets.sprite.animation_play(platform_02_006, "platform_02_006: destroyed"); 
    }
            
    // Condizione per platform_02_008
    if (player.geometry.x >= platform_02_008.geometry.x - 10 &&
        player.geometry.x <= platform_02_008.geometry.x + platform_02_008.geometry.display_width + 10 &&
        platform_02_008.geometry.y <= player.geometry.y) {
            PP.physics.set_velocity_y(platform_02_008, velocity_platform);
            PP.physics.set_acceleration_y(platform_02_008, acceleration_platform);

            PP.assets.sprite.animation_stop(platform_02_008, "platform_02_008: normal");
            PP.assets.sprite.animation_play(platform_02_008, "platform_02_008: destroyed"); 
    }
            
    // Condizione per platform_02_009
    if (player.geometry.x >= platform_02_009.geometry.x - 10 &&
        player.geometry.x <= platform_02_009.geometry.x + platform_02_009.geometry.display_width + 10 &&
        platform_02_009.geometry.y <= player.geometry.y) {
            PP.physics.set_velocity_y(platform_02_009, velocity_platform);
            PP.physics.set_acceleration_y(platform_02_009, acceleration_platform);

            PP.assets.sprite.animation_stop(platform_02_009, "platform_02_009: normal");
            PP.assets.sprite.animation_play(platform_02_009, "platform_02_009: destroyed"); 
    }
            
    // Condizione per platform_02_011
    if (player.geometry.x >= platform_02_011.geometry.x - 10 &&
        player.geometry.x <= platform_02_011.geometry.x + platform_02_011.geometry.display_width + 10 &&
        platform_02_011.geometry.y <= player.geometry.y) {
            PP.physics.set_velocity_y(platform_02_011, velocity_platform);
            PP.physics.set_acceleration_y(platform_02_011, acceleration_platform);

            PP.assets.sprite.animation_stop(platform_02_011, "platform_02_011: normal");
            PP.assets.sprite.animation_play(platform_02_011, "platform_02_011: destroyed"); 
    }
            
    // Condizione per platform_02_013
    if (player.geometry.x >= platform_02_013.geometry.x - 10 &&
        player.geometry.x <= platform_02_013.geometry.x + platform_02_013.geometry.display_width + 10 &&
        platform_02_013.geometry.y <= player.geometry.y) {
            PP.physics.set_velocity_y(platform_02_013, velocity_platform);
            PP.physics.set_acceleration_y(platform_02_013, acceleration_platform);

            PP.assets.sprite.animation_stop(platform_02_013, "platform_02_013: normal");
            PP.assets.sprite.animation_play(platform_02_013, "platform_02_013: destroyed"); 
    }
            
    // Condizione per platform_02_014
    if (player.geometry.x >= platform_02_014.geometry.x - 10 &&
        player.geometry.x <= platform_02_014.geometry.x + platform_02_014.geometry.display_width + 10 &&
        platform_02_014.geometry.y <= player.geometry.y) {
            PP.physics.set_velocity_y(platform_02_014, velocity_platform);
            PP.physics.set_acceleration_y(platform_02_014, acceleration_platform);

            PP.assets.sprite.animation_stop(platform_02_014, "platform_02_014: normal");
            PP.assets.sprite.animation_play(platform_02_014, "platform_02_014: destroyed"); 
    }
            
    // Condizione per platform_02_015
    if (player.geometry.x >= platform_02_015.geometry.x - 10 &&
        player.geometry.x <= platform_02_015.geometry.x + platform_02_015.geometry.display_width + 10 &&
        platform_02_015.geometry.y <= player.geometry.y) {
            PP.physics.set_velocity_y(platform_02_015, velocity_platform);
            PP.physics.set_acceleration_y(platform_02_015, acceleration_platform);

            PP.assets.sprite.animation_stop(platform_02_015, "platform_02_015: normal");
            PP.assets.sprite.animation_play(platform_02_015, "platform_02_015: destroyed"); 
    }

}
