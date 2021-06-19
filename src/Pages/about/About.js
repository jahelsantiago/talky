import React from 'react'
import Modal from '@material-ui/core/Modal';
import "./about.css"
import { Close } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import bertImg from "../../Images/bert.png"

const About = ({open, setOpen}) => {
    const handleClose = () => {
        setOpen(false);
      };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div className="about-container">                
                <div className="header-about">
                    <div className="header-text">
                        <h1>
                            THE MAGIC BEHIND THE HOOD   
                        </h1>                                                    
                    </div>
                    <IconButton style = {{color: "white"}} onClick = {handleClose}>
                        <Close/>
                    </IconButton>
                </div>
                <div className="content-about">
                    <p>
                        This application was created using <b>BERT</b> (Bidirectional Encoder Representations for transformers), a transformer encoder architecture that has proven to be successful in <b>NLP</b> tasks. For this application it was used <a href = "https://openreview.net/forum?id=SJxjVaNKwB" target = "_blank">MobileBert</a> , a modification of the original one which is a lighter and faster version.                        
                    </p>
                    <p>
                     The model takes a reference text, and a question and returns a segment of the reference text that most likely answers the given question.
                    </p>
                </div>

                <div className="" style = {{display : "flex"}}>
                    <img src={bertImg} alt="" className = "bert-img"/>
                    <p>
                        This web application was created using <b>Tensorflow.js</b> to run the BERT model in the browser, the front-end was developed with <b>React.js</b> and <b>Material UI</b>.
                    </p>
                </div>
            </div>

        </Modal>
        
    )
}

export default About
