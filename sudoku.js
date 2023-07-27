
var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
    "----32---",
    "-329-54--",
    "6--7-----",
    "-6-5-----",
    "841----5-",
    "--3------",
    "1--359--4",
    "--58---63",
    "324--1--8"
]


var solution = [
    "458132976",
    "732965481",
    "619748235",
    "267513849",
    "841296357",
    "593487612",
    "186359724",
    "975824163",
    "324671598"
]

window.onload = function() {
    setGame();
}

function setGame() {
    // Digits 1-9
    for (let i = 1; i <= 9; i++) {
        //<div id="1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Board 9x9
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            if (r == 2 || r == 5) {
                tile.classList.add("horizontal-line");
            }
            if (c == 2 || c == 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber(){
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }
    

        // "0-0" "0-1" .. "3-1"
        let coords = this.id.split("-"); //["0", "0"]
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        }
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
            checkerrors();
            
        }
    }
}

// var mymodal = document.createElement("div");
// var content = document.createElement("div");
// var content1 = document.createElement("div");
// var retake= document.createElement("div");
// var newgame = document.createElement("div");
// mymodal.classList.add('modal');
// content.classList.add('modal-content');
// content1.classList.add('modal-content');
// retake.classList.add('retake');
// newgame.classList.add('newgame');
// mymodal.append(content);
// mymodal.append(content1);
// mymodal.append(retake);
// mymodal.append(newgame);
// document.getElementsByClassName('content').innerHTML = '<p> Game over </p>'
// document.getElementsByClassName('content1').innerHTML = '<p> You have made 5 mistake and lost this game </p>'
// document.getElementsByClassName('retake').innerHTML = '<p> Retake </p>'
// document.getElementsByClassName('newgame').innerHTML = '<p> New game </p>'



// document.getElementsByClassName('retake').onclick = function(){
//     location.reload();
// };
// document.getElementsByClassName('newgame').onclick = function(){
//     location.reload();
// };
// const examples = document.querySelector('.modal');
// if (examples) {
//         examples.classList.add('open');
//     }
//  else {
//     console.error("Phần tử không tồn tại hoặc không thể tìm thấy.");
// }

// document.addEventListener('DOMContentLoaded', function() {
//     function checkerrors (){
//         if ( errors === 3){
//             document.getElementsByClassName("modal")[0].classList.add('open'); 
//         }
//     };
//     document.getElementsByClassName('retake')[0].addEventListener('click', () => {
//         document.getElementsByClassName("modal")[0].classList.remove('open');
//         location.reload();
//     });
//     document.getElementsByClassName('newgame')[0].addEventListener('click', () => {
//         document.getElementsByClassName("modal")[0].classList.remove('open');
    
//     })
//     console.log("Toàn bộ DOM đã tải xong và đoạn mã JavaScript được thực thi.");
//   });

function checkerrors (){
    if ( errors === 3){
        document.getElementsByClassName("modal")[0].classList.add('open'); 
    }
};

// document.getElementsByClassName('retake')[0].addEventListener('click', () => {
//     document.getElementsByClassName("modal")[0].classList.remove('open');
//     location.reload();
// });

// document.getElementsByClassName('newgame')[0].addEventListener('click', () => {
//     document.getElementsByClassName("modal")[0].classList.remove('open');

// });

function addRetakeClickListener() {
    const retakeButton = document.getElementsByClassName('retake')[0];
    retakeButton.addEventListener('click', () => {
      document.getElementsByClassName("modal")[0].classList.remove('open');
      location.reload();
    });
  }
  
  function addNewGameClickListener() {
    const newGameButton = document.getElementsByClassName('newgame')[0];
    newGameButton.addEventListener('click', () => {
      document.getElementsByClassName("modal")[0].classList.remove('open');
    });
  }
  document.addEventListener('DOMContentLoaded', () => {
    addRetakeClickListener();
    addNewGameClickListener();
});
