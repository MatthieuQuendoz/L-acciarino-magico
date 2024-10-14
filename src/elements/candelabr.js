let img_candelabr;
let candelabr;

let img_cable;
let cable;

let verify_candelabr =1;

function preload_candelabr(s) {
    img_candelabr = PP.assets.sprite.load_spritesheet(s, "assets/objects/ss_chandelier.png",  238, 226);
    img_cable = PP.assets.sprite.load_spritesheet(s, "assets/objects/ss_cable.png",  48, 217);
    
}

function animazione_candelabro () {
    PP.assets.sprite.animation_play(candelabr, "Candelabro: rotto");

}

function create_candelabr(s) {

    // CANDELABRO
    candelabr = PP.assets.sprite.add(s, img_candelabr, 2240, 3750, 0, 0);
    PP.physics.add(s, candelabr, PP.physics.type.DYNAMIC);
    PP.physics.set_immovable(candelabr, true);
    PP.physics.set_allow_gravity(candelabr, false);
    PP.physics.add_collider_f(s, floor5, candelabr, animazione_candelabro);

    PP.assets.sprite.animation_add(candelabr, "Candelabro: normale", 0, 0, 1, 0); 
    PP.assets.sprite.animation_add(candelabr, "Candelabro: rotto", 1, 2, 6, -1); 
    PP.assets.sprite.animation_play(candelabr, "Candelabro: normale");

    // CAVO
    cable = PP.assets.sprite.add(s, img_cable, 2355, 3533, 0, 0);
    cable.geometry.scale_y = 1;
    PP.physics.add(s, cable, PP.physics.type.STATIC);

    PP.assets.sprite.animation_add(cable, "Cavo: normale", 0, 0, 1, 0); 
    PP.assets.sprite.animation_add(cable, "Cavo: rotto", 1, 2, 5, 0); 
    PP.assets.sprite.animation_play(cable, "Cavo: normale");
    
}

function update_candelabr(s, position_shuriken_x, position_shuriken_y) {
    //console.log(player.geometry.x);
    //console.log(player.geometry.y);
    //console.log(candelabro.geometry.y);
    //console.log(candelabro.geometry.y);
    //condizione che verifica se il player sia nelle stesse cordinate x del candellabbro
        // e le stesse cordinate y durante la collisione tra piattaforma, player e pavimento

        //console.log(position_shuriken_x);
        //console.log(position_shuriken_y);

    // Caduta lampadario
    if (position_shuriken_x > 2000 && position_shuriken_x < 2400 &&
        position_shuriken_y > 3600 && position_shuriken_y < 3770) {

        PP.physics.set_velocity_y(candelabr, 400);
        PP.physics.set_acceleration_y(candelabr, 2000);
        
    }

    // Fermo lampadario
    if (candelabr.geometry.y > 4329) {
        console.log ("sono rotto a terra");
        PP.physics.set_velocity_y(candelabr, 0);
        PP.physics.set_acceleration_y(candelabr, 0);
        verify_candelabr++;
        console.log (verify_candelabr);
        //PP.physics.set_immovable(candelabro, false);
    }
  
}

function update_candelabr_flint(s, player, flint1) {
    // Se lo stato del lampadario è 2 allora creo pietra focaia
    if (verify_candelabr == 2){
        console.log("Pietra focaia!");
        flint1 = PP.assets.image.add(s, img_icon_flint, 2320, 4375, 0, 0);
        PP.physics.add(s, flint1, PP.physics.type.STATIC);
        PP.physics.add_overlap_f(s, player, flint1, get_score);
    }
}