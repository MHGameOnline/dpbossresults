const games = [
  {
    name: "GOA MORNING",
    time: "09:00 AM - 10:00 AM",
    result: "559-94-789",
    panel: "https://dpbosss.net.in/goamorning-penal-chart.php",
    lucky: [7, 6, 9]
  },
  {
    name: "KRANTI MORNING",
    time: "09:010 AM - 10:10 AM",
    result: "559-94-789",
    panel: "https://www.asonline.in/jodi-chart.php?name=KRANTI%20MORNING%20&id=207",
    lucky: [7, 6, 9]
  },
  {
    name: "SITA MORN",
    time: "09:45 AM - 10:45 AM",
    result: "260-81-678",
    panel: "https://dpbosse.net/pannel/SITAMORNING/81",
    lucky: [1, 3, 8]
  },
  {
    name: "SRIDEVI MORNING",
    time: "09:45 AM - 10:45 AM",
    result: "260-81-678",
    panel: "https://dpboss.boston/panel-chart-record/sridevi-morning.php",
    lucky: [1, 3, 8]
  },
  {
    name: "KARNATAKA DAY",
    time: "10:00 AM - 11:00 AM",
    result: "470-13-445",
    panel: "https://sattamatkadpboss.co/karnataka-day-panel-chart.php",
    lucky: [2, 6, 9]
  },
  {
    name: "TULSI MORNING",
    time: "10:00 AM - 11:00 AM",
    result: "470-13-445",
    panel: "https://dpboss.boston/panel-chart-record/tulsi-morning.php",
    lucky: [2, 6, 9]
  },
  {
    name: "RADHA MORNING",
    time: "10:00 AM - 11:00 AM",
    result: "470-13-445",
    panel: "https://www.sara777.com/radha-morning/pana.html",
    lucky: [2, 6, 9]
  },
  {
    name: "MILAN MORNING",
    time: "10:15 AM - 11:15 AM",
    result: "470-13-445",
    panel: "https://dpboss.boston/panel-chart-record/milan-morning.php",
    lucky: [2, 6, 9]
  },
  {
    name: "ANDHRA MORNING",
    time: "10:25 AM - 11:25 AM",
    result: "470-13-445",
    panel: "https://dpboss.boston/panel-chart-record/andhra-morning.php",
    lucky: [2, 6, 9]
  },
  {
    name: "KHATRI MORNING",
    time: "10:45 AM - 11:45 AM",
    result: "470-13-445",
    panel: "https://satkamatka.com.in/panel-chart-record/khatri-morning",
    lucky: [2, 6, 9]
  },
  {
    name: "JANTA DAY",
    time: "11:05 AM - 12:15 PM",
    result: "470-13-445",
    panel: "https://www.dpbossonline.com/panel-chart/16/janta-day",
    lucky: [2, 6, 9]
  },
  {
    name: "KALYAN MORN",
    time: "11:00 AM - 11:59 AM",
    result: "289-93-355",
    panel: "https://sattamatkadpboss.co/record/kalyan-morning-penal-chart.php",
    lucky: [0, 5, 8]
  },
  {
    name: "MADHUR MORN",
    time: "11:30 AM - 12:30 PM",
    result: "356-45-357",
    panel: "https://sattamatkadpboss.co/madhur-morning-penal-chart.php",
    lucky: [3, 7, 9]
  },
  {
    name: "NANDHINI MORNING",
    time: "11:20 AM - 12:20 PM",
    result: "470-13-445",
    panel: "https://www.asonline.in/panel-chart.php?name=NANDINI%20MORNING%20&id=209",
    lucky: [2, 6, 9]
  },
  {
    name: "WORLI MORNING",
    time: "11:40 AM - 12:40 PM",
    result: "470-13-445",
    panel: "https://dpbosse.net/pannel/WORLIMORNING/121",
    lucky: [2, 6, 9]
  },
  {
    name: "SRIDEVI",
    time: "12:00 PM - 01:00 PM",
    result: "779-31-579",
    panel: "https://sattamatkadpboss.co/record/sridevi-satta-penal-chart.php",
    lucky: [0, 6, 8]
  },
  {
    name: "GOA DAY",
    time: "01:00 PM - 02:00 PM",
    result: "599-30-118",
    panel: "-",
    lucky: [5, 8, 9]
  },
  {
    name: "TIME BAZAR",
    time: "01:00 PM - 02:00 PM",
    result: "590-41-344",
    panel: "https://sattamatkadpboss.co/time-bazar-panel-chart.php",
    lucky: [1, 4, 9]
  },
  {
    name: "PUNA BAZAR",
    time: "01:15 PM - 03:15 PM",
    result: "470-13-445",
    panel: "https://dpboss.boston/panel-chart-record/puna-bazar.php",
    lucky: [2, 6, 9]
  },
  {
    name: "SITA DAY",
    time: "02:00 PM - 03:00 PM",
    result: "120-34-347",
    panel: "https://dpbosse.net/pannel/SITADAY/89",
    lucky: [0, 2, 7]
  },
  {
    name: "BOMBAY DAY",
    time: "01:55 PM - 02:55 PM",
    result: "470-13-445",
    panel: "https://suratmatka.in/bombay-day-satta-panel-chart.php",
    lucky: [2, 6, 9]
  },
  {
    name: "MADHUR DAY",
    time: "01:20 PM - 02:20 PM",
    result: "169-61-128",
    panel: "https://sattamatkadpboss.co/madhur-day-panel-chart.php",
    lucky: [3, 6, 7]
  },
  {
    name: "MILAN DAY",
    time: "03:00 PM - 05:00 PM",
    result: "458-75-159",
    panel: "https://sattamatkadpboss.co/record/milan-day-penal-chart.php",
    lucky: [0, 1, 9]
  },
  {
    name: "RAJDHANI DAY",
    time: "03:15 PM - 05:15 PM",
    result: "234-94-789",
    panel: "https://sattamatkadpboss.co/record/rajdhani-day-penal-chart.php",
    lucky: [2, 3, 8]
  },
  {
    name: "ANDHRA DAY",
    time: "03:15 PM - 05:15 PM",
    result: "470-13-445",
    panel: "https://dpboss.boston/panel-chart-record/andhra-day.php",
    lucky: [2, 6, 9]
  },
  {
    name: "KRANTI DAY",
    time: "03:20 PM - 05:20 PM",
    result: "470-13-445",
    panel: "https://www.asonline.in/panel-chart.php?name=KRANTI%20DAY%20&id=210",
    lucky: [2, 6, 9]
  },
  {
    name: "SUPREME DAY",
    time: "03:25 PM - 05:25 PM",
    result: "127-05-140",
    panel: "https://sattamatkadpboss.co/supreme-day-panel-chart.php",
    lucky: [0, 5, 7]
  },
  {
    name: "KALYAN",
    time: "03:45 PM - 05:45 PM",
    result: "278-77-250",
    panel: "https://sattamatkadpboss.co/record/kalyan-penal-chart.php",
    lucky: [3, 6, 8]
  },
  {
    name: "SITA NIGHT",
    time: "06:25 PM - 07:25 PM",
    result: "369-88-116",
    panel: "https://dpbosse.net/pannel/SITANIGHT/109",
    lucky: [2, 5, 9]
  },
  {
    name: "KARNATAKA NIGHT",
    time: "06:20 PM - 07:20 PM",
    result: "600-65-113",
    panel: "https://sattamatkadpboss.co/karnataka-night-panel-chart.php",
    lucky: [3, 4, 9]
  },
  {
    name: "KRANTI NIGHT",
    time: "06:50 PM - 07:50 PM",
    result: "600-65-113",
    panel: "https://www.asonline.in/panel-chart.php?name=KRANTI%20NIGHT&id=212",
    lucky: [3, 4, 9]
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
