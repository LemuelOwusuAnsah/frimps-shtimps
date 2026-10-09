<section class="page">
  <div class="head">
    <span class="tag">Our Story</span>
    <h1>A pub with a <em>past</em></h1>
    <p class="sub">Family-run since 2019, and it shows.</p>
  </div>

  <div class="split">
    <div class="copy">
      <p>
        Frimps Shtimps started life as a small corner boozer on Nuxley Road,
        the kind of place where everyone knows your name before you've
        reached the bar.
      </p>
      <p>
        When we took it over, we made one promise: keep the warmth, but
        brighten the place up. Fresh paint, proper taps, a kitchen that
        actually cares — and the same regulars at the same stools.
      </p>
      <p>
        Six years on, we're still pouring the Belvedere Pale, still
        doing a Sunday roast worth leaving the house for, and still
        saving a seat for whoever walks through the door next.
      </p>
    </div>

    <div class="art">
      <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&h=1000&fit=crop&auto=format&q=80" alt="Pub interior">
    </div>
  </div>

  <div class="values">
    <div class="value">
      <div class="num">01</div>
      <h3>Local first</h3>
      <p>Kentish ales, Kentish produce, Kentish people behind the bar.</p>
    </div>
    <div class="value">
      <div class="num">02</div>
      <h3>Pour it properly</h3>
      <p>Two-pour lagers, settled stouts, and glassware that fits the beer.</p>
    </div>
    <div class="value">
      <div class="num">03</div>
      <h3>Feed you well</h3>
      <p>Nothing frozen, nothing rushed. If it takes longer, it's worth it.</p>
    </div>
  </div>
</section>

<style>
  .page { max-width: 72rem; margin: 0 auto; padding: 3rem 1.5rem 7rem; }

  .head { text-align: center; margin-bottom: 4rem; }
  .tag {
    display: inline-block;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(194, 65, 12, 0.7);
    margin-bottom: 1.5rem;
  }
  .head h1 {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    line-height: 1.1;
    font-weight: 500;
    color: #292524;
    margin: 0 0 1rem;
  }
  .head h1 em { font-style: italic; color: #ea580c; }
  @media (min-width: 768px) { .head h1 { font-size: 4.5rem; } }
  .head .sub {
    font-size: 1.125rem;
    color: #57534e;
    max-width: 28rem;
    margin: 0 auto;
    font-weight: 300;
  }

  .split {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    align-items: center;
    margin-bottom: 6rem;
  }
  @media (min-width: 768px) { .split { grid-template-columns: 1fr 1fr; } }

  .copy p {
    font-size: 1.0625rem;
    color: #57534e;
    line-height: 1.75;
    font-weight: 300;
    margin: 0 0 1.25rem;
  }
  .copy p:last-child { margin-bottom: 0; }

  .art img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: 1.5rem;
    border: 1px solid rgba(234, 88, 12, 0.4);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.12);
    display: block;
  }

  .values {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  @media (min-width: 768px) { .values { grid-template-columns: repeat(3, 1fr); } }

  .value {
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(234, 88, 12, 0.4);
    border-radius: 1.5rem;
    padding: 2rem;
  }
  .num {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: rgba(234, 88, 12, 0.35);
    margin-bottom: 0.75rem;
  }
  .value h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    color: #292524;
    margin: 0 0 0.5rem;
  }
  .value p {
    font-size: 0.9375rem;
    color: #57534e;
    line-height: 1.6;
    font-weight: 300;
    margin: 0;
  }
</style>
