import React from "react";
import { Link } from "react-router-dom";

const items = [
  { id: 1, name: "Item 1", description: "Description for Item 1" },
  { id: 2, name: "Item 2", description: "Description for Item 2" },
  { id: 3, name: "Item 3", description: "Description for Item 3" },
];

function ItemList() {
  return (
    <div>
      <h1>Item List</h1>
      <ul>
        {items.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/items/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
