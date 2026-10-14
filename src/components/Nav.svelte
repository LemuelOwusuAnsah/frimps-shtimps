<script>
  import { onMount } from 'svelte'

  let open = false
  let path = window.location.hash.replace(/^#/, '') || '/'
  let dark = false
  let scrolled = false

  onMount(() => {
    dark = localStorage.getItem('theme') === 'dark'
    document.body.classList.toggle('dark', dark)

    const onHash = () => {
      path = window.location.hash.replace(/^#/, '') || '/'
      open = false
    }
    const onScroll = () => { scrolled = window.scrollY > 12 }
    const onKey = (e) => { if (e.key === 'Escape') open = false }

    window.addEventListener('hashchange', onHash)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)

    return () => {
      window.removeEventListener('hashchange', onHash)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
    }
  })

  function toggle() { open = !open }
  function close() { open = false }

  function toggleTheme() {
    dark = !dark
    document.body.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  const links = [
    { href: '#/',      route: '/',      label: 'Home' },
    { href: '#/story', route: '/story', label: 'Our Story' },
    { href: '#/menu',  route: '/menu',  label: 'Menu' },
    { href: '#/visit', route: '/visit', label: 'Visit' },
  ]
</script>

<a class="skip" href="#main">Skip to content</a>

<header class="nav" class:scrolled>
  <div class="nav-inner">
    <a href="#/" class="brand" on:click={close} aria-label="Frimps Shtimps home">
      <span class="brand-mark">FS</span>
      <span class="brand-text">Frimps Shtimps</span>
    </a>

    <nav class="links" aria-label="Primary">
      {#each links as l}
        <a href={l.href} class:active={path === l.route}>{l.label}</a>
      {/each}
    </nav>

    <div class="actions">
      <div class="pill">Belvedere</div>

      <button
        class="theme-toggle"
        on:click={toggleTheme}
        aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-pressed={dark}
      >
        <span class="icon" class:flip={dark}>
          {#if dark}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4"/>
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
            </svg>
          {:else}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          {/if}
        </span>
      </button>

      <button
        class="hamburger"
        class:active={open}
        on:click={toggle}
        aria-label="Toggle navigation"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>

  <div id="mobile-menu" class="mobile" class:open aria-hidden={!open}>
    {#each links as l}
      <a href={l.href} class:active={path === l.route} on:click={close} tabindex={open ? 0 : -1}>
        {l.label}
        <svg class="arrow" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 6l6 6-6 6"/>
        </svg>
      </a>
    {/each}
  </div>
</header>

<style>
  .skip {
    position: absolute;
    left: -9999px;
    top: 0;
    padding: 0.75rem 1.25rem;
    background: var(--orange-600);
    color: #fff7ed;
    border-radius: 0 0 0.75rem 0;
    font-size: 0.875rem;
    z-index: 100;
  }
  .skip:focus { left: 0; }

  .nav {
    position: sticky;
    top: 0;
    z-index: 50;
    max-width: 72rem;
    margin: 0 auto;
    padding: 1.25rem 1.5rem;
    transition: padding 0.3s ease, backdrop-filter 0.3s ease, background 0.3s ease;
  }
  .nav.scrolled {
    padding: 0.75rem 1.5rem;
    backdrop-filter: blur(12px);
    background: color-mix(in srgb, var(--bg) 80%, transparent);
    border-bottom: 1px solid var(--border-soft);
  }

  .nav-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    color: var(--text);
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
    transition: transform 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .brand:hover .brand-mark { transform: rotate(-6deg) scale(1.05); }

  .brand-text {
    font-family: 'Playfair Display', serif;
    font-size: 1.35rem;
    letter-spacing: 0.02em;
  }

  .links { display: none; gap: 2.25rem; }
  @media (min-width: 768px) { .links { display: flex; } }

  .links a {
    position: relative;
    font-size: 0.875rem;
    font-weight: 300;
    letter-spacing: 0.05em;
    color: var(--text-soft);
    text-decoration: none;
    padding: 0.25rem 0;
    transition: color 0.3s ease;
  }
  .links a:hover { color: var(--orange-600); }
  .links a::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 1.5px;
    bottom: -2px;
    left: 0;
    background: var(--orange-600);
    transition: width 0.3s ease;
  }
  .links a:hover::after,
  .links a.active::after { width: 100%; }
  .links a.active { color: var(--text); }

  .actions { display: flex; align-items: center; gap: 0.5rem; }

  .pill {
    display: none;
    font-size: 0.8rem;
    color: rgba(194, 65, 12, 0.75);
    border: 1px solid var(--border);
    padding: 0.35rem 0.9rem;
    border-radius: 9999px;
    background: var(--card-soft);
    backdrop-filter: blur(4px);
  }
  @media (min-width: 1024px) { .pill { display: block; } }

  .theme-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.4rem;
    height: 2.4rem;
    border-radius: 9999px;
    border: 1px solid var(--border);
    background: var(--card-soft);
    color: var(--orange-600);
    cursor: pointer;
    backdrop-filter: blur(4px);
    transition: border-color 0.3s ease, background 0.3s ease, transform 0.3s ease;
  }
  .theme-toggle:hover {
    border-color: var(--orange-500);
    transform: scale(1.06);
  }
  .theme-toggle:focus-visible,
  .hamburger:focus-visible,
  .links a:focus-visible,
  .mobile a:focus-visible {
    outline: 2px solid var(--orange-500);
    outline-offset: 3px;
    border-radius: 0.4rem;
  }

  .icon {
    display: inline-flex;
    width: 1.1rem;
    height: 1.1rem;
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .icon.flip { transform: rotate(180deg); }
  .icon svg {
    width: 100%;
    height: 100%;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .hamburger {
    background: var(--card-soft);
    border: 1px solid var(--border);
    border-radius: 0.75rem;
    padding: 0.55rem 0.7rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 5px;
    backdrop-filter: blur(4px);
    transition: border-color 0.3s ease, background 0.3s ease;
  }
  .hamburger:hover { border-color: var(--orange-500); }
  @media (min-width: 768px) { .hamburger { display: none; } }

  .hamburger span {
    display: block;
    width: 20px;
    height: 2px;
    background: var(--orange-600);
    border-radius: 2px;
    transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.25s ease;
  }
  .hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .hamburger.active span:nth-child(2) { opacity: 0; }
  .hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  .mobile {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.45s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s ease, margin 0.3s ease;
    margin-top: 0;
  }
  .mobile.open { max-height: 400px; opacity: 1; margin-top: 1rem; }
  @media (min-width: 768px) { .mobile { display: none; } }

  .mobile a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.95rem 0.25rem;
    font-size: 0.95rem;
    letter-spacing: 0.05em;
    color: var(--text-soft);
    text-decoration: none;
    border-bottom: 1px solid var(--border-soft);
    transition: color 0.3s ease, padding-left 0.3s ease;
  }
  .mobile a:last-child { border-bottom: none; }
  .mobile a:hover,
  .mobile a.active { color: var(--orange-600); padding-left: 0.5rem; }

  .arrow {
    width: 1rem;
    height: 1rem;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    opacity: 0.5;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  .mobile a:hover .arrow { transform: translateX(4px); opacity: 1; }
</style>