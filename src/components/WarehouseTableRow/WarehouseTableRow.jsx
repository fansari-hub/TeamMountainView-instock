import "./WarehouseTableRow.scss";
import { Link } from "react-router-dom";

const WarehouseTableRow = ({ warehouse }) => {
  console.log(warehouse);
  return (
    <tr className="row">
      <hr className="row__divider" />
      <td className="row__main-info">
        <div className="row__warehouse-address">
          <div className="row__group">
            <span className="row__title font-H4-TableHeader">WAREHOUSE</span>
            <Link className="row__warehouse-icon">
              <span className="font-H3-label row__value--warehouse">
                {warehouse.warehouse_name}
              </span>
              <img
                src="src/assets/images/Icons/chevron_right-24px.svg"
                alt="link icon"
                className="row__icon"
              />
            </Link>
          </div>
          <div className="row__group">
            <span className="font-H4-TableHeader row__title ">ADDRESS</span>
            <span className="font-H2-SubHeader row__value ">
              {`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}
            </span>
          </div>
        </div>

        <div className="row__contact-info">
          <div className="row__group">
            <span className="font-H4-TableHeader row__title ">
              CONTACT NAME
            </span>
            <span className="font-H2-SubHeader row__value--contact-name">
              {warehouse.contact_name}
            </span>
          </div>
          <div className="row__group">
            <span className="font-H4-TableHeader row__title ">
              CONTACT INFORMATION
            </span>
            <span className="font-H2-SubHeader row__value ">
              {warehouse.contact_phone}
            </span>
            <span className="font-H2-SubHeader row__value ">
              {warehouse.contact_email}
            </span>
          </div>
        </div>
      </td>

      <td className="row__action-container">
        <span className="row__title--action font-H4-TableHeader">ACTION</span>
        <div className="row__action-icons">
          <img
            src="src/assets/images/Icons/delete_outline-24px.svg"
            alt="delete icon"
          />
          <img src="src/assets/images/Icons/edit-24px.svg" alt="edit icon" />
        </div>
      </td>
    </tr>
  );
};

export default WarehouseTableRow;
