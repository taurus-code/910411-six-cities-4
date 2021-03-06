import React from "react";
import renderer from "react-test-renderer";
import Sort from "./sort.jsx";
import {SortType} from "../../const.js";
import {DEFAULT_SORT_STATE} from "../../const.js";

describe(`<Sort />`, () => {
  it(`Should Sort render correctly`, () => {
    const tree = renderer
      .create(
          <Sort
            activeSortType = {SortType.DEFAULT}
            state = {DEFAULT_SORT_STATE}
            onSortTypeClick = {() => {}}
            onChangeItem = {() => {}}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
