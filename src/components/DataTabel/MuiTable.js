import React, { useMemo } from "react";

import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const MuiTable = ({ data, columns }) => {
  return (
    <div style={{ height: "500px" }}>
      <DataGrid columns={columns} rows={data} />
    </div>
  );
};

export default MuiTable;
