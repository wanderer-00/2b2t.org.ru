var spells = [
    {
        "name":"кирка",
        "icon":"",
        "spel":[
            "эффективность V",
            ["шёлковое косание","удача III"],
            "прочность III",
            "починка",
            "проклятие утраты",
        ]
    },

    {
        "name":"",
        "icon":"",
        "spel":[
            "",
            "",
            "",
            "",
            "",
            "",
        ]
    },
];

var table = document.querySelector('.table');

var box = document.createElement("div");
for(i=0; i<5; i++){
    let row = document.createElement("div");
    row.className = "row";
    let cell = document.createElement("cell");
    cell.className = "cell";
    cell.innerHTML = spells[0].spel[i]
    row.append(cell);
    box.append(row);  
}
table.append(box);


