import PhoneMockup from "../components/PhoneMockup";

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-canvas">
        <header className="topbar">
          <a className="brand" href="#">
            <span className="olive-icon" aria-hidden="true">
              O
            </span>
            <span className="olive-word">Olive</span>
          </a>

          <nav className="menu">
            <a href="#">Solutions</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Blog</a>
            <a href="#">Restaurants</a>
            <a href="#">Food</a>
          </nav>

          <div className="right-actions">
            <a className="signin" href="#">
              Sign in
            </a>
            <a className="pill-btn" href="#">
              Get Olive
            </a>
          </div>
        </header>

        <div className="hero-copy">
          <div className="social-proof">
            <span className="avatars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
            Trusted by thousands of healthy families
          </div>
          <h1>The Safest Way to Shop for Groceries</h1>
          <p>
            Use the Olive Food Scanner App to Instantly Eliminate Harmful Ingredients from Your
            Family&apos;s Diet and Get Expert-Backed Food Insights
          </p>
          <a className="download-btn" href="#">
            Download for iOS
          </a>
        </div>

        <div className="mockup-stage">
          <div className="bg-rail" aria-hidden="true">
            <div className="rail-row rail-left">
              <span>Organic Bagels</span>
              <span>Cacao Nectar Bar</span>
              <span>Sourlittles</span>
              <span>Late July Chips</span>
              <span>San Pellegrino Water</span>
              <span>Fig and Olive Crackers</span>
            </div>
            <div className="rail-row rail-left clone">
              <span>Organic Bagels</span>
              <span>Cacao Nectar Bar</span>
              <span>Sourlittles</span>
              <span>Late July Chips</span>
              <span>San Pellegrino Water</span>
              <span>Fig and Olive Crackers</span>
            </div>
            <div className="rail-row rail-right">
              <span>Seed Oil Free</span>
              <span>No Added Colors</span>
              <span>Low PFAS</span>
              <span>Expert Validated</span>
              <span>Ingredient Scanner</span>
              <span>Safe to Consume</span>
            </div>
            <div className="rail-row rail-right clone">
              <span>Seed Oil Free</span>
              <span>No Added Colors</span>
              <span>Low PFAS</span>
              <span>Expert Validated</span>
              <span>Ingredient Scanner</span>
              <span>Safe to Consume</span>
            </div>
          </div>
          <div className="side-card left" aria-hidden="true"></div>
          <PhoneMockup />
          <div className="side-card right" aria-hidden="true"></div>
        </div>
      </section>
    </main>
  );
}
