import { writable } from 'svelte/store'

const KEY = 'theme'

function stored() {
  if (typeof localStorage === 'undefined') return false
  return localStorage.getItem(KEY) === 'dark'
}

export const dark = writable(stored())

dark.subscribe(value => {
  if (typeof document === 'undefined') return
  document.body.classList.toggle('dark', value)
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(KEY, value ? 'dark' : 'light')
  }
})

export function toggleTheme() {
  dark.update(v => !v)
}
