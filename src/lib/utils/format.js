export function formatPrice(value) {
  const num = typeof value === 'number' ? value : parseFloat(value)
  if (Number.isNaN(num)) return '—'
  return '£' + num.toFixed(2).replace(/\.00$/, '')
}

export function formatDate(date, opts = {}) {
  const d = date instanceof Date ? date : new Date(date)
  if (Number.isNaN(d.getTime())) return '—'
  return d.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    ...opts
  })
}

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}
