MAKEFLAGS += --warn-undefined-variables
SHELL := /bin/bash
.SHELLFLAGS := -eu -o pipefail -c
.DEFAULT_GOAL := help

PROJECT_ROOT := `pwd`
API_CONTAINER_NAME := "express"

# all targets are phony
.PHONY: $(shell egrep -o ^[a-zA-Z_-]+: $(MAKEFILE_LIST) | sed 's/://')

--check-docker:
	@echo ">>> Checking docker engine exists ..."
	@echo "Server: `docker version --format '{{.Server.Version}}'` / Client: `docker version --format '{{.Client.Version}}'`"
	@echo ''


install: ## Install all dependencies for app
	@echo ">>> [schemas] Installing all packages required for application ..."
	@cd "${PROJECT_ROOT}/schemas" && npm install
	@echo ""
	@echo ">>> [api-server] Installing all packages required for application ..."
	@cd "${PROJECT_ROOT}/api-server" && npm install
	@echo ""
	@echo ">>> [web-frontend] Installing all packages required for application ..."
	@cd "${PROJECT_ROOT}/web-frontend" && npm install
	@echo ""


api: ## Starting up Express API
	@echo ">>> [api-server] Starting up API server process"
	@cd "${PROJECT_ROOT}/api-server" && npm run dev &


ui: ## Starting up Vue UI
	@echo ">>> [web-frontend] Starting up API server process"
	@cd "${PROJECT_ROOT}/web-frontend" && npm run dev &


doc: ## Update Swagger Documents
	@echo ">>> [schemas] Updating Swagger Documents"
	@cd "${PROJECT_ROOT}/schemas" && npm run start


show: --check-docker ## Show related components for app
	@echo ">>> Listing up production resources"
	@docker container ls --filter name=${API_CONTAINER_NAME}
	@echo ""
	@ps -ef |grep http-server |grep -v 'grep' || true
	@echo ""
	@echo ">>> Listing up all proceess related to application"
	@ps -ef |grep -E 'node_modules|nodebrew' |grep -v 'grep' || true


all: ## Start all componentes of application
	@make install
	@make doc
	@make api
	@make ui


prod: --check-docker ## Start emulate productin with build artifacts
	@echo ">>> [api-server] Pulling latest image from container registry"
	@docker run -d -p 8080:8080 --name ${API_CONTAINER_NAME} us-central1-docker.pkg.dev/hwakabh-dev/gh-pages/api:latest
	@echo ""
	@echo ">>> [web-frontend] Build Vite application"
	@cd "${PROJECT_ROOT}/web-frontend" && npm run build
	@echo ">>> [web-frontend] Serve artifacts with http-server"
	@cd "${PROJECT_ROOT}/web-frontend/dist" && http-server -p 80 &
	@echo ""


clean: ## Remove components
	@echo ">>> Stopping application process ..."
	@pgrep node |xargs -I {} kill -9 {} || true
	@kill -9 `pgrep http-server` 2> /dev/null || true
	@docker stop ${API_CONTAINER_NAME} 2> /dev/null || true
	@docker rm ${API_CONTAINER_NAME} 2> /dev/null || true


help: ## Print this help
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
