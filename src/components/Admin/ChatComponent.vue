<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
    :height="chartHeight"
    :width="chartWidth"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ['Javascript', 'HTML', 'CSS', 'Vue', 'React', 'Flutter', 'PHP', 'Laravel', 'Python', 'Java'],
        datasets: [
          {
            data: [40, 20, 12, 32, 23, 42, 21, 50, 100, 80],
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)', // Color for Javascript
              'rgba(54, 162, 235, 0.7)',  // Color for HTML
              'rgba(255, 206, 86, 0.7)',  // Color for CSS
              'rgba(75, 192, 192, 0.7)',  // Color for Vue
              'rgba(153, 102, 255, 0.7)', // Color for React
              'rgba(255, 159, 64, 0.7)',  // Color for Flutter
              'rgba(199, 199, 199, 0.7)', // Color for PHP
              'rgba(83, 102, 255, 0.7)',  // Color for Laravel
              'rgba(53, 162, 135, 0.7)',  // Color for Python
              'rgba(255, 99, 71, 0.7)'    // Color for Java
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(199, 199, 199, 1)',
              'rgba(83, 102, 255, 1)',
              'rgba(53, 162, 135, 1)',
              'rgba(255, 99, 71, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        }
      },
      chartHeight: 400,
      chartWidth: 500
    }
  }
}
</script>
<style scoped>
#my-chart-id{
  margin: 20px;
}
</style>
