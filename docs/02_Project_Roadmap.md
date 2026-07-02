# Project Roadmap

## Document control

Objective: Provide the controlled sequence of project phases without advancing
the content before the appropriate phase.

Inputs: Frozen methodology and current project status.

Outputs: Phase roadmap and phase-gating summary.

Dependencies: `docs/01_Methodology.md` and `docs/00_Project_Status.md`.

Completion criteria: The roadmap lists the approved phase sequence and
identifies the active phase.

Version: 5.0

Status: Active

Last update: 2026-07-02

## Roadmap

| Phase | Name | Status | Authoritative document |
| --- | --- | --- | --- |
| 0 | Information Collection | Open throughout the project | `docs/00_Project_Status.md` |
| 1A | People | Baseline accepted; international collaborators added; manual refinements deferred | `docs/phase1/1A_People.md` |
| 1B | Scientific Publications | Automated validation complete; international collaborator CV update added; final manual review deferred | `docs/phase1/1B_Publications.md` |
| 1C | Previous Projects | Initial factual registry complete; international collaborator CV records added; manual refinements deferred | `docs/phase1/1C_PreviousProjects.md` |
| 1D | Infrastructure | Factual registry updated; restricted to institutions represented in Phase 1A | `docs/phase1/1D_Infrastructure.md` |
| 1E | Collaborations | Initial factual registry complete; international collaborator links updated; manual refinements deferred | `docs/phase1/1E_Collaborations.md` |
| 1F | Preliminary Results | Initial factual registry reviewed; international collaborator evidence linked; manual refinements deferred | `docs/phase1/1F_PreliminaryResults.md` |
| 1G | Ideas | Initial idea-seed registry populated; international collaborator evidence linked; manual refinements deferred | `docs/phase1/1G_Ideas.md` |
| 1H | Bibliography | Baseline accepted; manual refinements deferred | `docs/phase1/1H_Bibliography.md` |
| 2 | Team Book | Baseline accepted; manual refinements deferred | `docs/phase2/2_TeamBook.md` |
| 3 | Scientific Atlas | Accepted baseline; manual refinements deferred | `docs/phase3/3_ScientificAtlas.md` |
| 4 | Gap Analysis | Accepted baseline; supports Phase 5 | `docs/phase4/4_GapAnalysis.md` |
| 5 | Project Matrix | Accepted baseline; supports Phase 5.5 | `docs/phase5/5_ProjectMatrix.md` |
| 5.5 | Internal Approval and Budget Collection | Active; Vercel-backed single-page web form and Git-backed CNPq budget collection prepared | `docs/phase5/5_5_InternalApprovalBudget.md` |
| 6 | Master Project | Locked until Phase 5.5 is complete | `docs/phase6/6_MasterProject.md` |
| 7 | CNPq Proposal | Locked until Phase 6 is complete | `docs/phase7/7_CNPqProposal.md` |
| 8 | Final Review | Locked until Phase 7 is complete | `docs/phase8/8_FinalReview.md` |

## Current gate

The repository is in Phase 5.5 - Internal Approval and Budget Collection.

Allowed work now: project-owner review and deployment of the Vercel-backed
single-page web form, collection of concise member approval, contribution axes,
CNPq-formatted budget items, and general comments from the restricted target
respondent list.

Still prohibited: Phase 6 master-project writing, final CNPq proposal text,
consolidated PDF project creation, final budget values or justifications,
final schedule, facility-access commitments, and unapproved participant
responsibility assignments.

Phase 3 was opened on 2026-07-02 after the project owner accepted the Phase 2
baseline. A detailed atlas pass was completed and accepted on 2026-07-02.
Phase 4 - Gap Analysis was then opened, developed in full, refined with
project-owner input, and accepted on 2026-07-02. Phase 5 - Project Matrix was
opened, assessed by the project owner, and developed in full on 2026-07-02.
The project owner accepted the completed Phase 5 matrix on 2026-07-02 and
Phase 5.5 was opened.

