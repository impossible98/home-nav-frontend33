# See in https://www.gnu.org/software/make/manual/html_node/index.html
# for more information about Makefile.
.POSIX:
SHELL := /bin/bash
PNPM :=  $(shell which pnpm)

build-app:
	$(PNPM) tauri build

build-web:
	$(PNPM) build

dev-app:
	$(PNPM) tauri dev

dev-web:
	$(PNPM) dev

fmt:
	$(PNPM) run fmt
