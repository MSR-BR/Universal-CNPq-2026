# Project Status

## Document control

Objective: Maintain the authoritative operational status of the research
program repository.

Inputs: Repository methodology, roadmap, document inventory, source inventory,
Phase 1A people records, Phase 1B publication records, Phase 1C previous-project
records, Phase 1D infrastructure records, Phase 1E collaboration records, Phase
1F preliminary-result records, Phase 1G idea-seed records, Phase 1H
bibliography records, and recent project updates.

Outputs: Current phase, completed phases, current progress, pending tasks,
repository statistics, next action, and recent updates.

Dependencies: `docs/01_Methodology.md`, `docs/02_Project_Roadmap.md`,
`docs/phase1/1A_People.md`, `docs/phase1/1B_Publications.md`,
`docs/phase1/1C_PreviousProjects.md`, `docs/phase1/1D_Infrastructure.md`,
`docs/phase1/1E_Collaborations.md`, `docs/phase1/1F_PreliminaryResults.md`,
`docs/phase1/1G_Ideas.md`, `docs/phase1/1H_Bibliography.md`, and
`data/source_inventory.tsv`.

Completion criteria: This document is updated whenever the project phase,
task list, source inventory, or repository structure changes.

Version: 2.6

Status: Active

Last update: 2026-07-01

## Current phase

Phase 1H - Bibliography.

Phase 0 - Information Collection remains open during the entire project.
Phase 1A, Phase 1B, Phase 1C, Phase 1D, Phase 1E, Phase 1F, and Phase
1G remain available for deferred final manual refinement, but they no longer
block Phase 1H bibliography work.

## Completed phases

- Repository structure setup.
- Initial Dropbox support-document inventory.
- First Dropbox refresh inventory for Phase 1A.
- Phase 1A people baseline accepted for progression to Phase 1B.
- Phase 1B automated publication validation completed sufficiently to open
  Phase 1C, with final manual publication review deferred.
- Phase 1C initial previous-project registry completed sufficiently to open
  Phase 1D, with final manual project review deferred.
- Phase 1D corrected infrastructure registry completed sufficiently to open
  Phase 1E, with final manual infrastructure review deferred.
- Phase 1E initial collaboration registry completed sufficiently to open
  Phase 1F, with final manual collaboration review deferred.
- Phase 1F preliminary-results registry reviewed sufficiently to open
  Phase 1G, with final manual scientific review deferred.
- Phase 1G initial idea-seed registry completed sufficiently to open Phase 1H,
  with final manual idea review deferred.

## Current progress

- The permanent repository structure has been initialized.
- The frozen development methodology has been recorded.
- The methodology improvement protocol has been recorded.
- A source inventory was generated and refreshed from the Dropbox support-document folder.
- Nine new source files were added to `data/source_inventory.tsv`.
- The People database contains fourteen stable person records.
- Academic merit fellowships were verified from Lattes headers and prize/title sections.
- Phase 1B contains ninety-nine stable publication records.
- Crossref automated bibliographic validation was run for Phase 1B publication
  records; 95 records now have DOI metadata verified or added, with manual
  publication review deferred to the project-wide final review.
- Phase 1C contains twenty-nine stable previous-project records.
- Phase 1D was opened in `docs/phase1/1D_Infrastructure.md`.
- Phase 1D was corrected after the project owner clarified that active
  infrastructure must be limited to institutions represented in Phase 1A.
- Seven proposal/project PDF or CV/Lattes sources currently support active
  Phase 1D infrastructure records.
- Eight stable infrastructure records remain active in Phase 1D.
- Eight previously created infrastructure IDs were retired from active scope
  because they referred to LAFMAT partner institutions, external collaborators,
  external facilities, or equipment with unconfirmed Phase 1A host mapping.
