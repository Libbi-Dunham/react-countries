import React from 'react';

export default function Controls({ sort, setSort }) {
  return (
    <div>
      <select className="sort" value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="a-z">A-Z</option>
        <option value="z-a">Z-A</option>
      </select>
    </div>
  );
}
