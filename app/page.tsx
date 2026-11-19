import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Bone,
  Check,
  HeartPulse,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { MobileNav } from "./components/mobile-nav";

const clinicName = "Mercedarian Spine Specialist Clinic";
const phoneNumber = "0244276414";
const whatsappHref =
  "https://wa.me/233244276414?text=Hello%20Mercedarian%20Spine%20Specialist%20Clinic%2C%20I%20would%20like%20to%20enquire%20about%20an%20appointment.";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Our services", href: "#services" },
  { label: "Conditions we treat", href: "#conditions" },
  { label: "Contact", href: "#contact" },
];

const focusAreas = [
  {
    number: "01",
    title: "Spine-related conditions",
    description:
      "A focused place to start when spine-related concerns are affecting comfort, confidence or everyday movement.",
    icon: Bone,
  },
  {
    number: "02",
    title: "Other joint-related complications",
    description:
      "Discuss other joint-related complications with a healthcare professional and understand what attention may be appropriate.",
    icon: HeartPulse,
  },
];

const journeySteps = [
  { number: "01", title: "Contact the clinic", description: "Call or send a WhatsApp enquiry." },
  { number: "02", title: "Discuss your concerns", description: "Share what you have been experiencing." },
  { number: "03", title: "Arrange an appointment", description: "Enquire about a suitable next step." },
  { number: "04", title: "Receive attention", description: "Have your concerns met with appropriate professional attention." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinicName,
  description: "We treat spine cases, and other joint related complications in the body.",
  telephone: phoneNumber,
  medicalSpecialty: "Spine care",
  image: "/images/spine-consultation.jpg",
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header" id="top">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label={`${clinicName} home`}>
            <span className="brand-image-frame">
              <Image src="/images/clinic-logo.jpg" alt="Mercedarian Spine Specialist Clinic logo" width={54} height={54} />
            </span>
            <span className="brand-copy">
              <strong>Mercedarian</strong>
              <span>Spine Specialist Clinic</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="button button-primary header-cta" href={`tel:${phoneNumber}`}>
            Book an appointment
            <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </a>
          <MobileNav />
        </div>
      </header>

      <main id="main-content">
        <section className="hero section" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span className="eyebrow-mark" aria-hidden="true" /> Spine & joint health</p>
              <h1 id="hero-title">Expert spine care. <em>A better path to movement.</em></h1>
              <p className="hero-lede">
                At Mercedarian Spine Specialist Clinic, we focus on spine-related conditions and other joint complications, helping patients take informed steps towards better movement and wellbeing.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={`tel:${phoneNumber}`}>
                  <PhoneCall size={17} strokeWidth={1.8} aria-hidden="true" />
                  Book an appointment
                </a>
                <a className="button button-quiet" href="#services">
                  Explore our services
                  <ArrowRight size={17} strokeWidth={1.8} aria-hidden="true" />
                </a>
              </div>
              <div className="hero-footnote">
                <ShieldCheck size={18} strokeWidth={1.6} aria-hidden="true" />
                <span>A clear conversation is a practical first step.</span>
              </div>
            </div>

            <div className="hero-media-wrap">
              <div className="hero-media">
                <Image
                  src="/images/spine-consultation.jpg"
                  alt="Healthcare professional speaking with a patient about back discomfort during a consultation"
                  fill
                  priority
                  sizes="(max-width: 900px) 100vw, 52vw"
                  className="cover-image"
                />
                <div className="hero-media-wash" aria-hidden="true" />
                <div className="hero-image-caption">
                  <span>01</span>
                  <p>Focused attention<br />for better movement</p>
                </div>
              </div>
              <div className="hero-side-note">
                <span className="cross-signal" aria-hidden="true"><i /><b /></span>
                <span>Specialist attention<br />starts with listening.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="intro section" id="about" aria-labelledby="about-title">
          <div className="shell intro-grid">
            <div className="section-label">
              <span>About the clinic</span>
              <span className="section-rule" aria-hidden="true" />
            </div>
            <div className="intro-copy">
              <h2 id="about-title">Specialist attention for your spine and joint health.</h2>
              <div className="intro-text-grid">
                <p>
                  We treat spine cases, and other joint related complications in the body. When discomfort or limited movement is getting in the way, the right conversation can help you understand what needs attention.
                </p>
                <p>
                  Mercedarian Spine Specialist Clinic is a place to start that conversation. Reach out to discuss your concerns and enquire about an appointment.
                </p>
              </div>
              <a className="inline-link" href="#contact">
                Talk to the clinic <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="focus-section section" id="services" aria-labelledby="focus-title">
          <div className="shell">
            <div className="section-heading-row">
              <div>
                <p className="eyebrow">What we focus on</p>
                <h2 id="focus-title">Care that begins with the area that needs attention.</h2>
              </div>
              <p className="section-intro-note">Our focus is intentionally clear: spine-related conditions and other joint-related complications.</p>
            </div>

            <div className="focus-grid">
              {focusAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <article className="focus-card" key={area.number}>
                    <div className="focus-card-top">
                      <span className="card-number">{area.number}</span>
                      <Icon size={25} strokeWidth={1.35} aria-hidden="true" />
                    </div>
                    <h3>{area.title}</h3>
                    <p>{area.description}</p>
                    <a href="#contact" aria-label={`Enquire about ${area.title}`}>
                      Enquire about this focus <ArrowUpRight size={17} strokeWidth={1.8} aria-hidden="true" />
                    </a>
                  </article>
                );
              })}
              <div className="focus-note">
                <Sparkles size={21} strokeWidth={1.5} aria-hidden="true" />
                <p>Not sure where your concern fits? Start with a conversation. The clinic can help you enquire about the appropriate next step.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="conditions-section section" id="conditions" aria-labelledby="conditions-title">
          <div className="shell conditions-grid">
            <div className="conditions-copy">
              <p className="eyebrow">Why reach out</p>
              <h2 id="conditions-title">When movement changes, clarity matters.</h2>
              <p className="conditions-lede">
                Seeking professional attention can help you discuss what you are experiencing, understand available care options and decide what to ask about next.
              </p>
              <ul className="check-list">
                <li><Check size={16} strokeWidth={2} aria-hidden="true" /> Make space to discuss your concerns.</li>
                <li><Check size={16} strokeWidth={2} aria-hidden="true" /> Ask about the attention that may be appropriate.</li>
                <li><Check size={16} strokeWidth={2} aria-hidden="true" /> Take an informed next step without guesswork.</li>
              </ul>
            </div>
            <div className="conditions-card">
              <div className="conditions-card-head">
                <Stethoscope size={24} strokeWidth={1.35} aria-hidden="true" />
                <span>Start with a clear conversation</span>
              </div>
              <p>Describe what you have noticed. Ask your questions. Enquire about an appointment.</p>
              <div className="condition-line" aria-hidden="true"><span /><span /><span /></div>
              <a className="button button-light" href={`tel:${phoneNumber}`}>
                Call the clinic <PhoneCall size={16} strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="journey-section section" aria-labelledby="journey-title">
          <div className="shell">
            <div className="section-heading-row journey-heading">
              <div>
                <p className="eyebrow">Your enquiry journey</p>
                <h2 id="journey-title">A simple way to get in touch.</h2>
              </div>
              <p className="section-intro-note">A suggested enquiry journey — not a promise of a particular clinical process.</p>
            </div>
            <div className="journey-grid">
              {journeySteps.map((step, index) => (
                <div className="journey-step" key={step.number}>
                  <div className="journey-number">{step.number}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  {index < journeySteps.length - 1 ? <span className="journey-arrow" aria-hidden="true"><ArrowRight size={19} strokeWidth={1.5} /></span> : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section" id="contact" aria-labelledby="contact-title">
          <div className="shell contact-panel">
            <div className="contact-copy">
              <p className="eyebrow eyebrow-light">Make the first enquiry</p>
              <h2 id="contact-title">Don&apos;t ignore your spine health.</h2>
              <p>Reach out to Mercedarian Spine Specialist Clinic to discuss your concerns and enquire about an appointment.</p>
            </div>
            <div className="contact-actions">
              <a className="button button-light" href={`tel:${phoneNumber}`}>
                <PhoneCall size={17} strokeWidth={1.8} aria-hidden="true" />
                Call the clinic
              </a>
              <a className="button button-outline-light" href={whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle size={17} strokeWidth={1.8} aria-hidden="true" />
                WhatsApp the clinic
              </a>
            </div>
          </div>
        </section>

        <section className="contact-details section" aria-labelledby="contact-details-title">
          <div className="shell contact-details-grid">
            <div>
              <p className="eyebrow">Contact information</p>
              <h2 id="contact-details-title">When you&apos;re ready, we&apos;re here to hear from you.</h2>
            </div>
            <div className="contact-detail-list">
              <div className="contact-detail">
                <span className="detail-label">Clinic</span>
                <strong>{clinicName}</strong>
              </div>
              <div className="contact-detail">
                <span className="detail-label">Telephone</span>
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
              </div>
              <div className="contact-detail">
                <span className="detail-label">WhatsApp</span>
                <a href={whatsappHref} target="_blank" rel="noreferrer">Start an enquiry</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div className="footer-brand-block">
            <a className="brand brand-footer" href="#top" aria-label={`${clinicName} home`}>
              <span className="brand-image-frame">
                <Image src="/images/clinic-logo.jpg" alt="" width={48} height={48} />
              </span>
              <span className="brand-copy">
                <strong>Mercedarian</strong>
                <span>Spine Specialist Clinic</span>
              </span>
            </a>
            <p>We treat spine cases, and other joint related complications in the body.</p>
          </div>
          <div className="footer-column">
            <span className="footer-label">Explore</span>
            <a href="#about">About the clinic</a>
            <a href="#services">Our services</a>
            <a href="#conditions">Conditions we treat</a>
          </div>
          <div className="footer-column">
            <span className="footer-label">Reach out</span>
            <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            <a href={whatsappHref} target="_blank" rel="noreferrer">WhatsApp the clinic</a>
            <a href="#contact">Contact information</a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© {new Date().getFullYear()} {clinicName}. All rights reserved.</span>
          <span>Information on this page is general and does not replace professional medical advice.</span>
        </div>
      </footer>
    </>
  );
}
