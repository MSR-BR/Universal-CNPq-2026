# 1D Infrastructure

## Document control

Objective: Maintain the authoritative registry of research infrastructure
hosted by institutions represented in the Phase 1A people registry.

Inputs: Laboratory descriptions, equipment inventories, software platforms,
datasets, facilities, institutional resources, previous project records, CV
infrastructure entries, and proposal infrastructure sections.

Outputs: One reusable infrastructure record per in-scope resource.

Dependencies: `docs/phase1/1A_People.md`,
`docs/phase1/1C_PreviousProjects.md`, and
`data/source_inventory.tsv`.

Completion criteria: In-scope infrastructure resources are recorded once, with
stable IDs and links to related people, projects, and outputs when available.

Version: 1.4

Status: Active; participant-withdrawal infrastructure correction added

Last update: 2026-07-14

## Scope guard

This document is only an infrastructure registry.

Active infrastructure records must be limited to resources hosted by active
institutions represented in `docs/phase1/1A_People.md`:

- Universidade do Estado do Rio de Janeiro (UERJ)
- Universidade Federal Fluminense (UFF)
- Universidade Federal do Oeste da Bahia (UFOB)
- Oak Ridge National Laboratory (ORNL)
- Universidade de Aveiro

Universidade SENAI CIMATEC records `INF-0003` and `INF-0004` are preserved
only as historical/source-backed context after `P-0012` was withdrawn from the
active team on 2026-07-14.

Do not list infrastructure from LAFMAT partner institutions, remaining external
collaborators, or external large-scale facilities as active Phase 1D resources
unless the project owner first adds a participant from that institution to Phase
1A or explicitly changes this scope.

Do not analyse scientific competencies here. Do not infer infrastructure gaps.
Do not assign strategic roles to laboratories or equipment. Do not create work
packages. Do not write proposal text.

Infrastructure statements are recorded as source-backed facts. If the source
mentions equipment without enough evidence that it is hosted by a Phase 1A
institution, keep it out of the active registry and preserve the question for
manual review.

## Phase gate note

Phase 1D was opened on 2026-07-01 after the initial Phase 1C previous-project
registry pass. The project owner clarified on 2026-07-01 that the LAFMAT
proposal source includes institutions that will not enter the project; therefore
active Phase 1D infrastructure is restricted to Phase 1A participant
institutions. The project owner later added Antonio dos Santos and Paula
Brandão as international collaborators; therefore ORNL and Universidade de
Aveiro are represented in Phase 1A through `P-0015` and `P-0016`, respectively.

Phase 1A, Phase 1B, and Phase 1C remain available for deferred manual
refinement, but manual review is not a blocker for this factual infrastructure
pass.

## Stable ID policy

Use stable infrastructure IDs in the format `INF-0001`, `INF-0002`,
`INF-0003`, and so on.

Never renumber existing IDs. If a record is removed from the active scope, keep
its ID retired and do not reuse it. Gaps in the active ID sequence are expected
after scope corrections.

## Required fields

Each active infrastructure record must include:

- Unique ID
- Resource name
- Resource type
- Host institution or location
- Status in source
- Components or capabilities stated in source
- Related people
- Related projects
- Related publications or outputs
- Source IDs
- Notes

## Source processing summary

Reviewed sources for this corrected pass:

- Previous-project/proposal PDFs with in-scope infrastructure: `SRC-0033`,
  `SRC-0034`, and `SRC-0036`.
- CV/Lattes infrastructure or project entries with in-scope infrastructure:
  `SRC-0003`, `SRC-0007`, `SRC-0040`, `SRC-0044`, `SRC-0048`, and
  `SRC-0049`.
- The LAFMAT source `SRC-0033` was used only for resources hosted at Phase 1A
  institutions, such as UFF and UFOB. Infrastructure from LAFMAT partner
  institutions outside Phase 1A was removed from the active registry.
- International collaborator CV sources `SRC-0048` and `SRC-0049` support
  narrowly scoped ORNL/SNAP and Universidade de Aveiro/CICECO records added
  after the Phase 1A collaborator update.
- Manual project-owner review is deferred to the final review, as instructed.

## Infrastructure database

### Universidade Federal do Oeste da Bahia (UFOB)

#### INF-0001 - Laboratório de Computação Científica (LCC), UFOB

