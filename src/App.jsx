import './App.css'

const serviceGroups = [
  {
    title: 'General repairs and maintenance',
    items: [
      'General repairs & maintenance',
      'Vehicle maintenance',
      'Vehicle inspection',
      'Vehicle safety inspection',
      'Vehicle emissions testing',
      'Temperature check',
      'Tune-up service',
      'Vehicle modifications',
      'Custom build',
      'Classic cars',
    ],
  },
  {
    title: 'Engine and diagnostics',
    items: [
      'Vehicle engine diagnostic',
      'Vehicle diagnostics service',
      'Engine repair',
      'Vehicle engine tuning',
      'Carburetor cleaning',
    ],
  },
  {
    title: 'Brakes, steering, suspension, and chassis',
    items: [
      'Brakes',
      'Vehicle brake repair',
      'Vehicle brake replacement',
      'Steering and suspension repair',
      'Steering and suspension replacement',
      'Steering wheel repair',
      'Chassis repair',
    ],
  },
  {
    title: 'Air conditioning and electrical',
    items: [
      'Air conditioning',
      'A/C filter replacement',
      'A/C installation and repair',
      'A/C services',
      'Re-gas/recharge',
      'Vehicle A/C recharge',
      'Vehicle A/C replacement',
      'Electrical',
      'Electrical repair',
      'Lighting repair',
      'Vehicle power window repair',
      'Wiper blade installation',
    ],
  },
  {
    title: 'Tyres, wheels, and alignment',
    items: [
      'Tyre air pump',
      'Tyre pressure testing',
      'Tyre rotations',
      'Tyres',
      'Vehicle tyre replacement',
      'Wheel alignment',
    ],
  },
  {
    title: 'Bodywork, painting, and detailing',
    items: [
      'Auto detailing',
      'Body & Trim',
      'Body repairs',
      'Vehicle body and trim repair',
      'Vehicle body and trim replacement',
      'Car painting',
      'Painting',
      'Car waxing',
      'Rust repair',
      'Welding',
      'Insurance assistance',
    ],
  },
  {
    title: 'Transmission and drivetrain',
    items: [
      'Transmission',
      'Transmission repair',
      'Transmission replacement',
      'Drivetrain repair',
    ],
  },
  {
    title: 'Glass, interior, and accessories',
    items: [
      'Auto glass repair',
      'Vehicle glass replacement',
      'Vehicle windshield repair',
      'Vehicle windshield replacement',
      'Vehicle rear window replacement',
      'Vehicle side window replacement',
      'Vehicle sunroof glass replacement',
      'Side view mirror repair',
      'Upholstery & interior restoration',
      'Vehicle interior vacuuming',
      'Vehicle water leak repair',
    ],
  },
  {
    title: 'Battery, exhaust, and other services',
    items: [
      'Battery',
      'Vehicle battery maintenance',
      'Vehicle battery replacement',
      'Exhaust',
      'Vehicle exhaust system repair',
      'Vehicle exhaust system replacement',
      'Oil change',
    ],
  },
]

