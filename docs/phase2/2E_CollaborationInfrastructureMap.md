# 2E Collaboration and Infrastructure Map

## Document control

Objective: Cross-index Phase 2 collaboration and infrastructure threads using
only stable Phase 1 evidence.

Inputs: `docs/phase1/1C_PreviousProjects.md`,
`docs/phase1/1D_Infrastructure.md`,
`docs/phase1/1E_Collaborations.md`,
`docs/phase1/1F_PreliminaryResults.md`,
`docs/phase2/2A_TeamRoster.md`,
`docs/phase2/2C_CapabilityDomains.md`,
`docs/phase2/2D_PersonDomainMatrix.md`, and
`docs/phase2/2_TeamBook.md`.

Outputs: One collaboration-infrastructure navigation map linked to people,
institutions, active infrastructure IDs, collaboration IDs, capability-domain
codes, and evidence records.

Dependencies: Phase 1A team membership, Phase 1C project IDs, Phase 1D active
infrastructure IDs, Phase 1E collaboration IDs, Phase 1F preliminary-result
IDs, and Phase 2C-2D capability-domain mappings.

Completion criteria: Phase 1A institutions, active infrastructure records, and
collaboration contexts are mapped without creating institutional roles, access
plans, facility-use commitments, responsibility assignments, work packages, or
proposal text.

Version: 1.1

Status: Active; collaboration-infrastructure map refined

Last update: 2026-07-01

## Scope guard

This subsection records collaboration and infrastructure context only. It does
not create project execution plans, facility-use commitments, institutional
roles, responsibilities, work packages, scientific objectives, gap analysis, or
proposal text.

Active infrastructure remains restricted to resources hosted by institutions
represented in Phase 1A: UERJ, UFF, UFOB, Universidade SENAI CIMATEC, ORNL, and
Universidade de Aveiro.

LAFMAT partner institutions, remaining external collaborators, and external
facilities remain collaboration context unless Phase 1A is explicitly updated
later.

## Source processing summary

- Phase 1A institutions represented: 6.
- Active Phase 1D infrastructure records represented: 10.
- Retired Phase 1D infrastructure IDs excluded from active use: 8.
- Phase 1E collaboration records represented: 14.
- Integrated collaboration-infrastructure threads refined here: 8.
- External or boundary-context collaboration rows isolated here: 8.
- Phase 2C capability-domain codes reused for navigation: 9.

## Mapping rules

| Rule | Application in 2E |
| --- | --- |
| Phase 1A controls team membership | A collaboration record does not make an external person or institution part of the project team. |
| Phase 1D controls active infrastructure | Only `INF-0001`, `INF-0002`, `INF-0003`, `INF-0004`, `INF-0007`, `INF-0008`, `INF-0010`, `INF-0016`, `INF-0017`, and `INF-0018` are active here. |
| Retired IDs stay retired | `INF-0005`, `INF-0006`, `INF-0009`, `INF-0011`, `INF-0012`, `INF-0013`, `INF-0014`, and `INF-0015` are not used. |
| Collaboration context is preserved | External collaborators and networks remain source-backed context, not team or infrastructure commitments. |
| Domain codes are navigational | `D-01` through `D-09` refer to Phase 2D capability-domain codes and do not rank themes. |

## Institution-infrastructure map

| Phase 1A institution | Phase 1A people | Active infrastructure | Main collaboration context | Visible domain codes |
| --- | --- | --- | --- | --- |
| UERJ | `P-0001`, `P-0002`, `P-0004`, `P-0005`, `P-0007`, `P-0008`, `P-0010` | `INF-0010` | `COL-0001`, `COL-0002`, `COL-0014`; ORNL link through `COL-0007` | `D-01`, `D-02`, `D-04`, `D-05`, `D-06`, `D-07`, `D-09` |
| UFF | `P-0003`, `P-0006` | `INF-0007`, `INF-0008`, `INF-0016` | `COL-0002`, `COL-0003`, `COL-0006`, `COL-0007`, `COL-0008`, `COL-0009`, `COL-0010`, `COL-0011`, `COL-0012`, `COL-0013` | `D-01`, `D-02`, `D-03`, `D-04`, `D-05`, `D-06`, `D-07`, `D-08` |
| UFOB | `P-0009`, `P-0011`, `P-0013`, `P-0014` | `INF-0001`, `INF-0002` | `COL-0003`, `COL-0004`, `COL-0006`, `COL-0008`, `COL-0009`, `COL-0010`, `COL-0011`, `COL-0013` | `D-01`, `D-03`, `D-04`, `D-05`, `D-07`, `D-08`, `D-09` |
| Universidade SENAI CIMATEC | `P-0012` | `INF-0003`, `INF-0004` | `COL-0004`, `COL-0005` | `D-03`, `D-04`, `D-08` |
| ORNL | `P-0015` | `INF-0017` | `COL-0007`; internal UERJ-UFF context in `COL-0002` | `D-01`, `D-02`, `D-04`, `D-05`, `D-06` |
| Universidade de Aveiro | `P-0016` | `INF-0018` | `COL-0010` | `D-01`, `D-02`, `D-07` |

