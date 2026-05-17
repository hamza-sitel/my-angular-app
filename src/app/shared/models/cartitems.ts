import { FOOD } from "./food"

export class CartItem {
    constructor(food: FOOD) {
        this.food = food;
    }
    food: FOOD;
    quantity: number = 1;

    get price(): number {
        return this.food.price * this.quantity


    }

}