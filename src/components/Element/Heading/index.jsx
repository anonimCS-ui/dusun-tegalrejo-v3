function Heading(props) {
  return;
}

function One(props) {
  const { title } = props;
  return <h1>{title}</h1>;
}

function Two(props) {
  const { title } = props;
  return <h2>{title}</h2>;
}

function Three(props) {
  const { title } = props;
  return <h3>{title}</h3>;
}

function Four(props) {
  const { title } = props;
  return <h4>{title}</h4>;
}

Heading.One = One;
Heading.Two = Two;
Heading.Three = Three;
Heading.Four = Four;

export default Heading;
