import {Component} from "react";
import Modal from "@material-ui/core/Modal";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from "@material-ui/core/Button";
export default class DeleteAttribution extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idAssign: this.props.idAssign,
            open: false
        };
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleOpen = this.handleOpen.bind(this);
        // this.handleClose = this.handleClose.bind(this);
    }

    render(){
        return(

            <div>
               {/*<DeleteIcon size="small" className="redFont btnStyle" onClick={this.handleOpen} />*/}
                <Modal
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    className="modalStyle"
                >
                    <div>
                        <form onSubmit={this.handleSubmit} className="formStyle">
                            <h3>Voulez vous vraiment annuler cette attribution ?</h3>
                            <div className="formInput">
                                <div>
                                    <Button variant="contained" color="primary" onClick={this.handleClose} className="btnSpace">Non</Button>
                                    <Button type="submit" variant="contained" color="secondary" className="btnSpace">Oui</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
        )

    }

}
