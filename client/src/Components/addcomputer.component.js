import React, {Component, useState} from "react";
import { withStyles } from '@material-ui/core/styles';
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


export default class AddComputer extends Component {


    constructor(props) {
        super(props);
        this.state = {
            setOpen: false,
            open: false,
            name: "",
            send: false
        };

    }


    addComputer(name) {
        ComputersService.create({name: name}).then(response => {
            this.props.computers.push(response.data)
            console.log(response.data)
        }).catch(e => {
            console.log(e);
        });
    }


    render() {
        const  handleChange = (event) => {
            this.setState({name: event.target.value});
        }
        const send = () => {
            this.addComputer(this.state.name)
        }

        const handleClickOpen = () => {
            this.setState({open: true, setOpen: true});
        };



        const handleClose = () => {
            this.setState({open: false, setOpen: false});
        };

        return (
            <div>
                <Button variant="outlined" color="primary" onClick={handleClickOpen} >
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
                    value={this.state.name}
                    label="Nouveau poste"
                    type="text"
                    onChange={handleChange}
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Annuler
                </Button>
                <Button onClick={send} color="primary">
                    Ajouter
                </Button>
            </DialogActions>
        </Dialog>
            </div>
        )
    }
}
