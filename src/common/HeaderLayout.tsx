import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  -webkit-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 16px;
`;

const MenuItem = styled.li<{ active: boolean }>`
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;

const HeaderMenu = () => {
  return (
    <>
      <HeaderContainer>
        <Menu>
          <MenuItem active>
            <Link to="/">Homepage</Link>
          </MenuItem>
          <MenuItem active={false}>
            <Link to="/collections">Collections</Link>
          </MenuItem>
        </Menu>
      </HeaderContainer>
    </>
  );
};

export default HeaderMenu;
