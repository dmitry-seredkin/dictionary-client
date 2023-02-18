<script lang="ts">
  import { Link, MenuLink } from "shared/ui";

  interface SidebarLink {
    name: string;
    href: string;
  }

  let links: SidebarLink[] = [
    { name: "List of words", href: "/" },
    { name: "Quizlet", href: "/quizlet" },
  ];
</script>

<aside class="sidebar">
  <header class="header">
    <Link class="home-link" href="/">Dictionary</Link>
  </header>
  <nav>
    <ul>
      {#each links as { name, href }}
        <li class="item">
          <MenuLink {href}>{name}</MenuLink>
        </li>
      {/each}
    </ul>
  </nav>
</aside>

<style lang="less">
  .sidebar {
    width: 14rem;
    background-color: #363740; // TODO: variable
  }

  .header {
    margin-bottom: 1rem;
    padding: 2rem; // TODO: variable

    :global(.home-link) {
      font-weight: 700;
      font-size: 1.25rem;
      letter-spacing: 0.05rem;
      color: #a4a6b3aa; // TODO: variable
    }
  }

  .item {
    list-style-type: none;
  }
</style>
