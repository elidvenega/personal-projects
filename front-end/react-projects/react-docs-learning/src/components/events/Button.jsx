

export default function Button() {
  const handleConsole = () => {
    console.log(`Clicked`);
  }

  return (
   <>
    <button onClick={handleConsole}>Clicked</button>
   </>
  )
}
