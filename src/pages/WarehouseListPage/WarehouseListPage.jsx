import "./WarehouseListPage.scss";
import { Link } from "react-router-dom";
import WarehouseTableRow from "../../components/WarehouseTableRow/WarehouseTableRow";
import HeaderComponent from "../../components/Header/HeaderComponent";
import FooterComponent from "../../components/Footer/FooterComponent";
import { useState, useEffect } from "react";
import axios from "axios";

const WarehouseListPage = ({ apiURL }) => {
  let [warehouseData, setWarehouseData] = useState([]);
  useEffect(() => {
    const fetchDataWarehouse = async () => {
      try {
        const response = await axios.get(apiURL + "/warehouses");
        setWarehouseData(response.data);
      } catch (error) {
        alert(
          `App.useEffect().fetchDataWarehouse() requested failed with error: ${error}`
        );
      }
    };
    fetchDataWarehouse();
  }, [apiURL]);

  const colSizes = ["22%", "22%", "22%", "24%", "0%", "10%"];

  return (
    <>
      <HeaderComponent />
      <div className="WarehouseListPage">
        <div className="WarehouseListPage__left">
          <div className="WarehouseListPage-spacer"></div>
        </div>
        <main className="WarehouseListPage__main">
          <div className="WarehouseListPage__main__header">
            <h2 className="WarehouseListPage__main__title font-H1-PageHeader">
              Warehouses
            </h2>
            <input
              className="WarehouseListPage__main__search"
              placeholder="Search..."
            />
            <Link to="/warehouses/add" style={{ display: "contents" }}>
              <button className="WarehouseListPage__main__button">
                +Add New Warehouse
              </button>
            </Link>
          </div>
          <div className="WarehouseListPage__table">
            <div>
              <div className="WarehouseListPage__table__header">
                <div
                  className="WarehouseListPage__table__header__col"
                  style={{ width: colSizes[0] }}
                >
                  <div className="WarehouseListPage__table__header__col__group">
                    <div className="font-H4-TableHeader">WAREHOUSE</div>
                    <img
                      src="/src/assets/images/Icons/sort-24px.svg"
                      alt="sort icon"
                    />
                  </div>
                </div>
                <div
                  className="WarehouseListPage__table__header__col"
                  style={{ width: colSizes[1] }}
                >
                  <div className="WarehouseListPage__table__header__col__group">
                    <div className="font-H4-TableHeader">ADDRESS</div>
                    <img
                      src="/src/assets/images/Icons/sort-24px.svg"
                      alt="sort icon"
                    />
                  </div>
                </div>
                <div
                  className="WarehouseListPage__table__header__col"
                  style={{ width: colSizes[2] }}
                >
                  <div className="WarehouseListPage__table__header__col__group">
                    <div className="font-H4-TableHeader">CONTACT NAME</div>
                    <img
                      src="/src/assets/images/Icons/sort-24px.svg"
                      alt="sort icon"
                    />
                  </div>
                </div>
                <div
                  className="WarehouseListPage__table__header__col"
                  style={{ width: colSizes[3] }}
                >
                  <div className="WarehouseListPage__table__header__col__group">
                    <div className="font-H4-TableHeader">
                      CONTACT INFORMATION
                    </div>
                    <img
                      src="/src/assets/images/Icons/sort-24px.svg"
                      alt="sort icon"
                    />
                  </div>
                </div>

                <div
                  className="WarehouseListPage__table__header__col"
                  style={{ width: colSizes[5] }}
                >
                  <div className="WarehouseListPage__table__header__col__group WarehouseListPage__table__header__col__group--actions">
                    <div className="font-H4-TableHeader">ACTIONS</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              {warehouseData.map((warehouse, arrayIndex) => (
                <WarehouseTableRow
                  key={warehouse.id}
                  warehouse={warehouse}
                  colSizes={colSizes}
                  arrayIndex={arrayIndex}
                />
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
