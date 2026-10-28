<script>
  import Section from '../lib/components/Section.svelte'
  import Button from '../lib/components/Button.svelte'
</script>

<svelte:head>
  <title>Page not found · Frimps Shtimps</title>
  <meta name="description" content="That page isn't on the menu. Pull up a stool instead." />
  <meta name="robots" content="noindex" />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Frimps Shtimps" />
  <meta property="og:title" content="Page not found · Frimps Shtimps" />
  <meta property="og:description" content="That page isn't on the menu. Pull up a stool instead." />
  <meta property="og:image" content="https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=1200&h=630&fit=crop&auto=format&q=80" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Page not found · Frimps Shtimps" />
  <meta name="twitter:description" content="That page isn't on the menu. Pull up a stool instead." />
  <meta name="twitter:image" content="https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=1200&h=630&fit=crop&auto=format&q=80" />
</svelte:head>

<Section
  tag="Lost"
  title="Wrong "
  titleEm="door"
  subtitle="That page isn't on the menu. Pull up a stool instead."
  center
>
  <div class="actions">
    <Button href="#/" variant="primary">Back to home</Button>
    <Button href="#/menu" variant="secondary">See the menu</Button>
  </div>
</Section>

<style>
  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    justify-content: center;
  }
</style>
