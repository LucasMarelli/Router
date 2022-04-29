function Routes({ currentPath, children }) {
    //
    const match = children.find(route => route.props.path === currentPath);
    
    if (!match) {
        return "No se encontro la ruta"
    }
    //En caso de encontrar la ruta devuelve el elemento
    return <match.props.element currentPath={currentPath} />

}

Routes.displayName = 'Routes'

export default Routes;