## Collaboration status map

| Collaboration ID | Status class in 2E | Phase 1A people | Active infrastructure links | Boundary note |
| --- | --- | --- | --- | --- |
| `COL-0001` | Internal Phase 1A-institution collaboration with external names in source records | `P-0001`, `P-0002`, `P-0004`, `P-0005`, `P-0007`, `P-0010` | `INF-0010` | External names in source project teams remain non-team unless Phase 1A changes. |
| `COL-0002` | Internal UERJ-UFF collaboration connected to ORNL context | `P-0008`, `P-0007`, `P-0003` | `INF-0017` | ORNL/Antonio context is separately tracked in `COL-0007`. |
| `COL-0003` | Internal UFOB-UFF collaboration | `P-0009`, `P-0003`, `P-0006`, `P-0014` | `INF-0001`, `INF-0002` | Additional names in source records require manual validation before canonical use. |
| `COL-0004` | Internal UFOB-SENAI CIMATEC collaboration | `P-0009`, `P-0012` | `INF-0003`, `INF-0004` | LAQCC/Kuatomu is infrastructure context, not a separate team entity. |
| `COL-0005` | SENAI CIMATEC/QuIIN collaboration context | `P-0012` | `INF-0004` | Non-Phase 1A QuIIN personnel remain source-listed collaborators only. |
| `COL-0006` | External LAFMAT network context | `P-0003`, `P-0009`, `P-0006` | None in the collaboration record | LAFMAT partner institutions do not enter the project team. |
| `COL-0007` | International Phase 1A collaborator and ORNL facility context | `P-0008`, `P-0007`, `P-0003`, `P-0015` | `INF-0017` | Broader ORNL infrastructure is not imported beyond source-backed `INF-0017`. |
| `COL-0008` | External PUC-Rio metal-complex production context | `P-0009`, `P-0003` | None | PUC-Rio and Livia Escobar remain external context. |
| `COL-0009` | External UFRJ magnetic-measurement context | `P-0009`, `P-0003`, `P-0006` | None | UFRJ and Luis Ghivelder remain external context. |
| `COL-0010` | International Phase 1A collaborator with remaining external collaborator context | `P-0003`, `P-0009`, `P-0016` | `INF-0018` | Paula Brandão is Phase 1A; Zin Lin remains external context. |
| `COL-0011` | External Shenyang University of Technology context | `P-0009`, `P-0003` | None | Fa-Nian Shi and Shenyang University of Technology remain external context. |
| `COL-0012` | External Universidade de Sevilla context | `P-0006`, `P-0003` | None | Victorino Franco and Universidade de Sevilla remain external context. |
| `COL-0013` | External international quantum-resources and energy-storage context | `P-0009`, `P-0003` | None | Grouped external collaboration record can be split later if stronger evidence requires it. |
| `COL-0014` | Event and scientific-community collaboration context | `P-0002`, `P-0004`, `P-0005`, `P-0007` | None | WICE/event context is not converted into a project activity here. |

## Active infrastructure coverage map

