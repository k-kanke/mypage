SHELL := /bin/sh

.PHONY: event

DATE := $(word 2,$(MAKECMDGOALS))
NAME := $(word 3,$(MAKECMDGOALS))

DATE_DASH := $(subst .,-,$(DATE))
FILE := src/content/timeline/$(DATE_DASH)$(if $(NAME),-$(NAME)).md

event:
	@if [ -z "$(DATE)" ] || [ -z "$(NAME)" ]; then echo "Usage: make event YYYY.MM name"; exit 1; fi
	@if [ -e "$(FILE)" ]; then echo "Already exists: $(FILE)"; exit 1; fi
	@mkdir -p src/content/timeline
	@printf '%s\n' \
	'---' \
	'title: タイトル' \
	"from: \"$(DATE)\"" \
	'to: ""' \
	'---' \
	'' \
	'- ここに内容を書く' \
	> "$(FILE)"
	@echo "Created: $(FILE)"

%:
	@:
