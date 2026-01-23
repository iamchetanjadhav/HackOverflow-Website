"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    /* ---------------- PARTICLE FIELD ---------------- */
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const particles = Array.from({ length: 90 }).map(() => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.8 + 0.5,
            dx: (Math.random() - 0.5) * 0.4,
            dy: (Math.random() - 0.5) * 0.4
        }));

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                p.x += p.dx;
                p.y += p.dy;

                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(231,88,41,0.35)";
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        animate();
        return () => window.removeEventListener("resize", resize);
    }, []);


    useEffect(() => {
        const onScroll = () => {
            const scrolled = window.scrollY;
            document.documentElement.style.setProperty(
                "--hero-scale",
                `${Math.max(0.88, 1 - scrolled / 1200)}`
            );
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section className="hero-root">
            <canvas ref={canvasRef} className="particle-canvas" />

            <div className="hero-content">
                {/* BADGE – matches Gallery / Dates */}
                <span className="hero-badge">
                    National Level Hackathon
                </span>

                {/* TITLE */}
                <h1 className="hero-title">
                    Hack<span className="gradient-text">Overflow</span>
                </h1>

                {/* VERSION */}
                <div className="hero-version">4.0</div>

                {/* TAGLINE */}
                <p className="hero-tagline">
                    A 36 hour sprint of innovation, code, and collaboration.
                </p>

                {/* CTA */}
                <div className="hero-actions">
                    <a
                        href="https://unstop.com/hackathons/hackoverflow-40-pillai-hoc-college-of-engineering-technology-phcet-maharashtra-1613166"
                        className="primary-cta"
                    >
                        Register Now
                    </a>
                    <a href="#gallery" className="secondary-cta">
                        Explore Event
                    </a>
                </div>
            </div>

            <style>{`
        :root {
          --hero-scale: 1;
        }

        .hero-root {
          position: relative;
          min-height: 100vh;
          background: #0a0a0a;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Poppins', sans-serif;
        }

        .particle-canvas {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          text-align: center;
          transform: scale(var(--hero-scale));
          transition: transform 0.4s ease;
          padding: 0 1rem;
        }

        .hero-badge {
  display: inline-block;
  margin-bottom: 18px;

  /* Responsive sizing */
  padding: clamp(6px, 1.2vw, 10px) clamp(14px, 3vw, 26px);
  font-size: clamp(0.6rem, 1.6vw, 0.75rem);
  letter-spacing: clamp(0.18em, 0.8vw, 0.35em);

  background: rgba(231, 88, 41, 0.1);
  border: 1px solid rgba(231, 88, 41, 0.35);
  border-radius: 999px;

  font-weight: 600;
  text-transform: uppercase;
  color: #E85D24;
  backdrop-filter: blur(10px);
  white-space: nowrap;
}


        .hero-title {
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 900;
          color: #ffffff;
          line-height: 1;
        }

        .gradient-text {
          background: linear-gradient(
            90deg,
            #FCB216 0%,
            #E85D24 35%,
            #D91B57 70%,
            #63205F 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-left: 0.15em;
        }

        .hero-version {
          margin-top: 6px;
          font-size: 2.6rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          background: linear-gradient(
            90deg,
            #FCB216,
            #E85D24
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-tagline {
          margin-top: 26px;
          max-width: 540px;
          margin-inline: auto;
          color: rgba(255,255,255,0.7);
          font-size: 1rem;
          line-height: 1.6;
        }

        .hero-actions {
          margin-top: 42px;
          display: flex;
          gap: 18px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .primary-cta {
          padding: 14px 44px;
          border-radius: 999px;
          background: linear-gradient(135deg,#e75829,#F2A03D);
          color: #000;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 0 30px rgba(231,88,41,0.35);
        }

        .primary-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 55px rgba(231,88,41,0.55);
        }

        .secondary-cta {
          padding: 14px 44px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.25);
          color: #ffffff;
          text-decoration: none;
          transition: background 0.3s ease;
        }

        .secondary-cta:hover {
          background: rgba(255,255,255,0.08);
        }

        @media (max-width: 480px) {
          .hero-version {
            font-size: 2.1rem;
            letter-spacing: 0.3em;
          }
        }
      `}</style>
        </section>
    );
}
