import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.css']
})
export class Cart2Component {
  // paymentHandler: any = null;
  constructor(private router:Router,private hero:HeroService) {}
cart2:any
 ngOnInit(){
  let bid=localStorage.getItem('sportId')
  let bid2=localStorage.getItem('id')


  console.log(bid)
      console.log(bid2)
      // this.invokeStripe();
  if(bid==="1"){
    this.cart2=this.hero.giveData1().filter(item =>item.id===bid2);
  }else if(bid==='2'){
    this.cart2=this.hero.giveData2().filter(item =>item.id===bid2);
  }else if(bid==='3'){
    this.cart2=this.hero.giveData3().filter(item =>item.id===bid2);
  }else if(bid==='4'){
    this.cart2=this.hero.giveData4().filter(item =>item.id===bid2);
  }else if(bid==='5'){
    this.cart2=this.hero.giveData5().filter(item =>item.id===bid2);
  }else if(bid==='6'){
    this.cart2=this.hero.giveData6().filter(item =>item.id==bid2);
  }else if(bid==='7'){
    this.cart2=this.hero.giveData7().filter(item =>item.id===bid2);
  }else if(bid==='8'){
    this.cart2=this.hero.giveData8().filter(item =>item.id===bid2);
  }else if(bid==='9'){
    this.cart2=this.hero.giveData9().filter(item =>item.id===bid2);
  }
  else if(bid==='10'){
    this.cart2=this.hero.giveData10().filter(item =>item.id===bid2);
  }else if(bid==='11'){
    this.cart2=this.hero.giveData11().filter(item =>item.id===bid2);
  }else if(bid==='12'){
    this.cart2=this.hero.giveData12().filter(item =>item.id===bid2);
  }

  localStorage.setItem('pname',this.cart2[0].name);
  localStorage.setItem('price',this.cart2[0].starting_price);

 }
gotoHere(){
  this.router.navigate(['/order'])
}



}
