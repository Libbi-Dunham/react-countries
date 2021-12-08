import React from 'react';

export default function CountriesCard({ name, iso2 }) {
  return (
    <div className="Countries-Card">
      <div className="details">
        <div className="name">{name}</div>
      </div>
      <div className="image">
        <img src={`https://flagcdn.com/24x18/${iso2.toLowerCase()}.png`} />;
      </div>
    </div>
  );
}
