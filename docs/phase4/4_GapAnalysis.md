# 4 Gap Analysis

## Document control

Objective: Identify scientific, evidence, boundary, and readiness gaps after
the Scientific Atlas has been accepted.

Inputs: Accepted Scientific Atlas, Team Book, Phase 1 knowledge-base records,
Phase 2 evidence bundles, and current project-owner instructions.

Outputs: Reusable gap analysis with stable local gap records, atlas-area
coverage, relationship-route coverage, evidence-readiness notes, review
carry-over, and a controlled handoff to Phase 5 - Project Matrix.

Dependencies: Project-owner acceptance of Phase 3.

Completion criteria: Gaps are identified from prior documents and documented
with evidence, without creating final objectives, priorities, work packages,
responsibility assignments, budget items, schedule, facility-access
commitments, or CNPq proposal text.

Version: 1.1

Status: Active; full gap-analysis pass completed; project-owner acceptance
pending

Last update: 2026-07-02

## Scope guard

This document is the Gap Analysis. It can identify and classify gaps visible
from the accepted Scientific Atlas.

Allowed work in Phase 4:

- identify gaps between atlas areas, evidence records, relationship routes,
  bibliography routes, infrastructure context, and collaboration context;
- distinguish scientific gaps from documentation, validation, language, and
  boundary gaps;
- preserve evidence anchors and review notes for later use;
- prepare neutral gap records that can support Phase 5 - Project Matrix.

Still prohibited:

- do not select final project objectives;
- do not rank gaps as final priorities;
- do not assign people, institutions, or infrastructure to responsibilities;
- do not create work packages;
- do not create a schedule, budget, or procurement plan;
- do not create facility-use commitments;
- do not write CNPq proposal text.

## Phase opening and development note

Phase 4 was opened on 2026-07-02 after the project owner accepted the detailed
Phase 3 Scientific Atlas baseline.

On 2026-07-02 the project owner asked to develop Phase 4 completely in one
pass. This document records that detailed pass. It does not open Phase 5
automatically.

## Gap-analysis method

Gap records use local `GAP-*` codes. These codes do not replace stable Phase 1
or Phase 3 IDs.

Gap types:

| Gap type | Meaning |
| --- | --- |
| Scientific integration | A scientific connection is visible but not yet analysed enough for project design. |
| Evidence validation | A record needs manual verification, source selection, figure/table choice, or status checking. |
| Boundary definition | A theme, collaboration, infrastructure route, or terminology boundary needs clarification. |
| Readiness for Phase 5 | A later decision is needed before creating a project matrix. |

Gap handling rule: Phase 4 can describe the gap and its evidence basis. Phase
5 decides how, whether, and where a gap enters the Project Matrix.

## Gap registry

