import "./WarehouseTableRow.scss";
import { Link } from "react-router-dom";

const WarehouseTableRow = ({ warehouse }) => {
  console.log(warehouse);
  return (
    <tr className="row">
      <td className="row__main-info">
        <div className="row__cell row__cell--warehouse-address">
          <div className="row__group">
            <span className="row__title font-H4-TableHeader">WAREHOUSE</span>
            <Link>
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
            <span className="row__title font-H4-TableHeader">ADDRESS</span>
            <span className="row__value font-H2-SubHeader">
              {`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}
            </span>
          </div>
        </div>

        <div className="row__cell row__cell--contact-info">
          <div className="row__group">
            <span className="row__title font-H4-TableHeader">CONTACT NAME</span>
            <span className="row__value font-H2-SubHeader">
              {warehouse.contact_name}
            </span>
          </div>
          <div className="row__group">
            <span className="row__title font-H4-TableHeader">
              CONTACT INFORMATION
            </span>
            <span className="row__value font-H2-SubHeader">
              {warehouse.contact_phone}
            </span>
            <span className="row__value font-H2-SubHeader">
              {warehouse.contact_email}
            </span>
          </div>
        </div>
      </td>

      <td className="row__action-container">
        <span className="row__title--action font-H4-TableHeader">ACTION</span>
        <div>
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
