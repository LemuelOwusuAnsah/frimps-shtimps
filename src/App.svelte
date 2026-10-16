<script>
  import Nav from './components/Nav.svelte'
  import Footer from './components/Footer.svelte'
  import Home from './routes/Home.svelte'
  import Menu from './routes/Menu.svelte'
  import Story from './routes/Story.svelte'
  import Visit from './routes/Visit.svelte'
  import NotFound from './routes/NotFound.svelte'

  const routes = { '/': Home, '/menu': Menu, '/story': Story, '/visit': Visit }

  function current() {
    const h = window.location.hash.replace(/^#/, '') || '/'
    return routes[h] || NotFound
  }

  let Page = current()

  window.addEventListener('hashchange', () => {
    Page = current()
    window.scrollTo(0, 0)
  })
</script>

<Nav />
<main id="main">
  <svelte:boundary>
    {#snippet failed(error, reset)}
      <section class="crash">
        <h1>Something spilled</h1>
        <p>That page hit an error. It's been logged — try again.</p>
        <button on:click={reset}>Reload this page</button>
      </section>
    {/snippet}

    <svelte:component this={Page} />
  </svelte:boundary>
</main>
<Footer />

<style>
  .crash {
    max-width: 32rem;
    margin: 6rem auto;
    padding: 2.5rem;
    text-align: center;
    background: var(--card);
    border: 1px solid var(--border);
    border-radius: 1.5rem;
    backdrop-filter: blur(4px);
  }
  .crash h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    color: var(--text);
    margin: 0 0 0.75rem;
  }
  .crash p {
    color: var(--text-soft);
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0 0 1.75rem;
  }
  .crash button {
    font-family: inherit;
    font-size: 0.875rem;
    letter-spacing: 0.025em;
    padding: 0.8rem 1.75rem;
    border-radius: 9999px;
    background: var(--orange-600);
    color: #fff7ed;
    border: 1px solid var(--orange-600);
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
  }
  .crash button:hover {
    background: var(--orange-700);
    transform: translateY(-2px);
  }
  .crash button:focus-visible {
    outline: 2px solid var(--orange-500);
    outline-offset: 3px;
  }
</style>
