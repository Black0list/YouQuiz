const StartDiv = document.getElementsByClassName("start")[0];
const StartButton = StartDiv.getElementsByTagName("button")[0];

const Quiz = document.getElementsByClassName("container-sm")[0];
const Title = document.getElementById("h6");
const Options = document.getElementsByClassName("Options")[0];
const Buttons = document.getElementsByClassName("Buttons")[0];
const Result = document.getElementsByClassName("result")[0];
const score = document.getElementById("score");

const Main_Histo = document.getElementById("Main_History");


let Score = 0;
let Index = 0;
let count = 15;

let Questions = [  
    {  
        "question": "What SQL Stands for?",  
        "options": ["Structured Query Language", "Simple Query Language", "Standard Question Language", "Structured Quick Language"],  
        "answerIndex": 0,  
        "answerValue": false,  
        "answerSelected" : "skipped"  
    },  
    {  
        "question": "What API Stands for?",  
        "options": ["Application Programming Interface", "Advanced Programming Interface", "Application Process Interface", "Application Program Interaction"],  
        "answerIndex": 0,  
        "answerValue": false,  
        "answerSelected" : "skipped"  
    },  
    {  
        "question": "What HTTP Stands for?",  
        "options": ["Hypertext Transfer Protocol", "Hyper Transfer Text Protocol", "High Transfer Protocol", "Hypertext Transaction Protocol"],  
        "answerIndex": 0,  
        "answerValue": false,  
        "answerSelected" : "skipped"  
    },  
    {  
        "question": "What IP Stands for?",  
        "options": ["International Protocol", "Internal Protocol", "Interconnected Protocol", "Internet Protocol"],  
        "answerIndex": 3,  
        "answerValue": false,  
        "answerSelected" : "skipped"  
    },  
    {  
        "question": "What OS Stands for?",  
        "options": ["Office System", "Operational Software", "Operating System", "Open Source"],  
        "answerIndex": 2,  
        "answerValue": false,  
        "answerSelected" : "skipped"  
    },  
    {  
        "question": "What USB Stands for?",  
        "options": ["Uniform Serial Bus", "Universal Serial Bus", "Universal System Bus", "Unilateral Serial Bus"],  
        "answerIndex": 1,  
        "answerValue": false,  
        "answerSelected" : "skipped"  
    },  
    {  
        "question": "What RAM Stands for?",  
        "options": ["Read Available Memory", "Rapid Access Memory", "Random Access Memory", "Real-time Access Memory"],  
        "answerIndex": 2,  
        "answerValue": false,  
        "answerSelected" : "skipped"  
    },  
    {  
        "question": "What ROM Stands for?",  
        "options": ["Read-Only Memory", "Read-Only Module", "Random-Only Memory", "Rapidly Operating Memory"],  
        "answerIndex": 0,  
        "answerValue": false,  
        "answerSelected" : "skipped"  
    },  
    {  
        "question": "What SSL Stands for?",  
        "options": ["Simple Sockets Layer", "Secure System Layer", "Secure Sockets Layer", "Standard Security Layer"],  
        "answerIndex": 2,  
        "answerValue": false,  
        "answerSelected" : "skipped"  
    },  
    {  
        "question": "What IoT Stands for?",  
        "options": ["Interface of Thecnology", "Internet of Things", "Interconnected Objects", "Internal of Things"],  
        "answerIndex": 1,  
        "answerValue": false,  
        "answerSelected" : "skipped"  
    }  
]

function NextPage() {
    StartDiv.style.display = 'none'; 
    Result.style.display = 'none';
    Score = 0;
    Index = 0;

    // Questions.forEach((el, i) => {
    //     el.answerValue = false;
    //     el.answerSelected = "skipped"
    // })

    ShowQuiz();
}



