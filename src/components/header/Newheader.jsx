import React, { useEffect } from 'react';
import useScreenRatio from './useScreenRatio.js'; //화면 비율 자동 계산기
import ChangeSize from './changeSize';
import './Newheader.css';
import { ReactComponent as Logo } from './노봄로고.svg';

const Newheader = () => {
    const { viewportWidth, viewportHeight } = useScreenRatio();

    useEffect(() => {
        // 화면 비율이 변경될 때마다 처리해야 하는데
        // useScreenRatio.js 파일 안으로 이동시킴
    }, [viewportWidth, viewportHeight]);

    const { handleClick } = ChangeSize();
    // 글자 크기 조정용
    // changeSize.js 파일 안으로 이동시킴

    return (
        <div className="container">
            <div className="header">
                
                <div className="wellcome">
                    노봄에 오신 것을 환영합니다.
                </div>
                <div className="sizingButton">
                    <div className="sizingButtonExplanation">
                        글자 크기 변경 버튼
                    </div>
                    <button className="pButton">
                        <div className="pButtonText">+</div>
                    </button>
                    <button className="mButton">
                        <div className="mButtonText">-</div>
                    </button>
                </div>
            </div>

            <div className="navbar">
                <button className="logo">
                    <Logo className="Logo-svg" />
                </button>
                <div className="blueNavbar">
                    <button className="blueNavbarButton01">
                        <div className="blueNavbarButtonText01">노인돌봄신청서 작성</div>
                    </button>

                    <button className="blueNavbarButton02">
                        <div className="blueNavbarButtonText02">노인 봉사 신청</div>
                    </button>

                    <button className="blueNavbarButton03">
                        <div className="blueNavbarButtonText03">이야기 게시판</div>
                    </button>

                    <button className="blueNavbarButton04">
                        <div className="blueNavbarButtonText04">건강 정보</div>
                    </button>
                </div>
            </div>

            <button style={{ padding: '8px 16px' }} onClick={handleClick}></button>
        </div>
    );
};

export default Newheader;

