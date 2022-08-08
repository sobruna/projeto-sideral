(function() {

    let jobslist = document.querySelector(".jobs-list");
    
let vagas = [{
    titulo: "Analista de CX",
    local: "São Paulo/ Remoto",
    area: "Operações",
    nivel: "Pleno/ Sênior"
    },
    {
    titulo: "Analista de Suporte",
    local: "Remoto",
    area: "Operações",
    nivel: "Todos"   
    },
    {
    titulo: "AML/ KYC",
    local: "São Paulo/ Remoto",
    area: "Compliance",
    nivel: "Sênior"   
    },
    {
    titulo: "Software Engineer",
    local: "São Paulo/ Remoto",
    area: "Engenharia & Produto",
    nivel: "Todos"  
    },
    {
    titulo: "Data Scientist",
    local: "São Paulo/ Remoto",
    area: "Engenharia & Produto",
    nivel: "Pleno/ Sênior"  
    },
    {
    titulo: "Mobile Developer",
    local: "São Paulo/ Remoto",
    area: "Engenharia & Produto",
    nivel: "Todos"  
    }
]

let jobsitems ="";

for (let job of vagas) {
    jobsitems += '<li class="col col-sm-2">' + job.titulo + '<br><br>' + job.local + '<br>' + job.area + '<br>' +job.nivel +'</li>'
    console.log|(vagas.titulo,vagas.descricao,vagas.horas, vagas.nivel)
};

jobslist.innerHTML = jobsitems;
})();