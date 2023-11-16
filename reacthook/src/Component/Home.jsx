import React, { useState } from "react";



const Home = () => {
    const Bhavnagar = "Bhavnagar";
    const Ahmedabad = "Ahmedabad";
    const Rajkot = "Rajkot";

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [city, setcity] = useState("");
    const [gender,setgender]=useState("");
    const [hobby,sethooby]=useState("");

    const handledata = (e) => {
        setname(e.target.value);
    }
    const emaildata=(e)=>{
        setemail(e.target.value);
    }
    const citydata=(e)=>{
        setcity(e.target.value);
    }
    const genderdata=(e)=>{
        setgender(e.target.value);
        
    }
    const hobbydata=(e)=>{
        sethooby(e.target.value);

    }
    


    const savedata = (e) => {
        e.preventDefault();
        console.log("Name is", name);
        console.log("Email is", email);
        console.log("City is ", city);
        console.log("Gender Is",gender);
        console.log("Hobby is ",hobby);
    }
    return (
        <>
            <form method="POST" onSubmit={savedata}>
                <input type="text" value={name} name="name" placeholder="Enter Name" onChange={handledata} required></input>
                <br></br>
                <br></br>
                <input type="email" value={email} name="email" placeholder="Enter Email" onChange={emaildata} required></input>
                <br></br>
                <br></br>
                <select name="city" value={city} onChange={citydata}>
                    <option>Select City</option>
                    <option value={Bhavnagar}>Bhavnagar</option>
                    <option value={Ahmedabad}>Ahmedabad</option>
                    <option value={Rajkot}>Rajkot</option>
                </select>
                <br></br>
                <br></br>
                <input type="radio" name="gender" value="male" onChange={genderdata}/>Male
                <input type="radio" name="gender" value="female" onChange={genderdata}/>Female
                <br></br>
                <br></br>
                
                <input type="checkbox" name="hobby" value="watching" onChange={hobbydata}/>Watching
                <input type="checkbox" name="hobby" value="reading" onChange={hobbydata}/>Reading
                <input type="checkbox" name="hobby" value="dancing" onChange={hobbydata}/>Dancing
                <br></br>
                <br></br>
                
                <button type="submit">Submit</button>

            </form>
            <h1>Pritesh Bhatiya</h1>
        </>
    )
}

export default Home;