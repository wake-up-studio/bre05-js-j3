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
    
    for(let div of secondGridEven){
        div.style.backgroundColor = yellow
    }

}

function grid3()
{
    let thirdGrid = document.querySelectorAll(".grid:nth-child(3) div")
    
    thirdGrid[0].style.backgroundColor = red
    thirdGrid[1].style.backgroundColor = orange
    thirdGrid[2].style.backgroundColor = yellow
    thirdGrid[3].style.backgroundColor = green
    thirdGrid[4].style.backgroundColor = blue
    thirdGrid[5].style.backgroundColor = purple
}

function grid4()
{
    let fourthGrid = document.querySelector(".grid:nth-child(4)")
    let center = document.querySelector(".grid:nth-child(4) div:nth-child(5)")
    
    fourthGrid.style.backgroundColor = black
    center.style.backgroundColor = green
}

function grid5()
{
    // let firstRow = document.querySelectorAll(".grid:nth-child(5) div:nth-child(-n+3)")
    // let secondRow = document.querySelectorAll(".grid:nth-child(5) div:nth-child(n+4):nth-child(-n+6)")
    // let thirdRow = document.querySelectorAll(".grid:nth-child(5) div:nth-child(n+7):nth-child(-n+9)")
    
    // for(let div of firstRow){
    //     div.style.backgroundColor = blue
    // }
    
    // for(let i = 0; i<secondRow.length; i++){
    //     if(i % 2 === 0){
    //         secondRow[i].style.backgroundColor = red
    //     }
    //     else{
    //         secondRow[i].style.backgroundColor = purple
    //     }
    // }
    
    // for(let x = 0; x<secondRow.length; x++){
    //     if(x % 2 === 0){
    //         thirdRow[x].style.backgroundColor = orange
    //     }
    //     else{
    //         thirdRow[x].style.backgroundColor = yellow
    //     }
    // }
    
    let grid5 = document.querySelectorAll(".grid:nth-child(5) div")
    
    for (let i = 0; i<grid5.length; i++)
    if(i<3){
        grid5[i].style.backgroundColor = blue
    }
    else if(i<6 && i%2===0){
        grid5[i].style.backgroundColor = red
    }
    else if(i<6 && i%2!==0){
        grid5[i].style.backgroundColor = purple
    }
    else if(i<grid5.length && i%2===0){
        grid5[i].style.backgroundColor = orange
    }
    else{
        grid5[i].style.backgroundColor = yellow
    }
}

function grid6()
{
    // let firstRow = document.querySelectorAll(".grid:last-of-type div:nth-child(-n+3)")
    // let secondRow = document.querySelectorAll(".grid:last-of-type div:nth-child(n+4):nth-child(-n+6)")
    // let thirdRow = document.querySelectorAll(".grid:last-of-type div:nth-child(n+7):nth-child(-n+9)")
    
    // for(let div of firstRow){
    //     div.style.background = "linear-gradient(#956caf, #427cf5)"
    // }
    
    // for(let div of secondRow){
    //     div.style.background = "linear-gradient(#4cee7e, #efec4f)"
    // }
    
    // for(let div of thirdRow){
    //     div.style.background = "linear-gradient(#eca45c, #e85b69)"
    // }
    
    let grid6 = document.querySelectorAll(".grid:last-of-type div")
    
    for(let i=0;i<grid6.length;i++)
    if(i<3){
        grid6[i].style.background = "linear-gradient(#956caf, #427cf5)"
    }
    else if(i<6){
        grid6[i].style.background = "linear-gradient(#4cee7e, #efec4f)"
    }
    else{
        grid6[i].style.background = "linear-gradient(#eca45c, #e85b69)"
    }
}

grid1();
grid2();
grid3();
grid4();
grid5();
grid6();