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
an explicit future instruction requests a change.

Version: 1.1

Status: Frozen

Last update: 2026-07-01

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

Phase 6 - Master Project

Phase 7 - CNPq Proposal

Phase 8 - Final Review

## Phase gate

Current phase: Phase 1A - People.

Do not move to Phase 1B until Phase 1A is completed.

## Rules

1. One fact must exist only once in the repository. Other documents should
   reference the authoritative source.
2. Every document must be reusable for future projects and should not be
   written only for one funding agency.
3. Do not infer scientific objectives before Phase 4 - Gap Analysis.
4. Do not create work packages before Phase 5 - Project Matrix.
5. Do not start writing the CNPq proposal before Phase 6 - Master Project.
6. Every controlled document must contain Objective, Inputs, Outputs,
   Dependencies, Completion criteria, Version, Status, and Last update.
7. If repository work suggests that the methodology should change, do not
   change it directly. Instead, open a GitHub issue named exactly
   `Methodology Improvement Proposal` and wait for explicit approval.

## Methodology improvement protocol

The methodology is frozen. Future contributors or agents may identify possible
improvements, but those improvements must not be applied directly.

Required process:

1. Open a GitHub issue named exactly `Methodology Improvement Proposal`.
2. Describe the proposed change, rationale, affected documents, and expected
   consequences.
3. Wait for explicit approval before editing `docs/01_Methodology.md` or any
   phase-gating rule.

## Work style

- Work incrementally.
- Commit small logical changes.
- Preserve consistency across the repository.
- Integrate new material into the existing knowledge base instead of creating
  duplicate facts.
