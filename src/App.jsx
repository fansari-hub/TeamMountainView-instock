import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import WarehouseListPage from "./pages/WarehouseListPage/WarehouseListPage";
import InventoryListPage from "./pages/InventoryListPage/InventoryListPage";
import InventoryListWarehousePage from "./pages/InventoryListWarehousePage/InventoryListWarehousePage";
import InventoryDetailPage from "./pages/InventoryDetailPage/InventoryDetailPage";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage";
import HomePage from "./pages/HomePage/HomePage";
const WEBAPI_URL = "http://localhost:8080/api";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/ >}></Route>
          <Route path="/warehouses" element={<WarehouseListPage apiURL={WEBAPI_URL} />}></Route>
          <Route path="/warehouses/:id/edit" element={<EditWarehousePage apiURL={WEBAPI_URL} />}></Route>
          <Route path="/warehouses/add" element={<AddWarehousePage apiURL={WEBAPI_URL} />}></Route>
          <Route path="inventory" element={<InventoryListPage apiURL={WEBAPI_URL} />}></Route>
          <Route path="inventory/:id" element={<InventoryDetailPage apiURL={WEBAPI_URL} />}></Route>
          <Route path="/inventory/:id/edit" element={<EditInventoryPage apiURL={WEBAPI_URL} />}></Route>
          <Route path="/inventory/add" element={<AddInventoryPage apiURL={WEBAPI_URL} />}></Route>
          <Route path="/warehouses/:id/inventories" element={<InventoryListWarehousePage apiURL={WEBAPI_URL} />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
