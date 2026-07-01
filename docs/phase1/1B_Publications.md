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

Version: 1.3

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
- Participant CV publication sections reviewed for Phase 1B: 14 individual CV
  sources.
- PDF publication/manuscript source files reviewed: 22.
- Screenshot source files reviewed: 1.
- Publication records created: 99.
- Duplicate source files merged into one publication record:
  `SRC-0016` and `SRC-0017`.
- Manuscripts in progress recorded: 3.
- Published/preprint records from `artigos publicados` recorded: 19.
- CV-derived publication records recorded: 77.
- Existing records updated or cross-checked with final CV publication metadata:
  8.
- Ambiguous CV extraction artifacts retained in the validation backlog instead
  of being promoted to final metadata.

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

### PUB-0004 - A chiral alkali metal capped Ni4 cubane complex: Synthesis, structure, magnetic and catalytic bromination studies

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
- Publication status: Published article; arXiv preprint source retained
- Venue or source type: Quantum Science and Technology 8, 035010
- Year or source date: 2023
- DOI, arXiv ID, or other identifier: arXiv `2208.14548v2`; DOI not extracted from
  reviewed CV source
- Authors as stated in source: Clebson Cruz; Hamid-Reza Rastegar-Sedehi; Maron F. Anka;
  Thiago R. de Oliveira; Mario Reis
- Related people: `P-0009` Clebson dos Santos Cruz; `P-0012` Maron Freitas Anka;
  `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0012`, `SRC-0003`, `SRC-0040`, `SRC-0044`
- Notes: Initial source is arXiv; final journal metadata was confirmed from CV
  publication sections. DOI remains for manual validation.

### PUB-0006 - Spin crossover transition driven by pressure: Barocaloric applications

- Unique ID: PUB-0006
- Title: Spin crossover transition driven by pressure: Barocaloric applications
- Publication status: Published article; arXiv preprint source retained
- Venue or source type: Physica B - Condensed Matter 677, 415689
- Year or source date: 2024
- DOI, arXiv ID, or other identifier: arXiv `2304.05353v1`; DOI not extracted from
  reviewed CV source
- Authors as stated in source: Mario Reis; Yongqiang Cheng; Antonio M. dos Santos
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0013`, `SRC-0003`
- Notes: Initial source is arXiv; final journal metadata was confirmed from Mario de
  Souza Reis Junior CV publication section. DOI remains for manual validation.

### PUB-0007 - Quantum caloric effects

- Unique ID: PUB-0007
- Title: Quantum caloric effects
- Publication status: Published article; arXiv preprint source retained
- Venue or source type: Quantum Science and Technology 10, 035015
- Year or source date: 2025
- DOI, arXiv ID, or other identifier: arXiv `2406.10409v2`; DOI not extracted from
  reviewed CV source
- Authors as stated in source: Clebson Cruz; Joao S. Amaral; Mario Reis
- Related people: `P-0009` Clebson dos Santos Cruz; `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0014`, `SRC-0003`, `SRC-0040`
- Notes: Initial source is arXiv; final journal metadata was confirmed from CV
  publication sections. DOI remains for manual validation.

### PUB-0008 - Quantum thermodynamics of a power-law potential

- Unique ID: PUB-0008
- Title: Quantum thermodynamics of a power-law potential
- Publication status: Published article; arXiv preprint source retained
- Venue or source type: Physica A - Statistical Mechanics and its Applications 674,
  130728
- Year or source date: 2025
- DOI, arXiv ID, or other identifier: arXiv `2412.18684v1`; DOI not extracted from
  reviewed CV source
- Authors as stated in source: Vinicius Gomes de Paula; Wanisson S. Santana; Clebson
  Cruz; Mario Reis
- Related people: `P-0006` Vinicius Gomes de Paula; `P-0014` Wanisson Silva Santana;
  `P-0009` Clebson dos Santos Cruz; `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0015`, `SRC-0003`, `SRC-0006`, `SRC-0040`, `SRC-0046`
- Notes: Initial source is arXiv; final journal metadata was confirmed from CV
  publication sections. DOI remains for manual validation.

### PUB-0009 - Quantum Level-Crossing Induced by Anisotropy in Spin-1 Heisenberg Dimers: Applications to Quantum Stirling Engines

- Unique ID: PUB-0009
- Title: Quantum Level-Crossing Induced by Anisotropy in Spin-1 Heisenberg Dimers:
  Applications to Quantum Stirling Engines
- Publication status: Published article; duplicate arXiv preprint sources retained
- Venue or source type: Advanced Quantum Technologies 8, e2500204
- Year or source date: 2025
- DOI, arXiv ID, or other identifier: arXiv `2502.19561v3`; DOI not extracted from
  reviewed CV source
- Authors as stated in source: Bastian Castorene; Vinicius Gomes de Paula; Francisco J.
  Pena; Clebson Cruz; Mario Reis; Patricio Vargas
- Related people: `P-0006` Vinicius Gomes de Paula; `P-0009` Clebson dos Santos Cruz;
  `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0016`, `SRC-0017`, `SRC-0003`, `SRC-0006`, `SRC-0040`
- Notes: `SRC-0016` and `SRC-0017` are duplicate arXiv PDFs; final journal metadata was
  confirmed from CV publication sections. DOI remains for manual validation.

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

### PUB-0011 - Novel Co5 Cluster Based Triazole Bridged Cobalt-Fluorophosphate: Synthesis, Structure, Magnetic and Heterogeneous Catalytic Epoxidation Studies

- Unique ID: PUB-0011
- Title: Novel Co5 Cluster Based Triazole Bridged Cobalt-Fluorophosphate: Synthesis,
  Structure, Magnetic and Heterogeneous Catalytic Epoxidation Studies
- Publication status: Published article
- Venue or source type: European Journal of Inorganic Chemistry, ejic.202300123
- Year or source date: First published 2023-05-09
- DOI, arXiv ID, or other identifier: DOI `10.1002/ejic.202300123`
- Authors as stated in source: Rupam Sen; Sudipta De; Antonio M. dos Santos; Livia B. L.
  Escobar; Paula Cristina Brandao; Filipe A. Almeida Paz; Mario S. Reis; Zhi Lin
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0019`, `SRC-0003`
- Notes: Record initially extracted from screenshot and later cross-checked against
  Mario de Souza Reis Junior CV publication section.

### PUB-0012 - Magnetic Anisotropy and Spin Coupling in a Cobalt(II) Dimer with Bioinspired Bridges

- Unique ID: PUB-0012
- Title: Magnetic Anisotropy and Spin Coupling in a Cobalt(II) Dimer with Bioinspired
  Bridges
- Publication status: Published article
- Venue or source type: ACS Physical Chemistry Au 6, 334-339
- Year or source date: 2026
- DOI, arXiv ID, or other identifier: DOI `10.1021/acsphyschemau.5c00134`
- Authors as stated in source: Alan Almeida; Ana Clara das Neves; Paula Brandao; Mariem
  Masmoudi; Luis Ghivelder; Clebson Cruz; Mario Reis
- Related people: `P-0008` Alan Fillipe de Souza Almeida; `P-0009` Clebson dos Santos
  Cruz; `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0020`, `SRC-0039`, `SRC-0040`
- Notes: Alan Almeida name variant should be manually confirmed against `P-0008`; CV
  publication sections cross-confirm the article.

### PUB-0013 - Colossal refrigerant capacity in [Fe(hyptrz)3]A2 . H2O around the freezing temperature of water

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

### PUB-0016 - Theoretical investigation of the barocaloric effect in spin-crossover systems upon first- and second-order phase transition conversion

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

### PUB-0019 - The refrigerant capacity in spin-crossover materials: Application to [Fe(phen)2(NCS)2]

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

### PUB-0020 - Correlation between anomalous thermal expansion coefficient and barocaloric effect: Application to spin crossover systems

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

### PUB-0021 - First indirect experimental evidence and theoretical discussion of giant refrigeration capacity through the reversible pressure induced spin-crossover phase transition

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

