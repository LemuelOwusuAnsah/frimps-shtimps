<section class="page">
  <div class="head">
    <span class="tag">Lost</span>
    <h1>Wrong <em>door</em></h1>
    <p class="sub">That page isn't on the menu. Pull up a stool instead.</p>
  </div>

  <div class="actions">
    <a href="#/" class="btn-primary">Back to home</a>
    <a href="#/menu" class="btn-secondary">See the menu</a>
  </div>
</section>

<style>
  .page { max-width: 72rem; margin: 0 auto; padding: 6rem 1.5rem 8rem; }

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

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem;
    justify-content: center;
  }

  .btn-primary {
    background: rgba(234, 88, 12, 0.9);
    color: #fff7ed;
    font-size: 0.875rem;
    letter-spacing: 0.025em;
    padding: 0.875rem 2rem;
    border-radius: 9999px;
    border: 1px solid rgba(234, 88, 12, 0.4);
    transition: background 0.3s ease;
    text-decoration: none;
  }
  .btn-primary:hover { background: rgba(194, 65, 12, 0.95); }

  .btn-secondary {
    background: rgba(255, 255, 255, 0.7);
    color: rgba(194, 65, 12, 0.7);
    font-size: 0.875rem;
    letter-spacing: 0.025em;
    padding: 0.875rem 2rem;
    border-radius: 9999px;
    border: 1px solid rgba(249, 115, 22, 0.4);
    transition: border-color 0.3s ease, color 0.3s ease;
    text-decoration: none;
  }
  .btn-secondary:hover { border-color: rgba(249, 115, 22, 0.7); color: #c2410c; }
</style>
