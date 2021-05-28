## Content Management System ##
This is a starter project for a very basic file browsing system.

## Content ##

The project is separated into 2 folders:
- cms-backend
- cms-frontend

**CMS-BACKEND**

This is the project for the server that is built in Java.

It is running by default on `http://localhost:8080`

Spring Data with Hibernate and Liquibase are used to build the content table where information about the files are stored. An in-memory database (h2) is configured.
To insert more data into the table, you will need to modify the `insert-data-content-table.xml`

The service layer method has a cache of type Guava implemented with a TTL of 1 minute. You can change this value in the `application.properties` file or you can enable/disable the cache completly.

The REST API of the server has the following 2 endpoints:
- `/api/documents`: returns all the documents from the database that have the parent_id field *null*. This endpoint is used to fetch the root documents;
- `/api/documents/{id}`: returns all the child documents of the document with the provided id.

***Tests***
Database integartion tests are used to validate that the table is built corectly and the data is in place.
A separate configuration file is used, along with a different data insertion file, so that the tests won't be affected by adding/altering more content into the application database. 

**CMS-FRONTEND**

This project is built through Angular CLI.

It is running by default on `http://localhost:4200`.

A proxy is used to avoid same origin policy, configured in `src/proxy.conf.json`.

It is using Angular version 11, NgXS for state management and Angular Material for building the components.

**Future improvements**
- implement back button for card-view mode
- use a dynamic tree for tree-view
- more tests for backend (Mockito) and frontend
