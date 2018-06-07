import React from "react";
import { observer } from "mobx-react";

const Item = ({ item }) => (
  <li>
    Name:{item.name} Quantity: {item.quantity} Price: {item.price} . Total:{" "}
    {item.total()}
    <span>
      <button onClick={item.increment}>Increment</button>
      <button onClick={item.decrement}>Decrement</button>
      <button onClick={item.remove}>Remove</button>
    </span>
  </li>
);

export default observer(Item);
