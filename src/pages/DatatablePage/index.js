import React, { useEffect, useMemo } from "react";
import DataTable from "../../components/DataTabel/DataTable";
import { getTableData } from "../../components/DataTabel/tablethunk";
import MainPageLayout from "../../components/MainPageLayout";
import { useDispatch, useSelector } from "react-redux";

const DataTablePage = () => {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.table);

  const columns = useMemo(
    () => [
      { Header: "Id", accessor: "Id" },
      { Header: "Name", accessor: "Name" },
      { Header: "Image", accessor: "img" },
      { Header: "Date", accessor: "Date" },
      { Header: "Price", accessor: "Price" },
      { Header: "Amount", accessor: "Amount" },
      { Header: "Quantity", accessor: "Quantity" },
      { Header: "Status", accessor: "Status" },
    ],
    []
  );

  useEffect(() => {
    dispatch(getTableData());
  }, []);

  const tableData = useMemo(() => data, []);
  console.log(data, loading, "dataaa");
  return (
    <>
      <MainPageLayout
        title="Table"
        breadcrum1="Dashboard"
        breadcrum2="Data Table"
        cardTitle="Table"
        link1="/"
        link2="/table"
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          <DataTable columns={columns} data={tableData} />
        )}
      </MainPageLayout>
    </>
  );
};

export default DataTablePage;
