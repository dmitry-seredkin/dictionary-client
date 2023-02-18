<script lang="ts">
  import Sidebar from "widgets/sidebar.svelte";
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>
<Sidebar />
<main class="container">
  <slot />
</main>

<style lang="less">
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(html, body, #root) {
    font: 400 16px Mulish;
    height: 100%;
    overflow: hidden;
  }

  :global(ul) {
    list-style: none;
  }

  :global(#root) {
    display: grid;
    grid-template-columns: auto 1fr;
    background-color: #eeeeee; // TODO: use variable
  }
</style>
