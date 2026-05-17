import { Component } from '@angular/core';
import { FOOD } from '../shared/models/food';
import { FoodServices } from '../services/food/food';
import { ActivatedRoute } from '@angular/router';
import { Tags } from '../tags/tags';
import { CommonModule } from '@angular/common';

import { CartService } from '../services/cart/cart';
import { Router } from '@angular/router';
import { NotFound } from '../not-found/not-found';


@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [CommonModule, Tags ,NotFound],
  templateUrl: './food-page.html',
  styleUrl: './food-page.scss',
})
export class FoodPage {

  food!: FOOD;


  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodServices,
    private cartService: CartService,
    private router: Router,

  ) {
    console.log('FoodPage loaded');


    activatedRoute.params.subscribe((params) => {
      console.log('FoodPage params:', params); // 👈 ADD THIS

      if (params['id'])
        this.food = this.foodService.getFoodById(params['id'])
      console.log('Loaded food:', this.food); // 👈 ADD THIS




    })
  }



  getStarsArray(stars: number): number[] {
    return Array(5).fill(0).map((_, i) => i < Math.round(stars) ? 1 : 0);
  }
  ngOnInit(): void {

  }
  addToCart() {
    this.cartService.AddToCart(this.food);
    this.router.navigateByUrl('/cart-page');
    console.log(this.router.navigateByUrl('/cart-page'))

  }

}

