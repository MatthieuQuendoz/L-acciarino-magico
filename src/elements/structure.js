let wall;
let floor;
let floor1;
let floor2;
let floor4;
let floor5;
let floor6;
let floor7;

let sealing;
let floorGO1;
let floorGO2;
let floorGO3;
let floorGO4;
let floor_next;

let floor_b1;
let floor_b2;
let floor_b3;
let floor_b4;
let floor_b0;

let c = 480;

let verifica_floor;

function preload_structure(s) {
    img_lava = PP.assets.image.load(s, "assets/structure/lava2.png");
    
}

// Cambio scena "game_over" tramite collisone player-structure
function changeScene_game_win(s, obj1, obj2) {
    PP.scenes.start("game_win");
}


//i numeri sono gli estremi della mappa, se il giocatore
//collide con il fllor e si trova in dentro la mappa può saltare
//in caso di estensione della mappa aumentare il valore
function collision_floor(s, player, floor) {
    verifica_floor = true;
    //console.log ("collisione struttura");
}


function create_structure(s, player) {

    // --- CASTELLO -------------------------------------------------------------------------------------------------

    // MURI
    // MURO 1
    wall = PP.shapes.rectangle_add(s, 0, 170+c/2, 1, c, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // MURO 2
    wall = PP.shapes.rectangle_add(s, c*7, 170+c+c*3/2, 1, c*3, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // MURO 3
    wall = PP.shapes.rectangle_add(s, c*9, 170+c*3/2, 1, c*3, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
    
    // MURO 4
    wall = PP.shapes.rectangle_add(s, c*9, 170+c*4+c/2, 1, c, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // MURO 5
    wall = PP.shapes.rectangle_add(s, c*12, 170+c*3+c/2, 1, c, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC);
    PP.physics.add_collider(s, player, wall);

    // MURO 6
    wall = PP.shapes.rectangle_add(s, 0, 170+c*4+c/2, 1, c, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // MURO 7
    wall = PP.shapes.rectangle_add(s, -c, 170+c*5+c/2, 1, c, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // MURO 8
    wall = PP.shapes.rectangle_add(s, 0, 170+c*6+c/2, 1, c, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // MURO 9
    wall = PP.shapes.rectangle_add(s, -c, 170+c*7+c/2, 1, c, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // MURO 10
    wall = PP.shapes.rectangle_add(s, 0, 170+c*8+c/2, 1, c, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // MURO 11
    wall = PP.shapes.rectangle_add(s, c*2, 170+c*5+c/2, 1, c, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // MURO 12
    wall = PP.shapes.rectangle_add(s, c*3, 170+c*6+c/2, 1, c, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // MURO 13
    wall = PP.shapes.rectangle_add(s, c*2, 170+c*7+c/2, 1, c, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // MURO 14
    wall = PP.shapes.rectangle_add(s, c*4, 170+c*7+c/2, 1, c, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // MURO 15
    wall = PP.shapes.rectangle_add(s, c*6, 170+c*7+c/2, 1, c, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // MURO 16
    wall = PP.shapes.rectangle_add(s, c*39-c/3, 170+c*7+c/2, 1, c, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    
    // SOFFITTO
    // SOFFITTO 1
    sealing = PP.shapes.rectangle_add(s, c*9/2, 170, c*9, 1, "0x000000", 0);
    PP.physics.add(s, sealing, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, sealing);

    // SOFFITTO 2
    sealing = PP.shapes.rectangle_add(s, c*10+c/2, 170+c*3, c*3, 1, "0x000000", 0);
    PP.physics.add(s, sealing, PP.physics.type.STATIC);
    PP.physics.add_collider(s, player, sealing);

    // SOFFITTO 3
    sealing = PP.shapes.rectangle_add(s, c*7/2, 170+c*4, c*7, 1, "0x000000", 0);
    PP.physics.add(s, sealing, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, sealing);

    // SOFFITTO 4
    sealing = PP.shapes.rectangle_add(s, -c/2, 170+c*5, c, 1, "0x000000", 0);
    PP.physics.add(s, sealing, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, sealing);
    
    // SOFFITTO 5
    sealing = PP.shapes.rectangle_add(s, -c/2, 170+c*7, c, 1, "0x000000", 0);
    PP.physics.add(s, sealing, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, sealing);

    // SOFFITTO 6
    sealing = PP.shapes.rectangle_add(s, c*2+c/2, 170+c*6, c, 1, "0x000000", 0);
    PP.physics.add(s, sealing, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, sealing);

    // SOFFITTO 7
    sealing = PP.shapes.rectangle_add(s, c*2+c*2/2, 170+c*8, c*2, 1, "0x000000", 0);
    PP.physics.add(s, sealing, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, sealing);

    // SOFFITTO 8
    sealing = PP.shapes.rectangle_add(s, c*4+c*2/2, 170+c*7, c*2, 1, "0x000000", 0);
    PP.physics.add(s, sealing, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, sealing);

    // SOFFITTO 9
    sealing = PP.shapes.rectangle_add(s, c*6+c*2/2, 170+c*8, c*2, 1, "0x000000", 0);
    PP.physics.add(s, sealing, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, sealing);

    // SOFFITTO 10
    sealing = PP.shapes.rectangle_add(s, c*6+c/2, 170+c*3, c, 1, "0x000000", 0);
    PP.physics.add(s, sealing, PP.physics.type.STATIC);
    PP.physics.add_collider(s, player, sealing);


    // PAVIMENTI
    // PAVIMENTO 1
    floorS = PP.shapes.rectangle_add(s, c*7/2, 170+c, c*7, 1, "0x000000", 0);
    PP.physics.add(s, floorS, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floorS, collision_floor);

    // PAVIMENTO 2
    floor7 = PP.shapes.rectangle_add(s, c*10+c/2, 170+c*4, c*3, 1, "0x000000", 0);
    PP.physics.add(s, floor7, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor7, collision_floor);

    // PAVIMENTO 3
    floor2 = PP.shapes.rectangle_add(s, c*2+c*5/2, 170+c*5, c*5, 10, "0x000000", 0);
    PP.physics.add(s, floor2, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floor2, collision_floor);

    // PAVIMENTO 4
    floor4 = PP.shapes.rectangle_add(s, -c/2, 170+c*6, c, 1, "0x000000", 0);
    PP.physics.add(s, floor4, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floor4, collision_floor);
    
    // PAVIMENTO 5
    floor = PP.shapes.rectangle_add(s, -c/2, 170+c*8, c, 1, "0x000000", 0);
    PP.physics.add(s, floor, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floor, collision_floor);

    // PAVIMENTO 6
    floor = PP.shapes.rectangle_add(s, c*2+c/2, 170+c*7, c, 1, "0x000000", 0);
    PP.physics.add(s, floor, PP.physics.type.STATIC);
    PP.physics.add_collider_f(s, player, floor, collision_floor);

    // PAVIMENTO 7
    floor5 = PP.shapes.rectangle_add(s, c*2+c*9/2, 170+c*9, c*9, 1, "0x000000", 0);
    PP.physics.add(s, floor5, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floor5, collision_floor);

    
    // PAVIMENTO GAME OVER
    // PAVIMENTO GO 1
    floorGO1 = PP.shapes.rectangle_add(s, c*7+c*2/2, 170+c*5, c*2, 1, "0x000000", 0);
    //floorGO1 = PP.assets.image.add (s, img_lava, c*7, 170+c*5, 0, 0);
    PP.physics.add(s, floorGO1, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floorGO1, changeScene_game_over);

    // PAVIMENTO GO 1
    floorGO4 = PP.shapes.rectangle_add(s, c*2/2, 170+c*9, c*2, 1, "0x000000", 0);
    //floorGO1 = PP.assets.image.add (s, img_lava, c*7, 170+c*5, 0, 0);
    PP.physics.add(s, floorGO4, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floorGO4, changeScene_game_over);


    
    // --- BOSCO -------------------------------------------------------------------------------------------------
    // MURI
    // MURO 1
    wall = PP.shapes.rectangle_add(s, c*11, 170+c*9+c/4, 1, c/2, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // MURO 2
    wall = PP.shapes.rectangle_add(s, c*13, 170+c*9+c/4, 1, c/2, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // MURO 3
    wall = PP.shapes.rectangle_add(s, c*15, 170+c*9+c/4, 1, c/2, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // MURO 4
    wall = PP.shapes.rectangle_add(s, c*26, 170+c*9+c/4, 1, c/2, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);
    
    // PAVIMENTI
    // PAVIMENTO 1 - CON DANNO
    floorGO2 = PP.shapes.rectangle_add(s, c*11+c*2/2, 170+c*9+c/2, c*2, 1, "0x000000", 0);
    PP.physics.add(s, floorGO2, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floorGO2, changeScene_game_over);

    // PAVIMENTO 2
    floor6 = PP.shapes.rectangle_add(s, c*13+c*2/2, 170+c*9, c*2, 1, "0x000000", 0);
    PP.physics.add(s, floor6, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floor6, collision_floor);

    // PAVIMENTO 3 - CON DANNO
    floorGO3 = PP.shapes.rectangle_add(s, c*15+c*11/2, 170+c*9+c/2, c*11, 1, "0x000000", 0);
    PP.physics.add(s, floorGO3, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floorGO3, changeScene_game_over);

    // PAVIMENTO 4
    floor_b0 = PP.shapes.rectangle_add(s, c*26+c*4/2, 170+c*9, c*4, 1, "0x000000", 0);
    PP.physics.add(s, floor_b0, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floor_b0, collision_floor);


    
    // --- VILLAGGIO -------------------------------------------------------------------------------------------------
    // MURI
    // MURO 1
    wall = PP.shapes.rectangle_add(s, c*30, 170+c*8+c/8*7, 1, c/4, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // MURO 2
    wall = PP.shapes.rectangle_add(s, c*31, 170+c*8+c/8*5, 1, c/4, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // MURO 3
    wall = PP.shapes.rectangle_add(s, c*32, 170+c*8+c/8*3, 1, c/4, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // MURO 4
    wall = PP.shapes.rectangle_add(s, c*33, 170+c*8+c/8*1, 1, c/4, "0x000000", 0);
    PP.physics.add(s, wall, PP.physics.type.STATIC); 
    PP.physics.add_collider(s, player, wall);

    // PAVIMENTI
    // PAVIMENTO 1
    floor_b1 = PP.shapes.rectangle_add(s, c*30+c/2, 170+c*8+c/4*3, c, 1, "0x000000", 0);
    PP.physics.add(s, floor_b1, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floor_b1, collision_floor);

    // PAVIMENTO 2
    floor_b2 = PP.shapes.rectangle_add(s, c*31+c/2, 170+c*8+c/2, c, 1, "0x000000", 0);
    PP.physics.add(s, floor_b2, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floor_b2, collision_floor);

    // PAVIMENTO 3
    floor_b3 = PP.shapes.rectangle_add(s, c*32+c/2, 170+c*8+c/4, c, 1, "0x000000", 0);
    PP.physics.add(s, floor_b3, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floor_b3, collision_floor);

    // PAVIMENTO 4
    floor_b4 = PP.shapes.rectangle_add(s, c*36+c/2, 170+c*8, c*7, 1, "0x000000", 0);
    PP.physics.add(s, floor_b4, PP.physics.type.STATIC); 
    PP.physics.add_collider_f(s, player, floor_b4, collision_floor);
    
}

function update_structure(s){
    collision_wall(s);
}