export const dateFormate = (date) => {
    const d = new Date(date*1000),
        months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return `${weekday[d.getDay()]}, ${ months[d.getMonth()]} ${d.getDate()}`
}
export const timeFormate = (date) => {
    const d = new Date(date*1000);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}