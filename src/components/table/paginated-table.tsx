import { Table, TableProps } from "./table";
import { TableDataItem } from "./types";
import { usePagination } from "./hooks";
import { Pagination } from "./pagination";

interface PaginatedTableProps<Data extends TableDataItem>
  extends TableProps<Data> {
  paginationLength?: number;
}

export const PaginatedTable = <Data extends TableDataItem>({
  data,
  config,
  paginationLength = 10,
}: PaginatedTableProps<Data>) => {
  const { changeIndex, totalPages, paginatedData, index } = usePagination(
    data,
    paginationLength
  );

  const hasPagination = totalPages > 1;
  return (
    <>
      <Table data={paginatedData} config={config} />
      {hasPagination && (
        <Pagination
          currentPage={index}
          onPageChange={changeIndex}
          totalPages={totalPages}
        />
      )}
    </>
  );
};