- Active infrastructure records include only UERJ, UFF, UFOB, and SENAI CIMATEC resources.
- Phase 1E was opened in `docs/phase1/1E_Collaborations.md`.
- Seventeen source files were reviewed for the initial Phase 1E collaboration pass.
- Fourteen stable collaboration records were created in Phase 1E.
- Phase 1E explicitly distinguishes Phase 1A project participants from external collaboration contexts.
- External collaborators and LAFMAT partner institutions are recorded as non-team collaboration context unless later added to Phase 1A.
- Phase 1F was opened in `docs/phase1/1F_PreliminaryResults.md`.
- Four controlled Phase 1 registries were reviewed for the initial Phase 1F preliminary-results pass.
- Thirteen stable preliminary-result records were created in Phase 1F.
- Phase 1F records evidence for metal complexes, barocaloric and spin-crossover systems, quantum thermodynamics, quantum batteries, quantum resources, magnetocaloric and multicaloric materials, and review/outlook articles.
- Phase 1F coverage review checked thematic publication coverage against the
  99 Phase 1B publication records and added three previously uncited thematic
  records to the preliminary-results registry.
- Phase 1F explicitly preserves the distinction between preliminary evidence and proposal argument.
- Phase 1G was opened in `docs/phase1/1G_Ideas.md`.
- Four controlled Phase 1 registries were reviewed for the initial Phase 1G idea-seed pass.
- Ten stable idea-seed records were created in Phase 1G.
- Phase 1G records are explicitly unselected, non-objective idea seeds for later analysis.
- Phase 1H was opened in `docs/phase1/1H_Bibliography.md`.
- Ninety-nine stable bibliography records were created in Phase 1H, one for each Phase 1B publication record.
- Phase 1H links bibliography records to Phase 1F preliminary results and Phase 1G idea seeds without duplicating full publication metadata.
- No CPF values from the team page were stored in the repository.
- No scientific competencies, objectives, gaps, work packages, or proposal text
  have been created.

## Pending tasks

- Continue Phase 1D factual infrastructure registry refinement if new equipment
  lists, official laboratory inventories, or access documents are supplied for
  UERJ, UFF, UFOB, or SENAI CIMATEC.
- Defer project-owner/manual review of Phase 1A people records, Phase 1B
  publication metadata, Phase 1C project links, and Phase 1D infrastructure
  host mapping until the project-wide final review.
- Keep retired infrastructure IDs out of use and do not reuse `INF-0005`,
  `INF-0006`, `INF-0009`, `INF-0011`, `INF-0012`, `INF-0013`, `INF-0014`, or
  `INF-0015`.
- Confirm whether any equipment from the detailed `SRC-0034` list is hosted by
  a Phase 1A institution and should be added as a new in-scope infrastructure
  record.
- Decide during final review whether infrastructure-development records linked
  to `INF-0010` and `INF-0016` should be promoted to Phase 1C project records.
- Preserve stable person, publication, project, infrastructure, collaboration,
  preliminary-result, idea, and bibliography IDs and never renumber existing records.
- Continue Phase 1E factual collaboration registry refinement if new collaboration agreements, institutional letters, or manually validated collaborator lists are supplied.
- Keep external collaborators and LAFMAT partner institutions out of project team status unless Phase 1A is explicitly updated.
- Add explicit publication cross-links from Phase 1B to Phase 1E after final manual validation.
- Continue Phase 1F factual preliminary-result registry refinement if new figures, datasets, reports, presentations, or manually selected outputs are supplied.
- Keep Phase 1F records factual; do not convert evidence clusters into proposal objectives, gaps, or work packages.
- Continue Phase 1G idea-seed refinement if new meeting notes, emails, conceptual sketches, or project-owner comments are supplied.
- Keep Phase 1G records unselected and non-objective; do not convert idea seeds into objectives, gaps, strategy, work packages, or proposal text.
- Continue Phase 1H bibliography refinement if external references, official citation lists, or manually selected bibliography additions are supplied.
- Keep Phase 1H as a bibliography map; do not duplicate full publication metadata already recorded in Phase 1B.
- Open Phase 2 - Team Book only after the project owner accepts the Phase 1H baseline as sufficient for progression.

