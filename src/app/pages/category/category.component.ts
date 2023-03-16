import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  constructor(private router:Router,
    private hero:HeroService){} 
    category=this.hero.giveData();
    gotoHere2(id: any){
     localStorage.setItem('sportId',id);
     this.router.navigate(['/cart2']);
     this.router.navigate(['/single']);
     
}
}
