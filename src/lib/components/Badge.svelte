<script>
  export let variant = 'default'
  export let dot = false
</script>

<span class="badge badge-{variant}">
  {#if dot}
    <span class="dot"></span>
  {/if}
  <slot />
</span>

<style>
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.65rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 0.3rem 0.7rem;
    border-radius: 9999px;
    backdrop-filter: blur(6px);
    white-space: nowrap;
  }

  .badge-default {
    background: rgba(20, 12, 8, 0.75);
    color: #fff7ed;
  }

  .badge-live {
    background: rgba(20, 12, 8, 0.75);
    color: #fff7ed;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    padding: 0.4rem 0.8rem;
    text-transform: none;
  }

  .badge-soft {
    background: var(--card-soft);
    color: var(--orange-600);
    border: 1px solid var(--border);
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    padding: 0.35rem 0.9rem;
    text-transform: none;
  }

  .dot {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: #4ade80;
    box-shadow: 0 0 0 3px rgba(74, 222, 128, 0.25);
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50%      { transform: scale(1.15); opacity: 0.8; }
  }
</style>
