import React from "react";
import { Column, useTable } from "react-table";
import { IoFilter } from "react-icons/io5";
import "./UserTable.css";
interface Colums {
  orgName: string;
  userName: string;
  email: string;
}

const columns: Column<Colums>[] = [
  {
    Header: "Organization",
    accessor: "orgName" as keyof Colums,
  },
  {
    Header: "Username",
    accessor: "userName" as keyof Colums,
  },
  {
    Header: "email",
    accessor: "email" as keyof Colums,
  },
  //   {
  //     Header: "Phone number",
  //     accessor: "orgName" as keyof Colums,
  //   },
  //   {
  //     Header: "Date joined",
  //     accessor: "orgName" as keyof Colums,
  //   },
];

const demoData = [
  {
    orgName: "ABC",
    userName: "demo",
    email: "chi@gmail.com",
  },
  {
    orgName: "ABC",
    userName: "demo",
    email: "chi@gmail.com",
  },
  {
    orgName: "ABC",
    userName: "demo",
    email: "chi@gmail.com",
  },
];

const UserTable = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Colums>({ columns, data: demoData });
  return (
    <div className="w-full mt-10 bg-white table-style p-[30px]">
      <table
        className="w-full border-spacing-[103px] text-subprimary"
        {...getTableProps()}
      >
        <thead className="">
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props
                    <th
                      className="text-left space-x-3 "
                      {...column.getHeaderProps()}
                    >
                      <span className="uppercase">
                        {
                          // Render the header
                          column.render("Header")
                        }
                      </span>
                      <IoFilter size={16} className="inline-block" />
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        <tbody className="" {...getTableBodyProps()}>
          {
            // Loop over the table rows
            rows.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr
                  className=" border-b border-b-primary/10 last:border-b-0"
                  {...row.getRowProps()}
                >
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <td
                          className="py-[21px] text-sm"
                          {...cell.getCellProps()}
                        >
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
