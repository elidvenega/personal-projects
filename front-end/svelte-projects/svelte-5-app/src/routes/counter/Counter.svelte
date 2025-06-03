<script>
  let number = $state(0);
  function increment() {
    number += 1;
  }

  function decrement() {
    number -= 1;
  }
</script>

<p>{number}</p>

<button onclick={increment}>+1</button>
<button onclick={decrement}>-1</button>
<style>
  p {
    font-size: 2rem;
    text-align: center;
    color: #333;
  }

  button {
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    font-size: 1.2rem;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 0.25rem;
  }

  button:hover {
    background-color: #0056b3;
  }
  </style>