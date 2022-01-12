import ChannelBar from "./components/ChannelBar";
import ContentContainer from "./components/ContentContainer";
import SideBar from "./components/SlideBar";

const App = () => {
  return (
    <div className="flex">
      <SideBar />
      <ChannelBar />
      <ContentContainer />
    </div>
  );
};

export default App;