## Repository statistics

- Controlled Markdown documents in `docs/`: 18
- Source files inventoried from Dropbox: 47
- Files in Dropbox `CVs/` folder: 16
- Phase 1A people records: 14
- Phase 1B publication records: 99
- Publication source files reviewed in Phase 1B: 23
- Participant CV publication sections reviewed in Phase 1B: 14
- Publication source duplicate pairs merged: 1
- CV-derived publication records added after initial publication-source pass: 77
- Publication records with DOI verified or added through Crossref: 95
- Publication records with at least one Phase 1A person link: 98
- Phase 1A people linked to at least one Phase 1B publication: 10
- Phase 1C previous-project records: 29
- Previous-project/proposal PDF sources reviewed in Phase 1C: 7
- Participant CV records scanned in Phase 1C: 14
- CV text source files checked in Phase 1C: 15
- Previous-project records with at least one Phase 1A person link: 29
- Phase 1D active infrastructure records: 8
- Phase 1D retired infrastructure IDs after scope correction: 8
- Proposal/project PDF sources supporting active Phase 1D records: 3
- CV/Lattes text sources supporting active Phase 1D records: 4
- Active infrastructure records with at least one Phase 1A person link: 8
- Active infrastructure records linked to at least one Phase 1C project: 6
- Phase 1E collaboration records: 14
- Phase 1E source files reviewed: 17
- Phase 1E records involving only Phase 1A institutions as active participants: 5
- Phase 1E records with external/non-team collaboration context: 9
- Phase 1E records linked to at least one Phase 1C project: 13
- Phase 1E records linked to active Phase 1D infrastructure: 5
- Phase 1F preliminary-result records: 13
- Phase 1F controlled registries reviewed: 4
- Phase 1F coverage review passes completed: 1
- Phase 1F records linked to Phase 1B publications: 13
- Phase 1F records linked to at least one Phase 1C project: 13
- Phase 1G idea-seed records: 10
- Phase 1G controlled registries reviewed: 4
- Phase 1G records linked to Phase 1F preliminary results: 10
- Phase 1G records explicitly marked unselected and non-objective: 10
- Phase 1H bibliography records: 99
- Phase 1H records linked one-to-one to Phase 1B publications: 99
- Phase 1H records with at least one Phase 1F preliminary-result link: 96
- Phase 1H records with at least one Phase 1G idea-seed link: 39
- Institutions recorded in Phase 1A: 4
- CNPq Productivity Research Fellows identified from Lattes headers: 5
- FAPESB/CNPq Productivity Research Fellows identified from Lattes headers: 1
- People with FAPERJ Cientista do Nosso Estado records: 1
- People with FAPERJ Jovem Cientista do Nosso Estado or related young-scientist merit records: 4

## Next action

Continue Phase 1H - Bibliography refinement while keeping Phase 1A through
Phase 1G open for deferred manual refinement.

## Recent updates

- 2026-07-01: Opened Phase 1H - Bibliography and created ninety-nine bibliography records, one for each Phase 1B publication record.
- 2026-07-01: Linked Phase 1H bibliography records to Phase 1F preliminary results and Phase 1G idea seeds while keeping full publication metadata authoritative in Phase 1B.
- 2026-07-01: Opened Phase 1G - Ideas and created ten stable, unselected, non-objective idea-seed records from Phase 1F, 1E, 1D, and 1C evidence.
- 2026-07-01: Reviewed Phase 1F publication coverage against Phase 1B and added `PUB-0047`, `PUB-0064`, and `PUB-0067` to the preliminary-results evidence map.
- 2026-07-01: Opened Phase 1F - Preliminary Results and created twelve stable preliminary-result records from Phase 1B, 1C, 1D, and 1E evidence.
- 2026-07-01: Recorded preliminary evidence clusters for metal complexes, barocaloric and spin-crossover systems, quantum thermodynamics, quantum batteries, quantum resources, magnetocaloric and multicaloric materials, and review/outlook articles.
- 2026-07-01: Opened Phase 1E - Collaborations and created fourteen stable collaboration records, explicitly separating Phase 1A participants from external/non-team collaboration contexts.
- 2026-07-01: Recorded LAFMAT and external collaborators as collaboration context only, without adding their institutions to the CNPq project team.
- 2026-07-01: Corrected Phase 1D scope so the active infrastructure registry
  lists only resources hosted by institutions represented in Phase 1A.
