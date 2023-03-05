<script lang="ts">
  import { goto } from "$app/navigation";

  import { ROUTES } from "shared/constants";
  import { Link, MenuLink } from "shared/ui";

  interface SidebarLink {
    name: string;
    href: string;
  }

  let links: SidebarLink[] = [
    { name: "Dashboard", href: ROUTES.DASHBOARD },
    { name: "Dictionary", href: ROUTES.DICTIONARY },
    { name: "Practice", href: ROUTES.PRACTICE },
    { name: "Search", href: ROUTES.SEARCH },
  ];

  const onKeyDown = ({ key }: KeyboardEvent) => {
    if (!/\d/.test(key)) return;

    const link = links[Number(key) - 1];
    if (link) goto(link.href);
  };
</script>

<svelte:window on:keydown|={onKeyDown} />
<aside class="sidebar">
  <header class="header">
    <Link class="home-link" href={ROUTES.HOME}>Learner's Dictionary</Link>
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
