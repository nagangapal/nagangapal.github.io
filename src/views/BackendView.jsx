import React from 'react';
import { motion } from 'framer-motion';

const BackendView = ({ data }) => {
    return (
        <div className="view-backend" style={{
            color: 'var(--terminal-text)',
            fontFamily: 'var(--terminal-font)',
            padding: '2rem',
            backgroundColor: 'var(--terminal-bg)',
            minHeight: '100vh'
        }}>
            <div className="terminal-window" style={{
                border: '1px solid #333',
                borderRadius: '8px',
                padding: '2rem',
                maxWidth: '900px',
                margin: '0 auto',
                marginTop: '2rem',
                boxShadow: '0 0 20px rgba(34, 197, 94, 0.1)'
            }}>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <p style={{ marginBottom: '1rem' }}>
                        <span style={{ color: '#aaa' }}>user@dev:~$</span> <span style={{ color: '#fff' }}>./init_profile.sh --role=backend</span>
                    </p>

                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--terminal-primary)' }}>
                        {data.content.hero.heading}
                        <span className="blinking-cursor">_</span>
                    </h1>

                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#a3a3a3' }}>
                        # {data.content.hero.subheading}
                    </p>

                    <div className="code-block" style={{ marginTop: '2rem' }}>
                        <p style={{ color: '#aaa' }}>// Core Competencies</p>
                        <p style={{ color: 'var(--terminal-secondary)' }}>const stack = [</p>
                        {data.content.skills.map((skill, i) => (
                            <p key={i} style={{ paddingLeft: '1.5rem', color: '#fff' }}>"{skill}",</p>
                        ))}
                        <p style={{ color: 'var(--terminal-secondary)' }}>];</p>
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <p style={{ color: '#aaa', marginBottom: '1rem' }}>// Experience Log</p>
                        {data.content.experience.map((exp, i) => (
                            <div key={i} style={{ marginBottom: '1.5rem', paddingLeft: '1rem', borderLeft: '1px dashed #333' }}>
                                <p style={{ color: 'var(--terminal-primary)' }}>$ function {exp.role.replace(/\s+/g, '_')}()</p>
                                <p style={{ color: '#666', fontSize: '0.9rem' }}>// {exp.company} | {exp.period}</p>
                                <p style={{ color: '#ccc', marginTop: '0.5rem' }}>return "{exp.details}";</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '3rem' }}>
                        <p style={{ color: '#aaa', marginBottom: '1rem' }}>// Compiled Projects</p>
                        {data.content.projects.map((proj, i) => (
                            <div key={i} style={{ marginBottom: '1rem' }}>
                                <span style={{ color: 'var(--terminal-secondary)' }}>&gt;</span> {proj.name}
                                <p style={{ paddingLeft: '1.2rem', color: '#888', fontSize: '0.9rem' }}>{proj.desc}</p>
                            </div>
                        ))}
                    </div>

                </motion.div>
            </div>

            <style>{`
        @keyframes blink { 50% { opacity: 0; } }
        .blinking-cursor { animation: blink 1s step-end infinite; }
      `}</style>
        </div>
    );
};

export default BackendView;
