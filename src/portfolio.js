
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";
import IconNodejs from 'react-devicon/nodejs/original-wordmark'

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Dhanur Motwani",
  title: "Hi, I'm Dhanur",
  subTitle: emoji("A passionate Full Stack Software Developer 🚀 having an experience of building Web Applications with JavaScript / Reactjs / Nodejs / Redux and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1zrYxIg9ZIxKdcVJuiLs_iT7NcnfS-3mQ/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/dhanur07",
  linkedin: "https://www.linkedin.com/in/deepgamit2105/",
  gmail: "dhanurmotwani07@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/deepkgamit",
  instagram: "https://www.instagram.com/deep_gamit21/"
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "devicon-java-plain"
    },
    {
      skillName: "Html5",
      fontAwesomeClassname: "devicon-html5-plain"
    },
    {
      skillName: "Css3",
      fontAwesomeClassname: "devicon-css3-plain"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "devicon-javascript-plain"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "devicon-react-plain"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "devicon-nodejs-plain-wordmark"
    },
    {
      skillName: "ExpressJS",
      fontAwesomeClassname: "devicon-express-original"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "devicon-bootstrap-plain"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "devicon-mysql-plain"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "devicon-mongodb-plain"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "devicon-amazonwebservices-plain"
    },
    {
      skillName: "Sequelize",
      fontAwesomeClassname: "devicon-sequelize-plain"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "devicon-git-plain"
    },
    {
      skillName: "Visual Studio",
      fontAwesomeClassname: "devicon-visualstudio-plain"
    }
  ],

  competencies : [
      {
        title: "Programming Languages",
        content : [
          "Java", "JavaScript[ES6]", "SQL", "Shell Scripting", "Python", "C++"
        ]
      }, 
      {
        title: "Web Technologies",
        content : [
          "HTML5", "CSS3", "Bootstrap", "ReactJs", "NodeJs", "ExpressJs", "Sequelize", "Redux", "JSX", "RESTful API", "GraphQL", "JSON"
        ]
      }, 
      {
        title: "Java / J2EE",
        content : [
          "Spring MVC", "Hibernate ORM", "Maven", "Apache Tomcat", "JSP", "Servlets", "JSTL", "JavaBeans", "XML", 
        ]
      },
      {
        title: "Database",
        content : [
          "MySQL", "JDBC", "MongoDB", "PostgreSQL", "Firebase", "MS SQL"
        ]
      },
      {
        title: "Tools / Software",
        content : [
          "Git", "GitHub Actions", "Terraform", "Packer", "Netbeans", "Visual Studio Code", "Eclipse", "Spring Tool Suite", "Postman", "Bitbucket"
        ]
      },
      {
        title: "AWS Services",
        content : [
          "IAM", "EC2", "VPC", "S3", "RDS", "CodeDeploy", "Route53"
        ]
      }
  ]


};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Information Technology Services",  
      company: "Northeastern University",
      companylogo: require("./assets/images/northeastern.png"),
      date: "September 2020 – Present",
      desc: "Instructional Assistant ",
      descBullets: [
        "Integrated big databases of meeting links and on-premise operations using Pandas data frames and generated work distribution for 300 On-Premise operators ",
        "Fetched generated data using SqlAlchemy, React-Hooks and stored in Redux store using actions, reducer pattern",
       " Assisted faculties with problem solving and troubleshooting the issues during on-going classes with hybrid teaching technologies "
        
      ]
    },
    {
      role: "Junior Software Engineer",   
      company: "DA-IICT",
      companylogo: require("./assets/images/dhirubhai.png"),
      date: "May 2018 – April 2019",
      desc: "",
      descBullets: [
        "Involved in the major steps of software development life cycle such as understand requirements, design, code and testing phases of application following Agile Development Methodology ",
        "Collaborated with cross-functional team of technical and non-technical team members to implement all level complexity tasks"

      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "dhanur07", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false 
};


// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Publications 🏆 "),
  subtitle: "Some of my publications !",

  achivementsCards: [
    {
      title: "Survey of Health Care Industries by studying the architecture and functionality of Big Data Analytics.",
      subtitle: "",
     // image: require("./assets/images/aws_cloud.png"),
      footerLink: [
        { name: "Publication", url: "http://www.ijesrt.com/issues%20pdf%20file/Archive-2018/August-2018/68.pdf" }
      ]
    },
    {
      title: "The study and survey point up massive data utilization and techniques used in Higher Education System.",
      subtitle: "",
     // image: require("./assets/images/jp_virtual.jpg"),
      footerLink: [{ name: "Publication", url: " http://www.ijesrt.com/issues%20pdf%20file/Archive-2018/August-2018/70.pdf" }]
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-(617) -821-4571",
  email_address: "motwani.d@northeastern.edu"
};


export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, achievementSection, contactInfo};
