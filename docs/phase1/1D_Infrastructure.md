# 1D Infrastructure

## Document control

Objective: Maintain the authoritative registry of research infrastructure.

Inputs: Laboratory descriptions, equipment inventories, software platforms,
datasets, facilities, institutional resources, previous project records, CV
infrastructure entries, and proposal infrastructure sections.

Outputs: One reusable infrastructure record per resource.

Dependencies: `docs/phase1/1A_People.md`,
`docs/phase1/1C_PreviousProjects.md`, and
`data/source_inventory.tsv`.

Completion criteria: Infrastructure resources are recorded once, with stable
IDs and links to related people, projects, and outputs when available.

Version: 1.1

Status: Active; initial factual registry opened

Last update: 2026-07-01

## Scope guard

This document is only an infrastructure registry.

Do not analyse scientific competencies here. Do not infer infrastructure gaps.
Do not assign strategic roles to laboratories or equipment. Do not create work
packages. Do not write proposal text.

Infrastructure statements are recorded as source-backed facts. If the source
mentions equipment without naming the laboratory or ownership, preserve that
uncertainty in the notes.

## Phase gate note

Phase 1D was opened on 2026-07-01 after the initial Phase 1C previous-project
registry pass. Phase 1A, Phase 1B, and Phase 1C remain available for deferred
manual refinement, but manual review is not a blocker for this factual
infrastructure pass.

## Stable ID policy

Use stable infrastructure IDs in the format `INF-0001`, `INF-0002`,
`INF-0003`, and so on.

Never renumber existing IDs. If a duplicate, obsolete, or merged infrastructure
record is found, mark its status in the notes instead of reusing the ID.

## Required fields

Each infrastructure record must include:

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

Reviewed sources for this initial pass:

- Previous-project/proposal PDFs with infrastructure sections: `SRC-0033`,
  `SRC-0034`, `SRC-0035`, `SRC-0036`, `SRC-0037`, and `SRC-0038`.
- CV/Lattes infrastructure or project entries: `SRC-0003`, `SRC-0007`,
  `SRC-0039`, `SRC-0040`, `SRC-0044`, and `SRC-0046`.
- Source records were promoted only when they identify a laboratory, facility,
  equipment set, software/platform, center, or institutional infrastructure
  resource.
- Manual project-owner review is deferred to the final review, as instructed.

## Infrastructure database

### Computational and Quantum-Technology Infrastructure

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

#### INF-0003 - Latin America Quantum Computer Center (LAQCC) / CIMATEC KUATOMU

- Unique ID: INF-0003
- Resource name: Latin America Quantum Computer Center (LAQCC) and CIMATEC KUATOMU quantum simulator
- Resource type: Quantum simulation and supercomputing platform
- Host institution or location: Centro de Supercomputação do SENAI CIMATEC, Salvador, Bahia
- Status in source: Partner infrastructure in proposal source
- Components or capabilities stated in source: CIMATEC KUATOMU quantum simulator developed by ATOS; classical supercomputing hardware used to emulate quantum systems; 104 TFlops processing capacity; 78 GPU compute nodes with 312 NVIDIA V100 NVLink GPUs; 27 processing nodes with 204 TFlops using Intel Cascade Lake processors
- Related people: `P-0009` Clebson dos Santos Cruz; `P-0012` Maron Freitas Anka
- Related projects: `PRJ-0001`, `PRJ-0027`, `PRJ-0028`
- Related publications or outputs: Pending manual cross-link to `docs/phase1/1B_Publications.md`
- Source IDs: `SRC-0036`, `SRC-0040`, `SRC-0044`
- Notes: Source `SRC-0036` describes LAQCC as a partner for quantum-technology work. Source `SRC-0040` separately records a CIMATEC Kuatomu quantum-algorithm project.

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
- Notes: Source describes QuIIN as funded with PPI Manufatura IoT/4.0 resources and linked to professional training, startup attraction, and institutional-industry interaction.

#### INF-0005 - CNEA/CONICET advanced computing infrastructure

- Unique ID: INF-0005
- Resource name: Centro de Cálculo Avançado / CAC-CNEA computing infrastructure
- Resource type: High-performance computing infrastructure
- Host institution or location: CNEA/CONICET, Argentina
- Status in source: Available infrastructure in LAFMAT proposal
- Components or capabilities stated in source: Central large-capacity cluster; new high-performance cluster implemented in the Centro de Cálculo Avançado (CAC-CNEA); SuperMICRO Xeon-HGFi server with 32 cores and 64 GB RAM; VASP and SIESTA modelling software
- Related people: None in Phase 1A registry
- Related projects: `PRJ-0004`
- Related publications or outputs: Pending manual cross-link to `docs/phase1/1B_Publications.md`
- Source IDs: `SRC-0033`
- Notes: This is an international partner infrastructure record from the LAFMAT source; no Phase 1A participant is assigned as local owner.

