<script lang="ts" context="module">
  export interface EntryFormValues {
    separator: string;
    text: string;
  }
</script>

<script lang="ts">
  import { clsx } from "clsx";

  import { Button, Input, Textarea } from "shared/ui";

  let className = "";

  export const form: EntryFormValues = { separator: "", text: "" };
  export { className as class };

  $: disabled = !(form.separator || form.text);

  const reset = () => {
    form.separator = "";
    form.text = "";
  };
</script>

<form class={clsx(className, "grid grid-cols-12 gap-4 rounded bg-white p-4")} on:submit>
  <Input class="col-span-8" bind:value={form.separator} placeholder="Separator" />
  <Button class="col-span-2" variant="secondary" {disabled} on:click={reset}>Reset</Button>
  <Button type="submit" class="col-span-2" {disabled}>Search</Button>
  <Textarea
    class="col-span-full"
    bind:value={form.text}
    autofocus
    placeholder="Search for definitions"
  />
</form>
