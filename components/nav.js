import React from 'react'
import { useRouter } from 'next/router';


const Nav = () => {
    const router = useRouter();
    return (
        <nav>
            <ul>
                <li onClick={() => router.push('/')}> Home</li>
                <li onClick={() => router.push('/About')}>About</li>
                <li onClick={() => router.push('/Contact')}>contact</li>

            </ul>
        </nav>
    )
}

export default Nav
