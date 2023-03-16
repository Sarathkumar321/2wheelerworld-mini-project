import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { helmet } from 'src/assets/data';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  // paymentHandler: any = null;
  
 constructor(private router:Router,private hero:HeroService) {}
    cart:any;
    
    ngOnInit(){
      let id=localStorage.getItem('pid')
      let id1=localStorage.getItem('accId')
      
      console.log(id)
      console.log(id1)
      // this.invokeStripe();
      
      if(id1=="1"){
        this.cart=this.hero.giveData14().filter(item =>item.id===id);
      }else if(id1=="2"){
        this.cart=this.hero.giveData15().filter(item =>item.id===id);
      }else if(id1=="3"){
        this.cart=this.hero.giveData16().filter(item =>item.id===id);
      }else if(id1=="4"){
        this.cart=this.hero.giveData17().filter(item =>item.id===id);
      }else if(id1=="5"){
        this.cart=this.hero.giveData18().filter(item =>item.id===id);
      }else if(id1=="6"){
        this.cart=this.hero.giveData19().filter(item =>item.id===id);
      }
      localStorage.setItem('pname',this.cart[0].name);
      localStorage.setItem('price',this.cart[0].price);
     
    
    }
    gotoHere(cart :any){
      this.router.navigate(['/order'])
    }
  }
      
 
