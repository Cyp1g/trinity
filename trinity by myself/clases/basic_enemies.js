class Enemies{
    constructor(salud,x,y,width,height){
        this.salud=salud;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
    }
    display(){
        rect(this.x,this.y,this.width,this.height);
    }
}