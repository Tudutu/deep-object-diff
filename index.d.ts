export function diff (originalObj: any, updatedObj: any): any

export function addedDiff (originalObj: any, updatedObj: any): any

export function deletedDiff (originalObj: any, updatedObj: any): any

export function updatedDiff (originalObj: any, updatedObj: any): any

export interface Diff
{
  added?:any | undefined
  modified?:any | undefined
  removed?:any | undefined
}

export function detailedDiff (originalObj: any, updatedObj: any): Diff
