import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import SassExamplePage from "./pages/SassExamplePage/SassExamplePage";
import WarehouseListPage from "./pages/WarehouseListPage/WarehouseListPage";
import WarehouseDetailPage from "./pages/WarehouseDetailPage/WarehouseDetailPage";
import InventoryListPage from "./pages/InventoryListPage/InventoryListPage";
import InventoryDetailPage from "./pages/InventoryDetailPage/InventoryDetailPage";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";
import DeleteWarehousePage from "./pages/DeleteWarehousePage/DeleteWarehousePage";
import DeleteInventoryPage from "./pages/DeleteInventoryPage/DeleteInventoryPage";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SassExamplePage />}></Route>
          <Route path="/warehouses" element={<WarehouseListPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
