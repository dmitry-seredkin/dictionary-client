<script lang="ts">
  import { page } from "$app/stores";

  export let href: string;

  $: active = $page.url.pathname === href;
</script>

<a class="link" class:active {href}><slot /></a>

<style lang="less">
  .link {
    display: inline-block;
    padding: 0.5rem 1rem; // TODO: variables
    color: #a4a6b3; // TODO: variable
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background-color: rgba(221, 226, 255, 0.1);
    }
  }

  .active {
    color: red;
  }
</style>