| Infrastructure ID | Host institution | Related Phase 1A people | Main evidence anchors | Visible domain codes | Boundary note |
| --- | --- | --- | --- | --- | --- |
| `INF-0001` | UFOB | `P-0009`, `P-0014` | `PRJ-0001`, `PRJ-0004`, `PRJ-0025`, `PRJ-0026`, `SRC-0033`, `SRC-0036` | `D-03`, `D-04`, `D-05`, `D-08` | UFOB computing context only; no broader access plan is created. |
| `INF-0002` | UFOB | `P-0009` | `PRJ-0004`, `SRC-0033` | `D-01`, `D-05` | Analytical-platform ownership/access details remain for manual review. |
| `INF-0003` | SENAI CIMATEC | `P-0012`, `P-0009` | `COL-0004`, `PRJ-0001`, `PRJ-0027`, `PRJ-0028`, `SRC-0036`, `SRC-0040`, `SRC-0044` | `D-03`, `D-04`, `D-08` | LAQCC/Kuatomu context is recorded as source-backed infrastructure only. |
| `INF-0004` | SENAI CIMATEC | `P-0012` | `COL-0004`, `COL-0005`, `PRJ-0028`, `SRC-0044` | `D-03`, `D-04`, `D-08` | QuIIN context does not import non-Phase 1A personnel into the team. |
| `INF-0007` | UFF | `P-0003`, `P-0006` | `PRJ-0003`, `PRJ-0004`, `PRJ-0017`, `PRJ-0018`, `SRC-0033`, `SRC-0034` | `D-03`, `D-05` | Detailed equipment ownership from `SRC-0034` remains pending manual review. |
| `INF-0008` | UFF | `P-0003`, `P-0006` | `PRJ-0003`, `PRJ-0004`, `SRC-0033`, `SRC-0034` | `D-01`, `D-05` | Only the UFF-hosted laboratory explicitly named in sources is active here. |
| `INF-0010` | UERJ | `P-0007`, `P-0002` | `COL-0001`, `SRC-0007` | `D-02`, `D-05`, `D-06` | Equipment components are not listed in the extracted source text. |
| `INF-0016` | UFF | `P-0003` | `SRC-0003` | `D-08`, `D-09` | Development-project promotion to Phase 1C remains deferred. |
| `INF-0017` | ORNL | `P-0015`, `P-0008`, `P-0007`, `P-0003` | `COL-0007`, `PRJ-0005`, `PRJ-0022`, `PRJ-0030`, `PUB-0006`, `PUB-0100`, `PUB-0101` | `D-02`, `D-04`, `D-05`, `D-06` | Restricted to SNAP/ORNL context supported by sources. |
| `INF-0018` | Universidade de Aveiro | `P-0016`, `P-0003`, `P-0009` | `COL-0010`, `PRJ-0001`, `PRJ-0032`, `PRJ-0033`, `PUB-0004`, `PUB-0012`, `PUB-0102`-`PUB-0107` | `D-01`, `D-02`, `D-07` | Restricted to single-crystal X-ray diffraction context supported by sources. |

## Integrated collaboration-infrastructure threads

These rows group source-backed collaboration and infrastructure evidence for
navigation. They do not define project axes, priorities, work packages, or
responsibilities.

