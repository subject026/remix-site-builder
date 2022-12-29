# remix site builder

1. Install dependencies

2. Start postgres container

```bash
# start container detatched
$ docker compose up -d

# connect to postgres container
$ docker exec -it tower-site-builder-postgres bash

# connect to db from shell
$ psql -h localhost -U postgres
```

3. create `.env` file adding database connecting string

4. run `dev` script
