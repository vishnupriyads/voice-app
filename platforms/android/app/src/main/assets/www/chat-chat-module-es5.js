(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./node_modules/api-ai-javascript/es6/ApiAiClient.js":
/*!***********************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/ApiAiClient.js ***!
  \***********************************************************/
/*! exports provided: ApiAiConstants, ApiAiClient, IStreamClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAiClient", function() { return ApiAiClient; });
/* harmony import */ var _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiAiConstants */ "./node_modules/api-ai-javascript/es6/ApiAiConstants.js");
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Errors */ "./node_modules/api-ai-javascript/es6/Errors.js");
/* harmony import */ var _Request_EventRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Request/EventRequest */ "./node_modules/api-ai-javascript/es6/Request/EventRequest.js");
/* harmony import */ var _Request_TextRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Request/TextRequest */ "./node_modules/api-ai-javascript/es6/Request/TextRequest.js");
/* harmony import */ var _Interfaces__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Interfaces */ "./node_modules/api-ai-javascript/es6/Interfaces.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IStreamClient", function() { return _Interfaces__WEBPACK_IMPORTED_MODULE_4__["IStreamClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiAiConstants", function() { return _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"]; });







class ApiAiClient {
    constructor(options) {
        if (!options || !options.accessToken) {
            throw new _Errors__WEBPACK_IMPORTED_MODULE_1__["ApiAiClientConfigurationError"]("Access token is required for new ApiAi.Client instance");
        }
        this.accessToken = options.accessToken;
        this.apiLang = options.lang || _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"].DEFAULT_CLIENT_LANG;
        this.apiVersion = options.version || _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"].DEFAULT_API_VERSION;
        this.apiBaseUrl = options.baseUrl || _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"].DEFAULT_BASE_URL;
        this.sessionId = options.sessionId || this.guid();
    }
    textRequest(query, options = {}) {
        if (!query) {
            throw new _Errors__WEBPACK_IMPORTED_MODULE_1__["ApiAiClientConfigurationError"]("Query should not be empty");
        }
        options.query = query;
        return new _Request_TextRequest__WEBPACK_IMPORTED_MODULE_3__["default"](this, options).perform();
    }
    eventRequest(eventName, eventData = {}, options = {}) {
        if (!eventName) {
            throw new _Errors__WEBPACK_IMPORTED_MODULE_1__["ApiAiClientConfigurationError"]("Event name can not be empty");
        }
        options.event = { name: eventName, data: eventData };
        return new _Request_EventRequest__WEBPACK_IMPORTED_MODULE_2__["EventRequest"](this, options).perform();
    }
    // @todo: implement local tts request
    /*public ttsRequest(query) {
        if (!query) {
            throw new ApiAiClientConfigurationError("Query should not be empty");
        }
        return new TTSRequest(this).makeTTSRequest(query);
    }*/
    /*public userEntitiesRequest(options: IRequestOptions = {}): UserEntitiesRequest {
        return new UserEntitiesRequest(this, options);
    }*/
    getAccessToken() {
        return this.accessToken;
    }
    getApiVersion() {
        return (this.apiVersion) ? this.apiVersion : _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"].DEFAULT_API_VERSION;
    }
    getApiLang() {
        return (this.apiLang) ? this.apiLang : _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"].DEFAULT_CLIENT_LANG;
    }
    getApiBaseUrl() {
        return (this.apiBaseUrl) ? this.apiBaseUrl : _ApiAiConstants__WEBPACK_IMPORTED_MODULE_0__["ApiAiConstants"].DEFAULT_BASE_URL;
    }
    setSessionId(sessionId) {
        this.sessionId = sessionId;
    }
    getSessionId() {
        return this.sessionId;
    }
    /**
     * generates new random UUID
     * @returns {string}
     */
    guid() {
        const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
            s4() + "-" + s4() + s4() + s4();
    }
}


/***/ }),

/***/ "./node_modules/api-ai-javascript/es6/ApiAiConstants.js":
/*!**************************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/ApiAiConstants.js ***!
  \**************************************************************/
/*! exports provided: ApiAiConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAiConstants", function() { return ApiAiConstants; });
var ApiAiConstants;
(function (ApiAiConstants) {
    let AVAILABLE_LANGUAGES;
    (function (AVAILABLE_LANGUAGES) {
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["EN"] = "en"] = "EN";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["DE"] = "de"] = "DE";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ES"] = "es"] = "ES";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["PT_BR"] = "pt-BR"] = "PT_BR";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ZH_HK"] = "zh-HK"] = "ZH_HK";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ZH_CN"] = "zh-CN"] = "ZH_CN";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["ZH_TW"] = "zh-TW"] = "ZH_TW";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["NL"] = "nl"] = "NL";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["FR"] = "fr"] = "FR";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["IT"] = "it"] = "IT";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["JA"] = "ja"] = "JA";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["KO"] = "ko"] = "KO";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["PT"] = "pt"] = "PT";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["RU"] = "ru"] = "RU";
        AVAILABLE_LANGUAGES[AVAILABLE_LANGUAGES["UK"] = "uk"] = "UK";
    })(AVAILABLE_LANGUAGES = ApiAiConstants.AVAILABLE_LANGUAGES || (ApiAiConstants.AVAILABLE_LANGUAGES = {}));
    ApiAiConstants.VERSION = "2.0.0-beta.20";
    ApiAiConstants.DEFAULT_BASE_URL = "https://api.api.ai/v1/";
    ApiAiConstants.DEFAULT_API_VERSION = "20150910";
    ApiAiConstants.DEFAULT_CLIENT_LANG = AVAILABLE_LANGUAGES.EN;
})(ApiAiConstants || (ApiAiConstants = {}));


/***/ }),