| Thread | Phase 1A people | Institutions represented in Phase 1A | Collaboration IDs | Active infrastructure IDs | Main evidence anchors |
| --- | --- | --- | --- | --- | --- |
| UERJ caloric-material and structural-characterization context | `P-0001`, `P-0002`, `P-0004`, `P-0005`, `P-0007`, `P-0008`, `P-0010` | UERJ | `COL-0001`, `COL-0014` | `INF-0010` | `PRJ-0002`, `PRJ-0006`-`PRJ-0016`, `PRJ-0024`, `RES-0006`, `RES-0009` |
| UERJ-UFF-ORNL barocaloric, spin-crossover, and pressure context | `P-0003`, `P-0007`, `P-0008`, `P-0015` | UERJ, UFF, ORNL | `COL-0002`, `COL-0007` | `INF-0017` | `PRJ-0005`, `PRJ-0022`, `RES-0007`, `PUB-0006`, `PUB-0100`, `PUB-0101` |
| UFF magnetic, sample-preparation, and functional-material context | `P-0003`, `P-0006` | UFF | `COL-0003`, `COL-0009`, `COL-0012` | `INF-0007`, `INF-0008`, `INF-0016` | `PRJ-0003`, `PRJ-0017`, `PRJ-0018`, `RES-0012`, `PUB-0050` |
| UFF-UFOB quantum batteries and metal-complex energy-storage context | `P-0003`, `P-0006`, `P-0009`, `P-0014` | UFF, UFOB | `COL-0003`, `COL-0008`, `COL-0011`, `COL-0013` | `INF-0001`, `INF-0002` | `PRJ-0001`, `PRJ-0025`, `PRJ-0026`, `RES-0001`, `RES-0002`, `IDEA-0001` |
| UFOB-SENAI CIMATEC scientific-computing and quantum-technology context | `P-0009`, `P-0012`, `P-0014` | UFOB, SENAI CIMATEC | `COL-0004`, `COL-0005` | `INF-0001`, `INF-0003`, `INF-0004` | `PRJ-0027`, `PRJ-0028`, `RES-0002`, `RES-0004`, `IDEA-0002` |
| Universidade de Aveiro metal-complex synthesis and structural-characterization context | `P-0003`, `P-0009`, `P-0016` | UFF, UFOB, Universidade de Aveiro | `COL-0010` | `INF-0018` | `PRJ-0001`, `PRJ-0032`, `PRJ-0033`, `RES-0010`, `RES-0011`, `PUB-0102`-`PUB-0107` |
| LAFMAT and broader external network context | `P-0003`, `P-0006`, `P-0009` | UFF, UFOB | `COL-0006`, `COL-0013` | None assigned by these collaboration records | `PRJ-0004`, `SRC-0033` |
| External measurement, synthesis, and community-event context | `P-0002`, `P-0003`, `P-0004`, `P-0005`, `P-0006`, `P-0007`, `P-0009` | UERJ, UFF, UFOB | `COL-0008`, `COL-0009`, `COL-0011`, `COL-0012`, `COL-0014` | None assigned by these collaboration records | `PRJ-0001`, `PRJ-0003`, `SRC-0002`, `SRC-0004`, `SRC-0034`, `SRC-0036` |

## Boundary-context review table

| Boundary context | Collaboration IDs | Current 2E handling |
| --- | --- | --- |
| LAFMAT partner institutions | `COL-0006` | Preserved as external network context; no LAFMAT partner institution is added to the team. |
| PUC-Rio/Livia Escobar | `COL-0008` | Preserved as external metal-complex production context. |
| UFRJ/Luis Ghivelder | `COL-0009` | Preserved as external magnetic-measurement context. |
| Zin Lin at Universidade de Aveiro | `COL-0010` | Preserved as external collaborator context; Paula Brandão remains Phase 1A. |
| Shenyang University of Technology/Fa-Nian Shi | `COL-0011` | Preserved as external international collaboration context. |
| Universidade de Sevilla/Victorino Franco | `COL-0012` | Preserved as external measurement context. |
| Grouped international quantum-resource collaborators | `COL-0013` | Preserved as grouped external collaboration context pending manual review. |
| WICE and external event/project names | `COL-0014` | Preserved as event/community context; not converted into a project activity. |

## 2E checkpoint

| Checkpoint item | Status |
| --- | --- |
| Every active Phase 1D infrastructure record appears in the 2E map | Satisfied for 10 records. |
| Every Phase 1E collaboration record appears in the 2E map | Satisfied for 14 records. |
| Every Phase 1A institution appears in the institution-infrastructure map | Satisfied for 6 institutions. |
| Retired infrastructure IDs are excluded from active use | Satisfied for 8 retired IDs. |
| External/non-team collaboration context remains distinguished from Phase 1A team membership | Satisfied. |
| No institutional roles, access plans, responsibilities, work packages, objectives, gap analysis, or proposal text are created | Satisfied in this subsection. |

## Manual review notes

- Confirm during final manual review whether any equipment from `SRC-0034` can
  be mapped to a Phase 1A institution and added as a new active infrastructure
  record.
- Confirm whether development or infrastructure-funding records connected to
  `INF-0010` and `INF-0016` should later become Phase 1C project records.
- Add explicit publication cross-links to collaboration and infrastructure
  records only after final manual publication validation.
- Keep `COL-0006`, `COL-0008`, `COL-0009`, `COL-0011`, `COL-0012`,
  `COL-0013`, and boundary portions of `COL-0010`/`COL-0014` out of project
  team status unless Phase 1A is explicitly updated.
