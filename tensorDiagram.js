const tensors_ex1 = [
    { name: "A", shape: "circle", x: 1, y: 0, idEqPart: "M_A_ex1",
        indices: [
            { pos: "left", name: "i" },
            { pos: "right", name: "j" }
        ]
    }
];

const contractions_ex1 = [];

/*const contractions_ex1 = [
    { source: 0, target: "left", name: "i" },
    { source: 0, target: "right", name: "j" },
];
*/

drawDiagram(tensors_ex1, contractions_ex1, "containerCircle", 220, 110, 0);


const tensors2_ex1 = [
    { x: 1, y: 0, name: "B", idEqPart: "M_B_ex1", shape: "square",
        indices: [
            { pos: "left", name: "k" },
            { pos: "right", name: "l" }
        ]
    },
];
const contractions2_ex1 = [];

drawDiagram(tensors2_ex1, contractions2_ex1, "containerSquare", 220, 110, 1);

const tensors3_ex1 = [
    { x: 1, y: 0, name: "C", idEqPart: "M_C_ex1", shape: "triangleUp",
        indices: [
            { pos: "left", name: "m" },
            { pos: "right", name: "n" }
        ]
    },
];
const contractions3_ex1 = [];

drawDiagram(tensors3_ex1, contractions3_ex1, "containerTriangleUp", 220, 110, 2);

const tensors4_ex1 = [
    { x: 1, y: 0, name: "D", idEqPart: "M_D_ex1", shape: "triangleDown",
        indices: [
            { pos: "left", name: "p" },
            { pos: "right", name: "q" }
        ]
    },
];
const contractions4_ex1 = [];

drawDiagram(tensors4_ex1, contractions4_ex1, "containerTriangleDown", 220, 110, 3);


const tensors5_ex1 = [
    { x: 1, y: 0, name: "E", idEqPart: "M_E_ex1", shape: "triangleLeft",
        indices: [
            { pos: "left", name: "r" },
            { pos: "right", name: "s" }
        ]
    },
];
const contractions5_ex1 = [];

drawDiagram(tensors5_ex1, contractions5_ex1, "containerTriangleLeft", 220, 110, 0);

const tensors6_ex1 = [
    { x: 1, y: 0, name: "F", idEqPart: "M_F_ex1", shape: "triangleRight",
        indices: [
            { pos: "left", name: "t" },
            { pos: "right", name: "u" }
        ]
    },
];
const contractions6_ex1 = [];

drawDiagram(tensors6_ex1, contractions6_ex1, "containerTriangleRight", 220, 110, 1);

const tensors7_ex1 = [
    { x: 1, y: 0, name: "G", idEqPart: "M_G_ex1", shape: "rectangle",
        indices: [
            { pos: "left", name: "v" },
            { pos: "left", name: "w" },
            { pos: "right", name: "x" },
            { pos: "right", name: "y" },
            { pos: "right", name: "z" }
        ]
    },
];
const contractions7_ex1 = [];

drawDiagram(tensors7_ex1, contractions7_ex1, "containerRectangle", 220, 200, 2);




//--------------------------------------------------------------------------------------------------------------------------------



const tensors = [
    { x: 0, y: 0, name: "x", idEqPart: "v_x",
        indices: [
            { pos: "right", name: "i" },
        ]
    },
    { x: 1, y: 0, name: "A", idEqPart: "M_A",
        indices: [
            { pos: "left", name: "i" },
            { pos: "right", name: "j" }
        ]
    },
    { x: 2, y: 0, name: "B", idEqPart: "M_B",
        indices: [
            { pos: "left", name: "j" },
            { pos: "right", name: "k" }
        ]
    },
];

const contractions = [
    { source: 0, target: 1 , name: "i" },
    { source: 1, target: 2 , name: "j" },
];

drawDiagram(tensors, contractions, "firstcontainer", 220, 120);



tensors_einsumindl1 = [
    { x: 1, y: 0, name: "A", idEqPart: "einsumindl1_A_ik",
        indices: [
            { pos: "left", name: "i" },
            { pos: "right", name: "k" }
        ]
    },
    { x: 2, y: 0, name: "B", idEqPart: "einsumindl1_B_kj",
        indices: [
            { pos: "left", name: "k" },
            { pos: "right", name: "j" }
        ]
    },
];

const contractions_einsumindl1 = [
    { source: 0, target: 1, name: "k" },
];

drawDiagram(tensors_einsumindl1, contractions_einsumindl1, "einsumindl1", 220, 120);


//--


