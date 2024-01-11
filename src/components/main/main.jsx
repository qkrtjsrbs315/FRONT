import React, { useEffect } from 'react';
import useScreenRatio from './useScreenRatio.js'; //화면 비율 자동 계산기
import ChangeSize from './changeSize';
import './main.css';
import { StyledLinkButton } from './main.style';

const Main = () => {
    const { viewportWidth, viewportHeight } = useScreenRatio();

    useEffect(() => {
        // 화면 비율이 변경될 때마다 처리해야 하는데
        // useScreenRatio.js 파일 안으로 이동시킴
    }, [viewportWidth, viewportHeight]);

    const { handleClick } = ChangeSize();
    // 글자 크기 조정용
    // changeSize.js 파일 안으로 이동시킴

    return (
        <div className="main-container">
            <div className="main-image"></div>
            <div className="main-div"></div>
            <div className="outer-container">
                <div className="rectangle-container">
                    <div className="rectangle1">
                        <div className="rectangle1text">
                            ➔ 노인돌봄신청서를<br />
                            작성하고 싶으신가요?</div>
                        <div className="rectangle1text2">
                            눌러주세요! </div>
                        <StyledLinkButton to="/care">노인 돌봄 신청서 작성</StyledLinkButton>
                    </div>
                    <div className="rectangle2">
                        <div className="rectangle2text">
                            ➔ 노인 봉사 활동을<br />
                            신청하고 싶으신가요?</div>
                        <div className="rectangle2text2">
                            눌러주세요! </div>
                        <StyledLinkButton to="/volunteerwrite">노인 봉사 활동</StyledLinkButton>
                    </div>
                    <div className="rectangle2">
                        <div className="rectangle2text">
                            ➔ 취미와 여가활동을<br/>
                            올려보고 싶으신가요?</div>
                        <div className="rectangle2text2">
                            눌러주세요! </div>
                            <StyledLinkButton to="/volunteerwrite">이야기 게시판으로 이동</StyledLinkButton>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Main;
