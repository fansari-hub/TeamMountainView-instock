import "./InventoryListPage.scss";
import { NavLink } from "react-router-dom";
import InventoryTableRow from "../../components/InventoryTableRow/InventoryTableRow";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import { useState, useEffect } from "react";
import axios from "axios";

const InventoryListPage = ({ apiURL }) => {
  let [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    const fetchDataInventory = async () => {
      let response;
      try {
        response = await axios.get(apiURL + "/inventory");
        setInventoryData(response.data);
      } catch (error) {
        alert(`App.useEffect().fetchDataInventory() requested failed with error: ${error}`);
        return -1;
      }
    };
    fetchDataInventory();
  }, [apiURL]);

  let colSizes = ["22%", "18%", "20%", "10%", "20%", "10%"];

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
            <input className="InventoryListPage__main__search font-P3-BodySmall" placeholder="Search..." />
            <NavLink to="/inventory/add" style={{ display: "contents" }}>
              <button className="InventoryListPage__main__button font-H3-label">+Add New Item</button>
            </NavLink>
          </div>
          <div className="InventoryListPage__table">
              <div className="InventoryListPage__table__header">
                <div className="InventoryListPage__table__header__col" style={{ width: colSizes[0] }}>
                  <div className="InventoryListPage__table__header__col__group">
                    <div className="font-H4-TableHeader">INVENTORY ITEM</div>
                    <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                  </div>
                </div>
                <div className="InventoryListPage__table__header__col" style={{ width: colSizes[1] }}>
                  <div className="InventoryListPage__table__header__col__group">
                    <div className="font-H4-TableHeader">CATEGORY</div>
                    <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                  </div>
                </div>
                <div className="InventoryListPage__table__header__col" style={{ width: colSizes[2] }}>
                  <div className="InventoryListPage__table__header__col__group">
                    <div className="font-H4-TableHeader">STATUS</div>
                    <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                  </div>
                </div>
                <div className="InventoryListPage__table__header__col" style={{ width: colSizes[3] }}>
                  <div className="InventoryListPage__table__header__col__group">
                    <div className="font-H4-TableHeader">QTY</div>
                    <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                  </div>
                </div>
                <div className="InventoryListPage__table__header__col" style={{ width: colSizes[4] }}>
                  <div className="InventoryListPage__table__header__col__group">
                    <div className="font-H4-TableHeader">WAREHOUSE</div>
                    <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                  </div>
                </div>
                <div className="InventoryListPage__table__header__col" style={{ width: colSizes[5] }}>
                  <div className="InventoryListPage__table__header__col__group InventoryListPage__table__header__col__group--actions">
                    <div className="font-H4-TableHeader">ACTIONS</div>
                  </div>
                </div>
              </div>

            <div>
              {inventoryData.map((inventory, arrayIndex) => (
                <InventoryTableRow apiURL={apiURL} setInventoryData={setInventoryData} key={inventory.id} inventory={inventory} inventoryData={inventoryData} warehouse_filtered={false} colSizes={colSizes} arrayIndex={arrayIndex} />
              ))}
            </div>
          </div>
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
