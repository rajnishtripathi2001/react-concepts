import React, { useState } from "react";

export const Validation=()=>{
  
  const [name, setName] = useState("");
  const [phoneNumber,setPhoneNumber] = useState("");
  const [email,setEmail] = useState("");
  const [institute, setInstitute] = useState("");
  const [events, setEvents] = useState([]);
  const [data, setData] = useState([]);

  const [isNameError, setIsNameError] = useState(false);
  const [isPhoneNumberError,setIsPhoneNumberError] = useState(false);
  const [isEmailError,setIsEmailError] = useState(false);

  let eventOptions = [
    {
      key: "dancing",
      value: "dancing",
    },
    {
      key: "drama",
      value: "drama",
    },
    {
      key: "mono-act",
      value: "mono-act",
    },
    {
      key: "singing",
      value: "singing",
    },
  ];

  const handleSubmit=(event)=>{
    event.preventDefault()

    let error = false

    let namePattern = /^[a-zA-Z]+$/gm;
    let nameRegex = new RegExp(namePattern);
    if(nameRegex.test(name)){
        setIsNameError(false)
        error = false
    }else{
        setIsNameError(true)
        error=true
    }

    let phonePattern = /^[\d]+$/gm;
    let phoneRegex = new RegExp(phonePattern);
    if(phoneRegex.test(phoneNumber)){
        setIsPhoneNumberError(false);
        error = false
    }else{
        setIsPhoneNumberError(true);
        error=true
    }

    let emailPattern = /^[a-zA-Z0-9]+@[a-zA-Z]+\.+[a-zA-Z]{2,4}$/gm;
    let emailRegex = new RegExp(emailPattern);
    if(emailRegex.test(email)){
        setIsEmailError(false)
        error = false
    }else{
        setIsEmailError(true)
        error=true
    }

    if(error===false){
        const newData = {name,phoneNumber,email,institute,events}
        setData(prevState => {
            //console.log(prevState,"===> Prev State")
            return [...prevState,newData]  
        })
    }

    
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter Your Name:</label>
          <input
            placeholder="enter your name"
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
          />
        </div>

        <div>
          <label>Enter Your Phone Number</label>
          <input
            placeholder="enter your Phone Number"
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
            value={phoneNumber}
          />
        </div>

        <div>
          <label>Enter Your Email</label>
          <input
            placeholder="enter your Phone Number"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          />
        </div>

        <div>
          <label>Enter Your Institute:</label>
          <input
            placeholder="enter your institute"
            onChange={(event) => {
              setInstitute(event.target.value);
            }}
            value={institute}
          />
        </div>

        <div>
          <label>Select the Events</label>
          <select
            multiple
            value={events}
          onChange={(event)=>{
            let values=[...event.target.selectedOptions].map(option => option.value)
            setEvents(values)
            //console.log(values)
          }}>
            {eventOptions.map((option) => (
              <option key={option.key} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        </div>

        <div className="error-container">
            <p>{isNameError && "Name is Not valid"}</p>
            <p>{isPhoneNumberError && "Phone Number is not Valid"}</p>
            <p>{isEmailError && "Email is not Valid"}</p>
        </div>

        <div>
          <button type="submit">Submit Form</button>
        </div>
      </form>
      <div>
        <table border="5px solid">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Institute</th>
                    <th>Events</th>
                </tr>
            </thead>
            <tbody>
                {data.map((data,index)=>
                    <tr key={"row-"+index}>
                        <td>{data.name}</td>
                        <td>{data.phoneNumber}</td>
                        <td>{data.email}</td>
                        <td>{data.institute}</td>
                        <td>{data.events.join(",")}</td>
                    </tr>
                )}
            </tbody>
        </table>
      </div>
    </div>
  );
}