import words from './constants'

let board = document.getElementById("board");
let answer = document.getElementById("answer");
let restart = document.querySelector(".restart");

let selectLength = document.getElementById("length");
let selectDiff = document.getElementById("diff");

let height = 5;
let width = 5;

let row = 0;
let col = 0;


let definition ;
let gameOver = false;

let wordList = [];


selectLength.addEventListener("change",function(){
    width = this.value;
    clearBoard();
    initialize();

    selectLength.blur();
})

selectDiff.addEventListener("change" , function(){
    height= this.value;
    clearBoard();
    initialize();
    
    selectDiff.blur();
})

restart.addEventListener("click",function(){
    this.classList.remove('show');
    clearBoard();
    initialize();
})

function getWord(){
    wordList= [];
    for(let i in words){
        if(i.length==width){
            wordList.push(i);
        }
    }


    let word = wordList[Math.floor(Math.random()*wordList.length)].toUpperCase();
    for(let i in words){
        
        if(i.toUpperCase()==word){
            definition = words[i];
        }
    }
   
    return word;
}

let word = getWord();


window.onload = function(){
    initialize();
}

function initialize(){

    
    for(let i=0 ; i<height ; i++){
        let div =document.createElement("div");
        for(let j=0 ; j<width ; j++){
    
            let tile = document.createElement("span");
            tile.classList.add("tile");
            tile.id = i.toString()+"-"+j.toString();
            div.appendChild(tile);
        }
        
        board.append(div);
        
    }

    let keyboard = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", " "],
        ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫" ]
    ]

    for(let i=0 ; i<keyboard.length; i++){
        let curr = keyboard[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");
        for(let j=0 ; j<curr.length ; j++){
            let keyTile = document.createElement("div");
            let key = curr[j];
            keyTile.innerText = key;
            if(key=="Enter"){
                keyTile.id = "Enter";
            }
            else if(key=="⌫"){
                keyTile.id = "Backspace";
            }
            else if("A"<=key && key<="Z"){
                keyTile.id = "Key"+key;
            }

            keyTile.addEventListener("click",processKey);

            if(key=="Enter"){
                keyTile.classList.add("enter-keytile");
            }else{
                keyTile.classList.add("keytile");
            }

            keyboardRow.appendChild(keyTile);
        }

        document.body.appendChild(keyboardRow);
    }

    document.addEventListener("keyup",eventHandle)
}

async function eventHandle(e){
    await processInput(e);
}

async function processKey(){
    let e = {"code":this.id};
    await processInput(e);
}

async function processInput(e){
    
    if(gameOver){
        return;
    }
    
    answer.classList.remove("success");
    answer.classList.remove("error");
    answer.classList.remove("second");

    answer.innerHTML ="";
    if("KeyA"<=e.code && e.code<="KeyZ"){
        if(col<width){
            let currTile = document.getElementById(row.toString()+"-"+col.toString());
            
            if(currTile.innerText==""){
                currTile.innerText=e.code[3];
                col++;
            }   
        }
        
    }
    else if(e.code=="Backspace"){
        if(0<col && col<=width){
            col--;
        }
        let currTile = document.getElementById(row.toString()+"-"+col.toString());
        currTile.innerText = "";
    }
    else if(e.code=="Enter"){

        if(col<width){
            answer.classList.add('second');
            answer.innerText = "Too Short";
            
            return;
        }
        await update();
        
    }

    
    if(!gameOver && row==height){
        gameOver =true;
        console.log('in');
        answer.classList.add("second");
        answer.innerHTML = `GameOver , word was  '${word}'<div class='small'>${definition}</div>`
        restart.classList.add('show');
    }
}

async function help(guess){
    let res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${guess}`);
    let response = await res.json();

    if(response.title =="No Definitions Found"){
        return false;
    }
    return true;
}

async function update(){
    let guess = "";

    for(let c = 0;c<width ; c++){
        let currTile = document.getElementById(row.toString()+"-"+c.toString());
        guess+= currTile.innerText;
    }
    guess = guess.toLowerCase();

    let check = false;
    for(let i of wordList){
        if(i.toLowerCase()==guess){
            check = true;
        }
    }

    if(!check){
        let res = await help(guess);
        
        if(!res){

            answer.classList.add("error");
            answer.innerText="Please enter a valid word";
            return;
        }
    }

    let correct =0;

    let letterCount = {};
    for(let i=0 ; i<word.length ; i++){
        let letter = word[i];
        if(letterCount[letter]){
            letterCount[letter]++;
        }
        else{
            letterCount[letter]=1;
        }
    }
    for(let c=0 ; c<width ; c++){
        let currTile = document.getElementById(row.toString()+"-"+c.toString());
        let letter = currTile.innerText;
        if(word[c]==letter){
            
            let keyTile = document.getElementById("Key"+letter);
            keyTile.classList.remove("present");
            keyTile.classList.add("correct");

            currTile.classList.add("correct");
            correct++;
            letterCount[letter]--;
        }

        if(correct==width){
            gameOver = true;

            answer.classList.add('success');
            answer.innerHTML = `You guessed it right<div class='small'>${definition}</div>`;
            restart.classList.add('show');
        }
    }

    for(let c=0 ; c<width ; c++){
        let currTile = document.getElementById(row.toString()+"-"+c.toString());
        let letter = currTile.innerText;

        let keyTile = document.getElementById("Key"+letter);
        if(!currTile.classList.contains("correct")){
            if(word.includes(letter) && letterCount[letter]>0){

                
                if(!keyTile.classList.contains("correct")){
                    keyTile.classList.add("present");
                }
                
                currTile.classList.add("present");
                letterCount[letter]--;
            }
            else{
                keyTile.classList.add("absent");
                currTile.classList.add("absent");
            }
        }
        
    }

    
    row++;
    col=0;
}

function clearBoard(){
    board.innerHTML = '';

    let key = document.getElementsByClassName('keyboard-row');

    for(let i=0 ; i<3 ; i++){
        document.body.removeChild(key[0]);
    }

    answer.innerText='';
    answer.classList.remove("success");
    answer.classList.remove("error");
    answer.classList.remove("second");
    
    document.removeEventListener('keyUp' ,eventHandle )
    word = getWord();
    row =0;
    col=0;
    gameOver= false;
}

