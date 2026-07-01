# 1B Scientific Publications

## Document control

Objective: Maintain the authoritative registry of scientific publications
after Phase 1A is complete.

Inputs: Published papers, preprints, conference papers, books, book chapters,
CV publication sections, DOIs, bibliographic metadata, links to people records,
and the source inventory in `data/source_inventory.tsv`.

Outputs: One reusable publication record per scientific work.

Dependencies: `docs/phase1/1A_People.md` and `data/source_inventory.tsv`.

Completion criteria: Publications are recorded once, with stable IDs and links
to related people records; duplicates and uncertain bibliographic fields are
marked for manual validation.

Version: 1.2

Status: Active

Last update: 2026-07-01

## Scope guard

This document is only a scientific-publication registry.

Do not analyse scientific competencies here. Do not create work packages. Do
not define scientific objectives. Do not infer gaps or proposal strategy from
the publication list.

## Phase gate note

Phase 1A was accepted by the project owner as sufficient to open Phase 1B on
2026-07-01. Future manual refinements to Phase 1A remain allowed, but stable
person IDs must be preserved.

## Stable ID policy

Use stable publication IDs in the format `PUB-0001`, `PUB-0002`, `PUB-0003`,
and so on.

Never renumber existing IDs. If a duplicate or obsolete record is found, mark
its status in the notes instead of reusing the ID.

## Required fields

Each publication record must include:

- Unique ID
- Title
- Publication status
- Venue or source type
- Year or source date
- DOI, arXiv ID, or other identifier, if available
- Authors as stated in source
- Related people
- Source IDs
- Notes

## Source policy

Source IDs refer to `data/source_inventory.tsv`.

Publication facts should be recorded here once. Other documents should refer to
the stable publication IDs rather than duplicating bibliographic metadata.

Draft manuscripts from `artigos em andamento` are recorded as manuscripts in
progress, not as published outputs.

When a source folder says `artigos publicados` but the PDF is an arXiv preprint,
the record preserves the arXiv status and marks the final publication status for
validation.

## Person-link policy

Related people use stable IDs from `docs/phase1/1A_People.md`.

Name variants such as initials, abbreviated surnames, or missing accents are
linked only when the match is clear from the Phase 1A people records or the
source context. Ambiguous links are marked in the notes for manual validation.

## Source processing summary

- Publication source files reviewed: `SRC-0008` through `SRC-0030`.
- PDF publication/manuscript source files reviewed: 22.
- Screenshot source files reviewed: 1.
- Publication records created: 23.
- Duplicate source files merged into one publication record:
  `SRC-0016` and `SRC-0017`.
- Manuscripts in progress recorded: 3.
- Published/preprint records from `artigos publicados` recorded: 19.
- Additional CV-derived publication records recorded: 1.

## Publication registry

### PUB-0001 - Quantum Information Geometrical Origins of Slow Magnetic Relaxation

- Unique ID: PUB-0001
- Title: Quantum Information Geometrical Origins of Slow Magnetic Relaxation
- Publication status: Manuscript in progress
- Venue or source type: Draft manuscript from `artigos em andamento`
- Year or source date: 2026-06-27
- DOI, arXiv ID, or other identifier: Not found in source
- Authors as stated in source: Not specified in extracted first pages
- Related people: None confirmed from source
- Source IDs: `SRC-0008`
- Notes: Author list requires manual validation from the source PDF or project
  owner.

### PUB-0002 - Synthesis, structure and magnetism of a frustated tetramer Fe(III) with a butterfly core

- Unique ID: PUB-0002
- Title: Synthesis, structure and magnetism of a frustated tetramer Fe(III)
  with a butterfly core
- Publication status: Manuscript in progress
- Venue or source type: Draft manuscript from `artigos em andamento`
- Year or source date: 2026-06-27
- DOI, arXiv ID, or other identifier: Not found in source
- Authors as stated in source: Alan Almeida; Paula Brandao; Mario Reis;
  Antonio Moreira
- Related people: `P-0008` Alan Fillipe de Souza Almeida; `P-0003` Mario de
  Souza Reis Junior
- Source IDs: `SRC-0009`
- Notes: The title spelling `frustated` follows the source text. The Alan
  Almeida name variant should be manually confirmed against `P-0008`.

### PUB-0003 - Theoretical Investigation of the Barocaloric Effect in the Spin-Crossover Complex Fe(pap-5NO2)2

- Unique ID: PUB-0003
- Title: Theoretical Investigation of the Barocaloric Effect in the
  Spin-Crossover Complex Fe(pap-5NO2)2
