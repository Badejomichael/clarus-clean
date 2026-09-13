import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-forest/8 bg-porcelain">
      <div className="container grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-2xl text-forest">Clarus</p>
          <p className="mt-4 max-w-xs font-sans text-sm leading-relaxed text-ink/60">
            Trained, insured cleaning teams for homes, offices, and
            hospitality venues across 14 countries.
          </p>
        </div>

        <div>
          <p className="font-sans text-sm font-semibold text-forest">Company</p>
          <ul className="mt-4 space-y-3 font-sans text-sm text-ink/65">
            <li><a href="#services" className="focus-ring hover:text-forest">Services</a></li>
            <li><a href="#process" className="focus-ring hover:text-forest">How it works</a></li>
            <li><a href="#global" className="focus-ring hover:text-forest">Where we work</a></li>
            <li><a href="#stories" className="focus-ring hover:text-forest">Client stories</a></li>
          </ul>
        </div>

        <div>
          <p className="font-sans text-sm font-semibold text-forest">Services</p>
          <ul className="mt-4 space-y-3 font-sans text-sm text-ink/65">
            <li>Residential care</li>
            <li>Offices &amp; facilities</li>
            <li>Hospitality turnover</li>
            <li>Post-construction</li>
          </ul>
        </div>

        <div>
          <p className="font-sans text-sm font-semibold text-forest">Get in touch</p>
          <ul className="mt-4 space-y-3 font-sans text-sm text-ink/65">
            <li className="flex items-center gap-2">
              <FiPhone className="text-brass" /> +1 (800) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <FiMail className="text-brass" /> hello@clarusclean.com
            </li>
            <li className="flex items-center gap-2">
              <FiMapPin className="text-brass" /> Offices in 14 countries
            </li>
          </ul>
        </div>
      </div>

      <div className="container flex flex-col gap-3 border-t border-forest/8 py-6 font-sans text-xs text-ink/50 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Clarus Clean Ltd. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="focus-ring hover:text-forest">Privacy policy</a>
          <a href="#" className="focus-ring hover:text-forest">Terms of service</a>
        </div>
      </div>
    </footer>
  );
}
