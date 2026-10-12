
import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Heart,
  Mail,
  Sparkles,
  X,
} from "lucide-react";
import "./index.css";

const projects = [
  {
    number: "01",
    name: "TuneFinder",
    type: "Full-stack web application",
    description:
      "A music and media discovery app that makes finding something to listen to or watch a little easier.",
    technologies: ["React", "Express", "Node.js", "REST API", "JWT"],
    highlights: [
      "Connected the app to the iTunes Search API to find music and other media.",
      "Built a React interface with search results and media information.",
      "Created an Express backend with protected API routes and token authentication.",
      "Added a favourites feature for keeping track of interesting results during a session.",
    ],
    learning:
      "This project helped me understand how the front end and back end communicate, how APIs work, and how authentication can protect routes.",
  },
  {
    number: "02",
    name: "Event Planner",
    type: "React web application",
    description:
      "An event management app designed to help users organise events through a clean, simple interface.",
    technologies: ["React", "React Router", "Context API", "Bootstrap"],
    highlights: [
      "Created multiple pages for navigating the application.",
      "Built forms for adding and editing event information.",
      "Used React Context to share application state between components.",
      "Designed a soft, pastel-inspired interface with a focus on usability.",
    ],
    learning:
      "This project gave me practical experience with reusable components, routing, shared state, and building a multi-page React application.",
  },
];

