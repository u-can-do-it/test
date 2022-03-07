import { ReactNode } from "react";
import { PaginationLink, PaginationListItem, PaginationWarper } from "./styles";

interface PaginationItemProps {
  children: ReactNode | string | number;
  onClick: () => void;
  isSelected?: boolean;
}

const PaginationItem = ({
  children,
  onClick,
  isSelected,
}: PaginationItemProps) => (
  <PaginationListItem onClick={onClick} isSelected={isSelected}>
    <PaginationLink>{children}</PaginationLink>
  </PaginationListItem>
);

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (index: number) => void;
}

export const Pagination = ({
  currentPage,
  onPageChange,
  totalPages,
}: PaginationProps) => {
  const paginationItems = [];
  for (let i = 0; i < totalPages; i++) {
    const isSelected = i === currentPage;
    paginationItems.push(
      <PaginationItem
        onClick={() => {
          onPageChange(i);
        }}
        key={i}
        isSelected={isSelected}
      >
        {i + 1}
      </PaginationItem>
    );
  }

  const handleNextPage = () => {
    onPageChange(currentPage + 1);
  };
  const handlePrevPage = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <nav>
      <PaginationWarper>
        <PaginationItem onClick={handlePrevPage}>&#8592;</PaginationItem>
        {paginationItems}
        <PaginationItem onClick={handleNextPage}>&#8594;</PaginationItem>
      </PaginationWarper>
    </nav>
  );
};
