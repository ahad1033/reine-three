import React from "react";
import slideOne from "../../../assets/images/banner-img/slide-11.jpg";
import slideTwo from "../../../assets/images/banner-img/slide-12.jpg";
import slideThree from "../../../assets/images/banner-img/slide-13.jpg";
import slideFour from "../../../assets/images/banner-img/slide-14.jpg";

const HomeBanner = () => {
  return (
    <div id="hero-3" class="hero-section">
      <div class="container">
        {/* <!-- HERO-3 TEXT --> */}
        <div class="row">
          <div class="col">
            <div class="hero-3-txt">
              {/* <!-- Title --> */}
              <h2>Our touch will make your hair look at its best</h2>

              {/* <!-- Button --> */}
              <a href="#lnk-1" class="btn btn--black hover--tra-black">
                View Salon Menu
              </a>
            </div>
          </div>
        </div>
        {/* <!-- END HERO-3 TEXT --> */}

        {/* <!-- SLIDER --> */}

        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slideOne} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slideTwo} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slideThree} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={slideFour} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* <!-- END SLIDER --> */}
      </div>
      {/* <!-- End container --> */}
    </div>
  );
};

export default HomeBanner;
