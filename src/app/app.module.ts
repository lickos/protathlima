import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { TalktodbProvider } from '../providers/talktodb/talktodb';

var firebaseConfig = {
  apiKey: "AIzaSyC9EakqPdhKx3ZuyF_JaekJxW-h4s6fc4w",
  authDomain: "compostsurvey-ba896.firebaseapp.com",
  databaseURL: "https://compostsurvey-ba896.firebaseio.com",
  projectId: "compostsurvey-ba896",
  storageBucket: "compostsurvey-ba896.appspot.com",
  messagingSenderId: "244956535059"
};

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [StatusBar, SplashScreen, { provide: ErrorHandler, useClass: IonicErrorHandler },
    TalktodbProvider]
})
export class AppModule {}
