import {useState} from "react"
function App()
{
    const question=[
      {
        questionText:"Which is the react frontend framework used to create web apps?",
        answerOption:[
           {answerText:"Node js",isCorrect:false},
           {answerText:"React js ",isCorrect:true},
           {answerText:"Express js",isCorrect:false},
           {answerText:"Mongo DB",isCorrect:false},
        ]
      },
      {
        questionText:"which is the web server among this?",
        answerOption:[
          {answerText:"Node js",isCorrect:true},
          {answerText:"React js",isCorrect:false},
          {answerText:"Express js",isCorrect:false},
          {answerText:"Mongo DB",isCorrect:false},
        ]
      },
      {
        questionText:" which is the javascript written as?",
        answerOption:[
          {answerText:"Node js",isCorrect:true},
          {answerText:"React js",isCorrect:false},
          {answerText:"Express js",isCorrect:false},
          {answerText:"Mongo DB",isCorrect:false},
        ]
      },
      {
        questionText:"which is the web server of the multithread?",
        answerOption:[
          {answerText:"Node js",isCorrect:true},
          {answerText:"React js",isCorrect:false},
          {answerText:"Express js",isCorrect:false},
          {answerText:"Mongo DB",isCorrect:false},
        ]
      },
      {
        questionText:"which is the document-oriented among this?",
        answerOption:[
          {answerText:"Node js",isCorrect:false},
          {answerText:"React js",isCorrect:false},
          {answerText:"Express js",isCorrect:false},
          {answerText:"Mongo DB",isCorrect:true},
        ]
      },
      {
        questionText:"which is the open-source among this?",
        answerOption:[
          {answerText:"Node js",isCorrect:true},
          {answerText:"React js",isCorrect:false},
          {answerText:"Express js",isCorrect:false},
          {answerText:"Mongo DB",isCorrect:false},
        ]
      },
      {
        questionText:"which is the purpose of frame work designed among this?",
        answerOption:[
          {answerText:"Node js",isCorrect:false},
          {answerText:"React js",isCorrect:false},
          {answerText:"Express js",isCorrect:true},
          {answerText:"Mongo DB",isCorrect:false},
        ]
      },
      {
        questionText:"which is the object document mapper(ODM) among this?",
        answerOption:[
          {answerText:"Node js",isCorrect:false},
          {answerText:"React js",isCorrect:false},
          {answerText:"Express js",isCorrect:false},
          {answerText:"Mongo DB",isCorrect:true},
        ]
      },
      {
        questionText:"which is the read eval print loop among this?",
        answerOption:[
          {answerText:"Node js",isCorrect:true},
          {answerText:"React js",isCorrect:false},
          {answerText:"Express js",isCorrect:false},
          {answerText:"Mongo DB",isCorrect:false},
        ]
      },
      {
        questionText:"which is the most structured utilized among this?",
        answerOption:[
          {answerText:"Node js",isCorrect:true},
          {answerText:"React js",isCorrect:false},
          {answerText:"Express js",isCorrect:false},
          {answerText:"Mongo DB",isCorrect:false},
        ]
      },
      {
        questionText:"which is the virtual DOM among this?",
        answerOption:[
          {answerText:"Node js",isCorrect:true},
          {answerText:"React js",isCorrect:true},
          {answerText:"Express js",isCorrect:false},
          {answerText:"Mongo DB",isCorrect:false},
        ]
      }
    ]
    const [currentQuestion,setCurrentQuestion]=useState(0)
    const [showScore,setShowScore]=useState(false)
    const [score,setScore]=useState(0)
    const Handle=(isCorrect)=>{
      if(isCorrect)
      {
        setScore(score+1)
      }
      const nextQuestion=currentQuestion+1
      if(nextQuestion<question.length)
      {
        setCurrentQuestion(nextQuestion)
      }
      else
      {
        setShowScore(true)
      }
    }
    return(
      <div className="quiz">
        {showScore ?(
          <div className="score-section">
              YOU HAVE SCORED {score} OUT OF {question.length}!!!
          </div>
        ):(
          <>
           <div className="question-section">
             <span>QUESTION {currentQuestion+1}</span> /{question.length}
           </div>
           <div className="quetion-text">
               {question[currentQuestion].questionText}
           </div>
           <div className="answer-section">
                {question[currentQuestion].answerOption.map((answerOption) =>(
                   <button onClick={() => Handle(answerOption.isCorrect)}>{answerOption.answerText}</button>
                ))}
           </div>
          </>
        )

        }
      </div>
    )
}
export default App;
