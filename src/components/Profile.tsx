import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';
export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/talissonbruno.png" alt="Tálisson Bruno" />
            <div>
                <strong>Talisson Bruno</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Leve {level}
                </p>
            </div>
        </div>
    )
}