import Property1Tertiary from "./property1-tertiary";
import "./selling-point-container.css";

const SellingPointContainer = () => {
  return (
    <div className="selling-point">
      <div className="frame-parent">
        <div className="frame-child" />
        <div className="parent">
          <div className="div">35,000</div>
          <div className="websites-already-thriving">
            Websites Already Thriving with Us!
          </div>
        </div>
      </div>
      <div className="experience-the-power-of-speed-parent">
        <div className="experience-the-power-container">
          <p className="experience">Experience</p>
          <p className="the-power-of">the power of</p>
          <p className="experience">
            <span className="speed">speed</span>
            <span> with our</span>
          </p>
          <p className="experience">cutting-edge</p>
          <p className="hosting-infrastructure">hosting infrastructure</p>
        </div>
        <Property1Tertiary
          buttonText="Read our story"
          trailingIcon={false}
          leadingIcon={false}
          property1TertiaryBorderRadius="unset"
          property1TertiaryPadding="var(--padding-xs) var(--padding-xl)"
          property1TertiaryPosition="absolute"
          property1TertiaryTop="317px"
          property1TertiaryLeft="556px"
        />
      </div>
    </div>
  );
};

export default SellingPointContainer;
