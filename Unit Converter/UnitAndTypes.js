export let typesAndUnits = {
  Temperature: {
    TypeName: "Temperature",
    TypeUnits: ["Celsius", "Fahrenheit", "Kelvin"],
    Celsius: {
      Celsius: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Fahrenheit: {
        GetConvertedValue: function (val) {
          return val * 1.8 + 32;
        },
      },
      Kelvin: {
        GetConvertedValue: function (val) {
          return val + 273.15;
        },
      },
    },
    Fahrenheit: {
      Celsius: {
        GetConvertedValue: function (val) {
          return (val - 32) * 1.8;
        },
      },
      Fahrenheit: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Kelvin: {
        GetConvertedValue: function (val) {
          return (val - 32) * 1.8 + 273.15;
        },
      },
    },
    Kelvin: {
      Celcius: {
        GetConvertedValue: function (val) {
          return val - 273.15;
        },
      },
      Fahrenheit: {
        GetConvertedValue: function (val) {
          return (val - 273.15) * 1.8 + 32;
        },
      },
      Kelvin: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
    },
  },
  Speed: {
    TypeName: "Speed",
    TypeUnits: [
      "Mile/hr",
      "Foot/sec",
      "Meter/sec",
      "Kilometer/hr",
      "Knot",
      "Mach",
    ],
    MilePerHr: {
      MilePerHr: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      FootPerSec: {
        GetConvertedValue: function (val) {
          return val * 1.46666667;
        },
      },
      MeterPerSec: {
        GetConvertedValue: function (val) {
          return val / 2.23693629;
        },
      },
      KmPerHr: {
        GetConvertedValue: function (val) {
          return val * 1.609344;
        },
      },
      Knot: {
        GetConvertedValuefunction(val) {
          return val / 1.15077945;
        },
      },
      Mach: {
        GetConvertedValue(val) {
          return val / 767.269148;
        },
      },
    },
    FootPerSec: {
      MilePerHr: {
        GetConvertedValue: function (val) {
          return val / 1.46666667;
        },
      },
      FootPerSec: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      MeterPerSec: {
        GetConvertedValue: function (val) {
          return val / 3.2808399;
        },
      },
      KmPerHr: {
        GetConvertedValue: function (val) {
          return val * 1.09728;
        },
      },
      Knot: {
        GetConvertedValuefunction(val) {
          return val / 1.68780986;
        },
      },
      Mach: {
        GetConvertedValue(val) {
          return val / 1125.32808;
        },
      },
    },
    MeterPerSec: {
      MilePerHr: {
        GetConvertedValue: function (val) {
          return val * 2.23693629;
        },
      },
      FootPerSec: {
        GetConvertedValue: function (val) {
          return val * 3.2808399;
        },
      },
      MeterPerSec: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      KmPerHr: {
        GetConvertedValue: function (val) {
          return val * 3.6;
        },
      },
      Knot: {
        GetConvertedValuefunction(val) {
          return val * 1.94384449;
        },
      },
      Mach: {
        GetConvertedValue(val) {
          return val / 343;
        },
      },
    },
    KmPerHr: {
      MilePerHr: {
        GetConvertedValue: function (val) {
          return val / 1.609344;
        },
      },
      FootPerSec: {
        GetConvertedValue: function (val) {
          return val / 1.09728;
        },
      },
      MeterPerSec: {
        GetConvertedValue: function (val) {
          return val / 3.6;
        },
      },
      KmPerHr: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Knot: {
        GetConvertedValuefunction(val) {
          return val / 1.852;
        },
      },
      Mach: {
        GetConvertedValue(val) {
          return val / 1234.8;
        },
      },
    },
    Knot: {
      MilePerHr: {
        GetConvertedValue: function (val) {
          return val * 1.15077945;
        },
      },
      FootPerSec: {
        GetConvertedValue: function (val) {
          return val * 1.68780986;
        },
      },
      MeterPerSec: {
        GetConvertedValue: function (val) {
          return val / 1.94384449;
        },
      },
      KmPerHr: {
        GetConvertedValue: function (val) {
          return val * 1.852;
        },
      },
      Knot: {
        GetConvertedValuefunction(val) {
          return val;
        },
      },
      Mach: {
        GetConvertedValue(val) {
          return val / 666.738661;
        },
      },
    },
    Mach: {
      MilePerHr: {
        GetConvertedValue: function (val) {
          return val * 767.269148;
        },
      },
      FootPerSec: {
        GetConvertedValue: function (val) {
          return val * 1125.32808;
        },
      },
      MeterPerSec: {
        GetConvertedValue: function (val) {
          return val * 343;
        },
      },
      KmPerHr: {
        GetConvertedValue: function (val) {
          return val * 1234.8;
        },
      },
      Knot: {
        GetConvertedValuefunction(val) {
          return val * 666.738661;
        },
      },
      Mach: {
        GetConvertedValue(val) {
          return val;
        },
      },
    },
  },
  Length: {
    TypeName: "Length",
    TypeUnits: [
      "Kilometer",
      "Meter",
      "Centimeter",
      "Millimeter",
      "Micrometer",
      "Nanometer",
      "Mile",
      "Yard",
      "Foot",
      "Inch",
      "Nautical Mile",
    ],
    Kilometer: {
      Kilometer: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Meter: {
        GetConvertedValue: function (val) {
          return val * 1000;
        },
      },
      Centimeter: {
        GetConvertedValue: function (val) {
          return val * 100000;
        },
      },
      Millimeter: {
        GetConvertedValue: function (val) {
          return val * 1000000;
        },
      },
      Micrometer: {
        GetConvertedValue: function (val) {
          return val * 1.0e9;
        },
      },
      Nanometer: {
        GetConvertedValue: function (val) {
          return val * 1.0e12;
        },
      },
      Mile: {
        GetConvertedValue: function (val) {
          return val * 1.609344;
        },
      },
      Yard: {
        GetConvertedValue: function (val) {
          return val * 1093.6133;
        },
      },
      Foot: {
        GetConvertedValue: function (val) {
          return val * 3280.8399;
        },
      },
      Inch: {
        GetConvertedValue: function (val) {
          return val * 39370.0787;
        },
      },
      NauticalMile: {
        GetConvertedValue: function (val) {
          return val / 1.852;
        },
      },
    },
    Meter: {
      Kilometer: {
        GetConvertedValue: function (val) {
          return val / 1000;
        },
      },
      Meter: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Centimeter: {
        GetConvertedValue: function (val) {
          return val * 100;
        },
      },
      Millimeter: {
        GetConvertedValue: function (val) {
          return val * 1000;
        },
      },
      Micrometer: {
        GetConvertedValue: function (val) {
          return val * 1000000;
        },
      },
      Nanometer: {
        GetConvertedValue: function (val) {
          return val * 1.0e9;
        },
      },
      Mile: {
        GetConvertedValue: function (val) {
          return val / 1609.344;
        },
      },
      Yard: {
        GetConvertedValue: function (val) {
          return val * 1.0936133;
        },
      },
      Foot: {
        GetConvertedValue: function (val) {
          return val * 3.2808399;
        },
      },
      Inch: {
        GetConvertedValue: function (val) {
          return val * 39.3700787;
        },
      },
      NauticalMile: {
        GetConvertedValue: function (val) {
          return val / 1852;
        },
      },
    },
    Centimeter: {
      Kilometer: {
        GetConvertedValue: function (val) {
          return val / 100000;
        },
      },
      Meter: {
        GetConvertedValue: function (val) {
          return val / 100;
        },
      },
      Centimeter: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Millimeter: {
        GetConvertedValue: function (val) {
          return val * 10;
        },
      },
      Micrometer: {
        GetConvertedValue: function (val) {
          return val * 10000;
        },
      },
      Nanometer: {
        GetConvertedValue: function (val) {
          return val * 10000000;
        },
      },
      Mile: {
        GetConvertedValue: function (val) {
          return val / 160934.4;
        },
      },
      Yard: {
        GetConvertedValue: function (val) {
          return val / 91.44;
        },
      },
      Foot: {
        GetConvertedValue: function (val) {
          return val / 30.48;
        },
      },
      Inch: {
        GetConvertedValue: function (val) {
          return val / 2.54;
        },
      },
      NauticalMile: {
        GetConvertedValue: function (val) {
          return val / 185200;
        },
      },
    },
    Millimeter: {
      Kilometer: {
        GetConvertedValue: function (val) {
          return val / 1000000;
        },
      },
      Meter: {
        GetConvertedValue: function (val) {
          return val / 1000;
        },
      },
      Centimeter: {
        GetConvertedValue: function (val) {
          return val / 10;
        },
      },
      Millimeter: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Micrometer: {
        GetConvertedValue: function (val) {
          return val * 1000;
        },
      },
      Nanometer: {
        GetConvertedValue: function (val) {
          return val * 1000000;
        },
      },
      Mile: {
        GetConvertedValue: function (val) {
          return val / 1.6093e6;
        },
      },
      Yard: {
        GetConvertedValue: function (val) {
          return val / 914.4;
        },
      },
      Foot: {
        GetConvertedValue: function (val) {
          return val / 304.8;
        },
      },
      Inch: {
        GetConvertedValue: function (val) {
          return val / 25.4;
        },
      },
      NauticalMile: {
        GetConvertedValue: function (val) {
          return val / 1852000;
        },
      },
    },
    Micrometer: {
      Kilometer: {
        GetConvertedValue: function (val) {
          return val / 1.0e9;
        },
      },
      Meter: {
        GetConvertedValue: function (val) {
          return val / 1000000;
        },
      },
      Centimeter: {
        GetConvertedValue: function (val) {
          return val / 10000;
        },
      },
      Millimeter: {
        GetConvertedValue: function (val) {
          return val / 1000;
        },
      },
      Micrometer: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Nanometer: {
        GetConvertedValue: function (val) {
          return val * 1000;
        },
      },
      Mile: {
        GetConvertedValue: function (val) {
          return val / 1.6093e9;
        },
      },
      Yard: {
        GetConvertedValue: function (val) {
          return val / 914400;
        },
      },
      Foot: {
        GetConvertedValue: function (val) {
          return val / 304800;
        },
      },
      Inch: {
        GetConvertedValue: function (val) {
          return val / 25400;
        },
      },
      NauticalMile: {
        GetConvertedValue: function (val) {
          return val / 1.852e9;
        },
      },
    },
    Nanometer: {
      Kilometer: {
        GetConvertedValue: function (val) {
          return val / 1.0e12;
        },
      },
      Meter: {
        GetConvertedValue: function (val) {
          return val / 1.0e9;
        },
      },
      Centimeter: {
        GetConvertedValue: function (val) {
          return val / 10000000;
        },
      },
      Millimeter: {
        GetConvertedValue: function (val) {
          return val / 1000000;
        },
      },
      Micrometer: {
        GetConvertedValue: function (val) {
          return val / 1000;
        },
      },
      Nanometer: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Mile: {
        GetConvertedValue: function (val) {
          return val / 1.6093e12;
        },
      },
      Yard: {
        GetConvertedValue: function (val) {
          return val / 9.144e8;
        },
      },
      Foot: {
        GetConvertedValue: function (val) {
          return val / 3.048e8;
        },
      },
      Inch: {
        GetConvertedValue: function (val) {
          return val / 2.54e7;
        },
      },
      NauticalMile: {
        GetConvertedValue: function (val) {
          return val / 1.852e12;
        },
      },
    },
    Mile: {
      Kilometer: {
        GetConvertedValue: function (val) {
          return val * 1.609344;
        },
      },
      Meter: {
        GetConvertedValue: function (val) {
          return val * 1609.344;
        },
      },
      Centimeter: {
        GetConvertedValue: function (val) {
          return val * 160934.4;
        },
      },
      Millimeter: {
        GetConvertedValue: function (val) {
          return val * 1.6093e6;
        },
      },
      Micrometer: {
        GetConvertedValue: function (val) {
          return val * 1.6093e9;
        },
      },
      Nanometer: {
        GetConvertedValue: function (val) {
          return val * 1.6093e12;
        },
      },
      Mile: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Yard: {
        GetConvertedValue: function (val) {
          return val * 1760;
        },
      },
      Foot: {
        GetConvertedValue: function (val) {
          return val * 5280;
        },
      },
      Inch: {
        GetConvertedValue: function (val) {
          return val * 63360;
        },
      },
      NauticalMile: {
        GetConvertedValue: function (val) {
          return val / 1.15077945;
        },
      },
    },
    Yard: {
      Kilometer: {
        GetConvertedValue: function (val) {
          return val / 1093.6133;
        },
      },
      Meter: {
        GetConvertedValue: function (val) {
          return val / 1.0936133;
        },
      },
      Centimeter: {
        GetConvertedValue: function (val) {
          return val * 91.44;
        },
      },
      Millimeter: {
        GetConvertedValue: function (val) {
          return val * 914.4;
        },
      },
      Micrometer: {
        GetConvertedValue: function (val) {
          return val * 914400;
        },
      },
      Nanometer: {
        GetConvertedValue: function (val) {
          return val * 9.144e8;
        },
      },
      Mile: {
        GetConvertedValue: function (val) {
          return val * 1760;
        },
      },
      Yard: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Foot: {
        GetConvertedValue: function (val) {
          return val * 3;
        },
      },
      Inch: {
        GetConvertedValue: function (val) {
          return val * 36;
        },
      },
      NauticalMile: {
        GetConvertedValue: function (val) {
          return val / 2025.37183;
        },
      },
    },
    Foot: {
      Kilometer: {
        GetConvertedValue: function (val) {
          return val / 3280.8399;
        },
      },
      Meter: {
        GetConvertedValue: function (val) {
          return val / 3.2808399;
        },
      },
      Centimeter: {
        GetConvertedValue: function (val) {
          return val * 30.48;
        },
      },
      Millimeter: {
        GetConvertedValue: function (val) {
          return val * 304.8;
        },
      },
      Micrometer: {
        GetConvertedValue: function (val) {
          return val * 304800;
        },
      },
      Nanometer: {
        GetConvertedValue: function (val) {
          return val * 3.048e8;
        },
      },
      Mile: {
        GetConvertedValue: function (val) {
          return val / 5280;
        },
      },
      Yard: {
        GetConvertedValue: function (val) {
          return val / 3;
        },
      },
      Foot: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Inch: {
        GetConvertedValue: function (val) {
          return val * 12;
        },
      },
      NauticalMile: {
        GetConvertedValue: function (val) {
          return val / 6076.11549;
        },
      },
    },
    Inch: {
      Kilometer: {
        GetConvertedValue: function (val) {
          return val / 39370.0787;
        },
      },
      Meter: {
        GetConvertedValue: function (val) {
          return val / 39.3700787;
        },
      },
      Centimeter: {
        GetConvertedValue: function (val) {
          return val * 2.54;
        },
      },
      Millimeter: {
        GetConvertedValue: function (val) {
          return val * 25.4;
        },
      },
      Micrometer: {
        GetConvertedValue: function (val) {
          return val * 25400;
        },
      },
      Nanometer: {
        GetConvertedValue: function (val) {
          return val * 2.54e7;
        },
      },
      Mile: {
        GetConvertedValue: function (val) {
          return val / 63360;
        },
      },
      Yard: {
        GetConvertedValue: function (val) {
          return val / 36;
        },
      },
      Foot: {
        GetConvertedValue: function (val) {
          return val / 12;
        },
      },
      Inch: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      NauticalMile: {
        GetConvertedValue: function (val) {
          return val / 72913.3858;
        },
      },
    },
    NauticalMile: {
      Kilometer: {
        GetConvertedValue: function (val) {
          return val * 1.852;
        },
      },
      Meter: {
        GetConvertedValue: function (val) {
          return val * 1852;
        },
      },
      Centimeter: {
        GetConvertedValue: function (val) {
          return val * 185200;
        },
      },
      Millimeter: {
        GetConvertedValue: function (val) {
          return val * 1852000;
        },
      },
      Micrometer: {
        GetConvertedValue: function (val) {
          return val * 1.852e9;
        },
      },
      Nanometer: {
        GetConvertedValue: function (val) {
          return val * 1.852e12;
        },
      },
      Mile: {
        GetConvertedValue: function (val) {
          return val * 1.15077945;
        },
      },
      Yard: {
        GetConvertedValue: function (val) {
          return val * 2025.37183;
        },
      },
      Foot: {
        GetConvertedValue: function (val) {
          return val * 6076.11549;
        },
      },
      Inch: {
        GetConvertedValue: function (val) {
          return val * 72913.3858;
        },
      },
      NauticalMile: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
    },
  },
  Time: {
    TypeName: "Time",
    TypeUnits: [
      "Femtosecond",
      "Picosecond",
      "Nanosecond",
      "Microsecond",
      "Millisecond",
      "Second",
      "Minute",
      "Hour",
      "Day",
      "Week",
      "Fortnight",
      "Month",
      "Calendar Year",
      "Sidereal Year",
      "Decade",
      "Century",
      "Millennium",
    ],
    Femtosecond: {
      Femtosecond: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Picosecond: {
        GetConvertedValue: function (val) {
          return val / 1000;
        },
      },
      Nanosecond: {
        GetConvertedValue: function (val) {
          return val / 1000000;
        },
      },
      Microsecond: {
        GetConvertedValue: function (val) {
          return val / 1.0e9;
        },
      },
      Millisecond: {
        GetConvertedValue: function (val) {
          return val / 1.0e12;
        },
      },
      Second: {
        GetConvertedValue: function (val) {
          return val / 1.0e15;
        },
      },
      Minute: {
        GetConvertedValue: function (val) {
          return val / 6.0e16;
        },
      },
      Hour: {
        GetConvertedValue: function (val) {
          return val / 3.6e18;
        },
      },
      Day: {
        GetConvertedValue: function (val) {
          return val / 8.64e19;
        },
      },
      Week: {
        GetConvertedValue: function (val) {
          return val / 6.048e20;
        },
      },
      Fortnight: {
        GetConvertedValue: function (val) {
          return val / 1.2096e21;
        },
      },
      Month: {
        GetConvertedValue: function (val) {
          return val / 2.628e21;
        },
      },
      CalendarYear: {
        GetConvertedValue: function (val) {
          return val / 3.1536e22;
        },
      },
      SiderealYear: {
        GetConvertedValue: function (val) {
          return val / 3.1558e22;
        },
      },
      Decade: {
        GetConvertedValue: function (val) {
          return val / 3.1536e23;
        },
      },
      Century: {
        GetConvertedValue: function (val) {
          return val / 3.1536e24;
        },
      },
      Millennium: {
        GetConvertedValue: function (val) {
          return val / 3.1536e25;
        },
      },
    },
    Picosecond: {
      Femtosecond: {
        GetConvertedValue: function (val) {
          return val * 1000;
        },
      },
      Picosecond: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Nanosecond: {
        GetConvertedValue: function (val) {
          return val / 1000;
        },
      },
      Microsecond: {
        GetConvertedValue: function (val) {
          return val / 1000000;
        },
      },
      Millisecond: {
        GetConvertedValue: function (val) {
          return val / 1.0e9;
        },
      },
      Second: {
        GetConvertedValue: function (val) {
          return val / 1.0e12;
        },
      },
      Minute: {
        GetConvertedValue: function (val) {
          return val / 6.0e13;
        },
      },
      Hour: {
        GetConvertedValue: function (val) {
          return val / 3.6e15;
        },
      },
      Day: {
        GetConvertedValue: function (val) {
          return val / 8.64e16;
        },
      },
      Week: {
        GetConvertedValue: function (val) {
          return val / 6.048e17;
        },
      },
      Fortnight: {
        GetConvertedValue: function (val) {
          return val / 1.2096e18;
        },
      },
      Month: {
        GetConvertedValue: function (val) {
          return val / 2.628e18;
        },
      },
      CalendarYear: {
        GetConvertedValue: function (val) {
          return val / 3.1536e19;
        },
      },
      SiderealYear: {
        GetConvertedValue: function (val) {
          return val / 3.1558e19;
        },
      },
      Decade: {
        GetConvertedValue: function (val) {
          return val / 3.1536e20;
        },
      },
      Century: {
        GetConvertedValue: function (val) {
          return val / 3.1536e21;
        },
      },
      Millennium: {
        GetConvertedValue: function (val) {
          return val / 3.1536e22;
        },
      },
    },
    Nanosecond: {
      Femtosecond: {
        GetConvertedValue: function (val) {
          return val * 1000000;
        },
      },
      Picosecond: {
        GetConvertedValue: function (val) {
          return val * 1000;
        },
      },
      Nanosecond: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Microsecond: {
        GetConvertedValue: function (val) {
          return val / 1000;
        },
      },
      Millisecond: {
        GetConvertedValue: function (val) {
          return val / 1000000;
        },
      },
      Second: {
        GetConvertedValue: function (val) {
          return val / 1.0e9;
        },
      },
      Minute: {
        GetConvertedValue: function (val) {
          return val / 6.0e10;
        },
      },
      Hour: {
        GetConvertedValue: function (val) {
          return val / 3.6e12;
        },
      },
      Day: {
        GetConvertedValue: function (val) {
          return val / 8.64e13;
        },
      },
      Week: {
        GetConvertedValue: function (val) {
          return val / 6.048e14;
        },
      },
      Fortnight: {
        GetConvertedValue: function (val) {
          return val / 1.2096e15;
        },
      },
      Month: {
        GetConvertedValue: function (val) {
          return val / 2.628e15;
        },
      },
      CalendarYear: {
        GetConvertedValue: function (val) {
          return val / 3.1536e16;
        },
      },
      SiderealYear: {
        GetConvertedValue: function (val) {
          return val / 3.1558e16;
        },
      },
      Decade: {
        GetConvertedValue: function (val) {
          return val / 3.1536e17;
        },
      },
      Century: {
        GetConvertedValue: function (val) {
          return val / 3.1536e18;
        },
      },
      Millennium: {
        GetConvertedValue: function (val) {
          return val / 3.1536e19;
        },
      },
    },
    Microsecond: {
      Femtosecond: {
        GetConvertedValue: function (val) {
          return val * 1.0e9;
        },
      },
      Picosecond: {
        GetConvertedValue: function (val) {
          return val * 1000000;
        },
      },
      Nanosecond: {
        GetConvertedValue: function (val) {
          return val * 1000;
        },
      },
      Microsecond: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Millisecond: {
        GetConvertedValue: function (val) {
          return val / 1000;
        },
      },
      Second: {
        GetConvertedValue: function (val) {
          return val / 1000000;
        },
      },
      Minute: {
        GetConvertedValue: function (val) {
          return val / 60000000;
        },
      },
      Hour: {
        GetConvertedValue: function (val) {
          return val / 3.6e9;
        },
      },
      Day: {
        GetConvertedValue: function (val) {
          return val / 8.64e10;
        },
      },
      Week: {
        GetConvertedValue: function (val) {
          return val / 6.048e11;
        },
      },
      Fortnight: {
        GetConvertedValue: function (val) {
          return val / 1.2096e12;
        },
      },
      Month: {
        GetConvertedValue: function (val) {
          return val / 2.628e12;
        },
      },
      CalendarYear: {
        GetConvertedValue: function (val) {
          return val / 3.1536e13;
        },
      },
      SiderealYear: {
        GetConvertedValue: function (val) {
          return val / 3.1558e13;
        },
      },
      Decade: {
        GetConvertedValue: function (val) {
          return val / 3.1536e14;
        },
      },
      Century: {
        GetConvertedValue: function (val) {
          return val / 3.1536e15;
        },
      },
      Millennium: {
        GetConvertedValue: function (val) {
          return val / 3.1536e16;
        },
      },
    },
    Millisecond: {
      Femtosecond: {
        GetConvertedValue: function (val) {
          return val * 1.0e12;
        },
      },
      Picosecond: {
        GetConvertedValue: function (val) {
          return val * 1.0e9;
        },
      },
      Nanosecond: {
        GetConvertedValue: function (val) {
          return val * 1000000;
        },
      },
      Microsecond: {
        GetConvertedValue: function (val) {
          return val * 1000;
        },
      },
      Millisecond: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Second: {
        GetConvertedValue: function (val) {
          return val / 1000;
        },
      },
      Minute: {
        GetConvertedValue: function (val) {
          return val / 60000;
        },
      },
      Hour: {
        GetConvertedValue: function (val) {
          return val / 3.6e6;
        },
      },
      Day: {
        GetConvertedValue: function (val) {
          return val / 86400000;
        },
      },
      Week: {
        GetConvertedValue: function (val) {
          return val / 604800000;
        },
      },
      Fortnight: {
        GetConvertedValue: function (val) {
          return val / 1.2096e9;
        },
      },
      Month: {
        GetConvertedValue: function (val) {
          return val / 2.628e9;
        },
      },
      CalendarYear: {
        GetConvertedValue: function (val) {
          return val / 3.1536e10;
        },
      },
      SiderealYear: {
        GetConvertedValue: function (val) {
          return val / 3.1558e10;
        },
      },
      Decade: {
        GetConvertedValue: function (val) {
          return val / 3.1536e11;
        },
      },
      Century: {
        GetConvertedValue: function (val) {
          return val / 3.1536e12;
        },
      },
      Millennium: {
        GetConvertedValue: function (val) {
          return val / 3.1536e13;
        },
      },
    },
    Second: {
      Femtosecond: {
        GetConvertedValue: function (val) {
          return val * 1.0e15;
        },
      },
      Picosecond: {
        GetConvertedValue: function (val) {
          return val * 1.0e12;
        },
      },
      Nanosecond: {
        GetConvertedValue: function (val) {
          return val * 1.0e9;
        },
      },
      Microsecond: {
        GetConvertedValue: function (val) {
          return val * 1000000;
        },
      },
      Millisecond: {
        GetConvertedValue: function (val) {
          return val * 1000;
        },
      },
      Second: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Minute: {
        GetConvertedValue: function (val) {
          return val / 60;
        },
      },
      Hour: {
        GetConvertedValue: function (val) {
          return val / 3600;
        },
      },
      Day: {
        GetConvertedValue: function (val) {
          return val / 86400;
        },
      },
      Week: {
        GetConvertedValue: function (val) {
          return val / 604800;
        },
      },
      Fortnight: {
        GetConvertedValue: function (val) {
          return val / 11209600;
        },
      },
      Month: {
        GetConvertedValue: function (val) {
          return val / 2628000;
        },
      },
      CalendarYear: {
        GetConvertedValue: function (val) {
          return val / 31536000;
        },
      },
      SiderealYear: {
        GetConvertedValue: function (val) {
          return val / 3.1558e7;
        },
      },
      Decade: {
        GetConvertedValue: function (val) {
          return val / 315360000;
        },
      },
      Century: {
        GetConvertedValue: function (val) {
          return val / 3.1536e9;
        },
      },
      Millennium: {
        GetConvertedValue: function (val) {
          return val / 3.1536e10;
        },
      },
    },
    Minute: {
      Femtosecond: {
        GetConvertedValue: function (val) {
          return val * 6.0e16;
        },
      },
      Picosecond: {
        GetConvertedValue: function (val) {
          return val * 6.0e13;
        },
      },
      Nanosecond: {
        GetConvertedValue: function (val) {
          return val * 6.0e10;
        },
      },
      Microsecond: {
        GetConvertedValue: function (val) {
          return val * 60000000;
        },
      },
      Millisecond: {
        GetConvertedValue: function (val) {
          return val * 60000;
        },
      },
      Second: {
        GetConvertedValue: function (val) {
          return val * 60;
        },
      },
      Minute: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Hour: {
        GetConvertedValue: function (val) {
          return val / 60;
        },
      },
      Day: {
        GetConvertedValue: function (val) {
          return val / 1440;
        },
      },
      Week: {
        GetConvertedValue: function (val) {
          return val / 10080;
        },
      },
      Fortnight: {
        GetConvertedValue: function (val) {
          return val / 20160;
        },
      },
      Month: {
        GetConvertedValue: function (val) {
          return val / 43800;
        },
      },
      CalendarYear: {
        GetConvertedValue: function (val) {
          return val / 525600;
        },
      },
      SiderealYear: {
        GetConvertedValue: function (val) {
          return val / 525969.159;
        },
      },
      Decade: {
        GetConvertedValue: function (val) {
          return val / 5256000;
        },
      },
      Century: {
        GetConvertedValue: function (val) {
          return val / 52560000;
        },
      },
      Millennium: {
        GetConvertedValue: function (val) {
          return val / 525600000;
        },
      },
    },
    Hour: {
      Femtosecond: {
        GetConvertedValue: function (val) {
          return val * 3.6e18;
        },
      },
      Picosecond: {
        GetConvertedValue: function (val) {
          return val * 3.6e15;
        },
      },
      Nanosecond: {
        GetConvertedValue: function (val) {
          return val * 3.6e12;
        },
      },
      Microsecond: {
        GetConvertedValue: function (val) {
          return val * 3.6e9;
        },
      },
      Millisecond: {
        GetConvertedValue: function (val) {
          return val * 3600000;
        },
      },
      Second: {
        GetConvertedValue: function (val) {
          return val * 3600;
        },
      },
      Minute: {
        GetConvertedValue: function (val) {
          return val * 60;
        },
      },
      Hour: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Day: {
        GetConvertedValue: function (val) {
          return val / 24;
        },
      },
      Week: {
        GetConvertedValue: function (val) {
          return val / 168;
        },
      },
      Fortnight: {
        GetConvertedValue: function (val) {
          return val / 336;
        },
      },
      Month: {
        GetConvertedValue: function (val) {
          return val / 730;
        },
      },
      CalendarYear: {
        GetConvertedValue: function (val) {
          return val / 8760;
        },
      },
      SiderealYear: {
        GetConvertedValue: function (val) {
          return val / 8766.15265;
        },
      },
      Decade: {
        GetConvertedValue: function (val) {
          return val / 87600;
        },
      },
      Century: {
        GetConvertedValue: function (val) {
          return val / 876000;
        },
      },
      Millennium: {
        GetConvertedValue: function (val) {
          return val / 8760000;
        },
      },
    },
    Day: {
      Femtosecond: {
        GetConvertedValue: function (val) {
          return val * 8.64e19;
        },
      },
      Picosecond: {
        GetConvertedValue: function (val) {
          return val * 8.64e16;
        },
      },
      Nanosecond: {
        GetConvertedValue: function (val) {
          return val * 8.64e13;
        },
      },
      Microsecond: {
        GetConvertedValue: function (val) {
          return val * 8.64e10;
        },
      },
      Millisecond: {
        GetConvertedValue: function (val) {
          return val * 86400000;
        },
      },
      Second: {
        GetConvertedValue: function (val) {
          return val * 86400;
        },
      },
      Minute: {
        GetConvertedValue: function (val) {
          return val * 1440;
        },
      },
      Hour: {
        GetConvertedValue: function (val) {
          return val * 24;
        },
      },
      Day: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Week: {
        GetConvertedValue: function (val) {
          return val / 7;
        },
      },
      Fortnight: {
        GetConvertedValue: function (val) {
          return val / 14;
        },
      },
      Month: {
        GetConvertedValue: function (val) {
          return val / 30.4166667;
        },
      },
      CalendarYear: {
        GetConvertedValue: function (val) {
          return val / 365;
        },
      },
      SiderealYear: {
        GetConvertedValue: function (val) {
          return val / 365.25636;
        },
      },
      Decade: {
        GetConvertedValue: function (val) {
          return val / 3650;
        },
      },
      Century: {
        GetConvertedValue: function (val) {
          return val / 36500;
        },
      },
      Millennium: {
        GetConvertedValue: function (val) {
          return val / 365000;
        },
      },
    },
    Week: {
      Femtosecond: {
        GetConvertedValue: function (val) {
          return val * 6.048e20;
        },
      },
      Picosecond: {
        GetConvertedValue: function (val) {
          return val * 6.048e17;
        },
      },
      Nanosecond: {
        GetConvertedValue: function (val) {
          return val * 6.048e14;
        },
      },
      Microsecond: {
        GetConvertedValue: function (val) {
          return val * 6.048e11;
        },
      },
      Millisecond: {
        GetConvertedValue: function (val) {
          return val * 604800000;
        },
      },
      Second: {
        GetConvertedValue: function (val) {
          return val * 604800;
        },
      },
      Minute: {
        GetConvertedValue: function (val) {
          return val * 10080;
        },
      },
      Hour: {
        GetConvertedValue: function (val) {
          return val * 168;
        },
      },
      Day: {
        GetConvertedValue: function (val) {
          return val * 7;
        },
      },
      Week: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Fortnight: {
        GetConvertedValue: function (val) {
          return val / 2;
        },
      },
      Month: {
        GetConvertedValue: function (val) {
          return val / 4.3452381;
        },
      },
      CalendarYear: {
        GetConvertedValue: function (val) {
          return val / 52.1428571;
        },
      },
      SiderealYear: {
        GetConvertedValue: function (val) {
          return val / 52.1794801;
        },
      },
      Decade: {
        GetConvertedValue: function (val) {
          return val / 521.428571;
        },
      },
      Century: {
        GetConvertedValue: function (val) {
          return val / 5214.28571;
        },
      },
      Millennium: {
        GetConvertedValue: function (val) {
          return val / 52142.8571;
        },
      },
    },
    Fortnight: {
      Femtosecond: {
        GetConvertedValue: function (val) {
          return val * 1.2096e21;
        },
      },
      Picosecond: {
        GetConvertedValue: function (val) {
          return val * 1.2096e18;
        },
      },
      Nanosecond: {
        GetConvertedValue: function (val) {
          return val * 1.2096e15;
        },
      },
      Microsecond: {
        GetConvertedValue: function (val) {
          return val * 1.2096e12;
        },
      },
      Millisecond: {
        GetConvertedValue: function (val) {
          return val * 1.2096e9;
        },
      },
      Second: {
        GetConvertedValue: function (val) {
          return val * 1209600;
        },
      },
      Minute: {
        GetConvertedValue: function (val) {
          return val * 20160;
        },
      },
      Hour: {
        GetConvertedValue: function (val) {
          return val * 336;
        },
      },
      Day: {
        GetConvertedValue: function (val) {
          return val * 14;
        },
      },
      Week: {
        GetConvertedValue: function (val) {
          return val * 2;
        },
      },
      Fortnight: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Month: {
        GetConvertedValue: function (val) {
          return val / 2.17261905;
        },
      },
      CalendarYear: {
        GetConvertedValue: function (val) {
          return val / 26.0714286;
        },
      },
      SiderealYear: {
        GetConvertedValue: function (val) {
          return val / 26.08974;
        },
      },
      Decade: {
        GetConvertedValue: function (val) {
          return val / 260.714286;
        },
      },
      Century: {
        GetConvertedValue: function (val) {
          return val / 2607.14286;
        },
      },
      Millennium: {
        GetConvertedValue: function (val) {
          return val / 26071.4286;
        },
      },
    },
    Month: {
      Femtosecond: {
        GetConvertedValue: function (val) {
          return val * 2.628e21;
        },
      },
      Picosecond: {
        GetConvertedValue: function (val) {
          return val * 2.628e18;
        },
      },
      Nanosecond: {
        GetConvertedValue: function (val) {
          return val * 2.628e15;
        },
      },
      Microsecond: {
        GetConvertedValue: function (val) {
          return val * 2.628e12;
        },
      },
      Millisecond: {
        GetConvertedValue: function (val) {
          return val * 2.628e9;
        },
      },
      Second: {
        GetConvertedValue: function (val) {
          return val * 2628000;
        },
      },
      Minute: {
        GetConvertedValue: function (val) {
          return val * 43800;
        },
      },
      Hour: {
        GetConvertedValue: function (val) {
          return val * 730;
        },
      },
      Day: {
        GetConvertedValue: function (val) {
          return val * 30.4166667;
        },
      },
      Week: {
        GetConvertedValue: function (val) {
          return val * 4.3452381;
        },
      },
      Fortnight: {
        GetConvertedValue: function (val) {
          return val * 2.17261905;
        },
      },
      Month: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      CalendarYear: {
        GetConvertedValue: function (val) {
          return val / 12;
        },
      },
      SiderealYear: {
        GetConvertedValue: function (val) {
          return val / 12.0084283;
        },
      },
      Decade: {
        GetConvertedValue: function (val) {
          return val / 120;
        },
      },
      Century: {
        GetConvertedValue: function (val) {
          return val / 1200;
        },
      },
      Millennium: {
        GetConvertedValue: function (val) {
          return val / 12000;
        },
      },
    },
    CalendarYear: {
      Femtosecond: {
        GetConvertedValue: function (val) {
          return val * 3.1536e22;
        },
      },
      Picosecond: {
        GetConvertedValue: function (val) {
          return val * 3.1536e19;
        },
      },
      Nanosecond: {
        GetConvertedValue: function (val) {
          return val * 3.1536e16;
        },
      },
      Microsecond: {
        GetConvertedValue: function (val) {
          return val * 3.1536e13;
        },
      },
      Millisecond: {
        GetConvertedValue: function (val) {
          return val * 3.1536e10;
        },
      },
      Second: {
        GetConvertedValue: function (val) {
          return val * 31536000;
        },
      },
      Minute: {
        GetConvertedValue: function (val) {
          return val * 525600;
        },
      },
      Hour: {
        GetConvertedValue: function (val) {
          return val * 8760;
        },
      },
      Day: {
        GetConvertedValue: function (val) {
          return val * 365;
        },
      },
      Week: {
        GetConvertedValue: function (val) {
          return val * 52.1428571;
        },
      },
      Fortnight: {
        GetConvertedValue: function (val) {
          return val * 26.0714286;
        },
      },
      Month: {
        GetConvertedValue: function (val) {
          return val * 12;
        },
      },
      CalendarYear: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      SiderealYear: {
        GetConvertedValue: function (val) {
          return val / 1.00070236;
        },
      },
      Decade: {
        GetConvertedValue: function (val) {
          return val / 10;
        },
      },
      Century: {
        GetConvertedValue: function (val) {
          return val / 100;
        },
      },
      Millennium: {
        GetConvertedValue: function (val) {
          return val / 1000;
        },
      },
    },
    SiderealYear: {
      Femtosecond: {
        GetConvertedValue: function (val) {
          return val * 3.1558e22;
        },
      },
      Picosecond: {
        GetConvertedValue: function (val) {
          return val * 3.1558e19;
        },
      },
      Nanosecond: {
        GetConvertedValue: function (val) {
          return val * 3.1558e16;
        },
      },
      Microsecond: {
        GetConvertedValue: function (val) {
          return val * 3.1558e13;
        },
      },
      Millisecond: {
        GetConvertedValue: function (val) {
          return val * 3.1558e10;
        },
      },
      Second: {
        GetConvertedValue: function (val) {
          return val * 3.1558e7;
        },
      },
      Minute: {
        GetConvertedValue: function (val) {
          return val * 525969.159;
        },
      },
      Hour: {
        GetConvertedValue: function (val) {
          return val * 8766.15265;
        },
      },
      Day: {
        GetConvertedValue: function (val) {
          return val * 365.25636;
        },
      },
      Week: {
        GetConvertedValue: function (val) {
          return val * 52.1794801;
        },
      },
      Fortnight: {
        GetConvertedValue: function (val) {
          return val * 26.08974;
        },
      },
      Month: {
        GetConvertedValue: function (val) {
          return val * 12.0084283;
        },
      },
      CalendarYear: {
        GetConvertedValue: function (val) {
          return val * 1.00070236;
        },
      },
      SiderealYear: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Decade: {
        GetConvertedValue: function (val) {
          return val / 9.99298136;
        },
      },
      Century: {
        GetConvertedValue: function (val) {
          return val / 99.9298136;
        },
      },
      Millennium: {
        GetConvertedValue: function (val) {
          return val / 999.298136;
        },
      },
    },
    Decade: {
      Femtosecond: {
        GetConvertedValue: function (val) {
          return val * 3.1536e23;
        },
      },
      Picosecond: {
        GetConvertedValue: function (val) {
          return val * 3.1536e20;
        },
      },
      Nanosecond: {
        GetConvertedValue: function (val) {
          return val * 3.1536e17;
        },
      },
      Microsecond: {
        GetConvertedValue: function (val) {
          return val * 3.1536e14;
        },
      },
      Millisecond: {
        GetConvertedValue: function (val) {
          return val * 3.1536e11;
        },
      },
      Second: {
        GetConvertedValue: function (val) {
          return val * 315360000;
        },
      },
      Minute: {
        GetConvertedValue: function (val) {
          return val * 5256000;
        },
      },
      Hour: {
        GetConvertedValue: function (val) {
          return val * 87600;
        },
      },
      Day: {
        GetConvertedValue: function (val) {
          return val * 3650;
        },
      },
      Week: {
        GetConvertedValue: function (val) {
          return val * 521.428571;
        },
      },
      Fortnight: {
        GetConvertedValue: function (val) {
          return val * 260.714286;
        },
      },
      Month: {
        GetConvertedValue: function (val) {
          return val * 120;
        },
      },
      CalendarYear: {
        GetConvertedValue: function (val) {
          return val * 10;
        },
      },
      SiderealYear: {
        GetConvertedValue: function (val) {
          return val * 9.99298136;
        },
      },
      Decade: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Century: {
        GetConvertedValue: function (val) {
          return val / 10;
        },
      },
      Millennium: {
        GetConvertedValue: function (val) {
          return val / 100;
        },
      },
    },
    Century: {
      Femtosecond: {
        GetConvertedValue: function (val) {
          return val * 3.1536e24;
        },
      },
      Picosecond: {
        GetConvertedValue: function (val) {
          return val * 3.1536e21;
        },
      },
      Nanosecond: {
        GetConvertedValue: function (val) {
          return val * 3.1536e18;
        },
      },
      Microsecond: {
        GetConvertedValue: function (val) {
          return val * 3.1536e15;
        },
      },
      Millisecond: {
        GetConvertedValue: function (val) {
          return val * 3.1536e12;
        },
      },
      Second: {
        GetConvertedValue: function (val) {
          return val * 3.1536e9;
        },
      },
      Minute: {
        GetConvertedValue: function (val) {
          return val * 52560000;
        },
      },
      Hour: {
        GetConvertedValue: function (val) {
          return val * 876000;
        },
      },
      Day: {
        GetConvertedValue: function (val) {
          return val * 36500;
        },
      },
      Week: {
        GetConvertedValue: function (val) {
          return val * 5214.28571;
        },
      },
      Fortnight: {
        GetConvertedValue: function (val) {
          return val * 2607.14286;
        },
      },
      Month: {
        GetConvertedValue: function (val) {
          return val * 1200;
        },
      },
      CalendarYear: {
        GetConvertedValue: function (val) {
          return val * 100;
        },
      },
      SiderealYear: {
        GetConvertedValue: function (val) {
          return val * 99.9298136;
        },
      },
      Decade: {
        GetConvertedValue: function (val) {
          return val * 10;
        },
      },
      Century: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Millennium: {
        GetConvertedValue: function (val) {
          return val / 10;
        },
      },
    },
    Millennium: {
      Femtosecond: {
        GetConvertedValue: function (val) {
          return val * 3.1536e25;
        },
      },
      Picosecond: {
        GetConvertedValue: function (val) {
          return val * 3.1536e22;
        },
      },
      Nanosecond: {
        GetConvertedValue: function (val) {
          return val * 3.1536e19;
        },
      },
      Microsecond: {
        GetConvertedValue: function (val) {
          return val * 3.1536e16;
        },
      },
      Millisecond: {
        GetConvertedValue: function (val) {
          return val * 3.1536e13;
        },
      },
      Second: {
        GetConvertedValue: function (val) {
          return val * 3.1536e10;
        },
      },
      Minute: {
        GetConvertedValue: function (val) {
          return val * 525600000;
        },
      },
      Hour: {
        GetConvertedValue: function (val) {
          return val * 8760000;
        },
      },
      Day: {
        GetConvertedValue: function (val) {
          return val * 365000;
        },
      },
      Week: {
        GetConvertedValue: function (val) {
          return val * 52142.8571;
        },
      },
      Fortnight: {
        GetConvertedValue: function (val) {
          return val * 26071.4286;
        },
      },
      Month: {
        GetConvertedValue: function (val) {
          return val * 12000;
        },
      },
      CalendarYear: {
        GetConvertedValue: function (val) {
          return val * 1000;
        },
      },
      SiderealYear: {
        GetConvertedValue: function (val) {
          return val * 999.298136;
        },
      },
      Decade: {
        GetConvertedValue: function (val) {
          return val * 100;
        },
      },
      Century: {
        GetConvertedValue: function (val) {
          return val * 10;
        },
      },
      Millennium: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
    },
  },
  Pressure: {
    TypeName: "Pressure",
    TypeUnits: [
      "Bar",
      "Millibar",
      "Pascal",
      "Hectopascal",
      "Psi",
      "Torr",
      "Standard Atmosphere",
      "Technical Atmosphere",
    ],
    Bar: {
      Bar: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Millibar: {
        GetConvertedValue: function (val) {
          return val * 1000;
        },
      },
      Pascal: {
        GetConvertedValue: function (val) {
          return val * 100000;
        },
      },
      Hectopascal: {
        GetConvertedValue: function (val) {
          return val * 1000;
        },
      },
      Psi: {
        GetConvertedValue: function (val) {
          return val * 14.5037738;
        },
      },
      Torr: {
        GetConvertedValue: function (val) {
          return val * 750.061685;
        },
      },
      StandardAtmosphere: {
        GetConvertedValue: function (val) {
          return val / 1.01325;
        },
      },
      TechnicalAtmosphere: {
        GetConvertedValue: function (val) {
          return val * 1.01971621;
        },
      },
    },
    Millibar: {
      Bar: {
        GetConvertedValue: function (val) {
          return val / 1000;
        },
      },
      Millibar: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Pascal: {
        GetConvertedValue: function (val) {
          return val * 100;
        },
      },
      Hectopascal: {
        GetConvertedValue: function (val) {
          return val * 1;
        },
      },
      Psi: {
        GetConvertedValue: function (val) {
          return val / 68.9475729;
        },
      },
      Torr: {
        GetConvertedValue: function (val) {
          return val / 1.33322368;
        },
      },
      StandardAtmosphere: {
        GetConvertedValue: function (val) {
          return val / 1013.25;
        },
      },
      TechnicalAtmosphere: {
        GetConvertedValue: function (val) {
          return val / 980.665;
        },
      },
    },
    Pascal: {
      Bar: {
        GetConvertedValue: function (val) {
          return val / 100000;
        },
      },
      Millibar: {
        GetConvertedValue: function (val) {
          return val / 100;
        },
      },
      Pascal: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Hectopascal: {
        GetConvertedValue: function (val) {
          return val / 100;
        },
      },
      Psi: {
        GetConvertedValue: function (val) {
          return val / 6894.75729;
        },
      },
      Torr: {
        GetConvertedValue: function (val) {
          return val / 133.322368;
        },
      },
      StandardAtmosphere: {
        GetConvertedValue: function (val) {
          return val / 101325;
        },
      },
      TechnicalAtmosphere: {
        GetConvertedValue: function (val) {
          return val / 98066.5;
        },
      },
    },
    Hectopascal: {
      Bar: {
        GetConvertedValue: function (val) {
          return val / 1000;
        },
      },
      Millibar: {
        GetConvertedValue: function (val) {
          return val * 1;
        },
      },
      Pascal: {
        GetConvertedValue: function (val) {
          return val * 100;
        },
      },
      Hectopascal: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Psi: {
        GetConvertedValue: function (val) {
          return val / 68.9475729;
        },
      },
      Torr: {
        GetConvertedValue: function (val) {
          return val / 1.33322368;
        },
      },
      StandardAtmosphere: {
        GetConvertedValue: function (val) {
          return val / 1013.25;
        },
      },
      TechnicalAtmosphere: {
        GetConvertedValue: function (val) {
          return val / 980.665;
        },
      },
    },
    Psi: {
      Bar: {
        GetConvertedValue: function (val) {
          return val / 14.5037738;
        },
      },
      Millibar: {
        GetConvertedValue: function (val) {
          return val * 68.9475729;
        },
      },
      Pascal: {
        GetConvertedValue: function (val) {
          return val * 6894.75729;
        },
      },
      Hectopascal: {
        GetConvertedValue: function (val) {
          return val * 68.9475729;
        },
      },
      Psi: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Torr: {
        GetConvertedValue: function (val) {
          return val * 51.7149327;
        },
      },
      StandardAtmosphere: {
        GetConvertedValue: function (val) {
          return val / 14.6959488;
        },
      },
      TechnicalAtmosphere: {
        GetConvertedValue: function (val) {
          return val / 14.2233433;
        },
      },
    },
    Torr: {
      Bar: {
        GetConvertedValue: function (val) {
          return val / 750.061685;
        },
      },
      Millibar: {
        GetConvertedValue: function (val) {
          return val * 1.33322368;
        },
      },
      Pascal: {
        GetConvertedValue: function (val) {
          return val * 133.322368;
        },
      },
      Hectopascal: {
        GetConvertedValue: function (val) {
          return val * 1.33322368;
        },
      },
      Psi: {
        GetConvertedValue: function (val) {
          return val / 51.7149327;
        },
      },
      Torr: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      StandardAtmosphere: {
        GetConvertedValue: function (val) {
          return val / 760.000002;
        },
      },
      TechnicalAtmosphere: {
        GetConvertedValue: function (val) {
          return val / 735.559242;
        },
      },
    },
    StandardAtmosphere: {
      Bar: {
        GetConvertedValue: function (val) {
          return val * 1.01325;
        },
      },
      Millibar: {
        GetConvertedValue: function (val) {
          return val * 1013.25;
        },
      },
      Pascal: {
        GetConvertedValue: function (val) {
          return val * 101325;
        },
      },
      Hectopascal: {
        GetConvertedValue: function (val) {
          return val * 1013.25;
        },
      },
      Psi: {
        GetConvertedValue: function (val) {
          return val * 14.6959488;
        },
      },
      Torr: {
        GetConvertedValue: function (val) {
          return val * 760.000002;
        },
      },
      StandardAtmosphere: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      TechnicalAtmosphere: {
        GetConvertedValue: function (val) {
          return val * 1.03322745;
        },
      },
    },
    TechnicalAtmosphere: {
      Bar: {
        GetConvertedValue: function (val) {
          return val / 1.01971621;
        },
      },
      Millibar: {
        GetConvertedValue: function (val) {
          return val * 980.665;
        },
      },
      Pascal: {
        GetConvertedValue: function (val) {
          return val * 98066.5;
        },
      },
      Hectopascal: {
        GetConvertedValue: function (val) {
          return val * 980.665;
        },
      },
      Psi: {
        GetConvertedValue: function (val) {
          return val * 14.2233433;
        },
      },
      Torr: {
        GetConvertedValue: function (val) {
          return val * 735.559242;
        },
      },
      StandardAtmosphere: {
        GetConvertedValue: function (val) {
          return val / 1.03322745;
        },
      },
      TechnicalAtmosphere: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
    },
  },
  Mass: {
    TypeName: "Mass",
    TypeUnits: [
      "Kilogram",
      "Gram",
      "Milligram",
      "Metric ton",
      "Imperial ton",
      "Stone",
      "Pound",
      "Ounce",
      "Carat",
      "Atomic mass",
    ],
    Kilogram: {
      Kilogram: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Gram: {
        GetConvertedValue: function (val) {
          return val * 1000;
        },
      },
      Milligram: {
        GetConvertedValue: function (val) {
          return val * 1000000;
        },
      },
      MetricTon: {
        GetConvertedValue: function (val) {
          return val / 1000;
        },
      },
      ImperialTon: {
        GetConvertedValue: function (val) {
          return val / 1016.04691;
        },
      },
      Stone: {
        GetConvertedValue: function (val) {
          return val / 6.35029317;
        },
      },
      Pound: {
        GetConvertedValue: function (val) {
          return val * 2.20462262;
        },
      },
      Ounce: {
        GetConvertedValue: function (val) {
          return val * 35.273962;
        },
      },
      Carat: {
        GetConvertedValue: function (val) {
          return val * 5000;
        },
      },
      AtomicMass: {
        GetConvertedValue: function (val) {
          return val * 6.0221e26;
        },
      },
    },
    Gram: {
      Kilogram: {
        GetConvertedValue: function (val) {
          return val / 1000;
        },
      },
      Gram: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Milligram: {
        GetConvertedValue: function (val) {
          return val * 1000;
        },
      },
      MetricTon: {
        GetConvertedValue: function (val) {
          return val / 1000000;
        },
      },
      ImperialTon: {
        GetConvertedValue: function (val) {
          return val / 1.016e6;
        },
      },
      Stone: {
        GetConvertedValue: function (val) {
          return val / 6350.29317;
        },
      },
      Pound: {
        GetConvertedValue: function (val) {
          return val / 453.59237;
        },
      },
      Ounce: {
        GetConvertedValue: function (val) {
          return val / 28.3495231;
        },
      },
      Carat: {
        GetConvertedValue: function (val) {
          return val * 5;
        },
      },
      AtomicMass: {
        GetConvertedValue: function (val) {
          return val * 6.0221e23;
        },
      },
    },
    Milligram: {
      Kilogram: {
        GetConvertedValue: function (val) {
          return val / 1000000;
        },
      },
      Gram: {
        GetConvertedValue: function (val) {
          return val / 1000;
        },
      },
      Milligram: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      MetricTon: {
        GetConvertedValue: function (val) {
          return val / 1.0e9;
        },
      },
      ImperialTon: {
        GetConvertedValue: function (val) {
          return val / 1.016e9;
        },
      },
      Stone: {
        GetConvertedValue: function (val) {
          return val / 6.3503e6;
        },
      },
      Pound: {
        GetConvertedValue: function (val) {
          return val / 453592.37;
        },
      },
      Ounce: {
        GetConvertedValue: function (val) {
          return val / 28349.5231;
        },
      },
      Carat: {
        GetConvertedValue: function (val) {
          return val / 200;
        },
      },
      AtomicMass: {
        GetConvertedValue: function (val) {
          return val * 6.0221e20;
        },
      },
    },
    MetricTon: {
      Kilogram: {
        GetConvertedValue: function (val) {
          return val * 1000;
        },
      },
      Gram: {
        GetConvertedValue: function (val) {
          return val * 1000000;
        },
      },
      Milligram: {
        GetConvertedValue: function (val) {
          return val * 1.0e9;
        },
      },
      MetricTon: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      ImperialTon: {
        GetConvertedValue: function (val) {
          return val / 1.01604691;
        },
      },
      Stone: {
        GetConvertedValue: function (val) {
          return val * 157.473045;
        },
      },
      Pound: {
        GetConvertedValue: function (val) {
          return val * 2204.62262;
        },
      },
      Ounce: {
        GetConvertedValue: function (val) {
          return val * 35273.962;
        },
      },
      Carat: {
        GetConvertedValue: function (val) {
          return val * 5000000;
        },
      },
      AtomicMass: {
        GetConvertedValue: function (val) {
          return val * 6.0221e29;
        },
      },
    },
    ImperialTon: {
      Kilogram: {
        GetConvertedValue: function (val) {
          return val * 1016.04691;
        },
      },
      Gram: {
        GetConvertedValue: function (val) {
          return val * 1.016e6;
        },
      },
      Milligram: {
        GetConvertedValue: function (val) {
          return val * 1.016e9;
        },
      },
      MetricTon: {
        GetConvertedValue: function (val) {
          return val * 1.01604691;
        },
      },
      ImperialTon: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Stone: {
        GetConvertedValue: function (val) {
          return val * 160;
        },
      },
      Pound: {
        GetConvertedValue: function (val) {
          return val * 2240;
        },
      },
      Ounce: {
        GetConvertedValue: function (val) {
          return val * 35840;
        },
      },
      Carat: {
        GetConvertedValue: function (val) {
          return val * 5.0802e6;
        },
      },
      AtomicMass: {
        GetConvertedValue: function (val) {
          return val * 6.1188e29;
        },
      },
    },
    Stone: {
      Kilogram: {
        GetConvertedValue: function (val) {
          return val * 6.35029317;
        },
      },
      Gram: {
        GetConvertedValue: function (val) {
          return val * 6350.29317;
        },
      },
      Milligram: {
        GetConvertedValue: function (val) {
          return val * 6.3503e6;
        },
      },
      MetricTon: {
        GetConvertedValue: function (val) {
          return val / 157.473045;
        },
      },
      ImperialTon: {
        GetConvertedValue: function (val) {
          return val / 160;
        },
      },
      Stone: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Pound: {
        GetConvertedValue: function (val) {
          return val * 14;
        },
      },
      Ounce: {
        GetConvertedValue: function (val) {
          return val * 224;
        },
      },
      Carat: {
        GetConvertedValue: function (val) {
          return val * 31751.4659;
        },
      },
      AtomicMass: {
        GetConvertedValue: function (val) {
          return val * 3.8242e27;
        },
      },
    },
    Pound: {
      Kilogram: {
        GetConvertedValue: function (val) {
          return val / 2.20462262;
        },
      },
      Gram: {
        GetConvertedValue: function (val) {
          return val * 453.59237;
        },
      },
      Milligram: {
        GetConvertedValue: function (val) {
          return val * 453592.37;
        },
      },
      MetricTon: {
        GetConvertedValue: function (val) {
          return val / 2204.62262;
        },
      },
      ImperialTon: {
        GetConvertedValue: function (val) {
          return val / 2240;
        },
      },
      Stone: {
        GetConvertedValue: function (val) {
          return val / 14;
        },
      },
      Pound: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Ounce: {
        GetConvertedValue: function (val) {
          return val * 16;
        },
      },
      Carat: {
        GetConvertedValue: function (val) {
          return val * 2267.96185;
        },
      },
      AtomicMass: {
        GetConvertedValue: function (val) {
          return val * 2.7316e26;
        },
      },
    },
    Ounce: {
      Kilogram: {
        GetConvertedValue: function (val) {
          return val / 35.273962;
        },
      },
      Gram: {
        GetConvertedValue: function (val) {
          return val * 28.3495231;
        },
      },
      Milligram: {
        GetConvertedValue: function (val) {
          return val * 28349.5231;
        },
      },
      MetricTon: {
        GetConvertedValue: function (val) {
          return val / 35273.962;
        },
      },
      ImperialTon: {
        GetConvertedValue: function (val) {
          return val / 35840;
        },
      },
      Stone: {
        GetConvertedValue: function (val) {
          return val / 224;
        },
      },
      Pound: {
        GetConvertedValue: function (val) {
          return val / 16;
        },
      },
      Ounce: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      Carat: {
        GetConvertedValue: function (val) {
          return val * 141.747615;
        },
      },
      AtomicMass: {
        GetConvertedValue: function (val) {
          return val * 1.7072e25;
        },
      },
    },
    Carat: {
      Kilogram: {
        GetConvertedValue: function (val) {
          return val / 5000;
        },
      },
      Gram: {
        GetConvertedValue: function (val) {
          return val / 5;
        },
      },
      Milligram: {
        GetConvertedValue: function (val) {
          return val * 200;
        },
      },
      MetricTon: {
        GetConvertedValue: function (val) {
          return val / 5000000;
        },
      },
      ImperialTon: {
        GetConvertedValue: function (val) {
          return val / 5.0802e6;
        },
      },
      Stone: {
        GetConvertedValue: function (val) {
          return val / 31751.4659;
        },
      },
      Pound: {
        GetConvertedValue: function (val) {
          return val / 2267.96185;
        },
      },
      Ounce: {
        GetConvertedValue: function (val) {
          return val / 141.747615;
        },
      },
      Carat: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
      AtomicMass: {
        GetConvertedValue: function (val) {
          return val * 1.2044e23;
        },
      },
    },
    AtomicMass: {
      Kilogram: {
        GetConvertedValue: function (val) {
          return val / 6.0221e26;
        },
      },
      Gram: {
        GetConvertedValue: function (val) {
          return val / 6.0221e23;
        },
      },
      Milligram: {
        GetConvertedValue: function (val) {
          return val / 6.0221e20;
        },
      },
      MetricTon: {
        GetConvertedValue: function (val) {
          return val / 6.0221e29;
        },
      },
      ImperialTon: {
        GetConvertedValue: function (val) {
          return val / 6.1188e29;
        },
      },
      Stone: {
        GetConvertedValue: function (val) {
          return val / 3.8242e27;
        },
      },
      Pound: {
        GetConvertedValue: function (val) {
          return val / 2.7316e26;
        },
      },
      Ounce: {
        GetConvertedValue: function (val) {
          return val / 1.7072e25;
        },
      },
      Carat: {
        GetConvertedValue: function (val) {
          return val / 1.2044e23;
        },
      },
      AtomicMass: {
        GetConvertedValue: function (val) {
          return val;
        },
      },
    },
  },
};
