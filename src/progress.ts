// progress

function setProgress(stages, stageIndex){
    let progress = document.getElementById('progress');
    progress.innerHTML = "";
    progress.className = "w3-container w3-padding w3-card w3-margin";
    let title = document.createElement('h1');
    title.innerHTML = "Unofficial AWS ProServe T-Shirt Selection Platform";
    progress.appendChild(title);
    let pbarc = document.createElement('div');
    pbarc.style.overflow = "auto";
    pbarc.style.whiteSpace = "nowrap";
    progress.appendChild(pbarc);
    let pbar = document.createElement('div');
    pbarc.appendChild(pbar);
    for(let i = 0; i < stages.length; i ++){
        let stage = stages[i];
        if(i > 0){
            let bdash = document.createElement('b');
            bdash.innerHTML = "━━";
            pbar.appendChild(bdash);
        }
        let btmp = document.createElement('button');
        btmp.className = "w3-button w3-round-large w3-light-gray";
        if(i == stageIndex){
            btmp.className = btmp.className.replace("w3-light-gray", "w3-orange");
        }
        if(!stage["valid"]){
            btmp.className += " w3-disabled";
        }else{
            btmp.onclick = function(){
                setProgress(stages, i);
                setContent(stages, i);
            }
        }
        btmp.innerHTML = stage["brief"];
        pbar.appendChild(btmp);
    }
    progress.appendChild(document.createElement('p'));
}

function setContent(stages, stageIndex){
    let stage = stages[stageIndex];
    let content = document.getElementById('content');
    content.innerHTML = "";
    content.className = "w3-container w3-padding w3-card w3-margin";
    let title = document.createElement('h1');
    title.innerHTML = stage['name'];
    content.appendChild(title);
    content.appendChild(document.createElement('hr'));
    switch(stage["brief"]){
        // case "Announce":
        //     setAnnounce(content);
        //     break;
        // case "Submit":
        //     setSubmit(content);
        //     break;
        // case "Vote":
        //     setVote(content);
        //     break;
        // case "Result":
        //     setResult(content);
        //     break;
        default:
            console.log(content);
    }
    content.appendChild(document.createElement('p'));
}
