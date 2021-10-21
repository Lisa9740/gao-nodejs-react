import http from "../http-common";
import Axios from 'axios';

class ComputersService {
    async getAll(date) {
        return await Axios.get("http://localhost:4000/api/computers", {
           params: {
               date: date,
           }
       });
    }

    async create(data) {
        return await Axios.post('http://127.0.0.1:4000/api/computer/create', data, {
            // headers: {
            //     Authorization: `Bearer ${getToken()}`
            // }
        });
    }

    delete(id) {
        return http.delete(`http://localhost:4000/api/computer/remove/${id}`);
    }
}
export default new ComputersService();
