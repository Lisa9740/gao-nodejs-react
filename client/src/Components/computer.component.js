import React, { Component ,  useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { CardHeader } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

export default class Computer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hours: [],

        };
    }


    render() {


        return (

            <Grid key={this.props.computer.id} item>
                <Card>
                    <CardContent>
                        <h1>{this.props.computer.name}</h1>
                        <div>

                        </div>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
            </Grid>


        )


    }
}