import { useState } from "react";
import { TableDataItem } from "./types";

export const usePagination = <Data extends TableDataItem>(
  data: Data[],
  paginationLength: number = 10
) => {
  const [index, setIndex] = useState(0);
  const startIndex = index * paginationLength;
  const lastIndex = startIndex + paginationLength;
  const totalPages = Math.ceil(data.length / paginationLength);

  const sliceStart =
    startIndex <= data.length
      ? startIndex
      : data.length - (startIndex - 1) * paginationLength;
  const sliceEnd = lastIndex <= data.length ? lastIndex : data.length;
  const paginatedData = data.slice(sliceStart, sliceEnd);

  const changeIndex = (nextIndex: number) => {
    if (nextIndex >= 0 && nextIndex < totalPages) {
      setIndex(nextIndex);
    }
  };

  return {
    paginatedData,
    totalPages,
    changeIndex,
    index,
  };
};
