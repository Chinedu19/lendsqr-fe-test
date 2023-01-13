import React from "react";
import { FiSearch } from "react-icons/fi";
import classNames from "classnames";
type SearchBarProps = {
  className?: string;
};

const SearchBar = ({ className }: SearchBarProps) => {
  return (
    <div
      className={classNames(
        "flex w-full max-w-[400px] items-stretch",
        className
      )}
    >
      <input
        placeholder="Search for anything"
        className="w-full text-subprimary placeholder:text-subprimary focus:outline-none border border-primary border-r-0 border-opacity-20 text-sm py-3 px-5 rounded-lg rounded-r-none"
      />
      <div className="flex bg-secondary items-center justify-center px-[13px] rounded-lg rounded-l-none">
        <FiSearch color="white" />
      </div>
    </div>
  );
};

export default SearchBar;
