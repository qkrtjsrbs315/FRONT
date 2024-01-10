import styled from "styled-components";

const FooterContainer = styled.div`
  border-top: 2px solid black; /* 위쪽 경계선 추가 */
  height : 70px;
`;

function Footer() {
  return (
    <FooterContainer>
      <h1>Footer</h1>
    </FooterContainer>
  );
}

export default Footer;
