# Zotero RSL Tools

**Automação de tarefas bibliográficas e metodológicas para Revisões Sistemáticas da Literatura utilizando JavaScript no Zotero.**

## Sobre o projeto

O Zotero é uma ferramenta amplamente utilizada para gerenciamento de referências bibliográficas, organização de documentos científicos e suporte à elaboração de pesquisas acadêmicas. Entretanto, durante a realização de Revisões Sistemáticas da Literatura (RSL), determinadas atividades podem se tornar repetitivas e demandar um esforço considerável, especialmente quando envolvem centenas ou milhares de publicações.

Este repositório reúne scripts desenvolvidos em JavaScript para automatizar procedimentos diretamente no ambiente Zotero, buscando tornar o processo de organização, classificação e análise das referências mais eficiente, consistente e reproduzível.

A utilização de JavaScript permite acessar informações armazenadas na biblioteca do Zotero, percorrer referências, consultar notas, manipular etiquetas e gerar relatórios personalizados. Dessa forma, tarefas que normalmente dependeriam de verificações manuais podem ser executadas de maneira sistemática.

## Por que utilizar scripts JavaScript no Zotero?

A automação oferece algumas vantagens importantes durante uma RSL:

- **Redução do trabalho manual:** automatização de tarefas repetitivas envolvendo grandes conjuntos de referências.
- **Padronização:** aplicação consistente de critérios de organização e classificação.
- **Rastreabilidade:** geração de relatórios que permitem acompanhar as decisões tomadas durante a triagem.
- **Redução de erros:** diminuição de inconsistências decorrentes de operações manuais.
- **Reprodutibilidade:** possibilidade de executar novamente os procedimentos e obter resultados comparáveis.
- **Flexibilidade:** adaptação dos scripts às necessidades metodológicas de diferentes revisões.

Os scripts são desenvolvidos para atender a diferentes etapas do gerenciamento bibliográfico, podendo ser adaptados conforme os critérios e procedimentos adotados em cada pesquisa.

## Scripts disponíveis

| Script | Descrição |
|---|---|
| `01-contabilizar-exclusoes.js` | Identifica e contabiliza critérios de exclusão registrados nas notas dos trabalhos. |
| `02-identificar-sem-notas.js` | Identifica referências que ainda não possuem notas anexadas. |
| `03-organizar-por-tags.js` | Auxilia na classificação e organização das referências por etiquetas. |
## Público-alvo

O projeto é destinado a pesquisadores, estudantes de graduação e pós-graduação e demais usuários do Zotero que realizam revisões sistemáticas ou levantamentos bibliográficos e desejam automatizar atividades de organização e análise de referências.
