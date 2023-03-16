import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  email : string = '';
  password : string = '';
  username : string ='';
  constructor(private auth : AuthService){ }

  ngOnInit(): void {

  }
  login() {

    if(this.email == ''){
      Swal.fire({
        title: 'Please enter Email Address',
        icon:'info',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      return;
    }

    if(this.password == ''){
      // alert('Please enter password');
      Swal.fire({
        title: 'Please enter password',
        icon:'info',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      return;
    }
    
    this.auth.login(this.email,this.password);
    this.email = '';
    this.password = '';
  }
  register() {

    if(this.email == ''){
      // alert('Please enter Email address');
      Swal.fire({
        title: 'Please enter Email address',
        icon:'info',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
    return;
    }

    if(this.password == ''){
      // alert('Please enter Password');
      Swal.fire({
        title: 'Please enter Password',
        icon:'info',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      return;
    }
    if(this.username== ''){
      // alert('Please enter Username');
      Swal.fire({
        title: 'Please enter Username',
        icon:'info',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      return;
    }
    this.auth.register(this.email,this.password);
    this.email = '';
    this.password = '';
    this.username ='';
  }
   
}
