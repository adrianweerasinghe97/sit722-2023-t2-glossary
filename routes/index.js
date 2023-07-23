var express = require('express');
var router = express.Router();

const title_list = [
  {'id': 'ID', 'Term': 'Term', 'Description': 'Description', 'References': 'References'}
];

const stuff = [
  {'id': 1, 'Term': 'Development Team', 'Description': 'Are responsible for creating software programs consisting of designing, creation and testing. This team focuses on writing the code, implementing new features and well as ensuring the quality of service (QoS) of the product', 'References': 'What is a development team? (2023) Coursera. Available at: https://www.coursera.org/articles/what-is-development-team (Accessed: July 20, 2023).'},
  {'id': 2, 'Term': 'Operations Team', 'Description': 'Also known as SysOps. This team covers a wide range of tasks including IT operations and administration. These tasks include monitoring and managing system performance, managing system backups and recovery as well as ensuring security and compliance ', 'References': 'DevOps vs SysOps: Key differences (no date) Knowledgehut.com. Available at: https://www.knowledgehut.com/blog/devops/devops-vs-sysops (Accessed: July 20, 2023).'},
  {'id': 3, 'Term': 'Quality Assurance Team (QA)', 'Description': 'Develops and maintains standards for the product development ', 'References': 'Naidu, S. (2022) “All you need to know about Quality assurance team structure,” QA Touch, 12 July. Available at: https://www.qatouch.com/blog/all-you-need-to-know-about-quality-assurance-team-structure/ (Accessed: July 20, 2023).'},
  {'id': 4, 'Term': 'Product Managers', 'Description': 'Is responsible for the entire product development lifecycle ', 'References': 'DeClute, D. (2022) Product owner vs. product manager: What’s the difference?, Theserverside.com. Available at: https://www.theserverside.com/tip/Product-owner-vs-product-manager-Whats-the-difference?_gl=1*1ja3s8s*_ga*MTk1NzY5OTA4Mi4xNjc4NzY2ODA0*_ga_TQKE4GS5P9*MTY5MDEzMDEzOS4yNC4xLjE2OTAxMzAyNTIuMC4wLjA.&_ga=2.55787689.384197809.1690130148-1957699082.1678766804 (Accessed: July 20, 2023).'},
  {'id': 5, 'Term': 'Security Teams', 'Description': 'These teams are responsible for protecting IT infrastructure, edge devices, networks and data.  They are responsible for preventing data breaches and monitoring and reacting to attacks', 'References': 'Understanding SOC team roles and responsibilities (no date) Chronicle. Available at: https://chronicle.security/blog/posts/understanding-the-soc-team-roles-and-responsibilities/ (Accessed: July 23, 2023).'},
  {'id': 6, 'Term': 'Customers and Users', 'Description': 'The end users benefit from the end product. As well as provide user feedback', 'References': 'Bird, J. (2019) How to improve users lives when users & customers are not the same people, Medium. Available at: https://jeremybird276.medium.com/user-vs-customer-its-not-mutually-exclusive-b7f954c80b1d (Accessed: July 23, 2023).'},
  {'id': 7, 'Term': 'DevOps Engineers', 'Description': 'Mainly act as facilitators. This team is in charge of bridging the development and operations team by breaking down the barriers', 'References': 'Bigelow, S. J. (2019) DevOps engineer, IT Operations. TechTarget. Available at: https://www.techtarget.com/searchitoperations/definition/DevOps-engineer (Accessed: July 23, 2023).'},
  {'id': 8, 'Term': 'Sequential Methodology', 'Description': 'It is also called a linear sequential model, classic life cycle or waterfall model. It suggests a systematic, sequential approach to Software Development that begins at a systematic level and progresses through communication, planning, modeling, construction, and deployment', 'References': 'The linear sequential model of software development (2019) WADIC. Available at: https://wadic.net/software-development-linear-sequential-model/ (Accessed: July 23, 2023).'},
  {'id': 9, 'Term': 'Agile Methodology', 'Description': 'Agile methodology is a project management approach that involves breaking the project into phases and emphasizes continuous collaboration and improvement', 'References': 'Hoory, L. (2022) What is Waterfall methodology? Here’s how it can help your project management strategy, Forbes. Available at: https://www.forbes.com/advisor/business/what-is-waterfall-methodology/ (Accessed: July 23, 2023).  '},
  {'id': 10, 'Term': 'Waterfall Methodology', 'Description': 'The Waterfall approach was established in 1970 by Winston w. Royce. It contains five phases of management, where each requires a deliverable from the previous phase to proceed. Waterfall is ideal for projects like software development, where the end result is clearly established before starting, and is best suited for projects that require a lot of predictability.', 'References': 'Hoory, L. (2022) What is Waterfall methodology? Here’s how it can help your project management strategy, Forbes. Available at: https://www.forbes.com/advisor/business/what-is-waterfall-methodology/ (Accessed: July 23, 2023).  '},






]


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary',
   subheading: 'Welcome to my website showing a collection of DevOps terms and their brief descriptions',
  titles: title_list, list: stuff });
});

module.exports = router;
