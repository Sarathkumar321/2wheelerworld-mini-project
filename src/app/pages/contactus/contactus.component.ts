import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  
 email : string = '';
  name : string = '';
  contactno : string ='';
  message : string ='';
  constructor(private fs: AuthService) {}


  contactus() {

    if(this.name==='')
    {
      // alert('Please enter name')
      Swal.fire({
        title: 'Please enter Name',
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
    else if(this.email==='')
    {
      // alert('Please enter password')
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
    else if(this.contactno==='')
    {
      // alert('Please enter contact number')
      Swal.fire({
        title: 'Please enter Contact Number',
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
    else if(this.message==='')
    {
      // alert('Please enter a message')
      Swal.fire({
        title: 'Please enter a Message',
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
    
    
    const details = {
      name: this.name,
      email: this.email,
      contactnumber: this.contactno,
      message:this.message
      
     
    };
    this.fs.contactus1(details);
    this.contactno=''
    this.email=''
    this.name=''
    this.message=''
  }
 
   

  
}
