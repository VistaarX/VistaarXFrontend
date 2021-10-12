import { DatePicker } from '@material-ui/pickers';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';

export default function () {
    return <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <DatePicker
        variant="inline"
        openTo="year"
        views={["year"]}
        value="1990"
        onChange={(event)=>console.log(event.target.value)}
    />
</MuiPickersUtilsProvider>
}