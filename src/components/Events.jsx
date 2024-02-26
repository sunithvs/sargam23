import React from 'react'

function Events() {
  return (
    <div>
            <section className="do_section layout_padding-bottom">
      <div className="container">
        <div className="custom_heading-container">
          <h2>Events</h2>
        </div>
        <div className="row">
          <div className="col-md-2 col-sm-6">
            <div className="content-box bg-red">
              <div className="img-box">
                <img src="images/literature.png" alt="" />
              </div>
              <div className="detail-box">
                <h6><a href="/literature">Literature </a></h6>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="content-box bg-green">
              <div className="img-box">
                <img src="images/musical-note.png" alt="" />
              </div>
              <div className="detail-box">
                <h6><a href="/music">Music</a></h6>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="content-box bg-red">
              <div className="img-box">
                <img src="images/fine-arts.png" alt="" />
              </div>
              <div className="detail-box">
                <h6><a href="/finearts">Fine Arts</a></h6>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="content-box bg-green">
              <div className="img-box">
                <img src="images/dancing.png" alt="" />
              </div>
              <div className="detail-box">
                <h6><a href="/dance">Dance</a></h6>
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6">
            <div className="content-box bg-red">
              <div className="img-box">
                <img src="images/theatre.png" alt="" />
              </div>
              <div className="detail-box">
                <h6><a href="/theatre">Theatre</a></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Events