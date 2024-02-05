import { useMemo } from "react";
import "./property1-tertiary.css";

const Property1Tertiary = ({
  buttonText,
  trailingIcon = true,
  leadingIcon = true,
  property1TertiaryBorderRadius,
  property1TertiaryPadding,
  property1TertiaryPosition,
  property1TertiaryTop,
  property1TertiaryLeft,
}) => {
  const property1TertiaryStyle = useMemo(() => {
    return {
      borderRadius: property1TertiaryBorderRadius,
      padding: property1TertiaryPadding,
      position: property1TertiaryPosition,
      top: property1TertiaryTop,
      left: property1TertiaryLeft,
    };
  }, [
    property1TertiaryBorderRadius,
    property1TertiaryPadding,
    property1TertiaryPosition,
    property1TertiaryTop,
    property1TertiaryLeft,
  ]);

  return (
    <div className="property-1tertiary" style={property1TertiaryStyle}>
      {leadingIcon && <img className="album-icon" alt="" src="/album.svg" />}
      <div className="button">{buttonText}</div>
      {trailingIcon && <img className="album-icon" alt="" src="/album.svg" />}
    </div>
  );
};

export default Property1Tertiary;
