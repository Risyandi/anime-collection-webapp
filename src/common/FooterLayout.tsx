import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  background-color: #f8f8fc;
  padding: 20px;
  text-align: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  color: #555;
  font-size: 14px;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © 2023 Anime Collections - Risyandi. All rights reserved.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
