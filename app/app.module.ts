import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { BrowserModule } from "@angular/platform-browser";
import { UpgradeModule } from "@angular/upgrade/static";
import { Phone } from "./core/phone/phone.service";

@NgModule({
  imports: [BrowserModule, UpgradeModule, HttpModule],
  providers: [Phone]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ["phonecatApp"]);
  }
}
