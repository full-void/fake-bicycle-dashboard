import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import Tooltip from "@material-ui/core/Tooltip";

import "./CustomerView.scss";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
  { field: "email", headerName: "Email", width: 450 },
  { field: "phone", headerName: "Phone No", width: 200 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 130,
  },
  {
    field: "repairs",
    headerName: "Repairs",
    type: "number",
    width: 130,
  },
];

const rows = [
  {
    id: 1,
    lastName: "Yuki",
    firstName: "Asuna",
    email: "asunay@sao.com",
    phone: "5131234567",
    age: 21,
    repairs: 3,
  },
  {
    id: 2,
    lastName: "Joe",
    firstName: "Stark",
    email: "sjoe@firon.com",
    phone: "1230682844",
    age: 42,
    repairs: 2,
  },
  {
    id: 3,
    lastName: "Raj",
    firstName: "Kumar",
    email: "kraj@gmail.com",
    phone: "4726758292",
    age: 35,
    repairs: 1,
  },
];

function CustomerView() {
  return (
    <div className="customer-view-table pa3 ph5-ns">
      <Tooltip title="Your Customers. You can also sort the table via the columns by either clicking or selecting the option from the 3-dot menu besides the column name as you hover over it.">
        <h1 className="title">Ron's Customers</h1>
      </Tooltip>
      <DataGrid rows={rows} columns={columns} pageSize={4} />
    </div>
  );
}

export default CustomerView