

//gráfico de barras//

const ctx = document.getElementById('alunosChart').getContext('2d');
 let labels = ['Téc de Enfermagem l (2020)', 'Cuidador em Saúde Mental (2020)', 'ACS | Agentes Comunitários de Saúde(2020)', 'TARM (2021)', 'Base SAMU 192 (2021) - Módulo I', 'Base SAMU 192 (2021) - Módulo II', 'Base SAMU 192 (2021) - Módulo III', 'Téc de Enfermagem ll (2021)', 'Téc de Enfermagem lll (2022)', 'Urgências e Emergências Médicas I (2022)', 'HGNI | Acolhimento e Classificação de Risco (2022)', 'Consórcios Públicos (2022)', 'Capacitação para Enfermagem l (2023)', 'Urgências e Emergências Médicas II (2023)', 'TARM (2023)', 'Atualização da Prática Clinica da Enfermagem (2023)', 'Cuidador em Saúde Mental (2024)', 'TARM (2024)', 'Curso APH(2024)', 'Eletrocardiografia Básico (2024)', 'Curso Infecto(2024)', 'Curso Primeiros Socorros - Lei Lucas(2025)', 'Curso APH(2025)', 'AGORA TEM ESPECIALISTAS -  ONCOLOGIA', 'AGORA TEM ESPECIALISTAS -  CARDIOLOGIA', 'AGORA TEM ESPECIALISTAS -  OFTALMOLOGIA', 'AGORA TEM ESPECIALISTAS -  ORTOPEDIA', 'Curso de Sinais Vitais e Escala de Glasgow (2025)', 'Curso de Fundamentos da Enfermagem' ];
let inscritos = [112, 182, 734, 54, 528, 528, 528, 613, 409, 305, 96, 219, 391, 232, 54, 634, 383, 19, 1231, 313, 563, 1340, 1371, 301, 331, 83, 92, 844, 631 ];
 let certificados = [54, 54, 469, 50, 294, 377, 417, 234, 287, 221, 32, 125, 237, 133, 50, 306, 283, 18, 815, 92, 348, 878, 912, 120, 118, 49, 39, 521, 302 ];
        
const alunosChart = new Chart(ctx, {
 type: 'bar',
data: {
    labels: labels,
    datasets: [{
 label: 'Inscritos',
 data: inscritos,
 backgroundColor: 'rgba(84,79,197, 0.6)',
 borderColor: 'rgba(84,79,197, 1)',
  borderWidth: 1
 },
{
label: 'Certificados',
data: certificados,
backgroundColor: 'rgba(54, 162, 235, 0.6)',
borderColor: 'rgba(54, 162, 235, 1)',
borderWidth: 1
 }
]
},
options: {
responsive: true,
plugins: {
legend: {
position: 'bottom'
},
 datalabels: {
anchor: 'end',
align: 'top',
formatter: (value) => value, // Mostra o valor exato
font: {
 weight: 'bold'
}
}
},
scales: {
y: {
 beginAtZero: true
 }
}
},
plugins: [ChartDataLabels] // Ativa o plugin
});


//contador//

 function createCounter(elementId, startValue, increment, endValue, interval) {
     let counter = startValue;
     function updateCounter() {
         counter += increment;
         document.getElementById(elementId).innerText = '+ ' + counter;
         // Para o contador quando atingir o valor final
         if (counter >= endValue) {
             clearInterval(counterInterval);
         }
     }
     // Atualiza o contador no intervalo especificado
     let counterInterval = setInterval(updateCounter, interval);
 }
 // Criar contadores com diferentes configurações
 createCounter('counter1', 1, 1, 30, 172);
 createCounter('counter2', 1000, 50, 7800, 50);
 createCounter('counter3', 10, 1, 180, 30);
 createCounter('counter4', 1000, 100, 9600, 70);



//gráfico de mapa//
var data = [
    ['br-sp', 52], ['br-mg', 44], ['br-rj', 6500], ['br-ba', 13], ['br-go', 4],
    ['br-ce', 27], ['br-df', 4], ['br-es', 11], ['br-ms', 10], ['br-al', 5],['br-pi', 4],['br-am', 10],
    ['br-pa', 17], ['br-pb', 11],['br-pe', 10], ['br-pr', 16], ['br-rn', 6], ['br-ac', 2],
    ['br-ro', 16], ['br-rs', 17], ['br-se', 3], ['br-to', 27], ['br-ap', 2],['br-sc', 9],,['br-ma', 2],
    ['br-vazio', 250] // Para estados com valores vazios, se necessário
];

Highcharts.mapChart('mapa', {
    chart: {
        map: 'countries/br/br-all',
        zoomType: 'xy' // Ativa o zoom
    },
    title: {
        text: 'Total de Inscritos por Estado'
    },
    colorAxis: {
        min: 0,
        stops: [
            [0, '#FFB6C1'],
            [0.5, '#FF7F50'],
            [1, '#A52A2A']
        ]
    },
    series: [{
        data: data,
        name: 'Inscritos',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}: {point.value}'
        },
        // point: {
        //     events: {
        //         click: function () {
        //             var inscritos = prompt('Novo número de inscritos para ' + this.name, this.value);
        //             if (inscritos !== null) {
        //                 this.update(parseInt(inscritos));
        //             }
        //         }
        //     }
        // }
    }],
    navigation: {
        buttonOptions: {
            align: 'right',
            verticalAlign: 'top',
            x: -10,
            y: 10
        }
    },
    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'top',
            x: 5,
            y: 40
        }
    }
});
function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");
    menu.classList.toggle("open");
    overlay.classList.toggle("show");
}

// Quando o overlay (fundo) for clicado, o menu se fecha
document.getElementById("overlay").addEventListener("click", closeMenu);

function closeMenu() {
    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");
    menu.classList.remove("open");
    overlay.classList.remove("show");
}

 // Seleciona o botão
    const backToTopButton = document.getElementById("backToTop");

    // Mostra/esconde o botão ao rolar a página
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 400) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    // Anima a rolagem suave para o topo
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
