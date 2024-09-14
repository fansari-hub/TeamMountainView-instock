import "./InventoryListPage.scss";
import { NavLink } from "react-router-dom";
import InventoryTableRow from "../../components/InventoryTableRow/InventoryTableRow";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import { useState, useEffect } from "react";
import axios from "axios";

const InventoryListPage = ({ apiURL }) => {
  let [inventoryData, setInventoryData] = useState([]);
  const colSizes = ["22%", "18%", "20%", "10%", "20%", "10%"];
  let [sortQuery, setSortQuery] = useState("");
  let [orderBy, setOrderBy] = useState("ASC");
  let [sortByCol, setSortByCol] = useState(0);
  const colNames = ["item_name", "category", "status", "quantity", "warehouse_name"];

  useEffect(() => {
    function generateSortQuery() {
      if (orderBy !== "" && sortByCol !== "") {
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
    const fetchDataInventory = async () => {
      let response;
      try {
        response = await axios.get(apiURL + "/inventory" + sortQuery);
        setInventoryData(response.data);
      } catch (error) {
        alert(`App.useEffect().fetchDataInventory() requested failed with error: ${error}`);
        return -1;
      }
    };
    fetchDataInventory();
  }, [apiURL, sortQuery]);

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
                  <img className="InventoryListPage__table__header__col__group__sortIcon"
                    src="/src/assets/images/Icons/sort-24px.svg"
                    alt="sort icon"
                    onClick={() => {
                      handleSort(0);
                    }}
                  />
                </div>
              </div>
              <div className="InventoryListPage__table__header__col" style={{ width: colSizes[1] }}>
                <div className="InventoryListPage__table__header__col__group">
                  <div className="font-H4-TableHeader">CATEGORY</div>
                  <img className="InventoryListPage__table__header__col__group__sortIcon"
                    src="/src/assets/images/Icons/sort-24px.svg"
                    alt="sort icon"
                    onClick={() => {
                      handleSort(1);
                    }}
                  />
                </div>
              </div>
              <div className="InventoryListPage__table__header__col" style={{ width: colSizes[2] }}>
                <div className="InventoryListPage__table__header__col__group">
                  <div className="font-H4-TableHeader">STATUS</div>
                  <img className="InventoryListPage__table__header__col__group__sortIcon"
                    src="/src/assets/images/Icons/sort-24px.svg"
                    alt="sort icon"
                    onClick={() => {
                      handleSort(2);
                    }}
                  />
                </div>
              </div>
              <div className="InventoryListPage__table__header__col" style={{ width: colSizes[3] }}>
                <div className="InventoryListPage__table__header__col__group">
                  <div className="font-H4-TableHeader">QTY</div>
                  <img className="InventoryListPage__table__header__col__group__sortIcon"
                    src="/src/assets/images/Icons/sort-24px.svg"
                    alt="sort icon"
                    onClick={() => {
                      handleSort(3);
                    }}
                  />
                </div>
              </div>
              <div className="InventoryListPage__table__header__col" style={{ width: colSizes[4] }}>
                <div className="InventoryListPage__table__header__col__group">
                  <div className="font-H4-TableHeader">WAREHOUSE</div>
                  <img className="InventoryListPage__table__header__col__group__sortIcon"
                    src="/src/assets/images/Icons/sort-24px.svg"
                    alt="sort icon"
                    onClick={() => {
                      handleSort(4);
                    }}
                  />
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
