import React from 'react'

function Gallery() {
  return (
    <div>
            <section className="client_section layout_padding-bottom">
      <div className="container">
        <div className="custom_heading-container">
          <h2>Gallery</h2>
        </div>
      </div>

      <div className="container">
        <div
          id="carouselExample2Controls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="client_container layout_padding2">
                <div className="client_box b-1">
                  <div className="client-id">
                    <img src="images/1.jpg" alt="" />
                  </div>
                </div>
                <div className="client_box b-2">
                  <div className="client-id">
                    <img src="images/2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="client_container layout_padding2">
                <div className="client_box b-1">
                  <div className="client-id">
                    <img src="images/3.jpg" alt="" />
                  </div>
                </div>
                <div className="client_box b-2">
                  <div className="client-id">
                    <img src="images/4.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExample2Controls"
            role="button"
            data-slide="prev"
          >
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExample2Controls"
            role="button"
            data-slide="next"
          >
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Gallery