### PUB-0022 - Refrigeration through Barocaloric Effect Using the Spin Crossover Complex {Fe[H2B(pz)2]2(bipy)}

- Unique ID: PUB-0022
- Title: Refrigeration through Barocaloric Effect Using the Spin Crossover Complex
  {Fe[H2B(pz)2]2(bipy)}
- Publication status: Published article
- Venue or source type: physica status solidi (b) 258, 2100108
- Year or source date: 2021
- DOI, arXiv ID, or other identifier: DOI `10.1002/pssb.202100108`
- Authors as stated in source: Pedro J. von Ranke; Bruno P. Alho; Pedro H. S. da Silva;
  Rafael M. Ribas; Eduardo P. Nobrega; Vinicius S. R. de Sousa; Alexandre M. G.
  Carvalho; Paula O. Ribeiro
- Related people: `P-0005` Pedro Jorge von Ranke Perlingeiro; `P-0002` Bruno de Pinho
  Alho; `P-0007` Vinicius da Silva Ramos de Sousa; `P-0004` Paula de Oliveira Ribeiro
  Alho
- Source IDs: `SRC-0030`, `SRC-0002`, `SRC-0004`, `SRC-0005`, `SRC-0007`
- Notes: Source filename states `not final version`; CV publication sections confirm
  volume 258 and page/article number 2100108. Final DOI/page metadata should still be
  manually checked before proposal submission.

### PUB-0023 - Magnetocaloric and barocaloric effects of metal complexes for solid state cooling: Review, trends and perspectives

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

### PUB-0024 - Magnetocaloric effect in GdNi4Al under extreme hydrostatic pressures: A DFT+U and Monte Carlo study

- Unique ID: PUB-0024
- Title: Magnetocaloric effect in GdNi4Al under extreme hydrostatic pressures: A DFT+U
  and Monte Carlo study
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Physical Review B 113, 174429
- Year or source date: 2026
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: J. P. C. Felix; A. F. S. Almeida; H. Fabrelli; E. M.
  Bittar; C. V. Morais; M. J. Piotrowski; V. S. R. de Sousa
- Related people: `P-0008` Alan Fillipe de Souza Almeida; `P-0007` Vinicius da Silva
  Ramos de Sousa
- Source IDs: `SRC-0039`, `SRC-0007`
- Notes: CV-derived thematic article from the 2016-2026 scan; title or formula was
  partially affected by CV/PDF extraction and should be manually validated before
  proposal submission.

### PUB-0025 - Evidence of the Giant Barocaloric Effect in the PVA-Slime System by Molecular Dynamics Simulations

- Unique ID: PUB-0025
- Title: Evidence of the Giant Barocaloric Effect in the PVA-Slime System by Molecular
  Dynamics Simulations
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: ACS Omega 10, 39580-39588
- Year or source date: 2025
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Richard Javier Caraballo-Vivas; Marcelo Albuquerque;
  Vanessa Torres; Luciano T. Costa; Pedro Venezuela; Mario Reis
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0026 - Quantitative determination of the order phase transitions of multicaloric materials: The validity of -overshoot

