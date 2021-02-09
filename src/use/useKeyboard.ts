import { ref } from "vue";

const keyboard = ref({
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
});

const keysPressed = ref<{ [x: string]: boolean }>({});

export default function() {
  const pressKey = (key: string) => {
    keysPressed.value[key] = true;

    keysPressed.value = {
      ...keysPressed.value
    };
  };

  return {
    keyboardRef: keyboard,
    keysPressed,
    pressKey
  };
}
