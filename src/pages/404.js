import React from 'react'
import { useRouter } from 'next/router';
import styles from '../styles/404.module.css'


function error() {
    const router = useRouter();

    return (
        <div>
            <button onClick={() => router.push('/')}>Go To Home</button>
            <h1 className={styles.opps}>opps</h1>
        </div>
    )
}

export default error