### Experimental Facilities and Equipment

#### INF-0006 - Oak Ridge National Laboratory neutron and extreme-conditions infrastructure

- Unique ID: INF-0006
- Resource name: Oak Ridge National Laboratory neutron diffraction and extreme-conditions characterization infrastructure
- Resource type: External large-scale experimental facility
- Host institution or location: Oak Ridge National Laboratory (ORNL), Tennessee, United States
- Status in source: External doctoral-sandwich host and collaborator infrastructure
- Components or capabilities stated in source: Neutron diffraction laboratory; equipment for characterizing samples under high pressure and low temperature; magnetization under pressure referenced in collaboration source; supercomputer use mentioned in follow-up e-mail source
- Related people: `P-0008` Alan Fillipe de Souza Almeida; `P-0007` Vinícius da Silva Ramos de Sousa; `P-0003` Mario de Souza Reis Junior
- Related projects: `PRJ-0005`, `PRJ-0022`
- Related publications or outputs: Pending manual cross-link to `docs/phase1/1B_Publications.md`
- Source IDs: `SRC-0034`, `SRC-0035`, `SRC-0037`, `SRC-0038`
- Notes: Source `SRC-0035` names Antonio M. dos Santos as foreign co-advisor; source `SRC-0037` documents ongoing ORNL calculations and use of Quantum ESPRESSO inputs.

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
- Notes: Source `SRC-0034` lists related sample-processing resources such as chemistry laboratories, metallographic cutter, autoclaves, fume hood, vacuum pumps, arc furnace, melt spinner, and resistive furnace; detailed host mapping for each item remains pending.

#### INF-0009 - Multicaloric-materials synthesis and characterization equipment set

- Unique ID: INF-0009
- Resource name: Multicaloric-materials synthesis and characterization equipment set reported in PDR source
- Resource type: Equipment set
- Host institution or location: Host/ownership not fully specified in reviewed source
- Status in source: Available infrastructure in PDR research-plan source
- Components or capabilities stated in source: Metallographic cutter, autoclaves, fume hood, vacuum pumps, arc furnace, Bühler SC melt spinner, resistive furnace up to 1500 C, Bruker D8 Advance polycrystalline X-ray diffractometer, Bruker D8 Venture single-crystal X-ray diffractometer, Zeiss Auriga SEM, FEI Teneo SEM, Hitachi S5200 SEM, Quantum Design PPMS with 9 T magnet and AC/DC magnetization/resistivity/specific-heat modules, Quantum Design SQUID with 7 T magnet and operation up to 400 K, Lakeshore VSM 7407 with room-temperature to high-temperature and L-He/L-N2 cryostat ranges
- Related people: `P-0006` Vinícius Gomes de Paula; `P-0003` Mario de Souza Reis Junior
- Related projects: `PRJ-0003`
- Related publications or outputs: Pending manual cross-link to `docs/phase1/1B_Publications.md`
- Source IDs: `SRC-0034`
- Notes: This record preserves the detailed equipment list exactly as a project-plan infrastructure source. Final manual review should assign each item to its specific laboratory or collaborator when that information is available.

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

#### INF-0011 - LNLS EMA beamline for XRD/XAS under high pressure

- Unique ID: INF-0011
- Resource name: Linha de luz EMA, Laboratório Nacional de Luz Síncrotron (LNLS)
- Resource type: Synchrotron beamline / large-scale characterization facility
- Host institution or location: Centro Nacional de Pesquisa em Energia e Materiais (CNPEM), Brazil
- Status in source: Planned/used facility in Lattes project description
- Components or capabilities stated in source: X-ray diffraction (XRD) and X-ray absorption spectroscopy (XAS) under high pressure at the EMA beamline for pressure-volume-temperature work
- Related people: `P-0008` Alan Fillipe de Souza Almeida; `P-0007` Vinícius da Silva Ramos de Sousa
- Related projects: `PRJ-0023`
- Related publications or outputs: Pending manual cross-link to `docs/phase1/1B_Publications.md`
- Source IDs: `SRC-0039`
- Notes: Source connects the facility to characterization of the Gd(Co(1-x)Rux)2 series.

#### INF-0012 - UFRJ magnetic-measurement infrastructure via Luis Ghivelder collaboration

