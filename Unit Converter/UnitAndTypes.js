export let t = {
  Temperature: {
    Celsius: {
      Celsius: function (val) {
        return val;
      },
      Fahrenheit: function (val) {
        return val * 1.8 + 32;
      },
      Kelvin: function (val) {
        return val + 273.15;
      },
    },
    Fahrenheit: {
      Celsius: function (val) {
        return (val - 32) * 1.8;
      },
      Fahrenheit: function (val) {
        return val;
      },
      Kelvin: function (val) {
        return (val - 32) * 1.8 + 273.15;
      },
    },
    Kelvin: {
      Celcius: function (val) {
        return val - 273.15;
      },
      Fahrenheit: function (val) {
        return (val - 273.15) * 1.8 + 32;
      },
      Kelvin: function (val) {
        return val;
      },
    },
  },
};