/***/ "./node_modules/api-ai-javascript/es6/Errors.js":
/*!******************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/Errors.js ***!
  \******************************************************/
/*! exports provided: ApiAiBaseError, ApiAiClientConfigurationError, ApiAiRequestError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAiBaseError", function() { return ApiAiBaseError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAiClientConfigurationError", function() { return ApiAiClientConfigurationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiAiRequestError", function() { return ApiAiRequestError; });
class ApiAiBaseError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.stack = new Error().stack;
    }
}
class ApiAiClientConfigurationError extends ApiAiBaseError {
    constructor(message) {
        super(message);
        this.name = "ApiAiClientConfigurationError";
    }
}
class ApiAiRequestError extends ApiAiBaseError {
    constructor(message, code = null) {
        super(message);
        this.message = message;
        this.code = code;
        this.name = "ApiAiRequestError";
    }
}


/***/ }),

/***/ "./node_modules/api-ai-javascript/es6/Interfaces.js":
/*!**********************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/Interfaces.js ***!
  \**********************************************************/
/*! exports provided: IStreamClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IStreamClient", function() { return IStreamClient; });
var IStreamClient;
(function (IStreamClient) {
    let ERROR;
    (function (ERROR) {
        ERROR[ERROR["ERR_NETWORK"] = 0] = "ERR_NETWORK";
        ERROR[ERROR["ERR_AUDIO"] = 1] = "ERR_AUDIO";
        ERROR[ERROR["ERR_SERVER"] = 2] = "ERR_SERVER";
        ERROR[ERROR["ERR_CLIENT"] = 3] = "ERR_CLIENT";
    })(ERROR = IStreamClient.ERROR || (IStreamClient.ERROR = {}));
    let EVENT;
    (function (EVENT) {
        EVENT[EVENT["MSG_WAITING_MICROPHONE"] = 0] = "MSG_WAITING_MICROPHONE";
        EVENT[EVENT["MSG_MEDIA_STREAM_CREATED"] = 1] = "MSG_MEDIA_STREAM_CREATED";
        EVENT[EVENT["MSG_INIT_RECORDER"] = 2] = "MSG_INIT_RECORDER";
        EVENT[EVENT["MSG_RECORDING"] = 3] = "MSG_RECORDING";
        EVENT[EVENT["MSG_SEND"] = 4] = "MSG_SEND";
        EVENT[EVENT["MSG_SEND_EMPTY"] = 5] = "MSG_SEND_EMPTY";
        EVENT[EVENT["MSG_SEND_EOS_OR_JSON"] = 6] = "MSG_SEND_EOS_OR_JSON";
        EVENT[EVENT["MSG_WEB_SOCKET"] = 7] = "MSG_WEB_SOCKET";
        EVENT[EVENT["MSG_WEB_SOCKET_OPEN"] = 8] = "MSG_WEB_SOCKET_OPEN";
        EVENT[EVENT["MSG_WEB_SOCKET_CLOSE"] = 9] = "MSG_WEB_SOCKET_CLOSE";
        EVENT[EVENT["MSG_STOP"] = 10] = "MSG_STOP";
        EVENT[EVENT["MSG_CONFIG_CHANGED"] = 11] = "MSG_CONFIG_CHANGED";
    })(EVENT = IStreamClient.EVENT || (IStreamClient.EVENT = {}));
})(IStreamClient || (IStreamClient = {}));


/***/ }),

