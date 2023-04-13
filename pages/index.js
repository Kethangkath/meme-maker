import Head from 'next/head'
import Image from 'next//legacy/image'
import styles from '@/styles/Home.module.css'
import Footer from '@/components/footer'
import fs from 'fs/promises'
import path from 'path'
import useSWR from 'swr';


//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home({ imagesData }) {
  const { data, error } = useSWR('/api/staticdata', fetcher);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;
  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
  return (
    <>
{/* 
aspect-ratio: 3/2;
  object-fit: contain;
  mix-blend-mode: color-burn; */}
   
      <Head>
        <title>Meme-Maker</title>
        <meta name="description" content="Courtesy of Kenneth" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
     <main>
     <div className={styles.imgGallery}>
          {imagesData.map(image => (
            <div key={image.id} className={styles.imageContainer} >
              <img
                src={image.src}
                alt={`Image ${image.id}`} className={styles.ImgFluidCustom}                                      
              />
            </div>
          ))}
          </div>
       </main>
      <Footer />
  
    </>
  )
}
export async function getStaticProps() {
  const jsonDirectory = path.join(process.cwd(), 'public');
  const fileContents = await fs.readFile(path.join(jsonDirectory, 'images.json'), 'utf8');
  const imagesData = JSON.parse(fileContents).imagesData;
  return {
    props: {
      imagesData
    }
  }
}
