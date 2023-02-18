<script lang="ts">
  import { TabLink } from "shared/ui";

  interface NavigationLink {
    name: string;
    href: string;
  }

  const links: NavigationLink[] = [
    { name: "Folders", href: "/flashcards/folders" },
    { name: "Modules", href: "/flashcards/modules" },
  ];
</script>

<section>
  <nav>
    <ul class="list">
      {#each links as { name, href }}
        <li>
          <TabLink {href}>{name}</TabLink>
        </li>
      {/each}
    </ul>
  </nav>
  <slot />
</section>

<style lang="less">
  .list {
    display: flex;
    padding: 0 1rem;
    box-shadow: inset 0 1px 2px #000;
  }
</style>