/***/ "./node_modules/api-ai-javascript/es6/Request/EventRequest.js":
/*!********************************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/Request/EventRequest.js ***!
  \********************************************************************/
/*! exports provided: EventRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventRequest", function() { return EventRequest; });
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Request */ "./node_modules/api-ai-javascript/es6/Request/Request.js");

class EventRequest extends _Request__WEBPACK_IMPORTED_MODULE_0__["default"] {
}


/***/ }),

/***/ "./node_modules/api-ai-javascript/es6/Request/Request.js":
/*!***************************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/Request/Request.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Errors */ "./node_modules/api-ai-javascript/es6/Errors.js");
/* harmony import */ var _XhrRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../XhrRequest */ "./node_modules/api-ai-javascript/es6/XhrRequest.js");


class Request {
    constructor(apiAiClient, options) {
        this.apiAiClient = apiAiClient;
        this.options = options;
        this.uri = this.apiAiClient.getApiBaseUrl() + "query?v=" + this.apiAiClient.getApiVersion();
        this.requestMethod = _XhrRequest__WEBPACK_IMPORTED_MODULE_1__["default"].Method.POST;
        this.headers = {
            Authorization: "Bearer " + this.apiAiClient.getAccessToken(),
        };
        this.options.lang = this.apiAiClient.getApiLang();
        this.options.sessionId = this.apiAiClient.getSessionId();
    }
    static handleSuccess(xhr) {
        return Promise.resolve(JSON.parse(xhr.responseText));
    }
    static handleError(xhr) {
        let error = new _Errors__WEBPACK_IMPORTED_MODULE_0__["ApiAiRequestError"](null);
        try {
            const serverResponse = JSON.parse(xhr.responseText);
            if (serverResponse.status && serverResponse.status.errorDetails) {
                error = new _Errors__WEBPACK_IMPORTED_MODULE_0__["ApiAiRequestError"](serverResponse.status.errorDetails, serverResponse.status.code);
            }
            else {
                error = new _Errors__WEBPACK_IMPORTED_MODULE_0__["ApiAiRequestError"](xhr.statusText, xhr.status);
            }
        }
        catch (e) {
            error = new _Errors__WEBPACK_IMPORTED_MODULE_0__["ApiAiRequestError"](xhr.statusText, xhr.status);
        }
        return Promise.reject(error);
    }
    perform(overrideOptions = null) {
        const options = overrideOptions ? overrideOptions : this.options;
        return _XhrRequest__WEBPACK_IMPORTED_MODULE_1__["default"].ajax(this.requestMethod, this.uri, options, this.headers)
            .then(Request.handleSuccess.bind(this))
            .catch(Request.handleError.bind(this));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Request);


/***/ }),

/***/ "./node_modules/api-ai-javascript/es6/Request/TextRequest.js":
/*!*******************************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/Request/TextRequest.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TextRequest; });
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Request */ "./node_modules/api-ai-javascript/es6/Request/Request.js");

class TextRequest extends _Request__WEBPACK_IMPORTED_MODULE_0__["default"] {
}


/***/ }),

/***/ "./node_modules/api-ai-javascript/es6/XhrRequest.js":
/*!**********************************************************!*\
  !*** ./node_modules/api-ai-javascript/es6/XhrRequest.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * quick ts implementation of example from
 * https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * with some minor improvements
 * @todo: test (?)
 * @todo: add node.js implementation with node's http inside. Just to make SDK cross-platform
 */
