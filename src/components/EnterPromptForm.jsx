import {
  PromptsAndOutputsContext
} from "../context/promptsAndOutputsContext";
import "../index.css";
import { useContext, useEffect, useState, useRef } from "react";

const promptForm = {
    position: 'absolute',
    top: '54%',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: "10"
  }
export const EnterPromptForm = ()=> {
    const [value, setValue] = useState('');
    const { updatePromptsAndOutputsContext } = useContext(PromptsAndOutputsContext);
    const promptField = useRef();
    
    const handleChange = (e)=>{
        const promptInput = e.target.value;
        setValue(promptInput); 
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!value) return alert('You should enter some text!')
        updatePromptsAndOutputsContext(value);
        setValue('');
    }

    useEffect(()=>{
        promptField.current.focus();
      });
    return(
        <form onSubmit={handleSubmit} style={promptForm}>
        <section className="form-group row">
          <section className="col-sm-12">
            <h3 className="text-white enter-prompt">Enter prompt</h3>
            </section>
          <section className="col-sm-12">
            <textarea onChange={handleChange} ref={promptField} value={value} style={{ resize: 'none'}} cols={40} className="form-control" id="prompt" placeholder="type something..." />
          </section>
        </section>
        <section className="form-group row text-right">
          <section className="col-sm-12 centralize">
            <button type="submit" className="btn btn-info">Submit</button>
          </section>
        </section>
      </form>
    );
}