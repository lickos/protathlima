import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-welcome",
  templateUrl: "welcome.html"
})
export class WelcomePage {
  showGimnasia: boolean = false;
  showLikeia: boolean = false;
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {}

  openGimnasia() {
    this.showGimnasia = !this.showGimnasia;
  }

  openLikeia() {
    this.showLikeia = !this.showLikeia;
  }
}
