class ScorePanel{
    score: number = 0;
    level: number = 1;
    maxLevel: number;
    scoreSpan: HTMLElement;
    levelSpan: HTMLElement;
    constructor(maxLevel: number=10) {
        this.scoreSpan = document.getElementById('score')!;
        this.levelSpan = document.getElementById('level')!;
        this.maxLevel = maxLevel;
    }
    addScore(){
        this.score++;
        this.scoreSpan.innerHTML = this.score + '';
        if(this.score%10 === 0) {
            this.levelUp();
        }
    }
    levelUp(){
        if(this.level<this.maxLevel){
            this.level++;
            this.levelSpan.innerHTML = this.level + '';
        }
        
    }
}
export default ScorePanel;