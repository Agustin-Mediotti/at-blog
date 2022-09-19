import { ReactTerminal } from "react-terminal";
import '../../styles/TerminalView.css';

function TerminalView(props) {

  let currentDirArr = ["~", "Documents", "blog"];

  let lastItem = currentDirArr[currentDirArr.length - 1];


  const commands = {
    whoami: "net_creature",
   cd: (directory) => {
      currentDirArr.push(directory);
      lastItem = directory;
    },
    "cd ..": () => {
      currentDirArr.pop();
    },
    pwd: () => {
      return `${currentDirArr.join("/") + "/"}`;
    },
    echo: (message) => `${message}`
  };

  let welcomeMsg = (
    <span>
      {" "}
      Type "help" for more information.
      <br />
      <br />
    </span>
  );

  const prompt = (
    <>
      <span>
        <br />
        {" "}
        {currentDirArr.join("/") + "/"} in nodejs-project on  trunk via  17.6.0
        <br />
      </span>

      <span>
        {" "}
         ❯
      </span>

    </>
  )

    const errMessage = (
    <span>
      {" "}
      bash: command not found
    </span>
  )

  return (
    <>
      <div className="termcontainer">
        <ReactTerminal
          commands={commands}
            themes={{
              "my-custom-theme": {
                themeBGColor: "#201f1e",
                themeToolbarColor: "#DBDBDB",
                themeColor: "#FFFEFC",
                themePromptColor: "#15a24d"
              }
            }}
          welcomeMessage={welcomeMsg}
          prompt={prompt}
          theme="my-custom-theme"
          showControlBar={false}
          errorMessage={errMessage}
        />
      </div>
    </>

  );
} export default TerminalView;