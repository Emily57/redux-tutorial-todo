import React from "react";
import cx from "classnames";
import { VISIBILITY_FILTERS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/actions";

export const VisibilityFilters = () => {
  const dispatch = useDispatch();
  const activeFilter = useSelector((state) => state.visibilityFilter);

  return (
    <div className="visibility-filters">
      {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              "filter",
              currentFilter === activeFilter && "filter--active"
            )}
            onClick={() => {
              dispatch(setFilter(currentFilter));
            }}
          >
            {currentFilter}
          </span>
        );
      })}
    </div>
  );
};
