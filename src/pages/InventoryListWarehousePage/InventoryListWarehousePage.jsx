import "./InventoryListWarehousePage.scss";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import InventoryTableRow from "../../components/InventoryTableRow/InventoryTableRow";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import InfoWarehouse from "../../components/InfoWarehouse/InfoWarehouse";

const InventoryListWarehousePage = ({ inventoryData, warehouseData }) => {
  const { id } = useParams();
  const inventoryDataFiltered = inventoryData.filter((e) => e.warehouse_id == id);
  const warehouseIndex = warehouseData.findIndex((o) => o.id == id);
  const SingleWarehouseDetails = warehouseData[warehouseIndex];
  const colSizes = ["22%","22%","29%","15%","0%","10%"];

  return (  
    <>
      <HeaderComponent />
      <div className="InventoryListWarehousePage">
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
        <table className="InventoryListWarehousePage__table">
          <thead>
            <tr className="InventoryListWarehousePage__table__header">
            <th className="InventoryListWarehousePage__table__header__col" style={{width: colSizes[0]}}>
                <div className="InventoryListWarehousePage__table__header__col__group">
                  <div className="font-H4-TableHeader">INVENTORY ITEM</div>
                  <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                </div>
              </th>
              <th className="InventoryListWarehousePage__table__header__col" style={{width: colSizes[1]}}>
                <div className="InventoryListWarehousePage__table__header__col__group">
                  <div className="font-H4-TableHeader">CATEGORY</div>
                  <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                </div>
              </th>
              <th className="InventoryListWarehousePage__table__header__col" style={{width: colSizes[2]}}>
                <div className="InventoryListWarehousePage__table__header__col__group">
                  <div className="font-H4-TableHeader">STATUS</div>
                  <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                </div>
              </th>
              <th className="InventoryListWarehousePage__table__header__col" style={{width: colSizes[3]}}>
                <div className="InventoryListWarehousePage__table__header__col__group">
                  <div className="font-H4-TableHeader">QUANTITY</div>
                  <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                </div>
              </th>
              <th className="InventoryListWarehousePage__table__header__col" style={{width: colSizes[5]}}>
                <div className="InventoryListWarehousePage__table__header__col__group InventoryListWarehousePage__table__header__col__group--actions">
                  <div className="font-H4-TableHeader">ACTIONS</div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {inventoryDataFiltered.map((inventory) => (
              <InventoryTableRow key={inventory.id} inventory={inventory} warehouse_filtered={true} colSizes={colSizes} />
            ))}
          </tbody>
        </table>
      </main>
      </div>
      <FooterComponent />
    </>
  );
};

export default InventoryListWarehousePage;