function App() {
  const [noPosition, setNoPosition] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  // move the no button away from the pointer
  const moveNoButton = (event) => {
    const container = event.currentTarget.parentElement;
    const button = event.currentTarget;

    if (!container || !button) return;

    const containerRect = container.getBoundingClientRect();
    const maxX = container.clientWidth - button.offsetWidth;
    const maxY = container.clientHeight - button.offsetHeight;

    const pointerX = event.clientX - containerRect.left;
    const pointerY = event.clientY - containerRect.top;

    let newX = 0;
    let newY = 0;

    for (let i = 0; i < 50; i++) {
      newX = Math.random() * Math.max(0, maxX);
      newY = Math.random() * Math.max(0, maxY);

      const centerX = newX + button.offsetWidth / 2;
      const centerY = newY + button.offsetHeight / 2;

      if (Math.hypot(centerX - pointerX, centerY - pointerY) > 120) {
        break;
      }
    }

    setNoPosition({ x: newX, y: newY });
  };

  return (
    <div className="portfolio">
      <nav className="navbar">
        <a href="#home" className="logo" aria-label="anike wolmarans home">
          aw<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#background">Background</a>
          <a href="#work">Selected Work</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-cta">
          Say Hello <ArrowUpRight size={15} />
        </a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot"></span>
              Web Development & Digital Marketing Student
            </p>

            <h1>
              Anike
              <br />
              <span>Wolmarans.</span>
            </h1>

            <p className="hero-description">
              I enjoy turning ideas into something real through code,
              creative thinking, and a little trial and error.
            </p>

            <div className="hero-actions">
              <a href="#work" className="primary-button">
                Explore My Work <ArrowDown size={16} />
              </a>

              <a href="#about" className="text-link">
                A Little About Me <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="hero-note">
              <span className="wave-signature" aria-label="signature wave">
                〜
              </span>
              <p>Curious by nature. Always learning.</p>
            </div>
          </div>

          <div className="hero-visual">
            <div className="photo-frame">
              <img
                src="/anikeb&W.jpg"
                alt="Portrait of Anike Wolmarans"
                className="profile-photo"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="photo-placeholder">
                <span>Your photo goes here</span>
                <p>Add your portrait as anikeb&w.jpg inside the public folder.</p>
              </div>
            </div>

            <div className="photo-caption">
              <span>South Africa</span>
              <span className="caption-line"></span>
              <span>Building my skills</span>
            </div>

            <div className="floating-note">
              <Sparkles size={16} />
              <span>One idea at a time</span>
            </div>
          </div>

          <div className="hero-index">
            <span>01</span>
            <span className="index-line"></span>
            <span>04</span>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="section-heading">
            <span className="section-number">01 / About Me</span>
            <span className="heading-decoration">A quick introduction</span>
          </div>

          <div className="about-grid">
            <h2>
              A curious mind
              <br />
              with a <em>creative side.</em>
            </h2>

            <div className="about-copy">
              <p>
                I’m a web development student who enjoys figuring out
                how things work and finding ways to make them better.
                This year, I’ve been putting my learning into practice
                by building websites and applications, working with
                APIs, and exploring both front-end and back-end development.
              </p>

              <p>
                I enjoy the problem-solving side of coding, but I also
                care about how a website looks and feels to the person
                using it. For me, it’s about finding the right balance
                between something that works and something people enjoy using.
              </p>

              <p>
                I’m also interested in digital marketing and hope to
                learn more about how technology, content, and creative
                ideas help brands connect with people online.
              </p>
            </div>
          </div>
        </section>

        <section className="background section" id="background">
          <div className="section-heading">
            <span className="section-number">02 / What I’m Learning</span>
            <span className="heading-decoration">Skills in progress</span>
          </div>

          <div className="background-intro">
            <h2>
              Learning by doing.
              <br />
              <em>Getting better as I go.</em>
            </h2>

            <p>
              Every project teaches me something new, from writing
              cleaner code to solving problems I haven’t seen before.
            </p>
          </div>

          <div className="skill-grid">
            <article className="skill-card">
              <div className="skill-icon">
                <Code2 size={21} strokeWidth={1.5} />
              </div>
              <span className="card-index">01</span>
              <h3>Front-end Development</h3>
              <p>
                Creating responsive interfaces with HTML, CSS,
                JavaScript, and React.
              </p>
              <span className="card-tag">What users see</span>
            </article>

            <article className="skill-card">
              <div className="skill-icon">
                <span className="bracket-icon">{"</>"}</span>
              </div>
              <span className="card-index">02</span>
              <h3>Back-end Development</h3>
              <p>
                Working with Node.js, Express, APIs, authentication,
                and databases.
              </p>
              <span className="card-tag">What happens behind the scenes</span>
            </article>

            <article className="skill-card">
              <div className="skill-icon">
                <Heart size={21} strokeWidth={1.5} />
              </div>
              <span className="card-index">03</span>
              <h3>Creative Problem-Solving</h3>
              <p>
                Finding practical solutions, testing ideas, and
                improving the details along the way.
              </p>
              <span className="card-tag">A little creativity goes far</span>
            </article>
          </div>
        </section>

        <section className="work section" id="work">
          <div className="section-heading">
            <span className="section-number">03 / Selected Work</span>
            <span className="heading-decoration">Things I’ve built</span>
          </div>

          <div className="work-intro">
            <h2>
              Less talking.
              <br />
              <em>More making.</em>
            </h2>

            <p>
              Here are two projects that helped me put my skills into
              practice. Open each one to see what went into it.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-topline">
                  <span className="project-number">{project.number}</span>
                  <span className="project-type">{project.type}</span>
                </div>

                <div className="project-art">
                  {project.number === "01" ? (
                    <div className="mockup tunefinder-mockup">
                      <div className="mockup-top">
                        <span className="mockup-dot"></span>
                        <span className="mockup-dot"></span>
                        <span className="mockup-dot"></span>
                      </div>
                      <div className="mockup-logo">tunefinder.</div>
                      <div className="mockup-search">Search music and more...</div>
                      <div className="mockup-records">
                        <span className="record record-one">♫</span>
                        <span className="record record-two">♪</span>
                        <span className="record record-three">♫</span>
                      </div>
                      <p>Find something you’ll love.</p>
                    </div>
                  ) : (
                    <div className="mockup planner-mockup">
                      <div className="planner-label">A LITTLE PLAN GOES A LONG WAY</div>
                      <h3>make it a date.</h3>
                      <p>Good things start with a plan.</p>
                      <div className="planner-circles">
                        <span>01</span>
                        <span>02</span>
                        <span>03</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="project-body">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <div className="technology-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="project-button"
                    onClick={() => setActiveProject(project)}
                  >
                    Explore Project <ArrowUpRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <p className="work-note">
            These projects reflect my learning journey and the skills
            I’ve been developing along the way.
          </p>
        </section>

        <section className="interests section" id="interests">
          <div className="section-heading">
            <span className="section-number">04 / What’s Next</span>
            <span className="heading-decoration">Room to grow</span>
          </div>

          <div className="interests-grid">
            <div>
              <h2>
                More than
                <br />
                <em>just the website.</em>
              </h2>
            </div>

            <div className="interests-copy">
              <p>
                I’m interested in the bigger picture: how people
                discover things online, what makes them connect with
                a brand, and how a good idea reaches the right audience.
              </p>

              <p>
                Digital marketing is an area I’d love to explore further,
                especially content creation, social media, search engine
                optimisation, and brand communication.
              </p>

              <div className="interest-tags">
                <span>Digital Marketing</span>
                <span>Content Creation</span>
                <span>Brand Communication</span>
                <span>Creative Ideas</span>
              </div>
            </div>
          </div>
        </section>

        <section className="personality">
          <div className="personality-inner">
            <span className="section-number">A Little Personality</span>

            <span className="wave-signature large-wave" aria-label="signature wave">
              〜
            </span>

            <h2>
              Serious about the work.
              <br />
              <em>Still figuring it all out.</em>
            </h2>

            <p className="personality-copy">
              I like learning new things, getting creative, and working
              out how to make an idea happen. There’s always more to
              learn, and I’m happy to be a work in progress.
            </p>

            <div className="no-game">
              <p className="no-intro">Go on. Try to click it.</p>

              <button
                type="button"
                className="no-button"
                onPointerEnter={moveNoButton}
                onPointerMove={moveNoButton}
                onFocus={(event) => event.currentTarget.blur()}
                onClick={(event) => event.preventDefault()}
                style={
                  noPosition
                    ? {
                        left: `${noPosition.x}px`,
                        top: `${noPosition.y}px`,
                        transform: "none",
                      }
                    : undefined
                }
                aria-label="The unclickable no button"
                tabIndex={-1}
              >
                No.
              </button>

              <p className="no-footnote">
                Some answers are easier to avoid.
              </p>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="section-heading">
            <span className="section-number">05 / Contact</span>
            <span className="heading-decoration">The next hello</span>
          </div>

          <div className="contact-content">
            <h2>
              Have something
              <br />
              <em>in mind?</em>
            </h2>

            <p>
              I’m always happy to connect, exchange ideas, and hear
              about interesting opportunities.
            </p>

            <a
              href="mailto:anike.wolmarans07@gmail.com"
              className="email-link"
            >
              <Mail size={18} />
              anike.wolmarans07@gmail.com
              <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a href="#home" className="logo footer-logo">
          aw<span>.</span>
        </a>

        <p>Made with curiosity and a lot of learning.</p>

        <a href="#home" className="back-to-top">
          Back to top <ArrowUpRight size={14} />
        </a>
      </footer>

      {activeProject && (
        <div
          className="project-overlay"
          onClick={() => setActiveProject(null)}
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setActiveProject(null)}
              aria-label="Close project details"
            >
              <X size={19} />
            </button>

            <span className="section-number">
              PROJECT {activeProject.number}
            </span>

            <h2 id="project-modal-title">{activeProject.name}</h2>
            <p className="modal-type">{activeProject.type}</p>
            <p className="modal-description">{activeProject.description}</p>

            <h3>What I worked on</h3>
            <ul className="project-highlights">
              {activeProject.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <h3>Technologies used</h3>
            <div className="technology-tags modal-tags">
              {activeProject.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="learning-note">
              <Sparkles size={17} />
              <div>
                <h3>What I learned</h3>
                <p>{activeProject.learning}</p>
              </div>
            </div>

            <button
              type="button"
              className="primary-button modal-done"
              onClick={() => setActiveProject(null)}
            >
              Back to Portfolio
            </button>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;