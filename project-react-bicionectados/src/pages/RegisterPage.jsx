import React from "react";
import "./Authentication.css";
import DefaultButton from "../components/buttons/DefaultButton";
import { useState } from "react";
import axios from "axios";
import Modal from "../components/Modal/Modal";
import { text } from "@fortawesome/fontawesome-svg-core";

function RegisterPage() {
  const [username, setUserName] = useState("");
  const [password, setPasword] = useState("");
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);
  const [modaltitle, setModalTitle] = useState("");
  const [modaltext, setModalText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      username,
      password,
      email,
    };
    console.log(body);

    axios
      .post("http://localhost:8080/api/auth/registro", body)
      .then((res) => {
        if (res) {
          setModalText(res.data);
          setModal(true);
        } else {
          setModalText(res.data);
          setModal(true);
        }
      })
      .catch((error) => {
        setModalText("error al registrarte");
        +setModal(true);
      });

    console.log(e);
  };

  return (
    <>
      <div className="authenticaction-page">
        <div className="authentication-greenside leftside">
          <img width="700" src="src/assets/images/logobici.png" alt="logo" />
          <img
            width="450"
            height="450"
            src="src/assets/images/bicicleta.png"
            alt="bicycle"
          />
        </div>
        <div className="authentication-container">
          <div className="authentication-form">
            <h2>Crear Cuenta</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                name="username"
                type="name"
                placeholder="Nombre"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPasword(e.target.value)}
                required
              />
              <button type="submit">Registrarme</button>
            </form>
          </div>
        </div>
      </div>
      {modal && (
        <Modal title={modaltitle} text={modaltext} setModal={setModal} />
      )}
    </>
  );
}

export default RegisterPage;
