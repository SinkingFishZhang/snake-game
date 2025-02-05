class Snake{
    head: HTMLElement;
    bodies: HTMLCollection;
    element: HTMLElement;
    constructor(){
        this.head = document.querySelector('#snake > div')! as HTMLElement;
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div');
        this.element = document.getElementById('snake')!;
    }
    get X(){ 
        return this.head.offsetLeft; 
    }
    get Y(){ 
        return this.head.offsetTop; 
    }
    set X(value: number){ 
        if(this.X == value){
            return
        }
        if(value < 0 || value > 290){
            throw new Error("Snake Die");
        }

        this.moveBody()
        this.head.style.left = `${value}px`; 
        this.checkCollision()
    }
    set Y(value: number){ 
        if(this.Y == value){
            return
        }
        else if(value < 0 || value > 290){
            throw new Error("Snake Die");
        }

        this.moveBody()
        this.head.style.top = `${value}px`; 
        this.checkCollision()
    }
    addBody(){
        this.element.insertAdjacentHTML('beforeend', '<div></div>');
    }

    moveBody(){
        for(let i = this.bodies.length - 1; i > 0; i--){
            let nowX = (this.bodies[i-1] as HTMLElement).offsetLeft;
            let nowY = (this.bodies[i-1] as HTMLElement).offsetTop;
            (this.bodies[i] as HTMLElement).style.left = `${nowX}px`;
            (this.bodies[i] as HTMLElement).style.top = `${nowY}px`;
        }
    }

    checkCollision(): void{
        for(let i = 1; i < this.bodies.length; i++){
            if((this.head.offsetLeft == (this.bodies[i] as HTMLElement).offsetLeft) && (this.head.offsetTop == (this.bodies[i] as HTMLElement).offsetTop)){
                throw new Error("Snake Die");
            }
        }
    }
}
export default Snake;