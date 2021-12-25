import React, { useState } from "react"
import Web3 from "web3"
import { ContractABI } from "./ContractABI"

import "./App.css"

const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))
web3.eth.defaultAccount = web3.eth.accounts[0]

const RemixContract = new web3.eth.Contract(
  ContractABI,
  "0x0a5a02796C298C5857e77393B9f2889386B2a9D8"
)

function App() {
  const [firstName, setFirstName] = useState(""),
    [lastName, setLastName] = useState(""),
    [peopleCount, setPeopleCount] = useState(null),
    [removeId, setRemoveId] = useState(0)

  const [id, setId] = useState(undefined)
  const [people, setPeople] = useState(undefined)

  const setData = async (e) => {
    e.preventDefault()

    const gas = await RemixContract.methods
      .addPerson(firstName, lastName)
      .estimateGas()
    const result = await RemixContract.methods
      .addPerson(firstName, lastName)
      .send({ from: "0x177F9297F29E7F7120a66f1FD001D39B2AB5DB46", gas })
    console.log(result)
  }

  const removePerson = async (e) => {
    e.preventDefault()

    const gas = await RemixContract.methods.removePerson(removeId).estimateGas()
    const result = await RemixContract.methods
      .removePerson(removeId)
      .send({ from: "0x177F9297F29E7F7120a66f1FD001D39B2AB5DB46", gas })
    console.log(result)
  }

  const getPeopleCount = async (e) => {
    RemixContract.methods.peopleCount().call().then(setPeopleCount)
  }

  const getPeople = async (e) => {
    RemixContract.methods.people(id).call().then(setPeople)
  }

  return (
    <div>
      <header>
        <form onSubmit={setData}>
          <label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <input type="submit" value="Set Name" />
        </form>
        <form onSubmit={removePerson}>
          <label>
            <input
              type="number"
              name="firstName"
              value={removeId}
              onChange={(e) => setRemoveId(e.target.value)}
            />
          </label>
          <input type="submit" value="Remove Person" />
        </form>
        <br />
        <button onClick={getPeopleCount} type="button">
          Get People Count
        </button>
        <br />
        <label>People count : {peopleCount}</label>

        <br />
        <button onClick={getPeople} type="button">
          Get People By Id
        </button>

        <input
          type="number"
          name="firstName"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />

        {people
          ? `${people?.[0]}, ${people?.[1]}, ${people?.[2]}, ${people?.[3]}`
          : null}
      </header>
    </div>
  )
}

export default App