| Gap ID | Gap label | Gap type | Atlas anchors | Evidence anchors | Phase 4 statement |
| --- | --- | --- | --- | --- | --- |
| `GAP-01` | Metal-complex bridge across caloric and quantum themes | Scientific integration | `SA-01`, `SA-03`, `SA-05`, `RR-03`, `RR-05` | `RES-0001`, `RES-0002`, `RES-0004`, `RES-0011`, `IDEA-0001`, `IDEA-0006` | The evidence shows a bridge between metal complexes, caloric materials, and quantum energy-storage/thermodynamics, but the shared scientific variables are not yet analysed. |
| `GAP-02` | Spin-crossover/barocaloric evidence separation | Evidence validation | `SA-02`, `SA-06`, `RR-02`, `RR-04` | `RES-0006`, `RES-0007`, `PUB-0003`, `PUB-0100`, `PUB-0101`, `IDEA-0004`, `IDEA-0009` | Published, manuscript, and ongoing ORNL-linked evidence are grouped in the atlas and need separation before proposal-level use. |
| `GAP-03` | Pressure as a common control variable | Scientific integration | `SA-02`, `SA-04`, `SA-06`, `RR-02` | `RES-0005`, `RES-0007`, `PUB-0006`, `PUB-0083`, `PUB-0100`, `INF-0017` | Pressure connects barocaloric, spin-crossover, quantum-resource, and neutron-scattering evidence, but a common variable map is not yet defined. |
| `GAP-04` | Quantum thermodynamics versus quantum battery boundary | Boundary definition | `SA-03`, `SA-08`, `RR-03` | `RES-0001`, `RES-0002`, `RES-0003`, `RES-0004`, `IDEA-0002`, `IDEA-0010` | Quantum thermodynamics, quantum heat engines, quantum batteries, and VQA simulation are linked but not yet separated into later project-design categories. |
| `GAP-05` | Quantum-resource relation to energy-storage and caloric themes | Scientific integration | `SA-03`, `SA-04`, `SA-06`, `RR-02`, `RR-03` | `RES-0005`, `RES-0007`, `PUB-0001`, `PUB-0057`, `PUB-0083`, `PUB-0093`, `IDEA-0003` | Quantum coherence, discord, entanglement, and correlations are visible, but their relation to energy-storage or caloric evidence remains an analysis gap. |
| `GAP-06` | Broad caloric and functional-material scope | Boundary definition | `SA-05`, `RR-04` | `RES-0008`, `RES-0009`, `RES-0012`, `RES-0013`, `IDEA-0005`, `IDEA-0006` | Magnetocaloric, multicaloric, i-caloric, Heusler, all-d-metal, intermetallic, polymer, graphene, and quantum-material records are too broad for direct Phase 5 use without boundary decisions. |
| `GAP-07` | Review/outlook translation to current-state map | Evidence validation | `SA-01`, `SA-05`, `RR-04` | `RES-0011`, `RES-0013`, `BIB-0023`, `BIB-0067`, `IDEA-0006` | Review/outlook articles are visible but have not yet been translated into a controlled current-state map for Phase 5. |
| `GAP-08` | Synthesis-structure-property loop granularity | Scientific integration | `SA-01`, `SA-02`, `SA-07`, `SA-08`, `RR-01`, `RR-05` | `RES-0010`, `RES-0006`, `RES-0004`, `IDEA-0007`, `INF-0018`, `COL-0010` | The atlas shows synthesis, structure, magnetic/property evidence, and computation, but not a selected compound-family or measurement-model loop. |
| `GAP-09` | Infrastructure context versus access plan | Boundary definition | `SA-06`, `SA-07`, `SA-08`, `RR-02`, `RR-05` | `INF-0001`, `INF-0003`, `INF-0004`, `INF-0007`, `INF-0008`, `INF-0010`, `INF-0017`, `INF-0018` | Infrastructure is recorded as factual context, but access, availability, and use commitments are not validated and should not be inferred in Phase 4. |
| `GAP-10` | External collaboration and team boundary | Boundary definition | All `SA-*`, `RR-06` | `COL-0006`, `COL-0008`, `COL-0009`, `COL-0011`, `COL-0012`, `COL-0013`, boundary parts of `COL-0010` and `COL-0014` | External collaborators and networks are useful context, but team membership boundaries remain controlled by Phase 1A. |
| `GAP-11` | Bibliography selection for later project argument | Evidence validation | All `SA-*` | `BIB-0001`-`BIB-0107` | The bibliography map is broad and evidence-linked, but no final proposal bibliography or citation set has been selected. |
| `GAP-12` | Figure, table, dataset, and source-object selection | Evidence validation | All `SA-*` | Phase 1F manual-review queue; `REV-08` | The atlas uses publication and record anchors, but proposal-ready figures, tables, datasets, or source objects have not been selected. |
| `GAP-13` | Terminology and language consistency | Boundary definition | All `SA-*` | `TERM-01`-`TERM-14`, `REV-07` | The atlas is in English and preserves controlled terms, but downstream language choice and Portuguese/Brazilian call wording remain open. |
| `GAP-14` | Training and early-career context | Readiness for Phase 5 | `SA-09`, `RR-06` | Phase 1A records, `PRJ-0024`, `PRJ-0025`, `PRJ-0026` | Training and early-career participation is visible as capacity context, but it is not yet linked to later project structure or activities. |
| `GAP-15` | Manual-status and name-verification items | Evidence validation | `SA-01`, `SA-02`, `SA-04`, `SA-06`, `SA-07` | `PUB-0001`, `PUB-0002`, `PUB-0003`, `PUB-0010`, `PUB-0100`, `PUB-0101`, `P-0015`, `P-0016` | Manuscript/status records, DOI checks, preferred names, and infrastructure wording need final manual verification before public-facing use. |

