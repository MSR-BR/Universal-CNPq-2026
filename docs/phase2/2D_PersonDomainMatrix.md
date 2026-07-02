# 2D Person-Domain Matrix

## Document control

Objective: Cross-index Phase 1A people against the factual capability domains
refined in Phase 2C.

Inputs: `docs/phase2/2A_TeamRoster.md`,
`docs/phase2/2B_PersonProfiles.md`,
`docs/phase2/2C_CapabilityDomains.md`, and Phase 1 evidence records.

Outputs: One person-domain navigation matrix with direct and linked/contextual
domain signals.

Dependencies: Phase 1A people records, Phase 2B person profiles, and Phase 2C
capability domains.

Completion criteria: Every Phase 1A person appears once; every Phase 2C domain
is represented; direct and linked/contextual signals are distinguished; source
types are identified; no ranking, leadership assignment, responsibility
assignment, work package, or proposal text is created.

Version: 1.1

Status: Active; person-domain matrix refined

Last update: 2026-07-01

## Scope guard

This matrix is a navigation index, not a ranking. It records which factual
capability domains are already visible for each Phase 1A person and which
source types support that visibility.

Matrix marks indicate visibility in the evidence base only. They do not measure
strength, productivity, seniority, importance, priority, leadership, or future
project assignment.

Domain codes in this subsection are local shorthand for table readability.
They do not replace stable Phase 1 IDs or the full Phase 2C domain labels.

## Source processing summary

- Phase 1A people represented: 16.
- Phase 2C capability domains represented: 9.
- Person-domain matrix rows refined: 16.
- Domain-coverage rows refined: 9.
- Direct person-domain evidence marks from Phase 2C person lists: 51.
- Linked/contextual person-domain marks from Phase 2C domain notes: 4.
- People with at least one direct or linked/contextual domain mark: 16.

## Domain code key

| Code | Capability domain | Link rule used in this matrix |
| --- | --- | --- |
| `D-01` | Metal complexes, synthesis, structure, and magnetism | Direct marks follow the Phase 2C people list. |
| `D-02` | Barocaloric and spin-crossover systems | Direct marks follow the Phase 2C people list. |
| `D-03` | Quantum thermodynamics and quantum batteries | Direct marks follow the Phase 2C people list. |
| `D-04` | Quantum resources in molecular and metal-based systems | Direct marks follow the Phase 2C people list. |
| `D-05` | Magnetocaloric, multicaloric, i-caloric, and intermetallic materials | Direct marks follow the Phase 2C people list. |
| `D-06` | High-pressure neutron scattering and pressure-linked characterization | Direct marks follow the Phase 2C people list. |
| `D-07` | Single-crystal X-ray diffraction and structural characterization | `P-0016` is direct; `P-0003`, `P-0008`, and `P-0009` are linked through project/publication context recorded in Phase 2C. |
| `D-08` | Scientific computing and quantum-technology platforms | `P-0009`, `P-0012`, and `P-0014` are direct; `P-0003` is linked through Phase 2C context. |
| `D-09` | Training pipeline and early-career participation | Direct marks follow the Phase 2C people list. |

## Matrix marker key

| Marker | Meaning |
| --- | --- |
| `E` | Explicit person-domain evidence in the Phase 2C people list. |
| `L` | Linked/contextual person-domain connection named in a Phase 2C domain note, but not counted there as direct person evidence. |
| `-` | No source-backed person-domain connection recorded for this Phase 2D matrix. |

## Person-domain matrix

