import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // 글로벌 스타일(배경, 폰트)
// App.jsx 와 main.jsx 의 App.css 와 index.css 동시에 적용
import App from './App.jsx'
// App.jsx 에서 export default App : App.jsx 내용이 main.jsx에서 출력
// main.jsx 내용이 index.html 에서 출력
/*
   <StrictMode>
*  1) React가 최신문법으로 작성되었는지 검사
*  2) 컴포넌트 함수가 외부 상태나 변수를 참조하지 않는지 검사 (순수함수)
*  3) 불필요한 렌더링(브라우저에 컴포넌트를 출력) 감지
*  4) 컴포넌트가 삭제될때 useEffect의 클린업을 감지
*  5) 검사 때문에 컴포넌트를 2번 렌더링 할 수도 있다.
* */


createRoot(document.getElementById('root')).render(
  // root 라는 아이디에 렌더링 하겠다는 의미 =>  index.html 에 root 존재
  <StrictMode>
    <App />
  </StrictMode>,
)
