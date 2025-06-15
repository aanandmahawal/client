import React from "react";
import "./Projects.css";
import Roll from "react-reveal/Roll";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          PROJECTS
        </h2>
        <hr />

        {/* card design */}
        <div className="row" id="ads">
          <Roll>

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/030/489/577/non_2x/portrait-of-a-robot-in-a-white-futuristic-interior-artificial-intelligence-concept-ai-generated-photo.jpg"
                    alt="project1"
                  />
                </div>

                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Virtual Assistant</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://virtual-assistant-0dz3.onrender.com/"
                    target = "_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://assets.therestauranthq.com/uploads/2024/09/FeatureImage_How_to_Create_a_Restaurant_Website.jpg"
                    alt="project2"
                  />
                </div>

                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Tomato</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://food-delivery-frontend-5lem.onrender.com/"
                    target = "_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://miro.medium.com/v2/resize:fit:1200/1*xmGDBIg2mJStWdOEfpFx-g.jpeg"
                    alt="project3"
                  />
                </div>

                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">Next Location Prediction</h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/aanandmahawal/next-location-prediction-ml"
                    target = "_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                    alt="project4"
                  />
                </div>

                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      E-Commerce Shopping Website
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://aanandmahawal.github.io/buyHeaven/"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/020/095/345/original/blank-mock-up-notepad-icon-in-transparent-style-notebook-with-lined-illustration-on-isolated-background-diary-paper-page-template-business-concept-vector.jpg"
                    alt="project5"
                  />
                </div>

                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Notepad Diary</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://aanandmahawal.github.io/notepad/"
                    target = "_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <img
                    src="https://i.ytimg.com/vi/u3z-X4kz1Wo/hqdefault.jpg"
                    alt="project6"
                  />
                </div>
                
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Sorting Visualiser</h5>
                  </div>
                  <a className="ad-btn" href="https://aanandmahawal.github.io/BubbleSortVisualizer/"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            

          </Roll>
        </div>
      </div>
    </>
  );
};

export default Projects;
