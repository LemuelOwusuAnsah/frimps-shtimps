<script>
  let name = ''
  let email = ''
  let date = ''
  let party = '2'
  let notes = ''
  let sent = false

  function submit(e) {
    e.preventDefault()
    sent = true
  }
</script>

<section class="page">
  <div class="head">
    <span class="tag">Visit</span>
    <h1>Come <em>through</em></h1>
    <p class="sub">Book a table, find us, or just show up — we'll make room.</p>
  </div>

  <div class="split">
    <div class="info">
      <h2><span class="dot">·</span> Find us</h2>
      <ul class="details">
        <li>
          <strong>Address</strong>
          42 Nuxley Road, Belvedere, Kent DA17
        </li>
        <li>
          <strong>Hours</strong>
          Mon–Thu 11am–11pm · Fri–Sat 11am–1am
          Sun 12pm–10:30pm
        </li>
        <li>
          <strong>Phone</strong>
          01322 000 000
        </li>
      </ul>

      <div class="map">
        <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=500&fit=crop&auto=format&q=80" alt="Map of Belvedere">
      </div>
    </div>

    <div class="form-wrap">
      <h2><span class="dot">·</span> Book a table</h2>

      <form on:submit={submit}>
        <label class="field">
          <span>Name</span>
          <input type="text" bind:value={name} required placeholder="Your name">
        </label>

        <label class="field">
          <span>Email</span>
          <input type="email" bind:value={email} required placeholder="you@example.com">
        </label>

        <div class="two">
          <label class="field">
            <span>Date</span>
            <input type="date" bind:value={date} required>
          </label>
          <label class="field">
            <span>Party size</span>
            <select bind:value={party}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7+</option>
            </select>
          </label>
        </div>

        <label class="field">
          <span>Notes</span>
          <textarea bind:value={notes} rows="3" placeholder="Anything we should know?"></textarea>
        </label>

        <button type="submit" class="btn">Request booking</button>
      </form>

      {#if sent}
        <div class="success">
          Thanks {name || 'friend'} — we've got your request for {party} on {date}. We'll email {email} shortly.
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  .page { max-width: 72rem; margin: 0 auto; padding: 3rem 1.5rem 7rem; }

  .head { text-align: center; margin-bottom: 4rem; }
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
    color: var(--text);
    margin: 0 0 1rem;
  }
  .head h1 em { font-style: italic; color: #ea580c; }
  @media (min-width: 768px) { .head h1 { font-size: 4.5rem; } }
  .head .sub {
    font-size: 1.125rem;
    color: var(--text-soft);
    max-width: 28rem;
    margin: 0 auto;
    font-weight: 300;
  }

  .split {
    display: grid;
    grid-template-columns: 1fr;
    gap: 4rem;
  }
  @media (min-width: 768px) { .split { grid-template-columns: 1fr 1fr; } }

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.875rem;
    color: var(--text);
    margin: 0 0 2rem;
  }
  .dot { color: #ea580c; }

  .details {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .details li {
    font-size: 0.9375rem;
    color: var(--text-soft);
    line-height: 1.6;
  }
  .details strong {
    display: block;
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    color: var(--text);
    font-weight: 500;
    margin-bottom: 0.25rem;
  }

  .map img {
    width: 100%;
    height: 16rem;
    object-fit: cover;
    border-radius: 1.5rem;
    border: 1px solid var(--border);
    display: block;
  }

  .form-wrap {
    background: var(--card);
    backdrop-filter: blur(4px);
    border: 1px solid var(--border);
    border-radius: 1.5rem;
    padding: 2.5rem;
  }

  form { display: flex; flex-direction: column; gap: 1.25rem; }

  .field { display: block; }
  .field span {
    display: block;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(194, 65, 12, 0.6);
    margin-bottom: 0.5rem;
  }
  .field input,
  .field select,
  .field textarea {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    border: 1px solid var(--border);
    background: var(--card);
    font-family: inherit;
    font-size: 0.95rem;
    color: var(--text);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
    box-sizing: border-box;
  }
  .field input:focus,
  .field select:focus,
  .field textarea:focus {
    outline: none;
    border-color: rgba(234, 88, 12, 0.7);
    box-shadow: 0 0 0 3px rgba(251, 146, 60, 0.15);
  }
  .field textarea { resize: vertical; }

  .two { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

  .btn {
    background: rgba(234, 88, 12, 0.9);
    color: #fff7ed;
    font-family: inherit;
    font-size: 0.875rem;
    letter-spacing: 0.025em;
    padding: 0.875rem 2rem;
    border-radius: 9999px;
    border: 1px solid var(--border);
    cursor: pointer;
    transition: background 0.3s ease;
    margin-top: 0.5rem;
  }
  .btn:hover { background: rgba(194, 65, 12, 0.95); }

  .success {
    margin-top: 1.25rem;
    padding: 1rem 1.25rem;
    border-radius: 0.75rem;
    background: rgba(255, 237, 213, 0.8);
    border: 1px solid var(--border);
    color: #c2410c;
    font-size: 0.9rem;
    line-height: 1.5;
  }
</style>
