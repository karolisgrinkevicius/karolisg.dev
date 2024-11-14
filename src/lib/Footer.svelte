<script lang="ts">
  const year = new Date().getFullYear();
</script>

<p>
  © <span>{year}</span> by Karolis G. Made with ❤️ in Lithuania 🇱🇹
</p>

<style>
  p {
    grid-row: 3;
    grid-column: 1 / span all;
    font-size: 0.85rem;
    font-weight: 300;
    letter-spacing: 0.05rem;
    color: var(--color-base-muted);
  }
</style>
