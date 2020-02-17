import { ErrorFormatter } from "express-validator/check";

const errorMessage: ErrorFormatter<{}> = ({ location, msg, param }): {} => {
    return {
        message: `${location}[${param}]: ${msg}`
    };
};

export { errorMessage };