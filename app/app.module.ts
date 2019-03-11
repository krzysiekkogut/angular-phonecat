import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { UpgradeModule } from "@angular/upgrade/static";
import { routeParamsProvider } from "./ajs-upgraded-providers";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing-module";
import { CheckmarkPipe } from "./core/checkmark/checkmark.pipe";
import { Phone } from "./core/phone/phone.service";
import { PhoneDetailComponent } from "./phone-detail/phone-detail.component";
import { PhoneListComponent } from "./phone-list/phone-list.component";

@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PhoneListComponent,
    PhoneDetailComponent,
    CheckmarkPipe
  ],
  entryComponents: [PhoneListComponent, PhoneDetailComponent],
  providers: [Phone, routeParamsProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
