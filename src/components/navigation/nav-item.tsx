import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  color: #fff;
  background-color: #009879;
  border-color: #009879;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  text-decoration: none;
  display: inline-block;

  &.active {
    background-color: #0a725d;
  }
`;

interface NavItemProps {
  to: string;
  children: ReactNode;
}

export const NavItem = ({ to, children }: NavItemProps) => (
  <ul>
    <StyledNavLink to={to}>{children}</StyledNavLink>
  </ul>
);
