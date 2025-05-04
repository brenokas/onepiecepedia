const nomesSagas = [
	'East Blue',
	'Alabasta',
	'Skypiea',
	'Water 7',
	'Thriller Bark',
	'Marineford',
	'Ilha dos Homens-Peixe',
	'Punk Hazard',
	'Dressrosa',
	'Zou',
	'Whole Cake',
	'Wano',
	'Saga Final',
];

const qtdEpisodios = [61, 74, 71, 119, 59, 132, 58, 54, 122, 32, 107, 199, 35];

const nomesCapitaes = ['Monkey D. Luffy', 'Shanks, "O ruivo"', 'Marshall D. Teach', 'Kaido', 'Big Mom', 'Buggy', 'Barba Branca'];
const recompensasCapitaes = [3000000000, 4048900000, 3996000000, 4611100000, 4388000000, 3189000000, 5046000000];

document.addEventListener('DOMContentLoaded', () => {
	new Chart(document.getElementById('graficoEpisodios'), {
		type: 'line',
		data: {
			labels: nomesSagas,
			datasets: [
				{
					label: '',
					data: qtdEpisodios,
					borderWidth: 1,
					tension: 0.4,
					pointBackgroundColor: '#F8DE3C',
					borderColor: '#f8de3c',
				},
			],
		},
		options: {
			responsive: true,
			plugins: {
				legend: {
					display: false,
				},
				datalabels: {
					align: 'top',
					anchor: 'end',
					color: '#fefefe',
					font: {
						weight: 'bold',
						size: '20px',
					},
				},
			},

			interaction: {
				mode: 'index',
			},

			scales: {
				x: {
					title: {
						display: true,
						text: 'Sagas',
						color: '#fefefe',
						font: {
							size: '20px',
							weight: 'bold',
						},
					},
					ticks: {
						color: '#fefefe',
						font: {
							size: '20px',
						},
					},
					grid: {
						color: 'rgb(254, 254, 254, 0.10)',
					},
				},

				y: {
					beginAtZero: true,
					min: 0,
					max: 220,
					title: {
						display: true,
						text: 'Quantidade de episódios',
						color: '#fefefe',
						font: {
							size: '20px',
							weight: 'bold',
						},
					},
					ticks: {
						stepSize: 20,
						color: '#fefefe',
						font: {
							size: '20px',
						},
					},
					grid: {
						color: 'rgb(254, 254, 254, 0.10)',
					},
				},
			},
		},

		plugins: [ChartDataLabels],
	});

	new Chart(document.getElementById('graficoRecompensas'), {
		type: 'bar',
		data: {
			labels: nomesCapitaes,
			datasets: [
				{
					label: '',
					data: recompensasCapitaes,
					borderWidth: 1,
					backgroundColor: '#F8DE3C',
					tension: 0.4,
				},
			],
		},
		options: {
			responsive: true,
			plugins: {
				legend: {
					display: false,
				},
				datalabels: {
					align: 'top',
					anchor: 'end',
					color: '#fefefe',
					font: {
						weight: 'bold',
						size: '20px',
					},
					formatter: (value) => {
						return new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 }).format(value);
					},
				},
			},

			interaction: {
				mode: 'index',
			},

			scales: {
				x: {
					title: {
						display: true,
						text: 'Capitães',
						color: '#fefefe',
						font: {
							size: '20px',
							weight: 'bold',
						},
					},
					ticks: {
						color: '#fefefe',
						font: {
							size: '20px',
						},
					},
					grid: {
						color: 'rgb(254, 254, 254, 0.10)',
					},
				},

				y: {
					beginAtZero: true,
					min: 0,
					max: 6000000000,
					title: {
						display: true,
						text: 'Recompensa',
						color: '#fefefe',
						font: {
							size: "20px",
							weight: 'bold',
						},
					},
					ticks: {
						stepSize: 1500000000,
						color: '#fefefe',
						font: {
							size: "20px",
						},
					},
					grid: {
						color: 'rgb(254, 254, 254, 0.10)',
					},
				},
			},
		},

		plugins: [ChartDataLabels],
	});
});
