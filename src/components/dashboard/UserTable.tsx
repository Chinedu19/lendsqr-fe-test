import React, { Fragment, useMemo } from "react";
import {
  Column,
  useExpanded,
  useFilters,
  useGroupBy,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { IoFilter } from "react-icons/io5";
import "./UserTable.css";
import useAppContext from "../../hooks/useAppContext";
import { TableInstanceWithHooks, UserData } from "../../types";
import { Menu, Transition } from "@headlessui/react";
import { BsChevronDown, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import classNames from "classnames";
interface Colums {
  orgName: string;
  userName: string;
  email: string;
}

const columns: Column<UserData>[] = [
  {
    Header: "Organization",
    accessor: "orgName",
  },
  {
    Header: "Username",
    accessor: "userName",
  },
  {
    Header: "email",
    accessor: "email",
  },
  {
    Header: "Phone number",
    accessor: "phoneNumber",
  },
  {
    Header: "Date joined",
    accessor: "lastActiveDate",
  },
  {
    Header: "Status",
    accessor: "createdAt",
  },
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
  const { appUsers } = useAppContext();
  // const memoizedAppusers = useMemo(() => {
  //   return appUsers;
  // }, [appUsers]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    pageOptions,
    state: { pageIndex, pageSize },
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
  } = useTable<UserData>(
    { columns, data: appUsers },

    useFilters,
    useGroupBy,
    useSortBy,
    useExpanded,
    usePagination
  ) as TableInstanceWithHooks<UserData>;

  return (
    <>
      <div className="w-full mt-10 bg-white table-style p-[30px]">
        <table
          className="min-w-[200px] w-full overflow-x-auto border-spacing-[103px] text-subprimary"
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
                        className="text-left text-xs font-semibold space-x-3 "
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
              page.map((row) => {
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
      <div className="flex text-subprimary items-center justify-between my-5">
        <div className="flex space-x-[10px] items-center">
          <p>Showing</p>
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex px-3 py-[7px] space-x-3 bg-primary/10 w-full justify-center items-center rounded-md text-base font-medium text-primary hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                <span className="text-sm font-medium">{pageSize}</span>
                <BsChevronDown
                  className="ml-1 -mr-1 text-primary hover:text-primary/90"
                  size={10}
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  {[10, 20, 30, 40, 50].map((i) => (
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => setPageSize(i)}
                          className={`${
                            active ? "bg-secondary text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                        >
                          {i}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
          <p>out of {appUsers.length}</p>
        </div>
        <div className="flex space-x-1 items-center">
          <div
            onClick={() => {
              if (canPreviousPage) {
                gotoPage((i) => i - 1);
              }
            }}
            className={classNames(
              `cursor-pointer flex items-center justify-center bg-transparent w-6 h-6 rounded`,
              { "!bg-primary/10": canPreviousPage }
            )}
          >
            <BsChevronLeft className="text-primary" size={10} />
          </div>
          {pageOptions.slice(0, 3).map((i) => (
            <div
              onClick={() => gotoPage(i)}
              className="flex cursor-pointer items-center justify-center w-6 h-6 rounded"
            >
              <span
                className={classNames(`text-base text-subprimary`, {
                  "text-primary font-semibold": pageIndex === i,
                })}
              >
                {i + 1}
              </span>
            </div>
          ))}
          <div className="flex items-center justify-center cursor-pointer w-6 h-6 rounded">
            <span className="text-base text-subprimary">...</span>
          </div>
          {pageOptions
            .slice(pageOptions.length - 3, pageOptions.length)
            .map((i) => (
              <div
                onClick={() => gotoPage(i)}
                className="flex cursor-pointer items-center justify-center w-6 h-6 rounded"
              >
                <span
                  className={classNames(`text-base text-subprimary`, {
                    "text-primary font-semibold": pageIndex === i,
                  })}
                >
                  {i + 1}
                </span>
              </div>
            ))}
          <div
            onClick={() => {
              if (canNextPage) {
                gotoPage((i) => i + 1);
              }
            }}
            className={classNames(
              `cursor-pointer flex items-center justify-center bg-transparent w-6 h-6 rounded`,
              { "!bg-primary/10": canNextPage }
            )}
          >
            <BsChevronRight className="text-primary" size={10} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTable;
