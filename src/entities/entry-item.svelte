<script lang="ts">
  import type { Entry } from "shared/models";

  export let entry: Entry;
</script>

<p class="entry-item">
  {entry.id} - {entry.term}
</p>

<style lang="less">
  .entry-item {
    height: 2rem;
  }
</style>
