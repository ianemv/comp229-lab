import React from 'react';
import './App.css';

const Project = () => {
    const projects = [
        {
            title: 'Responsive Portfolio Website',
            description: 'Developed a modern, responsive portfolio website showcasing my skills and projects. Implemented smooth transitions and interactive elements for an engaging user experience. Technologies used: HTML, CSS, React.',
            image: 'https://agentestudio.com/uploads/post/image/132/main_reasons_to_redesign_a_website.png',
            outcome: 'Increased online visibility and provided a polished showcase for my work.'
      
        },
        {
            title: 'E-commerce Redesign',
            description: 'Led the redesign of an e-commerce platform to enhance user experience and increase conversion rates. Implemented a clean and intuitive interface, improving overall user satisfaction. Technologies used: UI/UX design, Figma, React.',
            image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Building-a-career-in-Mobile-App-Development.jpg',      outcome: 'Achieved a 20% increase in user engagement and a 15% boost in conversion rates.'
     
        },
        {
            title: 'Mobile App Development',
            description: 'Developed a cross-platform mobile app for task management. Designed an intuitive user interface and integrated real-time collaboration features. Technologies used: React Native, Firebase.',
            image: 'https://appinventiv.com/wp-content/uploads/sites/1/2017/06/Effective-Ways-to-Choose-the-Best-Mobile-App-Developer.jpg',
            outcome: 'Streamlined task management for users and received positive feedback for the app\'s usability.'
    
        }
    ];

    return (
        <div className='project'>
            <h2>Projects:</h2>
            {projects.map((project, index) => (
                <div key={index}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <img src={project.image} alt={`Project ${index + 1}`} style={{ maxWidth: '100%' }} />
                    <p><strong>Role:</strong> Lead Developer</p>
                    <p><strong>Outcome:</strong> {project.outcome}</p>
                </div>
            ))}
            <p>Explore the showcase of my diverse projects, each reflecting a unique blend of creativity, innovation, and problem-solving. Each project is a testament to my dedication to delivering impactful and visually compelling solutions.</p>
        </div>
    );
};

export default Project;
