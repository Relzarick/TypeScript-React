interface Props {
  toggleDisplay: () => void;
  data: Record<string, string>;
}

export const Footer = ({ toggleDisplay, data }: Props) => {
  return (
    <footer>
      <div className="bgGradient"></div>

      <div>
        <h1>APOD PROJECT</h1>
        <h2>{data?.title}</h2>
      </div>

      <button onClick={toggleDisplay}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
};
