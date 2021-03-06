import React from "react";

function Footer() {
  return (
    <footer className="footer row py-3 text-center">
      <div className="row footerContainer">
        <h3>Contact Me!</h3>
        <address>
        Email: <a href="mailto:riraq25@gmail.com">riraq25@gmail.com</a><br />
          <a href="https://github.com/riraq" target="_blank" rel="noreferrer" className="gx-4 px-2 col">GitHub</a>
          <a href="https://www.linkedin.com/in/rony-iraq/" target="_blank" rel="noreferrer" className="gx-4 px-2 col">LinkedIn</a>
          <a href="./assets/rony-iraq-resume.pdf" target="_blank" rel="noreferrer" className="gx-4 px-2 col">Resume</a>
        </address>
      </div>
    </footer>
  )
}

export default Footer;