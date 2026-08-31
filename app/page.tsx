"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const IconBase = ({
  children,
  size = 19,
  className,
}: {
  children: React.ReactNode;
  size?: number;
  className?: string;
}) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const ArrowDown = ({
  size = 19,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <IconBase size={size} className={className}>
    <path d="M12 5v14" />
    <path d="m6 13 6 6 6-6" />
  </IconBase>
);

const ArrowUpRight = ({
  size = 19,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <IconBase size={size} className={className}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </IconBase>
);

const Github = ({
  size = 19,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <IconBase size={size} className={className}>
    <path d="M9 19c-4.5 1.5-4.5-2.5-6-3" />
    <path d="M15 22v-3.9a3.2 3.2 0 0 0-.9-2.5c3-.3 6.1-1.5 6.1-7A5.4 5.4 0 0 0 20 4.8 5 5 0 0 0 19.8 2s-1.6.2-4.2 2.1a14.3 14.3 0 0 0-7.2 0C7.8 2.2 6.2 2 6.2 2A5 5 0 0 0 6 4.8 5.4 5.4 0 0 0 4.4 9.6c0 5.4 3.1 6.7 6.1 7A3.2 3.2 0 0 0 9.5 18.1V22" />
  </IconBase>
);

const Instagram = ({
  size = 19,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <IconBase size={size} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle
      cx="17.5"
      cy="6.5"
      r="1"
      fill="currentColor"
      stroke="none"
    />
  </IconBase>
);

const Linkedin = ({
  size = 19,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <IconBase size={size} className={className}>
    <path d="M6 9v8" />
    <path d="M6 6.5v.1" />
    <path d="M10 17v-5.2a2.8 2.8 0 0 1 5.6 0V17" />
    <path d="M10 9v8" />
  </IconBase>
);

const Mail = ({
  size = 19,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <IconBase size={size} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </IconBase>
);

const MapPin = ({
  size = 19,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <IconBase size={size} className={className}>
    <path d="M12 21s6-5.1 6-11a6 6 0 1 0-12 0c0 5.9 6 11 6 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </IconBase>
);

const Menu = ({
  size = 19,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <IconBase size={size} className={className}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </IconBase>
);

const MessageCircle = ({
  size = 19,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <IconBase size={size} className={className}>
    <path d="M20 11.5A8.5 8.5 0 0 1 4.5 16L3 21l5.2-1.7A8.5 8.5 0 1 1 20 11.5Z" />
  </IconBase>
);

const Sparkles = ({
  size = 19,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <IconBase size={size} className={className}>
    <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" />
    <path d="m18 15 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z" />
  </IconBase>
);

const Heart = ({
  size = 19,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <IconBase size={size} className={className}>
    <path d="M20.8 8.8c0 5.5-8.8 10.2-8.8 10.2S3.2 14.3 3.2 8.8A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8Z" />
  </IconBase>
);

const X = ({
  size = 19,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <IconBase size={size} className={className}>
    <path d="M6 6 18 18" />
    <path d="M18 6 6 18" />
  </IconBase>
);

const Discord = ({
  size = 19,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <IconBase size={size} className={className}>
    <path d="M19.5 5.5A16.5 16.5 0 0 0 15.7 4l-.5 1a14.5 14.5 0 0 0-6.4 0l-.5-1a16.5 16.5 0 0 0-3.8 1.5C2.1 9.1 1.4 12.6 1.7 16.1A16.8 16.8 0 0 0 6.4 18l1.1-1.5c-.6-.2-1.2-.5-1.7-.8l.4-.3a12.2 12.2 0 0 0 11.6 0l.4.3c-.5.3-1.1.6-1.7.8l1.1 1.5a16.8 16.8 0 0 0 4.7-1.9c.4-4.1-.7-7.6-2.8-10.6Z" />
    <circle
      cx="8.5"
      cy="12"
      r="1.3"
      fill="currentColor"
      stroke="none"
    />
    <circle
      cx="15.5"
      cy="12"
      r="1.3"
      fill="currentColor"
      stroke="none"
    />
  </IconBase>
);

const iconMap: Record<string, React.ReactNode> = {
  github: <Github />,
  linkedin: <Linkedin />,
  instagram: <Instagram />,
  discord: <Discord />,
  message: <MessageCircle />,
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* BACKGROUND */}
      <div className="background">
        <div className="grid" />
        <div className="glow glow-one" />
        <div className="glow glow-two" />
        <div className="noise" />
      </div>

      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <a
          href="#home"
          className="brand"
          onClick={() => setMenuOpen(false)}
        >
          <span>&lt;</span>
          {profile.name.split(" ")[0]}
          <span>/&gt;</span>
        </a>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#for-her" onClick={() => setMenuOpen(false)}>
            For You ♡
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>

        <a href="#contact" className="nav-button">
          Let&apos;s Talk
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* HERO */}
      <section id="home" className="section hero">
        <div className="hero-content reveal">
          <div className="available">
            <span className="pulse" />
            Available for work
          </div>

          <p className="eyebrow">
            <Sparkles size={15} />
            Welcome to my digital space
          </p>

          <h1>
            Building
            <br />
            <span>digital</span> experiences.
          </h1>

          <p className="hero-description">
            {profile.bio}
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              View My Work
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="location">
            <MapPin size={15} />
            {profile.location}
          </div>
        </div>

        <div className="profile-area reveal">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="profile-glow" />

          <div className="profile-frame">
            <img
              src={profile.photo}
              alt={profile.name}
            />
          </div>

          <div className="floating-card card-top">
            <span>✦</span>
            Creative Mind
          </div>

          <div className="floating-card card-bottom">
            <span>♡</span>
            {profile.role}
          </div>
        </div>

        <a href="#about" className="scroll-down">
          <span>Scroll to explore</span>
          <ArrowDown size={16} />
        </a>
      </section>

      {/* MARQUEE */}
      <section className="marquee">
        <div className="marquee-track">
          {[...profile.skills, ...profile.skills].map(
            (skill, index) => (
              <div
                className="marquee-item"
                key={`${skill.name}-${index}`}
              >
                <span style={{ color: skill.color }}>
                  {skill.symbol}
                </span>

                {skill.name}

                <b>✦</b>
              </div>
            )
          )}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about">
        <div className="section-label">
          01 / ABOUT
        </div>

        <div className="about-grid reveal">
          <div>
            <p className="mini-title">
              WHO AM I?
            </p>

            <h2>
              Developer with a
              <span> passion for details.</span>
            </h2>
          </div>

          <div className="about-text">
            <p>
              Saya adalah seorang{" "}
              <strong>{profile.role}</strong> yang suka
              mengubah ide menjadi produk digital yang
              menarik, modern, dan mudah digunakan.
            </p>

            <p>
              Fokus saya adalah membuat pengalaman web
              yang cepat, responsive, interaktif, dan
              memiliki visual yang memorable.
            </p>

            <div className="stats">
              <div>
                <strong>20+</strong>
                <span>Projects</span>
              </div>

              <div>
                <strong>
                  {profile.skills.length}+
                </strong>
                <span>Technologies</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Passion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">
        <div className="section-label">
          02 / TECH STACK
        </div>

        <div className="section-heading reveal">
          <h2>
            Tools I <span>love.</span>
          </h2>

          <p>
            Teknologi yang biasa saya gunakan untuk
            membuat digital experiences.
          </p>
        </div>

        <div className="skills-grid">
          {profile.skills.map((skill, index) => (
            <div
              className="skill-card reveal"
              key={skill.name}
              style={
                {
                  "--skill-color": skill.color,
                  animationDelay: `${index * 60}ms`,
                } as React.CSSProperties
              }
            >
              <div className="skill-icon">
                {skill.symbol}
              </div>

              <div className="skill-content">
                <strong>{skill.name}</strong>
                <span>Technology</span>
              </div>

              <ArrowUpRight
                className="skill-arrow"
                size={18}
              />
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="section projects-section"
      >
        <div className="section-label">
          03 / SELECTED WORK
        </div>

        <div className="section-heading reveal">
          <h2>
            Things I&apos;ve <span>built.</span>
          </h2>

          <p>
            Beberapa project yang pernah saya kerjakan.
          </p>
        </div>

        <div className="projects">
          {profile.projects.map((project, index) => (
            <article
              className="project-card reveal"
              key={project.title}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />

                <div className="project-overlay" />

                <div className="project-number">
                  0{index + 1}
                </div>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-open"
                  aria-label={`Open ${project.title}`}
                >
                  <ArrowUpRight />
                </a>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                    <ArrowUpRight size={14} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* PROFILE / FIND ME */}
      <section className="section profile-section">
        <div className="section-label">
          04 / FIND ME
        </div>

        <div className="profile-card reveal">
          <div className="profile-card-left">
            <div className="social-avatar">
              <img
                src={profile.photo}
                alt={profile.name}
              />
            </div>

            <div>
              <p>{profile.username}</p>
              <h2>{profile.name}</h2>
              <span>{profile.role}</span>
            </div>
          </div>

          <div className="social-links">
            {profile.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {iconMap[social.icon]}

                <span>{social.name}</span>

                <ArrowUpRight size={15} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOR HER */}
      <section
        id="for-her"
        className="section for-her"
      >
        <div className="section-label">
          05 / FOR SOMEONE SPECIAL
        </div>

        <div className="special-card reveal">
          <div className="special-decoration special-star">
            ✦
          </div>

          <div className="special-decoration special-heart">
            ♡
          </div>

          <div className="special-image-wrapper">
            <div className="special-image">
              <img
                src={profile.special.photo}
                alt={profile.special.name}
                loading="lazy"
              />
            </div>

            <div className="special-image-caption">
              <Heart size={15} />
              Someone special
            </div>
          </div>

          <div className="special-content">
            <div className="special-eyebrow">
              <Heart size={14} />
              A little place for you
            </div>

            <h2>
              For{" "}
              <span>
                {profile.special.name}.
              </span>
            </h2>

            <p className="special-date">
              {profile.special.date}
            </p>

            <div className="special-divider">
              <span />
              <Heart size={13} />
              <span />
            </div>

            <p className="special-message">
              {profile.special.message}
            </p>

            <p className="special-message">
              {profile.special.messageTwo}
            </p>

            <div className="special-signature">
              <span>
                With all my heart,
              </span>

              <strong>
                {profile.special.signature} ♡
              </strong>
            </div>
          </div>
        </div>

        <div className="special-bottom reveal">
          <div>
            <span>01</span>
            <p>Always cheering for you.</p>
          </div>

          <div>
            <span>02</span>
            <p>Always proud of you.</p>
          </div>

          <div>
            <span>03</span>
            <p>Always here for you.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="section contact"
      >
        <div className="contact-glow" />

        <p className="mini-title">
          HAVE A PROJECT?
        </p>

        <h2>
          Let&apos;s make something
          <span> amazing.</span>
        </h2>

        <p>
          Punya ide atau project? Kirim pesan dan mari
          kita ngobrol.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="primary-button"
        >
          <Mail size={18} />
          Say Hello
        </a>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <span className="footer-logo">
            &lt;
            {profile.name.split(" ")[0]}
            {" /&gt;"}
          </span>

          <p>
            Designed &amp; built with Next.js.
          </p>
        </div>

        <p>
          © {new Date().getFullYear()}{" "}
          {profile.name}
        </p>
      </footer>
    </main>
  );
}