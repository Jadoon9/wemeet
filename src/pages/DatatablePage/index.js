import React, { useEffect, useMemo } from "react";
import DataTable from "../../components/DataTabel/DataTable";
import { getTableData } from "../../components/DataTabel/tablethunk";
import MainPageLayout from "../../components/MainPageLayout/MainPageLayout";
import { useDispatch, useSelector } from "react-redux";
import NameRangeColumnFilter from "../../components/DataTabel/NameRangeColumnFilter";
import Button from "../../components/UiElements/Button";

const DataTablePage = () => {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.table);

  const handleClickGroup = (original) => {
    console.log(original, "clickedd");
  };

  const columns = useMemo(
    () => [
      { Header: "Id", accessor: "Id" },
      { Header: "Name", accessor: "Name" },
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
      { Header: "Date", accessor: "Date" },
      {
        Header: "Price",
        accessor: "Price",
        Filter: NameRangeColumnFilter,
        filter: "between",
      },
      { Header: "Amount", accessor: "Amount" },
      { Header: "Quantity", accessor: "Quantity" },
      { Header: "Status", accessor: "Status" },
      {
        Header: "Actions",
        Cell: ({ original }) => (
          <Button onClick={() => handleClickGroup(original)} text="Delete" />
        ),
      },
    ],
    []
  );

  useEffect(() => {
    dispatch(getTableData());
  }, [dispatch]);

  const tableData = useMemo(() => data, []);

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
          <>{tableData && <DataTable columns={columns} data={tableData} />}</>
        )}
      </MainPageLayout>
    </>
  );
};

export default DataTablePage;
