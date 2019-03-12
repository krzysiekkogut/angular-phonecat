import { PhoneData } from "./../core/phone/phone.service";
import { Observable, of } from "rxjs";
import { TestBed, ComponentFixture, async } from "@angular/core/testing";
import { PhoneListComponent } from "./phone-list.component";
import { Phone } from "../core/phone/phone.service";
import { NO_ERRORS_SCHEMA } from "@angular/compiler/src/core";

class MockPhone {
  query(): Observable<PhoneData[]> {
    return of([
      { name: "Motorola DROID", snippet: "", images: [] },
      { name: "Nexus S", snippet: "", images: [] }
    ]);
  }
}

let fixture: ComponentFixture<PhoneListComponent>;

describe("PhoneListComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneListComponent],
      providers: [{ provide: Phone, useClass: MockPhone }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneListComponent);
  });

  it("should create a `phones` property with 2 phones fetched with xhr", function() {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll(".phone-list-item").length).toBe(2);
    expect(
      compiled.querySelector(".phone-list-item:nth-child(1)").textContent
    ).toContain("Motorola DROID");
    expect(
      compiled.querySelector(".phone-list-item:nth-child(2)").textContent
    ).toContain("Nexus S");
  });

  it("should set a default value for the `orderProp` property", function() {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("select option:first-child").selected).toBe(
      true
    );
  });
});
