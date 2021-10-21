import React, {Component} from "react";
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import Computer from '../Components/GetComputerItems'
import AddComputer from '../Components/AddComputerModal'
import ComputersService from "../Services/computers.service";
import DateFnsUtils from '@date-io/date-fns';
import Login from './Login';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Button from "@material-ui/core/Button";


const useStyles = withStyles => ({
    computerCard: {
        margin: "100px",
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
            currentDate: new Date().toISOString().substr(0, 10),
            currentPage: 1,
            name: "",
            selectedDate: new Date(),
            setSelectedDate: new Date(),
            setOpen: false,
            open: false,
            redirect: false
        };
        this.getAddedComputer   = this.getAddedComputer.bind(this);
        //this.updateComputer     = this.updateComputer.bind(this);
        //this.logout             = this.logout.bind(this);
    }


    async componentDidMount() {
        await this.retrieveComputers();
    }

    async retrieveComputers() {
        try {
            await this.setState({ computers: [] });
            const response = await ComputersService.getAll(this.state.currentDate)
            await this.setState({ computers: response.data });
        } catch(err){
            console.error(err)
        }
    }

    async getAddedComputer() {
            await this.retrieveComputers();
    }


    render() {
        const {classes} = this.props
        const {computers} = this.state;

        const handleDateChange = (date) => {
            this.setState({selectedDate: date, setSelectedDate: date});
        };
        if (this.state.redirect) {
            return (
                <React.Fragment>
                    <Router>
                        <Route exact path="/" >
                            <Login />
                        </Route>
                        <Redirect to='/'/>
                    </Router>
                </React.Fragment>
            )
        }else {
            return (
                <React.Fragment>
                    <Router>
                        <header>
                            <Link to="/" id="btnWelcome" className="whiteFont">  Gestion ordinateur </Link>
                            <Button onClick={this.logout}>
                                <ExitToAppIcon className="whiteFont" />
                            </Button>
                        </header>
                    </Router>

                    <Container maxWidth="lg">
                        <div className="marginDate alignElement">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <Grid container
                                      justify="flex-start">
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
                             <AddComputer computers={this.getAddedComputer}/>
                        </div>

                    <Grid container
                          spacing={5}
                          className={classes.computerCard}>
                        {
                            computers && computers.map((computer) => (
                                <Grid className={classes.computerItem} key={computer.id} item xs={3}>
                                    <Computer computer={computer} date={this.state.currentDate} />
                                </Grid>
                            ))
                        }

                    </Grid>
                </Container>
                </React.Fragment>
            )
        }
    }
}



export default withStyles(useStyles)(Home)
