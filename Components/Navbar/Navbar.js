import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className={styles.navBar} >
            <ul className={styles.ul} >
                <Link href='/' ><a><li>Home</li></a></Link>
                <Link href='/blog' ><a><li>Blog</li></a></Link>
                <Link href='/about' ><a><li>About</li></a></Link>
                <Link href='/contact' ><a><li>Contact</li></a></Link>
                <Link href='/product' ><a><li>Product</li></a></Link>
            </ul>
        </nav>
    )
}

export default Navbar