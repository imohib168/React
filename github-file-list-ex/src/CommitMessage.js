import React from 'react'

function CommitMessage({ commit }) {
    return (
        <div>
            {commit.message}
        </div>
    )
}

export default CommitMessage
