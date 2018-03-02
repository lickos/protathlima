import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class TalktodbProvider {
  constructor(public db: AngularFireDatabase) {
    console.log("Hello TalktodbProvider Provider");
  }

  queryItem(schoolName: string) {
    return this.db.list("transactions", ref => ref.orderByChild("onoma").equalTo(schoolName));
  }
}
