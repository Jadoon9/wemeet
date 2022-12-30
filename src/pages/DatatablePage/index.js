import React, { useEffect, useMemo } from "react";
import DataTable from "../../components/DataTabel/DataTable";
import { getTableData } from "../../components/DataTabel/tablethunk";
import MainPageLayout from "../../components/MainPageLayout";
import { useDispatch, useSelector } from "react-redux";
import SearchFilter from "../../components/DataTabel/GlobalSearchFilter";
import NameRangeColumnFilter from "../../components/DataTabel/NameRangeColumnFilter";
import RangeFilter from "../../components/DataTabel/NameRangeColumnFilter";
import MultiRangeSlider from "../../components/DataTabel/MultiRangeSlider";

const DataTablePage = () => {
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.table);

  const columns = useMemo(
    () => [
      { Header: "Id", accessor: "Id" },
      { Header: "Name", accessor: "Name" },
      {
        Header: "Image",
        accessor: "img",
        Cell: (tableProps) => (
          <img src={tableProps?.row?.original?.img} width={60} alt="User" />
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
