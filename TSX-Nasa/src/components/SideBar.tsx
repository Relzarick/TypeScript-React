interface Props {
  toggleDisplay: () => void;
  data: Record<string, string>;
}
export const SiderBar = ({ toggleDisplay, data }: Props) => {
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>

      <div className="sidebarContents">
        <h2>{data?.title}</h2>

        <div className="descriptionContainer">
          <p className="descriptionTitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>

        <button onClick={toggleDisplay}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};