- Publication status: Manuscript in progress
- Venue or source type: Draft manuscript from `artigos em andamento`
- Year or source date: 2026-06-24
- DOI, arXiv ID, or other identifier: Not found in source
- Authors as stated in source: Alan de Souza; Mario Reis; Antonio M. dos
  Santos; Vinicius de Sousa
- Related people: `P-0008` Alan Fillipe de Souza Almeida; `P-0003` Mario de
  Souza Reis Junior; `P-0007` Vinicius da Silva Ramos de Sousa
- Source IDs: `SRC-0010`
- Notes: Alan de Souza and Vinicius de Sousa name variants should be manually
  confirmed against `P-0008` and `P-0007`.

### PUB-0004 - A chiral alkali metal capped Ni4 cubane complex

- Unique ID: PUB-0004
- Title: A chiral alkali metal capped Ni4 cubane complex: Synthesis,
  structure, magnetic and catalytic bromination studies
- Publication status: Published article
- Venue or source type: Journal of Molecular Structure 1274, 134412
- Year or source date: 2023
- DOI, arXiv ID, or other identifier: DOI `10.1016/j.molstruc.2022.134412`
- Authors as stated in source: Rupam Sen; Kingsukh Mondal; Antonio M. dos
  Santos; Livia B. L. Escobar; Paula Brandao; Mario S. Reis; Zhi Lin
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0011`
- Notes: None.

### PUB-0005 - Quantum Stirling engine based on dinuclear metal complexes

- Unique ID: PUB-0005
- Title: Quantum Stirling engine based on dinuclear metal complexes
- Publication status: Preprint; final publication status to verify
- Venue or source type: arXiv preprint
- Year or source date: 2022
- DOI, arXiv ID, or other identifier: arXiv `2208.14548v2`
- Authors as stated in source: Clebson Cruz; Hamid-Reza Rastegar-Sedehi;
  Maron F. Anka; Thiago R. de Oliveira; Mario Reis
- Related people: `P-0009` Clebson dos Santos Cruz; `P-0012` Maron Freitas
  Anka; `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0012`
- Notes: Final publication status should be manually verified.

### PUB-0006 - Spin crossover transition driven by pressure

- Unique ID: PUB-0006
- Title: Spin crossover transition driven by pressure: Barocaloric applications
- Publication status: Preprint; final publication status to verify
- Venue or source type: arXiv preprint
- Year or source date: 2023
- DOI, arXiv ID, or other identifier: arXiv `2304.05353v1`
- Authors as stated in source: Mario Reis; Yongqiang Cheng; Antonio M. dos
  Santos
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0013`
- Notes: Final publication status should be manually verified.

### PUB-0007 - Quantum caloric effects

- Unique ID: PUB-0007
- Title: Quantum caloric effects
- Publication status: Preprint; final publication status to verify
- Venue or source type: arXiv preprint
- Year or source date: 2025
- DOI, arXiv ID, or other identifier: arXiv `2406.10409v2`
- Authors as stated in source: C. Cruz; J. S. Amaral; Mario Reis
- Related people: `P-0009` Clebson dos Santos Cruz; `P-0003` Mario de Souza
  Reis Junior
- Source IDs: `SRC-0014`
- Notes: Final publication status should be manually verified.

### PUB-0008 - Quantum thermodynamics of a power-law potential

- Unique ID: PUB-0008
- Title: Quantum thermodynamics of a power-law potential
- Publication status: Preprint; final publication status to verify
- Venue or source type: arXiv preprint
- Year or source date: 2024
- DOI, arXiv ID, or other identifier: arXiv `2412.18684v1`
- Authors as stated in source: Vinicius Gomes de Paula; Wanisson S. Santana;
  Clebson Cruz; Mario Reis
- Related people: `P-0006` Vinicius Gomes de Paula; `P-0014` Wanisson Silva
  Santana; `P-0009` Clebson dos Santos Cruz; `P-0003` Mario de Souza Reis
  Junior
- Source IDs: `SRC-0015`
- Notes: Final publication status should be manually verified.

### PUB-0009 - Quantum Level-Crossing Induced by Anisotropy in Spin-1 Heisenberg Dimers

- Unique ID: PUB-0009
- Title: Quantum Level-Crossing Induced by Anisotropy in Spin-1 Heisenberg
  Dimers: Applications to Quantum Stirling Engines
- Publication status: Preprint; final publication status to verify
- Venue or source type: arXiv preprint
- Year or source date: 2025
- DOI, arXiv ID, or other identifier: arXiv `2502.19561v3`
- Authors as stated in source: Bastian Castorene; Vinicius Gomes de Paula;
  Francisco J. Pena; Clebson Cruz; Mario Reis; Patricio Vargas
