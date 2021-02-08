import { ref } from "vue";

const keyboard = {
  1: {
    a: {},
    z: {},
    e: {},
    r: {},
    t: {},
    y: {},
    u: {},
    i: {},
    o: {},
    p: {}
  },
  2: {
    q: {},
    s: {},
    d: {},
    f: {},
    g: {},
    h: {},
    j: {},
    k: {},
    l: {},
    m: {}
  },
  3: { w: {}, x: {}, c: {}, v: {}, b: {}, n: {} }
};

export default function() {
  const keyboardRef = ref(keyboard);
  return {
    keyboardRef
  };
}
