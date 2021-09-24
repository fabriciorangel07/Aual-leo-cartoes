import React from "react";

const Membro = props => {

    return (

        <div>{props.nome} <b> {props.sobrenome} </b> {props.primo}</div>
    )
}

export default Membro