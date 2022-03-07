import styled from "styled-components";
import { NavItem } from "../components/navigation/nav-item";

const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 0.25rem;
  padding: 1rem;
  margin: 0.5rem;
`;

export const Navbar = () => {
  return (
    <nav>
      <Wrapper>
        <li>
          <NavItem to={"/users"}>Users</NavItem>
        </li>
        <li>
          <NavItem to={"/comments"}>Comments</NavItem>
        </li>
      </Wrapper>
    </nav>
  );
};
