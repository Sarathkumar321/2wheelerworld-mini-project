import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { AuthService } from 'src/app/shared/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
export class OrderformComponent {
  paymentHandler: any = null;
  pcart :any
  pcart1:any
  price1:any
  first :string='';
  last :string='';
  date :string='';
  productname:string='';
  productprice:string='';
  address:string='';
  address1:string='';
  city:string='';
  region:string='';
  pincode:string='';
  country:string='';
  constructor(private router:Router,private hero:HeroService,private fs:AuthService ) {} 
  ngOnInit(){
    let pcart=localStorage.getItem('pname')
    let price =localStorage.getItem('price')
     console.log(pcart)
     console.log(price)
    this.pcart1=pcart
    this.price1=price
     this.invokeStripe();
     
  }
  
    
    
  makePayment() {
      const paymentHandler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51MkLaXSCswJvVS4xWyFGadgapUUZoKUr2wCzQ2aANYnc0udtvPLcYmF4JhKVtwisF7oJNCEUuHsly0mq4iyrGSsZ00GoqktKxB',
        locale: 'auto',
        token: function (stripeToken: any) {
          console.log(stripeToken);
          
          const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Payment Successfull'
          })
        },
      });
  
      paymentHandler.open({
        name: '2WheelerWorld',
        description: 'online payment',
        amount: 0 * 100,
      });
    }
  
    invokeStripe() {
      if (!window.document.getElementById('stripe-script')) {
        const script = window.document.createElement('script');
        script.id = 'stripe-script';
        script.type = 'text/javascript';
        script.src = 'https://checkout.stripe.com/checkout.js';
        script.onload = () => {
          this.paymentHandler = (<any>window).StripeCheckout.configure({
            key: 'pk_test_51MkLaXSCswJvVS4xWyFGadgapUUZoKUr2wCzQ2aANYnc0udtvPLcYmF4JhKVtwisF7oJNCEUuHsly0mq4iyrGSsZ00GoqktKxB',
            locale: 'auto',
            token: function (stripeToken: any) {
              console.log(stripeToken);
              alert('Payment has been successfull!');
            },
          });
        };
  
        window.document.body.appendChild(script);
      }
    }
    orderform(){

      
      if(this.first==='')
    {
      
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'info',
        title: 'Please enter First Name'
      })
      
      return;
    }
    else if(this.last==='')
    {
      
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'info',
        title: 'Please enter Last Name '
      })
      return;
    }
    else if(this.date==='')
    {
      // alert('Please enter contact number')
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      Toast.fire({
        icon: 'info',
        title: 'Please enter Date'
      })
      
      return;
    }
    
  else if(this.address==='')
      {
        // alert('Please enter a message')
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'info',
          title: 'Please enter Address'
        })
        return;
      }
  else if(this.address1==='')
      {
        // alert('Please enter a message')
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'info',
          title: 'Please confirm Address'
        })
        return;
      }
  else if(this.city==='')
      {
        // alert('Please enter a message')
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'info',
          title: 'Please enter City'
        })
        return;
      }
  else if(this.region==='')
      {
        // alert('Please enter a message')
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'info',
          title: 'Please enter Region'
        })
        return;
      }
  else if(this.pincode==='')
      {
        // alert('Please enter a message')
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'info',
          title: 'Please enter Pincode'
        })
        return;
      }
  else if(this.country==='')
      {
        // alert('Please enter a message')
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'info',
          title: 'Please enter Country Name'
        })
        return;
      }
     const order={
      first :this.first,
  last :this.last,
  date :this.date,
  productname:this.pcart1,
  productprice:this.price1,
  address:this.address,
  address1:this.address1,
  city:this.city,
  region:this.region,
  pincode:this.pincode,
  country:this.country
     };
     this.fs.orderdetails(order);
     
     this.first=''
     this.last=''
     this.date=''
     this.productname=''
     this.productprice=''
     this.address=''
     this.address1=''
     this.city=''
     this.region=''
     this.pincode=''
     this.country=''
     }
    }
  
  
      
      
      
  