import React from "react";
import {shallow} from "enzyme";
import Main from "./main.jsx";
import {MapSettings} from "../../const.js";
import offers from "../../mocks/offers";
import cities from "../../mocks/cities";
import {SortType} from "../../const.js";

describe(`<Main />`, () => {
  it(`The header click handler should be called`, () => {
    const onPlaceCardHeaderClick = jest.fn();
    const onMenuClick = jest.fn();
    const activeCity = `Amsterdam`;
    const cityOffers = offers[activeCity];
    const main = shallow(
        <Main
          offers={cityOffers}
          mapSettings={MapSettings}
          cities={cities}
          activeCity = {activeCity}
          activeSortType={SortType.DEFAULT}
          onPlaceCardHeaderClick={onPlaceCardHeaderClick}
          onMenuClick={onMenuClick}
          onSortTypeClick={() => {}}
        />
    );

    const headerElements = main.find(`.place-card__name`);
    headerElements.forEach((header) => header.props().onClick());

    expect(onPlaceCardHeaderClick.mock.calls.length).toBe(headerElements.length);

  });
});

