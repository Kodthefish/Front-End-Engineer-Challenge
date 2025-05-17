import { useState, useCallback } from "react";

// Maps the selected values to their corresponding labels
const transformValueToLabel = (options, value) =>
  options
    .filter((option) => value.includes(option.value))
    .map((option) => option.label)
    .join(", ");

/**
 * DropDown component used for selecting single or multiple options.
 *
 * @param {Object} props
 * @param {string} props.label - The label for the dropdown.
 * @param {function} props.onChange - The function to call when the selected value changes.
 * @param {Array} props.options - The options for the dropdown.
 * @param {string} props.placeholder - The placeholder text for the dropdown.
 * @param {string} props.value - The currently selected value.
 * @param {boolean} [props.isMultiSelect=false] - Whether the dropdown allows multiple selections.
 */
const DropDown = ({
  label,
  onChange,
  options,
  placeholder,
  value,
  isMultiSelect = false,
}) => {
  const [isMultiSelectOpen, setMultiSelectOpen] = useState(false);
  const [isSelectAllChecked, setSelectAllChecked] = useState(false);

  const toggleMultiSelect = useCallback(() => {
    setMultiSelectOpen((prev) => !prev);
  }, [isMultiSelectOpen]);

  const handleMultiSelectChange = useCallback(
    (option) => {
      const isSelected = value.includes(option);
      const updatedSelectedOptions = isSelected
        ? value.filter((o) => o !== option)
        : [...value, option];
      onChange(updatedSelectedOptions);
    },
    [value, onChange]
  );

  const handleSelectAllChange = useCallback(() => {
    onChange(
      isSelectAllChecked ? [] : Object.values(options).map((opt) => opt.value)
    );
    setSelectAllChecked(!isSelectAllChecked);
  }, [onChange, isSelectAllChecked, options]);

  const multiSelectButtonStyles = {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "6px",
    backgroundColor: "white",
    color: "#333",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  };

  const multiSelectStyles = {
    padding: "8px 12px",
    borderBottom: "1px solid gray",
    cursor: "pointer",
    textAlign: "left",
    color: "black",
  };

  const dropDownStyles = {
    position: "absolute",
    top: "100%",
    width: "300px",
    backgroundColor: "white",
    marginTop: "4px",
    zIndex: 1,
    maxHeight: "400px",
    overflowY: "auto",
  };

  const optionStyles = {
    padding: "8px 12px",
    borderBottom: "1px solid gray",
    cursor: "pointer",
    textAlign: "left",
    color: "black",
  };

  return (
    <div
      style={{ position: "relative", display: "inline-block", width: "200px" }}
    >
      <label>{label}</label>
      <button onClick={toggleMultiSelect} style={multiSelectButtonStyles}>
        {/* Display selected options or placeholder */}
        {value.length > 0 ? transformValueToLabel(options, value) : placeholder}
      </button>

      {isMultiSelectOpen && (
        <div style={dropDownStyles}>
          {/* Select All checkbox for multi-select dropdown */}
          {isMultiSelect && (
            <div style={multiSelectStyles}>
              <input
                type="checkbox"
                checked={isSelectAllChecked}
                onChange={handleSelectAllChange}
                style={{ marginRight: "5px" }}
              />
              Select All
            </div>
          )}
          {options.map((option) => (
            <div key={option.value} style={optionStyles}>
              <input
                type={isMultiSelect ? "checkbox" : "radio"}
                checked={value.includes(option.value)}
                onChange={() =>
                  isMultiSelect
                    ? handleMultiSelectChange(option.value)
                    : onChange(option.value)
                }
                style={{ marginRight: "5px" }}
              />
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
