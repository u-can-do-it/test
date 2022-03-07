import { useQuery } from "react-query";
import { api } from "../api/api";
import { PaginatedTable } from "../components/table/paginated-table";

export const Comments = () => {
  const { data, isFetched } = useQuery("comments", api.getComments);

  return isFetched && data ? (
    <PaginatedTable data={data} paginationLength={25}></PaginatedTable>
  ) : null;
};
