interface Props {
  data: Record<string, string>;
}

export const Main = ({ data }: Props) => {
  return (
    <div className="imgContainer">
      <img src={data?.hdurl} alt={data?.title} className="bgImage" />
    </div>
  );
};
