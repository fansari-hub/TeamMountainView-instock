import "./InventoryListPage.scss";
import { NavLink } from "react-router-dom";
import InventoryTableRow from "../../components/InventoryTableRow/InventoryTableRow";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";

const InventoryListPage = ({ inventoryData }) => {
  return (
    <>
      <HeaderComponent />
      <main className="InventoryListPage__main">
        <div className="InventoryListPage__main__header">
          <h2 className="InventoryListPage__main__title font-H1-PageHeader">Inventory</h2>
          <input className="InventoryListPage__main__search" placeholder="Search..." />
          <NavLink to="/inventory/add">
            <button className="InventoryListPage__main__button">+Add New Item</button>
          </NavLink>
        </div>
        <table className="InventoryListPage__table">
          <thead>
            <tr className="InventoryListPage__table__header">
              <th className="InventoryListPage__table__header__col">
                <div className="InventoryListPage__table__header__col__group">
                  <div className="font-H4-TableHeader">INVENTORY ITEM</div>
                  <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                </div>
              </th>
              <th className="InventoryListPage__table__header__col">
                <div className="InventoryListPage__table__header__col__group">
                  <div className="font-H4-TableHeader">CATEGORY</div>
                  <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                </div>
              </th>
              <th className="InventoryListPage__table__header__col">
                <div className="InventoryListPage__table__header__col__group">
                  <div className="font-H4-TableHeader">STATUS</div>
                  <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                </div>
              </th>
              <th className="InventoryListPage__table__header__col">
                <div className="InventoryListPage__table__header__col__group">
                  <div className="font-H4-TableHeader">QTY</div>
                  <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                </div>
              </th>
              <th className="InventoryListPage__table__header__col">
                <div className="InventoryListPage__table__header__col__group">
                  <div className="font-H4-TableHeader">WAREHOUSE</div>
                  <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                </div>
              </th>
              <th className="InventoryListPage__table__header__col">
                <div className="InventoryListPage__table__header__col__group InventoryListPage__table__header__col__group--actions">
                  <div className="font-H4-TableHeader">ACTIONS</div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {inventoryData.map((inventory) => (
              <InventoryTableRow key={inventory.id} inventory={inventory} warehouse_filtered={false} />
            ))}
          </tbody>
        </table>
      </main>
      <FooterComponent />
    </>
  );
};

export default InventoryListPage;
