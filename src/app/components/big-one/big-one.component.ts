import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable, pipe } from "rxjs";

@Component({
  selector: "app-big-one",
  templateUrl: "./big-one.component.html",
  styleUrls: ["./big-one.component.scss"]
})
export class BigOneComponent {
  data;

  constructor(db: AngularFirestore) {
    this.data = db
      .collection("bigOne")
      .doc("bigOne")
      .valueChanges();
  }
}
