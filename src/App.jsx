import './App.css' // 컴포넌트와 관련된 스타일
import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import L01JSX from "./components/L01JSX.jsx";
import L02Props from "./components/L02Props.jsx";
import L03State from "./components/L03State.jsx";
import L04Counter from "./components/L04Counter.jsx";
import L05Input from "./components/L05Input.jsx";
import H01ToDos from "./components/H01ToDos.jsx";
import L06ToDos from "./components/L06ToDos.jsx";
import L07UseEffect from "./components/L07UseEffect.jsx";

function App() {
  // const [count, setCount] = useState(0)
  // useState(0) : 초기값 0

  return (
    <BrowserRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/homeork/H01ToDos">H01ToDos</Link>
                </li>
                <li>
                    <Link to="/study/L01JSX">L01JSX</Link>
                </li>
                <li>
                    <Link to="/study/L02Props">L02Props</Link>
                </li>
                <li>
                    <Link to="/study/L03State">L03State</Link>
                </li>
                <li>
                    <Link to="/study/L04Counter">L04State - Counter</Link>
                </li>
                <li>
                    <Link to="/study/L05Input">L05Input</Link>
                </li>
                <li>
                    <Link to="/study/L06ToDos">L06ToDos</Link>
                </li>
                <li>
                    <Link to="/study/L07UseEffect">L07UseEffect</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}/>
        {/*  path가 없을 때(/로 이동하면..) Home으로 이동  */}
                <Route path="/homework">
                    <Route path="H01ToDos" element={<H01ToDos></H01ToDos>}/>
                </Route>
                <Route path="/study">
                    <Route path="L01JSX" element={<L01JSX></L01JSX>}/>
                    <Route path="L02Props" element={<L02Props></L02Props>}/>
                    <Route path="L03State" element={<L03State></L03State>}/>
                    <Route path="L04Counter" element={<L04Counter cnt={10}></L04Counter>}/>
                                                                {/* 렌더링할 때 부모가 주는 값   */}
                    <Route path="L05Input" element={<L05Input></L05Input>}/>
                    <Route path="L06ToDos" element={<L06ToDos></L06ToDos>}/>
                    <Route path="L07UseEffect" element={<L07UseEffect></L07UseEffect>}/>
            </Route>
        </Routes>
    </BrowserRouter>
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

//컴포넌트는 매개변수로 무조건 object를 받는다.
//let {title}= {title:"경민};
//title == props(properties) : 부모 컴포넌트(App)가 전달하는 값으로 prpos를 기반으로 컴포넌트를 렌더링합니다.
// props.children : 부모 컴포넌트가 전달한 JSX

function CustomUl({title,children}){
    // 컴포넌트는 1개의 jsx를 반환(최상위로)
    // <></> == <React.Fragment> : 실제로 구현되지 않는 jsx
    //  -> div 와 같은 태그를 굳이 주지 않아도 된다.
    return (
        <>
            <h2>{title}</h2>
            {/* 변수를 받는 방법은 {}*/}
            <ul>
                <li>npm run dev : 리액트를 개발자 모드로 실행(HOT reload)</li>
                <li>HOT reload : 새로고침 없이 쓰면 바로 반영</li>
                <li>npm run build : 리액트로 작성된 프로젝트를 배포(컴파일 후 압축)</li>
                <li>npm run preview : 배포한 프로젝트를 실행</li>
                <li>npm run lint : 프로젝트의 코드 스타일과 문법 검사</li>
                {children}
                {/* children을 출력하고 싶은 위치에 출력 가능 */}
                <li>build : 작성한 코드를 배포하려고 컴파일하고 압축해준다.(압축 파일 dist)</li>
                <li>preview : 배포한 것을 실행해보는 것</li>
                <li></li>
            </ul>
        </>
    )
}

export default App
