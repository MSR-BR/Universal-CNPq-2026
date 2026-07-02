import json
import os
from datetime import datetime, timezone
from pathlib import Path


LABEL = "phase-5-5-response"
TITLE_PREFIX = "Resposta Fase 5.5 -"
OUTPUT_DIR = Path("data/phase5_5_member_responses")


def main() -> None:
    event_path = os.environ.get("GITHUB_EVENT_PATH")
    if not event_path:
        raise SystemExit("GITHUB_EVENT_PATH is not set")

    event = json.loads(Path(event_path).read_text(encoding="utf-8"))
    issue = event.get("issue", {})
    title = issue.get("title") or ""
    labels = {label.get("name", "") for label in issue.get("labels", [])}

    if LABEL not in labels and not title.startswith(TITLE_PREFIX):
        print(f"Issue does not have label {LABEL} or title prefix {TITLE_PREFIX}; skipping.")
        return

    number = issue.get("number")
    if number is None:
        raise SystemExit("Issue number not found")

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    output_path = OUTPUT_DIR / f"issue-{number}.md"

    body = (issue.get("body") or "").replace("\r\n", "\n")
    user = (issue.get("user") or {}).get("login", "")
    issue_url = issue.get("html_url") or ""
    created_at = issue.get("created_at") or ""
    updated_at = issue.get("updated_at") or ""
    ingested_at = datetime.now(timezone.utc).isoformat()

    content = f"""---
source: github_issue
response_type: phase_5_5_member_response
issue_number: {number}
issue_url: {issue_url}
issue_author: {user}
issue_created_at: {created_at}
issue_updated_at: {updated_at}
ingested_at: {ingested_at}
status: raw_import
---

# Resposta de integrante - issue #{number}

Title: {title}

Author: {user}

Source: {issue_url}

## Conteudo do formulario

{body}
"""

    output_path.write_text(content, encoding="utf-8")
    print(f"Wrote {output_path}")


if __name__ == "__main__":
    main()
