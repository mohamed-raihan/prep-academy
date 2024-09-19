// App.js
import React from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

// Sample data
const data = [
  { id: 1, name: "John Doe", path: '/physics',  },
  { id: 2, name: "Jane Smith", path: '/chemistry',  },
  { id: 3, name: "Sam Green", path: '/biology', },
];

// Define columns for the table
const columns = [
  {
    name: "ID",
    selector: row => row.id,
    sortable: true,
  },
  {
    name: "Name",
    selector: row => row.name,
    sortable: true,
  },
  {
    name: "Age",
    selector: row => (
        <Link href={row.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'blue' }}>
          {row.path}
        </Link>
      ),
  },
];

function App() {
  return (
    <div className="App d-flex flex-column justify-content-center align-items-center">
      <h1>Prep Academy</h1>
      <DataTable
      className="w-50 mt-3"
        columns={columns}
        data={data}
        // pagination
        highlightOnHover
      />
    </div>
  );
}

export default App;