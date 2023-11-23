import { volumes } from "../../lib/data.js";
import Link from "next/link";
import Image from "next/image";


export default function VolumeTwo() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-two-towers"
  );
  return (
    <>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <h2>All Volumes</h2>
      {volume.books.map((book) => {
        return (
          <ul key={book.title}>
            <li>{book.ordinal}</li>
            <li>{book.title}</li>
          </ul>
        );
      })}
      <Image
        src="/../public/images/the-two-towers.png"
        height={230}
        width={140}
        alt="The Two Towers"
      />
      <nav>
        <Link href="/volumes">← All Volumes</Link>
      </nav>
    </>
  );
}