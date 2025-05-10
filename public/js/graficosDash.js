document.addEventListener('DOMContentLoaded', () => {
	new Chart(document.getElementById('graficoDashboard'), {
		type: 'bar',
		data: {
			labels: ['Luffy', 'Zoro', 'Nami', 'Jinbe', 'Sanji'],
			datasets: [
				{
					label: [0, 10, 15, 20, 25],
					data: [0, 10, 15, 20, 25],
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
				},
			},

			interaction: {
				mode: 'index',
			},

			scales: {
				x: {
					title: {
						display: true,
						text: 'Personagens',
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
					max: 50,
					title: {
						display: true,
						text: 'Escolhas',
						color: '#fefefe',
						font: {
							size: '20px',
							weight: 'bold',
						},
					},
					ticks: {
						stepSize: 10,
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
});
