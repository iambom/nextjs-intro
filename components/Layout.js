// layout 패턴
// children: Nextjs에서 제공하는 props로, 하나의 component를 또 다른 component 안에 넣을 때 사용
// _app.js 파일에 모든 global한 파일들을 import 하게 되기 때문에 파일이 커질 수 있어서 layout 패턴을 써서 _app.js 파일에서 태그를 간결하게 작성하게 됨

import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  )
}