import React from 'react';

interface ScoreBadgeProps {
    score: number;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({score}) => {
    // Determine badge style and text based on score
    let badgeColor: string;
    let textColor: string;
    let badgeText: string;

    if (score > 70) {
        badgeColor = 'bg-[var(--color-badge-green)]';
        textColor = 'text-[var(--color-badge-green-text)]';
        badgeText = 'Strong';
    } else if (score > 49) {
        badgeColor = 'bg-[var(--color-badge-yellow)]';
        textColor = 'text-[var(--color-badge-yellow-text)]';
        badgeText = 'Need Improvement';
    } else {
        badgeColor = 'bg-[var(--color-badge-red)]';
        textColor = 'text-[var(--color-badge-red-text)]';
        badgeText = 'Need Works';
    }

    return (
        <div className={`score-badge ${badgeColor} ${textColor}`}>
            {badgeText}
        </div>
    );
};

export default ScoreBadge;