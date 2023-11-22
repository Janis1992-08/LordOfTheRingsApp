import { volumes } from "../../lib/data.js";
import Link from "next/link";
import Image from "next/image";


export default function volumeTwo() {
  const movie = volumes.find(
    ({ slug }) => slug === "the-two-towers"
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