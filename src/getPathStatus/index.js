import has from 'lodash/has'

export default function getPathStatus(detailedDiff, path)
{
  return ['added', 'modified', 'removed'].find(status => has(detailedDiff, status + '.' + path))
}