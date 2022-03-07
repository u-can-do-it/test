import { renderHook, act } from "@testing-library/react-hooks";
import { usePagination } from "../hooks";

const DATA = [
  { id: 1, text: "test 1" },
  { id: 2, text: "test 2" },
  { id: 3, text: "test 3" },
  { id: 4, text: "test 4" },
  { id: 5, text: "test 5" },
];

describe("When using usePagination with default pagination size", () => {
  it("should return initial page index", () => {
    const { result } = renderHook(() => usePagination(DATA));

    expect(result.current.index).toBe(0);
  });

  it("should return default data length", () => {
    const { result } = renderHook(() => usePagination(DATA));

    expect(result.current.paginatedData.length).toBe(DATA.length);
  });

  it("should return default total pages number", () => {
    const { result } = renderHook(() => usePagination(DATA));

    expect(result.current.totalPages).toBe(1);
  });

  it("should not change index when total pages is 1", () => {
    const { result } = renderHook(() => usePagination(DATA));

    act(() => {
      result.current.changeIndex(3);
    });

    expect(result.current.index).toBe(0);
  });

  it("should not change index when value is negative", () => {
    const { result } = renderHook(() => usePagination(DATA));

    act(() => {
      result.current.changeIndex(-100);
    });

    expect(result.current.index).toBe(0);
  });
});

describe("When using usePagination with custom pagination size", () => {
  it("should not change index when value is outside of the array boundary", () => {
    const { result } = renderHook(() => usePagination(DATA, 2));

    act(() => {
      result.current.changeIndex(DATA.length);
    });

    expect(result.current.index).toBe(0);
  });

  it("should return 2 pages", () => {
    const { result } = renderHook(() => usePagination(DATA, 3));

    expect(result.current.totalPages).toBe(2);
  });

  it("should return 3 items when pagination length is 3", () => {
    const { result } = renderHook(() => usePagination(DATA, 3));

    expect(result.current.paginatedData.length).toBe(3);
  });
});
