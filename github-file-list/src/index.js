import React from 'react';
import ReactDOM from 'react-dom';

import Time from './Time'

import PropTypes from 'prop-types';

import './index.css'

const FileList = ({ files }) => (
    <div className="file-list">
        {/* <tbody> */}
        {files.map(file => (
            <FileListItem key={file.id} file={file} />
        ))}
        {/* </tbody> */}
    </div>
);

FileList.propTypes = {
    files: PropTypes.array,
}

const FileListItem = ({ file }) => (
    <div className="file-list-item">
        <div>
            <FileName file={file} />
        </div>
        <div>
            <CommitMessage commit={file.latestCommit} />
        </div>
        <div>
            <Time time={file.updatedAt} />
        </div>
    </div>
);
FileListItem.propTypes = {
    file: PropTypes.object.isRequired
}

function FileIcon({ file }) {
    let icon = "fa-file-text-o";
    if (file.type === "folder") {
        icon = "fa-folder";
    }
    return (
        <div className="file-icon">
            <i className={`fa ${icon}`} />
        </div>
    )
}
FileIcon.propTypes = {
    file: PropTypes.object.isRequired
}

function FileName({ file }) {
    return (
        <div className="fileNameAndFileIcon">
            <div>
                <FileIcon file={file} />
            </div>
            <div className="file-name">
                {file.name}
            </div>
        </div>
    )
}
FileName.propTypes = {
    file: PropTypes.object.isRequired
}

const CommitMessage = ({ commit }) => (
    <div className="commit-message">
        {commit.message}
    </div>
);
CommitMessage.propTypes = {
    commit: PropTypes.object.isRequired
};





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