<script lang="ts">
  export let title = "TODO: Title";
</script>

<section class="container">
  <h2 class="title">{title}</h2>
  <slot />
</section>

<style lang="less">
  .container {
    height: 100%;
    padding: 1rem 1.5rem;
    overflow: hidden;
  }

  .title {
    margin-bottom: 1.5rem;
  }
</style>