## Detailed gap records

### GAP-01 - Metal-complex bridge across caloric and quantum themes

Scientific basis: The atlas links metal complexes to quantum thermodynamics,
quantum batteries, caloric effects, and metal-complex reviews through `SA-01`,
`SA-03`, `SA-05`, `RR-03`, and `RR-05`.

Evidence basis: `RES-0001`, `RES-0002`, `RES-0004`, `RES-0011`,
`IDEA-0001`, and `IDEA-0006`.

Gap statement: The bridge is visible, but the common scientific variables have
not yet been analysed. Possible variables include structure, spin state,
magnetic coupling, thermodynamic response, work extraction, and caloric
response. Phase 4 does not choose which variables become central.

Handoff question for Phase 5: Which bridge, if any, should be represented in
the Project Matrix?

### GAP-02 - Spin-crossover/barocaloric evidence separation

Scientific basis: `SA-02` and `SA-06` combine spin-crossover, barocaloric,
pressure-linked, manuscript, published, and ongoing ORNL-linked evidence.

Evidence basis: `RES-0006`, `RES-0007`, `PUB-0003`, `PUB-0100`,
`PUB-0101`, `IDEA-0004`, and `IDEA-0009`.

Gap statement: The evidence needs separation by publication status, scientific
object type, source type, and maturity. This is an evidence-readiness gap, not
a scientific weakness claim.

Handoff question for Phase 5: Which evidence subset is mature enough to support
project-matrix construction?

### GAP-03 - Pressure as a common control variable

Scientific basis: Pressure appears in barocaloric behavior, spin crossover,
quantum-resource evidence, and high-pressure neutron scattering.

Evidence basis: `RES-0005`, `RES-0007`, `PUB-0006`, `PUB-0083`,
`PUB-0100`, and `INF-0017`.

Gap statement: Pressure is visible as a common control variable, but the atlas
does not yet define whether it is a theoretical variable, experimental
condition, structural perturbation, thermodynamic field, or facility-context
marker in each record.

Handoff question for Phase 5: Should pressure be treated as an organizing
scientific bridge, a characterization context, both, or neither?

### GAP-04 - Quantum thermodynamics versus quantum battery boundary

Scientific basis: `SA-03` includes quantum heat engines, quantum
thermodynamics, quantum batteries, work extraction, and VQA simulation.

Evidence basis: `RES-0001`, `RES-0002`, `RES-0003`, `RES-0004`,
`IDEA-0002`, and `IDEA-0010`.

Gap statement: These records are thematically connected, but the boundary
between quantum thermodynamics, battery performance, and computational method
is not yet fixed.

Handoff question for Phase 5: Which quantum subthemes should remain grouped,
and which require separate matrix entries?

### GAP-05 - Quantum-resource relation to energy-storage and caloric themes

Scientific basis: `SA-04` links quantum resources to molecular, metal-based,
pressure-linked, and computational contexts.

Evidence basis: `RES-0005`, `RES-0007`, `PUB-0001`, `PUB-0057`,
`PUB-0083`, `PUB-0093`, and `IDEA-0003`.

Gap statement: Quantum resources are visible, but their later relation to
energy-storage metrics, caloric response, external controls, or molecular
magnetism is not yet analysed.

Handoff question for Phase 5: Should quantum resources be a connecting concept,
a separate conceptual layer, or a supporting evidence route?

### GAP-06 - Broad caloric and functional-material scope

