export const categories = [
  { id: 'all', label: 'Everything' },
  { id: 'tap', label: 'On Tap' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'sweet', label: 'Sweet' }
]

export const menu = [
  {
    cat: 'tap',
    name: 'The Belvedere Pale',
    notes: 'citrus · crisp · 4.2%',
    price: '5.4',
    img: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800&h=600&fit=crop&auto=format&q=80',
    badge: 'House'
  },
  {
    cat: 'tap',
    name: 'Shtimps Amber',
    notes: 'toffee · malty · 4.6%',
    price: '5.6',
    img: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&h=600&fit=crop&auto=format&q=80',
    badge: 'Regular'
  },
  {
    cat: 'tap',
    name: 'Midnight Stout',
    notes: 'coffee · chocolate · 5.0%',
    price: '5.8',
    img: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=800&h=600&fit=crop&auto=format&q=80',
    badge: 'Guest'
  },
  {
    cat: 'tap',
    name: 'Belvedere Lager',
    notes: 'clean · light · 4.0%',
    price: '5.2',
    img: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=800&h=600&fit=crop&auto=format&q=80'
  },
  {
    cat: 'kitchen',
    name: 'Sunday Roast',
    notes: 'beef · yorkies · all the trimmings',
    price: '14.5',
    img: 'https://images.unsplash.com/photo-1600788886242-5c96aabe3757?w=800&h=600&fit=crop&auto=format&q=80',
    badge: 'Sunday'
  },
  {
    cat: 'kitchen',
    name: 'Frimps Fish & Chips',
    notes: 'beer-battered · chunky chips · tartare',
    price: '12.8',
    img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=600&fit=crop&auto=format&q=80'
  },
  {
    cat: 'kitchen',
    name: 'Steak & Ale Pie',
    notes: 'slow-cooked · puff pastry · gravy',
    price: '11.5',
    img: 'https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=800&h=600&fit=crop&auto=format&q=80'
  },
  {
    cat: 'kitchen',
    name: 'Shtimps Burger',
    notes: 'beef · smoked cheddar · house sauce',
    price: '13.2',
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop&auto=format&q=80'
  },
  {
    cat: 'sweet',
    name: 'Sticky Toffee Pudding',
    notes: 'warm · butterscotch · vanilla ice cream',
    price: '6.5',
    img: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&h=600&fit=crop&auto=format&q=80'
  },
  {
    cat: 'sweet',
    name: 'Chocolate Brownie',
    notes: 'fudgy · sea salt · clotted cream',
    price: '6.2',
    img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800&h=600&fit=crop&auto=format&q=80'
  }
]

export const featured = menu.filter(i => i.cat === 'tap').slice(0, 3)
