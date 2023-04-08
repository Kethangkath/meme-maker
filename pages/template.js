import styles from '@/styles/navbar.module.css';
import Footer from '@/components/footer';
import { css } from '@emotion/react';

const container = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  justify-items: center;
`;

const image = css`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '1rem'
}}></div>

function MyComponent() {
  return (
    <>
      <div className='d-block-flex justify-content-center mt-2 mx-auto' css={container} style={{paddingLeft: '15px', paddingRight: '15px'}}>
        <img src="/sample.jpeg" alt="1" width={100} height={400} css={image} className={`img-fluid ${styles.imageItem}`} />
        <img src="/sample.jpeg" alt="1" width={100} height={400} css={image} className={`img-fluid ${styles.imageItem}`} />
        <img src="/sample.jpeg" alt="2" width={100} height={400} css={image} className={`img-fluid ${styles.imageItem}`} />
        <img src="/sample.jpeg" alt="2" width={100} height={400} css={image} className={`img-fluid ${styles.imageItem}`} />
        <img src="/sample.jpeg" alt="3" width={100} height={400} css={image} className={`img-fluid ${styles.imageItem}`} />
        <img src="/sample.jpeg" alt="3" width={100} height={400} css={image} className={`img-fluid ${styles.imageItem}`} />
        <img src="/sample.jpeg" alt="4" width={100} height={400} css={image} className={`img-fluid ${styles.imageItem}`} />
        <img src="/sample.jpeg" alt="4" width={100} height={400} css={image} className={`img-fluid ${styles.imageItem}`} />
        <img src="/sample.jpeg" alt="5" width={100} height={400} css={image} className={`img-fluid ${styles.imageItem}`} />
        <img src="/sample.jpeg" alt="5" width={100} height={400} css={image} className={`img-fluid ${styles.imageItem}`} />
        <img src="/sample.jpeg" alt="6" width={100} height={400} css={image} className={`img-fluid ${styles.imageItem}`} />
        <img src="/sample.jpeg" alt="6" width={100} height={400} css={image} className={`img-fluid ${styles.imageItem}`} />
        <img src="/sample.jpeg" alt="7" width={100} height={400} css={image} className={`img-fluid ${styles.imageItem}`} />
        <img src="/sample.jpeg" alt="7" width={100} height={400} css={image} className={`img-fluid ${styles.imageItem}`} />
        <img src="/sample.jpeg" alt="8" width={100} height={400} css={image} className={`img-fluid ${styles.imageItem}`} />
        <img src="/sample.jpeg" alt="8" width={100} height={400} css={image} className={`img-fluid ${styles.imageItem}`} />
        <img src="/sample.jpeg" alt="8" width={100} height={400} css={image} className={`img-fluid ${styles.imageItem}`} />
        <img src="/sample.jpeg" alt="8" width={100} height={400} css={image} className={`img-fluid ${styles.imageItem}`} />
        <img src="/sample.jpeg" alt="8" width={100} height={400} css={image} className={`img-fluid ${styles.imageItem}`} />
        <img src="/sample.jpeg" alt="8" width={100} height={400} css={image} className={`img-fluid ${styles.imageItem}`} />
        <img src="/sample.jpeg" alt="8" width={100} height={400} css={image} className={`img-fluid ${styles.imageItem}`} />
          
      </div>
      <Footer />
    </>
  );
}

export default MyComponent;