- Unique ID: PUB-0026
- Title: Quantitative determination of the order phase transitions of multicaloric
  materials: The validity of -overshoot
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Results in Physics 75, 108320
- Year or source date: 2025
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Mario Reis; Jia Yan Law; Victorino Franco
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`
- Notes: CV-derived thematic article from the 2016-2026 scan; title or formula was
  partially affected by CV/PDF extraction and should be manually validated before
  proposal submission.

### PUB-0027 - Simulating work extraction in a dinuclear quantum battery using a variational quantum algorithm

- Unique ID: PUB-0027
- Title: Simulating work extraction in a dinuclear quantum battery using a variational
  quantum algorithm
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Physical Review E 111, 064119
- Year or source date: 2025
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Lucas Q. Galvao; Ana Clara das Neves; Maron F. Anka;
  Clebson Cruz
- Related people: `P-0009` Clebson dos Santos Cruz; `P-0012` Maron Freitas Anka
- Source IDs: `SRC-0040`, `SRC-0044`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0028 - Study of the magnetic and magnetocaloric properties of amorphous alloys formed by the Erx series

- Unique ID: PUB-0028
- Title: Study of the magnetic and magnetocaloric properties of amorphous alloys formed
  by the Erx series
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Non-Crystalline Solids 649, 123336
- Year or source date: 2025
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: V. L. O. Freitas; P. P. Almeida Neto; S. S. Costa; B. P.
  Alho; P. O. Ribeiro; V. S. R. de Sousa; P. J. von Ranke; E. P. Nobrega
- Related people: `P-0002` Bruno de Pinho Alho; `P-0004` Paula de Oliveira Ribeiro Alho;
  `P-0005` Pedro Jorge von Ranke Perlingeiro; `P-0007` Vinicius da Silva Ramos de Sousa
- Source IDs: `SRC-0002`, `SRC-0004`, `SRC-0005`, `SRC-0007`
- Notes: CV-derived thematic article from the 2016-2026 scan; title or formula was
  partially affected by CV/PDF extraction and should be manually validated before
  proposal submission.

### PUB-0029 - Theoretical analysis of the anomalous table-like magnetocaloric effect in Er0.5Gd0.5Al2

- Unique ID: PUB-0029
- Title: Theoretical analysis of the anomalous table-like magnetocaloric effect in
  Er0.5Gd0.5Al2
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Magnetism and Magnetic Materials 628, 173111
- Year or source date: 2025
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: P. J. von Ranke; P. O. Ribeiro; B. P. Alho; R. S. de
  Oliveira; A. M. G. Carvalho
- Related people: `P-0005` Pedro Jorge von Ranke Perlingeiro; `P-0004` Paula de Oliveira
  Ribeiro Alho; `P-0002` Bruno de Pinho Alho
- Source IDs: `SRC-0002`, `SRC-0004`, `SRC-0005`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0030 - Theoretical modelling of magnetic and magnetocaloric properties in rare-earth high-entropy compounds: Insights from Gd0.2Tb0.2Dy0.2Ho0.2Er0.2Al2

- Unique ID: PUB-0030
- Title: Theoretical modelling of magnetic and magnetocaloric properties in rare-earth
  high-entropy compounds: Insights from Gd0.2Tb0.2Dy0.2Ho0.2Er0.2Al2
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Alloys and Compounds 1036, 181775
- Year or source date: 2025
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: R. S. de Oliveira; A. M. G. Carvalho; V. S. R. de Sousa;
  E. P. Nobrega; S. S. dos Santos; P. J. von Ranke; P. O. Ribeiro; B. P. Alho
- Related people: `P-0007` Vinicius da Silva Ramos de Sousa; `P-0005` Pedro Jorge von
  Ranke Perlingeiro; `P-0004` Paula de Oliveira Ribeiro Alho; `P-0002` Bruno de Pinho
  Alho
- Source IDs: `SRC-0002`, `SRC-0004`, `SRC-0005`, `SRC-0007`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0031 - Electrical resistivity and the magnetocaloric effect in Pr,Tb Al2

- Unique ID: PUB-0031
- Title: Electrical resistivity and the magnetocaloric effect in Pr,Tb Al2
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Magnetism and Magnetic Materials 630, 173438
- Year or source date: 2025
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Julio C. G. Tedesco; Vagner Jandre; Alexandre Magnus G.
  Carvalho; Paula de Oliveira Ribeiro; Bruno de Pinho Alho; Pedro Jorge von Ranke; Mario
  Reis; Heloisa N. Bordallo
- Related people: `P-0004` Paula de Oliveira Ribeiro Alho; `P-0002` Bruno de Pinho Alho;
  `P-0005` Pedro Jorge von Ranke Perlingeiro; `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0002`, `SRC-0003`, `SRC-0004`, `SRC-0005`
- Notes: CV-derived thematic article from the 2016-2026 scan; title or formula was
  partially affected by CV/PDF extraction and should be manually validated before
  proposal submission.

### PUB-0032 - Theoretical insights into the magnetic and magnetocaloric behavior of CeAg exhibiting ferromagnetic and quadrupolar order

- Unique ID: PUB-0032
- Title: Theoretical insights into the magnetic and magnetocaloric behavior of CeAg
  exhibiting ferromagnetic and quadrupolar order
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Magnetism and Magnetic Materials 633, 173545
- Year or source date: 2025
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: P. J. von Ranke
- Related people: `P-0005` Pedro Jorge von Ranke Perlingeiro
- Source IDs: `SRC-0005`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0033 - Universal quantum stirling-like engine under squeezed thermal baths

- Unique ID: PUB-0033
- Title: Universal quantum stirling-like engine under squeezed thermal baths
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: European Physical Journal Plus 140, 199
- Year or source date: 2025
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Hamid-Reza Rastegar-Sedehi; Nikolaos Papadatos; Clebson
  Cruz
- Related people: `P-0009` Clebson dos Santos Cruz
- Source IDs: `SRC-0040`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0034 - Anisotropic magneto-resistivity and magnetocaloric effect in DyAl2

- Unique ID: PUB-0034
- Title: Anisotropic magneto-resistivity and magnetocaloric effect in DyAl2
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Alloys and Compounds 976, 173149
- Year or source date: 2024
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Paula O. Ribeiro; Bruno P. Alho; Rodrigo S. de Oliveira;
  Eduardo P. Nobrega; Vinicius S. R. de Sousa; Pedro J. von Ranke; Deborah L. Schlagel;
  Anis Biswas; Yaroslav Mudryk; Vitalij K. Pecharsky
- Related people: `P-0004` Paula de Oliveira Ribeiro Alho; `P-0002` Bruno de Pinho Alho;
  `P-0007` Vinicius da Silva Ramos de Sousa; `P-0005` Pedro Jorge von Ranke Perlingeiro
- Source IDs: `SRC-0002`, `SRC-0004`, `SRC-0005`, `SRC-0007`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0035 - Exploring entanglement effects in a quantum stirling heat engine

- Unique ID: PUB-0035
- Title: Exploring entanglement effects in a quantum stirling heat engine
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Physica Scripta 99, 125936
- Year or source date: 2024
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Hamid Reza Rastegar Sedehi; Clebson Cruz
- Related people: `P-0009` Clebson dos Santos Cruz
- Source IDs: `SRC-0040`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0036 - Influence of Ga doping on magnetic properties, magnetocaloric effect, and electronic structure of pseudobinary GdZn1-xGax

- Unique ID: PUB-0036
- Title: Influence of Ga doping on magnetic properties, magnetocaloric effect, and
  electronic structure of pseudobinary GdZn1-xGax
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Physical Review Materials 8, 114418
- Year or source date: 2024
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Anis Biswas; Ajay Kumar; Prashant Singh; Tyler Del Rose;
  Rajiv K. Chouhan; B. C. Margato; B. P. Alho; E. P. Nobrega; P. J. von Ranke; P. O.
  Ribeiro; V. S. R. de Sousa; Yaroslav Mudryk
- Related people: `P-0002` Bruno de Pinho Alho; `P-0005` Pedro Jorge von Ranke
  Perlingeiro; `P-0004` Paula de Oliveira Ribeiro Alho; `P-0007` Vinicius da Silva Ramos
  de Sousa
- Source IDs: `SRC-0002`, `SRC-0004`, `SRC-0005`, `SRC-0007`
- Notes: CV-derived thematic article from the 2016-2026 scan; title or formula was
  partially affected by CV/PDF extraction and should be manually validated before
  proposal submission.

### PUB-0037 - Magnetism and the magnetocaloric effect in amorphous metals formed by the series Gd10-xNix

- Unique ID: PUB-0037
- Title: Magnetism and the magnetocaloric effect in amorphous metals formed by the
  series Gd10-xNix
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Applied Physics A - Materials Science & Processing 130, 365
- Year or source date: 2024
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: E. P. Nobrega; V. L. O. Freitas; S. S. Costa; B. P. Alho;
  P. O. Ribeiro; V. S. R. de Sousa; P. J. von Ranke
- Related people: `P-0002` Bruno de Pinho Alho; `P-0004` Paula de Oliveira Ribeiro Alho;
  `P-0007` Vinicius da Silva Ramos de Sousa; `P-0005` Pedro Jorge von Ranke Perlingeiro
- Source IDs: `SRC-0002`, `SRC-0004`, `SRC-0005`, `SRC-0007`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0038 - Magnetocaloric effect in Gd1-xCexNi (x = 0-0.6): A cost-effective approach to tuning Curie temperature from 70 K to 30 K

- Unique ID: PUB-0038
- Title: Magnetocaloric effect in Gd1-xCexNi (x = 0-0.6): A cost-effective approach to
  tuning Curie temperature from 70 K to 30 K
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Alloys and Compounds 989, 174186
- Year or source date: 2024
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Benjamin Hilliard; V. S. R. de Sousa; Kyle
  Dixon-Anderson; Yaroslav Mudryk; Jun Cui
- Related people: `P-0007` Vinicius da Silva Ramos de Sousa
- Source IDs: `SRC-0007`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0039 - Magnetocaloric effect in the first order antiferromagnetic phase transition compound CeMg

- Unique ID: PUB-0039
- Title: Magnetocaloric effect in the first order antiferromagnetic phase transition
  compound CeMg
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Magnetism and Magnetic Materials 604, 172296
- Year or source date: 2024
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: P. J. von Ranke; P. O. Ribeiro; B. P. Alho
- Related people: `P-0005` Pedro Jorge von Ranke Perlingeiro; `P-0004` Paula de Oliveira
  Ribeiro Alho; `P-0002` Bruno de Pinho Alho
- Source IDs: `SRC-0002`, `SRC-0004`, `SRC-0005`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0040 - Simulating thermodynamic properties of dinuclear metal complexes using Variational Quantum Algorithms

- Unique ID: PUB-0040
- Title: Simulating thermodynamic properties of dinuclear metal complexes using
  Variational Quantum Algorithms
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Physica Scripta 99, 095131
- Year or source date: 2024
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Ana Clara das Neves Silva; Lucas Queiroz Galvao; Clebson
  Cruz
- Related people: `P-0009` Clebson dos Santos Cruz
- Source IDs: `SRC-0040`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0041 - Study on the magnetothermal properties of the Dy1-xTbxAl2 series of compounds

- Unique ID: PUB-0041
- Title: Study on the magnetothermal properties of the Dy1-xTbxAl2 series of compounds
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Magnetism and Magnetic Materials 609, 172458
- Year or source date: 2024
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: R. S. de Oliveira; P. O. Ribeiro; E. P. Nobrega; V. S. R.
  de Sousa; P. C. M. Clemente; P. J. von Ranke; M. Khan; A. K. Pathak; Y. Mudryk; B. P.
  Alho
- Related people: `P-0004` Paula de Oliveira Ribeiro Alho; `P-0007` Vinicius da Silva
  Ramos de Sousa; `P-0005` Pedro Jorge von Ranke Perlingeiro; `P-0002` Bruno de Pinho
  Alho
- Source IDs: `SRC-0002`, `SRC-0004`, `SRC-0005`, `SRC-0007`
- Notes: CV-derived thematic article from the 2016-2026 scan; title or formula was
  partially affected by CV/PDF extraction and should be manually validated before
  proposal submission.

### PUB-0042 - Theoretical investigation of the giant magnetocaloric effect in Er0.7Tm0.3Al2

- Unique ID: PUB-0042
- Title: Theoretical investigation of the giant magnetocaloric effect in Er0.7Tm0.3Al2
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Alloys and Compounds 991, 174511
- Year or source date: 2024
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: P. J. von Ranke; P. O. Ribeiro; B. P. Alho; E. P.
  Nobrega; V. S. R. de Sousa; A. M. G. Carvalho; C. J. Pacheco; J. L. G. Affonso; W. S.
  Torres
- Related people: `P-0005` Pedro Jorge von Ranke Perlingeiro; `P-0004` Paula de Oliveira
  Ribeiro Alho; `P-0002` Bruno de Pinho Alho; `P-0007` Vinicius da Silva Ramos de Sousa
- Source IDs: `SRC-0002`, `SRC-0004`, `SRC-0005`, `SRC-0007`
- Notes: CV-derived thematic article from the 2016-2026 scan; title or formula was
  partially affected by CV/PDF extraction and should be manually validated before
  proposal submission.

### PUB-0043 - Work and efficiency fluctuations in a quantum Otto cycle with idle levels

- Unique ID: PUB-0043
- Title: Work and efficiency fluctuations in a quantum Otto cycle with idle levels
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Physical Review E 109, 064129
- Year or source date: 2024
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Maron F. Anka; Thiago R. de Oliveira; Daniel Jonathan
- Related people: `P-0012` Maron Freitas Anka
- Source IDs: `SRC-0044`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0044 - Full Heusler Fe2CrAl nanogranular films produced by pulsed laser deposition for magnonic applications

- Unique ID: PUB-0044
- Title: Full Heusler Fe2CrAl nanogranular films produced by pulsed laser deposition for
  magnonic applications
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Applied Physics 134, 023901
- Year or source date: 2023
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: V. M. Andrade; N. R. Checca; V. G. de Paula; K. R.
  Pirota; A. L. Rossi; F. Garcia; A. Vovk; S. A. Bunyaev; G. N. Kakazei
- Related people: `P-0006` Vinicius Gomes de Paula
- Source IDs: `SRC-0006`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0045 - Multifunctional compounds: A comparative review towards all-d Hexagonal Ferromagnets

- Unique ID: PUB-0045
- Title: Multifunctional compounds: A comparative review towards all-d Hexagonal
  Ferromagnets
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Alloys and Compounds 963, 171009
- Year or source date: 2023
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Vinicius G. de Paula; Vivian M. Andrade; Mario Reis
- Related people: `P-0006` Vinicius Gomes de Paula; `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`, `SRC-0006`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0046 - Theoretical investigation of rotating magnetocaloric effect in PrRu2

- Unique ID: PUB-0046
- Title: Theoretical investigation of rotating magnetocaloric effect in PrRu2
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Magnetism and Magnetic Materials 572, 170633
- Year or source date: 2023
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: P. C. M. Clemente; B. P. Alho; P. O. Ribeiro; E. P.
  Nobrega; V. S. R. de Sousa; S. S. Santos; P. J. von Ranke
- Related people: `P-0002` Bruno de Pinho Alho; `P-0004` Paula de Oliveira Ribeiro Alho;
  `P-0007` Vinicius da Silva Ramos de Sousa; `P-0005` Pedro Jorge von Ranke Perlingeiro
- Source IDs: `SRC-0002`, `SRC-0004`, `SRC-0005`, `SRC-0007`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0047 - Theoretical investigation of magnetic and thermal properties in Dy1-xScxNi2 series

- Unique ID: PUB-0047
- Title: Theoretical investigation of magnetic and thermal properties in Dy1-xScxNi2
  series
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Applied Physics 134, 125103
- Year or source date: 2023
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: P. C. M. Clemente; J. M. N. da Silva; R. S. de Oliveira;
  B. P. Alho; E. P. Nobrega; V. S. R. de Sousa; P. J. von Ranke; P. O. Ribeiro
- Related people: `P-0002` Bruno de Pinho Alho; `P-0007` Vinicius da Silva Ramos de
  Sousa; `P-0005` Pedro Jorge von Ranke Perlingeiro; `P-0004` Paula de Oliveira Ribeiro
  Alho
- Source IDs: `SRC-0002`, `SRC-0004`, `SRC-0005`, `SRC-0007`
- Notes: CV-derived thematic article from the 2016-2026 scan; title or formula was
  partially affected by CV/PDF extraction and should be manually validated before
  proposal submission.

### PUB-0048 - Geometric quantum discord and coherence in a dipolar interacting magnetic system

- Unique ID: PUB-0048
- Title: Geometric quantum discord and coherence in a dipolar interacting magnetic
  system
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Physica Scripta 98, 075105
- Year or source date: 2023
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Clebson Cruz; Maron Freitas Anka; Hamid Reza Rastegar
  Sedehi; Cleidson Castro
- Related people: `P-0009` Clebson dos Santos Cruz; `P-0012` Maron Freitas Anka
- Source IDs: `SRC-0040`, `SRC-0044`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0049 - Effect of Induced Transition on the Quantum Entanglement and Coherence in Two-Coupled Double Quantum Dot System

- Unique ID: PUB-0049
- Title: Effect of Induced Transition on the Quantum Entanglement and Coherence in
  Two-Coupled Double Quantum Dot System
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Annalen der Physik 535, 2200537
- Year or source date: 2023
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Zakaria Dahbi; Maron F. Anka; Mostafa Mansour; Moises
  Rojas; Clebson Cruz
- Related people: `P-0012` Maron Freitas Anka; `P-0009` Clebson dos Santos Cruz
- Source IDs: `SRC-0040`, `SRC-0044`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0050 - Cubic to hexagonal tuning in Fe2Mn(Si1-xGex) Heusler alloys

- Unique ID: PUB-0050
- Title: Cubic to hexagonal tuning in Fe2Mn(Si1-xGex) Heusler alloys
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Alloys and Compounds 893, 162236
- Year or source date: 2022
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: B. Pimentel; V. M. Andrade; V. G. de Paula; K. R. Pirota;
  F. Beron; M. A. Cardoso; J. N. Goncalves; J. S. Amaral; A. M. dos Santos; M. S. Reis
- Related people: `P-0006` Vinicius Gomes de Paula; `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`, `SRC-0006`
- Notes: CV-derived thematic article from the 2016-2026 scan; title or formula was
  partially affected by CV/PDF extraction and should be manually validated before
  proposal submission.

### PUB-0051 - Fathoming the anisotropic magnetoelasticity and magnetocaloric effect in GdNi

- Unique ID: PUB-0051
- Title: Fathoming the anisotropic magnetoelasticity and magnetocaloric effect in GdNi
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Physical Review B 106, 184403
- Year or source date: 2022
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: B. P. Alho; P. O. Ribeiro; V. S. R. de Sousa; B. C.
  Margato; Anis Biswas; Tyler Del Rose; R. S. de Oliveira; E. P. Nobrega; P. J. von
  Ranke; Y. Mudryk; V. K. Pecharsky
- Related people: `P-0002` Bruno de Pinho Alho; `P-0004` Paula de Oliveira Ribeiro Alho;
  `P-0007` Vinicius da Silva Ramos de Sousa; `P-0005` Pedro Jorge von Ranke Perlingeiro
- Source IDs: `SRC-0002`, `SRC-0004`, `SRC-0007`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0052 - Hidden first-order phase transitions and large magnetocaloric effects in GdNi1-xCox

- Unique ID: PUB-0052
- Title: Hidden first-order phase transitions and large magnetocaloric effects in
  GdNi1-xCox
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Alloys and Compounds 897, 163186
- Year or source date: 2022
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Anis Biswas; Tyler Del Rose; Yaroslav Mudryk; P. O.
  Ribeiro; B. P. Alho; V. S. R. de Sousa; E. P. Nobrega; P. J. von Ranke; Vitalij K.
  Pecharsky
- Related people: `P-0004` Paula de Oliveira Ribeiro Alho; `P-0002` Bruno de Pinho Alho;
  `P-0007` Vinicius da Silva Ramos de Sousa; `P-0005` Pedro Jorge von Ranke Perlingeiro
- Source IDs: `SRC-0002`, `SRC-0004`, `SRC-0005`, `SRC-0007`
- Notes: CV-derived thematic article from the 2016-2026 scan; title or formula was
  partially affected by CV/PDF extraction and should be manually validated before
  proposal submission.

### PUB-0053 - Magnetothermal properties of Ho1-xDyxAl2 compounds

- Unique ID: PUB-0053
- Title: Magnetothermal properties of Ho1-xDyxAl2 compounds
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Magnetism and Magnetic Materials 544, 168705
- Year or source date: 2022
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: P. O. Ribeiro; B. P. Alho; R. S. de Oliveira; E. P.
  Nobrega; V. S. R. de Sousa; P. J. von Ranke; Anis Biswas; Mahmud Khan; Y. Mudryk; V.
  K. Pecharsky
- Related people: `P-0004` Paula de Oliveira Ribeiro Alho; `P-0002` Bruno de Pinho Alho;
  `P-0007` Vinicius da Silva Ramos de Sousa; `P-0005` Pedro Jorge von Ranke Perlingeiro
- Source IDs: `SRC-0002`, `SRC-0004`, `SRC-0005`, `SRC-0007`
- Notes: CV-derived thematic article from the 2016-2026 scan; title or formula was
  partially affected by CV/PDF extraction and should be manually validated before
  proposal submission.

### PUB-0054 - Mean-Field Modeling of Magnetocaloric Effect of Antiferromagnetic Compounds

- Unique ID: PUB-0054
- Title: Mean-Field Modeling of Magnetocaloric Effect of Antiferromagnetic Compounds
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: IEEE Magnetics Letters 13, 1-4
- Year or source date: 2022
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: B. P. Alho; P. O. Ribeiro; R. S. de Oliveira; V. S. R. de
  Sousa; E. P. Nobrega; B. C. Margato; J. M. N. da Silva; P. J. von Ranke
- Related people: `P-0002` Bruno de Pinho Alho; `P-0004` Paula de Oliveira Ribeiro Alho;
  `P-0007` Vinicius da Silva Ramos de Sousa; `P-0005` Pedro Jorge von Ranke Perlingeiro
- Source IDs: `SRC-0002`, `SRC-0004`, `SRC-0005`, `SRC-0007`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0055 - Quantum battery based on quantum discord at room temperature

- Unique ID: PUB-0055
- Title: Quantum battery based on quantum discord at room temperature
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Quantum Science and Technology 7, 025020
- Year or source date: 2022
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Clebson Cruz; Maron F. Anka; Mario S. Reis; Romain
  Bachelard; Alan C. Santos
- Related people: `P-0009` Clebson dos Santos Cruz; `P-0012` Maron Freitas Anka;
  `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`, `SRC-0040`, `SRC-0044`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0056 - Synthesis and magnetic properties of two cobalt-coordination polymers containing 1,10-phenanthroline and alkyl dicarboxylates ligands

- Unique ID: PUB-0056
- Title: Synthesis and magnetic properties of two cobalt-coordination polymers
  containing 1,10-phenanthroline and alkyl dicarboxylates ligands
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Molecular Structure 1261, 132820
- Year or source date: 2022
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Filipe J. Teixeira; Leona S. Flores; Talita Valverde;
  Livia B. L. Escobar; Mario S. Reis; Charlane C. Correa
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0057 - Quantum entanglement in low-dimensional metal complexes: an outlook

- Unique ID: PUB-0057
- Title: Quantum entanglement in low-dimensional metal complexes: an outlook
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Physica B - Condensed Matter 653, 414485
- Year or source date: 2022
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Clebson Cruz
- Related people: `P-0009` Clebson dos Santos Cruz
- Source IDs: `SRC-0040`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0058 - Theoretical investigation of crystalline electric field influence on the magnetocaloric effect in the cubic praseodymium system

- Unique ID: PUB-0058
- Title: Theoretical investigation of crystalline electric field influence on the
  magnetocaloric effect in the cubic praseodymium system
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Physical Review B 105, 085153
- Year or source date: 2022
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: P. J. von Ranke; W. S. Torres
- Related people: `P-0005` Pedro Jorge von Ranke Perlingeiro
- Source IDs: `SRC-0005`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0059 - Theoretical investigation of crystalline electric field influence on the magnetocaloric effect in PrRh2

- Unique ID: PUB-0059
- Title: Theoretical investigation of crystalline electric field influence on the
  magnetocaloric effect in PrRh2
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Magnetism and Magnetic Materials 550, 169100
- Year or source date: 2022
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: P. J. von Ranke; S. S. Santos; J. L. G. Affonso
- Related people: `P-0005` Pedro Jorge von Ranke Perlingeiro
- Source IDs: `SRC-0005`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0060 - All-d-Metal Full Heusler Alloys: A Novel Class of Functional Materials

- Unique ID: PUB-0060
- Title: All-d-Metal Full Heusler Alloys: A Novel Class of Functional Materials
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Chemistry of Materials 33, 5483-5495
- Year or source date: 2021
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Vinicius G. de Paula; Mario S. Reis
- Related people: `P-0006` Vinicius Gomes de Paula; `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`, `SRC-0006`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0061 - Magnetism and magnetocaloric effect in amorphous ferrimagnetic systems: Application to the Gd Fe Al series

- Unique ID: PUB-0061
- Title: Magnetism and magnetocaloric effect in amorphous ferrimagnetic systems:
  Application to the Gd Fe Al series
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Non-Crystalline Solids 573, 121133
- Year or source date: 2021
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: V. L. O. Freitas; S. S. Costa; C. J. Pacheco; B. P. Alho;
  P. O. Ribeiro; P. J. von Ranke; V. S. R. de Sousa; E. P. Nobrega
- Related people: `P-0002` Bruno de Pinho Alho; `P-0004` Paula de Oliveira Ribeiro Alho;
  `P-0005` Pedro Jorge von Ranke Perlingeiro; `P-0007` Vinicius da Silva Ramos de Sousa
- Source IDs: `SRC-0002`, `SRC-0004`, `SRC-0005`, `SRC-0007`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0062 - Magnetothermal properties of TmxDy1-xAl2 compounds

- Unique ID: PUB-0062
- Title: Magnetothermal properties of TmxDy1-xAl2 compounds
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Alloys and Compounds 858, 157682
- Year or source date: 2021
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: P. O. Ribeiro; B. P. Alho; R. S. de Oliveira; E. P.
  Nobrega; V. S. R. de Sousa; P. J. von Ranke; Y. Mudryk; V. K. Pecharsky
- Related people: `P-0004` Paula de Oliveira Ribeiro Alho; `P-0002` Bruno de Pinho Alho;
  `P-0007` Vinicius da Silva Ramos de Sousa; `P-0005` Pedro Jorge von Ranke Perlingeiro
- Source IDs: `SRC-0002`, `SRC-0004`, `SRC-0005`, `SRC-0007`
- Notes: CV-derived thematic article from the 2016-2026 scan; title or formula was
  partially affected by CV/PDF extraction and should be manually validated before
  proposal submission.

### PUB-0063 - Toward efficient elastocaloric systems: Predicting material thermal properties with high fidelity

- Unique ID: PUB-0063
- Title: Toward efficient elastocaloric systems: Predicting material thermal properties
  with high fidelity
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Acta Materialia 217, 117162
- Year or source date: 2021
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: L. D. Griffith; B. P. Alho; A. Czernuszewicz; P. O.
  Ribeiro; J. Slaughter; V. K. Pecharsky
- Related people: `P-0002` Bruno de Pinho Alho; `P-0004` Paula de Oliveira Ribeiro Alho
- Source IDs: `SRC-0002`, `SRC-0004`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0064 - Understanding the Dependence of Nanoparticles Magnetothermal Properties on Their Size for Hyperthermia Applications: A Case Study for La-Sr Manganites

- Unique ID: PUB-0064
- Title: Understanding the Dependence of Nanoparticles Magnetothermal Properties on
  Their Size for Hyperthermia Applications: A Case Study for La-Sr Manganites
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Nanomaterials 11, 1826
- Year or source date: 2021
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Mylla C. Ferreira; Bruno Pimentel; Vivian Andrade;
  Vladimir Zverev; Radel R. Gimaev; Andrei S. Pomorov; Alexander Pyatakov; Yulia
  Alekhina; Aleksei Komlev; Liudmila Makarova; Nikolai Perov; Mario S. Reis
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0065 - Measurement-based quantum heat engine in a multilevel system

- Unique ID: PUB-0065
- Title: Measurement-based quantum heat engine in a multilevel system
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Physical Review E 104, 054128
- Year or source date: 2021
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Maron F. Anka; Thiago R. de Oliveira; Daniel Jonathan
- Related people: `P-0012` Maron Freitas Anka
- Source IDs: `SRC-0044`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0066 - A 3D interpenetrated Co(II)-glutarate coordination polymer: synthesis, crystal structure, magnetic and adsorption properties

- Unique ID: PUB-0066
- Title: A 3D interpenetrated Co(II)-glutarate coordination polymer: synthesis, crystal
  structure, magnetic and adsorption properties
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Inorganica Chimica Acta 511, 119791
- Year or source date: 2020
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Filipe J. Teixeira; Leona S. Flores; Livia B. L. Escobar;
  Thiago C. dos Santos; Maria I. Yoshida; Mario S. Reis; Stephen Hill; Celia M. Ronconi;
  Charlane C. Correa
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0067 - Caloric effects of quantum materials: An outlook

- Unique ID: PUB-0067
- Title: Caloric effects of quantum materials: An outlook
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Physics Open 4, 100028
- Year or source date: 2020
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Mario S. Reis; Ning Ma
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0068 - Low-Temperature Crystal Structure and Mean-Field Modeling of ErxDy1-xAl2 Intermetallics

- Unique ID: PUB-0068
- Title: Low-Temperature Crystal Structure and Mean-Field Modeling of ErxDy1-xAl2
  Intermetallics
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Metals 10, 1662
- Year or source date: 2020
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Yaroslav Mudryk; Bruno P. Alho; Paula O. Ribeiro; Vitalij
  K. Pecharsky
- Related people: `P-0002` Bruno de Pinho Alho; `P-0004` Paula de Oliveira Ribeiro Alho
- Source IDs: `SRC-0002`, `SRC-0004`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0069 - Thermal annealing influence on structural, magnetic, electronic, and mechanical properties of off-stoichiometric Ni40Cu10Mn35Ti15 all-d-metal Heusler alloy

- Unique ID: PUB-0069
- Title: Thermal annealing influence on structural, magnetic, electronic, and mechanical
  properties of off-stoichiometric Ni40Cu10Mn35Ti15 all-d-metal Heusler alloy
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Materials Research 35, 3004-3011
- Year or source date: 2020
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Vinicius G. de Paula; Leonardo S. de Oliveira; Anibal A.
  Mendes Filho; Carlos T. Rios; Jose A. Souza
- Related people: `P-0006` Vinicius Gomes de Paula
- Source IDs: `SRC-0006`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0070 - Anisotropic exchange in GdGa

- Unique ID: PUB-0070
- Title: Anisotropic exchange in GdGa
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Alloys and Compounds 827, 154119
- Year or source date: 2020
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: V. S. R. de Sousa; E. P. Nobrega; P. O. Ribeiro; B. P.
  Alho; P. J. von Ranke
- Related people: `P-0007` Vinicius da Silva Ramos de Sousa; `P-0004` Paula de Oliveira
  Ribeiro Alho; `P-0002` Bruno de Pinho Alho; `P-0005` Pedro Jorge von Ranke Perlingeiro
- Source IDs: `SRC-0004`, `SRC-0005`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0071 - Free-energy analysis of the nonhysteretic first-order phase transition of Eu2In

- Unique ID: PUB-0071
- Title: Free-energy analysis of the nonhysteretic first-order phase transition of Eu2In
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Physical Review B 102, 134425
- Year or source date: 2020
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: P. J. von Ranke; B. P. Alho; P. O. Ribeiro; F. Guillou;
  Y. Mudryk; V. K. Pecharsky
- Related people: `P-0005` Pedro Jorge von Ranke Perlingeiro; `P-0002` Bruno de Pinho
  Alho; `P-0004` Paula de Oliveira Ribeiro Alho
- Source IDs: `SRC-0004`, `SRC-0005`
- Notes: CV-derived thematic article from the 2016-2026 scan; title or formula was
  partially affected by CV/PDF extraction and should be manually validated before
  proposal submission.

### PUB-0072 - Quantifying quantum coherence in a metal-silicate framework

- Unique ID: PUB-0072
- Title: Quantifying quantum coherence in a metal-silicate framework
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: EPL 130, 30006
- Year or source date: 2020
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: C. Cruz; M. F. Anka
- Related people: `P-0009` Clebson dos Santos Cruz; `P-0012` Maron Freitas Anka
- Source IDs: `SRC-0040`, `SRC-0044`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0073 - Unit cell volume reduction of Gd5(Si,Ge)4 nanoparticles controlled by bulk compressibility

- Unique ID: PUB-0073
- Title: Unit cell volume reduction of Gd5(Si,Ge)4 nanoparticles controlled by bulk
  compressibility
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Alloys and Compounds 848, 156384
- Year or source date: 2020
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: V. M. Andrade; J. H. Belo; N. R. Checca; A. Rossi; F.
  Garcia; B. Almeida; J. C. G. Tedesco; A. Poulain; A. M. Pereira; M. S. Reis; J. P.
  Araujo
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0074 - Anomalous acoustic phonons as the physical mechanism behind the adiabatic barocaloric effect on graphene

- Unique ID: PUB-0074
- Title: Anomalous acoustic phonons as the physical mechanism behind the adiabatic
  barocaloric effect on graphene
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Scientific Reports 9, 219
- Year or source date: 2019
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Ning Ma; Mario S. Reis
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`
- Notes: CV-derived thematic article from the 2016-2026 scan; title or formula was
  partially affected by CV/PDF extraction and should be manually validated before
  proposal submission.

