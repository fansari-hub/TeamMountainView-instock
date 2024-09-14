import { useState, forwardRef } from "react";
import "./NewWarehouseForm.scss";

const NewWarehouseForm = forwardRef(
  ({ warehouesToEdit, formType, className }, ref) => {
    const [formData, setFormData] = useState({ ...warehouesToEdit });

    const handleChange = (e) => {
      const { name, value } = e.target;
      //below we're updating formData with the latest value for each field (identified by name)
      setFormData({ ...formData, [name]: value });
    };

    //the name property of this object is like an id of the input field later
    const warehouseFields = [
      {
        title: "Warehouse Name",
        name: "warehouse_name",
        value: formData.warehouse_name,
      },
      { title: "Street Address", name: "address", value: formData.address },
      { title: "City", name: "city", value: formData.city },
      { title: "Country", name: "country", value: formData.country },
    ];

    const contactFields = [
      {
        title: "Contact Name",
        name: "contact_name",
        value: formData.contact_name,
      },
      {
        title: "Position",
        name: "contact_position",
        value: formData.contact_position,
      },
      {
        title: "Phone Number",
        name: "contact_phone",
        value: formData.contact_phone,
      },
      { title: "Email", name: "contact_email", value: formData.contact_email },
    ];

    const fieldsToRender =
      formType === "warehouse" ? warehouseFields : contactFields;

    const formTitle =
      formType === "warehouse" ? "Warehouse Details" : "Contact Details";

    return (
      <form ref={ref} className={`form ${className}`}>
        <h2 className="font-H2-SubHeader form__title">{formTitle}</h2>
        {fieldsToRender.map((field, index) => (
          <div key={index}>
            <h3 className="font-H3-label form__field-title">{field.title}</h3>
            <input
              className="form__input-user"
              name={field.name}
              placeholder={field.value}
              onChange={handleChange}
            />
          </div>
        ))}
      </form>
    );
  }
);

export default NewWarehouseForm;
