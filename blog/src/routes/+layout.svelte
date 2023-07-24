<script>
  import "../app.postcss";
  import { NavBrand, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';
</script>

<div class="layout">
  <Navbar let:hidden let:toggle color="dark">
    <NavBrand>

        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Josh's Blog
        </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl>
        <NavLi href="/" active = {true}>Home</NavLi>
        <NavLi href="/Blog">Blog</NavLi>
        <NavLi href="/UnityGame">Unity Game</NavLi>
    </NavUl>
  </Navbar>

  <div class="mainContent">
    <main>
      <slot />
    </main>
  </div>
</div>


