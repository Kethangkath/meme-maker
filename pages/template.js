import { Card, CardGroup } from 'react-bootstrap';
import styles from '@/styles/navbar.module.css';

function MyComponent() {
  return (
    <CardGroup className='mt-1 d-md-flex'>
      <div className='row1 d-flex flex-row'>
      <Card className='p-2' style={{ width:100% '12rem', border: 0}}>
        <Card.Img variant="top" src="/sample.jpeg" alt='1' height={360} width={300} className={styles.cardImage} />
      </Card>
      <Card className='p-2' style={{ width:100% '12rem', border: 0}}>
        <Card.Img variant="top" src="/sample.jpeg" height={360} width={300} className={styles.cardImage} />
      </Card>
      <Card className='p-2' style={{ width:100% '12rem', border: 0}}>
        <Card.Img variant="top" src="/sample.jpeg" height={360} width={300} className={styles.cardImage} />
      </Card>
      <Card className='p-2' style={{ width:100% '12rem', border: 0}}>
        <Card.Img variant="top" src="/sample.jpeg" height={360} width={300} className={styles.cardImage} />
      </Card>
      </div>
      <div className='row2 d-flex flex-row'>
      <Card className='ml-1 p-2' style={{ width:100% '12rem', border: 0}}>
        <Card.Img variant="top" src="/sample.jpeg" alt='5' height={360} width={300} className={styles.cardImage} />
      </Card>
      <Card className='ml-1 p-2' style={{ width:100% '12rem', border: 0}}>
        <Card.Img variant="top" src="/sample.jpeg" alt='6' height={360} width={300} className={styles.cardImage} />
      </Card>
      <Card className='ml-1 p-2' style={{ width:100% '12rem', border: 0}}>
        <Card.Img variant="top" src="/sample.jpeg" height={360} width={300} className={styles.cardImage} />
      </Card>
      <Card className='ml-1 p-2' style={{ width:100% '12rem', border: 0}}>
        <Card.Img variant="top" src="/sample.jpeg" height={360} width={300} className={styles.cardImage} />
      </Card>
      </div>
     
    </CardGroup>
    
  );
}

export default MyComponent;
