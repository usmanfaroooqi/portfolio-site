import {
  ChevronLeft,
  Clock3,
  FolderKanban,
  HomeIcon,
  Mail,
  Menu,
  MessageCircle,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { DustLayer } from "@/components/DustLayer";

const allProjects = [
  {
    number: "01",
    title: "LARANA, INC",
    cats: "Business Card • Real Estate • Brand Collateral",
    visual: "larana",
    image: "/projects/larana-real-estate-card.jpg",
  },
  {
    number: "02",
    title: "Lumina",
    cats: "Branding • Packaging • Art Direction",
    visual: "lumina",
    image: "",
  },
  {
    number: "03",
    title: "Aurea",
    cats: "Branding • Print • Art Direction",
    visual: "aurea",
    image: "",
  },
  {
    number: "04",
    title: "Pulse",
    cats: "App Design • UI/UX • Branding",
    visual: "pulse",
    image: "",
  },
  {
    number: "05",
    title: "Orbit Studio",
    cats: "Branding • Visual Identity",
    visual: "orbit",
    image: "",
  },
  {
    number: "06",
    title: "Nova Cafe",
    cats: "Packaging • Social Media",
    visual: "nova",
    image: "",
  },
  {
    number: "07",
    title: "BlueMark",
    cats: "Logo Design • Brand System",
    visual: "blue",
    image: "",
  },
  {
    number: "08",
    title: "Motion Lab",
    cats: "Motion Graphics • Digital",
    visual: "motion",
    image: "",
  },
];

const projectNavItems = [
  { label: "Home", href: "/", icon: HomeIcon },
  { label: "Services", href: "/#services", icon: Sparkles },
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "About", href: "/#about", icon: UserRound },
  { label: "Contact", href: "/contact", icon: Mail },
];

function MenuClock() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => window.clearInterval(id);
  }, []);

  const hh = String(time.getHours()).padStart(2, "0");
  const mm = String(time.getMinutes()).padStart(2, "0");
  const ss = String(time.getSeconds()).padStart(2, "0");

  return (
    <span className="projects-menu-clock">
      {hh}
      <span>:</span>
      {mm}
      <span>:</span>
      <strong>{ss}</strong>
    </span>
  );
}

function MobileLiquidMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  const [clockOpen, setClockOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="projects-liquid-menu">
      <div className="projects-liquid-menu__quick-row">
        <a href="/" aria-label="Go home" onClick={() => setIsOpen(false)}>
          <HomeIcon size={16} strokeWidth={2} />
        </a>

        <a
          href="/contact"
          aria-label="Open contact"
          onClick={() => setIsOpen(false)}
        >
          <MessageCircle size={16} strokeWidth={2} />
        </a>

        <button
          type="button"
          aria-label="Toggle clock"
          onClick={() => setClockOpen((value) => !value)}
        >
          <Clock3 size={16} strokeWidth={2} />
        </button>
      </div>

      {clockOpen && (
        <div className="projects-liquid-menu__clock">
          <MenuClock />
        </div>
      )}

      <div className="projects-liquid-menu__divider" />

      <nav className="projects-liquid-menu__links" aria-label="Projects menu">
        {projectNavItems.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              <Icon size={19} strokeWidth={2} />
              <span>{item.label}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}

export default function Projects() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [px, setPx] = useState(0);
  const [py, setPy] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(() => {
        const nx = (e.clientX / window.innerWidth - 0.5) * 2;
        const ny = (e.clientY / window.innerHeight - 0.5) * 2;

        setPx(nx);
        setPy(ny);
      });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <main className="projects-clean-page">
      <style>{`
        .projects-clean-page {
          position: relative;
          min-height: 100vh;
          padding: 132px 24px 120px;
          overflow: hidden;
          background:
            radial-gradient(ellipse at 58% 8%, rgba(255, 255, 255, 0.92) 0%, transparent 58%),
            radial-gradient(circle at center, transparent 38%, rgba(0, 0, 0, 0.045) 100%),
            #f3f3f5;
        }

        .projects-clean-page,
        .projects-clean-page * {
          box-sizing: border-box;
        }

        .projects-clean-page::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.028;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
        }

        .projects-dust-layer {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .projects-fixed-topbar {
          position: fixed;
          top: 20px;
          left: 24px;
          right: 24px;
          z-index: 99999;
          display: flex;
          align-items: center;
          justify-content: space-between;
          pointer-events: none;
        }

        .projects-back-home,
        .projects-menu-button {
          pointer-events: auto;
          backdrop-filter: blur(24px) saturate(165%);
          -webkit-backdrop-filter: blur(24px) saturate(165%);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.42) 0%,
              rgba(255, 255, 255, 0.22) 50%,
              rgba(255, 255, 255, 0.12) 100%
            );
          border: 1px solid rgba(255, 255, 255, 0.62);
          box-shadow:
            0 16px 38px rgba(15, 23, 42, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.86),
            inset 0 -1px 0 rgba(15, 23, 42, 0.07);
        }

        .projects-back-home {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          border-radius: 999px;
          text-decoration: none;
          color: #2563eb;
        }

        .projects-menu-button {
          display: inline-flex;
          width: 54px;
          height: 54px;
          border-radius: 999px;
          align-items: center;
          justify-content: center;
          color: #1e293b;
          cursor: pointer;
        }

        .projects-liquid-menu {
          position: fixed;
          top: 86px;
          right: 16px;
          z-index: 99998;
          width: min(280px, calc(100vw - 32px));
          padding: 14px;
          border-radius: 26px;
          backdrop-filter: blur(26px) saturate(170%);
          -webkit-backdrop-filter: blur(26px) saturate(170%);
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.54) 0%,
              rgba(255, 255, 255, 0.28) 100%
            );
          border: 1px solid rgba(255, 255, 255, 0.68);
          box-shadow:
            0 24px 58px rgba(15, 23, 42, 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.88);
        }

        .projects-liquid-menu__quick-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
        }

        .projects-liquid-menu__quick-row a,
        .projects-liquid-menu__quick-row button {
          height: 42px;
          border: 0;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #2563eb;
          background: rgba(255, 255, 255, 0.52);
          cursor: pointer;
          text-decoration: none;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.84);
        }

        .projects-liquid-menu__clock {
          margin-top: 10px;
          padding: 10px 12px;
          border-radius: 18px;
          color: #0f172a;
          background: rgba(255, 255, 255, 0.42);
          font-weight: 900;
          text-align: center;
        }

        .projects-menu-clock span {
          color: #2563eb;
          margin: 0 3px;
        }

        .projects-menu-clock strong {
          color: #2563eb;
        }

        .projects-liquid-menu__divider {
          height: 1px;
          margin: 12px 0;
          background: rgba(148, 163, 184, 0.22);
        }

        .projects-liquid-menu__links {
          display: grid;
          gap: 6px;
        }

        .projects-liquid-menu__links a {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 13px 14px;
          border-radius: 16px;
          text-decoration: none;
          color: #0f172a;
          font-weight: 850;
          font-size: 14px;
        }

        .projects-liquid-menu__links a:hover {
          background: rgba(255, 255, 255, 0.42);
        }

        .projects-clean-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          animation: projectsFadeSide 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        @keyframes projectsFadeSide {
          from {
            opacity: 0;
            transform: translateX(20px);
            filter: blur(6px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
            filter: blur(0);
          }
        }

        .projects-clean-eyebrow {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-bottom: 24px;
          color: #94a3b8;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.38em;
          text-transform: uppercase;
          line-height: 1;
        }

        .projects-clean-eyebrow::before {
          content: "";
          width: 48px;
          height: 5px;
          border-radius: 999px;
          background: #2563eb;
          box-shadow: 0 5px 12px rgba(37, 99, 235, 0.26);
        }

        .projects-clean-eyebrow::after {
          content: "";
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #2563eb;
        }

        .projects-clean-title {
          margin: 0 0 24px;
          color: #071225;
          font-family: "Orbitron", "Michroma", "Inter", system-ui, sans-serif;
          font-size: clamp(48px, 7vw, 86px);
          line-height: 0.95;
          font-weight: 800;
          letter-spacing: -0.075em;
          text-transform: uppercase;
        }

        .projects-clean-intro {
          margin: 0 0 38px;
          max-width: 720px;
          color: #64748b;
          font-size: 19px;
          line-height: 1.55;
          font-weight: 650;
        }

        .projects-clean-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .projects-clean-card {
          overflow: hidden;
          border-radius: 32px;
          background:
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 0.68) 0%,
              rgba(255, 255, 255, 0.34) 100%
            );
          border: 1px solid rgba(255, 255, 255, 0.70);
          box-shadow:
            0 24px 58px rgba(15, 23, 42, 0.10),
            inset 0 1px 0 rgba(255, 255, 255, 0.90);
        }

        .projects-clean-card__visual {
          position: relative;
          width: 100%;
          aspect-ratio: 1600 / 1000;
          overflow: hidden;
          border-radius: 32px 32px 0 0;
          background:
            radial-gradient(circle at 24% 20%, rgba(255, 255, 255, 0.92), transparent 34%),
            linear-gradient(135deg, #eaf1ff 0%, #dbeafe 48%, #f8fafc 100%);
        }

        .projects-clean-card__visual img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: contain;
          object-position: center;
          background: #eef3fb;
        }

        .projects-clean-card__visual-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          color: #071225;
          font-family: "Orbitron", "Michroma", "Inter", system-ui, sans-serif;
          font-size: clamp(28px, 4vw, 44px);
          line-height: 0.95;
          font-weight: 850;
          letter-spacing: -0.07em;
          text-align: center;
          text-transform: uppercase;
        }

        .projects-clean-card__content {
          padding: 28px 30px 30px;
        }

        .projects-clean-card__number {
          display: block;
          margin-bottom: 12px;
          color: #2563eb;
          font-size: 19px;
          font-weight: 950;
          letter-spacing: 0.06em;
        }

        .projects-clean-card__title {
          margin: 0 0 10px;
          color: #071225;
          font-family: "Orbitron", "Michroma", "Inter", system-ui, sans-serif;
          font-size: 34px;
          line-height: 0.95;
          font-weight: 900;
          letter-spacing: -0.065em;
          text-transform: uppercase;
        }

        .projects-clean-card__cats {
          margin: 0;
          color: #2563eb;
          font-size: 13px;
          line-height: 1.4;
          font-weight: 900;
          letter-spacing: 0.10em;
          text-transform: uppercase;
        }

        @media (max-width: 860px) {
          .projects-clean-page {
            padding: 132px 18px 92px;
          }

          .projects-clean-grid {
            grid-template-columns: 1fr;
          }

          .projects-fixed-topbar {
            left: 18px;
            right: 18px;
          }
        }

        @media (max-width: 520px) {
          .projects-clean-page {
            padding: 132px 16px 86px;
          }

          .projects-fixed-topbar {
            top: 16px;
            left: 16px;
            right: 16px;
          }

          .projects-back-home,
          .projects-menu-button {
            width: 50px;
            height: 50px;
          }

          .projects-clean-title {
            font-size: 46px;
          }

          .projects-clean-intro {
            font-size: 17px;
          }

          .projects-clean-card {
            border-radius: 26px;
          }

          .projects-clean-card__visual {
            aspect-ratio: 1600 / 1000;
            border-radius: 26px 26px 0 0;
          }

          .projects-clean-card__content {
            padding: 24px 26px 26px;
          }

          .projects-clean-card__title {
            font-size: 30px;
          }
        }
      `}</style>

      <div
        className="projects-dust-layer"
        style={{
          translate: `${px * -2}px ${py * -2}px`,
          transition: "translate 800ms cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <DustLayer px={px} py={py} />
      </div>

      <div className="projects-fixed-topbar">
        <a href="/" className="projects-back-home" aria-label="Back home">
          <ChevronLeft size={24} strokeWidth={2.4} />
        </a>

        <button
          className="projects-menu-button"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? (
            <X size={24} strokeWidth={2.2} />
          ) : (
            <Menu size={24} strokeWidth={2.2} />
          )}
        </button>
      </div>

      <MobileLiquidMenu isOpen={menuOpen} setIsOpen={setMenuOpen} />

      <div className="projects-clean-inner">
        <div className="projects-clean-eyebrow">All Projects</div>

        <h1 className="projects-clean-title">All Projects</h1>

        <p className="projects-clean-intro">
          A wider collection of branding, packaging, UI/UX, social media, and
          visual identity projects.
        </p>

        <div className="projects-clean-grid">
          {allProjects.map((project) => (
            <article className="projects-clean-card" key={project.title}>
              <div className={`projects-clean-card__visual ${project.visual}`}>
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="projects-clean-card__visual-placeholder">
                    {project.title}
                  </div>
                )}
              </div>

              <div className="projects-clean-card__content">
                <span className="projects-clean-card__number">
                  {project.number}
                </span>

                <h2 className="projects-clean-card__title">
                  {project.title}
                </h2>

                <p className="projects-clean-card__cats">{project.cats}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
      }
