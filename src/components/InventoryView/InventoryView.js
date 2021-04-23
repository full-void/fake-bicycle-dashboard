import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import Tooltip from "@material-ui/core/Tooltip";

import "./InventoryView.scss";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Item name", width: 150 },
  { field: "category", headerName: "Category", width: 130 },
  {
    field: "stock",
    headerName: "Stock",
    type: "number",
    width: 130,
  },
];

const rows = [
  { id: 1, name: "Pedals", category: "Parts", stock: 21 },
  { id: 2, name: "Oil", category: "Aux", stock: 14 },
  { id: 3, name: "Chains", category: "Parts", stock: 52 },
  { id: 4, name: "Brakes", category: "Parts", stock: 38 },
  { id: 5, name: "Grease", category: "Aux", stock: 12 },
];

function InventoryView() {
  return (
    <div className="inventory-view-table pa3 ph5-ns">
      <Tooltip title="Your Inventory. You can also sort the table via the columns by either clicking or selecting the option from the 3-dot menu besides the column name as you hover over it.">
        <h1 className="title">Ron's Inventory</h1>
      </Tooltip>
      <DataGrid rows={rows} columns={columns} pageSize={4} />
    </div>
  );
}

export default InventoryView