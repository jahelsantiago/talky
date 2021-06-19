import { Button } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import "./Main.css"
import NavBar from './NavBar'
import TextField from '@material-ui/core/TextField';
import { useEffect } from 'react'
import * as qna from '@tensorflow-models/qna';
import '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';
import { makeStyles } from '@material-ui/core/styles';
import { useRef } from 'react'
import slogan from "../../Images/slogan.png"
import SnackBarr from './SnackBarr'
import About from '../about/About'


const useStyles = makeStyles((theme)=>({
    contextText :{        
        width : "95%",
        marginBottom : "10px",                
        overflow : "hiden"

    },
    questionText :{
        width : "95%",
        overflow : "hiden"
        
    },
    button:{
        backgroundColor : "#f0d7bd",
        color: "#714a1c",
        margin : "10px",
        width : "200px",
        "&:hover" : {
            backgroundColor : "#f0d7bd",
        }
        
    }
}))


const Main = () => {    
    const classes = useStyles()

    const firstRender = useRef(true)
    const [contextText, setcontextText] = useState("")
    const [missingContextText, setMissingContextText] = useState(false)
    
    const [questionText, setQuestionText] = useState("")
    const [missingQuestionText, setMissingQuestionText] = useState(false)

    const [answerMessage, setAnswerMetmessage] = useState("")
    const [openAnswerMessage, setOpenAnswerMessage] = useState(false)

    const modelPromise = useRef(null)

    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        if(firstRender){
            modelPromise.current = qna.load()
        }
        firstRender.current = false
    }, [])
    
    
    
    const handleAsk = async () =>{
        let hasError = false
        if(contextText.length === 0){            
            setMissingContextText(true)
            hasError = true
        }
        if(questionText.length === 0){
            setMissingQuestionText(true)
            hasError = true
        }

        if(!hasError){
            const model = await modelPromise.current
            const answers = await model.findAnswers(questionText, contextText)
            console.log(answers)
            if(answers.length !== 0){
                setAnswerMetmessage(answers[0].text)
                setOpenAnswerMessage(true)
            }

        }

    }

    useEffect(() => {
        setMissingContextText(false)
        setMissingQuestionText(false)
    }, [contextText])

    useEffect(() => {        
        setMissingQuestionText(false)
    }, [questionText])


    return (
        <div className = "container">
        <NavBar setOpenModal = {setOpenModal}/>
        <div className = "Main">
            <div className="left-col">                
                <form action="" className = "form">                        
                    <TextField
                        id="context"
                        placeholder = "Paste a text here and I will analize it for you..."
                        multiline
                        rows = {18}                            
                        variant="outlined"
                        value = {contextText} 
                        onChange = {(e)=>{setcontextText(e.target.value)}}
                        error = {missingContextText}
                        helperText = {missingContextText && "Please paste a text to answer the question"}
                        className = {classes.contextText}
                    />
                    
                    <TextField
                        id="question"
                        placeholder = "Ask a question about the text"
                        multiline
                        rows={1}                            
                        variant="outlined"
                        value = {questionText} 
                        onChange = {(e)=>{setQuestionText(e.target.value)}}
                        error = {missingQuestionText}
                        helperText = {missingQuestionText && "The question is missing"}
                        className = {classes.questionText}
                    />                        
                </form>                
                <Button variant="contained" color="secondary" onClick ={handleAsk} className = {classes.button}>
                    ASK
                </Button>
            </div>
            <div className="right-col">
                <img src={slogan} alt="" className = "slogan-img"/>
            </div>
        </div>
        <About open = {openModal} setOpen = {setOpenModal}/>
        <SnackBarr
            open = {openAnswerMessage}
            setOpen = {setOpenAnswerMessage}
            message = {answerMessage}
        />     
           
        </div>
    )
}

export default Main
