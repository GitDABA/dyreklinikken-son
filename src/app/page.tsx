import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Heart,
  MapPin,
  Microscope,
  HeartPulse,
  Stethoscope,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Star,
  GraduationCap,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[75vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero_clinic.jpeg"
          alt="Dyreklinikken Son – moderne veterinærklinikk i Son sentrum"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--color-overlay)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl px-4 sm:px-8 text-center text-white">
          <h1 className="text-white mb-6 leading-tight">
            Spesialistkompetanse nær deg
            <span className="block text-lg sm:text-xl md:text-2xl font-sans font-normal mt-3 opacity-90">
              — for dyr som trenger mer enn en fastlege
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto opacity-90 font-sans">
            Dyreklinikken Son er den eneste veterinærklinikken i Son og Vestby
            med spesialist i onkologi og kardiologi. Uavhengig. Personlig.
            Tilgjengelig nå.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+4764950500"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Ring 64 95 05 00
            </a>
            <Link
              href="/spesialist/onkologi"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[var(--color-primary)] transition-all"
            >
              Se spesialisttjenester
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section className="bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: ShieldCheck,
              text: "Spesialist i smådyrsykdommer (DipECVIM-CA)",
            },
            { icon: Heart, text: "Kardiologi og ekkokardiografi" },
            { icon: MapPin, text: "Son sentrum · Gratis parkering" },
          ].map(({ icon: Icon, text }, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-5 rounded-xl text-white border border-white/10"
            >
              <Icon className="h-8 w-8 shrink-0 text-[var(--color-sand)]" aria-hidden="true" />
              <span className="text-sm sm:text-base font-medium">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="py-20 sm:py-28 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-14">
            <span className="text-[var(--color-accent)] font-semibold tracking-widest text-xs uppercase mb-2 block font-sans">
              Hvorfor oss
            </span>
            <h2 className="mb-4">
              Det som skiller oss fra andre klinikker
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Stethoscope,
                title: "Spesialistsenter",
                desc: "Godkjent spesialistklinikk for smådyr. Vi tar imot henvisninger fra hele regionen.",
              },
              {
                icon: Microscope,
                title: "Avansert diagnostikk",
                desc: "Ultralyd, EKG og fullstendig blodprøvepanel på klinikken.",
              },
              {
                icon: Clock,
                title: "Rask behandling",
                desc: "Korte ventetider og direkte oppfølging etter utredning.",
              },
              {
                icon: GraduationCap,
                title: "Spesialiserte veterinærer",
                desc: "Onkologi, kardiologi og generell smådyrmedisin under ett tak.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-[var(--color-surface)] dark:bg-[var(--color-surface)] border-l-4 border-[var(--color-accent)] p-6 sm:p-8 rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 bg-[var(--color-sand)] dark:bg-[var(--color-bg)] rounded-lg flex items-center justify-center mb-5">
                  <Icon className="h-6 w-6 text-[var(--color-primary)]" aria-hidden="true" />
                </div>
                <h3 className="text-lg mb-2 font-sans font-semibold">{title}</h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SPECIALIST CARDS ═══ */}
      <section className="py-20 sm:py-28 bg-[var(--color-sand)] dark:bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="mb-4">
              Kompetanse du normalt finner på et universitetssykehus
            </h2>
            <div
              className="h-1 w-16 bg-[var(--color-accent)] mx-auto rounded-full"
              aria-hidden="true"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Microscope,
                title: "Onkologi",
                desc: "Marianne Mandelin er spesialist med mastergrad i onkologi. Komplett utredning inkludert tumourstaging, kirurgi og kjemoterapi.",
                detail: "Vi tilbyr individuell behandlingsplan, inkludert palliativ omsorg og livskvalitetsvurdering.",
                href: "/spesialist/onkologi",
              },
              {
                icon: HeartPulse,
                title: "Kardiologi",
                desc: "Mai-Gret Jacobsen utfører ekkokardiografi, EKG og blodtrykksmåling. Avansert hjertediagnostikk for hund og katt.",
                detail: "Regelmessig oppfølging, medikamentjustering og rådgivning til eier og henvisende veterinær.",
                href: "/spesialist/kardiologi",
              },
              {
                icon: Stethoscope,
                title: "Indremedisin",
                desc: "Komplekse utredninger innen gastroenterologi, endokrinologi og nefrologi med avansert bildediagnostikk.",
                detail: "Ultralydveiledet prøvetaking og systematisk differensialdiagnostikk ved sammensatte tilstander.",
                href: "/spesialist/indremedisin",
              },
            ].map(({ icon: Icon, title, desc, detail, href }) => (
              <Link
                key={href}
                href={href}
                className="group bg-[var(--color-surface)] dark:bg-[var(--color-bg)] p-8 sm:p-10 rounded-2xl flex flex-col border border-transparent hover:border-l-4 hover:border-[var(--color-accent)] hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[var(--color-sand)] dark:bg-[var(--color-surface)] rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                  <Icon className="h-7 w-7 text-[var(--color-primary)] group-hover:text-white" />
                </div>
                <h3 className="text-xl mb-3">{title}</h3>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-2 flex-1">
                  {desc}
                </p>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-6 opacity-80">
                  {detail}
                </p>
                <span className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold text-sm group-hover:gap-3 transition-all">
                  Les mer
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TEAM ═══ */}
      <section className="py-20 sm:py-28 bg-[var(--color-surface)] dark:bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="mb-4">Møt teamet</h2>
            <p className="text-[var(--color-text-muted)] max-w-xl mx-auto">
              Erfarent fagpersonell som setter dyrevelferd først.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {[
              {
                name: "Marianne J. Mandelin",
                title: "Veterinær, Spesialist",
                shortBio: "Spesialist i smådyronkologi",
                subtitle:
                  "DipECVIM-CA · MS Oncology, Univ. København",
                bio: "En av svært få onkologispesialister i Akershus/Østfold. Spesialist siden 2003 med bred erfaring innen kreft og indremedisin.",
                img: "/images/staff_marianne_mandelin.jpg",
              },
              {
                name: "Mai-Gret Jacobsen",
                title: "Veterinær, GPCert(SAM)",
                shortBio: "Spesialist i smådyrkardiologi",
                subtitle: "Kardiologi · 20+ års erfaring",
                bio: "Cand.med.vet. med fordypning i kardiologi, ultralyd, dermatologi og kirurgi. En kjent og betrodd veterinær i Son.",
                img: "/images/staff_mai_gret_jacobsen.jpg",
              },
              {
                name: "Martine Boxill",
                title: "Klinikkleder",
                shortBio: "Allmennpraktiker, smådyr",
                subtitle: "Drift og pasientkontakt",
                bio: "Varm, rolig og strukturert. Sørger for at hverdagen flyter og at du og dyret føler dere ivaretatt fra første stund.",
                img: "/images/staff_martine_boxill.jpg",
              },
              {
                name: "Aurora Johansen",
                title: "Autorisert dyrepleier",
                shortBio: "Allmennpraktiker, smådyr",
                subtitle: "NMBU 2024",
                bio: "Spesiell interesse for laboratoriemedisin og anestesi. Kjent for rolig håndtering, spesielt av katter.",
                img: "/images/staff_aurora_johansen.jpg",
              },
            ].map((member) => (
              <div key={member.name} className="group flex flex-col border-b-2 border-transparent hover:border-[var(--color-accent)] pb-4 transition-colors duration-300">
                <div className="aspect-[4/5] rounded-xl overflow-hidden mb-5 bg-[var(--color-sand)] shadow-sm">
                  <Image
                    src={member.img}
                    alt={`${member.name}, ${member.title}`}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-focus-within:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h3 className="text-lg font-semibold font-sans text-[var(--color-text)] mb-0.5">
                  {member.name}
                </h3>
                <p className="text-[var(--color-accent)] text-sm font-medium mb-0.5">
                  {member.title}
                </p>
                <p className="text-sm text-[var(--color-primary)] font-medium mb-1 font-sans">
                  {member.shortBio}
                </p>
                <p className="text-xs text-[var(--color-text-muted)] mb-2 italic">
                  {member.subtitle}
                </p>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-20 sm:py-28 bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-white mb-4">Hva våre kunder sier</h2>
            <p className="text-white/80 max-w-xl mx-auto font-sans">
              Tilbakemeldinger fra dyreeiere og kollegaer i regionen.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Vi ble henvist hit for en komplisert tilstand. Teamet var grundig, rolig og dyktig. Hunden vår er frisk igjen.",
                name: "Anne-Lise",
                role: "Eier av Berner sennen",
              },
              {
                quote: "Første gang jeg brukte en spesialistklinikk. Verdt hver krone. Diagnostikken var langt grundigere enn hos fastlegen.",
                name: "Kjetil",
                role: "Eier av Labrador",
              },
              {
                quote: "Rask svar på henvisningen og tydelig kommunikasjon hele veien. Anbefales til alle veterinærer i regionen.",
                name: "Veterinær",
                role: "Østfold",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex flex-col"
              >
                <div className="flex gap-1 mb-4" aria-label="5 av 5 stjerner">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-[var(--color-accent)] fill-[var(--color-accent)]"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-white text-sm sm:text-base leading-relaxed mb-6 flex-1 font-sans italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold text-sm font-sans">
                    {testimonial.name}
                  </p>
                  <p className="text-white/60 text-sm font-sans">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES OVERVIEW ═══ */}
      <section className="py-20 sm:py-28 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="mb-4">Våre tjenester</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Allmennpraksis */}
            <div className="bg-[var(--color-surface)] dark:bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)]">
              <h3 className="text-xl mb-4 font-sans font-semibold text-[var(--color-primary)]">
                Allmennpraksis
              </h3>
              <ul className="space-y-2 text-[var(--color-text-muted)] text-sm">
                {[
                  "Konsultasjoner og helsekontroll",
                  "Vaksinering (hund, katt, valpepakke)",
                  "Tannhelse og tannrens",
                  "Kirurgi (kastrering, sterilisering)",
                  "ID-chip og EU-pass",
                  "Librela/Solensia smertebehandling",
                  "Resepter og refill",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1" aria-hidden="true">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/tjenester"
                className="inline-flex items-center gap-2 mt-6 text-[var(--color-accent)] font-semibold text-sm hover:gap-3 transition-all"
              >
                Se alle tjenester <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Spesialisttjenester */}
            <div className="bg-[var(--color-surface)] dark:bg-[var(--color-surface)] p-8 rounded-2xl border border-[var(--color-border)]">
              <h3 className="text-xl mb-4 font-sans font-semibold text-[var(--color-primary)]">
                Spesialisttjenester
              </h3>
              <ul className="space-y-2 text-[var(--color-text-muted)] text-sm">
                {[
                  "Onkologi — tumourstaging, kjemoterapi, kirurgi",
                  "Kardiologi — ekkokardiografi, EKG, blodtrykk",
                  "Indremedisin — gastro, endokrin, nefro",
                  "Bløtdelskirurgi",
                  "Avansert bildediagnostikk",
                  "Dermatologi",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] mt-1" aria-hidden="true">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/spesialist/onkologi"
                className="inline-flex items-center gap-2 mt-6 text-[var(--color-accent)] font-semibold text-sm hover:gap-3 transition-all"
              >
                Se spesialisttjenester <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOR VETERINÆRER TEASER ═══ */}
      <section className="py-20 sm:py-24 bg-[var(--color-primary)] dark:bg-[var(--color-primary-dark)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center text-white">
          <h2 className="text-white mb-6">
            Informasjon for veterinærer
          </h2>
          <p className="text-lg leading-relaxed mb-10 opacity-90 max-w-2xl mx-auto">
            Vi tar imot henvisninger innen onkologi, kardiologi og indremedisin.
            Svar innen 24 timer.
          </p>
          <Link
            href="/for-veterinaerer"
            className="inline-flex items-center gap-2 bg-white text-[var(--color-primary)] px-8 py-4 rounded-lg font-semibold hover:bg-[var(--color-sand)] transition-all"
          >
            Send henvisning
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* ═══ CONTACT SECTION ═══ */}
      <section className="py-20 sm:py-28 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-8">
              <h2>Kontakt oss</h2>
              <div className="space-y-4">
                <a
                  href="tel:+4764950500"
                  className="flex items-center gap-3 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors text-lg"
                >
                  <Phone className="h-5 w-5 text-[var(--color-primary)] shrink-0" />
                  64 95 05 00
                </a>
                <a
                  href="mailto:post@sondk.no"
                  className="flex items-center gap-3 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                >
                  <Mail className="h-5 w-5 text-[var(--color-primary)] shrink-0" />
                  post@sondk.no
                </a>
                <div className="flex items-center gap-3 text-[var(--color-text)]">
                  <MapPin className="h-5 w-5 text-[var(--color-primary)] shrink-0" />
                  Slettaveien 2, 1553 Son
                </div>
                <div className="flex items-start gap-3 text-[var(--color-text)]">
                  <Clock className="h-5 w-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <div>
                    <p>Man–ons, fre: 08:30–16:00</p>
                    <p>Torsdag: 08:30–18:00</p>
                  </div>
                </div>
              </div>
              <a
                href="https://www.vettigo.dk/no/booking.php?_klinik=son999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Bestill time online
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-[var(--color-border)] min-h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042.5!2d10.6867!3d59.5267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSlettaveien+2%2C+1553+Son!5e0!3m2!1snb!2sno!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kart til Dyreklinikken Son, Slettaveien 2, 1553 Son"
              />
              <noscript>
                <p className="p-4 text-sm text-[var(--color-text-muted)]">
                  Finn oss: Slettaveien 2, 1553 Son. Åpne i{" "}
                  <a href="https://maps.google.com/?q=Slettaveien+2,+1553+Son" className="underline">Google Maps</a>.
                </p>
              </noscript>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
