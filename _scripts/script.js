$(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");
});

// Set the dimensions of the canvas / graph
var margin = {
    top: 30,
    right: 220,
    bottom: 50,
    left: 50
  },
  width = 800 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

var low = 90;
var high = 130;

var zero = [low, high];
var average = [93.41111034, 94.40107564, 95.34225138, 96.20548222, 96.86279594, 97.42405655, 98.19250661, 98.7428254, 100, 99.25046945, 98.38348553, 98.67958133, 99.13635626, 99.48561312, 99.9793239, 100.6158459, 101.0913795, 101.8687815, 102.3023917, 103.0319949, 104.0760905, 105.0959991, 105.7193993, 107.0996038, 107.7080887, 108.1615241, 108.988846, 109.564928, 110.0739359, 111.1567289, 111.7307001, 112.7405244, 113.3912762, 114.0623956, 114.5240258, 115.2447789, 116.0223541, 116.7468724];
var bigFive = [94.61370497, 95.73960589, 96.38220105, 97.3749844, 97.68400607, 98.69155579, 99.12281116, 98.89306193, 100, 99.06886755, 98.70333329, 98.42095896, 97.93969401, 97.81939072, 97.96848404, 97.1632969, 97.3475132, 97.40538247, 97.69865756, 97.69889697, 97.8177265, 98.32381422, 99.2436398, 100.108796, 100.937536, 101.1766539, 102.0207697, 102.836376, 103.0091284, 103.6821828, 103.590291, 103.9095639, 104.4438888, 105.3867952, 106.6161989, 107.2624812, 108.7994027, 109.1558234];
var exit = bigFive.map( function(i) { return low});
var cent = bigFive.map( function(i) { return 100});
var US2015 = [97.50190465, 97.5887833, 98.35264713, 98.41346218, 99.16663325, 99.83359397, 100.1897964, 99.50612829, 100, 99.52016253, 97.41769919, 96.06773862, 95.93808894, 96.25152038, 97.18312683, 97.60348584, 98.54645335, 99.21207747, 99.83693546, 99.45132791, 100.1750939, 100.3856075, 101.5163666, 102.189342, 102.6665063, 102.789473, 102.8128634, 103.3000521, 103.58742, 104.3506155, 105.3336808, 105.089084, 106.2692971, 107.3873585, 107.9393721, 108.1124611, 109.1570098, 109.5619979];
var euro2015 = [95.79298926, 96.3992663, 97.46410629, 98.17751662, 98.79393885, 99.30201037, 99.7540804, 100.3173418, 100, 99.44647799, 97.6491547, 94.74641063, 94.54878217, 94.84339872, 95.31088945, 95.69924763, 96.63017101, 97.07777715, 97.55784792, 98.43966854, 98.46077055, 98.42952334, 98.14667522, 97.9973379, 97.71651882, 97.6130378, 97.17922913, 96.94629538, 97.32816064, 97.55094918, 97.77333193, 97.97785912, 98.04928131, 98.30007061, 98.68112425, 99.1956887, 99.54955321, 99.84579299];
var japan2015 = [97.67068738, 97.60049631, 98.85341765, 99.83549887, 100.0065071, 99.62607874, 100.4833745, 101.1608755, 100, 98.94117096, 95.68305325, 91.86131193, 93.44228253, 93.50381574, 95.10172725, 96.51146566, 97.56259613, 98.99413891, 98.45802272, 96.57971944, 95.93225873, 98.51363923, 98.72200059, 99.74433229, 99.22421376, 98.85252022, 98.71709358, 100.0110173, 100.5880143, 101.2215357, 101.0134333, 102.1567117, 100.1607295, 99.8937372, 100.2156345, 101.3256833, 101.0321933, 101.0935938];
var UK2015 = [96.57668124, 96.70071971, 97.25472644, 98.19418091, 98.78723237, 99.54193857, 100.309501, 100.5597206, 100, 98.31774321, 96.10266861, 94.5944466, 94.40112754, 94.54659299, 94.88061595, 95.23130436, 95.99696213, 96.46573705, 96.55715888, 97.27877228, 97.61041447, 98.39559461, 98.54534546, 98.76294845, 98.58772329, 99.57717407, 99.52217812, 100.1780821, 100.7739905, 101.7060646, 102.3548262, 102.9816847, 103.9442327, 104.6051363, 105.3900784, 105.7771926, 106.468094, 107.0004357];
var germany2015 = [94.96165156, 95.89080547, 97.15190833, 97.58238094, 98.27659381, 99.09812957, 99.42098402, 100.2637403, 100, 99.62864159, 97.67332586, 93.32161154, 93.38982023, 93.93852124, 94.78885622, 95.52854155, 97.46566829, 98.23718435, 99.01021615, 100.8548822, 101.0307091, 101.4414769, 101.4126777, 101.8052566, 101.8643708, 102.0311032, 101.5324219, 101.2580714, 102.1781308, 102.5585837, 102.8905326, 103.6271865, 103.5680723, 103.7636038, 104.3987025, 104.7609664, 105.2202383, 105.5521872];
var france2015 = [97.33047183, 97.32060005, 98.07756854, 98.74950147, 99.39525444, 99.80157712, 100.0744333, 100.5520895, 100, 99.70410311, 98.12594029, 96.57784692, 96.5091393, 96.63845969, 97.28156701, 97.68532302, 98.29849909, 98.89165518, 99.41045698, 100.5447251, 100.4652178, 100.6503532, 100.8837814, 100.9299222, 100.6498201, 100.9282045, 100.8971478, 101.0367941, 101.8055495, 101.6989342, 101.8784033, 101.7184804, 101.5980446, 101.843319, 101.959806, 102.6814335, 102.7259948, 103.0766406];
var italy2015 = [98.37613121, 98.73331701, 99.77013081, 100.1503099, 100.1165524, 99.98842986, 99.81788106, 100.7566319, 100, 98.71489391, 96.32673668, 93.52325847, 93.1012718, 93.63658471, 93.74589306, 94.1786131, 94.89409408, 95.41454667, 95.81375099, 96.1163407, 96.26994555, 95.77736702, 94.8168626, 93.84474299, 93.19855961, 92.71048493, 92.25417422, 91.47880157, 91.31547789, 91.36810178, 91.32401149, 91.21354874, 91.02035746, 90.95967406, 90.91534673, 91.30931473, 91.58997545, 91.77889994];
var spain2015 = [94.24458226, 95.17769124, 96.07946662, 97.0635526, 97.85110885, 98.64163556, 99.49387126, 99.94557343, 100, 99.24751439, 98.24321009, 96.67384689, 95.73738415, 95.44081686, 95.38064101, 95.66628466, 95.84652475, 95.88590735, 95.88705721, 95.50147182, 95.03932511, 94.70395014, 94.20778683, 93.43153751, 92.67838115, 92.13890656, 91.26099072, 90.92101632, 90.69171566, 90.74652552, 90.97228078, 91.30660171, 91.75322535, 92.29423308, 92.92138427, 93.73069198, 94.63553365, 95.39961];
var australia2015 = [92.44590048, 93.41961833, 94.89371079, 96.35987013, 97.15876537, 97.87656643, 98.43071001, 99.66151993, 100, 100.6954708, 99.88159074, 100.8802832, 101.3686113, 101.7779018, 102.5142135, 102.9052873, 103.5337672, 104.0505957, 105.1988424, 104.8048304, 106.2116382, 107.45567, 108.5301679, 109.6531461, 110.2933788, 110.9059924, 111.5238949, 111.7898015, 112.6633269, 113.044117, 114.022536, 115.0459093, 115.7622413, 116.2029705, 116.8396774, 117.7598, 118.0627,119.1738];
var canada2015 = [96.63490954, 96.84136029, 97.23798795, 97.77313251, 98.59786321, 99.21481853, 99.50282774, 99.50705389, 100, 100.6636953, 99.5616785, 97.32490794, 96.44422802, 96.9503572, 98.17430171, 99.50919851, 100.1611615, 100.6345538, 101.7111506, 102.5050367, 102.4962059, 104.1488842, 104.7660919, 105.0021257, 105.4426549, 105.6253256, 105.8050948, 106.6431348, 107.1666732, 107.8723147, 108.6455115, 108.9221038, 109.8487668, 110.7216882, 111.3319574, 111.1140267, 110.9642821,111.6145];


