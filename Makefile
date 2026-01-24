SHELL := /bin/sh

.PHONY: event project

DATE := $(word 2,$(MAKECMDGOALS))
NAME := $(word 3,$(MAKECMDGOALS))

DATE_DASH := $(subst .,-,$(DATE))
TIMELINE_FILE := src/content/timeline/$(DATE_DASH)$(if $(NAME),-$(NAME)).md
PROJECT_FILE := src/content/projects/$(DATE_DASH)$(if $(NAME),-$(NAME)).md

event:
	@if [ -z "$(DATE)" ] || [ -z "$(NAME)" ]; then echo "Usage: make event YYYY.MM name"; exit 1; fi
	@if [ -e "$(TIMELINE_FILE)" ]; then echo "Already exists: $(TIMELINE_FILE)"; exit 1; fi
	@mkdir -p src/content/timeline
	@printf '%s\n' \
	'---' \
	'title: タイトル' \
	"from: \"$(DATE)\"" \
	'to: ""' \
	'---' \
	'' \
	'- ここに内容を書く' \
	> "$(TIMELINE_FILE)"
	@echo "Created: $(TIMELINE_FILE)"

project:
	@if [ -z "$(DATE)" ] || [ -z "$(NAME)" ]; then echo "Usage: make project YYYY.MM name"; exit 1; fi
	@if [ -e "$(PROJECT_FILE)" ]; then echo "Already exists: $(PROJECT_FILE)"; exit 1; fi
	@mkdir -p src/content/projects
	@printf '%s\n' \
	'---' \
	'title: タイトル' \
	"period: \"$(DATE)\"" \
	'image: /images/projects/project-1.svg' \
	'imageAlt: サムネイル' \
	'repoUrl: https://github.com/yourname/project' \
	'---' \
	'' \
	'ここに説明を書く。' \
	> "$(PROJECT_FILE)"
	@echo "Created: $(PROJECT_FILE)"

%:
	@:
