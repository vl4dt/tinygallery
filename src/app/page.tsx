import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/f7e9456a-5ca4-4327-98f1-e0e9598e7090-h1d9nf.jpeg",
  "https://utfs.io/f/7127ed1c-55be-45fc-b30f-2d52d2b40c4a-z9h9lo.jpeg",
  "https://utfs.io/f/d1aa6485-6069-4ae9-9be1-98087f867906-pi6hsx.jpeg",
  "https://utfs.io/f/9cdee1fd-8bf1-4b9a-b4a1-5f527cecf3fc-ybno2p.jpeg"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))
      }
      </div>
    </main>
  );
}
