import React, { Component } from "react";
import { observer } from "mobx-react";
import Item from "../invoiceItem/item";
import "./invoice.css";

class InvoiceComponent extends Component {
  render() {
    const { invoice } = this.props;
    return (
      <div className="container">
        <div className="content">
          <h2>{invoice.status()}</h2>
          {!invoice.is_paid && <button onClick={invoice.markPaid}>Pay</button>}

          <form
            onSubmit={e => {
              e.preventDefault();
              invoice.itemList.add({
                name: this.nameInput.value,
                quantity: parseInt(this.quantityInput.value, 10),
                price: parseFloat(this.priceInput.value)
              });

              e.target.reset();
              this.nameInput.focus();
            }}
          >
            {" "}
            <div>
              <label htmlFor="">
                Name:
                <input
                  type="text"
                  ref={input => (this.nameInput = input)}
                  id="name"
                />
              </label>
            </div>
            <div>
              <label htmlFor="">
                Quanitity:
                <input
                  type="text"
                  ref={input => (this.quantityInput = input)}
                  id="name"
                />
              </label>
            </div>
            <div>
              <label htmlFor="">
                Price:
                <input
                  type="text"
                  ref={input => (this.priceInput = input)}
                  id="name"
                />
              </label>
            </div>
            <button type="submit">Add</button>
          </form>

          <h2>Total is: {invoice.itemList.total()}</h2>

          <ul>
            {invoice.itemList.items.map((item, i) => (
              <Item item={item} key={i} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default observer(InvoiceComponent);
