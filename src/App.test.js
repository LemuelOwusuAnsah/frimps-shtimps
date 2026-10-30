import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/svelte'
import App from './App.svelte'

describe('App', () => {
  beforeEach(() => {
    window.location.hash = ''
    localStorage.clear()
    document.body.classList.remove('dark')
  })

  it('renders the brand name in the nav', () => {
    render(App)
    expect(screen.getAllByText(/Frimps Shtimps/i).length).toBeGreaterThan(0)
  })

  it('renders the home hero heading', () => {
    render(App)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('shows the Belvedere pill', () => {
    render(App)
    expect(screen.getAllByText(/Belvedere/i).length).toBeGreaterThan(0)
  })
})
