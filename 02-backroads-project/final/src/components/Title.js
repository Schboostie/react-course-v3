const Title = ({ title, subTitle, bitchingBox }) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
      <p>You</p>
    </div>
  );
};
export default Title;
