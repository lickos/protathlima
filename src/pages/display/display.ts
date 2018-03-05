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
  protoG: any;
  defteroG: any;
  protoGX: Array<any> = [];
  protoGP: Array<any> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public talktodb: TalktodbProvider
  ) {}

  ionViewDidLoad() {
    // this.data1$ = this.talktodb
    //   .queryItem("1ο Γυμνάσιο Χίου")
    //   .snapshotChanges()
    //   .map(changes => {
    //     return changes.map(c => ({
    //       key: c.payload.key,
    //       ...c.payload.val()
    //     }));
    //   });
    this.ref = this.db.list("transactions", ref => ref.orderByChild("onoma").equalTo("1ο Γυμνάσιο Χίου"));
    this.ref.valueChanges().subscribe(result => {
      this.protoG = result;
      for (let x in [0, 1]) {
        this.protoGX.push(this.protoG[x].posotita_xartiou);
        this.protoGP.push(this.protoG[x].posotita_plastikou);
      }
    });
    this.ref = this.db.list("transactions", ref => ref.orderByChild("onoma").equalTo("2ο Γυμνάσιο Χίου"));
    this.ref.valueChanges().subscribe(result => {
      this.defteroG = result;
      console.log(this.defteroG);
    });
  }
}
