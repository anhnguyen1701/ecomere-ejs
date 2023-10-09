import {
    con
} from "./../config/app-config.js";

export class ProductModel {
    constructor() {
        this.con = con;
    }

    getAll() {
        return new Promise((resolve, reject) => {
            this.con.query("SELECT * FROM products", (error, result) => {
                if (error) {
                    reject(new Error("Database error"))
                }
                if (result.length == 0) {
                    reject(new Error("No results found in the database"))
                } else {
                    resolve(result)
                }
            })
        })
    }
}