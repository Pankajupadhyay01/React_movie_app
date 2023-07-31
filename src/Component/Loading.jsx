import React from 'react'
import FadeLoader from "react-spinners/FadeLoader";

const Loading = () => {
    return (
        <div className=''>
            <FadeLoader
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    )
}

export default Loading
