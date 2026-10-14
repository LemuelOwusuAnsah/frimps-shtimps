<script>
  import { onMount } from 'svelte'

  let name = ''
  let email = ''
  let date = ''
  let time = '19:00'
  let party = '2'
  let notes = ''
  let sending = false
  let sent = false
  let errors = {}
  let touched = {}

  const times = [
    '12:00','12:30','13:00','13:30','14:00','14:30',
    '17:00','17:30','18:00','18:30','19:00','19:30',
    '20:00','20:30','21:00'
  ]

  onMount(() => {
    const d = new Date()
    d.setDate(d.getDate() + 1)
    date = d.toISOString().slice(0, 10)
  })

  function validate() {
    const e = {}
    if (!name.trim()) e.name = 'Tell us your name'
    else if (name.trim().length < 2) e.name = 'That seems a bit short'

    if (!email.trim()) e.email = 'We need an email to confirm'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'That email looks off'

    if (!date) e.date = 'Pick a date'
    else {
      const picked = new Date(date)
      const today = new Date()
      today.setHours(0,0,0,0)
      if (picked < today) e.date = 'Pick a date in the future'
    }

    if (!time) e.time = 'Pick a time'
    if (!party) e.party = 'How many of you?'

    errors = e
    return Object.keys(e).length === 0
  }

  function blur(field) {
    touched = { ...touched, [field]: true }
    validate()
  }

  function input() {
    if (Object.keys(touched).length) validate()
  }

  async function submit(e) {
    e.preventDefault()
    touched = { name: true, email: true, date: true, time: true, party: true }
    if (!validate()) return

    sending = true
    await new Promise(r => setTimeout(r, 900))
    sending = false
    sent = true
  }

  function reset() {
    name = ''
    email = ''
    date = ''
    time = '19:00'
    party = '2'
    notes = ''
    errors = {}
    touched = {}
    sent = false
  }

  $: minDate = new Date().toISOString().slice(0, 10)
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
          <a href="tel:+441322000000">01322 000 000</a>
        </li>
      </ul>

      <div class="map">
        <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=500&fit=crop&auto=format&q=80" alt="Map of Belvedere">
      </div>
    </div>

    <div class="form-wrap">
      <h2><span class="dot">·</span> Book a table</h2>

      {#if sent}
        <div class="success" role="status">
          <div class="success-mark">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </div>
          <h3>Booking requested</h3>
          <p>
            Thanks {name.split(' ')[0]} — we've got your table for <strong>{party}</strong>
            on <strong>{date}</strong> at <strong>{time}</strong>.
            A confirmation is on its way to <strong>{email}</strong>.
          </p>
          <button class="btn-secondary" on:click={reset}>Book another</button>
        </div>
      {:else}
        <form on:submit={submit} novalidate>
          <label class="field" class:error={errors.name && touched.name}>
            <span>Name</span>
            <input
              type="text"
              bind:value={name}
              on:blur={() => blur('name')}
              on:input={input}
              placeholder="Your name"
              autocomplete="name"
            >
            {#if errors.name && touched.name}
              <em class="msg">{errors.name}</em>
            {/if}
          </label>

          <label class="field" class:error={errors.email && touched.email}>
            <span>Email</span>
            <input
              type="email"
              bind:value={email}
              on:blur={() => blur('email')}
              on:input={input}
              placeholder="you@example.com"
              autocomplete="email"
            >
            {#if errors.email && touched.email}
              <em class="msg">{errors.email}</em>
            {/if}
          </label>

          <div class="two">
            <label class="field" class:error={errors.date && touched.date}>
              <span>Date</span>
              <input
                type="date"
                bind:value={date}
                min={minDate}
                on:blur={() => blur('date')}
                on:change={input}
              >
              {#if errors.date && touched.date}
                <em class="msg">{errors.date}</em>
              {/if}
            </label>

            <label class="field" class:error={errors.time && touched.time}>
              <span>Time</span>
              <select bind:value={time} on:change={input}>
                {#each times as t}
                  <option value={t}>{t}</option>
                {/each}
              </select>
            </label>
          </div>

          <label class="field" class:error={errors.party && touched.party}>
            <span>Party size</span>
            <div class="party">
              {#each ['1','2','3','4','5','6','7+'] as p}
                <button
                  type="button"
                  class="chip"
                  class:active={party === p}
                  on:click={() => { party = p; input() }}
                >{p}</button>
              {/each}
            </div>
          </label>

          <label class="field">
            <span>Notes <em class="opt">(optional)</em></span>
            <textarea
              bind:value={notes}
              rows="3"
              placeholder="Allergies, celebrations, seating preference…"
            ></textarea>
          </label>

          <button type="submit" class="btn" disabled={sending}>
            {#if sending}
              <span class="spinner"></span> Sending…
            {:else}
              Request booking
            {/if}
          </button>
        </form>
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
  .head h1 em { font-style: italic; color: var(--orange-600); }
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
  .dot { color: var(--orange-600); }

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
  .details a { color: var(--orange-600); }

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
  .field > span {
    display: block;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(194, 65, 12, 0.6);
    margin-bottom: 0.5rem;
  }
  .opt {
    font-style: normal;
    text-transform: none;
    letter-spacing: 0;
    color: var(--text-mute);
    font-size: 0.7rem;
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
    border-color: var(--orange-600);
    box-shadow: 0 0 0 3px rgba(251, 146, 60, 0.15);
  }
  .field textarea { resize: vertical; }

  .field.error input,
  .field.error select {
    border-color: #dc2626;
  }
  .field.error input:focus,
  .field.error select:focus {
    box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.15);
  }

  .msg {
    display: block;
    font-style: normal;
    font-size: 0.75rem;
    color: #dc2626;
    margin-top: 0.4rem;
  }

  .two { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

  .party {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
  }
  .chip {
    font-family: inherit;
    font-size: 0.85rem;
    padding: 0.5rem 0.95rem;
    border-radius: 9999px;
    border: 1px solid var(--border);
    background: var(--card-soft);
    color: var(--text-soft);
    cursor: pointer;
    transition: all 0.25s ease;
    min-width: 2.4rem;
  }
  .chip:hover { border-color: var(--orange-500); color: var(--orange-600); }
  .chip.active {
    background: var(--orange-600);
    color: #fff7ed;
    border-color: var(--orange-600);
  }
  .chip:focus-visible {
    outline: 2px solid var(--orange-500);
    outline-offset: 2px;
  }

  .btn, .btn-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-family: inherit;
    font-size: 0.875rem;
    letter-spacing: 0.025em;
    padding: 0.875rem 2rem;
    border-radius: 9999px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease, opacity 0.3s ease;
    margin-top: 0.5rem;
  }
  .btn {
    background: var(--orange-600);
    color: #fff7ed;
    border: 1px solid var(--orange-600);
    width: 100%;
  }
  .btn:hover:not(:disabled) { background: var(--orange-700); }
  .btn:disabled { opacity: 0.7; cursor: wait; }
  .btn:focus-visible { outline: 2px solid var(--orange-500); outline-offset: 3px; }

  .btn-secondary {
    background: var(--card-soft);
    color: var(--orange-600);
    border: 1px solid var(--border);
  }
  .btn-secondary:hover { border-color: var(--orange-500); }

  .spinner {
    width: 0.9rem;
    height: 0.9rem;
    border: 2px solid rgba(255,247,237,0.3);
    border-top-color: #fff7ed;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .success {
    text-align: center;
    padding: 1rem 0;
    animation: fade 0.5s ease;
  }
  @keyframes fade {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: none; }
  }
  .success-mark {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background: rgba(234, 88, 12, 0.12);
    display: grid;
    place-items: center;
    margin: 0 auto 1.25rem;
  }
  .success-mark svg {
    width: 1.6rem;
    height: 1.6rem;
    stroke: var(--orange-600);
    fill: none;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
  .success h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.5rem;
    color: var(--text);
    margin: 0 0 0.75rem;
  }
  .success p {
    font-size: 0.95rem;
    color: var(--text-soft);
    line-height: 1.6;
    margin: 0 0 1.75rem;
  }
</style>