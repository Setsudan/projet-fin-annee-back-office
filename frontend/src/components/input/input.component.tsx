import React, { useState, useRef } from "react";
import {
  HiOutlineEye,
  HiOutlineEyeOff,
  HiSearch,
  HiUpload,
} from "react-icons/hi";
import Badge from "@components/badge/badge.component";
import "./input.styles.scss";

const emailRegex = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"); // RFC 5322 compliant regex

const passwordRegex = new RegExp(
  // 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
  "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])"
);

export default function Input(props: {
  type?: "text" | "password" | "tel" | "search" | "email" | "number" | "file";
  name?: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const renderPasswordInput = () => (
    <div className="input">
      <input
        className="input_field"
        type={showPassword ? "text" : "password"}
        name={props.name || ""}
        placeholder={props.placeholder || ""}
        onChange={props.onChange}
        ref={passwordRef}
      />
      <button className="toggle_password_button" onClick={handleTogglePassword}>
        <Badge
          icon={showPassword ? <HiOutlineEyeOff /> : <HiOutlineEye />}
          type="transparent"
        />
      </button>
      <span className="error-message">
        {passwordRegex.test(passwordRef.current?.value as string)
          ? ""
          : "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"}
      </span>
    </div>
  );

  const renderTelInput = () => (
    <div className="tel_input">
      <select className="tel_dropdown">
        <option className="tel_dropdown_item" value="+33">
          +33
        </option>
        <option className="tel_dropdown_item" value="+44">
          +44
        </option>
        {/* Add more options as needed */}
      </select>
      <input
        className="input_field"
        type="tel"
        name={props.name || ""}
        placeholder={props.placeholder || ""}
        onChange={props.onChange}
      />
    </div>
  );

  const renderSearchInput = () => (
    <div className="input">
      <input
        className="input_field"
        type="search"
        name={props.name || ""}
        placeholder={props.placeholder || ""}
        onChange={props.onChange}
      />
      <button className="search_button">
        <Badge icon={<HiSearch />} type="transparent" />
      </button>
    </div>
  );

  const renderFileInput = () => (
    <div className="file_pic_input">
      <input
        className="input_field"
        type="file"
        accept="image/*"
        name={props.name || ""}
        placeholder={props.placeholder || ""}
        onChange={props.onChange}
        ref={fileInput}
      />
      <Badge
        icon={<HiUpload />}
        type="transparent"
        onClick={() => fileInput.current?.click()}
      />
    </div>
  );

  const renderEmailInput = () => (
    <>
      <input
        className="input_field"
        type={props.type || "text"}
        name={props.name || ""}
        placeholder={props.placeholder || ""}
        onChange={props.onChange}
        ref={emailRef}
      />
      {emailRegex.test(emailRef.current?.value || "") ? (
        ""
      ) : (
        <span className="error-message">Email is not valid</span>
      )}
    </>
  );

  const renderTextInput = () => (
    <input
      className="input_field"
      type={props.type || "text"}
      name={props.name || ""}
      placeholder={props.placeholder || ""}
      onChange={props.onChange}
    />
  );

  const renderInputField = () => {
    switch (props.type) {
      case "password":
        return renderPasswordInput();
      case "tel":
        return renderTelInput();
      case "search":
        return renderSearchInput();
      case "file":
        return renderFileInput();
      case "email":
        return renderEmailInput();
      case "text":
      default:
        return renderTextInput();
    }
  };

  return (
    <div className="input">
      <label htmlFor={props.name || ""} className="input_label">
        {props.label}
      </label>
      {renderInputField()}
    </div>
  );
}
