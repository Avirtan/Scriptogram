docker_run:
	docker-compose --env-file .env -f docker-compose.yml up -d --build --force-recreate 
.PHONY: docker_run

keydb:
	docker exec -it keydb keydb-cli -a password 
.PHONY: keydb
