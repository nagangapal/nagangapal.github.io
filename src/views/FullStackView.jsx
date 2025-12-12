import React from 'react';
import { motion } from 'framer-motion';

const FullStackView = ({ data }) => {
    return (
        <div className="view-fullstack" style={{
            color: 'var(--modern-text)',
            padding: '2rem'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-section"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    minHeight: '80vh',
                    justifyContent: 'center',
                    background: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.1) 0%, rgba(15, 23, 42, 0) 70%)'
                }}
            >
                <h1 style={{ fontSize: '4rem', fontWeight: '800', background: 'linear-gradient(to right, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>
                    {data.content.hero.heading}
                </h1>
                <p style={{ fontSize: '1.5rem', opacity: 0.8, maxWidth: '600px' }}>
                    {data.content.hero.subheading}
                </p>

                <div className="skills-cloud" style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {data.content.skills.map((skill, i) => (
                        <span key={i} style={{
                            background: 'rgba(255,255,255,0.05)',
                            padding: '0.5rem 1rem',
                            borderRadius: '20px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            fontSize: '0.9rem'
                        }}>{skill}</span>
                    ))}
                </div>
            </motion.div>

            <div className="section container" style={{ marginTop: '4rem', maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--modern-primary)' }}>Full Stack Projects</h2>
                <div style={{ display: 'grid', gap: '2rem' }}>
                    {data.content.projects.map((project, i) => (
                        <div key={i} style={{ padding: '2rem', background: 'rgba(56, 189, 248, 0.05)', borderRadius: '1rem', border: '1px solid rgba(56, 189, 248, 0.1)' }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '1rem',
                                flexWrap: 'wrap',
                                gap: '1rem'
                            }}>
                                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{project.name}</h3>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            padding: '0.5rem 1rem',
                                            background: 'rgba(56, 189, 248, 0.2)',
                                            color: '#38bdf8',
                                            borderRadius: '20px',
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            border: '1px solid rgba(56, 189, 248, 0.4)',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        Visit App &rarr;
                                    </a>
                                )}
                            </div>
                            <p style={{ opacity: 0.8, marginBottom: '1.5rem' }}>{project.desc}</p>

                            {project.images && (
                                <div style={{
                                    display: 'flex',
                                    gap: '1rem',
                                    overflowX: 'auto',
                                    paddingBottom: '1rem',
                                    marginBottom: '-0.5rem',
                                    WebkitOverflowScrolling: 'touch',
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none'
                                }}>
                                    <style>{`
                                        .view-fullstack ::-webkit-scrollbar {
                                            display: none;
                                        }
                                    `}</style>
                                    {project.images.map((img, idx) => (
                                        <img
                                            key={idx}
                                            src={img}
                                            alt={`${project.name} screenshot ${idx + 1}`}
                                            style={{
                                                height: '200px',
                                                borderRadius: '8px',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                flexShrink: 0,
                                                maxWidth: '100%',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <h2 style={{ fontSize: '2rem', margin: '4rem 0 2rem', color: 'var(--modern-secondary)' }}>Experience</h2>
                <div style={{ display: 'grid', gap: '2rem' }}>
                    {data.content.experience.map((exp, i) => (
                        <div key={i} style={{ borderLeft: '2px solid var(--modern-secondary)', paddingLeft: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>{exp.role} @ {exp.company}</h3>
                            <p style={{ fontSize: '0.9rem', opacity: 0.6, margin: '0.2rem 0 1rem' }}>{exp.period}</p>
                            <p style={{ opacity: 0.9 }}>{exp.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FullStackView;
