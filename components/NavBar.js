import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/"><a className="active">HOME</a></Link>
      <Link href="/about"><a>ABOUT</a></Link>
      <style jsx>{`
        nav { 
          background-color: pink;
        }
        a {
          text-decoration: none;
        }
        .active {
          color: ${props.color}
        }
      `}</style>
    </nav>
  )
}