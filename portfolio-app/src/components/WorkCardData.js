import pro1 from "../assets/assets_updated/project1.png";
import pro2 from "../assets/assets_updated/project2.png";
import pro3 from "../assets/assets_updated/project3.png";
import pro4 from "../assets/assets_updated/project4.png";
import pro5 from "../assets/assets_updated/project5.png";

const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "HREyes: Novel Light Display Communication for Underwater Robotics",
        text: "A real co-authored paper with the Interactive Robotics Laboratory at the University of Minnesota! I developed a novel gaze cue communication system for the lab's open source robot using Robot Operating System (ROS) and C++.",
        view: "https://www.researchgate.net/publication/372124177_HREyes_Design_Development_and_Evaluation_of_a_Novel_Method_for_AUVs_to_Communicate_Information_and_Gaze_Direction",
        source: "https://github.com/adityaprabhu16/interactive-robotics-research"
    },
    {
        imgsrc: pro2,
        title: "Canopy Systems: A Live Greenhouse Monitoring Platform",
        text: "ACTIVE PROJECT: I have developed a dynamic dashboard using React and Python Flask server running on the Raspberry Pi to help myself and other greenhouse growers monitor their assets remotely from anywhere in the world! Currently has active greenhouse users at the University of Minnesota.",
        view: "https://www.youtube.com/watch?v=x4zvNvivapk",
        source: "https://github.com/adityaprabhu16/canopy-systems-posts/blob/master/Irrigation%20Case%20Studies/Canopy_Irrigation_Case_Study_Trend_Analysis.ipynb"

    },
    {
        imgsrc: pro3,
        title: "Smart Agent for Plant Growth Assistance (Hackathon 2nd Place)",
        text: "A robust chat modal frontend developed in React and a webhook API that queries the right tools to answer the user's question across LIVE DATA from their growing setups! Webhook gets triggered whenever the user asks a question, prompting a RAG agent to synthesize a response by examining the user's data.",
        view: "https://youtu.be/Bsmnlg97Gk0",
        source: "https://github.com/adityaprabhu16/generative-ai-research/blob/master/IndoorFarmingAgent/README.md"
    },
    {
        imgsrc: pro4,
        title: "Low Latency Data Streaming for Smart Irrigation",
        text: "I created a custom real-time data streaming interface using MQTT, Telegraf, and InfluxDB so I can monitor (and even trigger!) my irrigation controls remotely! I also explored MaterialUI to create beautiful engaging charts, as well as REACT CONTEXT API to share data between components and update with the latest data in the UI!",
        view: "https://www.youtube.com/watch?v=EhA_aZHVxLM",
        source: "https://www.youtube.com/@CanopySystemsTech"
    },
    {
        imgsrc: pro5,
        title: "Solar Powered Smart Sensor for Environmental Monitoring",
        text: "I Built a COMPLETELY CUSTOM solar-powered smart sensor for environmental monitoring! The same ones I use to gather data to feed into my dashboards currently! Using my computer engineering knowledge, I programmed an Espressif microcontroller in C and PlatformIO to collect data from various sensors, and send it to the internet via a Googlesheets API. I even created my own custom board using Altium Designer and had it manufactured to streamline the development process of my new sensor.",
        view: "https://youtu.be/g5zG7EngwB8",
        source: "https://www.linkedin.com/feed/update/urn:li:activity:7142886591500271616/"
    },
]

export default ProjectCardData;