### PUB-0075 - Experimental and theoretical evidences that atomic disorder suppresses half-metallicity of Heusler compounds

- Unique ID: PUB-0075
- Title: Experimental and theoretical evidences that atomic disorder suppresses
  half-metallicity of Heusler compounds
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Intermetallics 111, 106502
- Year or source date: 2019
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: R. J. Caraballo Vivas; J. Tedesco; N. R. Checca; N. M.
  Fortunato; J. N. Goncalves; D. Candela; A. M. G. Carvalho; J. Amaral; Mario Reis
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0076 - Multicaloric effect in a multiferroic composite of Gd5(Si,Ge)4 microparticles embedded into a ferroelectric PVDF matrix

- Unique ID: PUB-0076
- Title: Multicaloric effect in a multiferroic composite of Gd5(Si,Ge)4 microparticles
  embedded into a ferroelectric PVDF matrix
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Scientific Reports 9, 18308
- Year or source date: 2019
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: V. M. Andrade; A. Amirov; D. Yusupov; B. Pimentel; N.
  Barroca; A. L. Pires; J. H. Belo; A. M. Pereira; M. A. Valente; J. P. Araujo; M. S.
  Reis
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0077 - A Co(II) 1D coordination polymer constructed from 1,3-bisbenzyl-2-oxoimidazoline-4,5-dicarboxylic acid: crystal structure and magnetic properties

