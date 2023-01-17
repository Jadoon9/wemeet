import { Routes, Route } from "react-router-dom";

function Routess() {
  return (
    <Routes>
      {/* Public Routesss */}
      <Route path="/login" />
      <Route path="/register" />

      {/* Protected Routess */}

      <Route pat="/" />
      {/* <Route path="table" element={<DataTablePage />} /> */}
      <Route path="/calendar" />
      <Route path="/form" />
      <Route path="/stripe-checkout" />
      <Route path="/stripe-cancel" />
      <Route path="/stripe-success" />
      <Route path="/paypal" />
      <Route path="/progress-bar" />
      <Route path="/notifications" />
      <Route path="/charts" />
      <Route path="/breadcrumbs" />
      <Route path="/alerts" />
      <Route path="/editor" />
      <Route path="/carousel" />
      <Route path="/cards" />
      <Route path="/breadcrumbs" />
    </Routes>
  );
}

export default Routess;
