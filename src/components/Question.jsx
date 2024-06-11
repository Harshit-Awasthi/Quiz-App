import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

export default function Question({questiontext,answers,onSelectAnswer,selectedAnswer,answerState,onSkipAnswer})
{

    return (
        <div id="question">
        <QuestionTimer
        timeout={10000} onTimeout={onSkipAnswer}/>
        <h2>
            {questiontext}
        </h2>
        <Answers
        answers={answers} selectedAnswer={selectedAnswer} 
        answerState={answerState}
        onSelect={onSelectAnswer}
        />

         </div>
    )
}