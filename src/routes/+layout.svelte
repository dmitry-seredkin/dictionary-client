<script lang="ts">
  import Header from "widgets/header.svelte";
  import Footer from "widgets/footer.svelte";
</script>

<Header />
<main>
  <slot />
</main>
<Footer />

<style lang="less">
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(html, body) {
    height: 100%;
    overflow: hidden;
  }

  :global(body) {
    display: grid;
    grid-template-rows: auto 1fr auto;
    margin: 0;
  }
</style>
