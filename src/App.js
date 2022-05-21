import { Fade } from "react-awesome-reveal";
import Homepage from "./components/Homepage";
import { PromptsAndOutputsProvider } from "./context/promptsAndOutputsContext";

const App = () => {
  return (
    <>
      <PromptsAndOutputsProvider>
        <Fade>
            <Homepage />
        </Fade>
      </PromptsAndOutputsProvider>
    </>
  );
};
export default App;
