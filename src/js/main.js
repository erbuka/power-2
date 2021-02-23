import { Application } from './application.js';
import css from '../css/style.css';



(function () {
    window.addEventListener("load", function () {

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('service-worker.js').then(registration => {
                console.log('SW registered: ', registration);
            }).catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
        }

        let app = new Application();
        app.start();
    });
})();