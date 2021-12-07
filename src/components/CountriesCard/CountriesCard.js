import React from 'react';

export default function CountriesCard({ name }) {
  return (
    <div className="Countries-Card">
      <div className="details">
        <div className="name">{name}</div>
      </div>
      <div className="image">{/* <img src={image} /> */}</div>
    </div>
  );
}
