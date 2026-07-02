# 5.5 Internal Approval and Budget Collection

## Document control

Objective: Circulate the summarized project architecture to project members,
record approval/comments, and collect budget items, values, and justifications
before final project writing.

Inputs: Accepted Project Matrix, Gap Analysis, Scientific Atlas, Team Book,
Phase 1 knowledge-base records, and project-owner instructions.

Outputs: Portuguese circulation packet for project-member review, single-page
web response form, PDF support version, Git ingestion route, member approval
tracker, comment and adjustment register, budget item collection table, budget
justification table, access/feasibility checklist, and readiness gate for
Phase 6 - Master Project.

Dependencies: Project-owner acceptance of Phase 5 - Project Matrix.

Completion criteria: Project members have received the summarized proposal;
approval, comments, and required adjustments are recorded; budget items,
values, and justifications are collected; access/feasibility issues are
identified; and the project owner accepts the checkpoint as complete.

Version: 1.6

Status: Active; single-page web response form prepared for CNPq Faixa C budget collection

Last update: 2026-07-02

## Scope guard

This checkpoint is a governance and budget-collection gate. It does not replace
Phase 6 - Master Project, Phase 7 - CNPq Proposal, or Phase 8 - Final Review.

Allowed work in Phase 5.5:

- prepare and revise the summarized internal proposal architecture;
- circulate the summary to project members;
- record approval, comments, objections, requested adjustments, and no-response
  status;
- collect budget items, estimated values, categories, and justifications;
- collect access, feasibility, schedule, and team-allocation information needed
  for the later consolidated project package;
- prepare the readiness gate for Phase 6.

Still prohibited:

- do not start Phase 6 - Master Project;
- do not write final CNPq proposal text;
- do not create final CNPq form blocks;
- do not create the consolidated final PDF project;
- do not treat budget values as final until collected, reviewed, and accepted;
- do not create final schedule, facility-access commitments, or participant
  responsibility assignments before this checkpoint is complete.

## Phase opening note

Phase 5.5 was opened on 2026-07-02 after the project owner accepted the
completed Phase 5 Project Matrix and instructed the repository to proceed to
Phase 5.5.

This document prepares the internal circulation and budget-collection workflow.
It does not complete Phase 5.5 and does not start Phase 6.

## Circulation artifacts

The project-owner later requested a more compact distribution format than the
multi-page PDF. The primary circulation artifact is now a single-page web form
with a concise proposal summary, budget table, and general-comment box. The
PDF remains as a support artifact, not the preferred response interface.

| Artifact | Path | Purpose | Status |
| --- | --- | --- | --- |
| Single-page web form | `docs/phase5/5_5_Formulario_Aprovacao_Interna.html` | Primary circulation interface: compact proposal summary, member dropdown, contribution axes, CNPq budget table, and general comments. | Prepared. |
| GitHub Pages support | `docs/.nojekyll` | Allows GitHub Pages to serve underscored filenames from `docs/` without Jekyll filtering. | Prepared. |
| Portuguese editable source | `docs/phase5/5_5_Proposta_Resumo_Aprovacao_Interna.md` | Source text for internal proposal evaluation by project members. | Prepared. |
| Portuguese PDF support version | `output/pdf/Proposta_Universal_CNPq_2026_Aprovacao_Interna.pdf` | Support PDF; not the preferred distribution format after the web-form refinement. | Prepared. |
| GitHub Issue Form fallback | `.github/ISSUE_TEMPLATE/phase5_5_member_response.yml` | Fallback form using a restricted member dropdown, contribution axes, CNPq budget fields, and a general-comment field. | Prepared. |
| Git ingestion workflow | `.github/workflows/ingest_phase55_member_response.yml` | Automatically writes labeled form responses to `data/phase5_5_member_responses/`. | Prepared. |
| Ingestion script | `.github/scripts/ingest_phase55_response.py` | Converts each labeled GitHub issue response into a versioned Markdown data file. | Prepared. |

## Phase 5 handoff summary

| Element | Accepted Phase 5 content |
| --- | --- |
| Aggregator | Metal complexes. |
| Candidate task 1 | `MT-01` - Metal-complex platform, synthesis, characterization, and selection. |
| Candidate task 2 | `MT-02` - Pressure-driven tuning of exchange interaction `J`. |
| Candidate task 3 | `MT-03` - Quantum thermodynamic cycles and quantum batteries in metal-complex systems. |
| Candidate task 4 | `MT-04` - Quantum resources and information metrics in metal-complex systems. |
| Candidate task 5 | `MT-05` - Barocaloric effects in spin-crossover transitions of metal complexes. |
| Background and motivation | `BG-01`-`BG-03` - Metal-complex caloric review, spin-crossover/barocaloric context, and broader caloric-material background. |
| Support layer | `SL-01` - Capability, validation, access, budget, and training context. |

