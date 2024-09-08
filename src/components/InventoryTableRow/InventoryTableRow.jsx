import { useState } from "react";
import "./InventoryTableRow.scss";
import { NavLink } from "react-router-dom";
import DeleteInventoryComponent from "../DeleteInventoryComponent/DeleteInventoryComponent";

const InventoryTableRow = ({ inventory, warehouse_filtered, colSizes, arrayIndex }) => {
  const [isModalOpen, SetIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    SetIsModalOpen(true);
  };

  const handleCloseModal = () => {
    SetIsModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    console.log("you deleted the warhouse");
    SetIsModalOpen(false);
  };

  const inventoryItem = inventory.item_name;

  let wareHouseDiv = <></>;
  let parentPathPrefix = "";
  let stockTickerClass = "InventoryTableRow-stockTicker";
  let dividerClass = "InventoryTableRow__divider"

  if (warehouse_filtered !== true) {
    wareHouseDiv = (
      <>
          <div className="InventoryTableRow__main__info__col__field__label font-H4-TableHeader">WAREHOUSE</div>
          <div className="InventoryTableRow__main__info__col__field__data font-P2-BodyMedium">{inventory.warehouse_id}</div>
      </>
    );
  } else {
    parentPathPrefix = "../inventory/";
  }

  if (inventory.status.toUpperCase() === "OUT OF STOCK") {
    stockTickerClass += " InventoryTableRow-stockTicker--nostock";
  }

  console.log(arrayIndex);

  if (arrayIndex === 0){
    dividerClass += " InventoryTableRow__divider--firstrow"
  }
  return (
    <>
      <tr className="InventoryTableRow">
        <hr className={dividerClass}/>
        <td className="InventoryTableRow__main">
          <td className="InventoryTableRow__main__info">
            <div className="InventoryTableRow__main__info__col">
              <div className="InventoryTableRow__main__info__col__field" style={{width : colSizes[0]}}>
                <div className="InventoryTableRow__main__info__col__field__label font-H4-TableHeader">INVENTORY ITEM</div>
                <NavLink to={parentPathPrefix + inventory.id + "/"} className="InventoryTableRow__main__info__col__field__label__link">
                  <div className="InventoryTableRow__main__info__col__field__data InventoryTableRow__main__info__col__field__data--link font-H3-label">{inventory.item_name}</div>
                  <img src="/src/assets/images/Icons/chevron_right-24px.svg" alt="link icon" className="InventoryTableRow__main__info__col__field__label__link__icon" />
                </NavLink>
              </div>
              <div className="InventoryTableRow__main__info__col__field" style={{width : colSizes[1]}}>
                <div className="InventoryTableRow__main__info__col__field__label font-H4-TableHeader">CATERGORY</div>
                <div className="InventoryTableRow__main__info__col__field__data font-P2-BodyMedium">{inventory.category}</div>
              </div>
            </div>
            <div className="InventoryTableRow__main__info__col">
              <div className="InventoryTableRow__main__info__col__field" style={{width : colSizes[2]}}>
                <div className="InventoryTableRow__main__info__col__field__label font-H4-TableHeader">STATUS</div>
                <div className={stockTickerClass}>
                  <div className="InventoryTableRow__main__info__col__field__data font-P3-BodySmall">{inventory.status.toUpperCase()}</div>
                </div>
              </div>
              <div className="InventoryTableRow__main__info__col__field" style={{width : colSizes[3]}}>
                <div className="InventoryTableRow__main__info__col__field__label font-H4-TableHeader">QTY</div>
                <div className="InventoryTableRow__main__info__col__field__data font-P2-BodyMedium">{inventory.quantity}</div>
              </div>
              <div className="InventoryTableRow__main__info__col__field" style={{width : colSizes[4]}}>
              {wareHouseDiv}
              </div>
            </div>
            <div className="InventoryTableRow__main__info__col InventoryTableRow__main__info__col--actions">
              <div className="InventoryTableRow__main__info__col__field" style={{width : colSizes[5]}}>
                <div className="InventoryTableRow__main__info__col__field__icons">
                  <img onClick={handleDeleteClick} className="InventoryTableRow__main__info__col__field__icons__delete" src="/src/assets/images/Icons/delete_outline-24px.svg" alt="delete icon" />
                  <NavLink to={parentPathPrefix + inventory.id + "/edit/"}>
                    <img src="/src/assets/images/Icons/edit-24px.svg" alt="edit icon" />
                  </NavLink>
                </div>
              </div>
            </div>
          </td>
        </td>
      </tr>
      <DeleteInventoryComponent isOpen={isModalOpen} onClose={handleCloseModal} onDelete={handleDeleteConfirm} inventoryItem={inventoryItem} />
    </>
  );
};

export default InventoryTableRow;
