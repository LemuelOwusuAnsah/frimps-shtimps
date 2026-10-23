<script>
  import Section from '../lib/components/Section.svelte'
  import Button from '../lib/components/Button.svelte'
</script>

<svelte:head>
  <title>Page not found · Frimps Shtimps</title>
  <meta name="description" content="That page isn't on the menu. Pull up a stool instead." />
  <meta name="robots" content="noindex" />
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
