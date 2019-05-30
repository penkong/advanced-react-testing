//middle ware we write instead of redux promise
//async action
//ref to next middle
export default ({ dispatch }) => next => action => {
  //check payload have promise or not
  if(!action.payload || !action.payload.then) return next(action);
  //we wait to resolve and then create action and dispatch
  action.payload.then(function (response) {
    //override payload
    const newAction = {...action, payload: response};
    dispatch(newAction);
  });
};