- Unique ID: INF-0001
- Resource name: Laboratório de Computação Científica (LCC), Universidade Federal do Oeste da Bahia
- Resource type: Computational laboratory and high-performance computing infrastructure
- Host institution or location: Universidade Federal do Oeste da Bahia (UFOB)
- Status in source: Available infrastructure in proposal sources
- Components or capabilities stated in source: Cluster 1 with Dual Xeon 6330 server, 56 cores/112 threads, 256 GB RAM, HDD/SSD storage, NVIDIA V100 GPU, redundant power supply, and rack chassis; Cluster 2 with one manager server and nine nodes, Xeon E5410 quad-core processors, 8 GB ECC RAM per node, 500 GB SATA II storage, and managed 24-port switch; software/platforms listed include SIESTA, Quantum ESPRESSO, SciDAVis, Maxima, and Python
- Related people: `P-0009` Clebson dos Santos Cruz; `P-0014` Wanisson Silva Santana
- Related projects: `PRJ-0001`, `PRJ-0004`, `PRJ-0025`, `PRJ-0026`
- Related publications or outputs: Pending manual cross-link to `docs/phase1/1B_Publications.md`
- Source IDs: `SRC-0033`, `SRC-0036`
- Notes: Source `SRC-0036` states that the LCC has been used by the proponent for theoretical descriptions of magnetic and structural properties of atomic and molecular systems. Related people and projects are linked from Phase 1A and Phase 1C records, not from LCC ownership assertions in CV sources.

#### INF-0002 - UFOB analytical platforms

- Unique ID: INF-0002
- Resource name: UFOB analytical platforms listed in LAFMAT proposal
- Resource type: Analytical instrumentation set
- Host institution or location: Universidade Federal do Oeste da Bahia (UFOB)
- Status in source: Available infrastructure in LAFMAT proposal
- Components or capabilities stated in source: HPLC, CG-FID, CG-MS, FT-IR, UV-Vis, TG/DSC, atomic absorption spectrometry, polycrystalline X-ray diffraction, and total organic carbon analyser
- Related people: `P-0009` Clebson dos Santos Cruz
- Related projects: `PRJ-0004`
- Related publications or outputs: Pending manual cross-link to `docs/phase1/1B_Publications.md`
- Source IDs: `SRC-0033`
- Notes: The source lists these platforms under UFOB infrastructure; detailed laboratory ownership and access rules are not specified.

### Universidade SENAI CIMATEC

#### INF-0003 - Latin America Quantum Computer Center (LAQCC) / CIMATEC KUATOMU

- Unique ID: INF-0003
- Resource name: Latin America Quantum Computer Center (LAQCC) and CIMATEC KUATOMU quantum simulator
- Resource type: Quantum simulation and supercomputing platform
- Host institution or location: Centro de Supercomputação do SENAI CIMATEC, Salvador, Bahia
- Status in source: Partner infrastructure in proposal source
- Components or capabilities stated in source: CIMATEC KUATOMU quantum simulator developed by ATOS; classical supercomputing hardware used to emulate quantum systems; 104 TFlops processing capacity; 78 GPU compute nodes with 312 NVIDIA V100 NVLink GPUs; 27 processing nodes with 204 TFlops using Intel Cascade Lake processors
- Related people: `P-0012` Maron Freitas Anka; `P-0009` Clebson dos Santos Cruz
- Related projects: `PRJ-0001`, `PRJ-0027`, `PRJ-0028`
- Related publications or outputs: Pending manual cross-link to `docs/phase1/1B_Publications.md`
- Source IDs: `SRC-0036`, `SRC-0040`, `SRC-0044`
- Notes: Retired from active project infrastructure scope on 2026-07-14 because `P-0012` was withdrawn from the team and SENAI CIMATEC is no longer represented as an active project institution. The record remains as historical/source-backed context for prior quantum-technology evidence. Source `SRC-0036` describes LAQCC as partner infrastructure for quantum-technology work. Source `SRC-0040` separately records a CIMATEC Kuatomu quantum-algorithm project.

#### INF-0004 - QuIIN - Quantum Industrial Innovation

- Unique ID: INF-0004
- Resource name: QuIIN - Quantum Industrial Innovation
- Resource type: Quantum-technology competence center
- Host institution or location: Centro de Competências Embrapii Cimatec em Tecnologias Quânticas, SENAI CIMATEC, Salvador, Bahia
- Status in source: Em andamento in CV project record
- Components or capabilities stated in source: Continuous-variable quantum key distribution activities; protocol investigation and analysis; experimental test bench for protocols and topologies; hardware development; attack simulation; hardware platform for post-processing and real-time key generation
- Related people: `P-0012` Maron Freitas Anka
- Related projects: `PRJ-0028`
- Related publications or outputs: Pending manual cross-link to `docs/phase1/1B_Publications.md`
- Source IDs: `SRC-0044`
- Notes: Retired from active project infrastructure scope on 2026-07-14 because `P-0012` was withdrawn from the team and SENAI CIMATEC is no longer represented as an active project institution. Source describes QuIIN as funded with PPI Manufatura IoT/4.0 resources and linked to professional training, startup attraction, and institutional-industry interaction.

