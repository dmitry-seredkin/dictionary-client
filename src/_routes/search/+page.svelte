<script lang="ts">
  import { crawler, type CrawlerEntry } from "shared/api";
  import { KeyName } from "shared/enums";
  import { Button, Input } from "shared/ui";

  let entry: CrawlerEntry | null = null;
  let loading = false;
  let query = "";

  const search = () => {
    loading = true;
    crawler
      .search(query)
      .then((response) => (entry = response))
      .finally(() => (loading = false));
  };

  const onKeyDown = ({ key }: KeyboardEvent) => {
    if (key === KeyName.Enter) search();
  };
</script>

<svelte:window on:keydown={onKeyDown} />
<section class="container">
  <h2 class="title">Search</h2>
  <div class="search">
    <Input bind:value={query} />
    <Button on:click={search}>Search</Button>
  </div>
  {#if loading}
    <p>Loading...</p>
  {:else if entry}
    <p class="entry">{JSON.stringify(entry, null, 2)}</p>
  {/if}
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

  .search {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .entry {
    white-space: pre;
  }
</style>
