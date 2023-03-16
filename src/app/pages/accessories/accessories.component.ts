import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent {
  constructor(private router:Router,
    private hero:HeroService){} 
    accessory=this.hero.giveData13();
    gotoHere(id: any){
     localStorage.setItem('accId',id);
     this.router.navigate(['/cart']);
     this.router.navigate(['/product']);

     
}
}