### Universidade Federal Fluminense (UFF)

#### INF-0007 - UFF Laboratório de Magnetismo

- Unique ID: INF-0007
- Resource name: Laboratório de Magnetismo
- Resource type: Magnetic-characterization laboratory
- Host institution or location: Universidade Federal Fluminense (UFF)
- Status in source: Available infrastructure in LAFMAT proposal
- Components or capabilities stated in source: SQUID, PPMS, and central gas-liquefaction facility
- Related people: `P-0003` Mario de Souza Reis Junior; `P-0006` Vinícius Gomes de Paula
- Related projects: `PRJ-0003`, `PRJ-0004`, `PRJ-0017`, `PRJ-0018`
- Related publications or outputs: Pending manual cross-link to `docs/phase1/1B_Publications.md`
- Source IDs: `SRC-0033`, `SRC-0034`
- Notes: Source `SRC-0034` provides a broader equipment list that includes PPMS and SQUID models; exact ownership mapping of each listed item requires final manual review.

#### INF-0008 - UFF Laboratório de Preparação de Amostras

- Unique ID: INF-0008
- Resource name: Laboratório de Preparação de Amostras
- Resource type: Sample-preparation and materials-synthesis laboratory
- Host institution or location: Universidade Federal Fluminense (UFF)
- Status in source: Available infrastructure in LAFMAT proposal
- Components or capabilities stated in source: Controlled-atmosphere furnaces and infrastructure for materials synthesis
- Related people: `P-0003` Mario de Souza Reis Junior; `P-0006` Vinícius Gomes de Paula
- Related projects: `PRJ-0003`, `PRJ-0004`
- Related publications or outputs: Pending manual cross-link to `docs/phase1/1B_Publications.md`
- Source IDs: `SRC-0033`, `SRC-0034`
- Notes: Source `SRC-0034` lists related sample-processing resources, but only the UFF-hosted laboratory explicitly named in `SRC-0033` is active here. Detailed host mapping for individual items remains pending final manual review.

#### INF-0016 - Laboratório Multiusuário de Inovação e Prototipagem - MakerSpace L3D UFF

- Unique ID: INF-0016
- Resource name: Laboratório Multiusuário de Inovação e Prototipagem - MakerSpace L3D UFF
- Resource type: Multiuser prototyping, innovation, and educational-robotics space
- Host institution or location: Instituto de Física, Universidade Federal Fluminense (UFF)
- Status in source: Em andamento in CV development-project record
- Components or capabilities stated in source: Space for idea development, creativity, and support for scientific research; educational-robotics activity at IF-UFF; project site listed as https://l3d.if.uff.br
- Related people: `P-0003` Mario de Souza Reis Junior
- Related projects: Pending Phase 1C extension if development projects are promoted to project records
- Related publications or outputs: Pending manual cross-link to `docs/phase1/1B_Publications.md`
- Source IDs: `SRC-0003`
- Notes: Source records this as a development project from 2019-current and also states that Mario maintains a MakerSpace at IF-UFF.

### Universidade do Estado do Rio de Janeiro (UERJ)

#### INF-0010 - IFADT/UERJ multiuser structural-characterization laboratory

- Unique ID: INF-0010
- Resource name: Instalação de Laboratório Multiusuário para Caracterização Estrutural de Novos Materiais no IFADT/UERJ
- Resource type: Multiuser structural-characterization laboratory project/resource
- Host institution or location: Instituto de Física Armando Dias Tavares, Universidade do Estado do Rio de Janeiro (UERJ)
- Status in source: Em andamento in CV project record
- Components or capabilities stated in source: Source identifies the infrastructure project but does not list equipment components in the extracted text
- Related people: `P-0007` Vinícius da Silva Ramos de Sousa; `P-0002` Bruno de Pinho Alho
- Related projects: Pending Phase 1C extension if infrastructure-funding projects are promoted to project records
- Related publications or outputs: Pending manual cross-link to `docs/phase1/1B_Publications.md`
- Source IDs: `SRC-0007`
- Notes: Source describes FAPERJ Edital 16/2015 Apoio à Infraestrutura para Pesquisa nas Universidades Estaduais do RJ; coordinator listed in source is external to Phase 1A.


### Oak Ridge National Laboratory (ORNL)

