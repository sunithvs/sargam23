import React from 'react'

function About() {
  return (
    <div>
            <section className="about_section layout_padding mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="img-box">
              <img src="images/about-img.png" alt="" />
            </div>
          </div>
          <div className="col-md-5">
            <div className="detail-box">
              <div className="custom_heading-container">
                <h2>About Sargam</h2>
              </div>

              <p style={{textAlign: 'center'}}> 
                The arts fest of Cochin University Students Union takes pride in
                announcing yet another edition of SARGAM. The one of a kind arts
                fest revolves around a vibrant crowd of over 9000 students
                hailing from various campuses of CUSAT (Thrikakkara, Lakeside,
                Pullincunnu) and colleges affiliated under us ( Conspi academy
                of management studies Thiruvanathapuram , Marian college of
                architecture and planning Thiruvananthapuram, Nizar Rahim & Mark
                school of Architecture Kollam, Bhavand royal institute of
                Management Ernakulam, TKM school of Architecture Kollam, Central
                Institute of Fisheries,Nautical & Engineering Training,
                Ernakulam, Asian School of Business Thiruvananthapuram, College
                of Engineering Thalasery) The 5 day event marks it's opening on
                the 28th of February and the festivities continue upto the 3rth of
                March. The stages will witness to the zealous talent of students
                across the university with days and nights filled with hues
                flair and vigour.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About