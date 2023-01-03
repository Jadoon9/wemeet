import React, { useEffect, useMemo } from "react";
import DataTable from "../../components/DataTabel/DataTable";
import { getTableData } from "../../components/DataTabel/tablethunk";
import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";
import { useDispatch, useSelector } from "react-redux";
import NameRangeColumnFilter from "../../components/DataTabel/NameRangeColumnFilter";
import Button from "../../components/UiElements/Button";
import { createSelector } from "reselect";
import MuiTable from "../../components/DataTabel/MuiTable";

const DataTablePage = () => {
  const dispatch = useDispatch();
  // const check = createSelector(
  //   (state) => state.table.data,
  //   (option) => option
  // );
  // console.log(check, "checkdata");
  const { data, loading } = useSelector((state) => state.table);
  const tableData = useMemo(() => data, []);
  useEffect(() => {
    dispatch(getTableData());
  }, [dispatch]);

  const handleClickGroup = (original) => {
    console.log(original, "clickedd");
  };

  const columnsReactTable = useMemo(
    () => [
      { Header: "Id", accessor: "id" },
      { Header: "Name", accessor: "name" },
      {
        Header: "Image",
        accessor: "img",
        Cell: (tableProps) => (
          <img
            className="rounded-circle w-50"
            src={tableProps?.row?.original?.img}
            width={60}
            alt="User"
          />
        ),
      },
      { Header: "Date", accessor: "date" },
      {
        Header: "Price",
        accessor: "price",
        Filter: NameRangeColumnFilter,
        filter: "between",
      },
      { Header: "Amount", accessor: "amount" },
      { Header: "Quantity", accessor: "quantity" },
      { Header: "Status", accessor: "status" },
    ],
    []
  );

  const columnsMuiDatatable = useMemo(
    () => [
      { field: "id", headerName: "Id", width: 150 },
      { field: "name", headerName: "Name", width: 150 },
      { field: "img", headerName: "Image", width: 150 },
      { field: "date", headerName: "Date", width: 150 },
      { field: "price", headerName: "Price", width: 150 },
      { field: "amount", headerName: "Amount", width: 150 },
      { field: "quantity", headerName: "Quantity", width: 150 },
      { field: "status", headerName: "Status", width: 150 },
    ],
    []
  );

  return (
    <>
      <MainPageLayout
        title="Table"
        breadcrum1="Dashboard"
        breadcrum2="Data Table"
        // cardTitle="Table"
        link1="/"
        link2="/table"
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="h-100">
            {/* <DataTable columns={columnsReactTable} data={tableData} /> */}
            <MuiTable
              data={data}
              columns={columnsMuiDatatable}
              title="Mui Data Table"
              getRowId={(row) => row.id}
            />
          </div>
        )}
      </MainPageLayout>
    </>
  );
};

export default React.memo(DataTablePage);
