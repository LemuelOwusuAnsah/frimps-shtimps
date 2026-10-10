<script>
  import { onMount } from 'svelte'

  let open = false
  let path = window.location.hash.replace(/^#/, '') || '/'
  let dark = false

  onMount(() => {
    dark = localStorage.getItem('theme') === 'dark'
    document.body.classList.toggle('dark', dark)
  })

  function toggle() { open = !open }
  function close() { open = false }

  function toggleTheme() {
    dark = !dark
    document.body.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  window.addEventListener('hashchange', () => {
    path = window.location.hash.replace(/^#/, '') || '/'
    open = false
  })
</script>

<header class="nav">
  <div class="nav-inner">
    <a href="#/" class="brand" on:click={close}>Frimps Shtimps</a>

    <nav class="links">
      <a href="#/" class:active={path === '/'}>Home</a>
      <a href="#/story" class:active={path === '/story'}>Our Story</a>
      <a href="#/menu" class:active={path === '/menu'}>Menu</a>
      <a href="#/visit" class:active={path === '/visit'}>Visit</a>
    </nav>

    <div class="pill">Belvedere</div>

    <button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle dark mode">
      {#if dark}
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
      {:else}
        <svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
      {/if}
    </button>

    <button class="hamburger" class:active={open} on:click={toggle} aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>

  <div class="mobile" class:open>
    <a href="#/" on:click={close}>Home</a>
    <a href="#/story" on:click={close}>Our Story</a>
    <a href="#/menu" on:click={close}>Menu</a>
    <a href="#/visit" on:click={close}>Visit</a>
  </div>
</header>

<style>
  .nav { max-width: 72rem; margin: 0 auto; padding: 2rem 1.5rem; }
  .nav-inner { display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; }

  .brand {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    letter-spacing: 0.025em;
    color: var(--text);
    text-decoration: none;
  }

  .links { display: none; gap: 2.5rem; }
  @media (min-width: 768px) { .links { display: flex; } }

  .links a {
    position: relative;
    font-size: 0.875rem;
    font-weight: 300;
    letter-spacing: 0.05em;
    color: var(--text-soft);
    text-decoration: none;
  }
  .links a::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 1.5px;
    bottom: -4px;
    left: 0;
    background: var(--orange-600);
    transition: width 0.3s ease;
  }
  .links a:hover::after,
  .links a.active::after { width: 100%; }

  .pill {
    display: none;
    font-size: 0.875rem;
    color: rgba(194, 65, 12, 0.4);
    border: 1px solid var(--border);
    padding: 0.375rem 1rem;
    border-radius: 9999px;
    background: var(--card-soft);
    backdrop-filter: blur(4px);
  }
  @media (min-width: 768px) { .pill { display: block; } }

  .hamburger {
    background: var(--card-soft);
    border: 1px solid var(--border);
    border-radius: 0.75rem;
    padding: 0.6rem 0.75rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 5px;
    backdrop-filter: blur(4px);
    transition: border-color 0.3s ease, background 0.3s ease;
    margin-left: 0.5rem;
  }
  .hamburger:hover {
    border-color: var(--orange-500);
  }
  @media (min-width: 768px) { .hamburger { display: none; } }

  .hamburger span {
    display: block;
    width: 22px;
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
    transition: max-height 0.45s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.35s ease;
  }
  .mobile.open { max-height: 320px; opacity: 1; }
  @media (min-width: 768px) { .mobile { display: none; } }

  .mobile a {
    display: block;
    padding: 0.9rem 0;
    font-size: 0.95rem;
    letter-spacing: 0.05em;
    color: var(--text-soft);
    text-decoration: none;
    border-bottom: 1px solid var(--border-soft);
    transition: color 0.3s ease, padding-left 0.3s ease;
  }
  .mobile a:last-child { border-bottom: none; }
  .mobile a:hover { color: var(--orange-600); padding-left: 0.5rem; }
</style>
