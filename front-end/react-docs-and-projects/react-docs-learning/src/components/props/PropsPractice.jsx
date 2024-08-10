import PropsData from "./PropsData";

export default function PropsPractice() {
  return (
    <div
      style={{
        color: "green",
        backgroundColor: "lightblue",
        width: "70%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        fontSize: "1.2rem",
        padding: "2rem",
        margin: "auto",
        marginTop: "3rem",
      }}
    >
      <PropsData name="Jack" language="Spanish" country="US" age={"32"} />
      <PropsData name="David" language="French" country="US" age={"21"} />
      <PropsData name="Matt" language="English" country="US" age={"12"} />
    </div>
  );
}
