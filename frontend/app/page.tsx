import content from "~/app/content/landing.json";
export default function Home() {
  return (
    <main>
      <h1>{content.title}</h1>
    </main>
  );
}
