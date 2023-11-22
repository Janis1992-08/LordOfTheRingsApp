import {useRouter} from "next/router";
import { volumes } from "../../lib/data.js";
import Head from "next/head";
import Link from "next/link.js";


export default function VolumeDeail() {
    const router = useRouter();
    const {slug} = router.query;


    const currentVolume = volumes.find((volume) => volume.slug === slug)

    if (!currentVolume) {
        return null;
    }

    const { title, description, ordinal} = currentVolume;

    return (
            <>
            <Head><h1>{title}</h1></Head>
              <p>{description}</p>
              <h2>All Volumes</h2>
              {books.map((book) => {
                return (
                  <ul key={title}>
                    <li>{ordinal}</li>
                    <li>{title}</li>
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