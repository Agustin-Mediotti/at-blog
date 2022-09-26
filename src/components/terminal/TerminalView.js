import { ReactTerminal } from "react-terminal";
import '../../styles/TerminalView.css';
import dirSchema from '../../context/dir.json'

function TerminalView(props) {

  let currentDirArr = ["~", "Documents", "blog"];

  let lastItem = currentDirArr[currentDirArr.length - 1];

  const themes = {
    "my-custom-theme": {
      themeBGColor: "#201f1e",
      themeToolbarColor: "#DBDBDB",
      themeColor: "#FFFEFC",
      themePromptColor: "#FFFEFC",
      promptColor: "#15a24d",
      errorColor: "#b52606",
      folderColor: "#96c0c9",
      branchColor: "#bc69b3",
      versionColor: "#15a24d",
      linkColor: "#e5e5e5"
    }
    // etc etc
  };

  const error = {
    color: themes["my-custom-theme"].errorColor
  };

  const folder = {
    color: themes["my-custom-theme"].folderColor,
    fontWeight: "bold"
  }

  const branch = {
    color: themes["my-custom-theme"].branchColor,
    fontWeight: "bold"
  }

  const version = {
    color: themes["my-custom-theme"].versionColor,
    fontWeight: "bold"
  }

  const promptColor = {
    color: themes["my-custom-theme"].promptColor,
    fontWeight: "bold"
  }

  const dir = {
    home: "~/",
    documents: "~/Documents/",
    blog: "~/Documents/blog/"
  }

  const prompt = (
    <>
      <br />
      <span style={promptColor}>
        ❯
      </span>
    </>
  )

  let promptInProject = (
    <>
      <br />
      <span style={folder}>
        {currentDirArr.join("/") + "/"}
      </span>
      <span> on </span>
      <span style={branch}>
         main
      </span>
      <span> via </span>
      <span style={version}>
         17.6.0
      </span>
      <br />
      <span style={promptColor}>
        ❯
      </span>
    </>
  )

  const commands = {
    whoami: "net_creature",
    help: () => {
      return helpMessage
    },
    cd: (directory) => {
      currentDirArr.push(directory);
      lastItem = directory;
    },
    "cd..": () => {
      currentDirArr.pop();
    },
    pwd: () => {
      return `${currentDirArr.join("/") + "/"}`;
    },
    echo: (message) => { return blogEntry },
    ls: () => {
      if (currentDirArr.join("/") + "/" == dir.blog) {
        let content = []
        dirSchema["~"]["/Documents"]["/blog"].forEach(element => {
          content.push('"' + element.title + '"')
        });
        return content.join(" ")
      }
    },
    cat: (fileName) => {
      return blogEntry
    }
  };

  let blogEntry = (
    <span>
      {dirSchema["~"]["/Documents"]["/blog"][0].title}
      <br />
      {dirSchema["~"]["/Documents"]["/blog"][0].subtitle}
      <br />
      {dirSchema["~"]["/Documents"]["/blog"][0].description}
      <br />
      <br />
      {dirSchema["~"]["/Documents"]["/blog"][0].body}
      <br />
      {dirSchema["~"]["/Documents"]["/blog"][0].date}
      <br />
    </span>
  )

  let helpMessage = (
    <span>
      {'cd navigate trough directories'}
      <br />
      {' cd.. to go back one directory back'}
      <br />
      {'pwd print directory'}
      <br />
      {'echo print text in console'}
      <br />
      {'ls print the content of the current directory'}
    </span>
  )

  let welcomeMsg = (
    <span>
      {'Type "help" for more information.'}
      <br />
      <br />
    </span>
  );

  return (
    <>
      <div className="termcontainer">
        <ReactTerminal
          commands={commands}
          themes={themes}
          welcomeMessage={welcomeMsg}
          prompt={promptInProject}
          theme="my-custom-theme"
          showControlBar={false}
          errorMessage={<span style={error}>bash: command not found</span>}
        />
      </div>
    </>

  );
} export default TerminalView;