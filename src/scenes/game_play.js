let img_background;
let background;
let img_background_villaggio;
let background_villaggio;
let img_player;

let player;
let player_x = 400;
let player_y = 620;

function preload(s) {
    console.log("Executing preload() - game_play");

    // Caricamento assets grafici
    //img_background = PP.assets.image.load(s, "assets/background/background_Lv01.png");
    img_background = PP.assets.image.load(s, "assets/background/mappa02.png");
    img_background_villaggio = PP.assets.image.load(s, "assets/background/village.png");
    img_player     = PP.assets.sprite.load_spritesheet(s, "assets/entities/ss_player.png", 484, 462);



    // Caricamento elementi js
    preload_collectibles(s);
    preload_trap(s);
    preload_candelabr(s);
    preload_platform(s);
    preload_structure(s);
    //preload_coins(s);

    preload_player(s);
    preload_guard(s);
    preload_lancer(s);
    preload_boss(s);
    preload_soldier(s);
    preload_HUD(s);
    preload_instruction(s);

}

function create(s) {
    console.log("Executing create() - game_play");

    // Creazione background
    // PP.assets.tilesprite.add(s, img_background, 0, 0, 10000, 800, 0, 0);

    //background = PP.assets.image.add(s, img_background, -1050, -430, 0, 0);

    
    background = PP.assets.image.add(s, img_background, -1050, -420, 0, 0);
    background.geometry.scale_x = 4.25155004;
    background.geometry.scale_y = 4.25155004;
    

    //img_background_villaggio = PP.assets.image.add(s, img_background_villaggio, 12480, 4572, 0, 1);


    

    // Creazione player + fisica come entità dinamica
    // -----------------------------------------------------------------------------------------------------
    
    // Lista spawn giocatore
    //player = PP.assets.sprite.add(s, img_player, 400, 620, 0.5, 1);
    //player = PP.assets.sprite.add(s, img_player, 2700, 620, 0.5, 1);
    
    //Set spawn del giocatore: Livello_01 intermezzo
    //player = PP.assets.sprite.add(s, img_player, 3100, 2500, 0.5, 1);
    //player = PP.assets.sprite.add(s, img_player, 1300, 2500, 0.5, 1);

    //Set spawn del giocatore: Livello_01 chest
    //player = PP.assets.sprite.add(s, img_player, 4360, 2050, 0.5, 1);
    //player = PP.assets.sprite.add(s, img_player, 1050, 3400, 0.5, 1);

    //Set spawn del giocatore: Livello_01 candelabro
    //player = PP.assets.sprite.add(s, img_player, 1700, 4489, 0.5, 1);

    //Set spawn del giocatore: Livello_02
    player = PP.assets.sprite.add(s, img_player, 5100, 4489, 0.5, 1);
    //player = PP.assets.sprite.add(s, img_player, 6300, 4489, 0.5, 1);

    //Set spawn del giocatore: Livello_03 
    //player = PP.assets.sprite.add(s, img_player, 13200, 4489, 0.5, 1);
    //player = PP.assets.sprite.add(s, img_player, 17200, 3900, 0.5, 1);


    /*
    //Set spawn del giocatore: Livello_01 inizio
    if (spawn == 1) {
        player = PP.assets.sprite.add(s, img_player, player_x, player_y, 0.5, 1);
        //spawn++;
    }

    if (spawn == 2) {
        player = PP.assets.sprite.add(s, img_player, 5100, 4489, 0.5, 1);
    }
   
    if (spawn == 3) {
        player = PP.assets.sprite.add(s, img_player, 13000, 4489, 0.5, 1);
    }
    */


    // -----------------------------------------------------------------------------------------------------

    // Scala dimensioni giocatore
    player.geometry.scale_x = 0.33; // quindi da 222 a 73,26
    player.geometry.scale_y = 0.33; // quindi da 418 a 137,94
    PP.physics.add(s, player, PP.physics.type.DYNAMIC); 

    // Cambio hitbox
    PP.physics.set_collision_rectangle(player, 180, 410, 150, 50);


    //codice per creare un layer sopra tutti per il player
    let nome_layer = PP.layers.create(s);
    PP.layers.add_to_layer(nome_layer, player);
    PP.layers.set_z_index(nome_layer, 10);

    configure_player_animations(s, player); // Impostazione animazioni giocatore

    // Creazione elementi js
    create_collectibles(s, player);         // Creazione forzieri
    create_structure(s, player);
    create_platform(s, player);             // Creazione piattaforme
    configure_chest_animations(s);          // Impostazione animazioni chest
    configure_platform_animations(s);       // Impostazione animazioni piattaforme
    //create_coins(s, player);              // Creazione funghetti
   
    create_guard(s, player, floor1, floor2, floor4);
    create_lancer(s, player, floor1, floor2, floor4);
    create_boss(s, player, floor1, floor2, floor4);
    create_soldier(s, player);
    create_trap(s, player, floor);
    create_candelabr(s, arrow);
    create_HUD(s, player);                  // Creazione HUD
    create_instruction(s, player);

    // Camera che segue il player
    PP.camera.start_follow(s, player, 0, 200);

}

function changeScene_cover(s) {

    PP.scenes.start("cover");

}

function update(s) {
    

    // Azioni che vengono eseguite a ogni frame del gioco
    manage_player_update(s, player);            // Movimento e animazioni player
    manage_player_weapon(s, player);            // Gestione armi
    update_guard(s, player);
    update_lancer(s, player);
    update_boss(s, player);
    manage_lancer01_weapon(s, player);
    manage_lancer02_weapon(s, player);
    manage_lancer03_weapon(s, player);
    manage_lancer04_weapon(s, player)
    manage_boss_weapon(s, player)
    update_platform(s, player);                 // Movimento piattaforme
    update_trap(s, player);
    update_candelabr(s, position_arrow_x, position_arrow_y, player);
    update_candelabr_flint(s, player);          // Azioni collezionabili
    update_HUD(s);                              // Aggiornamento HUD
    update_instruction(s, player);
    gotogamewin(s);
       

    if (PP.interactive.kb.is_key_down (s, PP.key_codes.ESC)){
        PP.scenes.start("cover");
        console.log ("Executing scene: cover");

    } 

}

function destroy(s) {
    console.log("Executing destroy() - game_play");

}

PP.scenes.add("game_play", preload, create, update, destroy);
