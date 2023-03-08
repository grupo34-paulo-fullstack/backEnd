<h1 align ='center'> <strong>API Documentation<strong> </h1>

## **1. Overview**

Main technologies used in this project:

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)

<br>

## **2. Endpoints**

### Index

- [Users](#1-users)
- [Announcements](#2-announcements)
- [session](#3-session)

<br>

## **1.** **USERS**

[Back to Endpoints](#2-endpoints)

<br>

The User object is defined as:

|     Field    | Type   | Description              |
| --------     | ------ | ------------------------ |
| id           | string | User's unique identifier |
| name         | string | User name                |
| email        | string | User email               |
| cpf          | string | User cpf                 |
| phone        | string | User phone               |
| birthdate    | date   | User birthdate           |
| description  | string | User email               |
| cep          | string | User cep                 |
| state        | string | User state               |
| city         | string | User city                |
| street       | string | User street              |
| number       | string | User address number      |
| complement   | string | User address complement  |
| is_announcer | bool   | User is Annonuncer?      |
| password     | string | User password            |


<br>

<br>

### **Endpoints**

<br>

| Method     | Routes   | Description     |
| ---------- | -------- | --------------- |
| POST       | /users   | Create user     |
| PATCH      | /users   | Update user     |
| GET        | /users   | List all users  |
| DELETE     | /users   | Delete user	  |

---

<br>

## **1.1 User Creation**

[Back to Endpoints](#2-endpoints)

<br>

## POST `/users`

<br>

### **Request**:

- POST /users
- Host: http://localhost:3000
- Content-type: application/json

<br>

### **Request body**:

```json
{
    "name": "paulo",
  	"email": "paulo@mail.com",
  	"cpf": "123456789012",
  	"phone":"99999999999",
  	"birthdate": "1997-12-05",
  	"description": "descrição",
  	"cep": "01234-567",
  	"state": "MG",
  	"city": "Belo Horizonte",
  	"street": "Rua um",
  	"number": "1",
  	"complement": "Casa",
  	"is_announcer": false,
    "password": "1234"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `201 - CREATED`**

```json
{
	"id": "33b7f8fe-05de-4fc0-bcc6-85d66ac445f0",
	"name": "paulo",
	"email": "paulo@mail.com",
	"cpf": "123456789012",
	"phone": "99999999999",
	"birthdate": "1997-12-05",
	"description": "teste",
	"cep": "01234-567",
	"state": "MG",
	"city": "Belo Horizonte",
	"street": "Rua um",
	"number": "1",
	"complement": "Casa",
	"is_announcer": false,
}
```

<br>

### **1.2 Update User**

## PATCH `/users`

<br>

### **Request**:

- POST /users
- Host: http://localhost:3000
- Authorization: Bearer Token
- Content-type: application/json

<br>

### **Request headers**:

```json
	{
		"authorization": "Bearer token"
	}
```

<br>

### **Request Body**:

```json
  {
    "is_announcer": true
  }
```

<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
	{
		"id": "33b7f8fe-05de-4fc0-bcc6-85d66ac445f0",
		"name": "paulo",
		"email": "paulo@mail.com",
		"cpf": "123456789012",
		"phone": "99999999999",
		"birthdate": "1997-12-05",
		"description": "teste",
		"cep": "01234-567",
		"state": "MG",
		"city": "Belo Horizonte",
		"street": "Rua um",
		"number": "1",
		"complement": "Casa",
		"is_announcer": true,
	}
```


### **1.3 List Users**

[Back to Endpoints](#2-endpoints)

<br>

## GET `/users`

<br>

### **Request**:

- GET /users
- Host: http://localhost:3000
- Authorization: none
- Content-type: application/json
- Empty Body
- User must be Authenticated

<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
[
	{
		"id": "a1e2422f-d3c1-481e-9c4a-5583160e7a9b",
		"username": "paulo",
	},
	{
		"id": "bdb316dd-7598-48be-b166-8d4a1ca3aaf7",
		"username": "felipe",
	},
]
```
<br>

### **1.4 Delete Users**

## DELETE `/users`

<br>

### **Request**:

- POST /users
- Host: http://localhost:3000
- Authorization: Bearer Token
- Content-type: application/json

<br>

### **Request headers**:

```json
	{
		"authorization": "Bearer token"
	}
```

<br>

### **Expected Response**:

<br>

#### **Status `204 - NO CONTENT`**

<br>


## **2.** **Announcements**

[Back to Endpoints](#2-endpoints)

<br>

Account object is defined as:

|     Field   | Type      | Description                    |
| ----------- | ------    | ------------------------------ |
| id          | string    | Announce unique identifier     |
| title       | string    | Announce Title                 |
| year        | number    | Vehicle Year                   |
| km          | number    | Vehicle mileage                |
| price       | number    | Vehicle price                  |
| description | string    | Announce description           |
| createdAt   | Date      | Announce creation date         |
| type_vehicle| string    | Vehicle car or bike            |
| image       | string    | Announce image cover           |
| is_active   | bool      | Default true                   |
| gallery     | Gallery[] | Announce image gallery         |
| user        | User      | User relaton                   |



<br>

### **Endpoints**

<br>

| Method      | Routes            | Description         |
| ----------- | ----------------- | ------------------- |
| GET         | /announcements    | List Announcements  |
| POST        | /announcements    | Create Announcement |
| PATCH       | /announcements:id | Update Announcement |
| DELETE      | /announcements:id | Delete Announcement |
---

<br>

### **2.1 List Announcements**

[Back to Endpoints](#2-endpoints)

<br>

## GET `/announcements`

<br>

### **Request**:

- GET /announcements
- Host: http://localhost:3000
- Authorization: none
- Content-type: application/json
- Empty Body
- User must be Authenticated

<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
{
	"id": "4ee2948e-46d4-443b-8a2a-6460960846dc",
	"title": "Honda Civic",
	"year": "2001",
	"km": 197,
	"price": 20,
	"description": "Carro em ótimo estado de conservação, muito bem cuidado.",
	"type_vehicle": "car",
	"image": "http://www.coches.com/fotos_historicas/honda/Civic-Coupe-2001-2003/honda_civic-coupe-2001-03_r7.jpg",
	"is_active": true,
	"user": "33b7f8fe-05de-4fc0-bcc6-85d66ac445f0",
	"createdAt": "2023-02-26T18:24:16.498Z"
}
```

<br>

### **2.2 Create Announcements**

[Back to Endpoints](#2-endpoints)

## POST `/announcements`

<br>

### **Request**:

- GET /announcements
- Host: http://localhost:3000
- Authorization: Bearer Token
- Content-type: application/json
- Empty Body
- User must be Authenticated

<br>

### **Request headers**:

```json
{
  "authorization": "Bearer Token"
}
```

<br>

### **Request Body**:

```json
    {
    "title": "Honda Civic",
    "year": "2001",
    "km": "197.000",
    "price": 20.000,
    "description": "Carro em ótimo estado de conservação, muito bem cuidado.",
    "type_vehicle": "car",
    "image": "http://www.coches.com/fotos_historicas/honda/Civic-Coupe-2001-2003/   honda_civic-coupe-2001-03_r7.jpg",
    "is_active": true
    }
```

<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
{
	"id": "4ee2948e-46d4-443b-8a2a-6460960846dc",
	"title": "Honda Civic",
	"year": "2001",
	"km": 197,
	"price": 20,
	"description": "Carro em ótimo estado de conservação, muito bem cuidado.",
	"type_vehicle": "car",
	"image": "http://www.coches.com/fotos_historicas/honda/Civic-Coupe-2001-2003/honda_civic-coupe-2001-03_r7.jpg",
	"is_active": true,
	"user": "33b7f8fe-05de-4fc0-bcc6-85d66ac445f0",
	"createdAt": "2023-02-26T18:24:16.498Z"
}
```

<br>

### **2.3 Update Announcements**

[Back to Endpoints](#2-endpoints)

## PATCH `/announcements:id`

<br>

### **Request**:

- PATCH /announcements
- Host: http://localhost:3000
- Authorization: Bearer Token
- Content-type: application/json
- User must be Authenticated

<br>

### **Request headers**:

```json
{
  "authorization": "Bearer Token"
}
```

<br>

### **Request Body**:

```json
    {
    "is_active": false
    }
```

<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
{
  "id": "4ee2948e-46d4-443b-8a2a-6460960846dc",
	"title": "Honda Civic",
	"year": "2001",
	"km": 197,
	"price": 20,
	"description": "Carro em ótimo estado de conservação, muito bem cuidado.",
	"type_vehicle": "car",
	"image": "http://www.coches.com/fotos_historicas/honda/Civic-Coupe-2001-2003/honda_civic-coupe-2001-03_r7.jpg",
	"is_active": false,
	"user": "33b7f8fe-05de-4fc0-bcc6-85d66ac445f0",
	"createdAt": "2023-02-26T18:24:16.498Z"
}
```

<br>

### **2.3 Delete Announcements**

[Back to Endpoints](#2-endpoints)

## DELETE `/announcements:id`

<br>

### **Request**:

- PATCH /announcements
- Host: http://localhost:3000
- Authorization: Bearer Token
- Content-type: application/json
- User must be Authenticated

<br>

### **Request headers**:

```json
{
  "authorization": "Bearer Token"
}
```

<br>

### **Expected Response**:

<br>

#### **Status `204 - NO CONTENT`**

<br>

## **3.** **SESSION**

[Back to Endpoints](#3-endpoints)

<br>

Session object is defined as:

|     Field   	| Type      | Description                    |
| ----------- 	| ------    | ------------------------------ |
| user          | User    	| User Object		     |
| token       	| string    | JWT String	             |




<br>

### **Endpoints**

<br>

| Method      | Routes            	| Description         |
| ----------- | -------------------	| ------------------- |
| POST        | /session    		| Create Announcement |

---

<br>

## POST `/session`

<br>

### **Request**:

- GET /session
- Host: http://localhost:3000
- Authorization: none
- Content-type: application/json
- User must be Authenticated

<br>

### **Request Body**:

```json
    {
		"email": "paulo@mail.com",
		"password": "1234"
    }
```

<br>

### **Expected Response**:

<br>

#### **Status `200 - OK`**

```json
{
	"user": {
		"id": "33b7f8fe-05de-4fc0-bcc6-85d66ac445f0",
		"name": "Paulo",
		"is_announcer": false,
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc19hbm5vdW5jZXIiOmZhbHNlLCJpYXQiOjE2Nzc0MzEyNTYsImV4cCI6MTY3NzUxNzY1Niwic3ViIjoiMzNiN2Y4ZmUtMDVkZS00ZmMwLWJjYzYtODVkNjZhYzQ0NWYwIn0.B689VHbf7Z6AVUnjHHR1RkWacn2Fc1QV2LW1M47SD_g"
}
```
