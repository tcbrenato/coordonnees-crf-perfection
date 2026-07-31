import React from "react";
import {
  Globe2,
  Ship,
  MessageCircle,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import "./App.css";

function Facebook(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

function Linkedin(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.75h3.5V21H3.2V8.75Zm6.44 0h3.36v1.68h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.34V21h-3.5v-5.44c0-1.3-.02-2.98-1.82-2.98-1.83 0-2.1 1.42-2.1 2.88V21H9.64V8.75Z" />
    </svg>
  );
}

function Instagram(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const links = [
  { label: "Site officiel", value: "www.crfperfection.pro", href: "https://www.crfperfection.pro", icon: Globe2, color: "gold" },
  { label: "Projet COPAF", value: "www.copaf-ports.com", href: "https://www.copaf-ports.com", icon: Ship, color: "red" },
  { label: "Facebook", value: "Page officielle", href: "https://www.facebook.com/share/1CkmqRu9Yj/?mibextid=wwXIfr", icon: Facebook, color: "gold" },
  { label: "LinkedIn", value: "CRF Perfection", href: "https://www.linkedin.com/company/crfperfection/", icon: Linkedin, color: "red" },
  { label: "Instagram", value: "@crf_perfection", href: "https://www.instagram.com/crf_perfection?igsh=cWkwZGIwYWdraHZw&utm_source=qr", icon: Instagram, color: "gold" },
  { label: "WhatsApp", value: "+229 01 69 30 30 19", href: "https://wa.me/2290169303019", icon: MessageCircle, color: "red" },
  { label: "E-mail", value: "contact@crfperfection.pro", href: "mailto:contact@crfperfection.pro", icon: Mail, color: "gold" },
  { label: "E-mail (secondaire)", value: "contactcrfperfection@gmail.com", href: "mailto:contactcrfperfection@gmail.com", icon: Mail, color: "red" },
];

export default function App() {
  return (
    <div className="page">
      <div className="glow-static" />
      <div className="glow-dynamic" />

      {/* Le conteneur principal (card) qui encadre uniquement les éléments du contenu */}
      <div className="main-card">
        <header className="header">
          <p className="eyebrow">CRF PERFECTION</p>
          <h1>Nos coordonnées officielles</h1>
          <p className="subtitle">
            Retrouvez ici tous nos canaux de communication et de contact,
            regroupés en un seul endroit sécurisé.
          </p>
        </header>

        <main className="grid">
          {links.map(({ label, value, href, icon: Icon, color }, index) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`card card-${color}`}
              style={{ "--delay": `${index * 75}ms` }}
            >
              <span className="card-icon-wrapper">
                <Icon size={20} strokeWidth={2.2} />
              </span>
              <span className="card-text">
                <span className="card-label">{label}</span>
                <span className="card-value">{value}</span>
              </span>
              <ArrowUpRight size={18} className="card-arrow" />
            </a>
          ))}
        </main>

        <footer className="footer">
          <p>© {new Date().getFullYear()} CRF Perfection — Tous droits réservés</p>
        </footer>
      </div>
    </div>
  );
}