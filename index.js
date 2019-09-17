const target =
     typeof self !== 'undefined' && self
  || typeof window !== 'undefined' && window
  || typeof global !== 'undefined' && global

target && (target.p = target.prut = p)

function p(x) {
  if (Array.isArray(x) && Array.isArray(x.raw)) {
    const prefix = String.raw.apply(String, arguments)
    return function(first) {
      console.log.apply(console, [prefix].concat(Array.from(arguments)))
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
