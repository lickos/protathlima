import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { Transaction } from "../../models/transaction/transaction.model";
import { Observable } from "rxjs/Observable";
import { AngularFireList } from "angularfire2/database/interfaces";
import { Chart } from "chart.js";
import { TalktodbProvider } from "../../providers/talktodb/talktodb";

@IonicPage()
@Component({
  selector: "page-display",
  templateUrl: "display.html"
})
export class DisplayPage {
  ref: AngularFireList<any> = this.db.list("transactions");
  data1$: Observable<Transaction[]>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public talktodb: TalktodbProvider
  ) {}

  ionViewDidLoad() {
    this.data1$ = this.talktodb
      .queryItem("1ο Γυμνάσιο Χίου")
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key,
          ...c.payload.val()
        }));
      });
    console.log(this.data1$);
  }
}
