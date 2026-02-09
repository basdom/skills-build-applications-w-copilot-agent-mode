# Copilot agent instructions — OctoFit Tracker

Purpose: give AI coding agents the essential, repository-specific knowledge to be immediately productive.

- **Big picture**: This repo contains the OctoFit Tracker workshop materials and scaffolding for a full-stack app.
  - Frontend: React (placeholder in `frontend/`).
  - Backend: Django REST API (placeholder in `backend/`), intended to use MongoDB via `djongo`.
  - Docs and story material live in `docs/` (see [docs/octofit_story.md](docs/octofit_story.md)).

- **Key files to read first**:
  - [README.md](README.md) — project overview and links.
  - `.github/instructions/octofit_tracker_setup_project.instructions.md` — project setup conventions and required commands.

- **Repository conventions and hard constraints** (must follow):
  - Never change directories when running shell commands in agent mode. Always reference paths from the workspace root. Example:
    - Create venv: `python3 -m venv octofit-tracker/backend/venv`
    - Activate + install: `source octofit-tracker/backend/venv/bin/activate && pip install -r octofit-tracker/backend/requirements.txt`
  - Forwarded ports (only): `8000` (public), `3000` (public), `27017` (private).
  - Use Django ORM for data creation and migrations — do not write ad-hoc MongoDB scripts.
  - Check MongoDB status with: `ps aux | grep mongod` before attempting DB actions.

- **Common developer workflows (examples discovered in repo docs)**:
  - Setup Python env and deps (example):
    - `python3 -m venv octofit-tracker/backend/venv`
    - `source octofit-tracker/backend/venv/bin/activate && pip install -r octofit-tracker/backend/requirements.txt`
  - Start Django development server (from workspace root, referencing path):
    - `python octofit-tracker/backend/manage.py runserver 0.0.0.0:8000`
  - Frontend dev (assumed React): run install/build commands inside `frontend/` but reference path rather than changing dir, e.g. `npm --prefix frontend install` then `npm --prefix frontend start`.

- **Patterns and examples to follow when editing code**:
  - Follow the workshop scaffolding style: small, well-scoped files, and include explanatory comments in prose.
  - When adding backend endpoints, prefer Django REST Framework viewsets/serializers and register routes in `urls.py` under the backend app.
  - When integrating with MongoDB, rely on `djongo` compatibility layers and Django models instead of raw `pymongo` usage.

- **What to commit / PR guidance for agents**:
  - Keep commits focused and small (single feature or fix).
  - Update `docs/` when behavior or setup changes — include exact commands and any path-sensitive notes.
  - If adding new dependencies, update `octofit-tracker/backend/requirements.txt` and include a short note on why the package is needed.

- **Where to look for missing details**:
  - Workshop narrative and tech decisions: [docs/octofit_story.md](docs/octofit_story.md).
  - Setup constraints and exact package list: `.github/instructions/octofit_tracker_setup_project.instructions.md`.

If anything here is unclear or you want additional examples (for routes, serializers, or typical React component patterns), tell me which area to expand.
