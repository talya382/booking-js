class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
    this.lastFedTime = null;
  }
  feed() {
    this.lastFedTime = new Date();
    console.log(`${this.name} ,fad`);
  }
}
class Carnivore extends Animal {
  constructor(name, species, lastFedTime) {
    super(name, species, lastFedTime);
  }
  feed() {
    super.feed();
    console.log(`Feeding carnivore ${this.species} -meat served.`);
  }
}
class Herbivore extends Animal {
  feed() {
    super.feed();
    console.log(`Feeding herbivore ${this.species} - veggies served.`);
  }
}
class Zookeeper{
    constructor(){
        this.animal=[];
    }
    addAnimal(){
        this.animal.push(animal);
    }
    feedAll(){
        this.animal.forEach((animal)=> animal.feed());
    }
    getLastFed(name){
        
    }
}
