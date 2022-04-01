#!@ Nguyen Tien Tai 

#*Back-End
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

#*Front-End
default:
	cd frontend
build:
	docker-compose build
devdown:
	docker-compose -f docker-compose.yml down

stg:
	docker-compose up -d
run-dev:
	docker-compose up -d