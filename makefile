#!@ Nguyen Tien Tai 

#*Back-End && Front-end
default:
	docker ps
build:
	docker-compose build
devdown:
	docker-compose -f docker-compose.yml down

stg:
	docker-compose up -d
run-dev:
	docker-compose up -d
