import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { Transaction } from "../../models/transaction/transaction.model";
import { AngularFireList } from "angularfire2/database/interfaces";
import { Chart } from "chart.js";
import { TalktodbProvider } from "../../providers/talktodb/talktodb";

@IonicPage()
@Component({
  selector: "page-display",
  templateUrl: "display.html"
})
export class DisplayPage {
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
  @ViewChild("valueBarsCanvas") valueBarsCanvas;
  ref: AngularFireList<any> = this.db.list("transactions");
  gimName: Array<string> = [];
  dinamikotita = [];
  gimsCum = [];
  gimsX = [];
  gimsP = [];
  gimsLabel = [];
  data: Array<number> = [];
  dataX: Array<number> = [];
  dataP: Array<number> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public talktodb: TalktodbProvider
  ) {}

  ionViewDidLoad() {
    for (let x of this.gimnasia) {
      this.gimName.push(x.name);
    }
    this.getData(this.gimName);
  }

  getData(gims: Array<string>) {
    for (let x of this.gimnasia) {
      console.log(x.name);
      this.db
        .list("transactions", ref => ref.orderByChild("onoma").equalTo(x.name))
        .valueChanges()
        .subscribe(result => {
          console.log(x.name);
          let tempX = 0;
          let tempP = 0;
          let temp: any = result;
          for (let y = 0; y < result.length; y++) {
            tempX += +temp[y].posotita_xartiou;
            tempP += +temp[y].posotita_plastikou;
          }
          this.gimsCum.push((tempX + tempP) / x.dinamiko);
          this.gimsX.push(tempX / x.dinamiko);
          this.gimsP.push(tempP / x.dinamiko);
          this.gimsLabel.push(x.name);
        });
    }
    setTimeout(() => {
      this.createChart(this.gimsCum, this.gimsX, this.gimsP);
    }, 2000);
  }

  createChart(data: Array<number>, dataX: Array<number>, dataP: Array<number>) {
    let gimName = [];
    for (let x of this.gimnasia) {
      gimName.push(x.name);
    }
    let chart = new Chart(this.valueBarsCanvas.nativeElement, {
      type: "bar",
      responsive: true,
      data: {
        labels: this.gimsLabel,
        datasets: [
          {
            label: "Ποσότητα Xαρτιού ανά Μαθητή",
            data: dataX,
            borderWidth: 1,
            backgroundColor: "rgb(0,255,0)",
            borderColor: "rgb(0,0,0)"
          },
          {
            label: "Ποσότητα Πλαστικού ανά Μαθητή",
            data: dataP,
            borderWidth: 1,
            backgroundColor: "rgb(0,0,255)",
            borderColor: "rgb(0,0,0)"
          },
          {
            label: "Συνολική Ποσότητα ανά Μαθητή",
            data: data,
            borderWidth: 1,
            backgroundColor: "rgb(255,0,0)",
            borderColor: "rgb(0,0,0)"
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
}
