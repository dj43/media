import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.stats';
import * as LoginActions from '../../../actions/login.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(private store: Store<AppState>) { }

  validatingForm: FormGroup;
  loginSuccessfull:boolean

  @ViewChild('show') show
  @ViewChild('hide') hide


  ngOnInit() {

    if(this.show){
      this.show.el.nativeElement.click();

    }
    
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', [Validators.email,Validators.required]),
      loginFormModalPassword: new FormControl('', Validators.required)
    });
  }

  ngAfterViewInit(): void {
    this.show.el.nativeElement.click();
  }

  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }

  login(){
    this.loginSuccessfull = undefined
    let users = JSON.parse(localStorage.getItem('users'))['users'];
    users.forEach(element => {
      if(element['userid'] === this.loginFormModalEmail.value && element['password'] === this.loginFormModalPassword.value ){
        this.loginSuccessfull = true;
        this.store.dispatch(new LoginActions.LoginSuccessfull({success: true, userid: element['userid'], username: element['username']}))
        this.hide.el.nativeElement.click();
      }
    })
    this.loginSuccessfull = (this.loginSuccessfull === true)
  
  }
}
