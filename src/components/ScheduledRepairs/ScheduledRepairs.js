import React from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Tooltip from "@material-ui/core/Tooltip";

import "./ScheduledRepairs.scss";

function ScheduledRepair() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="pa3 ph5-ns">
      <Tooltip title="Your Repairs. You can see your agenda for the day. You can also add repairs from the button below.">
        <h1 className="title">Ron's Scheduled Repairs</h1>
      </Tooltip>

      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        weekends={false}
        events={[
          {
            title: "Joe's Pedal Repair",
            start: "2021-04-23T08:00:00",
            end: "2021-04-23T16:00:00",
          },
          {
            title: "Joe's Pedal Repair",
            start: "2021-04-29T08:00:00",
            end: "2021-04-29T16:00:00",
          },
          {
            title: "Yuki's Chain Oiling",
            start: "2021-04-21T03:00:00",
            end: "2021-04-21T12:00:00",
          },
          {
            title: "Yuki's Chain Oiling",
            start: "2021-04-26T03:00:00",
            end: "2021-04-26T12:00:00",
          },
        ]}
      />
      <div className="mt3">
        <Tooltip title="Adding new Repairs. Will open up a form for you to fill and add new repairs.">
          <Button variant="contained" color="primary" onClick={handleClickOpen}>
            New Repairs
          </Button>
        </Tooltip>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Repair</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter the information about repair.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="bicycle-type"
              label="Bicycle Type"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="repair-start"
              label="Repair Start"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="repair-end"
              label="Repair End"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default ScheduledRepair;
