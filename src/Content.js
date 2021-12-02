import React from "react";
import styled from "styled-components";
import Clock from "./Clock";
import Todo from "./Todo";

const Content = () => {
    return <Container>
        <Clock />
        <Todo />
    </Container>;
};

const Container = styled.div`
    position: absolute;
    right: 0;
    top: 33px;
    width: 500px;
    height: calc(100% - 33px);
    color: white; //글자 색깔인듯
//    background: white;
    overflow-y: auto; //글이 화면에서 벗어날 경우 자동으로 스크롤 제공
    @media (max-width: 768px) { 
        width:100%;
    } /* media > 컴퓨터화면이 아닌 휴대폰 등에서 화면을 출력할 때 지정한 width때문에 
         화면이 잘리는데 max-width가 지정한 px의 이하 기기에서는 
         width를 100%로 출력한다 라는 뜻*/
`;

export default Content;