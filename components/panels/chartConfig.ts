export const data = {
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    datasets: [
      {
        backgroundColor: ['#9DA3D9', '#3C088A', '#150148', '#5911FE', '#B0257C','#F1256A','#B7BCEA','#7C82C9','#EFF1F9'],
        data: [25, 234, 37, 224, 75,96,102,10,198]
      }
    ]
  }
  
export const options = {
  responsive: true,
  maintainAspectRatio: false
}
  

export const dat = {
  datasets: [
    {
      label: "Advisors",
      backgroundColor: '#f2f401',
      data: {"0 months":250000000,"":245000000," ":270000000,"20 months":330000000,"       ": 420000000, "      ": 520000000, "40 months": 560000000,"     ": 670000000,"   ": 740000000, "60 months": 800000000},
      borderWidth: 3,
      fill: true,
    },
    {
      label: "Purchasers",
      backgroundColor: '#f224F1',
      data: {"0 months":250000000,"":250000000," ":280000000,"20 months":350000000,"       ": 480000000, "      ": 550000000, "40 months": 600000000,"     ": 720000000,"   ": 800000000, "60 months": 850000000},
      borderWidth: 3,
      fill: true,
    },
    {
      label: "Team",
      backgroundColor: '#32D4F1',
      data: {"0 months":250000000,"":260000000," ":290000000,"20 months":380000000,"       ": 510000000, "      ": 600000000, "40 months": 660000000,"     ": 800000000,"   ": 850000000, "60 months": 900000000},
      borderWidth: 3,
      fill: true,
    },
    {
      label: "Coinlist",
      backgroundColor: '#EFF0F9',
      data: {"0 months":250000000,"":280000000," ":300000000,"20 months":400000000,"       ": 550000000, "      ": 650000000, "40 months": 800000000,"     ": 900000000,"   ": 950000000, "60 months": 1000000000},
      borderWidth: 3,
      fill: true,
    },
    
    
  ]
}

export const opt = {
responsive: true,
maintainAspectRatio: false,
scales: {
  yAxes: [{
    ticks: {
      beginAtZero: true
    }
  }]
},
}