class XhrRequest {
    // Method that performs the ajax request
    static ajax(method, url, args = null, headers = null, options = {}) {
        // Creating a promise
        return new Promise((resolve, reject) => {
            // Instantiates the XMLHttpRequest
            const client = XhrRequest.createXMLHTTPObject();
            let uri = url;
            let payload = null;
            // Add given payload to get request
            if (args && (method === XhrRequest.Method.GET)) {
                uri += "?";
                let argcount = 0;
                for (const key in args) {
                    if (args.hasOwnProperty(key)) {
                        if (argcount++) {
                            uri += "&";
                        }
                        uri += encodeURIComponent(key) + "=" + encodeURIComponent(args[key]);
                    }
                }
            }
            else if (args) {
                if (!headers) {
                    headers = {};
                }
                headers["Content-Type"] = "application/json; charset=utf-8";
                payload = JSON.stringify(args);
            }
            for (const key in options) {
                if (key in client) {
                    client[key] = options[key];
                }
            }
            // hack: method[method] is somewhat like .toString for enum Method
            // should be made in normal way
            client.open(XhrRequest.Method[method], uri, true);
            // Add given headers
            if (headers) {
                for (const key in headers) {
                    if (headers.hasOwnProperty(key)) {
                        client.setRequestHeader(key, headers[key]);
                    }
                }
            }
            payload ? client.send(payload) : client.send();
            client.onload = () => {
                if (client.status >= 200 && client.status < 300) {
                    // Performs the function "resolve" when this.status is equal to 2xx
                    resolve(client);
                }
                else {
                    // Performs the function "reject" when this.status is different than 2xx
                    reject(client);
                }
            };
            client.onerror = () => {
                reject(client);
            };
        });
    }
    static get(url, payload = null, headers = null, options = {}) {
        return XhrRequest.ajax(XhrRequest.Method.GET, url, payload, headers, options);
    }
    static post(url, payload = null, headers = null, options = {}) {
        return XhrRequest.ajax(XhrRequest.Method.POST, url, payload, headers, options);
    }
    static put(url, payload = null, headers = null, options = {}) {
        return XhrRequest.ajax(XhrRequest.Method.PUT, url, payload, headers, options);
    }
    static delete(url, payload = null, headers = null, options = {}) {
        return XhrRequest.ajax(XhrRequest.Method.DELETE, url, payload, headers, options);
    }
    static createXMLHTTPObject() {
        let xmlhttp = null;
        for (const i of XhrRequest.XMLHttpFactories) {
            try {
                xmlhttp = i();
            }
            catch (e) {
                continue;
            }
            break;
        }
        return xmlhttp;
    }
}
XhrRequest.XMLHttpFactories = [
    () => new XMLHttpRequest(),
    () => new window["ActiveXObject"]("Msxml2.XMLHTTP"),
    () => new window["ActiveXObject"]("Msxml3.XMLHTTP"),
    () => new window["ActiveXObject"]("Microsoft.XMLHTTP")
];
(function (XhrRequest) {
    let Method;
    (function (Method) {
        Method[Method["GET"] = "GET"] = "GET";
        Method[Method["POST"] = "POST"] = "POST";
        Method[Method["PUT"] = "PUT"] = "PUT";
        Method[Method["DELETE"] = "DELETE"] = "DELETE";
    })(Method = XhrRequest.Method || (XhrRequest.Method = {}));
})(XhrRequest || (XhrRequest = {}));
/* harmony default export */ __webpack_exports__["default"] = (XhrRequest);


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chat/chat.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chat/chat.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-row>\n      <ion-col size=\"2\">\n          <img src=\"../../assets/icon3.png\" width=\"37px\">\n      </ion-col>\n      <ion-col size=\"10\">\n          <ion-title class=\"title\">Jarvis</ion-title>\n      </ion-col>\n    </ion-row>\n\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"padding: 10px\"></div>\n  <ng-container *ngFor=\"let message of messages | async\" class=\"chat-container\">\n    \n    <div class=\"message\" [ngClass]=\"{ 'from': message.sentBy === 'bot',\n                                      'to':   message.sentBy === 'user' }\">\n      {{ message.content }}\n    </div>\n  \n  </ng-container>\n  <div style=\"padding: 50px\"></div>\n</ion-content>\n<ion-footer>\n  <ion-grid class=\"type-section\">\n    <ion-row>\n      <ion-col size=\"10\">\n        <input type=\"text\" placeholder=\"Type a message\" name=\"message\" [(ngModel)]=\"message\" (keyup)=\"onMessageType($event)\">\n      </ion-col>\n      <ion-col size=\"2\">\n        <button class=\"voice-btn\" *ngIf=\"!sendButton\">\n          <img src=\"../../assets/Google_mic.svg.png\" class=\"voice-icon\" (click)=\"startListening()\">\n        </button>\n        <button class=\"voice-btn\" *ngIf=\"sendButton\">\n          <img src=\"../../assets/send-button.png\" class=\"voice-icon\" (click)=\"sendMessage()\">\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/chat/chat.page.ts");







var routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]
    }
];
var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.page.scss":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  margin-top: 4px;\n  margin-left: -30px;\n}\n\n.voice-icon {\n  width: 20px;\n}\n\n.voice-btn {\n  background: white;\n  border-radius: 50%;\n  text-align: center;\n  padding: 10px;\n  width: 50px;\n  margin-top: 5px;\n  height: 50px;\n}\n\ninput[type=text] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid white;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\n.type-section {\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  background-color: rgba(236, 236, 236, 0.904);\n}\n\n.chat-container {\n  padding: 100px;\n}\n\n.message {\n  border-radius: 50px;\n  margin: 0 15px 10px;\n  padding: 15px 20px;\n  position: relative;\n  font-weight: bold;\n}\n\n.message.to {\n  background-color: #2095FE;\n  color: #fff;\n  margin-left: 100px;\n  text-align: right;\n}\n\n.message.from {\n  background-color: #E5E4E9;\n  color: #363636;\n  margin-right: 100px;\n}\n\n.message.to + .message.to,\n.message.from + .message.from {\n  margin-top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpZ2lsZWRnZS9Eb3dubG9hZHMvdm9pY2UtYXBwL3NyYy9hcHAvY2hhdC9jaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2hhdC9jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7RUFFQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FDRUo7O0FEQUE7RUFDRyx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7QUNHSDs7QUREQTtFQUNJLGNBQUE7QUNJSjs7QURGQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNLSjs7QURIQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNNSjs7QURKQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDT0o7O0FESkE7O0VBRUEsaUJBQUE7QUNPQSIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICBtYXJnaW4tbGVmdDogLTMwcHg7XG59XG5cbi52b2ljZS1pY29uIHtcbiAgICB3aWR0aDogMjBweDtcbn1cbi52b2ljZS1idG4ge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC8vIGJveC1zaGFkb3c6IDFweCAycHggIzg4ODg4ODtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cbmlucHV0W3R5cGU9dGV4dF0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4udHlwZS1zZWN0aW9uIHtcbiAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICBsZWZ0OiAwO1xuICAgYm90dG9tOiAwO1xuICAgd2lkdGg6IDEwMCU7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNiwgMjM2LCAyMzYsIDAuOTA0KTsgXG59XG4uY2hhdC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDEwMHB4O1xufVxuLm1lc3NhZ2Uge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgbWFyZ2luOiAwIDE1cHggMTBweDtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm1lc3NhZ2UudG8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDk1RkU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLm1lc3NhZ2UuZnJvbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1RTRFOTtcbiAgICBjb2xvcjogIzM2MzYzNjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xuXG59XG4ubWVzc2FnZS50byArIC5tZXNzYWdlLnRvLFxuLm1lc3NhZ2UuZnJvbSArIC5tZXNzYWdlLmZyb20ge1xubWFyZ2luLXRvcDogLTEwcHg7XG59XG4iLCIudGl0bGUge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMzBweDtcbn1cblxuLnZvaWNlLWljb24ge1xuICB3aWR0aDogMjBweDtcbn1cblxuLnZvaWNlLWJ0biB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgbWFyZ2luOiA4cHggMDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4udHlwZS1zZWN0aW9uIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzYsIDIzNiwgMjM2LCAwLjkwNCk7XG59XG5cbi5jaGF0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEwMHB4O1xufVxuXG4ubWVzc2FnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG1hcmdpbjogMCAxNXB4IDEwcHg7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1lc3NhZ2UudG8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjA5NUZFO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1lc3NhZ2UuZnJvbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNUU0RTk7XG4gIGNvbG9yOiAjMzYzNjM2O1xuICBtYXJnaW4tcmlnaHQ6IDEwMHB4O1xufVxuXG4ubWVzc2FnZS50byArIC5tZXNzYWdlLnRvLFxuLm1lc3NhZ2UuZnJvbSArIC5tZXNzYWdlLmZyb20ge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/chat/chat.page.ts":
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/speech-recognition/ngx */ "./node_modules/@ionic-native/speech-recognition/ngx/index.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ChatPage = /** @class */ (function () {
    function ChatPage(speechRecognition, cd, chat, appRef) {
        var _this = this;
        this.speechRecognition = speechRecognition;
        this.cd = cd;
        this.chat = chat;
        this.appRef = appRef;
        var statringMsg = [
            {
                content: 'Hi I am your voice assistent. How Can i help you? Lets See the Example',
            }
        ];
        statringMsg.forEach(function (msg) {
            var botMessage = new _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["Message"](msg.content, 'bot');
            _this.chat.update(botMessage);
        });
    }
    ChatPage.prototype.ngOnInit = function () {
        // appends to array after each new message is added to feedSource
        this.messages = this.chat.conversation.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["scan"])(function (acc, val) { return acc.concat(val); }));
    };
    //to get a keyup event and checking for string length 
    //if it is 0 then send button will be false
    //otherwise send button will be true
    ChatPage.prototype.onMessageType = function (event) {
        var messageLength = event.target.value.length;
        if (messageLength > 0) {
            this.sendButton = true;
        }
        else {
            this.sendButton = false;
        }
    };
    //on click of send button 
    //sending message to chat bot 
    ChatPage.prototype.sendMessage = function () {
        this.chat.converse(this.message);
        this.message = '';
        this.sendButton = false;
    };
    ChatPage.prototype.startListening = function () {
        var _this = this;
        this.speechRecognition.startListening()
            .subscribe(function (matches) {
            _this.appRef.isStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])(function (stable) { return stable; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(1000); })).subscribe(function (counter) {
                if (counter == 0) {
                    _this.chat.converse(matches[0]);
                    _this.message = '';
                }
                _this.cd.detectChanges();
            });
        }, function (onerror) { return console.log('error:', onerror); });
    };
    ChatPage.ctorParameters = function () { return [
        { type: _ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_2__["SpeechRecognition"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] }
    ]; };
    ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/chat/chat.page.html"),
            styles: [__webpack_require__(/*! ./chat.page.scss */ "./src/app/chat/chat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_speech_recognition_ngx__WEBPACK_IMPORTED_MODULE_2__["SpeechRecognition"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])
    ], ChatPage);
    return ChatPage;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: Message, ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var api_ai_javascript_es6_ApiAiClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! api-ai-javascript/es6/ApiAiClient */ "./node_modules/api-ai-javascript/es6/ApiAiClient.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



