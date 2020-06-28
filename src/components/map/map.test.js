import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import {MapSettings} from "../../const";
import offers from "../../mocks/offers.js";

describe(`<Map />`, () => {
  it(`Should Map render correctly`, () => {
    const tree = renderer
      .create(
          <Map
            offers={offers}
            mapSettings={MapSettings}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});