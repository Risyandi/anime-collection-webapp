import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: #f2f2f2;
  padding: 20px;
  text-align: center;
`;

const FooterText = styled.p`
  color: #555;
  font-size: 14px;
  margin: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2023 Anime Collections - Risyandi. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
