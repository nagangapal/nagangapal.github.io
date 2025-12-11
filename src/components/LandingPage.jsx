import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Terminal, Briefcase } from 'lucide-react';
import { portfolios } from '../data/portfolioData';

const iconMap = {
    monitor: Monitor,
    terminal: Terminal,
    briefcase: Briefcase
};

const LandingPage = () => {
    return (
        <div className="landing-container" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            textAlign: 'center'
        }}>
            <h1 style={{
                fontSize: '3.5rem',
                marginBottom: '3rem',
                fontWeight: '500'
            }}>Who's watching?</h1>

            <div className="profiles-grid" style={{
                display: 'flex',
                gap: '2rem',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                {Object.values(portfolios).map((portfolio) => {
                    const Icon = iconMap[portfolio.avatar];
                    return (
                        <Link
                            to={`/profile/${portfolio.id}`}
                            key={portfolio.id}
                            style={{ textDecoration: 'none' }}
                        >
                            <div className="profile-card" style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem',
                                opacity: 0.7,
                                transition: 'all 0.3s ease'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.opacity = '1';
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.opacity = '0.7';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                <div className="avatar" style={{
                                    width: '150px',
                                    height: '150px',
                                    borderRadius: '10px', // Netflix style square-ish
                                    backgroundColor: 'var(--text-color)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '10px',
                                    overflow: 'hidden'
                                }}>
                                    {/* Placeholder for actual image, using Icon for now */}
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        background: `linear-gradient(45deg, #333, #666)`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Icon size={64} color="white" />
                                    </div>
                                </div>
                                <span style={{
                                    color: '#808080',
                                    fontSize: '1.2rem',
                                    marginTop: '0.5rem'
                                }}>{portfolio.title}</span>
                            </div>
                        </Link>
                    );
                })}
            </div>

            <button style={{
                marginTop: '4rem',
                background: 'transparent',
                border: '1px solid #808080',
                color: '#808080',
                padding: '0.5rem 1.5rem',
                letterSpacing: '2px',
                cursor: 'pointer',
                fontSize: '1.1rem'
            }}>MANAGE PROFILES</button>
        </div>
    );
};

export default LandingPage;
