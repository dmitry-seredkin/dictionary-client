<script lang="ts">
  export let title = "TODO: Title";
</script>

<section class="container">
  <h2 class="title">{title}</h2>
  <slot />
</section>

<style lang="less">
  @import "styles/mixins";

  .container {
    .scrollable();

    height: 100%;
    padding: 1rem 1.5rem;
  }

  .title {
    margin-bottom: 1.5rem;
  }
</style>
