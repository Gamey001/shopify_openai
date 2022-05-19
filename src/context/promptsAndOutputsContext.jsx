import { useState, useCallback, createContext, useEffect } from "react";
import { openAPICall } from "../APICalls/openAPICall";

export const PromptsAndOutputsContext = createContext([]);
export const PromptsAndOutputsProvider = ({ children }) => {
  const [state, setState] = useState([
    { input: "", output: "How may I help you?" },
  ]);
  //prevents infinite execution of the useEffect hook on state update
  const [isChanged, setIsChanged] = useState(false); 

  const updatePromptsAndOutputsContext = useCallback(
    (input) => {
      openAPICall(input).then((res) => {
      if(res.error) return alert("Unauthorized user. Ensure to use a valid API Key");
      //creates new prompt-output object to be appended to the previous state
        const newListItem = { input, output: res.choices[0].text };
        let newList = JSON.parse(localStorage.promptsAndOutputs);
        newList.push(newListItem);
        localStorage.setItem("promptsAndOutputs", JSON.stringify(newList));
        setState([...state, newListItem]);
      });
    },
    [isChanged, state]
  );

  const loadPOsFromLocalStorage = useCallback(() => {
    if (localStorage.promptsAndOutputs) {
      setState(JSON.parse(localStorage.promptsAndOutputs));
    } else {
      localStorage.setItem("promptsAndOutputs", JSON.stringify(state));
    }
  }, [isChanged]);

  useEffect(() => {
    loadPOsFromLocalStorage();
  }, [loadPOsFromLocalStorage]);

  return (
    <PromptsAndOutputsContext.Provider
      value={{
        state,
        updatePromptsAndOutputsContext,
      }}
    >
      {children}
    </PromptsAndOutputsContext.Provider>
  );
};
