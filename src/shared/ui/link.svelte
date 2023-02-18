<script lang="ts">
  let className = "";
  let href: string;

  export { className as class, href };
</script>

<a class={`link ${className}`} {href}><slot /></a>

<style lang="less">
  .link {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
</style>
