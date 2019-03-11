import { PhoneDetailComponent } from "./phone-detail/phone-detail.component";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { UpgradeModule } from "@angular/upgrade/static";
import { PhoneListComponent } from "./phone-list/phone-list.component";
import { Phone } from "./core/phone/phone.service";
import { routeParamsProvider } from "./ajs-upgraded-providers";

@NgModule({
  imports: [BrowserModule, UpgradeModule, HttpModule, FormsModule],
  declarations: [PhoneListComponent, PhoneDetailComponent],
  entryComponents: [PhoneListComponent, PhoneDetailComponent],
  providers: [Phone, routeParamsProvider]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}
  ngDoBootstrap() {
    this.upgrade.bootstrap(document.documentElement, ["phonecatApp"]);
  }
}
