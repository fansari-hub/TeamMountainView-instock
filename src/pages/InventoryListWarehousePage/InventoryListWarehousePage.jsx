import "./InventoryListWarehousePage.scss";
import { NavLink } from "react-router-dom";
import {useParams} from "react-router-dom";
import InventoryTableRow from "../../components/InventoryTableRow/InventoryTableRow";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";

const InventoryListPage = ({inventoryData}) => {

    const { id } = useParams();
    const inventoryDataFiltered = inventoryData.filter((e) => e.warehouse_id == id)

  return (
    <>
      <HeaderComponent />
      <main className="InventoryListPage__main">
        <div className="InventoryListPage__main__header">
          <h2 className="InventoryListPage__main__title font-H1-PageHeader">Warehouse: {id}</h2>
          <input className="InventoryListPage__main__search" placeholder="Search..." />
          <NavLink to="/inventory/add">
            <button className="InventoryListPage__main__button">+Add New Item</button>
          </NavLink>
        </div>
        <div>
            <p>TODO: Warehouse details will go here</p>
        </div>
        <table className="InventoryListPage__table__container">
          <thead>
            <tr className="InventoryListPage__table__header-container">
              <th className="InventoryListPage__table__header">
                <span className="font-H4-TableHeader">INVENTORY ITEM</span>
                <img
                  src="/src/assets/images/Icons/sort-24px.svg"
                  alt="sort icon"
                />
              </th>
              <th className="InventoryListPage__table__header">
                <span className="font-H4-TableHeader">CATEGORY</span>
                <img
                  src="/src/assets/images/Icons/sort-24px.svg"
                  alt="sort icon"
                />
              </th>
              <th className="InventoryListPage__table__header">
                <span className="font-H4-TableHeader">STATUS</span>
                <img
                  src="/src/assets/images/Icons/sort-24px.svg"
                  alt="sort icon"
                />
              </th>
              <th className="InventoryListPage__table__header">
                <span className="font-H4-TableHeader">QTY</span>
                <img
                  src="/src/assets/images/Icons/sort-24px.svg"
                  alt="sort icon"
                />
              </th>
              {/* <th className="InventoryListPage__table__header">
                <span className="font-H4-TableHeader">WAREHOUSE</span>
              </th> */}
              <th className="InventoryListPage__table__header">
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
