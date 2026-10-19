<script>
  export let tag = ''
  export let title = ''
  export let titleEm = ''
  export let subtitle = ''
  export let center = false
</script>

<section class="section" class:center>
  {#if tag || title || subtitle}
    <header class="head">
      {#if tag}
        <span class="tag">{tag}</span>
      {/if}
      {#if title}
        <h1 class="title">
          {title}
          {#if titleEm}<em>{titleEm}</em>{/if}
        </h1>
      {/if}
      {#if subtitle}
        <p class="sub">{subtitle}</p>
      {/if}
    </header>
  {/if}

  <slot />
</section>

<style>
  .section {
    max-width: 72rem;
    margin: 0 auto;
    padding: 3rem 1.5rem 7rem;
  }

  .head { margin-bottom: 3rem; }
  .center .head { text-align: center; }

  .tag {
    display: inline-block;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(194, 65, 12, 0.75);
    margin-bottom: 1.5rem;
  }

  .title {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    line-height: 1.1;
    font-weight: 500;
    color: var(--text);
    margin: 0 0 1rem;
  }
  .title em { font-style: italic; color: var(--orange-600); }

  @media (min-width: 768px) {
    .title { font-size: 4.5rem; }
  }

  .sub {
    font-size: 1.125rem;
    color: var(--text-soft);
    max-width: 28rem;
    font-weight: 300;
    line-height: 1.65;
    margin: 0;
  }
  .center .sub { margin: 0 auto; }
</style>
