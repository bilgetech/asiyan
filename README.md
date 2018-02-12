# Aşiyan

Aşiyan (`bird nest` in Turkish) is the backend project of [guvercin](https://github.com/bilgetech/guvercin) (`pigeon` in Turkish).

## Installation

`$ npm install -g asiyan`

## Usage

#### Option 1: Pass environment variables in command line
`$ ENV=production PORT=3434 DB_PORT=27017 DB_HOST=127.0.0.1 DB_NAME=my_db DB_USERNAME=my_user DB_PASSWORD=t0p_s3cr3t asiyan`

#### Option 2: Use .env file

- Create file with the following contents and configure it to make it suit your needs:

**.env**
```
ENV=production
PORT=3434
DB_PORT=27017
DB_HOST=127.0.0.1
DB_NAME=my_db
DB_USERNAME=my_user
DB_PASSWORD=t0p_s3cr3t
```

- Then start asiyan with:

`$ asiyan -e /path/to/your/.env`

## Contributing

All kind of contribution is welcomed :)

## License

License information can be found in [LICENSE](/LICENSE)
