MAKEFLAGS += --warn-undefined-variables
SHELL := /bin/bash
.SHELLFLAGS := -eu -o pipefail -c
.DEFAULT_GOAL := help

PROJECT_ROOT := `pwd`

# all targets are phony
.PHONY: $(shell egrep -o ^[a-zA-Z_-]+: $(MAKEFILE_LIST) | sed 's/://')

install: ## Install all dependencies for app
	@echo ">>> [schemas] Installing all packages required for application ..."
	@cd "${PROJECT_ROOT}/schemas" && npm install
	@echo ""
	@echo ">>> [api-server] Installing all packages required for application ..."
	@cd "${PROJECT_ROOT}/api-server" && yarn install
	@echo ""
	@echo ">>> [web-frontend] Installing all packages required for application ..."
	@cd "${PROJECT_ROOT}/web-frontend" && npm install
	@echo ""


api: ## Starting up Express API
	@echo ">>> [api-server] Starting up API server process"
	@cd "${PROJECT_ROOT}/api-server" && yarn run start &


ui: ## Starting up Vue UI
	@echo ">>> [web-frontend] Starting up API server process"
	@cd "${PROJECT_ROOT}/web-frontend" && npm run dev &


doc: ## Update Swagger Documents
	@echo ">>> [schemas] Updating Swagger Documents"
	@cd "${PROJECT_ROOT}/schemas" && npm run start


show: ## Show related components for app
	@echo ">>> "


all: ## Start all componentes of portal-core app
	@make install
	@make doc
	@make api
	@make ui


clean: ## Remove components
	@echo ">>> Stopping application process ..."


help: ## Print this help
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
