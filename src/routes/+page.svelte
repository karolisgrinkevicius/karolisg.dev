<script>
  import GlobalStyles from '$lib/GlobalStyles.svelte';
  import Header from '$lib/Header.svelte';
  import Main from '$lib/Main.svelte';
  import Avatar from '$lib/Avatar/Avatar.svelte';
  import Presentation from '$lib/Presentation.svelte';
  import Footer from '$lib/Footer.svelte';
</script>

<GlobalStyles />
<Header />
<Main>
  <Avatar />
  <Presentation />
</Main>
<Footer />
