import { TableConfigItem, TableDataItem } from "./types";

export const makeConfig = <Data extends TableDataItem>(
  data: Data[]
): TableConfigItem<Data>[] => {
  return Object.keys(data[0]).map((key) => ({
    header: key,
    key,
    cellData: (data) => data?.[key],
  }));
};
