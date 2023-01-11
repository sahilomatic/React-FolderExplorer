import "./styles.css";
import data from "./data/data";
import { useState } from "react";
import Folder from "./components/folder2";
import useTraverseTree from "./customHooks/use-add-folder";
export default function App() {
  const [dataSet, setData] = useState(data);

  return <Folder data={data} />;
}