const galleryItems = [
  {
    src: '/images/garage/vehicle-work.jpg',
    alt: 'Car at the workshop with its front windscreen removed for service',
    label: 'Vehicle glass work',
  },
  {
    src: '/images/garage/body-repair.jpg',
    alt: 'Removed vehicle engine and components arranged on the workshop floor',
    label: 'Engine repair',
  },
  {
    src: '/images/garage/garage-exterior.jpg',
    alt: 'Exterior view of the Dynamic Car World garage',
    label: 'Garage exterior',
  },
  {
    src: '/images/garage/engine-work.jpg',
    alt: 'Mechanic carrying out maintenance with a vehicle bonnet raised',
    label: 'Under the bonnet',
  },
  {
    src: '/images/garage/mechanic-working.jpg',
    alt: 'Workshop mechanic working on a vehicle',
    label: 'Workshop work',
  },
  {
    src: '/images/garage/garage-branding.jpg',
    alt: 'Dynamic Car World workshop branding and service information',
    label: 'Garage branding',
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="topbar-inner container">
          <a className="brand" href="#top" aria-label="Dynamic Car World home">
            <span className="brand-mark" aria-hidden="true">DCW</span>
            <span className="brand-name">DYNAMIC <b>CAR WORLD</b></span>
          </a>

          <nav className="main-nav" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </nav>

          <a
            className="header-call"
            href="tel:09075679342"
            aria-label="Call Dynamic Car World at 09075679342"
          >
            <span aria-hidden="true">☎</span> 09075679342
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />

          <div className="hero-content container">
            <div className="hero-copy">
              <p className="hero-eyebrow">Automotive Care &amp; Repair</p>
              <h1 id="hero-title">YOUR CAR NEEDS CARE. WE GET TO WORK.</h1>
              <p className="hero-description">
                From engine diagnostics and mechanical repairs to bodywork and routine
                maintenance, we help keep your vehicle ready for the road.
              </p>

              <div className="hero-actions">
                <a className="hero-button hero-button-primary" href="tel:09075679342">
                  Call Our Garage
                </a>
                <a className="hero-button hero-button-secondary" href="#services">
                  Explore Services
                </a>
                <a
                  className="hero-button hero-button-tertiary"
                  href="https://maps.app.goo.gl/76vomzKr5gJKnYV99"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Directions
                </a>
              </div>

              <p className="hero-meta">
                <span className="meta-rule" aria-hidden="true" />
                DYNAMIC CAR WORLD <span aria-hidden="true">/</span> PAITHAN, MAHARASHTRA
              </p>
            </div>
          </div>
          <div className="hero-welcome">
            <div className="container hero-welcome-inner">
              <span className="welcome-label">आपले स्वागत आहे</span>
              <p lang="mr">तुमच्या गाडीची काळजी, आमची जबाबदारी!</p>
              <span className="welcome-location">PAITHAN · MAHARASHTRA</span>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">What we work on</p>
              <h2>Services for your car, all in one place.</h2>
              <p className="section-intro">
                Call to discuss your vehicle and arrange an appointment for the service you need.
              </p>
            </div>

            <div className="services-grid">
              {serviceGroups.map((group, index) => (
                <article className="service-group" key={group.title}>
                  <div className="service-title">
                    <span className="service-number" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3>{group.title}</h3>
                  </div>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container about-grid">
            <div className="about-copy">
              <p className="eyebrow">Your local workshop</p>
              <h2>Practical car care, close to home.</h2>
              <p>
                Dynamic Car World provides automotive repair, maintenance, diagnostics,
                and bodywork services in the Paithan area.
              </p>
              <p>
                From routine upkeep to workshop repairs, contact the garage to talk through
                what your vehicle needs and arrange a visit.
              </p>
            </div>

            <figure className="about-photo">
              <img
                src="/images/garage/image2.jpg"
                alt="Car with front body panels removed and parts set aside for repair"
                loading="lazy"
              />
              <figcaption>
                <span>IN THE WORKSHOP</span>
                Bodywork and repairs in progress
              </figcaption>
            </figure>
          </div>
        </section>

        <section id="gallery" className="section gallery">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Garage work</p>
              <h2>Real work from the workshop</h2>
            </div>

            <div className="gallery-grid">
              {galleryItems.map((item) => (
                <figure className="gallery-item" key={item.src}>
                  <img src={item.src} alt={item.alt} loading="lazy" />
                  <figcaption>{item.label}</figcaption>
                </figure>
              ))}
              <aside className="gallery-callout" aria-label="Call the garage">
                <p className="eyebrow">Dynamic Car World · Paithan</p>
                <h3>Need help with your vehicle?</h3>
                <p>Call to discuss the repair and arrange a visit.</p>
                <a href="tel:09075679342">
                  Call 09075679342 <span aria-hidden="true">→</span>
                </a>
              </aside>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Contact &amp; Location</p>
              <h2>Visit or call Dynamic Car World</h2>

              <address>
                <p className="contact-business">DYNAMIC CAR WORLD</p>
                <p>
                  <a
                    href="https://maps.app.goo.gl/76vomzKr5gJKnYV99"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Pawan Ganpati Road, near Paithan, Pairhan, Paithan, Maharashtra
                    431107.
                  </a>
                </p>
              </address>

              <ul className="contact-list">
                <li>
                  <a href="tel:09075679342">09075679342</a>
                </li>
                <li>
                  <a
                    href="https://maps.app.goo.gl/76vomzKr5gJKnYV99"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </li>
                <li>Listed hours: Open 24 hours.</li>
                <li>
                  On-site services available — contact the garage to confirm availability
                  and arrange an appointment.
                </li>
                <li>
                  Accepted payment methods: Credit cards, Debit cards, Google Pay, NFC
                  mobile payments
                </li>
              </ul>
            </div>

            <div className="contact-card">
              <p>Need a quick check on your vehicle?</p>
              <a className="hero-button hero-button-primary" href="tel:09075679342">
                Call Our Garage
              </a>
              <a
                className="hero-button hero-button-secondary"
                href="https://maps.app.goo.gl/76vomzKr5gJKnYV99"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <p>DYNAMIC CAR WORLD</p>
          <p>Paithan, Maharashtra</p>
        </div>
      </footer>

      <a className="floating-call" href="tel:09075679342" aria-label="Call Dynamic Car World">
        <span aria-hidden="true">☎</span> Call Now
      </a>
    </div>
  )
}

export default App
