import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { useState } from "react";
import QUESTIONS from '../questions.js';

export default function Question({index,onSelectAnswer,onSkipAnswer})
{

    const [answer,setAnswer]=useState({selectedAnswer:'',
        isCorrect:null
    });

    function handleSelectAnswer(answer){
        setAnswer({ selectedAnswer:answer,
            isCorrect:null})

    setTimeout(()=>{
        setAnswer({ selectedAnswer:answer,
            isCorrect:QUESTIONS[index].answers[0]===answer})

            setTimeout(()=>{
                onSelectAnswer(answer);
            },2000);
    },1000);
 

    }

    let answerState='';

    if(answerState.selectedAnswer && answerState.isCorrect !== null)
        {
            answerState=answer.isCorrect ? 'correct' : 'wrong';
        }
        else if(answerState.selectedAnswer)
            {
                answerState='answered';
            }

    return (
        <div id="question">
        <QuestionTimer
        timeout={10000} onTimeout={onSkipAnswer}/>
        <h2>
            {QUESTIONS[index].text}
        </h2>
        <Answers
        answers={QUESTIONS[index].answers} selectedAnswer={answer.selectedAnswer} 
        answerState={answerState}
        onSelect={handleSelectAnswer}
        />

         </div>
    )
}