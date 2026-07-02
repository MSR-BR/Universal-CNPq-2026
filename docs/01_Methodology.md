# Methodology

## Document control

Objective: Freeze the development methodology for the permanent research
program knowledge base.

Inputs: Project architecture instructions and approved governance
instructions.

Outputs: Authoritative phase model, repository rules, and phase-gating
constraints.

Dependencies: None.

Completion criteria: The methodology is recorded and remains unchanged unless
the Methodology Improvement Proposal protocol is followed and explicitly
approved.

Version: 1.2

Status: Frozen; approved checkpoint update recorded

Last update: 2026-07-02

## Operating role

Repository work must be conducted as project architecture for a long-term
scientific program, not as isolated proposal writing.

## Phase model

Phase 0 - Information Collection

Dynamic phase that remains open during the entire project.

Phase 1 - Knowledge Base

- 1A People
- 1B Scientific Publications
- 1C Previous Projects
- 1D Infrastructure
- 1E Collaborations
- 1F Preliminary Results
- 1G Ideas
- 1H Bibliography

Phase 2 - Team Book

Phase 3 - Scientific Atlas

Phase 4 - Gap Analysis

Phase 5 - Project Matrix

Phase 5.5 - Internal Approval and Budget Collection

Phase 6 - Master Project

Phase 7 - CNPq Proposal

Phase 8 - Final Review

## Phase gate

Current phase is maintained in `docs/00_Project_Status.md`.

Do not move to a later phase until the preceding phase or required checkpoint
is completed and accepted according to the current roadmap.

## Rules

1. One fact must exist only once in the repository. Other documents should
   reference the authoritative source.
2. Every document must be reusable for future projects and should not be
   written only for one funding agency.
3. Do not infer scientific objectives before Phase 4 - Gap Analysis.
4. Do not create work packages before Phase 5 - Project Matrix.
5. Do not start Phase 6 - Master Project until Phase 5.5 - Internal Approval
   and Budget Collection is complete.
6. Do not start writing the CNPq proposal before Phase 6 - Master Project.
7. CNPq form blocks must be derived from the master project and should stay
   comfortably below the form character limits. As an operational target, each
   block should use about two thirds of the available character count rather
   than approaching the maximum.
8. The final project package must include two coordinated outputs: CNPq form
   blocks and a consolidated PDF project document containing the project
   elements, team, budget, schedule, and other complete project information.
9. Every controlled document must contain Objective, Inputs, Outputs,
   Dependencies, Completion criteria, Version, Status, and Last update.
10. If repository work suggests that the methodology should change, do not
   change it directly. Instead, open a GitHub issue named exactly
   `Methodology Improvement Proposal` and wait for explicit approval.

## Phase 5.5 checkpoint

After Phase 5 - Project Matrix and before Phase 6 - Master Project, prepare a
summarized project proposal for all project members.

This checkpoint must collect:

- approval, comments, and requested adjustments from project members;
- budget items, values, and budget justifications from the relevant members or
  institutions;
- any schedule or team-allocation information needed for the consolidated
  project package.

Only after internal approval and budget consolidation can the project proceed
to Phase 6 - Master Project.

This checkpoint does not replace later writing phases. It is a governance and
budget-collection gate between the project matrix and the final writing path.

## Methodology improvement protocol

The methodology is frozen. Future contributors or agents may identify possible
improvements, but those improvements must not be applied directly.

Required process:

1. Open a GitHub issue named exactly `Methodology Improvement Proposal`.
2. Describe the proposed change, rationale, affected documents, and expected
   consequences.
3. Wait for explicit approval before editing `docs/01_Methodology.md` or any
   phase-gating rule.

Approved update log:

- 2026-07-02: Project owner approved a checkpoint for summarized proposal
  circulation, internal member approval, and budget collection before final
  project writing.

## Work style

- Work incrementally.
- Commit small logical changes.
- Preserve consistency across the repository.
- Integrate new material into the existing knowledge base instead of creating
  duplicate facts.
