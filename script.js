const qArray = [
    ["hello I am a question", "A", "B", "C", "D"],
    ["hello I am a question too", "A", "B", "C", "D"]
];

function gen1() {
    let q = qArray[Math.floor(Math.random() * qArray.length)];
    let q1num = document.getElementById("q1-num");
    let q1 = document.getElementById("q1");
    let list1 = document.getElementById("list1")
    let q1o1 = document.getElementById("q1o1");
    let q1o2 = document.getElementById("q1o2");
    let q1o3 = document.getElementById("q1o3");
    let q1o4 = document.getElementById("q1o4");
    let timer1 = document.getElementById("timer1");
    timer1.innerHTML = "";
    q1num.innerHTML = qArray.indexOf(q) + 1 + ")";
    q1.innerHTML = q[0];
    q1o1.innerHTML = q[1];
    q1o2.innerHTML = q[2];
    q1o3.innerHTML = q[3];
    q1o4.innerHTML = q[4];
    list1.style.listStyleType = "upper-alpha";

    setTimeout(() => {
        timer1.style.border = "4px solid rgb(32, 255, 0)";
    }, 1050);   
    let sec = 39;
    let t1 = setInterval(function () {
        if (q1.innerHTML == q[0]) {
            if (sec == -1) {
                sec = 20;
            }
            if (sec<=9)
            {
                timer1.style.border = "4px solid rgb(232, 32, 232)";
            }
            else
            {
                timer1.style.border = "4px solid rgb(32, 255, 0)";
            }
            timer1.innerHTML = sec;
            sec--;
        } 
        else {
            clearInterval(t1);
        }
    }, 1050);


    let s1 = setTimeout(() => {
        
        if (q1.innerHTML == q[0]) {
            q1num.innerHTML = "";
            q.innerHTML = "";
            q1.innerHTML = "";
            q1o1.innerHTML = "";
            q1o2.innerHTML = "";
            q1o3.innerHTML = "";
            q1o4.innerHTML = "";
            timer1.innerHTML = "";
            list1.style.listStyleType = "none";
            timer1.style.border = "none";
            
        }
        else {
            clearTimeout(s1);
        }
    }, 65100);
}

function gen2() {
    let q = qArray[Math.floor(Math.random() * qArray.length)];
    let q2num = document.getElementById("q2-num");
    let q2 = document.getElementById("q2");
    let list2 = document.getElementById("list2")
    let q2o1 = document.getElementById("q2o1");
    let q2o2 = document.getElementById("q2o2");
    let q2o3 = document.getElementById("q2o3");
    let q2o4 = document.getElementById("q2o4");
    let timer2 = document.getElementById("timer2");
    timer2.innerHTML = "";
    q2num.innerHTML = qArray.indexOf(q) + 1 + ")";
    q2.innerHTML = q[0];
    q2o1.innerHTML = q[1];
    q2o2.innerHTML = q[2];
    q2o3.innerHTML = q[3];
    q2o4.innerHTML = q[4];
    list2.style.listStyleType = "upper-alpha";

    setTimeout(() => {
        timer2.style.border = "4px solid rgb(32, 255, 0)";
    }, 1050);   
    let sec = 39;
    let t2 = setInterval(function () {
        if (q2.innerHTML == q[0]) {
            if (sec == -1) {
                sec = 20;
            }
            if (sec<=9){
                timer2.style.border = "4px solid rgb(255, 32, 32)";
            }
            else{
                timer2.style.border = "4px solid rgb(32, 255, 0)";
            }
            timer2.innerHTML = sec;
            sec--;
        } 
        else {
            clearInterval(t2);
        }
    }, 1050);


    let s2 = setTimeout(() => {
        
        if (q2.innerHTML == q[0]) {
            q2num.innerHTML = "";
            q.innerHTML = "";
            q2.innerHTML = "";
            q2o1.innerHTML = "";
            q2o2.innerHTML = "";
            q2o3.innerHTML = "";
            q2o4.innerHTML = "";
            timer2.innerHTML = "";
            list2.style.listStyleType = "none";
            timer2.style.border = "none";
            
        }
        else {
            clearTimeout(s1);
        }
    }, 65100);
}

