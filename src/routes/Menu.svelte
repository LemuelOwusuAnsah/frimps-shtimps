<script>
  import { menu, categories } from '../lib/data/menu.js'
  import { formatPrice } from '../lib/utils/format.js'
  import Section from '../lib/components/Section.svelte'
  import Card from '../lib/components/Card.svelte'
  import Badge from '../lib/components/Badge.svelte'
  import Image from '../lib/components/Image.svelte'

  let active = 'all'

  $: filtered = active === 'all' ? menu : menu.filter(i => i.cat === active)
</script>

<svelte:head>
  <title>Menu · Frimps Shtimps</title>
  <meta name="description" content="Beer, wine, spirits, and a kitchen that doesn't cut corners. The full Frimps Shtimps menu — Belvedere." />
</svelte:head>

<Section
  tag="Full Menu"
  title="What's "
  titleEm="pouring"
  subtitle="Beer, wine, spirits, and a kitchen that doesn't cut corners."
  center
>
  <div class="tabs" role="tablist">
    {#each categories as c}
      <button
        class="tab"
        class:active={active === c.id}
        on:click={() => active = c.id}
        role="tab"
        aria-selected={active === c.id}
      >
        {c.label}
      </button>
    {/each}
  </div>

  <div class="grid">
    {#each filtered as item, i (item.name)}
      <Card index={i}>
        <div class="card-img">
          <Image src={item.img} alt={item.name} ratio="16/9" rounded="0" zoom />
          {#if item.badge}
            <div class="badge-wrap">
              <Badge>{item.badge}</Badge>
            </div>
          {/if}
        </div>
        <div class="card-body">
          <div class="card-row">
            <h3>{item.name}</h3>
            <span class="price">{formatPrice(item.price)}</span>
          </div>
          <p>{item.notes}</p>
        </div>
      </Card>
    {/each}
  </div>

  {#if filtered.length === 0}
    <p class="empty">Nothing here yet — check back soon.</p>
  {/if}
</Section>

<style>
  .tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 3rem;
  }

  .tab {
    font-family: inherit;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
    padding: 0.6rem 1.25rem;
    border-radius: 9999px;
    border: 1px solid var(--border);
    background: var(--card-soft);
    color: var(--text-soft);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    backdrop-filter: blur(4px);
  }
  .tab:hover { border-color: var(--orange-500); color: var(--orange-600); }
  .tab.active {
    background: var(--orange-600);
    color: #fff7ed;
    border-color: var(--orange-600);
    box-shadow: 0 8px 20px -8px rgba(234, 88, 12, 0.5);
  }
  .tab:focus-visible {
    outline: 2px solid var(--orange-500);
    outline-offset: 3px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  @media (min-width: 640px) { .grid { grid-template-columns: repeat(2, 1fr); } }
  @media (min-width: 1024px) { .grid { grid-template-columns: repeat(3, 1fr); } }

  .card-img { position: relative; }
  .badge-wrap {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
  }

  .card-body { padding: 1.25rem 1.5rem 1.5rem; }
  .card-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    margin-bottom: 0.35rem;
  }
  .card-row h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.15rem;
    color: var(--text);
    margin: 0;
  }
  .price {
    font-size: 0.9rem;
    color: var(--orange-600);
    font-weight: 500;
    white-space: nowrap;
  }
  .card-body p {
    font-size: 0.85rem;
    color: var(--text-mute);
    line-height: 1.5;
    margin: 0;
  }

  .empty {
    text-align: center;
    color: var(--text-mute);
    font-size: 0.95rem;
    padding: 3rem 0;
  }
</style>
