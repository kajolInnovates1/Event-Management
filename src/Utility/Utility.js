import toast from "react-hot-toast";

// Function to get events from localStorage (always returns an array)
const getMyEvents = () => {
    const event = localStorage.getItem('favourite');
    if (event) {
        try {
            const eventParse = JSON.parse(event);
            // Ensure eventParse is always an array
            return Array.isArray(eventParse) ? eventParse : [];
        } catch (e) {
            console.error("Error parsing JSON from localStorage: ", e);
            return []; // Return empty array in case of JSON parse error
        }
    } else {
        return []; // Return empty array if 'favourite' key does not exist in localStorage
    }
}

// Function to save events to localStorage
const setEvent = (newfavourite) => {
    if (newfavourite && Array.isArray(newfavourite)) {
        const newfavouriteStringFy = JSON.stringify(newfavourite);
        localStorage.setItem('favourite', newfavouriteStringFy);
    }
}

// Function to remove an event from the list
const removeitem = (singleEvent) => {
    const all = getMyEvents();
    if (Array.isArray(all) && all.length > 0) {
        // Filter out the event with the matching id
        const filterall = all.filter(a => a.id !== singleEvent.id);
        setEvent(filterall); // Save the updated list back to localStorage
        toast.success("Item removed successfully"); // Show success toast
    } else {
        toast.error("No items found to remove"); // Handle case where no items exist
    }
}

// Function to add an event to the list
const addMyEvents = (data) => {
    const favourite = getMyEvents();
    const findData = favourite.find(da => da.id === data.id);
    if (findData) {
        toast.error("Event already added"); // Show error toast if event is already added
    } else {
        const newfavourite = [...favourite, data];
        setEvent(newfavourite); // Save the updated list to localStorage
        toast.success("Item added successfully"); // Show success toast
    }
}

export { addMyEvents, getMyEvents, removeitem };
