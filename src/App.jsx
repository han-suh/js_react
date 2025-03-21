import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' // 컴포넌트와 관련된 스타일

function App() {
  // const [count, setCount] = useState(0)
  // useState(0) : 초기값 0

  return (
    <>
      {/*<div>*/}
      {/*  <a href="https://vite.dev" target="_blank">*/}
      {/*    <img src={viteLogo} className="logo" alt="Vite logo" />*/}
      {/*  </a>*/}
      {/*  <a href="https://react.dev" target="_blank">*/}
      {/*    <img src={reactLogo} className="logo react" alt="React logo" />*/}
      {/*  </a>*/}
      {/*</div>*/}
      <h1>리액트 수업</h1>
      {/*<div className="card">*/}
      {/*  /!* className으로 사용. js react 문법에 따라 class는 사용 불가. *!/*/}
      {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
      {/*    count is {count}*/}
      {/*  /!*  {count} 에서 {}는 js 참조  *!/*/}
      {/*  </button>*/}
      {/*  /!*<CustomP/>*!/*/}
      {/*  /!* p태그 재사용 방법 *!/*/}
      {/*  /!*<CustomP/>*!/*/}
      {/*</div>*/}
      {/*<p className="read-the-docs">*/}
      {/*  Click on the Vite and React logos to learn more*/}
      {/*</p>*/}
        <hr/>
        <CustomUl></CustomUl>

    </>
  )
}
// p태그 재사용을 위해서 아래로 옮김
// function CustomP(){
//     return (
//         <p>
//             Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//     )
// }
// jsx 를 리턴하는 함수를 컨퍼넌트라고 하고
// 컨퍼넌트를 출력하는 방법 : <CustomP/>
function CustomUl(){
    // 컴포넌트는 1개의 jsx를 반환(최상위로)
    // <> == <React.Fragment> : 실제로 구현되지 않는 jsx
    //  -> div 와 같은 태그를 굳이 주지 않아도 된다.

    return (
        <>
            <h2>리액트 배포 및 실행</h2>
            <ul>
                <li>npm run dev : 리액트를 개발자 모드로 실행(HOT reload)</li>
                <li>HOT reload : 새로고침 없이 쓰면 바로 반영</li>
                <li>build : 작성한 코드를 배포하려고 컴파일하고 압축해준다.(압축 파일 dist)</li>
                <li>preview : 배포한 것을 실행해보는 것</li>
                <li>lint : </li>
                <li></li>
            </ul>
        </>
    )
}

export default App
