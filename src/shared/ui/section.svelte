<script lang="ts">
  export let title = "TODO: Title";
</script>

<section class="container">
  <h2 class="title">{title}</h2>
  <div class="content">
    <slot />
  </div>
</section>

<style lang="less">
  @import "styles/mixins";

  .container {
    display: grid;
    grid-template-rows: auto 1fr;
    height: 100%;
    padding: 1rem 1.5rem;
    overflow: hidden;
  }

  .title {
    margin-bottom: 1.5rem;
  }

  .content {
    .scrollable();
  }
</style>
