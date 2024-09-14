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

  let [sortQuery, setSortQuery] = useState("");
  let [orderBy, setOrderBy] = useState("ASC");
  let [sortByCol, setSortByCol] = useState(null);
  const colNames = ["item_name", "category", "status", "quantity"];
  const sortIconNotActive = "/src/assets/images/Icons/sort-24px.svg";
  const sortIconActive = "/src/assets/images/Icons/sort-24px-active.svg"

  useEffect(() => {
    function generateSortQuery() {
      if (orderBy !== "" && sortByCol !== null) {
        setSortQuery(`?sort_by=${colNames[sortByCol]}&order_by=${orderBy}`);
      }
    }
    generateSortQuery();
  }, [sortByCol, orderBy]);

  const handleSort = (colNum) => {
    function flipOrder() {
      if (orderBy === "ASC") {
        setOrderBy("DESC");
      } else {
        setOrderBy("ASC");
      }
    }

    if (colNum < 0 || typeof colNum !== "number") {
      console.log("sortObj.setSort(): " + "You must provide a positive integer for column number!");
      return -1;
    }

    if (colNum > colNames.length) {
      console.log("sortObj.setSort(): " + "Provided column number exceeds maximum value, maximum value is " + colNames.length);
      return -1;
    }

    if (colNum === sortByCol) {
      flipOrder();
    } else {
      setSortByCol(colNum);
      setOrderBy("ASC");
    }
  };

  useEffect(() => {
    const fetchDataWarehouseInventory = async () => {
      let response;
      try {
        response = await axios.get(apiURL + "/warehouses/" + id + "/inventories" + sortQuery);
        setWarehouseInventoryData(response.data);
      } catch (error) {
        //we don't know to display any errors if the warehouse has no inventory (since it can be a new warehouse without inventory assigned)
        if (error.response.status !== 404){
          alert(`InventoryWarehousePage.useEffect().fetchDataWarehouseInventory() requested failed with error: ${error}`);
        }
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
  }, [apiURL, sortQuery]);

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
                <div className="InventoryListWarehousePage__main__header__button__label font-H3-label">Edit</div>
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
                    <img className="InventoryListPage__table__header__col__group__sortIcon" src={(sortByCol === 0) ? sortIconActive : sortIconNotActive} alt="sort icon" onClick={() => {handleSort(0);}} />
                  </div>
                </div>
                <div className="InventoryListWarehousePage__table__header__col" style={{ width: colSizes[1] }}>
                  <div className="InventoryListWarehousePage__table__header__col__group">
                    <div className="font-H4-TableHeader">CATEGORY</div>
                    <img className="InventoryListPage__table__header__col__group__sortIcon" src={(sortByCol === 1) ? sortIconActive : sortIconNotActive} alt="sort icon" onClick={() => {handleSort(1);}}/>
                  </div>
                </div>
                <div className="InventoryListWarehousePage__table__header__col" style={{ width: colSizes[2] }}>
                  <div className="InventoryListWarehousePage__table__header__col__group">
                    <div className="font-H4-TableHeader">STATUS</div>
                    <img className="InventoryListPage__table__header__col__group__sortIcon" src={(sortByCol === 2) ? sortIconActive : sortIconNotActive} alt="sort icon" onClick={() => {handleSort(2);}}/>
                  </div>
                </div>
                <div className="InventoryListWarehousePage__table__header__col" style={{ width: colSizes[3] }}>
                  <div className="InventoryListWarehousePage__table__header__col__group">
                    <div className="font-H4-TableHeader">QUANTITY</div>
                    <img className="InventoryListPage__table__header__col__group__sortIcon" src={(sortByCol === 3) ? sortIconActive : sortIconNotActive} alt="sort icon" onClick={() => {handleSort(3);}}/>
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
