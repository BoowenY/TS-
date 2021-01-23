class Snake{
    head: HTMLElement;
    bodies: HTMLCollection;//会自动刷新，HTML集合
    element: HTMLElement;
    constructor(){
        this.element = document.getElementById('snake');
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodies = this.element!.getElementsByTagName('div')
    }
    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }
    set X (value: number){
        this.head.style.left = value + 'px'
    }
    set Y (value: number){
        this.head.style.top = value + 'px'
    }
    addBody(){
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
}
export default Snake;