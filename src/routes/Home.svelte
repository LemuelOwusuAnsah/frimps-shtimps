<script>
  import { onMount } from 'svelte'

  const pours = [
    {
      name: 'The Belvedere Pale',
      notes: 'citrus · crisp · 4.2%',
      img: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800&h=600&fit=crop&auto=format&q=80',
      tag: 'House'
    },
    {
      name: 'Shtimps Amber',
      notes: 'toffee · malty · 4.6%',
      img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&h=600&fit=crop&auto=format&q=80',
      tag: 'Regular'
    },
    {
      name: 'Midnight Stout',
      notes: 'coffee · chocolate · 5.0%',
      img: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=800&h=600&fit=crop&auto=format&q=80',
      tag: 'Guest'
    }
  ]

  const numbers = [
    { n: '2019', label: 'Since' },
    { n: '6',    label: 'Taps' },
    { n: '40+',  label: 'Seats' },
    { n: '7',    label: 'Days a week' }
  ]

  let visible = false

  onMount(() => {
    setTimeout(() => { visible = true }, 80)
  })
</script>

<section class="hero" class:visible>
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
        <a href="#/menu" class="btn-primary">
          See our menu
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
        <a href="#/visit" class="btn-secondary">Book a table</a>
      </div>

      <div class="hero-stats">
        {#each numbers as s}
          <div class="stat">
            <span class="stat-n">{s.n}</span>
            <span class="stat-l">{s.label}</span>
          </div>
        {/each}
      </div>
    </div>

    <div class="hero-art">
      <div class="hero-art-glow"></div>
      <div class="hero-art-card">
        <img
          src="https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=900&h=900&fit=crop&auto=format&q=80"
          alt="A pint of beer being poured"
        >
        <div class="badge">
          <span class="badge-dot"></span>
          Pouring today
        </div>
      </div>
      <div class="hero-orbit">
        <span>EST. 2019</span>
      </div>
    </div>
  </div>
</section>

<section class="pour">
  <div class="pour-head">
    <h2><span class="dot">·</span> what's pouring</h2>
    <a href="#/menu" class="pour-note">see all →</a>
  </div>

  <div class="pour-grid">
    {#each pours as p, i}
      <article class="pour-card" style="--i:{i}">
        <div class="pour-img">
          <img src={p.img} alt={p.name}>
          <span class="pour-tag">{p.tag}</span>
        </div>
        <h3>{p.name}</h3>
        <p>{p.notes}</p>
      </article>
    {/each}
  </div>

  <div class="pour-cta">
    <a href="#/menu" class="full-menu-link">see the full menu</a>
  </div>
</section>
<style>
  .hero {
    max-width: 72rem;
    margin: 0 auto;
    padding: 3rem 1.5rem 6rem;
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 0.9s cubic-bezier(0.23, 1, 0.32, 1),
                transform 0.9s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .hero.visible { opacity: 1; transform: none; }
  @media (min-width: 768px) {
    .hero { padding-top: 4rem; padding-bottom: 8rem; }
  }

  .hero-inner {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
    align-items: center;
  }
  @media (min-width: 768px) {
    .hero-inner { grid-template-columns: 1.1fr 1fr; }
  }

  .hero-copy { display: flex; flex-direction: column; gap: 1.75rem; }

  .tag {
    display: inline-block;
    align-self: flex-start;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(194, 65, 12, 0.75);
  }

  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: 3.75rem;
    line-height: 1.05;
    font-weight: 500;
    color: var(--text);
    margin: 0;
    letter-spacing: -0.01em;
  }
  .hero-title em { font-style: italic; color: var(--orange-600); }
  @media (min-width: 768px) { .hero-title { font-size: 5rem; } }

  .hero-sub {
    font-size: 1.125rem;
    color: var(--text-soft);
    max-width: 30rem;
    font-weight: 300;
    line-height: 1.7;
    margin: 0;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 0.5rem;
  }

  .btn-primary,
  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    letter-spacing: 0.025em;
    padding: 0.9rem 1.75rem;
    border-radius: 9999px;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .btn-primary {
    background: var(--orange-600);
    color: #fff7ed;
    border: 1px solid var(--orange-600);
  }
  .btn-primary:hover {
    background: var(--orange-700);
    transform: translateY(-2px);
    box-shadow: 0 12px 24px -10px rgba(234, 88, 12, 0.5);
  }
  .btn-primary svg {
    width: 1rem; height: 1rem;
    stroke: currentColor; fill: none;
    stroke-width: 2; stroke-linecap: round; stroke-linejoin: round;
    transition: transform 0.3s ease;
  }
  .btn-primary:hover svg { transform: translateX(3px); }

  .btn-secondary {
    background: var(--card-soft);
    color: var(--orange-600);
    border: 1px solid var(--border);
  }
  .btn-secondary:hover {
    border-color: var(--orange-500);
    transform: translateY(-2px);
  }

  .hero-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border-soft);
    max-width: 28rem;
  }
  .stat { display: flex; flex-direction: column; gap: 0.15rem; }
  .stat-n {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    color: var(--text);
    font-weight: 500;
  }
  .stat-l {
    font-size: 0.7rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--text-mute);
  }

  .hero-art { position: relative; }
  .hero-art-glow {
    position: absolute; inset: -1rem;
    background: linear-gradient(to top right,
      rgba(251, 146, 60, 0.25),
      rgba(252, 211, 77, 0.1));
    border-radius: 2.5rem;
    filter: blur(40px);
  }
  .hero-art-card {
    position: relative;
    background: var(--card);
    backdrop-filter: blur(4px);
    border-radius: 1.5rem;
    padding: 1rem;
    border: 1px solid var(--border);
    box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.25);
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .hero-art-card:hover { transform: translateY(-6px) scale(1.01); }
  .hero-art-card img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    border-radius: 1rem;
    display: block;
  }

  .badge {
    position: absolute;
    top: 1.75rem;
    left: 1.75rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    padding: 0.4rem 0.8rem;
    border-radius: 9999px;
    background: rgba(20, 12, 8, 0.75);
    color: #fff7ed;
    backdrop-filter: blur(6px);
  }
  .badge-dot {
    width: 0.5rem; height: 0.5rem;
    border-radius: 50%;
    background: #4ade80;
    box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.25);
    animation: pulse 2s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50%      { transform: scale(1.15); opacity: 0.8; }
  }

  .hero-orbit {
    position: absolute;
    bottom: -1rem;
    right: -1rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background: var(--orange-600);
    color: #fff7ed;
    display: grid;
    place-items: center;
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    font-weight: 500;
    box-shadow: 0 12px 24px -8px rgba(234, 88, 12, 0.5);
    animation: float 4s ease-in-out infinite;
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-8px); }
  }
  @media (max-width: 767px) { .hero-orbit { display: none; } }

  .pour {
    max-width: 72rem;
    margin: 0 auto;
    padding: 0 1.5rem 7rem;
  }

  .pour-head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 3rem;
  }
  .pour-head h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.25rem;
    color: var(--text);
    margin: 0;
  }
  .dot { color: var(--orange-600); }
  @media (min-width: 768px) { .pour-head h2 { font-size: 3rem; } }

  .pour-note {
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--orange-600);
    text-decoration: none;
    transition: letter-spacing 0.3s ease;
  }
  .pour-note:hover { letter-spacing: 0.15em; }

  .pour-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  @media (min-width: 768px) { .pour-grid { grid-template-columns: repeat(3, 1fr); } }

  .pour-card {
    background: var(--card);
    backdrop-filter: blur(4px);
    border-radius: 1.5rem;
    padding: 1.25rem;
    border: 1px solid var(--border);
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1),
                box-shadow 0.5s ease,
                border-color 0.3s ease;
    animation: rise 0.7s cubic-bezier(0.23, 1, 0.32, 1) backwards;
    animation-delay: calc(var(--i) * 90ms);
  }
  @keyframes rise {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: none; }
  }
  .pour-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 40px -14px rgba(234, 88, 12, 0.25);
    border-color: var(--orange-500);
  }

  .pour-img { position: relative; margin-bottom: 1.25rem; }
  .pour-img img {
    width: 100%;
    height: 14rem;
    object-fit: cover;
    border-radius: 1rem;
    display: block;
    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .pour-card:hover .pour-img img { transform: scale(1.04); }

  .pour-tag {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.3rem 0.7rem;
    border-radius: 9999px;
    background: rgba(20, 12, 8, 0.75);
    color: #fff7ed;
    backdrop-filter: blur(6px);
  }

  .pour-card h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    color: var(--text);
    margin: 0 0 0.35rem;
  }
  .pour-card p {
    color: var(--orange-600);
    font-size: 0.85rem;
    margin: 0;
    opacity: 0.85;
  }

  .pour-cta { margin-top: 3.5rem; text-align: center; }

  .full-menu-link {
    font-family: 'Great Vibes', cursive;
    font-style: italic;
    font-size: 2.25rem;
    line-height: 1;
    color: var(--orange-600);
    text-decoration: none;
    display: inline-block;
    padding-bottom: 0.4rem;
    border-bottom: 1px solid var(--border);
    transition: color 0.35s ease, letter-spacing 0.35s ease;
  }
  .full-menu-link:hover { color: var(--orange-700); letter-spacing: 0.05em; }
  @media (min-width: 768px) { .full-menu-link { font-size: 2.75rem; } }
</style>
