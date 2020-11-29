class Ground{
constructor(x,y,width,height){

    var options = {
       isStactic :true
    }
this.body= Bodies.rectangle(x,y,width,height,options)
this.width=width;
this.height=height

}

display(){
var groundpos=this.body.position;

rectMode(CENTER)
fill ("brown")
rect(groundpos.x,groundpos.y,this.width,this.height);

}
}