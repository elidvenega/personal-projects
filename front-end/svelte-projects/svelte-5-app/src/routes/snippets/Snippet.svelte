<script>
</script>

<table>
  <thead>
    <tr>
      <th>emoji</th>
      <th>description</th>
      <th>unicode escape sequence</th>
      <th>html entity</th>
    </tr>
  </thead>

  <tbody>
    {#snippet monkey(emoji, description)}
      <tr>
        <td>{emoji}</td>
        <td>{description}</td>
        <td
          >\u{emoji.charCodeAt(0).toString(16)}\u{emoji
            .charCodeAt(1)
            .toString(16)}</td
        >
        <td>&amp#{emoji.codePointAt(0)}</td>
      </tr>
    {/snippet}

    {@render monkey("🙈", "see no evil")}
    {@render monkey("🙉", "hear no evil")}
    {@render monkey("🙊", "speak no evil")}
    {@render monkey("😆", "laughing")}
  </tbody>
</table>

{#snippet info(randinfo)}
  <p>{randinfo}</p>
{/snippet}

<div class="container">
  {@render info("Random Info")}
  {@render info("New Paragraph")}
  {@render info("Hello")}
</div>

<style>
  th,
  td {
    padding: 0.5em;
  }

  td:nth-child(3),
  td:nth-child(4) {
    font-family: monospace;
  }

  .container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    gap: 10px;
  }

  .container p {
    --text-color: #063970;
    font-size: 2rem;
    color: var(--text-color);
    padding: 1rem;
  }
</style>
