import React from "react";

const SearchInput = () => {
  return (
    <>
      <div className="form-group flex-none">
        <div className="input-group">
          <input
            type="text"
            className="input input-bordered rounded-full "
            placeholder="Search....."
          />
          <button className="btn btn-square bg-base-100">
            <BsSearch className="text-2xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchInput;
