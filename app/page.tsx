import Gallery from "./components/gallery/gallery";

export default async function Home() {
  const data = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.NEXT_PUBLC_API_KEY}`);
  const photos = await data.json();

  console.log(photos);
  return (
    <section>
      <h1>Home</h1>
      <Gallery images={photos} />
    </section>
  );
}
