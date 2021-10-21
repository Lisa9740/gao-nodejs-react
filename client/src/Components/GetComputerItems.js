import React, {Component} from "react";
import Button from '@material-ui/core/Button';

import {CardHeader, Table, TableBody, TableCell, TableContainer, TableRow} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import {withStyles} from "@material-ui/core/styles";
import AddAttribution from "./AddAttributionModal";
import DeleteAttribution from "./DeleteAttributionModal";

const useStyles = withStyles => ({
    computerCard: {
        width: "310px"

    },
    computerItemCard: {
        padding: "10px"
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
            date: this.props.date
        };

    }

    componentDidMount() {
        this.initialize()
        this.buildHours()
    }

    async initialize() {
        let attributionInfo = this.props.computer.Attributions;
        let attributionObject = {};
        if (attributionInfo.length !== 0) {
            attributionInfo.forEach(element => {
                attributionObject[element[0].hour] = {
                    id: element[0].Customer.id,
                    name: element[0].Customer.firstname + " " + element[0].Customer.lastname,
                    attributionId: element.id
                }

            })
        }
            await this.setState({
                attributions: attributionObject
            })
    }
    async buildHours() {
        await this.setState({hours: []});
        let arrayData = {};
        let arrayDataFormatted = [];

        for (let i = 8; i < 19; i++) {
            if (this.state.attributions[i]) {
                arrayData = {
                    hours: i,
                    Customer: this.state.attributions[i],
                }
                arrayDataFormatted.push(arrayData)
            }else{
                arrayData = {
                    hours: i,
                    Customer: ''
                }
                arrayDataFormatted.push(arrayData)
            }
            await this.setState({hours: arrayDataFormatted});
            console.log(this.state.hours)
        }
    }

    async getDeletedAttribution(idAttribution){
        let attributionObject = {};
        const refreshDeleteData = this.state.hours.filter(element => element.Customer.attributionId !== idAttribution);
        refreshDeleteData.forEach(element => {
            if (element.Customer.id) {
                attributionObject[element.hours] = {
                    id: element[0].Customer.id,
                    name: element[0].Customer.firstname + " " + element[0].Customer.lastname,
                    attributionId: element[0].id
                }
            }
        });

        await this.setState({ attributions: attributionObject })
        await this.props.updateComputer();
    }

    updateComputer() {
        this.props.updateComputer();
    }

    render() {
        const {classes} = this.props
        return (
            <Grid
                container
                key={this.props.computer.id}
                spacing={3}
            >
                <Card className={classes.computerCard}>
                    <CardContent>
                        <h1>{this.props.computer.name}</h1>
                        <div>
                            <TableContainer>
                                <Table size="small">
                                    <TableBody>
                                        {this.state.hours.map((data, key) => (
                                            <TableRow key={key}>
                                                <TableCell size="small" component="th" scope="row">{data.hours}h</TableCell>
                                                <TableCell align="center"> {data.Customer.name} </TableCell>
                                                <TableCell align="right">
                                                    <Button>
                                                        { data.Customer.id !== ""
                                                          ?  <DeleteAttribution deletedAttribution={this.getDeletedAttribution} idAssign={data.Customer.attributionId} />
                                                            : null /* <AddAttribution computer_id={this.props.computers.id} hours={data.hours} date={this.state.date} getAddAttributions={this.getAddAttributions} />*/
                                                        }
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
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
