import React from 'react'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'
const Home = () => {
    return (
        <>
            {/* Search component will go here */}
            <UserSearch />
            <UserResults />

        </>
    )
}

export default Home