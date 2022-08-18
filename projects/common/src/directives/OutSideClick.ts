export default {
  mounted(el: any, binding: any) {
    el.eventClickOutSide = function (ev: Event) {
      if (!(el === ev.target || el.contains(ev.target))) {
        binding.value();
      }
    };

    document.body.addEventListener('click', el.eventClickOutSide);
  },

  beforeUnmount(el: any) {
    document.body.removeEventListener('click', el.eventClickOutSide);
  },
};
