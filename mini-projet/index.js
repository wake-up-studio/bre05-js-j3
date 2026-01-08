/*
Codes couleurs

jaune: #efec4f;
orange: #eca45c;
rouge: #e85b69;
violet: #956caf;
bleu: #427cf5;
vert: #4cee7e;
noir: #020e13;

*/

let yellow = "#efec4f"
let orange = "#eca45c"
let red = "#e85b69"
let purple = "#956caf"
let blue = "#427cf5"
let green = "#4cee7e"
let black = "#020e13"

function grid1()
{
    let firstGrid = document.querySelector(".grid:first-of-type")
    
    firstGrid.style.backgroundColor = black
}

function grid2()
{
    let secondGrid = document.querySelector(".grid:nth-child(2)")
    let secondGridEven = document.querySelectorAll(".grid:nth-child(2) div:nth-child(even)")
    
    secondGrid.style.backgroundColor = green
    secondGridEven.style.backgroundColor = yellow
    
}

function grid3()
{

}

function grid4()
{

}

function grid5()
{

}

function grid6()
{

}

grid1();
grid2();
grid3();
grid4();
grid5();
grid6();