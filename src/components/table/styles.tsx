import styled, { css } from "styled-components";

export const TableWrapper = styled.table`
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

const cellStyles = css`
  padding: 12px 15px;
`;

export const Row = styled.tr``;

export const TableBody = styled.tbody`
  tr {
    border-bottom: 1px solid #dddddd;
    transition: 0.2s;
  }

  tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  tr:last-of-type {
    border-bottom: 2px solid #009879;
  }

  tr:hover {
    background-color: #dff3e6;
  }
`;

export const HeaderCell = styled.th`
  ${cellStyles}
`;
export const Header = styled.thead`
  position: sticky;
  top: 0;
  tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }
`;

export const Cell = styled.td`
  ${cellStyles}
`;

export const PaginationWarper = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PaginationListItem = styled.li<{ isSelected?: boolean }>`
  transition: 0.2s;
  border: 1px solid black;
  border-left: none;
  background: ${(props) => props.isSelected && "#009879"};

  :first-of-type {
    border-left: 1px solid black;
  }
  :hover {
    background: ${(props) => !props.isSelected && "#dff3e6"};
  }
`;

export const PaginationLink = styled.a`
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  user-select: none;
`;
