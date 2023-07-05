export const addData = (data) => {
    return {
      type: 'ADD_DATA',
      payload: data,
    };
  };
  
  export const deleteData = (id) => {
    return {
      type: 'DELETE_DATA',
      payload: id,
    };
  };
  
  export const updateData = (id, newName) => {
    return {
      type: 'UPDATE_DATA',
      payload: { id, newName },
    };
  };
  