var bigRecessionGuideLineData = [bigFive[4], 104];
// Set the ranges
var x = d3.scale.linear().range([0, width]);
var y = d3.scale.linear().range([height, 0]);

// Define the axes
var xAxis = d3.svg.axis().scale(x)
  .orient("bottom").tickValues([-8, -4, 0, 4, 8, 12, 16, 20, 24, 28]).tickFormat(function(d) {
    return d / 4;
  });

var yAxis = d3.svg.axis().scale(y)
  .orient("left").ticks(5);

// Define the line
var GDPline = d3.svg.line()
  .defined(function(d) {
    return d.GDP != 0;
  })
  .x(function(d) {
    return x(d.date);
  })
  .y(function(d) {
    return y(d.GDP);
  });

// Adds the svg canvas
var svg = d3.select("#container")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv("https://s3.amazonaws.com/blackrockblog-blanktemplate-assets/csv/recoveryTracker.csv", function(error, data) {
  data.forEach(function(d) {
    d.date = +d.date;
    d.GDP = +d.GDP;
  });

  // Scale the range of the data
  x.domain(d3.extent(data, function(d) {
    return d.date;
  }));
  y.domain([low, high]);

  // Nest the entries by symbol
  var dataNest = d3.nest()
    .key(function(d) {
      return d.symbol;
    })
    .entries(data);

  // Loop through each symbol / key
  dataNest.forEach(function(d) {

    svg.append("path")
      .attr("Recession", d.key)
      .attr("class", "recessionLines")
      .attr("id", "recessionLines")
      .on("mouseover", onmouseover).on("mouseout", onmouseout)
      .attr("d", GDPline(d.values));
  });

  var averageLine = d3.svg.line()
    // assign the X function to plot our line as we wish
    .x(function(d, i) {
      return x(i - 8);
    })
    .y(function(d) {
      return y(d);
    });
  var exitLine = d3.svg.line()
    // assign the X function to plot our line as we wish
    .x(function(d, i) {
      return x(-8);
    })
    .y(function(d) {
      return y(d);
    });

  var zeroLine = d3.svg.line()
    // assign the X function to plot our line as we wish
    .x(function(d, i) {
      return x(0);
    })
    .y(function(d) {
      return y(d);
    });
  
    var centLine = d3.svg.line()
    // assign the X function to plot our line as we wish
    .x(function(d, i) {
      return x(i -8);
    })
    .y(function(d) {
      return y(d);
    });

  var bigRecessionGuideLine = d3.svg.line()
    // assign the X function to plot our line as we wish
    .x(function(d, i) {
      return x(-4);
    })
    .y(function(d) {
      return y(d);
    });


  //**********************************************************ADD LINES***********************************************			
  //Add Zero line            
  svg.append("path")
    // .attr("Recession", "Canada 2008 to date")
    .attr("id", "zeroLine")
    .style("stroke-dasharray", ("3, 3"))
    .attr("d", zeroLine(zero));
    
      //Add 100 line            
  svg.append("path")
    .attr("id", "centLine")
    .style("stroke-dasharray", ("3, 3"))
    .attr("d", averageLine(cent));


  //Add Big recessions guide           
  svg.append("path")
    .attr("id", "bigRecessionGuide")
    .attr("class", "bigFive")
    // .style("stroke-dasharray", ("3, 3")) 
    .attr("d", bigRecessionGuideLine(bigRecessionGuideLineData));

  //Add Average   
  var averagePath = svg.append("path")
    // .attr("Recession", d.key)
    .attr("id", "average")
    .attr("class", "average")
    .attr("Recession", "Average Recession 1960-2006")
    .on("mouseover", onmouseover)
    .on("mouseout", onmouseout)
    .attr('opacity', 1)
    .attr("d", averageLine(average));
  //Add BigFive
  svg.append("path")
    .attr("id", "bigFive")
    .attr("class", "bigFive")
    .attr("Recession", "Big-Five Financial Crises")
    .style("stroke-dasharray", ("6, 3"))
    .on("mouseover", onmouseover)
    .on("mouseout", onmouseout)
    .attr('opacity', 1)
    .attr("d", averageLine(bigFive));
  //Add US
  var USPath = svg.append("path")
    .attr("Recession", "United States 2008 to date")
    .attr("id", "USA2015")
    .on("mouseover", onmouseover)
    .on("mouseout", onmouseout)
    .attr('opacity', 1)
    .attr("d", averageLine(US2015));
  //Add EZ
  svg.append("path")
    .attr("Recession", "Eurozone 2008 to date")
    .attr("id", "euro2015")
    .on("mouseover", onmouseover)
    .on("mouseout", onmouseout)
    .attr('opacity', 1)
    .attr("d", averageLine(euro2015));
  //Add Japan            
  svg.append("path")
    .attr("Recession", "Japan 2008 to date")
    .attr("id", "japan2015")
    .on("mouseover", onmouseover)
    .on("mouseout", onmouseout)
    .attr('opacity', 0)
    .attr("d", exitLine(exit));

  //Add UK            
  svg.append("path")
    .attr("Recession", "U.K. 2008 to date")
    .attr("id", "UK2015")
    .on("mouseover", onmouseover)
    .on("mouseout", onmouseout)
    .attr('opacity', 0)
    .attr("d", exitLine(exit));
  //Add Germany            
  svg.append("path")
    .attr("Recession", "Germany 2008 to date")
    .attr("id", "germany2015")
    .on("mouseover", onmouseover)
    .on("mouseout", onmouseout)
    .attr('opacity', 0)
    .attr("d", exitLine(exit));

  //Add France            
  svg.append("path")
    .attr("Recession", "France 2008 to date")
    .attr("id", "france2015")
    .on("mouseover", onmouseover)
    .on("mouseout", onmouseout)
    .attr('opacity', 0)
    .attr("d", exitLine(exit));

  //Add Italy            
  svg.append("path")
    .attr("Recession", "Italy 2008 to date")
    .attr("id", "italy2015")
    .on("mouseover", onmouseover)
    .on("mouseout", onmouseout)
    .attr('opacity', 0)
    .attr("d", exitLine(exit));

  //Add Spain           
  svg.append("path")
    .attr("Recession", "Spain 2008 to date")
    .attr("id", "spain2015")
    .on("mouseover", onmouseover)
    .on("mouseout", onmouseout)
    .attr('opacity', 0)
    .attr("d", exitLine(exit));
  /*           
    //Add Greece            
             svg.append("path")
             .attr("Recession", "Greece 2008 to date")
             .attr("id", "greece2015")
             .on("mouseover", onmouseover)
             .on("mouseout", onmouseout)
             .attr('opacity', 0)
             .attr("d", exitLine(exit));     
  */
  //Add Australia            
  svg.append("path")
    .attr("Recession", "Australia 2008 to date")
    .attr("id", "australia2015")
    .on("mouseover", onmouseover)
    .on("mouseout", onmouseout)
    .attr('opacity', 0)
    .attr("d", exitLine(exit));

  //Add Canada            
  svg.append("path")
    .attr("Recession", "Canada 2008 to date")
    .attr("id", "canada2015")
    .on("mouseover", onmouseover)
    .on("mouseout", onmouseout)
    .attr('opacity', 0)
    .attr("d", exitLine(exit));



  //Add series in acc to this animation        
  /*
  var totalLength = USPath.node().getTotalLength();   

           USPath  
          .attr("stroke-dasharray", totalLength + " " + totalLength)
  				.attr("stroke-dashoffset", totalLength)
  				.transition().delay(1000).duration(2500).ease("linear")
          .attr("stroke-dashoffset", 0);
  */

  // Add the X Axis
  svg.append("g")
    .attr("class", "x axis")
    .attr("font-family", "sans-serif").attr("font-size", 12).attr("fill", "rgb(90,90,90)")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  // Add the Y Axis
  svg.append("g")
    .attr("font-family", "sans-serif").attr("font-size", 12).attr("fill", "rgb(90,90,90)")
    .attr("class", "y axis")
    .call(yAxis);

  //*******************************************************ADD LABELS***************************************************
 

  var recessionLabel = svg.append("text")
    .attr("x", width + 15)
    .attr("text-anchor", "start")
    .attr("y", height - (height + 10))
    .attr("font-family", "sans-serif").attr("font-size", 14).attr("fill", "rgb(0,121,193)")
    .text("");

  svg.append("text")
    .attr("x", function(d, i) {
      return x(-4);
    })
    .attr("text-anchor", "middle")
    .attr("class", "bigFive")
    .attr("y", function(d) {
      return y(107);
    })
    .attr("font-family", "sans-serif").attr("font-size", 12).attr("fill", "rgb(129,189,65)").attr("text-anchor", "middle")
    .text("Big-Five");
  svg.append("text")
    .attr("x", function(d, i) {
      return x(-4);
    })
    .attr("text-anchor", "middle")
    .attr("y", function(d) {
      return y(105);
    })
    .attr("class", "bigFive")
    .attr("font-family", "sans-serif").attr("font-size", 12).attr("fill", "rgb(129,189,65)").attr("text-anchor", "middle")
    .text("Financial Crises");


  var xLabelLeft = svg.append("text")
    .attr("x", width - (width - 57))
    .attr("y", height + 35)
    .attr("font-family", "sans-serif").attr("font-size", 10).attr("fill", "rgb(90,90,90)").attr("text-anchor", "middle")
    .text("YEARS BEFORE");

  var xLabelRight = svg.append("text")
    .attr("x", width - (width - 325))
    .attr("y", height + 35)
    .attr("font-family", "sans-serif").attr("font-size", 10).attr("fill", "rgb(90,90,90)").attr("text-anchor", "middle")
    .text("YEARS AFTER RECESSION");

  var averageLabel = svg.append("text")
    .attr("x", width + 5).attr("class", "average")
    .attr("y", function() {
      return y(average[average.length - 1]);
    })
    .attr("font-family", "sans-serif").attr("font-size", 11.5).attr("fill", "rgb(90,90,90)").attr("text-anchor", "start")
    .text("Average Recession 1960-2006");

  var USLabel = svg.append("text")
    .attr("x", width + 5)
    .attr("y", function() {
      return y(US2015[US2015.length - 1]);
    })
    .attr("font-family", "sans-serif").attr("font-size", 11.5).attr("fill", "rgb(0,104,72)").attr("text-anchor", "start")
    .text("U.S.");

  var euroLabel = svg.append("text")
    .attr("x", width + 5)
    .attr("y", function() {
      return y(euro2015[euro2015.length - 1]);
    })
    .attr("font-family", "sans-serif").attr("font-size", 11.5).attr("fill", "rgb(45,37,125)").attr("text-anchor", "start")
    .text("Eurozone");

  var japanLabel = svg.append("text")
    .attr("x", width + 5)
    .attr("y", function() {
      return y(japan2015[japan2015.length - 1]);
    }).attr('opacity', 0)
    .attr("font-family", "sans-serif").attr("font-size", 11.5).attr("fill", "rgb(227,27,35)").attr("text-anchor", "start")
    .text("Japan");

  var UKLabel = svg.append("text")
    .attr("x", width + 5)
    .attr("y", function() {
      return y(UK2015[UK2015.length - 1]);
    }).attr('opacity', 0)
    .attr("font-family", "sans-serif").attr("font-size", 11.5).attr("fill", "rgb(248,151,29)").attr("text-anchor", "start")
    .text("U.K");

  var germanyLabel = svg.append("text")
    .attr("x", width + 5)
    .attr("y", function() {
      return y(germany2015[germany2015.length - 1]);
    }).attr('opacity', 0)
    .attr("font-family", "sans-serif").attr("font-size", 11.5).attr("fill", "rgb(255,210,0)").attr("text-anchor", "start")
    .text("Germany");

  var franceLabel = svg.append("text")
    .attr("x", width + 5)
    .attr("y", function() {
      return y(france2015[france2015.length - 1]);
    }).attr('opacity', 0)
    .attr("font-family", "sans-serif").attr("font-size", 11.5).attr("fill", "rgb(0,121,193)").attr("text-anchor", "start")
    .text("France");

  var italyLabel = svg.append("text")
    .attr("x", width + 5)
    .attr("y", function() {
      return y(italy2015[italy2015.length - 1]);
    }).attr('opacity', 0)
    .attr("font-family", "sans-serif").attr("font-size", 11.5).attr("fill", "rgb(89,167,215)").attr("text-anchor", "start")
    .text("Italy");

  var spainLabel = svg.append("text")
    .attr("x", width + 5)
    .attr("y", function() {
      return y(spain2015[spain2015.length - 1]);
    }).attr('opacity', 0)
    .attr("font-family", "sans-serif").attr("font-size", 11.5).attr("fill", "rgb(250,187,107)").attr("text-anchor", "start")
    .text("Spain");

  var australiaLabel = svg.append("text")
    .attr("x", width + 5)
    .attr("y", function() {
      return y(australia2015[australia2015.length - 1]);
    }).attr('opacity', 0)
    .attr("font-family", "sans-serif").attr("font-size", 11.5).attr("fill", "rgb(159,111,170)").attr("text-anchor", "start")
    .text("Australia");

  var canadaLabel = svg.append("text")
    .attr("x", width + 5)
    .attr("y", function() {
      return y(canada2015[canada2015.length - 1]);
    }).attr('opacity', 0)
    .attr("font-family", "sans-serif").attr("font-size", 11.5).attr("fill", "rgb(237,107,112)").attr("text-anchor", "start")
    .text("Canada");

  var yLabel = svg.append("text")
    .attr("y", -39)
    .attr("x", -160)
    .attr("font-family", "sans-serif").attr("font-size", 10).attr("fill", "rgb(90,90,90)").attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("REAL GDP");


  function onmouseover(d, i) {
    var currClass = d3.select(this).attr("class");
    d3.select(this).attr("class", currClass + " current");
    var recessionName = d3.select(this).attr("Recession");
    recessionLabel.text(recessionName);

  }

  function onmouseout(d, i) {
    var currClass = d3.select(this).attr("class");
    var prevClass = currClass.substring(0, currClass.length - 8);
    d3.select(this).attr("class", prevClass);
    recessionLabel.text("");
  }


  //***********************************************************BUTTON FUNCTIONALITY*********************************************

  //Functions to remove lines - these are used in indvidual button and remove all.
  function USRemove() {
    $("#USButton").removeClass('selected');
    svg.select("#USA2015").transition().duration(750).attr('opacity', 0).attr("d", exitLine(exit));
    USLabel.transition().duration(200).attr('opacity', 0);
  }

  function eurozoneRemove() {
    $("#eurozoneButton").removeClass('selected');
    svg.select("#euro2015").transition().duration(750).attr('opacity', 0).attr("d", exitLine(exit));
    euroLabel.transition().duration(200).attr('opacity', 0);
  }

  function japanRemove() {
    $("#japanButton").removeClass('selected');
    svg.select("#japan2015").transition().duration(750).attr('opacity', 0).attr("d", exitLine(exit));
    japanLabel.transition().duration(200).attr('opacity', 0);
  }

  function UKRemove() {
    $("#UKButton").removeClass('selected');
    svg.select("#UK2015").transition().duration(750).attr('opacity', 0).attr("d", exitLine(exit));
    UKLabel.transition().duration(200).attr('opacity', 0);
  }

  function germanyRemove() {
    $("#germanyButton").removeClass('selected');
    svg.select("#germany2015").transition().duration(750).attr('opacity', 0).attr("d", exitLine(exit));
    germanyLabel.transition().duration(200).attr('opacity', 0);
  }

  function franceRemove() {
    $("#franceButton").removeClass('selected');
    svg.select("#france2015").transition().duration(750).attr('opacity', 0).attr("d", exitLine(exit));
    franceLabel.transition().duration(200).attr('opacity', 0);
  }

  function italyRemove() {
    $("#italyButton").removeClass('selected');
    svg.select("#italy2015").transition().duration(750).attr('opacity', 0).attr("d", exitLine(exit));
    italyLabel.transition().duration(200).attr('opacity', 0);
  }

  function spainRemove() {
    $("#spainButton").removeClass('selected');
    svg.select("#spain2015").transition().duration(750).attr('opacity', 0).attr("d", exitLine(exit));
    spainLabel.transition().duration(200).attr('opacity', 0);
  }

  function australiaRemove() {
    $("#australiaButton").removeClass('selected');
    svg.select("#australia2015").transition().duration(750).attr('opacity', 0).attr("d", exitLine(exit));
    australiaLabel.transition().duration(200).attr('opacity', 0);
  }

  function canadaRemove() {
    $("#canadaButton").removeClass('selected');
    svg.select("#canada2015").transition().duration(750).attr('opacity', 0).attr("d", exitLine(exit));
    canadaLabel.transition().duration(200).attr('opacity', 0);
  }


  $("#eurozoneButton").click(function() {
    if ($(this).attr('class') == "hbutton selected") {
      eurozoneRemove();
    } else {
      $(this).addClass('selected');
      svg.select("#euro2015")
        .transition().duration(750)
        .attr('opacity', 1)
        .attr("d", averageLine(euro2015));

      euroLabel.transition().duration(1500).attr('opacity', 1);

    }
  });

  $("#USButton").click(function USButtonFunc() {
    if ($(this).attr('class') == "hbutton selected") {
      USRemove();
    } else {
      $(this).addClass('selected');
      svg.select("#USA2015")
        .transition()
        .duration(750)
        .attr('opacity', 1)
        .attr("d", averageLine(US2015));
      USLabel.transition().duration(1500).attr('opacity', 1);
    }
  });

  $("#recessionButton").click(function() {
    if ($(this).attr('class') == "hbutton selected") {
      $(this).removeClass('selected');
      svg.selectAll(".recessionLines")
        .transition()
        .duration(1000)
        .attr('opacity', 0);
    } else {
      $(this).addClass('selected');
      svg.selectAll(".recessionLines")
        .transition()
        .duration(1000)
        .attr('opacity', 1);
    }
  });

  $("#japanButton").click(function() {
    if ($(this).attr('class') == "hbutton selected") {
      japanRemove();
    } else {
      $(this).addClass('selected');
      svg.selectAll("#japan2015")
        .transition()
        .duration(1000)
        .attr('opacity', 1)
        .attr("d", averageLine(japan2015));
      japanLabel.transition().duration(1500).attr('opacity', 1);
    }
  });

  $("#UKButton").click(function() {
    if ($(this).attr('class') == "hbutton selected") {
      UKRemove();
    } else {
      $(this).addClass('selected');
      svg.selectAll("#UK2015")
        .transition().duration(1000)
        .attr('opacity', 1)
        .attr("d", averageLine(UK2015));
      UKLabel.transition().duration(1500).attr('opacity', 1);
    }
  });

  $("#germanyButton").click(function() {
    if ($(this).attr('class') == "hbutton selected") {
      germanyRemove();
    } else {
      $(this).addClass('selected');
      svg.selectAll("#germany2015")
        .transition().duration(1000)
        .attr('opacity', 1)
        .attr("d", averageLine(germany2015));
      germanyLabel.transition().duration(1500).attr('opacity', 1);
    }
  });

  $("#franceButton").click(function() {
    if ($(this).attr('class') == "hbutton selected") {
      franceRemove();
    } else {
      $(this).addClass('selected');
      svg.selectAll("#france2015")
        .transition().duration(1000)
        .attr('opacity', 1)
        .attr("d", averageLine(france2015));
      franceLabel.transition().duration(1500).attr('opacity', 1);
    }
  });

  $("#italyButton").click(function() {
    if ($(this).attr('class') == "hbutton selected") {
      italyRemove();
    } else {
      $(this).addClass('selected');
      svg.selectAll("#italy2015")
        .transition().duration(1000)
        .attr('opacity', 1)
        .attr("d", averageLine(italy2015));
      italyLabel.transition().duration(1500).attr('opacity', 1);
    }
  });


  $("#spainButton").click(function() {
    if ($(this).attr('class') == "hbutton selected") {
      spainRemove();
    } else {
      $(this).addClass('selected');
      svg.selectAll("#spain2015")
        .transition().duration(1000)
        .attr('opacity', 1)
        .attr("d", averageLine(spain2015));
      spainLabel.transition().duration(1500).attr('opacity', 1);
    }
  });

  $("#australiaButton").click(function() {
    if ($(this).attr('class') == "hbutton selected") {
      australiaRemove();
    } else {
      $(this).addClass('selected');
      svg.selectAll("#australia2015")
        .transition().duration(1000)
        .attr('opacity', 1)
        .attr("d", averageLine(australia2015));
      australiaLabel.transition().duration(1500).attr('opacity', 1);
    }
  });

  $("#canadaButton").click(function() {
    if ($(this).attr('class') == "hbutton selected") {
      canadaRemove();
    } else {
      $(this).addClass('selected');
      svg.selectAll("#canada2015")
        .transition().duration(1000)
        .attr('opacity', 1)
        .attr("d", averageLine(canada2015));
      canadaLabel.transition().duration(1500).attr('opacity', 1);
    }
  });


 function removeCountries() {
    //remove all country lines
    USRemove();
    eurozoneRemove();
    japanRemove();
    UKRemove();
    germanyRemove();
    franceRemove();
    italyRemove();
    spainRemove();
    australiaRemove();
    canadaRemove();


  }


  $("#removeButton").click(function() {

removeCountries();
d3.select("#textBox")
      .classed("hidden", false)
      .text("");

  });


  //************************************************************* HOW IT WORKS BUTTON *********************

 



  $("#howitworksButton").click(function() {

    removeCountries();

    $("#recessionButton").removeClass('selected');
    svg.selectAll(".recessionLines")
      .transition().duration(500)
      .attr('opacity', 0);

    svg.selectAll(".bigFive")
      .transition().duration(500)
      .attr('opacity', 0);

    svg.selectAll(".average")
      .transition().duration(500)
      .attr('opacity', 0);

    d3.select("#textBox")
      .classed("hidden", false)
      .text("This chart looks at how economies recover from recessions. First we show the recovery paths after recessions for advanced G20 countries from 1960-2006. Select any of the lines to see which is which.");


    $(".btn1").removeClass('hidden');
    $(".btn1").removeClass('selected');
    $("#howitworksButton1").addClass('selected');

    $("#recessionButton").addClass('selected');

    svg.selectAll(".recessionLines")
      .transition().duration(1500).delay(1000)
      .attr('opacity', 1);

  });

  //button 1
  $("#howitworksButton1").click(function() {
    $(".btn1").removeClass('selected');
    $("#howitworksButton1").addClass('selected');

    removeCountries();
    svg.selectAll(".bigFive")
      .transition().duration(1000)
      .attr('opacity', 0);
    svg.selectAll(".average")
      .transition().duration(500)
      .attr('opacity', 0);

    d3.select("#textBox")
      .text("This chart looks at the years before and after recessions. First we show the path of GDP growth around recessions for advanced G20 countries from 1960-2006.");



    svg.selectAll(".recessionLines")
      .transition().duration(1000).delay(1000)
      .attr('opacity', 1);
  });


  $("#howitworksButton2").click(function() {
    //button 2
    $(".btn1").removeClass('selected');
    $("#howitworksButton2").addClass('selected');

    removeCountries();
    svg.selectAll(".bigFive")
      .transition().duration(500)
      .attr('opacity', 0);

    d3.select("#textBox")
      .text("The highlighted grey line shows the average recovery path from those historical recessions.");
    svg.selectAll(".recessionLines")
      .transition().duration(1500).delay(1000)
      .attr('opacity', 1);

    svg.selectAll(".average")
      .transition().duration(1000).delay(1000)
      .attr('opacity', 1);

  });

  //button3
  $("#howitworksButton3").click(function() {
    $(".btn1").removeClass('selected');
    $("#howitworksButton3").addClass('selected');

    removeCountries();

    d3.select("#textBox").text("But what about the recovery from a big financial crisis? The dotted green line shows the average recovery from five big financial crises (before the 2008-2009 downturn). As you can see, these recessions tend to be deeper and the recoveries longer.");



    svg.selectAll(".average")
      .transition().duration(1000).delay(1000)
      .attr('opacity', 1);


    svg.selectAll(".bigFive")
      .transition().duration(1000).delay(1000)
      .attr('opacity', 1);

  });

  //button4
  $("#howitworksButton4").click(function() {

    $(".btn1").removeClass('selected');
    $("#howitworksButton4").addClass('selected');

    removeCountries();
    d3.select("#textBox").text("How does the current recovery compare? Here we plot selected economies' GDP growth since Q2 2008, the quarter before the start of the last U.S. recession. The U.S. is tracking the 'typical' post-financial crisis path. The eurozone, by contrast, is lagging. See how other economies compare by selecting the grey buttons.");

    svg.selectAll(".recessionLines")
      .transition().duration(1000).delay(1000)
      .attr('opacity', 1);

    svg.selectAll(".average")
      .transition().duration(1000).delay(1000)
      .attr('opacity', 1);


    svg.selectAll(".bigFive")
      .transition().duration(1000).delay(1000)
      .attr('opacity', 1);

    svg.select("#USA2015")
      .transition()
      .duration(1000).delay(1000)
      .attr('opacity', 1)
      .attr("d", averageLine(US2015));
    USLabel.transition().duration(1500).attr('opacity', 1);

    $("#USButton").addClass('selected');
    svg.select("#euro2015")
      .transition().duration(1000).delay(2000)
      .attr('opacity', 1)
      .attr("d", averageLine(euro2015));
    euroLabel.transition().duration(1000).delay(2000).attr('opacity', 1);
    $("#eurozoneButton").addClass('selected');


  });

});