const tensors_einsumindl2 = [
    { x: 0, y: 0, name: "a", idEqPart: "einsumindl2_a_i",
        indices: [
            { pos: "right", name: "i" },
        ]
    },
    { x: 1, y: 0, name: "b", idEqPart: "einsumindl2_b_i",
        indices: [
            { pos: "left", name: "i" },
        ]
    },
];

const contractions_einsumindl2 = [
    { source: 0, target: 1, name: "i" },
];

drawDiagram(tensors_einsumindl2, contractions_einsumindl2, "einsumindl2", 100, 120);


const tensors_einsumindl3 = [
    { x: 1, y: 0, name: "T", idEqPart: "einsumindl3_T_ntk",
        indices: [
            { pos: "left", name: "n" },
            { pos: "down", name: "t" },
            { pos: "right", name: "k" }
        ]
    },
    { x: 2, y: 0, name: "W", idEqPart: "einsumindl3_W_kq",
        indices: [
            { pos: "left", name: "k" },
            { pos: "right", name: "q" }
        ]
    },
];

const contractions_einsumindl3 = [
    { source: 0, target: 1, name: "k" },
];

drawDiagram(tensors_einsumindl3, contractions_einsumindl3, "einsumindl3", 220, 130);



const tensors_einsumindl4 = [
    { x: 1, y: 0, name: "T", idEqPart: "einsumindl4_T_ntkm", labPos: "leftup" ,
        indices: [
            { pos: "left", name: "n" },
            { pos: "down", name: "t" },
            { pos: "right", name: "k" },
            { pos: "up", name: "m" }
        ]
    },
    { x: 2, y: 0, name: "W", idEqPart: "einsumindl4_W_kq",
        indices: [
            { pos: "left", name: "k" },
            { pos: "right", name: "q" }
        ]
    },
];

const contractions_einsumindl4 = [
    { source: 0, target: 1, name: "k" },
];

drawDiagram(tensors_einsumindl4, contractions_einsumindl4, "einsumindl4", 220, 140);



const tensors_einsumindl5_1 = [
    { x: 1, y: 0, name: "B", idEqPart: "einsumindl5_B_ji",
        indices: [
            { pos: "left", name: "j" },
            { pos: "right", name: "i" }
        ]
    },
];

const contractions_einsumindl5_1 = [];

const tensors_einsumindl5_2 = [
    { x: 1, y: 0, name: "A", idEqPart: "einsumindl5_A_ij",
        indices: [
            { pos: "left", name: "i" },
            { pos: "right", name: "j" }
        ]
    },
];

const contractions_einsumindl5_2 = [];

drawDiagram(tensors_einsumindl5_1, contractions_einsumindl5_1, "einsumindl5_1", 160, 110, 1);
drawDiagram(tensors_einsumindl5_2, contractions_einsumindl5_2, "einsumindl5_2", 160, 110, 2);



const tensors_einsumindl6 = [
    { x: 1, y: 0, name: "A", idEqPart: "einsumindl6_A_ij",
        indices: [
            { pos: "left", name: "i" },
            { pos: "right", name: "j" }
        ]
    },
];

const contractions_einsumindl6 = [];

drawDiagram(tensors_einsumindl6, contractions_einsumindl6, "einsumindl6", 160, 120);



const tensors_einsumindl7 = [
    { x: 1, y: 0, name: "A", idEqPart: "einsumindl7_A_ij",
        indices: [
            { pos: "left", name: "i" },
            { pos: "right", name: "j" }
        ]
    },
];

const contractions_einsumindl7 = [];

drawDiagram(tensors_einsumindl7, contractions_einsumindl7, "einsumindl7", 160, 120, 1);



const tensors_einsumindl8 = [
    { x: 1, y: 0, name: "A", idEqPart: "einsumindl8_A_ij",
        indices: [
            { pos: "left", name: "i" },
            { pos: "right", name: "j" }
        ]
    },
];

const contractions_einsumindl8 = [];

drawDiagram(tensors_einsumindl8, contractions_einsumindl8, "einsumindl8", 160, 120, 2);



const tensors_einsumindl9 = [
    { x: 1, y: 0, name: "A", idEqPart: "einsumindl9_A_ik",
        indices: [
            { pos: "left", name: "i" },
            { pos: "right", name: "k" }
        ]
    },
    { x: 2, y: 0, name: "b", idEqPart: "einsumindl9_b_k",
        indices: [
            { pos: "left", name: "k" }
        ]
    },
];

const contractions_einsumindl9 = [
    { source: 0, target: 1, name: "k" },
];

drawDiagram(tensors_einsumindl9, contractions_einsumindl9, "einsumindl9", 170, 120);



