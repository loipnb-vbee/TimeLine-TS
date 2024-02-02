import "./App.scss";
import { TimeArea } from "./components/timeArea";

const App = () => {
  const CustomScale = (props: { scale: number }) => {
    const { scale } = props;
    const min = parseInt(scale / 60 + "");
    const second = ((scale % 60) + "").padStart(2, "0");
    return <>{`${min}:${second}`}</>;
  };

  return (
    <div className="timeline-editor">
      <TimeArea
        scaleSplitCount={10}
        scaleCount={20}
        getScaleRender={(scale) => <CustomScale scale={scale} />}
      />
    </div>
  );
};

export default App;
