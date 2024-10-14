let img_game_win_01;
let background_game_win_01;

let img_game_win_02;
let background_game_win_02;

function preload(s) {
    img_game_win_01 = PP.assets.image.load(s, "assets/drawings/game_win_01.png");
    img_game_win_02 = PP.assets.image.load(s, "assets/drawings/game_win_02.png");
}

function create(s) {

    if (score == 3) {
        background_game_win_02 = PP.assets.image.add(s, img_game_win_02, 0, 0, 0, 0);
    } 
    background_game_win_01 = PP.assets.image.add(s, img_game_win_01, 0, 0, 0, 0);

    
}

function update(s) {

    if (PP.interactive.kb.is_key_down (s, PP.key_codes.SPACE)){
        PP.scenes.start("cover");

    }

}

function destroy(s) {

}

PP.scenes.add("game_win", preload, create, update, destroy);