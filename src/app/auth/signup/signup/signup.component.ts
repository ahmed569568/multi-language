import { Component, OnInit } from '@angular/core';
// import { User } from '@app/interface/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  // user: User = new User(" "," "," "," "," ")

  constructor() {}

  ngOnInit(): void {}
  signUp(f: any) {
    console.log(f.value);
  }
}
