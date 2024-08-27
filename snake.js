//размеры поля
var boardWidth = 1280;
var boardHeight = 800;
class Snake{
    constructor(left,top){
        this.left=Math.round(left);
        this.top=Math.round(top);
    }
render(){
    let result = document.createElement('div');
    result.setAttribute('class', 'snake');
    result.style.left=this.left + 'px';
    result.style.top=this.top + 'px';
    return result;
}
}
function addsnake (){
    let snake = new Snake(
        Math.random() * boardWidth, 
        Math.random() * boardHeight 
    );
    gameBoard.appendChild(
    snake.render()    
    );
}

window.addEventListener(
    'load',
    addsnake
);


