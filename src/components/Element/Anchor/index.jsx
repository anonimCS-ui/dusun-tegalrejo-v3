import { Link } from "react-router-dom";

function Anchor(props) {
  const { aLink, aTarget = "_blank", aText } = props;
  return (
    <Link to={aLink} target={aTarget}>
      {aText}
    </Link>
  );
}

export default Anchor;
