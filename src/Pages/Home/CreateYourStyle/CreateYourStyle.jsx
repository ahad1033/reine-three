import React from "react";
import img from "../../../assets/images/woman_07.jpg";

const CreateYourStyle = () => {
  return (
    <section className="shape--01 smoke--shape py-7 ct-01 content-section division">
      <div className="container">
        <div className="row d-flex align-items-center">
          {/* <!-- TEXT BLOCK -->	 */}
          <div className="col-lg-6 order-last order-lg-2">
            <div className="txt-block left-column wow fadeInRight">
              {/* <!-- Section ID -->	 */}
              <span className="section-id">Create Your Style</span>

              {/* <!-- Title -->	 */}
              <h2 className="h2-md">
                Transform your hair, transform your style
              </h2>

              {/* <!-- Text --> */}
              <p className="mb-0">
                Sagittis congue augue egestas integer velna purus purus magna
                blandit suscipit egestas magna ipsum aliquam
              </p>

              {/* gpt accordion---------------------------------------------------------------------  */}

              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Certified Stylists
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Nemo ipsam magna volute placerat a turpis ipsum purus
                      sapien ultrice ipsum aliquam congue dolor
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      100% Organic Cosmetics
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Magna sapien dolor vitae molestie nunc augue and primis
                      quisque sapien justo aliquet venenatis quaerat
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Easy Online Booking
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Volute magna nemo ipsam placerat turpis ipsum purus sapien
                      ultrice ipsum aliquam an ipsum congue cursus
                    </div>
                  </div>
                </div>
              </div>

              {/* gpt accordion---------------------------------------------------------------------  */}

              {/* <!-- ACCORDION WRAPPER -->	 */}
              <div className="accordion accordion-wrapper mt-5">
                <ul className="accordion">
                  {/* <!-- ACCORDION ITEM #1 --> */}
                  <li className="accordion-item is-active">
                    {/* <!-- Title --> */}
                    <div className="accordion-thumb">
                      <p>Certified Stylists</p>
                    </div>

                    {/* <!-- Text --> */}
                    <div className="accordion-panel">
                      <p className="mb-0">
                        Nemo ipsam magna volute placerat a turpis ipsum purus
                        sapien ultrice ipsum aliquam congue dolor
                      </p>
                    </div>
                  </li>
                  {/* <!-- END ACCORDION ITEM #1 --> */}

                  {/* <!-- ACCORDION ITEM #2 --> */}
                  <li className="accordion-item">
                    {/* <!-- Title --> */}
                    <div className="accordion-thumb">
                      <p>100% Organic Cosmetics</p>
                    </div>

                    {/* <!-- Text -->	 */}
                    <div className="accordion-panel">
                      <p className="mb-0">
                        Magna sapien dolor vitae molestie nunc augue and primis
                        quisque sapien justo aliquet venenatis quaerat
                      </p>
                    </div>
                  </li>
                  {/* <!-- END ACCORDION ITEM #2 --> */}

                  {/* <!-- ACCORDION ITEM #3 --> */}
                  <li className="accordion-item">
                    {/* <!-- Title --> */}
                    <div className="accordion-thumb">
                      <p>Easy Online Booking</p>
                    </div>

                    {/* <!-- Text -->	 */}
                    <div className="accordion-panel">
                      <p className="mb-0">
                        Volute magna nemo ipsam placerat turpis ipsum purus
                        sapien ultrice ipsum aliquam an ipsum congue cursus
                      </p>
                    </div>
                  </li>
                  {/* <!-- END ACCORDION ITEM #3 --> */}
                </ul>
              </div>
              {/* <!-- END ACCORDION WRAPPER -->		 */}
            </div>
          </div>
          {/* <!-- END TEXT BLOCK -->	 */}

          {/* <!-- IMAGE BLOCK --> */}
          <div className="col-lg-6 order-first order-lg-2">
            <div className="img-block right-column wow fadeInLeft">
              <img className="img-fluid" src={img} alt="content-image" />
            </div>
          </div>
        </div>
        {/* <!-- End row --> */}
      </div>
      {/* <!-- End container --> */}
    </section>
  );
};

export default CreateYourStyle;
