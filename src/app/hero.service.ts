import { Injectable } from '@angular/core';
import { data,sport,crusier,adventure, touring,vintage,dualsport,dirt,chopper,naked,caferacer,bobber, supermoto,accessories} from '../assets/data'
import { helmet,glove,jacket,boots ,backpack,lever} from '../assets/data';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() { }
  giveData(){
    return data
  }
  giveData1(){
    return sport
  }
  giveData2(){
    return crusier
  }
  giveData3(){
    return adventure
  }
  giveData4(){
    return touring
  }
  giveData5(){
    return vintage
  }
  giveData6(){
    return dualsport
  }
  giveData7(){
    return dirt
  }
  giveData8(){
    return chopper
  }
  giveData9(){
    return naked
  }
  giveData10(){
    return caferacer
  }
  giveData11(){
    return bobber
  }
  giveData12(){
    return supermoto
  }
  giveData13()
  {
    return accessories
  }
  giveData14()
  {
    return helmet
  }
  giveData15()
  {
    return glove
  }
  giveData16()
  {
    return jacket
  }
  giveData17()
  {
    return boots
  }
  giveData18()
  {
    return backpack
  }
  giveData19()
  {
    return lever
  }
}
