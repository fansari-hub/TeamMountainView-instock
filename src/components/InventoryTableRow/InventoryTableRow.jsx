import "./InventoryTableRow.scss";
import { Link } from "react-router-dom";

const InventoryTableRow = ({ inventory }) => {
  console.log(inventory);
  return (
    <>
      <tr className="InventoryTableRow">
        <hr className="InventoryTableRow__divider" />
        <td className="InventoryTableRow__main">
          <td className="InventoryTableRow__main__info">
            <div className="InventoryTableRow__main__info__col InventoryTableRow__main__info__col--typeA">
              <div className="InventoryTableRow__main__info__col__field">
                <div className="InventoryTableRow__main__info__col__field__label font-H4-TableHeader">INVENTORY ITEM</div>
                <div className="InventoryTableRow__main__info__col__field__data font-P2-BodyMedium">{inventory.item_name}</div>
              </div>
              <div className="InventoryTableRow__main__info__col__field">
                <div className="InventoryTableRow__main__info__col__field__label font-H4-TableHeader">CATERGORY</div>
                <div className="InventoryTableRow__main__info__col__field__data font-P2-BodyMedium">{inventory.category}</div>
              </div>
            </div>
            <div className="InventoryTableRow__main__info__col InventoryTableRow__main__info__col--typeB">
              <div className="InventoryTableRow__main__info__col__field">
                <div className="InventoryTableRow__main__info__col__field__label font-H4-TableHeader">STATUS</div>
                <div className="InventoryTableRow__main__info__col__field__data font-P2-BodyMedium">{inventory.status}</div>
              </div>
              <div className="InventoryTableRow__main__info__col__field">
                <div className="InventoryTableRow__main__info__col__field__label font-H4-TableHeader">QTY</div>
                <div className="InventoryTableRow__main__info__col__field__data font-P2-BodyMedium">{inventory.quantity}</div>
              </div>
              <div className="InventoryTableRow__main__info__col__field">
                <div className="InventoryTableRow__main__info__col__field__label font-H4-TableHeader">WAREHOUSE</div>
                <div className="InventoryTableRow__main__info__col__field__data font-P2-BodyMedium">{inventory.warehouse_id}</div>
              </div>
            </div>
          </td>

          <td className="InventoryTableRow__actionContainer">
            <div className="InventoryTableRow__actionContainer__icons">
              <img className="InventoryTableRow__actionContainer__icons__delete" src="/src/assets/images/Icons/delete_outline-24px.svg" alt="delete icon" />
              <img src="/src/assets/images/Icons/edit-24px.svg" alt="edit icon" />
            </div>
          </td>
        </td>
      </tr>
    </>
  );
};

export default InventoryTableRow;
