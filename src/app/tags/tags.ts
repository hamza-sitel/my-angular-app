import { Component, Input, input } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { CommonModule } from '@angular/common';

// import { NgIf, NgForOf } from "../../../node_modules/@angular/common/types/_common_module-chunk";
import { RouterLink } from "@angular/router";
import { FoodServices } from '../services/food/food';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './tags.html',
  styleUrl: './tags.scss',
})
export class Tags {
  @Input()
  foodPageTags?: string[];

  tags?: Tag[];
  constructor(private foodService: FoodServices) { }
  ngOnInit(): void {
    console.log('Tags component init');

    if (!this.foodPageTags)
      this.tags = this.foodService.getAllTag()
    console.log('Loaded tags from service:', this.tags); // 👈 ADD THIS

  }




}
