import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Phone, PhoneData } from "../core/phone/phone.service";

@Component({
  selector: "phone-detail",
  templateUrl: "./phone-detail/phone-detail.template.html"
})
export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;

  constructor(activatedRoute: ActivatedRoute, phone: Phone) {
    phone
      .get(activatedRoute.snapshot.paramMap.get("phoneId"))
      .subscribe(data => {
        this.phone = data;
        this.setImage(data.images[0]);
      });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}
