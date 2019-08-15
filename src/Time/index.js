module.exports = {
  // converts a given duration up to a year to ms
  // input example:
  // {
  //   y:1 //years
  //   M:7 //months
  //   w:3 //weeks
  //   d:2 //days
  //   h:13 //hours
  //   m:52 //minutes
  //   s:10 //seconds
  // }

  toMs(duration) {
    let totalMs = 0;

    Object.keys(duration).forEach(key => {
      let fac = 0;
      switch (key) {
        case "y":
          fac = 31536000000;
          break;

        case "M":
          fac = 2592000000;
          break;

        case "w":
          fac = 604800000;
          break;

        case "d":
          fac = 86400000;
          break;

        case "h":
          fac = 3600000;
          break;

        case "m":
          fac = 60000;
          break;

        case "s":
          fac = 1000;
          break;
      }

      totalMs += duration[key] * fac;
    });

    return totalMs;
  }
};
