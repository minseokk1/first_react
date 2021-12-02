import React from "react";
import styled from "styled-components";

class Clock extends React.Component {
    state = {
        date: new Date()
    }
    render(){
        const { date } = this.state;
        return (
            <Container>
                <CurDate>
                    {date.getFullYear()}&nbsp;/&nbsp; {/* getFullYear 현재 연도 반환 */}
                    {date.getMonth() + 1}&nbsp;/&nbsp; {/* getMonth > 월 반환(0:1월 ~ 11:12월) */}
                    {date.getDate()} {/* 일 반환 */}
                </CurDate>
                <CurDay>
                    {date.getDay() === 0 /* 요일 반환(0:일요일 ~ 6: 토요일) */
                    ? "Sunday"
                    : date.getDay() === 1
                    ? "Monday"
                    : date.getDay() === 2
                    ? "Tuesday"
                    : date.getDay() === 3
                    ? "Wednesday"
                    : date.getDay() === 4
                    ? "Thursday"
                    : date.getDay() === 5
                    ? "Friday"
                    : "Saturday"}
                </CurDay>
                <CurTime>
                    {date.getHours() < 10 ? "0" + date.getHours() : date.getHours()} {/* 시 반환 */}
                    &nbsp;:&nbsp;
                    {date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()} {/* 분 반환 */}
                    {/* 숫자를 문자열로 바꿔주는 작업 + 한자리 수 일때 서식이 깨지기 않기 위해 0 붙이기 */}
                </CurTime>
            </Container>
        ); // ES6의  Destructing 문법 >> 이렇게 하면 해당 state 접근할 때 this.state를 생략할 수 있어서 편리
           // &nbsp;는 공백 의미 * 그냥 공백이나 {" "}를 사용하면 코드 자동편집기에서 무시당하는 경우가 있음
    }

    getDate = () => {
        this.setState({
            date: new Date()
        });
    };/* getDate함수가 실행될 때 마다 state 업데이트 (React는 state가 업데이트되면 컴포넌트를 화면에 다시 그림(재렌더링)) */

    componentDidMount() { /* 컴포넌트 실행 흐름에 따라 자동으로 실행되는 Life Cycle Method, 
                            componentDidMount는 컴포넌트가 화면에 전부 그려졌을 때 실행
                            React가 컴포넌트를 출력하는 과정이 전부 끝난 상태에서 실행되므로 또 다른 액션을 취하기 좋음
                            주로 API를 통해 데이터를 불러오거나 setTlmeout,setInterval등을 설정 해줌 */
        this.oneMinuteCall = setInterval(() => this.getDate(), 60000); /* oneMinuteCall이라는 변수에 setInterval을 넣은이유는 componentWillUnmount에서 clearInterval로 해제해주기 위함 */
    }
    /* Life Cycle Method : 컴포넌트가 처음 나타나는 순간부터 화면에서 사라지는 순간까지 각 단계에 따라 하나씩 순차적으로 실행되는 함수들 */
    
    componentWillUnmount() { /* 화면에 그려진 컴포넌트가 사라지기 직전에 호출됨 */
        clearInterval(this.oneMinuteCall); /* oneMiniteCall 의 Interval 초기화 */
    }
}

const Container = styled.div`
    margin-top: 40px;
    font-size: 40px;
    text-align: center;
`;

const CurDate = styled.div`
    font-size: 24px;
`;

const CurDay = styled.div`
    font-style: italic;
`;

const CurTime = styled.div`
    font-size: 55px;
    font-weight: 600;
    font-style: oblique;
`;

export default Clock;