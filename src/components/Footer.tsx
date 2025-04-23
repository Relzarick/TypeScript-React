interface Props {
  toggleDisplay: () => void;
}

export const Footer = ({ toggleDisplay }: Props) => {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>Mars</h2>
        <h1>APOD PROJECT</h1>
      </div>

      <button onClick={toggleDisplay}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
};
