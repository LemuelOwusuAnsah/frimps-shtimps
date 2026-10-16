<script>
  import { menu, categories } from '../lib/data/menu.js'

  let active = 'all'

  $: filtered = active === 'all' ? menu : menu.filter(i => i.cat === active)
</script>

<section class="page">
  <div class="head">
    <span class="tag">Full Menu</span>
    <h1>What's <em>pouring</em></h1>
    <p class="sub">Beer, wine, spirits, and a kitchen that doesn't cut corners.</p>
  </div>

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
      <article class="card" style="--i:{i}">
        <div class="card-img">
          <img src={item.img} alt={item.name}>
          {#if item.badge}
            <span class="badge">{item.badge}</span>
          {/if}
        </div>
        <div class="card-body">
          <div class="card-row">
            <h3>{item.name}</h3>
            <span class="price">£{item.price}</span>
          </div>
          <p>{item.notes}</p>
        </div>
      </article>
    {/each}
  </div>

  {#if filtered.length === 0}
    <p class="empty">Nothing here yet — check back soon.</p>
  {/if}
</section>

<style>
  .page { max-width: 72rem; margin: 0 auto; padding: 3rem 1.5rem 7rem; }

  .head { text-align: center; margin-bottom: 3rem; }
  .tag {
    display: inline-block;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(194, 65, 12, 0.75);
    margin-bottom: 1.5rem;
  }
  .head h1 {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    line-height: 1.1;
    font-weight: 500;
    color: var(--text);
    margin: 0 0 1rem;
  }
  .head h1 em { font-style: italic; color: var(--orange-600); }
  @media (min-width: 768px) { .head h1 { font-size: 4.5rem; } }
  .head .sub {
    font-size: 1.125rem;
    color: var(--text-soft);
    max-width: 28rem;
    margin: 0 auto;
    font-weight: 300;
    line-height: 1.65;
  }

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

  .card {
    background: var(--card);
    backdrop-filter: blur(4px);
    border-radius: 1.5rem;
    border: 1px solid var(--border);
    overflow: hidden;
    transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1),
                box-shadow 0.5s ease,
                border-color 0.3s ease;
    animation: rise 0.6s cubic-bezier(0.23, 1, 0.32, 1) backwards;
    animation-delay: calc(var(--i) * 60ms);
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

  .card-img { position: relative; overflow: hidden; }
  .card-img img {
    width: 100%;
    height: 13rem;
    object-fit: cover;
    display: block;
    transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
  }
  .card:hover .card-img img { transform: scale(1.05); }

  .badge {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.3rem 0.7rem;
    border-radius: 9999px;
    background: rgba(20, 12, 8, 0.75);
    color: #fff7ed;
    backdrop-filter: blur(6px);
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
