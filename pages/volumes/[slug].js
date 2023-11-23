import {useRouter} from "next/router";
import { volumes } from "../../lib/data";
import Head from "next/head";
import Link from "next/link.js";
import Image from "next/image";


export default function VolumeDetail() {
    const router = useRouter();
    const {slug} = router.query;

    const currentVolume = volumes.find((volume) => volume.slug === slug);
    

      if (!currentVolume) {
        return <p>Volume not found</p>;
      }
    
      const { title, description, books } = currentVolume;
    
      return (
        <>
          <h1>{title}</h1>
          <p>{description}</p>
          <h2>All Volumes</h2>
          {books.map((book) => (
            <ul key={book.title}>
              <li>{book.ordinal}</li>
              <li>{book.title}</li>
            </ul>
          ))}
          <Image
            src={`/images/${slug}.png`}
            height={230}
            width={140}
            alt={title}
          />
          <nav>
            <Link href="/volumes">← All Volumes</Link>
          </nav>
        </>
      );
    }