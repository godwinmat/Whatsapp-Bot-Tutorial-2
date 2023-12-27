const technologyQuestions = [
  {
    question: "What is AI?",
    answer: "Artificial intelligence (AI) refers to the development of computer systems that can perform tasks requiring human intelligence. These systems are designed to mimic cognitive functions such as learning, problem-solving, speech recognition, and decision-making. AI finds applications in various fields, including machine learning, natural language processing, computer vision, and robotics.",
    link: "https://en.wikipedia.org/wiki/Artificial_intelligence"
  },
  {
    question: "What is VR?",
    answer: "Virtual reality (VR) is a technology that creates a simulated environment that can be similar to or completely different from the real world. By wearing a VR headset and sometimes using other sensory input devices, users can immerse themselves in a computer-generated 3D environment. VR is widely used in gaming, training simulations, architectural design, and healthcare.",
    link: "https://en.wikipedia.org/wiki/Virtual_reality"
  },
  {
    question: "What is IoT?",
    answer: "The Internet of Things (IoT) is a network of physical devices, vehicles, appliances, and other objects embedded with sensors, software, and connectivity that enables them to send and receive data. These devices can communicate with each other and with humans, enabling automation, data collection, and analysis. IoT applications include smart homes, industrial automation, agriculture, and healthcare monitoring.",
    link: "https://en.wikipedia.org/wiki/Internet_of_things"
  },
  {
    question: "What is 5G?",
    answer: "5G is the fifth generation of wireless technology, providing faster speeds, lower latency, and greater capacity compared to previous generations. It enables seamless connectivity between devices and supports emerging technologies such as autonomous vehicles, Internet of Things (IoT), augmented reality (AR), and virtual reality (VR). With 5G, users can experience ultra-high-definition streaming, real-time gaming, and faster downloads.",
    link: "https://en.wikipedia.org/wiki/5G"
  },
  {
    question: "What is AR?",
    answer: "Augmented reality (AR) is a technology that overlays digital information, such as images, videos, or 3D models, onto the real world. AR enhances the user's perception and interaction with their surroundings by combining virtual and real elements. This technology is used in applications ranging from mobile games and interactive marketing to industrial design and training simulations.",
    link: "https://en.wikipedia.org/wiki/Augmented_reality"
  },
  {
    question: "What is UX?",
    answer: "User experience (UX) refers to the overall experience a user has when interacting with a product, system, or service. It focuses on creating intuitive and enjoyable interactions by considering factors such as usability, accessibility, and emotional satisfaction. UX design involves understanding user needs, conducting research, prototyping, and testing to ensure the final product meets user expectations and goals.",
    link: "https://en.wikipedia.org/wiki/User_experience"
  },
  {
    question: "What is CSS?",
    answer: "Cascading Style Sheets (CSS) is a language used to style the visual presentation of web pages. It provides web developers with the ability to control the layout, colors, fonts, and other visual aspects of a website. CSS works in conjunction with HTML, the markup language used for structuring web content, allowing developers to create visually appealing and responsive web pages.",
    link: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
  },
  {
    question: "What is SEO?",
    answer: "Search Engine Optimization (SEO) is the practice of improving a website's visibility in search engine results. It involves optimizing various elements of a website, such as content, structure, and metadata, to increase organic (non-paid) traffic from search engines. SEO techniques include keyword research, on-page optimization, link building, and technical optimizations to enhance a website's search engine rankings.",
    link: "https://en.wikipedia.org/wiki/Search_engine_optimization"
  },
  {
    question: "What is API?",
    answer: "An Application Programming Interface (API) allows different software applications to communicate and interact with each other. APIs define the methods, protocols, and data formats that applications can use to request and exchange information. They enable developers to integrate external services, access resources, and build more efficient and scalable applications by reusing existing functionalities.",
    link: "https://en.wikipedia.org/wiki/Application_programming_interface"
  },
  {
    question: "What is SQL?",
    answer: "Structured Query Language (SQL) is a programming language used for managing and manipulating databases. SQL provides a standardized way to interact with relational database management systems (RDBMS) and perform tasks such as retrieving data, inserting records, updating information, and creating database structures. It is widely used in web development, data analysis, and business intelligence.",
    link: "https://en.wikipedia.org/wiki/SQL"
  }
];

const name = "Tutorial Bot 5"

const welcomeMessage = `My name is ${name} and I am a Q&A Bot🤖.\n\nI have 10 questions to ask.\nChoose a question from the drop-down below to get answers.`

module.exports = {technologyQuestions, welcomeMessage, name}