const selectedProjects = [
  {
    number: "01",
    title: "Social Media Designs",
    tags: "Social Media • Product Design • Creative Posts",
    image: "/projects/social-media-designs.jpg",
    theme: "social-media-designs",
  },
  {
    number: "02",
    title: "Brand Identity",
    tags: "Logo Design • Fitness Branding • Visual Identity",
    image: "/projects/brand-identity.jpg",
    theme: "brand-identity",
  },
  {
    number: "03",
    title: "Social Media Campaign",
    tags: "Islamic Design • Educational Content • Campaign Design",
    image: "/projects/social-media-campaign-quran.jpg",
    theme: "social-media-campaign-quran",
  },
  {
    number: "04",
    title: "Social Media Campaign",
    tags: "Academy Branding • Admissions Campaign • Social Media",
    image: "/projects/social-media-campaign-academy.jpg",
    theme: "social-media-campaign-academy",
  },
];

export default function SelectedWorkFinal() {
  const openProjectsPage = () => {
    window.location.href = "/projects";
  };

  return (
    <section id="selected-work" className="sw-final">
      <style>{`
        .sw-final {
          position: relative;
          width: 100%;
          padding: 66px 24px 82px;
          overflow: hidden;
          background: transparent;
        }

        .sw-final,
        .sw-final * {
          box-sizing: border-box;
        }

        .sw-final__inner {
          width: 100%;
          max-width: 980px;
          margin: 0 auto;
        }

        .sw-final__header {
          margin-bottom: 34px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 28px;
        }

        .sw-final__eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          color: #94a3b8;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.30em;
          text-transform: uppercase;
          line-height: 1;
        }

        .sw-final__eyebrow span:nth-child(1) {
          width: 40px;
          height: 4px;
          border-radius: 999px;
          background: #2563eb;
          box-shadow: 0 5px 12px rgba(37, 99, 235, 0.22);
        }

        .sw-final__eyebrow span:nth-child(2) {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #2563eb;
          box-shadow: 0 5px 12px rgba(37, 99, 235, 0.22);
        }

        .sw-final__title {
          margin: 0;
          color: #071225;
          font-family: "Orbitron", "Michroma", "Inter", system-ui, sans-serif;
          font-size: clamp(38px, 5.2vw, 58px);
          line-height: 0.95;
          font-weight: 850;
          letter-spacing: -0.065em;
          text-transform: uppercase;
        }

        .sw-final__description {
          margin: 16px 0 0;
          max-width: 560px;
          color: #64748b;
          font-size: 16px;
          line-height: 1.55;
          font-weight: 650;
        }

        .sw-final__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .sw-final-card {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-rows: auto 1fr;
          min-height: 400px;
          border: 1px solid rgba(255, 255, 255, 0.66);
          border-radius: 30px;
          text-align: left;
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.64) 0%,
              rgba(255, 255, 255, 0.32) 100%
            );
          box-shadow:
            0 22px 55px rgba(15, 23, 42, 0.10),
            inset 0 1px 0 rgba(255, 255, 255, 0.88);
        }

        .sw-final-card__visual {
          width: 100%;
          aspect-ratio: 1600 / 1000;
          overflow: hidden;
          border-radius: 30px 30px 0 0;
          background:
            radial-gradient(circle at 22% 18%, rgba(255, 255, 255, 0.92), transparent 34%),
            linear-gradient(135deg, #eaf1ff 0%, #dbeafe 48%, #f8fafc 100%);
        }

        .sw-final-card__visual img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center;
          background: #eef3fb;
        }

        .sw-final-card__visual-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #071225;
          font-family: "Orbitron", "Michroma", "Inter", system-ui, sans-serif;
          font-size: clamp(24px, 4vw, 42px);
          font-weight: 850;
          letter-spacing: -0.06em;
          text-transform: uppercase;
          text-align: center;
          padding: 24px;
        }

        .sw-final-card__body {
          position: relative;
          min-height: 150px;
          padding: 22px 24px 24px;
        }

        .sw-final-card__number {
          display: block;
          margin-bottom: 10px;
          color: #2563eb;
          font-size: 18px;
          font-weight: 950;
          letter-spacing: 0.06em;
        }

        .sw-final-card__title {
          margin: 0 0 10px;
          color: #071225;
          font-family: "Orbitron", "Michroma", "Inter", system-ui, sans-serif;
          font-size: 34px;
          line-height: 0.95;
          font-weight: 900;
          letter-spacing: -0.065em;
          text-transform: uppercase;
        }

        .sw-final-card__tags {
          margin: 0;
          max-width: 78%;
          color: #2563eb;
          font-size: 13px;
          line-height: 1.35;
          font-weight: 900;
          letter-spacing: 0.10em;
          text-transform: uppercase;
        }

        .sw-final-card__view {
          position: absolute;
          right: 18px;
          bottom: 18px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          border: 0;
          border-radius: 999px;
          color: #2563eb;
          font-size: 13px;
          font-weight: 950;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.82);
          box-shadow:
            0 10px 24px rgba(15, 23, 42, 0.07),
            inset 0 1px 0 rgba(255, 255, 255, 0.92);
        }

        @media (max-width: 720px) {
          .sw-final {
            padding: 56px 16px 68px;
          }

          .sw-final__header {
            display: block;
            margin-bottom: 28px;
          }

          .sw-final__eyebrow {
            font-size: 10px;
            letter-spacing: 0.26em;
            margin-bottom: 14px;
          }

          .sw-final__eyebrow span:nth-child(1) {
            width: 34px;
            height: 4px;
          }

          .sw-final__title {
            font-size: clamp(34px, 11vw, 48px);
            line-height: 0.96;
          }

          .sw-final__description {
            margin-top: 12px;
            font-size: 15px;
            line-height: 1.48;
          }

          .sw-final__grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .sw-final-card {
            min-height: auto;
            border-radius: 24px;
          }

          .sw-final-card__visual {
            aspect-ratio: 1600 / 1000;
            border-radius: 24px 24px 0 0;
          }

          .sw-final-card__body {
            min-height: 133px;
            padding: 19px 20px 21px;
          }

          .sw-final-card__title {
            font-size: 28px;
          }

          .sw-final-card__view {
            right: 16px;
            bottom: 16px;
          }
        }
      `}</style>

      <div className="sw-final__inner">
        <div className="sw-final__header">
          <div>
            <div className="sw-final__eyebrow">
              <span />
              <span />
              Selected Work
            </div>

            <h2 className="sw-final__title">Selected Work</h2>

            <p className="sw-final__description">
              A focused collection of real design projects across social media,
              branding, campaign design, and visual identity.
            </p>
          </div>
        </div>

        <div className="sw-final__grid">
          {selectedProjects.map((project) => (
            <article
              className={`sw-final-card sw-final-card--${project.theme}`}
              key={project.number}
            >
              <div className="sw-final-card__visual">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="sw-final-card__visual-placeholder">
                    {project.title}
                  </div>
                )}
              </div>

              <div className="sw-final-card__body">
                <span className="sw-final-card__number">{project.number}</span>

                <h3 className="sw-final-card__title">{project.title}</h3>

                <p className="sw-final-card__tags">{project.tags}</p>

                <button
                  type="button"
                  className="sw-final-card__view"
                  onClick={openProjectsPage}
                  aria-label={`View ${project.title} project`}
                >
                  View Project
                  <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
