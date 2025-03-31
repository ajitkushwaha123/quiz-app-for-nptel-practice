export const data = [
  {
    id: "quiz1",
    title: "Introduction to IOT - Assignment 1",
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
        question: "Which of the following are the enablers of IoT?",
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
          "The integration of existing devices, smart devices, and constrained nodes in a singular framework is one of the reasons for the address crunch in IoT. True or False?",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        id: 6,
        question:
          "In Multi-homing, a node/network is connected to a single network for improved reliability. True or False?",
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
        question: "IPv6 uses ____________ notation for its representation.",
        options: ["Hexadecimal", "Binary", "Decimal", "None of these"],
        correctAnswer: "Hexadecimal",
      },
      {
        id: 9,
        question:
          "The parameters sensed by a sensor may be sent to the cloud for further processing. True or False?",
        options: ["False", "True"],
        correctAnswer: "True",
      },
      {
        id: 10,
        question:
          "The IPv6 notation uses ___________________ number of bits to represent an address.",
        options: ["64", "128", "Both (a) and (b)", "Neither (a) nor (b)"],
        correctAnswer: "128",
      },
      {
        id: 11,
        question: "A sensor is -",
        options: [
          "Only sensitive to the measured property",
          "Insensitive to any other property than what the sensor is made to sense",
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
        question: "Which of the following is a correct statement?",
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
        question:
          "Based on the output, sensors are classified as _______________________",
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
    title: "Introduction to IOT - Assignment 2",
    questions: [
      {
        id: 1,
        question: "Based on functionality, MQTT is a",
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
          "State True or False. MQTT protocol follows 1. Client-Server 2. Publish-Subscribe 3. Both (a) and (b) 4. None of these paradigm for exchanging messages.",
        options: ["True", "False"],
        correctAnswer: "False",
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
        question:
          "The Publish/Subscribe architecture in MQTT is __________ driven.",
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
        question: "COAP is __________ and __________.",
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
          "In CoAP, client-server interaction is asynchronous over a datagram transport protocol such as __________.",
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
        question: "AMQP has __________ number of frame types.",
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
    title: "Introduction to Internet of Things - Assignment 3",
    questions: [
      {
        id: 1,
        question:
          "State True or False. Statement: “WirelessHART is the latest release of Highway Addressable Remote Transducer protocol.”",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        id: 2,
        question:
          "State True or False. Statement: “Wired HART has a network layer.”",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        id: 3,
        question:
          "State true or false: “WirelessHART physical layer is derived from 802.15.2 protocol”",
        options: ["False", "True"],
        correctAnswer: "False",
      },
      {
        id: 4,
        question: "WirelessHART operates only in __________ GHz ISM band.",
        options: ["3.7", "4.8", "4.8", "2.4"],
        correctAnswer: "2.4",
      },
      {
        id: 5,
        question:
          "HART standard was developed from _____________ smart field devices.",
        options: ["amplified", "diminished", "isolated", "networked"],
        correctAnswer: "networked",
      },
      {
        id: 6,
        question:
          "Main difference between wired and unwired versions is in the physical, data link, and ______ layers.",
        options: ["Data link", "Network", "Transport", "None of these"],
        correctAnswer: "Network",
      },
      {
        id: 7,
        question:
          "State true or false “Collision free and deterministic communication is achieved in HART’s data link layer.”",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        id: 8,
        question: "Channel hopping is incorporated in which layer of HART?",
        options: [
          "Data link layer",
          "Physical layer",
          "Application layer",
          "Transport layer",
        ],
        correctAnswer: "Data link layer",
      },
      {
        id: 9,
        question:
          "State True or False. “The HART application layer is responsible for extracting commands from a message, executing it and generating responses.”",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        id: 10,
        question:
          "NFC is designed for use by devices within ________________ to each other.",
        options: [
          "Anywhere on the globe",
          "A small building",
          "Both (a) and (b)",
          "None of these",
        ],
        correctAnswer: "None of these",
      },
      {
        id: 11,
        question:
          "Passive NFC devices ___________ information which is _____________ by other devices.",
        options: [
          "contain, read",
          "read, contain",
          "contain, contain",
          "None of these",
        ],
        correctAnswer: "contain, read",
      },
      {
        id: 12,
        question:
          "State True or False. “NFC devices work on the principle of magnetic induction.”",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        id: 13,
        question: "Bluetooth technology is based on _________________.",
        options: ["HART", "ZigBee", "All of these", "None of these"],
        correctAnswer: "None of these",
      },
      {
        id: 14,
        question:
          "State whether the following statement is true or false. Statement: The Link Manager Protocol in Bluetooth manages the only establishment and authentication.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        id: 15,
        question: "Zigbee commonly uses __________data rate.",
        options: ["260 bps", "260 kbps", "260 Mbps", "None of these"],
        correctAnswer: "None of these",
      },
    ],
  },
  {
    id: "quiz4",
    title: "Introduction to Internet of Things - Assignment 4",
    questions: [
      {
        id: 1,
        question:
          "State whether the following statement is true or false. Statement: In “AID”, a set of sensor nodes are deployed over an agricultural field.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        id: 2,
        question:
          "State True or False. Statement: Ultrasonic sensor senses the distance at which an object is located.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        id: 3,
        question:
          "State true or false. In case of static sensors, where to deploy and/or activate sensors in WSN is a coverage problem.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        id: 4,
        question:
          "State whether the following statement is true or false. Statement: Objective of coverage in WSN is to use maximum number of sensors and minimize network lifetime.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        id: 5,
        question:
          "State whether the following statement is true or false. Statement: “A crossing is covered if it is in the interior of at least one node’s coverage disk.”",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        id: 6,
        question:
          "State which of the following is/are correct for stationary wireless sensor networks.",
        options: [
          "Topology cannot be changed automatically.",
          "Node failure may result in partition of networks.",
          "Both (a) and (b)",
          "None of these",
        ],
        correctAnswer: "Both (a) and (b)",
      },
      {
        id: 7,
        question: "Most problems in static WSN can be classified as -",
        options: [
          "No coverage",
          "More coverage",
          "Both (a) and (b)",
          "None of these",
        ],
        correctAnswer: "None of these",
      },
      {
        id: 8,
        question:
          "Which of the following is/are correct with respect UAV networks?",
        options: [
          "Multi-tasking",
          "Large coverage area",
          "Both (a) and (b)",
          "None of these",
        ],
        correctAnswer: "Both (a) and (b)",
      },
      {
        id: 9,
        question: "State True or False. Statement: UAV networks are scalable.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        id: 10,
        question: "In Mobile WSN, the Data Mules",
        options: [
          "Collect the data from sensor nodes",
          "Goes to the sink and delivers the collected data",
          "Both (a) and (b)",
          "Neither (a) nor (b)",
        ],
        correctAnswer: "Both (a) and (b)",
      },
      {
        id: 11,
        question: "The full form of AUV is -",
        options: [
          "Antenna Used Vehicle",
          "Autonomous Underwater Vehicle",
          "Both (a) and (b)",
          "Neither (a) nor (b)",
        ],
        correctAnswer: "Autonomous Underwater Vehicle",
      },
      {
        id: 12,
        question:
          "Humans carry their devices and move around. Sensors embedded within the devices record readings. Sensory readings are then transmitted for processing. This paradigm of sensing is known as –",
        options: [
          "Machine Centric Sensing",
          "Device Centric Sensing",
          "Human Centric Sensing",
          "None of these",
        ],
        correctAnswer: "Human Centric Sensing",
      },
      {
        id: 13,
        question:
          "State True or False. Energy of Devices and Participant selection are not two major problems in Human Centric Sensing.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        id: 14,
        question:
          "Which of the following network topologies is used in UAV networks?",
        options: ["Bus", "Star", "Both (a) and (b)", "Neither (a) nor (b)"],
        correctAnswer: "Star",
      },
      {
        id: 15,
        question:
          "State true of false. The M2M Application Platform provides integrated services based on device collected data-sets.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
    ],
  },

  {
    id: "quiz5",
    title: "Introduction to Internet of Things - Assignment 5",
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
      },
      {
        id: 2,
        question:
          "State True or False. Statement: “Interoperability is not a characteristic of a product or system.”",
        options: ["True", "False"],
        correctAnswer: "False",
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
      },
      {
        id: 4,
        question:
          "State whether the following statement is true or false Statement: “Use of different programming languages such as JavaScript, Python, JAVA, and others is an example of heterogeneity in IoT. This brings in the need for interoperability.”",
        options: ["False", "True"],
        correctAnswer: "True",
      },
      {
        id: 5,
        question:
          "State True or False. Statement: “The interoperability between devices and device users in terms of message formats is called Systematic Interoperability.”",
        options: ["True", "False"],
        correctAnswer: "False",
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
      },
      {
        id: 7,
        question:
          "State true of false Arduino is an open-source electronic programmable board.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        id: 8,
        question:
          "State true or false Additional electronic circuits are essential to load a program into the Arduino controller board.",
        options: ["True", "False"],
        correctAnswer: "False",
      },
      {
        id: 9,
        question: "Arduino UNO has _________ number of Digital I/O pins.",
        options: ["8", "13", "14", "None of these"],
        correctAnswer: "14",
      },
      {
        id: 10,
        question:
          "What does the following code do?\nint ledPin = 13;\nvoid setup() {\npinMode(ledPin, OUTPUT);\nfor (int i = 0; i < 3; i++) {\ndigitalWrite(ledPin, HIGH);\ndelay(1000);\ndigitalWrite(ledPin, LOW);\ndelay(500);\n}\n}\nvoid loop() {\n// Do nothing\n}",
        options: [
          "Blink 3 times with 1000ms ON and 500ms OFF",
          "Blink 3 times with 500ms ON and 500ms OFF",
          "Blink 3 times with 1000ms ON and 1000ms OFF",
          "Stay ON continuously",
        ],
        correctAnswer: "Blink 3 times with 1000ms ON and 500ms OFF",
      },
      {
        id: 11,
        question:
          "How many types of loops will you find in Arduino Programming?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "3",
      },
      {
        id: 12,
        question: "Choose the right option for if/conditional operator.",
        options: [
          "Val = (condition)?(Statement 1):(Statement 2)",
          "Val = (condition)?(Statement 2):(Statement 1)",
          "Val = (condition):(Statement 1)?(Statement 2)",
          "Val = (condition):(Statement 2)?(Statement 1)",
        ],
        correctAnswer: "Val = (condition)?(Statement 1):(Statement 2)",
      },
      {
        id: 13,
        question:
          "What is the purpose of calling dht.begin(); in the setup() function?",
        options: [
          "To initialize the Serial Monitor",
          "To start communication with the DHT sensor",
          "To set the temperature and humidity values to zero",
          "To define the data pin for the sensor",
        ],
        correctAnswer: "To start communication with the DHT sensor",
      },
      {
        id: 14,
        question:
          "What function is used to read the humidity value from the DHT sensor?",
        options: [
          "dht.getHumidity();",
          "dht.readTemp();",
          "dht.readHumidity();",
          "dht.getTemperature();",
        ],
        correctAnswer: "dht.readHumidity();",
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
      },
    ],
  },

  {
    id: "quiz6",
    title: "Introduction to Internet of Things - Assignment 6",
    questions: [
      {
        id: 1,
        question:
          "State True or False. Statement: “Python is popular for embedded application development as it is a very lightweight programming language.”",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        id: 2,
        question:
          "State True or False. Adafruit provides a library to work with DHT22 Sensor.",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        id: 3,
        question:
          "Consider the following piece of Python code. What is the output?\nx = [4, 5, 6]\ny = [str(x[0] + 1), str(len(x) * 2) + '&Code']\nz = y[1].split('&')\nprint(z[1])",
        options: ["5", "12", "Code", "&Code"],
        correctAnswer: "Code",
      },
      {
        id: 4,
        question:
          "State True or False. Statement: “To indicate different blocks of code, Python follows rigid indentation.”",
        options: ["True", "False"],
        correctAnswer: "True",
      },
      {
        id: 5,
        question:
          "What is the output of the following line of code in Python?\n>>> print “Hi, Welcome to python!”",
        options: [
          "Hi, Welcome to python!",
          "“Hi, Welcome to python!”",
          "Hi, Welcome to python",
          "None of these",
        ],
        correctAnswer: "Hi, Welcome to python!",
      },
      {
        id: 6,
        question:
          "During remote server access by a Raspberry Pi, where the Raspberry Pi acts as a client, the client needs the following?",
        options: [
          "Only IP address of server",
          "Only port number",
          "Both server IP address and port number",
          "Client’s IP address",
        ],
        correctAnswer: "Both server IP address and port number",
      },
      {
        id: 7,
        question:
          "State whether the following command to install the PIL library is correct or not.\nsudo pip install pillow",
        options: ["Correct", "Incorrect"],
        correctAnswer: "Correct",
      },
      {
        id: 8,
        question:
          'What is the purpose of the  "w"  mode in the  open()  function in Python?',
        options: [
          "To read a file",
          "To write data to a file, overwriting existing content",
          "To append data to a file",
          "To open a file in read and write mode",
        ],
        correctAnswer: "To write data to a file, overwriting existing content",
      },
      {
        id: 9,
        question:
          'What will be the output of the given Python program when reading from the file?\nwith open("PythonProgram.txt", "w") as file:\nfile.write("Writing data") \nwith open("PythonProgram.txt", "r") as file: \nf = file.read() print(\'Reading from the file\\n\') print(f)',
        options: [
          "Writing data",
          "Reading from the file \n        Writing data",
          "Error: File not found",
          "None of the above",
        ],
        correctAnswer: "Reading from the file \n        Writing data",
      },
      {
        id: 10,
        question: "Can we configure Raspberry Pi as a File Server?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
      },
      {
        id: 11,
        question:
          "Which command is used to configure the Raspberry Pi for the camera module?",
        options: [
          "sudo camera-config",
          "sudo raspi-config",
          "sudo enable-camera",
          "sudo pi-setup",
        ],
        correctAnswer: "sudo raspi-config",
      },
      {
        id: 12,
        question:
          "What is the final step after enabling the camera in the Raspberry Pi configuration?",
        options: [
          "Restart the camera service",
          "Run a camera test command",
          "Reboot the Raspberry Pi",
          "Reinstall the Raspberry Pi OS",
        ],
        correctAnswer: "Reboot the Raspberry Pi",
      },
      {
        id: 13,
        question: "Which command Exits the nano editor?",
        options: ["Ctrl + X", "Ctrl + O", "Ctrl + K", "None of these"],
        correctAnswer: "Ctrl + X",
      },
      {
        id: 14,
        question:
          "In a temperature-controlled fan system using a relay, when should the fan turn on?",
        options: [
          "When the relay is manually triggered",
          "When the surrounding temperature is lower than a predefined threshold",
          "When the surrounding temperature exceeds a predefined threshold",
          "When the battery voltage drops below a certain level",
        ],
        correctAnswer:
          "When the surrounding temperature exceeds a predefined threshold",
      },
      {
        id: 15,
        question:
          "What does the following line of code do?\nraspistillcapture -o image.jpg",
        options: [
          "Captures video feed",
          "Captures still image",
          "Both (a) and (b)",
          "None of these",
        ],
        correctAnswer: "None of these",
      },
    ],
  },
];
