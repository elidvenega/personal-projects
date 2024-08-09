import { PracticeContext } from "./PracticeContext.jsx";
// My practice
export default function Section({ level, children }) {
  return (
    <section className="section">
      <PracticeContext.Provider value={level}>
        {children}
      </PracticeContext.Provider>
    </section>
  );
}
