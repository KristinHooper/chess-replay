/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application. Hangs React app off of #contents in index.html
 *
 * ************************************
 */

import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => <h1>Hello, Webpack Build Test!</h1>;

const root = createRoot(document.getElementById('contents'));
root.render(<App />);
