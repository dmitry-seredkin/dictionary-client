<script lang="ts">
  export let placeholder = "";
  export let value = "";
</script>

<input class="input" {placeholder} bind:value />

<style lang="less">
  .input {
    width: 100%;
    height: 2.5rem;
    padding: 0.5rem 1rem;
    font-size: inherit;
    border: 1px solid #a4a6b3;
    border-radius: 0.25rem;
    outline: none;

    &:hover {
      border-color: #333333;
    }
  }
</style>