Scientific basis: `SA-05` is the broadest atlas area and includes
magnetocaloric, multicaloric, i-caloric, Heusler, all-d-metal, intermetallic,
polymer, graphene, rare-earth, high-entropy, and quantum-material outlook
records.

Evidence basis: `RES-0008`, `RES-0009`, `RES-0012`, `RES-0013`,
`IDEA-0005`, and `IDEA-0006`.

Gap statement: The area is evidence-rich but too broad to pass directly into
project design without boundary decisions.

Handoff question for Phase 5: Which parts of `SA-05` are core, contextual, or
outside the later matrix?

### GAP-07 - Review/outlook translation to current-state map

Scientific basis: The Coordination Chemistry Reviews article and quantum
materials caloric outlook are major synthesis records.

Evidence basis: `RES-0011`, `RES-0013`, `BIB-0023`, `BIB-0067`, and
`IDEA-0006`.

Gap statement: Review/outlook records can help frame the scientific landscape,
but Phase 4 has not converted them into a current-state argument or proposal
context.

Handoff question for Phase 5: Which review/outlook claims should be used only
as background, and which should structure matrix decisions?

### GAP-08 - Synthesis-structure-property loop granularity

Scientific basis: `RR-05` links synthesis, structural characterization,
magnetic/property evidence, VQA, modeling, and computation.

Evidence basis: `RES-0010`, `RES-0006`, `RES-0004`, `IDEA-0007`,
`INF-0018`, and `COL-0010`.

Gap statement: The loop is visible, but the atlas does not define a specific
compound-family, measurement, model, or response route.

Handoff question for Phase 5: Should the synthesis-structure-property loop be
represented as a matrix bridge or remain supporting context?

### GAP-09 - Infrastructure context versus access plan

Scientific basis: The atlas records active infrastructure across UFOB, SENAI
CIMATEC, UFF, UERJ, ORNL, and Universidade de Aveiro.

Evidence basis: `INF-0001`, `INF-0003`, `INF-0004`, `INF-0007`,
`INF-0008`, `INF-0010`, `INF-0017`, and `INF-0018`.

Gap statement: Infrastructure is documented as factual context, but access
conditions, scheduling, cost, and commitments are not validated.

Handoff question for Phase 5: Which infrastructure routes need later
confirmation before they can support matrix entries?

### GAP-10 - External collaboration and team boundary

Scientific basis: Several collaborations are external context while Antonio dos
Santos and Paula Brandão are Phase 1A participants.

Evidence basis: `COL-0006`, `COL-0008`, `COL-0009`, `COL-0011`,
`COL-0012`, `COL-0013`, and boundary portions of `COL-0010` and `COL-0014`.

Gap statement: Collaboration evidence is valuable, but external context must
not be treated as project membership or responsibility.

Handoff question for Phase 5: Which collaboration contexts can be cited as
supporting context without assigning roles?

### GAP-11 - Bibliography selection for later project argument

Scientific basis: The bibliography map covers all 107 Phase 1B publication
records and links them to preliminary results and idea seeds.

Evidence basis: `BIB-0001` through `BIB-0107`.

Gap statement: The bibliography is comprehensive as a map, but no proposal
bibliography has been selected and no citation hierarchy has been created.

Handoff question for Phase 5: Which references should become core evidence,
background evidence, or deferred manual-review items?

### GAP-12 - Figure, table, dataset, and source-object selection

Scientific basis: Phase 1F records outputs and publication clusters, but no
standalone proposal figure, table, dataset, or presentation object has been
selected.

Evidence basis: Phase 1F manual-review queue and `REV-08`.

Gap statement: Later proposal writing may need figures or tables, but Phase 4
does not select or create them.

Handoff question for Phase 5: Which evidence objects should be candidates for
later visual or tabular project support?

### GAP-13 - Terminology and language consistency

Scientific basis: The atlas currently uses English controlled terms for
scientific areas, while the final CNPq context will require Portuguese form
blocks and possibly a consolidated PDF.

Evidence basis: `TERM-01` through `TERM-14` and `REV-07`.

