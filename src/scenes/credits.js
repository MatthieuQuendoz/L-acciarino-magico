let img_background_credits;
let img_button_back;

let background_credits;
let button_back;
    
function preload(s) {

    console.log("Executing preload() - credits");

    img_background_credits = PP.assets.image.load(s, "assets/drawings/credits.png");
    img_button_back = PP.assets.sprite.load_spritesheet(s, "assets/buttons/ss_button_back.png", 108, 73);

}
    
function create(s) {

    console.log("Executing create() - credits");

    background_credits = PP.assets.image.add(s, img_background_credits, 0, 0, 0, 0);
    button_back = PP.assets.sprite.add(s, img_button_back, 25, 260, 0, 0);

    PP.interactive.mouse.add (button_back, "pointerover", change_button_back);
    PP.interactive.mouse.add (button_back, "pointerout", reset_button_back);
    PP.interactive.mouse.add (button_back, "pointerdown", change_scene_cover);

    PP.assets.sprite.animation_add(button_back, "back_unselected", 0, 0, 5, 0); 
    PP.assets.sprite.animation_add(button_back, "back_selected", 1, 1, 5, 0);

}

function change_scene_cover(s) {
    PP.scenes.start("cover");
}

function change_button_back(s) {
    PP.assets.sprite.animation_play(button_back, "back_selected");
    console.log ("Bottone back: selezionato");

}

function reset_button_back(s) {
    PP.assets.sprite.animation_play(button_back, "back_unselected");
    console.log ("Bottone back: deselezionato");
        
}


function update(s) {

    /*
    // Cambio scena: game_play tramite input "ENTER"
    if (PP.interactive.kb.is_key_down (s, PP.key_codes.ENTER) || PP.interactive.kb.is_key_down (s, PP.key_codes.RIGHT)){
        PP.scenes.start("game_play");
        console.log ("Executing scene: game_play");
    
    } 

    // Cambio scena: cover tramite input "LEFT"
    if (PP.interactive.kb.is_key_down (s, PP.key_codes.LEFT)){
        PP.scenes.start("cover");
        console.log ("Executing scene: cover");
    
    } 
    */

}

function destroy(s) {
    console.log("Executing destroy() - credits");

}    

PP.scenes.add("credits", preload, create, update, destroy);
        