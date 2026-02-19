const protocolos = [
    {
        titulo: "Protocolo de Acesso às Ofertas de Cuidados Integrados (OCI) na Atenção Especializada em Oncologia",
        resumo: "O Protocolo de Acesso às Ofertas de Cuidados Integrados (OCI) na Atenção Especializada em Oncologia, parte do programa 'Agora Tem Especialistas' do Ministério da Saúde, visa agilizar o diagnóstico e início de tratamento no SUS.",
        link: "https://www.gov.br/saude/pt-br/composicao/saes/agora-tem-especialistas/publicacoes/protocolo-de-acesso-as-ofertas-de-cuidados-integrados-na-atencao-especializada-em-oncologia.pdf"
    },
    {
        titulo: "Protocolo de Acesso às Ofertas de Cuidados Integrados (OCI) na Atenção Especializada em Oftalmologia",
        resumo: "O Protocolo de Acesso às Ofertas de Cuidados Integrados (OCI) na Atenção Especializada em Oftalmologia, parte do programa 'Agora Tem Especialistas' do Ministério da Saúde, visa agilizar o diagnóstico e início de tratamento no SUS.",
        link: "https://www.gov.br/saude/pt-br/composicao/saes/agora-tem-especialistas/publicacoes/protocolo-de-encaminhamento-as-ofertas-de-cuidados-integrados-em-oftalmologia.pdf"
    },
    {
        titulo: "Protocolo de Acesso às Ofertas de Cuidados Integrados (OCI) na Atenção Especializada em Ortopedia",
        resumo: "O Protocolo de Acesso às Ofertas de Cuidados Integrados (OCI) na Atenção Especializada em Ortopedia, parte do programa 'Agora Tem Especialistas' do Ministério da Saúde, visa agilizar o diagnóstico e início de tratamento no SUS.",
        link: "https://www.gov.br/saude/pt-br/composicao/saes/agora-tem-especialistas/publicacoes/protocolo-de-encaminhamento-as-ofertas-de-cuidados-integrados-de-ortopedia.pdf"
    },
    {
        titulo: "Protocolo de Acesso às Ofertas de Cuidados Integrados (OCI) na Atenção Especializada em Cardiologia",
        resumo: "O Protocolo de Acesso às Ofertas de Cuidados Integrados (OCI) na Atenção Especializada em Cardiologia, parte do programa 'Agora Tem Especialistas' do Ministério da Saúde, visa agilizar o diagnóstico e início de tratamento no SUS.",
        link: "https://www.gov.br/saude/pt-br/composicao/saes/agora-tem-especialistas/publicacoes/protocolo-de-acesso-as-ofertas-de-cuidados-integrados-na-atencao-especializada-em-cardiologia.pdf"
    },
    {
        titulo: "Protocolo de Acesso às Ofertas de Cuidados Integrados (OCI) na Atenção Especializada em Otorrinolaringologia",
        resumo: "O Protocolo de Acesso às Ofertas de Cuidados Integrados (OCI) na Atenção Especializada em Otorrinolaringologia, parte do programa 'Agora Tem Especialistas' do Ministério da Saúde, visa agilizar o diagnóstico e início de tratamento no SUS.",
        link: "https://www.gov.br/saude/pt-br/composicao/saes/agora-tem-especialistas/publicacoes/protocolo-de-encaminhamento-as-ofertas-de-cuidados-integrados-de-otorrino.pdf"
    },
    
    
];

const container = document.getElementById("protocolos-container");

protocolos.forEach(p => {
    const div = document.createElement("div");
    div.className = "protocolo";

    div.innerHTML = `
        <h2>${p.titulo}</h2>
        <p>${p.resumo}</p>
        <a href="${p.link}" target="_blank" rel="noopener noreferrer">
            Baixar PDF
        </a>
    `;

    container.appendChild(div);
});