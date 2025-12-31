import React from "react";
import PropTypes from "prop-types";
import GoHomeButton from "../shared/GoHomeButton";

export default function PagesLayout({ children }) {
  return (
    <>
      <div className="w-full flex flex-row justify-start items-start p-6">
        <GoHomeButton />
      </div>
      <section>{children}</section>
    </>
  );
}

PagesLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
