export default function L01JSX(){
    const titleStyle={
        color: 'navy',
        // fontWeight: 'bold',
        // 'text-decoration': 'underline',
        // textDecoration: 'underline',
        fontSize: '40px',
    }
    return (
        <>
        <h2 className="title" style={titleStyle}>JSX 수업</h2>
        {/* 예약어로 class 가 있어서 className */}
        <ul>
            <li>컴포넌트는 1개의 jsx를 반환 한다. fragment 작성 </li>
            <li>jsx 내에서 자바스크립트 변수나 함수를 작성하려면 중괄호를 사용</li>
            <li>style 오브젝트로 작성</li>
            <li>js 예약어와 충돌하면 새로운 이름으로 바꾸거나 낙타표기법을 사용
                <ul>
                    <li>class = className</li>
                    <li>label.for = label.htmlFor</li>
                    <li>background-color = backgroundColor ...</li>
                </ul>
            </li>
        </ul>
        </>



    )
}


// == function LO1JSX(){}
// export default L01JSX;