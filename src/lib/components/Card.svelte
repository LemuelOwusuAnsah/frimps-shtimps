<script>
  export let href = null
  export let index = 0
</script>

{#if href}
  <a {href} class="card" style="--i:{index}">
    <slot />
  </a>
{:else}
  <article class="card" style="--i:{index}">
    <slot />
  </article>
{/if}

<style>
  .card {
    display: block;
    background: var(--card);
    backdrop-filter: blur(4px);
    border-radius: 1.5rem;
    border: 1px solid var(--border);
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1),
                box-shadow 0.5s ease,
                border-color 0.3s ease;
    animation: rise 0.6s cubic-bezier(0.23, 1, 0.32, 1) backwards;
    animation-delay: calc(var(--i) * 70ms);
  }

  @keyframes rise {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: none; }
  }

  .card:hover {
    transform: translateY(-6px);
    box-shadow: 0 24px 40px -14px rgba(234, 88, 12, 0.25);
    border-color: var(--orange-500);
  }

  .card:focus-visible {
    outline: 2px solid var(--orange-500);
    outline-offset: 3px;
  }
</style>