- Unique ID: INF-0012
- Resource name: UFRJ magnetic-measurement infrastructure referenced through Luis Ghivelder collaboration
- Resource type: External magnetic-measurement infrastructure
- Host institution or location: Universidade Federal do Rio de Janeiro (UFRJ)
- Status in source: Partner infrastructure in proposal/collaboration sources
- Components or capabilities stated in source: Magnetic measurements in molecular magnets; magnetization measurements cited in PDR collaboration source
- Related people: None in Phase 1A registry
- Related projects: `PRJ-0001`, `PRJ-0003`
- Related publications or outputs: Pending manual cross-link to `docs/phase1/1B_Publications.md`
- Source IDs: `SRC-0034`, `SRC-0036`
- Notes: The reviewed sources do not name the laboratory or list the equipment; retain as an external infrastructure node until manual review provides exact details.

#### INF-0013 - PUC-Rio complex-metal production infrastructure via Livia Escobar collaboration

- Unique ID: INF-0013
- Resource name: PUC-Rio complex-metal production infrastructure referenced through Livia Escobar collaboration
- Resource type: External synthesis/chemistry infrastructure
- Host institution or location: Departamento de Química, Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio)
- Status in source: Partner infrastructure in proposal source
- Components or capabilities stated in source: Production of metal complexes
- Related people: None in Phase 1A registry
- Related projects: `PRJ-0001`
- Related publications or outputs: Pending manual cross-link to `docs/phase1/1B_Publications.md`
- Source IDs: `SRC-0036`
- Notes: The reviewed source does not name the laboratory or list equipment; retain as an external infrastructure node until manual review provides exact details.

#### INF-0014 - UNMSM Grupo de Superconductividad infrastructure

- Unique ID: INF-0014
- Resource name: Laboratorio de Cerámicos y Nanomateriales and Grupo de Superconductividad infrastructure
- Resource type: International partner experimental and computational infrastructure
- Host institution or location: Facultad de Ciencias Físicas, Universidad Nacional Mayor de San Marcos (UNMSM), Lima, Peru
- Status in source: Available infrastructure in LAFMAT proposal
- Components or capabilities stated in source: Synthesis and characterization of superconducting materials including BPSCCO-2223 tapes; electrical-transport benches for rho(T,H), IV curves, and hysteresis; computational node/cluster for simulations with remote access in expansion
- Related people: None in Phase 1A registry
- Related projects: `PRJ-0004`
- Related publications or outputs: Pending manual cross-link to `docs/phase1/1B_Publications.md`
- Source IDs: `SRC-0033`
- Notes: This is an international partner infrastructure record from the LAFMAT source.

### Collaboration, Training, and Prototyping Infrastructure

#### INF-0015 - LAFMAT cooperation infrastructure

- Unique ID: INF-0015
- Resource name: Rede Latino-Americana de Matéria Condensada (LAFMAT)
- Resource type: Distributed collaboration, training, seminar, and shared-infrastructure network
- Host institution or location: Distributed Latin American network; UFF identified as network seat in the LAFMAT proposal
- Status in source: Active network/platform in proposal and CV sources
- Components or capabilities stated in source: Regular seminars, minicourses, co-supervision, short visits, shared infrastructure facilitation, calendar, news, video links, slides, and training notebooks through the LAFMAT site
- Related people: `P-0003` Mario de Souza Reis Junior; `P-0009` Clebson dos Santos Cruz; `P-0006` Vinícius Gomes de Paula
- Related projects: `PRJ-0004`
- Related publications or outputs: Pending manual cross-link to `docs/phase1/1B_Publications.md`
- Source IDs: `SRC-0003`, `SRC-0033`
- Notes: This record treats LAFMAT as cooperation infrastructure, not as a scientific work package or project strategy.

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

## Supporting source notes

- Source `SRC-0034` contains a detailed list of synthesis and characterization equipment, but the extracted text does not assign every item to a named laboratory. This is why `INF-0009` preserves the equipment set as a source-backed record and flags host mapping for final manual review.
- Source `SRC-0037` and `SRC-0038` are e-mail threads. They are used only as supporting evidence for ongoing ORNL/SQUID/supercomputer-related infrastructure use and not as standalone infrastructure records.
- Several CVs mention institutional departments or professional addresses. These were not promoted to infrastructure records unless the source also identified a laboratory, equipment set, platform, center, facility, or infrastructure project.
- Educational outreach laboratory projects that are unrelated to the research-program infrastructure were left for possible Phase 1E/Final Review handling unless they identify a reusable infrastructure resource.

## Manual review queue

- Confirm host/ownership mapping for the detailed equipment list in `INF-0009`.
- Confirm exact laboratory names and access conditions for `INF-0012` and `INF-0013`.
- Decide whether infrastructure-funding/development projects connected to `INF-0010` and `INF-0016` should be promoted to Phase 1C project records.
- Add explicit publication/output cross-links only after final manual validation of Phase 1B and Phase 1D records.
