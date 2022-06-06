
let stages = [{
    "id": "stage-1-0",
    "name": "Description",
    "brief": "Description",
    "valid": true
}, {
    "id": "stage-1-1",
    "name": "Document",
    "brief": "Document",
    "valid": true
}];

let survey = {
    "name": "Survey Example",
    "id": "Designed-Survey-ID-00001",
    "version": "0",
    "time": (new Date()).getTime(),
    "text": "Change the Answer to see Real-Time Survey Update!",
    "data": [{
        "name": "Multi Choice Question Example",
        "id": "T-0-Q-1",
        "type": "multi",
        "text": "How do you find this website?",
        "must": false,
        "page": 1,
        "data": {
            "selection": [{
                "id": "0",
                "text": "I have no idea."
            }, {
                "id": "1",
                "text": "I browsed throw Github."
            }, {
                "id": "2",
                "text": "Others"
            }]
        }
    }, {
        "name": "Open Test Question Example",
        "id": "T-0-Q-2",
        "type": "open",
        "text": "Any feedback?",
        "must": false,
        "page": 1,
        "data": {
            "text": "Write your feedback here!"
        }
    }]
};

function setDescription(content){
    let report = getReport4Survey(survey);
    // layout
    let tmp1 = document.createElement('div');
    tmp1.className = "w3-row";
    let tmp2 = document.createElement('div');
    tmp2.className = "w3-half";
    tmp2.id = "survey";
    tmp1.appendChild(tmp2);
    let tmp3 = document.createElement('div');
    tmp3.className = "w3-half w3-padding";
    tmp3.style.height = "100%";
    let tmp4 = document.createElement('div');
    tmp4.innerHTML = "Real-Time Survey Update Demonstration!";
    tmp3.appendChild(tmp4);
    let tmp5 = document.createElement('textarea');
    tmp5.className = "w3-margin w3-padding";
    tmp5.style.height = "100%";
    tmp5.style.width = "100%";
    tmp5.style.fontFamily = "Courier New";
    tmp5.innerHTML = JSON.stringify(report, null, 4);
    tmp3.appendChild(tmp5);
    tmp1.appendChild(tmp3);
    content.appendChild(tmp1);
    // draw
    drawSurvey(survey, report);
    showPage(survey, CURRENTPAGE);
    // change context
    tmp2.onchange = function(){
        tmp5.innerHTML = JSON.stringify(report, null, 4);
    }
}

function setDocument(content){
    let tmp1 = document.createElement('div');
    loadFile("README.md", (mdstr) => {
        tmp1.innerHTML = window.markdownit().render(mdstr);
    });
    let tmp2 = document.createElement('h2');
    tmp2.innerHTML = "Links";
    let tmp3 = document.createElement('a');
    tmp3.innerHTML = " - Github Link";
    tmp3.href = "https://github.com/TakoAI/TakoQ";
    let tmp4 = document.createElement('a');
    tmp4.innerHTML = " - Website Link";
    tmp4.href = "https://takoai.github.io/TakoQ";
    content.appendChild(tmp1);
    content.appendChild(document.createElement("p"));
    content.appendChild(tmp2);
    content.appendChild(document.createElement("p"));
    content.appendChild(tmp3);
    content.appendChild(document.createElement("p"));
    content.appendChild(tmp4);
}

let functions = [setDescription, setDocument];

setProgress(stages, 0, "TakoQ", functions);
setContent(stages, 0, functions);
