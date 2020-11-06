import React from 'react';
import ReactDOM from 'react-dom';

import FirstChildOnly from './FirstChildOnly'
import LastChildOnly from './LastChildOnly'
import Head from './Head'
import Tail from './Tail'

import Dialog from './Dialog/Dialog'

import './index.css'

function IconButton({ children }) {
    return (
        <div>
            <button>
                <i class="fa fa-exclamation-triangle fa-2x"></i>
                {children}
            </button>
            <br />
            <br />
            <br />
            <ErrorBox>
                <em>The World is ending...</em>
            </ErrorBox>

            <h3>FirstChild Component</h3>
            <FirstChildOnly>
                <p>Hello World 1</p>
                <p>Hello World 2</p>
                <p>Hello World 3</p>
                <p>Hello World 4</p>
            </FirstChildOnly>

            <hr />

            <h3>SecondChild Component</h3>
            <LastChildOnly>
                <p>Hello World 1</p>
                <p>Hello World 2</p>
                <p>Hello World 3</p>
                <p>Hello World 4</p>
            </LastChildOnly>

            <hr />

            <h3>Head Component</h3>
            <Head number={3}>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
            </Head>


            <hr />

            <Tail number={3}>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
            </Tail>

            <hr />

            <Dialog />

        </div>
    )
}

function ErrorBox({ children }) {
    return (
        <div className="err-box">
            <button>
                <i class="fa fa-exclamation-triangle fa-2x"></i>
                <span>
                    {children}
                </span>
            </button>
        </div>
    )
}



ReactDOM.render(<IconButton children={<em>Do the Things</em>} />, document.getElementById("root"))