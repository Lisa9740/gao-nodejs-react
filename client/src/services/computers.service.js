import http from "../http-common";

class ComputersService {
    getAll() {
        return http.get("/computers");
    }

    create(data) {
        return http.post("/computers/create", data);
    }

    delete(id) {
        return http.delete(`/computers/remove${id}`);
    }


}
export default new ComputersService();