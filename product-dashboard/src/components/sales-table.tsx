import { useMemo } from "react";
import { useSortBy, useTable } from "react-table";

function SalesTable(props: any) {
  const data = props.weeklySales;
  const columns = useMemo(() => COLUMNS, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <div className="sales-table">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                  </span>
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

export const COLUMNS = [
  {
    Header: "Week Ending",
    accessor: "weekEnding",
  },
  {
    Header: "Retail Sales",
    accessor: "retailSales",
  },
  {
    Header: "Wholesale Sales",
    accessor: "wholesaleSales",
  },
  {
    Header: "Units Sold",
    accessor: "unitsSold",
  },
  {
    Header: "Retailer Margin",
    accessor: "retailerMargin",
  },
];

export default SalesTable;
