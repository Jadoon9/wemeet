import React, { useEffect, useMemo, useState } from "react";
import DataTable from "../../components/DataTabel/DataTable";
import { getTableData } from "../../components/DataTabel/tablethunk";
import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";
import { useDispatch, useSelector } from "react-redux";
import NameRangeColumnFilter from "../../components/DataTabel/NameRangeColumnFilter";
import Button from "../../components/UiElements/Button";
import { createSelector } from "reselect";
import MuiTable from "../../components/DataTabel/MuiTable";
import { Avatar } from "@mui/material";
import { Helmet } from "react-helmet";

const DataTablePage = () => {
  const [pageSize, setPageSize] = useState(5);
  const dispatch = useDispatch();
  const reactTableData = useMemo(
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

  const { data, loading } = useSelector((state) => state.table);
  const tableData = useMemo(() => [...data], []);

  // const tableHeader = useMemo(
  //   () =>
  //     data[0]
  //       ? Object.keys(data[0]).map((key) => {
  //           if (key === "img") {
  //             return {
  //               Header: key,
  //               accesor: key,
  //               Cell: ({ values }) => <img src={values} />,
  //               // maxWidth: 40,
  //             };
  //           }
  //           return { Header: key, accessor: key };
  //         })
  //       : [],
  //   [data]
  // );

  useEffect(() => {
    dispatch(getTableData());
  }, [dispatch]);

  const handleClickGroup = (original) => {
    console.log(original, "clickedd");
  };

  const columnsMuiDatatable = useMemo(
    () => [
      { field: "id", headerName: "Id", width: 150 },
      { field: "name", headerName: "Name", width: 150 },
      {
        field: "img",
        headerName: "Image",
        width: 150,
        renderCell: (params) => <Avatar src={params.row.img} />,
        sortable: false,
        filterable: false,
      },
      { field: "date", headerName: "Date", width: 150 },
      { field: "price", headerName: "Price", width: 150 },
      { field: "amount", headerName: "Amount", width: 150 },
      { field: "quantity", headerName: "Quantity", width: 150 },
      { field: "status", headerName: "Status", width: 150 },
    ],
    []
  );

  const pageChangeHandler = (num) => {
    setPageSize(num);
  };

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
            <Helmet>
              <meta charSet="utf-8" />
              <title>Dashboard | Data Table</title>
              <meta
                name="description"
                content="Data Table Component with react-table"
              />
            </Helmet>
            <DataTable columns={reactTableData} data={tableData} />
            {/* <MuiTable
              pageSize={pageSize}
              data={data}
              columns={columnsMuiDatatable}
              title="Mui Data Table"
              pageChange={pageChangeHandler}
            /> */}
          </div>
        )}
      </MainPageLayout>
    </>
  );
};

export default React.memo(DataTablePage);
