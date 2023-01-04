import React, { useMemo } from "react";

import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

const MuiTable = ({ data, columns, pageSize, pageChange }) => {
  // const [pageSize, setPageSize] = useState(null);
  return (
    <div style={{ height: "500px" }}>
      <DataGrid
        columns={columns}
        rows={data}
        getRowId={(row) => row.id}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => {
          pageChange(newPageSize);
        }}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
      />
    </div>
  );
};

export default MuiTable;
