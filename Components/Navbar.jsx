import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div style={ { display:"flex" , justifyContent :"space-around" , background:"black" ,padding:"20px" , color:"white"}}>
        <p> Omkar Sorde</p>
        <Link href="/projects">Projects</Link>
        <Link href="/experiance">Experiance</Link>
    </div>
  )
}

export default Navbar