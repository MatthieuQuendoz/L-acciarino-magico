let img_instruction_movement;
let img_instruction_interaction;
let img_instruction_interaction1;
let img_instruction_interaction2;
let img_instruction_interaction3;
let img_instruction_interaction4;
let img_instruction_sword;
let img_instruction_jump;
let img_instruction_bow;

let instruction_movement;
let instruction_interaction;
let instruction_interaction1;
let instruction_interaction2;
let instruction_interaction3;
let instruction_interaction4;
let instruction_sword;
let instruction_jump;
let instruction_bow;

let instruction_movement_created = false;
let instruction_interaction_created = false;
let instruction_interaction1_created = false;
let instruction_interaction2_created = false;
let instruction_interaction3_created = false;
let instruction_interaction4_created = false;
let instruction_sword_created = false;
let instruction_jump_created = false;
let instruction_bow_created = false;

function preload_instruction(s) {
    img_instruction_movement = PP.assets.image.load(s, "assets/instruction/instruction_movement.png", 105, 49);
    img_instruction_interaction = PP.assets.image.load(s, "assets/instruction/instruction_interaction.png", 50, 48);
    img_instruction_sword = PP.assets.image.load(s, "assets/instruction/instruction_sword1.png", 50, 48);
    img_instruction_jump = PP.assets.image.load(s, "assets/instruction/instruction_jump.png", 50, 48);
    img_instruction_bow = PP.assets.image.load(s, "assets/instruction/instruction_bow1.png", 50, 48);
}

function create_instruction(s, player) {
    
}

