import Homepage from "./components/Hompage";
import { PromptsAndOutputsProvider } from "./context/promptsAndOutputsContext";

const App = () => {
  return (
    <>
      <PromptsAndOutputsProvider>
        <Homepage />
      </PromptsAndOutputsProvider>
    </>
  );
};
export default App;