Gap statement: Scientific terminology is controlled in the atlas, but later
Portuguese/Brazilian call wording has not been harmonized.

Handoff question for Phase 5: Which terms require fixed bilingual labels before
project-matrix and proposal drafting?

### GAP-14 - Training and early-career context

Scientific basis: `SA-09` records training and early-career capacity context
without turning it into activities.

Evidence basis: Phase 1A records, `PRJ-0024`, `PRJ-0025`, and `PRJ-0026`.

Gap statement: Training capacity is visible, but there is no later structure
yet connecting it to project design.

Handoff question for Phase 5: Should training capacity appear in the Project
Matrix, and if so, only as a neutral support dimension until later phases?

### GAP-15 - Manual-status and name-verification items

Scientific basis: The atlas preserves manuscript, preprint, DOI, name, and
wording review items.

Evidence basis: `PUB-0001`, `PUB-0002`, `PUB-0003`, `PUB-0010`,
`PUB-0100`, `PUB-0101`, `P-0015`, and `P-0016`.

Gap statement: Several records are usable as internal evidence map entries but
need manual verification before public-facing proposal use.

Handoff question for Phase 5: Which records can enter matrix construction
without final manual correction, and which must stay flagged?

## Atlas-area gap coverage

| Atlas area | Main gaps | Coverage note |
| --- | --- | --- |
| `SA-01` Metal complexes, synthesis, structure, and magnetism | `GAP-01`, `GAP-07`, `GAP-08`, `GAP-11`, `GAP-15` | Strong evidence base; bridge and evidence-selection questions remain. |
| `SA-02` Barocaloric and spin-crossover molecular systems | `GAP-02`, `GAP-03`, `GAP-08`, `GAP-12`, `GAP-15` | Evidence-rich area; publication/status separation and pressure mapping remain. |
| `SA-03` Quantum thermodynamics and quantum batteries | `GAP-01`, `GAP-04`, `GAP-05`, `GAP-11`, `GAP-13` | Conceptual boundaries among quantum subthemes remain open. |
| `SA-04` Quantum resources in molecular and material systems | `GAP-03`, `GAP-05`, `GAP-10`, `GAP-15` | Needs relation to energy-storage, caloric, and pressure contexts clarified. |
| `SA-05` Magnetocaloric, multicaloric, i-caloric, and intermetallic materials | `GAP-01`, `GAP-06`, `GAP-07`, `GAP-11`, `GAP-12` | Broadest area; later boundary decisions are essential. |
| `SA-06` High-pressure neutron scattering and pressure-linked characterization | `GAP-02`, `GAP-03`, `GAP-09`, `GAP-15` | ORNL/SNAP context is factual but not an access plan. |
| `SA-07` Single-crystal X-ray diffraction and structural characterization | `GAP-08`, `GAP-09`, `GAP-10`, `GAP-15` | Structural-characterization route is strong but must remain source-bounded. |
| `SA-08` Scientific computing and quantum-technology platforms | `GAP-04`, `GAP-05`, `GAP-08`, `GAP-09`, `GAP-13` | Platform and method language needs careful separation from deliverables. |
| `SA-09` Training and early-career capacity context | `GAP-10`, `GAP-12`, `GAP-14` | Capacity context remains unassigned until later controlled phases. |

## Relationship-route gap coverage

| Relationship route | Main gaps | Coverage note |
| --- | --- | --- |
| `RR-01` Structure-property links in molecular materials | `GAP-08`, `GAP-15` | Strong relationship route; compound-family granularity remains open. |
| `RR-02` Pressure as an external control variable | `GAP-02`, `GAP-03`, `GAP-09` | Needs pressure taxonomy and access-context separation. |
| `RR-03` Quantum energy-storage and thermodynamic performance | `GAP-01`, `GAP-04`, `GAP-05` | Needs boundary definition among quantum subthemes. |
| `RR-04` Caloric and multicaloric functional-material landscape | `GAP-06`, `GAP-07`, `GAP-11` | Needs broad-scope control before Phase 5. |
| `RR-05` Synthesis-characterization-theory loop | `GAP-01`, `GAP-08`, `GAP-09`, `GAP-13` | Needs granularity and terminology decisions. |
| `RR-06` Team-capacity support for scientific axes | `GAP-10`, `GAP-14` | Must not become responsibility assignment in Phase 4. |

