qArray = [
    ["What is the capital of France?", "Paris", "London", "Berlin", "Rome"],
    ["How many states are in the United States?", "50", "49", "51", "48"],
    ["What is the capital of the United States?", "Washington, D.C.", "New York City", "Los Angeles", "Chicago"],
    ["How many continents are there?", "7", "6", "8", "9"],
    ["When did World War II end?", "1945", "1939", "1944", "1943"],
    ["How many planets are in our solar system?", "8", "9", "7", "10"],
    ["What is the largest country in the world?", "Russia", "China", "Canada", "United States"],
    ["What is the smallest country in the world?", "Vatican City", "Monaco", "San Marino", "Nauru"],
    ["What is the largest ocean in the world?", "Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    ["Where is the Great Barrier Reef located?", "Australia", "New Zealand", "Fiji", "Indonesia"],
    ["What is the longest river in the world?", "Nile River", "Amazon River", "Yangtze River", "Mississippi River"],
    ["What is the tallest mountain in the world?", "Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    ["What is the largest desert in the world?", "Sahara Desert", "Gobi Desert", "Kalahari Desert", "Arabian Desert"],
    ["What is the largest country in Africa?", "Algeria", "Nigeria", "Egypt", "South Africa"],
    ["What is the largest country in South America?", "Brazil", "Argentina", "Colombia", "Peru"],
    ["What is the largest country in Asia?", "China", "India", "Russia", "Indonesia"],
    ["What is the largest country in Europe?", "Russia", "France", "Germany", "United Kingdom"],
    ["How many countries are there in the world?", "195", "196", "197", "198"],
    ["What is the largest city in the world?", "Tokyo", "Delhi", "Shanghai", "Sao Paulo"],
    ["How many bones are there in the human body?", "206", "207", "208", "209"],
    ["What is the largest organ in the human body?", "Skin", "Heart", "Lungs", "Liver"],
    ["What is the smallest bone in the human body?", "Stapes", "Malleus", "Incus", "Tympanic Membrane"],
    ["How many colors are there in a rainbow?", "7", "8", "9", "10"],
    ["How many days are there in a leap year?", "366", "365", "364", "367"],
    ["How many days are there in a non-leap year?", "365", "366", "364", "367"],
]


function gen1() {
    let q = qArray[Math.floor(Math.random() * qArray.length)];
    let q1num = document.getElementById("q1-num");
    let q1 = document.getElementById("q1");
    let list1 = document.getElementById("list1")
    let q1o1 = document.getElementById("q1o1");
    let q1o2 = document.getElementById("q1o2");
    let q1o3 = document.getElementById("q1o3");
    let q1o4 = document.getElementById("q1o4");
    let timer1 = document.getElementById("timer1")
    timer1.innerHTML = "";
    q1num.innerHTML = qArray.indexOf(q) + 1;
    q1.innerHTML = q[0];
    q1o1.innerHTML = q[1];
    q1o2.innerHTML = q[2];
    q1o3.innerHTML = q[3];
    q1o4.innerHTML = q[4];
    list1.style.listStyleType = "upper-alpha";
    let sec = 29;
    let t1 = setInterval(function () {
        if (q1.innerHTML == q[0]) {
            timer1.innerHTML = sec;
            sec--;
            if (sec == -1) {
                sec = 15;
            }
        } else {
            clearInterval(t1);
        }
    }, 1000);


    setTimeout(() => {
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
        }

    }, 47000);
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
    let timer2 = document.getElementById("timer2")
    timer2.innerHTML = "";
    q2num.innerHTML = qArray.indexOf(q) + 1;
    q2.innerHTML = q[0];
    q2o1.innerHTML = q[1];
    q2o2.innerHTML = q[2];
    q2o3.innerHTML = q[3];
    q2o4.innerHTML = q[4];
    list2.style.listStyleType = "upper-alpha";

    let sec = 29;
    let t2 = setInterval(function () {
        if (q2.innerHTML == q[0]) {
            timer2.innerHTML = sec;
            sec--;
            if (sec == -1) {
                sec = 15;
            }
        } else {
            clearInterval(t2);
        }
    }, 1000);

    setTimeout(() => {
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
            clearInterval(t2);
        }

    }, 47000);
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
    let timer3 = document.getElementById("timer3")
    timer3.innerHTML = "";
    q3num.innerHTML = qArray.indexOf(q) + 1;
    q3.innerHTML = q[0];
    q3o1.innerHTML = q[1];
    q3o2.innerHTML = q[2];
    q3o3.innerHTML = q[3];
    q3o4.innerHTML = q[4];
    list3.style.listStyleType = "upper-alpha";
    let sec = 29;
    let t3 = setInterval(function () {
        if (q3.innerHTML == q[0]) {
            timer3.innerHTML = sec;
            sec--;
            if (sec == -1) {
                sec = 15;
            }
        } else {
            clearInterval(t3);
        }
    }, 1000);
    setTimeout(() => {
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
            clearInterval(t3);
        }

    }, 47000);
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
    let timer4 = document.getElementById("timer4")
    timer4.innerHTML = "";
    q4num.innerHTML = qArray.indexOf(q) + 1;
    q4.innerHTML = q[0];
    q4o1.innerHTML = q[1];
    q4o2.innerHTML = q[2];
    q4o3.innerHTML = q[3];
    q4o4.innerHTML = q[4];
    list4.style.listStyleType = "upper-alpha";
    let sec = 29;
    let t4 = setInterval(function () {
        if (q4.innerHTML == q[0]) {
            timer4.innerHTML = sec;
            sec--;
            if (sec == -1) {
                sec = 15;
            }
        } else {
            clearInterval(t4);
        }
    }, 1000);
    setTimeout(() => {
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
            clearInterval(t4);
        }

    }, 47000);
}
