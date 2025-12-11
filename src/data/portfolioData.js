export const portfolios = {
    fullstack: {
        id: 'fullstack',
        title: 'Full Stack Developer',
        description: 'Combining frontend, mobile, and backend expertise to build complete applications.',
        theme: 'modern',
        avatar: 'monitor',
        content: {
            hero: {
                heading: "Full Stack Engineering",
                subheading: "Building end-to-end solutions with React, Native Mobile, and robust Backends."
            },
            skills: [
                "React", "React Native", "Kotlin", "Android", "Swift", "Flutter",
                "Node.js", "Express", "Python", "Java", "C#", "Scala",
                "Docker", "Kubernetes", "AWS", "Azure", "SQL Server", "MongoDB", "PostgreSQL"
            ],
            experience: [
                {
                    role: "Senior Software Engineer",
                    company: "M56 Studios (Creative Labs, CAA)",
                    period: "Previous",
                    details: "Worked on 'Get Hai' smart showerhead React Native app (water/energy stats). Designed SVG components similar to Google Fit. Built API integrations in Express."
                },
                {
                    role: "Software Engineer",
                    company: "Microsoft",
                    period: "Previous",
                    details: "Built microservices to speed up billing for Volume Licensing. Led development of internal automation tools (Certificate Management, BCDR)."
                }
            ],
            education: [
                { degree: "Master of Sciences (Computer Science)", school: "University of Southern California", year: "Los Angeles, CA" },
                { degree: "Bachelor of Engineering (Computer Science)", school: "Thapar Institute", year: "Patiala, IN" }
            ],
            projects: [
                { name: "ColorsMultiplayer", desc: "A Flutter App for playing turn-based Candy Crush with an agent, featuring a hint system." }
            ]
        }
    },
    backend: {
        id: 'backend',
        title: 'Backend Developer',
        description: 'Specializing in system optimization, scaling, microservices, and search technologies.',
        theme: 'terminal',
        avatar: 'terminal',
        content: {
            hero: {
                heading: "~/runner/backend_systems",
                subheading: "> Microservices | Scalability | Cloud Infrastructure | Search"
            },
            skills: [
                "C#", "Python", "Java", "Scala", "PHP",
                "Kafka", "RabbitMQ", "AWS Lambda", "Azure Functions", "Redis", "Docker", "K8s",
                "Apache Lucene", "Elastic Search", "PostgreSQL", "MongoDB", "SQL Server"
            ],
            experience: [
                {
                    role: "SDE 3",
                    company: "Flipkart",
                    period: "Previous",
                    details: "Optimized ingestion systems for Flipkart Search ensuring timely delivery to Solr indexes. Enhanced near real-time systems for faster pricing and promotion updates."
                },
                {
                    role: "SDE 2",
                    company: "Amazon",
                    period: "Previous",
                    details: "Integrated semantic search using open source HNSW algorithm. Onboarded filters into search index to improve selection."
                },
                {
                    role: "Software Engineer",
                    company: "Microsoft",
                    period: "Previous",
                    details: "Built microservices to speed up billing for a $40 billion business."
                }
            ],
            education: [
                { degree: "Master of Sciences (Computer Science)", school: "University of Southern California", year: "Los Angeles, CA" },
                { degree: "Bachelor of Engineering (Computer Science)", school: "Thapar Institute", year: "Patiala, IN" }
            ],
            projects: [
                { name: "ColorsMultiplayer", desc: "Backend API integration demonstration: A turn-based game Flutter App playing against an agent." }
            ]
        }
    },
    leadership: {
        id: 'leadership',
        title: 'Technical Leader',
        description: '8+ years of tech experience, system optimization, on-call reliability, and strategic leadership.',
        theme: 'professional',
        avatar: 'briefcase',
        content: {
            hero: {
                heading: "Technical Leadership & Strategy",
                subheading: "Driving business value through system optimization, reliability, and innovation."
            },
            skills: [
                "System Optimization", "Kafka", "Redis", "Elastic Search",
                "Cloud/DevOps", "Docker", "Kubernetes", "AWS", "Azure",
                "Machine Learning", "Data Mining", "Operations Management", "Strategic Management"
            ],
            experience: [
                {
                    role: "SDE 3",
                    company: "Flipkart",
                    period: "Previous",
                    details: "Optimized real-time systems for pricing/promotions. Debugged production issues for tier-1 services as on-call lead to increase reliability."
                },
                {
                    role: "SDE 2",
                    company: "Amazon",
                    period: "Previous",
                    details: "Launched semantic search in multiple locales by tuning ML hyperparameters."
                },
                {
                    role: "Software Engineer",
                    company: "Microsoft",
                    period: "Previous",
                    details: "Led development of internal automation tools. Analyzed sales records using Azure ML to model corporate discounts."
                },
                {
                    role: "Software Engineer",
                    company: "Zynga Games",
                    period: "Previous",
                    details: "Conducted EOS experiments to optimize gameplay experience with different variants."
                }
            ],
            education: [
                { degree: "M.B.A. (Blended)", school: "IIM Ahmedabad", year: "Gujarat, IN" },
                { degree: "M.S. (Computer Science)", school: "USC", year: "Los Angeles, CA" }
            ],
            projects: [
                { name: "ColorsMultiplayer", desc: "AI Application: Turn-based game with an agent, showcasing Machine Learning application." }
            ]
        }
    }
};