- 2026-07-01: Retired eight infrastructure IDs from active scope after removing
  LAFMAT partner institutions, external collaborators, external facilities, and
  equipment with unconfirmed Phase 1A host mapping.
- 2026-07-01: Opened Phase 1D - Infrastructure and created the initial stable
  infrastructure registry from proposal PDFs and CV/Lattes infrastructure entries.
- 2026-07-01: Registered computational, quantum-technology, experimental, and
  prototyping infrastructure without assigning strategic roles or work packages.
- 2026-07-01: Opened Phase 1C - Previous Projects and created twenty-nine
  stable previous-project records from proposal PDFs and Lattes project sections.
- 2026-07-01: Classified `SRC-0037` and `SRC-0038` as supporting evidence for
  PDSE/barocaloric/spin-crossover work rather than independent project records.
- 2026-07-01: Ran automated Crossref bibliographic validation for Phase 1B; 95
  publication records now have DOI metadata verified or added, and final manual
  publication review is deferred to the project-wide final review.
- 2026-07-01: Mined all participant CV publication sections for 2016-2026
  theme-related journal articles and added seventy-six additional CV-derived
  publication records to `docs/phase1/1B_Publications.md`.
- 2026-07-01: Updated eight existing arXiv/screenshot publication records with
  final journal metadata found in CV publication sections.
- 2026-07-01: Opened Phase 1B - Scientific Publications after project-owner
  acceptance of the Phase 1A baseline.
- 2026-07-01: Created twenty-two stable publication records in
  `docs/phase1/1B_Publications.md` from twenty-three publication source files.
- 2026-07-01: Marked the duplicate publication source pair `SRC-0016` and
  `SRC-0017` as one publication record.
- 2026-07-01: Added `PUB-0023`, the Coordination Chemistry Reviews article by
  Mario S. Reis, from CV source `SRC-0003`.
- 2026-07-01: Refined Phase 1A academic merit fellowship notes into
  current/header-confirmed and historical/recorded information.
- 2026-07-01: Verified academic merit fellowships in Phase 1A records, including CNPq Productivity, FAPESB/CNPq Productivity, FAPERJ Cientista do Nosso Estado, and FAPERJ Jovem Cientista records.
- 2026-07-01: Refreshed the Dropbox support-document folder after user update.
- 2026-07-01: Added nine new source files to `data/source_inventory.tsv`,
  preserving all existing `SRC-000x` identifiers.
- 2026-07-01: Added seven new stable person records, `P-0008` through
  `P-0014`, to `docs/phase1/1A_People.md`.
- 2026-07-01: Updated existing records with the new team-page source where
  relevant, without storing CPF values.
- 2026-07-01: Dropbox support-document folder downloaded to a temporary
  workspace and inventoried in `data/source_inventory.tsv`.
- 2026-07-01: Seven CVs were processed for Phase 1A administrative people
  records only.
- 2026-07-01: `docs/phase1/1A_People.md` updated with seven stable person IDs.
- 2026-07-01: Methodology improvement protocol added: possible methodology
  changes must be proposed through a GitHub issue named
  `Methodology Improvement Proposal` and await approval.
- 2026-07-01: Repository purpose updated from single proposal workspace to
  permanent research-program knowledge base.
- 2026-07-01: Methodology frozen and current phase set to Phase 1A - People.
- 2026-07-01: Controlled document structure aligned with the long-term
  development methodology.
