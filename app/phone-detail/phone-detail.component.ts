declare var angular: angular.IAngularStatic;
import { Component } from "@angular/core";
import { RouteParams } from "../ajs-upgraded-providers";
import { Phone, PhoneData } from "../core/phone/phone.service";
import { downgradeComponent } from "@angular/upgrade/static";
@Component({
  selector: "phone-detail",
  templateUrl: "./phone-detail/phone-detail.template.html"
})
export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;

  constructor(routeParams: RouteParams, phone: Phone) {
    phone.get(routeParams["phoneId"]).subscribe(data => {
      this.phone = data;
      this.setImage(data.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}

// Register `phoneDetail` component, along with its associated controller and template
angular
  .module("phoneDetail")
  .directive(
    "phoneDetail",
    downgradeComponent({ component: PhoneDetailComponent })
  );
