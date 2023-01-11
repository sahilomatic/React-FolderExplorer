import { useState } from "react";
import "./folder2.css";
import { useAddFolder } from "../customHooks/use-add-folder";
export default function Folder(props) {
  const { data } = props;
  const [showChildren, setShowChildren] = useState(false);
  const [additionFolder, setAddFolder] = useState();
  const [fileName, setFilName] = useState("");
  const addFolder = useAddFolder();

  const handleNameChange = (e) => {
    console.log(fileName);
    if (e.key === "Enter") {
      console.log("here");
      addFolder({ ...additionFolder, name: e.target.value });
    }

    setFilName(e.target.value);
  };
  return (
    <div>
      {data && (
        <div>
          {data.isFolder ? (
            <div className="isFolder">
              <span
                onClick={() => {
                  setShowChildren((prevState) => {
                    return !prevState;
                  });
                }}
              >
                📁{data.name}{" "}
                <button
                  className=".but"
                  onClick={() => {
                    setAddFolder({ id: data.id, isFolder: true });
                  }}
                >
                  Add Folder
                </button>{" "}
                <button
                  className=".but"
                  onClick={() => {
                    setAddFolder({ id: data.id, isFolder: false });
                  }}
                >
                  {" "}
                  Add File
                </button>
              </span>
              <div>
                {additionFolder && (
                  <input
                    type="text"
                    onChange={(e) => {
                      console.log("onChange");
                      setFilName(e.target.value);
                    }}
                    onKeyPress={(e) => {
                      console.log(e.key);
                      if (e.key === "Enter") {
                        addFolder({ ...additionFolder, name: fileName });
                        setAddFolder(null);
                      }
                    }}
                  />
                )}
              </div>
            </div>
          ) : (
            <span>📄{data.name}</span>
          )}

          {showChildren && (
            <div className="children">
              {data.child.map((obj) => {
                return (
                  <div key={obj.id}>
                    <Folder data={obj} key={obj.id} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
