import "./InventoryListWarehousePage.scss";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import InventoryTableRow from "../../components/InventoryTableRow/InventoryTableRow";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import InfoWarehouse from "../../components/InfoWarehouse/InfoWarehouse";

const InventoryListWarehousePage = ({ apiURL }) => {
  const { id } = useParams();
  const colSizes = ["22%", "22%", "29%", "15%", "0%", "10%"];

  let [warehouseInventoryData, setWarehouseInventoryData] = useState([]);
  let [warehouseData, setWarehouseData] = useState({});

  useEffect(() => {
    const fetchDataWarehouseInventory = async () => {
      let response;
      try {
        response = await axios.get(apiURL + "/warehouses/" + id + "/inventories");
        setWarehouseInventoryData(response.data);
      } catch (error) {
        alert(`InventoryWarehousePage.useEffect().fetchDataWarehouseInventory() requested failed with error: ${error}`);
        return -1;
      }
    };

    const fetchDataWarehouse = async () => {
      let response;
      try {
        response = await axios.get(apiURL + "/warehouses/" + id);
        setWarehouseData(response.data);
      } catch (error) {
        alert(`InventoryWarehousePage.useEffect().fetchDataWarehose() requested failed with error: ${error}`);
        return -1;
      }
    };

    fetchDataWarehouseInventory();
    fetchDataWarehouse();
  }, [apiURL]);

  return (
    <>
      <HeaderComponent />
      <div className="InventoryListWarehousePage">
        <div className="InventoryListWarehousePage__left">
          <div className="InventoryListWarehousePage-spacer"></div>
        </div>
        <main className="InventoryListWarehousePage__main">
          <div className="InventoryListWarehousePage__main__header">
            <div className="InventoryListWarehousePage__main__header__titlegroup">
              <NavLink to={"/warehouses"}>
                <img className="InventoryListWarehousePage__main__header__titlegroup__backarrow" src="/src/assets/images/Icons/arrow_back-24px.svg" alt="back arrow" />
              </NavLink>
              <h2 className="InventoryListWarehousePage__main__header__titlegroup__title font-H1-PageHeader">{warehouseData.warehouse_name}</h2>
            </div>
            <NavLink to={"/warehouses/" + id + "/edit"}>
              <button className="InventoryListWarehousePage__main__header__button">
                <img className="InventoryListWarehousePage__main__header__button__icon" src="/src/assets/images/Icons/edit-24px.svg" alt="edit icon" />
                <div className="InventoryListWarehousePage__main__header__button__label">Edit</div>
              </button>
            </NavLink>
          </div>
          <div>
            <InfoWarehouse SingleWarehouseDetails={warehouseData} />
          </div>
          <div className="InventoryListWarehousePage__table">
              <div className="InventoryListWarehousePage__table__header">
                <div className="InventoryListWarehousePage__table__header__col" style={{ width: colSizes[0] }}>
                  <div className="InventoryListWarehousePage__table__header__col__group">
                    <div className="font-H4-TableHeader">INVENTORY ITEM</div>
                    <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                  </div>
                </div>
                <div className="InventoryListWarehousePage__table__header__col" style={{ width: colSizes[1] }}>
                  <div className="InventoryListWarehousePage__table__header__col__group">
                    <div className="font-H4-TableHeader">CATEGORY</div>
                    <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                  </div>
                </div>
                <div className="InventoryListWarehousePage__table__header__col" style={{ width: colSizes[2] }}>
                  <div className="InventoryListWarehousePage__table__header__col__group">
                    <div className="font-H4-TableHeader">STATUS</div>
                    <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                  </div>
                </div>
                <div className="InventoryListWarehousePage__table__header__col" style={{ width: colSizes[3] }}>
                  <div className="InventoryListWarehousePage__table__header__col__group">
                    <div className="font-H4-TableHeader">QUANTITY</div>
                    <img src="/src/assets/images/Icons/sort-24px.svg" alt="sort icon" />
                  </div>
                </div>
                <div className="InventoryListWarehousePage__table__header__col" style={{ width: colSizes[5] }}>
                  <div className="InventoryListWarehousePage__table__header__col__group InventoryListWarehousePage__table__header__col__group--actions">
                    <div className="font-H4-TableHeader">ACTIONS</div>
                  </div>
                </div>
              </div>

            <div>
              {warehouseInventoryData.map((inventory, arrayIndex) => (
                <InventoryTableRow key={inventory.id} inventory={inventory} warehouse_filtered={true} colSizes={colSizes} arrayIndex={arrayIndex} />
              ))}
            </div>
          </div>
        </main>
        <div className="InventoryListWarehousePage__right">
          <div className="InventoryListWarehousePage-spacer"></div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default InventoryListWarehousePage;