function gen3() {
    let q = qArray[Math.floor(Math.random() * qArray.length)];
    let q3num = document.getElementById("q3-num");
    let q3 = document.getElementById("q3");
    let list3 = document.getElementById("list3")
    let q3o1 = document.getElementById("q3o1");
    let q3o2 = document.getElementById("q3o2");
    let q3o3 = document.getElementById("q3o3");
    let q3o4 = document.getElementById("q3o4");
    let timer3 = document.getElementById("timer3");
    timer3.innerHTML = "";
    q3num.innerHTML = qArray.indexOf(q) + 1 + ")";
    q3.innerHTML = q[0];
    q3o1.innerHTML = q[1];
    q3o2.innerHTML = q[2];
    q3o3.innerHTML = q[3];
    q3o4.innerHTML = q[4];
    list3.style.listStyleType = "upper-alpha";

    setTimeout(() => {
        timer3.style.border = "4px solid rgb(32, 255, 0)";
    }, 1050);   
    let sec = 39;
    let t3 = setInterval(function () {
        if (q3.innerHTML == q[0]) {
            if (sec == -1) {
                sec = 20;
            }
            if (sec<=9){
                timer3.style.border = "4px solid rgb(255, 32, 32)";
            }
            else{
                timer3.style.border = "4px solid rgb(32, 255, 0)";
            }
            timer3.innerHTML = sec;
            sec--;
        } 
        else {
            clearInterval(t3);
        }
    }, 1050);


    let s3 = setTimeout(() => {
        
        if (q3.innerHTML == q[0]) {
            q3num.innerHTML = "";
            q.innerHTML = "";
            q3.innerHTML = "";
            q3o1.innerHTML = "";
            q3o2.innerHTML = "";
            q3o3.innerHTML = "";
            q3o4.innerHTML = "";
            timer3.innerHTML = "";
            list3.style.listStyleType = "none";
            timer3.style.border = "none";
            
        }
        else {
            clearTimeout(s3);
        }
    }, 65100);
}

function gen4() {
    let q = qArray[Math.floor(Math.random() * qArray.length)];
    let q4num = document.getElementById("q4-num");
    let q4 = document.getElementById("q4");
    let list4 = document.getElementById("list4")
    let q4o1 = document.getElementById("q4o1");
    let q4o2 = document.getElementById("q4o2");
    let q4o3 = document.getElementById("q4o3");
    let q4o4 = document.getElementById("q4o4");
    let timer4 = document.getElementById("timer4");
    timer4.innerHTML = "";
    q4num.innerHTML = qArray.indexOf(q) + 1 + ")";
    q4.innerHTML = q[0];
    q4o1.innerHTML = q[1];
    q4o2.innerHTML = q[2];
    q4o3.innerHTML = q[3];
    q4o4.innerHTML = q[4];
    list4.style.listStyleType = "upper-alpha";

    setTimeout(() => {
        timer4.style.border = "4px solid rgb(32, 255, 0)";
    }, 1050);   
    let sec = 39;
    let t4 = setInterval(function () {
        if (q4.innerHTML == q[0]) {
            if (sec == -1) {
                sec = 20;
            }
            if (sec<=9){
                timer4.style.border = "4px solid rgb(255, 32, 32)";
            }
            else{
                timer4.style.border = "4px solid rgb(32, 255, 0)";
            }
            timer4.innerHTML = sec;
            sec--;
        } 
        else {
            clearInterval(t4);
        }
    }, 1050);


    let s4 = setTimeout(() => {
        
        if (q4.innerHTML == q[0]) {
            q4num.innerHTML = "";
            q.innerHTML = "";
            q4.innerHTML = "";
            q4o1.innerHTML = "";
            q4o2.innerHTML = "";
            q4o3.innerHTML = "";
            q4o4.innerHTML = "";
            timer4.innerHTML = "";
            list4.style.listStyleType = "none";
            timer4.style.border = "none";
            
        }
        else {
            clearTimeout(s4);
        }
    }, 65100);
}