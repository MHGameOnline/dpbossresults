const games = [
  {
    name: "GOA MORNING",
    time: "09:00 AM - 10:00 AM",
    result: "550-01-380",
    panel: "https://dpbosss.net.in/goamorning-penal-chart.php",
    lucky: [7, 8, 9]
  },
  {
    name: "KRANTI MORNING",
    time: "09:10 AM - 10:10 AM",
    result: "148-34-257",
    panel: "https://www.asonline.in/jodi-chart.php?name=KRANTI%20MORNING%20&id=207",
    lucky: [7, 6, 9]
  },
  {
    name: "SITA MORN",
    time: "09:20 AM - 10:20 AM",
    result: "299-03-788",
    panel: "https://dpbosse.net/pannel/SITAMORNING/81",
    lucky: [6, 5, 8]
  },
  {
    name: "SRIDEVI MORNING",
    time: "09:45 AM - 10:45 AM",
    result: "368-76-457",
    panel: "https://dpboss.boston/panel-chart-record/sridevi-morning.php",
    lucky: [1, 3, 8]
  },
  {
    name: "KARNATAKA DAY",
    time: "09:50 AM - 10:50 AM",
    result: "559-92-336",
    panel: "https://sattamatkadpboss.co/karnataka-day-panel-chart.php",
    lucky: [0, 1, 9]
  },
  {
    name: "TULSI MORNING",
    time: "10:00 AM - 11:00 AM",
    result: "160-74-356",
    panel: "https://dpboss.boston/panel-chart-record/tulsi-morning.php",
    lucky: [2, 6, 7]
  },
  {
    name: "RADHA MORNING",
    time: "10:00 AM - 11:00 AM",
    result: "668-08-233",
    panel: "https://www.sara777.com/radha-morning/pana.html",
    lucky: [2, 5, 0]
  },
  {
    name: "MILAN MORNING",
    time: "10:15 AM - 11:15 AM",
    result: "479-08-459",
    panel: "https://dpboss.boston/panel-chart-record/milan-morning.php",
    lucky: [2, 6, 7]
  },
  {
    name: "ANDHRA MORNING",
    time: "10:25 AM - 11:25 AM",
    result: "240-65-690",
    panel: "https://dpboss.boston/panel-chart-record/andhra-morning.php",
    lucky: [5, 6, 9]
  },
  {
    name: "KHATRI MORNING",
    time: "10:45 AM - 11:45 AM",
    result: "699-40-569",
    panel: "https://satkamatka.com.in/panel-chart-record/khatri-morning",
    lucky: [2, 6, 9]
  },
  {
    name: "JANTA DAY",
    time: "11:05 AM - 12:15 PM",
    result: "556-65-122",
    panel: "https://www.dpbossonline.com/panel-chart/16/janta-day",
    lucky: [2, 7, 9]
  },
  {
    name: "KALYAN MORN",
    time: "11:40 AM - 12:40 AM",
    result: "479-02-679",
    panel: "https://sattamatkadpboss.co/record/kalyan-morning-penal-chart.php",
    lucky: [0, 5, 8]
  },
  {
    name: "MADHUR MORN",
    time: "11:05 AM - 12:15 PM",
    result: "139-37-458",
    panel: "https://sattamatkadpboss.co/madhur-morning-penal-chart.php",
    lucky: [3, 7, 9]
  },
  {
    name: "NANDHINI MORNING",
    time: "11:20 AM - 12:20 PM",
    result: "447-57-278",
    panel: "https://www.asonline.in/panel-chart.php?name=NANDINI%20MORNING%20&id=209",
    lucky: [2, 6, 9]
  },
  {
    name: "WORLI MORNING",
    time: "11:40 AM - 12:40 PM",
    result: "779-35-690",
    panel: "https://dpbosse.net/pannel/WORLIMORNING/121",
    lucky: [2, 6, 9]
  },
  {
    name: "SRIDEVI",
    time: "11:25 AM - 12:25 PM",
    result: "348-56-457",
    panel: "https://sattamatkadpboss.co/record/sridevi-satta-penal-chart.php",
    lucky: [5, 6, 7]
  },
  {
    name: "GOA DAY",
    time: "01:00 PM - 02:00 PM",
    result: "166-31-227",
    panel: "-",
    lucky: [5, 8, 9]
  },
  {
    name: "TIME BAZAR",
    time: "12:55 PM - 01:55 PM",
    result: "136-00-145",
    panel: "https://sattamatkadpboss.co/time-bazar-panel-chart.php",
    lucky: [1, 4, 9]
  },
  {
    name: "PUNA BAZAR",
    time: "01:15 PM - 03:15 PM",
    result: "259-63-157",
    panel: "https://dpboss.boston/panel-chart-record/puna-bazar.php",
    lucky: [2, 6, 9]
  },
  {
    name: "SITA DAY",
    time: "01:25 PM - 02:25 PM",
    result: "690-57-179",
    panel: "https://dpbosse.net/pannel/SITADAY/89",
    lucky: [0, 2, 7]
  },
  {
    name: "BOMBAY DAY",
    time: "01:55 PM - 02:55 PM",
    result: "550-00-145",
    panel: "https://suratmatka.in/bombay-day-satta-panel-chart.php",
    lucky: [2, 6, 9]
  },
  {
    name: "MADHUR DAY",
    time: "01:20 PM - 02:20 PM",
    result: "259-61-678",
    panel: "https://sattamatkadpboss.co/madhur-day-panel-chart.php",
    lucky: [3, 6, 7]
  },
  {
    name: "MILAN DAY",
    time: "02:55 PM - 04:55 PM",
    result: "126-98-459",
    panel: "https://sattamatkadpboss.co/record/milan-day-penal-chart.php",
    lucky: [0, 1, 9]
  },
  {
    name: "RAJDHANI DAY",
    time: "03:00 PM - 05:00 PM",
    result: "480-28-350",
    panel: "https://sattamatkadpboss.co/record/rajdhani-day-penal-chart.php",
    lucky: [2, 3, 8]
  },
  {
    name: "ANDHRA DAY",
    time: "03:15 PM - 05:15 PM",
    result: "***-**-***",
    panel: "https://dpboss.boston/panel-chart-record/andhra-day.php",
    lucky: [2, 6, 9]
  },
  {
    name: "KRANTI DAY",
    time: "03:20 PM - 05:20 PM",
    result: "339-54-130",
    panel: "https://www.asonline.in/panel-chart.php?name=KRANTI%20DAY%20&id=210",
    lucky: [2, 6, 9]
  },
  {
    name: "SUPREME DAY",
    time: "03:25 PM - 05:25 PM",
    result: "459-82-200",
    panel: "https://sattamatkadpboss.co/supreme-day-panel-chart.php",
    lucky: [0, 5, 7]
  },
  {
    name: "KALYAN",
    time: "04:00 PM - 06:00 PM",
    result: "368-72-480",
    panel: "https://sattamatkadpboss.co/record/kalyan-penal-chart.php",
    lucky: [3, 6, 8]
  },
  {
    name: "SITA NIGHT",
    time: "06:25 PM - 07:25 PM",
    result: "670-3*-***",
    panel: "https://dpbosse.net/pannel/SITANIGHT/109",
    lucky: [2, 5, 9]
  },
  {
    name: "KARNATAKA NIGHT",
    time: "06:20 PM - 07:20 PM",
    result: "***-**-***",
    panel: "https://sattamatkadpboss.co/karnataka-night-panel-chart.php",
    lucky: [3, 4, 6]
  },
  {
    name: "KRANTI NIGHT",
    time: "06:50 PM - 07:50 PM",
    result: "339-5*-***",
    panel: "https://www.asonline.in/panel-chart.php?name=KRANTI%20NIGHT&id=212",
    lucky: [3, 5, 9]
  },
  {
    name: "SRIDEVI NIGHT",
    time: "07:05 PM - 08:05 PM",
    result: "480-25-258",
    panel: "https://sattamatkadpboss.co/record/sridevi-night-satta-penal-chart.php",
    lucky: [1, 3, 6]
  },
  {
    name: "ANDHRA NIGHT",
    time: "08:30 PM - 10:30 PM",
    result: "600-65-113",
    panel: "https://dpboss.boston/panel-chart-record/andhra-night.php",
    lucky: [3, 4, 9]
  },
  {
    name: "SUPREME NIGHT",
    time: "08:40 PM - 10:30 PM",
    result: "467-76-600",
    panel: "https://sattamatkadpboss.co/supreme-night-panel-chart.php",
    lucky: [3, 8, 9]
  },
  {
    name: "MADHUR NIGHT",
    time: "08:30 PM - 10:30 PM",
    result: "446-42-480",
    panel: "https://sattamatkadpboss.co/madhur-night-panel-chart.php",
    lucky: [1, 3, 6]
  },
  {
    name: "MILAN NIGHT",
    time: "09:00 PM - 11:00 PM",
    result: "890-71-669",
    panel: "https://sattamatkadpboss.co/record/milan-night-penal-chart.php",
    lucky: [2, 4, 1]
  },
  {
    name: "RATAN KHATRI",
    time: "09:20 PM - 11:20 PM",
    result: "600-65-113",
    panel: "https://dpboss.boston/panel-chart-record/ratan-khatri.php",
    lucky: [3, 4, 9]
  },
  {
    name: "RAJDHANI NIGHT",
    time: "09:31 PM - 11:40 PM",
    result: "490-33-148",
    panel: "https://sattamatkadpboss.co/record/rajdhani-night-penal-chart.php",
    lucky: [3, 5, 7]
  },
  {
    name: "KALYAN NIGHT",
    time: "09:30 PM - 11:30 PM",
    result: "578-06-790",
    panel: "https://sattamatkadpboss.co/record/kalyan-night-penal-chart.php",
    lucky: [4, 7, 0]
  },
  {
    name: "MAIN BAZAR",
    time: "09:35 PM - 11:59 PM",
    result: "259-63-247",
    panel: "https://sattamatkadpboss.co/main-bazar-panel-chart.php",
    lucky: [1, 6, 9]
  }
];
