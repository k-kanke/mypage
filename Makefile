SHELL := /bin/sh

.PHONY: event project article

DATE := $(word 2,$(MAKECMDGOALS))
NAME := $(word 3,$(MAKECMDGOALS))

DATE_DASH := $(subst .,-,$(DATE))
TIMELINE_FILE := src/content/timeline/$(DATE_DASH)$(if $(NAME),-$(NAME)).md
TIMELINE_FILE_EN := src/content/timeline_en/$(DATE_DASH)$(if $(NAME),-$(NAME))-en.md
PROJECT_FILE := src/content/projects/$(DATE_DASH)$(if $(NAME),-$(NAME)).md
PROJECT_FILE_EN := src/content/projects_en/$(DATE_DASH)$(if $(NAME),-$(NAME))-en.md
ARTICLE_FILE := src/content/articles/$(DATE_DASH)$(if $(NAME),-$(NAME)).md
ARTICLE_FILE_EN := src/content/articles_en/$(DATE_DASH)$(if $(NAME),-$(NAME))-en.md

event: # e.g. make event 2026.02 internship
	@if [ -z "$(DATE)" ] || [ -z "$(NAME)" ]; then echo "Usage: make event YYYY.MM name"; exit 1; fi
	@if [ -e "$(TIMELINE_FILE)" ] || [ -e "$(TIMELINE_FILE_EN)" ]; then echo "Already exists: $(TIMELINE_FILE) or $(TIMELINE_FILE_EN)"; exit 1; fi
	@mkdir -p src/content/timeline src/content/timeline_en
	@printf '%s\n' \
	'---' \
	'lang: ja' \
	'title: タイトル' \
	"from: \"$(DATE)\"" \
	'to: ""' \
	'tags:' \
	'  - Tag' \
	'---' \
	'' \
	'- ここに内容を書く' \
	> "$(TIMELINE_FILE)"
	@printf '%s\n' \
	'---' \
	'lang: en' \
	'title: Title' \
	"from: \"$(DATE)\"" \
	'to: ""' \
	'tags:' \
	'  - Tag' \
	'---' \
	'' \
	'- Write details here' \
	> "$(TIMELINE_FILE_EN)"
	@echo "Created: $(TIMELINE_FILE)"
	@echo "Created: $(TIMELINE_FILE_EN)"

project: # e.g. make project 2026.02 my-app
	@if [ -z "$(DATE)" ] || [ -z "$(NAME)" ]; then echo "Usage: make project YYYY.MM name"; exit 1; fi
	@if [ -e "$(PROJECT_FILE)" ] || [ -e "$(PROJECT_FILE_EN)" ]; then echo "Already exists: $(PROJECT_FILE) or $(PROJECT_FILE_EN)"; exit 1; fi
	@mkdir -p src/content/projects src/content/projects_en
	@printf '%s\n' \
	'---' \
	'lang: ja' \
	'title: タイトル' \
	"period: \"$(DATE)\"" \
	'image: images/projects/project-1.png' \
	'imageAlt: サムネイル' \
	'summary: 概要を書く' \
	'repoUrl: https://github.com/k-kanke/project' \
	'projectTag: ハッカソン' \
	'tags:' \
	'  - Tag' \
	'  - Tag' \
	'---' \
	'' \
	'ここに説明を書く。' \
	> "$(PROJECT_FILE)"
	@printf '%s\n' \
	'---' \
	'lang: en' \
	'title: Title' \
	"period: \"$(DATE)\"" \
	'image: images/projects/project-1.png' \
	'imageAlt: Thumbnail' \
	'summary: Add summary' \
	'repoUrl: https://github.com/k-kanke/project' \
	'projectTag: Hackathon' \
	'tags:' \
	'  - Tag' \
	'  - Tag' \
	'---' \
	'' \
	'Write details here.' \
	> "$(PROJECT_FILE_EN)"
	@echo "Created: $(PROJECT_FILE)"
	@echo "Created: $(PROJECT_FILE_EN)"

article: # e.g. make article 2026.02.13 zenn-kubesploit
	@if [ -z "$(DATE)" ] || [ -z "$(NAME)" ]; then echo "Usage: make article YYYY.MM.DD name"; exit 1; fi
	@if [ -e "$(ARTICLE_FILE)" ] || [ -e "$(ARTICLE_FILE_EN)" ]; then echo "Already exists: $(ARTICLE_FILE) or $(ARTICLE_FILE_EN)"; exit 1; fi
	@mkdir -p src/content/articles src/content/articles_en
	@printf '%s\n' \
	'---' \
	'lang: ja' \
	'title: タイトル' \
	"publishedAt: $(DATE_DASH)" \
	'url: https://example.com' \
	'draft: true' \
	'tags:' \
	'  - tag' \
	'---' \
	'' \
	> "$(ARTICLE_FILE)"
	@printf '%s\n' \
	'---' \
	'lang: en' \
	'title: Title' \
	"publishedAt: $(DATE_DASH)" \
	'url: https://example.com' \
	'draft: true' \
	'tags:' \
	'  - tag' \
	'---' \
	'' \
	> "$(ARTICLE_FILE_EN)"
	@echo "Created: $(ARTICLE_FILE)"
	@echo "Created: $(ARTICLE_FILE_EN)"

%:
	@:
