import tellExerciseTrackerTo from "./tellExerciseTrackerTo";

const getAll = () => {
    return tellExerciseTrackerTo.get('/Exercises');
}

const get = (id) => {
    return tellExerciseTrackerTo.get(`/Exercises/${id}`);
}

const getAllComments = (id) => {
    return tellExerciseTrackerTo.get(`/Exercises/${id}/comments`);
}

const create = (id, data) => {
    return tellExerciseTrackerTo.post(`/Exercises/${id}`, data);
}

const createComment = (id, data) => {
    return tellExerciseTrackerTo.post(`/Exercises/${id}/comments`, data);
}

const update = (id, data) => {
    return tellExerciseTrackerTo.put(`/Exercises/${id}`, data);
}

const updateComment = (id, commentId, data) => {
    return tellExerciseTrackerTo.put(`/Exercises/${id}/comment/${commentId}`, data);
}

const remove = (id) => {
    return tellExerciseTrackerTo.delete(`/Exercises/${id}`)
}

const removeComment = (id, commentId) => {
    return tellExerciseTrackerTo.delete(`/Exercises/${id}/comment/${commentId}`)
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