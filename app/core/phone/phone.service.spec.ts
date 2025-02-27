import { TestBed, inject } from "@angular/core/testing";
import {
  Http,
  BaseRequestOptions,
  Response,
  ResponseOptions
} from "@angular/http";
import { MockBackend, MockConnection } from "@angular/http/testing";
import { PhoneData, Phone } from "./phone.service";

describe("Phone", () => {
  let mockBackend: MockBackend;
  let phone: Phone;
  let phonesData: PhoneData[] = [
    { name: "Phone X", snippet: "", images: [] },
    { name: "Phone Y", snippet: "", images: [] },
    { name: "Phone Z", snippet: "", images: [] }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        Phone,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend: MockBackend, options: BaseRequestOptions) =>
            new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    });
  });

  beforeEach(inject(
    [MockBackend, Phone],
    (_mockBackend_: MockBackend, _phone_: Phone) => {
      mockBackend = _mockBackend_;
      phone = _phone_;
    }
  ));

  it("should fetch the phones data from `/phones/phones.json`", done => {
    mockBackend.connections.subscribe((conn: MockConnection) => {
      conn.mockRespond(
        new Response(new ResponseOptions({ body: JSON.stringify(phonesData) }))
      );
    });

    phone.query().subscribe(result => {
      expect(result).toEqual(phonesData);
      done();
    });
  });
});
