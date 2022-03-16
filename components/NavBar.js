import Link from "next/link";
import { useRouter } from "next/router";
import styles from './NavBar.module.css'; // css 모듈 패턴

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      {/* css 여러가지 쓸 때 백틱으로 문자열처럼 만들어주거나 배열로 만들 수 있음 */}
      <Link href="/"><a className={`${styles.link} ${router.pathname === "/" ? styles.active : 'gray'}`}>HOME</a></Link>
      <Link href="/about"><a className={[styles.link,router.pathname === "/about" ? styles.active : 'gray'].join(" ")}>ABOUT</a></Link>
    </nav>
  )
}