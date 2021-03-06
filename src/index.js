import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {SnackbarProvider} from "notistack";

ReactDOM.render(
    <>
        <SnackbarProvider maxSnack={3} preventDuplicate={true} autoHideDuration={1000} domRoot={document.getElementById('notepad')}>
            <App/>
        </SnackbarProvider>
    </>,
    document.getElementById('root')
);
