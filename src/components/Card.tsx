type CardProps = { title: string; body: string; tags: string[] };

export default function Card(props: CardProps) {
  return (
    <div class="border rounded-2xl w-1/4 bg-[#FCF7F8] text-black border-black ">
      <h1 class="text-4xl mx-10 mt-10 mb-5  ">{props.title}</h1>
      <p class="mx-10 mb-10">{props.body}</p>
      <div class="p-4">
        <h3 class="text-xl">Built with: </h3>
        <div class="flex flex-wrap">
          {props.tags.map((tag: string) => (
            <p class="bg-[#0099ff] text-white rounded-lg border mr-2 mt-2 p-1">
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