| Person ID | Institution | `D-01` | `D-02` | `D-03` | `D-04` | `D-05` | `D-06` | `D-07` | `D-08` | `D-09` | Evidence note |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `P-0001` Gabriel Fernandes Silva | UERJ | - | E | - | - | E | - | - | - | E | Student pipeline evidence through `PRJ-0024`, `RES-0006`, and `RES-0009`. |
| `P-0002` Bruno de Pinho Alho | UERJ | - | E | - | - | E | - | - | - | - | Caloric and intermetallic-material evidence through `PRJ-0007`, `PRJ-0015`, `INF-0010`, and `RES-0009`. |
| `P-0003` Mario de Souza Reis Junior | UFF | E | E | E | E | E | E | L | L | - | Broad publication, project, infrastructure, collaboration, preliminary-result, and bibliography evidence. |
| `P-0004` Paula de Oliveira Ribeiro Alho | UERJ | - | E | - | - | E | - | - | - | - | Barocaloric/spin-crossover and caloric-material evidence through `PRJ-0002`, `PRJ-0011`, `PRJ-0012`, `RES-0006`, and `RES-0009`. |
| `P-0005` Pedro Jorge von Ranke Perlingeiro | UERJ | - | E | - | - | E | - | - | - | - | Theoretical caloric-material evidence through `PRJ-0008`, `PRJ-0016`, and `RES-0009`. |
| `P-0006` Vinícius Gomes de Paula | UFF | - | - | E | - | E | - | - | - | - | Quantum-thermodynamics and functional-material evidence through `PRJ-0003`, `PUB-0050`, `RES-0012`, and `COL-0003`. |
| `P-0007` Vinícius da Silva Ramos de Sousa | UERJ | - | E | - | E | E | E | - | - | - | Spin-crossover, caloric, pressure-linked, and ORNL/SNAP-linked evidence. |
| `P-0008` Alan Fillipe de Souza Almeida | UERJ | E | E | - | E | E | E | L | - | E | Doctoral barocaloric/spin-crossover, metal-complex, pressure-linked, and training-pipeline evidence. |
| `P-0009` Clebson dos Santos Cruz | UFOB | E | - | E | E | E | - | L | E | - | Quantum batteries, quantum resources, metal-complex context, caloric-material links, and computing evidence. |
| `P-0010` Gabriel Batista de Souza | UERJ | - | E | - | - | E | - | - | - | E | Student pipeline evidence through `PRJ-0024`, `RES-0006`, and `RES-0009`. |
| `P-0011` João Vitor Almeida Tavares Cruz | UFOB | - | - | - | - | - | - | - | - | E | Undergraduate training-pipeline evidence from the Phase 1A record. |
| `P-0012` Maron Freitas Anka | SENAI CIMATEC | - | - | E | E | - | - | - | E | - | Quantum-technology, VQA, quantum-battery simulation, and CIMATEC/Kuatomu evidence. |
| `P-0013` Tatiana de Jesus Braga | UFOB | - | - | - | - | - | - | - | - | E | Materials-science training-pipeline evidence from the Phase 1A record. |
| `P-0014` Wanisson Silva Santana | UFOB | - | - | E | - | - | - | - | E | E | Quantum energy-storage, UFOB computing/team context, and early-career participation evidence. |
| `P-0015` António F. Moreira dos Santos | ORNL | E | E | - | E | E | E | - | - | - | High-pressure neutron-scattering, SNAP, pressure-linked molecular, and functional-material evidence. |
| `P-0016` Paula Cristina Ferreira da Silva Brandão | Universidade de Aveiro | E | E | - | - | - | - | E | - | - | Single-crystal X-ray diffraction, metal-complex synthesis/structure, molecular magnetism, and spin-crossover evidence. |

## Domain coverage by person links

| Code | Direct people (`E`) | Linked/context people (`L`) | Visible people count | Coverage note |
| --- | --- | --- | --- | --- |
| `D-01` | `P-0003`, `P-0008`, `P-0009`, `P-0015`, `P-0016` | - | 5 | Metal-complex evidence spans UFF, UERJ, UFOB, ORNL, and Universidade de Aveiro. |
| `D-02` | `P-0001`, `P-0002`, `P-0003`, `P-0004`, `P-0005`, `P-0007`, `P-0008`, `P-0010`, `P-0015`, `P-0016` | - | 10 | Barocaloric/spin-crossover evidence spans UERJ, UFF, ORNL, and Universidade de Aveiro. |
| `D-03` | `P-0003`, `P-0006`, `P-0009`, `P-0012`, `P-0014` | - | 5 | Quantum thermodynamics and quantum-battery evidence spans UFF, UFOB, and SENAI CIMATEC. |
| `D-04` | `P-0003`, `P-0007`, `P-0008`, `P-0009`, `P-0012`, `P-0015` | - | 6 | Quantum-resource evidence links molecular, metal-based, pressure, and computational contexts. |
| `D-05` | `P-0001`, `P-0002`, `P-0003`, `P-0004`, `P-0005`, `P-0006`, `P-0007`, `P-0008`, `P-0009`, `P-0010`, `P-0015` | - | 11 | Broad caloric-material evidence remains grouped only as factual capability context. |
| `D-06` | `P-0003`, `P-0007`, `P-0008`, `P-0015` | - | 4 | Pressure-linked characterization is anchored in ORNL/SNAP and related project/publication evidence. |
| `D-07` | `P-0016` | `P-0003`, `P-0008`, `P-0009` | 4 | X-ray diffraction and structural-characterization context is anchored in Universidade de Aveiro/CICECO records. |
| `D-08` | `P-0009`, `P-0012`, `P-0014` | `P-0003` | 4 | Scientific-computing and quantum-technology context is anchored in UFOB and SENAI CIMATEC records. |
| `D-09` | `P-0001`, `P-0008`, `P-0010`, `P-0011`, `P-0013`, `P-0014` | - | 6 | Training-pipeline evidence is preserved as team-capacity context only. |

