import React, { Component } from 'react';

import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = () => (
  <div>
    <Location city={'Toluca'} />
    <WeatherData />
  </div>
);

export default WeatherLocation;
