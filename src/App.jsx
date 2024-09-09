import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import SassExamplePage from "./pages/SassExamplePage/SassExamplePage";
import WarehouseListPage from "./pages/WarehouseListPage/WarehouseListPage";
import WarehouseDetailPage from "./pages/WarehouseDetailPage/WarehouseDetailPage";
import InventoryListPage from "./pages/InventoryListPage/InventoryListPage";
import InventoryListWarehousePage from "./pages/InventoryListWarehousePage/InventoryListWarehousePage";
import InventoryDetailPage from "./pages/InventoryDetailPage/InventoryDetailPage";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";
import DeleteWarehousePage from "./pages/DeleteWarehousePage/DeleteWarehousePage";
import DeleteInventoryPage from "./pages/DeleteInventoryPage/DeleteInventoryPage";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage";
import axios from "axios";
const WEBAPI_URL = "http://localhost:8080/api";

// note that data were added only for testing UI;
// to be replaced with backend calls after we build out backend
import warehouseData from "./data/01_warehouses.json";
// import HeaderComponent from "./components/Header/headerComponent";

function App() {

  return (
    <>
      {/* <HeaderComponent /> */}
      <Router>
        <Routes>
          <Route path="/" element={<SassExamplePage />}></Route>
          <Route
            path="/warehouses"
            element={<WarehouseListPage warehouseData={warehouseData} />}
          ></Route>
          <Route
            path="/warehouses/:id"
            element={<WarehouseDetailPage />}
          ></Route>
          <Route
            path="/warehouses/:id/edit"
            element={<EditWarehousePage warehouseData={warehouseData} />}
          ></Route>
          <Route path="/warehouses/add" element={<AddWarehousePage />}></Route>
          <Route
            path="/warehouses/:id/delete"
            element={<DeleteWarehousePage />}
          ></Route>
          <Route
            path="inventory"
            element={<InventoryListPage apiURL = {WEBAPI_URL}/>}
          ></Route>
          <Route path="inventory/:id" element={<InventoryDetailPage apiURL = {WEBAPI_URL}/>}></Route>
          <Route
            path="/inventory/:id/edit"
            element={<EditInventoryPage />}
          ></Route>
          <Route path="/inventory/add" element={<AddInventoryPage />}></Route>
          <Route
            path="/inventory/:id/delete"
            element={<DeleteInventoryPage />}
          ></Route>
           <Route
            path="/warehouses/:id/inventories"
            element={<InventoryListWarehousePage apiURL = {WEBAPI_URL}/>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
