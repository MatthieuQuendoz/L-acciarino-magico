let img_game_over;
let background_game_over;

let xxx;



function preload(s) {

    img_game_over = PP.assets.image.load(s, "assets/drawings/game_over.jpg");

}

function create(s) {


    /*
    PP.shapes.text_styled_add(s, 
                PP.game.config.canvas_width / 2,
                PP.game.config.canvas_height = 400,
                "Game Over",
                100,
                "Helvetica",
                "normal",
                "0xFFFFFF",
                null,
                0.5,
                0.5);

    PP.shapes.text_styled_add(s, 
                PP.game.config.canvas_width / 2,
                PP.game.config.canvas_height = 475,
                "Clicca SPACE",
                30,
                "Helvetica",
                "italic",
                "0xFFFFFF",
                null,
                0.5,
                0.5);
    */

    background_game_over = PP.assets.image.add(s, img_game_over, 0, 0, 0, 0);

}

function update(s) {

    if (PP.interactive.kb.is_key_down (s, PP.key_codes.SPACE)){
        xxx = false;
        PP.scenes.start("cover");
    }

}

function destroy(s) {

}

PP.scenes.add("game_over", preload, create, update, destroy);