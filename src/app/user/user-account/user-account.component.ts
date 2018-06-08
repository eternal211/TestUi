import { Component, OnInit } from "@angular/core";
import { NgForm, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../../shared/models/user";
// import { AuthService } from "../../shared/services/auth.service";

import { UserService } from "../../shared/services/user.service";

@Component({
  selector: "app-user-account",
  templateUrl: "./user-account.component.html",
  styleUrls: ["./user-account.component.scss"]
})
export class UserAccountComponent implements OnInit {
  // loggedUser: User;
  // Enable Update Button
  // enbUpdBut: Boolean = true;

  // private authService: AuthService,
  constructor(private userService:UserService,private fb: FormBuilder) {}

  ngOnInit() {
    // this.loggedUser = this.authService.getLoggedInUser();
  }

  updateProfile(form: NgForm) {

  }
}
