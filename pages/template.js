import Footer from '@/components/footer';
import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import styles from '@/styles/navbar.module.css'

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
      <button onClick={() => handleImageClick('/images/sample0.jpg')} className={'styles.imageItem m-2 mt-2 border-0'}>
        <img src="/images/sample0.jpg" alt="Image 1" width="200" height="200" />
      </button>

      <button onClick={() => handleImageClick('/images/sample1.jpg')} className='m-2 mt-2  border-0'>
        <img src="/images/sample1.jpg" alt="Image 2" width="200" height="200" />
      </button>

      <button onClick={() => handleImageClick('/images/sample2.jpg')} className='m-2 mt-2  border-0'>
        <img src="/images/sample2.jpg" alt="Image 3" width="200" height="200" />
      </button>

      <button onClick={() => handleImageClick('/images/sample3.jpg')} className='m-2 mt-2  border-0'>
        <img src="/images/sample3.jpg" alt="Image 4" width="200" height="200" />
      </button>


      <Offcanvas show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Image 1</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <img src={selectedImageSrc} alt="Selected Image" width="300" height="300" className='p-2 m-4 mt-1 mb-2' />
          <div>
            <form action="" method="GET">
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
