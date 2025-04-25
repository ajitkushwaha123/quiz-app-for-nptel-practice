export const data = [
  {
    id: "quiz1",
    title: "Assignment-Week 1",
    questions: [
      {
        id: 1,
        question: "IoT stands for ____________.",
        options: [
          "Internet of Tasks",
          "Internet of Tuples",
          "Internet of Things",
          "None of these",
        ],
        correctAnswer: "Internet of Things",
      },
      {
        id: 2,
        question:
          "Which of the following technologies have unified and has resulted in the evolution of IoT?",
        options: [
          "High-power embedded systems",
          "Super Computing",
          "Engine Technology",
          "None of these",
        ],
        correctAnswer: "None of these",
      },
      {
        id: 3,
        question: "Which of the following are the enables of IoT?",
        options: ["RFID", "Nanotechnology", "Sensors", "All of these"],
        correctAnswer: "All of these",
      },
      {
        id: 4,
        question: "Which of the following is NOT a function of an IoT LAN?",
        options: [
          "Long range communication, global",
          "World wide connections",
          "Both (a) and (b)",
          "Neither (a) Nor (b)",
        ],
        correctAnswer: "Both (a) and (b)",
      },
      {
        id: 5,
        question:
          "State whether the following statement is True or False. Statement: The integration of existing devices, smart devices, and constrained nodes in a singular framework is one of the reasons for the address crunch in IoT.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        id: 6,
        question:
          'State True or False. Statement: "In Multi-homing, a node/network is connected to a single network for improved reliability.',
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        id: 7,
        question:
          "Which of the following is/are the approach/approaches for multi-homing?",
        options: [
          "Proxy-based approach",
          "Gateway-based approach",
          "Both (a) and (b)",
          "None of these",
        ],
        correctAnswer: "Both (a) and (b)",
      },
      {
        id: 8,
        question: "IPv6 uses notation for its representation.",
        options: ["Hexadecimal", "Binary", "Decimal", "None of these"],
        correctAnswer: "Hexadecimal",
      },
      {
        id: 9,
        question:
          "State True or False. The parameters sensed by a sensor may be sent to the cloud for further processing.",
        options: ["False", "True"],
        correctAnswer: "True",
      },
      {
        id: 10,
        question:
          "The IPv6 notation uses number of bits to represent an address.",
        options: ["64", "128", "Both (a) and (b)", "Neither (a) nor (b)"],
        correctAnswer: "128",
      },
      {
        id: 11,
        question: "A sensor is -",
        options: [
          "Only sensitive to the measured property",
          "Insensitive to any other property that what the sensor is made to sense",
          "Both (a) and (b)",
          "None of these",
        ],
        correctAnswer: "Both (a) and (b)",
      },
      {
        id: 12,
        question: "We classify sensors based on -",
        options: ["Output", "Data type", "Both (a) and (b)", "None of these"],
        correctAnswer: "None of these",
      },
      {
        id: 13,
        question: "Which of the following is correct statement",
        options: [
          "Controlling AC loads using low DC signals",
          "Relays are electromechanical",
          "Relays are actuators",
          "All of these",
        ],
        correctAnswer: "All of these",
      },
      {
        id: 14,
        question: "Based on the output, sensors are classified as",
        options: [
          "Analog",
          "Digital",
          "Both (a) and (b)",
          "Neither (a) nor (b)",
        ],
        correctAnswer: "Both (a) and (b)",
      },
      {
        id: 15,
        question: "Soft actuators are -",
        options: [
          "Polymer-based",
          "Mechanical",
          "Electromechanical",
          "None of these",
        ],
        correctAnswer: "Polymer-based",
      },
    ],
  },

  {
    id: "quiz2",
    title: "Assignment-Week 2",
    questions: [
      {
        id: 1,
        question: "Based on functionality, MQTT is a ____________ protocol.",
        options: ["Transport", "Data", "Semantic", "None of these"],
        correctAnswer: "Data",
      },
      {
        id: 2,
        question: "MQTT is designed for -",
        options: [
          "Remote connections",
          "Limited bandwidth",
          "Both (a) and (b)",
          "Neither (a) nor (b)",
        ],
        correctAnswer: "Both (a) and (b)",
      },
      {
        id: 3,
        question:
          "State True or False. MQTT protocol follows paradigm for exchanging messages.",
        options: [
          "Client-Server",
          "Publish-Subscribe",
          "Both (a) and (b)",
          "None of these",
        ],
        correctAnswer: "Both (a) and (b)",
      },
      {
        id: 4,
        question:
          'State True or False. Statement: "In MQTT, the Subscribers are Lightweight Sensors."',
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        id: 5,
        question: "Which of the following is MQTT component?",
        options: ["Middleman", "Mules", "Both (a) and (b)", "None of these"],
        correctAnswer: "None of these",
      },
      {
        id: 6,
        question: "State True or False. A topic in MQTT can only be numbers.",
        options: ["False", "True"],
        correctAnswer: "False",
      },
      {
        id: 7,
        question:
          "State True or False. There are only two methods specified by the MQTT protocol.",
        options: ["False", "True"],
        correctAnswer: "False",
      },
      {
        id: 8,
        question: "The Publish/Subscribe architecture in MQTT is driven.",
        options: ["Event", "Pulse", "Sound", "None of these"],
        correctAnswer: "Event",
      },
      {
        id: 9,
        question:
          "State True or False. The topic is the routing information for the broker.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        id: 10,
        question: "COAP is ____________ and ____________",
        options: [
          "Based on HTTP",
          "Is designed for M2M applications",
          "None of these",
          "Both (a) and (b)",
        ],
        correctAnswer: "Both (a) and (b)",
      },
      {
        id: 11,
        question:
          "In CoAP, client-server interaction is asynchronous over a datagram transport protocol such as",
        options: ["UDP", "TCP", "IP", "XMP"],
        correctAnswer: "UDP",
      },
      {
        id: 12,
        question: "What is the full form of AMOQP?",
        options: [
          "Advanced Message Querying Protocol",
          "Advanced Message Quality Protocol",
          "Advanced Message Queuing Protocol",
          "None of these",
        ],
        correctAnswer: "Advanced Message Queuing Protocol",
      },
      {
        id: 13,
        question: "AMQP has ____________ number of frame types.",
        options: ["6", "3", "5", "9"],
        correctAnswer: "9",
      },
      {
        id: 14,
        question:
          'State True or False. Statement: "The OSI model has 7 layers."',
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        id: 15,
        question:
          'The "Destination Address" in the IPv4 packet represents which of the following?',
        options: [
          "The source node address of the packet",
          "The intermediate hop in the network",
          "Both (a) and (b)",
          "Neither (a) nor (b)",
        ],
        correctAnswer: "Neither (a) nor (b)",
      },
    ],
  },

  {
    id: "quiz3",
    title: "Assignment-Week 3",
    questions: [
      {
        id: "q1",
        questions:
          "WirelessHART is the latest release of Highway Addressable Remote Transducer protocol.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "WirelessHART is an advanced version of HART protocol.",
      },
      {
        id: "q2",
        questions: "Wired HART has a network layer.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "Wired HART does not include a network layer.",
      },
      {
        id: "q3",
        questions:
          "WirelessHART physical layer is derived from 802.15.2 protocol.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "It is derived from 802.15.4 protocol.",
      },
      {
        id: "q4",
        questions: "WirelessHART operates only in __________ GHz ISM band.",
        options: ["3.7", "4.8", "4.9", "2.4"],
        correctAnswer: "2.4",
        explanation: "It operates in 2.4 GHz ISM band.",
      },
      {
        id: "q5",
        questions:
          "HART standard was developed from __________ smart field devices.",
        options: ["amplified", "diminished", "isolated", "networked"],
        correctAnswer: "networked",
        explanation: "HART was designed for networked devices.",
      },
      {
        id: "q6",
        questions:
          "Main difference between wired and unwired versions is in the physical, data link, and ______ layers.",
        options: ["Data link", "Network", "Transport", "None of these"],
        correctAnswer: "Network",
        explanation: "They differ in physical, data link and network layers.",
      },
      {
        id: "q7",
        questions:
          "Collision free and deterministic communication is achieved in HART’s data link layer.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "Its MAC layer is deterministic.",
      },
      {
        id: "q8",
        questions: "Channel hopping is incorporated in which layer of HART?",
        options: [
          "Data link layer",
          "Physical layer",
          "Application layer",
          "Transport layer",
        ],
        correctAnswer: "Data link layer",
        explanation: "Channel hopping is handled in data link.",
      },
      {
        id: "q9",
        questions:
          "The HART application layer is responsible for extracting commands from a message and generating responses.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "Application layer handles message processing.",
      },
      {
        id: "q10",
        questions:
          "NFC is designed for use by devices within ________________ to each other.",
        options: [
          "Anywhere on the globe",
          "A small building",
          "Both (a) and (b)",
          "None of these",
        ],
        correctAnswer: "None of these",
        explanation: "NFC is used in close proximity communication.",
      },
      {
        id: "q11",
        questions:
          "Passive NFC devices ___________ information which is _____________ by other devices.",
        options: [
          "contain, read",
          "read, contain",
          "contain, contain",
          "None of these",
        ],
        correctAnswer: "contain, read",
        explanation: "Passive NFC holds data read by others.",
      },
      {
        id: "q12",
        questions: "NFC devices work on the principle of magnetic induction.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "They operate using magnetic field coupling.",
      },
      {
        id: "q13",
        questions: "Bluetooth technology is based on _________________.",
        options: ["HART", "ZigBee", "All of these", "None of these"],
        correctAnswer: "None of these",
        explanation: "Bluetooth is based on ad-hoc piconets.",
      },
      {
        id: "q14",
        questions:
          "The Link Manager Protocol in Bluetooth manages only establishment and authentication.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "It also manages link configuration.",
      },
      {
        id: "q15",
        questions: "Zigbee commonly uses __________ data rate.",
        options: ["260 bps", "260 kbps", "260 Mbps", "None of these"],
        correctAnswer: "None of these",
        explanation: "It uses 250 kbps.",
      },
    ],
  },

  {
    id: "quiz4",
    title: "Assignment-Week 4",
    questions: [
      {
        id: "q1",
        question:
          "In 'AID', a set of sensor nodes are deployed over an agricultural field.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation:
          "In 'AID', a set of sensor nodes are deployed over an agricultural field.",
      },
      {
        id: "q2",
        question:
          "Ultrasonic sensor senses the distance at which an object is located.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation:
          "Ultrasonic sensor senses the distance at which an object is located.",
      },
      {
        id: "q3",
        question:
          "In case of static sensors, where to deploy and/or activate sensors in WSN is a coverage problem.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "It is a coverage problem in static sensor networks.",
      },
      {
        id: "q4",
        question:
          "Objective of coverage in WSN is to use maximum number of sensors and minimize network lifetime.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation:
          "Objective is to use minimum sensors and maximize network lifetime.",
      },
      {
        id: "q5",
        question:
          "A crossing is covered if it is in the interior of at least one node’s coverage disk.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "A node's coverage disk must contain the crossing.",
      },
      {
        id: "q6",
        question:
          "Which of the following is/are correct for stationary wireless sensor networks?",
        options: [
          "Topology cannot be changed automatically",
          "Node failure may result in partition of networks",
          "Both (a) and (b)",
          "None of these",
        ],
        correctAnswer: "Both (a) and (b)",
        explanation: "Both points are valid in stationary WSN.",
      },
      {
        id: "q7",
        question: "Most problems in static WSN can be classified as -",
        options: [
          "No coverage",
          "More coverage",
          "Both (a) and (b)",
          "None of these",
        ],
        correctAnswer: "None of these",
        explanation: "Actual problems are Area, Point, and Barrier coverage.",
      },
      {
        id: "q8",
        question:
          "Which of the following is/are correct with respect to UAV networks?",
        options: [
          "Multi-tasking",
          "Large coverage area",
          "Both (a) and (b)",
          "None of these",
        ],
        correctAnswer: "Both (a) and (b)",
        explanation: "UAV networks are multi-tasking and cover large areas.",
      },
      {
        id: "q9",
        question: "UAV networks are scalable.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "UAV networks are designed to scale well.",
      },
      {
        id: "q10",
        question: "In Mobile WSN, the Data Mules",
        options: [
          "Collect the data from sensor nodes",
          "Go to the sink and deliver data",
          "Both (a) and (b)",
          "Neither (a) nor (b)",
        ],
        correctAnswer: "Both (a) and (b)",
        explanation: "Data Mules perform both tasks.",
      },
      {
        id: "q11",
        question: "The full form of AUV is -",
        options: [
          "Antenna Used Vehicle",
          "Autonomous Underwater Vehicle",
          "Both (a) and (b)",
          "Neither (a) nor (b)",
        ],
        correctAnswer: "Autonomous Underwater Vehicle",
        explanation: "AUV = Autonomous Underwater Vehicle.",
      },
      {
        id: "q12",
        question:
          "This paradigm of sensing, where humans carry devices that transmit sensory data, is known as –",
        options: [
          "Machine Centric Sensing",
          "Device Centric Sensing",
          "Human Centric Sensing",
          "None of these",
        ],
        correctAnswer: "Human Centric Sensing",
        explanation: "Humans carry sensors and transmit data.",
      },
      {
        id: "q13",
        question:
          "Energy of Devices and Participant selection are not major problems in Human Centric Sensing.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "They are indeed major challenges.",
      },
      {
        id: "q14",
        question:
          "Which of the following network topologies is used in UAV networks?",
        options: ["Bus", "Star", "Both (a) and (b)", "Neither (a) nor (b)"],
        correctAnswer: "Star",
        explanation: "Star topology is one of the topologies used.",
      },
      {
        id: "q15",
        question:
          "The M2M Application Platform provides integrated services based on device collected data-sets.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "M2M platforms process device-collected data.",
      },
    ],
  },

  {
    id: "quiz5",
    title: "Assignment-Week 5",
    questions: [
      {
        id: 1,
        question: "Which of the following is/are current challenges in IoT?",
        options: [
          "Large scale of co-operation",
          "Global heterogeneity",
          "Both (a) and (b)",
          "Neither (a) nor (b)",
        ],
        correctAnswer: "Both (a) and (b)",
        explanation:
          "Large scale of co-operation and Global heterogeneity are current challenges in IoT.",
      },
      {
        id: 2,
        question:
          "Interoperability is not a characteristic of a product or system.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation:
          "Interoperability is a characteristic of a product or system.",
      },
      {
        id: 3,
        question: "Interoperability is required because",
        options: [
          "There are different programming languages",
          "There are different communication protocols",
          "Both (a) and (b)",
          "Neither (a) nor (b)",
        ],
        correctAnswer: "Both (a) and (b)",
        explanation:
          "Interoperability is required due to the diversity in programming languages and communication protocols.",
      },
      {
        id: 4,
        question:
          "Use of different programming languages such as JavaScript, Python, JAVA, and others is an example of heterogeneity in IoT.",
        options: ["False", "True"],
        correctAnswer: "True",
        explanation:
          "Heterogeneity in programming languages creates the need for interoperability in IoT.",
      },
      {
        id: 5,
        question:
          "The interoperability between devices and device users in terms of message formats is called Systematic Interoperability.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "It is called Syntactic Interoperability.",
      },
      {
        id: 6,
        question: "What is the full form of UMB in IoT interoperability?",
        options: [
          "Universal Meta Bridge",
          "Universal Main Bridge",
          "Universal Main Bracket",
          "None of these",
        ],
        correctAnswer: "None of these",
        explanation: "UMB stands for Universal Middleware Bridge.",
      },
      {
        id: 7,
        question: "Arduino is an open-source electronic programmable board.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "Arduino is indeed an open-source programmable board.",
      },
      {
        id: 8,
        question:
          "Additional electronic circuits are essential to load a program into the Arduino controller board.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation:
          "No additional circuits are required to load a program into Arduino.",
      },
      {
        id: 9,
        question: "Arduino UNO has _________ number of Digital I/O pins.",
        options: ["8", "13", "14", "None of these"],
        correctAnswer: "14",
        explanation: "Arduino UNO has 14 digital I/O pins.",
      },
      {
        id: 10,
        question:
          "What does the given Arduino code do?\n```int ledPin = 13; void setup() { pinMode(ledPin, OUTPUT); for (int i = 0; i < 3; i++) { digitalWrite(ledPin, HIGH); delay(1000); digitalWrite(ledPin, LOW); delay(500); } } void loop() {} ```",
        options: [
          "Blink 3 times with 1000ms ON and 500ms OFF",
          "Blink 3 times with 500ms ON and 500ms OFF",
          "Blink 3 times with 1000ms ON and 1000ms OFF",
          "Stay ON continuously",
        ],
        correctAnswer: "Blink 3 times with 1000ms ON and 500ms OFF",
        explanation: "The LED blinks 3 times with specified ON/OFF delays.",
      },
      {
        id: 11,
        question: "How many types of loops are there in Arduino Programming?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3",
        explanation: "Arduino supports for, while, and do-while loops.",
      },
      {
        id: 12,
        question: "Choose the correct syntax for the conditional operator.",
        options: [
          "Val = (condition)?(Statement 1):(Statement 2)",
          "Val = (condition)?(Statement 2):(Statement 1)",
          "Val = (condition):(Statement 1)?(Statement 2)",
          "Val = (condition):(Statement 2)?(Statement 1)",
        ],
        correctAnswer: "Val = (condition)?(Statement 1):(Statement 2)",
        explanation:
          "This is the correct syntax for the conditional (ternary) operator.",
      },
      {
        id: 13,
        question:
          "What is the purpose of calling dht.begin(); in the setup() function?",
        options: [
          "To initialize the Serial Monitor",
          "To start communication with the DHT sensor",
          "To set temperature to zero",
          "To define the data pin",
        ],
        correctAnswer: "To start communication with the DHT sensor",
        explanation:
          "dht.begin() initializes the communication with the sensor.",
      },
      {
        id: 14,
        question: "What function is used to read humidity from the DHT sensor?",
        options: [
          "dht.getHumidity();",
          "dht.readTemp();",
          "dht.readHumidity();",
          "dht.getTemperature();",
        ],
        correctAnswer: "dht.readHumidity();",
        explanation: "This function reads humidity from the DHT sensor.",
      },
      {
        id: 15,
        question:
          "What function is used to set the servo motor to a specific angle?",
        options: [
          "ServoDemo.move()",
          "ServoDemo.rotate()",
          "ServoDemo.write()",
          "ServoDemo.setAngle()",
        ],
        correctAnswer: "ServoDemo.write()",
        explanation: "ServoDemo.write() sets the angle for the servo motor.",
      },
    ],
  },

  {
    id: "quiz6",
    title: "Assignment-Week 6",
    questions: [
      {
        id: 1,
        question: "Which of the following is/are current challenges in IoT?",
        options: [
          "Large scale of co-operation",
          "Global heterogeneity",
          "Both (a) and (b)",
          "Neither (a) nor (b)",
        ],
        correctAnswer: "Both (a) and (b)",
        explanation:
          "Large scale of co-operation and Global heterogeneity are current challenges in IoT.",
      },
      {
        id: 2,
        question:
          'State True or False. Statement: "Python is popular for embedded application development as it is a very lightweight programming language." [cite: 2]',
        options: ["True", "False"],
        correctAnswer: "True [cite: 3]",
        explanation:
          "Python is popular for embedded application development as it is a very lightweight programming language. [cite: 3]",
      },
      {
        id: 3,
        question:
          "State True or False. Adafruit provides a library to work with DHT22 Sensor. [cite: 6]",
        options: ["True", "False"],
        correctAnswer: "True [cite: 7]",
        explanation:
          "Adafruit provides a library to work with DHT22 Sensor. [cite: 7]",
      },
      {
        id: 4,
        question:
          "Consider the following piece of Python code. What is the output? \nx=[4,5,6]\ny=[str(x[0]+1), str(len(x)*2)+'&Code']\nz=y[1].split('&')\nprint(z[1]) [cite: 9]",
        options: ["5", "12", "Code", "&Code"],
        correctAnswer: "Code [cite: 10]",
        explanation:
          "x=[4,5,6]. y becomes ['5', '6&Code'][cite: 12]. z becomes ['6', 'Code'] by splitting y[1] on '&'[cite: 13]. z[1] is 'Code'[cite: 14].",
      },
      {
        id: 5,
        question:
          'State True or False. Statement: "To indicate different blocks of code, Python follows rigid indentation." [cite: 15]',
        options: ["True", "False"],
        correctAnswer: "True [cite: 16]",
        explanation:
          "To indicate different blocks of code, Python follows rigid indentation. [cite: 16]",
      },
      {
        id: 6,
        question:
          'What is the output of the following line of code in Python? >>> print "Hi, Welcome to python!" [cite: 18, 21]',
        options: [
          "Hi, Welcome to python!",
          '"Hi, Welcome to python!"',
          "Hi, Welcome to python [cite: 20]",
          "None of these",
        ],
        correctAnswer: "Hi, Welcome to python! [cite: 22]",
        explanation:
          "The print statement outputs the string without quotes. [cite: 22]",
      },
      {
        id: 7,
        question:
          "During remote server access by a Raspberry Pi, where the Raspberry Pi acts as a client, the client needs the following? [cite: 23]",
        options: [
          "Only IP address of server",
          "Only port number",
          "Both server IP address and port number",
          "Client's IP address [cite: 24]",
        ],
        correctAnswer: "Both server IP address and port number [cite: 24]",
        explanation:
          "A client can communicate with a server only if both IP address and port numbers are known. [cite: 24]",
      },
      {
        id: 8,
        question:
          "State whether the following command to install the PIL library is correct or not. sudo pip install pillow [cite: 27]",
        options: ["Correct", "Incorrect"],
        correctAnswer: "Correct [cite: 27]",
        explanation:
          "The command to install the PIL library is sudo pip install pillow. [cite: 27]",
      },
      {
        id: 9,
        question:
          'What is the purpose of the "w" mode in the open () function in Python? [cite: 29]',
        options: [
          "To read a file",
          "To write data to a file, overwriting existing content",
          "To append data to a file",
          "To open a file in read and write mode",
        ],
        correctAnswer:
          "To write data to a file, overwriting existing content [cite: 29]",
        explanation:
          '"w" mode is used to write data to a file, overwriting existing content [cite: 29]',
      },
      {
        id: 10,
        question:
          'What will be the output of the given Python program when reading from the file?\nwith open("PythonProgram.txt", "w") as file:\n file.write("Writing data")\nwith open("PythonProgram.txt", "r") as file:\n f = file.read()\n print(\'Reading from the file\\n\')\n print(f) [cite: 31]',
        options: [
          "Writing data",
          "Reading from the file\nWriting data",
          "Error: File not found",
          "None of the above",
        ],
        correctAnswer: "Reading from the file\nWriting data [cite: 31]",
        explanation:
          "The code first writes 'Writing data' to the file, then reads it back and prints it after printing 'Reading from the file\\n'. [cite: 31]",
      },
      {
        id: 11,
        question: "Can we configure Raspberry Pi as a File Server? [cite: 32]",
        options: ["Yes", "No"],
        correctAnswer: "Yes [cite: 32]",
        explanation:
          "We can configure Raspberry Pi as a File Server. [cite: 33]",
      },
      {
        id: 12,
        question:
          "Which command is used to configure the Raspberry Pi for the camera module? [cite: 35]",
        options: [
          "sudo camera-config",
          "sudo raspi-config",
          "sudo enable-camera",
          "sudo pi-setup",
        ],
        correctAnswer: "sudo raspi-config [cite: 35]",
        explanation:
          "sudo raspi-config is used to configure the Raspberry Pi for the camera module [cite: 35]",
      },
      {
        id: 13,
        question:
          "What is the final step after enabling the camera in the Raspberry Pi configuration? [cite: 36]",
        options: [
          "Restart the camera service",
          "Run a camera test command",
          "Reboot the Raspberry Pi",
          "Reinstall the Raspberry Pi OS",
        ],
        correctAnswer: "Reboot the Raspberry Pi [cite: 36]",
        explanation:
          "after enabling the camera in the Raspberry Pi configuration, reboot. [cite: 36]",
      },
      {
        id: 14,
        question: "Which command Exits the nano editor? [cite: 38]",
        options: [
          "Ctrl + X",
          "Ctrl + O [cite: 39]",
          "Ctrl + K",
          "None of these",
        ],
        correctAnswer: "Ctrl + X [cite: 39]",
        explanation:
          "Ctrl + X exits the nano editor. Ctrl + O saves the file[cite: 39, 40].",
      },
      {
        id: 15,
        question:
          "In a temperature-controlled fan system using a relay, when should the fan turn on? [cite: 41]",
        options: [
          "When the relay is manually triggered",
          "When the surrounding temperature is lower than a predefined threshold",
          "When the surrounding temperature exceeds a predefined threshold",
          "When the battery voltage drops below a certain level",
        ],
        correctAnswer:
          "When the surrounding temperature exceeds a predefined threshold [cite: 41]",
        explanation:
          "In a temperature-controlled fan system using a relay, the fan should turn on when the surrounding temperature exceeds a predefined threshold. [cite: 41]",
      },
    ],
  },

  {
    id: "quiz7",
    title: "Assignment-Week 7",
    questions: [
      {
        id: 1,
        question:
          "In Python socket programming, while defining a socket, SOCK_STREAM refers to a type of",
        options: ["SocketFamily", "SocketType", "SocketName", "SocketProtocol"],
        correctAnswer: "SocketType",
        explanation:
          "SOCK_STREAM refers to a type of SocketType, i.e either TCP socket or UDP socket. [cite: 2]",
      },
      {
        id: 2,
        question:
          "If you want to change the label of the Y-axis while plotting a graph using matplotlib in Python, what among the following functions do you use? Suppose you have imported matplotlib as plt",
        options: ["plt.show()", "plt.plot()", "plt.ylabel()", "plt.yaxis()"],
        correctAnswer: "plt.ylabel()",
        explanation:
          "The plt.ylabel() function is used to set the label for the Y-axis. [cite: 5]",
      },
      {
        id: 3,
        question: "In Socket programming, the parameter AF_INET stands for",
        options: [
          "Unix protocols",
          "Internet Protocol (IP)",
          "File sharing",
          "Time slicing",
        ],
        correctAnswer: "Internet Protocol (IP)",
        explanation:
          "The AF_INET specifies the rules and standards of the Internet protocol, hence the socket acts as an IP socket. [cite: 7]",
      },
      {
        id: 4,
        question:
          "Suppose a Python server is receiving data from a socket as follows, data, addr = sock.recvfrom(1024). What kind of socket 'sock' is being considered here.",
        options: [
          "TCP socket",
          "UDP socket",
          "TAP socket",
          "None of the given",
        ],
        correctAnswer: "UDP socket",
        explanation:
          "sock.recvfrom() is the form used to receive data from UDP sockets. [cite: 11]",
      },
      {
        id: 5,
        question: "What is the use of the Mobi-Flow protocol?",
        options: [
          "Enabling static SDN",
          "Enabling SDN to incorporate mobility",
          "Enabling Odin Master",
          "Enabling traditional BGP",
        ],
        correctAnswer: "Enabling SDN to incorporate mobility",
        explanation:
          "Mobi-Flow protocol enables SDN to incorporate mobility. [cite: 13]",
      },
      {
        id: 6,
        question:
          "During remote server access using socket programming what is the utility of the <socket_name>.listen() function?",
        options: [
          "To create a new socket",
          "To bind the socket to connection",
          "To wait for clients to connect",
          "To close the connection",
        ],
        correctAnswer: "To wait for clients to connect",
        explanation:
          "listen() function makes the server wait for incoming client connections. [cite: 16, 17]",
      },
      {
        id: 7,
        question:
          "Which among the following is the correct direction for PACKET_OUT type messages in SDN?",
        options: [
          "From controller to switch",
          "From switch to controller",
          "Between two switches",
          "Between two controllers",
        ],
        correctAnswer: "From controller to switch",
        explanation:
          "PACKET_OUT messages are sent from the controller to switches. [cite: 18, 19, 20]",
      },
      {
        id: 8,
        question:
          "Which among the following is a limitation of the traditional non-SDN networks?",
        options: [
          "Switches do not possess routing table",
          "Switches are unable to forward traffic",
          "Switches do not have a global view of the network.",
          "All of the given",
        ],
        correctAnswer: "Switches do not have a global view of the network.",
        explanation:
          "In traditional networks, switches operate independently and lack a global view of the entire network topology. [cite: 22, 23, 24]",
      },
      {
        id: 9,
        question:
          "During remote server access by a Raspberry Pi, where the Raspberry Pi acts as a client, the client needs the following?",
        options: [
          "Only IP address of server",
          "Only port number",
          "Both server IP address and port number",
          "Client's IP address",
        ],
        correctAnswer: "Both server IP address and port number",
        explanation:
          "A client can communicate with a server only if both IP address and port numbers are known. [cite: 26, 27]",
      },
      {
        id: 10,
        question:
          "With respect to the concept of soft time-out and hard time-out in SDN switches, which of the following relations hold?",
        options: [
          "Soft time-out >= hard time-out",
          "Hard time-out >= soft time-out",
          "Soft time-out = hard time-out always",
          "None of the given",
        ],
        correctAnswer: "Hard time-out >= soft time-out",
        explanation:
          "Hard time-outs of flow rules are always greater than or equal to soft time-outs. [cite: 28, 30, 31]",
      },
      {
        id: 11,
        question: "Which of the following is true?",
        options: [
          "Traditional Network: Routing Table, Software Defined Network: Routing Table",
          "Traditional Network: Flow Table, Software Defined Network: Routing Table",
          "Traditional Network: Routing Table, Software Defined Network: Flow Table",
          "Traditional Network: Flow Table, Software Defined Network: Flow Table",
        ],
        correctAnswer:
          "Traditional Network: Routing Table, Software Defined Network: Flow Table",
        explanation:
          "All switches in traditional network have routing tables and those in Software Defined Network have flow tables. [cite: 33, 34]",
      },
      {
        id: 12,
        question:
          "Consider the figure below. To which issue of SDN does this particular figure can be related to?",
        options: [
          "Controller placement issue",
          "Flow Rule placement issue",
          "Hardware placement issue",
          "Analysis placement issue",
        ],
        correctAnswer: "Flow Rule placement issue",
        explanation:
          "The given figures shows the tabular structure of how flow rules are installed within SDN switches, so it pertains to flow rule placement issues. [cite: 39, 40]",
      },
      {
        id: 13,
        question:
          "With respect to the directional APIs in SDN, what is the functionality of East-Westbound APIs?",
        options: [
          "To communicate between the controller and switches",
          "To communicate among multiple controllers",
          "East-Westbound APIs do not exist",
          "To communicate between switches themselves.",
        ],
        correctAnswer: "To communicate among multiple controllers",
        explanation:
          "East-Westbound APIs are used for communication among multiple controllers. [cite: 42]",
      },
      {
        id: 14,
        question: "Hierarchical SDN architecture is also known as",
        options: ["Tree", "Flat", "Mesh", "Line"],
        correctAnswer: "Tree",
        explanation:
          "Hierarchical SDN architecture is also known as Tree architecture. [cite: 44]",
      },
      {
        id: 15,
        question:
          "Integrating SDN with IoT is not recommended and is not a suitable approach to follow",
        options: ["False", "True"],
        correctAnswer: "False",
        explanation:
          "SDN integration with IoT is highly recommended for efficient delivery of services. [cite: 45]",
      },
    ],
  },

  {
    id: "quiz8",
    title: "Assignment-Week 8",
    questions: [
      {
        id: 1,
        question: "What is Sensor Openflow?",
        options: [
          "A traditional routing protocol",
          "A queue management protocol",
          "An SDN protocol tailored for IoT devices",
          "A physical connectivity protocol.",
        ],
        correctAnswer: "An SDN protocol tailored for IoT devices",
        explanation:
          "Sensor Openflow is an SDN protocol tailored for IoT devices[cite: 3].",
      },
      {
        id: 2,
        question:
          "With respect to Mobi-Flow, how does Mobi-Flow fare in comparison to Conventional networking in terms of message overhead?",
        options: [
          "Mobi-Flow > Conventional",
          "Mobi-Flow < Conventional",
          "Mobi-Flow = Conventional",
          "None of the given",
        ],
        correctAnswer: "Mobi-Flow < Conventional",
        explanation:
          "Mobi-Flow has less message overhead compared to conventional networking[cite: 6].",
      },
      {
        id: 3,
        question: "Virtual Machines came before Cloud Computing.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation:
          "Virtual Machines existed before the advent of Cloud Computing[cite: 7].",
      },
      {
        id: 4,
        question:
          "Private cloud services cannot provide Software-as-a-Service (SaaS).",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation:
          "Any cloud deployment model, including private cloud, can provide any cloud service model like SaaS[cite: 9].",
      },
      {
        id: 5,
        question:
          "Which among the following is a solution for mobility-aware flow rule placement in SDIoT?",
        options: ["Mobility-Flow", "Mobile-Flow", "Mobi-Flow", "M-Flow"],
        correctAnswer: "Mobi-Flow",
        explanation:
          "Mobi-Flow has been proposed to provide a solution for mobility-aware flow rule placement[cite: 12].",
      },
      {
        id: 6,
        question:
          "An organization A wants to deploy a cloud infrastructure, whereby it wants to push majority of the data to a cloud whose servers can be situated anywhere within the globe, but it wants certain private data to be pushed only to cloud servers that are present on-premise and are accessible by only authenticated members of the organization. In this context which among the following deployment model should be used?",
        options: [
          "Private Cloud",
          "Public Cloud",
          "Hybrid Cloud",
          "Any of these",
        ],
        correctAnswer: "Hybrid Cloud",
        explanation:
          "A Hybrid Cloud deployment model should be used as it supports both public and private cloud features[cite: 15, 16].",
      },
      {
        id: 7,
        question:
          "Which among the following is the most on-premise cloud deployment model?",
        options: ["Private Cloud", "Public cloud", "IaaS", "PaaS"],
        correctAnswer: "Private Cloud",
        explanation:
          "Private Cloud is the most on-premise cloud deployment model[cite: 18].",
      },
      {
        id: 8,
        question:
          "Which of the following type of client requires constant communication/connection with the cloud server?",
        options: [
          "Thin client",
          "Thick client",
          "Both thin and thick clients",
          "None of these",
        ],
        correctAnswer: "Thin client",
        explanation:
          "A thin client acts as a simple terminal and requires constant communication with the servers[cite: 21, 22].",
      },
      {
        id: 9,
        question: "What does 'CIA' in cloud data security stand for?",
        options: [
          "Confidentiality, Integrity, Availability",
          "Confidentiality, Inheritance, Automation",
          "Congestion, Integrity, Authentication",
          "Criticality, Integrity, Accountability",
        ],
        correctAnswer: "Confidentiality, Integrity, Availability",
        explanation:
          "'CIA' stands for 'Confidentiality, Integrity and Availability'[cite: 25].",
      },
      {
        id: 10,
        question:
          "When you are accessing Spotify online for listening to music from your browser without specifically installing them, which among the following cloud service models is the most appropriate one that you are using.",
        options: ["SaaS", "PaaS", "IaaS", "DaaS"],
        correctAnswer: "SaaS",
        explanation:
          "Accessing software like Spotify over the network without installation is an example of Software-as-a-Service (SaaS)[cite: 29, 30].",
      },
      {
        id: 11,
        question:
          "With respect to Cloud Computing security, which of the following are necessary",
        options: [
          "Network Level Security but not Host Level Security",
          "Application Level Security but not Host Level Security",
          "Host Level Security but not Network Level Security",
          "All of Network, Host and Application Level Security.",
        ],
        correctAnswer: "All of Network, Host and Application Level Security",
        explanation:
          "Network Level, Host Level, and Application Level Security are all necessary for Cloud Computing security[cite: 33].",
      },
      {
        id: 12,
        question:
          "Data security and client authentication is an issue in which of the following cloud service models?",
        options: ["SaaS", "SaaS and PaaS", "IaaS", "All of them"],
        correctAnswer: "All of them",
        explanation:
          "Security, including data security and client authentication, is a pertinent issue in all cloud service models (SaaS, PaaS, IaaS)[cite: 35, 36].",
      },
      {
        id: 13,
        question: "What is the role of a Hypervisor (most probable answer)?",
        options: [
          "To facilitate installation of a router",
          "To provide a platform for executing virtual machines",
          "To facilitate sensor fabrication",
          "To communicate between switches themselves.",
        ],
        correctAnswer: "To provide a platform for executing virtual machines",
        explanation:
          "A hypervisor's role is to provide a platform for executing virtual machines[cite: 39, 40].",
      },
      {
        id: 14,
        question: "Which of the following is a limitation of SaaS?",
        options: [
          "Remote software execution",
          "Platform independence",
          "Centralized control",
          "None of these.",
        ],
        correctAnswer: "Centralized control",
        explanation:
          "Centralized control can be a limitation of SaaS[cite: 41].",
      },
      {
        id: 15,
        question:
          "Fill in the blank. ______ means independent of device or location.",
        options: ["Scalable", "Reliability", "Agile", "Ubiquitous"],
        correctAnswer: "Ubiquitous",
        explanation:
          "Ubiquitous means independent of device or location[cite: 43].",
      },
    ],
  },

  {
    id: "quiz9",
    title: "Assignment-Week 9",
    questions: [
      {
        id: 1,
        question:
          "Which of the following is/are the advantages of cloud computing?",
        options: [
          "Elasticity",
          "Pay-per-use",
          "Self Service",
          "All of the above",
        ],
        correctAnswer: "All of the above",
        explanation:
          "The advantages of cloud computing include Elasticity, Pay-per-use and Self-Service. [cite: 3]",
      },
      {
        id: 2,
        question:
          "Fill in the blanks. Fog computing is an intermediate layer between ______ and ______.",
        options: [
          "Dew and devices",
          "Cloud and devices",
          "Cloud and server",
          "None of these",
        ],
        correctAnswer: "Cloud and devices",
        explanation:
          "Fog computing is an intermediate layer between Cloud and devices. [cite: 7]",
      },
      {
        id: 3,
        question:
          "The managerial role is played by ______ in sensor-cloud architecture.",
        options: [
          "End-users",
          "Sensor-Cloud Service Provider",
          "Neither a nor b",
          "Both a and b",
        ],
        correctAnswer: "Sensor-Cloud Service Provider",
        explanation:
          "Sensor-Cloud Service Provider plays the managerial role in sensor-cloud architecture. [cite: 9]",
      },
      {
        id: 4,
        question: "Which of the following is not a component of OpenStack?",
        options: ["Suse", "Nova", "Swift", "All of these"],
        correctAnswer: "Suse",
        explanation:
          "Nova and Swift are two of the many components of OpenStack. Suse is a Linux distribution, not an OpenStack component. [cite: 12]",
      },
      {
        id: 5,
        question: "Who coined the term Fog computing?",
        options: ["IBM", "CISCO", "All of these", "None of these"],
        correctAnswer: "CISCO",
        explanation: "CISCO coined the term Fog computing. [cite: 13]",
      },
      {
        id: 6,
        question:
          "Fill in the blank. The concept of ______ enables physical hardware to be shared among multiple entities.",
        options: [
          "Hardware virtualization",
          "Software virtualization",
          "Module virtualization",
          "All of these",
        ],
        correctAnswer: "Hardware virtualization",
        explanation:
          "The concept of hardware virtualization enables physical hardware to be shared among multiple entities. [cite: 16]",
      },
      {
        id: 7,
        question:
          "Openstack is a free open source software for cloud framework simulation and experimentation with various cloud applications.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation:
          "Openstack is a free open source software for cloud framework simulation and experimentation with various cloud applications. [cite: 18]",
      },
      {
        id: 8,
        question:
          "In IoT, temporal sensitivity of data DOES NOT play an important role",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation:
          "IoT data can be classified into time sensitive data, less time sensitive data and data not sensitive to time. Hence time sensitivity plays a big role in IoT data classification. [cite: 22, 23]",
      },
      {
        id: 9,
        question: "Which among the following is NOT a component of OpenStack.",
        options: ["Horizon", "Heat", "Stellar", "Neutron"],
        correctAnswer: "Stellar",
        explanation:
          "Horizon, Heat, and Neutron are components of OpenStack. Stellar is not listed as a core component. [cite: 25, 26]",
      },
      {
        id: 10,
        question:
          "Which among the following is the principal feature of sensor clouds, with respect to sensor nodes?",
        options: [
          "Sensor monitoring",
          "Sensor instantiation",
          "Sensor virtualization",
          "Sensor collection",
        ],
        correctAnswer: "Sensor virtualization",
        explanation:
          "Sensor virtualization is the principal feature of sensor clouds and their utility. [cite: 29]",
      },
      {
        id: 11,
        question:
          "The optimal composition of ______ is a management issue in sensor-cloud.",
        options: ["Logistics", "Pricing", "Caching", "Virtual sensor nodes"],
        correctAnswer: "Virtual sensor nodes",
        explanation:
          "The optimal composition of Virtual sensor nodes is a management issue in sensor-cloud. [cite: 32]",
      },
      {
        id: 12,
        question:
          "How many different types of caching mechanism are there in sensor cloud?",
        options: ["1", "4", "2", "3"],
        correctAnswer: "2",
        explanation:
          "Internal Cache (IC) and External Cache (EC) are two different types of caching mechanisms used in sensor cloud. [cite: 34]",
      },
      {
        id: 13,
        question:
          "Data from an IoT device is transferred to cloud via a network, which is then processed at the cloud and then a response is sent back to the IoT device from the cloud after processing. The time it takes for one-way data transfer between the node and cloud is 10s and the data processing time at the cloud is 'x' seconds. It takes a total of 25s for the entire to and fro transfer of data between the sensor and cloud along with processing at the cloud. What is the value of x?",
        options: ["10s", "5s", "15s", "20s"],
        correctAnswer: "5s",
        explanation:
          "Total time = (Transfer to cloud) + (Processing time) + (Transfer from cloud). 25s = 10s + x + 10s. Therefore, x = 25s - 20s = 5s. [cite: 40, 41, 42]",
      },
      {
        id: 14,
        question: "Which among the following is true?",
        options: [
          "Fog computing acts as a complement to cloud computing.",
          "Fog computing is a replacement for cloud computing.",
          "Fog computing and cloud computing are the same.",
          "Fog computing is more powerful than cloud computing (with respect to resources).",
        ],
        correctAnswer: "Fog computing acts as a complement to cloud computing.",
        explanation:
          "Fog computing and cloud computing are complementary technologies. Fog helps in bringing the cloud closer to the IoT devices. [cite: 47, 48]",
      },
      {
        id: 15,
        question:
          "Which component of OpenStack do you use to access all the other components?",
        options: ["Horizon", "Glance", "Neutron", "None of these"],
        correctAnswer: "Horizon",
        explanation:
          "Horizon is the dashboard of OpenStack which provides the GUI and from where you can access other components. [cite: 52]",
      },
    ],
  },

  {
    id: "quiz10",
    title: "Assignment-Week 10",
    questions: [
      {
        id: 1,
        question:
          "Which among the following are active connected entities in a holistic smart city environment?",
        options: [
          "Police station",
          "Banks",
          "Transport centers",
          "All of the above",
        ],
        correctAnswer: "All of the above",
        explanation:
          "Smart cities involve multiple connected entities like police stations, banks, and transport centers. [Lecture 46@4:45]",
      },
      {
        id: 2,
        question:
          "With the help of ICT tools, it is possible to increase and improve citizen participation for a good governance based smart city.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation:
          "ICT tools enhance citizen engagement in governance. [Lecture 46@11:20]",
      },
      {
        id: 3,
        question:
          "Which among the following is a possible challenge with respect to smart parking lots?",
        options: [
          "Efficient auto-routing of vehicles",
          "Locating current vacant spots",
          "Auto-charging of vehicles",
          "All of the given",
        ],
        correctAnswer: "All of the given",
        explanation:
          "All mentioned challenges are relevant for smart parking systems. [Lecture 46@24:37]",
      },
      {
        id: 4,
        question:
          "What refers to combining information from multiple sensor sources?",
        options: [
          "Information Collection",
          "Multi-sensor deployment",
          "Multi-sensor dissemination",
          "Multi-sensor data fusion",
        ],
        correctAnswer: "Multi-sensor data fusion",
        explanation:
          "Multi-sensor data fusion integrates data from various sensors. [Lecture 47@6:52]",
      },
      {
        id: 5,
        question:
          "Which of the following is one of the theory of evidence-based mathematical methods of data fusion?",
        options: [
          "Belief function",
          "Bayesian analysis",
          "ANN",
          "None of these",
        ],
        correctAnswer: "Belief function",
        explanation:
          "Belief function is part of evidence-based fusion techniques. [Lecture 47@11:49]",
      },
      {
        id: 6,
        question:
          "With respect to data fusion from multiple IoT sensors, does outlier data present with a challenge?",
        options: ["No", "Yes"],
        correctAnswer: "Yes",
        explanation:
          "Outliers can disrupt data fusion accuracy. [Lecture 47@8:13]",
      },
      {
        id: 7,
        question: "Which of the following is a phase of ICV development?",
        options: [
          "Based on 2G",
          "Based on 4G LTE",
          "Vehicles connected to cloud",
          "All of these",
        ],
        correctAnswer: "All of these",
        explanation: "ICV development has multiple phases. [Lecture 50@12:28]",
      },
      {
        id: 8,
        question:
          "With which of the following can the decision-making gap between the sensors and the actuators be bridged?",
        options: [
          "SDN",
          "OpenStack Horizon",
          "Artificial Intelligence (AI)",
          "Arduino IDE",
        ],
        correctAnswer: "Artificial Intelligence (AI)",
        explanation:
          "AI aids in decision-making between sensing and actuation. [Lecture 47@12:14]",
      },
      {
        id: 9,
        question:
          "Which of the following statements are true about the HAN standards?",
        options: [
          "Statements I and II",
          "Statements I and III",
          "Statements II and III",
          "Statements I, II and III",
        ],
        correctAnswer: "Statements I and II",
        explanation:
          "IEEE802.15.4 and Zigbee handle the respective layers. [Lecture 48@16:11]",
      },
      {
        id: 10,
        question: "What is UPnP?",
        options: [
          "Uninterrupted Post-messaging",
          "Universal Pull Streaming",
          "Universal Plug and Play",
          "Unhindered Public Networking",
        ],
        correctAnswer: "Universal Plug and Play",
        explanation: "UPnP enables device interoperability. [Lecture 48@12:53]",
      },
      {
        id: 11,
        question: "What are the disadvantages of V2X communication?",
        options: [
          "Increased traffic safety",
          "Tracking of movement",
          "Efficient use of fuel",
          "None of these",
        ],
        correctAnswer: "Tracking of movement",
        explanation: "Privacy issues arise due to tracking. [Lecture 50@21:04]",
      },
      {
        id: 12,
        question:
          "Mobility of vehicles in a V2X environment limits which of the following that restricts the use of TCP/IP for V2X communication?",
        options: [
          "Communication between vehicular infrastructure",
          "Localization of data",
          "Backbone routing in IP core networks",
          "Human-vehicle interaction",
        ],
        correctAnswer: "Localization of data",
        explanation:
          "TCP/IP relies on localized data; V2X lacks this. [Lecture 49@12:33]",
      },
      {
        id: 13,
        question:
          "In VANET, link durations are long and easily scaled-up to include all the vehicles on the road?",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation:
          "Link durations are short due to dynamic topology. [Lecture 49@18:00]",
      },
      {
        id: 14,
        question: "CCN is derived from ICN architecture.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "CCN is a subset of ICN. [Lecture 49@15:32]",
      },
      {
        id: 15,
        question:
          "In an ICV environment, efficient cooperation between different vehicles on a highway can lead to a safer scenario with respect to collision and avoiding incoming traffic.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "ICV cooperation enhances road safety. [Lecture 50@2:00]",
      },
    ],
  },

  {
    id: "quiz11",
    title: "Assignment-Week 11",
    questions: [
      {
        id: 1,
        question:
          "Which among the following is the most probable application scenario for a smart grid?",
        options: [
          "Home automation",
          "Hospital networks",
          "Intelligent power plants",
          "Crop monitoring",
        ],
        correctAnswer: "Intelligent power plants",
        explanation:
          "Smart grids are typically implemented in intelligent power plants to monitor and manage energy flows efficiently.",
      },
      {
        id: 2,
        question:
          "With respect to a smart grid, which stakeholders are potentially benefitted?",
        options: [
          "Energy Service providers",
          "Energy consumers/customers",
          "Both energy service providers and consumers",
          "Neither energy service providers nor consumers",
        ],
        correctAnswer: "Both energy service providers and consumers",
        explanation:
          "Both providers and consumers gain from smart grids due to enhanced energy management and monitoring.",
      },
      {
        id: 3,
        question:
          "It is not possible to perform load forecasting using a smart grid.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation:
          "Smart grids support load forecasting by analyzing usage patterns and predictive models.",
      },
      {
        id: 4,
        question:
          "With respect to the Smart Grid architecture, what is the utility of the IP network?",
        options: [
          "IP network has no utility",
          "IP network is used to connect smart grid components globally for seamless data transfer",
          "IP network is used for multimedia video streaming only",
          "IP network is used to induce more congestion",
        ],
        correctAnswer:
          "IP network is used to connect smart grid components globally for seamless data transfer",
        explanation:
          "The IP network allows smart grid components to communicate and transfer data effectively.",
      },
      {
        id: 5,
        question:
          "Smart Home is an isolated concept and is not integrable with smart grid?",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation:
          "Smart homes can be integrated into smart grids to enhance automation and energy efficiency.",
      },
      {
        id: 6,
        question:
          "Which of the following is a cloud application of smart grid?",
        options: [
          "Information management",
          "Energy management",
          "Security",
          "All of these",
        ],
        correctAnswer: "All of these",
        explanation:
          "Smart grids utilize cloud computing for managing energy, information, and security.",
      },
      {
        id: 7,
        question:
          "Which of the following is not a vulnerability of Smart Grid?",
        options: [
          "Integrity",
          "Physical threats",
          "Dynamic system attacks",
          "None of these",
        ],
        correctAnswer: "None of these",
        explanation:
          "All listed options are considered vulnerabilities in smart grids.",
      },
      {
        id: 8,
        question: "IIoT corresponds to which industrial revolution?",
        options: ["1st", "2nd", "3rd", "4th"],
        correctAnswer: "4th",
        explanation:
          "The Industrial Internet of Things is a core component of the Fourth Industrial Revolution.",
      },
      {
        id: 9,
        question: "IIoT is inherently data intensive.",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation:
          "IIoT relies on big data for real-time analytics and decision-making.",
      },
      {
        id: 10,
        question:
          "Which among the following is one of the requirements and utility of IIoT?",
        options: [
          "Power plant interruption",
          "Power plant virtualization",
          "Power plant decentralization",
          "Power plant denotification",
        ],
        correctAnswer: "Power plant virtualization",
        explanation:
          "Virtualization allows efficient resource use and monitoring in IIoT-based power systems.",
      },
      {
        id: 11,
        question: "Smart Grid follows which type of flow of energy?",
        options: [
          "Bidirectional",
          "Unidirectional",
          "Both a and b",
          "Neither a nor b",
        ],
        correctAnswer: "Bidirectional",
        explanation:
          "Smart grids support two-way energy flow between source and consumer.",
      },
      {
        id: 12,
        question: "What is the Flow of data?",
        options: [
          "Acquisition>Generation>Storage>Analysis",
          "Generation>Storage>Analysis>Acquisition",
          "Generation>Acquisition>Storage>Analysis",
          "None of these",
        ],
        correctAnswer: "Generation>Acquisition>Storage>Analysis",
        explanation:
          "This sequence reflects the lifecycle of data in smart systems.",
      },
      {
        id: 13,
        question:
          "Intelligent transport system is least likely to render which of the following connectivity?",
        options: [
          "Vehicle-to-vehicle connectivity",
          "Vehicle-to-sensor connectivity",
          "Vehicle-to-road infrastructure",
          "Vehicle-to-home connectivity",
        ],
        correctAnswer: "Vehicle-to-home connectivity",
        explanation:
          "ITS is focused on vehicular networks, not direct home integration.",
      },
      {
        id: 14,
        question:
          "Approximately around ________ of the total data available currently in the world is unstructured.",
        options: ["20 %", "40 %", "60 %", "80 %"],
        correctAnswer: "80 %",
        explanation:
          "Most of the world's data today is in unstructured formats such as video, audio, and text.",
      },
      {
        id: 15,
        question: "SQL manages ________________ data.",
        options: ["Unstructured", "Corrupt", "Structured", "Non-organized"],
        correctAnswer: "Structured",
        explanation:
          "SQL is designed to manage structured data stored in relational databases.",
      },
    ],
  },

  {
    id: "quiz12",
    title: "Assignment-Week 12",
    questions: [
      {
        id: 1,
        question:
          "Qualitative analysis refers to the process by which numerical data is analyzed?",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation:
          "Qualitative analysis refers to non-numerical data. Refer Lecture 56@2:46.",
      },
      {
        id: 2,
        question:
          "Which of the following data analysis techniques involves the study of difference of variance?",
        options: ["ARIMA", "ANOVA", "DNN", "OpenFlow"],
        correctAnswer: "ANOVA",
        explanation:
          "ANOVA is used to study the variance among groups. Lecture 56@10:42.",
      },
      {
        id: 3,
        question:
          "To predict the dependent variable based on the relationship with an independent variable, which technique is used?",
        options: ["ANOVA", "ARIMA", "Regression Analysis", "Pre-analysis"],
        correctAnswer: "Regression Analysis",
        explanation:
          "Regression is used for prediction based on independent variables. Lecture 56@15:13.",
      },
      {
        id: 4,
        question:
          "With respect to AgriSens, how many logical layers are there in its architecture?",
        options: [
          "Perception Layer",
          "Processing Layer",
          "Application Layer",
          "All of the given",
        ],
        correctAnswer: "All of the given",
        explanation:
          "AgriSens consists of Perception, Processing, and Application layers.",
      },
      {
        id: 5,
        question:
          "AgriSens supports real-time monitoring of soil moisture and instant reporting to a dashboard.",
        options: ["False", "True"],
        correctAnswer: "True",
        explanation:
          "AgriSens supports real-time dashboard reporting. Lecture 57.",
      },
      {
        id: 6,
        question:
          "In IoT smart healthcare, the data aggregator is also known as:",
        options: ["CPU", "LPU", "APU", "PPU"],
        correctAnswer: "LPU",
        explanation: "LPU acts as a data aggregator. Lecture 58@9:23.",
      },
      {
        id: 7,
        question:
          "The effect size for determining statistical significance is the standardized ________ difference between two groups.",
        options: [
          "Median",
          "Mean",
          "Inter quartile range",
          "None of the above",
        ],
        correctAnswer: "Mean",
        explanation: "Standardized mean difference is used. Lecture @17:15.",
      },
      {
        id: 8,
        question:
          "Processing the sensed data on the device itself is known as __________ approach.",
        options: [
          "Network based",
          "In-place",
          "Out of the place",
          "None of these",
        ],
        correctAnswer: "In-place",
        explanation: "In-place processing happens on the device itself.",
      },
      {
        id: 9,
        question:
          "Processing handheld activity device data with AI can be used for ________.",
        options: [
          "Fall detection",
          "Heart rate detection",
          "Vehicle detection",
          "All of these",
        ],
        correctAnswer: "Fall detection",
        explanation: "Used in fall detection. Lecture 60@11:56.",
      },
      {
        id: 10,
        question: "Which of the following is an assumption of ANOVA?",
        options: [
          "Homogeneity of variances",
          "Normally distributed response variable",
          "Independence of observations",
          "All of these",
        ],
        correctAnswer: "All of these",
        explanation: "These are assumptions of ANOVA. Lecture 56@12:30.",
      },
      {
        id: 11,
        question: "Which of the following are types of ANOVA?",
        options: [
          "One way analysis",
          "Two way analysis",
          "K-way analysis",
          "All of the above",
        ],
        correctAnswer: "All of the above",
        explanation: "All are types of ANOVA. Lecture 56@11:57.",
      },
      {
        id: 12,
        question: "AmbuSense is a privacy-aware system.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "AmbuSense is privacy-aware. Lecture 58@24:12.",
      },
      {
        id: 13,
        question:
          "The two most relevant sensors directly used in agriculture are:",
        options: [
          "Soil moisture and ECG sensor",
          "Soil moisture and water level sensor",
          "ECG sensor and water level sensor",
          "All of these",
        ],
        correctAnswer: "Soil moisture and water level sensor",
        explanation: "Essential for AgriSens. Lecture 57@13:11.",
      },
      {
        id: 14,
        question: "Examples of dispersion measures include _______ and ______.",
        options: [
          "Discrete, categorical",
          "Continuous, quantitative",
          "Discrete, quantitative",
          "Range, Variance",
        ],
        correctAnswer: "Range, Variance",
        explanation: "These are standard dispersion measures.",
      },
      {
        id: 15,
        question: "Which sensor detects the tilt of a smartphone?",
        options: ["HC-SR04", "Gyroscope", "Accelerometer", "Monometer"],
        correctAnswer: "Gyroscope",
        explanation: "Gyroscope detects angular rotation. Lecture 60@3:06.",
      },
    ],
  },
];
