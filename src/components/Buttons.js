import React from 'react'
import Button from "@mui/material/Button";

function Buttons(props) {

const {setSmile, setMouth, setRock, setSad, setDoubt, smile, mouth, rock, sad, doubt} = props

    return (
        <div className="btn_container">
        <Button
          style={{ margin: "5px", textTransform: "capitalize" }}
          onClick={() => {
            setSmile(!smile);
            setMouth(false);
            setRock(false);
            setSad(false);
            setDoubt(false);
          }}
          variant="contained"
        >
          Content
        </Button>
        <Button
          style={{ margin: "5px", textTransform: "capitalize" }}
          onClick={() => {
            setMouth(!mouth);
            setSmile(false);
            setRock(false);
            setSad(false);
            setDoubt(false);
          }}
          variant="contained"
        >
          Choqué
        </Button>
        <Button
          style={{ margin: "5px", textTransform: "capitalize" }}
          onClick={() => {
            setRock(!rock);
            setSmile(false);
            setMouth(false);
            setSad(false);
            setDoubt(false);
          }}
          variant="contained"
        >
          Doute
        </Button>
        <Button
          style={{ margin: "5px", textTransform: "capitalize" }}
          onClick={() => {
            setSad(!sad);
            setSmile(false);
            setMouth(false);
            setRock(false);
            setDoubt(false);
          }}
          variant="contained"
        >
          Triste
        </Button>
        <Button
          style={{ margin: "5px", textTransform: "capitalize" }}
          onClick={() => {
            setDoubt(!doubt);
            setSmile(false);
            setMouth(false);
            setRock(false);
            setSad(false);
          }}
          variant="contained"
        >
          Méfiant
        </Button>

      </div>
    )
}

export default Buttons
