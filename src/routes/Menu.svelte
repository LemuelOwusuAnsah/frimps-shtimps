<section class="page">
  <div class="head">
    <span class="tag">Full Menu</span>
    <h1>What's <em>pouring</em></h1>
    <p class="sub">Beer, wine, spirits, and a kitchen that doesn't cut corners.</p>
  </div>

  <div class="group">
    <h2><span class="dot">·</span> On Tap</h2>
    <div class="grid">
      <div class="item">
        <img src="https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=800&h=400&fit=crop&auto=format&q=80" alt="Pale ale">
        <div class="row">
          <div>
            <h3>The Belvedere Pale</h3>
            <p>citrus · crisp · 4.2%</p>
          </div>
          <span class="price">£5.4</span>
        </div>
      </div>

      <div class="item">
        <img src="https://images.unsplash.com/photo-1608270586620-248524c67de9?w=800&h=400&fit=crop&auto=format&q=80" alt="Amber ale">
        <div class="row">
          <div>
            <h3>Shtimps Amber</h3>
            <p>toffee · malty · 4.6%</p>
          </div>
          <span class="price">£5.6</span>
        </div>
      </div>

      <div class="item">
        <img src="https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=800&h=400&fit=crop&auto=format&q=80" alt="Stout">
        <div class="row">
          <div>
            <h3>Midnight Stout</h3>
            <p>coffee · chocolate · 5.0%</p>
          </div>
          <span class="price">£5.8</span>
        </div>
      </div>

      <div class="item">
        <img src="https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?w=800&h=400&fit=crop&auto=format&q=80" alt="Lager">
        <div class="row">
          <div>
            <h3>Belvedere Lager</h3>
            <p>clean · light · 4.0%</p>
          </div>
          <span class="price">£5.2</span>
        </div>
      </div>
    </div>
  </div>

  <div class="group">
    <h2><span class="dot">·</span> From the Kitchen</h2>
    <div class="grid">
      <div class="item">
        <img src="https://images.unsplash.com/photo-1600788886242-5c96aabe3757?w=800&h=400&fit=crop&auto=format&q=80" alt="Sunday roast">
        <div class="row">
          <div>
            <h3>Sunday Roast</h3>
            <p>beef · yorkies · all the trimmings</p>
          </div>
          <span class="price">£14.5</span>
        </div>
      </div>

      <div class="item">
        <img src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&h=400&fit=crop&auto=format&q=80" alt="Fish and chips">
        <div class="row">
          <div>
            <h3>Frimps Fish & Chips</h3>
            <p>beer-battered · chunky chips · tartare</p>
          </div>
          <span class="price">£12.8</span>
        </div>
      </div>

      <div class="item">
        <img src="https://images.unsplash.com/photo-1548340748-6d2b7d7da280?w=800&h=400&fit=crop&auto=format&q=80" alt="Pie and mash">
        <div class="row">
          <div>
            <h3>Steak & Ale Pie</h3>
            <p>slow-cooked · puff pastry · gravy</p>
          </div>
          <span class="price">£11.5</span>
        </div>
      </div>

      <div class="item">
        <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=400&fit=crop&auto=format&q=80" alt="Burger">
        <div class="row">
          <div>
            <h3>Shtimps Burger</h3>
            <p>beef · smoked cheddar · house sauce</p>
          </div>
          <span class="price">£13.2</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .page { max-width: 72rem; margin: 0 auto; padding: 3rem 1.5rem 7rem; }

  .head { text-align: center; margin-bottom: 3rem; }
  .tag {
    display: inline-block;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(194, 65, 12, 0.7);
    margin-bottom: 1.5rem;
  }
  .head h1 {
    font-family: 'Playfair Display', serif;
    font-size: 3rem;
    line-height: 1.1;
    font-weight: 500;
    color: #292524;
    margin: 0 0 1rem;
  }
  .head h1 em { font-style: italic; color: #ea580c; }
  @media (min-width: 768px) { .head h1 { font-size: 4.5rem; } }
  .head .sub {
    font-size: 1.125rem;
    color: #57534e;
    max-width: 28rem;
    margin: 0 auto;
    font-weight: 300;
    line-height: 1.625;
  }

  .group { margin-bottom: 3rem; }
  .group h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.875rem;
    color: #292524;
    margin: 0 0 2rem;
  }
  .dot { color: #ea580c; }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  @media (min-width: 768px) { .grid { grid-template-columns: repeat(2, 1fr); } }

  .item { border-bottom: 1px solid rgba(124, 45, 18, 0.2); padding-bottom: 1rem; }
  .item img {
    width: 100%;
    height: 12rem;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(251, 146, 60, 0.3);
    display: block;
  }
  .row { display: flex; justify-content: space-between; align-items: baseline; }
  .row h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    color: #292524;
    margin: 0;
  }
  .row p {
    color: rgba(249, 115, 22, 0.6);
    font-size: 0.875rem;
    margin: 0.25rem 0 0;
  }
  .price { color: rgba(249, 115, 22, 0.6); font-weight: 300; }
</style>
