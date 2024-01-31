// bolsillo
const ctx1 = document.getElementById("myChartBolsillo");

new Chart(ctx1, {
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
					above: "rgb(254, 119, 123)"
				},
				label: "consumos",
				data: [
					2,
					19,
					3,
					5,
					2,
					2,
					12,
					1,
					3,
					3,
					6,
					4
				],
				borderWidth: 2
			},
		]
	},
	options: {
		plugins: {
			legend: {
				display: false
			}
		},
		scales: {
			y: {
				beginAtZero: true
			}
		}
	}
});

// excedentes
const ctx2 = document.getElementById("myChartExcedentes");

new Chart(ctx2, {
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
					above: "rgb(254, 119, 123)"
				},
				label: "consumos",
				data: [
					2,
					19,
					3,
					5,
					2,
					2,
					12,
					1,
					3,
					3,
					6,
					4
				],
				borderWidth: 2
			},
		]
	},
	options: {
		plugins: {
			legend: {
				display: false
			}
		},
		scales: {
			y: {
				beginAtZero: true
			}
		}
	}
});
// bolsillo
const ctxModal1 = document.getElementById("myChartBolsilloModal");

new Chart(ctxModal1, {
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
					above: "rgb(254, 119, 123)"
				},
				label: "consumos",
				data: [
					2,
					19,
					3,
					5,
					2,
					2,
					12,
					1,
					3,
					3,
					6,
					4
				],
				borderWidth: 2
			},
		]
	},
	options: {
		plugins: {
			legend: {
				display: false
			}
		},
		scales: {
			y: {
				beginAtZero: true
			}
		}
	}
});

// excedentes
const ctxModal2 = document.getElementById("myChartExcedentesModal");

new Chart(ctxModal2, {
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
					above: "rgb(254, 119, 123)"
				},
				label: "consumos",
				data: [
					2,
					19,
					3,
					5,
					2,
					2,
					12,
					1,
					3,
					3,
					6,
					4
				],
				borderWidth: 2
			},
		]
	},
	options: {
		plugins: {
			legend: {
				display: false
			}
		},
		scales: {
			y: {
				beginAtZero: true
			}
		}
	}
});
