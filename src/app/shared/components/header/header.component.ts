import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.stats';
import { Login } from 'src/app/models/login';
import * as LoginActions from '../../../actions/login.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  login: Observable<Login>
  userLoggedIn = false
  userName:string
  userId:string
  showLogin:boolean


  constructor(private changeDetectorRef: ChangeDetectorRef, private store: Store<AppState>) { 
    this.login = store.select('login');
  }



  ngOnInit(): void {

    this.userLoggedIn = (localStorage.getItem('userLoggedIn') === 'true')
    this.userName = localStorage.getItem('userName')
    this.userId = localStorage.getItem('userId')


    if(this.userLoggedIn){
      this.store.dispatch(new LoginActions.LoginSuccessfull({success: true,username: this.userName,userid: this.userId}) )
    }

    this.login.subscribe(res => {
      this.userLoggedIn = res.success
      this.userName = res.username
      this.userId = res.userid

      localStorage.setItem('userLoggedIn',res.success.toString())
      localStorage.setItem('userName',res.username.toString()) 
      localStorage.setItem('userId',res.username.toString()) 
      if(LoginActions.LoginSuccessfull){
        this.changeDetectorRef.detectChanges();

      }
    })

  }

  show(){
    this.showLogin = false;
    this.changeDetectorRef.detectChanges();
    this.showLogin = true;
  }
  signOut(){
    localStorage.setItem('userLoggedIn','false')
    localStorage.removeItem('userName') 
    localStorage.removeItem('userId') 
    this.store.dispatch(new LoginActions.LoginLogout({success: false,username: "",userid: ""}) )
    this.changeDetectorRef.detectChanges();

  }
}