## Evidence-readiness matrix

| Gap ID | Evidence visibility | Manual review need | Phase 5 readiness note |
| --- | --- | --- | --- |
| `GAP-01` | High | Medium | Needs bridge definition before matrix use. |
| `GAP-02` | High | High | Needs publication/status separation before matrix use. |
| `GAP-03` | Medium | Medium | Needs pressure taxonomy before matrix use. |
| `GAP-04` | High | Medium | Needs quantum-subtheme boundary decision. |
| `GAP-05` | Medium | Medium | Needs conceptual relation decision. |
| `GAP-06` | High | High | Needs scope narrowing or contextualization. |
| `GAP-07` | Medium | Medium | Needs review/outlook use rule. |
| `GAP-08` | High | Medium | Needs granularity decision. |
| `GAP-09` | High | High | Needs infrastructure wording and access-boundary care. |
| `GAP-10` | High | High | Needs collaboration/team boundary preservation. |
| `GAP-11` | High | High | Needs bibliography selection before proposal writing. |
| `GAP-12` | Medium | High | Needs source-object selection later. |
| `GAP-13` | Medium | Medium | Needs terminology/language decision before public text. |
| `GAP-14` | Medium | Medium | Needs later treatment as capacity context. |
| `GAP-15` | High | High | Needs final manual verification before public-facing use. |

Readiness labels describe how much evidence is visible in the repository, not
scientific merit, priority, or final proposal relevance.

## Controlled handoff to Phase 5

Phase 5 - Project Matrix can use the following neutral handoff groups after
the project owner accepts this Phase 4 baseline.

| Handoff group | Gap IDs | Phase 5 question |
| --- | --- | --- |
| Cross-theme scientific bridges | `GAP-01`, `GAP-03`, `GAP-05`, `GAP-08` | Which bridges should enter the Project Matrix, and at what granularity? |
| Area-boundary decisions | `GAP-04`, `GAP-06`, `GAP-07` | Which themes remain grouped, split, contextual, or deferred? |
| Evidence readiness and validation | `GAP-02`, `GAP-11`, `GAP-12`, `GAP-15` | Which evidence records can support matrix construction, and which remain flagged? |
| Infrastructure and collaboration boundaries | `GAP-09`, `GAP-10` | Which infrastructure and collaboration contexts can be referenced without creating commitments or roles? |
| Language and terminology | `GAP-13` | Which labels must be stabilized before later public-facing text? |
| Capacity and training context | `GAP-14` | How should training and early-career capacity be represented without assigning responsibilities prematurely? |

## Phase 4 completion checkpoint

| Checkpoint item | Status |
| --- | --- |
| Phase 3 detailed atlas accepted by project owner | Satisfied on 2026-07-02. |
| Gap Analysis opened | Satisfied in this document. |
| Full Phase 4 development requested by project owner | Satisfied on 2026-07-02. |
| Stable Phase 1, Phase 2, and Phase 3 IDs preserved | Satisfied; no IDs are renumbered here. |
| Gap registry created | Satisfied for 15 gap records. |
| Atlas-area coverage created | Satisfied for 9 atlas areas. |
| Relationship-route coverage created | Satisfied for 6 relationship routes. |
| Evidence-readiness matrix created | Satisfied for 15 gap records. |
| Controlled handoff to Phase 5 created | Satisfied for 6 neutral handoff groups. |
| Phase 5 Project Matrix remains locked | Satisfied. |
| No final objectives, priorities, responsibilities, work packages, budget, schedule, facility-access commitments, or CNPq proposal text created | Satisfied in this document. |

## Next controlled action

Project owner review and acceptance of this detailed Phase 4 gap-analysis
baseline. If accepted, the next controlled step is to open Phase 5 - Project
Matrix.
