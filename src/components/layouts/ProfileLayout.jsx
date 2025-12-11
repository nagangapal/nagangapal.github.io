import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { portfolios } from '../../data/portfolioData';
import FullStackView from '../../views/FullStackView';
import BackendView from '../../views/BackendView';
import LeadershipView from '../../views/LeadershipView';

const ProfileLayout = () => {
    const { profileId } = useParams();
    const profile = portfolios[profileId];

    // If invalid profile, redirect to home
    if (!profile) {
        return <Navigate to="/" replace />;
    }

    const renderView = () => {
        switch (profileId) {
            case 'fullstack':
                return <FullStackView data={profile} />;
            case 'backend':
                return <BackendView data={profile} />;
            case 'leadership':
                return <LeadershipView data={profile} />;
            default:
                return <div>Profile not found</div>;
        }
    };

    return (
        <div className={`theme-${profile.theme}`}>
            {/* Navigation available across all profiles */}
            <nav style={{
                position: 'fixed',
                top: '1rem',
                right: '1rem',
                zIndex: 100
            }}>
                <Link to="/" style={{
                    textDecoration: 'none',
                    color: 'var(--text-color)', // Fallback
                    background: 'rgba(0,0,0,0.5)',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    backdropFilter: 'blur(4px)',
                    fontSize: '0.9rem',
                    border: '1px solid rgba(255,255,255,0.2)'
                }}>
                    Switch Profile
                </Link>
                <a href="/resume.pdf" download style={{
                    marginLeft: '1rem',
                    textDecoration: 'none',
                    color: 'var(--text-color)', // Fallback
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    backdropFilter: 'blur(4px)',
                    fontSize: '0.9rem',
                    border: '1px solid rgba(255,255,255,0.2)'
                }}>
                    Download Resume
                </a>
            </nav>

            {renderView()}
        </div>
    );
};

export default ProfileLayout;
