import React, {Component} from "react";
import Button from '@material-ui/core/Button';

import {CardHeader} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core/styles";

const useStyles = withStyles =>({
    computerCard: {
      width: "310px"

    },
    computerItemCard: {

       padding:"10px"
    },
    addComputerBtn: {
        marginLeft: "55px",

    }
});


class Computer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hours: [],
            attributions: {},

        };
    }

    componentDidMount() {
        this.initialise()
    }


    initialise() {
        let tabAttribution = [];

        for (let i = 0; i < this.props.computer.Attributions.length; i++) {
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

    buildHoraires() {
        for (let i = 0; i < 10; i++) {
            this.state.hours.push({
                index: i + 8,
                attribution: (typeof this.state.attributions[i + 8] !== 'undefined') ? this.attributions[i + 8] : false
            })
        }
    }

    render() {
        const {classes} = this.props
        return (

            <Grid
                key={this.props.computer.id} item
                spacing={5}
            >
                <Card className={classes.computerCard}>
                    <CardContent>
                        <h1>{this.props.computer.name}</h1>
                        <div>
                            <Grid container
                                  direction={"column"}

                            >
                                    {this.state.hours.map((hour, key) => (
                                        <Grid container
                                              direction={"row"}
                                              key={key}
                                              className={classes.computerItemCard}
                                        >
                                        <Grid item xs={3} >
                                            <span >{hour.index} h </span>
                                        </Grid>
                                            <Grid item xs={3}>

                                            </Grid>
                                            <Grid item xs={3}>
                                                <Icon className={classes.addComputerBtn} color="primary">add_circle</Icon>
                                            </Grid>



                                       </Grid>
                                    ))}

                            </Grid>
                        </div>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>

            </Grid>


        )
    }
}
export default withStyles(useStyles)(Computer)