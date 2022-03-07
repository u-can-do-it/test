export type TableDataItem = {
  [key: string]: any;
};

export interface TableConfigItem<Data extends TableDataItem> {
  header: string;
  key: string;
  cellData: (data: Data) => unknown;
}
