import profile from './assets/profile.jpeg';

const focusAreas = [
  {
    title: 'AI & Machine Learning',
    description:
      'Exploring intelligent systems, models, and software that turns data into practical decisions.',
  },
  {
    title: 'Agentic AI',
    description:
      'Building agent-based workflows and systems that can reason through tasks and automate processes.',
  },
  {
    title: 'Full-Stack Development',
    description:
      'Creating complete applications from front-end interfaces to backend logic and product flows.',
  },
  {
    title: 'E-Commerce',
    description:
      'Designing digital storefronts and commerce experiences that connect product and customer value.',
  },
  {
    title: 'Web3',
    description:
      'Learning and building in decentralized systems, blockchain-enabled experiences, and emerging web technology.',
  },
];

const projects = [
  {
    title: 'Feddy Cosmic Match',
    description:
      'A deployed web project focused on building a product experience around discovery, interaction, and digital engagement.',
    url: 'https://floral-sound-d388.feddypuppi.workers.dev/',
    technologies: ['Web', 'Product Experience'],
  },
  {
    title: 'Feddy-Suite',
    description:
      'A deployed software and web project exploring a broader product ecosystem and a user-facing digital experience.',
    url: 'https://feddy-suite.vercel.app/',
    technologies: ['Web', 'Software'],
  },
  {
    title: 'LuxeStay',
    description:
      'A deployed hospitality and accommodation project designed around a modern travel and booking experience.',
    url: 'https://luxestay-pi.vercel.app/',
    technologies: ['Hospitality', 'Web'],
  },
  {
    title: 'Automated File Organizer',
    description:
      'A desktop application that automatically organizes files into structured folders based on file type.',
    url: 'https://github.com/enochazariah/DesktopFileOrganizer-App/releases/download/v1.0.0/mysetup.exe',
    technologies: ['Desktop App', 'Automation'],
  },
];

const hackathons = [
  {
    number: '01',
    event: 'Hackathon Build',
    title: 'Feddy Cosmic Match',
    description:
      'A discovery-focused web experience designed around interaction, matching, and digital engagement.',
    built: 'Designed and shipped the product experience from concept through deployment.',
    technologies: ['Web App', 'Product Design', 'Deployment'],
    url: 'https://floral-sound-d388.feddypuppi.workers.dev/',
  },
  {
    number: '02',
    event: 'Hackathon Build',
    title: 'Feddy-Suite',
    description:
      'A broader software ecosystem exploring how connected tools can create a more complete user-facing experience.',
    built: 'Built the interface and product flow around a cohesive software suite.',
    technologies: ['Software', 'Web App', 'UX'],
    url: 'https://feddy-suite.vercel.app/',
  },
  {
    number: '03',
    event: 'Hackathon Build',
    title: 'LuxeStay',
    description:
      'A hospitality and accommodation experience shaped around modern travel discovery and booking.',
    built: 'Translated a real-world travel use case into a polished, responsive web product.',
    technologies: ['Hospitality', 'Frontend', 'Responsive Web'],
    url: 'https://luxestay-pi.vercel.app/',
  },
];

const socialLinks = {
  github: { label: 'GitHub', url: 'https://github.com/your-username' },
  x: { label: 'X', url: 'https://x.com/your-username' },
  linkedin: { label: 'LinkedIn', url: 'https://www.linkedin.com/in/enoch-azariah-3b397722a/recent-activity/all/' },
};

const skills = ['React', 'Vite', 'JavaScript', 'HTML', 'CSS', 'AI', 'Machine Learning', 'Agentic Systems', 'Web3'];

