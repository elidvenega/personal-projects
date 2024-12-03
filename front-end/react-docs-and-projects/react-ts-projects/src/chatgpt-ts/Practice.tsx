interface MyComponentProps {
  title: string;
  count?: number; // Optional prop
}

export default function Practice({ title, count }: MyComponentProps) {
  return (
    <>
      <h1>{title}</h1>
      {count && <p>Count: {count}</p>}
    </>
  );
}
