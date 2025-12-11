import React from 'react';
import { motion } from 'framer-motion';

const LeadershipView = ({ data }) => {
    return (
        <div className="view-leadership" style={{
            color: 'var(--professional-text)',
            backgroundColor: 'var(--professional-bg)',
            minHeight: '100vh',
            fontFamily: 'Georgia, serif' // More traditional feel
        }}>
            <div style={{
                backgroundColor: 'white',
                borderBottom: '1px solid #e2e8f0',
                padding: '1.5rem',
                textAlign: 'center',
                position: 'sticky',
                top: 0,
                zIndex: 10
            }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Angad Portfolio</span>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="container"
                style={{ padding: '4rem 1rem', maxWidth: '800px' }}
            >
                <div style={{ borderLeft: '4px solid var(--professional-primary)', paddingLeft: '2rem', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: '700', lineHeight: '1.2' }}>{data.content.hero.heading}</h1>
                    <p style={{ fontSize: '1.4rem', color: 'var(--professional-secondary)', marginTop: '1rem', fontStyle: 'italic' }}>
                        {data.content.hero.subheading}
                    </p>
                </div>

                <div className="section" style={{ marginTop: '4rem' }}>
                    <h2 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#94a3b8', marginBottom: '1.5rem' }}>Strategic Focus Areas</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                        {data.content.skills.map((skill, i) => (
                            <div key={i} style={{
                                padding: '1.5rem',
                                backgroundColor: 'var(--professional-light-bg)',
                                borderLeft: '2px solid var(--professional-primary)'
                            }}>
                                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{skill}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="section" style={{ marginTop: '5rem' }}>
                    <h2 style={{ fontSize: '2rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem', marginBottom: '2rem' }}>Professional Experience</h2>
                    {data.content.experience.map((exp, i) => (
                        <div key={i} style={{ marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                                <h3 style={{ fontSize: '1.4rem', color: 'var(--professional-text)' }}>{exp.company}</h3>
                                <span style={{ color: '#64748b', fontStyle: 'italic' }}>{exp.period}</span>
                            </div>
                            <h4 style={{ fontSize: '1.1rem', color: 'var(--professional-primary)', marginBottom: '1rem' }}>{exp.role}</h4>
                            <p style={{ lineHeight: '1.8', color: '#334155' }}>{exp.details}</p>
                        </div>
                    ))}
                </div>

                <div className="section" style={{ marginTop: '5rem' }}>
                    <h2 style={{ fontSize: '2rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1rem', marginBottom: '2rem' }}>Key Initiatives</h2>
                    {data.content.projects.map((proj, i) => (
                        <div key={i} style={{ marginBottom: '2rem', padding: '1.5rem', background: '#f8fafc', borderRadius: '4px' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{proj.name}</h3>
                            <p style={{ color: '#475569' }}>{proj.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default LeadershipView;
