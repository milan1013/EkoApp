import {React,useEffect,useState} from 'react'
import Tree from "../../Components/Tree/Tree";
import "./Forest.css";

export default function Forest() {
  const[numOfEvents,setNumOfEvents] = useState(0);
  useEffect(() =>{
    createTrees();
  },[numOfEvents]);

  function createTrees()
  {
    return(
    <Tree />
    )
  }
  return (
    <>
     <div className="forest-container">
      <Tree />
      <Tree className="tree2"/>
    </div>
    </>
  )
}
