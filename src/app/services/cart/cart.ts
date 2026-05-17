import { Injectable } from '@angular/core';
import { FOOD } from '../../shared/models/food';
import { Cart } from '../../shared/cart';
import { CartItem } from '../../shared/models/cartitems';
@Injectable({
  providedIn: 'root',
})


export class CartService {
  private cart: Cart = new Cart();

  AddToCart(food: FOOD): void {
    let cartItem = this.cart.items.find(item => item.food.id === food.id)
    if (cartItem) {
      this.changeQuantity(food.id, cartItem.quantity + 1);
      return

    }
    this.cart.items.push(new CartItem(food))

  }
  removeFromCart(foodId: number): void {
    this.cart.items =
      this.cart.items.filter(item => item.food.id != foodId)
  }
  changeQuantity(foodId: number, quantity: number) {
    let cartItem = this.cart.items.find(item => item.food?.id === foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;


  }
  getCart(): Cart {
    return this.cart;
  }

}

