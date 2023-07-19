import {ApiError} from "./apiError.js";
import {User} from "./errorMessages.js";
import {TEXT_SEARCH_IN_JSON} from "../urls/googleMapUrls.js";
export class UserNotFoundError extends ApiError {
    constructor(message) {
        super(User.NOT_EXIST + " " + TEXT_SEARCH_IN_JSON + "not working" +message);
    }
}
