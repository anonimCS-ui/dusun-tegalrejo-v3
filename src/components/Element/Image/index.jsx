function Image(props) {
  const { iLink, iText = "photo" } = props;
  return <img src={iLink} alt={iText} />;
}

export default Image;
