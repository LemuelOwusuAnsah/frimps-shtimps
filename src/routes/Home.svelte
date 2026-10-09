<section class="hero">
  <div class="hero-inner">
    <div class="hero-copy">
      <span class="tag">Cold pints · Warm welcomes</span>
      <h1 class="hero-title">
        Frimps<br>
        <em>Shtimps</em>
      </h1>
      <p class="hero-sub">
        A proper Belvedere pub with a bright face and an even brighter pour.
        Come for the pints, stay for the company.
      </p>
      <div class="hero-actions">
        <a href="#/menu" class="btn-primary">See our menu</a>
        <a href="#/visit" class="btn-secondary">Book a table</a>
      </div>
    </div>

    <div class="hero-art">
      <div class="hero-art-glow"></div>
      <div class="hero-art-card">
        <img
          src="https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=800&h=800&fit=crop&auto=format&q=80"
          alt="A pint of beer being poured"
        >
      </div>
    </div>
  </div>
</section>

<section class="pour">
  <div class="pour-head">
    <h2><span class="dot">·</span> what's pouring</h2>
    <span class="pour-note">frimps selection</span>
  </div>

  <div class="pour-grid">
    <article class="pour-card">
      <img src="https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&h=400&fit=crop&auto=format&q=80" alt="Pale ale">
      <h3>The Belvedere Pale</h3>
      <p>citrus · crisp · 4.2%</p>
    </article>

    <article class="pour-card">
      <img src="https://images.unsplash.com/photo-1608270586620-248524c67de9?w=600&h=400&fit=crop&auto=format&q=80" alt="Amber ale">
      <h3>Shtimps Amber</h3>
      <p>toffee · malty · 4.6%</p>
    </article>

    <article class="pour-card">
      <img src="https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=600&h=400&fit=crop&auto=format&q=80" alt="Stout">
      <h3>Midnight Stout</h3>
      <p>coffee · chocolate · 5.0%</p>
    </article>
  </div>

  <div class="pour-cta">
    <a href="#/menu" class="full-menu-link">see the full menu</a>
  </div>
</section>

<style>
  .hero { max-width: 72rem; margin: 0 auto; padding: 3rem 1.5rem 6rem; }
  .hero-inner { display: grid; grid-template-columns: 1fr; gap: 4rem; align-items: center; }
  @media (min-width: 768px) {
    .hero { padding-top: 4rem; padding-bottom: 8rem; }
    .hero-inner { grid-template-columns: 1fr 1fr; }
  }
  .hero-copy { display: flex; flex-direction: column; gap: 2rem; }
  .tag {
    display: inline-block;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(194, 65, 12, 0.7);
    margin-bottom: 1.5rem;
  }
  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 3.75rem; line-height: 1.1; font-weight: 500;
    color: #292524; margin: 0;
  }
  .hero-title em { font-style: italic; color: #ea580c; }
  @media (min-width: 768px) { .hero-title { font-size: 4.5rem; } }
  .hero-sub {
    font-size: 1.125rem; color: #57534e;
    max-width: 28rem; font-weight: 300; line-height: 1.625; margin: 0;
  }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 1.25rem; padding-top: 1rem; }
  .btn-primary {
    background: rgba(234, 88, 12, 0.9);
    color: #fff7ed; font-size: 0.875rem; letter-spacing: 0.025em;
    padding: 0.875rem 2rem; border-radius: 9999px;
    border: 1px solid rgba(234, 88, 12, 0.4);
    transition: background 0.3s ease; text-decoration: none;
  }
  .btn-primary:hover { background: rgba(194, 65, 12, 0.95); }
  .btn-secondary {
    background: rgba(255, 255, 255, 0.7);
    color: rgba(194, 65, 12, 0.7); font-size: 0.875rem; letter-spacing: 0.025em;
    padding: 0.875rem 2rem; border-radius: 9999px;
    border: 1px solid rgba(249, 115, 22, 0.4);
    transition: border-color 0.3s ease, color 0.3s ease;
    text-decoration: none;
  }
  .btn-secondary:hover { border-color: rgba(249, 115, 22, 0.7); color: #c2410c; }
  .hero-art { position: relative; }
  .hero-art-glow {
    position: absolute; inset: -1rem;
    background: linear-gradient(to top right, rgba(251, 146, 60, 0.2), rgba(252, 211, 77, 0.1));
    border-radius: 2.5rem; filter: blur(40px);
  }
  .hero-art-card {
    position: relative;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(4px);
    border-radius: 1.5rem; padding: 1rem;
    border: 1px solid rgba(234, 88, 12, 0.4);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.12);
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .hero-art-card:hover { transform: translateY(-4px); }
  .hero-art-card img {
    width: 100%; aspect-ratio: 1 / 1; object-fit: cover;
    border-radius: 1rem; display: block;
  }
  .pour { max-width: 72rem; margin: 0 auto; padding: 0 1.5rem 7rem; }
  .pour-head { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 3rem; }
  .pour-head h2 { font-family: 'Playfair Display', serif; font-size: 2.25rem; color: #292524; margin: 0; }
  .dot { color: #ea580c; }
  @media (min-width: 768px) { .pour-head h2 { font-size: 3rem; } }
  .pour-note { font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(249, 115, 22, 0.6); }
  .pour-grid { display: grid; grid-template-columns: 1fr; gap: 2rem; }
  @media (min-width: 768px) { .pour-grid { grid-template-columns: repeat(3, 1fr); } }
  .pour-card {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(4px);
    border-radius: 1.5rem; padding: 1.5rem;
    border: 1px solid rgba(234, 88, 12, 0.4);
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.4s ease;
  }
  .pour-card:hover { transform: translateY(-4px); box-shadow: 0 20px 30px -10px rgba(234, 88, 12, 0.15); }
  .pour-card img {
    width: 100%; height: 12rem; object-fit: cover;
    border-radius: 1rem; margin-bottom: 1.5rem;
    border: 1px solid rgba(251, 146, 60, 0.3); display: block;
  }
  .pour-card h3 { font-family: 'Playfair Display', serif; font-size: 1.25rem; color: #292524; margin: 0 0 0.5rem; }
  .pour-card p { color: rgba(249, 115, 22, 0.6); font-size: 0.875rem; margin: 0; }
  .pour-cta { margin-top: 3rem; text-align: center; }
  .full-menu-link {
    font-family: 'Great Vibes', cursive; font-style: italic;
    font-size: 2.25rem; line-height: 1;
    color: rgba(234, 88, 12, 0.85); text-decoration: none;
    display: inline-block; padding-bottom: 0.4rem;
    border-bottom: 1px solid rgba(251, 146, 60, 0.5);
    transition: color 0.35s ease, letter-spacing 0.35s ease;
  }
  .full-menu-link:hover { color: #c2410c; letter-spacing: 0.05em; }
  @media (min-width: 768px) { .full-menu-link { font-size: 2.75rem; } }
</style>