function update_instruction(s, player) {

    // ISTRUZIONE: MOVIMENTO
    if (player.geometry.x > 0 && player.geometry.x < 600 &&
        player.geometry.y > 450 && player.geometry.y < 700) {
        
        if (instruction_movement_created == false) {
            //instruction_interaction = PP.assets.image.add(s, img_instruction_movement, player.geometry.x, player.geometry.y -200, 0.5, 0);
            instruction_interaction = PP.assets.image.add(s, img_instruction_movement, 400, 450, 0.5, 0);
        }
        //instruction_interaction.geometry.x = player.geometry.x;
        //instruction_interaction.geometry.y = player.geometry.y -200;
        instruction_movement_created = true;
        //console.log ("Create: Movimento");

    } else if ((player.geometry.x < 0 || player.geometry.x > 600 &&
                player.geometry.y > 450 && player.geometry.y < 700) && instruction_movement_created == true){
        PP.assets.destroy(instruction_interaction);
        instruction_movement_created = false;
        //console.log ("Destroy: Movimento");
    }

    // ISTRUZIONE: INTERAZIONE_01
    if (player.geometry.x > 1150 && player.geometry.x < 1350 &&
        player.geometry.y > 450 && player.geometry.y < 700) {
        
        if (instruction_interaction_created == false) {
            //instruction_interaction = PP.assets.image.add(s, img_instruction_interaction, player.geometry.x, player.geometry.y -200, 0.5, 0);
            instruction_interaction = PP.assets.image.add(s, img_instruction_interaction, chest_01.geometry.x, 450, 0.5, 0);
        }
        //instruction_interaction.geometry.x = player.geometry.x;
        //instruction_interaction.geometry.y = player.geometry.y -200;
        instruction_interaction_created = true;
        //console.log ("Create: Interazione");

    } else if ((player.geometry.x < 1150 || player.geometry.x > 1350 &&
                player.geometry.y > 450 && player.geometry.y < 700) && instruction_interaction_created == true){
        PP.assets.destroy(instruction_interaction);
        instruction_interaction_created = false;
        //console.log ("Destroy: Interazione");
    }

    // ISTRUZIONE: INTERAZIONE_02
    if (player.geometry.x > 5360 && player.geometry.x < 5700 &&
        player.geometry.y > 1800 && player.geometry.y < 2100) {
        
        if (instruction_interaction1_created == false) {
            //instruction_interaction = PP.assets.image.add(s, img_instruction_interaction, player.geometry.x, player.geometry.y -200, 0.5, 0);
            instruction_interaction1 = PP.assets.image.add(s, img_instruction_interaction, chest_02.geometry.x+80, 1900, 0.5, 0);
        }
        //instruction_interaction.geometry.x = player.geometry.x;
        //instruction_interaction.geometry.y = player.geometry.y -200;
        instruction_interaction1_created = true;
        //console.log ("Create: Interazione");

    } else if ((player.geometry.x < 5360 || player.geometry.x > 5700 &&
                player.geometry.y > 1800 && player.geometry.y < 2100) && instruction_interaction1_created == true){
        PP.assets.destroy(instruction_interaction1);
        instruction_interaction1_created = false;
        //console.log ("Destroy: Interazione");
    }

    // ISTRUZIONE: INTERAZIONE_03
    if (player.geometry.x > 1230 && player.geometry.x < 1420 &&
        player.geometry.y > 3200 && player.geometry.y < 3600) {
        
        if (instruction_interaction2_created == false) {
            //instruction_interaction = PP.assets.image.add(s, img_instruction_interaction, player.geometry.x, player.geometry.y -200, 0.5, 0);
            instruction_interaction2 = PP.assets.image.add(s, img_instruction_interaction, chest_04.geometry.x, 3300, 0.5, 0);
        }
        //instruction_interaction.geometry.x = player.geometry.x;
        //instruction_interaction.geometry.y = player.geometry.y -200;
        instruction_interaction2_created = true;
        //console.log ("Create: Interazione");

    } else if ((player.geometry.x < 1230 || player.geometry.x > 1420 &&
                player.geometry.y > 3200 && player.geometry.y < 3600) && instruction_interaction2_created == true){
        PP.assets.destroy(instruction_interaction2);
        instruction_interaction2_created = false;
        //console.log ("Destroy: Interazione");
    }

    // ISTRUZIONE: INTERAZIONE_04
    if (player.geometry.x > 3420 && player.geometry.x < 3580 &&
        player.geometry.y > 4200 && player.geometry.y < 4600) {
        
        if (instruction_interaction3_created == false) {
            //instruction_interaction = PP.assets.image.add(s, img_instruction_interaction, player.geometry.x, player.geometry.y -200, 0.5, 0);
            instruction_interaction3 = PP.assets.image.add(s, img_instruction_interaction, chest_05.geometry.x, 4300, 0.5, 0);
        }
        //instruction_interaction.geometry.x = player.geometry.x;
        //instruction_interaction.geometry.y = player.geometry.y -200;
        instruction_interaction3_created = true;
        //console.log ("Create: Interazione");

    } else if ((player.geometry.x < 3420 || player.geometry.x > 3580 &&
                player.geometry.y > 4200 && player.geometry.y < 4600) && instruction_interaction3_created == true){
        PP.assets.destroy(instruction_interaction3);
        instruction_interaction3_created = false;
        //console.log ("Destroy: Interazione");
    }

    // ISTRUZIONE: INTERAZIONE_05
    if (player.geometry.x > 12920 && player.geometry.x < 13100 &&
        player.geometry.y > 4200 && player.geometry.y < 4600) {
        
        if (instruction_interaction4_created == false) {
            //instruction_interaction = PP.assets.image.add(s, img_instruction_interaction, player.geometry.x, player.geometry.y -200, 0.5, 0);
            instruction_interaction4 = PP.assets.image.add(s, img_instruction_interaction, chest_06.geometry.x, 4300, 0.5, 0);
        }
        //instruction_interaction.geometry.x = player.geometry.x;
        //instruction_interaction.geometry.y = player.geometry.y -200;
        instruction_interaction4_created = true;
        //console.log ("Create: Interazione");

    } else if ((player.geometry.x < 12920 || player.geometry.x > 13100 &&
                player.geometry.y > 4200 && player.geometry.y < 4600) && instruction_interaction4_created == true){
        PP.assets.destroy(instruction_interaction4);
        instruction_interaction4_created = false;
        //console.log ("Destroy: Interazione");
    }

    

    // ISTRUZIONE: ATTACCO
    if (player.geometry.x > 1500 && player.geometry.x < 1950 &&
        player.geometry.y > 450 && player.geometry.y < 700) {
        
        if (instruction_sword_created == false) {
            //instruction_sword = PP.assets.image.add(s, img_instruction_sword, player.geometry.x, player.geometry.y -230, 0.5, 0);
            instruction_sword = PP.assets.image.add(s, img_instruction_sword, 1740, 450, 0.5, 0);
        }
        //instruction_sword.geometry.x = player.geometry.x;
        //instruction_sword.geometry.y = player.geometry.y -230;
        instruction_sword_created = true;
        //console.log ("Create: Spada");

    } else if ((player.geometry.x < 1500 || player.geometry.x > 1950 &&
                player.geometry.y > 450 && player.geometry.y < 700) && instruction_sword_created == true){
        PP.assets.destroy(instruction_sword);
        instruction_sword_created = false;
        //console.log ("Destroy: Spada");
    }

    // ISTRUZIONE: SALTO
    if (player.geometry.x > 3000 && player.geometry.x < 3400 &&
        player.geometry.y > 450 && player.geometry.y < 700) {
        
        if (instruction_jump_created == false) {
            //instruction_jump = PP.assets.image.add(s, img_instruction_jump, player.geometry.x, player.geometry.y -230, 0.5, 0);
            instruction_jump = PP.assets.image.add(s, img_instruction_jump, 3180, 450, 0.5, 0);
        }
        //instruction_jump.geometry.x = player.geometry.x;
        //instruction_jump.geometry.y = player.geometry.y -230;
        instruction_jump_created = true;
        //console.log ("Create: Salto");

    } else if ((player.geometry.x < 3000 || player.geometry.x > 3400 &&
                player.geometry.y > 450 && player.geometry.y < 700) && instruction_jump_created == true){
        PP.assets.destroy(instruction_jump);
        instruction_jump_created = false;
        //console.log ("Destroy: Salto");
    }

    // ISTRUZIONE: ARCO
    if (player.geometry.x > 2900 && player.geometry.x < 3300 &&
        player.geometry.y > 2400 && player.geometry.y < 2600) {
        
        if (instruction_bow_created == false) {
            //instruction_bow = PP.assets.image.add(s, img_instruction_bow, player.geometry.x, player.geometry.y -230, 0.5, 0);
            instruction_bow = PP.assets.image.add(s, img_instruction_bow, 3160, 2360, 0.5, 0);
        }
        //instruction_bow.geometry.x = player.geometry.x;
        //instruction_bow.geometry.y = player.geometry.y -230;
        instruction_bow_created = true;
        //console.log ("Create: Arco");

    } else if ((player.geometry.x < 2900 || player.geometry.x > 3300 &&
                player.geometry.y > 2400 && player.geometry.y < 2600) && instruction_bow_created == true){
        PP.assets.destroy(instruction_bow);
        instruction_bow_created = false;
        //console.log ("Destroy: Arco");
    }

    

    
     

}