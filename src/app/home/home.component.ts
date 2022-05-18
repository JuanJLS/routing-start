import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  onLoadServer(id: number) {
    if(this.authService.loggedIn) {
      this.router.navigate(["/servers", id, "edit"], {
        queryParams: { allowEdit: 1 },
        fragment: "loading",
      });
      console.log("LoggedIn: " + this.authService.loggedIn);
    }else {
      alert("Please, log in to access to the Server!")
      console.log("LoggedIn: " + this.authService.loggedIn);
    }
  }

  onLogin() {
    this.authService.login();
  }
  onLogout() {
    this.authService.logout();
  }
}
