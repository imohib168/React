import React from 'react'
import ReactDOM from 'react-dom';

import FileListItem from './FileListItem'

import './index.css'

function FileList({ files }) {
    return (
        <div className="file-list">
            {files.map(file => (
                <FileListItem key={file.id} file={file} />
            ))}
        </div>
    )
}

const testFiles = [
    {
        id: 1,
        name: "src",
        type: "folder",
        updatedAt: "2016-07-11 21:24:00",
        latestCommit: {
            message: "Initial Commit"
        }
    },

    {
        id: 2,
        name: "tests",
        type: "folder",
        updatedAt: "2016-07-11 21:24:00",
        latestCommit: {
            message: "Initial Commit"
        }
    },

    {
        id: 1,
        name: "README",
        type: "file",
        updatedAt: "2016-07-11 21:24:00",
        latestCommit: {
            message: "Added a Readme.md"
        }
    }
]

ReactDOM.render(<FileList files={testFiles} />, document.getElementById("root"))