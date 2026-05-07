import { Injectable } from '@angular/core';
import {FOOD} from '../../shared/models/food'

@Injectable({
  providedIn: 'root',
  
})
export class Food {

  getAll():FOOD []{
    return[
  {
    id: 1,
    name: 'Pizza Margherita',
    price: 12,
    tags: ['FastFood', 'Pizza'],
    favorite: true,
    stars: 4.5,
    imageUrl: '/assets/images/foods/food-1.jpg',
    origins: ['Italy'],
    cookTime: '10-20'
  },
  {
    id: 2,
    name: 'Cheeseburger',
    price: 8,
    tags: ['FastFood', 'Burger'],
    favorite: false,
    stars: 4.2,
    imageUrl: '/assets/images/foods/food-2.jpg',
    origins: ['USA'],
    cookTime: '10-15'
  },
  {
    id: 3,
    name: 'Chicken Shawarma',
    price: 6,
    tags: ['FastFood', 'MiddleEastern'],
    favorite: true,
    stars: 4.7,
    imageUrl: '/assets/images/foods/food-3.jpg',
    origins: ['Lebanon'],
    cookTime: '15-25'
  },
  {
    id: 4,
    name: 'Sushi Platter',
    price: 20,
    tags: ['Japanese', 'Seafood'],
    favorite: false,
    stars: 2.9,
    imageUrl: '/assets/images/foods/food-4.jpg',
    origins: ['Japan'],
    cookTime: '20-30'
  },
  {
    id: 5,
    name: 'Tacos',
    price: 7,
    tags: ['FastFood', 'Mexican'],
    favorite: true,
    stars: 4.3,
    imageUrl: '/assets/images/foods/food-5.jpg',
    origins: ['Mexico'],
    cookTime: '10-15'
  },
  {
    id: 6,
    name: 'Pasta Carbonara',
    price: 11,
    tags: ['Italian', 'Pasta'],
    favorite: false,
    stars: 4.6,
    imageUrl: '/assets/images/foods/food-6.jpg',
    origins: ['Italy'],
    cookTime: '15-20'
  }
]

  }
}