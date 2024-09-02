import "./EditWarehousePage.scss";
import { useParams } from "react-router";
const EditWarehousePage = ({ warehouseData }) => {
  const { id } = useParams();
  const warehouseToEdit = warehouseData.find((warehouse) => warehouse.id == id);
  if (!warehouseToEdit) {
    return <div>warehouse with set id not found</div>;
  }
  return (
    <main className="main">
      <div className="main__header">
        <img
          src="/src/assets/images/Icons/arrow_back-24px.svg"
          alt="search icon"
        />
        <h1 className="font-H1-PageHeader main__header-title">
          Edit Warehouse
        </h1>
      </div>
      <hr />
    </main>
  );
};

export default EditWarehousePage;
