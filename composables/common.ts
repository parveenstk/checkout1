export const getRequestUri = async () => {
    const route = useRoute();
    const fullPath = `${window.location.origin}${route.fullPath}`;
    return fullPath;
};