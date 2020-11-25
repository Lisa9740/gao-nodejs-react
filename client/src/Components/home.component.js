import React, {Component, useState} from "react";
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Computer from './computer.component'
import AddComputer from './addcomputer.component'
import ComputersService from "../services/computers.service";

import Button from "@material-ui/core/Button";



import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
const useStyles = withStyles =>({
    computerCard: {
        margin:"100px",

    },
    computerItem: {
      width: "600px"
    },
    addComputerBtn: {
        marginLeft: "0px",
        alignItems: "end"
    }
});


class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            computers: [],
            setOpen: false,
            open: false,
            name: "",
            selectedDate: new Date(),
            setSelectedDate: new Date()
        };
    }


    componentDidMount() {
        this.retrieveComputers();
    }

    addComputer() {
        ComputersService.create({name: this.state.name}).then(response => {
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

        const {classes} = this.props
        const handleDateChange = (date) => {
            this.setState({selectedDate: date, setSelectedDate: date});
        };


        const {computers} = this.state;

        return (

            <Container maxWidth="lg">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container justify="right">
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
           <AddComputer/>
               <Grid container
                      spacing={3}
                      className={classes.computerCard}
                >
                    {computers && computers.map((computer) => (
                        <Grid className={classes.computerItem} item xs={3}>
                        <Computer key={computer.id} computer={computer}/></Grid>
                    ))}
                </Grid>
            </Container>
        )
    }
}
export default withStyles(useStyles)(Home)