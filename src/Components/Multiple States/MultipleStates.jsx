import { useState } from "react";

export const MultipleStates = () => {
  const [name, setName] = useState("");
  const [institute, setInstitute] = useState("");
  const [events, setEvents] = useState([]);
  const [data, setData] = useState([]);

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
    const newData = {name,institute,events}
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
                    <th>Institute</th>
                    <th>Events</th>
                </tr>
            </thead>
            <tbody>
                {data.map((data,index)=>
                    <tr key={"row-"+index}>
                        <td>{data.name}</td>
                        <td>{data.institute}</td>
                        <td>{data.events.join(",")}</td>
                    </tr>
                )}
            </tbody>
        </table>
      </div>
    </div>
  );
};