function ShowQuiz(){



    Quiz.style.display = 'flex';
    Options.innerHTML = '';
    Buttons.innerHTML = '';
    Title.innerHTML = "Q"+(Index+1)+". "+Questions[Index].question;

    console.log(Questions[Index].options);
    console.log(Score);
 

    Questions[Index].answerValue = false;
    Questions[Index].answerSelected = "skipped"

    Questions[Index].options.forEach((element, i) => {
        

        const Option = document.createElement("div");
        Option.classList.add("form-check");
        Options.appendChild(Option);

        const InputElement = document.createElement("input");
        Option.appendChild(InputElement);

        
        const LabelElement = document.createElement("label");
        InputElement.type = "radio";
        InputElement.name  = "exampleRadios";
        InputElement.id = `exampleRadios${i}`;
        InputElement.value = `${i}`;
        InputElement.setAttribute("onclick", `Selected(${i})`)
        InputElement.classList.add("form-check-input");
        
        Option.appendChild(LabelElement);

        LabelElement.htmlFor = InputElement.id;
        LabelElement.innerHTML = element;
        LabelElement.classList.add("form-check-label");
    })
    

    const pre = document.createElement("button");
    const nex = document.createElement("button");

    pre.setAttribute("onclick", "PreviousQ()");
    nex.setAttribute("onclick", "NextQ()");

    if(Index === 0){
    
        pre.style.visibility = "hidden";

        nex.innerHTML = "Next";
        pre.innerHTML = "Previous";

        Buttons.appendChild(pre);
        Buttons.appendChild(nex);

        pre.classList.add("btn", "btn-primary");
        nex.classList.add("btn", "btn-primary");
        

    } else if(Index >= 1 && Index < Questions.length-1){
        

        nex.innerHTML = "Next";
        pre.innerHTML = "Previous";

        Buttons.appendChild(pre);
        Buttons.appendChild(nex);

        pre.classList.add("btn", "btn-primary");
        nex.classList.add("btn", "btn-primary");

    } else {
        nex.innerHTML = "Terminer";
        pre.innerHTML = "Previous";

        Buttons.appendChild(pre);
        Buttons.appendChild(nex);

        pre.classList.add("btn", "btn-primary");
        nex.classList.add("btn", "btn-primary");
    }

}

function NextQ(){
    if(Index < Questions.length - 1){
        ++Index;
        ShowQuiz();
    } else {
        Resultat();
    }
}

function PreviousQ(){
    if(Score < 0){
        Score = 0;
    }
    Score--;
    Index--;
    ShowQuiz();
}

function Selected(selectedOption){
    if(Questions[Index].answerIndex === selectedOption){
        if(!Questions[Index].answerValue){
            Score++;
        } 
        Questions[Index].answerValue = true;
    } else {
        if(Questions[Index].answerValue){
            Score--;
        } 
        Questions[Index].answerValue = false;
    }
    Questions[Index].answerSelected = Questions[Index].options[selectedOption];

}


function Resultat(){
        Quiz.style.display = "none";
        Result.style.display = "flex";
        score.innerHTML = `Score : ${Score}/${Questions.length}`

        Main_Histo.innerHTML = '';
       
        Questions.forEach((element, i) => {

        const HistoDiv = document.createElement("div");
        HistoDiv.classList.add("History");
        Main_Histo.appendChild(HistoDiv);

        const QDiv = document.createElement("div");
        QDiv.innerText = "Q"+(i+1)+". "+element.question;
        QDiv.style.width = "100%"
        HistoDiv.appendChild(QDiv);

        const ADiv = document.createElement("div");
        ADiv.innerText = `Answer : ${element.answerSelected}`;
        ADiv.classList.add(`respond`);
        HistoDiv.appendChild(ADiv)
        
        if(element.answerValue === true){
            ADiv.style.backgroundColor = "rgba(6, 181, 65, 0.66)"
        } else if(element.answerValue === false) {
            ADiv.style.backgroundColor = "rgba(255, 45, 45, 0.66)"
        }
    })
}