- Related people: `P-0006` Vinicius Gomes de Paula; `P-0009` Clebson dos
  Santos Cruz; `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0016`, `SRC-0017`
- Notes: `SRC-0016` and `SRC-0017` appear to be duplicate copies of the same
  arXiv PDF and are recorded once.

### PUB-0010 - Perturbative approach to the first law of quantum thermodynamics

- Unique ID: PUB-0010
- Title: Perturbative approach to the first law of quantum thermodynamics
- Publication status: Preprint; final publication status to verify
- Venue or source type: arXiv preprint
- Year or source date: 2026
- DOI, arXiv ID, or other identifier: arXiv `2605.19941v1`
- Authors as stated in source: Mario Reis; Maron F. Anka; Vinicius Gomes de
  Paula; Clebson Cruz
- Related people: `P-0003` Mario de Souza Reis Junior; `P-0012` Maron Freitas
  Anka; `P-0006` Vinicius Gomes de Paula; `P-0009` Clebson dos Santos Cruz
- Source IDs: `SRC-0018`
- Notes: Final publication status should be manually verified.

### PUB-0011 - Novel Co5 Cluster Based Triazole Bridged Cobalt-Fluorophosphate

- Unique ID: PUB-0011
- Title: Novel Co5 Cluster Based Triazole Bridged Cobalt-Fluorophosphate:
  Synthesis, Structure, Magnetic and Heterogeneous Catalytic Epoxidation
  Studies
