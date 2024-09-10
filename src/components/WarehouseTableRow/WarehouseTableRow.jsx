import { useState } from "react";
import "./WarehouseTableRow.scss";
import { Link } from "react-router-dom";
import DeleteWarehouse from "../DeleteWarehouse/DeleteWarehouse";
import axios from "axios";

const WarehouseTableRow = ({ warehouse, colSizes, arrayIndex, setWarehousesData, warehouseData, apiURL }) => {
  const [isModalOpen, SetIsModalOpen] = useState(false);
  const [selectWarehouseId, setSelectedWarehouseId] = useState(null);

  const handleDeleteClick = (id) => {
    setSelectedWarehouseId(id);
    SetIsModalOpen(true);
  };

  const handleCloseModal = () => {
    SetIsModalOpen(false);
  };

  const handleDeleteConfirm = async () => {
    try{
      await axios.delete(`${apiURL}/warehouses/${selectWarehouseId}`);
      setWarehousesData(warehouseData.filter(warehouse => warehouse.id !== selectWarehouseId));
      SetIsModalOpen(false);
    }catch (error) {
      console.error('Failed to delete the warehouse: ', error);
    }
  };

  const warehouseName = warehouse.warehouse_name;
  let dividerClass = "WarehouseTableRow__divider";

  if (arrayIndex === 0) {
    dividerClass += " WarehouseTableRow__divider--firstrow";
  }
  return (
    <>
      <div className="WarehouseTableRow">
        <hr className={dividerClass} />
        <div className="WarehouseTableRow__main">
          <div className="WarehouseTableRow__main__info">
            <div className="WarehouseTableRow__main__info__col">
              <div
                className="WarehouseTableRow__main__info__col__field"
                style={{ width: colSizes[0] }}
              >
                <div className="WarehouseTableRow__main__info__col__field__label font-H4-TableHeader">
                  WAREHOUSE
                </div>
                <Link
                  to={warehouse.id + "/inventories"}
                  className="WarehouseTableRow__main__info__col__field__label__link"
                >
                  <div className="font-H3-label WarehouseTableRow__main__info__col__field__data WarehouseTableRow__main__info__col__field__data--link">
                    {warehouse.warehouse_name}
                  </div>
                  <img
                    src="/src/assets/images/Icons/chevron_right-24px.svg"
                    alt="link icon"
                    className="WarehouseTableRow__main__info__col__field__label__link__icon"
                  />
                </Link>
              </div>
              <div
                className="WarehouseTableRow__main__info__col__field"
                style={{ width: colSizes[1] }}
              >
                <div className="WarehouseTableRow__main__info__col__field__label font-H4-TableHeader">
                  ADDRESS
                </div>
                <div className="font-P2-BodyMedium WarehouseTableRow__main__info__col__field__data">
                  {`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}
                </div>
              </div>
            </div>
            <div className="WarehouseTableRow__main__info__col">
              <div
                className="WarehouseTableRow__main__info__col__field"
                style={{ width: colSizes[2] }}
              >
                <div className="WarehouseTableRow__main__info__col__field__label font-H4-TableHeader ">
                  CONTACT NAME
                </div>
                <div className="WarehouseTableRow__main__info__col__field__data font-P2-BodyMedium ">
                  {warehouse.contact_name}
                </div>
              </div>

              <div
                className="WarehouseTableRow__main__info__col__field"
                style={{ width: colSizes[3] }}
              >
                <div className="WarehouseTableRow__main__info__col__field__label font-H4-TableHeader">
                  CONTACT INFORMATION
                </div>
                <div className="WarehouseTableRow__main__info__col__field__data font-P2-BodyMedium ">
                  {warehouse.contact_phone}
                </div>
                <div className="WarehouseTableRow__main__info__col__field__data font-P2-BodyMedium WarehouseTableRow__main__info__col__field__data--concact">
                  {warehouse.contact_email}
                </div>
              </div>
            </div>
            <div className="WarehouseTableRow__main__info__col WarehouseTableRow__main__info__col--actions">
              <div
                className="WarehouseTableRow__main__info__col__field"
                style={{ width: colSizes[5] }}
              >
                <div className="WarehouseTableRow__main__info__col__field__icons">
                  <img
                    onClick={() => {handleDeleteClick(warehouse.id)}}
                    className="WarehouseTableRow__main__info__col__field__icons__delete"
                    src="/src/assets/images/Icons/delete_outline-24px.svg"
                    alt="delete icon"
                  />
                  <Link to={warehouse.id + "/edit/"}>
                    <img
                      src="/src/assets/images/Icons/edit-24px.svg"
                      alt="edit icon"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DeleteWarehouse
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onDelete={handleDeleteConfirm}
        warehouseName={warehouseName}
      />
    </>
  );
};

export default WarehouseTableRow;
