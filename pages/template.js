import Footer from '@/components/footer';
import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import styles from '@/styles/navbar.module.css'
import Head from 'next/head';

function MyComponent() {
  const [show, setShow] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState('');

  const handleImageClick = (imageSrc) => {
    setSelectedImageSrc(imageSrc);
    setShow(true);
  }
  
  const handleDownloadClick = () => {
    const queryParams = new URLSearchParams({ src: selectedImageSrc });
    const downloadUrl = `/download-image?${queryParams.toString()}`;
    window.location.href = downloadUrl;
  };
  return (
    <>
    <Head>
    <title>Templates</title>
    </Head>
      <div className={styles.imgGallery}>
        <img onClick={() => handleImageClick('/images/sample0.jpg')} src="/images/sample1.jpg" alt="template 1" />
        <img onClick={() => handleImageClick('/images/sample0.jpg')} src="/images/sample1.jpg" alt="template 1" />
        <img onClick={() => handleImageClick('/images/sample1.jpg')} src="/images/sample2.jpg" alt="template 2" />
        <img onClick={() => handleImageClick('/images/sample1.jpg')} src="/images/sample2.jpg" alt="template 2" />
        <img onClick={() => handleImageClick('/images/sample3.jpg')} src="/images/sample3.jpg" alt="template 3" />
        <img onClick={() => handleImageClick('/images/sample3.jpg')} src="/images/sample3.jpg" alt="template 3" />
        <img onClick={() => handleImageClick('/images/sample3.jpg')} src="/images/sample3.jpg" alt="template 3" />
        <img onClick={() => handleImageClick('/images/sample3.jpg')} src="/images/sample3.jpg" alt="template 3" />

      </div>
      <Offcanvas show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Image 1</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <img src={selectedImageSrc} alt="Selected Image" width="300" height="300" className='p-2 m-4 mt-1 mb-2' />
          <div>
            <form action="/api/download" method="GET">
              <div className={styles.offkanvass}>
                <fieldset className='mb-2'>
                  <label htmlFor="">Text 1: </label>
                  <input className={styles.inputElement} type="text" name="" id="" />
                </fieldset>

                <fieldset className='mb-2'>
                  <label htmlFor="">Text 2: </label>
                  <input className={styles.inputElement} type="text" name="" id="" />
                </fieldset>
              <button type="submit">Download</button>
              </div>
            </form>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Footer />
  
   
    </>
  );
}

export default MyComponent;