## Internal circulation summary draft

This is an internal summary for project-member approval and budget collection.
It is not final CNPq proposal text.

The project will use metal complexes as the common platform connecting
synthesis and structural characterization, barocaloric spin-crossover response,
pressure-tunable magnetic interactions, quantum thermodynamic cycles, quantum
batteries, and quantum-resource analysis.

The current project architecture contains five candidate scientific tasks:

| Summary item | Internal description |
| --- | --- |
| `MT-01` | Prepare, characterize, and select metal-complex systems suitable for deeper pressure, thermodynamic, battery, and quantum-resource studies. |
| `MT-02` | Develop the pressure-structure-`J` route, using pressure-induced structural changes to tune the Heisenberg exchange interaction and connect measurements, DFT, and models. |
| `MT-03` | Study quantum thermodynamic cycles and quantum batteries in metal-complex systems, including the possible use of the perturbative first-law approach as an analysis tool. |
| `MT-04` | Analyse quantum resources and information metrics in molecular or metal-complex systems, relating coherence, correlations, entanglement, and discord to observables and performance metrics where appropriate. |
| `MT-05` | Study barocaloric effects in spin-crossover transitions of metal complexes, using the UERJ-UFF-ORNL route for caloric, magnetic, pressure-linked, and neutron/structural feasibility where applicable. |

The caloric and spin-crossover literature, including the metal-complex review
in Coordination Chemistry Reviews, will support the state of the art,
motivation, and focused `MT-05` barocaloric/spin-crossover task.

Members are asked to review the architecture, approve or comment on the task
structure, identify any necessary adjustments, and provide budget items with
estimated values and justifications.

## Member approval tracker

Approval status values: `Pending`, `Approved`, `Approved with comments`,
`Adjustment requested`, `Not participating`, or `No response`.

| Person ID | Name | Institution | Approval status | Comments/adjustments | Budget response |
| --- | --- | --- | --- | --- | --- |
| `P-0001` | Gabriel Fernandes Silva | UERJ | Pending | Pending | Pending |
| `P-0002` | Bruno de Pinho Alho | UERJ | Pending | Pending | Pending |
| `P-0003` | Mario de Souza Reis Junior | UFF | Pending | Pending | Pending |
| `P-0004` | Paula de Oliveira Ribeiro Alho | UERJ | Pending | Pending | Pending |
| `P-0005` | Pedro Jorge von Ranke Perlingeiro | UERJ | Pending | Pending | Pending |
| `P-0006` | Vinicius Gomes de Paula | UFF | Pending | Pending | Pending |
| `P-0007` | Vinicius da Silva Ramos de Sousa | UERJ | Pending | Pending | Pending |
| `P-0008` | Alan Fillipe de Souza Almeida | UERJ | Pending | Pending | Pending |
| `P-0009` | Clebson dos Santos Cruz | UFOB | Pending | Pending | Pending |
| `P-0010` | Gabriel Batista de Souza | UERJ | Pending | Pending | Pending |
| `P-0011` | Joao Vitor Almeida Tavares Cruz | UFOB | Pending | Pending | Pending |
| `P-0012` | Maron Freitas Anka | SENAI CIMATEC | Pending | Pending | Pending |
| `P-0013` | Tatiana de Jesus Braga | UFOB | Pending | Pending | Pending |
| `P-0014` | Wanisson Silva Santana | UFOB | Pending | Pending | Pending |
| `P-0015` | Antonio dos Santos | ORNL | Pending | Pending | Pending |
| `P-0016` | Paula Brandao | Universidade de Aveiro | Pending | Pending | Pending |

## Member response form

The proposal architecture should depend as little as possible on additional
discussion. Member response is therefore collected through a single-page web
form. The page itself cannot write directly to the repository because a static
GitHub Pages site must not expose a write token. Instead, it generates a
pre-filled GitHub issue; the existing GitHub Actions workflow then records the
response in `data/phase5_5_member_responses/`.

Primary web-form path:

`docs/phase5/5_5_Formulario_Aprovacao_Interna.html`

Expected GitHub Pages URL if Pages is enabled from the `docs/` folder:

`https://msr-br.github.io/Universal-CNPq-2026/phase5/5_5_Formulario_Aprovacao_Interna.html`

Fallback GitHub Issue Form URL:

`https://github.com/MSR-BR/Universal-CNPq-2026/issues/new?template=phase5_5_member_response.yml`

Target respondents for this distribution round exclude ORNL, Universidade de
Aveiro, and students. The dropdown includes:

