import React from "react";

function Home() {
  return (
    <div className="m-3 p-2 row">
      <img src="assets/images/profile_pic.jpg" id="profilePic" className="float-start me-3 col w-25" alt="headshot of Rony Iraq" />
      <div className="col d-flex align-items-center flex-column justify-content-center align-items-start">
        <h1 className="text-center">I'm Rony Iraq</h1>
        <h2 className="text-center">Full Stack Developer</h2>
      </div>

      <p>
        I am a Full Stack Web Developer with experience in MERN applications. I received my certificate from the Coding Bootcamp at UT Austin from the Full Stack Flex program. I am working on pivoting my career from microbiology and exploring the opportunites that come with being a web developer.
      </p>

      <p>
        Born and raised in Florida and currently living in Austin, TX. I
        graduated from the University of South Florida with a Bachelor's degree in Health Sciences in 2012. I worked in microbiology laboratories for 8 years analyzing bacteria and fungi from indoor air samples. I performed
        other duties as well while holding roles as a Microbiologist, Quality Assurance Manager, Laboratory Supervisor and Technical Manager. These included data entry using relational databases, supervising/training employees, quality control of reports, internal/external audits, discussing technical details with clients, and many other tasks.
      </p>

      <p>
        The ability to use the skills of a developer in any environment is why I want to pursue this. My fascination with creating things using only a computer and knowledge drives me. You don't need highly complex technical equipment or large amounts of capital; a person and a computer can
        do incredible things and I want to be a part of that.
      </p>
    </div>
  );
}

export default Home;
