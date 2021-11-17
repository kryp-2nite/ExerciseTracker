import tellExerciseTrackerTo from "./tellExerciseTrackerTo";
import * as tokenService from "../utils/tokenService"

const create = (data) => {
    return tellExerciseTrackerTo.post("/users", data);
};

const login = (data) => {
    return tellExerciseTrackerTo.post("/auth/login", data);
}

function getUser() {
    let user = tokenService.getUserFromToken();
    // console.log('DECODED USER FROM GET USER FUNCTION IN USER SERVICE: ', user);
    return user;
  }

export { create, login, getUser };