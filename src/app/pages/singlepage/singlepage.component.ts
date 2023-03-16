import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent {
  constructor(private router:Router,private hero:HeroService){}
    
    // category=this.hero.giveData();
    // gotoHere(id: any){
    //  localStorage.setItem('id',id);
    //  this.router.navigate(['/single']);
    single :any
    ngOnInit(){
      let id=localStorage.getItem('sportId')
      console.log(id)
      if(id==="1"){
        this.single=this.hero.giveData1()
      }else if(id==='2'){
        this.single=this.hero.giveData2()
      }else if(id==='3'){
        this.single=this.hero.giveData3()
      }else if(id==='4'){
        this.single=this.hero.giveData4()
      }else if(id==='5'){
        this.single=this.hero.giveData5()
      }else if(id==='6'){
        this.single=this.hero.giveData6()
      }else if(id==='7'){
        this.single=this.hero.giveData7()
      }else if(id==='8'){
        this.single=this.hero.giveData8()
      }else if(id==='9'){
        this.single=this.hero.giveData9()
      }
      else if(id==='10'){
        this.single=this.hero.giveData10()
      }else if(id==='11'){
        this.single=this.hero.giveData11()
      }else if(id==='12'){
        this.single=this.hero.giveData12()
      }
    }
      gotoHere2(id: any){
        localStorage.setItem('id',id);
        this.router.navigate(['/cart2']);
      }
}

