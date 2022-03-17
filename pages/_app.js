// Nextjs에서 index.js를 확인하기 전 제일 먼저 _app.js를 확인 (두 props와 함께 => Component, pageProps)
// navigation 등의 모든 페이지에 공통적으로 필요한 요소들을 처리
// Component에 pages 폴더 내 작성한 파일들의 컴포넌트들이 들어옴
// _app.js 제외 index.js 등의 페이지에서 css module이 아닌 글로벌 css 파일 import 할 수 없음

import NavBar from "../components/NavBar";

// 그래서 <Component {...pageProps} /> 를 부르면 기존과 똑같이 index.js와 about.js가 불리지만 <span>hello</span> 는 전역적으로 모든 페이지에서 보임
export default function App({Component, pageProps}) {
  return (<>
    <NavBar />
    <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: green;
        }
      `}</style>
  </>)
} 