const tensors_einsumindl10 = [
    { x: 1, y: 0, name: "A", idEqPart: "einsumindl10_A_ik",
        indices: [
            { pos: "left", name: "i" },
            { pos: "right", name: "k" }
        ]
    },
    { x: 2, y: 0, name: "B", idEqPart: "einsumindl10_B_kj",
        indices: [
            { pos: "left", name: "k" },
            { pos: "right", name: "j" }
        ]
    },
];

const contractions_einsumindl10 = [
    { source: 0, target: 1, name: "k" },
];

drawDiagram(tensors_einsumindl10, contractions_einsumindl10, "einsumindl10", 220, 120);




const tensors_einsumindl11 = [
    { x: 0, y: 0, name: "a", idEqPart: "einsumindl11_a_i",
        indices: [
            { pos: "right", name: "i" }
        ]
    },
    { x: 1, y: 0, name: "b", idEqPart: "einsumindl11_b_i",
        indices: [
            { pos: "left", name: "i" }
        ]
    },
];

const contractions_einsumindl11 = [
    { source: 0, target: 1, name: "i" },
];

drawDiagram(tensors_einsumindl11, contractions_einsumindl11, "einsumindl11", 100, 120);



const tensors_einsumindl12 = [
    { x: 1, y: 0, name: "A", idEqPart: "einsumindl12_A_ij",
        indices: [
            { pos: "left", name: "i" },
            { pos: "right", name: "j" }
        ]
    },
    { x: 2, y: 0, name: "B", idEqPart: "einsumindl12_B_ij",
        indices: [
            { pos: "left", name: "j" },
            { pos: "right", name: "i" }
        ]
    },
];

const contractions_einsumindl12 = [
    { source: 0, target: 1, name: "i", pos: "down" }, // default is pos: "up"
    { source: 0, target: 1, name: "j" },
];

drawDiagram(tensors_einsumindl12, contractions_einsumindl12, "einsumindl12", 220, 120);



const tensors_einsumindl13 = [
    { x: 1, y: 0, name: "A", idEqPart: "einsumindl13_A_ij"
        ,
        indices: [
            { pos: "left", name: "i" },
            { pos: "right", name: "j" }
        ]
    },
    { x: 3, y: 0, name: "B", idEqPart: "einsumindl13_B_ij",
        indices: [
            { pos: "left", name: "j" },
            { pos: "right", name: "i" }
        ]
    },
];

const contractions_einsumindl13 = [ //check this case!!
    //{ source: 0, target: 1, name: "i" },
    //{ source: 0, target: 1, name: "j" },
];

drawDiagram(tensors_einsumindl13, contractions_einsumindl13, "einsumindl13", 240, 120);


const tensors_einsumindl14 = [
    { x: 1, y: 0, name: "a", idEqPart: "einsumindl14_a_i",
        indices: [
            { pos: "left", name: "i" }
        ]
    },
    { x: 2, y: 0, name: "b", idEqPart: "einsumindl14_b_j",
        indices: [
            { pos: "right", name: "j" }
        ]
    },
];

const contractions_einsumindl14 = [];

const tensors_einsumindl14_r = [
    { x: 1, y: 0, name: "C", idEqPart: "einsumindl14_C_ij",
        indices: [
            { pos: "left", name: "i" },
            { pos: "right", name: "j" }
        ]
    },
];

const contractions_einsumindl14_r = [];

drawDiagram(tensors_einsumindl14, contractions_einsumindl14, "einsumindl14", 220, 120);
drawDiagram(tensors_einsumindl14_r, contractions_einsumindl14_r, "einsumindl14_r", 210, 120, 2);



const tensors_einsumindl15 = [
    { x: 1, y: 0, name: "A", idEqPart: "einsumindl15_A_ijk",
        indices: [
            { pos: "left", name: "i" },
            { pos: "down", name: "j" },
            { pos: "right", name: "k" }
        ]
    },
    { x: 2, y: 0, name: "B", idEqPart: "einsumindl15_B_ikl",
        indices: [
            { pos: "left", name: "k" },
            { pos: "down", name: "i" },
            { pos: "right", name: "l" }
        ]
    },
];

const contractions_einsumindl15 = [
    { source: 0, target: 1, name: "k" }
];

drawDiagram(tensors_einsumindl15, contractions_einsumindl15, "einsumindl15", 220, 130);



