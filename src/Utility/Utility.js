import toast from "react-hot-toast";

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

const removeitem = (singleEvent) => {
    const all = getMyEvents();
    const filterall = all.filter(a => a.id !== singleEvent.id);
    console.log('remove js file');
    setEvent(filterall);
    toast.success("Remove item Succesfully");

}



const addMyEvents = (data) => {
    const favourite = getMyEvents();
    const findData = favourite.find(da => da.id === data.id);
    if (findData) {

        toast.error("Event Allready Added");
    }
    else {
        const newfavourite = [...favourite, data];
        setEvent(newfavourite);

    }

}
export { addMyEvents, getMyEvents, removeitem };