<script>
  let year = new Date().getFullYear()

  const explore = [
    { href: '#/',      label: 'Home' },
    { href: '#/story', label: 'Our Story' },
    { href: '#/menu',  label: 'Menu' },
    { href: '#/visit', label: 'Visit' },
  ]

  const socials = [
    { href: 'https://instagram.com', label: 'Instagram', icon: 'instagram' },
    { href: 'https://facebook.com',  label: 'Facebook',  icon: 'facebook' },
    { href: 'https://x.com',         label: 'X',         icon: 'x' },
  ]

  function toTop(e) {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
</script>

<footer class="footer">
  <div class="footer-inner">
    <div class="grid">
      <div class="col brand-col">
        <a href="#/" class="brand">
          <span class="brand-mark">FS</span>
          <span class="brand-text">Frimps Shtimps</span>
        </a>
        <p class="blurb">
          A proper Belvedere pub. Cold pints, warm welcomes, and a kitchen that means it.
        </p>
        <div class="socials">
          {#each socials as s}
            <a href={s.href} class="social" aria-label={s.label} target="_blank" rel="noopener noreferrer">
              {#if s.icon === 'instagram'}
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
                </svg>
              {:else if s.icon === 'facebook'}
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M15 3h-3a5 5 0 0 0-5 5v3H4v4h3v6h4v-6h3l1-4h-4V8a1 1 0 0 1 1-1h3z"/>
                </svg>
              {:else}
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 4l16 16M20 4L4 20"/>
                </svg>
              {/if}
            </a>
          {/each}
        </div>
      </div>

      <div class="col">
        <div class="label">Explore</div>
        <ul class="list">
          {#each explore as l}
            <li><a href={l.href}>{l.label}</a></li>
          {/each}
        </ul>
      </div>

      <div class="col">
        <div class="label">Find us</div>
        <ul class="list plain">
          <li>42 Nuxley Road</li>
          <li>Belvedere, Kent DA17</li>
          <li>01322 000 000</li>
        </ul>
      </div>

      <div class="col">
        <div class="label">Hours</div>
        <ul class="list plain">
          <li><span>Mon–Thu</span> 11am–11pm</li>
          <li><span>Fri–Sat</span> 11am–1am</li>
          <li><span>Sun</span> 12pm–10:30pm</li>
        </ul>
      </div>
    </div>

    <div class="bottom">
      <p class="copy">© {year} Frimps Shtimps · Belvedere · brewed for good company</p>
      <button class="top" on:click={toTop} aria-label="Back to top">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
        Back to top
      </button>
    </div>
  </div>

  <div class="spin" aria-hidden="true">last orders at 11</div>
</footer>

<style>
  .footer {
    border-top: 1px solid var(--border-soft);
    margin-top: 4rem;
  }

  .footer-inner {
    max-width: 72rem;
    margin: 0 auto;
    padding: 3.5rem 1.5rem 2rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    margin-bottom: 3rem;
  }
  @media (min-width: 640px) { .grid { grid-template-columns: 1fr 1fr; } }
  @media (min-width: 960px) { .grid { grid-template-columns: 2fr 1fr 1fr 1fr; } }

  .brand-col { max-width: 22rem; }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    color: var(--text);
    margin-bottom: 1rem;
  }

  .brand-mark {
    display: grid;
    place-items: center;
    width: 2.1rem;
    height: 2.1rem;
    border-radius: 0.6rem;
    background: var(--orange-600);
    color: #fff7ed;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 0.95rem;
    letter-spacing: -0.02em;
    box-shadow: 0 4px 12px rgba(234, 88, 12, 0.35);
  }

  .brand-text {
    font-family: 'Playfair Display', serif;
    font-size: 1.35rem;
    letter-spacing: 0.02em;
  }

  .blurb {
    font-size: 0.875rem;
    color: var(--text-mute);
    line-height: 1.65;
    margin: 0 0 1.5rem;
  }

  .socials { display: flex; gap: 0.6rem; }

  .social {
    display: grid;
    place-items: center;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 0.6rem;
    border: 1px solid var(--border);
    background: var(--card-soft);
    color: var(--orange-600);
    text-decoration: none;
    transition: transform 0.3s ease, border-color 0.3s ease, background 0.3s ease;
  }
  .social:hover {
    transform: translateY(-2px);
    border-color: var(--orange-500);
  }
  .social:focus-visible {
    outline: 2px solid var(--orange-500);
    outline-offset: 3px;
  }
  .social svg {
    width: 1.1rem;
    height: 1.1rem;
    stroke: currentColor;
    fill: none;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .label {
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(194, 65, 12, 0.65);
    margin-bottom: 1.1rem;
    font-weight: 500;
  }

  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
  }

  .list a {
    font-size: 0.9rem;
    color: var(--text-soft);
    text-decoration: none;
    transition: color 0.3s ease, padding-left 0.3s ease;
    display: inline-block;
  }
  .list a:hover { color: var(--orange-600); padding-left: 0.25rem; }
  .list a:focus-visible {
    outline: 2px solid var(--orange-500);
    outline-offset: 3px;
    border-radius: 0.3rem;
  }

  .list.plain li {
    font-size: 0.9rem;
    color: var(--text-soft);
    font-weight: 300;
    line-height: 1.5;
  }
  .list.plain span {
    display: inline-block;
    min-width: 5.5rem;
    color: var(--text-mute);
  }

  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border-soft);
    text-align: center;
  }
  @media (min-width: 640px) {
    .bottom { flex-direction: row; justify-content: space-between; text-align: left; }
  }

  .copy {
    font-size: 0.75rem;
    color: var(--text-mute);
    margin: 0;
  }

  .top {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: inherit;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    color: var(--orange-600);
    background: none;
    border: 1px solid var(--border);
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    cursor: pointer;
    transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
  }
  .top:hover {
    border-color: var(--orange-500);
    transform: translateY(-2px);
  }
  .top:focus-visible {
    outline: 2px solid var(--orange-500);
    outline-offset: 3px;
  }
  .top svg {
    width: 0.9rem;
    height: 0.9rem;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .spin {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    color: rgba(249, 115, 22, 0.5);
    font-size: 0.75rem;
    transform: rotate(90deg);
    transform-origin: bottom right;
    pointer-events: none;
  }
  @media (max-width: 1023px) { .spin { display: none; } }
</style>