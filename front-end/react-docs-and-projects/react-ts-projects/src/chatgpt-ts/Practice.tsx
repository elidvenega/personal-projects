interface PracticeComponent {
  title: string;
  children: string;
}

export default function Practice({ title, children }: PracticeComponent) {
  return (
    <>
      <h1>{title}</h1>
      <p>{children}</p>
    </>
  );
}
