import close from "../../assets/images/Icons/close-24px.svg";

const DeleteWarehouse = ({ isOpen, onClose, onDelete, warehouseName }) => {
  if (!isOpen) return null;

  return (
    <div className="modal__overlay">
      <div className="modal">
        <div className="modal__txt">
          <div className="modal__close">
            <img src={close} onClick={onClose} alt="close icon which is an x" />
          </div>
          <h2 className="font-H2-SubHeader modal__txt--heading">Delete {`${warehouseName}`} warehouse?</h2>
          <p className="font-P2-BodyMedium modal__txt--paragraph">Please confirm that you'd like to delete the {`${warehouseName}`} from the list of warehouses. You won't be able to undo this action.</p>
        </div>
        <div className="modal__buttons">
          <button className="modal--btn--cancel font-P1-BodySmall" onClick={onClose}>
            Cancel
          </button>
          <button className="modal--btn--delete font-P1-BodySmall" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteWarehouse;
