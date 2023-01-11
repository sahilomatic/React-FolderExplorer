import { useState, useEffect } from "react";
import "./folder.css";

function Folder(props) {
  const [expand, setExpand] = useState(false);
  const [data, setData] = useState({});

  const [showInputBox, setShowInputBox] = useState({
    display: false,
    isFolder: null,
    name: ""
  });
  useEffect(() => {
    console.log(props.data);
  }, [props.data]);
  function handleAddFunction(e) {
    e.stopPropagation();
    if (e.target.value && e.keyCode === 13) {
      props.updateTree(data.id, showInputBox.name, showInputBox.isFolder);
      setShowInputBox({
        display: false,
        isFolder: null,
        name: ""
      });
    } else {
      let prevName = showInputBox.name;
      setShowInputBox({
        ...showInputBox,
        name: prevName ? prevName + e.key : e.key
      });
    }
  }

  if (data.isFolder) {
    return (
      <div className="folder">
        {/*do it for parent node*/}

        <div>
          <span
            onClick={() => {
              setExpand(!expand);
              setShowInputBox({ display: false, isFolder: null });
            }}
          >
            📁{data.name}
          </span>
          <span>
            <button
              onClick={() => {
                setShowInputBox({ display: true, isFolder: true });
              }}
            >
              +Add Folder
            </button>
          </span>
          <span>
            <button
              onClick={() => {
                setShowInputBox({ display: true, isFolder: null });
              }}
            >
              +Add File
            </button>
          </span>
        </div>
        {showInputBox.display ? (
          <div>
            <input
              type="text"
              value={showInputBox.name}
              placeholder={showInputBox.isFolder ? "Add Folder" : "Add File"}
              onBlur={() => {
                setShowInputBox({ display: false, isFolder: null });
              }}
              onKeyDown={(e) => {
                handleAddFunction(e);
              }}
            />
          </div>
        ) : (
          ""
        )}
        <div style={{ display: expand ? "block" : "none" }}>
          {data.child.map((obj, id) => {
            return <Folder data={obj} key={id} />;
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="file">
        {/*do it for parent node*/}

        <div>
          <span>📄{data.name}</span>
        </div>
      </div>
    );
  }
}

export default Folder;
