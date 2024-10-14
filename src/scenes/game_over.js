let img_game_over_2;
let game_over_2;

let img_game_over_1;
let game_over_1;


let img_game_over_3;
let game_over_3;





function preload(s) {

    img_game_over_1 = PP.assets.image.load(s, "assets/drawings/game_over_01.png");

}

function create(s) {


    
    game_over_1 = PP.assets.image.add(s, img_game_over_1, 0, 0, 0, 0);

}

function update(s) {

  
  
   
    //if (PP.interactive.kb.is_key_down (s, PP.key_codes.SPACE)){

     //   PP.scenes.start("cover");
    //}

}

function destroy(s) {

}

PP.scenes.add("game_over", preload, create, update, destroy);