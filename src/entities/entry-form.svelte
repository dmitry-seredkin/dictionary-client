<script lang="ts" context="module">
  export interface EntryFormValues {
    separator: string;
    text: string;
  }
</script>

<script lang="ts">
  import Button from "@smui/button";
  import Textfield from "@smui/textfield";

  export const form: EntryFormValues = { separator: "", text: "" };
</script>

<form class="form" on:submit>
  <Textfield
    bind:value={form.text}
    label="Search for definitions"
    style="width: 100%; grid-column: span 2"
    input$rows={8}
    textarea
  />
  <Textfield bind:value={form.separator} label="Separator" variant="outlined" />
  <Button type="submit" style="height: 100%" variant="unelevated">Search</Button>
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