const tensors_einsumindl16 = [
    { x: 1, y: 1, name: "A", idEqPart: "einsumindl16_A_pqrs", labPos: "leftup", shape: "rectangle",
        indices: [
            { pos: "left", name: "p" },
            { pos: "right", name: "q" },
            { pos: "right", name: "r" },
            { pos: "up", name: "s" }
        ]
    },
    { x: 2, y: 1, name: "B", idEqPart: "einsumindl16_B_tuqvr", labPos: "leftup", shape: "rectangle",
        indices: [
            { pos: "left", name: "q" },
            { pos: "left", name: "r" },
            { pos: "down", name: "t" },
            { pos: "right", name: "u" },
            { pos: "up", name: "v" }
        ]
    },
];

const contractions_einsumindl16 = [
    { source: 0, target: 1, name: "q" },
    { source: 0, target: 1, name: "r" },  // must be drawn in parallel w/ q
];

drawDiagram(tensors_einsumindl16, contractions_einsumindl16, "einsumindl16", 220, 260);



const tensors_einsumindl17 = [
    { x: 1, y: 0, name: "A", idEqPart: "einsumindl17_A_ik",
        indices: [
            { pos: "left", name: "i" },
            { pos: "right", name: "k" }
        ]
    },
    { x: 2, y: 0, name: "B", idEqPart: "einsumindl17_B_jkl",
        indices: [
            { pos: "left", name: "k" },
            { pos: "down", name: "j" },
            { pos: "right", name: "l" }
        ]
    },
    { x: 3, y: 0, name: "C", idEqPart: "einsumindl17_C_il",
        indices: [
            { pos: "left", name: "l" },
            { pos: "right", name: "i" }
        ]
    },
];

const contractions_einsumindl17 = [
    { source: 0, target: 1, name: "k" },
    { source: 1, target: 2, name: "l" },
];

drawDiagram(tensors_einsumindl17, contractions_einsumindl17, "einsumindl17", 270, 130);



//-----------------------------------------------------


const tensors_dot = [
    { name: "A", shape: "dot", x: 1, y: 0, idEqPart: "M_A_dot",
        indices: [
            { pos: "left", name: "i" },
            { pos: "right", name: "j" }
        ]
    }
];

const contractions_dot = [];


drawDiagram(tensors_dot, contractions_dot, "containerDot", 220, 110, 0);




const tensors_ex_curve1 = [
    { x: 1, y: 0, name: "A", idEqPart: "ex_curve1_A_ij",
        indices: [
            { pos: "left", name: "i" },
            { pos: "right", name: "j" }
        ]
    },
    { x: 2, y: 0, name: "B", idEqPart: "ex_curve1_B_ij",
        indices: [
            { pos: "left", name: "j" },
            { pos: "right", name: "i" }
        ]
    },
];

const contractions_ex_curve1 = [
    { source: 0, target: 1, name: "i", pos: "up" }, // default is pos: "up"
    { source: 0, target: 1, name: "j" },
];

drawDiagram(tensors_ex_curve1, contractions_ex_curve1, "container_ex_curve1", 220, 120);




const tensors_ex_curve2 = [
    { x: 1, y: 0, name: "A", idEqPart: "ex_curve2_A_ij",
        indices: [
            { pos: "left", name: "i" },
            { pos: "right", name: "j" }
        ]
    },
    { x: 2, y: 0, name: "B", idEqPart: "ex_curve2_B_ij",
        indices: [
            { pos: "right", name: "j" }
        ]
    },
];

const contractions_ex_curve2 = [
    { source: 0, target: 1, name: "j" }, // default is pos: "up"
];

drawDiagram(tensors_ex_curve2, contractions_ex_curve2, "container_ex_curve2", 220, 120);



const tensors_ex_curve3 = [
    { x: 1, y: 0, name: "A", idEqPart: "ex_curve3_A_ij",
        indices: [
            { pos: "left", name: "i" },
            { pos: "right", name: "j" }
        ]
    },
    { x: 2, y: 0, name: "B", idEqPart: "ex_curve3_B_ij",
        indices: [
            { pos: "right", name: "j" }
        ]
    },
];

const contractions_ex_curve3 = [
    { source: 0, target: 1, name: "j", pos: "down" }, // default is pos: "up"
];

drawDiagram(tensors_ex_curve3, contractions_ex_curve3, "container_ex_curve3", 220, 120);






const tensors_ex_curve4 = [
    { x: 1, y: 0, name: "A", idEqPart: "ex_curve4_A_ij",
        indices: [
            { pos: "left", name: "i" }
        ]
    },
    { x: 2, y: 0, name: "B", idEqPart: "ex_curve4_B_ij",
        indices: [
            { pos: "left", name: "i" },
            { pos: "right", name: "j" }
        ]
    },
];

