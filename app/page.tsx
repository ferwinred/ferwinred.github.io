"use client";

import { useEffect, useState } from "react";
import {
  education,
  flow,
  hero,
  jobs,
  links,
  projects,
  stack,
  stats,
  ui,
  type Lang,
  type Track,
} from "@/lib/content";

function Toggle<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { id: T; text: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <div className="toggle" role="group" aria-label={label}>
      {options.map((o) => (
        <button key={o.id} type="button" aria-pressed={value === o.id} onClick={() => onChange(o.id)}>
          {o.text}
        </button>
      ))}
    </div>
  );
}

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  const [track, setTrack] = useState<Track>("data");
  const [lang, setLang] = useState<Lang>("es");

  // Shareable state: ?track=dev&lang=en
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("track") === "dev") setTrack("dev");
    if (params.get("lang") === "en") setLang("en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    const params = new URLSearchParams({ track, lang });
    window.history.replaceState(null, "", `?${params.toString()}`);
  }, [track, lang]);

  const h = hero[track];
  const p = projects[track];
  const stackOrder = track === "data" ? (["data", "work", "more"] as const) : (["work", "more", "data"] as const);

  return (
    <>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Inicio">
          <span className="logo">EA</span>
          <span className="mono">
            ferwinred<span className="accent">/</span>portfolio
          </span>
        </a>
        <nav className="links" aria-label="Secciones">
          <a href="#proyectos">{ui.navProjects[lang]}</a>
          <a href="#experiencia">{ui.navExperience[lang]}</a>
          <a href="#stack">Stack</a>
          <a href="#contacto">{ui.navContact[lang]}</a>
        </nav>
        <div className="toggles">
          <Toggle
            label={ui.trackLabel[lang]}
            value={track}
            onChange={setTrack}
            options={[
              { id: "data", text: "Data" },
              { id: "dev", text: "Dev" },
            ]}
          />
          <Toggle
            label={ui.langLabel[lang]}
            value={lang}
            onChange={setLang}
            options={[
              { id: "es", text: "ES" },
              { id: "en", text: "EN" },
            ]}
          />
        </div>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="dot" aria-hidden="true" />
              {h.eyebrow}
            </p>
            <h1>
              {h.h1a[lang]} <span className="accent">{h.h1b[lang]}</span>
            </h1>
            <p className="lead">{h.lead[lang]}</p>
            <div className="cta">
              <a className="btn primary" href="#proyectos">
                {ui.ctaProjects[lang]} <Arrow />
              </a>
              <a className="btn ghost" href={links.github} target="_blank" rel="noreferrer">
                {ui.ctaGithub[lang]}
              </a>
            </div>
          </div>

          <div className="panel" aria-label={h.panel}>
            <div className="panel-head">
              <span>{h.panel}</span>
              <span className="running">
                <span className="dot green" aria-hidden="true" /> running
              </span>
            </div>
            <ol className="flow">
              {flow[track].map((n) => (
                <li key={n.step}>
                  <span className="step">{n.step}</span>
                  <span className="flow-text">
                    <strong>{n.name[lang]}</strong>
                    <span>{n.desc[lang]}</span>
                  </span>
                  <span className="tag">{n.tag}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="stats container" aria-label="Datos clave">
          {stats.map((s) => (
            <div key={s.value}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label[lang]}</span>
            </div>
          ))}
        </section>

        <section id="proyectos" className="section container">
          <div className="section-head">
            <div>
              <p className="kicker">01 / {ui.navProjects[lang]}</p>
              <h2>{p.title[lang]}</h2>
            </div>
            <a href={links.github} target="_blank" rel="noreferrer">
              github.com/ferwinred →
            </a>
          </div>
          <div className="grid">
            {p.items.map((item) => (
              <article key={item.name} className={item.featured ? "card featured" : "card"}>
                <h3>{item.name}</h3>
                <p>{item.desc[lang]}</p>
                <ul className="chips" aria-label="Stack">
                  {item.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className="card-links">
                  <a href={item.code} target="_blank" rel="noreferrer">
                    {ui.code[lang]} →
                  </a>
                  {item.demo && (
                    <a href={item.demo} target="_blank" rel="noreferrer">
                      {ui.demo[lang]} →
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experiencia" className="section container experience">
          <div>
            <p className="kicker">02 / {ui.navExperience[lang]}</p>
            <h2 className="pre">{ui.expTitle[lang]}</h2>
          </div>
          <div>
            <ol className="jobs">
              {jobs.map((j) => (
                <li key={j.role + j.dates.es}>
                  <span className="mono muted">{j.dates[lang]}</span>
                  <div>
                    <h3>
                      {j.role} <span className="accent">· {j.company[lang]}</span>
                    </h3>
                    <p>{j.desc[lang]}</p>
                  </div>
                </li>
              ))}
            </ol>
            <ul className="edu">
              {education.map((e) => (
                <li key={e.place}>
                  <strong>{e.title[lang]}</strong> · {e.place} · <span className="mono muted">{e.dates}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="stack" className="section container">
          <p className="kicker">03 / Stack</p>
          <div className="stack">
            {stackOrder.map((key, i) => (
              <div key={key} className={i === 0 ? "stack-box dark" : "stack-box"}>
                <h3>{stack[key].title[lang]}</h3>
                <ul className="chips">
                  {stack[key].items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="contact container">
          <div>
            <h2 className="pre">{ui.contactTitle[lang]}</h2>
            <p>
              Medellín, Colombia · {ui.modality[lang]} · English B1
            </p>
          </div>
          <div className="contact-links">
            <a className="btn light" href={`mailto:${links.email}`}>
              {links.email}
            </a>
            <div className="mono">
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                linkedin/ferwinarias
              </a>
              <a href={links.github} target="_blank" rel="noreferrer">
                github/ferwinred
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="container footer mono muted">© 2026 Edwin Fernando Arias Arrieta</footer>
    </>
  );
}