- Unique ID: PUB-0077
- Title: A Co(II) 1D coordination polymer constructed from
  1,3-bisbenzyl-2-oxoimidazoline-4,5-dicarboxylic acid: crystal structure and magnetic
  properties
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: New Journal of Chemistry 42, 1216-1222
- Year or source date: 2018
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Felipe Mageste Scaldini; Maria Clara Ramalho Freitas;
  Mario de Souza Reis; Maria Irene Yoshida; Klaus Krambrock; Flavia Cavalieri Machado
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0078 - Experimental realisation of off-stoichiometric Fe-Mn-Si full Heusler alloy with hexagonal crystal structure by pulsed laser deposition

- Unique ID: PUB-0078
- Title: Experimental realisation of off-stoichiometric Fe-Mn-Si full Heusler alloy with
  hexagonal crystal structure by pulsed laser deposition
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Materials & Design 143, 268-273
- Year or source date: 2018
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: N. R. Checca; R. J. Caraballo-Vivas; A. A. Coelho; A.
  Rossi; N. M. Fortunato; F. Mohseni; J. N. Goncalves; J. S. Amaral; D. L. Rocco; M. S.
  Reis
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0079 - Lanthanum Dilution Effects on the Giant Magnetocaloric Gd Si Ge Compound

- Unique ID: PUB-0079
- Title: Lanthanum Dilution Effects on the Giant Magnetocaloric Gd Si Ge Compound
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: physica status solidi (b), 1800101
- Year or source date: 2018
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Vivian M. Andrade; Joao H. Belo; Mario S. Reis; Rui M.
  Costa; Andre M. Pereira; Joao P. Araujo
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0080 - Magnetic and magnetocaloric properties in Gd1-yPryNi2 compounds