Approved later-phase checkpoint: after Phase 5 - Project Matrix and before
Phase 6 - Master Project, Phase 5.5 must circulate a summarized project
proposal to project members, collect approvals/comments, and collect budget
items, values, and justifications in the CNPq Faixa C budget fields.
The current implementation uses a Vercel-backed web form with one visible save
button. The Vercel Function creates a public GitHub issue server-side, and the
repository workflow then ingests the response.

## Phase 2 subsection map

| Subsection | Name | Status | Authoritative document |
| --- | --- | --- | --- |
| 2A | Team Roster | Accepted baseline; factual refinements deferred | `docs/phase2/2A_TeamRoster.md` |
| 2B | Person Profiles | Accepted baseline; factual refinements deferred | `docs/phase2/2B_PersonProfiles.md` |
| 2C | Capability Domains | Accepted baseline; factual refinements deferred | `docs/phase2/2C_CapabilityDomains.md` |
| 2D | Person-Domain Matrix | Accepted baseline; factual refinements deferred | `docs/phase2/2D_PersonDomainMatrix.md` |
| 2E | Collaboration and Infrastructure Map | Accepted baseline; factual refinements deferred | `docs/phase2/2E_CollaborationInfrastructureMap.md` |
| 2F | Evidence Bundles and Review Queue | Accepted baseline; review queue carried into Phase 3 | `docs/phase2/2F_EvidenceBundlesReview.md` |

## Phase 3 detailed atlas map

| Atlas area | Starting evidence route |
| --- | --- |
| Metal complexes, synthesis, structure, and magnetism | `D-01`, `EB-01`, `SA-01` |
| Barocaloric and spin-crossover molecular systems | `D-02`, `EB-02`, `SA-02` |
| Quantum thermodynamics and quantum batteries | `D-03`, `EB-03`, `SA-03` |
| Quantum resources in molecular and material systems | `D-04`, `EB-04`, `SA-04` |
| Magnetocaloric, multicaloric, i-caloric, and intermetallic materials | `D-05`, `EB-05`, `SA-05` |
| High-pressure neutron scattering and pressure-linked characterization | `D-06`, `EB-06`, `SA-06` |
| Single-crystal X-ray diffraction and structural characterization | `D-07`, `EB-07`, `SA-07` |
| Scientific computing and quantum-technology platforms | `D-08`, `EB-08`, `SA-08` |
| Training and early-career capacity context | `D-09`, `EB-09`, `SA-09` |

## Phase 3 developed outputs

| Output class | Count | Location |
| --- | ---: | --- |
| Detailed scientific atlas areas | 9 | `docs/phase3/3_ScientificAtlas.md` |
| Relationship routes | 6 | `docs/phase3/3_ScientificAtlas.md` |
| Preliminary-result coverage rows | 13 | `docs/phase3/3_ScientificAtlas.md` |
| Idea-seed coverage rows | 10 | `docs/phase3/3_ScientificAtlas.md` |
| Bibliography routes | 7 | `docs/phase3/3_ScientificAtlas.md` |
| Infrastructure/collaboration routes | 7 | `docs/phase3/3_ScientificAtlas.md` |
| Terminology notes | 14 | `docs/phase3/3_ScientificAtlas.md` |
| Manual-review carry-over categories | 8 | `docs/phase3/3_ScientificAtlas.md` |

## Phase 4 developed outputs

| Output class | Count | Location |
| --- | ---: | --- |
| Gap records | 15 | `docs/phase4/4_GapAnalysis.md` |
| Atlas-area gap coverage rows | 9 | `docs/phase4/4_GapAnalysis.md` |
| Relationship-route gap coverage rows | 6 | `docs/phase4/4_GapAnalysis.md` |
| Evidence-readiness rows | 15 | `docs/phase4/4_GapAnalysis.md` |
| Controlled handoff groups for Phase 5 | 6 | `docs/phase4/4_GapAnalysis.md` |

## Phase 5 developed outputs

