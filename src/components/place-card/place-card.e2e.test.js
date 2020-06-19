import React from "react";
import {shallow} from "enzyme";
import PlaceCard from "./place-card.jsx";

const offer = {
  id: 1,
  name: `Canal View Prinsengracht`,
  type: `Apartment`,
  price: 120,
  rating: 4,
  premium: true,
  photo: `img/apartment-01.jpg`,
};

describe(`<PlaceCard />`, () => {
  it(`When you hover the cursor over the card the handler is called with id of realty object`, () => {
    const handleHeaderClick = jest.fn();
    const handleChangeActiveCard = jest.fn((id) => {
      return id;
    });
    const main = shallow(
        <PlaceCard
          offer={offer}
          onHover={handleChangeActiveCard}
          handleHeaderClick={handleHeaderClick}
        />
    );
    const card = main.find(`.place-card`);
    card.simulate(`mouseover`);
    expect(handleChangeActiveCard).toHaveBeenCalledWith(1);

  });
});
