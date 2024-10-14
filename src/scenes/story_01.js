let img_background_story_01;
let img_button_back_01;
let img_button_next_01;

let background_story_01;
let button_back_01;
let button_next_01;
    
function preload(s) {

    console.log("Executing preload() - story_01");

    img_background_story_01 = PP.assets.image.load(s, "assets/drawings/Story_01.png");
    img_button_back_01 = PP.assets.sprite.load_spritesheet(s, "assets/buttons/ss_button_back.png", 108, 73);
    img_button_next_01 = PP.assets.sprite.load_spritesheet(s, "assets/buttons/ss_button_next.png", 108, 73);

}
    
function create(s) {

    console.log("Executing create() - story_01");

    background_story_01 = PP.assets.image.add(s, img_background_story_01, 0, 0, 0, 0);

    button_back_01 = PP.assets.sprite.add(s, img_button_back_01, 25, 360, 0, 0.5);
    button_next_01 = PP.assets.sprite.add(s, img_button_next_01, 1255, 360, 1, 0.5);

    PP.interactive.mouse.add (button_back_01, "pointerover", change_button_back_01);
    PP.interactive.mouse.add (button_back_01, "pointerout", reset_button_back_01);
    PP.interactive.mouse.add (button_back_01, "pointerdown", change_scene_cover);

    PP.interactive.mouse.add (button_next_01, "pointerover", change_button_next_01);
    PP.interactive.mouse.add (button_next_01, "pointerout", reset_button_next_01);
    PP.interactive.mouse.add (button_next_01, "pointerdown", change_scene_story_02);

    // Creazione animazioni
    PP.assets.sprite.animation_add(button_back_01, "back_01_unselected", 0, 0, 5, 0); 
    PP.assets.sprite.animation_add(button_back_01, "back_01_selected", 1, 1, 5, 0);

    PP.assets.sprite.animation_add(button_next_01, "next_01_unselected", 0, 0, 5, 0); 
    PP.assets.sprite.animation_add(button_next_01, "next_01_selected", 1, 1, 5, 0);

}

// FUNZIONI DI CAMBIO SCENA
function change_scene_cover(s) {
    PP.scenes.start("cover");
}

function change_scene_story_02(s) {
    PP.scenes.start("story_02");
}

function change_button_back_01(s) {
    PP.assets.sprite.animation_play(button_back_01, "back_01_selected");
    console.log ("Bottone back_01: selezionato");

}

function reset_button_back_01(s) {
    PP.assets.sprite.animation_play(button_back_01, "back_01_unselected");
    console.log ("Bottone back_01: deselezionato");
        
}

function change_button_next_01(s) {
    PP.assets.sprite.animation_play(button_next_01, "next_01_selected");
    console.log ("Bottone next_01: selezionato");

}

function reset_button_next_01(s) {
    PP.assets.sprite.animation_play(button_next_01, "next_01_unselected");
    console.log ("Bottone next_01: deselezionato");
        
}


function update(s) {
}

function destroy(s) {
    console.log("Executing destroy() - story_01");
}    

PP.scenes.add("story_01", preload, create, update, destroy);
        