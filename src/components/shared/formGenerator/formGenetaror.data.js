import moment from "moment";

export const ParseValueTime = (timeString) => {
    const parsedTime = moment(timeString, 'h:mm A');

    const today = moment().format('YYYY-MM-DD');
    const combinedDateTime = moment(`${today} ${parsedTime.format('HH:mm')}`, 'YYYY-MM-DD HH:mm');

    const isoString = combinedDateTime.toISOString().replace(/T.+/, '');

    return isoString
}