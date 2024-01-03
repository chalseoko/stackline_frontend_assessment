import { TailSpin } from "react-loader-spinner";

const Spinner = (props: any) => {
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  };
  return (
    <div style={style}>
      <TailSpin
        visible={props.loading}
        height="250"
        width="250"
        color="#062849"
      />
    </div>
  );
};

export default Spinner;
