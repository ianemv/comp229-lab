import React from 'react';

const Services = () => {
    const services = [
        {
            title: 'Cloud Computing',
            description: 'Deliver scalable and flexible solutions by leveraging cloud technologies. Our cloud computing services ensure efficient resource utilization and seamless scalability.'
        },
        {
            title: 'Data Analytics',
            description: 'Unlock actionable insights from your data. Our data analytics services empower businesses to make informed decisions, identify trends, and drive strategic initiatives.'
        },
        {
            title: 'Cybersecurity',
            description: 'Protect your digital assets with our comprehensive cybersecurity services. We implement robust security measures to safeguard your data, networks, and systems.'
        },
        {
            title: 'IT Consulting',
            description: 'Strategic IT consulting services to align technology solutions with your business goals. We analyze your current IT infrastructure and provide tailored recommendations for optimization.'
        },
        {
            title: 'Managed IT',
            description: 'Ensure the stability and reliability of your IT environment with our managed IT services. Proactive monitoring, maintenance, and support to keep your systems running smoothly.'
        },
        {
            title: 'Software Development',
            description: 'Custom software solutions tailored to meet your specific business needs. From concept to deployment, we deliver high-quality software applications that drive efficiency and innovation.'
        },
        {
            title: 'System Integration',
            description: 'Integrate diverse IT systems seamlessly for improved efficiency and productivity. Our system integration services ensure that your technology ecosystem works harmoniously to meet business objectives.'
        }
    ];

    return (
        <div>
            <h2>Services</h2>
            <ul>
                {services.map((service, index) => (
                    <li key={index}>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Services;
