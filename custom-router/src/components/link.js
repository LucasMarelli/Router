import React from 'react';

function Link({ to, children }) {
    const navigate = () => {
        // crea un evento custom nuevo al que ya estamos subscritos en el useEffect del BrowserRouter
        var pushChangeEvent = new CustomEvent("urlChanged", {
            detail: {
                path: to
            }//Objeto pasado al evento a traves de la prop  detail con argumento path
        });

        // cambio la url
        window.history.replaceState({}, '', to);

        // Doy aviso a traves del disparo del evento
        document.dispatchEvent(pushChangeEvent);
    }
    //Link devuelve el elemento del children asignandole al metodo OnClick la funcion navigate( que es la que crea y dispara el evento)
    return React.cloneElement(children, {
        onClick: navigate
    })
}

export default Link