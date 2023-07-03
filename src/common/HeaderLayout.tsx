import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 16px;
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
