
const words = {

    'Abstraction':
    'Simplified code or technology that’s easy to use without knowing how it works.',
    
    'Agile':
    'A process of building software in stages. Work is divided into short bursts called sprints. Separate teams may work on different parts of a project.',
    
    'AJAX':
    'A method for getting data from a web server that uses XML, JavaScript, and HTML.',
    
    'Algorithm':
    'A sequence of problem-solving steps. For example: Add a series of values together, and then divide by the number of values. These steps produce a mean or average.',
    
    'Angular':
    'A JavaScript front end framework for building websites. A collection of templates and pre-written code. ',
    
    'Apache':
    'Apache, or Apache HTTP Server, is an open-source and free web server software. Apache had a significant role in the initial growth of the internet and is also the “A” in LAMP Stack.',
    
    'API':
    'An application programming interface (API) allows interactions between multiple software programs so programmers have access to data and info from external software. The Google Maps API lets people use satellite photos and maps in their own programs. ',
    
    'Apprenticeship':
    'An agreement between an employer and an employee. The apprentice (employee) gets training and pay in exchange for work.',
    
    'Argument':
    'A number, text string, or other value required for a function to run its code. An argument is the x in f(x) = y.',
    
    'Arithmetic':
    'These operators are used with numbers to perform basic math, for example “+” for addition. Computers have to add and subtract, multiply and divide to do almost anything. ',
    
    'Array':
    'A single variable that contains a list of data. For example, myNumbers = [0,1,2,3]. Here, myNumbers is an array of numbers.',
    
    'ASCII':
    'American Standard Code for Information Interchange (ASCII) is a system for electronic communication. It has 128 numbers that stand for letters and other symbols. ASCII is the same all over the world.',
    
    'Assignment':
    'An operator that assigns a value to a variable. For example, “=” in Python assigns a value on the right to the variable on the left.',
    
    "Autonomous": "Self-guiding and able to work independently without input from a person. Many drones and some cars are autonomous.",
    
    "Backend": "The server side of the internet that the user can’t see. The back end stores, retrieves, and modifies data, it’s essentially the brains of a website.",
    "Backbone": "A JavaScript library used mostly for one-page web apps to give structure and handle user input and interactivity.",
    "Binary": "A system of two possible states, zero and one. Computers operate in binary, meaning they store data and perform calculations using only zeros and ones.",

    "Bit": "A single 0 or 1. It’s the smallest unit of information in computing and digital communications.",


    "Blockly": "A block programming language created by Code.org. It’s used to teach kids how to code.",
    "Boolean": "The “true or false” logic that powers computers. The boolean data type has one of two possible values: it’s either true or false.",
    "Bootstrap": "An open-source framework. A group of templates for building the front end of a website. A large set of HTML files, CSS stylesheets, and JavaScript.",
    "Bug": "Broken code that causes a program to malfunction. Bugs often crash a program or make an error message appear.",
    "Build": "To build a program is to make it ready for users. Coders may use special tools to create “builds”, or finished applications.  First, coding, testing, and debugging must be completed.",
    "Byte": "A byte is eight bits. For example, 0000 0001.",

    "Call": "A snippet of code that makes a function begin.",

    "Camelcase": "A form of capitalization used for naming variables. The first letter is always lowercase, and the first letter of every word after that is uppercase. For example, “thisVariable” is in camelcase.",
    "Char": "An abbreviation of the word “character.” It refers to a single letter, number, or symbol.",
    "Class": "The class attribute specifies one or more class names for an HTML element. It’s mostly used to point to a class in a CSS page.",

    "Click": "To press the button on a computer mouse.",
    "Cloud": "A remote data storage location, such as Dropbox. The cloud is a broad term that refers to general internet storage or services.",
    "Code": "The written content of a computer program. Code tells the computer what to do, where to store information, and what to show the user.",

    "Coding": "The process of writing a computer program. Coding is often the majority of what software engineers do.",

    "Command": "An order the computer must carry out. Copy, Paste, and Print are examples of commands.",
    "Commandline": "A computer program that works with text-only input from a user.",
    "Interface": "A text-based way to interact with a computer. There are no buttons, dropdowns, or clickable elements.",
    "Compilation": "The procedure that translates code into a format the computer can use. Some programming languages are called compiled languages. They have to be compiled before they can be used.",
    "Compiler": "A program that changes text-based code into the code a computer understands. The result is an application, often a .exe file.",

    "Conditional": "A statement that helps a computer decide what to do next. A condition statement has an If/Then format. For example, If a = 1, then add a to b.",
    "Constants": "A number, text string, or symbol that never changes value while a program is running. Variables can increase or decrease in value. But a constant stays the same.",
    "Crowdsourcing": "The act of recruiting big groups of people to work on a project. People may work for free or for pay. But everyone contributes to the final goal.",
    "CSS": "The code that controls the appearance of a website. This includes things like font styles, colors, and margins. CSS stands for Cascading Style Sheets.",
    "Cybersecurity": "A field of computing that deals with the safety of anything stored on a computer. The primary goal is to prevent hackers from stealing data or money." ,
    
    "Data": "Any information that can be stored or used in a computer program. Names, addresses, and phone numbers are data.",

    "Datastructures": "The formats used to store and organize data in a computer program. Data structures make information as easy to access as possible.",
    "Datatypes": "The kind of information that a variable or constant can hold. Examples include strings, integers, and booleans.",
    "Database": "A digital vault that stores information. Databases look like tables in a spreadsheet. A website stores usernames and passwords in a database.",
    "Debugging": "The process of looking for and repairing coding errors. Debugging is an important part of software development.",
    "Declaration": "A single word or symbol used to describe a function or variable. It defines the type of variable or function so the compiler or interpreter knows what to do with it.",
    "Decompose": "To divide a complex challenge into smaller chunks. The goal is to make it easier to solve.",
    "Define": "To create a function and the code that goes inside it. After defining a function, the programmer can call it when needed.",
    "Deployment": "The process of launching an application or releasing it to users.",

    "Django": "A Python framework for the web. Django makes Python website development easier. It’s a collection of templates and libraries.",
    "DNS": "A computer system that turns a written domain name into numbers. These numbers are called an IP (Internet Protocol) address. Computers need IP addresses to find websites.",
    
    "Drag": "To press and hold the button on a computer mouse, then move the mouse before releasing.",
    "Drop": "To let up on the mouse button after clicking and dragging.",
    "DRY": "DRY stands for Don’t Repeat Yourself. This principle states, “Every piece of knowledge must have a single, unambiguous, authoritative representation within a system.”",
    "Cable": "A type of broadband (fast) internet service. It uses phone or coaxial cables.",
    
    
    "Event": "An event is something that triggers a response in a program. For example, a mouse click or a button press.",
    "Eventhandler": "Code that responds to an event such as a mouse click or button press.",
    "Exception": "An error that may be caused by a user or missing piece of data.",
    "Express": "The backend framework for Node.js. Express is useful for modules and web apps. Developers can build APIs with Express.",
    "Expression": "An arithmetic statement such as 1+2 or x-y.",
    
    "FAIL": "An acronym for First Attempt In Learning. Failure is a regular part of the learning process.",
    "Flask": "Flask is a backend web framework written in Python. It’s an API of Python that lets us build up web applications quickly and easily without special tools or libraries.",
    
    "Framework": "A set of “templates” that programmers use to build programs quickly. Frameworks may contain pre-written code, markup, and APIs. Web frameworks exist for the front end and back end.",
    "Frontend": "The part of a computer program that a user sees and interacts with. The front end is also called the user interface.",
    "Fullstack": "A developer who works on the back end and front end of a website.",
    "Function": "A chunk of code that takes input, manipulates it, and produces some kind of output. Programmers create a function just once, but they can use it over and over.",
    
    'Git':
    'A version control system that tracks changes to code. Git is open-source, meaning you can access it for free.',
    
    'Github':
    'An internet storage hub for code that works with Git. ',
    
    
    'HAML':
    'HAML (HTML Abstraction Markup Language) is a templating system that cleans and simplifies your HTML. It’s designed to avoid writing inline code in a web document.',
    
    'Hardcode':
    'Permanent code. Code that a programmer can’t change easily or at all. ',
    
    'HTML':
    'HTML (HyperText Markup Language) is a markup language used to build basic websites. HTML determines what shows up on the page. ',
    
    'HTTP':
    'The method a web browser uses to ask for information from a server. HTTP stands for HyperText Transfer Protocol. ',
    
    "IDE": "A program that developers use to write code. IDEs usually know a language’s keywords and can provide help. They can also run programs.",
    
    "Inheritance": "The practice of basing a new piece of code on existing code. Programmers use inheritance to create an enhanced version of the original code.",
    "Input": "The information that goes into a computer. User input is one type, which includes text, clicks, and button presses.",
    "IntelliJ": "An integrated development environment (IDE) created for writing and running code. To start writing code in Java, you can use IntelliJ.",
    "Internet": "The internet is made of many computers and servers that are connected to each other. The web exists on the internet, but the internet is much larger than the world wide web.",
    "IOS": "Swift is an Apple programming language. It combines elements from the C and Objective C languages.",
    "IPAddress": "A number associated with a website or a device on the internet. Printers and computers have IP addresses.",
    "Iteration": "One pass of a loop. Each time a block of code is executed counts as one iteration of the for or while loop it belongs to.",
    "Java": "A programming language developed by Oracle. Java is popular for web and mobile applications.",
    "JavaScript": "A popular coding language for websites and web apps. JavaScript runs on the client side. That means it runs in the browser instead of the computer where the website “lives”.",

    "jQuery": "A JavaScript library that makes it easy to change elements on a webpage.",
    "JSON": "A common data storage format used in many web apps. JSON files keep data organized.",
    
    'Keywords':
    'Predefined words in a programming language. These words have a special meaning. In an integrated development environment (IDE), keywords appear in special colors.',
    
    'LAMP':
    'LAMP stack uses Linux operating system, the Apache HTTP Server, MySQL, and the PHP programming language. LAMP stack is a popular open-source web platform used by large web companies like Tesla and Lyft.',
    
    'Linter':
    'A linter, or lint tool, is a basic static code analyzer that checks your program for potential stylistic and programming errors. You can often find linters in your code editor and they are available for various programming languages today.',
    
    'Linux':
    'Like Windows, Linux is an operating system. But it’s open-source, so it’s free to use. Linux is popular with developers and runs on most web servers.',
    
    'Loop':
    'A block of code that runs over and over. A loop is an important part of any video game or animation. Loops are present in almost all programs. ',
    
    "Markup": "A simple language that determines what appears on a computer screen. HTML and XML are markup languages.",
    "MEAN": "A complete framework for web development. MongoDB is the M. Express.js is the E. Angular.js is the A. Node.js is the N.",
    "MERN": "A complete framework for web development. MongoDB is the M. Express.js is the E. React.js is the R. Node.js is the N.",
    "Microbit": "A tiny computer used in programming courses for kids. The Micro:bit works with lots of sensors and electronic accessories.",
    "MongoDB": "A database for web applications. Mongo uses a JSON-like structure instead of rows and columns.",
    "MVC": "Used for many kinds of development, MVC is a three-part design pattern. It stands for Model View Controller. Each piece of MVC handles a different part of a program.",
    "MySQL": "The most common language used to put info into and take it out of databases. MySQL is often used with another language, like PHP." ,
    
    'NeuralNetwork':
    'A computer program modeled after the human brain. Neural networks learn over time, just like people.',
    'Node':
    'Node.js is a programming tool that lets you run JavaScript code outside of a web browser. ',
    
    'Null':
    'Empty or without value. Variables and columns in a database can sometimes be null.',
    
    "OOPS": "Programming with classes and objects. A class is simply a prototype that defines what its objects can do. Every object in the class has the class’s properties.",
    "ORDBMS": "Two database models in one. It’s part relational database and part object oriented. It has objects and classes as well as tables with rows and columns.",
    "Objects": "A member of a class. It might help to think about a real-world analogy. For example, every person is an object that belongs to the class called 'humans'.",
    "Online": "Connected to the internet. Someone can be online with a computer, a mobile phone, or another electronic device.",
    "Opensource": "Software that is free for anyone to use. The code for open-source software is available to developers who want to work on it. They can make improvements and add features.",
    "Operand": "The variable or value that will be used in an operation. For example, x and y are operands in the x+y.",
    "Operator": "An arithmetic symbol such as a plus sign or a minus sign. Or a multiplication sign, division sign, greater than or less than sign.",
    "OS": "The software that makes a computer work. It’s responsible for organizing files. An operating system also determines what software can run on the machine.",
    "Output": "The content that comes out of a computer. Output may be text or numbers. It could even be sound or video.",
    "Package": "An organization tool for classes in Java. A package keeps large collections of files neatly ordered.",
    "Packets": "A block of information that moves from one computer to another.",

    "Parameter": "The input of a function. A parameter gets replaced by an argument when the function is called.",
    "Patternmatching": "The process of looking for identical characters or data in a dataset.",
    "Persistence": "When a piece of data, information, or web page remains accessible. Persistent data doesn’t get deleted when you close the program.",
    "PHP": "A scripting language frequently used for websites. PHP uses tags like HTML, but a PHP website can do much more and the content can change with user input.",
    "Pixel": "The basic unit of digital displays. A pixel is a little square that can be one of many colors. Every image on a screen is made up of hundreds or even thousands of pixels.",
    "Pointer": "Like variables, pointers store information. But a pointer contains a memory address instead of data. It “points” to the address somewhere in computer memory.",
    "Postgresql": "An open-source database. To store or retrieve something, a programmer can write code in SQL.",
    "Program": "Written code that runs on a computer. Most programs consist of user interfaces and logic. Adobe Illustrator is a computer program. So is Microsoft Outlook.",
    "Programming": "The process of writing code that will become a computer program.",
    "Language": "The keywords and special rules people use to write computer programs. Every language has some of its own rules and keywords, but they also have many things in common.",
    
    "Python": "An open-source programming language. Python is popular because it’s somewhat easy to learn. Many big applications were made in Python including YouTube and DropBox." , 
    
    "React": "A JavaScript library built by Facebook. Its main purpose is to help with user interface (UI) development.",
    "Reactnative": "A type of React that lets developers use the same code for different platforms.",
    "RDBMS": "A program for making and updating databases that use tables.",
    "Repeat": "To perform an action more than once.",
    "REST": "A set of rules that makes it possible for computers to communicate with each other. REST (Representational State Transfer) makes the world wide web possible.",
    "Ruby": "Ruby is a programming language designed to be readable. It’s object oriented and useful for all kinds of applications. AirBnB and GitHub were built on Ruby.",
    
    "Run": "To start a computer program.",
    "Runtime": "Runtime is the stretch of time when a computer program is running.",
    "SASS": "SASS (Syntactically Awesome Style Sheets) is a scripting language that is interpreted into Cascading Style Sheets (CSS). It helps you keep your CSS organized and lets you create style sheets faster.",
    "Scratch": "The block programming language developed by MIT. Scratch is a great first language for young coders. To build a program, all you need to do is click, drag, and drop blocks into place.",
    
    "Scripts": "Small programs that do limited steps. Scripts can be part of bigger programs.",
    "Searchengine": "Google, Bing, and Yahoo are search engines. They find websites and information based on keywords provided by the user.",
    "Server": "A computer that hosts websites and data. Servers store the information that other people can access on the internet.",
    
    "Sourcecode": "The code written by programmers that becomes software. First, the source code has to get translated into machine code by a compiler.",
    
    
    'Sprint':
    'A period of several days during which a software team works on specific tasks. For each sprint, every member of the team has a certain amount of work to get done.',
    
    'Sprites':
    'A character or a moving object in a computer game. Sprites respond to button presses, clicks, or other user input.',
    
    'SQL':
    'The most popular programming language for adding and retrieving information from a relational database.',
    
    'Stack':
    'Several programs used to build apps for the web or mobile devices. Example stacks are LAMP, WAMP, and MEAN.',
    
    'Statement':
    'An instruction to a computer written in code. Statements can include text, numbers, and symbols.',
    
     
    'Syntax':
    'The structure of a language. The rules that state in what order words must appear. Each programming language has its own syntax.',
    
    
    'Tensorflow':
    'A library built by Google for creating neural networks. Tensor flow is open-source. ',
    'Terminal':
    "Mac's text-based user interface. In the terminal, users can open files and folders, move things around, and do many other things",
    'Token':
    'One word, symbol, or operator in a computer program. A plus sign is a token. In most languages, the word “function” is too. ',
    
    'Training':
    'In machine learning, programs need training. To train a program, you give it as much data as possible. Usually, the more data the better. ',
    
    'URL':
    'The text you type into your browser to get to a website. URL stands for Universal Resource Locator.',
    
    'UXDesign':
    'The design of interactions between a user and a product. The process of making something fun and easy to use. UX isn’t just for software, but that’s where it started.' ,
    
    'UIDesign':
    'The process of creating the visual parts of a computer program. This includes the buttons, colors, and icons.'
    ,
    'Username':
    'A nickname that you type in when you want to enter a certain website or application. ',
    
    'Variable':
    'A container that holds a value, such as a piece of text or a number. The value can change, which is why it’s stored in a variable.',
    
       
    "Versioncontrol":
    'Software that lets coders save several versions of their code. This prevents previous work from getting deleted or lost. It also helps programmers keep track of changes.',
    
    'Website':
    'Several web pages that are linked together and stored on the same server. ',
    
    
    'Whiteboarding':
    'The process of brainstorming collaboratively in person or virtually. Ideas on code, pseudocode, or charts are organized on a physical whiteboard or virtual tool representing a whiteboard.',
    
    'WiFi':
    'A way to send and retrieve data without wires. Wi-Fi uses radio waves to transfer information.',
    
    
    'Xcode':
    'An IDE from Apple for developers who want to build software for Apple devices. ',
    
    'XML':'Extensible Markup Language (XML) is a markup language and file format for storing, transmitting, and reconstructing arbitrary data.'
    
}

export default words;
