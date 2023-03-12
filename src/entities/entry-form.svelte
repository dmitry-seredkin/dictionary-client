<script lang="ts" context="module">
  export interface EntryFormValues {
    separator: string;
    text: string;
  }
</script>

<script lang="ts">
  import { Button, Input } from "shared/ui";

  export const form: EntryFormValues = { separator: "", text: "" };
</script>

<form class="form" on:submit>
  <Input
    bind:value={form.text}
    placeholder="Search for definitions"
    
  />
  <Input bind:value={form.separator} placeholder="Separator" />
  <Button>Search</Button>
</form>

<style lang="less">
  .form {
    display: grid;
    grid-template-columns: 1fr 15rem;
    gap: 1.5rem; // TODO: variables
    padding: 1rem; // TODO: variables
    background-color: #ffffff; // TODO: variables
    border-radius: 0.5rem; // TODO: variables
  }
</style>
