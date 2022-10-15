SHELL := /bin/bash
export USERID = $(shell id -u)
export GROUPID = $(shell id -g)

HAS_DOCKER := $(shell which docker-compose &> /dev/null && echo true || echo false)

ifeq ($(HAS_DOCKER),true)
node := docker-compose run --rm --no-deps -w /var/www react
npm := $(node) npm
yarn := $(node) yarn
lerna := $(node) node_modules/.bin/lerna
else
node := node
npm := npm
yarn := yarn
lerna := node_modules/.bin/lerna
endif

.DEFAULT_GOAL := all

all:
	@$(MAKE) node_modules && $(MAKE) build && $(MAKE) up
	@echo "NGINX: http://frontend.menuki/ OR http://localhost:22122/ | REACT: http://react.menuki:3000/ OR http://localhost:22222/" 

### yarn tasks
.PHONY: bootstrap build run start export

node_modules:
	@$(MAKE) bootstrap

bootstrap:
	@NODE_ENV=development $(yarn) run bootstrap

build: stop .env
	@NODE_ENV=production $(yarn) run build:web

run:
	$(yarn) run run:web

start:
	$(lerna) run start --stream --scope=@car-service/web

export:
	$(lerna) run export --stream --scope=@car-service/web

.env:
	sed -r -e 's/(NODE_ENV=)development/\1production/' -e '/API_BASE_URL/d' .env.example > $@

### Docker specific
.PHONY: up down clean purge

.ONESHELL:
up:
ifeq ($(HAS_DOCKER),true)
	@if ! docker start docker-hostmanager &> /dev/null; then
		echo "Launch docker-hostmanager container: https://github.com/iamluc/docker-hostmanager";
		exit 2;
	fi
	docker-compose up -d $(SVC);
endif

stop:
ifeq ($(HAS_DOCKER),true)
	docker-compose stop --timeout 1 && docker-compose rm -sf || true
endif

clean: stop
	git clean -fdX packages/web/.next packages/web/dist
	rm -f yarn.lock yarn-error.log packages/web/yarn-error.log

down: clean
ifeq ($(HAS_DOCKER),true)
	docker-compose down --timeout 1 --remove-orphans || true
endif

purge: clean
	git clean -fdX
	docker-compose down --timeout 1 --remove-orphans --volumes || true

force: ;
