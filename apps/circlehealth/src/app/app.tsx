// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import Header from "../../../../libs/common-ui/src/lib/header/header";
import Card from "./card/card";
import {useState} from "react";

export interface AppProps {
}

export interface UserList {
  firstName: string,
  LastName:string,
  MobileNumber: string,
  Address: string,
  Designation : string,
  id:number
}

export function App() {
  const user:Array<UserList> = [
    {
      firstName: "sunny",
      LastName: " Rai",
      MobileNumber: "9643478910",
      Address: "Bangalore",
      Designation : "Software Engineer",
      id:100
    },
    {
      firstName: "abhishek",
      LastName: " Rai",
      MobileNumber: "9643478911",
      Address: "Bangalore",
      Designation : "Software Engineer I",
      id:101
    },
    {
      firstName: "Bunty",
      LastName: " Singh",
      MobileNumber: "9643478912",
      Address: "Bangalore",
      Designation : "Software Engineer",
      id:102
    },
    {
      firstName: "Kamal",
      LastName: " Singh",
      MobileNumber: "9643478913",
      Address: "Bangalore",
      Designation : "Software Engineer",
      id:103
    },
    {
      firstName: "himanshu",
      LastName: " Verma",
      MobileNumber: "9643478914",
      Address: "Delhi",
      Designation : "Software Engineer",
      id:104
    },
    {
      firstName: "Shivek",
      LastName: " Sood",
      MobileNumber: "9643478915",
      Address: "Bangalore",
      Designation : "Software Engineer",
      id:105
    },
    {
      firstName: "Rishab",
      LastName: " Shukla",
      MobileNumber: "9643478917",
      Address: "Bangalore",
      Designation : "Software Engineer",
      id:106
    },
    {
      firstName: "Shruti Rai",
      LastName: " Rai",
      MobileNumber: "9643478919",
      Address: "Bangalore",
      Designation : "Software Engineer",
      id:107
    },
    {
      firstName: "Pranay",
      LastName: " Kumar",
      MobileNumber: "9643478920",
      Address: "Bangalore",
      Designation : "Software Engineer",
      id:108
    }
  ];
  const [name, updateName] = useState('sunny rai');
  const [count, setCount] = useState(0);
  const [list, updatedList] = useState(user)
  const changeName = ()=>{
    setCount( count+1);
    updateName('sunny rai' + count)
  }
  const removeList = () =>{
    updatedList(list.slice(6,7));
  }
  const resetList = () =>{
    updatedList(user);
  }
  const listElement = list.map((item:UserList, index) => {
    return (
      <Card name={item.firstName} designation = {item.Designation}  address={item.Address} key={index}></Card>
    )
  })
  return (
    <>
      <Header/>
      <button className={'btn btn-primary'} onClick={removeList}>click me</button>
      <button className={'btn btn-primary'} onClick={resetList}>reset </button>
      {listElement}
    </>
  );
}

export default App;
