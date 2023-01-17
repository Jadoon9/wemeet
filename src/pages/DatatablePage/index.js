import React, { useEffect, useMemo, useState } from "react";
import DataTable from "../../components/DataTabel/DataTable";
import {
  deleteUser,
  getTableData,
} from "../../components/DataTabel/tablethunk";
import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";
import { useDispatch, useSelector } from "react-redux";
import NameRangeColumnFilter from "../../components/DataTabel/NameRangeColumnFilter";
import Button from "../../components/UiElements/Button";
import { createSelector } from "reselect";
import MuiTable from "../../components/DataTabel/MuiTable";
import { Avatar } from "@mui/material";
import { Helmet } from "react-helmet";
import { MdDelete, MdModeEditOutline } from "react-icons/md";
import { toast } from "react-toastify";

const DataTablePage = () => {
  const [pageSize, setPageSize] = useState(5);

  const dispatch = useDispatch();

  const handleDelete = async (row) => {
    console.log(row.values, "rowww");
    try {
      dispatch(deleteUser(row.values.id));
      dispatch(getTableData());
      toast.success(`Deleted ${row.values.name} `);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = (row) => {
    console.log(row.values, "rowww");
    alert(row.values.name);
  };

  const reactTableColumns = useMemo(
    () => [
      { Header: "Id", accessor: "id", filterable: false },
      { Header: "Name", accessor: "name", filterable: false },
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
      {
        Header: "Actions",
        Cell: ({ row }) => (
          <>
            <div className="d-flex">
              <MdDelete
                style={{
                  color: "red",
                  fontSize: "1.3rem",
                  cursor: "pointer",
                }}
                // className="bg-primary text-white"
                onClick={() => {
                  handleDelete(row);
                }}
              />
              &nbsp; &nbsp;
              <MdModeEditOutline
                style={{
                  color: "blue",
                  fontSize: "1.3rem",
                  cursor: "pointer",
                }}
                // className="bg-primary text-white"
                onClick={() => {
                  handleEdit(row);
                }}
              />
            </div>
          </>
        ),
      },
    ],
    []
  );

  // const actionColumn = ;

  // reactTableColumns.push(actionColumn);

  const { data, loading } = useSelector((state) => state.table);

  const tableData = useMemo(() => {
    return data.length > 0 ? [...data] : [];
  }, [data]);

  // const tableData = useMemo(() => {return [...data]}}, []);

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

  console.log(tableData, "tableData");
  // const pageChangeHandler = (num) => {
  //   setPageSize(num);
  // };

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
            {tableData.length > 0 ? (
              <DataTable columns={reactTableColumns} data={tableData} />
            ) : (
              <h2>No record found</h2>
            )}
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