| Output class | Count | Location |
| --- | ---: | --- |
| Initial matrix slots | 6 | `docs/phase5/5_ProjectMatrix.md` |
| Accepted Phase 4 handoff groups carried into Phase 5 | 6 | `docs/phase5/5_ProjectMatrix.md` |
| Matrix-slot disposition rows | 6 | `docs/phase5/5_ProjectMatrix.md` |
| Candidate task rows | 5 | `docs/phase5/5_ProjectMatrix.md` |
| State-of-the-art support rows | 3 | `docs/phase5/5_ProjectMatrix.md` |
| Support and validation layer rows | 6 | `docs/phase5/5_ProjectMatrix.md` |
| Model route rows | 6 | `docs/phase5/5_ProjectMatrix.md` |
| Task relationship rows | 7 | `docs/phase5/5_ProjectMatrix.md` |
| Atlas/gap coverage rows | 7 | `docs/phase5/5_ProjectMatrix.md` |
| Evidence anchor rows | 10 | `docs/phase5/5_ProjectMatrix.md` |
| Capability route rows | 6 | `docs/phase5/5_ProjectMatrix.md` |
| Phase 5.5 validation/review queue rows | 11 | `docs/phase5/5_ProjectMatrix.md` |
| Phase 5.5 handoff package rows | 6 | `docs/phase5/5_ProjectMatrix.md` |
| Phase 5 completion checkpoint rows | 18 | `docs/phase5/5_ProjectMatrix.md` |

## Phase 5.5 opened outputs

| Output class | Count | Location |
| --- | ---: | --- |
| Phase 5 handoff summary rows | 7 | `docs/phase5/5_5_InternalApprovalBudget.md` |
| Internal circulation summary task rows | 5 | `docs/phase5/5_5_InternalApprovalBudget.md` |
| Member approval tracker rows | 16 | `docs/phase5/5_5_InternalApprovalBudget.md` |
| Member response form fields | 5 | `docs/phase5/5_5_InternalApprovalBudget.md`; `.github/ISSUE_TEMPLATE/phase5_5_member_response.yml`; `docs/phase5/5_5_Formulario_Aprovacao_Interna.html` |
| Restricted response dropdown rows | 9 | `docs/phase5/5_5_InternalApprovalBudget.md`; `docs/phase5/5_5_Formulario_Aprovacao_Interna.html` |
| Budget collection template rows | 6 | `docs/phase5/5_5_InternalApprovalBudget.md` |
| CNPq Faixa C budget rule rows | 7 | `docs/phase5/5_5_InternalApprovalBudget.md` |
| Eligible CNPq budget item rows | 8 | `docs/phase5/5_5_InternalApprovalBudget.md` |
| Restricted or non-eligible budget rows | 9 | `docs/phase5/5_5_InternalApprovalBudget.md` |
| Access and feasibility checklist rows | 9 | `docs/phase5/5_5_InternalApprovalBudget.md` |
| Phase 6 readiness gate rows | 13 | `docs/phase5/5_5_InternalApprovalBudget.md` |
| Portuguese circulation artifacts prepared | 3 | `docs/phase5/5_5_Proposta_Resumo_Aprovacao_Interna.md`; `docs/phase5/5_5_Formulario_Aprovacao_Interna.html`; `output/pdf/Proposta_Universal_CNPq_2026_Aprovacao_Interna.pdf` |
| Electronic response forms | 2 | `docs/phase5/5_5_Formulario_Aprovacao_Interna.html`; `.github/ISSUE_TEMPLATE/phase5_5_member_response.yml` |
| Vercel API functions | 1 | `api/phase55-response.js` |
| Vercel routing configs | 1 | `vercel.json` |
| GitHub Pages support files | 1 | `docs/.nojekyll` |
| Git ingestion workflow | 1 | `.github/workflows/ingest_phase55_member_response.yml` |
| Response data directory | 1 | `data/phase5_5_member_responses/` |

## Final writing constraints

- Phase 6 - Master Project can start only after Phase 5.5 is complete.
- Phase 7 - CNPq Proposal must generate CNPq form blocks derived from the
  Master Project.
- CNPq form blocks should stay comfortably below maximum character limits; the
  operational target is about two thirds of each block limit.
- The final package must also include a consolidated PDF project document with
  project elements, team, budget, schedule, and other complete project
  information.