| Person ID | Name | Institution |
| --- | --- | --- |
| `P-0002` | Bruno de Pinho Alho | UERJ |
| `P-0004` | Paula de Oliveira Ribeiro Alho | UERJ |
| `P-0005` | Pedro Jorge von Ranke Perlingeiro | UERJ |
| `P-0007` | Vinicius da Silva Ramos de Sousa | UERJ |
| `P-0003` | Mario de Souza Reis Junior | UFF |
| `P-0006` | Vinicius Gomes de Paula | UFF |
| `P-0009` | Clebson dos Santos Cruz | UFOB |
| `P-0014` | Wanisson Silva Santana | UFOB |
| `P-0012` | Maron Freitas Anka | SENAI CIMATEC |

| Field ID | Form field | Expected response |
| --- | --- | --- |
| `F-01` | Restricted member dropdown | One selected respondent from the target list above. |
| `F-02` | General assessment | Approved as is, approved with minor adjustments, or needs discussion before final writing. |
| `F-03` | Contribution axes | Selected scientific axis/axes or transversal support. |
| `F-04` | CNPq budget table | CNPq rubrica, item de dispendio, estimated value, Pt/En detailing where required, Pt/En justification where required, linked axis, and priority. |
| `F-05` | General comments | Corrections, suggestions, budget observations, or critical feasibility constraints in one free-text field; later separated by the coordinator and mapped to proposal sections. |

## CNPq Faixa C budget rules

The proposal will compete in Faixa C of the 2026 CNPq Universal Call.

Operational rule for this checkpoint: the team should collect budget demands
by task/subgroup, but the final allocation must remain centralized and
prioritized by scientific need. The budget is not an equal division among
participants or institutions. Priority should be given to items that enable
more than one scientific axis, unlock experimental or computational
feasibility, or are required for sample preparation, pressure-linked
measurements, quantum-model development, or student training.

Key Faixa C constraints extracted from the call:

| Rule | Implication for this proposal |
| --- | --- |
| Maximum budget | Up to R$ 250,000.00 in total. |
| Budget composition | Custeio, capital, and/or at most one scholarship. |
| Scholarship modalities | At most one IC, ITI, or AT scholarship for the whole project. |
| Scholarship duration | Up to 36 months and never beyond the project term. |
| PDJ/PDS scholarships | Not allowed in Faixa C. |
| Coordinator scholarship | The coordinator cannot assign any scholarship modality to himself in Faixa C. |
| Project term | Initial term limited to 36 months. |

## Eligible budget items

The form follows the CNPq budget screen fields shown by the project owner.

| Rubrica | Item de dispendio | Value field | Detail field | Justification field | Notes |
| --- | --- | --- | --- | --- | --- |
| Custeio | Despesas acessorias com importacao | Required | Pt and En | Pt and En | Use only when importation is directly linked to project execution. |
| Custeio | Diarias (Total) | Required | Pt and En | Not required in CNPq screen | Must follow CNPq daily allowance rules. |
| Custeio | Material de consumo | Required | Pt and En | Pt and En | Chemicals, sample preparation inputs, cryogens, lab supplies, pressure-cell consumables, and similar items. |
| Custeio | Passagens (Total) | Required | Pt and En | Not required in CNPq screen | Travel for measurements, collaboration, facility access, or project activities. |
| Custeio | Servicos de Terceiros (Total) | Required | Not required in CNPq screen | Not required in CNPq screen | Eventual services by individual or company, without employment relationship. |
| Capital | Equipamentos e Material permanente | Required | Pt and En | Pt and En | Equipment or permanent material to be incorporated into the executing ICT's patrimony. |
| Capital | Material bibliografico (Total) | Required | Not required in CNPq screen | Not required in CNPq screen | Use only if needed and justified as project support. |
| Bolsa | IC, ITI, or AT | Required if requested | Modality, duration, quantity, unit value, total value | Justification | At most one scholarship in the whole Faixa C project. |

## Non-eligible or restricted expenses

The call forbids or restricts the following budget items. They should not be
requested in the member response form unless the call explicitly allows the
specific case and the justification is strong.

| Restriction | Practical instruction |
| --- | --- |
| Certificates, decoration, receptions, food, shows, or artistic events | Do not request. |
| Routine institutional expenses such as electricity, water, and phone | Do not request. |
| Mail and reprography | Avoid; only possible if directly linked to project execution. |
| Administration or management fees | Do not request. |
| Civil works | Do not request, except justified installation/adaptation strictly needed for equipment operation. |
| Purchase of motor vehicles | Do not request. |
| Salaries, salary supplements, or advantages for public-institution staff | Do not request. |
| Third-party services paid to active public agents | Do not request. |
| Vehicle rental and fuel | Possible only if explicitly described and justified by project activities. |

## Budget collection template

Budget values are not final in this document. They become proposal inputs only
after member response, review, and project-owner acceptance.

