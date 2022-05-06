import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { ServersService } from "../servers.service";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    //the + is to convert from a String to a number (all what we received from the URL is a String)
    const id = +this.route.snapshot.params["id"];
    this.server = this.serversService.getServer(id);
    //To have any change done in the Component:
    this.route.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params["id"]);
    });
  }
  onEdit() {
    //To save the parameters, we add the second part
    this.router.navigate(["edit"], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }
}
