import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import styles from '@/styles/navbar.module.css';

function PrimaryNavbar() {
  return (
    <Navbar bg="dark" expand="sm">
      <h4 className="mx-auto text-white" style={{ fontSize: '1.5rem', margin: '0' }}>Meme Maker</h4>
    </Navbar>
  );
}

function SecondaryNavbar() {
  return (
    <div  className={'`${styles.secondnav}` mb-2'}>    
         <Navbar bg="light" expand="sm" className="mt-0" >
        <Navbar.Toggle className="ms-auto" />
        <Navbar.Collapse id="secondary-navbar-nav">
          <Nav className="mx-auto">
          
            <Nav.Item>
            <Link className={styles.navlinks} href='/'><li className={styles.linkTags}>Home</li></Link>  
            </Nav.Item>

            <Nav.Item>
            <Link className={styles.navlinks} href='/upload'><li className={styles.linkTags}>Upload</li></Link> 
            </Nav.Item>

            <Nav.Item>
            <Link className={styles.navlinks} href='/template'><li className={styles.linkTags}>Templates</li></Link> 
            </Nav.Item>

            <Nav.Item>
            <Link className={styles.navlinks} href='/about'><li className={styles.linkTags}>About</li></Link> 
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default function navbar() {
  return (
    <>
      <PrimaryNavbar />
      <SecondaryNavbar />
    </>
  );
}
