import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart';
import { Cart } from '../shared/cart';
import { CartItem } from '../shared/models/cartitems';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
// import { RouterModule } from '@angular/router';
import { RouterLink } from "@angular/router";
import { NotFound } from '../not-found/not-found';



@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CommonModule, RouterLink, NotFound],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.scss',
})




export class CartPage {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.setCart();
  }
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();

  }
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
    console.log(this.cart);


  }



}
