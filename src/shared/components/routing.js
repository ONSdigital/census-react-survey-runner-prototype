
// TODO: define all routes here and use react-router-config to render
export const routes = [
    '/introduction',
    '/what-is-your-address',
    '/who-lives-here-intro',
    '/permanent-or-family-home',
    '/confirmation'
]

export const getNextRoute = (currentPath) => {
    const currentIdx = routes.indexOf(currentPath);

    return routes[currentIdx+1];
}

export const getPreviousRoute = (currentPath) => {
    const currentIdx = routes.indexOf(currentPath);

    return routes[currentIdx-1];
}