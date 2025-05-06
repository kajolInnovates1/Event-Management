const getMyEvents = () => {
    const event = localStorage.getItem('favourite');
    if (event) {
        const eventParse = JSON.parse(event);
        return eventParse;
    }
    else {
        return [];
    }
}

const setEvent = (newfavourite) => {

    if (newfavourite) {
        const newfavouriteStringFy = JSON.stringify(newfavourite);
        localStorage.setItem('favourite', newfavouriteStringFy);

    }



}



const addMyEvents = (data) => {
    const favourite = getMyEvents();
    const findData = favourite.find(da => da.id === data.id);
    if (findData) {
        alert('Event Allready Added');
    }
    else {
        const newfavourite = [...favourite, data];
        setEvent(newfavourite);
    }

}
export { addMyEvents, getMyEvents };