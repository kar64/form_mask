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
  lazy:false,
  overwrite:true,
  autofix:true,
  blocks: {
    d: {
      mask: IMask.MaskedRange,
      placeholderChar:'d',
      from: 1,
      to: 31,
      maxLength: 2,
    },
    m: {
      mask: IMask.MaskedRange,
      placeholderChar:'m',
      from: 1,
      to: 12,
      maxLength: 2,
    },
    Y: {
      mask: IMask.MaskedRange,
      placeholderChar:'d',
      from: 1900,
      to: 9999,
    },
  }
});
