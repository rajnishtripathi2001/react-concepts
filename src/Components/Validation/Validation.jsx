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
    const newData = {name,phoneNumber,email,institute,events}
    //console.log(newData)
    setData(prevState => {
        console.log(prevState,"===> Prev State")
        return [...prevState,newData]  
    })
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