import behance from "../assets/icons/Behance.png";
import figma from "../assets/icons/Figma.png";
import github from "../assets/icons/Github.png";
import extLink from "../assets/icons/quill_link-out.png";

import blackjack from "../assets/img/blackjack.png";
import geniotech from "../assets/img/geniotech.png";
import backtoplay from "../assets/img/backtoplay.png";
import glasscosmetics from "../assets/img/glasscosmetics.png";


function Projects() {
  return (
    <section className="section-projects" id="projects">
      <h1 className="u-heading-secondary">My Work</h1>
      <div className="project-container">
        <div className="project-img-container">
          <img src={blackjack} alt="glass cover" className="project-img" />
        </div>

        <div className="project-description">
          <h4 className="project-heading u-text-color-primary">
            Simple Blackjack game
          </h4>
          <p className="project-subheading">Personal</p>
          <p>September 2024</p>
          <ul>
            <li>
              Built a simple Blackjack game using <b>HTML</b> <b>CSS</b> and <b>JavaScript</b>.
            </li>
            <li>
              Allow users to draw random cards and calculate points based on Blackjack rules.
            </li>
            <li>Implemented a full deck of 52 cards, each represented as JavaScript objects with <b>point values</b> and corresponding <b>image URLs</b>, using an <b>array data structure</b>.</li>
            <li>Applied core front-end development skills, including DOM manipulation, event handling, and data management using JavaScript.</li>
            <li><strong>Link to live app below:</strong></li>
          </ul>
          <div className="project-doc--icons-container">
            <a href="https://github.com/whichfahim/blackjack-game" target="__blank">
              <img
                src={github}
                className="project-doc--icon"
                alt="github logo"
              />
            </a>
            <a href="https://whichfahim.github.io/blackjack-game/" target="__blank">
              <img
                src={extLink}
                className="project-doc--icon"
                alt="external link icon"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="project-img-container">
          <img src={geniotech} alt="geniotech cover" className="project-img" />
        </div>

        <div className="project-description">
          <h4 className="project-heading u-text-color-primary">
            E-Learning Platform
          </h4>
          <p className="project-subheading">Geniotech</p>
          <p>May 2023 - October 2024</p>
          <ul>
            <li>
              Enhanced UI performance by 20% through the implementation of efficient HTML5 and ES6 code, improving load times across key pages.
            </li>
            <li>
              Created responsive web interfaces utilizing <strong>HTML5</strong>, <strong>CSS3</strong>, <strong>ES6</strong>, and <strong>Python</strong> (Django)
            </li>
            <li>
              Integrated <strong>WebRTC</strong> for video calling, screen sharing, and chat
              functionalities.
            </li>
            <li>
              Implemented <strong>Square</strong> payment gateway using APIs to facilitate secure
              transactions.
            </li>
            <li>
              Improved user satisfaction scores by 10% after incorporating feedback from testers and clients to optimize interface design and functionality.
            </li>
          </ul>
          <div className="project-doc--icons-container">
            <a
              href="https://www.figma.com/proto/bffZzVzfgH1bNkbBNNhFJS/Geniotech-v0.2?page-id=1%3A3&type=design&node-id=5-2&viewport=1028%2C142%2C0.36&t=dd8cDrRMi6G4L30i-1&scaling=min-zoom&starting-point-node-id=7%3A149"
              target="__blank"
            >
              <img src={figma} className="project-doc--icon" alt="figma icon" />
            </a>
            <a
              href="https://www.behance.net/gallery/197590325/Geniotech-Robotics-and-Programming-for-kids"
              target="__blank"
            >
              <img
                src={behance}
                className="project-doc--icon"
                alt="behance logo"
              />
            </a>
            <a href="https://github.com/whichfahim/GENIO-TECH" target="__blank">
              <img
                src={github}
                className="project-doc--icon"
                alt="github logo"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="project-img-container">
          <img src={backtoplay} alt="b2p cover" className="project-img" />
        </div>

        <div className="project-description">
          <h4 className="project-heading u-text-color-primary">Back To Play</h4>
          <p className="project-subheading">BRAC IT</p>
          <p>May 2023 - October 2024</p>
          <ul>
            <li>
              Reduced UI navigation time by 30%, streamlining workflows for over 200 employees in the evaluation application.
            </li>
            <li>
              Contributed to the successful launch of of 5+ web applications.
            </li>
            <li>
              Utilized <strong>React</strong>, <strong>JavaScript</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>Bootstrap</strong>, and <strong>ReactQuery</strong> for REST API integration.
            </li>
            <li>
              Incorporated feedback from Business Analysts (BA), Quality
              Assurance (QA) teams, and development team members into the
              development process.
            </li>
            <li>
              Leveraged version control tools, specifically GitLab, to
              collaborate effectively with a team of five developers.
            </li>
          </ul>
          <div className="project-doc--icons-container">
            <a
              href="https://www.figma.com/proto/iqjjxBjJAgc4YeknnxhLAv/BackToPlay?page-id=&type=design&node-id=1-4&viewport=334%2C390%2C0.07&t=cGL1fTdBLh6zbFdI-1&scaling=min-zoom&starting-point-node-id=1%3A4"
              target="__blank"
            >
              <img src={figma} className="project-doc--icon" alt="figma icon" />
            </a>

          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="project-img-container">
          <img src={glasscosmetics} alt="glass cover" className="project-img" />
        </div>

        <div className="project-description">
          <h4 className="project-heading u-text-color-primary">
            Glass Website Redesign
          </h4>
          <p className="project-subheading">Glass Cosmetics BD</p>
          <p>May 2023 - October 2024</p>
          <ul>
            <li>
              Redesigned company website while maintaining brand-consistent
              layout and colors.
            </li>
            <li>
              Produced wireframes and progressed through low-fidelity to
              high-fidelity mockups in <strong>Figma</strong>.
            </li>
            <li>Implemented development using <strong>HTML</strong> , <strong>CSS</strong>, <strong>SASS</strong>, and <strong>JS</strong>.</li>
            <li>Ensured design responsiveness across all screen sizes.</li>
            <li>Link to demo below:</li>
          </ul>
          <div className="project-doc--icons-container">
            {/* <a href="#" target="__blank">
              <img src={figma} className="project-doc--icon" alt="figma icon" />
            </a> */}
            <a
              href="https://www.behance.net/gallery/139245067/Glass-Website-Redesign"
              target="__blank"
            >
              <img
                src={behance}
                className="project-doc--icon"
                alt="behance logo"
              />
            </a>
            <a href="https://github.com/whichfahim/glass" target="__blank">
              <img
                src={github}
                className="project-doc--icon"
                alt="github logo"
              />
            </a>
            <a href="https://whichfahim.github.io/glass/" target="__blank">
              <img
                src={extLink}
                className="project-doc--icon"
                alt="external link icon"
              />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Projects;
