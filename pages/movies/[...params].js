// 변수를 포함하는 Dynamic URL을 할 때 [] 이용해서 파일명을 작성하면 됨
// localhost:3000/movies/123 을 입력하면 이 파일이 보임
/*

catch-all url은 url에 뭐가 들어오던지 다 catch 해낸다.
기존 파일명은 [id].js 여서 /movies/ 다음에 단 한 개의 변수만 받고 있었다.
하지만 파일명을 [...id].js 로 ...을 추가해주면 id 앞에 url이 어떤 것이 추가되어도 이 파일을 불러오게 된다.
url을 추가해주면 'router.query.파일명'이 더이상 String type이 아니게 된다. / 를 기준으로 배열 인덱스로 추가된다.

*/

import { useRouter } from "next/router"
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];
  return (
    <div>
      <Seo title={title}/>
      <h4>{title}</h4>
    </div>
  )
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}