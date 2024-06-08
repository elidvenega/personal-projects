<script>
  import CardComponent from "./CardComponent.svelte";
  const react = {
    framework: `React`,
    creator: `Facebook`,
    info: `Is horrible`,
    img: `https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png`,
    alt: `Is horrible`,
  };
</script>

<CardComponent {...react} />
