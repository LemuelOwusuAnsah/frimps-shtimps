<script>
  export let href = null
  export let variant = 'primary'
  export let type = 'button'
  export let disabled = false
  export let full = false

  $: cls = [
    'btn',
    'btn-' + variant,
    full ? 'btn-full' : ''
  ].filter(Boolean).join(' ')
</script>

{#if href}
  <a {href} class={cls}><slot /></a>
{:else}
  <button {type} {disabled} class={cls}><slot /></button>
{/if}

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-family: inherit;
    font-size: 0.875rem;
    letter-spacing: 0.025em;
    padding: 0.9rem 1.75rem;
    border-radius: 9999px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    white-space: nowrap;
  }

  .btn:focus-visible {
    outline: 2px solid var(--orange-500);
    outline-offset: 3px;
  }

  .btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .btn-full { width: 100%; }

  .btn-primary {
    background: var(--orange-600);
    color: #fff7ed;
    border: 1px solid var(--orange-600);
  }
  .btn-primary:hover:not(:disabled) {
    background: var(--orange-700);
    transform: translateY(-2px);
    box-shadow: 0 12px 24px -10px rgba(234, 88, 12, 0.5);
  }

  .btn-secondary {
    background: var(--card-soft);
    color: var(--orange-600);
    border: 1px solid var(--border);
  }
  .btn-secondary:hover:not(:disabled) {
    border-color: var(--orange-500);
    transform: translateY(-2px);
  }

  .btn-ghost {
    background: transparent;
    color: var(--text-soft);
    border: 1px solid transparent;
  }
  .btn-ghost:hover:not(:disabled) {
    color: var(--orange-600);
    border-color: var(--border);
  }
</style>
