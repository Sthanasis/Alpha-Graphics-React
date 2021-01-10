import axios from "axios";

const url = "http://localhost:3000/api/router/";

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

  static async getGraphicDesignProjects() {
    try {
      const res = await axios({
        method: "GET",
        url: `${url}graphicDesign`,
      });
      if (res.data.status === "success") {
        return res;
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async getConceptArtProjects() {
    try {
      const res = await axios({
        method: "GET",
        url: `${url}conceptArt`,
      });
      if (res.data.status === "success") {
        return res;
      }
    } catch (err) {
      console.log(err);
    }
  }

  //Create
  static async insertProject(data) {
    try {
      const res = await axios({
        method: "POST",
        url: `${url}`,
        data,
      });
      if (res.data.status === "success") {
        return res;
      }
    } catch (err) {
      alert(err);
    }
  }

  //Delete
  static async deleteProject(id) {
    try {
      const res = await axios({
        method: "DELETE",
        url: `${url}${id}`,
      });
      if (res.data.status === "success") {
        console.log(res);
        return res;
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async getProject(id) {
    try {
      const res = await axios({
        method: "GET",
        url: `${url}${id}`,
      });
      if (res.data.status === "success") {
        return res;
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async login(user) {
    try {
      const res = await axios({
        method: "POST",
        url: `${url}login`,
        data: user,
      });
      if (res.data.status === "success") {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.data.user.id);
        return res;
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async logout() {
    try {
      const res = await axios({
        method: "GET",
        url: `${url}admin/logout`,
      });
      if (res.data.status === "success") {
        localStorage.removeItem("token");
        return res;
      }
    } catch (err) {
      console.log(err);
    }
  }

  static async getCV() {
    try {
      const res = await axios({
        method: "GET",
        url: `${url}file/cv`,
        responseType: "blob",
      });
      return res;
    } catch (err) {
      alert(err);
    }
  }

  static async postCV(data) {
    try {
      const res = await axios({
        method: "POST",
        url: `${url}cv`,
        data,
      });
      return res;
    } catch (err) {
      alert(err);
    }
  }
}

export default ApiCalls;
