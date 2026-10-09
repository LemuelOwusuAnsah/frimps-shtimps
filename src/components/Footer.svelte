<footer class="footer">
  <div class="footer-inner">
    <div class="footer-grid">
      <div>
        <div class="brand">Frimps Shtimps</div>
        <p class="blurb">
          A proper Belvedere pub. Cold pints, warm welcomes, and a kitchen that means it.
        </p>
      </div>

      <div>
        <div class="label">find us</div>
        <ul class="info">
          <li>42 Nuxley Road, Belvedere, Kent</li>
          <li>Mon–Thu 11am–11pm · Fri–Sat 11am–1am</li>
          <li>Sun 12pm–10:30pm</li>
        </ul>
      </div>

      <div>
        <div class="label">the vibe</div>
        <div class="icons">
          <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=100&h=100&fit=crop&auto=format&q=80" alt="Instagram">
          <img src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=100&h=100&fit=crop&auto=format&q=80" alt="Facebook">
          <img src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=100&h=100&fit=crop&auto=format&q=80" alt="X">
        </div>
        <p class="quote">"cold pints, warm welcomes"</p>
      </div>
    </div>

    <div class="copy">
      © 2025 Frimps Shtimps · Belvedere · brewed for good company
    </div>
  </div>

  <div class="spin">last orders at 11</div>
</footer>

<style>
  .footer { border-top: 1px solid rgba(124, 45, 18, 0.2); }
  .footer-inner { max-width: 72rem; margin: 0 auto; padding: 3rem 1.5rem; }

  .footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  @media (min-width: 768px) {
    .footer-grid { grid-template-columns: repeat(3, 1fr); }
  }

  .brand {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    color: #292524;
    margin-bottom: 1rem;
  }

  .blurb {
    font-size: 0.875rem;
    color: rgba(120, 113, 108, 0.8);
    line-height: 1.625;
    max-width: 20rem;
    margin: 0;
  }

  .label {
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(194, 65, 12, 0.4);
    margin-bottom: 1rem;
  }

  .info {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 0.875rem;
    color: #57534e;
    font-weight: 300;
  }
  .info li { margin-bottom: 0.5rem; }

  .icons { display: flex; gap: 1.25rem; }
  .icons img {
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
    border-radius: 0.5rem;
    border: 1px solid rgba(251, 146, 60, 0.4);
    display: block;
  }

  .quote {
    font-size: 0.75rem;
    color: rgba(120, 113, 108, 0.8);
    font-style: italic;
    margin-top: 1.5rem;
  }

  .copy {
    text-align: center;
    font-size: 0.75rem;
    color: rgba(194, 65, 12, 0.4);
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(124, 45, 18, 0.2);
  }

  .spin {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    color: rgba(249, 115, 22, 0.5);
    font-size: 0.75rem;
    transform: rotate(90deg);
    transform-origin: bottom right;
  }
  @media (max-width: 1023px) { .spin { display: none; } }
</style>
