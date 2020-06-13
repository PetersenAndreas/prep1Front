import React, { useState, useEffect } from "react";
import settingUrl from "./settings";

export function Search() {
  const [searchId, setSearchId] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [searchPhone, setSearchPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [address, setAddress] = useState({});
  const [allHobbies, setAllHobbies] = useState([]);
  const [selectHobby, setSelectHobby] = useState("");
  const [peopleSpecificHobby, setpeopleSpecificHobby] = useState([]);

  const URL = settingUrl.personApi();
  const URL2 = settingUrl.hobbyApi();

  useEffect(() => {
    fetchAllHobbies();
  }, []);

  function fetchAllHobbies() {
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch(URL2 + "/all", options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllHobbies(data);
      });
  }

  function fetchUserOnHobby(hobbyPick) {
    console.log(hobbyPick);
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch(URL + "/hobby/" + hobbyPick, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setpeopleSpecificHobby(data);
      });
  }

  function fetchUserId(id) {
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch(URL + "/id/" + id, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setPhone(data.phone);
        setEmail(data.email);
        setHobbies(data.hobbies);
        setAddress(data.address);
      });
  }
  function fetchUserEmail(email) {
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch(URL + "/email/" + email, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setPhone(data.phone);
        setEmail(data.email);
        setHobbies(data.hobbies);
        setAddress(data.address);
      });
  }
  function fetchUserPhone(phone) {
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    fetch(URL + "/phone/" + phone, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setPhone(data.phone);
        setEmail(data.email);
        setHobbies(data.hobbies);
        setAddress(data.address);
      });
  }

  function changeHandlerSelectHobby(event) {
    console.log("Changehandler " + event.target.value);
    let str = event.target.value;
    setSelectHobby(str)
  }

  function changeHandlerId(event) {
    let str = event.target.value;
    console.log(str)
    setSearchId(str);
  }
  function changeHandlerEmail(event) {
    let str = event.target.value;
    console.log(str)
    setSearchEmail(str);
  }
  function changeHandlerPhone(event) {
    let str = event.target.value;
    console.log(str)
    setSearchPhone(str);
  }

  function submitHandlerHobbySelect(event) {
    event.preventDefault();
    fetchUserOnHobby(selectHobby);
  }

  function submitHandlerId(event) {
    event.preventDefault();
    fetchUserId(searchId);
    setSearchPhone("");
    setSearchId("");
    setSearchEmail("");
  }
  function submitHandlerEmail(event) {
    event.preventDefault();
    fetchUserEmail(searchEmail);
    setSearchPhone("");
    setSearchId("");
    setSearchEmail("");
  }
  function submitHandlerPhone(event) {
    event.preventDefault();
    fetchUserPhone(searchPhone);
    setSearchPhone("");
    setSearchId("");
    setSearchEmail("");
  }

  return (
    <div style={{width:"100%"}}>  
    <div style={{width:"30%", float: "left"}}>
        <h2>Search</h2>
        <p>Lost and found - Search for a person here</p>
        <input type="text" placeholder="ID" value={searchId} onChange={changeHandlerId}></input>
        <br />
        <button onClick={submitHandlerId}>Search</button>
        <br />
        <input type="text" placeholder="Email" value={searchEmail} onChange={changeHandlerEmail}></input>
        <br />
        <button onClick={submitHandlerEmail}>Search</button>
        <br />
        <input type="text" placeholder="Phone" value={searchPhone} onChange={changeHandlerPhone}></input>
        <br />
        <button onClick={submitHandlerPhone}>Search</button>
        <p>Name: {firstName} {lastName}</p>
        <p>Address: {address ? address.city : ""} {address ? address.street : ""} {address ?  address.zip : ""} </p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        
        Hobbies:{ hobbies && hobbies.length > 0 ?
        hobbies.map((hobby, x) => {
            return (
            <div key={x}>
            <p>{x+1+":"}</p>    
            <p>Name: {hobby.name}</p>
            <p>Description: {hobby.description}</p>
            </div>
            );
        }) : ""}
    </div>
    {/*Split*/}
    <div style={{width:"30%", float:"left"}}>
        <h2>Search people based on hobby</h2>
        <p>Stalking on high level</p>
        <select onChange={changeHandlerSelectHobby} style={{ width: "200px"}}>
            {allHobbies.map((hobby, x) =>{return(<option key={x} value={hobby.name}>{hobby.name}</option>)})}
        </select>
        <button onClick={submitHandlerHobbySelect}>Search</button>
        <br/>
        Hobbies People:{ peopleSpecificHobby && peopleSpecificHobby.length > 0 ?
        peopleSpecificHobby.map((people, x) => {
            return (
            <div key={x}>  
            <p>{x+1+":"} {people.firstName} {people.lastName}</p>
            </div>
            );
        }) : ""}
    </div>
    {/*Split*/}
    <div style={{width:"30%", float:"left"}}>
        <h2>All Hobbies</h2>
        <p>All of it</p>
        <ul>
        {allHobbies.map((hobby, x) =>{return(<li key={x}>{hobby.name} - {hobby.description}</li>)})}
        </ul>
    </div>
    </div>
  );
}
