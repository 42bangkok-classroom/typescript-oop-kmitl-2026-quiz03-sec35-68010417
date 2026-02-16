import { Product } from './product'

export class Playstation extends Product {
  // TODO: implement class properties, constructor with super(...), and methods
    generation:string;

  constructor(name:string,generation:string,price:number){
    super(name,price)
        this.generation = generation;
    }
}