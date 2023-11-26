import React from "react";
import AboutSection from "../Home/AboutSection/AboutSection";
import Services from "../Home/Services/Services";
import OurLocation from "../Home/OurLocation/OurLocation";
import HeaderSection from "../../Component/HeaderSection/HeaderSection";
import img from '../../../src/assets/images/banner-1.jpg'

const ServicePage = () => {
  return (
    <div>
      <HeaderSection
        backgroundImage={img}
        heading="Services"
        subHeading="Our Services"
      />
      <div class="pt-8 pricing-5 pricing-section division">
        <div class="container">
          <div class="pricing-5-wrapper">
            <div class="row">
              <div class="col-lg-6">
                <div class="pricing-5-table left-column wow fadeInUp">
                  <div class="pricing-5-category mb-4">
                    <h3>Cutting & Styling</h3>
                  </div>

                  <ul class="pricing-list">
                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Women's Haircut</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>$68 - $153</p>
                        </div>
                      </div>
                    </li>

                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Men's Haircut</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>$45 - $92</p>
                        </div>
                      </div>
                    </li>

                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Blow Dry</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>From $44</p>
                        </div>
                      </div>
                    </li>

                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Updo/Style</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>$75 - $164</p>
                        </div>
                      </div>

                      <div class="price-txt">
                        <p>(shampoo not included)</p>
                      </div>
                    </li>

                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Child’s Haircut</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>$32 - $68</p>
                        </div>
                      </div>

                      <div class="price-txt">
                        <p>(12 years old + under)</p>
                      </div>
                    </li>
                  </ul>

                  <div class="pricing-5-category mt-4 mb-4">
                    <h3>Hair Coloring</h3>
                  </div>

                  <ul class="pricing-list">
                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Single Process</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>$130 - $195</p>
                        </div>
                      </div>

                      <div class="price-txt">
                        <p>(gloss not included)</p>
                      </div>
                    </li>

                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Double Process</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>$290 - $375</p>
                        </div>
                      </div>
                    </li>

                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Full Head Highlights</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>$345 - $380</p>
                        </div>
                      </div>
                    </li>

                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Half Head Highlights</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>$260 - $290</p>
                        </div>
                      </div>
                    </li>

                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Balayage</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>$85 - $220</p>
                        </div>
                      </div>
                    </li>

                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Color Refresh</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>$95 - $130</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="pricing-5-table right-column wow fadeInUp">
                  <div class="pricing-5-category p5-top mb-4">
                    <h3>Hair Treatments</h3>
                  </div>

                  <ul class="pricing-list">
                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Brazilian Blow Out</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>$180 - $255</p>
                        </div>
                      </div>
                    </li>

                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Keratin Complex Express</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>$210</p>
                        </div>
                      </div>

                      <div class="price-txt">
                        <p>(Service length 60 minutes)</p>
                      </div>
                    </li>

                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Keratin Complex</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>$280 - $420</p>
                        </div>
                      </div>
                    </li>

                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Keratin Complex Max</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>$350 - $495</p>
                        </div>
                      </div>

                      <div class="price-txt">
                        <p>(Includes KC MAX Treatment Spray)</p>
                      </div>
                    </li>

                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Permanent Wave</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>$185 - $240</p>
                        </div>
                      </div>
                    </li>

                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Hair Gloss</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>$40 - $55</p>
                        </div>
                      </div>
                    </li>

                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Safe Color Treatment</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>$35 - $95</p>
                        </div>
                      </div>
                    </li>

                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Hair & Scalp Treatments</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>$45 - $240</p>
                        </div>
                      </div>
                    </li>
                  </ul>

                  <div class="pricing-5-category mt-4 mb-4">
                    <h3>Hair Extensions</h3>
                  </div>

                  <ul class="pricing-list">
                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Blowdry with Extensions</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>$65 - $95</p>
                        </div>
                      </div>
                    </li>

                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Extensions Service</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>$110 per hour</p>
                        </div>
                      </div>
                    </li>

                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Keratin Hair Extensions</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>$720 - $860</p>
                        </div>
                      </div>
                    </li>

                    <li class="pricing-5-item">
                      <div class="detail-price">
                        <div class="price-name">
                          <p>Hair Extension Removal</p>
                        </div>
                        <div class="price-dots"></div>
                        <div class="price-number">
                          <p>$85 - $275</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="more-btn mt-6">
                <a href="booking.html" class="btn btn--tra-black hover--black">
                  Book Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutSection></AboutSection>
      <Services></Services>
      <OurLocation></OurLocation>
    </div>
  );
};

export default ServicePage;
