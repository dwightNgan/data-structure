function Section(params) {
  const _section = new Set(params)
  _section.union = function union(anotherSet) {
    const _tempSec = new Section(_section.keys())
    for (const key of anotherSet) {
      if (!_tempSec.has(key)) {
        _tempSec.add(key)
      }
    }
    return _tempSec
  }
  _section.interSec = function interSec (anotherSet) {
    const _tempSec = new Section()
    for (const key of anotherSet) {
      if (_section.has(key)){
        _tempSec.add(key)
      }
    }
    return _tempSec
  }

  _section.diff = function diff (anotherSet) {
    const _tempSec = new Section(_section.keys())
    for (const key of anotherSet) {
      _section.has(key) ? _tempSec.delete(key) :_tempSec.add(key)
    }
    return _tempSec
  }

  return _section
}


const setA = new Section([1, 2])
const setB = new Section([3, 4])
console.log(setA.union(setB))
setA.add(3)
console.log(setA.interSec(setB))
console.log(setA.diff(setB))