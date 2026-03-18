#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 2 ]]; then
  echo "Uso: $0 <owner/repo> <assignee_github_login> [issues_json]"
  echo "Exemplo: $0 meu-user/romia meu-user docs/github-issues-mvp.json"
  exit 1
fi

REPO="$1"
ASSIGNEE="$2"
ISSUES_FILE="${3:-docs/github-issues-mvp.json}"

if [[ -z "${GITHUB_TOKEN:-}" ]]; then
  echo "Erro: defina GITHUB_TOKEN com permissão repo/issues."
  exit 1
fi

if [[ ! -f "$ISSUES_FILE" ]]; then
  echo "Erro: arquivo $ISSUES_FILE não encontrado."
  exit 1
fi

echo "Criando issues em $REPO e atribuindo para @$ASSIGNEE..."

jq -c '.[]' "$ISSUES_FILE" | while IFS= read -r issue; do
  title=$(jq -r '.title' <<<"$issue")
  body=$(jq -r '.body' <<<"$issue")
  labels=$(jq -r '.labels | join(",")' <<<"$issue")

  payload=$(jq -n \
    --arg title "$title" \
    --arg body "$body" \
    --arg assignee "$ASSIGNEE" \
    --arg labels_csv "$labels" \
    '{title: $title, body: $body, assignees: [$assignee], labels: ($labels_csv | split(","))}')

  response=$(curl -sS -X POST \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer $GITHUB_TOKEN" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    "https://api.github.com/repos/$REPO/issues" \
    -d "$payload")

  url=$(jq -r '.html_url // empty' <<<"$response")
  if [[ -n "$url" ]]; then
    echo "✅ $title -> $url"
  else
    echo "❌ Falha ao criar issue: $title"
    echo "$response" | jq .
    exit 1
  fi

done

echo "Concluído."
