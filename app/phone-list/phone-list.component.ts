declare var angular: angular.IAngularStatic;
import { Component } from "@angular/core";
import { downgradeComponent } from "@angular/upgrade/static";
import { Phone, PhoneData } from "../core/phone/phone.service";

@Component({
  selector: "phone-list",
  templateUrl: "./phone-list/phone-list.template.html"
})
export class PhoneListComponent {
  phones: PhoneData[];
  query: string;
  orderProp: string;

  static $inject = ["phone"];
  constructor(phone: Phone) {
    phone.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = "age";
  }

  getPhones(): PhoneData[] {
    return this.sortPhones(this.filterPhones(this.phones));
  }

  private filterPhones(phones: PhoneData[]): PhoneData[] {
    if (phones && this.query) {
      return phones.filter(phone => {
        let name = phone.name.toLowerCase();
        let snippet = phone.snippet.toLowerCase();
        return (
          name.indexOf(this.query.toLowerCase()) >= 0 ||
          snippet.indexOf(this.query.toLowerCase()) >= 0
        );
      });
    }

    return phones;
  }

  private sortPhones(phones: PhoneData[]): PhoneData[] {
    if (phones && this.orderProp) {
      return phones.slice().sort((a, b) => {
        if (a[this.orderProp] < b[this.orderProp]) {
          return -1;
        } else if (a[this.orderProp] > b[this.orderProp]) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    return phones;
  }
}

angular.module("phoneList").directive(
  "phoneList",
  downgradeComponent({
    component: PhoneListComponent
  })
);
