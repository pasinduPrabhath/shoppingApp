import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function CartCheckout() {
  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="h-100 py-5">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-black">
                <MDBRow>
                  <MDBCol lg="7" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Your products
                    </MDBTypography>

                    <div className="d-flex align-items-center mb-5">
                      <div className="flex-shrink-0">
                        <MDBCardImage
                          src=""
                          fluid
                          style={{ width: "150px" }}
                          alt="Generic placeholder image"
                        />
                      </div>

                      <div className="flex-grow-1 ms-3">
                        <a href="#!" className="float-end text-black">
                          <MDBIcon fas icon="times" />
                        </a>
                        <MDBTypography tag="h5" className="text-primary">
                        MacBook Pro M2 Pro – 14″ 10-Core CPU, 16-Core GPU, 16GB Unified Memory, 512GB SSD Storage
                        </MDBTypography>
                        <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                          Price: Rs :625000.00
                        </MDBTypography>

                      </div>
                    </div>


                    <hr
                      className="mb-4"
                      style={{
                        height: "2px",
                        backgroundColor: "#1266f1",
                        opacity: 1,
                      }}
                    />

                    <div className="d-flex justify-content-between px-x">
                      <p className="fw-bold">Discount:</p>
                      <p className="fw-bold">95$</p>
                    </div>
                    <div
                      className="d-flex justify-content-between p-2 mb-2"
                      style={{ backgroundColor: "#e1f5fe" }}
                    >
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        Total:
                      </MDBTypography>
                      <MDBTypography tag="h5" className="fw-bold mb-0">
                        2261$
                      </MDBTypography>
                    </div>
                  </MDBCol>
                  <MDBCol lg="5" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Payment
                    </MDBTypography>

                    <form className="mb-5">
                      <MDBInput
                        className="mb-5"
                        label="Address"
                        type="text"
                        size="lg"
                        defaultValue="1234 5678 9012 3457"
                      />

                      <MDBInput
                        className="mb-5"
                        label="Contact number"
                        type="text"
                        size="lg"
                        defaultValue="John Smith"
                      />

                   
                      <MDBBtn block size="lg">
                        Buy now
                      </MDBBtn>

                      <MDBTypography
                        tag="h5"
                        className="fw-bold mb-5"
                        style={{ position: "absolute", bottom: "0" }}
                      >
                        
                      </MDBTypography>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}