import React, { Component } from "react";
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
            attributions : {},

        };
    }

    componentDidMount() {
        this.initialise()
    }


    initialise() {
        let tabAttribution = [];

        for (let i=0; i < this.props.computer.Attributions.length; i++) {
            let attribution = this.props.computer.Attributions[i][0]
            tabAttribution[attribution.hour] = {
                id: attribution.id,
                name: attribution.Customer.firstname + " " + attribution.Customer.lastname,
            }
        }

        this.setState({
            attributions: tabAttribution
        })

        this.buildHoraires();
    }

    buildHoraires(){
        for (let i = 0; i < 10; i++) {
            this.state.hours.push({
                index: i + 8,
                attribution: (typeof this.state.attributions[i + 8] !== 'undefined') ? this.attributions[i + 8] : false
            })
        }
    }

    render() {
        return (

            <Grid key={this.props.computer.id} item>
                <Card>
                    <CardContent>
                        <h1>{this.props.computer.name}</h1>
                        <div>
                            {this.state.hours.map((hour, key) => (
                               <span key={key}>{hour.index}</span>
                            ))}
                        </div>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
            </Grid>
        )
    }
}
