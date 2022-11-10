type CardProps = { title: string; body: string };

export default function Card(props: CardProps) {
  return (
    <div class="border rounded w-auto">
      <h1 class="text-4xl">{props.title}</h1>
      <p>{props.body}</p>
    </div>
  );
}
