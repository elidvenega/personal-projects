import { useLocalStorage } from "./useLocalStorage";

export const CustomHoooks = () => {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <>
      <div
        style={{
          margin: "auto",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        <input
          style={{
            width: "25rem",
            padding: "0.75rem"
          }}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </>
  );
};
