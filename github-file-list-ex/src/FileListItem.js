import React from 'react'
import PropTypes from 'prop-types'


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

FileListItem.propTypes = {
    file: PropTypes.object.isRequired
};


export default FileListItem
