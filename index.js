const target =
     typeof self !== 'undefined' && self
  || typeof window !== 'undefined' && window
  || typeof global !== 'undefined' && global

target && (target.p = target.prut = p)

function p(x) {
  if (Array.isArray(x) && Array.isArray(x.raw)) {
    return function(first) {
      const args = [x[0]].concat(Array.from(arguments))
      console.log.apply(console, args)
      return first
    }
  }

  console.log.apply(console, arguments)
  return x
}

const op = {
  enumerable: false,
  get: function() {
    p(typeof this.valueOf === 'function' ? this.valueOf() : this)
    return this
  }
}

Object.defineProperty(Object.prototype, 'p', op)
Object.defineProperty(Object.prototype, 'prut', op)
