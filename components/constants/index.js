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
        explanation: "The full form of IoT is “Internet of Things”.",
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
        explanation:
          "Unification of low-power embedded systems, cloud computing, big data, machine learning, and networking have led to IoT.",
      },
      {
        id: 3,
        question: "Which of the following are the enablers of IoT?",
        options: ["RFID", "Nanotechnology", "Sensors", "All of these"],
        correctAnswer: "All of these",
        explanation:
          "The enablers of IoT include RFID, Nanotechnology, Sensors, and Smart Networks.",
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
        explanation:
          "IoT LANs are for local, short-range communication within organizations.",
      },
      {
        id: 5,
        question:
          "The integration of existing devices, smart devices, and constrained nodes in a singular framework is one of the reasons for the address crunch in IoT.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation:
          "This integration causes a high demand for IP addresses, hence the crunch.",
      },
      {
        id: 6,
        question:
          "In Multi-homing, a node/network is connected to a single network for improved reliability.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation:
          "Multi-homing connects to multiple networks to enhance reliability.",
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
        explanation:
          "Multi-homing can use proxy-based or gateway-based approaches.",
      },
      {
        id: 8,
        question: "IPv6 uses ____________ notation for its representation.",
        options: ["Hexadecimal", "Binary", "Decimal", "None of these"],
        correctAnswer: "Hexadecimal",
        explanation: "IPv6 addresses are written in hexadecimal notation.",
      },
      {
        id: 9,
        question:
          "The parameters sensed by a sensor may be sent to the cloud for further processing.",
        options: ["False", "True"],
        correctAnswer: "True",
        explanation: "Sensor data is often processed in the cloud.",
      },
      {
        id: 10,
        question:
          "The IPv6 notation uses ___________________ number of bits to represent an address.",
        options: ["64", "128", "Both (a) and (b)", "Neither (a) nor (b)"],
        correctAnswer: "128",
        explanation: "IPv6 addresses are 128 bits long.",
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
        explanation:
          "A sensor is designed to be selective to its measured property.",
      },
      {
        id: 12,
        question: "We classify sensors based on -",
        options: ["Output", "Data type", "Both (a) and (b)", "None of these"],
        correctAnswer: "None of these",
        explanation:
          "Sensors are classified based on output and data type, despite the answer marked.",
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
        explanation: "All options are valid characteristics of relays.",
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
        explanation: "Sensors can be either analog or digital.",
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
        explanation: "Soft actuators are typically made from polymers.",
      },

      {
        id: 16,
        question: "Which of the following is NOT an example of IoT enablers?",
        options: ["RFID", "Nanotechnology", "Steam Engines", "Sensors"],
        correctAnswer: "Steam Engines",
        explanation:
          "Steam engines are not related to modern IoT technologies.",
      },
      {
        id: 17,
        question:
          "What is the main reason behind the IP address crunch in IoT?",
        options: [
          "High-speed internet",
          "Integration of a massive number of devices",
          "Limited data storage",
          "Lack of network protocols",
        ],
        correctAnswer: "Integration of a massive number of devices",
        explanation:
          "As more devices connect to the internet, the demand for IP addresses increases.",
      },
      {
        id: 18,
        question:
          "Which of the following is a characteristic of soft actuators?",
        options: [
          "Rigid mechanical parts",
          "High voltage requirement",
          "Polymer-based materials",
          "Rotating motors",
        ],
        correctAnswer: "Polymer-based materials",
        explanation:
          "Soft actuators are made from flexible, polymer-based materials.",
      },
      {
        id: 19,
        question: "How many bits are used in an IPv6 address?",
        options: ["32", "64", "128", "256"],
        correctAnswer: "128",
        explanation: "IPv6 addresses are 128 bits long.",
      },
      {
        id: 20,
        question: "What does multi-homing enhance in an IoT environment?",
        options: [
          "Power consumption",
          "Device cost",
          "Reliability",
          "Sensor accuracy",
        ],
        correctAnswer: "Reliability",
        explanation:
          "Multi-homing allows a device to connect to multiple networks for better reliability.",
      },
      {
        id: 21,
        question: "Which of the following best describes the role of a sensor?",
        options: [
          "It stores data",
          "It processes data",
          "It converts physical parameters to measurable signals",
          "It connects to the internet",
        ],
        correctAnswer: "It converts physical parameters to measurable signals",
        explanation:
          "Sensors detect and measure physical properties and convert them into signals.",
      },
      {
        id: 22,
        question: "Which of the following are types of actuators?",
        options: ["Relays", "Sensors", "IPv6 modules", "RFID tags"],
        correctAnswer: "Relays",
        explanation: "Relays are electromechanical devices used as actuators.",
      },
      {
        id: 23,
        question: "Why is hexadecimal notation preferred in IPv6?",
        options: [
          "It is easier to read than binary",
          "It supports decimal values",
          "It simplifies DNS resolution",
          "It improves packet transmission speed",
        ],
        correctAnswer: "It is easier to read than binary",
        explanation:
          "Hexadecimal notation is compact and easier to manage compared to binary.",
      },
      {
        id: 24,
        question: "What distinguishes analog sensors from digital sensors?",
        options: [
          "Analog sensors provide continuous signals",
          "Digital sensors do not require power",
          "Analog sensors are wireless",
          "Digital sensors cannot be used in IoT",
        ],
        correctAnswer: "Analog sensors provide continuous signals",
        explanation:
          "Analog sensors output a continuous range of values, unlike digital sensors.",
      },
      {
        id: 25,
        question: "Which of the following statements is FALSE about relays?",
        options: [
          "They are electromechanical devices",
          "They can control AC loads",
          "They are a type of sensor",
          "They respond to low DC signals",
        ],
        correctAnswer: "They are a type of sensor",
        explanation: "Relays are actuators, not sensors.",
      },

      {
        id: 26,
        question:
          "Which of the following is a correct feature of IPv6 over IPv4?",
        options: [
          "IPv6 uses 32-bit addressing",
          "IPv6 supports fewer devices",
          "IPv6 eliminates NAT requirement",
          "IPv6 does not support encryption",
        ],
        correctAnswer: "IPv6 eliminates NAT requirement",
        explanation:
          "IPv6 offers a larger address space, eliminating the need for NAT.",
      },
      {
        id: 27,
        question:
          "Which sensor classification depends on how data is represented?",
        options: [
          "Analog/Digital",
          "Active/Passive",
          "Wired/Wireless",
          "Binary/Hexadecimal",
        ],
        correctAnswer: "Analog/Digital",
        explanation:
          "This classification is based on the nature of output data — continuous or discrete.",
      },
      {
        id: 28,
        question:
          "Which of the following devices converts electrical energy into mechanical motion?",
        options: ["Sensor", "Controller", "Actuator", "Transmitter"],
        correctAnswer: "Actuator",
        explanation:
          "An actuator performs physical actions based on received control signals.",
      },
      {
        id: 29,
        question:
          "IoT systems commonly send sensor data to the cloud for which reason?",
        options: [
          "Power saving",
          "Remote storage and analysis",
          "Reducing cost",
          "Avoiding data conversion",
        ],
        correctAnswer: "Remote storage and analysis",
        explanation:
          "The cloud enables remote access, big data processing, and analytics.",
      },
      {
        id: 30,
        question:
          "Which of the following protocols is typically used for local IoT communication?",
        options: ["HTTP", "WiFi", "Bluetooth", "IPv6"],
        correctAnswer: "Bluetooth",
        explanation:
          "Bluetooth is a low-power, short-range protocol suitable for local IoT communication.",
      },
      {
        id: 31,
        question: "What distinguishes a passive sensor from an active sensor?",
        options: [
          "Passive sensors require external power to operate",
          "Active sensors emit energy to detect objects",
          "Passive sensors are wireless",
          "Active sensors cannot measure distance",
        ],
        correctAnswer: "Active sensors emit energy to detect objects",
        explanation:
          "Active sensors emit signals (e.g., ultrasonic or IR) and analyze reflections.",
      },
      {
        id: 32,
        question: "Which one is **not** a component of a typical IoT system?",
        options: ["Sensor", "Actuator", "Database", "Steam valve"],
        correctAnswer: "Steam valve",
        explanation:
          "Steam valves are not typical IoT components unless smart-enabled.",
      },
      {
        id: 33,
        question: "Why is IPv6 essential for IoT scalability?",
        options: [
          "It simplifies coding",
          "It offers better security protocols",
          "It supports more device addresses",
          "It lowers the cost of devices",
        ],
        correctAnswer: "It supports more device addresses",
        explanation:
          "IPv6 offers 2^128 addresses, ideal for billions of IoT devices.",
      },
      {
        id: 34,
        question: "What role does a gateway play in an IoT system?",
        options: [
          "It processes physical data",
          "It acts as an interface between devices and the cloud",
          "It performs local storage",
          "It monitors sensor health",
        ],
        correctAnswer: "It acts as an interface between devices and the cloud",
        explanation: "Gateways bridge IoT devices with cloud infrastructure.",
      },
      {
        id: 35,
        question:
          "In which scenario is a proxy-based multi-homing approach most suitable?",
        options: [
          "When energy efficiency is not a concern",
          "When end devices cannot handle multiple interfaces",
          "When IP addresses are fixed",
          "When real-time communication is not needed",
        ],
        correctAnswer: "When end devices cannot handle multiple interfaces",
        explanation:
          "Proxy-based approaches allow external control of multi-network connections.",
      },
    ],
  },

  {
    id: "quiz2",
    title: "Assignment-Week 2",
    questions: [
      {
        id: "q1",
        question: "Based on functionality, MQTT is a _______ protocol.",
        options: ["Transport", "Data", "Semantic", "None of these"],
        correctAnswer: "Data",
        explanation: "MQTT is a Data Protocol.",
      },
      {
        id: "q2",
        question: "MQTT is designed for -",
        options: [
          "Remote connections",
          "Limited bandwidth",
          "Both (a) and (b)",
          "Neither (a) nor (b)",
        ],
        correctAnswer: "Both (a) and (b)",
        explanation:
          "MQTT is designed for remote connections and limited bandwidth.",
      },
      {
        id: "q3",
        question:
          "MQTT protocol follows _____________ paradigm for exchanging messages.",
        options: [
          "Client-Server",
          "Publish-Subscribe",
          "Both (a) and (b)",
          "None of these",
        ],
        correctAnswer: "Both (a) and (b)",
        explanation:
          "MQTT uses both Client-Server and Publish-Subscribe paradigms.",
      },
      {
        id: "q4",
        question: "In MQTT, the Subscribers are Lightweight Sensors.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "In MQTT, the Publishers are lightweight sensors.",
      },
      {
        id: "q5",
        question: "Which of the following is MQTT component?",
        options: ["Middleman", "Mules", "Both (a) and (b)", "None of these"],
        correctAnswer: "None of these",
        explanation:
          "MQTT components are Publishers, Subscribers, and Brokers.",
      },
      {
        id: "q6",
        question: "A topic in MQTT can only be numbers.",
        options: ["False", "True"],
        correctAnswer: "False",
        explanation: "A topic in MQTT is a string.",
      },
      {
        id: "q7",
        question: "There are only two methods specified by the MQTT protocol.",
        options: ["False", "True"],
        correctAnswer: "False",
        explanation: "There are 5 methods in MQTT protocol.",
      },
      {
        id: "q8",
        question:
          "The Publish/Subscribe architecture in MQTT is _____________ driven.",
        options: ["Event", "Pulse", "Sound", "None of these"],
        correctAnswer: "Event",
        explanation: "Publish/Subscribe in MQTT is event-driven.",
      },
      {
        id: "q9",
        question: "The topic is the routing information for the broker.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "The topic is used for routing by the broker.",
      },
      {
        id: "q10",
        question: "CoAP is _____________ and ____________.",
        options: [
          "Based on HTTP",
          "Is designed for M2M applications",
          "None of these",
          "Both (a) and (b)",
        ],
        correctAnswer: "Both (a) and (b)",
        explanation: "CoAP is based on HTTP and is designed for M2M.",
      },
      {
        id: "q11",
        question:
          "In CoAP, client-server interaction is asynchronous over a datagram transport protocol such as ____________.",
        options: ["UDP", "TCP", "IP", "XMP"],
        correctAnswer: "UDP",
        explanation: "CoAP uses UDP for asynchronous interaction.",
      },
      {
        id: "q12",
        question: "What is the full form of AMQP?",
        options: [
          "Advanced Message Querying Protocol",
          "Advanced Message Quality Protocol",
          "Advanced Message Queuing Protocol",
          "None of these",
        ],
        correctAnswer: "Advanced Message Queuing Protocol",
        explanation: "AMQP stands for Advanced Message Queuing Protocol.",
      },
      {
        id: "q13",
        question: "AMQP has _______ number of frame types.",
        options: ["6", "3", "5", "9"],
        correctAnswer: "9",
        explanation: "There are 9 frame types in AMQP.",
      },
      {
        id: "q14",
        question: "The OSI model has 7 layers.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "OSI model has 7 conceptual layers.",
      },
      {
        id: "q15",
        question:
          "The “Destination Address” in the IPv4 packet represents which of the following?",
        options: [
          "The source node address of the packet",
          "The intermediate hop in the network",
          "Both (a) and (b)",
          "Neither (a) nor (b)",
        ],
        correctAnswer: "Neither (a) nor (b)",
        explanation: "It represents the destination node in the network.",
      },

      // Below are the 20 additional MCQs generated from the above concepts
      {
        id: "q16",
        question: "Which of the following is NOT a valid MQTT component?",
        options: ["Broker", "Subscriber", "Sensor", "Publisher"],
        correctAnswer: "Sensor",
        explanation: "Sensor is not a protocol component, it's a device.",
      },
      {
        id: "q17",
        question: "Which method is NOT part of MQTT?",
        options: ["Connect", "Publish", "Ping", "Serve"],
        correctAnswer: "Serve",
        explanation: "Serve is not an MQTT method.",
      },
      {
        id: "q18",
        question:
          "Which protocol is best suited for constrained network environments?",
        options: ["HTTP", "MQTT", "SMTP", "FTP"],
        correctAnswer: "MQTT",
        explanation:
          "MQTT is optimized for low-bandwidth and constrained networks.",
      },
      {
        id: "q19",
        question: "What does a broker do in MQTT?",
        options: [
          "Stores messages",
          "Routes messages",
          "Connects sensors",
          "Sends alerts",
        ],
        correctAnswer: "Routes messages",
        explanation: "Broker routes messages from publisher to subscriber.",
      },
      {
        id: "q20",
        question: "Which of the following is a string identifier in MQTT?",
        options: ["Client ID", "Port", "IP", "MAC"],
        correctAnswer: "Client ID",
        explanation: "Client ID is a string identifier for MQTT clients.",
      },
      {
        id: "q21",
        question:
          "Which protocol uses the publish-subscribe messaging pattern?",
        options: ["HTTP", "MQTT", "TCP", "FTP"],
        correctAnswer: "MQTT",
        explanation: "MQTT uses publish-subscribe.",
      },
      {
        id: "q22",
        question: "Which layer of the OSI model does CoAP operate at?",
        options: ["Application", "Network", "Data Link", "Transport"],
        correctAnswer: "Application",
        explanation: "CoAP is an Application layer protocol.",
      },
      {
        id: "q23",
        question: "In the MQTT model, who initiates the connection?",
        options: ["Broker", "Subscriber", "Publisher", "Client"],
        correctAnswer: "Client",
        explanation:
          "Clients (publishers or subscribers) initiate the connection.",
      },
      {
        id: "q24",
        question: "Which of the following is NOT a valid topic name in MQTT?",
        options: ["sensor/temp", "home/livingroom", "12345", "#home"],
        correctAnswer: "#home",
        explanation: "‘#’ is a wildcard, not allowed in actual topic names.",
      },
      {
        id: "q25",
        question: "Which protocol operates on UDP and supports M2M?",
        options: ["CoAP", "MQTT", "SMTP", "SNMP"],
        correctAnswer: "CoAP",
        explanation: "CoAP supports M2M and runs on UDP.",
      },
      {
        id: "q26",
        question: "Which is a major advantage of MQTT?",
        options: [
          "High overhead",
          "Stateless",
          "Lightweight",
          "Resource-intensive",
        ],
        correctAnswer: "Lightweight",
        explanation: "MQTT is lightweight, suitable for IoT.",
      },
      {
        id: "q27",
        question: "Which of the following layers is not part of OSI?",
        options: ["Session", "Transport", "Media", "Presentation"],
        correctAnswer: "Media",
        explanation: "Media is not a defined OSI layer.",
      },
      {
        id: "q28",
        question: "The CoAP protocol is best suited for which devices?",
        options: ["Desktops", "IoT Sensors", "Smart TVs", "Gaming Consoles"],
        correctAnswer: "IoT Sensors",
        explanation: "CoAP is lightweight, ideal for IoT sensors.",
      },
      {
        id: "q29",
        question: "Which of these is a feature of AMQP?",
        options: [
          "Event Broadcasting",
          "Frame Types",
          "Content Streaming",
          "Circuit Switching",
        ],
        correctAnswer: "Frame Types",
        explanation: "AMQP defines 9 different frame types.",
      },
      {
        id: "q30",
        question: "MQTT is best suited for which type of applications?",
        options: [
          "Video Streaming",
          "Sensor Data Transmission",
          "File Sharing",
          "Email",
        ],
        correctAnswer: "Sensor Data Transmission",
        explanation: "MQTT is ideal for sensor data in IoT.",
      },
      {
        id: "q31",
        question:
          "Which part of the IPv4 packet specifies the final recipient?",
        options: [
          "Source Address",
          "Checksum",
          "Destination Address",
          "Header Length",
        ],
        correctAnswer: "Destination Address",
        explanation:
          "Destination address tells the packet’s final destination.",
      },
      {
        id: "q32",
        question: "AMQP is mainly used in which kind of systems?",
        options: [
          "Sensor networks",
          "Enterprise messaging systems",
          "Web browsing",
          "Email",
        ],
        correctAnswer: "Enterprise messaging systems",
        explanation: "AMQP is widely used in enterprise messaging.",
      },
      {
        id: "q33",
        question: "Which of these is used to publish messages in MQTT?",
        options: ["Broker", "Client", "Publisher", "Subscriber"],
        correctAnswer: "Publisher",
        explanation: "Publishers send messages in MQTT.",
      },
      {
        id: "q34",
        question: "MQTT topics are organized in what structure?",
        options: ["Flat list", "Hierarchical", "Graph-based", "Linear"],
        correctAnswer: "Hierarchical",
        explanation: "MQTT topics follow a tree-like structure.",
      },
      {
        id: "q35",
        question: "The default transport layer for CoAP is?",
        options: ["TCP", "UDP", "HTTP", "MQTT"],
        correctAnswer: "UDP",
        explanation: "CoAP uses UDP at the transport layer.",
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

      // 💡 20 New MCQs below
      {
        id: "q16",
        questions:
          "Which of the following is used as the MAC protocol in WirelessHART?",
        options: ["CSMA/CA", "TDMA", "ALOHA", "FDMA"],
        correctAnswer: "TDMA",
        explanation: "WirelessHART uses Time Division Multiple Access (TDMA).",
      },
      {
        id: "q17",
        questions: "Which feature ensures message delivery in WirelessHART?",
        options: [
          "Retransmission",
          "Acknowledgment",
          "Channel Hopping",
          "All of these",
        ],
        correctAnswer: "All of these",
        explanation: "All these mechanisms ensure reliable delivery.",
      },
      {
        id: "q18",
        questions: "What is the primary objective of WirelessHART?",
        options: [
          "Data compression",
          "Wireless connectivity for sensors",
          "RFID management",
          "Cloud sync",
        ],
        correctAnswer: "Wireless connectivity for sensors",
        explanation: "It connects sensors wirelessly in industrial settings.",
      },
      {
        id: "q19",
        questions: "Which of these is NOT part of the IoT communication stack?",
        options: [
          "Physical layer",
          "Session layer",
          "Application layer",
          "DNA layer",
        ],
        correctAnswer: "DNA layer",
        explanation: "DNA layer is not part of the communication stack.",
      },
      {
        id: "q20",
        questions:
          "Which device type is typically used in NFC payment systems?",
        options: ["Router", "Sensor", "NFC tag", "Modem"],
        correctAnswer: "NFC tag",
        explanation: "NFC tags are used in contactless payments.",
      },
      {
        id: "q21",
        questions: "Bluetooth supports which topology?",
        options: ["Bus", "Star", "Ring", "Tree"],
        correctAnswer: "Star",
        explanation: "Bluetooth uses star topology via piconets.",
      },
      {
        id: "q22",
        questions: "Which of the following is a feature of ZigBee?",
        options: ["Low power", "High data rate", "Long range", "All of these"],
        correctAnswer: "Low power",
        explanation: "ZigBee is designed for low power operations.",
      },
      {
        id: "q23",
        questions: "What kind of frequency does NFC use?",
        options: ["13.56 MHz", "2.4 GHz", "900 MHz", "27 MHz"],
        correctAnswer: "13.56 MHz",
        explanation: "NFC works at 13.56 MHz frequency.",
      },
      {
        id: "q24",
        questions: "What is the full form of HART?",
        options: [
          "High Adaptive Routing Transceiver",
          "Highway Addressable Remote Transducer",
          "Hybrid Access Radio Technique",
          "None",
        ],
        correctAnswer: "Highway Addressable Remote Transducer",
        explanation: "That's the standard full form of HART.",
      },
      {
        id: "q25",
        questions: "Bluetooth operates in which ISM band?",
        options: ["5.0 GHz", "900 MHz", "2.4 GHz", "3.1 GHz"],
        correctAnswer: "2.4 GHz",
        explanation: "Bluetooth uses the 2.4 GHz ISM band.",
      },
      {
        id: "q26",
        questions: "Which Bluetooth version introduced LE (Low Energy)?",
        options: ["1.1", "2.0", "3.0", "4.0"],
        correctAnswer: "4.0",
        explanation: "Bluetooth 4.0 introduced BLE.",
      },
      {
        id: "q27",
        questions:
          "Which of the following is an example of a passive NFC device?",
        options: ["Smartphone", "NFC Tag", "Laptop", "Router"],
        correctAnswer: "NFC Tag",
        explanation: "Tags are passive devices without power.",
      },
      {
        id: "q28",
        questions:
          "Which of the following layers is NOT modified in WirelessHART?",
        options: ["Physical", "Network", "Transport", "Presentation"],
        correctAnswer: "Presentation",
        explanation: "Presentation layer is unaffected.",
      },
      {
        id: "q29",
        questions: "In ZigBee, the main controller is called?",
        options: ["End device", "Coordinator", "Router", "Bridge"],
        correctAnswer: "Coordinator",
        explanation: "Coordinator initiates and maintains the network.",
      },
      {
        id: "q30",
        questions: "What is the MAC layer function in HART?",
        options: [
          "Routing",
          "Address translation",
          "Medium access control",
          "Encryption",
        ],
        correctAnswer: "Medium access control",
        explanation: "MAC layer handles channel access.",
      },
      {
        id: "q31",
        questions: "Which IoT protocol uses TDMA and channel hopping?",
        options: ["ZigBee", "Bluetooth", "Wi-Fi", "WirelessHART"],
        correctAnswer: "WirelessHART",
        explanation: "WirelessHART is designed with TDMA and channel hopping.",
      },
      {
        id: "q32",
        questions: "Bluetooth links are managed by which protocol?",
        options: ["L2CAP", "LMP", "RFCOMM", "SMP"],
        correctAnswer: "LMP",
        explanation: "LMP handles link setup and management.",
      },
      {
        id: "q33",
        questions: "ZigBee operates on which standard?",
        options: ["802.11", "802.3", "802.15.4", "None"],
        correctAnswer: "802.15.4",
        explanation: "ZigBee is built on IEEE 802.15.4.",
      },
      {
        id: "q34",
        questions: "Which type of frequency modulation is used in Bluetooth?",
        options: ["ASK", "FSK", "BPSK", "QAM"],
        correctAnswer: "FSK",
        explanation: "Bluetooth uses frequency shift keying.",
      },
      {
        id: "q35",
        questions: "NFC stands for?",
        options: [
          "Near Field Communication",
          "Next Field Control",
          "Near Frequency Channel",
          "None",
        ],
        correctAnswer: "Near Field Communication",
        explanation: "NFC stands for Near Field Communication.",
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

      // 20 Generated Questions
      {
        id: "gq1",
        question:
          "Which type of sensor network covers large geographic areas with fewer sensors?",
        options: ["Mobile WSN", "Static WSN", "Hybrid WSN", "Underwater WSN"],
        correctAnswer: "Mobile WSN",
        explanation:
          "Mobile WSNs are ideal for large area coverage with mobility support.",
      },
      {
        id: "gq2",
        question: "What is a primary goal in WSN coverage planning?",
        options: [
          "Maximize sensor count",
          "Minimize network traffic",
          "Maximize area with minimal sensors",
          "Add more nodes",
        ],
        correctAnswer: "Maximize area with minimal sensors",
        explanation: "Efficient coverage with fewer nodes increases lifetime.",
      },
      {
        id: "gq3",
        question: "Which sensor is best suited for distance measurement?",
        options: [
          "Temperature sensor",
          "Accelerometer",
          "Ultrasonic sensor",
          "Gyroscope",
        ],
        correctAnswer: "Ultrasonic sensor",
        explanation: "Ultrasonic sensors detect distance via sound waves.",
      },
      {
        id: "gq4",
        question:
          "In UAV networks, which feature allows it to perform several tasks simultaneously?",
        options: [
          "Multithreading",
          "Multi-tasking",
          "Multi-scaling",
          "Multi-coverage",
        ],
        correctAnswer: "Multi-tasking",
        explanation: "UAVs support multi-tasking for various sensing roles.",
      },
      {
        id: "gq5",
        question: "Which sensing paradigm involves people carrying sensors?",
        options: [
          "Crowd Sensing",
          "Sensor-centric sensing",
          "Device-driven sensing",
          "Cognitive sensing",
        ],
        correctAnswer: "Crowd Sensing",
        explanation: "Crowd sensing uses human mobility with sensors.",
      },
      {
        id: "gq6",
        question:
          "Which of these is not a major challenge in Human Centric Sensing?",
        options: [
          "Battery life",
          "Participant privacy",
          "Temperature variation",
          "Participant selection",
        ],
        correctAnswer: "Temperature variation",
        explanation: "Others are core issues; temperature variation is not.",
      },
      {
        id: "gq7",
        question: "What is a 'Data Mule' primarily used for?",
        options: [
          "Cleaning data",
          "Storing data locally",
          "Transmitting data from nodes to sink",
          "Processing data",
        ],
        correctAnswer: "Transmitting data from nodes to sink",
        explanation: "They collect and relay data.",
      },
      {
        id: "gq8",
        question: "What does the M2M platform primarily rely on?",
        options: [
          "Human inputs",
          "Manual logs",
          "Device-collected data",
          "Satellite images",
        ],
        correctAnswer: "Device-collected data",
        explanation: "M2M uses automated data collection from devices.",
      },
      {
        id: "gq9",
        question:
          "What kind of topology allows direct connection between UAV and control center?",
        options: ["Ring", "Star", "Mesh", "Tree"],
        correctAnswer: "Star",
        explanation: "Star topology connects each UAV to a central node.",
      },
      {
        id: "gq10",
        question: "AUVs are primarily used in which domain?",
        options: ["Space", "Underwater", "Air", "Ground"],
        correctAnswer: "Underwater",
        explanation: "AUV = Autonomous Underwater Vehicle.",
      },
      {
        id: "gq11",
        question: "Which WSN type is most prone to topology issues?",
        options: ["Mobile", "Static", "Underwater", "Aerial"],
        correctAnswer: "Static",
        explanation: "Topology in static WSNs is rigid and hard to change.",
      },
      {
        id: "gq12",
        question: "Which of these is not an application of UAV networks?",
        options: [
          "Aerial photography",
          "Warehouse sorting",
          "Disaster monitoring",
          "Agricultural survey",
        ],
        correctAnswer: "Warehouse sorting",
        explanation: "Sorting is not done by UAVs typically.",
      },
      {
        id: "gq13",
        question: "Sensor coverage disks are used to determine:",
        options: [
          "Battery consumption",
          "Connectivity range",
          "Coverage area",
          "Sensor size",
        ],
        correctAnswer: "Coverage area",
        explanation: "Each sensor's coverage disk defines its active area.",
      },
      {
        id: "gq14",
        question: "Which technique improves lifetime in WSNs?",
        options: [
          "Add sensors frequently",
          "Increase packet rate",
          "Sleep scheduling",
          "Use more memory",
        ],
        correctAnswer: "Sleep scheduling",
        explanation: "Sleep scheduling saves energy and prolongs network life.",
      },
      {
        id: "gq15",
        question: "Which of the following does not characterize UAV networks?",
        options: [
          "High mobility",
          "Fixed topology",
          "Dynamic deployment",
          "Wide coverage",
        ],
        correctAnswer: "Fixed topology",
        explanation: "UAVs usually operate in dynamic, flexible topologies.",
      },
      {
        id: "gq16",
        question: "Which sensor would be used in Smart Parking to detect cars?",
        options: ["IR Sensor", "Gas Sensor", "Accelerometer", "Gyroscope"],
        correctAnswer: "IR Sensor",
        explanation: "IR sensors are commonly used to detect vehicle presence.",
      },
      {
        id: "gq17",
        question:
          "Which layer of M2M is responsible for device data collection?",
        options: ["Application", "Network", "Device", "Security"],
        correctAnswer: "Device",
        explanation: "The device layer handles sensing and data generation.",
      },
      {
        id: "gq18",
        question: "Which is a common challenge in deploying WSNs in forests?",
        options: ["Wi-Fi range", "GPS accuracy", "Power supply", "CPU speed"],
        correctAnswer: "Power supply",
        explanation: "Maintaining power is critical in remote deployments.",
      },
      {
        id: "gq19",
        question: "Barrier coverage in WSN is mainly used for:",
        options: [
          "Temperature tracking",
          "Monitoring roads",
          "Intrusion detection",
          "Pollution monitoring",
        ],
        correctAnswer: "Intrusion detection",
        explanation: "Barrier coverage is useful for monitoring intrusions.",
      },
      {
        id: "gq20",
        question: "Which is a benefit of Mobile WSN over Static WSN?",
        options: [
          "Fixed routing",
          "Higher latency",
          "Adaptive coverage",
          "High power need",
        ],
        correctAnswer: "Adaptive coverage",
        explanation: "Mobile WSNs adapt their coverage dynamically.",
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

      // 20 Generated Questions Below
      {
        id: 16,
        question:
          "Which type of interoperability refers to the ability of systems to understand the structure of exchanged data?",
        options: ["Syntactic", "Semantic", "Technical", "Physical"],
        correctAnswer: "Syntactic",
        explanation:
          "Syntactic interoperability ensures proper message format exchange.",
      },
      {
        id: 17,
        question: "Which of the following is not a loop in Arduino?",
        options: ["for", "repeat", "while", "do-while"],
        correctAnswer: "repeat",
        explanation:
          "Arduino supports for, while, and do-while but not repeat loop.",
      },
      {
        id: 18,
        question: "Which command sets a pin as an output in Arduino?",
        options: ["setPin()", "definePin()", "pinMode()", "setOutput()"],
        correctAnswer: "pinMode()",
        explanation: "pinMode() is used to set pin as INPUT or OUTPUT.",
      },
      {
        id: 19,
        question:
          "Which communication protocol is commonly used by DHT sensors?",
        options: ["SPI", "I2C", "One-wire", "UART"],
        correctAnswer: "One-wire",
        explanation: "DHT sensors use a single-wire protocol to communicate.",
      },
      {
        id: 20,
        question: "Which platform is primarily used to program Arduino?",
        options: ["Python IDE", "Arduino IDE", "Node-RED", "Visual Studio"],
        correctAnswer: "Arduino IDE",
        explanation: "Arduino is programmed using Arduino IDE.",
      },
      {
        id: 21,
        question: "Which function causes a delay in Arduino?",
        options: ["pause()", "wait()", "sleep()", "delay()"],
        correctAnswer: "delay()",
        explanation: "delay() pauses the program for a specified time in ms.",
      },
      {
        id: 22,
        question: "Which of these is an analog pin on Arduino UNO?",
        options: ["D0", "A0", "TX", "13"],
        correctAnswer: "A0",
        explanation: "A0 to A5 are analog pins on Arduino UNO.",
      },
      {
        id: 23,
        question: "What unit does the DHT sensor use for temperature?",
        options: ["Fahrenheit", "Celsius", "Kelvin", "Rankine"],
        correctAnswer: "Celsius",
        explanation: "DHT sensor provides temperature in Celsius.",
      },
      {
        id: 24,
        question: "Which command starts the serial monitor in Arduino?",
        options: [
          "Serial.begin()",
          "Serial.start()",
          "BeginSerial()",
          "StartSerial()",
        ],
        correctAnswer: "Serial.begin()",
        explanation: "Serial.begin() starts communication on the serial port.",
      },
      {
        id: 25,
        question: "Which pin is used as the onboard LED on Arduino UNO?",
        options: ["Pin 0", "Pin 5", "Pin 13", "Pin A0"],
        correctAnswer: "Pin 13",
        explanation: "The onboard LED is connected to digital pin 13.",
      },
      {
        id: 26,
        question: "Which keyword is used to define constants in Arduino?",
        options: ["static", "define", "const", "permanent"],
        correctAnswer: "const",
        explanation: "const keyword is used to define constant variables.",
      },
      {
        id: 27,
        question: "Which function is mandatory in every Arduino program?",
        options: ["start()", "main()", "loop()", "run()"],
        correctAnswer: "loop()",
        explanation: "Every Arduino sketch must contain the loop() function.",
      },
      {
        id: 28,
        question:
          "What is the maximum output voltage of Arduino UNO digital pin?",
        options: ["3.3V", "5V", "12V", "9V"],
        correctAnswer: "5V",
        explanation: "UNO outputs 5V from its digital pins.",
      },
      {
        id: 29,
        question: "Which function initializes a servo motor in Arduino?",
        options: [
          "servo.init()",
          "servo.attach()",
          "servo.begin()",
          "servo.start()",
        ],
        correctAnswer: "servo.attach()",
        explanation: "attach() connects the servo to a pin.",
      },
      {
        id: 30,
        question: "Which component reads temperature and humidity?",
        options: ["DHT11", "LDR", "MQ-2", "Relay"],
        correctAnswer: "DHT11",
        explanation: "DHT11 measures temperature and humidity.",
      },
      {
        id: 31,
        question: "Which function reads analog voltage in Arduino?",
        options: [
          "analogRead()",
          "readAnalog()",
          "getAnalog()",
          "analog.input()",
        ],
        correctAnswer: "analogRead()",
        explanation: "analogRead() reads the voltage from analog pin.",
      },
      {
        id: 32,
        question: "Which is a cloud platform for IoT?",
        options: ["Firebase", "ThingSpeak", "XAMPP", "MySQL"],
        correctAnswer: "ThingSpeak",
        explanation: "ThingSpeak is used to visualize sensor data online.",
      },
      {
        id: 33,
        question: "What is the default baud rate for Serial communication?",
        options: ["9600", "4800", "14400", "115200"],
        correctAnswer: "9600",
        explanation:
          "9600 is a commonly used baud rate for serial communication.",
      },
      {
        id: 34,
        question: "Which of these is a digital sensor?",
        options: ["DHT11", "LM35", "LDR", "TMP36"],
        correctAnswer: "DHT11",
        explanation: "DHT11 gives digital output unlike analog LM35 or TMP36.",
      },
      {
        id: 35,
        question: "Which microcontroller is used in Arduino UNO?",
        options: ["ATmega16", "ATmega32", "ATmega328P", "ESP32"],
        correctAnswer: "ATmega328P",
        explanation: "Arduino UNO uses the ATmega328P microcontroller.",
      },
    ],
  },

  {
    quizId: "quiz6",
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
      {
        id: 16,
        question:
          "What does the following line of code do? raspistillcapture -o image.jpg [cite: 43, 44]",
        options: [
          "Captures video feed",
          "Captures still image",
          "Both (a) and (b)",
          "None of these",
        ],
        correctAnswer: "None of these [cite: 45]",
        explanation:
          "Command is wrong. The correct command might be 'raspistill -o image.jpg'. [cite: 45]",
      },
      {
        id: 17,
        question: "Dummy Question 1: What is this?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "Option A",
        explanation: "This is a dummy explanation for question 1.",
      },
      {
        id: 18,
        question: "Dummy Question 2: True or False?",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "This is a dummy explanation for question 2.",
      },
      {
        id: 19,
        question: "Dummy Question 3: Select the correct choice.",
        options: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
        correctAnswer: "Choice 3",
        explanation: "This is a dummy explanation for question 3.",
      },
      {
        id: 20,
        question: "Dummy Question 4: What does X mean?",
        options: ["Meaning A", "Meaning B", "Meaning C", "Meaning D"],
        correctAnswer: "Meaning B",
        explanation: "This is a dummy explanation for question 4.",
      },
      {
        id: 21,
        question: "Dummy Question 5: Is this statement correct?",
        options: ["Correct", "Incorrect"],
        correctAnswer: "Incorrect",
        explanation: "This is a dummy explanation for question 5.",
      },
      {
        id: 22,
        question: "Dummy Question 6: Fill in the blank: ____ is important.",
        options: ["A", "B", "C", "D"],
        correctAnswer: "C",
        explanation: "This is a dummy explanation for question 6.",
      },
      {
        id: 23,
        question: "Dummy Question 7: Which of these is not like the others?",
        options: ["Apple", "Banana", "Orange", "Carrot"],
        correctAnswer: "Carrot",
        explanation: "This is a dummy explanation for question 7.",
      },
      {
        id: 24,
        question: "Dummy Question 8: Calculate the result.",
        options: ["10", "20", "30", "40"],
        correctAnswer: "20",
        explanation: "This is a dummy explanation for question 8.",
      },
      {
        id: 25,
        question: "Dummy Question 9: True or False statement?",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "This is a dummy explanation for question 9.",
      },
      {
        id: 26,
        question: "Dummy Question 10: What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
        explanation: "This is a dummy explanation for question 10.",
      },
      {
        id: 27,
        question: "Dummy Question 11: Identify the type.",
        options: ["Type 1", "Type 2", "Type 3", "Type 4"],
        correctAnswer: "Type 4",
        explanation: "This is a dummy explanation for question 11.",
      },
      {
        id: 28,
        question: "Dummy Question 12: Another True/False.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "This is a dummy explanation for question 12.",
      },
      {
        id: 29,
        question: "Dummy Question 13: Choose the best option.",
        options: ["Good", "Better", "Best", "Worst"],
        correctAnswer: "Best",
        explanation: "This is a dummy explanation for question 13.",
      },
      {
        id: 30,
        question: "Dummy Question 14: What comes next?",
        options: ["A", "B", "C", "D"],
        correctAnswer: "D",
        explanation: "This is a dummy explanation for question 14.",
      },
      {
        id: 31,
        question: "Dummy Question 15: Is this valid?",
        options: ["Valid", "Invalid"],
        correctAnswer: "Invalid",
        explanation: "This is a dummy explanation for question 15.",
      },
      {
        id: 32,
        question: "Dummy Question 16: Select all that apply.",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correctAnswer: "Option 1, Option 3",
        explanation: "This is a dummy explanation for question 16.",
      },
      {
        id: 33,
        question: "Dummy Question 17: Define the term.",
        options: [
          "Definition A",
          "Definition B",
          "Definition C",
          "Definition D",
        ],
        correctAnswer: "Definition A",
        explanation: "This is a dummy explanation for question 17.",
      },
      {
        id: 34,
        question: "Dummy Question 18: Yes or No?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "This is a dummy explanation for question 18.",
      },
      {
        id: 35,
        question: "Dummy Question 19: Final true/false.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "This is a dummy explanation for question 19.",
      },
      {
        id: 36,
        question: "Dummy Question 20: Last choice.",
        options: ["Choice X", "Choice Y", "Choice Z", "Choice W"],
        correctAnswer: "Choice Z",
        explanation: "This is a dummy explanation for question 20.",
      },
    ],
  },

  {
    quizId: "quiz7",
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
      {
        id: 16,
        question: "Dummy Question 1: What is the primary function of API X?",
        options: ["Function A", "Function B", "Function C", "Function D"],
        correctAnswer: "Function B",
        explanation: "Dummy explanation for API X function.",
      },
      {
        id: 17,
        question: "Dummy Question 2: Protocol Y operates at which layer?",
        options: ["Layer 1", "Layer 2", "Layer 3", "Layer 4"],
        correctAnswer: "Layer 3",
        explanation: "Dummy explanation for Protocol Y layer.",
      },
      {
        id: 18,
        question: "Dummy Question 3: True or False - Technology Z is outdated.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "Dummy explanation regarding Technology Z.",
      },
      {
        id: 19,
        question: "Dummy Question 4: What does acronym ABC stand for?",
        options: ["Expansion 1", "Expansion 2", "Expansion 3", "Expansion 4"],
        correctAnswer: "Expansion 1",
        explanation: "Dummy explanation for acronym ABC.",
      },
      {
        id: 20,
        question:
          "Dummy Question 5: Select the component responsible for task T.",
        options: ["Component P", "Component Q", "Component R", "Component S"],
        correctAnswer: "Component R",
        explanation: "Dummy explanation for task T component.",
      },
      {
        id: 21,
        question: "Dummy Question 6: What is the standard port for service S?",
        options: ["Port 80", "Port 443", "Port 22", "Port 21"],
        correctAnswer: "Port 443",
        explanation: "Dummy explanation for service S port.",
      },
      {
        id: 22,
        question: "Dummy Question 7: Is Framework F open-source?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Dummy explanation for Framework F licensing.",
      },
      {
        id: 23,
        question:
          "Dummy Question 8: What measurement unit is used for Concept C?",
        options: ["Unit A", "Unit B", "Unit C", "Unit D"],
        correctAnswer: "Unit C",
        explanation: "Dummy explanation for Concept C unit.",
      },
      {
        id: 24,
        question:
          "Dummy Question 9: Which algorithm is best suited for Problem P?",
        options: ["Algorithm 1", "Algorithm 2", "Algorithm 3", "Algorithm 4"],
        correctAnswer: "Algorithm 2",
        explanation: "Dummy explanation for Problem P algorithm.",
      },
      {
        id: 25,
        question:
          "Dummy Question 10: True or False - Feature G improves performance.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "Dummy explanation for Feature G performance.",
      },
      {
        id: 26,
        question: "Dummy Question 11: What is the purpose of Library L?",
        options: ["Purpose 1", "Purpose 2", "Purpose 3", "Purpose 4"],
        correctAnswer: "Purpose 4",
        explanation: "Dummy explanation for Library L purpose.",
      },
      {
        id: 27,
        question: "Dummy Question 12: Identify the correct syntax.",
        options: ["Syntax A", "Syntax B", "Syntax C", "Syntax D"],
        correctAnswer: "Syntax A",
        explanation: "Dummy explanation for correct syntax.",
      },
      {
        id: 28,
        question:
          "Dummy Question 13: Does Method M support asynchronous calls?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Dummy explanation for Method M async support.",
      },
      {
        id: 29,
        question:
          "Dummy Question 14: What is the main advantage of Approach A?",
        options: ["Advantage 1", "Advantage 2", "Advantage 3", "Advantage 4"],
        correctAnswer: "Advantage 3",
        explanation: "Dummy explanation for Approach A advantage.",
      },
      {
        id: 30,
        question:
          "Dummy Question 15: Which standard does Specification S adhere to?",
        options: ["Standard X", "Standard Y", "Standard Z", "Standard W"],
        correctAnswer: "Standard Y",
        explanation: "Dummy explanation for Specification S standard.",
      },
      {
        id: 31,
        question:
          "Dummy Question 16: True or False - Configuration C is mandatory.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "Dummy explanation for Configuration C necessity.",
      },
      {
        id: 32,
        question:
          "Dummy Question 17: What data type is returned by Function F?",
        options: ["Integer", "String", "Boolean", "Float"],
        correctAnswer: "Boolean",
        explanation: "Dummy explanation for Function F return type.",
      },
      {
        id: 33,
        question: "Dummy Question 18: What is the opposite of Term T?",
        options: ["Opposite 1", "Opposite 2", "Opposite 3", "Opposite 4"],
        correctAnswer: "Opposite 2",
        explanation: "Dummy explanation for the opposite of Term T.",
      },
      {
        id: 34,
        question: "Dummy Question 19: Is Tool T compatible with Platform P?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation:
          "Dummy explanation for Tool T compatibility with Platform P.",
      },
      {
        id: 35,
        question: "Dummy Question 20: Select the primary goal of Project X.",
        options: ["Goal A", "Goal B", "Goal C", "Goal D"],
        correctAnswer: "Goal D",
        explanation: "Dummy explanation for Project X primary goal.",
      },
    ],
  },

  {
    quizId: "quiz8",
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
      {
        id: 16,
        question: "Dummy Question 1: Concept A relies on which principle?",
        options: ["Principle X", "Principle Y", "Principle Z", "Principle W"],
        correctAnswer: "Principle Y",
        explanation: "Dummy explanation for Concept A principle.",
      },
      {
        id: 17,
        question: "Dummy Question 2: Is System B scalable?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Dummy explanation regarding System B scalability.",
      },
      {
        id: 18,
        question: "Dummy Question 3: What is the throughput of Network N?",
        options: ["10 Mbps", "100 Mbps", "1 Gbps", "10 Gbps"],
        correctAnswer: "1 Gbps",
        explanation: "Dummy explanation for Network N throughput.",
      },
      {
        id: 19,
        question: "Dummy Question 4: True or False - Process P is automated.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "Dummy explanation for Process P automation.",
      },
      {
        id: 20,
        question:
          "Dummy Question 5: Which layer handles error correction in Model M?",
        options: ["Layer 1", "Layer 2", "Layer 3", "Layer 4"],
        correctAnswer: "Layer 2",
        explanation: "Dummy explanation for error correction in Model M.",
      },
      {
        id: 21,
        question:
          "Dummy Question 6: What is the latency constraint for Application A?",
        options: ["<1ms", "<10ms", "<100ms", "<1s"],
        correctAnswer: "<10ms",
        explanation: "Dummy explanation for Application A latency.",
      },
      {
        id: 22,
        question:
          "Dummy Question 7: Does Standard S define security protocols?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Dummy explanation regarding Standard S and security.",
      },
      {
        id: 23,
        question: "Dummy Question 8: What is the function of Module X?",
        options: [
          "Data Input",
          "Data Processing",
          "Data Storage",
          "Data Output",
        ],
        correctAnswer: "Data Processing",
        explanation: "Dummy explanation for Module X function.",
      },
      {
        id: 24,
        question: "Dummy Question 9: Is Framework F backward compatible?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
        explanation: "Dummy explanation for Framework F compatibility.",
      },
      {
        id: 25,
        question: "Dummy Question 10: Calculate the efficiency of Algorithm E.",
        options: ["50%", "75%", "90%", "99%"],
        correctAnswer: "90%",
        explanation: "Dummy explanation for Algorithm E efficiency.",
      },
      {
        id: 26,
        question: "Dummy Question 11: True or False - Component C is optional.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "Dummy explanation for Component C necessity.",
      },
      {
        id: 27,
        question: "Dummy Question 12: Which paradigm does Solution S follow?",
        options: ["Paradigm A", "Paradigm B", "Paradigm C", "Paradigm D"],
        correctAnswer: "Paradigm C",
        explanation: "Dummy explanation for Solution S paradigm.",
      },
      {
        id: 28,
        question:
          "Dummy Question 13: What is the maximum capacity of Resource R?",
        options: ["100 units", "500 units", "1000 units", "5000 units"],
        correctAnswer: "1000 units",
        explanation: "Dummy explanation for Resource R capacity.",
      },
      {
        id: 29,
        question: "Dummy Question 14: Is Protocol P stateful or stateless?",
        options: ["Stateful", "Stateless"],
        correctAnswer: "Stateless",
        explanation: "Dummy explanation for Protocol P state.",
      },
      {
        id: 30,
        question:
          "Dummy Question 15: What metric is used to evaluate Quality Q?",
        options: ["Metric 1", "Metric 2", "Metric 3", "Metric 4"],
        correctAnswer: "Metric 1",
        explanation: "Dummy explanation for Quality Q evaluation metric.",
      },
      {
        id: 31,
        question:
          "Dummy Question 16: True or False - Interface I is user-friendly.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "Dummy explanation for Interface I usability.",
      },
      {
        id: 32,
        question:
          "Dummy Question 17: Which architecture does System S implement?",
        options: [
          "Microservices",
          "Monolithic",
          "Event-driven",
          "Client-Server",
        ],
        correctAnswer: "Microservices",
        explanation: "Dummy explanation for System S architecture.",
      },
      {
        id: 33,
        question:
          "Dummy Question 18: What is the average response time for Service X?",
        options: ["<50ms", "<100ms", "<200ms", "<500ms"],
        correctAnswer: "<100ms",
        explanation: "Dummy explanation for Service X response time.",
      },
      {
        id: 34,
        question:
          "Dummy Question 19: Is Technique T suitable for real-time processing?",
        options: ["Yes", "No"],
        correctAnswer: "No",
        explanation: "Dummy explanation for Technique T real-time suitability.",
      },
      {
        id: 35,
        question:
          "Dummy Question 20: What is the main limitation of Approach Z?",
        options: ["Scalability", "Cost", "Complexity", "Security"],
        correctAnswer: "Complexity",
        explanation: "Dummy explanation for Approach Z limitation.",
      },
    ],
  },

  {
    quizId: "quiz9",
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
      {
        id: 16,
        question:
          "Dummy Question 1: What layer does Fog Computing primarily operate at?",
        options: [
          "Device Layer",
          "Network Edge",
          "Cloud Data Center",
          "Application Layer",
        ],
        correctAnswer: "Network Edge",
        explanation:
          "Dummy explanation: Fog computing extends cloud capabilities to the edge of the network.",
      },
      {
        id: 17,
        question:
          "Dummy Question 2: True or False: Sensor virtualization increases resource utilization.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation:
          "Dummy explanation: Virtualizing sensors allows sharing and better utilization.",
      },
      {
        id: 18,
        question:
          "Dummy Question 3: Which OpenStack component manages block storage?",
        options: ["Nova", "Swift", "Cinder", "Glance"],
        correctAnswer: "Cinder",
        explanation:
          "Dummy explanation: Cinder is the block storage service in OpenStack.",
      },
      {
        id: 19,
        question:
          "Dummy Question 4: Is latency typically lower in Fog or Cloud computing for edge devices?",
        options: ["Fog", "Cloud", "Same", "Depends on application"],
        correctAnswer: "Fog",
        explanation:
          "Dummy explanation: Fog computing's proximity reduces latency for edge devices.",
      },
      {
        id: 20,
        question:
          "Dummy Question 5: What does 'pay-per-use' in cloud computing refer to?",
        options: [
          "Paying for software licenses",
          "Paying only for consumed resources",
          "Paying a fixed monthly fee",
          "Paying for network bandwidth only",
        ],
        correctAnswer: "Paying only for consumed resources",
        explanation:
          "Dummy explanation: Pay-per-use means billing is based on actual resource consumption.",
      },
      {
        id: 21,
        question:
          "Dummy Question 6: True or False: OpenStack is proprietary software.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "Dummy explanation: OpenStack is open-source software.",
      },
      {
        id: 22,
        question:
          "Dummy Question 7: Which characteristic allows cloud resources to scale up or down automatically?",
        options: [
          "Self-service",
          "Elasticity",
          "Ubiquitous access",
          "Resource pooling",
        ],
        correctAnswer: "Elasticity",
        explanation:
          "Dummy explanation: Elasticity refers to the ability to automatically adjust resources based on demand.",
      },
      {
        id: 23,
        question:
          "Dummy Question 8: What is a primary benefit of caching in sensor clouds?",
        options: [
          "Increased security",
          "Reduced data retrieval time",
          "Lower sensor cost",
          "Easier management",
        ],
        correctAnswer: "Reduced data retrieval time",
        explanation:
          "Dummy explanation: Caching stores frequently accessed data closer, reducing retrieval time.",
      },
      {
        id: 24,
        question:
          "Dummy Question 9: Fog computing is most beneficial for applications requiring:",
        options: [
          "High computational power",
          "Long-term data storage",
          "Low latency",
          "Global accessibility",
        ],
        correctAnswer: "Low latency",
        explanation:
          "Dummy explanation: Fog computing excels in low-latency scenarios due to edge processing.",
      },
      {
        id: 25,
        question:
          "Dummy Question 10: True or False: Sensor-Cloud Service Providers manage physical sensors.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation:
          "Dummy explanation: They typically manage the virtualized sensor services and cloud infrastructure, not necessarily the physical sensors themselves.",
      },
      {
        id: 26,
        question:
          "Dummy Question 11: Which OpenStack component handles networking?",
        options: ["Nova", "Keystone", "Neutron", "Swift"],
        correctAnswer: "Neutron",
        explanation:
          "Dummy explanation: Neutron is the networking service in OpenStack.",
      },
      {
        id: 27,
        question: "Dummy Question 12: What is 'Hardware Virtualization'?",
        options: [
          "Running multiple OS on one physical machine",
          "Creating virtual network devices",
          "Sharing physical hardware among virtual entities",
          "Emulating software in hardware",
        ],
        correctAnswer: "Sharing physical hardware among virtual entities",
        explanation:
          "Dummy explanation: Hardware virtualization allows physical resources like CPU and memory to be shared.",
      },
      {
        id: 28,
        question:
          "Dummy Question 13: Does Fog computing eliminate the need for Cloud computing?",
        options: ["Yes", "No", "Sometimes", "Only for IoT"],
        correctAnswer: "No",
        explanation:
          "Dummy explanation: Fog complements the Cloud, often handling time-sensitive tasks while the Cloud handles heavy computation and storage.",
      },
      {
        id: 29,
        question: "Dummy Question 14: OpenStack 'Horizon' provides what?",
        options: [
          "Compute instances",
          "Object storage",
          "A web-based dashboard (GUI)",
          "Identity management",
        ],
        correctAnswer: "A web-based dashboard (GUI)",
        explanation:
          "Dummy explanation: Horizon is the graphical user interface for OpenStack.",
      },
      {
        id: 30,
        question:
          "Dummy Question 15: True or False: Sensor data temporal sensitivity is irrelevant for cloud storage.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation:
          "Dummy explanation: Temporal sensitivity often dictates how and where data should be processed (Fog vs. Cloud).",
      },
      {
        id: 31,
        question:
          "Dummy Question 16: What is a key challenge in Sensor Cloud management?",
        options: [
          "Lack of sensors",
          "High cost of cloud storage",
          "Optimal composition of virtual sensors",
          "Slow network speeds",
        ],
        correctAnswer: "Optimal composition of virtual sensors",
        explanation:
          "Dummy explanation: Efficiently creating and managing virtual sensors from physical ones is complex.",
      },
      {
        id: 32,
        question:
          "Dummy Question 17: Which Cloud model offers the most control over infrastructure?",
        options: ["SaaS", "PaaS", "IaaS", "FaaS"],
        correctAnswer: "IaaS",
        explanation:
          "Dummy explanation: Infrastructure-as-a-Service (IaaS) gives users control over OS, storage, and networks.",
      },
      {
        id: 33,
        question: "Dummy Question 18: 'Self-service' in cloud means:",
        options: [
          "Cloud provider manages everything",
          "Users can provision resources automatically",
          "Support is available 24/7",
          "Hardware maintenance is included",
        ],
        correctAnswer: "Users can provision resources automatically",
        explanation:
          "Dummy explanation: Self-service allows users to get cloud resources on-demand without manual intervention from the provider.",
      },
      {
        id: 34,
        question:
          "Dummy Question 19: True or False: Fog nodes typically have more resources than Cloud data centers.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation:
          "Dummy explanation: Cloud data centers generally possess vastly more computational and storage resources than individual fog nodes.",
      },
      {
        id: 35,
        question: "Dummy Question 20: What does OpenStack 'Swift' provide?",
        options: [
          "Compute service",
          "Object storage service",
          "Image service",
          "Networking service",
        ],
        correctAnswer: "Object storage service",
        explanation:
          "Dummy explanation: Swift is OpenStack's object storage component.",
      },
    ],
  },

  {
    quizId: "quiz10",
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
      {
        id: 16,
        question: "Which of the following is a goal of VANETs?",
        options: [
          "Energy harvesting",
          "Vehicle navigation",
          "Driverless rail systems",
          "Satellite tracking",
        ],
        correctAnswer: "Vehicle navigation",
        explanation:
          "VANETs assist with real-time vehicle communication and navigation.",
      },
      {
        id: 17,
        question:
          "Which of these technologies supports vehicle-to-everything (V2X) communication?",
        options: ["Zigbee", "Bluetooth", "DSRC", "GSM"],
        correctAnswer: "DSRC",
        explanation: "DSRC is used in V2X for low-latency communication.",
      },
      {
        id: 18,
        question:
          "What challenge arises from real-time decision making in smart cities?",
        options: [
          "Data scarcity",
          "Data deluge",
          "Manual processing",
          "All of the above",
        ],
        correctAnswer: "Data deluge",
        explanation: "Large volume of data challenges timely decision-making.",
      },
      {
        id: 19,
        question: "Which protocol layer does Zigbee primarily operate on?",
        options: ["Transport", "Application", "Physical", "Link"],
        correctAnswer: "Application",
        explanation: "Zigbee mainly defines the application layer in HAN.",
      },
      {
        id: 20,
        question:
          "What is a key privacy issue in smart transportation systems?",
        options: [
          "Route optimization",
          "Data latency",
          "Vehicle tracking",
          "Route compression",
        ],
        correctAnswer: "Vehicle tracking",
        explanation: "Vehicle tracking raises concerns on user privacy.",
      },
      {
        id: 21,
        question:
          "Which layer of the TCP/IP model is most affected in VANET communication?",
        options: ["Transport", "Application", "Network", "Link"],
        correctAnswer: "Network",
        explanation:
          "Due to mobility, network layer struggles with route stability.",
      },
      {
        id: 22,
        question:
          "What technology can enable predictive maintenance in smart vehicles?",
        options: ["Wi-Fi", "Edge Computing", "QR Code", "RFID"],
        correctAnswer: "Edge Computing",
        explanation:
          "Edge computing analyzes local data for timely maintenance.",
      },
      {
        id: 23,
        question:
          "Which of the following enhances the security of vehicular communication systems?",
        options: ["Firewall", "VPN", "PKI", "NAT"],
        correctAnswer: "PKI",
        explanation: "Public Key Infrastructure ensures secure communication.",
      },
      {
        id: 24,
        question: "A primary drawback of data fusion in IoT is:",
        options: [
          "Improved accuracy",
          "Data redundancy",
          "Lower costs",
          "None of these",
        ],
        correctAnswer: "Data redundancy",
        explanation: "Fusion may lead to handling repetitive data.",
      },
      {
        id: 25,
        question:
          "Which technology supports real-time traffic light management?",
        options: ["AI", "Blockchain", "3D Printing", "Big Data"],
        correctAnswer: "AI",
        explanation: "AI allows intelligent control of traffic systems.",
      },
      {
        id: 26,
        question:
          "Which city management aspect uses IoT for garbage collection optimization?",
        options: [
          "Water distribution",
          "Waste management",
          "Traffic control",
          "Air monitoring",
        ],
        correctAnswer: "Waste management",
        explanation: "Smart bins report fill levels via IoT sensors.",
      },
      {
        id: 27,
        question: "Which protocol is widely used in smart home automation?",
        options: ["HTTP", "Z-Wave", "SMTP", "FTP"],
        correctAnswer: "Z-Wave",
        explanation: "Z-Wave is designed for low-power home automation.",
      },
      {
        id: 28,
        question: "Which of the following are AI applications in smart cities?",
        options: [
          "Predictive policing",
          "Traffic optimization",
          "Energy forecasting",
          "All of these",
        ],
        correctAnswer: "All of these",
        explanation: "AI plays a role across smart city functionalities.",
      },
      {
        id: 29,
        question:
          "Which factor restricts the use of Zigbee in vehicular networks?",
        options: ["Low power", "Short range", "High cost", "Simple topology"],
        correctAnswer: "Short range",
        explanation:
          "Zigbee is not ideal for fast-moving vehicles due to limited range.",
      },
      {
        id: 30,
        question:
          "Which IoT concept is used in detecting available parking spaces?",
        options: [
          "Wearable devices",
          "Environmental sensing",
          "Object detection",
          "RFID tracking",
        ],
        correctAnswer: "Object detection",
        explanation: "Object detection helps identify free parking spots.",
      },
      {
        id: 31,
        question: "Which of these challenges is unique to VANETs?",
        options: [
          "Node mobility",
          "Power consumption",
          "User interface",
          "Latency",
        ],
        correctAnswer: "Node mobility",
        explanation: "High-speed mobility affects network stability.",
      },
      {
        id: 32,
        question:
          "Which type of network is best suited for communication between vehicles and infrastructure?",
        options: ["Cellular", "MANET", "VANET", "PAN"],
        correctAnswer: "VANET",
        explanation:
          "VANET is specifically designed for vehicular communication.",
      },
      {
        id: 33,
        question: "Which communication type does V2V represent?",
        options: [
          "Vehicle to Vehicle",
          "Virtual to Virtual",
          "Visual to Virtual",
          "Vehicle to Voltage",
        ],
        correctAnswer: "Vehicle to Vehicle",
        explanation: "V2V allows communication between vehicles.",
      },
      {
        id: 34,
        question:
          "Which of the following is a key enabler of future smart highways?",
        options: [
          "Blockchain",
          "Edge Computing",
          "Quantum computing",
          "Augmented Reality",
        ],
        correctAnswer: "Edge Computing",
        explanation:
          "Edge computing helps process data locally for quick decisions.",
      },
      {
        id: 35,
        question:
          "Which standard is important for wireless personal area networks used in HAN?",
        options: ["IEEE 802.11", "IEEE 802.15.4", "IEEE 802.3", "IEEE 802.16"],
        correctAnswer: "IEEE 802.15.4",
        explanation:
          "802.15.4 supports low-rate wireless PANs, relevant to HAN. [Lecture 48]",
      },
    ],
  },

  {
    quizId: "quiz11",
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

      // 17 Newly Generated Questions Below
      {
        id: 16,
        question:
          "Which of the following is a key benefit of IIoT in manufacturing?",
        options: [
          "Manual inspection",
          "Reduced automation",
          "Predictive maintenance",
          "Increased paperwork",
        ],
        correctAnswer: "Predictive maintenance",
        explanation:
          "IIoT enables predictive maintenance through data analysis and monitoring.",
      },
      {
        id: 17,
        question: "What type of communication is crucial in smart grids?",
        options: [
          "Oral communication",
          "Wireless and wired data communication",
          "Pigeon post",
          "Postal letters",
        ],
        correctAnswer: "Wireless and wired data communication",
        explanation:
          "Data communication allows smart grids to function in real-time.",
      },
      {
        id: 18,
        question:
          "Which protocol is commonly used in IoT systems for lightweight communication?",
        options: ["HTTP", "SMTP", "MQTT", "FTP"],
        correctAnswer: "MQTT",
        explanation:
          "MQTT is designed for lightweight M2M communication in IoT devices.",
      },
      {
        id: 19,
        question:
          "Which of these is not typically a component of an IoT system?",
        options: ["Sensors", "Actuators", "Data analytics", "Television"],
        correctAnswer: "Television",
        explanation:
          "Television is not a core functional component in an IoT system.",
      },
      {
        id: 20,
        question: "In a smart grid, the use of AI helps in:",
        options: [
          "Data redundancy",
          "Predictive analytics",
          "Random decisions",
          "Manual controls",
        ],
        correctAnswer: "Predictive analytics",
        explanation:
          "AI enhances smart grid efficiency by predicting load and managing energy.",
      },
      {
        id: 21,
        question:
          "Which layer in the IoT architecture handles data transmission?",
        options: [
          "Application layer",
          "Perception layer",
          "Network layer",
          "Processing layer",
        ],
        correctAnswer: "Network layer",
        explanation:
          "The network layer is responsible for transmitting data between devices.",
      },
      {
        id: 22,
        question:
          "Which cloud service model provides a platform for application development?",
        options: ["IaaS", "PaaS", "SaaS", "CaaS"],
        correctAnswer: "PaaS",
        explanation:
          "PaaS allows developers to build applications without managing the underlying infrastructure.",
      },
      {
        id: 23,
        question:
          "Which technology allows machines to communicate in real time?",
        options: ["M2M", "HTTP", "DNS", "SMTP"],
        correctAnswer: "M2M",
        explanation:
          "Machine-to-Machine (M2M) communication enables real-time data exchange.",
      },
      {
        id: 24,
        question: "What is the main role of actuators in IoT?",
        options: [
          "Sensing environment",
          "Analyzing data",
          "Performing actions",
          "Storing data",
        ],
        correctAnswer: "Performing actions",
        explanation: "Actuators convert control signals into physical actions.",
      },
      {
        id: 25,
        question:
          "Which database type is best suited for handling unstructured IoT data?",
        options: ["Relational", "NoSQL", "Spreadsheet", "RDBMS"],
        correctAnswer: "NoSQL",
        explanation:
          "NoSQL databases can handle diverse and unstructured IoT data formats.",
      },
      {
        id: 26,
        question: "In IIoT, edge computing is used to:",
        options: [
          "Store data in cloud only",
          "Centralize processing",
          "Process data closer to the source",
          "Disconnect devices",
        ],
        correctAnswer: "Process data closer to the source",
        explanation:
          "Edge computing reduces latency by processing data near the data source.",
      },
      {
        id: 27,
        question:
          "Which device uniquely identifies and tracks an object using radio waves?",
        options: ["Sensor", "Actuator", "RFID", "QR code"],
        correctAnswer: "RFID",
        explanation:
          "RFID technology is used for wireless identification and tracking.",
      },
      {
        id: 28,
        question: "A major challenge in IoT networks is:",
        options: [
          "Abundant power",
          "High storage costs",
          "Scalability",
          "Lack of devices",
        ],
        correctAnswer: "Scalability",
        explanation:
          "IoT systems must scale efficiently as the number of devices increases.",
      },
      {
        id: 29,
        question:
          "Which security protocol is used for ensuring secure web communication?",
        options: ["SSL/TLS", "FTP", "HTTP", "SMTP"],
        correctAnswer: "SSL/TLS",
        explanation:
          "SSL/TLS encrypts communication to ensure data security online.",
      },
      {
        id: 30,
        question:
          "IoT devices often operate using which of the following types of power?",
        options: ["Nuclear", "Solar", "Battery", "Hydraulic"],
        correctAnswer: "Battery",
        explanation:
          "Most IoT devices are powered by batteries for portability and flexibility.",
      },
      {
        id: 31,
        question:
          "Which type of analytics is used in IoT to predict future events?",
        options: ["Descriptive", "Diagnostic", "Prescriptive", "Predictive"],
        correctAnswer: "Predictive",
        explanation:
          "Predictive analytics forecasts future trends based on historical data.",
      },
      {
        id: 32,
        question: "In the IoT context, latency refers to:",
        options: [
          "Number of devices",
          "Data size",
          "Delay in data transfer",
          "Energy consumption",
        ],
        correctAnswer: "Delay in data transfer",
        explanation:
          "Latency measures how quickly data can be transferred and processed.",
      },
    ],
  },

  {
    quizId: "quiz12",
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

      // Additional 20 MCQs created based on related IoT, analytics, and healthcare content

      {
        id: 16,
        question:
          "Which technique is primarily used for forecasting time series data?",
        options: ["ANOVA", "ARIMA", "Regression", "Normalization"],
        correctAnswer: "ARIMA",
        explanation: "ARIMA is used in time series forecasting.",
      },
      {
        id: 17,
        question: "Which IoT layer deals with raw data sensing?",
        options: ["Application", "Perception", "Processing", "Network"],
        correctAnswer: "Perception",
        explanation: "Perception layer handles sensing.",
      },
      {
        id: 18,
        question: "Which of the following is a deep learning model?",
        options: ["SVM", "DNN", "KNN", "PCA"],
        correctAnswer: "DNN",
        explanation: "DNN stands for Deep Neural Network.",
      },
      {
        id: 19,
        question:
          "Which of the following is *not* a supervised learning technique?",
        options: ["Regression", "Decision Tree", "Clustering", "Naive Bayes"],
        correctAnswer: "Clustering",
        explanation: "Clustering is unsupervised.",
      },
      {
        id: 20,
        question:
          "Which statistical technique tests the significance of group means?",
        options: ["ARIMA", "ANOVA", "Logistic Regression", "Normalization"],
        correctAnswer: "ANOVA",
        explanation: "ANOVA tests group mean differences.",
      },
      {
        id: 21,
        question:
          "Which sensor is essential in heart rate monitoring in smart wearables?",
        options: [
          "Temperature sensor",
          "ECG sensor",
          "Gyroscope",
          "Water level sensor",
        ],
        correctAnswer: "ECG sensor",
        explanation: "ECG sensors capture heart signals.",
      },
      {
        id: 22,
        question: "Which device in healthcare IoT collects vital sign data?",
        options: ["Smartphone", "Gateway", "Wearable sensor", "Server"],
        correctAnswer: "Wearable sensor",
        explanation: "Wearables collect patient data.",
      },
      {
        id: 23,
        question: "Which is not a dispersion measure?",
        options: ["Range", "Mean", "Variance", "Standard Deviation"],
        correctAnswer: "Mean",
        explanation: "Mean is a central tendency measure.",
      },
      {
        id: 24,
        question: "What does PPU stand for in healthcare IoT?",
        options: [
          "Personal Processing Unit",
          "Patient Processing Unit",
          "Primary Processing Unit",
          "None of these",
        ],
        correctAnswer: "Patient Processing Unit",
        explanation: "PPU handles patient-specific processing.",
      },
      {
        id: 25,
        question: "Which learning model uses layers of neurons?",
        options: ["KNN", "Naive Bayes", "DNN", "SVM"],
        correctAnswer: "DNN",
        explanation: "DNNs are made up of layered neurons.",
      },
      {
        id: 26,
        question: "Which layer in IoT is responsible for decision-making?",
        options: ["Perception", "Application", "Processing", "None"],
        correctAnswer: "Application",
        explanation: "Application layer makes final decisions.",
      },
      {
        id: 27,
        question: "Which tool can be used to visualize data variance?",
        options: ["Bar chart", "Box plot", "Pie chart", "Line graph"],
        correctAnswer: "Box plot",
        explanation: "Box plots help visualize variance and outliers.",
      },
      {
        id: 28,
        question:
          "Which among the following is a reactive component in an IoT system?",
        options: ["Sensor", "Actuator", "Gateway", "Router"],
        correctAnswer: "Actuator",
        explanation: "Actuators react to commands.",
      },
      {
        id: 29,
        question:
          "Which IoT architecture component helps in protocol translation?",
        options: ["Middleware", "Sensor", "Application", "Network"],
        correctAnswer: "Middleware",
        explanation: "Middleware manages compatibility.",
      },
      {
        id: 30,
        question: "Which type of analysis is used when data is non-numerical?",
        options: ["Quantitative", "Qualitative", "Predictive", "Prescriptive"],
        correctAnswer: "Qualitative",
        explanation: "Qualitative deals with non-numeric data.",
      },
      {
        id: 31,
        question: "Which sensor provides altitude measurement?",
        options: ["Barometer", "Gyroscope", "Thermometer", "Accelerometer"],
        correctAnswer: "Barometer",
        explanation: "Barometers measure pressure to infer altitude.",
      },
      {
        id: 32,
        question: "Which data type does ANOVA handle?",
        options: [
          "Categorical",
          "Numerical",
          "Ordinal",
          "Both categorical and numerical",
        ],
        correctAnswer: "Both categorical and numerical",
        explanation: "ANOVA tests categorical groups using numerical data.",
      },
      {
        id: 33,
        question:
          "Which of the following is a limitation of in-place processing?",
        options: [
          "Latency",
          "Real-time analysis",
          "Energy consumption",
          "Bandwidth savings",
        ],
        correctAnswer: "Energy consumption",
        explanation: "In-place processing may drain device battery.",
      },
      {
        id: 34,
        question: "What is the main goal of IoT in agriculture?",
        options: [
          "Data storage",
          "Automated decision making",
          "Remote access only",
          "Gaming",
        ],
        correctAnswer: "Automated decision making",
        explanation: "Agri-IoT helps automate decisions using sensors.",
      },
      {
        id: 35,
        question:
          "Which feature helps preserve patient identity in smart healthcare systems?",
        options: [
          "Encryption",
          "Privacy masking",
          "Data compression",
          "Data caching",
        ],
        correctAnswer: "Privacy masking",
        explanation:
          "Privacy masking anonymizes identity in systems like AmbuSense.",
      },
    ],
  },

  // {
  //   id: "quiz1",
  //   title: "Assignment 1 - LECTURE(1)",
  //   questions: [
  //     {
  //       id: 1,
  //       question: "IoT primarily involves:",
  //       options: [
  //         "Connecting people through social media.",
  //         "Connecting devices, machines, and tools to the internet.",
  //         "Developing new mobile applications.",
  //         "Creating faster internet connections for personal computers.",
  //       ],
  //       correctAnswer:
  //         "Connecting devices, machines, and tools to the internet.",
  //       explanation:
  //         "The text explicitly states that IoT involves 'Internet technology connecting devices, machines and tools to the internet by means of wireless technologies.'",
  //     },
  //     {
  //       id: 2,
  //       question:
  //         "As of now, approximately how many 'Things' are connected to the Internet according to the text?",
  //       options: [
  //         "Over 20 billion",
  //         "Less than 5 billion",
  //         "Over 9 billion",
  //         "Exactly 10 billion",
  //       ],
  //       correctAnswer: "Over 9 billion",
  //       explanation:
  //         "The text mentions, 'Over 9 billion ‘Things’ connected to the Internet, as of now.'",
  //     },
  //     {
  //       id: 3,
  //       question:
  //         "In the near future, the number of 'Things' connected to the Internet is projected to:",
  //       options: [
  //         "Decrease significantly.",
  //         "Remain around 9 billion.",
  //         "Cross 20 billion.",
  //         "Become zero.",
  //       ],
  //       correctAnswer: "Cross 20 billion.",
  //       explanation:
  //         "The text states, '‘Things’ connected to the Internet are projected to cross 20 billion in the near future.'",
  //     },
  //     {
  //       id: 4,
  //       question:
  //         "IoT involves the unification of which of the following technologies?",
  //       options: [
  //         "High-power computing systems and wired networking.",
  //         "Low-power embedded systems, cloud computing, big-data, machine learning, and networking.",
  //         "Traditional telephone networks and satellite communication.",
  //         "Desktop software applications and mainframe computers.",
  //       ],
  //       correctAnswer:
  //         "Low-power embedded systems, cloud computing, big-data, machine learning, and networking.",
  //       explanation:
  //         "The text mentions 'Unification of technologies such as low-power embedded systems, cloud computing, big-data, machine learning, and networking.'",
  //     },

  //     {
  //       id: 1,
  //       question:
  //         "According to the text, in the 2000s, we are entering a new era of:",
  //       options: [
  //         "Scarcity",
  //         "Ubiquity",
  //         "Complexity for humans",
  //         "Reduced internet usage",
  //       ],
  //       correctAnswer: "Ubiquity",
  //       explanation:
  //         "The text explicitly states, 'In the 2000s, we are heading into a new era of ubiquity...'",
  //     },
  //     {
  //       id: 2,
  //       question:
  //         "In this new era, what is predicted about the 'users' of the Internet?",
  //       options: [
  //         "They will primarily be large corporations.",
  //         "They will be counted in millions.",
  //         "They will be counted in billions.",
  //         "Their numbers will decrease.",
  //       ],
  //       correctAnswer: "They will be counted in billions.",
  //       explanation:
  //         "The text mentions, '...where the “users” of the Internet will be counted in billions...'",
  //     },
  //     {
  //       id: 3,
  //       question:
  //         "In the context of internet traffic, the text suggests that humans may become the:",
  //       options: [
  //         "Majority of generators and receivers.",
  //         "Primary beneficiaries of increased bandwidth.",
  //         "Minority as generators and receivers.",
  //         "Sole controllers of data flow.",
  //       ],
  //       correctAnswer: "Minority as generators and receivers.",
  //       explanation:
  //         "The text states, '...where humans may become the minority as generators and receivers of traffic.'",
  //     },
  //     {
  //       id: 4,
  //       question:
  //         "The text indicates that most of the internet traffic will flow between:",
  //       options: [
  //         "Humans and websites.",
  //         "Large server farms.",
  //         "Devices and all kinds of 'things'.",
  //         "Government institutions and citizens.",
  //       ],
  //       correctAnswer: "Devices and all kinds of 'things'.",
  //       explanation:
  //         "The text explains, 'Instead, most of the traffic will flow between devices and all kinds of “things”...'",
  //     },
  //     {
  //       id: 5,
  //       question:
  //         "The increased traffic between devices and 'things' is expected to create a:",
  //       options: [
  //         "Simpler internet structure.",
  //         "More secure online environment.",
  //         "Much wider and more complex Internet of Things.",
  //         "Decrease in overall internet usage.",
  //       ],
  //       correctAnswer: "Much wider and more complex Internet of Things.",
  //       explanation:
  //         "The text concludes by saying, '...thereby creating a much wider and more complex Internet of Things.'",
  //     },

  //     {
  //       id: 1,
  //       question:
  //         "According to the provided information, what was the title of the report?",
  //       options: [
  //         "The Future of Connectivity",
  //         "M2M Communication Networks",
  //         "Internet of Things",
  //         "Smart Household Devices",
  //       ],
  //       correctAnswer: "Internet of Things",
  //       explanation: "The report was titled “Internet of Things”.",
  //     },
  //     {
  //       id: 2,
  //       question: "The report discussed the potential for internet-connected:",
  //       options: [
  //         "Social media platforms.",
  //         "Online gaming communities.",
  //         "M2M connectivity networks extending to common household devices.",
  //         "Global financial markets.",
  //       ],
  //       correctAnswer:
  //         "M2M connectivity networks extending to common household devices.",
  //       explanation:
  //         "The discussion in the report included the possibility of internet-connected M2M connectivity networks that could extend to common household devices.",
  //     },
  //     {
  //       id: 3,
  //       question:
  //         "Which of the following was identified as something that enables IoT?",
  //       options: [
  //         "Artificial Intelligence",
  //         "Blockchain Technology",
  //         "RFID",
  //         "Virtual Reality",
  //       ],
  //       correctAnswer: "RFID",
  //       explanation: "RFID was listed as one of the elements that enable IoT.",
  //     },
  //     {
  //       id: 4,
  //       question: "Nanotechnology was included as one of the:",
  //       options: [
  //         "Challenges of IoT implementation.",
  //         "Applications of smart networks.",
  //         "IoT enablers.",
  //         "Limitations of M2M communication.",
  //       ],
  //       correctAnswer: "IoT enablers.",
  //       explanation:
  //         "Nanotechnology was identified as one of the things that enable IoT.",
  //     },
  //     {
  //       id: 5,
  //       question:
  //         "Based on the 'Alternate Definition', the Internet of Things is a network consisting of:",
  //       options: [
  //         "Software applications.",
  //         "Human interactions online.",
  //         "Physical objects that contain embedded technology.",
  //         "Wireless communication protocols.",
  //       ],
  //       correctAnswer: "Physical objects that contain embedded technology.",
  //       explanation:
  //         "The 'Alternate Definition' describes IoT as a network of physical objects containing embedded technology.",
  //     },
  //     {
  //       id: 6,
  //       question:
  //         "A key characteristic of these physical objects in IoT is their ability to:",
  //       options: [
  //         "Be controlled remotely by humans only.",
  //         "Communicate and sense or interact with their internal states or the external environment.",
  //         "Operate solely on battery power.",
  //         "Replace traditional computing devices entirely.",
  //       ],
  //       correctAnswer:
  //         "Communicate and sense or interact with their internal states or the external environment.",
  //       explanation:
  //         "These physical objects are able to communicate and sense or interact with their internal states or the external environment.",
  //     },

  //     {
  //       id: 1,
  //       question:
  //         "According to the 'Characteristics' section, an efficient and scalable structure is a feature of:",
  //       options: [
  //         "IoT security protocols.",
  //         "IoT communication standards.",
  //         "IoT architecture.",
  //         "IoT power management.",
  //       ],
  //       correctAnswer: "IoT architecture.",
  //       explanation:
  //         "The characteristics listed include 'Efficient, scalable and associated architecture'.",
  //     },
  //     {
  //       id: 2,
  //       question:
  //         "The need for clear identification of devices in IoT is highlighted by the characteristic of:",
  //       options: [
  //         "Abundance of sleeping nodes.",
  //         "Intermittent connectivity.",
  //         "Unambiguous naming and addressing.",
  //         "Mobile and non-IP devices.",
  //       ],
  //       correctAnswer: "Unambiguous naming and addressing.",
  //       explanation:
  //         "One of the characteristics mentioned is 'Unambiguous naming and addressing'.",
  //     },
  //     {
  //       id: 3,
  //       question:
  //         "The presence of many devices that are not always actively communicating is indicated by the characteristic:",
  //       options: [
  //         "Efficient, scalable architecture.",
  //         "Unambiguous naming.",
  //         "Abundance of sleeping nodes.",
  //         "Intermittent connectivity.",
  //       ],
  //       correctAnswer: "Abundance of sleeping nodes.",
  //       explanation:
  //         "The characteristics include an 'Abundance of sleeping nodes'.",
  //     },
  //     {
  //       id: 4,
  //       question:
  //         "The characteristic 'Intermittent connectivity' suggests that IoT devices may:",
  //       options: [
  //         "Always be online and connected.",
  //         "Have unreliable network access at times.",
  //         "Only communicate during specific scheduled periods.",
  //         "Never lose their connection to the internet.",
  //       ],
  //       correctAnswer: "Have unreliable network access at times.",
  //       explanation:
  //         "'Intermittent connectivity' implies that the connection of IoT devices may not be constant.",
  //     },
  //     {
  //       id: 5,
  //       question:
  //         "Based on the 'IoT Market Share' data, which sector had the largest market share?",
  //       options: ["Healthcare", "Retail", "Manufacturing/Business", "Security"],
  //       correctAnswer: "Manufacturing/Business",
  //       explanation:
  //         "Manufacturing/Business is shown with the largest market share of 40.2%.",
  //     },
  //     {
  //       id: 6,
  //       question:
  //         "According to the market share data, the Healthcare sector held what percentage of the IoT market?",
  //       options: ["8.3%", "7.7%", "40.2%", "30.3%"],
  //       correctAnswer: "30.3%",
  //       explanation:
  //         "The Healthcare sector is indicated to have a market share of 30.3%.",
  //     },
  //     {
  //       id: 7,
  //       question:
  //         "The sector with the smallest market share among the options provided is:",
  //       options: ["Healthcare", "Retail", "Manufacturing/Business", "Security"],
  //       correctAnswer: "Security",
  //       explanation:
  //         "The Security sector has the smallest market share shown, at 7.7%.",
  //     },
  //     {
  //       id: 8,
  //       question: "The Retail sector's share of the IoT market was:",
  //       options: ["40.2%", "30.3%", "8.3%", "7.7%"],
  //       correctAnswer: "8.3%",
  //       explanation:
  //         "The Retail sector is shown to have an 8.3% share of the IoT market.",
  //     },

  //     {
  //       id: 1,
  //       question: "In the Business/Manufacturing sector, IoT enables:",
  //       options: [
  //         "Portable health monitoring.",
  //         "Electronic recordkeeping.",
  //         "Real-time analytics of supply chains and equipment.",
  //         "Biometric and facial recognition locks.",
  //       ],
  //       correctAnswer: "Real-time analytics of supply chains and equipment.",
  //       explanation:
  //         "The text under Business/Manufacturing specifically mentions 'Real-time analytics of supply chains and equipment, robotic machinery.'",
  //     },
  //     {
  //       id: 2,
  //       question:
  //         "Which of the following is an application of IoT in the Healthcare sector?",
  //       options: [
  //         "Inventory tracking.",
  //         "Smartphone purchasing.",
  //         "Portable health monitoring.",
  //         "Anonymous analytics of consumer choices.",
  //       ],
  //       correctAnswer: "Portable health monitoring.",
  //       explanation:
  //         "Under Healthcare, 'Portable health monitoring, electronic recordkeeping, pharmaceutical safeguards' are listed.",
  //     },
  //     {
  //       id: 3,
  //       question: "IoT applications in the Retail sector include:",
  //       options: [
  //         "Real-time analytics of equipment.",
  //         "Electronic recordkeeping.",
  //         "Inventory tracking.",
  //         "Biometric locks.",
  //       ],
  //       correctAnswer: "Inventory tracking.",
  //       explanation:
  //         "The Retail section lists 'Inventory tracking, smartphone purchasing, anonymous analytics of consumer choices'.",
  //     },
  //     {
  //       id: 4,
  //       question:
  //         "Biometric and facial recognition locks are examples of IoT applications in:",
  //       options: ["Healthcare.", "Retail.", "Security.", "Manufacturing."],
  //       correctAnswer: "Security.",
  //       explanation:
  //         "Under Security, the text mentions 'Biometric and facial recognition locks, remote sensors.'",
  //     },
  //     {
  //       id: 5,
  //       question:
  //         "According to the 'Evolution of Connected Devices', which of the following was an early example of a connected device?",
  //       options: ["Smart Dust", "Smart Cities", "ATMs", "Smart Healthcare"],
  //       correctAnswer: "ATMs",
  //       explanation:
  //         "ATMs are listed as #1 in the 'Evolution of Connected Devices'.",
  //     },
  //     {
  //       id: 6,
  //       question:
  //         "In the 'Evolution of Connected Devices', 'Web' is listed as the:",
  //       options: [
  //         "First connected device.",
  //         "Second stage of connected devices.",
  //         "Most recent evolution of connected devices.",
  //         "A device not considered part of the evolution.",
  //       ],
  //       correctAnswer: "Second stage of connected devices.",
  //       explanation:
  //         "Web is listed as #2 in the 'Evolution of Connected Devices'.",
  //     },
  //     {
  //       id: 7,
  //       question:
  //         "Smart Motors are shown as which stage in the 'Evolution of Connected Devices'?",
  //       options: ["Third", "Fifth", "Seventh", "First"],
  //       correctAnswer: "Third",
  //       explanation:
  //         "Smart Motors are listed as #3 in the 'Evolution of Connected Devices'.",
  //     },
  //     {
  //       id: 8,
  //       question: "Digital Locks are presented as the:",
  //       options: [
  //         "Second connected device.",
  //         "Fourth connected device.",
  //         "Sixth connected device.",
  //         "Eighth connected device.",
  //       ],
  //       correctAnswer: "Fourth connected device.",
  //       explanation:
  //         "Digital Locks are listed as #4 in the 'Evolution of Connected Devices'.",
  //     },
  //     {
  //       id: 9,
  //       question: "Smart Healthcare is indicated as the:",
  //       options: [
  //         "First evolution of connected devices in healthcare.",
  //         "Fifth stage in the evolution of connected devices.",
  //         "A separate category outside the evolution.",
  //         "The last stage of connected devices.",
  //       ],
  //       correctAnswer: "Fifth stage in the evolution of connected devices.",
  //       explanation:
  //         "Smart Healthcare is listed as #5 in the 'Evolution of Connected Devices'.",
  //     },
  //     {
  //       id: 10,
  //       question: "Smart Vehicles are shown as the:",
  //       options: [
  //         "Third connected device.",
  //         "Sixth connected device.",
  //         "Second connected device.",
  //         "Eighth connected device.",
  //       ],
  //       correctAnswer: "Sixth connected device.",
  //       explanation:
  //         "Smart Vehicles are listed as #6 in the 'Evolution of Connected Devices'.",
  //     },
  //     {
  //       id: 11,
  //       question: "Smart Cities are presented as the:",
  //       options: [
  //         "Seventh stage in the evolution of connected devices.",
  //         "First stage in the evolution of connected devices.",
  //         "A parallel development not in the main evolution.",
  //         "The final stage of connected devices mentioned.",
  //       ],
  //       correctAnswer: "Seventh stage in the evolution of connected devices.",
  //       explanation:
  //         "Smart Cities are listed as #7 in the 'Evolution of Connected Devices'.",
  //     },
  //     {
  //       id: 12,
  //       question: "Smart Dust is listed as the:",
  //       options: [
  //         "Earliest form of connected technology.",
  //         "Eighth stage in the evolution of connected devices.",
  //         "A hypothetical future connected device.",
  //         "A minor application of connected devices.",
  //       ],
  //       correctAnswer: "Eighth stage in the evolution of connected devices.",
  //       explanation:
  //         "Smart Dust is listed as #8 in the 'Evolution of Connected Devices'.",
  //     },

  //     {
  //       id: 1,
  //       question: "ATMs first went online in:",
  //       options: ["1980.", "1991.", "1974.", "The early 2000s."],
  //       correctAnswer: "1974.",
  //       explanation:
  //         "The text states, 'These ubiquitous money dispensers went online for the first time way back in 1974.'",
  //     },
  //     {
  //       id: 2,
  //       question: "The World Wide Web made its debut in:",
  //       options: ["1974.", "The early 2000s.", "1991.", "The present day."],
  //       correctAnswer: "1991.",
  //       explanation:
  //         "The text indicates, 'World Wide Web made its debut in 1991 to revolutionize computing and communications.'",
  //     },
  //     {
  //       id: 3,
  //       question:
  //         "The first smart power meters that could communicate remotely with the grid were installed in:",
  //       options: ["1974.", "1991.", "The early 2000s.", "The mid-1990s."],
  //       correctAnswer: "The early 2000s.",
  //       explanation:
  //         "The text mentions, 'The first power meters to communicate remotely with the grid were installed in the early 2000s.'",
  //     },
  //     {
  //       id: 4,
  //       question: "Digital locks allow smartphones to:",
  //       options: [
  //         "Control home appliances.",
  //         "Browse the internet.",
  //         "Lock and unlock doors remotely.",
  //         "Monitor health conditions.",
  //       ],
  //       correctAnswer: "Lock and unlock doors remotely.",
  //       explanation:
  //         "The text explains, 'Smartphones can be used to lock and unlock doors remotely...'",
  //     },
  //     {
  //       id: 5,
  //       question: "Smart healthcare devices can connect patients to:",
  //       options: [
  //         "Online shopping platforms.",
  //         "Social media networks.",
  //         "Hospitals, doctors, and relatives to alert them of medical emergencies.",
  //         "Entertainment streaming services.",
  //       ],
  //       correctAnswer:
  //         "Hospitals, doctors, and relatives to alert them of medical emergencies.",
  //       explanation:
  //         "The text states, 'Devices connect to hospitals, doctors and relatives to alert them of medical emergencies and take preventive measures.'",
  //     },
  //     {
  //       id: 6,
  //       question: "Smart vehicles have the ability to:",
  //       options: [
  //         "Drive autonomously in all conditions.",
  //         "Communicate with other vehicles to avoid traffic.",
  //         "Self-diagnose themselves and alert owners about system failures.",
  //         "Generate their own fuel.",
  //       ],
  //       correctAnswer:
  //         "Self-diagnose themselves and alert owners about system failures.",
  //       explanation:
  //         "The text says, 'Vehicles self-diagnose themselves and alert owners about system failures.'",
  //     },
  //     {
  //       id: 7,
  //       question: "Smart cities involve city-wide infrastructure that:",
  //       options: [
  //         "Provides free public Wi-Fi.",
  //         "Focuses solely on traffic management.",
  //         "Communicates amongst themselves for unified and synchronized operations and information dissemination.",
  //         "Is managed entirely by artificial intelligence.",
  //       ],
  //       correctAnswer:
  //         "Communicates amongst themselves for unified and synchronized operations and information dissemination.",
  //       explanation:
  //         "The text describes, 'City-wide infrastructure communicating amongst themselves for unified and synchronized operations and information dissemination.'",
  //     },
  //     {
  //       id: 8,
  //       question: "Smart dust consists of computers that are:",
  //       options: [
  //         "Larger than a grain of sand.",
  //         "Used for entertainment purposes.",
  //         "Smaller than a grain of sand and can be sprayed or injected to measure chemicals or diagnose problems.",
  //         "Only used in industrial applications.",
  //       ],
  //       correctAnswer:
  //         "Smaller than a grain of sand and can be sprayed or injected to measure chemicals or diagnose problems.",
  //       explanation:
  //         "The text explains, 'Computers smaller than a grain of sand can be sprayed or injected almost anywhere to measure chemicals in the soil or to diagnose problems in the human body.'",
  //     },

  //     {
  //       id: 1,
  //       question:
  //         "Which of the following is listed as a modern-day IoT application?",
  //       options: [
  //         "Traditional irrigation systems",
  //         "Manual traffic control",
  //         "Smart Parking",
  //         "Analog weather forecasting",
  //       ],
  //       correctAnswer: "Smart Parking",
  //       explanation:
  //         "Smart Parking is explicitly listed under 'Modern Day IoT Applications'.",
  //     },
  //     {
  //       id: 2,
  //       question:
  //         "Monitoring the condition of bridges and buildings falls under which IoT application?",
  //       options: [
  //         "Noise Urban Maps",
  //         "Structural health",
  //         "Traffic Congestion",
  //         "Smart Lighting",
  //       ],
  //       correctAnswer: "Structural health",
  //       explanation:
  //         "Structural health is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 3,
  //       question:
  //         "Creating maps of sound levels in urban areas is an application of:",
  //       options: [
  //         "Smartphone Detection",
  //         "Traffic Congestion",
  //         "Noise Urban Maps",
  //         "Waste Management",
  //       ],
  //       correctAnswer: "Noise Urban Maps",
  //       explanation:
  //         "Noise Urban Maps is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 4,
  //       question:
  //         "Detecting the presence of mobile devices in a specific area is known as:",
  //       options: [
  //         "Smart Lighting",
  //         "Waste Management",
  //         "Smartphone Detection",
  //         "Smart Roads",
  //       ],
  //       correctAnswer: "Smartphone Detection",
  //       explanation:
  //         "Smartphone Detection is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 5,
  //       question:
  //         "Using IoT to manage the flow of vehicles in cities is referred to as:",
  //       options: [
  //         "Smart Roads",
  //         "Traffic Congestion",
  //         "Smart Lighting",
  //         "Waste Management",
  //       ],
  //       correctAnswer: "Traffic Congestion",
  //       explanation:
  //         "Traffic Congestion management is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 6,
  //       question: "Efficient control of public illumination is an example of:",
  //       options: [
  //         "Waste Management",
  //         "Smart Lighting",
  //         "Smart Roads",
  //         "River Floods",
  //       ],
  //       correctAnswer: "Smart Lighting",
  //       explanation:
  //         "Smart Lighting is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 7,
  //       question:
  //         "Optimizing the collection and disposal of refuse is known as:",
  //       options: [
  //         "Smart Roads",
  //         "River Floods",
  //         "Waste Management",
  //         "Smart Grid",
  //       ],
  //       correctAnswer: "Waste Management",
  //       explanation:
  //         "Waste Management is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 8,
  //       question:
  //         "Integrating technology into roadways for improved safety and efficiency is:",
  //       options: [
  //         "Smart Grid",
  //         "River Floods",
  //         "Smart Roads",
  //         "Tank level monitoring",
  //       ],
  //       correctAnswer: "Smart Roads",
  //       explanation: "Smart Roads is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 9,
  //       question:
  //         "Monitoring and predicting the occurrence of high water levels in rivers is an application of IoT in:",
  //       options: [
  //         "Smart Grid",
  //         "River Floods",
  //         "Tank level monitoring",
  //         "Photovoltaic Installations",
  //       ],
  //       correctAnswer: "River Floods",
  //       explanation:
  //         "River Floods monitoring is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 10,
  //       question:
  //         "Modernizing the electricity distribution network is known as:",
  //       options: [
  //         "Tank level monitoring",
  //         "Photovoltaic Installations",
  //         "Smart Grid",
  //         "Water Flow monitoring",
  //       ],
  //       correctAnswer: "Smart Grid",
  //       explanation: "Smart Grid is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 11,
  //       question: "Keeping track of the contents in storage containers is:",
  //       options: [
  //         "Photovoltaic Installations",
  //         "Water Flow monitoring",
  //         "Silos Stock Calculation",
  //         "Tank level monitoring",
  //       ],
  //       correctAnswer: "Tank level monitoring",
  //       explanation:
  //         "Tank level monitoring is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 12,
  //       question:
  //         "Managing the output of solar energy systems is an application of IoT in:",
  //       options: [
  //         "Water Flow monitoring",
  //         "Silos Stock Calculation",
  //         "Photovoltaic Installations",
  //         "Perimeter Access Control",
  //       ],
  //       correctAnswer: "Photovoltaic Installations",
  //       explanation:
  //         "Photovoltaic Installations management is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 13,
  //       question: "Monitoring the movement of water in pipes and channels is:",
  //       options: [
  //         "Silos Stock Calculation",
  //         "Perimeter Access Control",
  //         "Water Flow monitoring",
  //         "Liquid Presence detection",
  //       ],
  //       correctAnswer: "Water Flow monitoring",
  //       explanation:
  //         "Water Flow monitoring is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 14,
  //       question:
  //         "Calculating the amount of material stored in large containers is:",
  //       options: [
  //         "Perimeter Access Control",
  //         "Liquid Presence detection",
  //         "Silos Stock Calculation",
  //         "Forest Fire Detection",
  //       ],
  //       correctAnswer: "Silos Stock Calculation",
  //       explanation:
  //         "Silos Stock Calculation is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 15,
  //       question: "Using technology to secure the boundaries of an area is:",
  //       options: [
  //         "Liquid Presence detection",
  //         "Forest Fire Detection",
  //         "Perimeter Access Control",
  //         "Air Pollution monitoring",
  //       ],
  //       correctAnswer: "Perimeter Access Control",
  //       explanation:
  //         "Perimeter Access Control is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 16,
  //       question: "Detecting the presence of liquids in unintended areas is:",
  //       options: [
  //         "Air Pollution monitoring",
  //         "Snow Level Monitoring",
  //         "Liquid Presence detection",
  //         "Forest Fire Detection",
  //       ],
  //       correctAnswer: "Liquid Presence detection",
  //       explanation:
  //         "Liquid Presence detection is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 17,
  //       question: "Early warning systems for wildfires utilize IoT for:",
  //       options: [
  //         "Radiation Levels monitoring",
  //         "Explosive and Hazardous Gases detection",
  //         "Forest Fire Detection",
  //         "Supply Chain Control",
  //       ],
  //       correctAnswer: "Forest Fire Detection",
  //       explanation:
  //         "Forest Fire Detection is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 18,
  //       question: "Monitoring the quality of the atmosphere is known as:",
  //       options: [
  //         "Supply Chain Control",
  //         "Radiation Levels monitoring",
  //         "Air Pollution monitoring",
  //         "Snow Level Monitoring",
  //       ],
  //       correctAnswer: "Air Pollution monitoring",
  //       explanation:
  //         "Air Pollution monitoring is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 19,
  //       question:
  //         "Measuring the depth of snow in a region is an application of:",
  //       options: [
  //         "Explosive and Hazardous Gases detection",
  //         "Supply Chain Control",
  //         "Snow Level Monitoring",
  //         "Landslide and Avalanche Prevention",
  //       ],
  //       correctAnswer: "Snow Level Monitoring",
  //       explanation:
  //         "Snow Level Monitoring is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 20,
  //       question: "IoT can be used to help prevent natural disasters like:",
  //       options: [
  //         "Radiation Leaks",
  //         "Explosive detonations",
  //         "Landslide and Avalanche Prevention",
  //         "Intelligent Shopping Applications",
  //       ],
  //       correctAnswer: "Landslide and Avalanche Prevention",
  //       explanation:
  //         "Landslide and Avalanche Prevention is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 21,
  //       question: "Providing early warnings for seismic activity is known as:",
  //       options: [
  //         "Water Leakages detection",
  //         "Earthquake Early Detection",
  //         "Smart Product Management",
  //         "NFC Payment systems",
  //       ],
  //       correctAnswer: "Earthquake Early Detection",
  //       explanation:
  //         "Earthquake Early Detection is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 22,
  //       question:
  //         "Detecting and locating breaks in water pipes utilizes IoT for:",
  //       options: [
  //         "Intelligent Shopping Applications",
  //         "Smart Product Management",
  //         "Water Leakages detection",
  //         "Radiation Levels monitoring",
  //       ],
  //       correctAnswer: "Water Leakages detection",
  //       explanation:
  //         "Water Leakages detection is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 23,
  //       question: "Monitoring harmful energy emissions is an application of:",
  //       options: [
  //         "Explosive and Hazardous Gases detection",
  //         "Supply Chain Control",
  //         "Radiation Levels monitoring",
  //         "NFC Payment systems",
  //       ],
  //       correctAnswer: "Radiation Levels monitoring",
  //       explanation:
  //         "Radiation Levels monitoring is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 24,
  //       question: "Detecting dangerous airborne substances is known as:",
  //       options: [
  //         "Supply Chain Control",
  //         "NFC Payment systems",
  //         "Explosive and Hazardous Gases detection",
  //         "Intelligent Shopping Applications",
  //       ],
  //       correctAnswer: "Explosive and Hazardous Gases detection",
  //       explanation:
  //         "Explosive and Hazardous Gases detection is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 25,
  //       question:
  //         "Tracking goods and materials as they move from origin to destination is:",
  //       options: [
  //         "NFC Payment systems",
  //         "Intelligent Shopping Applications",
  //         "Smart Product Management",
  //         "Supply Chain Control",
  //       ],
  //       correctAnswer: "Supply Chain Control",
  //       explanation:
  //         "Supply Chain Control is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 26,
  //       question:
  //         "Using wireless technology for transactions in retail is known as:",
  //       options: [
  //         "Intelligent Shopping Applications",
  //         "Smart Product Management",
  //         "Supply Chain Control",
  //         "NFC Payment systems",
  //       ],
  //       correctAnswer: "NFC Payment systems",
  //       explanation:
  //         "NFC Payment systems is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 27,
  //       question:
  //         "Enhancing the retail experience through technology is referred to as:",
  //       options: [
  //         "Smart Product Management",
  //         "Supply Chain Control",
  //         "NFC Payment systems",
  //         "Intelligent Shopping Applications",
  //       ],
  //       correctAnswer: "Intelligent Shopping Applications",
  //       explanation:
  //         "Intelligent Shopping Applications is listed as a 'Modern Day IoT Application'.",
  //     },
  //     {
  //       id: 28,
  //       question: "Managing and tracking the lifecycle of goods using IoT is:",
  //       options: [
  //         "Supply Chain Control",
  //         "NFC Payment systems",
  //         "Intelligent Shopping Applications",
  //         "Smart Product Management",
  //       ],
  //       correctAnswer: "Smart Product Management",
  //       explanation:
  //         "Smart Product Management is listed as a 'Modern Day IoT Application'.",
  //     },

  //     {
  //       id: 1,
  //       question:
  //         "According to the 'Expected!!' diagram, the number of sensors is expected to be in the:",
  //       options: ["Millions", "Billions", "Trillions", "Thousands"],
  //       correctAnswer: "Trillions",
  //       explanation: "The diagram shows 'Sensors' pointing to 'Trillions'.",
  //     },
  //     {
  //       id: 2,
  //       question:
  //         "The 'Expected!!' diagram indicates that the number of smart systems is expected to be in the:",
  //       options: ["Millions", "Billions", "Trillions", "Hundreds"],
  //       correctAnswer: "Billions",
  //       explanation:
  //         "The diagram shows 'Smart Systems' pointing to 'Billions'.",
  //     },
  //     {
  //       id: 3,
  //       question:
  //         "The 'Expected!!' diagram suggests that the number of IoT applications is expected to be in the:",
  //       options: ["Trillions", "Billions", "Millions", "Tens"],
  //       correctAnswer: "Millions",
  //       explanation: "The diagram shows 'Applications' pointing to 'Millions'.",
  //     },
  //     {
  //       id: 4,
  //       question:
  //         "The 'IoT Enablers' section depicts various elements categorized under:",
  //       options: [
  //         "Challenges, Solutions, and Outcomes",
  //         "Hardware, Software, and Networks",
  //         "Implementation, Connectivity, and Enabling Technologies",
  //         "Sensors, Systems, and Applications",
  //       ],
  //       correctAnswer:
  //         "Implementation, Connectivity, and Enabling Technologies",
  //       explanation:
  //         "The 'IoT Enablers' diagram has three main categories: 'IMPLEMENTATION', 'CONNECTIVITY', and 'ENABLING TECHNOLOGIES'.",
  //     },
  //     {
  //       id: 5,
  //       question:
  //         "Under 'IMPLEMENTATION' in the 'IoT Enablers' diagram, which of the following is represented?",
  //       options: ["ZigBee", "Cloud", "Smart Agriculture", "Bluetooth"],
  //       correctAnswer: "Smart Agriculture",
  //       explanation:
  //         "The 'IMPLEMENTATION' section includes icons representing various application areas like smart agriculture, smart homes, smart cities, etc.",
  //     },
  //     {
  //       id: 6,
  //       question:
  //         "Which of the following is listed under 'CONNECTIVITY' in the 'IoT Enablers' diagram?",
  //       options: ["Big Data", "RFID", "Smart Grid", "Deep Learning"],
  //       correctAnswer: "RFID",
  //       explanation:
  //         "The 'CONNECTIVITY' section shows technologies like ZigBee, RFID, Cellular, LoRa, etc.",
  //     },
  //     {
  //       id: 7,
  //       question:
  //         "Which of the following is categorized as an 'ENABLING TECHNOLOGY' in the 'IoT Enablers' diagram?",
  //       options: [
  //         "Smart Industry",
  //         "LoRa",
  //         "Artificial Intelligence",
  //         "Smart Home",
  //       ],
  //       correctAnswer: "Artificial Intelligence",
  //       explanation:
  //         "The 'ENABLING TECHNOLOGIES' section includes elements like Big Data, Cloud, Artificial Intelligence, Deep Learning, etc.",
  //     },

  //     {
  //       id: 1,
  //       question:
  //         "The 'Connectivity Layers' diagram illustrates different levels of connection, starting with:",
  //       options: [
  //         "Internet",
  //         "Services",
  //         "Global Connectivity",
  //         "Local Connectivity",
  //       ],
  //       correctAnswer: "Local Connectivity",
  //       explanation:
  //         "The diagram shows 'Local Connectivity' as the layer directly connecting to 'Services'.",
  //     },
  //     {
  //       id: 2,
  //       question: "Technologies like ZigBee and RFID are categorized under:",
  //       options: [
  //         "Services",
  //         "Global Connectivity",
  //         "Internet",
  //         "Local Connectivity",
  //       ],
  //       correctAnswer: "Local Connectivity",
  //       explanation:
  //         "ZigBee and RFID icons are placed within the 'Local Connectivity' layer.",
  //     },
  //     {
  //       id: 3,
  //       question: "Gateways are primarily associated with:",
  //       options: [
  //         "Services",
  //         "Local Connectivity",
  //         "Global Connectivity",
  //         "Internet",
  //       ],
  //       correctAnswer: "Global Connectivity",
  //       explanation:
  //         "Gateways are shown facilitating 'Global Connectivity' towards the 'Internet'.",
  //     },
  //     {
  //       id: 4,
  //       question:
  //         "The 'Internet' layer in the 'Connectivity Layers' diagram connects:",
  //       options: [
  //         "Local devices directly to services.",
  //         "Gateways for broader communication.",
  //         "Only service providers.",
  //         "Only IoT management systems.",
  //       ],
  //       correctAnswer: "Gateways for broader communication.",
  //       explanation:
  //         "The 'Internet' layer is shown connected to the 'Global Connectivity' layer, which includes gateways.",
  //     },
  //     {
  //       id: 5,
  //       question:
  //         "The 'Services' layer in the 'Connectivity Layers' diagram represents:",
  //       options: [
  //         "The physical devices themselves.",
  //         "The communication protocols.",
  //         "Applications and functionalities enabled by IoT.",
  //         "The network infrastructure.",
  //       ],
  //       correctAnswer: "Applications and functionalities enabled by IoT.",
  //       explanation:
  //         "The icons in the 'Services' layer depict various applications like smart homes, smart cities, etc.",
  //     },
  //     {
  //       id: 6,
  //       question:
  //         "The 'Connectivity Layers' diagram shows 'Service Providers' and 'IoT Management' as entities that interact with:",
  //       options: [
  //         "Local Connectivity.",
  //         "Global Connectivity.",
  //         "The Internet.",
  //         "Services.",
  //       ],
  //       correctAnswer: "The Internet.",
  //       explanation:
  //         "'Service Providers' and 'IoT Management' are shown connected to the 'Internet' layer.",
  //     },
  //     {
  //       id: 7,
  //       question:
  //         "According to the 'Baseline Technologies' section, technologies closely related to IoT include:",
  //       options: [
  //         "Cloud Computing, Big Data, Artificial Intelligence.",
  //         "ZigBee, Bluetooth, Wi-Fi.",
  //         "Machine-to-Machine (M2M) communications, Cyber-Physical Systems (CPS), Web-of-Things (WoT).",
  //         "Sensors, Actuators, Microcontrollers.",
  //       ],
  //       correctAnswer:
  //         "Machine-to-Machine (M2M) communications, Cyber-Physical Systems (CPS), Web-of-Things (WoT).",
  //       explanation:
  //         "The bullet points under 'Baseline Technologies' explicitly list M2M, CPS, and WoT.",
  //     },
  //     {
  //       id: 8,
  //       question: "M2M in the context of baseline IoT technologies stands for:",
  //       options: [
  //         "Man-to-Machine.",
  //         "Machine-to-Man.",
  //         "Machine-to-Machine.",
  //         "Mobile-to-Mobile.",
  //       ],
  //       correctAnswer: "Machine-to-Machine.",
  //       explanation:
  //         "The text explicitly defines 'Machine-to-Machine (M2M) communications'.",
  //     },
  //     {
  //       id: 9,
  //       question: "CPS as a baseline technology related to IoT refers to:",
  //       options: [
  //         "Consumer Payment Systems.",
  //         "Central Processing Units.",
  //         "Cyber-Physical Systems.",
  //         "Content Provisioning Services.",
  //       ],
  //       correctAnswer: "Cyber-Physical Systems.",
  //       explanation:
  //         "The text explicitly defines 'Cyber-Physical-Systems (CPS)'.",
  //     },
  //     {
  //       id: 10,
  //       question: "WoT, a baseline technology associated with IoT, stands for:",
  //       options: [
  //         "Wireless Optical Transmitters.",
  //         "Web-of-Things.",
  //         "Wide-area Operating Technologies.",
  //         "World Organization of Technology.",
  //       ],
  //       correctAnswer: "Web-of-Things.",
  //       explanation: "The text explicitly defines 'Web-of-Things (WoT)'.",
  //     },

  //     {
  //       id: 1,
  //       question: "According to the text, M2M refers to:",
  //       options: [
  //         "Communication between humans and machines.",
  //         "Interactions between software applications.",
  //         "Communications and interactions between machines and devices.",
  //         "Data exchange through wired networks only.",
  //       ],
  //       correctAnswer:
  //         "Communications and interactions between machines and devices.",
  //       explanation:
  //         "The first bullet point under 'IoT vs. M2M' states, 'M2M refers to communications and interactions between machines and devices.'",
  //     },
  //     {
  //       id: 2,
  //       question: "M2M interactions can occur through:",
  //       options: [
  //         "Direct physical connections only.",
  //         "Cloud computing infrastructure.",
  //         "Human operators.",
  //         "Traditional mail systems.",
  //       ],
  //       correctAnswer: "Cloud computing infrastructure.",
  //       explanation:
  //         "The text mentions, 'Such interactions can occur via a cloud computing infrastructure (e.g., devices exchanging information through a cloud infrastructure).'",
  //     },
  //     {
  //       id: 3,
  //       question:
  //         "M2M provides a way to manage devices and their interactions while also:",
  //       options: [
  //         "Primarily focusing on human-to-human communication.",
  //         "Avoiding the collection of machine data.",
  //         "Collecting machine and/or sensor data.",
  //         "Exclusively using satellite networks.",
  //       ],
  //       correctAnswer: "Collecting machine and/or sensor data.",
  //       explanation:
  //         "The text indicates, 'M2M offers the means for managing devices and devices interaction, while also collecting machine and/or sensor data.'",
  //     },
  //     {
  //       id: 4,
  //       question: "The term M2M was introduced by:",
  //       options: [
  //         "Internet service providers.",
  //         "Software development companies.",
  //         "Telecommunication services providers.",
  //         "Government regulatory bodies.",
  //       ],
  //       correctAnswer: "Telecommunication services providers.",
  //       explanation:
  //         "The text states, 'M2M is a term introduced by telecommunication services providers...'",
  //     },
  //     {
  //       id: 5,
  //       question: "M2M emphasizes machine interactions via:",
  //       options: [
  //         "Direct human input.",
  //         "Physical cables only.",
  //         "One or more telecom/communication networks (e.g., 3G, 4G, 5G, satellite, public networks).",
  //         "Local area networks without internet access.",
  //       ],
  //       correctAnswer:
  //         "One or more telecom/communication networks (e.g., 3G, 4G, 5G, satellite, public networks).",
  //       explanation:
  //         "The text mentions, '...and pays emphasis on machines interactions via one or more telecom/communication networks (e.g., 3G, 4G, 5G, satellite, public networks).'",
  //     },
  //     {
  //       id: 6,
  //       question:
  //         "According to the second part of the text, M2M is considered:",
  //       options: [
  //         "Completely separate from IoT.",
  //         "The primary focus of IoT development.",
  //         "A part of IoT.",
  //         "A more recent technology than IoT.",
  //       ],
  //       correctAnswer: "A part of IoT.",
  //       explanation: "The text states, 'M2M is part of the IoT...'",
  //     },
  //     {
  //       id: 7,
  //       question:
  //         "While M2M has a prominent place in IoT standards, IoT has a:",
  //       options: [
  //         "Narrower scope focused only on industrial applications.",
  //         "Broader scope including interactions between devices/things, things and people, and people with applications.",
  //         "More limited range of interactions.",
  //         "Focus solely on cloud-based interactions.",
  //       ],
  //       correctAnswer:
  //         "Broader scope including interactions between devices/things, things and people, and people with applications.",
  //       explanation:
  //         "The text explains, 'However, IoT has a broader scope than M2M, since it comprises a broader range of interactions, including interactions between devices/things, things and people, things with applications and people with applications.'",
  //     },
  //     {
  //       id: 8,
  //       question: "IoT enables the composition of workflows comprising:",
  //       options: [
  //         "Only machine-to-machine interactions.",
  //         "Only human-to-machine interactions.",
  //         "All of the above interactions (devices/things, things and people, people with applications).",
  //         "None of the above.",
  //       ],
  //       correctAnswer:
  //         "All of the above interactions (devices/things, things and people, people with applications).",
  //       explanation:
  //         "The text mentions, 'It also enables the composition of workflows comprising all of the above interactions.'",
  //     },
  //     {
  //       id: 9,
  //       question: "IoT includes the notion of:",
  //       options: [
  //         "Exclusively using satellite networks.",
  //         "Internet connectivity.",
  //         "Avoiding telecom networks.",
  //         "Only local network communication.",
  //       ],
  //       correctAnswer: "Internet connectivity.",
  //       explanation:
  //         "The text states, 'IoT includes the notion of internet connectivity...'",
  //     },
  //     {
  //       id: 10,
  //       question: "The internet connectivity in IoT:",
  //       options: [
  //         "Is always focused on the use of telecom networks.",
  //         "Is not necessarily focused on the use of telecom networks.",
  //         "Is only provided through wired connections.",
  //         "Is irrelevant to most IoT applications.",
  //       ],
  //       correctAnswer:
  //         "Is not necessarily focused on the use of telecom networks.",
  //       explanation:
  //         "The text clarifies, '...(which is provided in most of the networks outlined above), but is not necessarily focused on the use of telecom networks.'",
  //     },

  //     {
  //       id: 1,
  //       question:
  //         "From a developer's viewpoint, WoT facilitates access and control over IoT resources using:",
  //       options: [
  //         "Specialized IoT programming languages.",
  //         "Proprietary communication protocols.",
  //         "Mainstream web technologies (like HTML 5.0, JavaScript, Ajax, PHP, Ruby n' Rails etc.).",
  //         "Low-level machine code.",
  //       ],
  //       correctAnswer:
  //         "Mainstream web technologies (like HTML 5.0, JavaScript, Ajax, PHP, Ruby n' Rails etc.).",
  //       explanation:
  //         "The text explicitly mentions using 'mainstream web technologies (such as HTML 5.0, JavaScript, Ajax, PHP, Ruby n' Rails etc.)' for WoT.",
  //     },
  //     {
  //       id: 2,
  //       question: "The approach to building WoT is primarily based on:",
  //       options: [
  //         "Complex binary protocols.",
  //         "RESTful principles and REST APIs.",
  //         "Traditional client-server architectures.",
  //         "Proprietary embedded systems.",
  //       ],
  //       correctAnswer: "RESTful principles and REST APIs.",
  //       explanation:
  //         "The text states, 'The approach to building WoT is therefore based on RESTful principles and REST APIs...'",
  //     },
  //     {
  //       id: 3,
  //       question: "Building the WoT still faces challenges related to:",
  //       options: [
  //         "Limited adoption of web technologies.",
  //         "Lack of developer interest.",
  //         "Scalability, security, etc.",
  //         "High hardware costs.",
  //       ],
  //       correctAnswer: "Scalability, security, etc.",
  //       explanation:
  //         "The text mentions, 'Still, building the WoT has various scalability, security etc. challenges...'",
  //     },
  //     {
  //       id: 4,
  //       question:
  //         "While IoT focuses on creating a network of objects, WoT aims to:",
  //       options: [
  //         "Replace the existing internet infrastructure.",
  //         "Limit the number of connected devices.",
  //         "Integrate them to the Web.",
  //         "Operate independently of the internet.",
  //       ],
  //       correctAnswer: "Integrate them to the Web.",
  //       explanation:
  //         "The text states, 'While IoT is about creating a network of objects, things, people, systems and applications, WoT tries to integrate them to the Web.'",
  //     },
  //     {
  //       id: 5,
  //       question:
  //         "Technically, WoT can be considered as a flavour or option of a(n):",
  //       options: [
  //         "Physical hardware layer of IoT.",
  //         "Network layer of IoT.",
  //         "Application layer added over the IoT's network layer.",
  //         "Security layer of IoT.",
  //       ],
  //       correctAnswer: "Application layer added over the IoT's network layer.",
  //       explanation:
  //         "The text explains, 'Technically speaking, WoT can be thought as a flavour/option of an application layer added over the IoT's network layer.'",
  //     },
  //     {
  //       id: 6,
  //       question: "The scope of IoT applications is described as:",
  //       options: [
  //         "Narrower than WoT and primarily web-based.",
  //         "Identical to WoT in terms of accessibility.",
  //         "Broader and includes systems not accessible through the web (e.g., conventional WSN and RFID systems).",
  //         "Limited to only cloud-connected devices.",
  //       ],
  //       correctAnswer:
  //         "Broader and includes systems not accessible through the web (e.g., conventional WSN and RFID systems).",
  //       explanation:
  //         "The text indicates, 'However, the scope of IoT applications is broader and includes systems that are not accessible through the web (e.g., conventional WSN and RFID systems).'",
  //     },

  //     {
  //       id: 1,
  //       question:
  //         "The 'Terminological Interdependence' diagram shows IoT at the:",
  //       options: [
  //         "Periphery, as a specialized field.",
  //         "Center, interconnected with various related concepts.",
  //         "Top, as the overarching technology.",
  //         "Bottom, as a foundational element.",
  //       ],
  //       correctAnswer: "Center, interconnected with various related concepts.",
  //       explanation:
  //         "The diagram places 'IoT' in the central node, with arrows connecting it to other terminologies.",
  //     },
  //     {
  //       id: 2,
  //       question:
  //         "According to the diagram, M2M is related to IoT through the concept of:",
  //       options: ["Autonomy.", "People.", "Scale.", "Environment."],
  //       correctAnswer: "Scale.",
  //       explanation:
  //         "An arrow labeled 'SCALE' connects 'M2M' to the central 'IoT' node.",
  //     },
  //     {
  //       id: 3,
  //       question:
  //         "The diagram indicates that IoP (Internet of People) is linked to IoT via:",
  //       options: ["Synthesis.", "Autonomy.", "Environment.", "Scale."],
  //       correctAnswer: "Synthesis.",
  //       explanation:
  //         "An arrow labeled 'SYNTHESIS' connects 'IoP' to the central 'IoT' node.",
  //     },
  //     {
  //       id: 4,
  //       question:
  //         "CPS (Cyber-Physical Systems) is shown to be related to IoT through:",
  //       options: ["Synthesis.", "Autonomy.", "People.", "Scale."],
  //       correctAnswer: "Autonomy.",
  //       explanation:
  //         "An arrow labeled 'AUTONOMY' connects 'CPS' to the central 'IoT' node.",
  //     },
  //     {
  //       id: 5,
  //       question:
  //         "The diagram illustrates a connection between IoE (Internet of Everything) and IoT through:",
  //       options: ["Scale.", "Autonomy.", "Environment.", "Synthesis."],
  //       correctAnswer: "Environment.",
  //       explanation:
  //         "An arrow labeled 'ENVIRONMENT' connects 'IoE' to the central 'IoT' node.",
  //     },
  //     {
  //       id: 6,
  //       question:
  //         "Industry 4.0 is shown in the diagram as being related to IoT through:",
  //       options: ["Environment.", "Synthesis.", "People.", "Scale."],
  //       correctAnswer: "Synthesis.",
  //       explanation:
  //         "An arrow labeled 'SYNTHESIS' connects 'Industry 4.0' to the central 'IoT' node.",
  //     },
  //   ],
  // },

  // {
  //   id: "quiz1",
  //   title: "Introduction to IOT - Assignment 1",
  //   questions: [
  //     {
  //       id: 1,
  //       question: "IoT stands for ____________.",
  //       options: [
  //         "Internet of Tasks",
  //         "Internet of Tuples",
  //         "Internet of Things",
  //         "None of these",
  //       ],
  //       correctAnswer: "Internet of Things",
  //       explanation: "",
  //     },
  //     {
  //       id: 2,
  //       question:
  //         "Which of the following technologies have unified and has resulted in the evolution of IoT?",
  //       options: [
  //         "High-power embedded systems",
  //         "Super Computing",
  //         "Engine Technology",
  //         "None of these",
  //       ],
  //       correctAnswer: "None of these",
  //     },
  //     {
  //       id: 3,
  //       question: "Which of the following are the enablers of IoT?",
  //       options: ["RFID", "Nanotechnology", "Sensors", "All of these"],
  //       correctAnswer: "All of these",
  //     },
  //     {
  //       id: 4,
  //       question: "Which of the following is NOT a function of an IoT LAN?",
  //       options: [
  //         "Long range communication, global",
  //         "World wide connections",
  //         "Both (a) and (b)",
  //         "Neither (a) Nor (b)",
  //       ],
  //       correctAnswer: "Both (a) and (b)",
  //     },
  //     {
  //       id: 5,
  //       question:
  //         "The integration of existing devices, smart devices, and constrained nodes in a singular framework is one of the reasons for the address crunch in IoT. True or False?",
  //       options: ["True", "False"],
  //       correctAnswer: "True",
  //     },
  //     {
  //       id: 6,
  //       question:
  //         "In Multi-homing, a node/network is connected to a single network for improved reliability. True or False?",
  //       options: ["True", "False"],
  //       correctAnswer: "False",
  //     },
  //     {
  //       id: 7,
  //       question:
  //         "Which of the following is/are the approach/approaches for multi-homing?",
  //       options: [
  //         "Proxy-based approach",
  //         "Gateway-based approach",
  //         "Both (a) and (b)",
  //         "None of these",
  //       ],
  //       correctAnswer: "Both (a) and (b)",
  //     },
  //     {
  //       id: 8,
  //       question: "IPv6 uses ____________ notation for its representation.",
  //       options: ["Hexadecimal", "Binary", "Decimal", "None of these"],
  //       correctAnswer: "Hexadecimal",
  //     },
  //     {
  //       id: 9,
  //       question:
  //         "The parameters sensed by a sensor may be sent to the cloud for further processing. True or False?",
  //       options: ["False", "True"],
  //       correctAnswer: "True",
  //     },
  //     {
  //       id: 10,
  //       question:
  //         "The IPv6 notation uses ___________________ number of bits to represent an address.",
  //       options: ["64", "128", "Both (a) and (b)", "Neither (a) nor (b)"],
  //       correctAnswer: "128",
  //     },
  //     {
  //       id: 11,
  //       question: "A sensor is -",
  //       options: [
  //         "Only sensitive to the measured property",
  //         "Insensitive to any other property than what the sensor is made to sense",
  //         "Both (a) and (b)",
  //         "None of these",
  //       ],
  //       correctAnswer: "Both (a) and (b)",
  //     },
  //     {
  //       id: 12,
  //       question: "We classify sensors based on -",
  //       options: ["Output", "Data type", "Both (a) and (b)", "None of these"],
  //       correctAnswer: "None of these",
  //     },
  //     {
  //       id: 13,
  //       question: "Which of the following is a correct statement?",
  //       options: [
  //         "Controlling AC loads using low DC signals",
  //         "Relays are electromechanical",
  //         "Relays are actuators",
  //         "All of these",
  //       ],
  //       correctAnswer: "All of these",
  //     },
  //     {
  //       id: 14,
  //       question:
  //         "Based on the output, sensors are classified as _______________________",
  //       options: [
  //         "Analog",
  //         "Digital",
  //         "Both (a) and (b)",
  //         "Neither (a) nor (b)",
  //       ],
  //       correctAnswer: "Both (a) and (b)",
  //     },
  //     {
  //       id: 15,
  //       question: "Soft actuators are -",
  //       options: [
  //         "Polymer-based",
  //         "Mechanical",
  //         "Electromechanical",
  //         "None of these",
  //       ],
  //       correctAnswer: "Polymer-based",
  //     },
  //   ],
  // },
  // {
  //   id: "quiz2",
  //   title: "Introduction to IOT - Assignment 2",
  //   questions: [
  //     {
  //       id: 1,
  //       question: "Based on functionality, MQTT is a",
  //       options: ["Transport", "Data", "Semantic", "None of these"],
  //       correctAnswer: "Data",
  //     },
  //     {
  //       id: 2,
  //       question: "MQTT is designed for -",
  //       options: [
  //         "Remote connections",
  //         "Limited bandwidth",
  //         "Both (a) and (b)",
  //         "Neither (a) nor (b)",
  //       ],
  //       correctAnswer: "Both (a) and (b)",
  //     },
  //     {
  //       id: 3,
  //       question:
  //         "State True or False. MQTT protocol follows 1. Client-Server 2. Publish-Subscribe 3. Both (a) and (b) 4. None of these paradigm for exchanging messages.",
  //       options: ["True", "False"],
  //       correctAnswer: "False",
  //     },
  //     {
  //       id: 4,
  //       question:
  //         'State True or False. Statement: "In MQTT, the Subscribers are Lightweight Sensors."',
  //       options: ["True", "False"],
  //       correctAnswer: "False",
  //     },
  //     {
  //       id: 5,
  //       question: "Which of the following is MQTT component?",
  //       options: ["Middleman", "Mules", "Both (a) and (b)", "None of these"],
  //       correctAnswer: "None of these",
  //     },
  //     {
  //       id: 6,
  //       question: "State True or False. A topic in MQTT can only be numbers.",
  //       options: ["False", "True"],
  //       correctAnswer: "False",
  //     },
  //     {
  //       id: 7,
  //       question:
  //         "State True or False. There are only two methods specified by the MQTT protocol.",
  //       options: ["False", "True"],
  //       correctAnswer: "False",
  //     },
  //     {
  //       id: 8,
  //       question:
  //         "The Publish/Subscribe architecture in MQTT is __________ driven.",
  //       options: ["Event", "Pulse", "Sound", "None of these"],
  //       correctAnswer: "Event",
  //     },
  //     {
  //       id: 9,
  //       question:
  //         "State True or False. The topic is the routing information for the broker.",
  //       options: ["True", "False"],
  //       correctAnswer: "True",
  //     },
  //     {
  //       id: 10,
  //       question: "COAP is __________ and __________.",
  //       options: [
  //         "Based on HTTP",
  //         "Is designed for M2M applications",
  //         "None of these",
  //         "Both (a) and (b)",
  //       ],
  //       correctAnswer: "Both (a) and (b)",
  //     },
  //     {
  //       id: 11,
  //       question:
  //         "In CoAP, client-server interaction is asynchronous over a datagram transport protocol such as __________.",
  //       options: ["UDP", "TCP", "IP", "XMP"],
  //       correctAnswer: "UDP",
  //     },
  //     {
  //       id: 12,
  //       question: "What is the full form of AMOQP?",
  //       options: [
  //         "Advanced Message Querying Protocol",
  //         "Advanced Message Quality Protocol",
  //         "Advanced Message Queuing Protocol",
  //         "None of these",
  //       ],
  //       correctAnswer: "Advanced Message Queuing Protocol",
  //     },
  //     {
  //       id: 13,
  //       question: "AMQP has __________ number of frame types.",
  //       options: ["6", "3", "5", "9"],
  //       correctAnswer: "9",
  //     },
  //     {
  //       id: 14,
  //       question:
  //         'State True or False. Statement: "The OSI model has 7 layers."',
  //       options: ["True", "False"],
  //       correctAnswer: "True",
  //     },
  //     {
  //       id: 15,
  //       question:
  //         'The "Destination Address" in the IPv4 packet represents which of the following?',
  //       options: [
  //         "The source node address of the packet",
  //         "The intermediate hop in the network",
  //         "Both (a) and (b)",
  //         "Neither (a) nor (b)",
  //       ],
  //       correctAnswer: "Neither (a) nor (b)",
  //     },
  //   ],
  // },
  // {
  //   id: "quiz3",
  //   title: "Introduction to Internet of Things - Assignment 3",
  //   questions: [
  //     {
  //       id: 1,
  //       question:
  //         "State True or False. Statement: “WirelessHART is the latest release of Highway Addressable Remote Transducer protocol.”",
  //       options: ["True", "False"],
  //       correctAnswer: "True",
  //     },
  //     {
  //       id: 2,
  //       question:
  //         "State True or False. Statement: “Wired HART has a network layer.”",
  //       options: ["True", "False"],
  //       correctAnswer: "False",
  //     },
  //     {
  //       id: 3,
  //       question:
  //         "State true or false: “WirelessHART physical layer is derived from 802.15.2 protocol”",
  //       options: ["False", "True"],
  //       correctAnswer: "False",
  //     },
  //     {
  //       id: 4,
  //       question: "WirelessHART operates only in __________ GHz ISM band.",
  //       options: ["3.7", "4.8", "4.8", "2.4"],
  //       correctAnswer: "2.4",
  //     },
  //     {
  //       id: 5,
  //       question:
  //         "HART standard was developed from _____________ smart field devices.",
  //       options: ["amplified", "diminished", "isolated", "networked"],
  //       correctAnswer: "networked",
  //     },
  //     {
  //       id: 6,
  //       question:
  //         "Main difference between wired and unwired versions is in the physical, data link, and ______ layers.",
  //       options: ["Data link", "Network", "Transport", "None of these"],
  //       correctAnswer: "Network",
  //     },
  //     {
  //       id: 7,
  //       question:
  //         "State true or false “Collision free and deterministic communication is achieved in HART’s data link layer.”",
  //       options: ["True", "False"],
  //       correctAnswer: "True",
  //     },
  //     {
  //       id: 8,
  //       question: "Channel hopping is incorporated in which layer of HART?",
  //       options: [
  //         "Data link layer",
  //         "Physical layer",
  //         "Application layer",
  //         "Transport layer",
  //       ],
  //       correctAnswer: "Data link layer",
  //     },
  //     {
  //       id: 9,
  //       question:
  //         "State True or False. “The HART application layer is responsible for extracting commands from a message, executing it and generating responses.”",
  //       options: ["True", "False"],
  //       correctAnswer: "True",
  //     },
  //     {
  //       id: 10,
  //       question:
  //         "NFC is designed for use by devices within ________________ to each other.",
  //       options: [
  //         "Anywhere on the globe",
  //         "A small building",
  //         "Both (a) and (b)",
  //         "None of these",
  //       ],
  //       correctAnswer: "None of these",
  //     },
  //     {
  //       id: 11,
  //       question:
  //         "Passive NFC devices ___________ information which is _____________ by other devices.",
  //       options: [
  //         "contain, read",
  //         "read, contain",
  //         "contain, contain",
  //         "None of these",
  //       ],
  //       correctAnswer: "contain, read",
  //     },
  //     {
  //       id: 12,
  //       question:
  //         "State True or False. “NFC devices work on the principle of magnetic induction.”",
  //       options: ["True", "False"],
  //       correctAnswer: "True",
  //     },
  //     {
  //       id: 13,
  //       question: "Bluetooth technology is based on _________________.",
  //       options: ["HART", "ZigBee", "All of these", "None of these"],
  //       correctAnswer: "None of these",
  //     },
  //     {
  //       id: 14,
  //       question:
  //         "State whether the following statement is true or false. Statement: The Link Manager Protocol in Bluetooth manages the only establishment and authentication.",
  //       options: ["True", "False"],
  //       correctAnswer: "False",
  //     },
  //     {
  //       id: 15,
  //       question: "Zigbee commonly uses __________data rate.",
  //       options: ["260 bps", "260 kbps", "260 Mbps", "None of these"],
  //       correctAnswer: "None of these",
  //     },
  //   ],
  // },
  // {
  //   id: "quiz4",
  //   title: "Introduction to Internet of Things - Assignment 4",
  //   questions: [
  //     {
  //       id: 1,
  //       question:
  //         "State whether the following statement is true or false. Statement: In “AID”, a set of sensor nodes are deployed over an agricultural field.",
  //       options: ["True", "False"],
  //       correctAnswer: "True",
  //     },
  //     {
  //       id: 2,
  //       question:
  //         "State True or False. Statement: Ultrasonic sensor senses the distance at which an object is located.",
  //       options: ["True", "False"],
  //       correctAnswer: "True",
  //     },
  //     {
  //       id: 3,
  //       question:
  //         "State true or false. In case of static sensors, where to deploy and/or activate sensors in WSN is a coverage problem.",
  //       options: ["True", "False"],
  //       correctAnswer: "True",
  //     },
  //     {
  //       id: 4,
  //       question:
  //         "State whether the following statement is true or false. Statement: Objective of coverage in WSN is to use maximum number of sensors and minimize network lifetime.",
  //       options: ["True", "False"],
  //       correctAnswer: "False",
  //     },
  //     {
  //       id: 5,
  //       question:
  //         "State whether the following statement is true or false. Statement: “A crossing is covered if it is in the interior of at least one node’s coverage disk.”",
  //       options: ["True", "False"],
  //       correctAnswer: "True",
  //     },
  //     {
  //       id: 6,
  //       question:
  //         "State which of the following is/are correct for stationary wireless sensor networks.",
  //       options: [
  //         "Topology cannot be changed automatically.",
  //         "Node failure may result in partition of networks.",
  //         "Both (a) and (b)",
  //         "None of these",
  //       ],
  //       correctAnswer: "Both (a) and (b)",
  //     },
  //     {
  //       id: 7,
  //       question: "Most problems in static WSN can be classified as -",
  //       options: [
  //         "No coverage",
  //         "More coverage",
  //         "Both (a) and (b)",
  //         "None of these",
  //       ],
  //       correctAnswer: "None of these",
  //     },
  //     {
  //       id: 8,
  //       question:
  //         "Which of the following is/are correct with respect UAV networks?",
  //       options: [
  //         "Multi-tasking",
  //         "Large coverage area",
  //         "Both (a) and (b)",
  //         "None of these",
  //       ],
  //       correctAnswer: "Both (a) and (b)",
  //     },
  //     {
  //       id: 9,
  //       question: "State True or False. Statement: UAV networks are scalable.",
  //       options: ["True", "False"],
  //       correctAnswer: "True",
  //     },
  //     {
  //       id: 10,
  //       question: "In Mobile WSN, the Data Mules",
  //       options: [
  //         "Collect the data from sensor nodes",
  //         "Goes to the sink and delivers the collected data",
  //         "Both (a) and (b)",
  //         "Neither (a) nor (b)",
  //       ],
  //       correctAnswer: "Both (a) and (b)",
  //     },
  //     {
  //       id: 11,
  //       question: "The full form of AUV is -",
  //       options: [
  //         "Antenna Used Vehicle",
  //         "Autonomous Underwater Vehicle",
  //         "Both (a) and (b)",
  //         "Neither (a) nor (b)",
  //       ],
  //       correctAnswer: "Autonomous Underwater Vehicle",
  //     },
  //     {
  //       id: 12,
  //       question:
  //         "Humans carry their devices and move around. Sensors embedded within the devices record readings. Sensory readings are then transmitted for processing. This paradigm of sensing is known as –",
  //       options: [
  //         "Machine Centric Sensing",
  //         "Device Centric Sensing",
  //         "Human Centric Sensing",
  //         "None of these",
  //       ],
  //       correctAnswer: "Human Centric Sensing",
  //     },
  //     {
  //       id: 13,
  //       question:
  //         "State True or False. Energy of Devices and Participant selection are not two major problems in Human Centric Sensing.",
  //       options: ["True", "False"],
  //       correctAnswer: "False",
  //     },
  //     {
  //       id: 14,
  //       question:
  //         "Which of the following network topologies is used in UAV networks?",
  //       options: ["Bus", "Star", "Both (a) and (b)", "Neither (a) nor (b)"],
  //       correctAnswer: "Star",
  //     },
  //     {
  //       id: 15,
  //       question:
  //         "State true of false. The M2M Application Platform provides integrated services based on device collected data-sets.",
  //       options: ["True", "False"],
  //       correctAnswer: "True",
  //     },
  //   ],
  // },
  // {
  //   id: "quiz5",
  //   title: "Introduction to Internet of Things - Assignment 5",
  //   questions: [
  //     {
  //       id: 1,
  //       question: "Which of the following is/are current challenges in IoT?",
  //       options: [
  //         "Large scale of co-operation",
  //         "Global heterogeneity",
  //         "Both (a) and (b)",
  //         "Neither (a) nor (b)",
  //       ],
  //       correctAnswer: "Both (a) and (b)",
  //     },
  //     {
  //       id: 2,
  //       question:
  //         "State True or False. Statement: “Interoperability is not a characteristic of a product or system.”",
  //       options: ["True", "False"],
  //       correctAnswer: "False",
  //     },
  //     {
  //       id: 3,
  //       question: "Interoperability is required because",
  //       options: [
  //         "There are different programming languages",
  //         "There are different communication protocols",
  //         "Both (a) and (b)",
  //         "Neither (a) nor (b)",
  //       ],
  //       correctAnswer: "Both (a) and (b)",
  //     },
  //     {
  //       id: 4,
  //       question:
  //         "State whether the following statement is true or false Statement: “Use of different programming languages such as JavaScript, Python, JAVA, and others is an example of heterogeneity in IoT. This brings in the need for interoperability.”",
  //       options: ["False", "True"],
  //       correctAnswer: "True",
  //     },
  //     {
  //       id: 5,
  //       question:
  //         "State True or False. Statement: “The interoperability between devices and device users in terms of message formats is called Systematic Interoperability.”",
  //       options: ["True", "False"],
  //       correctAnswer: "False",
  //     },
  //     {
  //       id: 6,
  //       question: "What is the full form of UMB in IoT interoperability?",
  //       options: [
  //         "Universal Meta Bridge",
  //         "Universal Main Bridge",
  //         "Universal Main Bracket",
  //         "None of these",
  //       ],
  //       correctAnswer: "None of these",
  //     },
  //     {
  //       id: 7,
  //       question:
  //         "State true of false Arduino is an open-source electronic programmable board.",
  //       options: ["True", "False"],
  //       correctAnswer: "True",
  //     },
  //     {
  //       id: 8,
  //       question:
  //         "State true or false Additional electronic circuits are essential to load a program into the Arduino controller board.",
  //       options: ["True", "False"],
  //       correctAnswer: "False",
  //     },
  //     {
  //       id: 9,
  //       question: "Arduino UNO has _________ number of Digital I/O pins.",
  //       options: ["8", "13", "14", "None of these"],
  //       correctAnswer: "14",
  //     },
  //     {
  //       id: 10,
  //       question:
  //         "What does the following code do?\nint ledPin = 13;\nvoid setup() {\npinMode(ledPin, OUTPUT);\nfor (int i = 0; i < 3; i++) {\ndigitalWrite(ledPin, HIGH);\ndelay(1000);\ndigitalWrite(ledPin, LOW);\ndelay(500);\n}\n}\nvoid loop() {\n// Do nothing\n}",
  //       options: [
  //         "Blink 3 times with 1000ms ON and 500ms OFF",
  //         "Blink 3 times with 500ms ON and 500ms OFF",
  //         "Blink 3 times with 1000ms ON and 1000ms OFF",
  //         "Stay ON continuously",
  //       ],
  //       correctAnswer: "Blink 3 times with 1000ms ON and 500ms OFF",
  //     },
  //     {
  //       id: 11,
  //       question:
  //         "How many types of loops will you find in Arduino Programming?",
  //       options: ["1", "2", "3", "4"],
  //       correctAnswer: "3",
  //     },
  //     {
  //       id: 12,
  //       question: "Choose the right option for if/conditional operator.",
  //       options: [
  //         "Val = (condition)?(Statement 1):(Statement 2)",
  //         "Val = (condition)?(Statement 2):(Statement 1)",
  //         "Val = (condition):(Statement 1)?(Statement 2)",
  //         "Val = (condition):(Statement 2)?(Statement 1)",
  //       ],
  //       correctAnswer: "Val = (condition)?(Statement 1):(Statement 2)",
  //     },
  //     {
  //       id: 13,
  //       question:
  //         "What is the purpose of calling dht.begin(); in the setup() function?",
  //       options: [
  //         "To initialize the Serial Monitor",
  //         "To start communication with the DHT sensor",
  //         "To set the temperature and humidity values to zero",
  //         "To define the data pin for the sensor",
  //       ],
  //       correctAnswer: "To start communication with the DHT sensor",
  //     },
  //     {
  //       id: 14,
  //       question:
  //         "What function is used to read the humidity value from the DHT sensor?",
  //       options: [
  //         "dht.getHumidity();",
  //         "dht.readTemp();",
  //         "dht.readHumidity();",
  //         "dht.getTemperature();",
  //       ],
  //       correctAnswer: "dht.readHumidity();",
  //     },
  //     {
  //       id: 15,
  //       question:
  //         "What function is used to set the servo motor to a specific angle?",
  //       options: [
  //         "ServoDemo.move()",
  //         "ServoDemo.rotate()",
  //         "ServoDemo.write()",
  //         "ServoDemo.setAngle()",
  //       ],
  //       correctAnswer: "ServoDemo.write()",
  //     },
  //   ],
  // },
  // {
  //   id: "quiz6",
  //   title: "Introduction to Internet of Things - Assignment 6",
  //   questions: [
  //     {
  //       id: 1,
  //       question:
  //         "State True or False. Statement: “Python is popular for embedded application development as it is a very lightweight programming language.”",
  //       options: ["True", "False"],
  //       correctAnswer: "True",
  //     },
  //     {
  //       id: 2,
  //       question:
  //         "State True or False. Adafruit provides a library to work with DHT22 Sensor.",
  //       options: ["True", "False"],
  //       correctAnswer: "True",
  //     },
  //     {
  //       id: 3,
  //       question:
  //         "Consider the following piece of Python code. What is the output?\nx = [4, 5, 6]\ny = [str(x[0] + 1), str(len(x) * 2) + '&Code']\nz = y[1].split('&')\nprint(z[1])",
  //       options: ["5", "12", "Code", "&Code"],
  //       correctAnswer: "Code",
  //     },
  //     {
  //       id: 4,
  //       question:
  //         "State True or False. Statement: “To indicate different blocks of code, Python follows rigid indentation.”",
  //       options: ["True", "False"],
  //       correctAnswer: "True",
  //     },
  //     {
  //       id: 5,
  //       question:
  //         "What is the output of the following line of code in Python?\n>>> print “Hi, Welcome to python!”",
  //       options: [
  //         "Hi, Welcome to python!",
  //         "“Hi, Welcome to python!”",
  //         "Hi, Welcome to python",
  //         "None of these",
  //       ],
  //       correctAnswer: "Hi, Welcome to python!",
  //     },
  //     {
  //       id: 6,
  //       question:
  //         "During remote server access by a Raspberry Pi, where the Raspberry Pi acts as a client, the client needs the following?",
  //       options: [
  //         "Only IP address of server",
  //         "Only port number",
  //         "Both server IP address and port number",
  //         "Client’s IP address",
  //       ],
  //       correctAnswer: "Both server IP address and port number",
  //     },
  //     {
  //       id: 7,
  //       question:
  //         "State whether the following command to install the PIL library is correct or not.\nsudo pip install pillow",
  //       options: ["Correct", "Incorrect"],
  //       correctAnswer: "Correct",
  //     },
  //     {
  //       id: 8,
  //       question:
  //         'What is the purpose of the  "w"  mode in the  open()  function in Python?',
  //       options: [
  //         "To read a file",
  //         "To write data to a file, overwriting existing content",
  //         "To append data to a file",
  //         "To open a file in read and write mode",
  //       ],
  //       correctAnswer: "To write data to a file, overwriting existing content",
  //     },
  //     {
  //       id: 9,
  //       question:
  //         'What will be the output of the given Python program when reading from the file?\nwith open("PythonProgram.txt", "w") as file:\nfile.write("Writing data") \nwith open("PythonProgram.txt", "r") as file: \nf = file.read() print(\'Reading from the file\\n\') print(f)',
  //       options: [
  //         "Writing data",
  //         "Reading from the file \n        Writing data",
  //         "Error: File not found",
  //         "None of the above",
  //       ],
  //       correctAnswer: "Reading from the file \n        Writing data",
  //     },
  //     {
  //       id: 10,
  //       question: "Can we configure Raspberry Pi as a File Server?",
  //       options: ["Yes", "No"],
  //       correctAnswer: "Yes",
  //     },
  //     {
  //       id: 11,
  //       question:
  //         "Which command is used to configure the Raspberry Pi for the camera module?",
  //       options: [
  //         "sudo camera-config",
  //         "sudo raspi-config",
  //         "sudo enable-camera",
  //         "sudo pi-setup",
  //       ],
  //       correctAnswer: "sudo raspi-config",
  //     },
  //     {
  //       id: 12,
  //       question:
  //         "What is the final step after enabling the camera in the Raspberry Pi configuration?",
  //       options: [
  //         "Restart the camera service",
  //         "Run a camera test command",
  //         "Reboot the Raspberry Pi",
  //         "Reinstall the Raspberry Pi OS",
  //       ],
  //       correctAnswer: "Reboot the Raspberry Pi",
  //     },
  //     {
  //       id: 13,
  //       question: "Which command Exits the nano editor?",
  //       options: ["Ctrl + X", "Ctrl + O", "Ctrl + K", "None of these"],
  //       correctAnswer: "Ctrl + X",
  //     },
  //     {
  //       id: 14,
  //       question:
  //         "In a temperature-controlled fan system using a relay, when should the fan turn on?",
  //       options: [
  //         "When the relay is manually triggered",
  //         "When the surrounding temperature is lower than a predefined threshold",
  //         "When the surrounding temperature exceeds a predefined threshold",
  //         "When the battery voltage drops below a certain level",
  //       ],
  //       correctAnswer:
  //         "When the surrounding temperature exceeds a predefined threshold",
  //     },
  //     {
  //       id: 15,
  //       question:
  //         "What does the following line of code do?\nraspistillcapture -o image.jpg",
  //       options: [
  //         "Captures video feed",
  //         "Captures still image",
  //         "Both (a) and (b)",
  //         "None of these",
  //       ],
  //       correctAnswer: "None of these",
  //     },
  //   ],
  // },
];
