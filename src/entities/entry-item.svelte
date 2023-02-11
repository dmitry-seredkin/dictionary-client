<script lang="ts">
  import type { EntryItem } from "shared/models";

  export let entry: EntryItem;
</script>

<p class="entry-item">
  {entry.id} - {entry.term}
</p>

<style lang="less">
  .entry-item {
    height: 2rem;
  }
</style>
