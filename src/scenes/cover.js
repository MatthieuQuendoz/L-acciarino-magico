let img_background_cover;
let img_button_story;
let img_button_game;
let img_button_credits;
    
let background_cover;
let button_story;
let button_game;
let button_credits;
    

function preload(s) {

    console.log("Executing preload() - cover");
        
    img_background_cover = PP.assets.image.load(s, "assets/drawings/cover.jpg");

    img_button_story = PP.assets.sprite.load_spritesheet(s, "assets/buttons/ss_button_story.png", 217, 57);
    img_button_game = PP.assets.sprite.load_spritesheet(s, "assets/buttons/ss_button_game.png", 187, 64);
    img_button_credits = PP.assets.sprite.load_spritesheet(s, "assets/buttons/ss_button_credits.png", 243, 63);

}
    
function create(s) {

    console.log("Executing create() - cover");

    // Creazione copertina
    background_cover = PP.assets.image.add(s, img_background_cover, 0, 0, 0, 0);

    // Creazione bottoni
    button_story = PP.assets.sprite.add(s, img_button_story, 233, 248, 0, 0);
    button_game = PP.assets.sprite.add(s, img_button_game, 240, 380, 0, 0);
    button_credits = PP.assets.sprite.add(s, img_button_credits, 205, 525, 0, 0);

    // Interazione con mouse
    PP.interactive.mouse.add (button_story, "pointerover", change_button_story);
    PP.interactive.mouse.add (button_story, "pointerout", reset_button_story);
    PP.interactive.mouse.add (button_story, "pointerdown", change_scene_story);
    
    PP.interactive.mouse.add (button_game, "pointerover", change_button_game);
    PP.interactive.mouse.add (button_game, "pointerout", reset_button_game);
    PP.interactive.mouse.add (button_game, "pointerdown", change_scene_game_play);

    PP.interactive.mouse.add (button_credits, "pointerover", change_button_credits);
    PP.interactive.mouse.add (button_credits, "pointerout", reset_button_credits);
    PP.interactive.mouse.add (button_credits, "pointerdown", change_scene_credits);
    

    // codice prova per tasto
    //bottone = PP.shapes.rectangle_add(s, 900, 550, 150, 150, "0xFF0000", 0);
    //PP.interactive.mouse.add (bottone, "pointerdown", changeScene_cover);
        
    // Creazione animazioni
    PP.assets.sprite.animation_add(button_story, "story_unselected", 0, 0, 5, 0); 
    PP.assets.sprite.animation_add(button_story, "story_selected", 1, 1, 5, 0);

    PP.assets.sprite.animation_add(button_game, "game_unselected", 0, 0, 5, 0); 
    PP.assets.sprite.animation_add(button_game, "game_selected", 1, 1, 5, 0);

    PP.assets.sprite.animation_add(button_credits, "credits_unselected", 0, 0, 5, 0); 
    PP.assets.sprite.animation_add(button_credits, "credits_selected", 1, 1, 5, 0);
        
}


// AGGIUNGERE GESTIONE TRAMITE PARAMETRI, evitare di riscriverlo per ogno bottone
function change_button_story(s) {
    PP.assets.sprite.animation_play(button_story, "story_selected");
    console.log ("Bottone storia: selezionato");

}

function reset_button_story(s) {
    PP.assets.sprite.animation_play(button_story, "story_unselected");
    console.log ("Bottone storia: deselezionato");
        
}

function change_button_game(s) {
    PP.assets.sprite.animation_play(button_game, "game_selected");
    console.log ("Bottone gioca: selezionato");

}

function reset_button_game(s) {
    PP.assets.sprite.animation_play(button_game, "game_unselected");
    console.log ("Bottone gioca: deselezionato");
        
}

function change_button_credits(s) {
    PP.assets.sprite.animation_play(button_credits, "credits_selected");
    console.log ("Bottone crediti: selezionato");

}

function reset_button_credits(s) {
    PP.assets.sprite.animation_play(button_credits, "credits_unselected");
    console.log ("Bottone crediti: deselezionato");
        
}



// FUNZIONI DI CAMBIO SCENA
function change_scene_story(s) {
    PP.scenes.start("story_01");
}

function change_scene_game_play(s) {
    PP.scenes.start("game_play");
}

function change_scene_credits(s) {
    PP.scenes.start("credits");
}


function update(s) {

    /*
    // Cambio scena: game_play tramite input "ENTER"
    if (PP.interactive.kb.is_key_down (s, PP.key_codes.ENTER)){
        PP.scenes.start("game_play");
        console.log ("Executing scene: game_play");
    
    } 

    // Cambio scena: game_over tramite input "RIGHT"
    if (PP.interactive.kb.is_key_down (s, PP.key_codes.RIGHT)){
        PP.scenes.start("story_01");
        console.log ("Executing scene: story_01");
    
    } 

    // Cambio scena: game_over tramite input "DOWN"
    if (PP.interactive.kb.is_key_down (s, PP.key_codes.DOWN)){
        PP.scenes.start("credits");
        console.log ("Executing scene: credits");
    
    } 
    */

}

function destroy(s) {
    console.log("Executing destroy() - cover");

}    

PP.scenes.add("cover", preload, create, update, destroy);
        