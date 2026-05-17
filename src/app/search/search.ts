import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  searchTerm: string = "";


  constructor(private route: ActivatedRoute, private router: Router) {
    console.log('Home component loaded');

  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('HOME params:', params); // 👈 ADD THIS

      if (params['searchTerm'])
        this.searchTerm = params['searchTerm']
      console.log('SEARCH TERM:', params['searchTerm']); // 👈 ADD THIS

    })

  }


  search(): void {
    console.log('SEARCH CLICKED:', this.searchTerm);

    if (this.searchTerm)
      console.log('EMPTY SEARCH BLOCKED');

    console.log('NAVIGATING...');
    this.router.navigate(['/search', this.searchTerm]);




  }


}
