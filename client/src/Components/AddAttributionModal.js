import React, {Component} from "react";
import Button from '@material-ui/core/Button';

import Icon from '@material-ui/core/Icon';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import {withStyles} from "@material-ui/core/styles";


class AddAttributionModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            setOpenModal: false,
            isNew: false

        };
    }

    render() {
        const isNew = this.state.isNew
        const {classes} = this.props

        const handleClickOpenModal = () => {
            this.setState({openModal: true, setOpenModal: true});
        };

        const handleCloseModal = () => {
            this.setState({openModal: false, setOpenModal: false, isNew: false});
        };

        const showNewUserInputs = () => {
            this.setState({isNew: true});
        };

        return (
            <div>
                <Icon onClick={handleClickOpenModal} color="primary">add_circle</Icon>
                <Dialog open={this.state.openModal} onClose={handleCloseModal} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title"> {!isNew ? 'Attribuer Utilisateur' : 'Ajouter nouveau utilisateur'}
                            <Icon onClick={showNewUserInputs} className={classes.addUserIcon} color="primary">add_circle</Icon>
                    </DialogTitle>
                    <DialogContent>

                        <DialogContentText>
                        </DialogContentText>

                        {!isNew ?
                            <div>
                            <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Nom utilisateur"
                            type="text"
                            fullWidth/>
                            </div>
                            :
                            <div className={classes.formFields}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Nom"
                                type="text"
                                className={classes.textFields}
                                fullWidth/>

                                <TextField
                                autoFocus
                                margin="dense"
                                id="firstname"
                                label="Prénom"
                                className={classes.textFields}
                                type="text"
                                fullWidth/>
                            </div>
                        }
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseModal} color="primary">
                            Annuler
                        </Button>
                        <Button onClick={handleCloseModal} color="primary">
                            Ajouter
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default AddAttributionModal
