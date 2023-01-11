import data from "../data/data";
import { v4 } from "uuid";

function traverseTree(id, d, isFolder = false, name) {
  console.log(d);
  if (d.id == id) {
    let new_id = v4();
    let newChild = {
      name: name,
      id: new_id,
      isFolder: isFolder,
      child: []
    };
    d.child.push(newChild);
    return true;
  }
  if ("child" in d && d.child.length > 0) {
    d.child.forEach((element) => {
      let result = traverseTree(id, element, isFolder);
      if (result) {
        return true;
      }
    });
  }
  return false;
}
export function useAddFolder(props) {
  return (props) => {
    traverseTree(props.id, data, props.isFolder, props.name);
  };
}