| Budget ID | Contributor/person | Institution/subgroup | Linked task/layer | Rubrica CNPq | Item de dispendio | Estimated value | Detailing Pt/En | Justification Pt/En | Priority | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `BUD-0001` | Pending | Pending | `MT-01` | Custeio | Material de consumo | Pending | Pending | Pending | Pending | Open |
| `BUD-0002` | Pending | Pending | `MT-02` | Custeio | Diarias or passagens | Pending | Pending | Pending if required | Pending | Open |
| `BUD-0003` | Pending | Pending | `MT-02`/`MT-05` | Custeio | Servicos de Terceiros | Pending | Not required in CNPq screen | Not required in CNPq screen | Pending | Open |
| `BUD-0004` | Pending | Pending | `MT-01`/`MT-05` | Capital | Equipamentos e Material permanente | Pending | Pending | Pending | Pending | Open |
| `BUD-0005` | Pending | Pending | `MT-03`/`MT-04` | Custeio or Capital | Computing-related eligible item | Pending | Pending where required | Pending where required | Pending | Open |
| `BUD-0006` | Pending | Pending | `SL-01` | Bolsa | IC, ITI, or AT | Pending | Modality/duration/quantity/unit value/total value | Pending | Pending | Open |

## Allocation principle

The final budget should be assembled as one project budget for Faixa C. Member
inputs will be used as a demand map, not as automatic allocations. A practical
priority order is:

1. items essential for execution of the five scientific axes;
2. items serving multiple axes or multiple institutions;
3. items needed to secure access to measurements, pressure routes, sample
   preparation, characterization, computation, or training;
4. lower-cost items that remove clear execution bottlenecks;
5. optional or desirable items, only if they fit within the R$ 250,000.00 cap.

## Access and feasibility checklist

| Check ID | Item | Related task/layer | Current status | Needed input |
| --- | --- | --- | --- | --- |
| `AF-01` | Sample families and availability | `MT-01`, `SL-01A` | Pending | Confirm feasible metal-complex families, source, preparation route, and expected availability. |
| `AF-02` | Structural characterization route | `MT-01`, `SL-01A` | Pending | Confirm X-ray diffraction and structure-solving route, wording, and constraints. |
| `AF-03` | Pressure-linked measurements | `MT-02`, `SL-01B` | Pending | Confirm magnetization, susceptibility, neutron, and pressure feasibility. |
| `AF-04` | DFT and pressure-structure-`J` model | `MT-02`, `SL-01D` | Pending | Confirm model family, pressure points, structural descriptors, and computational needs. |
| `AF-05` | Quantum-cycle and battery models | `MT-03`, `SL-01E` | Pending | Confirm target cycles, battery protocols, and whether the perturbative first-law approach will be used. |
| `AF-06` | Quantum-resource metrics | `MT-04` | Pending | Confirm core metrics and relation to observables or performance. |
| `AF-07` | Training and early-career participation | `SL-01F` | Pending | Confirm whether training context should be included in the internal summary and later project. |
| `AF-08` | Public wording for infrastructure and collaboration | `SL-01` | Pending | Confirm names, institutional wording, and boundaries before Phase 6. |
| `AF-09` | Barocaloric spin-crossover task feasibility | `MT-05`, `SL-01B`, `SL-01C` | Pending | Confirm UERJ-UFF-ORNL scope, compound families, transition range, pressure route, observables, and budget needs. |

## Comment and adjustment register

| Comment ID | Source member | Affected item | Comment or requested adjustment | Status |
| --- | --- | --- | --- | --- |
| `COM-0001` | Pending | Pending | No member comments recorded yet. | Open |

## Phase 6 readiness gate

Phase 6 can open only when the following conditions are satisfied.

| Gate item | Status |
| --- | --- |
| Internal summary prepared for circulation | Satisfied in this document. |
| Portuguese PDF prepared for external-reader-friendly member circulation | Satisfied in circulation artifact. |
| Electronic member-response form prepared | Satisfied in GitHub Issue Form. |
| Git ingestion workflow prepared for member responses | Satisfied in workflow artifact. |
| Member approval tracker created | Satisfied in this document. |
| Budget collection template created | Satisfied in this document. |
| Access and feasibility checklist created | Satisfied in this document. |
| Summary circulated to all project members | Pending. |
| Approval/comments recorded for project members | Pending. |
| Budget items, values, and justifications collected | Pending. |
| Required adjustments resolved or deferred by project owner | Pending. |
| Project owner accepts Phase 5.5 as complete | Pending. |
| Phase 6 - Master Project remains locked | Satisfied. |

## Next controlled action

Project owner review of the Portuguese proposal-summary PDF and electronic
response form. After review, both can be sent to project members for concise
approval, essential corrections, budget items, and critical feasibility
constraints.
