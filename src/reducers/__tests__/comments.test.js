
import commentReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types'; 


it('should handles actions of type SAVE_COMMENT', () => {  
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  }
  const newState = commentReducer([], action);
  expect(newState).toEqual(['New Comment']);
});

it('should handles actions of type unknown', () => {  
  const newState = commentReducer([], {type: 'fdsf'});
  expect(newState).toEqual([]);
});
