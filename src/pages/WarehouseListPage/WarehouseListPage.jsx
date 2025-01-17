import "./WarehouseListPage.scss";
import { Link } from "react-router-dom";
import WarehouseTableRow from "../../components/WarehouseTableRow/WarehouseTableRow";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import { useState, useEffect } from "react";
import axios from "axios";

const WarehouseListPage = ({ apiURL }) => {
  const colSizes = ["22%", "22%", "22%", "24%", "0%", "10%"];

  const [warehousesData, setWarehousesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  let [sortQuery, setSortQuery] = useState("");
  let [orderBy, setOrderBy] = useState("ASC");
  let [sortByCol, setSortByCol] = useState(null);
  const colNames = ["warehouse_name", "address", "contact_name", "contact_email"];
  const sortIconNotActive = "/src/assets/images/Icons/sort-24px.svg";
  const sortIconActive = "/src/assets/images/Icons/sort-24px-active.svg";

  useEffect(() => {
    function generateSortQuery() {
      if (orderBy !== "" && sortByCol !== null) {
        setSortQuery(`?sort_by=${colNames[sortByCol]}&order_by=${orderBy}`);
      }
    }
    generateSortQuery();
  }, [sortByCol, orderBy]);

  const filteredResults = warehousesData.filter((item) => ["warehouse_name", "address", "city", "contact_email", "contact_name", "contact_phone", "country"].some((key) => item[key]?.toString().toLowerCase().includes(searchTerm.toLowerCase())));

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

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
    const fetchDataWarehouse = async () => {
      try {
        const response = await axios.get(apiURL + "/warehouses" + sortQuery);
        setWarehousesData(response.data);
      } catch (error) {
        alert(`App.useEffect().fetchDataWarehouse() requested failed with error: ${error}`);
      }
    };
    fetchDataWarehouse();
  }, [apiURL, sortQuery]);

  return (
    <>
      <HeaderComponent />
      <div className="WarehouseListPage">
        <div className="WarehouseListPage__left">
          <div className="WarehouseListPage-spacer"></div>
        </div>
        <main className="WarehouseListPage__main">
          <div className="WarehouseListPage__main__header">
            <h2 className="WarehouseListPage__main__title font-H1-PageHeader">Warehouses</h2>
            <input className="WarehouseListPage__main__search font-P3-BodySmall" placeholder="Search..." onChange={handleSearch} />
            <Link to="/warehouses/add" style={{ display: "contents" }}>
              <button className="WarehouseListPage__main__button font-H3-label">+Add New Warehouse</button>
            </Link>
          </div>
          <div className="WarehouseListPage__table">
            <div>
              <div className="WarehouseListPage__table__header">
                <div className="WarehouseListPage__table__header__col" style={{ width: colSizes[0] }}>
                  <div className="WarehouseListPage__table__header__col__group">
                    <div className="font-H4-TableHeader">WAREHOUSE</div>
                    <img
                      className="InventoryListPage__table__header__col__group__sortIcon"
                      src={sortByCol === 0 ? sortIconActive : sortIconNotActive}
                      alt="sort icon"
                      onClick={() => {
                        handleSort(0);
                      }}
                    />
                  </div>
                </div>
                <div className="WarehouseListPage__table__header__col" style={{ width: colSizes[1] }}>
                  <div className="WarehouseListPage__table__header__col__group">
                    <div className="font-H4-TableHeader">ADDRESS</div>
                    <img
                      className="InventoryListPage__table__header__col__group__sortIcon"
                      src={sortByCol === 1 ? sortIconActive : sortIconNotActive}
                      alt="sort icon"
                      onClick={() => {
                        handleSort(1);
                      }}
                    />
                  </div>
                </div>
                <div className="WarehouseListPage__table__header__col" style={{ width: colSizes[2] }}>
                  <div className="WarehouseListPage__table__header__col__group">
                    <div className="font-H4-TableHeader">CONTACT NAME</div>
                    <img
                      className="InventoryListPage__table__header__col__group__sortIcon"
                      src={sortByCol === 2 ? sortIconActive : sortIconNotActive}
                      alt="sort icon"
                      onClick={() => {
                        handleSort(2);
                      }}
                    />
                  </div>
                </div>
                <div className="WarehouseListPage__table__header__col" style={{ width: colSizes[3] }}>
                  <div className="WarehouseListPage__table__header__col__group">
                    <div className="font-H4-TableHeader">CONTACT INFORMATION</div>
                    <img
                      className="InventoryListPage__table__header__col__group__sortIcon"
                      src={sortByCol === 3 ? sortIconActive : sortIconNotActive}
                      alt="sort icon"
                      onClick={() => {
                        handleSort(3);
                      }}
                    />
                  </div>
                </div>

                <div className="WarehouseListPage__table__header__col" style={{ width: colSizes[5] }}>
                  <div className="WarehouseListPage__table__header__col__group WarehouseListPage__table__header__col__group--actions">
                    <div className="font-H4-TableHeader">ACTIONS</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {filteredResults.map((warehouse, arrayIndex) => (
                <WarehouseTableRow apiURL={apiURL} setWarehousesData={setWarehousesData} key={warehouse.id} warehouse={warehouse} warehouseData={warehousesData} colSizes={colSizes} arrayIndex={arrayIndex} />
              ))}
            </div>
          </div>
        </main>
        <div className="WarehouseListPage__right">
          <div className="WarehouseListPage-spacer"></div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
};

export default WarehouseListPage;
