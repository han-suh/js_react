import {useState} from "react";

export default function L05Input(){
    // React 에서는 input 은 state를 참조하기 때문에 state를 변경해야 한다.

    // input 요소에 넣을 값 지정. - 고정값
    let idVal="고정값";

    // state 로 값을 지정 - 변동값
    const [id,setId]=useState("변동값");

    // boolean 값으로 보이고 안보이고 설정 가능
    const [isVisible,setIsVisible]=useState(false);

    return(
        <>
            <h2>input 요소와 state 의 관계를 알아보자</h2>
            <hr/>
            <p>
                <input type="text" value={idVal}
                       onChange={(e)=>{
                           idVal = e.target.value;
                       }}
                />
            </p>
            {/* 미리 값을 지정해서 input에서 넣어줄 경우 뷰에서 입력 불가 */}
            {/* React 에서는 컴퍼넌트의 변수나 properties 경우는 컴퍼넌트가 리렌더링 될 때까지 값을 고정으로 가지고 있다.  */}
            {/* 고정값을 가지고 있는 경우에는 리렌더링되지 않는다. */}
            {/* 그렇기에 값을 변경하려고 한다면 값을 state가 가지고 있어야 한다. */}
            <p>
                <input type="text" value={id}
                       onChange={(e)=>{
                           setId(e.target.value)
                       }}
                />
            </p>
            {/* onChange : html -
                           oninput 처럼 누를 때마다 바뀐다. */}

            {/*컴포넌트를 조건으로 출력하는 예제*/}
            { isVisible && <p>당신이 입력한 아이디는 {id}</p> }
            {/* true && true 로 실행 */}
            {/* ==  { isVisible ? <p>당신이 입력한 아이디는 {id}</p> : null }  */}
            <p>
                {/* htmlFor 과 id 는 한 쌍으로 연결 가능! */}
                <label htmlFor="isVisiable">활성화</label>
                <input type="checkbox" id="isVisiable"
                       onChange={(e)=>{
                           // setIsVisible(!isVisible);
                           setIsVisible(e.target.checked)
                       }}
                />
            </p>
        </>
    )

}