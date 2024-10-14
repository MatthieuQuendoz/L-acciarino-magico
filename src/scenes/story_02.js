let img_background_story_02;
let img_button_back_02;
let img_button_next_02;

let background_story_02;
let button_back_02;
let button_next_02;
    
function preload(s) {

    console.log("Executing preload() - story_02");

    img_background_story_02 = PP.assets.image.load(s, "assets/drawings/Story_02.png");
    img_button_back_02 = PP.assets.sprite.load_spritesheet(s, "assets/buttons/ss_button_back.png", 108, 73);
    img_button_next_02 = PP.assets.sprite.load_spritesheet(s, "assets/buttons/ss_button_next.png", 108, 73);

}
    
function create(s) {

    console.log("Executing create() - story_02");

    background_story_02 = PP.assets.image.add(s, img_background_story_02, 0, 0, 0, 0);

    button_back_02 = PP.assets.sprite.add(s, img_button_back_02, 25, 360, 0, 0.5);
    button_next_02 = PP.assets.sprite.add(s, img_button_next_02, 1255, 360, 1, 0.5);

    PP.interactive.mouse.add (button_back_02, "pointerover", change_button_back_02);
    PP.interactive.mouse.add (button_back_02, "pointerout", reset_button_back_02);
    PP.interactive.mouse.add (button_back_02, "pointerdown", change_scene_story_01);

    PP.interactive.mouse.add (button_next_02, "pointerover", change_button_next_02);
    PP.interactive.mouse.add (button_next_02, "pointerout", reset_button_next_02);
    PP.interactive.mouse.add (button_next_02, "pointerdown", change_scene_story_03);

    // Creazione animazioni
    PP.assets.sprite.animation_add(button_back_02, "back_02_unselected", 0, 0, 5, 0); 
    PP.assets.sprite.animation_add(button_back_02, "back_02_selected", 1, 1, 5, 0);

    PP.assets.sprite.animation_add(button_next_02, "next_02_unselected", 0, 0, 5, 0); 
    PP.assets.sprite.animation_add(button_next_02, "next_02_selected", 1, 1, 5, 0);

}

// FUNZIONI DI CAMBIO SCENA
function change_scene_story_01(s) {
    PP.scenes.start("story_01");
}

function change_scene_story_03(s) {
    PP.scenes.start("story_03");
}

function change_button_back_02(s) {
    PP.assets.sprite.animation_play(button_back_02, "back_02_selected");
    console.log ("Bottone back_02: selezionato");

}

function reset_button_back_02(s) {
    PP.assets.sprite.animation_play(button_back_02, "back_02_unselected");
    console.log ("Bottone back_02: deselezionato");
        
}

function change_button_next_02(s) {
    PP.assets.sprite.animation_play(button_next_02, "next_02_selected");
    console.log ("Bottone next_02: selezionato");

}

function reset_button_next_02(s) {
    PP.assets.sprite.animation_play(button_next_02, "next_02_unselected");
    console.log ("Bottone next_02: deselezionato");
        
}


function update(s) {
}

function destroy(s) {
    console.log("Executing destroy() - story_02");
}    

PP.scenes.add("story_02", preload, create, update, destroy);
        