import addedDiff from '../added';
import deletedDiff from '../deleted';
import updatedDiff from '../updated';
import isEmpty from 'lodash.isempty'

function detailedDiff (lhs, rhs) {

  let added = addedDiff(lhs, rhs)
  let modified = updatedDiff(lhs, rhs)
  let removed = deletedDiff(lhs, rhs)

  let result = {}

  if(added && !isEmpty(added))
  {
    result.added = added
  }
  if(modified && !isEmpty(modified))
  {
    result.modified = modified
  }
  if(removed && !isEmpty(removed))
  {
    result.removed = removed
  }

  return result
}

export default detailedDiff;
