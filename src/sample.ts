// sample

// Multi Choice, Checkbox
// Page, Optional, Submit
// Rating Scale, Matrix Questions,
// Drop-Down, Open Ended, Message
// Matching, Click-Map, Slider,
// Upload File, Take Picture,
// Record Audio, Record Video
// Multi-Media Content

const SurveyFormat = {
    "name": "String",
    "id": "String",
    "version": "String",
    "time": "Long",
    "text": "String",
    "data": ["Question"]
}

const QuestionFormat = {
    "name": "String",
    "id": "String",
    "type": "String",
    "must": "Boolean",
    "page": "Int",
    "data": "Object"
}

const OptionFormat = {
    "id": "String",
    "text": "String",
    "image": "String", // Optional
    "audio": "String", // Optional
    "video": "String"  // Optional
}

const ReportFormat = {
    "id": "String", // survey id
    "version": "String",
    "time": "Long",
    "meta": "Object",
    "data": ["Answer"]
}

const AnswerFormat = {
    "id": "String", // question id
    "data": "Object"
}

function randomImageLink(){
    let size = 360;
    let shift = size / 6;
    let canvas = document.createElement("canvas");
    canvas.width  = size;
    canvas.height = size;
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000';
    for(let i = 0; i < size; i += shift){
        for(let j = 0; j < size; j += shift){
            if(Math.floor(i * j * Math.random()) % 2 == 0){
                ctx.fillRect(i, j, shift, shift);
            }
        }
    }
    return canvas.toDataURL();
}

function getTestSurvey(){
    let questions = [];
    // multi
    questions.push({
        "name": "Test Multi Choice Question",
        "id": "T-0-Q-0",
        "type": "multi",
        "text": "Q-0 Description",
        "must": false,
        "page": 1,
        "data": {
            "selection": [{
                "id": "0",
                "text": "Test Option Text"
            }, {
                "id": "1",
                "text": "Test Option Image",
                "image": "Test Option Image"
            }, {
                "id": "2",
                "text": "Test Option Audio",
                "audio": "Test Option Audio"
            }, {
                "id": "3",
                "text": "Test Option Video",
                "video": "Test Option Video"
            }]
        }
    });
    // checkbox
    questions.push({
        "name": "Test Checkbox Question",
        "id": "T-0-Q-1",
        "type": "checkbox",
        "text": "Q-1 Description",
        "must": false,
        "page": 1,
        "data": {
            "selection": [{
                "id": "0",
                "text": "Test Option Text"
            }, {
                "id": "1",
                "text": "Test Option Image",
                "image": "Test Option Image"
            }, {
                "id": "2",
                "text": "Test Option Audio",
                "audio": "Test Option Audio"
            }, {
                "id": "3",
                "text": "Test Option Video",
                "video": "Test Option Video"
            }]
        }
    });
    // rating
    questions.push({
        "name": "Test Rating Question",
        "id": "T-0-Q-2",
        "type": "rating",
        "text": "Q-2 Description",
        "must": false,
        "page": 2,
        "data": {
            "scale": 10,
            "left": "Bad",
            "right": "Good"
        }
    });
    // matrix
    questions.push({
        "name": "Test Matrix Question",
        "id": "T-0-Q-3",
        "type": "matrix",
        "text": "Q-3 Description",
        "must": true,
        "page": 2,
        "data": {
            "selection": [{
                "id": "0",
                "text": "Pretty Bad"
            }, {
                "id": "1",
                "text": "Bad"
            }, {
                "id": "2",
                "text": "Neither Good nor Bad"
            }, {
                "id": "3",
                "text": "Good"
            }, {
                "id": "4",
                "text": "Very Good"
            }],
            "item": [
                "Is this survey good?",
                "Are you happy?",
                "Am I cool?",
                "Why are you here?"
            ]
        }
    });
    // dropdown
    questions.push({
        "name": "Test Drop-Down Question",
        "id": "T-0-Q-4",
        "type": "dropdown",
        "text": "Q-4 Description",
        "must": false,
        "page": 3,
        "data": {
            "text": "Select your feedback!",
            "selection": [
                "Pretty Bad",
                "Bad",
                "Neither Good nor Bad",
                "Good",
                "Very Good"
            ]
        }
    });
    // open
    questions.push({
        "name": "Test Open Question",
        "id": "T-0-Q-5",
        "type": "open",
        "text": "Q-5 Description",
        "must": false,
        "page": 3,
        "data": {
            "text": "Write your feedback!"
        }
    });
    // message
    questions.push({
        "name": "Test Message",
        "id": "T-0-Q-6",
        "type": "message",
        "text": "Q-6 Description",
        "must": false,
        "page": 3,
        "data": {}
    });
    // match
    questions.push({
        "name": "Test Match Question",
        "id": "T-0-Q-7",
        "type": "match",
        "text": "Q-7 Description",
        "must": false,
        "page": 4,
        "data": {
            "selection": [{
                "id": "0",
                "text": "First"
            }, {
                "id": "1",
                "text": "Second"
            }, {
                "id": "2",
                "text": "Third"
            }],
            "item": [{
                "id": "0",
                "text": "First"
            }, {
                "id": "1",
                "text": "Second"
            }, {
                "id": "2",
                "text": "Third"
            }]
        }
    });
    // clickmap
    questions.push({
        "name": "Test Click-Map Question",
        "id": "T-0-Q-8",
        "type": "clickmap",
        "text": "Q-8 Description",
        "must": false,
        "page": 4,
        "data": {
            "image": randomImageLink()
        }
    });
    // slider
    questions.push({
        "name": "Test Slider Question",
        "id": "T-0-Q-9",
        "type": "slider",
        "text": "Q-9 Description",
        "must": true,
        "page": 4,
        "data": {
            "default": 40,
            "min": 0,
            "max": 80
        }
    });
    // upload
    questions.push({
        "name": "Test Upload Question",
        "id": "T-0-Q-10",
        "type": "upload",
        "text": "Q-10 Description",
        "must": false,
        "page": 5,
        "data": {
            "multiple": true
        }
    });
    // capture
    questions.push({
        "name": "Test Capture Question",
        "id": "T-0-Q-11",
        "type": "capture",
        "text": "Q-11 Description",
        "must": false,
        "page": 5,
        "data": {}
    });
    return {
        "name": "Test Survey",
        "id": "T-0",
        "version": "0",
        "time": (new Date()).getTime(),
        "text": "This is the very first test survey, and the description of it.<br/><br/>Test another line.",
        "data": questions
    }
}
