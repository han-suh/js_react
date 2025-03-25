export default function L02Props() {
    // 부모 컴포넌트
    return (
        <>
            <h2>컴포넌트의 Properties(Props)</h2>
            <hr/>
            <ul>
                <li>props는 부모컴포넌트가 자식 컴포넌트에게 전달하는 값</li>
                <li>만약 부모가 props를 변경하면
                    자식 컴포넌트는 바뀐 props를 반영하기 위해 리렌더링 됩니다.</li>
                <li>props.children 은 자식에게 전달하는 jsx이고
                    children 은 fragment 가 필요없다.</li>
                <li>자신의 props를 변경해도 리렌더링 되지 않는다. </li>
            </ul>

            <CustomPanel title="안녕안녕!!!"></CustomPanel>
            {/* 자식 컴포넌트 */}
            <hr/>
            <CustomUl list={['수박','딸기','사과']}>
                {/* li 을 자식으로 받을 수 있다 - children*/}
                <>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                </>
            </CustomUl>
        </>
    )
}
function CustomUl({list,children}) {
    const lis=[<li>안녕</li>,<li>배열</li>];
    // 배열인데 jsx의 li를 포함하는 배열
    return(
        <ul>
            {/*{children}*/}
            {/*{list}*/}

            {list.map((f)=><li>{f}</li>)}
            {/*{list.map((f)=>{*/}
            {/*    return <li>{f}</li>;*/}
            {/*})}*/}
            {/* 바로 리스트로 출력 가능. 코드 즐이기 */}

            <li>...</li>
            {lis}
            <li>...</li>
            {children}
        </ul>
    )
}

// function CustomUl({children}) {
//     return(
//         <ul>
//             {children}
//         </ul>
//     )
// }

// function CustomUl() {
//     return(
//         <ul>
//             <li>1</li>
//             <li>2</li>
//             <li>3</li>
//             <li>4</li>
//             <li>5</li>
//         </ul>
//     )
// }


// 무조건 컴포넌트의 Properties(Props)는 필드명으로 받아야 한다!! : {title} / {} 생략 불가
function CustomPanel({title}) {
    return(
        <p>{title}</p>
    )
}

// 부모 컴포넌트에 내용을 자주 바꿔야할 때 사용할 수 있는 자식 컴포넌트 : Properties
// function CustomPanel() {
//     return(
//         <p>안녕 p</p>
//     )
// }