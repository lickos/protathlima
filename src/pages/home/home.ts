import { Component } from "@angular/core";
import { NavController, IonicPage } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireList } from "angularfire2/database/interfaces";
import { ToastController } from "ionic-angular/components/toast/toast-controller";
import { Transaction } from "../../models/transaction/transaction.model";

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  gimnasioName: string = "";
  likeioName: string = "";
  xartiGimnasio: number = null;
  plastikoGimnasio: number = null;
  xartiLikeio: number = null;
  plastikoLikeio: number = null;
  ref: AngularFireList<any>;
  dateGimnasia = Date;
  dateLikeia = Date;
  transaction: Transaction = {
    category: "",
    onoma: "",
    posotita_xartiou: 0,
    posotita_plastikou: 0,
    imerominia: this.dateGimnasia
  };

  gimnasia = [
    { value: 0, name: "1ο Γυμνάσιο Χίου", dinamiko: 180 },
    { value: 1, name: "2ο Γυμνάσιο Χίου", dinamiko: 186 },
    { value: 3, name: "3ο Γυμνάσιο Χίου", dinamiko: 149 },
    { value: 4, name: "4ο Γυμνάσιο Χίου", dinamiko: 164 },
    { value: 5, name: "Γυμνάσιο Βροντάδου", dinamiko: 193 },
    { value: 6, name: "Γυμνάσιο Καρδαμύλων", dinamiko: 47 },
    { value: 7, name: "Γυμνάσιο Καλαμωτής", dinamiko: 63 },
    { value: 8, name: "Γυμνάσιο Κάμπου", dinamiko: 221 },
    { value: 9, name: "Γυμνάσιο Καλλιμασιάς", dinamiko: 100 },
    { value: 10, name: "Μουσικό Σχολείο", dinamiko: 96 },
    { value: 11, name: "Γυμνάσιο Βολισσού", dinamiko: 15 }
  ];

  likeia = [
    { value: 0, name: "1ο Λύκειο Χίου", dinamiko: 227 },
    { value: 1, name: "2ο Λύκειο Χίου", dinamiko: 232 },
    { value: 3, name: "3ο Λύκειο Χίου", dinamiko: 218 },
    { value: 7, name: "Λύκειο Καλαμωτής", dinamiko: 38 },
    { value: 7, name: "Λύκειο Καρδαμύλων", dinamiko: 24 },
    { value: 7, name: "Λύκειο Βροντάδου", dinamiko: 120 },
    { value: 7, name: "1ο ΕΠΑΛ ΧΙΟΥ", dinamiko: 235 },
    { value: 7, name: "1ο ΕΠΑΛ Βροντάδου", dinamiko: 179 },
    { value: 9, name: "1ο ΕΠΑΛ ΚΑΡΔΑΜΥΛΩΝ", dinamiko: 48 }
  ];
  constructor(public navCtrl: NavController, public db: AngularFireDatabase, public toastCtrl: ToastController) {}

  ionViewDidLoad() {
    this.ref = this.db.list("transactions");
  }

  consoleMe() {
    console.log(this.gimnasioName);
    console.log(this.xartiGimnasio);
    console.log(this.plastikoGimnasio);
    this.transaction = {
      category: "GYMNASIA",
      onoma: this.gimnasioName,
      posotita_xartiou: this.xartiGimnasio,
      posotita_plastikou: this.plastikoGimnasio,
      imerominia: this.dateGimnasia
    };
    console.log(this.transaction);
    this.ref.push(this.transaction).then(() => {
      let toast = this.toastCtrl.create({
        message: "New Transaction added",
        duration: 3000
      });
      toast.present();
    });
  }

  consoleMe2() {
    console.log(this.likeioName);
    console.log(this.xartiLikeio);
    console.log(this.plastikoLikeio);
    this.transaction = {
      category: "LIKEIA",
      onoma: this.likeioName,
      posotita_xartiou: this.xartiLikeio,
      posotita_plastikou: this.plastikoLikeio,
      imerominia: this.dateLikeia
    };
    console.log(this.transaction);
    this.ref.push(this.transaction).then(() => {
      let toast = this.toastCtrl.create({
        message: "New Transaction added",
        duration: 3000
      });
      toast.present();
    });
  }

  testResults() {
    this.navCtrl.push("DisplayPage");
  }
}
