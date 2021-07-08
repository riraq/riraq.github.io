import React from "react";
import "./style.css";

function Hero() {

  return (
    <div class="px-4 py-5 my-5 text-center">

      <img class="d-block mx-auto mb-4" src="assets/images/profile_pic.jpg" alt="" width="300" height="325" />

      <h1 class="display-4 fw-bold">Rony Iraq</h1>
      <h1 class="display-6 fw-bold">Full Stack Developer</h1>
      
      <div class="b-example-divider"></div>

      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">I am a Full Stack Web Developer with experience in MERN applications. I received my certificate from the Coding Bootcamp at UT Austin from the Full Stack Flex program. I have previous experience working in microbiology laboratories, but became a web developer due to wider variety of opportunities.
        </p>
        <p class="lead mb-4">
          Born and raised in Florida and currently living in Austin, TX. I
          graduated from the University of South Florida with a Bachelor's degree in Health Sciences in 2012. I worked in microbiology laboratories for 8 years analyzing bacteria and fungi from indoor air samples. I performed
          other duties as well while holding roles as a Microbiologist, Quality Assurance Manager, Laboratory Supervisor and Technical Manager. These included data entry using relational databases, supervising/training employees, quality control of reports, internal/external audits, discussing technical details with clients, and many other tasks.
        </p>

        <p class="lead mb-4">
          The ability to use the skills of a developer in any environment is why I want to pursue this. My fascination with creating things using only a computer and knowledge drives me. You don't need highly complex technical equipment or large amounts of capital; a person and a computer can
          do incredible things and I want to be a part of that.
        </p>

      </div>
    </div>
  )
}

export default Hero;