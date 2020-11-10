import React from 'react'

import FileName from './FileName'
import CommitMessage from './CommitMessage'
import Time from './Time'

function FileListItem({ file }) {
    return (
        <div className="file-list-item">
            <FileName file={file} />
            <CommitMessage commit={file.latestCommit} />
            <Time time={file} />
        </div>
    )
}

export default FileListItem
