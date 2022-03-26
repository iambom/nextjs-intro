// 변수를 포함하는 Dynamic URL을 할 때 [] 이용해서 파일명을 작성하면 됨
// localhost:3000/movies/123 을 입력하면 이 파일이 보임

import { useRouter } from "next/router"

export default function Detail() {
  const router = useRouter();
  return (
    <div>
      <h4>{router.query.title || "Loading..." }</h4>
    </div>
  )
}