import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private router:Router,private hero:HeroService){}
  product:any
  ngOnInit(){
    let id=localStorage.getItem('accId')
    console.log(id)
    if(id==="1"){
      this.product=this.hero.giveData14()
    }else if(id==="2"){
      this.product=this.hero.giveData15()
    }else if(id==="3"){
      this.product=this.hero.giveData16()
    }else if(id==="4"){
      this.product=this.hero.giveData17()
    }else if(id==="5"){
      this.product=this.hero.giveData18()
    }else if(id==="6"){
      this.product=this.hero.giveData19()
    }
}
//payment
gotoHere1(id: any){
  localStorage.setItem('pid',id);
  this.router.navigate(['/cart']);
 }
}