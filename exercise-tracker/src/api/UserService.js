import tellExerciseTrackerTo from "./tellExerciseTrackerTo";

const create = (data) => {
    return tellExerciseTrackerTo.post("/users", data);
};

const login = (data) => {
    return tellExerciseTrackerTo.post("/auth/login", data);
}

export { create, login };