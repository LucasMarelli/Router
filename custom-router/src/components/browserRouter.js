import React from "react";


function BrowserRouter({ children }) {
    //Es la variable que se actualiza en la funcion del evento
    const [currentPath, setCurrentPath] = React.useState(window.location.pathname)

    //ejecuta una vez al renderizar el componente
    React.useEffect(() => {
        // Se suscibe al evento custom urlChanged y paso como argumento un callback que recibe el evento. Se va a ejecutar cada vez que se dispare el evento (document.dispatchEvent)
        document.addEventListener("urlChanged", (e) => {
            e.stopImmediatePropagation();//urlChange evento suscripto, 'e' es el evento 
            setCurrentPath(e.detail.path)//currentPath Variable actualizada con la nueva direccion- e.detail es para obtener el objeto o dato disparador debe contener una propiedad path
            //Al ejecutar el evento obliga la renderizacion del componente BrowserRouter
        })
    }, []);

    const renderChildren = () => {
        return React.Children.map(children, (child) => {
            if (child.type.name === "Routes") {
                return React.cloneElement(child, {
                    currentPath: currentPath 
                });
            } else {
                return child
            }
        });
    }

    return (
        //BrowserRouter renderiza todo lo que tenga adentro.
        //
        <div>
            {renderChildren()}
        </div>
    )
}

export default BrowserRouter