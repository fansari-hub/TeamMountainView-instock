import { useState } from "react";
import "./DetailsForm.scss";
const DetailsForm = ({ warehouesToEdit, formType, onSubmit }) => {
  const [formData, setFormData] = useState({ ...warehouesToEdit });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const warehouseFields = [
    { title: "Warehouse Name", value: warehouesToEdit.warehouse_name },
    { title: "Street Address", value: warehouesToEdit.address },
    { title: "City", value: warehouesToEdit.city },
    { title: "Country", value: warehouesToEdit.country },
  ];

  const contactFields = [
    { title: "Contact Name", value: warehouesToEdit.contact_name },
    { title: "Position", value: warehouesToEdit.contact_position },
    { title: "Phone Number", value: warehouesToEdit.contact_phone },
    { title: "Email", value: warehouesToEdit.contact_email },
  ];

  const fieldsToRender =
    formType === "warehouse" ? warehouseFields : contactFields;

  const formTitle =
    formType === "warehouse" ? "Warehouse Details" : "Contact Details";

  return (
    <div className="form">
      <h2 className="font-H2-SubHeader form__title">{formTitle}</h2>
      {fieldsToRender.map((field, index) => (
        <div key={index}>
          <h3 className="font-H3-label form__field-title">{field.title}</h3>
          <input className="form__input" defaultValue={field.value} />
        </div>
      ))}
    </div>
  );
};

export default DetailsForm;
