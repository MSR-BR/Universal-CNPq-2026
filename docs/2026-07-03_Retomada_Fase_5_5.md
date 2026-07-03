# Retomada da conversa - 2026-07-03

Este documento guarda o estado operacional do projeto para retomada apos uma
pausa de aproximadamente duas semanas.

## Estado atual

- Fase atual: Phase 5.5 - Internal Approval and Budget Collection.
- Phase 0 - Information Collection permanece aberta durante todo o projeto.
- Phases 1A-1H, Phase 2, Phase 3, Phase 4, and Phase 5 foram aceitas como
  baselines suficientes para avancar, com revisao manual final adiada.
- Phase 6 - Master Project ainda esta bloqueada ate a conclusao da Phase 5.5.
- A metodologia esta congelada. Se surgir necessidade de mudar metodologia,
  nao mudar diretamente: abrir uma issue chamada `Methodology Improvement
  Proposal` e aguardar aprovacao.

## Links e caminhos

- Repositorio GitHub: `MSR-BR/Universal-CNPq-2026`.
- Caminho local principal:
  `/Users/marioreis/Library/CloudStorage/Dropbox/Mac (6)/Documents/GitHub/MSR-BR/Universal-CNPq-2026`.
- Formulario publicado para os participantes:
  `https://universal-cnpq-2026.vercel.app/fase-5-5`.
- API de status dos envios:
  `https://universal-cnpq-2026.vercel.app/api/phase55-response`.
- Issues de resposta: issues publicas no GitHub com label
  `phase-5-5-response`.

## Formulario da Phase 5.5

- O formato principal para distribuicao e uma pagina web unica, nao o PDF.
- A pagina contem a proposta resumida, selecao do participante por lista,
  eixos de contribuicao, quadro de orcamento e comentarios gerais.
- O dropdown contem todos os 16 participantes da Phase 1A, incluindo Antonio
  dos Santos, Paula Brandao e estudantes.
- O participante nao precisa digitar o proprio nome; deve selecionar o nome na
  lista.
- O orcamento segue o modelo fixo do CNPq em Custeio/Capital, com os mesmos
  itens de dispendio mostrados na tela do formulario CNPq.
- Cada participante preenche o mesmo quadro. Depois, os valores serao somados
  por item de dispendio para formar o unico formulario CNPq final.
- O botao `Gravar resposta` cria uma issue publica no GitHub usando uma Vercel
  Function. O token fica apenas no servidor da Vercel.
- A lista de quem enviou aparece depois do botao de gravar, em bloco
  recolhivel.

## Teste e limpeza

- Em 2026-07-03, um envio de teste criou corretamente a issue `#3`.
- A issue `#3` foi limpa depois do teste: fechada, sem label
  `phase-5-5-response`, titulo alterado para `Teste removido - Fase 5.5 -
  P-0003`, e corpo substituido por nota de teste removido.
- A API voltou a contar zero respostas validas.
- Um endpoint temporario de limpeza foi usado apenas para limpar a issue `#3`.
  Ele foi removido e a producao foi redeployada sem esse endpoint.
- Importante: a API reconhece respostas validas por label
  `phase-5-5-response` ou por titulo iniciado com `Resposta Fase 5.5`. Para
  limpar testes futuros, remover o label e evitar esse prefixo no titulo.

## Espinha cientifica aprovada

O elemento agregador do projeto e o estudo de complexos metalicos. A Phase 5
organizou cinco tarefas candidatas:

| ID | Tarefa candidata |
| --- | --- |
| `MT-01` | Plataforma de complexos metalicos, sintese, caracterizacao e selecao. |
| `MT-02` | Ajuste por pressao da interacao de troca `J`, com medidas, DFT e modelos. |
| `MT-03` | Ciclos de termodinamica quantica e baterias quanticas em sistemas baseados em complexos metalicos. |
| `MT-04` | Recursos quanticos e metricas de informacao em sistemas moleculares/metalicos sob controle externo. |
| `MT-05` | Efeitos barocaloricos em transicoes spin crossover de complexos metalicos, envolvendo a rota UERJ-UFF-ORNL. |

Rotas importantes a preservar:

- Paula Brandao/Universidade de Aveiro: preparacao de amostras e rota
  estrutural.
- Antonio dos Santos/ORNL: medidas de magnetizacao, susceptibilidade,
  neutrons e pressao quando viavel.
- UERJ e UFF: caracterizacao, calorica/spin crossover, modelos teoricos,
  magnetismo, termodinamica quantica e DFT/modelagem.
- UFOB e SENAI CIMATEC: termodinamica quantica, recursos quanticos,
  computacao e possiveis rotas de simulacao.

## Orçamento

- A proposta concorrera na Faixa C da Chamada Universal CNPq 2026.
- Limite total: ate R$ 250.000,00.
- Composicao: custeio, capital e/ou no maximo uma bolsa.
- Bolsa permitida: no maximo uma IC, ITI ou AT no projeto inteiro.
- Bolsas PDJ/PDS nao sao permitidas na Faixa C.
- O coordenador nao pode atribuir bolsa a si mesmo.
- Prazo do projeto: ate 36 meses.
- A coleta atual e por participante/subgrupo, mas a consolidacao final deve ser
  um orcamento unico do projeto, priorizado por necessidade cientifica.

## Arquivos principais

- Status geral: `docs/00_Project_Status.md`.
- Metodologia: `docs/01_Methodology.md`.
- Roadmap: `docs/02_Project_Roadmap.md`.
- Pessoas/equipe: `docs/phase1/1A_People.md`.
- Matriz do projeto: `docs/phase5/5_ProjectMatrix.md`.
- Phase 5.5: `docs/phase5/5_5_InternalApprovalBudget.md`.
- Proposta resumida: `docs/phase5/5_5_Proposta_Resumo_Aprovacao_Interna.md`.
- Formulario web: `docs/phase5/5_5_Formulario_Aprovacao_Interna.html`.
- API Vercel: `api/phase55-response.js`.
- Template fallback de issue:
  `.github/ISSUE_TEMPLATE/phase5_5_member_response.yml`.
- Workflow de ingestao:
  `.github/workflows/phase5_5_ingest_response.yml`.

## Proximo passo seguro

1. Enviar `https://universal-cnpq-2026.vercel.app/fase-5-5` aos integrantes.
2. Monitorar a API de status e as issues com label `phase-5-5-response`.
3. Quando chegarem respostas, consolidar comentarios por secao da proposta.
4. Somar os orcamentos por item de dispendio CNPq.
5. Ajustar a proposta resumida apenas se houver comentario relevante da equipe.
6. Registrar a aceitacao da Phase 5.5 antes de abrir a Phase 6.

## Cuidados

- Nao iniciar a redacao final da Phase 6 antes de concluir a Phase 5.5.
- Nao transformar sugestoes individuais em mudanca metodologica sem aprovacao.
- Nao guardar CPF ou dados pessoais sensiveis no repositorio.
- Nao deixar issues de teste com label `phase-5-5-response`.
- Manter o formulario como uma experiencia simples para o participante: escolher
  nome, preencher o que couber, clicar em `Gravar resposta`.
