import { i18nMetaToJSDoc } from "@angular/compiler/src/render3/view/i18n/meta";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { UsersService } from "../users.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; firstName: string; lastName: String };
  paramsSubscription: Subscription;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.user = this.usersService.getUser(2);
    this.user = {
      id: this.route.snapshot.params["id"],
      firstName: this.route.snapshot.params["firstName"],
      lastName: this.usersService.getUser(+this.route.snapshot.params["id"])
        .lastName,
    };
    //when the component will be reloaded from inside, to not lose the information:
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      (this.user.id = params["id"]),
      (this.user.firstName = params["firstName"])
    });
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
