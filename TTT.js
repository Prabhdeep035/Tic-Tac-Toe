let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newBtn=document.querySelector("#new");
let msgcontainer=document.querySelector(".msg");
let para=document.querySelector("#winner");

let turno=true;

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let count=0;

boxes.forEach ((box) =>{
    box.addEventListener("click",()=> {
        if(turno)
        {
            box.innerText="O";
            turno=false;
        }
        else
        {
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        count=count+1;
        checkWinner();
        checkDraw(count);
    })
})

const disableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled = true;
    }
}

const showWinner =(winner) => {
    para.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner=() =>{
    for(let pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!="" )
        {
            if(pos1===pos2 && pos2===pos3)
            {
                showWinner(pos1);
            }
        }
    }
};

const resetGame = () => {
    turno=true;
    enableBoxes();
    count=0;
}

const enableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText="";
        msgcontainer.classList.add("hide");
    }
}

const checkDraw=(count) =>{
    if(count===9)
    {
        para.innerText=`Draw`;
        msgcontainer.classList.remove("hide");
        count=0;
    }
}

newBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);