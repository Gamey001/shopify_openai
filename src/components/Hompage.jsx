import { PromptsAndOutputsContext } from "../context/promptsAndOutputsContext";
import { EnterPromptForm } from "../components/EnterPromptForm";
import { useContext } from "react";
import "../index.css";
import { Bounce, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";
import { Animate } from "react-animate-mount";

const Homepage = () => {
  const { state } = useContext(
    PromptsAndOutputsContext
  );

  let robotBgvalue = "url('https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=500') no-repeat center";
  let newId = 0;
  const containerStyle = {
    background: "#128c7e",
    minHeight: "100vh",
  };
  const chatsContainerStyle = {
    maxWidth: "30em",
  };
  const yellowHeaderWelcome = {
    fontStyle: "italic",
    fontSize: "1.25rem",
    fontFamily: "'Ibarra Real Nova', serif",
  };
  const chatsHeaderStyle = {
    background: "#ffe03c",
  };
  const prompAndtOutputTxtStyle = {
    fontSize: ".89rem",
  };
  const promptAndOutputWrHomepageerStyle = {
    maxWidth: "14.69rem",
    padding: "1.1rem",
    margin: "1rem",
    borderRadius: "1.25rem",
    display: "flex",
    boxShadow: "0 .25rem .25rem rgb(0,0,0)",
    background: "#fddbc7",
  };
  const headerTxtStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-95%)",
    color: "rgb(255,255,255)",
    fontWeight: "bold",
    fontSize: "calc(1rem + 6vw)",
    zIndex: "10",
    textAlign: "center"
  };
  const funWithAIBg = {
    background: `${robotBgvalue}`,
    opacity: ".3",
    minHeight: "80vh",
    borderRadius: ".5rem",
  }

  const newestToOldest = [...state].reverse();

  return (
    <>
      <nav className="navbar navbar-dark bg-dark p-3">
        <span className="navbar-brand mb-0">OPENAI</span>
      </nav>
      <section style={containerStyle} className="container-fluid p-4">
        <section className="row">
        
          <header style={{ position: "relative" }} className="col-sm-6 centralize">
            <h2 style={headerTxtStyle}>Fun with AI</h2>
            <EnterPromptForm />
            <section
              style={funWithAIBg}
            ></section>
          </header>
          <section className="col-sm-6">
            <section className="card-container">
              <section
                style={chatsContainerStyle}
                className="card-container__inner card rounded m-auto"
              >
                <section className="container px-0">
                  <section className="row">
                    <section className="col-sm-12">
                      <section style={chatsHeaderStyle} className="p-1 text-center">
                        <h2 className="chats-header">
                          <span className="my-2">
                            Hello!
                          </span>
                          <span style={yellowHeaderWelcome}>
                            Your Personal Assistant.
                          </span>
                        </h2>
                      </section>
                      <section>
                        <ul style={{ paddingLeft: "0" }}>
                          {newestToOldest &&
                            newestToOldest.map(({ input, output }) => {
                              return (
                                
                                <li key={++newId} style={{ listStyle: "none" }}>
                                  <article>
                                    {input && (
                                 
                                      <section
                                        className="prompt"
                                        style={promptAndOutputWrHomepageerStyle}
                                      >
                                        <h2 style={prompAndtOutputTxtStyle}>
                                          <span className="badge pl-0">Prompt: </span>
                                          {input}
                                        </h2>
                                      </section>
                                    )}
                                    <section
                                      style={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                      }}
                                    >
                                      <section
                                        className=""
                                        style={promptAndOutputWrHomepageerStyle}
                                      >
                                        <h2 style={prompAndtOutputTxtStyle}>
                                        <span className="badge pl-0">Response: </span>
                                          {output}
                                        </h2>
                                      </section>
                                    </section>
                                  </article>
                                </li>
                              );
                            })}
                        </ul>
                      </section>
                    </section>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
      <footer className="text-center bg-light p-5">
        <span>&copy; 2022 - Gamal ltd. All rights reserved.</span>
      </footer>
    </>
  );
};
export default Homepage;
