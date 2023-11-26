import React from "react";
import img from '../../../assets/images/newsletter.jpg';

const OurLocation = () => {
  return (
    <section class="pt-8 ct-09 content-section division">
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-md-10 col-lg-8">
            <div class="section-title text-center mb-6">
              <span class="section-id">Our Locations</span>
              <h2 class="h2-title">Welcome to Reine</h2>
            </div>
          </div>
        </div>

        <div class="ct-09-img mb-5">
          <div class="hover-overlay">
            <img class="img-fluid" src={img} alt="location-photo" />
            <div class="item-overlay"></div>
          </div>
        </div>

        <div class="py-8 ct-table content-section division">
          <div class="container">
            <div class="row d-flex align-items-center">


              {/* <!-- TEXT --> */}
              <div class="col-lg-6">
                <div class="left-column wow fadeInRight">

                  {/* <!-- Section ID -->	 */}
                  <span class="section-id">Time Schedule</span>

                  {/* <!-- Title -->	 */}
                  {/* <h2 class="h2-md">Working Hours</h2> */}

                  {/* <!-- Text -->	 */}
                  <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem rerum fuga esse id similique nemo mollitia minus adipisci debitis, laborum in temporibus tenetur dolore repellendus dolores quibusdam perferendis consequuntur ipsum assumenda, excepturi aut possimus. Quod eligendi ab sint, esse quaerat nulla sapiente soluta, vero aliquid pariatur, consectetur in perspiciatis doloremque odit molestias eveniet. Neque sequi mollitia quis, qui, rem corrupti blanditiis accusantium aut quia aliquid eligendi earum natus. Enim, eius.
                  </p>

                </div>
              </div>


              {/* <!-- TABLE -->	 */}
              <div class="col-lg-6">
              <span class="section-id">Working Hours</span>
                <div class="txt-table right-column wow fadeInLeft">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>Mon – Wed</td>
                        <td> - </td>
                        <td class="text-end">10:00 AM - 9:00 PM</td>
                      </tr>
                      <tr>
                        <td>Thursday</td>
                        <td> - </td>
                        <td class="text-end">10:00 AM - 7:30 PM</td>
                      </tr>
                      <tr>
                        <td>Friday</td>
                        <td> - </td>
                        <td class="text-end">10:00 AM - 9:00 PM</td>
                      </tr>
                      <tr class="last-tr">
                        <td>Sun - Sun</td>
                        <td>-</td>
                        <td class="text-end">10:00 AM - 5:00 PM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <!-- END TABLE -->	 */}


            </div>
            {/* <!-- End row --> */}
          </div>
          {/* <!-- End container --> */}
        </div>


      </div>
    </section>
  );
};

export default OurLocation;