- Unique ID: PUB-0080
- Title: Magnetic and magnetocaloric properties in Gd1-yPryNi2 compounds
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Magnetism and Magnetic Materials 449, 308-312
- Year or source date: 2018
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: B. P. Alho; P. H. O. Lopes; P. O. Ribeiro; T. S. T.
  Alvarenga; E. P. Nobrega; V. S. R. de Sousa; A. M. G. Carvalho; A. Caldas; J. C. G.
  Tedesco; A. A. Coelho; N. A. de Oliveira; P. J. von Ranke
- Related people: `P-0002` Bruno de Pinho Alho; `P-0004` Paula de Oliveira Ribeiro Alho;
  `P-0007` Vinicius da Silva Ramos de Sousa; `P-0005` Pedro Jorge von Ranke Perlingeiro
- Source IDs: `SRC-0002`, `SRC-0004`, `SRC-0005`, `SRC-0007`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0081 - Structural disorder effects on the magnetic entropy change of DyCo2 intermetallic: Mechanical milling and the weakening of the itinerant electron metamagnetism mechanism

- Unique ID: PUB-0081
- Title: Structural disorder effects on the magnetic entropy change of DyCo2
  intermetallic: Mechanical milling and the weakening of the itinerant electron
  metamagnetism mechanism
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Intermetallics 94, 1-9
- Year or source date: 2018
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: V. G. de Paula; M. Gomes Silva; L. M. da Silva; A. O. dos
  Santos; R. Lang; L. Otubo; A. A. Coelho; L. P. Cardoso
