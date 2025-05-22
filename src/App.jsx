import { useState } from 'react'

import PostList from './components/PostsList'
import MainHeader from './components/MainHeader'
import './App.css'

function App() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    function hideModalHandler() {
        setIsModalVisible(false);
    }
    function showModalHandler() {
        setIsModalVisible(true);
    }

    return (
    <>
        <MainHeader onCreatePost={showModalHandler}/>
        <main>
            <PostList isModalVisible={isModalVisible} onHideModal={hideModalHandler}/>
        </main>
    </>
    )
}

export default App