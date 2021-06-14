import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return ( 
        <nav>
            <div className= "logo">
                <Image src="/logo (1).png" width={128} height={77}/>
            </div>
            <Link href="/"><a>Home  </a></Link>
            <Link href="/About"><a>About  </a></Link>
            <Link href="/Ninjas"><a>Ninja Listing</a></Link>
        </nav>
     );
}
 
export default Navbar;