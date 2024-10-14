let img_background_story_03;
let img_button_back_03;
let img_button_next_03;

let background_story_03;
let button_back_03;
let button_next_03;
    
function preload(s) {

    console.log("Executing preload() - story_03");

    img_background_story_03 = PP.assets.image.load(s, "assets/drawings/Story_03.png");
    img_button_back_03 = PP.assets.sprite.load_spritesheet(s, "assets/buttons/ss_button_back.png", 108, 73);
    img_button_next_03 = PP.assets.sprite.load_spritesheet(s, "assets/buttons/ss_button_next.png", 108, 73);

}
    
function create(s) {

    console.log("Executing create() - story_03");

    background_story_03 = PP.assets.image.add(s, img_background_story_03, 0, 0, 0, 0);

    button_back_03 = PP.assets.sprite.add(s, img_button_back_03, 25, 360, 0, 0.5);
    button_next_03 = PP.assets.sprite.add(s, img_button_next_03, 1255, 360, 1, 0.5);

    PP.interactive.mouse.add (button_back_03, "pointerover", change_button_back_03);
    PP.interactive.mouse.add (button_back_03, "pointerout", reset_button_back_03);
    PP.interactive.mouse.add (button_back_03, "pointerdown", change_scene_story_02);

    PP.interactive.mouse.add (button_next_03, "pointerover", change_button_next_03);
    PP.interactive.mouse.add (button_next_03, "pointerout", reset_button_next_03);
    PP.interactive.mouse.add (button_next_03, "pointerdown", change_scene_game_play);

    // Creazione animazioni
    PP.assets.sprite.animation_add(button_back_03, "back_03_unselected", 0, 0, 5, 0); 
    PP.assets.sprite.animation_add(button_back_03, "back_03_selected", 1, 1, 5, 0);

    PP.assets.sprite.animation_add(button_next_03, "next_03_unselected", 0, 0, 5, 0); 
    PP.assets.sprite.animation_add(button_next_03, "next_03_selected", 1, 1, 5, 0);

}

// FUNZIONI DI CAMBIO SCENA
function change_scene_story_02(s) {
    PP.scenes.start("story_02");
}

function change_scene_game_play(s) {
    PP.scenes.start("game_play");
}

function change_button_back_03(s) {
    PP.assets.sprite.animation_play(button_back_03, "back_03_selected");
    console.log ("Bottone back_03: selezionato");

}

function reset_button_back_03(s) {
    PP.assets.sprite.animation_play(button_back_03, "back_03_unselected");
    console.log ("Bottone back_03: deselezionato");
        
}

function change_button_next_03(s) {
    PP.assets.sprite.animation_play(button_next_03, "next_03_selected");
    console.log ("Bottone next_03: selezionato");

}

function reset_button_next_03(s) {
    PP.assets.sprite.animation_play(button_next_03, "next_03_unselected");
    console.log ("Bottone next_03: deselezionato");
        
}


function update(s) {
}

function destroy(s) {
    console.log("Executing destroy() - story_03");
}    

PP.scenes.add("story_03", preload, create, update, destroy);
        