import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {

  @Input() visible: boolean = false;
  @Input() notFoundMessage: string = "Nothing Found!";
  @Input() resetLinkText: string = "Reset";
  @Input() resetLinkRoute: string = "/";

}
