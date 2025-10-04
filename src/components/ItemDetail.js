import React from "react";
import { useParams } from "react-router-dom";

const items = [
  { id: 1, name: "Item 1", description: "Description for Item 1" },
  { id: 2, name: "Item 2", description: "Description for Item 2" },
  { id: 3, name: "Item 3", description: "Description for Item 3" }
];

const ItemDetail = () => {
  const { id } = useParams();
  const item = items.find(i => i.id === Number(id));

  if (!item) return <div>Not found</div>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetail;
