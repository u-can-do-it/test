import { HeaderRow } from "./header-row";
import { Row, TableWrapper, Cell, TableBody } from "./styles";
import { TableConfigItem, TableDataItem } from "./types";
import { makeConfig } from "./utils";

export interface TableProps<Data extends TableDataItem> {
  data: Data[];
  config?: TableConfigItem<Data>[];
}

export const Table = <Data extends TableDataItem>({
  data,
  config,
}: TableProps<Data>) => {
  const rowConfig = config ?? makeConfig(data);
  return (
    <TableWrapper>
      <HeaderRow config={rowConfig} />

      <TableBody>
        {data.map((rowData, rowIndex) => (
          <Row key={rowIndex}>
            {rowConfig?.map(({ cellData, key }) => (
              <Cell key={key}>{cellData(rowData)} </Cell>
            ))}
          </Row>
        ))}
      </TableBody>
    </TableWrapper>
  );
};
