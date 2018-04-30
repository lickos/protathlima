import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";

@IonicPage()
@Component({
  selector: "page-detail",
  templateUrl: "detail.html"
})
export class DetailPage {
  item: any;
  schoolName: string;
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
    this.item = this.navParams.get("item");
    this.schoolName = this.item.name;
  }

  ionViewDidLoad() {
    this.db
      .list("transactions", ref => ref.orderByChild("onoma").equalTo(this.schoolName))
      .valueChanges()
      .subscribe(result => {
        console.log(result);
        this.items = result;
      });
  }
}
