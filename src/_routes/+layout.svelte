<script lang="ts">
  import Sidebar from "widgets/sidebar.svelte";

  import "../app.css";
</script>

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

  .container {
    overflow: hidden;
  }
</style>
