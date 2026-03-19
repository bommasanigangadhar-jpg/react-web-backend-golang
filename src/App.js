import React, { Fragment, useEffect, useState } from "react";
import './App.css';
import Input from "./Input";


function HelloWorld(props) {
    const [isTrue, setIsTrue] = useState(false);
    const [crowd, setCrowd] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dob, setDob] = useState("");

    const toggleTrue = () => {
        if(isTrue) {
            setIsTrue(false);
            return;
        }
        setIsTrue(true);
    };

    useEffect( () => {
        console.log("use effect fired..!");

        let people = [
            {
                id: 1,
                firstName: "Mary",
                lastName: "Jones",
                dob: "2025-11-11",
            },
            {
                id: 2,
                firstName: "Jack",
                lastName: "Smith",
                dob: "2020-02-12",
            }
        ]
        setCrowd(people);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(lastName !== "") {
            addPerson(firstName, lastName, dob);
        }
    }

    const addPerson = (newFirst, newLast, newDob) => {
        let newPerson = {
            id: crowd.length + 1,
            firstName: newFirst,
            lastName: newLast,
            dob: newDob,
        }

        const newList = crowd.concat(newPerson);

        const sorted = newList.sort((a, b) => {
            if (a.lastName < b.lastName) {
                return -1;
            } else if (a.lastName > b.lastName) {
                return 1;
            }
            return 0;
        })

        setCrowd(sorted);
        setFirstName("");
        setLastName("");
        setDob("");
    }

    return (
        <Fragment>
            <hr></hr>
            <h1 className="h1-green">{props.message}</h1>
            <hr />
            {isTrue &&
                <Fragment>
                    <p>The current value of IsTrue is true</p>
                    <hr />
                </Fragment>
            }
            <hr />

            <form autoComplete="off" onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label className="form-label" htmlFor="first-name">First Name</label>
                    <Input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="first-name-new"
                        className="form-control"
                        onChange= {(event) => setFirstName(event.target.value)}
                    ></Input>

                    <Input
                        title="Last Name"
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="last-name-new"
                        className="form-control"
                        onChange= {(event) => setLastName(event.target.value)}
                    ></Input>

                    <Input
                        title="Date Of Birth"
                        type="date"
                        name="dob"
                        autoComplete="dob-new"
                        className="form-control"
                        onChange= {(event) => setDob(event.target.value)}
                    ></Input>

                    <input type="submit" value="Submit" className="btn btn-primary"></input>
                </div>
            </form>

            <div>
                First Name: {firstName} <br />
                Last Name: {lastName} <br />
                Dob: {dob} <br />
            </div>

            { isTrue ? <p>Is True</p> : <p>Is False</p> }
            <hr />
            <a href="#!" className="btn btn-outline-secondary" onClick={toggleTrue}>Toggle isTrue</a>
            <hr />
            <h3>People</h3>
            <ul className="list-group">
                {crowd.map((m) => (
                    <li key={m.id} className="list-group-item">{m.firstName} {m.lastName} {m.dob}</li>
                ))}
            </ul>
        </Fragment>
    );
}

export default HelloWorld;