define({ "api": [  {    "type": "get",    "url": "/auth/me",    "title": "Get user information",    "name": "GetMe",    "group": "auth",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"user\": {\n    \"email\": \"tmp@tmp.com\",\n    \"firstName\": \"foo\",\n    \"lastName\": \"bar\"\n  }\n}",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 401 Unauthorized",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "server/controllers/auth.js",    "groupTitle": "auth"  },  {    "type": "post",    "url": "/auth/login",    "title": "Login a user",    "name": "Login",    "group": "auth",    "parameter": {      "fields": {        "Request body": [          {            "group": "Request body",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>User email.</p>"          },          {            "group": "Request body",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>User password.</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 401 Unauthorized",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "server/controllers/auth.js",    "groupTitle": "auth"  },  {    "type": "get",    "url": "/auth/logout",    "title": "Logout a user",    "name": "Logout",    "group": "auth",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "server/controllers/auth.js",    "groupTitle": "auth"  },  {    "type": "post",    "url": "/auth/register",    "title": "Register a user",    "name": "SignUp",    "group": "auth",    "parameter": {      "fields": {        "Request body": [          {            "group": "Request body",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>User email.</p>"          },          {            "group": "Request body",            "type": "String",            "optional": false,            "field": "firstName",            "description": "<p>User first name.</p>"          },          {            "group": "Request body",            "type": "String",            "optional": false,            "field": "lastName",            "description": "<p>User last name.</p>"          },          {            "group": "Request body",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>User password.</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 201 Created",          "type": "json"        }      ]    },    "error": {      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 406 Not Acceptable\n{\n  \"message\": \"Email has been registered.\"\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "server/controllers/auth.js",    "groupTitle": "auth"  },  {    "type": "post",    "url": "/book",    "title": "Create a book",    "name": "CreateBook",    "group": "book",    "parameter": {      "fields": {        "Request body": [          {            "group": "Request body",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Book name.</p>"          },          {            "group": "Request body",            "type": "String[]",            "optional": false,            "field": "authors",            "description": "<p>List of authors (Array of Strings).</p>"          },          {            "group": "Request body",            "type": "String",            "optional": false,            "field": "publisher",            "description": "<p>Publisher of the book.</p>"          },          {            "group": "Request body",            "type": "String",            "optional": false,            "field": "previewLink",            "description": "<p>Preview link of the book.</p>"          },          {            "group": "Request body",            "type": "String",            "optional": true,            "field": "isbn_10",            "description": "<p>10-digit ISBN of the book.</p>"          },          {            "group": "Request body",            "type": "String",            "optional": true,            "field": "isbn_13",            "description": "<p>13-digit ISBN of the book.</p>"          }        ]      }    },    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "server/controllers/book.js",    "groupTitle": "book"  },  {    "type": "get",    "url": "/book",    "title": "Get book list",    "name": "GetBooks",    "group": "book",    "success": {      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  \"books\": [\n    {\n      \"id\": \"xxx\",\n      \"name\": \"Thinking, Fast and Slow\",\n      \"authors\": [\"Daniel Kahneman\"],\n      \"publisher\": \"Penguin Group UK\",\n      \"previewLink\": \"http://www.books.com.tw/products/F011910346\",\n      \"isbn_10\": \"0141033576\",\n      \"isbn_13\": \"\"\n    }\n  ]\n}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "server/controllers/book.js",    "groupTitle": "book"  },  {    "type": "put",    "url": "/book/id",    "title": "Modify a book",    "name": "UpdateBook",    "group": "book",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "id",            "description": "<p>ID of the book.</p>"          }        ],        "Request body": [          {            "group": "Request body",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>Book name.</p>"          },          {            "group": "Request body",            "type": "String[]",            "optional": false,            "field": "authors",            "description": "<p>List of authors (Array of Strings).</p>"          },          {            "group": "Request body",            "type": "String",            "optional": false,            "field": "publisher",            "description": "<p>Publisher of the book.</p>"          },          {            "group": "Request body",            "type": "String",            "optional": false,            "field": "previewLink",            "description": "<p>Preview link of the book.</p>"          },          {            "group": "Request body",            "type": "String",            "optional": true,            "field": "isbn_10",            "description": "<p>10-digit ISBN of the book.</p>"          },          {            "group": "Request body",            "type": "String",            "optional": true,            "field": "isbn_13",            "description": "<p>13-digit ISBN of the book.</p>"          }        ]      }    },    "version": "0.0.0",    "filename": "server/controllers/book.js",    "groupTitle": "book"  }] });
