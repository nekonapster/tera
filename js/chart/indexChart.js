const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "oct",
      "nov",
      "dic",
    ],
    datasets: [
      {
        fill: {
          target: "origin",
          above: "rgb(254, 119, 123)",
        },
        label: "consumos",
        data: [2, 19, 3, 5, 2, 2, 12, 1, 3, 3, 6, 4],
        borderWidth: 2,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});