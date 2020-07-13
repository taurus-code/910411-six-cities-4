import {mapStateToProps, mapDispatchToProps} from "./app.jsx";
import offers from "../../mocks/offers.js";
import React from "react";
import App from "./app.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {mount} from "enzyme";

describe(`Tests for redux functions in App component`, () => {
  it(`MapStateToProps returns initial state`, () => {
    const initialState = {
      city: `Paris`,
      offers: offers[`Paris`],
    };

    expect(mapStateToProps(initialState)).toEqual(initialState);
  });

  it(`MapDispatchToProps should be called for onMenuClick with right type and payload`, () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).onMenuClick(`Amsterdam`);
    expect(dispatch.mock.calls[0][0]).toEqual({type: `CHANGE_CITY`, payload: `Amsterdam`});
  });
});

describe(`Tests for App component`, () => {
  const mockStore = configureStore([]);
  const initialState = {
    city: `Cologne`,
    offers: offers[`Cologne`],
    onMenuClick: () => {},
  };
  const store = mockStore(initialState);

  const tree = mount(
      <Provider store={store}>
        <App />
      </Provider>
  );

  it(`Initial state from store should be right`, () => {

    expect(tree.props().store.getState()).toBe(initialState);

  });

  it(`After clicking on the header, the link properties are passed the path to the offer page`, () => {

    const headers = tree.find(`.place-card__name`);
    const header = headers.at(0);
    header.simulate(`click`);
    const link = tree.find(`Link`).at(0);
    expect(link.props().to).toBe(`/offer/1`);

  });
});

