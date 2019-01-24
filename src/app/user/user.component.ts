import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Services } from '../services/user.service';
import { User } from '../models/User.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private httpConnection: Services) { }

  ngOnInit() {
    this.createForm();
    this.getAllUsers();
  }

  public getAllUsers() {
    this.httpConnection.getObs().subscribe(
      data => console.log(data)
    );
  }

  public insertUser(form: FormGroup) : void {
    let user: User = new User(form.value);
    this.httpConnection.postObs(user).subscribe(
      data => console.log(data)
    );
  }

  private createForm() : void {
    this.userForm = this.fb.group({
      id: this.fb.control(0),
      name: this.fb.control(null),
      email: this.fb.control(null),
      password: this.fb.control(null)
    });
  }

}