// import { ApiAiClient } from 'api-ai-javascript';


// Message class for displaying messages in the component
var Message = /** @class */ (function () {
    function Message(content, sentBy) {
        this.content = content;
        this.sentBy = sentBy;
    }
    Message.ctorParameters = function () { return [
        { type: String },
        { type: String }
    ]; };
    return Message;
}());

var ChatService = /** @class */ (function () {
    function ChatService() {
        this.token = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].dialogflow.angularBot;
        this.client = new api_ai_javascript_es6_ApiAiClient__WEBPACK_IMPORTED_MODULE_3__["ApiAiClient"]({ accessToken: this.token });
        this.conversation = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
    }
    // Sends and receives messages via DialogFlow
    ChatService.prototype.converse = function (msg) {
        var _this = this;
        var userMessage = new Message(msg, 'user');
        this.update(userMessage);
        return this.client.textRequest(msg)
            .then(function (res) {
            var speech = res.result.fulfillment.speech;
            var botMessage = new Message(speech, 'bot');
            _this.update(botMessage);
        });
    };
    // Adds message to source
    ChatService.prototype.update = function (msg) {
        this.conversation.next([msg]);
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatService);
    return ChatService;
}());



/***/ })

}]);
//# sourceMappingURL=chat-chat-module-es5.js.map