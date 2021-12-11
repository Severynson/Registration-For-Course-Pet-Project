import classes from "./FeatureCard.module.css";

const FeatureCard = (props) => {
  return (
    <div className={classes["card-box"]}>
      <div className={classes["svg-div"]}>{props.featureIcon}</div>
      <div className={classes["feature-name"]}><p>{props.featureName}</p></div>
      <div className={classes["feature-description"]}>
        {props.featureDescription}
      </div>
    </div>
  );
};

export default FeatureCard;
