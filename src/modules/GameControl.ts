import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

const oppositeDictionary = {
    "ArrowUp": "ArrowDown",
    "ArrowDown": "ArrowUp",
    "ArrowLeft": "ArrowRight",
    "ArrowRight": "ArrowLeft"
}

class GameControl{
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction:string="";
    isLive: boolean = true;
    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
    }
    init(){
        document.addEventListener("keydown", this.keydownHandler.bind(this));
        this.run();
    }
    keydownHandler(e: KeyboardEvent){
        if(e.key === this.direction) return;
        if(oppositeDictionary[this.direction as keyof typeof oppositeDictionary] === e.key) return;
        this.direction = e.key;
        // console.log(this.direction);
    }
    run(){
        let x = this.snake.X;
        let y = this.snake.Y;
        switch(this.direction){
            case "ArrowUp":
            case "Up":
                y-=10;
                break;
            case "ArrowDown":
            case "Down":
                y+=10;
                break;
            case "ArrowLeft":
            case "Left":
                x-=10;
                break;
            case "ArrowRight":
            case "Right":
                x+=10;
                break;
        }

        if(this.checkEat(x, y)){
            this.scorePanel.addScore();
            this.food.change();
            this.snake.addBody();
        }


        try{
            this.snake.X = x;
            this.snake.Y = y;
        }
        catch(e){
            alert("Game Over!");
            this.isLive = false;
            this.snake.X = 0;
            this.snake.Y = 0;
        }

        
        this.isLive && 
        setTimeout(()=>{
            this.run();
        }, 300-(this.scorePanel.level-1)*30);
    }

    checkEat(X: number, Y: number): boolean{
        return X === this.food.X && Y === this.food.Y;
    }
}

export default GameControl;