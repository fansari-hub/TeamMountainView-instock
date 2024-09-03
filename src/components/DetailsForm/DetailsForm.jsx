import { useState, forwardRef } from "react";
import "./DetailsForm.scss";

const DetailsForm = forwardRef(
  ({ warehouesToEdit, formType, className }, ref) => {
    const [formData, setFormData] = useState({ ...warehouesToEdit });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

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
              className="form__input"
              name={field.name}
              defaultValue={field.value}
              onChange={handleChange}
            />
          </div>
        ))}
      </form>
    );
  }
);

export default DetailsForm;
