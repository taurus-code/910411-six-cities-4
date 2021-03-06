import React from 'react';
import PropTypes from 'prop-types';
import {placeCardType} from "../../../types.js";
import CitiesList from "../cities-list/cities-list.jsx";
import NoPlaces from "../no-places/no-places.jsx";
import PlaceListContainer from "../place-list-container/place-list-container.jsx";
import withSelectedItem from "../../hocs/with-selected-item.jsx";
import {DEFAULT_HOVERED_CARD} from "../../const.js";

const PlaceListContainerWithSelectedItem = withSelectedItem(PlaceListContainer, DEFAULT_HOVERED_CARD);

const Main = ({offers, cities, city, onMenuClick, isLoading, error}) => {
  return (
    <main className={`page__main page__main--index ${offers.length === 0 ? `page__main--index-empty` : ``}`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <CitiesList cities = {cities} activeCity = {city} onMenuClick = {onMenuClick}/>
        </section>
      </div>
      <div className="cities">
        {offers.length > 0 ? (<PlaceListContainerWithSelectedItem offers = {offers} city = {city} />) : ``}
        {offers.length > 0 || <NoPlaces activeCity = {city} isLoading = {isLoading} error = {error}/>}
      </div>
    </main>
  );
};

export default Main;

Main.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape(placeCardType)).isRequired,
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.number.isRequired,
};
