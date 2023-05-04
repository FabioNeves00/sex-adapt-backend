
window.onload = function() {
  // Build a system
  let url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  let options = {
  "swaggerDoc": {
    "openapi": "3.0.0",
    "paths": {
      "/user/{id}": {
        "patch": {
          "operationId": "UserController_update",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateUserDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserEntity"
                  }
                }
              }
            }
          },
          "tags": [
            "User Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/user/deleteById/{id}": {
        "delete": {
          "operationId": "UserController_removeById",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "User Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/user/suggestion": {
        "get": {
          "operationId": "UserController_generateSuggestions",
          "parameters": [
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "User Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/user/favorites": {
        "get": {
          "operationId": "UserController_getFavorites",
          "parameters": [
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/EstablishmentEntity"
                    }
                  }
                }
              }
            }
          },
          "tags": [
            "User Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/user/favorites/{id}": {
        "post": {
          "operationId": "UserController_favorite",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserEntity"
                  }
                }
              }
            }
          },
          "tags": [
            "User Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "delete": {
          "operationId": "UserController_unfavorite",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserEntity"
                  }
                }
              }
            }
          },
          "tags": [
            "User Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/establishment": {
        "post": {
          "operationId": "EstablishmentController_create",
          "parameters": [
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateEstablishmentDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/EstablishmentEntity"
                  }
                }
              }
            }
          },
          "tags": [
            "Establishment Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "get": {
          "operationId": "EstablishmentController_findAll",
          "parameters": [
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Establishment Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/establishment/{id}": {
        "get": {
          "operationId": "EstablishmentController_findOne",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Establishment Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "patch": {
          "operationId": "EstablishmentController_update",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/UpdateEstablishmentDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "tags": [
            "Establishment Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "delete": {
          "operationId": "EstablishmentController_remove",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Establishment Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/auth/local/signup": {
        "post": {
          "operationId": "AuthController_signup_local",
          "parameters": [
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateUserDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "Auth Routes"
          ]
        }
      },
      "/auth/local/signin": {
        "post": {
          "operationId": "AuthController_signin_local",
          "parameters": [
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/AuthDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "Auth Routes"
          ]
        }
      },
      "/auth/logout": {
        "post": {
          "operationId": "AuthController_logout",
          "parameters": [
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": ""
            }
          },
          "tags": [
            "Auth Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/auth/refresh": {
        "post": {
          "operationId": "AuthController_refresh_token",
          "parameters": [
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "tags": [
            "Auth Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/auth/recover": {
        "post": {
          "operationId": "RecoverController_recoverPassword",
          "parameters": [
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateRecoverPasswordDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "tags": [
            "Recover Routes"
          ]
        }
      },
      "/auth/recover/confirm": {
        "post": {
          "operationId": "RecoverController_confirmToken",
          "parameters": [
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ConfirmTokenDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "tags": [
            "Recover Routes"
          ]
        }
      },
      "/auth/recover/changePassword": {
        "put": {
          "operationId": "RecoverController_changePassword",
          "parameters": [
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ChangePasswordDto"
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/UserEntity"
                  }
                }
              }
            }
          },
          "tags": [
            "Recover Routes"
          ]
        }
      },
      "/review": {
        "post": {
          "operationId": "ReviewController_create",
          "parameters": [
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateReviewDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "tags": [
            "Review Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "get": {
          "operationId": "ReviewController_findAll",
          "parameters": [
            {
              "name": "establishment",
              "required": true,
              "in": "query",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/ReviewEntity"
                    }
                  }
                }
              }
            }
          },
          "tags": [
            "Review Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/review/{id}": {
        "get": {
          "operationId": "ReviewController_findOne",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/ReviewEntity"
                  }
                }
              }
            }
          },
          "tags": [
            "Review Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "delete": {
          "operationId": "ReviewController_remove",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Review Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/suport": {
        "post": {
          "operationId": "SuportController_create",
          "parameters": [
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateSuportDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object"
                  }
                }
              }
            }
          },
          "tags": [
            "Support Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/suport/{id}": {
        "get": {
          "operationId": "SuportController_findOne",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SuportEntity"
                  }
                }
              }
            }
          },
          "tags": [
            "Support Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "delete": {
          "operationId": "SuportController_remove",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": ""
            }
          },
          "tags": [
            "Support Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/suggest": {
        "post": {
          "operationId": "SuggestEstablishmentController_create",
          "parameters": [
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateSuggestEstablishmentDto"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SuggestEstablishmentEntity"
                  }
                }
              }
            }
          },
          "tags": [
            "Suggestion Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        },
        "get": {
          "operationId": "SuggestEstablishmentController_findAll",
          "parameters": [
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/SuggestEstablishmentEntity"
                    }
                  }
                }
              }
            }
          },
          "tags": [
            "Suggestion Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      },
      "/suggest/{id}": {
        "get": {
          "operationId": "SuggestEstablishmentController_findOne",
          "parameters": [
            {
              "name": "id",
              "required": true,
              "in": "path",
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "x_api_key",
              "in": "header",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/SuggestEstablishmentEntity"
                  }
                }
              }
            }
          },
          "tags": [
            "Suggestion Routes"
          ],
          "security": [
            {
              "bearer": []
            }
          ]
        }
      }
    },
    "info": {
      "title": "Sex-adapt",
      "description": "API Routes and data",
      "version": "1.0",
      "contact": {}
    },
    "tags": [],
    "servers": [],
    "components": {
      "securitySchemes": {
        "bearer": {
          "scheme": "bearer",
          "bearerFormat": "JWT",
          "type": "http"
        }
      },
      "schemas": {
        "CreateAccessibilityDto": {
          "type": "object",
          "properties": {
            "elevator": {
              "type": "boolean"
            },
            "bar": {
              "type": "boolean"
            },
            "unevenness": {
              "type": "boolean"
            },
            "incompatible_dimensions": {
              "type": "boolean"
            },
            "sign_language": {
              "type": "boolean"
            },
            "tactile_floor": {
              "type": "boolean"
            },
            "braille": {
              "type": "boolean"
            }
          },
          "required": [
            "elevator",
            "bar",
            "unevenness",
            "incompatible_dimensions",
            "sign_language",
            "tactile_floor",
            "braille"
          ]
        },
        "UpdateUserDto": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "accessibilities": {
              "$ref": "#/components/schemas/CreateAccessibilityDto"
            }
          }
        },
        "EstablishmentEntity": {
          "type": "object",
          "properties": {
            "accessibilities": {
              "$ref": "#/components/schemas/AccessibilityEntity"
            },
            "favoritedBy": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/UserEntity"
              }
            },
            "name": {
              "type": "string"
            },
            "price": {
              "type": "number"
            },
            "category": {
              "type": "string"
            },
            "website": {
              "type": "string"
            },
            "address": {
              "type": "object",
              "properties": {
                "street": {
                  "required": true,
                  "type": "string"
                },
                "number": {
                  "required": true,
                  "type": "string"
                },
                "complement": {
                  "required": true,
                  "type": "string"
                },
                "cep": {
                  "required": true,
                  "type": "string"
                }
              }
            },
            "ground_floor_room": {
              "type": "boolean"
            },
            "latitude": {
              "type": "string"
            },
            "longitude": {
              "type": "string"
            },
            "cover_photo": {
              "type": "string"
            },
            "room_photos": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "landline": {
              "type": "string"
            },
            "whatsapp": {
              "type": "string"
            },
            "reviews": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ReviewEntity"
              }
            },
            "id": {
              "type": "string"
            },
            "createdAt": {
              "format": "date-time",
              "type": "string"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string"
            }
          },
          "required": [
            "accessibilities",
            "favoritedBy",
            "name",
            "price",
            "category",
            "address",
            "ground_floor_room",
            "latitude",
            "longitude",
            "cover_photo",
            "landline",
            "reviews",
            "id",
            "createdAt",
            "updatedAt"
          ]
        },
        "ReviewEntity": {
          "type": "object",
          "properties": {
            "user": {
              "$ref": "#/components/schemas/UserEntity"
            },
            "grade": {
              "type": "number"
            },
            "comment": {
              "type": "string"
            },
            "establishment": {
              "$ref": "#/components/schemas/EstablishmentEntity"
            },
            "id": {
              "type": "string"
            },
            "createdAt": {
              "format": "date-time",
              "type": "string"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string"
            }
          },
          "required": [
            "user",
            "grade",
            "comment",
            "establishment",
            "id",
            "createdAt",
            "updatedAt"
          ]
        },
        "SuportEntity": {
          "type": "object",
          "properties": {
            "user": {
              "$ref": "#/components/schemas/UserEntity"
            },
            "message": {
              "type": "string"
            },
            "id": {
              "type": "string"
            },
            "createdAt": {
              "format": "date-time",
              "type": "string"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string"
            }
          },
          "required": [
            "user",
            "message",
            "id",
            "createdAt",
            "updatedAt"
          ]
        },
        "SuggestEstablishmentEntity": {
          "type": "object",
          "properties": {
            "suggestedBy": {
              "type": "object"
            },
            "name": {
              "type": "string"
            },
            "category": {
              "type": "string"
            },
            "address": {
              "type": "string"
            },
            "landline": {
              "type": "string"
            },
            "price": {
              "type": "string"
            },
            "website": {
              "type": "string"
            },
            "ground_floor_room": {
              "type": "boolean"
            },
            "elevator": {
              "type": "boolean"
            },
            "bar": {
              "type": "boolean"
            },
            "unevenness": {
              "type": "boolean"
            },
            "incompatible_dimensions": {
              "type": "boolean"
            },
            "sign_language": {
              "type": "boolean"
            },
            "tactile_floor": {
              "type": "boolean"
            },
            "braille": {
              "type": "boolean"
            },
            "id": {
              "type": "string"
            },
            "createdAt": {
              "format": "date-time",
              "type": "string"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string"
            }
          },
          "required": [
            "suggestedBy",
            "name",
            "category",
            "address",
            "landline",
            "price",
            "website",
            "ground_floor_room",
            "elevator",
            "bar",
            "unevenness",
            "incompatible_dimensions",
            "sign_language",
            "tactile_floor",
            "braille",
            "id",
            "createdAt",
            "updatedAt"
          ]
        },
        "UserEntity": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "accessibilities": {
              "$ref": "#/components/schemas/AccessibilityEntity"
            },
            "reviews": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/ReviewEntity"
              }
            },
            "suports": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/SuportEntity"
              }
            },
            "favorites": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/EstablishmentEntity"
              }
            },
            "establishment_suggestions": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/SuggestEstablishmentEntity"
              }
            },
            "hashedRefreshToken": {
              "type": "string"
            },
            "id": {
              "type": "string"
            },
            "createdAt": {
              "format": "date-time",
              "type": "string"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string"
            }
          },
          "required": [
            "email",
            "password",
            "name",
            "accessibilities",
            "reviews",
            "suports",
            "favorites",
            "establishment_suggestions",
            "hashedRefreshToken",
            "id",
            "createdAt",
            "updatedAt"
          ]
        },
        "AccessibilityEntity": {
          "type": "object",
          "properties": {
            "user": {
              "nullable": true,
              "allOf": [
                {
                  "$ref": "#/components/schemas/UserEntity"
                }
              ]
            },
            "establishment": {
              "nullable": true,
              "allOf": [
                {
                  "$ref": "#/components/schemas/EstablishmentEntity"
                }
              ]
            },
            "elevator": {
              "type": "boolean"
            },
            "bar": {
              "type": "boolean"
            },
            "unevenness": {
              "type": "boolean"
            },
            "incompatible_dimensions": {
              "type": "boolean"
            },
            "sign_language": {
              "type": "boolean"
            },
            "tactile_floor": {
              "type": "boolean"
            },
            "braille": {
              "type": "boolean"
            },
            "id": {
              "type": "string"
            },
            "createdAt": {
              "format": "date-time",
              "type": "string"
            },
            "updatedAt": {
              "format": "date-time",
              "type": "string"
            }
          },
          "required": [
            "user",
            "establishment",
            "elevator",
            "bar",
            "unevenness",
            "incompatible_dimensions",
            "sign_language",
            "tactile_floor",
            "braille",
            "id",
            "createdAt",
            "updatedAt"
          ]
        },
        "CreateEstablishmentDto": {
          "type": "object",
          "properties": {
            "accessibilities": {
              "$ref": "#/components/schemas/CreateAccessibilityDto"
            },
            "name": {
              "type": "string"
            },
            "price": {
              "type": "number"
            },
            "category": {
              "type": "string"
            },
            "website": {
              "type": "string"
            },
            "address": {
              "type": "object",
              "properties": {
                "street": {
                  "required": true,
                  "type": "string"
                },
                "number": {
                  "required": true,
                  "type": "string"
                },
                "complement": {
                  "required": true,
                  "type": "string"
                },
                "cep": {
                  "required": true,
                  "type": "string"
                }
              }
            },
            "ground_floor_room": {
              "type": "boolean"
            },
            "latitude": {
              "type": "string"
            },
            "longitude": {
              "type": "string"
            },
            "cover_photo": {
              "type": "string"
            },
            "room_photos": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "landline": {
              "type": "string"
            },
            "whatsapp": {
              "type": "string"
            }
          },
          "required": [
            "accessibilities",
            "name",
            "price",
            "category",
            "website",
            "address",
            "ground_floor_room",
            "latitude",
            "longitude",
            "cover_photo",
            "room_photos",
            "landline",
            "whatsapp"
          ]
        },
        "UpdateEstablishmentDto": {
          "type": "object",
          "properties": {
            "accessibilities": {
              "$ref": "#/components/schemas/CreateAccessibilityDto"
            },
            "name": {
              "type": "string"
            },
            "price": {
              "type": "number"
            },
            "category": {
              "type": "string"
            },
            "website": {
              "type": "string"
            },
            "address": {
              "type": "object",
              "properties": {
                "street": {
                  "required": true,
                  "type": "string"
                },
                "number": {
                  "required": true,
                  "type": "string"
                },
                "complement": {
                  "required": true,
                  "type": "string"
                },
                "cep": {
                  "required": true,
                  "type": "string"
                }
              }
            },
            "ground_floor_room": {
              "type": "boolean"
            },
            "latitude": {
              "type": "string"
            },
            "longitude": {
              "type": "string"
            },
            "cover_photo": {
              "type": "string"
            },
            "room_photos": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "landline": {
              "type": "string"
            },
            "whatsapp": {
              "type": "string"
            }
          },
          "required": [
            "accessibilities",
            "name",
            "price",
            "category",
            "website",
            "address",
            "ground_floor_room",
            "latitude",
            "longitude",
            "cover_photo",
            "room_photos",
            "landline",
            "whatsapp"
          ]
        },
        "CreateUserDto": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "accessibilities": {
              "$ref": "#/components/schemas/CreateAccessibilityDto"
            }
          },
          "required": [
            "email",
            "password",
            "name",
            "accessibilities"
          ]
        },
        "AuthDto": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            }
          },
          "required": [
            "email",
            "password"
          ]
        },
        "CreateRecoverPasswordDto": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            }
          },
          "required": [
            "email"
          ]
        },
        "ConfirmTokenDto": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "token": {
              "type": "number"
            }
          },
          "required": [
            "email",
            "token"
          ]
        },
        "ChangePasswordDto": {
          "type": "object",
          "properties": {
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            }
          },
          "required": [
            "email",
            "password"
          ]
        },
        "CreateReviewDto": {
          "type": "object",
          "properties": {
            "grade": {
              "type": "number"
            },
            "comment": {
              "type": "string"
            },
            "establishmentId": {
              "type": "string"
            }
          },
          "required": [
            "grade",
            "comment",
            "establishmentId"
          ]
        },
        "CreateSuportDto": {
          "type": "object",
          "properties": {
            "message": {
              "type": "string"
            },
            "subject": {
              "type": "string"
            },
            "title": {
              "type": "string"
            },
            "subtitle": {
              "type": "string"
            }
          },
          "required": [
            "message",
            "subject",
            "title",
            "subtitle"
          ]
        },
        "CreateSuggestEstablishmentDto": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "category": {
              "type": "string"
            },
            "address": {
              "type": "string"
            },
            "landline": {
              "type": "string"
            },
            "price": {
              "type": "string"
            },
            "ground_floor_room": {
              "type": "boolean"
            },
            "website": {
              "type": "string"
            },
            "elevator": {
              "type": "boolean"
            },
            "bar": {
              "type": "boolean"
            },
            "unevenness": {
              "type": "boolean"
            },
            "incompatible_dimensions": {
              "type": "boolean"
            },
            "sign_language": {
              "type": "boolean"
            },
            "tactile_floor": {
              "type": "boolean"
            },
            "braille": {
              "type": "boolean"
            }
          },
          "required": [
            "name",
            "category",
            "address",
            "landline",
            "price",
            "ground_floor_room",
            "website",
            "elevator",
            "bar",
            "unevenness",
            "incompatible_dimensions",
            "sign_language",
            "tactile_floor",
            "braille"
          ]
        }
      }
    }
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  let urls = options.swaggerUrls
  let customOptions = options.customOptions
  let spec1 = options.swaggerDoc
  let swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (let attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  let ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.initOAuth) {
    ui.initOAuth(customOptions.initOAuth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }
  
  window.ui = ui
}
