import "./InventoryListWarehousePage.scss";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import InventoryTableRow from "../../components/InventoryTableRow/InventoryTableRow";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import InfoWarehouse from "../../components/InfoWarehouse/InfoWarehouse";

const InventoryListPage = ({ inventoryData, warehouseData }) => {
  const { id } = useParams();
  const inventoryDataFiltered = inventoryData.filter((e) => e.warehouse_id == id);
  const warehouseIndex = warehouseData.findIndex((o) => o.id == id);
  const SingleWarehouseDetails = warehouseData[warehouseIndex];

  return (
    <>
      <HeaderComponent />
      <main className="InventoryListWarehousePage__main">
        <div className="InventoryListWarehousePage__main__header">
          <div className="InventoryListWarehousePage__main__header__titlegroup">
          <NavLink to={"/warehouses"}>
          <img className="InventoryListWarehousePage__main__header__titlegroup__backarrow" src="/src/assets/images/Icons/arrow_back-24px.svg" alt="back arrow" />
          </NavLink>
          <h2 className="InventoryListWarehousePage__main__header__titlegroup__title font-H1-PageHeader">{SingleWarehouseDetails.warehouse_name}</h2>
          </div>
          <NavLink to={"/warehouses/" + id + "/edit"}>
            <button className="InventoryListWarehousePage__main__header__button">
              <img className="InventoryListWarehousePage__main__header__button__icon" src="/src/assets/images/Icons/edit-24px.svg" alt="edit icon" />
              <div className="InventoryListWarehousePage__main__header__button__label">Edit</div>
            </button>
          </NavLink>
        </div>
        <div>
          <InfoWarehouse SingleWarehouseDetails={SingleWarehouseDetails} />
        </div>
        <table className="InventoryListWarehousePage__table__container">
          <thead>
            <tr className="InventoryListWarehousePage__table__header-container">
              <th className="InventoryListWarehousePage__table__header">
                <span className="font-H4-TableHeader">INVENTORY ITEM</span>
                <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
              </th>
              <th className="InventoryListWarehousePage__table__header">
                <span className="font-H4-TableHeader">CATEGORY</span>
                <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
              </th>
              <th className="InventoryListWarehousePage__table__header">
                <span className="font-H4-TableHeader">STATUS</span>
                <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
              </th>
              <th className="InventoryListWarehousePage__table__header">
                <span className="font-H4-TableHeader">QTY</span>
                <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
              </th>
              {/* <th className="InventoryListWarehousePage__table__header">
                <span className="font-H4-TableHeader">WAREHOUSE</span>
              </th> */}
              <th className="InventoryListWarehousePage__table__header">
                <span className="font-H4-TableHeader">ACTIONS</span>
              </th>
            </tr>
          </thead>

          <tbody>
            {inventoryDataFiltered.map((inventory) => (
              <InventoryTableRow key={inventory.id} inventory={inventory} warehouse_filtered={true} />
            ))}
          </tbody>
        </table>
      </main>
      <FooterComponent />
    </>
  );
};

export default InventoryListPage;
