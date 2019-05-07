export const getJwt = () => {
    return 'bearer ' + localStorage.getItem('cool-jwt');
}
