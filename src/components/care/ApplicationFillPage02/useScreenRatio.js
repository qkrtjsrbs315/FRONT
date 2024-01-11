import { useEffect, useState } from 'react';

const useScreenRatio = () => {
    // 여기 사용된 ESLint는 변수들이 CSS에 쓰이는걸 몰라서 warning 을 발생시키므로 예외처리함
    // eslint-disable-next-line no-unused-vars
    const [viewportWidth, setviewportWidth] = useState(window.innerWidth);
    // eslint-disable-next-line no-unused-vars
    const [viewportHeight, setviewportHeight] = useState(window.innerHeight);
  
    useEffect(() => {
      const handleResize = () => {
        
        //현재 화면의 높이와 너비값 추출
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
  
        setviewportWidth(viewportWidth);
        setviewportHeight(viewportHeight);
  
        const viewportRatio = viewportHeight / viewportWidth; //현재 화면의 비율
        const mainRatio = 1024 / 1440;  //기본 화면의 비율
  
        let ScreenRatio = null;
  
        //1440x1024 비율의 기본 화면과 현재 화면 비교하기
        if (viewportRatio > mainRatio) {
          ScreenRatio = viewportWidth / 1440;
        } else if (viewportRatio === mainRatio) {
          ScreenRatio = viewportHeight / 1024;
        } else if (viewportRatio < mainRatio) {
          ScreenRatio = viewportHeight / 1024;
        }
  
        document.documentElement.style.setProperty('--screen-ratio', `${ScreenRatio}`); //css로 변수 전달
      };
  
      handleResize(); // 초기 실행 시 한 번 호출하여 초기값 설정
  
      // 화면 크기가 변경될 때마다 handleResize 함수 실행
      window.addEventListener('resize', handleResize);
  
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []); // useEffect의 두 번째 인자로 빈 배열을 전달하여, 최초 렌더링 시에만 실행
  

  return { viewportWidth, viewportHeight };
};

export default useScreenRatio;
