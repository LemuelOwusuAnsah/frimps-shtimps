<script>
  import { featured } from '../lib/data/menu.js'
  import { stats as numbers } from '../lib/data/story.js'
  import { reveal } from '../lib/motion.js'
  import Button from '../lib/components/Button.svelte'
  import Card from '../lib/components/Card.svelte'
  import Badge from '../lib/components/Badge.svelte'
  import Image from '../lib/components/Image.svelte'

  const vis = reveal(80)
</script>

<svelte:head>
  <title>Frimps Shtimps · Belvedere pub</title>
  <meta name="description" content="A proper Belvedere pub with a bright face and an even brighter pour. Cold pints, warm welcomes, and a kitchen that means it." />
</svelte:head>

<section class="hero" class:visible={vis.visible}>
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
        <Button href="#/menu" variant="primary">
          See our menu
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </Button>
        <Button href="#/visit" variant="secondary">Book a table</Button>
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
        <Image
          src="https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=900&h=900&fit=crop&auto=format&q=80"
          alt="A pint of beer being poured"
          ratio="1/1"
          rounded="1rem"
        />
        <div class="badge-wrap">
          <Badge variant="live" dot>Pouring today</Badge>
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
    {#each featured as p, i}
      <Card index={i}>
        <div class="pour-img">
          <Image src={p.img} alt={p.name} ratio="16/9" rounded="0" zoom />
          <div class="badge-wrap">
            <Badge>{p.badge || p.tag}</Badge>
          </div>
        </div>
        <div class="pour-body">
          <h3>{p.name}</h3>
          <p>{p.notes}</p>
        </div>
      </Card>
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
  .hero-actions :global(.btn-primary svg) {
    width: 1rem;
    height: 1rem;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: transform 0.3s ease;
  }
  .hero-actions :global(.btn-primary:hover svg) {
    transform: translateX(3px);
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
  .badge-wrap {
    position: absolute;
    top: 1.75rem;
    left: 1.75rem;
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
  .pour-img { position: relative; }
  .pour-img .badge-wrap {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
  }
  .pour-body { padding: 1.25rem 1.5rem 1.5rem; }
  .pour-body h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    color: var(--text);
    margin: 0 0 0.35rem;
  }
  .pour-body p {
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
