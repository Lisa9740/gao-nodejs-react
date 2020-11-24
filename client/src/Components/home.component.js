import React, {Component, useState} from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Computer from './computer.component'
import ComputersService from "../services/computers.service";

import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";

import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            computers: [],
            setOpen: false,
            open : false,
            name : "",
            selectedDate: new Date(),
            setSelectedDate : new Date()
        };
    }



    componentDidMount() {
        this.retrieveComputers();
    }

    addComputer() {
        ComputersService.create({name : this.state.name}).then(response => {
            this.state.computers.push(response.data)
            console.log(response.data)
        }).catch(e => {
            console.log(e);
        });
    }

    retrieveComputers() {
        ComputersService.getAll()
            .then(response => {
                this.setState({
                    computers: response.data
                });

                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }


      render() {

          const handleDateChange = (date) => {
              this.setState({selectedDate: date, setSelectedDate : date});
          };

          const handleClickOpen = () => {
              this.setState({open: true,setOpen :true});
          };

          const handleClose = () => {
              this.setState({open: false,setOpen :false});
          };
          const { computers } = this.state;

          return (
              <Container maxWidth="lg">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around">
                      <KeyboardDatePicker
                          disableToolbar
                          variant="inline"
                          format="MM/dd/yyyy"
                          margin="normal"
                          id="date-picker-inline"
                          label="Date picker inline"
                          value={this.state.selectedDate}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                              'aria-label': 'change date',
                          }}
                      />
                  </Grid>
                  </MuiPickersUtilsProvider>
                  <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                      Ajouter poste
                  </Button>
                  <Dialog open={this.state.open} onClose={handleClose} aria-labelledby="form-dialog-title">
                      <DialogTitle id="form-dialog-title">Ajouter nouveau poste</DialogTitle>
                      <DialogContent>
                          <DialogContentText>

                          </DialogContentText>
                          <TextField
                              autoFocus
                              margin="dense"
                              id="name"
                              label="Nouveau poste"
                              type="text"
                              fullWidth
                          />
                      </DialogContent>
                      <DialogActions>
                          <Button onClick={handleClose} color="primary">
                              Annuler
                          </Button>
                          <Button onClick={handleClose} color="primary">
                              Ajouter
                          </Button>
                      </DialogActions>
                  </Dialog>
                  <Grid container spacing={3}>
                      {computers && computers.map((computer) => (
                          <Computer key={computer.id} computer={computer}/>
                      ))}
                  </Grid>
              </Container>
          )
    }
}