- Related people: `P-0006` Vinicius Gomes de Paula
- Source IDs: `SRC-0006`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0082 - Barocaloric effect on graphene

- Unique ID: PUB-0082
- Title: Barocaloric effect on graphene
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Scientific Reports 7, 13257
- Year or source date: 2017
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Ning Ma; Mario S. Reis
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0083 - Influence of the external pressure on the quantum correlations of molecular magnets

- Unique ID: PUB-0083
- Title: Influence of the external pressure on the quantum correlations of molecular
  magnets
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Europhysics Letters 117, 20004
- Year or source date: 2017
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: C. Cruz; A. S. Alves; R. N. dos Santos; D. O.
  Soares-Pinto; J. C. O. de Jesus; J. S. de Almeida; M. S. Reis
- Related people: `P-0009` Clebson dos Santos Cruz; `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`, `SRC-0040`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0084 - A one-dimensional Mn(II)-based metal organic oxide: structure and properties

- Unique ID: PUB-0084
- Title: A one-dimensional Mn(II)-based metal organic oxide: structure and properties
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Transition Metal Chemistry 42, 605-614
- Year or source date: 2017
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Fa-Nian Shi; Yi-Wen Bai; Miao Lu; C. S. Cruz; M. S. Reis;
  Jun Gao
- Related people: `P-0009` Clebson dos Santos Cruz; `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`, `SRC-0040`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0085 - Phase composition and growth mechanisms of half-metal Heusler alloy produced by pulsed laser deposition: From core-shell nanoparticles to amorphous randomic clusters

- Unique ID: PUB-0085
- Title: Phase composition and growth mechanisms of half-metal Heusler alloy produced by
  pulsed laser deposition: From core-shell nanoparticles to amorphous randomic clusters
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Materials Chemistry and Physics 196, 103-108
- Year or source date: 2017
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: N. R. Checca; R. J. Caraballo-Vivas; R. Torrao; A. Rossi;
  M. S. Reis
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0086 - Magnetic and magnetocaloric properties of amorphous Y3Fe5O12 compound

- Unique ID: PUB-0086
- Title: Magnetic and magnetocaloric properties of amorphous Y3Fe5O12 compound
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Magnetism and Magnetic Materials 422, 157-160
- Year or source date: 2017
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: E. P. Nobrega; S. S. Costa; T. S. T. Alvarenga; B. P.
  Alho; A. Caldas; P. O. Ribeiro; V. S. R. de Sousa; N. A. de Oliveira; P. J. von Ranke
- Related people: `P-0002` Bruno de Pinho Alho; `P-0004` Paula de Oliveira Ribeiro Alho;
  `P-0007` Vinicius da Silva Ramos de Sousa; `P-0005` Pedro Jorge von Ranke Perlingeiro
- Source IDs: `SRC-0002`, `SRC-0004`, `SRC-0005`, `SRC-0007`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0087 - Magnetic and magnetocaloric properties of DyMn2Si2 compound with multiple magnetic phase transition

- Unique ID: PUB-0087
- Title: Magnetic and magnetocaloric properties of DyMn2Si2 compound with multiple
  magnetic phase transition
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Magnetism and Magnetic Materials 424, 84-88
- Year or source date: 2017
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: D. C. dos Reis; E. L. T. Franca; V. G. de Paula; A. O.
  dos Santos; A. A. Coelho; L. P. Cardoso; L. M. da Silva
- Related people: `P-0006` Vinicius Gomes de Paula
- Source IDs: `SRC-0006`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0088 - Magnetocaloric effect investigation in the ferromagnetic Eu2CuSi3 compound

- Unique ID: PUB-0088
- Title: Magnetocaloric effect investigation in the ferromagnetic Eu2CuSi3 compound
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Intermetallics 88, 36-40
- Year or source date: 2017
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: M. Gomes Silva; V. G. de Paula; A. O. dos Santos; A. A.
  Coelho; L. P. Cardoso; L. M. da Silva
- Related people: `P-0006` Vinicius Gomes de Paula
- Source IDs: `SRC-0006`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0089 - Tunable magnetocaloric effect around room temperature by Fe doping in Mn0.98Cr

- Unique ID: PUB-0089
- Title: Tunable magnetocaloric effect around room temperature by Fe doping in Mn0.98Cr
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Magnetism and Magnetic Materials 436, 85-90
- Year or source date: 2017
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: Jhon J. Ipus; Paula O. Ribeiro; P. von Ranke; R. J.
  Caraballo Vivas; Alexandre M. G. Carvalho; Adelino A. Coelho; Victorino Franco; Daniel
  L. Rocco
- Related people: `P-0004` Paula de Oliveira Ribeiro Alho; `P-0005` Pedro Jorge von
  Ranke Perlingeiro
- Source IDs: `SRC-0004`, `SRC-0005`
- Notes: CV-derived thematic article from the 2016-2026 scan; title or formula was
  partially affected by CV/PDF extraction and should be manually validated before
  proposal submission.

### PUB-0090 - The influence of crystalline electrical field on magnetic and magnetocaloric properties in Er1-yTbyAl2 compounds

- Unique ID: PUB-0090
- Title: The influence of crystalline electrical field on magnetic and magnetocaloric
  properties in Er1-yTbyAl2 compounds
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Magnetism and Magnetic Materials 442, 265-269
- Year or source date: 2017
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: P. O. Ribeiro; B. P. Alho; T. S. T. Alvarenga; E. P.
  Nobrega; V. S. R. de Sousa; A. M. G. Carvalho; A. Caldas; P. H. O. Lopes; P. J. von
  Ranke
- Related people: `P-0004` Paula de Oliveira Ribeiro Alho; `P-0002` Bruno de Pinho Alho;
  `P-0007` Vinicius da Silva Ramos de Sousa; `P-0005` Pedro Jorge von Ranke Perlingeiro
