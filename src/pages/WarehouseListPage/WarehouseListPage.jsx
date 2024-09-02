import "./WarehouseListPage.scss";
import { Link } from "react-router-dom";
import WarehouseTableRow from "../../components/WarehouseTableRow/WarehouseTableRow";
// import Header from "../../components/Header/Header";
const WarehouseListPage = ({ warehouseData }) => {
  console.log(warehouseData);
  return (
    <>
      {/* <Header /> */}
      <main className="main">
        <div className="main__header">
          <h2 className="main__title font-H1-PageHeader">Warehouses</h2>
          <input className="main__search" placeholder="Search..." />
          <Link to="/warehouses/add">
            <button className="main__button font-H3-label">
              +Add New Warehouse
            </button>
          </Link>
        </div>
        <table className="table__container">
          <thead>
            <tr>
              <th className="table__header">
                <span className="font-H4-TableHeader">WAREHOUSE</span>
                <img
                  src="src/assets/images/Icons/sort-24px.svg"
                  alt="search icon"
                />
              </th>
              <th className="table__header">
                <span className="font-H4-TableHeader">ADDRESS</span>
                <img
                  src="src/assets/images/Icons/sort-24px.svg"
                  alt="search icon"
                />
              </th>
              <th className="table__header">
                <span className="font-H4-TableHeader">CONTACT NAME</span>
                <img
                  src="src/assets/images/Icons/sort-24px.svg"
                  alt="search icon"
                />
              </th>
              <th className="table__header">
                <span className="font-H4-TableHeader">CONTACT INFORMATION</span>
                <img
                  src="src/assets/images/Icons/sort-24px.svg"
                  alt="search icon"
                />
              </th>
              <th className="table__header">
                <span className="font-H4-TableHeader">ACTIONS</span>
              </th>
            </tr>
          </thead>

          <tbody>
            {warehouseData.map((warehouse) => (
              <WarehouseTableRow key={warehouse.id} warehouse={warehouse} />
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default WarehouseListPage;
