
<script lang="ts">
    import { base } from '$app/paths';
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
        <NavLi href="{base}/" active = {true}>Home</NavLi>
        <NavLi href="{base}/Blog">Blog</NavLi>
        <NavLi href="{base}/UnityGame">Unity Game</NavLi>
    </NavUl>
  </Navbar>

  <div class="mainContent">
    <main>
      <slot />
    </main>
  </div>
</div>


