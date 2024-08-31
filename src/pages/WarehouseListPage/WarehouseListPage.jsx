import "./WarehouseListPage";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
const WarehouseListPage = ({ warehouseData }) => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="main__header">
          <h2 className="main__title font-H1-pageHeader">Warehouses</h2>
          <input className="main__search" placeholder="Search..." />
          <Link to="/warehouses/add">
            <button className="main__button">+Add New Warehouse</button>
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Warehouse</th>
              <th>Address</th>
              <th>Contact Name</th>
            </tr>
          </thead>
          {/* <tbody>
            {warehouseData.map((row, index) => (
              <RowComponent key={index} rowData={row} />
            ))}
          </tbody> */}
        </table>
      </main>
    </>
  );
};

export default WarehouseListPage;
