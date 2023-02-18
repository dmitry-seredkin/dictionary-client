<script lang="ts">
  import { page } from "$app/stores";

  export let href: string;

  $: active = $page.url.pathname === href;
</script>

<a class="link" class:active {href}><slot /></a>

<style lang="less">
  @left-padding: 2rem; // TODO: variable
  @left-border: 0.25rem; // TODO: variable

  .link {
    display: block;
    padding: 1rem 1.5rem 1rem @left-padding; // TODO: variables
    letter-spacing: 0.2px;
    color: #a4a6b3; // TODO: variable
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background-color: rgba(221, 226, 255, 0.1);
    }
  }

  .active {
    padding-left: @left-padding - @left-border;
    color: #dde2ff; // TODO: variable
    border-left: @left-border solid #dde2ff; // TODO: variable
    background-color: rgba(159, 162, 180, 0.1); // TODO: variable
  }
</style>
