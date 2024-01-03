import { useMemo } from "react";
import { useSortBy, useTable } from "react-table";

function SalesTable(props: any) {
  const data = props.weeklySales
  const columns = useMemo(() => COLUMNS, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns: columns,
        data: data,
        sortDescFirst: false,
        enableSortingRemoval: false,
        disableSortRemove: true,
      },
      useSortBy
    );

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
          {rows.map((row) => {
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
    </div>
  );
}

const formatMoney = (value) => {
  if (value) {
    return `$${value.toFixed(2)}`;
  } else {
    return "-";
  }
};

const currency = new Intl.NumberFormat("en-us", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0
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

function ascIcon(sortActive: boolean = false) {
  const opacity = sortActive ? undefined : { opacity: 0.5 };
  return (
    <svg
      className="table-sort-icon"
      style={opacity}
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 21 21"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m6.5 12.5l4-4l4 4"
      />
    </svg>
  );
}

function descIcon(sortActive: boolean = false) {
  const opacity = sortActive ? undefined : { opacity: 0.5 };
  return (
    <svg
      className="table-sort-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 21 21"
      style={opacity}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m14.5 8.5l-4 4l-4-4"
      ></path>
    </svg>
  );
}

export default SalesTable;
