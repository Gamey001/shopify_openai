import { useRef } from "react";
import { Bounce } from "react-awesome-reveal";

export const Message = ({txt, type}) => {
    const promptAndOutputWrHomepageerStyle = {
        maxWidth: "14.69rem",
        padding: "1.1rem",
        margin: "1rem",
        borderRadius: "1.25rem",
        JustifyContent: "flex-end !important",
        boxShadow: "0 .25rem .25rem rgb(0,0,0)",
        background: type === "Prompt"? "#fddbc7":"#bff0ff",
      };
    const prompAndtOutputTxtStyle = {
        fontSize: ".89rem",
      };
    const msgContainer= {
      display: "flex",
      justifyContent: type==="Prompt"? "flex-start":"flex-end",
    }
    
    return (
      <Bounce delay={type==="Response"? 0 : 600}>
    <section style={msgContainer}>
      <section style={promptAndOutputWrHomepageerStyle}>
        <h2 style={prompAndtOutputTxtStyle}>
          <span className="badge pl-0">{type === "Prompt"? "Prompt:" : "Response:"}</span>
          {txt}
        </h2>
      </section>
    </section>
    </Bounce>
    );
  };
  