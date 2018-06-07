import React, { Component } from "react";

import "./App.css";

import Invoice from "./models/invoice";
import { onPatch } from "mobx-state-tree";
import makeInspectable from "mobx-devtools-mst";
import { observer } from "mobx-react";
import InvoiceComponent from "./components/invoice/invoice";
const invoice = Invoice.create({ currency: "CAD" });

onPatch(invoice, patch => {
  console.log(patch);
});

makeInspectable(invoice);

class App extends Component {
  render() {
    return (
      <div className="App">
        <InvoiceComponent invoice={invoice} />
      </div>
    );
  }
}

export default observer(App);
