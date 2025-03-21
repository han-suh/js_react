import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // 글로벌 스타일(배경, 폰트)
// App.jsx 와 main.jsx 의 App.css 와 index.css 동시에 적용
import App from './App.jsx'
// App.jsx 에서 export default App : App.jsx 내용이 main.jsx에서 출력
// main.jsx 내용이 index.html 에서 출력
/* <StrictMode>
* 1.
* 2.
* */


createRoot(document.getElementById('root')).render(
  // root 라는 아이디에 렌더링 하겠다는 의미 =>  index.html 에 root 존재
  <StrictMode>
    <App />
  </StrictMode>,
)
