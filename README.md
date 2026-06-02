# Projeto-Vulcan
Projeto Vulcan
# Descrição proposta pelo professor sobre o projeto:
ESTUDO DE CASO INTEGRADO: PROJETO VULCAN

# 1. OBJETIVO DO PROJETO

O presente documento estabelece as diretrizes normativas e técnicas para a
execução do Projeto Vulcan. Esta atividade prática avaliativa possui como escopo simular um
ambiente corporativo real de desenvolvimento de software na SoftFactory Camaçari,
concentrando-se na centralização, sincronização e segurança do código de gerenciamento de
uma frota de robôs industriais de montagem automatizada.
2. PROCEDIMENTOS TÉCNICOS EXIGIDOS
A atividade deverá ser executada estritamente através da interface de linha de comando
(CLI) do sistema Git e hospedada na plataforma remota GitHub. Para a consolidação do
projeto, as equipes deverão cumprir as fases de implementação descritas a seguir:
2.1 Configuração de Segurança Individual (Protocolo SSH)

Com o objetivo de simular as políticas de segurança cibernética corporativa da
SoftFactory, cada discente participante deverá, obrigatoriamente, gerar um par de chaves
criptográficas RSA ou ED25519 em seu terminal local. A chave pública correspondente
deverá ser vinculada ao perfil pessoal do usuário na plataforma GitHub.

# 2.2 Inicialização e Vinculação do Repositório Remoto

O discente designado como líder técnico do grupo deverá criar um repositório

remoto público na plataforma GitHub, intitulado estritamente como projeto-vulcan-
softfactory . Após a criação, o líder deverá conceder permissão de escrita aos demais membros

da equipe, inserindo-os formalmente como colaboradores por meio do painel administrativo
do repositório (Settings > Collaborators).

# 2.3 Divisão de Escopo e Workflow de Desenvolvimento

A arquitetura de software para o gerenciamento da frota dos robôs industriais foi
fragmentada em três módulos fundamentais de execução. Cada membro do grupo assumirá a
responsabilidade exclusiva pelo desenvolvimento técnico e envio de um arquivo específico,
conforme a listagem abaixo:

Integrante A (Líder / Arquivo motor.js): Criar uma função que receba a
velocidade atual e a aceleração do braço robótico, calcule a velocidade final e retorne se o
braço está em "Sistema Seguro" ou "ALERTA DE SOBRECARGA" (usando a estrutura
condicional if/else).

• Integrante B (Arquivo sensores.js): Criar uma função que receba um
Array (lista) com 5 leituras de temperatura do robô, calcule a média térmica
(usando o laço de repetição for) e retorne se o sistema precisa ou não ligar o
resfriamento.
• Integrante C (Arquivo app.js): Criar o arquivo principal que importa as
funções dos outros dois colegas (usando require), define dados de teste e
exibe um painel completo de telemetria no terminal através do console.log().

# 2.4 Simulação de Conflito de Versão e Resolução Manual

Como critério mandatório de homologação do projeto, todos os integrantes da
equipe deverão realizar edições simultâneas no arquivo de documentação README.md .
Esse procedimento induzirá intencionalmente um conflito de integração de linhas (Merge
Conflict).

A equipe terá a obrigação técnica de resolver o conflito manualmente através do
terminal de comandos, combinando as contribuições informativas de todos os autores em um
texto final coeso, limpo e sem as tags de conflito originais geradas pelo Git (ex: <<<<<<<
HEAD ).

# 3. REQUISITOS DE DOCUMENTAÇÃO (README.MD)

O arquivo README.md atuará como o manual técnico do Projeto Vulcan e
deverá obedecer rigorosamente à linguagem de marcação Markdown, contemplando os
seguintes tópicos formais:

1. Cabeçalho com o nome do projeto e a identificação da equipe;
2. Descrição detalhada do problema industrial proposto e o escopo do robô;
3. Relação explícita de tecnologias, linguagens e ferramentas empregadas;
4. Guia rápido contendo as instruções operacionais para clonagem e execução
dos scripts locais.

# 4. CRITÉRIOS E MIGRATION DE AVALIAÇÃO

A nota máxima da atividade é fixada em 2,0 pontos, distribuída conforme os pesos

estabelecidos na Tabela 1:
Tabela 1 — Matriz de Distribuição de Notas do Projeto Vulcan

ITEM DE ENTREGA

CRITÉRIO DE
AVALIAÇÃO TÉCNICA

PESO RELATIVO

Estrutura do Repositório Existência do link público
válido no GitHub com
documentação no
README.md.

0,6 pts

Segurança e SSH

Autenticação comprovada de
envios via chaves SSH
cadastradas na plataforma.

0,4 pts

Histórico de Commits Mínimo de 3 commits
significativos e nominais
por integrante do grupo.

0,6 pts

Gestão de Conflito

Resolução do conflito e
arquivo de contribuidores
devidamente integrado.

0,4 pts

A avaliação dos discentes será realizada de forma estritamente individual. O
docente utilizará o log de auditoria técnica da plataforma remota (aba Insights > Contributors)
para confrontar as linhas de código produzidas e validar a padronização das mensagens de
commit submetidas por cada membro do grupo.
