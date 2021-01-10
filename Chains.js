class Chains{
constructor(bodyA , bodyB){
var options={
bodyA: bodyA,
bodyB: bodyB,
stiffness: 0.04,
length: 10
}

this.chains = Constraint.create(options);
World.add(world, this.chains);

}
display(){
var pointA = this.chains.bodyA.position;
var pointB = this.chains.bodyB.position;
strokeWeight(4);
line(pointA.x, pointA.y, pointB.x, pointB.y);

}
}