#### INF-0017 - SNAP Beamline, Spallation Neutron Source, ORNL

- Unique ID: INF-0017
- Resource name: SNAP Beamline, Spallation Neutron Source, Oak Ridge National Laboratory
- Resource type: High-pressure neutron-scattering beamline and facility access context
- Host institution or location: Oak Ridge National Laboratory (ORNL), Tennessee, United States
- Status in source: Active professional facility context in Antonio dos Santos CV; source lists him as Instrument Scientist at SNAP and Point of Contact for the SNAP Beamline
- Components or capabilities stated in source: SNAP beamline at the Spallation Neutron Source; high-pressure diffraction; sample environments for neutron scattering; source CV also lists high-pressure techniques for neutrons, x-rays, and magnetization measurements
- Related people: `P-0015` António F. Moreira dos Santos; `P-0008` Alan Fillipe de Souza Almeida; `P-0007` Vinícius da Silva Ramos de Sousa; `P-0003` Mario de Souza Reis Junior
- Related projects: `PRJ-0005`, `PRJ-0022`, `PRJ-0030`
- Related publications or outputs: `PUB-0006`, `PUB-0100`, `PUB-0101`
- Source IDs: `SRC-0048`, `SRC-0035`, `SRC-0037`, `SRC-0038`
- Notes: Added after `P-0015` was added to Phase 1A. This record is restricted to the source-backed SNAP/ORNL context and does not import broader ORNL infrastructure.

### Universidade de Aveiro

#### INF-0018 - Universidade de Aveiro/CICECO single-crystal X-ray diffraction laboratory

- Unique ID: INF-0018
- Resource name: Single-crystal X-ray diffraction laboratory, Universidade de Aveiro/CICECO
- Resource type: Structural-characterization laboratory
- Host institution or location: Departamento de Química/CICECO, Universidade de Aveiro, Portugal
- Status in source: Source CV states Paula Brandão has been responsible for the single-crystal X-ray diffraction laboratory since 2006, including maintenance and training of new users
- Components or capabilities stated in source: Single-crystal X-ray diffraction machine operation, user training, and structure solving using different methodologies
- Related people: `P-0016` Paula Cristina Ferreira da Silva Brandão; `P-0003` Mario de Souza Reis Junior; `P-0009` Clebson dos Santos Cruz
- Related projects: `PRJ-0001`, `PRJ-0032`, `PRJ-0033`
- Related publications or outputs: `PUB-0004`, `PUB-0012`, `PUB-0102`, `PUB-0103`, `PUB-0104`, `PUB-0105`, `PUB-0106`, `PUB-0107`
- Source IDs: `SRC-0049`, `SRC-0036`
- Notes: Added after `P-0016` was added to Phase 1A. This record is restricted to the source-backed diffraction laboratory context and does not import all Universidade de Aveiro infrastructure.


## Retired ID log

The following infrastructure IDs were created in commit `1383ee5` and removed
from the active registry after the project owner clarified that active Phase 1D
must list only infrastructure hosted by Phase 1A participant institutions:

- `INF-0005`
- `INF-0006`
- `INF-0009`
- `INF-0011`
- `INF-0012`
- `INF-0013`
- `INF-0014`
- `INF-0015`

These IDs must not be reused. The removed records remain available in git
history for audit purposes.

## Supporting source notes

- LAFMAT proposal source `SRC-0033` remains useful only for the UFF and UFOB
  infrastructure explicitly hosted at Phase 1A institutions.
- Source `SRC-0034` contains a detailed list of synthesis and characterization
  equipment, but the extracted text does not assign every item to a Phase 1A
  institution. The detailed list is not an active record until host mapping is
  manually confirmed.
- Source `SRC-0037` and `SRC-0038` are e-mail threads. They are used only as
  supporting evidence for `INF-0017` after Antonio dos Santos was added to
  Phase 1A; they are not standalone infrastructure records.
- Several CVs mention institutional departments or professional addresses. These
  were not promoted to infrastructure records unless the source also identified
  a laboratory, equipment set, platform, center, facility, or infrastructure
  project hosted by a Phase 1A institution.

## Manual review queue

- Confirm whether any equipment from the detailed `SRC-0034` list is hosted by
  UFF, UERJ, UFOB, ORNL, or Universidade de Aveiro and should be added as a new
  in-scope infrastructure record.
- Confirm whether infrastructure-funding/development records connected to
  `INF-0010` and `INF-0016` should be promoted to Phase 1C project records.
- Add explicit publication/output cross-links only after final manual validation
  of Phase 1B and Phase 1D records.
