import axios from "axios";

const url = "http://localhost:3000/api/router";

class ApiCalls {
  static getProjects() {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          const data = res.data;
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

export default ApiCalls;
