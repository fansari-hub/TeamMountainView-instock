import { useState, forwardRef } from "react";
import "./DetailsForm.scss";
import errorImage from "../../assets/images/Icons/error-24px.svg";

const DetailsForm = forwardRef(({ warehouesToEdit, formType, className }, ref) => {
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

  const fieldsToRender = formType === "warehouse" ? warehouseFields : contactFields;

  const formTitle = formType === "warehouse" ? "Warehouse Details" : "Contact Details";

  return (
    <form ref={ref} className={`DetailsForm ${className}`}>
      <h2 className="font-H2-SubHeader DetailsForm__title">{formTitle}</h2>
      {fieldsToRender.map((field, index) => {
        const hasError = !formData[field.name];
        const errorMessage = hasError ? "This field is required" : "";
        return (
          <div key={index}>
            <h3 className="font-H3-label DetailsForm__field-title">{field.title}</h3>
            <input className={`DetailsForm__input ${field.value === "" ? "DetailsForm-fieldBlank" : ""}`} name={field.name} defaultValue={field.value} onChange={handleChange} />
            {hasError && (
              <div className="DetailsForm-fieldError__container">
                <img src={errorImage} alt="error" className="error-image" />
                <p className="DetailsForm-fieldError__message font-P2-BodyMedium">{errorMessage}</p>
              </div>
            )}
          </div>
        );
      })}
    </form>
  );
});

export default DetailsForm;
