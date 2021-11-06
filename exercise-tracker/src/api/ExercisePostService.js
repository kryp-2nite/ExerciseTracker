import tellExerciseTrackerTo from "./tellExerciseTrackerTo";

const getAll = () => {
    return tellExerciseTrackerTo.get('/ExercisePost');
}

const get = (id) => {
    return tellExerciseTrackerTo.get(`/ExercisePost/${id}`);
}

const getAllComments = (id) => {
    return tellExerciseTrackerTo.get(`/ExercisePost/${id}/comments`);
}

const create = (data) => {
    return tellExerciseTrackerTo.post(`/ExercisePost`, data);
}

const createComment = (id, data) => {
    return tellExerciseTrackerTo.post(`/ExercisePost/${id}/comments`, data);
}

const update = (id, data) => {
    return tellExerciseTrackerTo.put(`/ExercisePost/${id}`, data);
}

const updateComment = (id, commentId, data) => {
    return tellExerciseTrackerTo.put(`/ExercisePost/${id}/comment/${commentId}`, data);
}

const remove = (id) => {
    return tellExerciseTrackerTo.delete(`/ExercisePost/${id}`)
}

const removeComment = (id, commentId) => {
    return tellExerciseTrackerTo.delete(`/ExercisePost/${id}/comment/${commentId}`, data)
}


// You can only export default when there's one thing to export
export {
    getAll,
    get,
    getAllComments,
    create,
    createComment,
    update,
    updateComment,
    remove,
    removeComment,
  };