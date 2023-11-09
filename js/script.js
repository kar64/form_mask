IMask(document.querySelector("#phone"), {
  mask: "+{7}(000)-000-00-00",
});
IMask(document.querySelector("#age"), {
  mask: Number,
  min: 0,
  max: 108,
});
IMask(document.querySelector("#date"), {
  mask: Date,

  blocks: {
    d: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 31,
      maxLength: 2,
    },
    m: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
      maxLength: 2,
    },
    Y: {
      mask: IMask.MaskedRange,
      from: 1900,
      to: 9999,
    },
  }
});
