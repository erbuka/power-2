import { Application } from './application.js';
import css from '../css/style.css';

(function () {
    window.addEventListener("load", function () {
        let app = new Application();
        app.start();
        window["app"] = app;
    });
})();