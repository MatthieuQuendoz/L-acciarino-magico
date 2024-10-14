/* 



----- FILE NON UTILIZZATO -----



let img_coins_1;
let img_coins_2;

function preload_coins(s) {
    
    // Caricamento assets grafici
    img_coins_1   = PP.assets.image.load(s, "assets/collectibles/mushroom_1.png");
    img_coins_2   = PP.assets.image.load(s, "assets/collectibles/mushroom_2.png");

}

function collision_coins(s, player, coins) {
   
    // Creazione collider funghetto-player
    // 1) Distruzione funghetto
    PP.assets.destroy(coins);
    verify_candelabr++;

    // 2) Modifica variabile "score"
    score = score + 1;

}

function create_coins(s, player) {

    // Creazione di 10 funghetti
    for (let i=0; i<3; i++) {

        let mush_img;

        // Creazione random del tipo di funghetto(con una probabilita' del 50%)
        if(Math.random() < 0.5) {
            mush_img = img_coins_1;
        } else {
            mush_img = img_coins_2;
        }
        
        // Creazione singolo funghetto + fisica + funzione collider
    }

}


function update_coins(s, player) {
    // Nothing to do...
    if (verify_candelabr == 2){
        console.log(verify_candelabr);
        let coins = PP.assets.image.add(s,  img_coins_1, 2300, 4400, 0, 0);
        coins.geometry.scale_y = 2;
        coins.geometry.scale_x = 2;
        PP.physics.add(s, coins, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, coins, collision_coins);
        }
        
}
*/
