export function diff (originalObj: object, updatedObj: object): object

export function addedDiff (originalObj: object, updatedObj: object): object

export function deletedDiff (originalObj: object, updatedObj: object): object

export function updatedDiff (originalObj: object, updatedObj: object): object

export interface Diff
{
  added?: object | undefined
  modified?: object | undefined
  removed?: object | undefined
}

export function detailedDiff (originalObj: object, updatedObj: object): Diff
