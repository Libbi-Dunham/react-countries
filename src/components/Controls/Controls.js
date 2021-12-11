import React from 'react';

export default function Controls({ sort, setSort }) {
  return (
    <div>
      <select className="sort" value={sort} onChange={() => setSort((prevState) => !prevState)}>
        <option value="all">All</option>
        <option value="a-z">A-Z</option>
      </select>
    </div>
  );
}
