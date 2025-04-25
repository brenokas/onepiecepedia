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
];

const qtdEpisodios = [61, 74, 71, 119, 59, 132, 58, 54, 122, 32, 107, 199];

document.addEventListener('DOMContentLoaded', () => {
	new Chart(document.getElementById('graficoEpisodios'), {
		type: 'bar',
		data: {
			labels: nomesSagas,
			datasets: [
				{
					label: '',
					data: qtdEpisodios,
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
					color: '#FFF',
					font: {
						weight: 'bold',
						size: 12,
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
							size: 15,
							weight: 'bold',
						},
					},
					ticks: {
						color: '#fefefe',
						font: {
							size: 12,
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
							size: 15,
							weight: 'bold',
						},
					},
                    ticks: {
                        stepSize: 20,
                        color: '#fefefe',
                        font: {
                            size: 12
                        }
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
