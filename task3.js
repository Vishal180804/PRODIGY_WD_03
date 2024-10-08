console.log("Welcome to tic-tac-toe");
let clickSound=new Audio("click.wav");
let gameover=new Audio("gameover.wav");
let turn="X";
let isgameover=false;
//change the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X";
}
//function to check value
const checkWin = ()=>{
    let boxtext=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerHTML===boxtext[e[1]].innerHTML) && (boxtext[e[1]].innerHTML===boxtext[e[2]].innerHTML) && (boxtext[e[0]].innerHTML!=="")){   
            document.querySelector(".info").innerHTML=boxtext[e[0]].innerHTML + " Won";
            isgameover=true;
            gameover.play();
            // document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
            document.querySelector(".line").style.width="20vw";
            document.querySelector(".line").style.transform =`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`;
        }
    })
}

// Game Logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener('click',()=>{
        if(boxtext.innerHTML === ''){
            boxtext.innerHTML=turn;
             turn=changeTurn();
            clickSound.play();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerHTML ="Turn for " + turn;
            }
        }
    })
})

//add onclick to reset btn
let reset=document.getElementById("reset");
reset.addEventListener('click',(e)=>{
    let boxtexts=document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element=>{
        element.innerHTML="";
    });
    turn="X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerHTML ="Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";
    document.querySelector(".line").style.width="0px";
})