import { useEffect, useMemo } from "react";
import { usePagination, useSortBy, useTable } from "react-table";

function SalesTable(props: any) {
  const data = props.weeklySales;
  const columns = useMemo(() => COLUMNS, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns: columns,
      data: data,
      sortDescFirst: false,
      enableSortingRemoval: false,
      disableSortRemove: true,
      autoResetPageIndex: true,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useSortBy,
    usePagination
  );

  useEffect(() => {}, []);

  return (
    <div className="sales-column-table">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <span>{ascIcon(column.isSorted)}</span>
                    ) : (
                      <span>{descIcon(column.isSorted)}</span>
                    )
                  ) : (
                    <span>{ascIcon(column.isSorted)}</span>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <ul className="pagination">
        <li onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          <a className="nav-icon">{previousIcon(true)}</a>
        </li>
        <li onClick={() => previousPage()} disabled={!canPreviousPage}>
          <a className="nav-icon">{previousIcon()}</a>
        </li>
        <li>
          <p>
            Page{": "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </p>
        </li>
        <li onClick={() => nextPage()} disabled={!canNextPage}>
          <a className="nav-icon">{nextIcon()}</a>
        </li>
        <li
          onClick={() => gotoPage(pageOptions.length - 1)}
          disabled={!canPreviousPage}
        >
          <a className="nav-icon">{nextIcon(true)}</a>
        </li>
      </ul>
    </div>
  );
}

const currency = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
});

export const COLUMNS = [
  {
    Header: "Week Ending",
    accessor: "weekEnding",
  },
  {
    Header: "Retail Sales",
    accessor: "retailSales",
    Cell: ({ value }) => currency.format(value),
  },
  {
    Header: "Wholesale Sales",
    accessor: "wholesaleSales",
    Cell: ({ value }) => currency.format(value),
  },
  {
    Header: "Units Sold",
    accessor: "unitsSold",
  },
  {
    Header: "Retailer Margin",
    accessor: "retailerMargin",
    Cell: ({ value }) => currency.format(value),
  },
];

function nextIcon(isLastPage: boolean = false) {
  if (isLastPage)
    return (
      <svg
        className="nav-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 21 21"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m7.5 14.5l4-4l-4-4m4 8l4-4l-4-4"
        />
      </svg>
    );
  return (
    <svg
      className="nav-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 21"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m9.5 14.5l4-4l-4-4"
      />
    </svg>
  );
}

function previousIcon(isFirstPage: boolean = false) {
  if (isFirstPage)
    return (
      <svg
        className="nav-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 21 21"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m13.5 14.5l-4-4l4-4m-4 8l-4-4l4-4"
        />
      </svg>
    );
  return (
    <svg
      className="nav-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 21"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.5 14.5l-4-4l4-4"
      />
    </svg>
  );
}

function ascIcon(sortActive: boolean = false) {
  const opacity = sortActive ? undefined : { opacity: 0.5 };
  return (
    <svg
      className="sort-icon"
      style={opacity}
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 21 21"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m6.5 12.5l4-4l4 4"
      />
    </svg>
  );
}

function descIcon(sortActive: boolean = false) {
  const opacity = sortActive ? undefined : { opacity: 0.5 };
  return (
    <svg
      className="sort-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 21 21"
      style={opacity}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m14.5 8.5l-4 4l-4-4"
      ></path>
    </svg>
  );
}

export default SalesTable;
