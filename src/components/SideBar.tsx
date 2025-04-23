interface Props {
  toggleDisplay: () => void;
}
export const SiderBar = ({ toggleDisplay }: Props) => {
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>

      <div className="sidebarContents">
        <h2>Mars picture</h2>
        <div>
          <p>Description</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem tempore repellendus dolores sequi deserunt, unde, ad quaerat
            modi sint consequatur enim provident eveniet tempora ut tenetur iusto veniam nulla distinctio?
          </p>
        </div>
        <button onClick={toggleDisplay}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};
