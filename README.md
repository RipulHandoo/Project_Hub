# Project_Hub
Welcome to ProjectHub 🚀, a platform designed to foster collaboration and knowledge sharing 📚 among college students 🎓. Whether you're a newcomer eager to explore the world of projects 🗺️ or a seasoned senior looking to share your experiences 💡, ProjectHub is here to connect and empower students like you 🤝.


## Local setup

### Code-base Setup

1. Each folder of the root directory in the codebase contains an `.env.example` file. Follow the steps below to set up the necessary environment variables:

* Create a file named .env in each folder.
* Open the `.env.example` file and copy its contents.
* Paste the copied contents into the corresponding `.env` file.
* Replace the placeholder values in the .env file with the suggested values provided in the `.env.example` file.

2. To set up the service locally, follow the steps below:

* Clone the repository to your local machine.
* Open a terminal and navigate to the cloned repository.
* Create a network using the command `docker network create my-network`
* Run the command `docker compose up`.

> **Note**: The `docker compose up` command will automatically set up the database. However, if it fails, please refer to the "*DB-Setup*" section for further instructions.



### DB-Setup

After running `docker compose up`, perform the following steps:

1. Open a new terminal window.
2. Execute the command `docker exec -it db bash`.
3. Run the command `psql -U postgres` to access the PostgreSQL command-line interface.
4. Create a new database by executing the command `CREATE DATABASE blogx_db;`.
5. Connect to the newly created database by executing the command `\c blogx_db`.
6. Open the `init.sql` file located in the `\db` folder.
7. Copy the contents of the `init.sql` file.
8. Paste the copied contents into the terminal where the PostgreSQL command-line interface is running.
9. Press Enter to execute the commands and initialize the database.

By following these steps, you should be able to set up the local environment and initialize the necessary database for the service.
