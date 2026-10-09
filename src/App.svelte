<script>
  import Nav from './components/Nav.svelte'
  import Footer from './components/Footer.svelte'
  import Home from './routes/Home.svelte'
  import Menu from './routes/Menu.svelte'
  import Story from './routes/Story.svelte'
  import Visit from './routes/Visit.svelte'

  const routes = { '/': Home, '/menu': Menu, '/story': Story, '/visit': Visit }

  function current() {
    const h = window.location.hash.replace(/^#/, '') || '/'
    return routes[h] || Home
  }

  let Page = current()

  window.addEventListener('hashchange', () => {
    Page = current()
    window.scrollTo(0, 0)
  })
</script>

<Nav />
<main>
  <svelte:component this={Page} />
</main>
<Footer />
