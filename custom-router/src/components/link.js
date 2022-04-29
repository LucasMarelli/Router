import React from 'react';

function Link({ to, children }) {
    const navigate = () => {
        // crea un evento custom nuevo al que ya estamos subscritos en el useEffect
        var pushChangeEvent = new CustomEvent("urlChanged", {
            detail: {
                path: to
            }
        });

        // cambio la url
        window.history.replaceState({}, '', to);

        // disparo el evento
        document.dispatchEvent(pushChangeEvent);
    }

    return React.cloneElement(children, {
        onClick: navigate
    })
}

export default Link