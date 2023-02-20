<script lang="ts">
  import type { FolderItem } from "shared/models";

  export let folder: FolderItem;
</script>

<article class="card">
  <h3 class="name">{folder.name}</h3>
</article>

<style lang="less">
  .card {
    height: 12.5rem;
    padding: 1rem;
    background-color: #ffffff; // TODO: variable
    border: 0.0625rem solid #dfe0eb; // TODO: variable
    border-radius: 0.5rem; // TODO: variable

    &:hover {
      color: #3751ff;
      border-color: #3751ff;

      > .name {
        color: inherit;
      }
    }
  }

  .name {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0.4px;
    color: #9fa2b4;
  }
</style>
