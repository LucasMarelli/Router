import React from "react";


function BrowserRouter({ children }) {
    const [currentPath, setCurrentPath] = React.useState(window.location.pathname)

    React.useEffect(() => {
        // escucho al evento custom urlChanged y paso como argumento un callback que recibe el evento. Se va a ejecutar cada vez que se dispare el evento (document.dispatchEvent)
        document.addEventListener("urlChanged", (e) => {
            e.stopImmediatePropagation();
            setCurrentPath(e.detail.path)
        });

        React.Children.forEach(children, (element) => {
            console.log("ASD", element.name)
        });
    }, []);

    return (
        <div>
            {children}
        </div>
    )
}
export default BrowserRouter