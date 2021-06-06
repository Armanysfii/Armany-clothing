import React from "react";
import "./custom-button.styles.scss";

const CustomButton = function ({
  children,
  type,
  onClick,
  isGoogleSignIn,
  inverted,
}) {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default CustomButton;
