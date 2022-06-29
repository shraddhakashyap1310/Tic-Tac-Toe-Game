let boxes=document.getElementsByClassName('boxes');
let boxText=document.getElementsByClassName('boxtext');
let turnInfo=document.querySelector(".info h3");
let turn='X';
let gameOver=false;


function changeTurn(){
    return turn==='X' ? '0' : 'X';
}


function checkWin(){
    let wins=[
        [0,1,2,1.5,5,0],
        [3,4,5,1.5,14.5,0],
        [6,7,8,1.5,24.5,0],
        [0,3,6,-8,14.5,90],
        [1,4,7,2,14.5,90],
        [2,5,8,12,14.5,90],
        [0,4,8,2.5,14.5,45],
        [2,4,6,2,15,135]
    ]
    if(gameOver===false){
    wins.forEach(e => {
        if(boxText[e[0]].innerText===boxText[e[1]].innerText && boxText[e[1]].innerText===boxText[e[2]].innerText && boxText[e[0]].innerText !== ""){
            turnInfo.innerText=boxText[e[0]].innerText+" WON";
            gameOver=true;
            document.getElementsByClassName('danceimg')[0].style.width='20vh';
            document.getElementsByClassName('line')[0].style.width='26vw';
            document.getElementsByClassName('line')[0].style.transform=` translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            let media=window.matchMedia("(max-width:650px)")
            mediaFunction(media)
            media.addListener(mediaFunction)
        }
    })
}
}

function mediaFunction(){
    document.getElementsByClassName('line')[0].style.width='0';
}

// game logic


for(let i=0;i<boxes.length;i++){
    boxes[i].addEventListener('click',function(){
        if(boxText[i].innerText=' '){
            boxText[i].innerText=turn;
            turn=changeTurn();
            turnInfo.innerText= "Turn for "+turn;
            checkWin();
        }
    })
}


let reset=document.getElementById('reset');
reset.addEventListener('click',function(){
    for(let i=0;i<boxText.length;i++){
        boxText[i].innerText="";
    }
    document.getElementsByClassName('danceimg')[0].style.width='0px';
    turn='X';
    turnInfo.innerText= "Turn for X";
    gameOver=false;
    document.getElementsByClassName('line')[0].style.width='0';
})