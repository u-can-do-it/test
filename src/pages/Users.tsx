import { useQuery } from "react-query";
import { api } from "../api/api";
import { User } from "../api/types";
import { PaginatedTable } from "../components/table/paginated-table";
import { TableConfigItem } from "../components/table/types";

const config: TableConfigItem<User>[] = [
  { header: "id", key: "id", cellData: ({ id }) => id },
  { header: "Name", key: "name", cellData: ({ name }) => name },
  { header: "Username", key: "username", cellData: ({ username }) => username },
  { header: "Email", key: "email", cellData: ({ email }) => email },
  {
    header: "Street",
    key: "street",
    cellData: ({ address }) => address?.street,
  },
  { header: "Suite", key: "suite", cellData: ({ address }) => address?.suite },
  { header: "City", key: "city", cellData: ({ address }) => address?.city },
  {
    header: "Zipcode",
    key: "zipcode",
    cellData: ({ address }) => address.zipcode,
  },
  { header: "Lat", key: "lat", cellData: ({ address }) => address?.geo?.lat },
  { header: "Lng", key: "lng", cellData: ({ address }) => address?.geo?.lng },
];

export const Users = () => {
  const { data, isFetched } = useQuery("users", api.getUsers);

  return data?.length && isFetched ? (
    <PaginatedTable data={data} config={config} paginationLength={20} />
  ) : null;
};
