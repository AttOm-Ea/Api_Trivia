
    function getQuestion( ){
        let questionQuantity = document.getElementById('inputSelect1').value;
        let categoryQ = document.getElementById('inputSelect2').value;
        let difficultyQ = document.getElementById('inputSelect3').value;
        let typeQ = document.getElementById('inputSelect4').value;

        fetch(`https://opentdb.com/api.php?amount=${questionQuantity}&category=${categoryQ}&difficulty=${difficultyQ}&type=${typeQ}`)
        .then(response => response.json())
        .then(data => pintCards(data.results))        
    }   
    
    /* fetch(`https://opentdb.com/api.php?amount=10`)
        .then(response => response.json())
        .then(data => answers(data.results))
    */ 
    
    function pintCards(questions){
        let container = document.getElementsByClassName('content-card')[0];
            clear();
        let id = 0;
        questions.forEach(question => {
            
            let card = cards(question, id);
            container.innerHTML += card;
            id++;            
        });
        let elemento = document.getElementsByClassName("contentBtn")[0];
        if (questions.length == 0){
            let cardEm = empty();
            container.innerHTML += cardEm;
            elemento.classList.remove('visible');
        } else {
            elemento.classList.add('visible');
        }
    }

    function clear(){
        let container = document.getElementsByClassName('content-card')[0];
        container.innerHTML = " ";
    }
    function empty(){
        let emAlert = `<div class="emergent"> Select another filter! </div>`
        return emAlert;
    }

    function cards(q, id){
        let card = `<div class="card text-white bg-info">
                        <div class="card-header ch"> ${q.category} </div>
                        <div class="card-body cb">
                            <h5 class="cd-title"> ${q.question} </h5>
                            <div class="input-group">
                                <select class="custom-select" name="question-${id}" id="inputSelect-${id}" required> 
                                    ${answers(q.correct_answer, q.incorrect_answers)}
                                </select>
                            </div>
                        </div>
                    </div>`
        return card;
    }
    
    function answers(corret, incorret){
        let newArray = [ ];
        newArray.push(corret);
        incorret.forEach((incorretAns) => {
            newArray.push(incorretAns);
        })
        const ansanswerDefault = ` <option> </option> `;
        let answerR = '';
        let answerQ = '';
        const question = "question";
        const quession = "quession";

        if(newArray.length == 2){
            let random = Math.floor(Math.random() * 2);
                if(random == 0){
                    answerR = `<option value=${question}> ${newArray[random]} </option>` 
                } else{
                    answerR = `<option value=${quession}> ${newArray[random]} </option>` 
                }
            if(random == 0){
                answerQ = `<option value=${quession}> ${newArray[1]} </option> `;
            } else{
                answerQ = `<option value=${question}> ${newArray[0]} </option> `;
            }
        } else {
            let random = Math.floor(Math.random() * 4);
            if(random == 0){
                answerR = `<option value=${question}> ${newArray[random]} </option>` 
            } else{
                answerR = `<option value=${quession}> ${newArray[random]} </option>` 
            }
            if(random == 0){
                answerQ = `<option value=${quession}> ${newArray[3]} </option>
                <option value=${quession}> ${newArray[2]} </option>
                <option value=${quession}> ${newArray[1]} </option> `;
            } else if(random == 1){
                answerQ = `<option value=${question}> ${newArray[0]} </option>
                <option value=${quession}> ${newArray[3]} </option>
                <option value=${quession}> ${newArray[2]} </option> `;
            } else if(random == 2){
                answerQ = `<option value=${quession}> ${newArray[1]} </option>
                <option value=${question}> ${newArray[0]} </option>
                <option value=${quession}> ${newArray[3]} </option> `;
            } else {
                answerQ = `<option value=${quession}> ${newArray[2]} </option>
                <option value=${quession}> ${newArray[1]} </option>
                <option value=${question}> ${newArray[0]} </option> `;
            }
        }
        let answer = ansanswerDefault + answerR + answerQ;
        return answer;
    }
    function evaluation(){
        let ModalBody = document.getElementsByClassName('modal-body')[0];
        ModalBody.innerHTML = " ";
        let questionQuantity = document.getElementById('inputSelect1').value;
        let evaluation = 0;
        let color = "";
        let feedback = "";
        for (let i = 0; i < questionQuantity; i++) {
            let question = document.getElementById('inputSelect-' + i).value;
            if(question == "question"){
                feedback += `<p> The question ${i+1}  <samp class="green">is corret!</samp></p>`;
                evaluation ++;
            } else {
                feedback += `<p> The question ${i+1} <samp class="red">is wrong!</samp></p>`
            }
        }
        let qualification = (evaluation / questionQuantity) * 10;
        if (qualification > 5){
            color = "green";
        } else {
            color = "red";
        }
        feedback += `<hr>`;
        feedback += `<p> Your qualification is <samp class="${color}"> ${qualification} </samp></p>`;
        ModalBody.innerHTML = feedback;

        $('#exampleModal').modal()
    }

    
            
// Llamada windows
    window.getQuestion = getQuestion;
    window.answers = answers;
    window.empty = empty;
    window.clear = clear;
    window.evaluation = evaluation;