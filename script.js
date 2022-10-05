const qArray = [
    ["The ratio of 20 hours to one day is equivalent to 20 days to the length of January?", "True", "False"],
    ["EAT- 5120, BEAT-25120. What is TREAT?", "35120", "205120", "185120", "20185120"],
    ["Insert the missing number. 11 12 14 ? 26 42", "20", "18", "22", "16"],
    ["Insert the word that completes the first word TOI(……) and starts the second in (......)TER", "SET", "BET", "WET", "LET"],
    ["Find two words, one from each group, that are the closest in meaning:\nGroup A: talkative, job, ecstatic\nGroup B: angry, wind, loquacious", "Talkative and Wind", "Job and Angry", "Talkative and Loquacious", "Ecstatic and Angry"],
    ["Which of the following can be arranged into a 5-letter English word?", "H R G S T", "R I L S A", " T O O M N", "W Q R G S"],
    ["Insert the missing letter: R F P R G P R _ P", "J", "K", "S", "H"],
    ["The mirror image of a clock at 2:45 p.m. will show the following time", "7:35", "9:15", "4:45", "None of these"],
    ["How many meters will I be away from my home if I travel 5 metres towards north, take a right and travel 4 metres and travel 5 metres towards south?", "5", "4", "10", "14"],
    ["The sum of squares of all numbers from 1 to 50 is an odd number.", "True", "False", "", ""],
    ["Why is a firewall used in a computer?", "Monitoring", "Data transmission", "Authentication", "Security"],
    ["'.MOV' extension refers usually to what kind of file?", " Image file", "Animation/movie file", "Audio file", "MS Office document"],
    ["Select the odd option: ", "int", "char", "float", "array"],
    ["Select the odd option:", "Bing", "Yahoo", "Chrome", "DuckDuckGo"],
    ["The term FTP stands for?", "File Transfer Program", "File Transmission Protocol", "File Transfer Protocol", "File Transfer Protection"],
    ["URL stands for?", "Universal Resource Locator", "Uniform Resource Locator", "Universal Response Location", "Universal Response Link"],
    ["Find the odd one out from the series-\n396, 462, 572, 427, 671, 264", "396", "427", "671", "264"],
    ["What does HTML stand for?", "Hyperactive Text Markup Language", "Hyper Text Machine Language", "Hyper Text Mark-up Language", "None of these"],
    ["Find the synonym for FAKE from the following options-", "Original", "Imitation", "Trustworthy", "Loyal"],
    ["Find out the next two terms-\n132 131 132 129 132 127 132", "125 132", "131 132", "125 130", "129 132"],
    ["If 1=3, 2=3, 3=5, 4=4, 5=4, then, 6=?", "6", "3", "4", "5"],
    ["The correct order of mathematical operators in mathematics is-", "Addition, Subtraction, Multiplication, Division", "Division, Multiplication, Addition, Subtraction", "Multiplication, Addition, Division, Subtraction", "Division, Multiplication, Subtraction, Addition"],
    ["Compact discs, (according to the original CD specifications) hold how many minutes of music?", "74 mins", "56 mins", "60 mins", "90 mins"],
    ["What does a compiler do?", "Translates computer code from machine level to byte code.", "Translates code written in a high-level language to a set of machine-language instructions", "A compiler does nothing", "Translates code from low level to high level programming questions."],
    ["What is a lint?", "Compiler", "Interactive debugger", "Analyzing tool", "C interpreter"],
    ["In the C language, the constant is defined _______.", "Before main", "After main", "Anywhere, but starting on a new line", "None of these"],
    ["Which of the following will run without errors?", "round(45.8)", " round(6352.898,2,5)", "round()", "round(7463.123,2,1)"],
    ["Why is a firewall used in a computer?", "Monitoring", "Data transmission", "Authentication", "Security"],
    ["'.MOV' extension refers usually to what kind of file?", "Image file", "Animation/movie file", "Audio file", "MS Office document"],
    ["Which is a type of Electrically-Erasable Programmable Read-Only Memory?", "Flash", "Flange", "Fury", "FRAM"],
    ["Who is largely responsible for breaking the German Enigma codes, created a test that provided a foundation for artificial intelligence?", "Alan Turing", "Jeff Bezos", "George Boole", "Charles Babbage"],
    ["DB computer abbreviation usually means ? ", "Database", "Double Byte", "Data Block", "Driver Boot"],
    ["What do we call a network whose elements may be separated by some distance? It usually involves two or more small networks and dedicated high-speed telephone lines. ", "URL (Universal Resource Locator)", "LAN (Local Area Network)", "WAN (Wide Area Network)", "World Wide Web"],
    ["Arrange the languages from oldest to newest: \lPython, 2.JavaScript, 3.C++, 4.PHP", "2, 1, 3, 4", "2, 3, 4, 1", "3, 1, 4, 2", "3, 4, 2, 1"],
    ["Select the odd option:", "Int", "Char", "Float", "Array"],
    ["Select the odd option:", "Bing", "Yahoo", "Chrome", "DuckDuckGo"],
    ["What is part of a database that holds only one type of information?", "Report", "Field", "Record", "File"],
    ["Who co-founded Hotmail in 1996 and then sold the company to Microsoft?", "Shawn Fanning", "Ada Byron Lovelace", "Sabeer Bhatia", "Ray Tomlinson"],
    ["'.BAT' extension refers usually to what kind of file? ", "Compressed Archive File", "System File", "Audio File", "Backup File"],
    ["Select the odd option:", "JPG", "WAV", "PNG", "WEBP"],
    ["Which desktop environment is not used in any Linux distribution?", "Gnome", "KDE", "Unity", "None Of The Above"],
    ["Those files cannot be changed after being created are called:", "Immutable File", "Mutex File", "Mutable File", "None Of The Above"],
    ["The length of an IPv6 address is?", "32 Bits", "64 Bits", "128 Bits", "256 Bits"],
    ["Who is known as the father of Indian Supercomputing?", "Ragunath Mashelkar", "Vijay Bhatkar", "Jayant Narlikar", "Nandan Nilekani"],
    ["What is the extension type of the excel 2007 files?", ".xls", ".xlsx", ".xsl", "None Of The Above"],
    ["Where was the World Wide Web invented?", "United States", "Switzerland", "Germany", "United Kingdom"],
    ["Which company has launched an initiative called ‘Summer of Code’ initiative for college students? ", "Tata Consultancy Services ", "Infosys", "Wipro", "Google"],
    ["What does BIOS stand for:", "Board Integrated Output System", "Basic Input Output System", "Board Incrusion Offense System", "Nothing, BIOS is not an acronym"],
    ["Which file extension is an image file? ", "MPG", "JPEG", "M4A", "MOV"],
    ["What technology is used to make telephone calls over the Internet possible?", "Bluetooth", "Ethernet", "NFC", "VoIP"],
    ["Which of the following is an important step towards the paperless concept?", "Doxing", "Digitizing", "Debugging", "Downloading"],
    ["A network designed to allow communication within an organization is called", "The World Wide Web", "Yahoo", "An Intranet", "The Internet"],
    ["Who is the CEO of Microsoft? ", "Satya Nadella", "Bill Gates", "Paul Allen", "Tim Ferrace"],
    ["What is the full form of pdf?", "Perfect Document Format", "Portable Delivery Format ", "Portable Document Format", "Perfect Delivery Format"],
    ["Making a compressed digital archive might produce what type of file format?", "JPG", "JPEG", "ZIP", "EXE"],
    [".gif is an extension of which file?", "Video File", "Image File", "Audio File", "Text File"],
    ["Which company bought the popular video teleconferencing software ‘Skype’?", "Microsoft", "Google", "Zoom", "Apple"],
    ["The main page of a web site is known as?", "Title page", "Home page", "Welcome page", "Head page"],
    ["IC chips for computer are usually made of which material?", "Copper", "Iron", "Silicon", "Zinc"],
    ["How many codes does ASCII has?", "256", "128", "64", "32"],
    ["What protects systems from hackers?", "Blockade", "Password", "Defender", "Firewall"],
    ["What is the full form of Wi-Fi network?", "Wireless Fibre", "Wireless Fidelity", "Wireless Find", "Wireless Field"],
    ["Who is known as the father of computer?", "Charles Babbage", "Bill Gates", "Edward Roberts", "Charles Darwin"],
    ["URL stands for?", "Universal Relocator", "Uniform Relative Locator", "Universal Resource Locator", "Uniform Resource Locator"],
    ["A computer on internet is uniquely identified by?", "Link Address", "IP Address", "Host Device", "MAC Address"],
    ["Which of the following is an exit controlled loop?", "While Loop", "For Loop", "Do-While Loop", "None Of The Above"],
    ["What is the size of the int data type (in bytes) in C?", "4", "8", "2", "1"],
    ["If p is an integer pointer with a value 1000, then what will the value of p + 5 be?", "1020", "1005", "1004", "1010"],
    ["In which of the following languages is function overloading not possible?", "C", "C++", "Java", "Python"],
    ["Arrays in java are", "Object References", "Objects", "Primitive Data Types", "None"],
    ["Algorithms must be all of the following except:", "Logical", "Ambiguous", "Concise", "Precise"],
    ["Which of the following executes programming codes line by line, rather than the whole program:", "Compiler", "Interpreter", "Executor", "Translator"],
    ["PHP files have a default file extension of?", ".php", ".net", ".pnet", ".pp"],
    ["What does PHP stand for:", "Performing Hypertext Preprocessor", "Hypertext Preprocessor", "Pre Hypertext Processor", "Pre Hyper Processor"],
    ["Colours are defined in HTML using?", "RGB Values", "HEX Values", "RGBA values", "All of the above"],
    ["What method does an inkjet printer use to print a page?", "One dot at a time to form a character", "Spray-painting a character", "Striking an inked ribbon", "Shooting ink onto the paper"],
    ["A chain sells for $1.50 per foot. How many feet of chain can you buy for $18?", "12 feet", "15 feet", "16 feet", "24 feet"],
    ["For which of the following disciplines is Nobel Prize awarded?", "Physics and Chemistry", "Physiology or Medicine", "Literature, Peace and Economics", "All Of The Above"],
    ["Which number should be there next in this series? 25, 24, 22, 19, 15", "14", "5", "30", "10"],
    ["Nia, twelve years old, is three times as old as her sister. How old will Nia be when she is twice as old as her sister?", "15", "18", "16", "20"],
    ["Which one of the four letters is least like the other three?", "N", "F", "E", "Z"],
    ["LIGHT BULB is to FILAMENT as WHEEL is to:", "Automobile", "Road", "Spoke", "Car"],
    ["Two people can make two bicycles in 2 hours. How many people are required to make 12 bicycles in 6 hours?", "6", "4", "2", "1"],
    ["Which number should come next in this series? 10, 17, 26, 37, ?", "46", "52", "50", "56"],
    ["If 10 people can do a piece of work in 5 days, working 2 hours a day, how long will 2 people take to do the same work, working 5 hours a day?", "8", "5", "10", "12"],
    ["At the arcade Amy had 6 tickets she saved from the last time she went. This time she played a game 7 times and earned 5 tickets each time she played. How many tickets does she have now?", "18", "47", "37", "41"],
    ["7435 - 453 = ?", "6298", "6982", "7000", "6892"],
    ["A girl is 18 years old and her brother is a third her age. When the girl is 36, what will be the age of her brother?", "12 years", "18 years", "24 years", "20 years"],
    ["None of the gardeners are tennis players \lAll writers are gardeners. ", "Some gardeners are tennis players. ", "Writers are not tennis players.", "Writers are tennis players.", "Some writers are not gardeners."],
    ["Do three of the following numbers add up to 12? 2, 8, 3, 4, 6, 9", "Yes", "No", "-", "-"],
    ["Do the words fruitful and prolific have opposite meanings, similar meanings or no relation?", "Opposite", "Similar", "No Relation", "None Of The Above"],
    ["Two women start at the same point. They walk in opposite directions for 3 meters, then turn right and walk another 4 meters. How far apart are they?", "7 metres", "10 metres", "12 metres", "15 metres"],
    ["What does IQ, the numerical measure of intelligence given by the performance in an intelligence test, stand for?", "Intelligence quota", "Irrelevant questions", "Intelligence quotient", "Intelligence questions"],
    ["If Thursday is in three days, what day was yesterday?", "Monday", "Saturday", "Sunday", "Tuesday"],
    ["A package of gift cards has a length of 8 inches, a width of 4 inches and a volume of 64 inches cubed. What is the height of the box?", "6", "8", "2", "4"],
    ["Which number represents the smallest amount?", "12/41", "1/11", "17/132", "2/9"],
    ["What is the mathematical average of the number of inch in a foot, seconds in a minutes and months in a year?", "18", "24", "28", "32"],
    ["Do the words refrain and attain have opposite meanings, similar meanings or no relation?", "Opposite", "Similar", "No relation", "-"],
    ["What is the 18th letter of the English alphabet?", "P", "Q", "R", "S"],
    ["Three painters can paint three walls in three minutes. How many painters are needed to paint 27 walls in nine minutes? ", "3", "6", "9", "12"]
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
                timer1.style.border = "4px solid rgb(255, 32, 32)";
            }
            else
            {
                timer1.style.border = "4px solid rgb(32, 255, 0)";
            }
            timer1.innerHTML = sec;
            sec--;
        } 
        else {
            console.log("Interval cleared: ");
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
            console.log("Interval cleared: ");
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
            console.log("Interval cleared: ");
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
            console.log("Interval cleared: ");
            clearTimeout(s4);
        }
    }, 65100);
}