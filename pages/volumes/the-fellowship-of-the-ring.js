import { volumes } from "../../lib/data.js";
import Link from "next/link";
import Image from "next/image";


export default function VolumeOne() {
  const movie = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <h2>All Volumes</h2>
      {movie.books.map((book) => {
        return (
          <ul key={book.title}>
            <li>{book.ordinal}</li>
            <li>{book.title}</li>
          </ul>
        );
      })}
      <Image
        src="/../public/images/the-fellowship-of-the-ring.png"
        height={230}
        width={140}
        alt="The Fellowship of the Ring"
      />
      <nav>
        <Link href="/volumes">← All Volumes</Link>
      </nav>
    </>
  );
}