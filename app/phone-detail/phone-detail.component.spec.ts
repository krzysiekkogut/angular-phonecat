import { ActivatedRoute } from "@angular/router";
import { PhoneDetailComponent } from "./phone-detail.component";
import { CheckmarkPipe } from "./../core/checkmark/checkmark.pipe";
import { TestBed, async } from "@angular/core/testing";
import { Phone, PhoneData } from "../core/phone/phone.service";
import { of, Observable } from "rxjs";

function xyzPhoneData(): PhoneData {
  return {
    name: "phone xyz",
    snippet: "",
    images: ["image/url1.png", "image/url2.png"]
  };
}

class PhoneMock {
  get = (id: string): Observable<PhoneData> => {
    return of(xyzPhoneData());
  };
}

class ActivatedRouteMock {
  constructor(private params: any) {}

  get snapshot() {
    return {
      paramMap: {
        get: (paramName: string): any => {
          return this.params[paramName];
        }
      }
    };
  }
}

describe("PhoneDetailComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CheckmarkPipe, PhoneDetailComponent],
      providers: [
        { provide: Phone, useClass: PhoneMock },
        {
          provide: ActivatedRoute,
          useValue: new ActivatedRouteMock({ params: { phoneId: 1 } })
        }
      ]
    }).compileComponents();
  }));

  it("should fetch the phone details", function() {
    const fixture = TestBed.createComponent(PhoneDetailComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h1").textContent).toContain(
      xyzPhoneData().name
    );
  });
});
