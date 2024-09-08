import "./InventoryListPage.scss";
import { NavLink } from "react-router-dom";
import InventoryTableRow from "../../components/InventoryTableRow/InventoryTableRow";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";


const InventoryListPage = ({ inventoryData }) => {

  let colSizes = ["22%","18%","20%","10%","20%","10%"];

  return (
    <>
      <HeaderComponent />
      <div className="InventoryListPage">
      <div className="InventoryListPage__left">
        <div className="InventoryListPage-spacer"></div>
      </div>
      <main className="InventoryListPage__main">
        <div className="InventoryListPage__main__header">
          <h2 className="InventoryListPage__main__title font-H1-PageHeader">Inventory</h2>
          <input className="InventoryListPage__main__search" placeholder="Search..." />
          <NavLink to="/inventory/add" style={{display:"contents"}}>
            <button className="InventoryListPage__main__button">+Add New Item</button>
          </NavLink>
        </div>
        <table className="InventoryListPage__table">
          <thead>
            <tr className="InventoryListPage__table__header">
              <th className="InventoryListPage__table__header__col" style={{width: colSizes[0]}}>
                <div className="InventoryListPage__table__header__col__group">
                  <div className="font-H4-TableHeader">INVENTORY ITEM</div>
                  <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                </div>
              </th>
              <th className="InventoryListPage__table__header__col" style={{width: colSizes[1]}}>
                <div className="InventoryListPage__table__header__col__group">
                  <div className="font-H4-TableHeader">CATEGORY</div>
                  <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                </div>
              </th>
              <th className="InventoryListPage__table__header__col" style={{width: colSizes[2]}}>
                <div className="InventoryListPage__table__header__col__group">
                  <div className="font-H4-TableHeader">STATUS</div>
                  <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                </div>
              </th>
              <th className="InventoryListPage__table__header__col" style={{width: colSizes[3]}}>
                <div className="InventoryListPage__table__header__col__group">
                  <div className="font-H4-TableHeader">QTY</div>
                  <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                </div>
              </th>
              <th className="InventoryListPage__table__header__col" style={{width: colSizes[4]}}>
                <div className="InventoryListPage__table__header__col__group">
                  <div className="font-H4-TableHeader">WAREHOUSE</div>
                  <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                </div>
              </th>
              <th className="InventoryListPage__table__header__col" style={{width: colSizes[5]}}>
                <div className="InventoryListPage__table__header__col__group InventoryListPage__table__header__col__group--actions">
                  <div className="font-H4-TableHeader">ACTIONS</div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody>
            {inventoryData.map((inventory, arrayIndex) => (
              <InventoryTableRow key={inventory.id} inventory={inventory} warehouse_filtered={false} colSizes={colSizes} arrayIndex={arrayIndex} />
            ))}
          </tbody>
        </table>
      </main>
      <div className="InventoryListPage__right">
      <div className="InventoryListPage-spacer"></div>
      </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default InventoryListPage;