- Source IDs: `SRC-0002`, `SRC-0004`, `SRC-0005`, `SRC-0007`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0091 - The influence of dipolar and quadrupolar interactions on the magnetoresistivity and magnetocaloric effect in TmZn investigated through a microscopic model

- Unique ID: PUB-0091
- Title: The influence of dipolar and quadrupolar interactions on the magnetoresistivity
  and magnetocaloric effect in TmZn investigated through a microscopic model
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Magnetism and Magnetic Materials 441, 271-275
- Year or source date: 2017
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: P. J. von Ranke; B. P. Alho; P. O. Ribeiro; T. S. T.
  Alvarenga; E. P. Nobrega; A. Caldas; V. S. R. de Sousa
- Related people: `P-0005` Pedro Jorge von Ranke Perlingeiro; `P-0002` Bruno de Pinho
  Alho; `P-0004` Paula de Oliveira Ribeiro Alho; `P-0007` Vinicius da Silva Ramos de
  Sousa
- Source IDs: `SRC-0002`, `SRC-0004`, `SRC-0005`, `SRC-0007`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0092 - Magnetocaloric effect study on amorphous RENi3 compounds

- Unique ID: PUB-0092
- Title: Magnetocaloric effect study on amorphous RENi3 compounds
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Intermetallics 87, 90-93
- Year or source date: 2017
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: S. S. Costa; B. P. Alho; T. S. T. Alvarenga; P. J. von
  Ranke; E. P. Nobrega
- Related people: `P-0002` Bruno de Pinho Alho; `P-0005` Pedro Jorge von Ranke
  Perlingeiro
- Source IDs: `SRC-0002`, `SRC-0005`
- Notes: CV-derived thematic article from the 2016-2026 scan; title or formula was
  partially affected by CV/PDF extraction and should be manually validated before
  proposal submission.

### PUB-0093 - Carboxylate-based molecular magnet: One path toward achieving stable quantum correlations at room temperature

- Unique ID: PUB-0093
- Title: Carboxylate-based molecular magnet: One path toward achieving stable quantum
  correlations at room temperature
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Europhysics Letters 113, 40004
- Year or source date: 2016
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: C. Cruz; D. O. Soares-Pinto; Paula Brandao; A. M. dos
  Santos; M. S. Reis
- Related people: `P-0009` Clebson dos Santos Cruz; `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`, `SRC-0040`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0094 - Chemical disorder determines the deviation of the Slater-Pauling rule for Fe MnSi-based Heusler alloys: evidences from neutron diffraction and density functional theory

- Unique ID: PUB-0094
- Title: Chemical disorder determines the deviation of the Slater-Pauling rule for Fe
  MnSi-based Heusler alloys: evidences from neutron diffraction and density functional
  theory
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Physics: Condensed Matter 28, 476002
- Year or source date: 2016
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: J. C. G. Tedesco; S. S. Pedro; R. J. Caraballo Vivas; C.
  Cruz; V. M. Andrade; A. M. dos Santos; A. M. G. Carvalho; M. Costa; P. Venezuela; D.
  L. Rocco; M. S. Reis
- Related people: `P-0009` Clebson dos Santos Cruz; `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`, `SRC-0040`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0095 - Experimental evidences of enhanced magnetocaloric properties at room temperature and half-metallicity on Fe2MnSi-based Heusler alloys

- Unique ID: PUB-0095
- Title: Experimental evidences of enhanced magnetocaloric properties at room
  temperature and half-metallicity on Fe2MnSi-based Heusler alloys
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Materials Chemistry and Physics 174, 23
- Year or source date: 2016
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: R. J. Caraballo Vivas; S. S. Pedro; C. Cruz; J. C. G.
  Tedesco; A. A. Coelho; A. M. G. Carvalho; D. L. Rocco; M. S. Reis
- Related people: `P-0009` Clebson dos Santos Cruz; `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`, `SRC-0040`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0096 - Magnetic and magnetocaloric properties of La0.6Ca0.4MnO3 tunable by particle size and dimensionality

- Unique ID: PUB-0096
- Title: Magnetic and magnetocaloric properties of La0.6Ca0.4MnO3 tunable by particle
  size and dimensionality
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Acta Materialia 102, 49-55
- Year or source date: 2016
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: V. M. Andrade; R. J. Caraballo Vivas; S. S. Pedro; J. C.
  G. Tedesco; A. L. Rossi; A. A. Coelho; D. L. Rocco; M. S. Reis
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0097 - Magnetocaloric effect and evidence of superparamagnetism in GdAl2 nanocrystallites: A magnetic-structural correlation

- Unique ID: PUB-0097
- Title: Magnetocaloric effect and evidence of superparamagnetism in GdAl2
  nanocrystallites: A magnetic-structural correlation
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Physical Review B 93, 1-9
- Year or source date: 2016
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: V. G. de Paula; L. M. da Silva; A. O. dos Santos; R.
  Lang; L. Otubo; A. A. Coelho; L. P. Cardoso
- Related people: `P-0006` Vinicius Gomes de Paula
- Source IDs: `SRC-0006`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

### PUB-0098 - Theoretical investigation on the magnetocaloric effect in amorphous systems

- Unique ID: PUB-0098
- Title: Theoretical investigation on the magnetocaloric effect in amorphous systems
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Journal of Magnetism and Magnetic Materials 414, 78-81
- Year or source date: 2016
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: S. S. Costa; B. P. Alho; T. S. T. Alvarenga; P. J. von
  Ranke; E. P. Nobrega
- Related people: `P-0002` Bruno de Pinho Alho; `P-0005` Pedro Jorge von Ranke
  Perlingeiro
- Source IDs: `SRC-0005`
- Notes: CV-derived thematic article from the 2016-2026 scan; title or formula was
  partially affected by CV/PDF extraction and should be manually validated before
  proposal submission.

### PUB-0099 - Thermal entanglement and teleportation in a dipolar interacting system

- Unique ID: PUB-0099
- Title: Thermal entanglement and teleportation in a dipolar interacting system
- Publication status: Published article; CV-derived metadata to verify
- Venue or source type: Physics Letters A 380, 1571-1576
- Year or source date: 2016
- DOI, arXiv ID, or other identifier: Not extracted from reviewed CV section
- Authors as stated in source: C. S. Castro; O. S. Duarte; D. P. Pires; D. O.
  Soares-Pinto; M. S. Reis
- Related people: `P-0003` Mario de Souza Reis Junior
- Source IDs: `SRC-0003`
- Notes: CV-derived thematic article from the 2016-2026 scan; DOI not extracted from the
  reviewed CV source and final metadata should be manually verified before proposal
  submission.

## Validation backlog

- Confirm the author list for `PUB-0001`.
- Verify DOI/final citation metadata for all CV-derived records marked
  `CV-derived metadata to verify`.
- Validate CV/PDF extraction artifacts in titles or formulas for `PUB-0024`,
  `PUB-0026`, `PUB-0028`, `PUB-0031`, `PUB-0036`, `PUB-0041`, `PUB-0042`,
  `PUB-0047`, `PUB-0050`, `PUB-0052`, `PUB-0053`, `PUB-0062`, `PUB-0071`,
  `PUB-0074`, `PUB-0089`, `PUB-0092`, and `PUB-0098`.
- Decide whether to promote or exclude the following highly truncated CV
  candidates after manual bibliographic validation: Monte Carlo calculations of
  thermodynamic and magnetocaloric properties, `JMMM` 610, 172494 (2024);
  magnetocaloric functional properties, volume 172, pages 20-25 (2016); spin
  state and magnetic ordering of half-doped compound, volume 422, pages 197-203
  (2017).
- Confirm name variants linked to `P-0008` and `P-0007` in draft manuscripts
  and ACS article records.
- Verify final DOI metadata for arXiv-derived records `PUB-0005` through
  `PUB-0010`.
- Verify the final citation for screenshot-derived `PUB-0011`.
- Preserve the 2016-2026 scan boundary unless the project owner requests a
  different definition of "last 10 years".