## Person-domain detail index

| Person ID | Visible domain codes | Source types represented | Manual-review note |
| --- | --- | --- | --- |
| `P-0001` | `D-02`, `D-05`, `D-09` | Phase 1A record; projects; preliminary results | Evidence currently depends on team/project context rather than independent publication records. |
| `P-0002` | `D-02`, `D-05` | Phase 1A record; projects; infrastructure; preliminary results | No immediate Phase 2 blocker; final CV/profile review remains deferred. |
| `P-0003` | `D-01`, `D-02`, `D-03`, `D-04`, `D-05`, `D-06`, linked `D-07`, linked `D-08` | Phase 1A record; publications; projects; infrastructure; collaborations; preliminary results; bibliography | No immediate Phase 2 blocker; final publication selection remains deferred. |
| `P-0004` | `D-02`, `D-05` | Phase 1A record; projects; preliminary results | No immediate Phase 2 blocker; final CV/profile review remains deferred. |
| `P-0005` | `D-02`, `D-05` | Phase 1A record; projects; preliminary results | No immediate Phase 2 blocker; final CV/profile review remains deferred. |
| `P-0006` | `D-03`, `D-05` | Phase 1A record; publication; project; collaboration; preliminary result | No immediate Phase 2 blocker; final project/publication review remains deferred. |
| `P-0007` | `D-02`, `D-04`, `D-05`, `D-06` | Phase 1A record; projects; collaborations; preliminary results | No immediate Phase 2 blocker; final ORNL/PDSE evidence review remains deferred. |
| `P-0008` | `D-01`, `D-02`, `D-04`, `D-05`, `D-06`, linked `D-07`, `D-09` | Phase 1A record; publications; projects; infrastructure; collaborations; preliminary results | Evidence includes manuscripts and ongoing work; final manual review remains deferred. |
| `P-0009` | `D-01`, `D-03`, `D-04`, `D-05`, linked `D-07`, `D-08` | Phase 1A record; publications; projects; infrastructure; collaborations; preliminary results; idea seeds | No immediate Phase 2 blocker; final publication selection remains deferred. |
| `P-0010` | `D-02`, `D-05`, `D-09` | Phase 1A record; projects; preliminary results | Evidence currently depends on team/project context rather than independent publication records. |
| `P-0011` | `D-09` | Phase 1A record | Evidence currently limited to Phase 1A training context. |
| `P-0012` | `D-03`, `D-04`, `D-08` | Phase 1A record; publications; projects; infrastructure; collaborations; preliminary results | No immediate Phase 2 blocker; final CIMATEC platform description remains deferred. |
| `P-0013` | `D-09` | Phase 1A record | Evidence currently limited to Phase 1A training context. |
| `P-0014` | `D-03`, `D-08`, `D-09` | Phase 1A record; projects; idea seed | Evidence currently depends on project/team context; final manual review remains deferred. |
| `P-0015` | `D-01`, `D-02`, `D-04`, `D-05`, `D-06` | Phase 1A record; publications; projects; infrastructure; collaboration; idea seed | Confirm preferred formal name spelling during manual review. |
| `P-0016` | `D-01`, `D-02`, `D-07` | Phase 1A record; publications; projects; infrastructure; collaboration; idea seed | Confirm preferred formal name spelling during manual review. |

## 2D checkpoint

| Checkpoint item | Status |
| --- | --- |
| Every Phase 1A person appears once in the person-domain matrix | Satisfied for 16 people. |
| Every Phase 2C capability domain appears in the matrix | Satisfied for 9 domains. |
| Direct and linked/contextual domain visibility are distinguished | Satisfied with `E` and `L` markers. |
| Source-type coverage is recorded per person | Satisfied in the person-domain detail index. |
| Link-only markers are limited to relations explicitly named in Phase 2C | Satisfied for `D-07` and `D-08`. |
| No ranking, leadership, responsibility, work package, objective, or proposal text is created | Satisfied in this subsection. |

## Manual review notes

- Recheck linked/contextual markers after the final manual publication and
  project review.
- If Phase 2C domains are split or renamed later, update the local domain codes
  in this subsection without renumbering Phase 1 stable IDs.
- Confirm preferred formal spellings for `P-0015` and `P-0016` during final
  manual review.
- Keep `D-09` as team-capacity context only; do not convert student and
  early-career participation into task assignments in Phase 2.
