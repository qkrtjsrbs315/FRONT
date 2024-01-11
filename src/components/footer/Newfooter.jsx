import React, { useEffect } from 'react';
import useScreenRatio from './useScreenRatio.js'; //화면 비율 자동 계산기
import ChangeSize from './changeSize.js';
import './Newfooter.css';
import { ReactComponent as Foothersvg } from './푸터.svg';

const Newfooter = () => {
    const { viewportWidth, viewportHeight } = useScreenRatio();

    useEffect(() => {
        // 화면 비율이 변경될 때마다 처리해야 하는데
        // useScreenRatio.js 파일 안으로 이동시킴
    }, [viewportWidth, viewportHeight]);

    const { handleClick } = ChangeSize();
    // 글자 크기 조정용
    // changeSize.js 파일 안으로 이동시킴

    return (
        <div className="containerFT">
            <div className="dividingBarFT"></div>
            <div className="rectangleFT">
                <Foothersvg div className="foothersvg"/>
            </div>
        </div>
    );
};

export default Newfooter;


