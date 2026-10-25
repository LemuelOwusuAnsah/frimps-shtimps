import { onMount } from 'svelte'

export function reveal(delay = 80) {
  let visible = false

  onMount(() => {
    const t = setTimeout(() => { visible = true }, delay)
    return () => clearTimeout(t)
  })

  return {
    get visible() { return visible }
  }
}

export function stagger(index, step = 70) {
  return { '--i': index, 'animation-delay': `calc(${index} * ${step}ms)` }
}
