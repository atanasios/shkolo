# Shkolo technical task

## Prerequisites

- Node.js
- PHP
- MySQL
- Composer

## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd <your-project-directory>
```


### 2. Frontend
```bash
cd FE
npm install
npm run dev
```

### 3. Backend
```bash
cd BE
composer install
```

### 4.Create .env file in BE and configure as follows:
```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=shkolo
DB_USERNAME=root
DB_PASSWORD=
```
- then run
```bash
php artisan serve
```

### 4. Database
```bash
mysql -u root -p
CREATE DATABASE shkolo;
EXIT;
```

```bash
php artisan migrate
```

5. Access the application
- http://localhost:5173
