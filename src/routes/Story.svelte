<script>
  import { timeline, values, storyCopy, quote } from '../lib/data/story.js'
</script>

<svelte:head>
  <title>Our Story · Frimps Shtimps</title>
  <meta name="description" content="Family-run since 2019. How a tired corner boozer on Nuxley Road became Belvedere's warmest pub." />
</svelte:head>

<section class="page">
  <div class="head">
    <span class="tag">Our Story</span>
    <h1>A pub with a <em>past</em></h1>
    <p class="sub">Family-run since 2019, and it shows.</p>
  </div>

  <div class="split">
    <div class="copy">
      {#each storyCopy as para}
        <p>{para}</p>
      {/each}

      <blockquote class="quote">
        <p>"{quote.text}"</p>
        <cite>— {quote.cite}</cite>
      </blockquote>
    </div>

    <div class="art">
      <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=900&h=1100&fit=crop&auto=format&q=80" alt="Pub interior">
      <div class="art-stamp">
        <span>EST.</span>
        <strong>2019</strong>
        <span>Belvedere</span>
      </div>
    </div>
  </div>

  <div class="timeline">
    <h2 class="tl-head"><span class="dot">·</span> How we got here</h2>
    <ol class="tl-list">
      {#each timeline as t, i}
        <li class="tl-item" style="--i:{i}">
          <div class="tl-year">{t.year}</div>
          <div class="tl-dot"></div>
          <div class="tl-body">
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </div>
        </li>
      {/each}
    </ol>
  </div>

  <div class="values">
    {#each values as v}
      <div class="value">
        <div class="num">{v.n}</div>
        <h3>{v.h}</h3>
        <p>{v.p}</p>
      </div>
    {/each}
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
    color: rgba(194, 65, 12, 0.75);
    margin-bottom: 1.5rem;
  }
  .head h1 {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    line-height: 1.1;
    font-weight: 500;
    color: var(--text);
    margin: 0 0 1rem;
  }
  .head h1 em { font-style: italic; color: var(--orange-600); }
  @media (min-width: 768px) { .head h1 { font-size: 4.5rem; } }
  .head .sub {
    font-size: 1.125rem;
    color: var(--text-soft);
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
    color: var(--text-soft);
    line-height: 1.75;
    font-weight: 300;
    margin: 0 0 1.25rem;
  }
  .quote {
    margin: 2rem 0 0;
    padding: 1.5rem 0 1.5rem 1.5rem;
    border-left: 3px solid var(--orange-600);
    background: linear-gradient(to right, rgba(251, 146, 60, 0.06), transparent);
    border-radius: 0 0.75rem 0.75rem 0;
  }
  .quote p {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 1.15rem;
    color: var(--text);
    line-height: 1.5;
    margin: 0 0 0.75rem;
  }
  .quote cite {
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--orange-600);
    font-style: normal;
  }
  .art { position: relative; }
  .art img {
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    border-radius: 1.5rem;
    border: 1px solid var(--border);
    box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.25);
    display: block;
    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .art:hover img { transform: translateY(-6px); }
  .art-stamp {
    position: absolute;
    bottom: -1rem;
    right: -1rem;
    width: 6.5rem;
    height: 6.5rem;
    border-radius: 50%;
    background: var(--orange-600);
    color: #fff7ed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.15rem;
    text-align: center;
    box-shadow: 0 12px 24px -8px rgba(234, 88, 12, 0.5);
    animation: float 5s ease-in-out infinite;
  }
  .art-stamp span {
    font-size: 0.6rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    opacity: 0.85;
  }
  .art-stamp strong {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    font-weight: 500;
  }
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-8px); }
  }
  @media (max-width: 767px) { .art-stamp { display: none; } }
  .timeline { margin-bottom: 6rem; }
  .tl-head {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: var(--text);
    margin: 0 0 2.5rem;
  }
  .dot { color: var(--orange-600); }
  @media (min-width: 768px) { .tl-head { font-size: 2.5rem; } }
  .tl-list {
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
  }
  .tl-list::before {
    content: '';
    position: absolute;
    left: 4.75rem;
    top: 0.5rem;
    bottom: 0.5rem;
    width: 1px;
    background: var(--border-soft);
  }
  @media (max-width: 639px) { .tl-list::before { display: none; } }
  .tl-item {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;
    padding: 0 0 2.5rem;
    animation: slide 0.7s cubic-bezier(0.23, 1, 0.32, 1) backwards;
    animation-delay: calc(var(--i) * 120ms);
  }
  @media (min-width: 640px) {
    .tl-item {
      grid-template-columns: 4rem 1.5rem 1fr;
      gap: 1.5rem;
      align-items: start;
      padding: 0 0 2.5rem;
    }
    .tl-item:last-child { padding-bottom: 0; }
  }
  @keyframes slide {
    from { opacity: 0; transform: translateX(-12px); }
    to   { opacity: 1; transform: none; }
  }
  .tl-year {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    color: var(--orange-600);
    font-weight: 500;
  }
  @media (max-width: 639px) {
    .tl-year { margin-bottom: 0.25rem; }
  }
  .tl-dot {
    display: none;
    width: 0.85rem;
    height: 0.85rem;
    border-radius: 50%;
    background: var(--orange-600);
    border: 3px solid var(--bg);
    box-shadow: 0 0 0 1px var(--border);
    margin-top: 0.55rem;
    justify-self: center;
  }
  @media (min-width: 640px) { .tl-dot { display: block; } }
  .tl-body h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.2rem;
    color: var(--text);
    margin: 0 0 0.35rem;
  }
  .tl-body p {
    font-size: 0.95rem;
    color: var(--text-soft);
    line-height: 1.6;
    font-weight: 300;
    margin: 0;
  }
  .values {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  @media (min-width: 768px) { .values { grid-template-columns: repeat(3, 1fr); } }
  .value {
    background: var(--card);
    backdrop-filter: blur(4px);
    border: 1px solid var(--border);
    border-radius: 1.5rem;
    padding: 2rem;
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1),
                box-shadow 0.4s ease,
                border-color 0.3s ease;
  }
  .value:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px -14px rgba(234, 88, 12, 0.2);
    border-color: var(--orange-500);
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
    color: var(--text);
    margin: 0 0 0.5rem;
  }
  .value p {
    font-size: 0.9375rem;
    color: var(--text-soft);
    line-height: 1.6;
    font-weight: 300;
    margin: 0;
  }
</style>