function App() {
  const featuredProject = projects.find((project) => project.title === 'Automated File Organizer');

  return (
    <div id="top">
      <header className="navbar">
        <div className="container nav-inner">
          <a className="logo" href="#top" aria-label="Back to top">
            EA
          </a>

          <nav aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#focus">Focus</a>
            <a href="#work">Work</a>
            <a href="#hackathons">Hackathons</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="hero-image">
              <img src={profile} alt="Enoch Azariah portrait" />
            </div>

            <p className="eyebrow">Enoch Azariah</p>

            <h1>
              Computer Engineering Student
              <br />
              <span>& Technology Builder</span>
            </h1>

            <p className="hero-specialties">
              AI · Agentic Systems · Full-Stack · E-Commerce · Web3
            </p>

            <p className="hero-description">
              Building practical software and exploring intelligent systems,
              digital products, and emerging technologies.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                View My Work
              </a>

              <a className="button button-secondary" href="#contact">
                Connect
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">About</p>
              <h2>Building software with intention.</h2>
            </div>

            <div className="about-grid">
              <div className="about-copy">
                <p>
                  I am a Computer Engineering student building software projects and exploring the intersections of AI,
                  machine learning, full-stack development, e-commerce, and Web3.
                </p>
                <p>
                  My work is focused on creating practical digital products, learning through hands-on building, and expanding
                  my technical capability across modern software and emerging technologies.
                </p>
              </div>

              <div className="about-panel">
                <h3>Current focus</h3>
                <ul>
                  <li>AI &amp; machine learning</li>
                  <li>Agentic systems</li>
                  <li>Full-stack application development</li>
                  <li>E-commerce experiences</li>
                  <li>Web3 exploration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="focus" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Areas of Focus</p>
              <h2>Exploring the tools, systems, and ideas shaping modern software.</h2>
            </div>

            <div className="niche-grid">
              {focusAreas.map((item) => (
                <article className="niche-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Deployed Projects</p>
              <h2>Projects I have built and deployed.</h2>
            </div>

            <article className="featured-project">
              <div>
                <p className="project-label">Featured Project</p>
                <h3>{featuredProject.title}</h3>
                <p>{featuredProject.description}</p>
                <div className="project-meta">
                  {featuredProject.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>

              <a className="button button-primary" href={featuredProject.url}>
                Download for Windows (v1.0)
              </a>
            </article>

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <p className="project-label">Deployed Project</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-meta">
                    {project.technologies.map((tech) => (
                      <span key={`${project.title}-${tech}`}>{tech}</span>
                    ))}
                  </div>

                  <a href={project.url} target="_blank" rel="noreferrer">View Project →</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="hackathons" className="section hackathon-section">
          <div className="container">
            <div className="section-heading hackathon-heading">
              <p className="eyebrow">Hackathon Builds</p>
              <h2>Fast ideas, focused builds, real products.</h2>
              <p>
                A look at the products I have explored and shipped through hackathon-style building: turning a brief into a
                working experience under pressure.
              </p>
            </div>

            <div className="hackathon-list">
              {hackathons.map((hackathon) => (
                <article className="hackathon-card" key={hackathon.title}>
                  <div className="hackathon-number">{hackathon.number}</div>
                  <div className="hackathon-details">
                    <p className="project-label">{hackathon.event}</p>
                    <h3>{hackathon.title}</h3>
                    <p>{hackathon.description}</p>
                    <p className="hackathon-built">
                      <strong>What I built</strong>
                      {hackathon.built}
                    </p>
                    <div className="project-meta">
                      {hackathon.technologies.map((technology) => (
                        <span key={`${hackathon.title}-${technology}`}>{technology}</span>
                      ))}
                    </div>
                  </div>
                  <a className="hackathon-link" href={hackathon.url} target="_blank" rel="noreferrer">
                    Explore build <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Skills</p>
              <h2>Technologies and areas I am actively working with.</h2>
            </div>

            <div className="skills-list" aria-label="Technology skills">
              {skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container contact-content">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build something useful.</h2>
            <p>
              I am actively building projects across AI, software, and emerging digital product areas, and I am always open to
              meaningful collaboration and new opportunities.
            </p>

            <div className="social-links" aria-label="Social links">
              {Object.values(socialLinks).map((link) => (
                <a key={link.label} href={link.url} className="button button-secondary" target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <span>© 2026 Enoch Azariah</span>
          <span>Computer Engineering Student &amp; Technology Builder</span>
        </div>
      </footer>
    </div>
  );
}

export default App;