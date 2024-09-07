import { useState } from "react";
import "./InventoryTableRow.scss";
import { NavLink } from "react-router-dom";
import DeleteInventoryComponent from "../DeleteInventoryComponent/DeleteInventoryComponent";

const InventoryTableRow = ({ inventory, warehouse_filtered }) => {
  const[isModalOpen, SetIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    SetIsModalOpen(true);
  }

  const handleCloseModal = () => {
    SetIsModalOpen(false);
  }

  const handleDeleteConfirm = () => {
    console.log('you deleted the warhouse');
    SetIsModalOpen(false);
  }

  const inventoryItem = inventory.item_name;

  let wareHouseDiv = <></>;
  let parentPathPrefix = "";
  if (warehouse_filtered !== true) {
    wareHouseDiv = (
      <>
        {" "}
        <div className="InventoryTableRow__main__info__col__field">
          <div className="InventoryTableRow__main__info__col__field__label font-H4-TableHeader">WAREHOUSE</div>
          <div className="InventoryTableRow__main__info__col__field__data font-P2-BodyMedium">{inventory.warehouse_id}</div>
        </div>
      </>
    );
  } else {
    parentPathPrefix = "../inventory/";
  }
  return (
    <>
      <tr className="InventoryTableRow">
        <hr className="InventoryTableRow__divider" />
        <td className="InventoryTableRow__main">
          <td className="InventoryTableRow__main__info">
            <div className="InventoryTableRow__main__info__col">
              <div className="InventoryTableRow__main__info__col__field">
                <div className="InventoryTableRow__main__info__col__field__label font-H4-TableHeader">INVENTORY ITEM</div>
                <NavLink to={parentPathPrefix + inventory.id + "/"} className="InventoryTableRow__main__info__col__field__label__link">
                  <div className="InventoryTableRow__main__info__col__field__data InventoryTableRow__main__info__col__field__data--link font-H3-label">{inventory.item_name}</div>
                  <img src="/src/assets/images/Icons/chevron_right-24px.svg" alt="link icon" className="InventoryTableRow__main__info__col__field__label__link__icon" />
                </NavLink>
              </div>
              <div className="InventoryTableRow__main__info__col__field">
                <div className="InventoryTableRow__main__info__col__field__label font-H4-TableHeader">CATERGORY</div>
                <div className="InventoryTableRow__main__info__col__field__data font-P2-BodyMedium">{inventory.category}</div>
              </div>
            </div>
            <div className="InventoryTableRow__main__info__col">
              <div className="InventoryTableRow__main__info__col__field">
                <div className="InventoryTableRow__main__info__col__field__label font-H4-TableHeader">STATUS</div>
                <div className="InventoryTableRow__main__info__col__field__data font-P2-BodyMedium">{inventory.status}</div>
              </div>
              <div className="InventoryTableRow__main__info__col__field">
                <div className="InventoryTableRow__main__info__col__field__label font-H4-TableHeader">QTY</div>
                <div className="InventoryTableRow__main__info__col__field__data font-P2-BodyMedium">{inventory.quantity}</div>
              </div>
              {wareHouseDiv}
            </div>
          </td>

          <td className="InventoryTableRow__actionContainer">
            <div className="InventoryTableRow__actionContainer__icons">
                <img 
                onClick={handleDeleteClick}
                className="InventoryTableRow__actionContainer__icons__delete" src="/src/assets/images/Icons/delete_outline-24px.svg" alt="delete icon" />
              <NavLink to={parentPathPrefix + inventory.id + "/edit/"}>
                <img src="/src/assets/images/Icons/edit-24px.svg" alt="edit icon" />
              </NavLink>
            </div>
          </td>
        </td>
      </tr>
      <DeleteInventoryComponent
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      onDelete={handleDeleteConfirm}
      inventoryItem={inventoryItem}
    />   
    </>
  );
};

export default InventoryTableRow;
