<script>
  export let src
  export let alt = ''
  export let ratio = '16/9'
  export let rounded = '1rem'
  export let zoom = false
  export let loading = 'lazy'
</script>

<div class="img-wrap" class:zoom style="--ratio:{ratio}; --rounded:{rounded}">
  <img {src} {alt} {loading} decoding="async" />
</div>

<style>
  .img-wrap {
    position: relative;
    overflow: hidden;
    aspect-ratio: var(--ratio);
    border-radius: var(--rounded);
    background: var(--card-soft);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .zoom:hover img {
    transform: scale(1.05);
  }
</style>