- Publication status: Published article
- Venue or source type: European Journal of Inorganic Chemistry screenshot
- Year or source date: First published 2023-05-09
- DOI, arXiv ID, or other identifier: DOI `10.1002/ejic.202300123`
- Authors as stated in source: Rupam Sen; Sudipta De; Antonio M. dos Santos;
  Livia B. L. Escobar; Paula Cristina Brandao; Filipe A. Almeida Paz; Mario S.
  Reis; Zhi Lin
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0019`
- Notes: Record extracted from screenshot rather than full article PDF; full
  citation should be manually verified.

### PUB-0012 - Magnetic Anisotropy and Spin Coupling in a Cobalt(II) Dimer

- Unique ID: PUB-0012
- Title: Magnetic Anisotropy and Spin Coupling in a Cobalt(II) Dimer with
  Bioinspired Bridges
- Publication status: Published article
- Venue or source type: ACS Physical Chemistry Au 6, 334-339
- Year or source date: 2026
- DOI, arXiv ID, or other identifier: DOI `10.1021/acsphyschemau.5c00134`
- Authors as stated in source: Alan Almeida; Ana Clara das Neves; Paula
  Brandao; Mariem Masmoudi; Luis Ghivelder; Clebson Cruz; Mario Reis
- Related people: `P-0008` Alan Fillipe de Souza Almeida; `P-0009` Clebson dos
  Santos Cruz; `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0020`
- Notes: Alan Almeida name variant should be manually confirmed against
  `P-0008`.

### PUB-0013 - Colossal refrigerant capacity in [Fe(hyptrz)3]A2 . H2O

- Unique ID: PUB-0013
- Title: Colossal refrigerant capacity in [Fe(hyptrz)3]A2 . H2O around the
  freezing temperature of water
- Publication status: Published article
- Venue or source type: Physical Review B 98, 224408
- Year or source date: 2018
- DOI, arXiv ID, or other identifier: DOI `10.1103/PhysRevB.98.224408`
- Authors as stated in source: P. J. von Ranke; B. P. Alho; R. M. Ribas; E. P.
  Nobrega; A. Caldas; V. S. R. de Sousa; M. V. Colaco; Lippy F. Marques; Daniel
  L. Rocco; P. O. Ribeiro
- Related people: `P-0005` Pedro Jorge von Ranke Perlingeiro; `P-0002` Bruno
  de Pinho Alho; `P-0007` Vinicius da Silva Ramos de Sousa; `P-0004` Paula de
  Oliveira Ribeiro Alho
- Source IDs: `SRC-0021`
- Notes: None.

### PUB-0014 - A microscopic refrigeration process triggered through spin-crossover mechanism

- Unique ID: PUB-0014
- Title: A microscopic refrigeration process triggered through spin-crossover
  mechanism
- Publication status: Published article
- Venue or source type: Applied Physics Letters 110, 181909
- Year or source date: 2017
- DOI, arXiv ID, or other identifier: DOI `10.1063/1.4982792`
- Authors as stated in source: P. J. von Ranke
- Related people: `P-0005` Pedro Jorge von Ranke Perlingeiro
- Source IDs: `SRC-0022`
- Notes: None.

### PUB-0015 - Large barocaloric effect in spin-crossover complex [CrI2(depe)2]

- Unique ID: PUB-0015
- Title: Large barocaloric effect in spin-crossover complex [CrI2(depe)2]
- Publication status: Published article
- Venue or source type: Journal of Applied Physics 127, 165104
- Year or source date: 2020
- DOI, arXiv ID, or other identifier: DOI `10.1063/5.0003644`
- Authors as stated in source: P. J. von Ranke; B. P. Alho; P. H. S. da Silva;
  R. M. Ribas; E. P. Nobrega; V. S. R. de Sousa; M. V. Colaco; Lippy F.
  Marques; M. S. Reis; F. M. Scaldini; Livia B. L. Escobar; P. O. Ribeiro
- Related people: `P-0005` Pedro Jorge von Ranke Perlingeiro; `P-0002` Bruno
  de Pinho Alho; `P-0007` Vinicius da Silva Ramos de Sousa; `P-0003` Mario de
  Souza Reis Junior; `P-0004` Paula de Oliveira Ribeiro Alho
- Source IDs: `SRC-0023`
- Notes: None.

### PUB-0016 - Theoretical investigation of the barocaloric effect in spin-crossover systems

- Unique ID: PUB-0016
- Title: Theoretical investigation of the barocaloric effect in spin-crossover
  systems upon first- and second-order phase transition conversion
- Publication status: Published article
- Venue or source type: Journal of Applied Physics 133, 125104
- Year or source date: 2023
- DOI, arXiv ID, or other identifier: DOI `10.1063/5.0142437`
- Authors as stated in source: P. O. Ribeiro; B. P. Alho; E. P. Nobrega; V. S.
  R. de Sousa; A. M. G. Carvalho; P. J. von Ranke
- Related people: `P-0004` Paula de Oliveira Ribeiro Alho; `P-0002` Bruno de
  Pinho Alho; `P-0007` Vinicius da Silva Ramos de Sousa; `P-0005` Pedro Jorge
  von Ranke Perlingeiro
- Source IDs: `SRC-0024`
- Notes: None.

### PUB-0017 - Theoretical investigation of entropic barocaloric effect in spin-crossover systems

- Unique ID: PUB-0017
- Title: Theoretical investigation of entropic barocaloric effect in
  spin-crossover systems
- Publication status: Published article
- Venue or source type: Journal of Magnetism and Magnetic Materials 564, 170121
- Year or source date: 2022
- DOI, arXiv ID, or other identifier: DOI `10.1016/j.jmmm.2022.170121`
- Authors as stated in source: P. J. von Ranke; B. P. Alho; R. M. Ribas; E. P.
  Nobrega; V. S. R. de Sousa; P. O. Ribeiro
- Related people: `P-0005` Pedro Jorge von Ranke Perlingeiro; `P-0002` Bruno
  de Pinho Alho; `P-0007` Vinicius da Silva Ramos de Sousa; `P-0004` Paula de
  Oliveira Ribeiro Alho
- Source IDs: `SRC-0025`
- Notes: None.

### PUB-0018 - Influence of magnetic field on a spin-crossover material

- Unique ID: PUB-0018
- Title: Influence of magnetic field on a spin-crossover material
- Publication status: Published article
- Venue or source type: Journal of Magnetism and Magnetic Materials 489, 165340
- Year or source date: 2019
- DOI, arXiv ID, or other identifier: DOI `10.1016/j.jmmm.2019.165340`
- Authors as stated in source: P. O. Ribeiro; B. P. Alho; R. M. Ribas; E. P.
  Nobrega; V. S. R. de Sousa; P. J. von Ranke
- Related people: `P-0004` Paula de Oliveira Ribeiro Alho; `P-0002` Bruno de
  Pinho Alho; `P-0007` Vinicius da Silva Ramos de Sousa; `P-0005` Pedro Jorge
  von Ranke Perlingeiro
- Source IDs: `SRC-0026`
- Notes: None.

### PUB-0019 - The refrigerant capacity in spin-crossover materials

- Unique ID: PUB-0019
- Title: The refrigerant capacity in spin-crossover materials: Application to
  [Fe(phen)2(NCS)2]
- Publication status: Published article
- Venue or source type: Journal of Magnetism and Magnetic Materials 489, 165421
- Year or source date: 2019
- DOI, arXiv ID, or other identifier: DOI `10.1016/j.jmmm.2019.165421`
- Authors as stated in source: P. J. von Ranke; B. P. Alho; E. P. Nobrega; A.
  Caldas; V. S. R. de Sousa; M. V. Colaco; Lippy F. Marques; Gabriel M. Rocha;
  Daniel L. Rocco; P. O. Ribeiro
- Related people: `P-0005` Pedro Jorge von Ranke Perlingeiro; `P-0002` Bruno
  de Pinho Alho; `P-0007` Vinicius da Silva Ramos de Sousa; `P-0004` Paula de
  Oliveira Ribeiro Alho
- Source IDs: `SRC-0027`
- Notes: None.

### PUB-0020 - Correlation between anomalous thermal expansion coefficient and barocaloric effect

- Unique ID: PUB-0020
- Title: Correlation between anomalous thermal expansion coefficient and
  barocaloric effect: Application to spin crossover systems
- Publication status: Published article
- Venue or source type: Solid State Communications 336, 114427
- Year or source date: 2021
- DOI, arXiv ID, or other identifier: DOI `10.1016/j.ssc.2021.114427`
- Authors as stated in source: P. J. von Ranke; B. P. Alho; P. H. S. da Silva;
  R. M. Ribas; E. P. Nobrega; V. S. R. de Sousa; A. M. G. Carvalho; P. O.
  Ribeiro
- Related people: `P-0005` Pedro Jorge von Ranke Perlingeiro; `P-0002` Bruno
  de Pinho Alho; `P-0007` Vinicius da Silva Ramos de Sousa; `P-0004` Paula de
  Oliveira Ribeiro Alho
- Source IDs: `SRC-0028`
- Notes: None.

### PUB-0021 - First indirect experimental evidence and theoretical discussion of giant refrigeration capacity

- Unique ID: PUB-0021
- Title: First indirect experimental evidence and theoretical discussion of
  giant refrigeration capacity through the reversible pressure induced
  spin-crossover phase transition
- Publication status: Published article
- Venue or source type: Journal of Alloys and Compounds 749, 556-560
- Year or source date: 2018
- DOI, arXiv ID, or other identifier: DOI `10.1016/j.jallcom.2018.03.315`
- Authors as stated in source: P. J. von Ranke; B. P. Alho; P. O. Ribeiro
- Related people: `P-0005` Pedro Jorge von Ranke Perlingeiro; `P-0002` Bruno
  de Pinho Alho; `P-0004` Paula de Oliveira Ribeiro Alho
- Source IDs: `SRC-0029`
- Notes: None.

### PUB-0022 - Refrigeration through Barocaloric Effect Using the Spin Crossover Complex

- Unique ID: PUB-0022
- Title: Refrigeration through Barocaloric Effect Using the Spin Crossover
  Complex {Fe[H2B(pz)2]2(bipy)}
- Publication status: Published article; final citation to verify
- Venue or source type: physica status solidi (b)
- Year or source date: 2021
- DOI, arXiv ID, or other identifier: DOI `10.1002/pssb.202100108`
- Authors as stated in source: Pedro J. von Ranke; Bruno P. Alho; Pedro H. S.
  da Silva; Rafael M. Ribas; Eduardo P. Nobrega; Vinicius S. R. de Sousa;
  Alexandre M. G. Carvalho; Paula O. Ribeiro
- Related people: `P-0005` Pedro Jorge von Ranke Perlingeiro; `P-0002` Bruno
  de Pinho Alho; `P-0007` Vinicius da Silva Ramos de Sousa; `P-0004` Paula de
  Oliveira Ribeiro Alho
- Source IDs: `SRC-0030`
- Notes: Source filename states `not final version`; final citation should be
  manually verified.

### PUB-0023 - Magnetocaloric and barocaloric effects of metal complexes for solid state cooling

- Unique ID: PUB-0023
- Title: Magnetocaloric and barocaloric effects of metal complexes for solid
  state cooling: Review, trends and perspectives
- Publication status: Published article
- Venue or source type: Coordination Chemistry Reviews 417, 213357
- Year or source date: 2020
- DOI, arXiv ID, or other identifier: DOI `10.1016/j.ccr.2020.213357`
- Authors as stated in source: Mario S. Reis
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`
- Notes: Identified from Mario de Souza Reis Junior's source CV publication
  section after project-owner reminder; DOI verified through Crossref metadata
  lookup on 2026-07-01.

## Validation backlog

- Confirm the author list for `PUB-0001`.
- Continue mining participant CV publication sections for additional
  theme-related articles not present in the Dropbox article PDFs.
- Confirm name variants linked to `P-0008` and `P-0007` in draft manuscripts
  and ACS article records.
- Verify final publication status for arXiv preprints `PUB-0005` through
  `PUB-0010`.
- Verify the full citation for screenshot-derived `PUB-0011`.
- Verify the final citation for `PUB-0022` because the source file is labelled
  as not final.
