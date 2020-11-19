class chain {

   constructor(bodya,bodyb) {
     var chain = {
        bodyA: bodya,
        bodyB: bodyb,
        length: 20,
        stiffness: 0.08
     }
     
     this.chain = Constraint.create(chain);
     World.add(world,this.chain);

   }

   display() {
       line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);
   }


}