const contractions_ex_curve4 = [
    { source: 0, target: 1, name: "i" }, // default is pos: "up"
];

drawDiagram(tensors_ex_curve4, contractions_ex_curve4, "container_ex_curve4", 220, 120);



const tensors_ex_curve5 = [
    { x: 1, y: 0, name: "A", idEqPart: "ex_curve5_A_ij",
        indices: [
            { pos: "left", name: "i" }
        ]
    },
    { x: 2, y: 0, name: "B", idEqPart: "ex_curve5_B_ij",
        indices: [
            { pos: "left", name: "i" },
            { pos: "right", name: "j" }
        ]
    },
];

const contractions_ex_curve5 = [
    { source: 0, target: 1, name: "i", pos:"down" }, // default is pos: "up"
];

drawDiagram(tensors_ex_curve5, contractions_ex_curve5, "container_ex_curve5", 220, 120);




const tensors_ex_curve6 = [
    { x: 1, y: 0, name: "A", idEqPart: "ex_curve6_A_ij",
        indices: [
            { pos: "left", name: "i" },
            { pos: "right", name: "j" }
        ]
    },
    { x: 2, y: 0, name: "B", idEqPart: "ex_curve6_B_ij",
        indices: [
            { pos: "left", name: "j" }
        ]
    },
    { x: 3, y: 0, name: "C", idEqPart: "ex_curve6_C_ij",
        indices: [
            { pos: "left", name: "i" }
        ]
    },
];

const contractions_ex_curve6 = [
    { source: 0, target: 1, name: "j"},
    { source: 0, target: 2, name: "i", pos:"down" }, // default is pos: "up"
];

drawDiagram(tensors_ex_curve6, contractions_ex_curve6, "container_ex_curve6", 220, 120);




const tensors_ex_curve7 = [
    { x: 1, y: 0, name: "A", idEqPart: "ex_curve7_A_ij",
        indices: [
            { pos: "left", name: "i" },
            { pos: "right", name: "j" }
        ]
    },
    { x: 2, y: 0, name: "B", idEqPart: "ex_curve7_B_ij",
        indices: [
            { pos: "left", name: "j" },
            { pos: "right", name: "k" }
        ]
    },
    { x: 3, y: 0, name: "C", idEqPart: "ex_curve7_C_ij",
        indices: [
            { pos: "right", name: "i" },
            { pos: "left", name: "k" }
        ]
    },
];

const contractions_ex_curve7 = [
    { source: 0, target: 1, name: "j"},
    { source: 1, target: 2, name: "k"},
    { source: 0, target: 2, name: "i", pos:"down" }, // default is pos: "up"
];

drawDiagram(tensors_ex_curve7, contractions_ex_curve7, "container_ex_curve7", 240, 120);



/*const tensors_ex_curve8 = [
    { x: 0, y: 0, name: "A", idEqPart: "ex_curve8_A_ij",
        indices: [
            { pos: "right", name: "i" },
            { pos: "down", name: "l" }
        ]
    },
    { x: 1, y: 0, name: "B", idEqPart: "ex_curve8_B_ij",
        indices: [
            { pos: "right", name: "i" },
            { pos: "down", name: "j" }
        ]
    },
    { x: 0, y: 1, name: "C", idEqPart: "ex_curve8_C_ij",
        indices: [
            { pos: "up", name: "l" },
            { pos: "right", name: "k" }
        ]
    },
    { x: 1, y: 1, name: "D", idEqPart: "ex_curve8_D_ij",
        indices: [
            { pos: "left", name: "k" },
            { pos: "up", name: "j" },
            { pos: "right", name: "m" }
        ]
    },
];

const contractions_ex_curve8 = [
    { source: 0, target: 1, name: "i" },
    { source: 0, target: 2, name: "l" },
    { source: 1, target: 3, name: "j" },
    { source: 2, target: 3, name: "k" },
];*/

const tensors_ex_curve8 = [
    { x: 1, y: 1, name: "A", idEqPart: "ex_curve8_A_ij", labPos: "leftup",
        indices: [
            { pos: "left", name: "i" },
            { pos: "down", name: "j" },
            { pos: "right", name: "k" },
            { pos: "up", name: "l" }
        ]
    },
    { x: 2, y: 1, name: "B", idEqPart: "ex_curve8_B_ij",
        indices: [
            { pos: "right", name: "k" },
            { pos: "down", name: "m" }
        ]
    },
];

const contractions_ex_curve8 = [
    { source: 0, target: 1, name: "k" },
];

drawDiagram(tensors_ex_curve8, contractions_ex_curve8, "container_ex_curve8", 220, 200);