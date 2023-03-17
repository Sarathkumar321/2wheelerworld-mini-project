import { Injectable } from '@angular/core';
import { AngularFireAuth }from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
import {Firestore,collection,doc,addDoc,setDoc} from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth,private fires:Firestore,private router : Router) { }
  

  //login method
  login(email : string, password : string){
    this.fireauth.signInWithEmailAndPassword(email,password).then( () =>{
      localStorage.setItem('token','true');
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
        title: 'You are successfully logged in'
      })
      this.router.navigate(['/home']);
    }, err => {
      // alert('Invalid Email or Password');
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
        icon: 'warning',
        title: 'Invalid Email ID or Password'
      })
      this.router.navigate(['/signup']);
    })
  }
  //register method
  register(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( () => {
      // alert('Registration Successfull');
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
        title: 'Registration in successfully'
      })
      this.router.navigate(['/signup']);
    }, err => {
      // alert(err.message);
      // alert('Registration Failed')
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
        icon: 'error',
        title: 'Registration Failed'
      })
      this.router.navigate(['/signup']);
    

    })
  }


  //sign out
  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/signup']);
    }, err =>{
       alert(err.message);
      
    })
  }
  //contact
  contactus1(details: any) {
    const contactsCollection = collection(this.fires, 'contacts');
    addDoc(contactsCollection, details)
      .then(() => {
        console.log('Contact information added successfully');
        // alert('Contact information added successfully');
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
          title: 'Contact information added successfully'
        })
      })
      .catch((error) => {
        console.error('Error adding Query : ', error);
        // alert('Error adding contact information');
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error adding contact information!',
          
        });
      });
    }
      //order details
      orderdetails(order:any){
        const ordersCollection =collection(this.fires,'orders');
        addDoc(ordersCollection, order)
        
        .then(() =>{
          console.log('order details added successfully');
         
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
            title: 'Order Placed successfully'
          })
         
        })
        .catch((error)=>{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error adding Order Details!',
            
          });
        });
       
      }

      //forgot password
      forgotpassword(email : string){
        this.fireauth.sendPasswordResetEmail(email).then(() =>{
          console.log('order details added successfully');
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
            title: 'Link to Reset Password is successfully sended to registered Email id '
          })
          this.router.navigate(['/signup']);
        }, err =>
        {
          // alert('something went wrong');
          const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'error',
            title: 'something went wrong'
          })
        })
      }
  }
  
  


