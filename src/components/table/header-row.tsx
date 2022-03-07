import { Header, HeaderCell, Row } from "./styles";
import { TableConfigItem, TableDataItem } from "./types";

interface HeaderRowProps<Data extends TableDataItem> {
  config?: TableConfigItem<Data>[];
}

export const HeaderRow = <Data extends TableDataItem>({
  config,
}: HeaderRowProps<Data>) => {
  return (
    <Header>
      <Row>
        {config?.map(({ header, key }) => (
          <HeaderCell key={key}>{header}</HeaderCell>
        ))}
      </Row>
    </Header>
  );
};
