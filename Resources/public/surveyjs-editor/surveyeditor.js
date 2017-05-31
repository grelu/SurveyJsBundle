(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("knockout"), require("survey-knockout"), require("jquery"), require("bootstrap"));
	else if(typeof define === 'function' && define.amd)
		define("SurveyEditor", ["knockout", "survey-knockout", "jquery", "bootstrap"], factory);
	else if(typeof exports === 'object')
		exports["SurveyEditor"] = factory(require("knockout"), require("survey-knockout"), require("jquery"), require("bootstrap"));
	else
		root["SurveyEditor"] = factory(root["ko"], root["Survey"], root["jQuery"], root["bootstrap"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_37__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 67);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return editorLocalization; });
/* unused harmony export defaultStrings */
var editorLocalization = {
    currentLocale: "",
    locales: {},
    getString: function (strName, locale) {
        if (locale === void 0) { locale = null; }
        if (!locale)
            locale = this.currentLocale;
        var loc = locale ? this.locales[locale] : defaultStrings;
        if (!loc)
            loc = defaultStrings;
        var path = strName.split('.');
        var obj = loc;
        for (var i = 0; i < path.length; i++) {
            obj = obj[path[i]];
            if (!obj) {
                if (loc === defaultStrings)
                    return path[i];
                return this.getString(strName, "en");
            }
        }
        return obj;
    },
    getPropertyName: function (strName, local) {
        if (local === void 0) { local = null; }
        var obj = this.getProperty(strName, local);
        if (obj["name"])
            return obj["name"];
        return obj;
    },
    getPropertyTitle: function (strName, local) {
        if (local === void 0) { local = null; }
        var obj = this.getProperty(strName, local);
        if (obj["title"])
            return obj["title"];
        return "";
    },
    getProperty: function (strName, local) {
        if (local === void 0) { local = null; }
        var obj = this.getString("p." + strName, local);
        if (obj !== strName)
            return obj;
        var pos = strName.indexOf('_');
        if (pos < -1)
            return obj;
        strName = strName.substr(pos + 1);
        return this.getString("p." + strName, local);
    },
    getLocales: function () {
        var res = [];
        res.push("");
        for (var key in this.locales) {
            res.push(key);
        }
        return res;
    }
};
var defaultStrings = {
    //survey templates
    survey: {
        dropQuestion: "Please drop a question here.",
        copy: "Copy",
        addToToolbox: "Add to toolbox",
        deletePanel: "Delete Panel",
        deleteQuestion: "Delete Question"
    },
    //questionTypes
    qt: {
        checkbox: "Checkbox",
        comment: "Comment",
        dropdown: "Dropdown",
        file: "File",
        html: "Html",
        matrix: "Matrix (single choice)",
        matrixdropdown: "Matrix (multiple choice)",
        matrixdynamic: "Matrix (dynamic rows)",
        multipletext: "Multiple Text",
        panel: "Panel",
        radiogroup: "Radiogroup",
        rating: "Rating",
        text: "Single Input"
    },
    //Strings in Editor
    ed: {
        addNewPage: "Add New Page",
        newPageName: "page",
        newQuestionName: "question",
        newPanelName: "panel",
        testSurvey: "Test Survey",
        testSurveyAgain: "Test Survey Again",
        testSurveyWidth: "Survey width: ",
        embedSurvey: "Embed Survey",
        saveSurvey: "Save Survey",
        designer: "Survey Designer",
        jsonEditor: "JSON Editor",
        undo: "Undo",
        redo: "Redo",
        options: "Options",
        generateValidJSON: "Generate Valid JSON",
        generateReadableJSON: "Generate Readable JSON",
        toolbox: "Toolbox",
        delSelObject: "Delete selected object",
        correctJSON: "Please correct JSON.",
        surveyResults: "Survey Result: "
    },
    //Property Editors
    pe: {
        apply: "Apply",
        ok: "OK",
        cancel: "Cancel",
        reset: "Reset",
        close: "Close",
        delete: "Delete",
        addNew: "Add New",
        removeAll: "Remove All",
        edit: "Edit",
        empty: "<empty>",
        fastEntry: "Fast Entry",
        formEntry: "Form Entry",
        testService: "Test the service",
        expressionHelp: "Please enter a boolean expression. It should return true to keep the question/page visible. For example: {question1} = 'value1' or ({question2} = 3 and {question3} < 5)",
        propertyIsEmpty: "Please enter value into the property",
        value: "Value",
        text: "Text",
        required: "Required?",
        columnEdit: "Edit column: {0}",
        itemEdit: "Edit item: {0}",
        hasOther: "Has other item",
        name: "Name",
        title: "Title",
        cellType: "Cell type",
        colCount: "Column count",
        choicesOrder: "Select choices order",
        visible: "Is visible?",
        isRequired: "Is required?",
        startWithNewLine: "Is start with new line?",
        rows: "Row count",
        placeHolder: "Input place holder",
        showPreview: "Is image preview shown?",
        storeDataAsText: "Store file content in JSON result as text",
        maxSize: "Maximum file size in bytes",
        imageHeight: "Image height",
        imageWidth: "Image width",
        rowCount: "Row count",
        addRowText: "Add row button text",
        removeRowText: "Remove row button text",
        minRateDescription: "Minimum rate description",
        maxRateDescription: "Maximum rate description",
        inputType: "Input type",
        optionsCaption: "Options caption",
        qEditorTitle: "Edit question: {0}",
        tabs: {
            general: "General",
            fileOptions: "Options",
            html: "Html Editor",
            columns: "Columns",
            rows: "Rows",
            choices: "Choices",
            visibleIf: "Visible If",
            rateValues: "Rate Values",
            choicesByUrl: "Choices from Web",
            matrixChoices: "Default Choices",
            multipleTextItems: "Text Inputs",
            validators: "Validators"
        },
        editProperty: "Edit property '{0}'",
        items: "[ Items: {0} ]",
        enterNewValue: "Please, enter the value.",
        noquestions: "There is no any question in the survey.",
        createtrigger: "Please create a trigger",
        triggerOn: "On ",
        triggerMakePagesVisible: "Make pages visible:",
        triggerMakeQuestionsVisible: "Make questions visible:",
        triggerCompleteText: "Complete the survey if succeed.",
        triggerNotSet: "The trigger is not set",
        triggerRunIf: "Run if",
        triggerSetToName: "Change value of: ",
        triggerSetValue: "to: ",
        triggerIsVariable: "Do not put the variable into the survey result.",
        verbChangeType: "Change type ",
        verbChangePage: "Change page "
    },
    //Operators
    op: {
        empty: "is empty",
        notempty: "is not empty",
        equal: "equals",
        notequal: "not equals",
        contains: "contains",
        notcontains: "not contains",
        greater: "greater",
        less: "less",
        greaterorequal: "greater or equals",
        lessorequal: "Less or Equals"
    },
    //Embed window
    ew: {
        angular: "Use Angular version",
        jquery: "Use jQuery version",
        knockout: "Use Knockout version",
        react: "Use React version",
        vue: "Use Vue version",
        bootstrap: "For bootstrap framework",
        standard: "No bootstrap",
        showOnPage: "Show survey on a page",
        showInWindow: "Show survey in a window",
        loadFromServer: "Load Survey JSON from server",
        titleScript: "Scripts and styles",
        titleHtml: "HTML",
        titleJavaScript: "JavaScript"
    },
    //Properties
    p: {
        name: "name",
        title: { name: "title", title: "Leave it empty, if it is the same as 'Name'" },
        survey_title: { name: "title", title: "It will be shown on every page." },
        page_title: { name: "title", title: "Page title" }
    }
};
editorLocalization.locales["en"] = defaultStrings;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __assign */
/* harmony export (immutable) */ __webpack_exports__["a"] = __extends;
var __assign = Object["assign"] || function (target) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
                target[p] = s[p];
    }
    return target;
};
function __extends(thisClass, baseClass) {
    for (var p in baseClass)
        if (baseClass.hasOwnProperty(p))
            thisClass[p] = baseClass[p];
    function __() { this.constructor = thisClass; }
    thisClass.prototype = baseClass === null ? Object.create(baseClass) : (__.prototype = baseClass.prototype, new __());
}
;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyEditorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyStringPropertyEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SurveyDropdownPropertyEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SurveyBooleanPropertyEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SurveyNumberPropertyEditor; });

var SurveyPropertyEditorBase = (function () {
    function SurveyPropertyEditorBase() {
        this.value_ = null;
        this.options = null;
    }
    SurveyPropertyEditorBase.registerEditor = function (name, creator) {
        SurveyPropertyEditorBase.editorRegisteredList[name] = creator;
    };
    SurveyPropertyEditorBase.createEditor = function (editorType, func) {
        var creator = SurveyPropertyEditorBase.editorRegisteredList[editorType];
        if (!creator)
            creator = SurveyPropertyEditorBase.editorRegisteredList[SurveyPropertyEditorBase.defaultEditor];
        var propertyEditor = creator();
        propertyEditor.onChanged = func;
        return propertyEditor;
    };
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "editorType", {
        get: function () { throw "editorType is not defined"; },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyEditorBase.prototype.getValueText = function (value) { return value; };
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "value", {
        get: function () { return this.value_; },
        set: function (value) {
            value = this.getCorrectedValue(value);
            this.setValueCore(value);
            this.onValueChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyEditorBase.prototype, "locale", {
        get: function () {
            if (this.onGetLocale)
                return this.onGetLocale();
            return "";
        },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyEditorBase.prototype.setValueCore = function (value) {
        this.value_ = value;
    };
    SurveyPropertyEditorBase.prototype.setTitle = function (value) { };
    SurveyPropertyEditorBase.prototype.setObject = function (value) { };
    SurveyPropertyEditorBase.prototype.onValueChanged = function () {
    };
    SurveyPropertyEditorBase.prototype.getCorrectedValue = function (value) { return value; };
    return SurveyPropertyEditorBase;
}());

SurveyPropertyEditorBase.defaultEditor = "string";
SurveyPropertyEditorBase.editorRegisteredList = {};
var SurveyStringPropertyEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyStringPropertyEditor, _super);
    function SurveyStringPropertyEditor() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SurveyStringPropertyEditor.prototype, "editorType", {
        get: function () { return "string"; },
        enumerable: true,
        configurable: true
    });
    return SurveyStringPropertyEditor;
}(SurveyPropertyEditorBase));

var SurveyDropdownPropertyEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyDropdownPropertyEditor, _super);
    function SurveyDropdownPropertyEditor() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SurveyDropdownPropertyEditor.prototype, "editorType", {
        get: function () { return "dropdown"; },
        enumerable: true,
        configurable: true
    });
    return SurveyDropdownPropertyEditor;
}(SurveyPropertyEditorBase));

var SurveyBooleanPropertyEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyBooleanPropertyEditor, _super);
    function SurveyBooleanPropertyEditor() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SurveyBooleanPropertyEditor.prototype, "editorType", {
        get: function () { return "boolean"; },
        enumerable: true,
        configurable: true
    });
    return SurveyBooleanPropertyEditor;
}(SurveyPropertyEditorBase));

var SurveyNumberPropertyEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyNumberPropertyEditor, _super);
    function SurveyNumberPropertyEditor() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SurveyNumberPropertyEditor.prototype, "editorType", {
        get: function () { return "number"; },
        enumerable: true,
        configurable: true
    });
    return SurveyNumberPropertyEditor;
}(SurveyPropertyEditorBase));

SurveyPropertyEditorBase.registerEditor("string", function () { return new SurveyStringPropertyEditor(); });
SurveyPropertyEditorBase.registerEditor("dropdown", function () { return new SurveyDropdownPropertyEditor(); });
SurveyPropertyEditorBase.registerEditor("boolean", function () { return new SurveyBooleanPropertyEditor(); });
SurveyPropertyEditorBase.registerEditor("number", function () { return new SurveyNumberPropertyEditor(); });


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editorLocalization__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyHelper; });

var ObjType;
(function (ObjType) {
    ObjType[ObjType["Unknown"] = 0] = "Unknown";
    ObjType[ObjType["Survey"] = 1] = "Survey";
    ObjType[ObjType["Page"] = 2] = "Page";
    ObjType[ObjType["Panel"] = 3] = "Panel";
    ObjType[ObjType["Question"] = 4] = "Question";
})(ObjType || (ObjType = {}));
var SurveyHelper = (function () {
    function SurveyHelper() {
    }
    SurveyHelper.getNewPageName = function (objs) {
        return SurveyHelper.getNewName(objs, __WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].getString("ed.newPageName"));
    };
    SurveyHelper.getNewQuestionName = function (objs) {
        return SurveyHelper.getNewName(objs, __WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].getString("ed.newQuestionName"));
    };
    SurveyHelper.getNewPanelName = function (objs) {
        return SurveyHelper.getNewName(objs, __WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].getString("ed.newPanelName"));
    };
    SurveyHelper.getNewName = function (objs, baseName) {
        var hash = {};
        for (var i = 0; i < objs.length; i++) {
            hash[objs[i].name] = true;
        }
        var num = 1;
        while (true) {
            if (!hash[baseName + num.toString()])
                break;
            num++;
        }
        return baseName + num.toString();
    };
    SurveyHelper.getObjectType = function (obj) {
        if (!obj || !obj["getType"])
            return ObjType.Unknown;
        if (obj.getType() == "page")
            return ObjType.Page;
        if (obj.getType() == "panel")
            return ObjType.Panel;
        if (obj.getType() == "survey")
            return ObjType.Survey;
        if (obj["name"])
            return ObjType.Question;
        return ObjType.Unknown;
    };
    SurveyHelper.getObjectName = function (obj) {
        if (obj["name"])
            return obj["name"];
        var objType = SurveyHelper.getObjectType(obj);
        if (objType != ObjType.Page)
            return "";
        var data = obj.data;
        var index = data.pages.indexOf(obj);
        return "[Page " + (index + 1) + "]";
    };
    return SurveyHelper;
}());



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyModalEditor__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editorLocalization__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyItemsEditor; });




var SurveyPropertyItemsEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyItemsEditor, _super);
    function SurveyPropertyItemsEditor() {
        var _this = _super.call(this) || this;
        _this.koItems = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        _this.value = [];
        var self = _this;
        self.onDeleteClick = function (item) { self.koItems.remove(item); };
        self.onClearClick = function (item) { self.koItems.removeAll(); };
        self.onAddClick = function () { self.AddItem(); };
        self.onMoveUpClick = function (item) { self.moveUp(item); };
        self.onMoveDownClick = function (item) { self.moveDown(item); };
        return _this;
    }
    SurveyPropertyItemsEditor.prototype.getValueText = function (value) {
        var len = value ? value.length : 0;
        return __WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */].getString("pe.items")["format"](len);
    };
    SurveyPropertyItemsEditor.prototype.getCorrectedValue = function (value) {
        if (value == null || !Array.isArray(value))
            value = [];
        return value;
    };
    SurveyPropertyItemsEditor.prototype.AddItem = function () {
        this.koItems.push(this.createNewEditorItem());
    };
    SurveyPropertyItemsEditor.prototype.moveUp = function (item) {
        var arr = this.koItems();
        var index = arr.indexOf(item);
        if (index < 1)
            return;
        arr[index] = arr[index - 1];
        arr[index - 1] = item;
        this.koItems(arr);
    };
    SurveyPropertyItemsEditor.prototype.moveDown = function (item) {
        var arr = this.koItems();
        var index = arr.indexOf(item);
        if (index < 0 || index >= arr.length - 1)
            return;
        arr[index] = arr[index + 1];
        arr[index + 1] = item;
        this.koItems(arr);
    };
    SurveyPropertyItemsEditor.prototype.onValueChanged = function () {
        this.koItems(this.getItemsFromValue());
    };
    SurveyPropertyItemsEditor.prototype.getItemsFromValue = function (value) {
        if (value === void 0) { value = null; }
        var items = [];
        if (!value)
            value = this.value;
        for (var i = 0; i < value.length; i++) {
            items.push(this.createEditorItem(value[i]));
        }
        return items;
    };
    SurveyPropertyItemsEditor.prototype.onBeforeApply = function () {
        var items = [];
        var internalItems = this.koItems();
        for (var i = 0; i < internalItems.length; i++) {
            items.push(this.createItemFromEditorItem(internalItems[i]));
        }
        this.setValueCore(items);
    };
    SurveyPropertyItemsEditor.prototype.createNewEditorItem = function () { throw "Override 'createNewEditorItem' method"; };
    SurveyPropertyItemsEditor.prototype.createEditorItem = function (item) { return item; };
    SurveyPropertyItemsEditor.prototype.createItemFromEditorItem = function (editorItem) { return editorItem; };
    return SurveyPropertyItemsEditor;
}(__WEBPACK_IMPORTED_MODULE_2__propertyModalEditor__["a" /* SurveyPropertyModalEditor */]));



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyEditors_propertyEditorBase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__questionEditorGeneralProperties__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__questionEditorDefinition__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyEditorShowWindow; });
/* unused harmony export SurveyQuestionProperties */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyQuestionEditor; });
/* unused harmony export SurveyQuestionEditorTabBase */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SurveyQuestionEditorTabGeneral; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SurveyQuestionEditorTabProperty; });








var SurveyPropertyEditorShowWindow = (function () {
    function SurveyPropertyEditorShowWindow() {
        this.koVisible = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false);
        this.koEditor = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](null);
    }
    SurveyPropertyEditorShowWindow.prototype.show = function (questionBase, onChanged, options) {
        if (options === void 0) { options = null; }
        var editor = new SurveyQuestionEditor(questionBase, this.onCanShowPropertyCallback, null, options);
        editor.onChanged = onChanged;
        this.koEditor(editor);
        this.koVisible(true);
        __WEBPACK_IMPORTED_MODULE_2_jquery__("#surveyquestioneditorwindow").modal("show");
        editor.onHideWindow = function () { __WEBPACK_IMPORTED_MODULE_2_jquery__("#surveyquestioneditorwindow").modal("hide"); };
    };
    return SurveyPropertyEditorShowWindow;
}());

var SurveyQuestionProperties = (function () {
    function SurveyQuestionProperties(obj, onCanShowPropertyCallback) {
        this.obj = obj;
        this.onCanShowPropertyCallback = onCanShowPropertyCallback;
        this.properties = __WEBPACK_IMPORTED_MODULE_7_survey_knockout__["JsonObject"].metaData.getProperties(this.obj.getType());
    }
    SurveyQuestionProperties.prototype.getProperty = function (propertyName) {
        var property = null;
        for (var i = 0; i < this.properties.length; i++) {
            if (this.properties[i].name == propertyName) {
                property = this.properties[i];
                break;
            }
        }
        if (property && property["visible"] === false)
            property = null;
        if (property && this.onCanShowPropertyCallback) {
            if (!this.onCanShowPropertyCallback(this.obj, property))
                property = null;
        }
        return property;
    };
    return SurveyQuestionProperties;
}());

var SurveyQuestionEditor = (function () {
    function SurveyQuestionEditor(obj, onCanShowPropertyCallback, className, options) {
        if (className === void 0) { className = null; }
        if (options === void 0) { options = null; }
        this.obj = obj;
        this.onCanShowPropertyCallback = onCanShowPropertyCallback;
        this.className = className;
        this.options = options;
        var self = this;
        if (!this.className)
            this.className = this.obj.getType();
        this.properties = new SurveyQuestionProperties(obj, onCanShowPropertyCallback);
        self.onApplyClick = function () { self.apply(); };
        self.onOkClick = function () { self.apply(); if (!self.hasError() && self.onHideWindow)
            self.onHideWindow(); };
        self.onResetClick = function () { self.reset(); };
        this.onTabClick = function (tab) { self.koActiveTab(tab.name); };
        var tabs = this.buildTabs();
        this.koActiveTab = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](tabs[0].name);
        this.koTabs = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"](tabs);
        this.koTitle = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        if (this.obj["name"]) {
            this.koTitle(__WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.qEditorTitle")["format"](this.obj["name"]));
        }
    }
    SurveyQuestionEditor.prototype.hasError = function () {
        var tabs = this.koTabs();
        for (var i = 0; i < tabs.length; i++) {
            if (tabs[i].hasError()) {
                this.koActiveTab(tabs[i].name);
                return true;
            }
        }
        return false;
    };
    SurveyQuestionEditor.prototype.reset = function () {
        var tabs = this.koTabs();
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].reset();
        }
    };
    SurveyQuestionEditor.prototype.apply = function () {
        if (this.hasError())
            return;
        var tabs = this.koTabs();
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].apply();
        }
        if (this.onChanged) {
            this.onChanged(this.obj);
        }
    };
    SurveyQuestionEditor.prototype.buildTabs = function () {
        var tabs = [];
        var properties = new __WEBPACK_IMPORTED_MODULE_5__questionEditorGeneralProperties__["a" /* SurveyQuestionEditorGeneralProperties */](this.obj, __WEBPACK_IMPORTED_MODULE_6__questionEditorDefinition__["a" /* SurveyQuestionEditorDefinition */].getProperties(this.className), this.onCanShowPropertyCallback);
        tabs.push(new SurveyQuestionEditorTabGeneral(this.obj, properties));
        this.addPropertiesTabs(tabs);
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].onCanShowPropertyCallback = this.onCanShowPropertyCallback;
        }
        return tabs;
    };
    SurveyQuestionEditor.prototype.addPropertiesTabs = function (tabs) {
        var tabNames = __WEBPACK_IMPORTED_MODULE_6__questionEditorDefinition__["a" /* SurveyQuestionEditorDefinition */].getTabs(this.className);
        for (var i = 0; i < tabNames.length; i++) {
            var tabItem = tabNames[i];
            var property = this.properties.getProperty(tabItem.name);
            if (!property)
                continue;
            var editorTab = new SurveyQuestionEditorTabProperty(this.obj, property, this.options);
            if (tabItem.title)
                editorTab.title = tabItem.title;
            tabs.push(editorTab);
        }
    };
    return SurveyQuestionEditor;
}());

var SurveyQuestionEditorTabBase = (function () {
    function SurveyQuestionEditorTabBase(obj) {
        this.obj = obj;
    }
    Object.defineProperty(SurveyQuestionEditorTabBase.prototype, "name", {
        get: function () { return "name"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionEditorTabBase.prototype, "title", {
        get: function () {
            if (this.titleValue)
                return this.titleValue;
            var str = __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.tabs." + this.name);
            return str ? str : this.name;
        },
        set: function (value) { this.titleValue = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionEditorTabBase.prototype, "htmlTemplate", {
        get: function () { return "questioneditortab-" + this.name; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionEditorTabBase.prototype, "templateObject", {
        get: function () { return this; },
        enumerable: true,
        configurable: true
    });
    SurveyQuestionEditorTabBase.prototype.hasError = function () { return false; };
    SurveyQuestionEditorTabBase.prototype.reset = function () { };
    SurveyQuestionEditorTabBase.prototype.apply = function () { };
    SurveyQuestionEditorTabBase.prototype.getValue = function (property) {
        if (property["getPropertyValue"])
            return property["getPropertyValue"](this.obj); //TODO make the only call
        if (property.hasToUseGetValue)
            return property.getValue(this.obj);
        return this.obj[property.name];
    };
    return SurveyQuestionEditorTabBase;
}());

var SurveyQuestionEditorTabGeneral = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyQuestionEditorTabGeneral, _super);
    function SurveyQuestionEditorTabGeneral(obj, properties) {
        if (properties === void 0) { properties = null; }
        var _this = _super.call(this, obj) || this;
        _this.obj = obj;
        _this.properties = properties;
        _this.properties = properties ? properties : new __WEBPACK_IMPORTED_MODULE_5__questionEditorGeneralProperties__["a" /* SurveyQuestionEditorGeneralProperties */](obj, __WEBPACK_IMPORTED_MODULE_6__questionEditorDefinition__["a" /* SurveyQuestionEditorDefinition */].getProperties(obj.getType()), null);
        return _this;
    }
    Object.defineProperty(SurveyQuestionEditorTabGeneral.prototype, "name", {
        get: function () { return "general"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionEditorTabGeneral.prototype, "htmlTemplate", {
        get: function () { return "questioneditortab-general"; },
        enumerable: true,
        configurable: true
    });
    SurveyQuestionEditorTabGeneral.prototype.hasError = function () { return this.properties.hasError(); };
    SurveyQuestionEditorTabGeneral.prototype.reset = function () {
        this.properties.reset();
    };
    SurveyQuestionEditorTabGeneral.prototype.apply = function () {
        this.properties.apply();
    };
    return SurveyQuestionEditorTabGeneral;
}(SurveyQuestionEditorTabBase));

var SurveyQuestionEditorTabProperty = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyQuestionEditorTabProperty, _super);
    function SurveyQuestionEditorTabProperty(obj, property, options) {
        if (options === void 0) { options = null; }
        var _this = _super.call(this, obj) || this;
        _this.obj = obj;
        _this.property = property;
        _this.options = options;
        _this.propertyEditorValue = __WEBPACK_IMPORTED_MODULE_3__propertyEditors_propertyEditorBase__["a" /* SurveyPropertyEditorBase */].createEditor(_this.property.type, null);
        var self = _this;
        _this.propertyEditorValue.options = options;
        _this.propertyEditorValue.onGetLocale = function () { return self.doOnGetLocale(); };
        _this.propertyEditorValue.value = _this.getValue(_this.property);
        _this.propertyEditorValue.editablePropertyName = _this.property.name;
        return _this;
    }
    SurveyQuestionEditorTabProperty.prototype.doOnGetLocale = function () {
        if (this.obj && this.obj["getLocale"])
            return this.obj["getLocale"]();
        return "";
    };
    Object.defineProperty(SurveyQuestionEditorTabProperty.prototype, "name", {
        get: function () { return this.property.name; },
        enumerable: true,
        configurable: true
    });
    SurveyQuestionEditorTabProperty.prototype.hasError = function () { return this.propertyEditor.hasError(); };
    Object.defineProperty(SurveyQuestionEditorTabProperty.prototype, "htmlTemplate", {
        get: function () { return "propertyeditorcontent-" + this.property.type; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionEditorTabProperty.prototype, "templateObject", {
        get: function () { return this.propertyEditor; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyQuestionEditorTabProperty.prototype, "propertyEditor", {
        get: function () { return this.propertyEditorValue; },
        enumerable: true,
        configurable: true
    });
    SurveyQuestionEditorTabProperty.prototype.reset = function () {
        this.propertyEditorValue.value = this.getValue(this.property);
    };
    SurveyQuestionEditorTabProperty.prototype.apply = function () {
        this.propertyEditor.apply();
        this.obj[this.property.name] = this.propertyEditorValue.value;
    };
    return SurveyQuestionEditorTabProperty;
}(SurveyQuestionEditorTabBase));



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__objectProperty__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyObjectEditor; });




var SurveyObjectEditor = (function () {
    function SurveyObjectEditor(propertyEditorOptions) {
        if (propertyEditorOptions === void 0) { propertyEditorOptions = null; }
        this.propertyEditorOptions = propertyEditorOptions;
        this.onPropertyValueChanged = new __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Event"]();
        this.koProperties = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        this.koActiveProperty = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.koHasObject = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
    }
    Object.defineProperty(SurveyObjectEditor.prototype, "selectedObject", {
        get: function () { return this.selectedObjectValue; },
        set: function (value) {
            if (this.selectedObjectValue == value)
                return;
            this.koHasObject(value != null);
            this.selectedObjectValue = value;
            this.updateProperties();
            this.updatePropertiesObject();
        },
        enumerable: true,
        configurable: true
    });
    SurveyObjectEditor.prototype.getPropertyEditor = function (name) {
        var properties = this.koProperties();
        for (var i = 0; i < properties.length; i++) {
            if (properties[i].name == name)
                return properties[i];
        }
        return null;
    };
    SurveyObjectEditor.prototype.changeActiveProperty = function (property) {
        this.koActiveProperty(property);
    };
    SurveyObjectEditor.prototype.ObjectChanged = function () {
        this.updatePropertiesObject();
    };
    SurveyObjectEditor.prototype.updateProperties = function () {
        var _this = this;
        if (!this.selectedObject || !this.selectedObject.getType) {
            this.koProperties([]);
            this.koActiveProperty(null);
            return;
        }
        var properties = __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["JsonObject"].metaData.getProperties(this.selectedObject.getType());
        properties.sort(function (a, b) {
            if (a.name == b.name)
                return 0;
            if (a.name > b.name)
                return 1;
            return -1;
        });
        var objectProperties = [];
        var self = this;
        var propEvent = function (property, newValue) {
            self.onPropertyValueChanged.fire(_this, { property: property.property, object: property.object, newValue: newValue });
        };
        for (var i = 0; i < properties.length; i++) {
            if (!this.canShowProperty(properties[i]))
                continue;
            var objectProperty = new __WEBPACK_IMPORTED_MODULE_1__objectProperty__["a" /* SurveyObjectProperty */](properties[i], propEvent, this.propertyEditorOptions);
            var locName = this.selectedObject.getType() + '_' + properties[i].name;
            objectProperty.displayName = __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getPropertyName(locName);
            var title = __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getPropertyTitle(locName);
            if (!title)
                title = objectProperty.displayName;
            objectProperty.title = title;
            objectProperties.push(objectProperty);
        }
        this.koProperties(objectProperties);
        this.koActiveProperty(this.getPropertyEditor("name"));
    };
    SurveyObjectEditor.prototype.canShowProperty = function (property) {
        if (property["visible"] === false)
            return false;
        if (this.onCanShowPropertyCallback)
            return this.onCanShowPropertyCallback(this.selectedObject, property);
        return true;
    };
    SurveyObjectEditor.prototype.updatePropertiesObject = function () {
        var properties = this.koProperties();
        for (var i = 0; i < properties.length; i++) {
            properties[i].object = this.selectedObject;
        }
    };
    return SurveyObjectEditor;
}());



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyEditorBase__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyModalEditor; });
/* unused harmony export SurveyPropertyTextEditor */
/* unused harmony export SurveyPropertyHtmlEditor */
/* unused harmony export SurveyPropertyExpressionEditor */



var SurveyPropertyModalEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyModalEditor, _super);
    function SurveyPropertyModalEditor() {
        var _this = _super.call(this) || this;
        _this.title = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        var self = _this;
        self.onApplyClick = function () { self.apply(); };
        self.onResetClick = function () { self.reset(); };
        return _this;
    }
    SurveyPropertyModalEditor.prototype.setTitle = function (value) { this.title(value); };
    SurveyPropertyModalEditor.prototype.hasError = function () { return false; };
    SurveyPropertyModalEditor.prototype.onBeforeApply = function () { };
    SurveyPropertyModalEditor.prototype.reset = function () {
        this.value = this.value;
    };
    SurveyPropertyModalEditor.prototype.setObject = function (value) { this.object = value; };
    Object.defineProperty(SurveyPropertyModalEditor.prototype, "isEditable", {
        get: function () { return false; },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyModalEditor.prototype.apply = function () {
        if (this.hasError())
            return;
        this.onBeforeApply();
        if (this.onChanged) {
            this.onChanged(this.value);
        }
    };
    return SurveyPropertyModalEditor;
}(__WEBPACK_IMPORTED_MODULE_2__propertyEditorBase__["a" /* SurveyPropertyEditorBase */]));

var SurveyPropertyTextEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyTextEditor, _super);
    function SurveyPropertyTextEditor() {
        var _this = _super.call(this) || this;
        _this.koValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        return _this;
    }
    Object.defineProperty(SurveyPropertyTextEditor.prototype, "editorType", {
        get: function () { return "text"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyTextEditor.prototype, "isEditable", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyTextEditor.prototype.getValueText = function (value) {
        if (!value)
            return null;
        var str = value;
        if (str.length > 20) {
            str = str.substr(0, 20) + "...";
        }
        return str;
    };
    SurveyPropertyTextEditor.prototype.onValueChanged = function () {
        this.koValue(this.value);
    };
    SurveyPropertyTextEditor.prototype.onBeforeApply = function () {
        this.setValueCore(this.koValue());
    };
    return SurveyPropertyTextEditor;
}(SurveyPropertyModalEditor));

var SurveyPropertyHtmlEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyHtmlEditor, _super);
    function SurveyPropertyHtmlEditor() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SurveyPropertyHtmlEditor.prototype, "editorType", {
        get: function () { return "html"; },
        enumerable: true,
        configurable: true
    });
    return SurveyPropertyHtmlEditor;
}(SurveyPropertyTextEditor));

var SurveyPropertyExpressionEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyExpressionEditor, _super);
    function SurveyPropertyExpressionEditor() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SurveyPropertyExpressionEditor.prototype, "editorType", {
        get: function () { return "expression"; },
        enumerable: true,
        configurable: true
    });
    return SurveyPropertyExpressionEditor;
}(SurveyPropertyTextEditor));

__WEBPACK_IMPORTED_MODULE_2__propertyEditorBase__["a" /* SurveyPropertyEditorBase */].registerEditor("text", function () { return new SurveyPropertyTextEditor(); });
__WEBPACK_IMPORTED_MODULE_2__propertyEditorBase__["a" /* SurveyPropertyEditorBase */].registerEditor("html", function () { return new SurveyPropertyHtmlEditor(); });
__WEBPACK_IMPORTED_MODULE_2__propertyEditorBase__["a" /* SurveyPropertyEditorBase */].registerEditor("expression", function () { return new SurveyPropertyExpressionEditor(); });


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyItemsEditor__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyNestedPropertyEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyNestedPropertyEditorItem; });



var SurveyNestedPropertyEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyNestedPropertyEditor, _super);
    function SurveyNestedPropertyEditor() {
        var _this = _super.call(this) || this;
        var self = _this;
        _this.koEditItem = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](null);
        _this.koIsList = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](true);
        _this.koEditItem.subscribe(function (newValue) {
            self.koIsList(self.koEditItem() == null);
        });
        _this.onEditItemClick = function (item) { self.koEditItem(item); };
        _this.onCancelEditItemClick = function () {
            var editItem = self.koEditItem();
            if (editItem.itemEditor && editItem.itemEditor.hasError())
                return;
            self.koEditItem(null);
        };
        return _this;
    }
    SurveyNestedPropertyEditor.prototype.hasError = function () {
        var result = false;
        for (var i = 0; i < this.koItems().length; i++) {
            result = result || this.koItems()[i].hasError();
        }
        return result;
    };
    SurveyNestedPropertyEditor.prototype.onBeforeApply = function () {
        _super.prototype.onBeforeApply.call(this);
        var internalItems = this.koItems();
        for (var i = 0; i < internalItems.length; i++) {
            internalItems[i].apply();
        }
    };
    return SurveyNestedPropertyEditor;
}(__WEBPACK_IMPORTED_MODULE_2__propertyItemsEditor__["a" /* SurveyPropertyItemsEditor */]));

var SurveyNestedPropertyEditorItem = (function () {
    function SurveyNestedPropertyEditorItem() {
    }
    Object.defineProperty(SurveyNestedPropertyEditorItem.prototype, "itemEditor", {
        get: function () {
            if (!this.itemEditorValue)
                this.itemEditorValue = this.createSurveyQuestionEditor();
            return this.itemEditorValue;
        },
        enumerable: true,
        configurable: true
    });
    SurveyNestedPropertyEditorItem.prototype.hasError = function () {
        if (this.itemEditorValue && this.itemEditorValue.hasError())
            return true;
        return false;
    };
    SurveyNestedPropertyEditorItem.prototype.createSurveyQuestionEditor = function () { return null; };
    SurveyNestedPropertyEditorItem.prototype.apply = function () {
        if (this.itemEditorValue)
            this.itemEditorValue.apply();
    };
    return SurveyNestedPropertyEditorItem;
}());



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__json5__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyTextWorker; });


var TextParserPropery = (function () {
    function TextParserPropery() {
    }
    return TextParserPropery;
}());
var SurveyTextWorker = (function () {
    function SurveyTextWorker(text) {
        this.text = text;
        if (!this.text || this.text.trim() == "") {
            this.text = "{}";
        }
        this.errors = [];
        this.process();
    }
    Object.defineProperty(SurveyTextWorker.prototype, "survey", {
        get: function () { return this.surveyValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyTextWorker.prototype, "isJsonCorrect", {
        get: function () { return this.surveyValue != null; },
        enumerable: true,
        configurable: true
    });
    SurveyTextWorker.prototype.process = function () {
        try {
            this.jsonValue = new __WEBPACK_IMPORTED_MODULE_0__json5__["a" /* SurveyJSON5 */](1).parse(this.text);
        }
        catch (error) {
            this.errors.push({ pos: { start: error.at, end: -1 }, text: error.message });
        }
        if (this.jsonValue != null) {
            this.updateJsonPositions(this.jsonValue);
            this.surveyValue = new __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["Survey"](this.jsonValue);
            if (this.surveyValue.jsonErrors != null) {
                for (var i = 0; i < this.surveyValue.jsonErrors.length; i++) {
                    var error = this.surveyValue.jsonErrors[i];
                    this.errors.push({ pos: { start: error.at, end: -1 }, text: error.getFullDescription() });
                }
            }
        }
        this.surveyObjects = this.createSurveyObjects();
        this.setEditorPositionByChartAt(this.surveyObjects);
        this.setEditorPositionByChartAt(this.errors);
    };
    SurveyTextWorker.prototype.updateJsonPositions = function (jsonObj) {
        jsonObj["pos"]["self"] = jsonObj;
        for (var key in jsonObj) {
            var obj = jsonObj[key];
            if (obj && obj["pos"]) {
                jsonObj["pos"][key] = obj["pos"];
                this.updateJsonPositions(obj);
            }
        }
    };
    SurveyTextWorker.prototype.createSurveyObjects = function () {
        var result = [];
        if (this.surveyValue == null)
            return result;
        this.isSurveyAsPage = false;
        for (var i = 0; i < this.surveyValue.pages.length; i++) {
            var page = this.surveyValue.pages[i];
            if (i == 0 && !page["pos"]) {
                page["pos"] = this.surveyValue["pos"];
                this.isSurveyAsPage = true;
            }
            result.push(page);
            for (var j = 0; j < page.questions.length; j++) {
                result.push(page.questions[j]);
            }
        }
        return result;
    };
    SurveyTextWorker.prototype.setEditorPositionByChartAt = function (objects) {
        if (objects == null || objects.length == 0)
            return;
        var position = { row: 0, column: 0 };
        var atObjectsArray = this.getAtArray(objects);
        var startAt = 0;
        for (var i = 0; i < atObjectsArray.length; i++) {
            var at = atObjectsArray[i].at;
            position = this.getPostionByChartAt(position, startAt, at);
            var obj = atObjectsArray[i].obj;
            if (!obj.position)
                obj.position = {};
            if (at == obj.pos.start) {
                obj.position.start = position;
            }
            else {
                if (at == obj.pos.end) {
                    obj.position.end = position;
                }
            }
            startAt = at;
        }
    };
    SurveyTextWorker.prototype.getPostionByChartAt = function (startPosition, startAt, at) {
        var result = { row: startPosition.row, column: startPosition.column };
        var curChar = startAt;
        while (curChar < at) {
            if (this.text.charAt(curChar) == SurveyTextWorker.newLineChar) {
                result.row++;
                result.column = 0;
            }
            else {
                result.column++;
            }
            curChar++;
        }
        return result;
    };
    SurveyTextWorker.prototype.getAtArray = function (objects) {
        var result = [];
        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];
            var pos = obj.pos;
            if (!pos)
                continue;
            result.push({ at: pos.start, obj: obj });
            if (pos.end > 0) {
                result.push({ at: pos.end, obj: obj });
            }
        }
        return result.sort(function (el1, el2) {
            if (el1.at > el2.at)
                return 1;
            if (el1.at < el2.at)
                return -1;
            return 0;
        });
    };
    return SurveyTextWorker;
}());



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyJSON5; });
// This file is based on JSON5, http://json5.org/
// The modification for getting object and properties location 'at' were maden.
var SurveyJSON5 = (function () {
    function SurveyJSON5(parseType) {
        if (parseType === void 0) { parseType = 0; }
        this.parseType = parseType;
    }
    SurveyJSON5.prototype.parse = function (source, reviver, startFrom, endAt) {
        if (reviver === void 0) { reviver = null; }
        if (startFrom === void 0) { startFrom = 0; }
        if (endAt === void 0) { endAt = -1; }
        var result;
        this.text = String(source);
        this.at = startFrom;
        this.endAt = endAt;
        this.ch = ' ';
        result = this.value();
        this.white();
        if (this.ch) {
            this.error("Syntax error");
        }
        // If there is a reviver function, we recursively walk the new structure,
        // passing each name/value pair to the reviver function for possible
        // transformation, starting with a temporary root object that holds the result
        // in an empty key. If there is not a reviver function, we simply return the
        // result.
        return typeof reviver === 'function' ? (function walk(holder, key) {
            var k, v, value = holder[key];
            if (value && typeof value === 'object') {
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = walk(value, k);
                        if (v !== undefined) {
                            value[k] = v;
                        }
                        else {
                            delete value[k];
                        }
                    }
                }
            }
            return reviver.call(holder, key, value);
        }({ '': result }, '')) : result;
    };
    SurveyJSON5.prototype.error = function (m) {
        // Call error when something is wrong.
        var error = new SyntaxError();
        error.message = m;
        error["at"] = this.at;
        throw error;
    };
    SurveyJSON5.prototype.next = function (c) {
        if (c === void 0) { c = null; }
        // If a c parameter is provided, verify that it matches the current character.
        if (c && c !== this.ch) {
            this.error("Expected '" + c + "' instead of '" + this.ch + "'");
        }
        // Get the this.next character. When there are no more characters,
        // return the empty string.
        this.ch = this.chartAt();
        this.at += 1;
        return this.ch;
    };
    SurveyJSON5.prototype.peek = function () {
        // Get the this.next character without consuming it or
        // assigning it to the this.ch varaible.
        return this.chartAt();
    };
    SurveyJSON5.prototype.chartAt = function () {
        if (this.endAt > -1 && this.at >= this.endAt)
            return '';
        return this.text.charAt(this.at);
    };
    SurveyJSON5.prototype.identifier = function () {
        // Parse an identifier. Normally, reserved words are disallowed here, but we
        // only use this for unquoted object keys, where reserved words are allowed,
        // so we don't check for those here. References:
        // - http://es5.github.com/#x7.6
        // - https://developer.mozilla.org/en/Core_JavaScript_1.5_Guide/Core_Language_Features#Variables
        // - http://docstore.mik.ua/orelly/webprog/jscript/ch02_07.htm
        // TODO Identifiers can have Unicode "letters" in them; add support for those.
        var key = this.ch;
        // Identifiers must start with a letter, _ or $.
        if ((this.ch !== '_' && this.ch !== '$') &&
            (this.ch < 'a' || this.ch > 'z') &&
            (this.ch < 'A' || this.ch > 'Z')) {
            this.error("Bad identifier");
        }
        // Subsequent characters can contain digits.
        while (this.next() && (this.ch === '_' || this.ch === '$' ||
            (this.ch >= 'a' && this.ch <= 'z') ||
            (this.ch >= 'A' && this.ch <= 'Z') ||
            (this.ch >= '0' && this.ch <= '9'))) {
            key += this.ch;
        }
        return key;
    };
    SurveyJSON5.prototype.number = function () {
        // Parse a number value.
        var number, sign = '', string = '', base = 10;
        if (this.ch === '-' || this.ch === '+') {
            sign = this.ch;
            this.next(this.ch);
        }
        // support for Infinity (could tweak to allow other words):
        if (this.ch === 'I') {
            number = this.word();
            if (typeof number !== 'number' || isNaN(number)) {
                this.error('Unexpected word for number');
            }
            return (sign === '-') ? -number : number;
        }
        // support for NaN
        if (this.ch === 'N') {
            number = this.word();
            if (!isNaN(number)) {
                this.error('expected word to be NaN');
            }
            // ignore sign as -NaN also is NaN
            return number;
        }
        if (this.ch === '0') {
            string += this.ch;
            this.next();
            if (this.ch === 'x' || this.ch === 'X') {
                string += this.ch;
                this.next();
                base = 16;
            }
            else if (this.ch >= '0' && this.ch <= '9') {
                this.error('Octal literal');
            }
        }
        switch (base) {
            case 10:
                while (this.ch >= '0' && this.ch <= '9') {
                    string += this.ch;
                    this.next();
                }
                if (this.ch === '.') {
                    string += '.';
                    while (this.next() && this.ch >= '0' && this.ch <= '9') {
                        string += this.ch;
                    }
                }
                if (this.ch === 'e' || this.ch === 'E') {
                    string += this.ch;
                    this.next();
                    if (this.ch === '-' || this.ch === '+') {
                        string += this.ch;
                        this.next();
                    }
                    while (this.ch >= '0' && this.ch <= '9') {
                        string += this.ch;
                        this.next();
                    }
                }
                break;
            case 16:
                while (this.ch >= '0' && this.ch <= '9' || this.ch >= 'A' && this.ch <= 'F' || this.ch >= 'a' && this.ch <= 'f') {
                    string += this.ch;
                    this.next();
                }
                break;
        }
        if (sign === '-') {
            number = -string;
        }
        else {
            number = +string;
        }
        if (!isFinite(number)) {
            this.error("Bad number");
        }
        else {
            return number;
        }
    };
    SurveyJSON5.prototype.string = function () {
        // Parse a string value.
        var hex, i, string = '', delim, // double quote or single quote
        uffff;
        // When parsing for string values, we must look for ' or " and \ characters.
        if (this.ch === '"' || this.ch === "'") {
            delim = this.ch;
            while (this.next()) {
                if (this.ch === delim) {
                    this.next();
                    return string;
                }
                else if (this.ch === '\\') {
                    this.next();
                    if (this.ch === 'u') {
                        uffff = 0;
                        for (i = 0; i < 4; i += 1) {
                            hex = parseInt(this.next(), 16);
                            if (!isFinite(hex)) {
                                break;
                            }
                            uffff = uffff * 16 + hex;
                        }
                        string += String.fromCharCode(uffff);
                    }
                    else if (this.ch === '\r') {
                        if (this.peek() === '\n') {
                            this.next();
                        }
                    }
                    else if (typeof SurveyJSON5.escapee[this.ch] === 'string') {
                        string += SurveyJSON5.escapee[this.ch];
                    }
                    else {
                        break;
                    }
                }
                else if (this.ch === '\n') {
                    // unescaped newlines are invalid; see:
                    // https://github.com/aseemk/json5/issues/24
                    // TODO this feels special-cased; are there other
                    // invalid unescaped chars?
                    break;
                }
                else {
                    string += this.ch;
                }
            }
        }
        this.error("Bad string");
    };
    SurveyJSON5.prototype.inlineComment = function () {
        // Skip an inline comment, assuming this is one. The current character should
        // be the second / character in the // pair that begins this inline comment.
        // To finish the inline comment, we look for a newline or the end of the text.
        if (this.ch !== '/') {
            this.error("Not an inline comment");
        }
        do {
            this.next();
            if (this.ch === '\n' || this.ch === '\r') {
                this.next();
                return;
            }
        } while (this.ch);
    };
    SurveyJSON5.prototype.blockComment = function () {
        // Skip a block comment, assuming this is one. The current character should be
        // the * character in the /* pair that begins this block comment.
        // To finish the block comment, we look for an ending */ pair of characters,
        // but we also watch for the end of text before the comment is terminated.
        if (this.ch !== '*') {
            this.error("Not a block comment");
        }
        do {
            this.next();
            while (this.ch === '*') {
                this.next('*');
                if (this.ch === '/') {
                    this.next('/');
                    return;
                }
            }
        } while (this.ch);
        this.error("Unterminated block comment");
    };
    SurveyJSON5.prototype.comment = function () {
        // Skip a comment, whether inline or block-level, assuming this is one.
        // Comments always begin with a / character.
        if (this.ch !== '/') {
            this.error("Not a comment");
        }
        this.next('/');
        if (this.ch === '/') {
            this.inlineComment();
        }
        else if (this.ch === '*') {
            this.blockComment();
        }
        else {
            this.error("Unrecognized comment");
        }
    };
    SurveyJSON5.prototype.white = function () {
        // Skip whitespace and comments.
        // Note that we're detecting comments by only a single / character.
        // This works since regular expressions are not valid JSON(5), but this will
        // break if there are other valid values that begin with a / character!
        while (this.ch) {
            if (this.ch === '/') {
                this.comment();
            }
            else if (SurveyJSON5.ws.indexOf(this.ch) >= 0) {
                this.next();
            }
            else {
                return;
            }
        }
    };
    SurveyJSON5.prototype.word = function () {
        // true, false, or null.
        switch (this.ch) {
            case 't':
                this.next('t');
                this.next('r');
                this.next('u');
                this.next('e');
                return true;
            case 'f':
                this.next('f');
                this.next('a');
                this.next('l');
                this.next('s');
                this.next('e');
                return false;
            case 'n':
                this.next('n');
                this.next('u');
                this.next('l');
                this.next('l');
                return null;
            case 'I':
                this.next('I');
                this.next('n');
                this.next('f');
                this.next('i');
                this.next('n');
                this.next('i');
                this.next('t');
                this.next('y');
                return Infinity;
            case 'N':
                this.next('N');
                this.next('a');
                this.next('N');
                return NaN;
        }
        this.error("Unexpected '" + this.ch + "'");
    };
    SurveyJSON5.prototype.array = function () {
        // Parse an array value.
        var array = [];
        if (this.ch === '[') {
            this.next('[');
            this.white();
            while (this.ch) {
                if (this.ch === ']') {
                    this.next(']');
                    return array; // Potentially empty array
                }
                // ES5 allows omitting elements in arrays, e.g. [,] and
                // [,null]. We don't allow this in JSON5.
                if (this.ch === ',') {
                    this.error("Missing array element");
                }
                else {
                    array.push(this.value());
                }
                this.white();
                // If there's no comma after this value, this needs to
                // be the end of the array.
                if (this.ch !== ',') {
                    this.next(']');
                    return array;
                }
                this.next(',');
                this.white();
            }
        }
        this.error("Bad array");
    };
    SurveyJSON5.prototype.object = function () {
        // Parse an object value.
        var key, start, isFirstProperty = true, object = {};
        if (this.parseType > 0) {
            object[SurveyJSON5.positionName] = { start: this.at - 1 };
        }
        if (this.ch === '{') {
            this.next('{');
            this.white();
            start = this.at - 1;
            while (this.ch) {
                if (this.ch === '}') {
                    if (this.parseType > 0) {
                        object[SurveyJSON5.positionName].end = start;
                    }
                    this.next('}');
                    return object; // Potentially empty object
                }
                // Keys can be unquoted. If they are, they need to be
                // valid JS identifiers.
                if (this.ch === '"' || this.ch === "'") {
                    key = this.string();
                }
                else {
                    key = this.identifier();
                }
                this.white();
                if (this.parseType > 1) {
                    object[SurveyJSON5.positionName][key] = { start: start, valueStart: this.at };
                }
                this.next(':');
                object[key] = this.value();
                if (this.parseType > 1) {
                    start = this.at - 1;
                    object[SurveyJSON5.positionName][key].valueEnd = start;
                    object[SurveyJSON5.positionName][key].end = start;
                }
                this.white();
                // If there's no comma after this pair, this needs to be
                // the end of the object.
                if (this.ch !== ',') {
                    if (this.parseType > 1) {
                        object[SurveyJSON5.positionName][key].valueEnd--;
                        object[SurveyJSON5.positionName][key].end--;
                    }
                    if (this.parseType > 0) {
                        object[SurveyJSON5.positionName].end = this.at - 1;
                    }
                    this.next('}');
                    return object;
                }
                if (this.parseType > 1) {
                    object[SurveyJSON5.positionName][key].valueEnd--;
                    if (!isFirstProperty) {
                        object[SurveyJSON5.positionName][key].end--;
                    }
                }
                this.next(',');
                this.white();
                isFirstProperty = false;
            }
        }
        this.error("Bad object");
    };
    SurveyJSON5.prototype.value = function () {
        // Parse a JSON value. It could be an object, an array, a string, a number,
        // or a word.
        this.white();
        switch (this.ch) {
            case '{':
                return this.object();
            case '[':
                return this.array();
            case '"':
            case "'":
                return this.string();
            case '-':
            case '+':
            case '.':
                return this.number();
            default:
                return this.ch >= '0' && this.ch <= '9' ? this.number() : this.word();
        }
    };
    SurveyJSON5.prototype.stringify = function (obj, replacer, space) {
        if (replacer === void 0) { replacer = null; }
        if (space === void 0) { space = null; }
        if (replacer && (typeof (replacer) !== "function" && !this.isArray(replacer))) {
            throw new Error('Replacer must be a function or an array');
        }
        this.replacer = replacer;
        this.indentStr = this.getIndent(space);
        this.objStack = [];
        // special case...when undefined is used inside of
        // a compound object/array, return null.
        // but when top-level, return undefined
        var topLevelHolder = { "": obj };
        if (obj === undefined) {
            return this.getReplacedValueOrUndefined(topLevelHolder, '', true);
        }
        return this.internalStringify(topLevelHolder, '', true);
    };
    SurveyJSON5.prototype.getIndent = function (space) {
        if (space) {
            if (typeof space === "string") {
                return space;
            }
            else if (typeof space === "number" && space >= 0) {
                return this.makeIndent(" ", space, true);
            }
        }
        return "";
    };
    SurveyJSON5.prototype.getReplacedValueOrUndefined = function (holder, key, isTopLevel) {
        var value = holder[key];
        // Replace the value with its toJSON value first, if possible
        if (value && value.toJSON && typeof value.toJSON === "function") {
            value = value.toJSON();
        }
        // If the user-supplied replacer if a function, call it. If it's an array, check objects' string keys for
        // presence in the array (removing the key/value pair from the resulting JSON if the key is missing).
        if (typeof (this.replacer) === "function") {
            return this.replacer.call(holder, key, value);
        }
        else if (this.replacer) {
            if (isTopLevel || this.isArray(holder) || this.replacer.indexOf(key) >= 0) {
                return value;
            }
            else {
                return undefined;
            }
        }
        else {
            return value;
        }
    };
    SurveyJSON5.prototype.isWordChar = function (char) {
        return (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= '0' && char <= '9') ||
            char === '_' || char === '$';
    };
    SurveyJSON5.prototype.isWordStart = function (char) {
        return (char >= 'a' && char <= 'z') ||
            (char >= 'A' && char <= 'Z') ||
            char === '_' || char === '$';
    };
    SurveyJSON5.prototype.isWord = function (key) {
        if (typeof key !== 'string') {
            return false;
        }
        if (!this.isWordStart(key[0])) {
            return false;
        }
        var i = 1, length = key.length;
        while (i < length) {
            if (!this.isWordChar(key[i])) {
                return false;
            }
            i++;
        }
        return true;
    };
    // polyfills
    SurveyJSON5.prototype.isArray = function (obj) {
        if (Array.isArray) {
            return Array.isArray(obj);
        }
        else {
            return Object.prototype.toString.call(obj) === '[object Array]';
        }
    };
    SurveyJSON5.prototype.isDate = function (obj) {
        return Object.prototype.toString.call(obj) === '[object Date]';
    };
    SurveyJSON5.prototype.isNaN = function (val) {
        return typeof val === 'number' && val !== val;
    };
    SurveyJSON5.prototype.checkForCircular = function (obj) {
        for (var i = 0; i < this.objStack.length; i++) {
            if (this.objStack[i] === obj) {
                throw new TypeError("Converting circular structure to JSON");
            }
        }
    };
    SurveyJSON5.prototype.makeIndent = function (str, num, noNewLine) {
        if (noNewLine === void 0) { noNewLine = false; }
        if (!str) {
            return "";
        }
        // indentation no more than 10 chars
        if (str.length > 10) {
            str = str.substring(0, 10);
        }
        var indent = noNewLine ? "" : "\n";
        for (var i = 0; i < num; i++) {
            indent += str;
        }
        return indent;
    };
    SurveyJSON5.prototype.escapeString = function (str) {
        // If the string contains no control characters, no quote characters, and no
        // backslash characters, then we can safely slap some quotes around it.
        // Otherwise we must also replace the offending characters with safe escape
        // sequences.
        SurveyJSON5.escapable.lastIndex = 0;
        return SurveyJSON5.escapable.test(str) ? '"' + str.replace(SurveyJSON5.escapable, function (a) {
            var c = SurveyJSON5.meta[a];
            return typeof c === 'string' ?
                c :
                '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + str + '"';
    };
    // End
    SurveyJSON5.prototype.internalStringify = function (holder, key, isTopLevel) {
        var buffer, res;
        // Replace the value, if necessary
        var obj_part = this.getReplacedValueOrUndefined(holder, key, isTopLevel);
        if (obj_part && !this.isDate(obj_part)) {
            // unbox objects
            // don't unbox dates, since will turn it into number
            obj_part = obj_part.valueOf();
        }
        switch (typeof obj_part) {
            case "boolean":
                return obj_part.toString();
            case "number":
                if (isNaN(obj_part) || !isFinite(obj_part)) {
                    return "null";
                }
                return obj_part.toString();
            case "string":
                return this.escapeString(obj_part.toString());
            case "object":
                if (obj_part === null) {
                    return "null";
                }
                else if (this.isArray(obj_part)) {
                    this.checkForCircular(obj_part);
                    buffer = "[";
                    this.objStack.push(obj_part);
                    for (var i = 0; i < obj_part.length; i++) {
                        res = this.internalStringify(obj_part, i, false);
                        buffer += this.makeIndent(this.indentStr, this.objStack.length);
                        if (res === null || typeof res === "undefined") {
                            buffer += "null";
                        }
                        else {
                            buffer += res;
                        }
                        if (i < obj_part.length - 1) {
                            buffer += ",";
                        }
                        else if (this.indentStr) {
                            buffer += "\n";
                        }
                    }
                    this.objStack.pop();
                    buffer += this.makeIndent(this.indentStr, this.objStack.length, true) + "]";
                }
                else {
                    this.checkForCircular(obj_part);
                    buffer = "{";
                    var nonEmpty = false;
                    this.objStack.push(obj_part);
                    for (var prop in obj_part) {
                        if (obj_part.hasOwnProperty(prop)) {
                            var value = this.internalStringify(obj_part, prop, false);
                            isTopLevel = false;
                            if (typeof value !== "undefined" && value !== null) {
                                buffer += this.makeIndent(this.indentStr, this.objStack.length);
                                nonEmpty = true;
                                var propKey = this.isWord(prop) ? prop : this.escapeString(prop);
                                buffer += propKey + ":" + (this.indentStr ? ' ' : '') + value + ",";
                            }
                        }
                    }
                    this.objStack.pop();
                    if (nonEmpty) {
                        buffer = buffer.substring(0, buffer.length - 1) + this.makeIndent(this.indentStr, this.objStack.length) + "}";
                    }
                    else {
                        buffer = '{}';
                    }
                }
                return buffer;
            default:
                // functions and undefined should be ignored
                return undefined;
        }
    };
    return SurveyJSON5;
}());

SurveyJSON5.positionName = "pos";
SurveyJSON5.escapee = {
    "'": "'",
    '"': '"',
    '\\': '\\',
    '/': '/',
    '\n': '',
    b: '\b',
    f: '\f',
    n: '\n',
    r: '\r',
    t: '\t'
};
SurveyJSON5.ws = [
    ' ',
    '\t',
    '\r',
    '\n',
    '\v',
    '\f',
    '\xA0',
    '\uFEFF'
];
// Copied from Crokford's implementation of JSON
// See https://github.com/douglascrockford/JSON-js/blob/e39db4b7e6249f04a195e7dd0840e610cc9e941e/json2.js#L195
// Begin
SurveyJSON5.cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
SurveyJSON5.escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
SurveyJSON5.meta = {
    '\b': '\\b',
    '\t': '\\t',
    '\n': '\\n',
    '\f': '\\f',
    '\r': '\\r',
    '"': '\\"',
    '\\': '\\\\'
};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_survey_knockout__);
/* unused harmony export DragDropTargetElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DragDropHelper; });

var DragDropTargetElement = (function () {
    function DragDropTargetElement(page, target, source) {
        this.page = page;
        this.target = target;
        this.source = source;
    }
    DragDropTargetElement.prototype.moveTo = function (destination, isBottom, isEdge) {
        if (isEdge === void 0) { isEdge = false; }
        //console.log("dest: " + destination.name + ", isBottom:" + isBottom + ", isEdge:" + isEdge);
        isEdge = isEdge || !destination.isPanel;
        if (destination === this.target)
            return !this.target.isPanel;
        var destInfo = this.findInfo(destination, isEdge);
        if (!destInfo) {
            this.clear();
            return false;
        }
        var targetInfo = this.findInfo(this.target, true);
        this.updateInfo(destInfo, isBottom, isEdge);
        if (this.isInfoEquals(targetInfo, destInfo))
            return true;
        this.clearByInfo(targetInfo);
        destInfo = this.findInfo(destination, isEdge);
        if (!destInfo)
            return false;
        this.updateInfo(destInfo, isBottom, isEdge);
        if (!this.canMove(destInfo))
            return false;
        this.addInfo(destInfo);
        return true;
    };
    DragDropTargetElement.prototype.doDrop = function () {
        var destInfo = this.findInfo(this.target);
        if (!destInfo)
            return;
        var index = this.getIndexByInfo(destInfo);
        destInfo.panel.addElement(this.getNewTargetElement(), index);
        if (this.source) {
            var srcInfo = this.findInfo(this.source, true);
            var panel = srcInfo ? srcInfo.panel : this.page;
            panel.removeElement(this.source);
        }
    };
    DragDropTargetElement.prototype.clear = function () {
        this.clearByInfo(this.findInfo(this.target, true));
    };
    DragDropTargetElement.prototype.getIndexByInfo = function (info) {
        if (!info)
            return 0;
        var rows = info.panel.koRows();
        var index = 0;
        for (var i = 0; i < info.rIndex; i++) {
            index += rows[i]["koElements"]().length;
        }
        return index + info.elIndex;
    };
    DragDropTargetElement.prototype.canMove = function (destInfo) {
        if (this.target.isPanel && destInfo.element) {
            if (this.target == destInfo.element || this.target.containsElement(destInfo.element))
                return false;
            if (this.source && (this.source == destInfo.element || this.source.containsElement(destInfo.element)))
                return false;
        }
        if (!this.source)
            return true;
        var srcInfo = this.findInfo(this.source);
        if (srcInfo == null || srcInfo.panel != destInfo.panel)
            return true;
        var srcIndex = this.getIndexByInfo(srcInfo);
        var destIndex = this.getIndexByInfo(destInfo);
        var diff = destIndex - srcIndex;
        return diff < 0 || diff > 1;
    };
    DragDropTargetElement.prototype.isLastElementInRow = function (info) {
        return info.elIndex == info.panel["koRows"]()[info.rIndex]["koElements"]().length - 1;
    };
    DragDropTargetElement.prototype.updateInfo = function (info, isBottom, isEdge) {
        if (info.rIndex < 0)
            return;
        if (this.target.startWithNewLine) {
            if (isBottom)
                info.rIndex++;
        }
        else {
            if (isBottom) {
                info.elIndex++;
            }
            else {
                if (info.elIndex == 0 && info.rIndex > 0) {
                    info.rIndex--;
                    info.elIndex = info.panel["koRows"]()[info.rIndex]["koElements"]().length;
                }
            }
        }
    };
    DragDropTargetElement.prototype.addInfo = function (info) {
        if (this.target.isPanel) {
            this.target.parent = info.panel;
        }
        if (this.target.startWithNewLine || info.elIndex < 1
            || info.rIndex < 0 || info.rIndex >= info.panel.koRows().length) {
            this.AddInfoAsRow(info);
        }
        else {
            var row = info.panel.koRows()[info.rIndex];
            var elements = row["koElements"]();
            if (info.elIndex < elements.length) {
                elements.splice(info.elIndex, 0, this.target);
            }
            else {
                elements.push(this.target);
            }
            row["koElements"](elements);
            row.updateVisible();
        }
    };
    DragDropTargetElement.prototype.AddInfoAsRow = function (info) {
        var row = new __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["QuestionRow"](info.panel);
        row.addElement(this.target);
        var rows = info.panel.koRows();
        if (info.rIndex >= 0 && info.rIndex < info.panel.koRows().length) {
            rows.splice(info.rIndex, 0, row);
        }
        else {
            rows.push(row);
        }
        info.panel.koRows(rows);
    };
    DragDropTargetElement.prototype.clearByInfo = function (info) {
        if (info == null)
            return;
        var rows = info.panel.koRows();
        if (info.rIndex < 0 || info.rIndex >= rows.length)
            return;
        var row = rows[info.rIndex];
        var elements = row["koElements"]();
        if (row["koElements"]().length > 1) {
            elements.splice(info.elIndex, 1);
            row["koElements"](elements);
            row.updateVisible();
        }
        else {
            rows.splice(info.rIndex, 1);
            info.panel.koRows(rows);
        }
    };
    DragDropTargetElement.prototype.isInfoEquals = function (a, b) {
        if (a == null || b == null)
            return false;
        return a.panel === b.panel && a.rIndex === b.rIndex && a.elIndex === b.elIndex;
    };
    DragDropTargetElement.prototype.findInfo = function (el, isEdge) {
        if (isEdge === void 0) { isEdge = false; }
        return this.findInfoInPanel(this.page, el, isEdge);
    };
    DragDropTargetElement.prototype.findInfoInPanel = function (panel, el, isEdge) {
        if (el == panel) {
            var parent = panel;
            if (panel.parent && (isEdge || this.target.isPanel)) {
                parent = panel.parent;
            }
            return { panel: parent, rIndex: 0, elIndex: 0, element: panel };
        }
        var rows = panel["koRows"]();
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            var elements = row["koElements"]();
            for (var j = 0; j < elements.length; j++) {
                if (elements[j].isPanel) {
                    var res = this.findInfoInPanel(elements[j], el, isEdge);
                    if (res) {
                        if (res.element == elements[j]) {
                            res.rIndex = i;
                            res.elIndex = j;
                        }
                        return res;
                    }
                }
                if (elements[j] == el)
                    return { panel: panel, rIndex: i, elIndex: j, element: elements[j] };
            }
        }
        return null;
    };
    DragDropTargetElement.prototype.getNewTargetElement = function () {
        var result = __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["JsonObject"].metaData.createClass(this.target.getType());
        var json = new __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["JsonObject"]().toJsonObject(this.target);
        new __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["JsonObject"]().toObject(json, result);
        return result;
    };
    return DragDropTargetElement;
}());

var DragDropHelper = (function () {
    function DragDropHelper(data, onModifiedCallback, parent) {
        if (parent === void 0) { parent = null; }
        this.data = data;
        this.scrollableElement = null;
        this.ddTarget = null;
        this.id = DragDropHelper.counter++;
        this.isScrollStop = true;
        this.onModifiedCallback = onModifiedCallback;
        this.scrollableElement = parent && parent.querySelector("#scrollableDiv");
        this.prevCoordinates = { x: -1, y: -1 };
    }
    Object.defineProperty(DragDropHelper.prototype, "survey", {
        get: function () { return this.data; },
        enumerable: true,
        configurable: true
    });
    DragDropHelper.prototype.startDragQuestion = function (event, element) {
        var json = new __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["JsonObject"]().toJsonObject(element);
        json["type"] = element.getType();
        this.prepareData(event, element.name, json);
        this.ddTarget.source = element;
    };
    DragDropHelper.prototype.startDragToolboxItem = function (event, elementName, elementJson) {
        this.prepareData(event, elementName, elementJson);
    };
    DragDropHelper.prototype.isSurveyDragging = function (event) {
        if (!event)
            return false;
        var data = this.getData(event).text;
        return data && data.indexOf(DragDropHelper.dataStart) == 0;
    };
    DragDropHelper.prototype.doDragDropOver = function (event, element, isEdge) {
        if (isEdge === void 0) { isEdge = false; }
        event = this.getEvent(event);
        if (this.isSameCoordinates(event))
            return;
        this.checkScrollY(event);
        if (!element || !this.isSurveyDragging(event) || this.isSamePlace(event, element))
            return;
        var bottomInfo = this.isBottom(event, element);
        isEdge = element.isPanel ? isEdge && bottomInfo.isEdge : true;
        if (element.isPanel && !isEdge && element.elements.length > 0)
            return;
        this.ddTarget.moveTo(element, bottomInfo.isBottom, isEdge);
    };
    DragDropHelper.prototype.end = function () {
        if (this.ddTarget) {
            this.ddTarget.clear();
        }
        this.isScrollStop = true;
        this.clearData();
    };
    DragDropHelper.prototype.doDrop = function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        }
        if (this.isSurveyDragging(event)) {
            event.preventDefault();
            this.ddTarget.doDrop();
            if (this.onModifiedCallback)
                this.onModifiedCallback();
        }
        this.end();
    };
    DragDropHelper.prototype.doLeavePage = function (event) {
        this.ddTarget.clear();
    };
    DragDropHelper.prototype.scrollToElement = function (el) {
        if (!this.scrollableElement || !el)
            return;
        el.scrollIntoView(false);
    };
    DragDropHelper.prototype.createTargetElement = function (elementName, json) {
        if (!elementName || !json)
            return null;
        var targetElement = null;
        targetElement = __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["JsonObject"].metaData.createClass(json["type"]);
        new __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["JsonObject"]().toObject(json, targetElement);
        targetElement.name = elementName;
        targetElement.setData(this.survey);
        targetElement.renderWidth = "100%";
        targetElement["koIsDragging"](true);
        return targetElement;
    };
    DragDropHelper.prototype.isBottom = function (event, surveyEl) {
        event = this.getEvent(event);
        var height = event.currentTarget["clientHeight"];
        var y = event.offsetY;
        if (event.hasOwnProperty('layerX')) {
            y = event.layerY - event.currentTarget["offsetTop"];
        }
        return { isBottom: y > height / 2, isEdge: y <= DragDropHelper.edgeHeight || height - y <= DragDropHelper.edgeHeight };
    };
    DragDropHelper.prototype.isSameCoordinates = function (event) {
        var res = Math.abs(event.pageX - this.prevCoordinates.x) > 5 || Math.abs(event.pageY - this.prevCoordinates.y) > 5;
        if (res) {
            this.prevCoordinates.x = event.pageX;
            this.prevCoordinates.y = event.pageY;
        }
        return !res;
    };
    DragDropHelper.prototype.isSamePlace = function (event, element) {
        var prev = DragDropHelper.prevEvent;
        if (prev.element != element || Math.abs(event.clientX - prev.x) > 5 || Math.abs(event.clientY - prev.y) > 5) {
            prev.element = element;
            prev.x = event.clientX;
            prev.y = event.clientY;
            return false;
        }
        return true;
    };
    DragDropHelper.prototype.checkScrollY = function (e) {
        if (!this.scrollableElement)
            return;
        var y = this.getScrollableElementPosY(e);
        if (y < 0)
            return;
        this.isScrollStop = true;
        var height = this.scrollableElement["clientHeight"];
        if (y < DragDropHelper.ScrollOffset && y >= 0) {
            this.isScrollStop = false;
            this.doScrollY(-1);
        }
        if (height - y < DragDropHelper.ScrollOffset && height >= y) {
            this.isScrollStop = false;
            this.doScrollY(1);
        }
    };
    DragDropHelper.prototype.doScrollY = function (step) {
        var el = this.scrollableElement;
        var scrollY = el.scrollTop + step;
        if (scrollY < 0) {
            this.isScrollStop = true;
            return;
        }
        el.scrollTop = scrollY;
        var self = this;
        if (!this.isScrollStop) {
            setTimeout(function () { self.doScrollY(step); }, DragDropHelper.ScrollDelay);
        }
    };
    DragDropHelper.prototype.getScrollableElementPosY = function (e) {
        if (!this.scrollableElement || !e.currentTarget)
            return -1;
        var el = e.currentTarget;
        var offsetTop = 0;
        while (el && el != this.scrollableElement) {
            offsetTop += el["offsetTop"];
            el = el["offsetParent"];
        }
        return e.offsetY + e.currentTarget["offsetTop"] - this.scrollableElement.offsetTop - this.scrollableElement.scrollTop;
    };
    DragDropHelper.prototype.getEvent = function (event) {
        return event["originalEvent"] ? event["originalEvent"] : event;
    };
    DragDropHelper.prototype.getY = function (element) {
        var result = 0;
        while (element) {
            result += (element.offsetTop - element.scrollTop + element.clientTop);
            element = element.offsetParent;
        }
        return result;
    };
    DragDropHelper.prototype.prepareData = function (event, elementName, json) {
        var str = DragDropHelper.dataStart + "questionname:" + elementName;
        this.setData(event, str);
        var targetElement = this.createTargetElement(elementName, json);
        this.ddTarget = new DragDropTargetElement(this.survey.currentPage, targetElement, null);
    };
    DragDropHelper.prototype.setData = function (event, text) {
        if (event["originalEvent"]) {
            event = event["originalEvent"];
        }
        if (event.dataTransfer) {
            event.dataTransfer.setData("Text", text);
            event.dataTransfer.effectAllowed = "copy";
        }
        DragDropHelper.dragData = { text: text };
    };
    DragDropHelper.prototype.getData = function (event) {
        if (event["originalEvent"]) {
            event = event["originalEvent"];
        }
        if (event.dataTransfer) {
            var text = event.dataTransfer.getData("Text");
            if (text) {
                DragDropHelper.dragData.text = text;
            }
        }
        return DragDropHelper.dragData;
    };
    DragDropHelper.prototype.clearData = function () {
        //this.ddTarget = null;
        DragDropHelper.dragData = { text: "", json: null };
        var prev = DragDropHelper.prevEvent;
        prev.element = null;
        prev.x = -1;
        prev.y = -1;
        this.prevCoordinates.x = -1;
        this.prevCoordinates.y = -1;
    };
    return DragDropHelper;
}());

DragDropHelper.edgeHeight = 20;
DragDropHelper.dataStart = "surveyjs,";
DragDropHelper.dragData = { text: "", json: null };
DragDropHelper.prevEvent = { element: null, x: -1, y: -1 };
DragDropHelper.counter = 1;
DragDropHelper.ScrollDelay = 30;
DragDropHelper.ScrollOffset = 100;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__propertyEditors_propertyEditorBase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editorLocalization__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyObjectProperty; });



var SurveyObjectProperty = (function () {
    function SurveyObjectProperty(property, onPropertyChanged, propertyEditorOptions) {
        if (onPropertyChanged === void 0) { onPropertyChanged = null; }
        if (propertyEditorOptions === void 0) { propertyEditorOptions = null; }
        this.property = property;
        this.isApplyingNewValue = false;
        this.onPropertyChanged = onPropertyChanged;
        this.name = this.property.name;
        this.disabled = property["readOnly"];
        this.koValue = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.choices = property.choices;
        var self = this;
        this.editorType = property.type;
        //TODO
        if (this.choices != null) {
            this.editorType = "dropdown";
        }
        var onItemChanged = function (newValue) { self.onApplyEditorValue(newValue); };
        this.editor = __WEBPACK_IMPORTED_MODULE_1__propertyEditors_propertyEditorBase__["a" /* SurveyPropertyEditorBase */].createEditor(this.editorType, onItemChanged);
        this.editor.onGetLocale = this.doOnGetLocale;
        this.editor.options = propertyEditorOptions;
        this.editor.editablePropertyName = this.property.name;
        this.editorType = this.editor.editorType;
        this.modalName = "modelEditor" + this.editorType + this.name;
        this.modalNameTarget = "#" + this.modalName;
        this.koValue.subscribe(function (newValue) { self.onkoValueChanged(newValue); });
        this.koText = __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return self.getValueText(self.koValue()); });
        this.koIsDefault = __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return self.property.isDefaultValue(self.koValue()); });
    }
    SurveyObjectProperty.prototype.doOnGetLocale = function () {
        if (this.object && this.object["getLocale"])
            return this.object.getLocale();
        return "";
    };
    Object.defineProperty(SurveyObjectProperty.prototype, "object", {
        get: function () { return this.objectValue; },
        set: function (value) {
            this.objectValue = value;
            this.updateValue();
        },
        enumerable: true,
        configurable: true
    });
    SurveyObjectProperty.prototype.updateValue = function () {
        this.isValueUpdating = true;
        this.koValue(this.getValue());
        this.editor.setObject(this.object);
        this.editor.setTitle(__WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString("pe.editProperty")["format"](this.property.name));
        this.updateEditorData(this.koValue());
        this.isValueUpdating = false;
    };
    SurveyObjectProperty.prototype.onApplyEditorValue = function (newValue) {
        this.isApplyingNewValue = true;
        this.koValue(newValue);
        this.isApplyingNewValue = false;
    };
    SurveyObjectProperty.prototype.onkoValueChanged = function (newValue) {
        if (!this.isApplyingNewValue) {
            this.updateEditorData(newValue);
        }
        if (this.object == null)
            return;
        if (this.getValue() == newValue)
            return;
        if (this.onPropertyChanged != null && !this.isValueUpdating)
            this.onPropertyChanged(this, newValue);
    };
    SurveyObjectProperty.prototype.updateEditorData = function (newValue) {
        this.editor.value = newValue;
    };
    SurveyObjectProperty.prototype.getValue = function () {
        if (this.property["getPropertyValue"])
            return this.property["getPropertyValue"](this.object); //TODO make the only call
        if (this.property.hasToUseGetValue)
            return this.property.getValue(this.object);
        return this.object[this.name];
    };
    SurveyObjectProperty.prototype.getValueText = function (value) { return this.editor.getValueText(value); };
    return SurveyObjectProperty;
}());



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__surveyHelper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyVerbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyVerbItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SurveyVerbChangeTypeItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SurveyVerbChangePageItem; });





var SurveyVerbs = (function () {
    function SurveyVerbs(onModifiedCallback) {
        this.onModifiedCallback = onModifiedCallback;
        this.koVerbs = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        this.koHasVerbs = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        var classes = __WEBPACK_IMPORTED_MODULE_4_survey_knockout__["JsonObject"].metaData.getChildrenClasses("selectbase", true);
        this.choicesClasses = [];
        for (var i = 0; i < classes.length; i++) {
            this.choicesClasses.push(classes[i].name);
        }
    }
    Object.defineProperty(SurveyVerbs.prototype, "survey", {
        get: function () { return this.surveyValue; },
        set: function (value) {
            if (this.survey == value)
                return;
            this.surveyValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyVerbs.prototype, "obj", {
        get: function () { return this.objValue; },
        set: function (value) {
            if (this.objValue == value)
                return;
            this.objValue = value;
            this.buildVerbs();
        },
        enumerable: true,
        configurable: true
    });
    SurveyVerbs.prototype.buildVerbs = function () {
        var array = [];
        var objType = __WEBPACK_IMPORTED_MODULE_3__surveyHelper__["b" /* SurveyHelper */].getObjectType(this.obj);
        if (objType == __WEBPACK_IMPORTED_MODULE_3__surveyHelper__["a" /* ObjType */].Question) {
            var question = this.obj;
            if (this.survey.pages.length > 1) {
                array.push(new SurveyVerbChangePageItem(this.survey, question, this.onModifiedCallback));
            }
            if (this.choicesClasses.indexOf(question.getType()) > -1) {
                array.push(new SurveyVerbChangeTypeItem(this.survey, question, this.onModifiedCallback));
            }
        }
        this.koVerbs(array);
        this.koHasVerbs(array.length > 0);
    };
    return SurveyVerbs;
}());

var SurveyVerbItem = (function () {
    function SurveyVerbItem(survey, question, onModifiedCallback) {
        this.survey = survey;
        this.question = question;
        this.onModifiedCallback = onModifiedCallback;
        this.koItems = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        this.koSelectedItem = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
    }
    Object.defineProperty(SurveyVerbItem.prototype, "text", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return SurveyVerbItem;
}());

var SurveyVerbChangeTypeItem = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyVerbChangeTypeItem, _super);
    function SurveyVerbChangeTypeItem(survey, question, onModifiedCallback) {
        var _this = _super.call(this, survey, question, onModifiedCallback) || this;
        _this.survey = survey;
        _this.question = question;
        _this.onModifiedCallback = onModifiedCallback;
        var classes = __WEBPACK_IMPORTED_MODULE_4_survey_knockout__["JsonObject"].metaData.getChildrenClasses("selectbase", true);
        var array = [];
        for (var i = 0; i < classes.length; i++) {
            array.push({ value: classes[i].name, text: __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString("qt." + classes[i].name) });
        }
        _this.koItems(array);
        _this.koSelectedItem(question.getType());
        var self = _this;
        _this.koSelectedItem.subscribe(function (newValue) { self.changeType(newValue); });
        return _this;
    }
    Object.defineProperty(SurveyVerbChangeTypeItem.prototype, "text", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString("pe.verbChangeType"); },
        enumerable: true,
        configurable: true
    });
    SurveyVerbChangeTypeItem.prototype.changeType = function (questionType) {
        if (questionType == this.question.getType())
            return;
        var page = this.survey.getPageByQuestion(this.question);
        var index = page.questions.indexOf(this.question);
        var newQuestion = __WEBPACK_IMPORTED_MODULE_4_survey_knockout__["QuestionFactory"].Instance.createQuestion(questionType, this.question.name);
        var jsonObj = new __WEBPACK_IMPORTED_MODULE_4_survey_knockout__["JsonObject"]();
        var json = jsonObj.toJsonObject(this.question);
        jsonObj.toObject(json, newQuestion);
        page.removeQuestion(this.question);
        page.addQuestion(newQuestion, index);
        if (this.onModifiedCallback)
            this.onModifiedCallback();
    };
    return SurveyVerbChangeTypeItem;
}(SurveyVerbItem));

var SurveyVerbChangePageItem = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyVerbChangePageItem, _super);
    function SurveyVerbChangePageItem(survey, question, onModifiedCallback) {
        var _this = _super.call(this, survey, question, onModifiedCallback) || this;
        _this.survey = survey;
        _this.question = question;
        _this.onModifiedCallback = onModifiedCallback;
        var array = [];
        for (var i = 0; i < _this.survey.pages.length; i++) {
            var page = _this.survey.pages[i];
            array.push({ value: page, text: __WEBPACK_IMPORTED_MODULE_3__surveyHelper__["b" /* SurveyHelper */].getObjectName(page) });
        }
        _this.koItems(array);
        _this.prevPage = _this.survey.getPageByQuestion(question);
        _this.koSelectedItem(_this.prevPage);
        var self = _this;
        _this.koSelectedItem.subscribe(function (newValue) { self.changePage(newValue); });
        return _this;
    }
    Object.defineProperty(SurveyVerbChangePageItem.prototype, "text", {
        get: function () { return __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString("pe.verbChangePage"); },
        enumerable: true,
        configurable: true
    });
    SurveyVerbChangePageItem.prototype.changePage = function (newPage) {
        if (newPage == null || newPage == this.prevPage)
            return;
        this.prevPage.removeQuestion(this.question);
        newPage.addQuestion(this.question);
        if (this.onModifiedCallback)
            this.onModifiedCallback();
    };
    return SurveyVerbChangePageItem;
}(SurveyVerbItem));



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__surveyHelper__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPagesEditor; });


var SurveyPagesEditor = (function () {
    function SurveyPagesEditor(onAddNewPageCallback, onSelectPageCallback, onMovePageCallback, onDeletePageCallback) {
        if (onAddNewPageCallback === void 0) { onAddNewPageCallback = null; }
        if (onSelectPageCallback === void 0) { onSelectPageCallback = null; }
        if (onMovePageCallback === void 0) { onMovePageCallback = null; }
        if (onDeletePageCallback === void 0) { onDeletePageCallback = null; }
        this.draggingPage = null;
        this.koPages = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        this.koIsValid = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.onAddNewPageCallback = onAddNewPageCallback;
        this.onSelectPageCallback = onSelectPageCallback;
        this.onMovePageCallback = onMovePageCallback;
        this.onDeletePageCallback = onDeletePageCallback;
        var self = this;
        this.selectPageClick = function (pageItem) {
            if (self.onSelectPageCallback) {
                self.onSelectPageCallback(pageItem.page);
            }
        };
        this.keyDown = function (el, e) { self.onKeyDown(el, e); };
        this.dragStart = function (el) { self.draggingPage = el; };
        this.dragOver = function (el) { };
        this.dragEnd = function () { self.draggingPage = null; };
        this.dragDrop = function (el) { self.moveDraggingPageTo(el); };
    }
    Object.defineProperty(SurveyPagesEditor.prototype, "survey", {
        get: function () { return this.surveyValue; },
        set: function (value) {
            this.surveyValue = value;
            this.koIsValid(this.surveyValue != null);
            this.updatePages();
        },
        enumerable: true,
        configurable: true
    });
    SurveyPagesEditor.prototype.setSelectedPage = function (page) {
        var pages = this.koPages();
        for (var i = 0; i < pages.length; i++) {
            pages[i].koSelected(pages[i].page == page);
        }
    };
    SurveyPagesEditor.prototype.addNewPageClick = function () {
        if (this.onAddNewPageCallback) {
            this.onAddNewPageCallback();
        }
    };
    SurveyPagesEditor.prototype.removePage = function (page) {
        var index = this.getIndexByPage(page);
        if (index > -1) {
            this.koPages.splice(index, 1);
        }
    };
    SurveyPagesEditor.prototype.changeName = function (page) {
        var index = this.getIndexByPage(page);
        if (index > -1) {
            this.koPages()[index].title(__WEBPACK_IMPORTED_MODULE_1__surveyHelper__["b" /* SurveyHelper */].getObjectName(page));
        }
    };
    SurveyPagesEditor.prototype.getIndexByPage = function (page) {
        var pages = this.koPages();
        for (var i = 0; i < pages.length; i++) {
            if (pages[i].page == page)
                return i;
        }
        return -1;
    };
    SurveyPagesEditor.prototype.onKeyDown = function (el, e) {
        if (this.koPages().length <= 1)
            return;
        var pages = this.koPages();
        var pageIndex = -1;
        for (var i = 0; i < pages.length; i++) {
            if (pages[i].page && pages[i].koSelected()) {
                pageIndex = i;
            }
        }
        if (pageIndex < 0)
            return;
        if (e.keyCode == 46 && this.onDeletePageCallback)
            this.onDeletePageCallback(el.page);
        if ((e.keyCode == 37 || e.keyCode == 39) && this.onSelectPageCallback) {
            pageIndex += (e.keyCode == 37 ? -1 : 1);
            if (pageIndex < 0)
                pageIndex = pages.length - 1;
            if (pageIndex >= pages.length)
                pageIndex = 0;
            var page = pages[pageIndex].page;
            this.onSelectPageCallback(page);
            this.setSelectedPage(page);
        }
    };
    SurveyPagesEditor.prototype.updatePages = function () {
        if (this.surveyValue == null) {
            this.koPages([]);
            return;
        }
        var pages = [];
        for (var i = 0; i < this.surveyValue.pages.length; i++) {
            var page = this.surveyValue.pages[i];
            pages.push({
                title: __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](__WEBPACK_IMPORTED_MODULE_1__surveyHelper__["b" /* SurveyHelper */].getObjectName(page)), page: page, koSelected: __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false)
            });
        }
        this.koPages(pages);
    };
    SurveyPagesEditor.prototype.moveDraggingPageTo = function (toPage) {
        if (toPage == null || toPage == this.draggingPage) {
            this.draggingPage = null;
            return;
        }
        if (this.draggingPage == null)
            return;
        var index = this.koPages().indexOf(this.draggingPage);
        var indexTo = this.koPages().indexOf(toPage);
        if (this.onMovePageCallback) {
            this.onMovePageCallback(index, indexTo);
        }
    };
    return SurveyPagesEditor;
}());



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyQuestionEditorDefinition; });

var SurveyQuestionEditorDefinition = (function () {
    function SurveyQuestionEditorDefinition() {
    }
    SurveyQuestionEditorDefinition.getProperties = function (className) {
        var properties = [];
        var allDefinitions = SurveyQuestionEditorDefinition.getAllDefinitionsByClass(className);
        for (var i = allDefinitions.length - 1; i >= 0; i--) {
            var def = allDefinitions[i];
            if (def.properties) {
                for (var j = 0; j < def.properties.length; j++) {
                    properties.push(def.properties[j]);
                }
            }
        }
        return properties;
    };
    SurveyQuestionEditorDefinition.getTabs = function (className) {
        var tabs = [];
        var allDefinitions = SurveyQuestionEditorDefinition.getAllDefinitionsByClass(className);
        for (var i = allDefinitions.length - 1; i >= 0; i--) {
            var def = allDefinitions[i];
            if (def.tabs) {
                for (var j = 0; j < def.tabs.length; j++) {
                    tabs.push(def.tabs[j]);
                }
            }
        }
        tabs.sort(function (a, b) { return a.index < b.index ? -1 : (a.index > b.index ? 1 : 0); });
        return tabs;
    };
    SurveyQuestionEditorDefinition.getAllDefinitionsByClass = function (className) {
        var result = [];
        if (className.indexOf('@') > -1 && SurveyQuestionEditorDefinition.definition[className]) {
            result.push(SurveyQuestionEditorDefinition.definition[className]);
            return result;
        }
        while (className) {
            var metaClass = __WEBPACK_IMPORTED_MODULE_0_survey_knockout__["JsonObject"].metaData["findClass"](className);
            if (!metaClass)
                break;
            if (SurveyQuestionEditorDefinition.definition[metaClass.name]) {
                result.push(SurveyQuestionEditorDefinition.definition[metaClass.name]);
            }
            className = metaClass.parentName;
        }
        return result;
    };
    return SurveyQuestionEditorDefinition;
}());

SurveyQuestionEditorDefinition.definition = {
    "questionbase": {
        properties: ["name", "title", { name: "visible", category: "checks" }, { name: "isRequired", category: "checks" }, { name: "startWithNewLine", category: "checks" }],
        tabs: [{ name: "visibleIf", index: 100 }]
    },
    "comment": {
        properties: ["rows", "placeHolder"]
    },
    "file": {
        properties: [{ name: "showPreview", category: "imageChecks" }, { name: "storeDataAsText", category: "imageChecks" }, "maxSize", "imageHeight", "imageWidth"]
    },
    "html": {
        tabs: [{ name: "html", index: 10 }]
    },
    "matrixdropdownbase": {
        properties: ["cellType"],
        tabs: [{ name: "columns", index: 10 }, { name: "rows", index: 11 }, { name: "choices", index: 12 }]
    },
    "matrixdynamic": {
        properties: ["rowCount", "addRowText", "removeRowText"]
    },
    "matrix": {
        tabs: [{ name: "columns", index: 10 }, { name: "rows", index: 11 }]
    },
    "multipletext": {
        properties: ["colCount"],
        tabs: [{ name: "items", index: 10 }]
    },
    "rating": {
        properties: ["minRateDescription", "maxRateDescription"],
        tabs: [{ name: "rateValues", index: 10 }]
    },
    "selectbase": {
        properties: ["hasOther", "choicesOrder", "colCount"],
        tabs: [{ name: "choices", index: 10 }, { name: "choicesByUrl", index: 11 }]
    },
    "dropdown": {
        properties: ["optionsCaption"]
    },
    "text": {
        properties: ["inputType", "placeHolder"]
    },
    "matrixdropdowncolumn@checkbox": {
        properties: ["hasOther", "choicesOrder", "colCount"],
        tabs: [{ name: "choices", index: 10 }, { name: "choicesByUrl", index: 11 }]
    },
    "matrixdropdowncolumn@radiogroup": {
        properties: ["hasOther", "choicesOrder", "colCount"],
        tabs: [{ name: "choices", index: 10 }, { name: "choicesByUrl", index: 11 }]
    },
    "matrixdropdowncolumn@dropdown": {
        properties: ["hasOther", "choicesOrder", "optionsCaption"],
        tabs: [{ name: "choices", index: 10 }, { name: "choicesByUrl", index: 11 }]
    },
    "matrixdropdowncolumn@text": {
        properties: ["inputType", "placeHolder"],
        tabs: [{ name: "validators", index: 10 }]
    },
    "matrixdropdowncolumn@comment": {
        properties: ["placeHolder"],
        tabs: [{ name: "validators", index: 10 }]
    },
    "multipletextitem": {
        properties: ["inputType", "placeHolder"],
        tabs: [{ name: "validators", index: 10 }]
    },
    "panel": {
        properties: ["name", "title", { name: "visible", category: "checks" }],
        tabs: [{ name: "visibleIf", index: 100 }]
    }
};


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SurveyQuestionEditorGeneralProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyQuestionEditorGeneralRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyQuestionEditorGeneralProperties; });



var SurveyQuestionEditorGeneralProperty = (function () {
    function SurveyQuestionEditorGeneralProperty(obj, property, isRequired) {
        if (isRequired === void 0) { isRequired = false; }
        this.obj = obj;
        this.property = property;
        this.isRequired = isRequired;
        this.choices = [];
        this.name = property.name;
        this.disabled = property["readOnly"];
        this.editType = "text";
        if (property.type == "text")
            this.editType = "textarea";
        if (property.type == "boolean")
            this.editType = "check";
        if (property.choices) {
            this.choices = property.choices;
            this.editType = "dropdown";
        }
        this.koValue = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.koErrorText = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("");
        this.koHasError = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.title = __WEBPACK_IMPORTED_MODULE_1__editorLocalization__["a" /* editorLocalization */].getString("pe." + this.name);
        if (!this.title)
            this.title = this.name;
        this.reset();
    }
    SurveyQuestionEditorGeneralProperty.prototype.hasError = function () {
        var isError = this.isRequired && (this.koValue() !== false) && !this.koValue();
        this.koErrorText(isError ? __WEBPACK_IMPORTED_MODULE_1__editorLocalization__["a" /* editorLocalization */].getString("pe.propertyIsEmpty") : "");
        this.koHasError(isError);
        return isError;
    };
    SurveyQuestionEditorGeneralProperty.prototype.apply = function () {
        this.obj[this.name] = this.koValue();
    };
    SurveyQuestionEditorGeneralProperty.prototype.reset = function () {
        this.koValue(this.getValue());
    };
    SurveyQuestionEditorGeneralProperty.prototype.getValue = function () {
        if (this.property["getPropertyValue"])
            return this.property["getPropertyValue"](this.obj); //TODO make the only call
        if (this.property.hasToUseGetValue)
            return this.property.getValue(this.obj);
        return this.obj[this.name];
    };
    return SurveyQuestionEditorGeneralProperty;
}());

var SurveyQuestionEditorGeneralRow = (function () {
    function SurveyQuestionEditorGeneralRow(obj, property, isPropertyRequired) {
        if (isPropertyRequired === void 0) { isPropertyRequired = false; }
        this.obj = obj;
        this.properties = [];
        this.addProperty(property, isPropertyRequired);
    }
    SurveyQuestionEditorGeneralRow.prototype.addProperty = function (property, isPropertyRequired) {
        if (isPropertyRequired === void 0) { isPropertyRequired = false; }
        this.properties.push(new SurveyQuestionEditorGeneralProperty(this.obj, property, isPropertyRequired));
    };
    SurveyQuestionEditorGeneralRow.prototype.hasError = function () {
        var isError = false;
        for (var i = 0; i < this.properties.length; i++) {
            isError = this.properties[i].hasError() || isError;
        }
        return isError;
    };
    return SurveyQuestionEditorGeneralRow;
}());

var SurveyQuestionEditorGeneralProperties = (function () {
    function SurveyQuestionEditorGeneralProperties(obj, properties, onCanShowPropertyCallback) {
        if (onCanShowPropertyCallback === void 0) { onCanShowPropertyCallback = null; }
        this.obj = obj;
        this.rows = [];
        this.onCanShowPropertyCallback = onCanShowPropertyCallback;
        this.properties = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.getProperties(this.obj.getType());
        this.buildRows(properties);
    }
    SurveyQuestionEditorGeneralProperties.prototype.apply = function () {
        this.applyOrReset(true);
    };
    SurveyQuestionEditorGeneralProperties.prototype.reset = function () {
        this.applyOrReset(false);
    };
    SurveyQuestionEditorGeneralProperties.prototype.hasError = function () {
        var isError = false;
        for (var i = 0; i < this.rows.length; i++) {
            isError = this.rows[i].hasError() || isError;
        }
        return isError;
    };
    SurveyQuestionEditorGeneralProperties.prototype.applyOrReset = function (isApply) {
        for (var i = 0; i < this.rows.length; i++) {
            for (var j = 0; j < this.rows[i].properties.length; j++) {
                if (isApply)
                    this.rows[i].properties[j].apply();
                else
                    this.rows[i].properties[j].reset();
            }
        }
    };
    SurveyQuestionEditorGeneralProperties.prototype.buildRows = function (properties) {
        var requiredProperties = __WEBPACK_IMPORTED_MODULE_2_survey_knockout__["JsonObject"].metaData.getRequiredProperties(this.obj.getType());
        if (!requiredProperties)
            requiredProperties = [];
        for (var i = 0; i < properties.length; i++) {
            var name = this.getName(properties[i]);
            var jsonProperty = this.getProperty(name);
            if (!jsonProperty)
                continue;
            var isPropertyRequired = requiredProperties.indexOf(name) > -1;
            var row = this.getRowByCategory(properties[i].category);
            if (row)
                row.addProperty(jsonProperty, isPropertyRequired);
            else {
                row = new SurveyQuestionEditorGeneralRow(this.obj, jsonProperty, isPropertyRequired);
                if (properties[i].category)
                    row.category = properties[i].category;
                this.rows.push(row);
            }
            if (properties[i].title) {
                row.properties[row.properties.length - 1].title = properties[i].title;
            }
        }
    };
    SurveyQuestionEditorGeneralProperties.prototype.getName = function (prop) {
        if (!prop)
            return null;
        if (typeof prop === "string")
            return prop;
        if (prop.name)
            return prop.name;
        return null;
    };
    SurveyQuestionEditorGeneralProperties.prototype.getRowByCategory = function (category) {
        if (!category)
            return null;
        for (var i = 0; i < this.rows.length; i++) {
            if (this.rows[i].category == category)
                return this.rows[i];
        }
        return null;
    };
    SurveyQuestionEditorGeneralProperties.prototype.getProperty = function (propertyName) {
        if (!propertyName)
            return null;
        var property = null;
        for (var i = 0; i < this.properties.length; i++) {
            if (this.properties[i].name == propertyName) {
                property = this.properties[i];
                break;
            }
        }
        //TODO code duplication. This code is in 3 places already, do refactoring.
        if (property && property["visible"] === false)
            property = null;
        if (property && this.onCanShowPropertyCallback) {
            if (!this.onCanShowPropertyCallback(this.obj, property))
                property = null;
        }
        return property;
    };
    return SurveyQuestionEditorGeneralProperties;
}());



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editorLocalization__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionToolbox; });



var QuestionToolbox = (function () {
    function QuestionToolbox(supportedQuestions) {
        if (supportedQuestions === void 0) { supportedQuestions = null; }
        this.orderedQuestions = ["text", "checkbox", "radiogroup", "dropdown", "comment", "rating", "html"];
        this.copiedItemMaxCount = 3;
        this.itemsValue = [];
        this.koItems = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        this.createDefaultItems(supportedQuestions);
    }
    Object.defineProperty(QuestionToolbox.prototype, "jsonText", {
        get: function () {
            return JSON.stringify(this.itemsValue);
        },
        set: function (value) {
            this.itemsValue = (value) ? JSON.parse(value) : [];
            this.onItemsChanged();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionToolbox.prototype, "copiedJsonText", {
        get: function () {
            return JSON.stringify(this.copiedItems);
        },
        set: function (value) {
            var newItems = (value) ? JSON.parse(value) : [];
            this.clearCopiedItems();
            for (var i = 0; i < newItems.length; i++) {
                newItems[i].isCopied = true;
                this.addItem(newItems[i]);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionToolbox.prototype, "items", {
        get: function () { return this.itemsValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(QuestionToolbox.prototype, "copiedItems", {
        get: function () {
            var result = [];
            for (var i = 0; i < this.itemsValue.length; i++) {
                if (this.itemsValue[i].isCopied)
                    result.push(this.itemsValue[i]);
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    QuestionToolbox.prototype.addItems = function (items, clearAll) {
        if (clearAll === void 0) { clearAll = false; }
        if (clearAll) {
            this.clearItems();
        }
        this.onItemsChanged();
    };
    QuestionToolbox.prototype.addCopiedItem = function (question) {
        var item = { name: question.name, title: question.name, isCopied: true, iconName: "icon-default", json: this.getQuestionJSON(question) };
        if (this.replaceItem(item))
            return;
        var copied = this.copiedItems;
        if (this.copiedItemMaxCount > 0 && copied.length == this.copiedItemMaxCount)
            this.removeItem(copied[this.copiedItemMaxCount - 1].name);
        this.addItem(item);
    };
    QuestionToolbox.prototype.addItem = function (item) {
        this.itemsValue.push(item);
        this.onItemsChanged();
    };
    QuestionToolbox.prototype.replaceItem = function (item) {
        var index = this.indexOf(item.name);
        if (index < 0)
            return;
        this.itemsValue[index] = item;
        this.onItemsChanged();
        return true;
    };
    QuestionToolbox.prototype.removeItem = function (name) {
        var index = this.indexOf(name);
        if (index < 0)
            return false;
        this.itemsValue.splice(index, 1);
        this.onItemsChanged();
        return true;
    };
    QuestionToolbox.prototype.clearItems = function () {
        this.itemsValue = [];
        this.onItemsChanged();
    };
    QuestionToolbox.prototype.clearCopiedItems = function () {
        var removedItems = this.copiedItems;
        for (var i = 0; i < removedItems.length; i++) {
            this.removeItem(removedItems[i].name);
        }
    };
    QuestionToolbox.prototype.onItemsChanged = function () {
        this.koItems(this.itemsValue);
    };
    QuestionToolbox.prototype.indexOf = function (name) {
        for (var i = 0; i < this.itemsValue.length; i++) {
            if (this.itemsValue[i].name == name)
                return i;
        }
        return -1;
    };
    QuestionToolbox.prototype.createDefaultItems = function (supportedQuestions) {
        var questions = this.getQuestionTypes(supportedQuestions);
        for (var i = 0; i < questions.length; i++) {
            var name = questions[i];
            var question = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["ElementFactory"].Instance.createElement(name, "q1");
            if (!question) {
                question = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"].metaData.createClass(name);
            }
            var json = this.getQuestionJSON(question);
            var item = { name: name, iconName: 'icon-' + name, title: __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString('qt.' + name), json: json, isCopied: false };
            this.itemsValue.push(item);
        }
        this.onItemsChanged();
    };
    QuestionToolbox.prototype.getQuestionJSON = function (question) {
        var json = new __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"]().toJsonObject(question);
        json.type = question.getType();
        return json;
    };
    QuestionToolbox.prototype.getQuestionTypes = function (supportedQuestions) {
        var allTypes = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["ElementFactory"].Instance.getAllTypes();
        if (!supportedQuestions || supportedQuestions.length == 0)
            supportedQuestions = allTypes;
        var questions = [];
        for (var i = 0; i < this.orderedQuestions.length; i++) {
            var name = this.orderedQuestions[i];
            if (supportedQuestions.indexOf(name) > -1 && allTypes.indexOf(name) > -1)
                questions.push(name);
        }
        for (var i = 0; i < supportedQuestions.length; i++) {
            var name = supportedQuestions[i];
            if (questions.indexOf(supportedQuestions[i]) < 0 && allTypes.indexOf(name) > -1)
                questions.push(name);
        }
        return questions;
    };
    return QuestionToolbox;
}());



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__json5__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyEmbedingWindow; });



var SurveyEmbedingWindow = (function () {
    function SurveyEmbedingWindow() {
        this.surveyId = null;
        this.surveyPostId = null;
        this.generateValidJSON = false;
        this.surveyJSVersion = __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["Version"];
        this.surveyCDNPath = "https://surveyjs.azureedge.net/";
        this.platformSurveyJSPrefix = {
            "angular": "angular",
            "jquery": "jquery",
            "knockout": "ko",
            "react": "react",
            "vue": "vue"
        };
        this.platformJSonPage = {
            "angular": "@Component({\n  selector: 'ng-app',\n        template: \n        <div id='surveyElement'></div>\",\n})\nexport class AppComponent {\n    ngOnInit() {\n        var survey = new Survey.Model(surveyJSON);\n        survey.onComplete.add(sendDataToServer);\n       Survey.SurveyNG.render(\"surveyElement\", { model: survey });\n    }\n}",
            "jquery": "var survey = new Survey.Model(surveyJSON);\n$(\"#surveyContainer\").Survey({\n    model: survey,\n    onComplete: sendDataToServer\n});",
            "knockout": "var survey = new Survey.Model(surveyJSON, \"surveyContainer\");\nsurvey.onComplete.add(sendDataToServer);",
            "react": "ReactDOM.render(\n    <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById(\"surveyContainer\"));",
            "vue": "var survey = new Survey.Model(surveyJSON);\nnew Vue({ el: '#surveyContainer', data: { survey: survey } });"
        };
        this.platformJSonWindow = {
            "angular": "@Component({\n  selector: 'ng-app',\n        template: \n        <div id='surveyElement'></div>\",\n})\nexport class AppComponent {\n    ngOnInit() {\n        var survey = new Survey.Model(surveyJSON);\n        survey.onComplete.add(sendDataToServer);\n       Survey.SurveyWindowNG.render(\"surveyElement\", { model: survey });\n    }\n}",
            "jquery": "var survey = new Survey.Model(surveyJSON);\n$(\"#surveyContainer\").SurveyWindow({\n    model: survey,\n    onComplete: sendDataToServer\n});",
            "knockout": "var survey = new Survey.Model(surveyJSON);\nsurveyWindow.show();\nsurvey.onComplete.add(sendDataToServer);",
            "react": "ReactDOM.render(\n    <Survey.SurveyWindow json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById(\"surveyContainer\"));",
            "vue": ""
        };
        this.platformHtmlonPage = {
            "angular": "<ng-app></ng-app>",
            "jquery": "<div id=\"surveyContainer\"></div>",
            "knockout": "<div id=\"surveyContainer\"></div>",
            "react": "<div id=\"surveyContainer\"></div>",
            "vue": "<div id=\"surveyContainer\"><survey :survey=\"survey\"></survey></div>"
        };
        this.platformHtmlonWindow = {
            "angular": "<ng-app></ng-app>",
            "jquery": "<div id=\"surveyContainer\"></div>",
            "knockout": "",
            "react": "<div id=\"surveyContainer\"></div>",
            "vue": "<div id='surveyContainer'><survey-window :survey='survey'></survey-window></div>"
        };
        var self = this;
        this.koLibraryVersion = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("jquery");
        this.koShowAsWindow = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("page");
        this.koScriptUsing = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("bootstrap");
        this.koHasIds = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.koLoadSurvey = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.koHeadText = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("");
        this.koJavaText = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("");
        this.koBodyText = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("");
        this.koVisibleHtml = __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return self.koShowAsWindow() == "page" || self.platformHtmlonWindow[self.koLibraryVersion()] != ""; });
        this.koLibraryVersion.subscribe(function (newValue) { self.setHeadText(); self.setJavaTest(); self.setBodyText(); });
        this.koShowAsWindow.subscribe(function (newValue) { self.setJavaTest(); self.setBodyText(); });
        this.koScriptUsing.subscribe(function (newValue) { self.setHeadText(); self.setJavaTest(); });
        this.koLoadSurvey.subscribe(function (newValue) { self.setJavaTest(); });
        this.surveyEmbedingHead = null;
    }
    Object.defineProperty(SurveyEmbedingWindow.prototype, "json", {
        get: function () { return this.jsonValue; },
        set: function (value) { this.jsonValue = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEmbedingWindow.prototype, "hasAceEditor", {
        get: function () { return typeof ace !== "undefined"; },
        enumerable: true,
        configurable: true
    });
    SurveyEmbedingWindow.prototype.show = function () {
        if (this.hasAceEditor && this.surveyEmbedingHead == null) {
            this.surveyEmbedingHead = this.createEditor("surveyEmbedingHead");
            this.surveyEmbedingBody = this.createEditor("surveyEmbedingBody");
            this.surveyEmbedingJava = this.createEditor("surveyEmbedingJava");
        }
        this.koHasIds(this.surveyId && this.surveyPostId);
        this.setBodyText();
        this.setHeadText();
        this.setJavaTest();
    };
    SurveyEmbedingWindow.prototype.setBodyText = function () {
        this.setTextToEditor(this.surveyEmbedingBody, this.koBodyText, this.platformHtmlonPage[this.koLibraryVersion()]);
    };
    Object.defineProperty(SurveyEmbedingWindow.prototype, "getCDNPath", {
        get: function () { return this.surveyCDNPath + this.surveyJSVersion + "/"; },
        enumerable: true,
        configurable: true
    });
    SurveyEmbedingWindow.prototype.setHeadText = function () {
        var str = "<!-- Your platform (" + this.koLibraryVersion() + ") scripts. -->\n";
        if (this.koScriptUsing() != "bootstrap") {
            str += "\n<link href=\"" + this.getCDNPath + "survey.css\" type=\"text/css\" rel=\"stylesheet\" />";
        }
        str += "\n<script src=\"" + this.getCDNPath + "survey." + this.platformSurveyJSPrefix[this.koLibraryVersion()] + " .min.js\"></script>";
        this.setTextToEditor(this.surveyEmbedingHead, this.koHeadText, str);
    };
    SurveyEmbedingWindow.prototype.setJavaTest = function () {
        this.setTextToEditor(this.surveyEmbedingJava, this.koJavaText, this.getJavaText());
    };
    SurveyEmbedingWindow.prototype.createEditor = function (elementName) {
        var editor = ace.edit(elementName);
        editor.setTheme("ace/theme/monokai");
        editor.session.setMode("ace/mode/json");
        editor.setShowPrintMargin(false);
        editor.renderer.setShowGutter(false);
        editor.setReadOnly(true);
        return editor;
    };
    SurveyEmbedingWindow.prototype.getJavaText = function () {
        var isOnPage = this.koShowAsWindow() == "page";
        var str = this.getSaveFunc() + "\n\n";
        str += isOnPage ? this.platformJSonPage[this.koLibraryVersion()] : this.platformJSonWindow[this.koLibraryVersion()];
        var jsonText = "var surveyJSON = " + this.getJsonText() + "\n\n";
        return this.getSetCss() + "\n" + jsonText + str;
    };
    SurveyEmbedingWindow.prototype.getSetCss = function () {
        if (this.koScriptUsing() != "bootstrap")
            return "";
        return "Survey.Survey.cssType = \"bootstrap\";\n";
    };
    SurveyEmbedingWindow.prototype.getSaveFunc = function () {
        return "function sendDataToServer(survey) {\n" + this.getSaveFuncCode() + "\n}";
    };
    SurveyEmbedingWindow.prototype.getSaveFuncCode = function () {
        if (this.koHasIds())
            return "    survey.sendResult('" + this.surveyPostId + "');";
        return "    //send Ajax request to your web server.\n    alert(\"The results are:\" + JSON.stringify(s.data));";
    };
    SurveyEmbedingWindow.prototype.getJsonText = function () {
        if (this.koHasIds() && this.koLoadSurvey()) {
            return "{ surveyId: '" + this.surveyId + "'}";
        }
        if (this.generateValidJSON)
            return JSON.stringify(this.json);
        return new __WEBPACK_IMPORTED_MODULE_2__json5__["a" /* SurveyJSON5 */]().stringify(this.json);
    };
    SurveyEmbedingWindow.prototype.setTextToEditor = function (editor, koText, text) {
        if (editor)
            editor.setValue(text);
        if (koText)
            koText(text);
    };
    return SurveyEmbedingWindow;
}());



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__surveyHelper__ = __webpack_require__(5);
/* unused harmony export SurveyObjectItem */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyObjects; });


var SurveyObjectItem = (function () {
    function SurveyObjectItem() {
        this.level = 0;
    }
    return SurveyObjectItem;
}());

var SurveyObjects = (function () {
    function SurveyObjects(koObjects, koSelected) {
        this.koObjects = koObjects;
        this.koSelected = koSelected;
    }
    Object.defineProperty(SurveyObjects.prototype, "survey", {
        get: function () { return this.surveyValue; },
        set: function (value) {
            if (this.survey == value)
                return;
            this.surveyValue = value;
            this.rebuild();
        },
        enumerable: true,
        configurable: true
    });
    SurveyObjects.prototype.addPage = function (page) {
        this.addElement(page, null);
    };
    SurveyObjects.prototype.addElement = function (element, parent) {
        var parentIndex = parent != null ? this.getItemIndex(parent) : 0;
        if (parentIndex < 0)
            return;
        var elements = parent != null ? parent.elements : this.survey.pages;
        var elementIndex = elements.indexOf(element);
        var newIndex = elementIndex + 1 + parentIndex;
        if (elementIndex > 0) {
            var prevElement = elements[elementIndex - 1];
            newIndex = this.getItemIndex(prevElement) + this.getAllElementCount(prevElement) + 1;
        }
        var item = this.createItem(element, this.koObjects()[parentIndex]);
        this.addItem(item, newIndex);
        if (element.elements) {
            var objs = [];
            this.buildElements(objs, element.elements, item);
            for (var i = 0; i < objs.length; i++) {
                this.koObjects.splice(newIndex + 1 + i, 0, objs[i]);
            }
        }
        this.koSelected(item);
    };
    SurveyObjects.prototype.selectObject = function (obj) {
        var objs = this.koObjects();
        for (var i = 0; i < objs.length; i++) {
            if (objs[i].value == obj) {
                this.koSelected(objs[i]);
                return;
            }
        }
    };
    SurveyObjects.prototype.removeObject = function (obj) {
        var index = this.getItemIndex(obj);
        if (index < 0)
            return;
        var countToRemove = 1 + this.getAllElementCount(obj);
        this.koObjects.splice(index, countToRemove);
    };
    SurveyObjects.prototype.nameChanged = function (obj) {
        var index = this.getItemIndex(obj);
        if (index < 0)
            return;
        this.koObjects()[index].text(this.getText(this.koObjects()[index]));
    };
    SurveyObjects.prototype.selectNextQuestion = function (isUp) {
        var question = this.getSelectedQuestion();
        var itemIndex = this.getItemIndex(question);
        if (itemIndex < 0)
            return question;
        var objs = this.koObjects();
        var newItemIndex = itemIndex + (isUp ? -1 : 1);
        if (newItemIndex < objs.length && __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["b" /* SurveyHelper */].getObjectType(objs[newItemIndex].value) == __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["a" /* ObjType */].Question) {
            itemIndex = newItemIndex;
        }
        else {
            newItemIndex = itemIndex;
            while (newItemIndex < objs.length && __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["b" /* SurveyHelper */].getObjectType(objs[newItemIndex].value) == __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["a" /* ObjType */].Question) {
                itemIndex = newItemIndex;
                newItemIndex += (isUp ? 1 : -1);
            }
        }
        this.koSelected(objs[itemIndex]);
    };
    SurveyObjects.prototype.getAllElementCount = function (element) {
        if (!element.elements)
            return 0;
        var res = 0;
        for (var i = 0; i < element.elements.length; i++) {
            res += 1 + this.getAllElementCount(element.elements[i]);
        }
        return res;
    };
    SurveyObjects.prototype.getSelectedQuestion = function () {
        if (!this.koSelected())
            return null;
        var obj = this.koSelected().value;
        if (!obj)
            return null;
        return __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["b" /* SurveyHelper */].getObjectType(obj) == __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["a" /* ObjType */].Question ? (obj) : null;
    };
    SurveyObjects.prototype.addItem = function (item, index) {
        if (index > this.koObjects().length) {
            this.koObjects.push(item);
        }
        else {
            this.koObjects.splice(index, 0, item);
        }
    };
    SurveyObjects.prototype.rebuild = function () {
        var objs = [];
        if (this.survey == null) {
            this.koObjects(objs);
            this.selectObject(null);
            return;
        }
        var root = this.createItem(this.survey, null);
        objs.push(root);
        for (var i = 0; i < this.survey.pages.length; i++) {
            var page = this.survey.pages[i];
            var pageItem = this.createItem(page, root);
            objs.push(pageItem);
            this.buildElements(objs, page.elements, pageItem);
        }
        this.koObjects(objs);
        this.selectObject(this.survey);
    };
    SurveyObjects.prototype.buildElements = function (objs, elements, parentItem) {
        for (var i = 0; i < elements.length; i++) {
            var el = elements[i];
            if (el.isPanel) {
                var panelItem = this.createItem(el, parentItem);
                objs.push(panelItem);
                this.buildElements(objs, el.elements, panelItem);
            }
            else {
                objs.push(this.createItem(el, parentItem));
            }
        }
    };
    SurveyObjects.prototype.createItem = function (value, parent) {
        var item = new SurveyObjectItem();
        item.value = value;
        item.level = parent != null ? parent.level + 1 : 0;
        item.text = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](this.getText(item));
        return item;
    };
    SurveyObjects.prototype.getItemIndex = function (value) {
        var objs = this.koObjects();
        for (var i = 0; i < objs.length; i++) {
            if (objs[i].value == value)
                return i;
        }
        return -1;
    };
    SurveyObjects.prototype.getText = function (item) {
        if (item.level == 0)
            return "Survey";
        var intend = SurveyObjects.intend;
        for (var i = 1; i < item.level; i++) {
            intend += SurveyObjects.intend;
        }
        return intend + __WEBPACK_IMPORTED_MODULE_1__surveyHelper__["b" /* SurveyHelper */].getObjectName(item.value);
    };
    return SurveyObjects;
}());

SurveyObjects.intend = ".";


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyForDesigner; });




var SurveyForDesigner = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyForDesigner, _super);
    function SurveyForDesigner(jsonObj, renderedElement, css) {
        if (jsonObj === void 0) { jsonObj = null; }
        if (renderedElement === void 0) { renderedElement = null; }
        if (css === void 0) { css = null; }
        var _this = _super.call(this, jsonObj, renderedElement, css) || this;
        _this.onSelectedElementChanged = new __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Event"]();
        _this.onEditQuestion = new __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Event"]();
        _this.onCopyQuestion = new __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Event"]();
        _this.onFastCopyQuestion = new __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Event"]();
        _this.onDeleteCurrentObject = new __WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Event"]();
        var self = _this;
        _this.setDesignMode(true);
        _this.onAfterRenderPage.add(function (sender, options) { options.page["onAfterRenderPage"](options.htmlElement); });
        _this.onAfterRenderQuestion.add(function (sender, options) { options.question["onAfterRenderQuestion"](options.htmlElement); });
        _this.onAfterRenderPanel.add(function (sender, options) { options.panel["onAfterRenderPanel"](options.htmlElement); });
        _this.editQuestionClick = function () { self.onEditQuestion.fire(self, null); };
        _this.copyQuestionClick = function () { self.onCopyQuestion.fire(self, null); };
        _this.fastCopyQuestionClick = function () { self.onFastCopyQuestion.fire(self, null); };
        _this.deleteCurrentObjectClick = function () { self.onDeleteCurrentObject.fire(self, null); };
        return _this;
    }
    Object.defineProperty(SurveyForDesigner.prototype, "selectedElement", {
        get: function () { return this.selectedElementValue; },
        set: function (value) {
            if (value == this.selectedElementValue)
                return;
            var oldValue = this.selectedElementValue;
            this.selectedElementValue = value;
            if (oldValue != null && oldValue["onSelectedElementChanged"]) {
                oldValue["onSelectedElementChanged"]();
            }
            if (this.selectedElementValue != null && this.selectedElementValue["onSelectedElementChanged"]) {
                this.selectedElementValue["onSelectedElementChanged"]();
            }
            this.onSelectedElementChanged.fire(this, { 'oldElement': oldValue, 'newElement': value });
        },
        enumerable: true,
        configurable: true
    });
    SurveyForDesigner.prototype.getEditorLocString = function (value) {
        return __WEBPACK_IMPORTED_MODULE_2__editorLocalization__["a" /* editorLocalization */].getString(value);
    };
    return SurveyForDesigner;
}(__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Survey"]));

function panelBaseOnCreating(self) {
    self.dragEnterCounter = 0;
    self.emptyElement = null;
    self.koRows.subscribe(function (changes) {
        if (self.emptyElement) {
            self.emptyElement.style.display = self.koRows().length > 0 ? "none" : "";
        }
    });
}
function elementOnCreating(self, className) {
    self.dragDropHelperValue = null;
    self.dragDropHelper = function () {
        if (self.dragDropHelperValue == null) {
            self.dragDropHelperValue = self.data["dragDropHelper"];
        }
        return self.dragDropHelperValue;
    };
    self.renderedElement = null;
    self.addonsElement = null;
    self.koIsDragging = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false);
    self.koIsSelected = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false);
    self.koIsDragging.subscribe(function (newValue) {
        if (self.renderedElement) {
            self.renderedElement.style.opacity = newValue ? 0.4 : 1;
        }
    });
    self.koIsSelected.subscribe(function (newValue) {
        if (self.renderedElement) {
            var newClass = className;
            if (newValue)
                newClass += " svd_q_selected ";
            self.renderedElement.className = newClass;
        }
        if (self.addonsElement) {
            self.addonsElement.style.display = newValue ? "" : "none";
        }
    });
}
function addEmptyPanelElement(root, dragDropHelper, self) {
    var eDiv = document.createElement("div");
    eDiv.className = "well";
    eDiv.ondragover = function (e) {
        dragDropHelper.doDragDropOver(e, self);
    };
    var eSpan = document.createElement("span");
    eSpan.textContent = self.data.getEditorLocString('survey.dropQuestion');
    eDiv.appendChild(eSpan);
    root.appendChild(eDiv);
    return eDiv;
}
var question_design_class = "svd_question well well-sm svd_q_design_border";
var panel_design_class = "svd_question well well-sm svd_q_design_border";
function createQuestionDesignItem(onClick, text) {
    var res = document.createElement("li");
    var btn = document.createElement("button");
    btn.innerText = text;
    btn.onclick = onClick;
    btn.className = "btn btn-primary btn-xs";
    res.appendChild(btn);
    return res;
}
function createElementAddons(data, isPanel) {
    var main = document.createElement("div");
    main.className = "svd_question_menu btn-group";
    main["role"] = "group";
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-primary  btn-xs";
    btn.onclick = function (e) { data.editQuestionClick(); };
    var span = document.createElement("span");
    span.innerText = "Edit"; //TODO
    btn.appendChild(span);
    main.appendChild(btn);
    btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn btn-primary  btn-xs dropdown-toggle";
    btn.setAttribute("data-toggle", "dropdown");
    btn.setAttribute("aria-haspopup", "true");
    btn.setAttribute("aria-expanded", "false");
    span = document.createElement("span");
    span.className = "glyphicon glyphicon-option-horizontal";
    btn.appendChild(span);
    main.appendChild(btn);
    var ul = document.createElement("ul");
    ul.className = "dropdown-menu";
    ul.appendChild(createQuestionDesignItem(data.copyQuestionClick, data.getEditorLocString('survey.addToToolbox')));
    ul.appendChild(createQuestionDesignItem(data.fastCopyQuestionClick, data.getEditorLocString('survey.copy')));
    var deleteLocaleName = isPanel ? 'survey.deletePanel' : 'survey.deleteQuestion';
    ul.appendChild(createQuestionDesignItem(data.deleteCurrentObjectClick, data.getEditorLocString(deleteLocaleName)));
    main.appendChild(ul);
    return main;
}
//var lastElementOnClick: HTMLElement = null;
function elementOnAfterRendering(el, self, className, isPanel, disable) {
    self.renderedElement = el;
    var newClass = className;
    if (self.koIsSelected())
        newClass += " svd_q_selected";
    el.className = newClass;
    el.style.opacity = self.koIsDragging() ? 0.4 : 1;
    el.draggable = true;
    el.ondragover = function (e) {
        if (!e["markEvent"]) {
            e["markEvent"] = true;
            self.dragDropHelper().doDragDropOver(e, self, true);
        }
    };
    el.ondrop = function (e) {
        if (!e["markEvent"]) {
            e["markEvent"] = true;
            self.dragDropHelper().doDrop(e);
        }
    };
    el.ondragstart = function (e) {
        if (!e["markEvent"]) {
            e["markEvent"] = true;
            self.dragDropHelper().startDragQuestion(e, self);
        }
    };
    el.ondragend = function (e) {
        self.dragDropHelper().end();
    };
    el.onclick = function (e) {
        if (!e["markEvent"]) {
            e["markEvent"] = true;
            self.data["selectedElement"] = self;
        }
    };
    el.onkeydown = function (e) {
        if (e.witch == 46)
            self.data.deleteCurrentObjectClick();
        return true;
    };
    if (disable) {
        var childs = el.childNodes;
        for (var i = 0; i < childs.length; i++) {
            if (childs[i].style)
                childs[i].style.pointerEvents = "none";
        }
    }
    self.addonsElement = createElementAddons(self.data, isPanel);
    self.addonsElement.style.display = self.koIsSelected() ? "" : "none";
    el.appendChild(self.addonsElement);
}
__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Page"].prototype["onCreating"] = function () {
    panelBaseOnCreating(this);
};
__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Page"].prototype["onAfterRenderPage"] = function (el) {
    if (!this.data.isDesignMode)
        return;
    var self = this;
    var dragDropHelper = this.data["dragDropHelper"];
    this.dragEnterCounter = 0;
    el.ondragenter = function (e) {
        e.preventDefault();
        self.dragEnterCounter++;
    };
    el.ondragleave = function (e) {
        self.dragEnterCounter--;
        if (self.dragEnterCounter === 0)
            dragDropHelper.doLeavePage(e);
    };
    el.ondragover = function (e) { return false; };
    el.ondrop = function (e) { dragDropHelper.doDrop(e); };
    if (this.elements.length == 0) {
        this.emptyElement = addEmptyPanelElement(el, dragDropHelper, self);
    }
};
__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Panel"].prototype["onCreating"] = function () {
    panelBaseOnCreating(this);
    elementOnCreating(this, panel_design_class);
};
__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Panel"].prototype["onAfterRenderPanel"] = function (el) {
    if (!this.data.isDesignMode)
        return;
    var rows = this.koRows();
    var self = this;
    if (this.elements.length == 0) {
        this.emptyElement = addEmptyPanelElement(el, self.dragDropHelper(), self);
    }
    elementOnAfterRendering(el, this, panel_design_class, true, this.koIsDragging());
};
__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["Panel"].prototype["onSelectedElementChanged"] = function () {
    if (this.data == null)
        return;
    this.koIsSelected(this.data["selectedElementValue"] == this);
};
__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["QuestionBase"].prototype["onCreating"] = function () {
    elementOnCreating(this, question_design_class);
};
__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["QuestionBase"].prototype["onAfterRenderQuestion"] = function (el) {
    if (!this.data.isDesignMode)
        return;
    elementOnAfterRendering(el, this, question_design_class, false, true);
};
__WEBPACK_IMPORTED_MODULE_3_survey_knockout__["QuestionBase"].prototype["onSelectedElementChanged"] = function () {
    if (this.data == null)
        return;
    this.koIsSelected(this.data["selectedElementValue"] == this);
};


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyUndoRedo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UndoRedoItem; });


var SurveyUndoRedo = (function () {
    function SurveyUndoRedo() {
        this.index = -1;
        this.maximumCount = 10;
        this.items = [];
        this.koCanUndo = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.koCanRedo = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
    }
    SurveyUndoRedo.prototype.clear = function () {
        this.items = [];
        this.koCanUndo(false);
        this.koCanRedo(false);
    };
    SurveyUndoRedo.prototype.setCurrent = function (survey, selectedObjName) {
        var item = new UndoRedoItem();
        item.surveyJSON = new __WEBPACK_IMPORTED_MODULE_1_survey_knockout__["JsonObject"]().toJsonObject(survey);
        item.selectedObjName = selectedObjName;
        if (this.index < this.items.length - 1) {
            this.items.splice(this.index + 1);
        }
        this.items.push(item);
        this.removeOldData();
        this.index = this.items.length - 1;
        this.updateCanUndoRedo();
    };
    SurveyUndoRedo.prototype.undo = function () {
        if (!this.canUndo)
            return null;
        return this.doUndoRedo(-1);
    };
    SurveyUndoRedo.prototype.redo = function () {
        if (!this.canRedo)
            return null;
        return this.doUndoRedo(1);
    };
    SurveyUndoRedo.prototype.updateCanUndoRedo = function () {
        this.koCanUndo(this.canUndo);
        this.koCanRedo(this.canRedo);
    };
    SurveyUndoRedo.prototype.doUndoRedo = function (dIndex) {
        this.index += dIndex;
        this.updateCanUndoRedo();
        return this.index >= 0 && this.index < this.items.length ? this.items[this.index] : null;
    };
    Object.defineProperty(SurveyUndoRedo.prototype, "canUndo", {
        get: function () {
            return this.index >= 1 && this.index < this.items.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyUndoRedo.prototype, "canRedo", {
        get: function () {
            return this.items.length > 1 && this.index < this.items.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    SurveyUndoRedo.prototype.removeOldData = function () {
        if (this.items.length - 1 < this.maximumCount)
            return;
        this.items.splice(0, this.items.length - this.maximumCount - 1);
    };
    return SurveyUndoRedo;
}());

var UndoRedoItem = (function () {
    function UndoRedoItem() {
    }
    return UndoRedoItem;
}());



/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectEditor__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pagesEditor__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__surveyEmbedingWindow__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__surveyObjects__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__objectVerbs__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__questionEditors_questionEditor__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__surveyJSONEditor__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__textWorker__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__undoredo__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__surveyHelper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dragdrophelper__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__questionToolbox__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__json5__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__surveyjsObjects__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyEditor; });















var templateEditorHtml = __webpack_require__(65);


var SurveyEditor = (function () {
    function SurveyEditor(renderedElement, options) {
        if (renderedElement === void 0) { renderedElement = null; }
        if (options === void 0) { options = null; }
        var _this = this;
        this.stateValue = "";
        this.dragDropHelper = null;
        this.select2 = null;
        this.alwaySaveTextInPropertyEditorsValue = false;
        this.surveyId = null;
        this.surveyPostId = null;
        this.onCanShowProperty = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        this.onQuestionAdded = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        this.onItemValueAdded = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        this.onMatrixColumnAdded = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        this.onPanelAdded = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        this.onModified = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Event"]();
        this.koAutoSave = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.koShowState = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.koState = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("");
        this.toolbarItems = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        this.saveNo = 0;
        this.newQuestions = [];
        this.newPanels = [];
        this.koShowOptions = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.koGenerateValidJSON = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](true);
        this.koDesignerHeight = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.setOptions(options);
        this.koCanDeleteObject = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        var self = this;
        this.koShowSaveButton = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"](false);
        this.koTestSurveyWidth = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("100%");
        this.saveButtonClick = function () { self.doSave(); };
        this.koObjects = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        this.koSelectedObject = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]();
        this.koSelectedObject.subscribe(function (newValue) { self.selectedObjectChanged(newValue != null ? newValue.value : null); });
        this.koGenerateValidJSON.subscribe(function (newValue) {
            if (!self.options)
                self.options = {};
            self.options.generateValidJSON = newValue;
            if (self.generateValidJSONChangedCallback)
                self.generateValidJSONChangedCallback(newValue);
        });
        this.surveyObjects = new __WEBPACK_IMPORTED_MODULE_5__surveyObjects__["a" /* SurveyObjects */](this.koObjects, this.koSelectedObject);
        this.undoRedo = new __WEBPACK_IMPORTED_MODULE_10__undoredo__["a" /* SurveyUndoRedo */]();
        this.surveyVerbs = new __WEBPACK_IMPORTED_MODULE_6__objectVerbs__["a" /* SurveyVerbs */](function () { self.setModified(); });
        this.selectedObjectEditor = new __WEBPACK_IMPORTED_MODULE_2__objectEditor__["a" /* SurveyObjectEditor */](this);
        this.selectedObjectEditor.onCanShowPropertyCallback = function (object, property) {
            return self.onCanShowObjectProperty(object, property);
        };
        this.selectedObjectEditor.onPropertyValueChanged.add(function (sender, options) {
            self.onPropertyValueChanged(options.property, options.object, options.newValue);
        });
        this.questionEditorWindow = new __WEBPACK_IMPORTED_MODULE_7__questionEditors_questionEditor__["a" /* SurveyPropertyEditorShowWindow */]();
        this.questionEditorWindow.onCanShowPropertyCallback = function (object, property) {
            return self.onCanShowObjectProperty(object, property);
        };
        this.pagesEditor = new __WEBPACK_IMPORTED_MODULE_3__pagesEditor__["a" /* SurveyPagesEditor */](function () { self.addPage(); }, function (page) { self.surveyObjects.selectObject(page); }, function (indexFrom, indexTo) { self.movePage(indexFrom, indexTo); }, function (page) { self.deleteCurrentObject(); });
        this.surveyEmbeding = new __WEBPACK_IMPORTED_MODULE_4__surveyEmbedingWindow__["a" /* SurveyEmbedingWindow */]();
        this.toolboxValue = new __WEBPACK_IMPORTED_MODULE_13__questionToolbox__["a" /* QuestionToolbox */](this.options && this.options.questionTypes ? this.options.questionTypes : null);
        this.koViewType = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("designer");
        this.koIsShowDesigner = __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return self.koViewType() == "designer"; });
        this.selectDesignerClick = function () { self.showDesigner(); };
        this.selectEditorClick = function () { self.showJsonEditor(); };
        this.selectTestClick = function () { self.showTestSurvey(); };
        this.selectEmbedClick = function () { self.showEmbedEditor(); };
        this.generateValidJSONClick = function () { self.koGenerateValidJSON(true); };
        this.generateReadableJSONClick = function () { self.koGenerateValidJSON(false); };
        this.runSurveyClick = function () { self.showLiveSurvey(); };
        this.embedingSurveyClick = function () { self.showSurveyEmbeding(); };
        this.deleteObjectClick = function () { self.deleteCurrentObject(); };
        this.draggingToolboxItem = function (item, e) { self.doDraggingToolboxItem(item.json, e); };
        this.clickToolboxItem = function (item) { self.doClickToolboxItem(item.json); };
        this.dragEnd = function (item, e) { self.dragDropHelper.end(); };
        this.doUndoClick = function () { self.doUndoRedo(self.undoRedo.undo()); };
        this.doRedoClick = function () { self.doUndoRedo(self.undoRedo.redo()); };
        this.jsonEditor = new __WEBPACK_IMPORTED_MODULE_8__surveyJSONEditor__["a" /* SurveyJSONEditor */]();
        if (renderedElement) {
            this.render(renderedElement);
        }
        this.text = "";
        this.toolbarItems.push({
            id: 'svd-undo',
            visible: this.koIsShowDesigner,
            enabled: this.undoRedo.koCanUndo,
            action: this.doUndoClick,
            title: this.getLocString('ed.undo')
        });
        this.toolbarItems.push({
            id: 'svd-redo',
            visible: this.koIsShowDesigner,
            enabled: this.undoRedo.koCanRedo,
            action: this.doRedoClick,
            title: this.getLocString('ed.redo')
        });
        this.toolbarItems.push({
            id: 'svd-options',
            visible: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return _this.koIsShowDesigner() && _this.koShowOptions(); }),
            title: this.getLocString('ed.options'),
            template: 'svd-toolbar-options',
            items: __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]([
                { id: 'svd-valid-json', visible: true, css: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return (_this.koGenerateValidJSON() ? 'active' : ''); }), action: this.generateValidJSONClick, title: this.getLocString('ed.generateValidJSON') },
                { id: 'svd-readable-json', visible: true, css: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return (!_this.koGenerateValidJSON() ? 'active' : ''); }), action: this.generateReadableJSONClick, title: this.getLocString('ed.generateReadableJSON') }
            ])
        });
        this.toolbarItems.push({
            id: 'svd-test',
            visible: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return _this.koViewType() === 'test'; }),
            title: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return _this.getLocString('ed.testSurveyWidth') + ' ' + _this.koTestSurveyWidth(); }),
            template: 'svd-toolbar-options',
            items: __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]([
                { id: 'svd-100-json', visible: true, action: function () { return _this.koTestSurveyWidth('100%'); }, title: '100%' },
                { id: 'svd-1200px-json', visible: true, action: function () { return _this.koTestSurveyWidth('1200px'); }, title: '1200px' },
                { id: 'svd-1000px-json', visible: true, action: function () { return _this.koTestSurveyWidth('1000px'); }, title: '1000px' },
                { id: 'svd-800px-json', visible: true, action: function () { return _this.koTestSurveyWidth('800px'); }, title: '800px' },
                { id: 'svd-600px-json', visible: true, action: function () { return _this.koTestSurveyWidth('600px'); }, title: '600px' },
                { id: 'svd-400px-json', visible: true, action: function () { return _this.koTestSurveyWidth('400px'); }, title: '400px' },
            ])
        });
        this.toolbarItems.push({
            id: 'svd-save',
            visible: this.koShowSaveButton,
            action: this.saveButtonClick,
            innerCss: 'svd_save_btn',
            title: this.getLocString('ed.saveSurvey')
        });
        this.toolbarItems.push({
            id: 'svd-state',
            visible: this.koShowState,
            css: 'svd_state',
            innerCss: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return 'icon-' + _this.koState(); }),
            title: __WEBPACK_IMPORTED_MODULE_0_knockout__["computed"](function () { return _this.koState() && (_this.koState().charAt(0).toUpperCase() + _this.koState().slice(1)); }),
            template: 'svd-toolbar-state'
        });
    }
    Object.defineProperty(SurveyEditor.prototype, "isAutoSave", {
        get: function () { return this.koAutoSave(); },
        set: function (newVal) { this.koAutoSave(newVal); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "showState", {
        get: function () { return this.koShowState(); },
        set: function (newVal) { this.koShowState(newVal); },
        enumerable: true,
        configurable: true
    });
    SurveyEditor.prototype.setOptions = function (options) {
        if (!options)
            options = { generateValidJSON: true };
        this.options = options;
        this.showJSONEditorTabValue = typeof (options.showJSONEditorTab) !== 'undefined' ? options.showJSONEditorTab : true;
        this.showTestSurveyTabValue = typeof (options.showTestSurveyTab) !== 'undefined' ? options.showTestSurveyTab : true;
        this.showEmbededSurveyTabValue = typeof (options.showEmbededSurveyTab) !== 'undefined' ? options.showEmbededSurveyTab : false;
        this.koShowOptions(typeof (options.showOptions) !== 'undefined' ? options.showOptions : false);
        this.koGenerateValidJSON(this.options.generateValidJSON);
        this.isAutoSave = typeof (options.isAutoSave) !== 'undefined' ? options.isAutoSave : false;
        if (options.designerHeight) {
            this.koDesignerHeight(options.designerHeight);
        }
        if (options.objectsIntend) {
            __WEBPACK_IMPORTED_MODULE_5__surveyObjects__["a" /* SurveyObjects */].intend = options.objectsIntend;
        }
        this.koDesignerHeight();
    };
    Object.defineProperty(SurveyEditor.prototype, "survey", {
        get: function () {
            return this.surveyValue;
        },
        enumerable: true,
        configurable: true
    });
    SurveyEditor.prototype.render = function (element, options) {
        if (element === void 0) { element = null; }
        if (options === void 0) { options = null; }
        if (options)
            this.setOptions(options);
        var self = this;
        if (element && typeof element == "string") {
            element = document.getElementById(element);
        }
        if (element) {
            this.renderedElement = element;
        }
        element = this.renderedElement;
        if (!element)
            return;
        element.innerHTML = templateEditorHtml;
        self.applyBinding();
    };
    SurveyEditor.prototype.loadSurvey = function (surveyId) {
        var self = this;
        new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["dxSurveyService"]().loadSurvey(surveyId, function (success, result, response) {
            if (success && result) {
                self.text = JSON.stringify(result);
            }
        });
    };
    Object.defineProperty(SurveyEditor.prototype, "text", {
        get: function () {
            if (this.koIsShowDesigner())
                return this.getSurveyTextFromDesigner();
            return this.jsonEditor.text;
        },
        set: function (value) {
            this.changeText(value, true);
        },
        enumerable: true,
        configurable: true
    });
    SurveyEditor.prototype.changeText = function (value, clearState) {
        if (clearState === void 0) { clearState = false; }
        var textWorker = new __WEBPACK_IMPORTED_MODULE_9__textWorker__["a" /* SurveyTextWorker */](value);
        if (textWorker.isJsonCorrect) {
            this.initSurvey(new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"]().toJsonObject(textWorker.survey));
            this.showDesigner();
            this.setUndoRedoCurrentState(clearState);
        }
        else {
            this.setTextValue(value);
            this.koViewType("editor");
        }
    };
    Object.defineProperty(SurveyEditor.prototype, "toolbox", {
        get: function () { return this.toolboxValue; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "customToolboxQuestionMaxCount", {
        get: function () { return this.toolbox.copiedItemMaxCount; },
        set: function (value) { this.toolbox.copiedItemMaxCount = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "state", {
        get: function () { return this.stateValue; },
        enumerable: true,
        configurable: true
    });
    SurveyEditor.prototype.setState = function (value) {
        this.stateValue = value;
        this.koState(this.state);
    };
    SurveyEditor.prototype.doSave = function () {
        this.setState("saving");
        if (this.saveSurveyFunc) {
            this.saveNo++;
            var self = this;
            this.saveSurveyFunc(this.saveNo, function doSaveCallback(no, isSuccess) {
                self.setState("saved");
                if (self.saveNo == no) {
                    if (isSuccess)
                        self.setState("saved");
                }
            });
        }
    };
    SurveyEditor.prototype.setModified = function () {
        this.setState("modified");
        this.setUndoRedoCurrentState();
        this.onModified.fire(this, null);
        this.isAutoSave && this.doSave();
    };
    SurveyEditor.prototype.setUndoRedoCurrentState = function (clearState) {
        if (clearState === void 0) { clearState = false; }
        if (clearState) {
            this.undoRedo.clear();
        }
        var selObj = this.koSelectedObject() ? this.koSelectedObject().value : null;
        this.undoRedo.setCurrent(this.surveyValue, selObj ? selObj.name : null);
    };
    Object.defineProperty(SurveyEditor.prototype, "saveSurveyFunc", {
        get: function () { return this.saveSurveyFuncValue; },
        set: function (value) {
            this.saveSurveyFuncValue = value;
            this.koShowSaveButton(value != null && !this.isAutoSave);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "showOptions", {
        get: function () { return this.koShowOptions(); },
        set: function (value) { this.koShowOptions(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "showJSONEditorTab", {
        get: function () { return this.showJSONEditorTabValue; },
        set: function (value) { this.showJSONEditorTabValue = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "showTestSurveyTab", {
        get: function () { return this.showTestSurveyTabValue; },
        set: function (value) { this.showTestSurveyTabValue = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyEditor.prototype, "showEmbededSurveyTab", {
        get: function () { return this.showEmbededSurveyTabValue; },
        set: function (value) { this.showEmbededSurveyTabValue = value; },
        enumerable: true,
        configurable: true
    });
    SurveyEditor.prototype.onCanShowObjectProperty = function (object, property) {
        var options = { obj: object, property: property, canShow: true };
        this.onCanShowProperty.fire(this, options);
        return options.canShow;
    };
    SurveyEditor.prototype.setTextValue = function (value) {
        this.jsonEditor.text = value;
    };
    SurveyEditor.prototype.addPage = function () {
        var name = __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getNewPageName(this.survey.pages);
        var page = this.surveyValue.addNewPage(name);
        this.addPageToUI(page);
        this.setModified();
    };
    SurveyEditor.prototype.getLocString = function (str) { return __WEBPACK_IMPORTED_MODULE_1__editorLocalization__["a" /* editorLocalization */].getString(str); };
    SurveyEditor.prototype.movePage = function (indexFrom, indexTo) {
        var page = this.survey.pages[indexFrom];
        this.survey.pages.splice(indexFrom, 1);
        this.survey.pages.splice(indexTo, 0, page);
        this.pagesEditor.survey = this.survey;
        this.surveyObjects.selectObject(page);
        this.setModified();
    };
    SurveyEditor.prototype.addPageToUI = function (page) {
        this.pagesEditor.survey = this.surveyValue;
        this.surveyObjects.addPage(page);
    };
    SurveyEditor.prototype.doOnQuestionAdded = function (question, parentPanel) {
        var page = this.survey.getPageByElement(question);
        var options = { question: question, page: page };
        this.onQuestionAdded.fire(this, options);
        this.surveyObjects.addElement(question, parentPanel);
        this.survey.render();
    };
    SurveyEditor.prototype.doOnElementRemoved = function (question) {
        this.surveyObjects.removeObject(question);
        this.survey.render();
    };
    SurveyEditor.prototype.doOnPanelAdded = function (panel, parentPanel) {
        var page = this.survey.getPageByElement(panel);
        var options = { panel: panel, page: page };
        this.onPanelAdded.fire(this, options);
        this.surveyObjects.addElement(panel, parentPanel);
        this.survey.render();
    };
    SurveyEditor.prototype.onPropertyValueChanged = function (property, obj, newValue) {
        var isDefault = property.isDefaultValue(newValue);
        obj[property.name] = newValue;
        if (property.name == "name") {
            this.surveyObjects.nameChanged(obj);
            if (__WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getObjectType(obj) == __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["a" /* ObjType */].Page) {
                this.pagesEditor.changeName(obj);
            }
        }
        this.setModified();
        //TODO add a flag to a property, may change other properties
        if (property.name == "locale" || property.name == "hasComment" || property.name == "hasOther") {
            this.selectedObjectEditor.ObjectChanged();
        }
        this.survey.render();
    };
    SurveyEditor.prototype.doUndoRedo = function (item) {
        this.initSurvey(item.surveyJSON);
        if (item.selectedObjName) {
            var selObj = this.findObjByName(item.selectedObjName);
            if (selObj) {
                this.surveyObjects.selectObject(selObj);
            }
        }
        this.setState("modified");
        this.isAutoSave && this.doSave();
    };
    SurveyEditor.prototype.findObjByName = function (name) {
        var page = this.survey.getPageByName(name);
        if (page)
            return page;
        var question = this.survey.getQuestionByName(name);
        if (question)
            return question;
        return null;
    };
    SurveyEditor.prototype.canSwitchViewType = function (newType) {
        if (newType && this.koViewType() == newType)
            return false;
        if (this.koViewType() == "designer") {
            this.jsonEditor.text = this.getSurveyTextFromDesigner();
        }
        if (this.koViewType() != "editor")
            return true;
        if (!this.jsonEditor.isJsonCorrect) {
            alert(this.getLocString("ed.correctJSON"));
            return false;
        }
        this.initSurvey(new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"]().toJsonObject(this.jsonEditor.survey));
        this.setModified();
        return true;
    };
    SurveyEditor.prototype.showDesigner = function () {
        if (!this.canSwitchViewType("designer"))
            return;
        this.koViewType("designer");
    };
    SurveyEditor.prototype.showJsonEditor = function () {
        if (this.koViewType() == "editor")
            return;
        this.jsonEditor.show(this.getSurveyTextFromDesigner());
        this.koViewType("editor");
    };
    SurveyEditor.prototype.showTestSurvey = function () {
        if (!this.canSwitchViewType(null))
            return;
        this.showLiveSurvey();
        this.koViewType("test");
    };
    SurveyEditor.prototype.showEmbedEditor = function () {
        if (!this.canSwitchViewType("embed"))
            return;
        this.showSurveyEmbeding();
        this.koViewType("embed");
    };
    SurveyEditor.prototype.getSurveyTextFromDesigner = function () {
        var json = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"]().toJsonObject(this.survey);
        if (this.options && this.options.generateValidJSON)
            return JSON.stringify(json, null, 1);
        return new __WEBPACK_IMPORTED_MODULE_14__json5__["a" /* SurveyJSON5 */]().stringify(json, null, 1);
    };
    SurveyEditor.prototype.selectedObjectChanged = function (obj) {
        var canDeleteObject = false;
        this.selectedObjectEditor.selectedObject = obj;
        this.surveyVerbs.obj = obj;
        var objType = __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getObjectType(obj);
        if (objType == __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["a" /* ObjType */].Page) {
            this.survey.currentPage = obj;
            canDeleteObject = this.survey.pages.length > 1;
        }
        if (objType == __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["a" /* ObjType */].Question || objType == __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["a" /* ObjType */].Panel) {
            this.survey.selectedElement = obj;
            canDeleteObject = true;
            this.survey.currentPage = this.survey.getPageByQuestion(this.survey.selectedElement);
        }
        else {
            this.survey.selectedElement = null;
        }
        this.koCanDeleteObject(canDeleteObject);
        //Select2 work-around
        if (this.select2) {
            var el = this.renderedElement.querySelector("#select2-objectSelector-container"); //TODO
            if (el) {
                var item = this.surveyObjects.koSelected();
                if (item && item.text) {
                    el.innerText = item.text();
                }
            }
        }
    };
    SurveyEditor.prototype.applyBinding = function () {
        if (this.renderedElement == null)
            return;
        __WEBPACK_IMPORTED_MODULE_0_knockout__["cleanNode"](this.renderedElement);
        __WEBPACK_IMPORTED_MODULE_0_knockout__["applyBindings"](this, this.renderedElement);
        this.surveyjs = this.renderedElement.querySelector("#surveyjs");
        if (this.surveyjs) {
            var self = this;
            this.surveyjs.onkeydown = function (e) {
                if (!e)
                    return;
                if (e.keyCode == 46)
                    self.deleteQuestion();
                if (e.keyCode == 38 || e.keyCode == 40) {
                    self.selectQuestion(e.keyCode == 38);
                }
            };
        }
        this.surveyjsExample = this.renderedElement.querySelector("#surveyjsExample");
        this.initSurvey(new __WEBPACK_IMPORTED_MODULE_14__json5__["a" /* SurveyJSON5 */]().parse(SurveyEditor.defaultNewSurveyText));
        this.setUndoRedoCurrentState(true);
        this.jsonEditor.init();
        if (jQuery && jQuery()["select2"]) {
            this.select2 = jQuery("#objectSelector")["select2"]();
            jQuery("#objectSelector").width("100%");
        }
    };
    SurveyEditor.prototype.initSurvey = function (json) {
        var self = this;
        this.surveyValue = new __WEBPACK_IMPORTED_MODULE_16__surveyjsObjects__["a" /* SurveyForDesigner */]();
        this.dragDropHelper = new __WEBPACK_IMPORTED_MODULE_12__dragdrophelper__["a" /* DragDropHelper */](this.survey, function () { self.setModified(); }, this.renderedElement);
        this.surveyValue["setJsonObject"](json); //TODO
        if (this.surveyValue.isEmpty) {
            this.surveyValue["setJsonObject"](new __WEBPACK_IMPORTED_MODULE_14__json5__["a" /* SurveyJSON5 */]().parse(SurveyEditor.defaultNewSurveyText)); //TODO
        }
        this.surveyValue["dragDropHelper"] = this.dragDropHelper;
        this.survey.render(this.surveyjs);
        this.surveyObjects.survey = this.survey;
        this.pagesEditor.survey = this.survey;
        this.pagesEditor.setSelectedPage(this.survey.currentPage);
        this.surveyVerbs.survey = this.survey;
        this.surveyValue.onSelectedElementChanged.add(function (sender, options) { self.surveyObjects.selectObject(sender["selectedElement"]); });
        this.surveyValue.onEditQuestion.add(function (sender, options) { self.showQuestionEditor(self.koSelectedObject().value); });
        this.surveyValue.onCopyQuestion.add(function (sender, options) { self.addCustomToolboxQuestion(self.koSelectedObject().value); });
        this.surveyValue.onFastCopyQuestion.add(function (sender, options) { self.fastCopyQuestion(self.koSelectedObject().value); });
        this.surveyValue.onDeleteCurrentObject.add(function (sender, options) { self.deleteCurrentObject(); });
        this.surveyValue.onProcessHtml.add(function (sender, options) { options.html = self.processHtml(options.html); });
        this.surveyValue.onCurrentPageChanged.add(function (sender, options) { self.pagesEditor.setSelectedPage(sender.currentPage); });
        this.surveyValue.onQuestionAdded.add(function (sender, options) { self.doOnQuestionAdded(options.question, options.parentPanel); });
        this.surveyValue.onQuestionRemoved.add(function (sender, options) { self.doOnElementRemoved(options.question); });
        this.surveyValue.onPanelAdded.add(function (sender, options) { self.doOnPanelAdded(options.panel, options.parentPanel); });
        this.surveyValue.onPanelRemoved.add(function (sender, options) { self.doOnElementRemoved(options.panel); });
    };
    SurveyEditor.prototype.processHtml = function (html) {
        if (!html)
            return html;
        var scriptRegEx = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        while (scriptRegEx.test(html)) {
            html = html.replace(scriptRegEx, "");
        }
        return html;
    };
    SurveyEditor.prototype.doDraggingToolboxItem = function (json, e) {
        this.dragDropHelper.startDragToolboxItem(e, this.getNewName(json["type"]), json);
    };
    SurveyEditor.prototype.doClickToolboxItem = function (json) {
        var newElement = __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"].metaData.createClass(json["type"]);
        new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"]().toObject(json, newElement);
        this.newQuestions = [];
        this.newPanels = [];
        this.setNewNames(newElement);
        this.doClickQuestionCore(newElement);
    };
    SurveyEditor.prototype.setNewNames = function (element) {
        element.name = this.getNewName(element["getType"]());
        if (element.isPanel) {
            this.newPanels.push(element);
            var panel = element;
            for (var i = 0; i < panel.elements.length; i++) {
                this.setNewNames(panel.elements[i]);
            }
        }
        else {
            this.newQuestions.push(element);
        }
    };
    SurveyEditor.prototype.getNewName = function (type) {
        return type == "panel" ? this.getNewPanelName() : this.getNewQuestionName();
    };
    SurveyEditor.prototype.getNewQuestionName = function () {
        return __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getNewQuestionName(this.getAllQuestions());
    };
    SurveyEditor.prototype.getNewPanelName = function () {
        return __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getNewPanelName(this.getAllPanels());
    };
    SurveyEditor.prototype.getAllQuestions = function () {
        var result = this.survey.getAllQuestions();
        for (var i = 0; i < this.newQuestions.length; i++) {
            result.push(this.newQuestions[i]);
        }
        return result;
    };
    SurveyEditor.prototype.getAllPanels = function () {
        var result = [];
        for (var i = 0; i < this.survey.pages.length; i++) {
            this.addPanels(this.survey.pages[i], result);
        }
        for (var i = 0; i < this.newPanels.length; i++) {
            result.push(this.newPanels[i]);
        }
        return result;
    };
    SurveyEditor.prototype.addPanels = function (panel, result) {
        for (var i = 0; i < panel.elements.length; i++) {
            if (!panel.elements[i].isPanel)
                continue;
            result.push(panel.elements[i]);
            this.addPanels(panel.elements[i], result);
        }
    };
    SurveyEditor.prototype.doClickQuestionCore = function (question) {
        var page = this.survey.currentPage;
        var index = -1;
        if (this.survey.selectedElement != null) {
            index = page.questions.indexOf(this.survey.selectedElement) + 1;
        }
        page.addQuestion(question, index);
        if (this.renderedElement) {
            this.dragDropHelper.scrollToElement(this.renderedElement.querySelector("#" + question.id));
        }
        this.setModified();
    };
    SurveyEditor.prototype.deleteQuestion = function () {
        var question = this.getSelectedObjAsQuestion();
        if (question) {
            this.deleteCurrentObject();
        }
    };
    SurveyEditor.prototype.selectQuestion = function (isUp) {
        var question = this.getSelectedObjAsQuestion();
        if (question) {
            this.surveyObjects.selectNextQuestion(isUp);
        }
    };
    SurveyEditor.prototype.getSelectedObjAsQuestion = function () {
        var obj = this.koSelectedObject().value;
        if (!obj)
            return null;
        return __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getObjectType(obj) == __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["a" /* ObjType */].Question ? (obj) : null;
    };
    SurveyEditor.prototype.deleteCurrentObject = function () {
        this.deleteObject(this.koSelectedObject().value);
    };
    SurveyEditor.prototype.showQuestionEditor = function (question) {
        var self = this;
        this.questionEditorWindow.show(question, function (question) { self.onQuestionEditorChanged(question); }, this);
    };
    SurveyEditor.prototype.onQuestionEditorChanged = function (question) {
        this.surveyObjects.nameChanged(question);
        this.selectedObjectEditor.ObjectChanged();
        this.setModified();
        this.survey.render();
    };
    SurveyEditor.prototype.addCustomToolboxQuestion = function (question) {
        this.toolbox.addCopiedItem(question);
    };
    SurveyEditor.prototype.fastCopyQuestion = function (question) {
        var json = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"]().toJsonObject(question);
        json.type = question.getType();
        this.doClickToolboxItem(json);
    };
    SurveyEditor.prototype.deleteObject = function (obj) {
        this.surveyObjects.removeObject(obj);
        var objType = __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["b" /* SurveyHelper */].getObjectType(obj);
        if (objType == __WEBPACK_IMPORTED_MODULE_11__surveyHelper__["a" /* ObjType */].Page) {
            this.survey.removePage(obj);
            this.pagesEditor.removePage(obj);
        }
        else {
            this.survey.currentPage.removeElement(obj);
            this.survey.selectedElement = null;
            this.surveyObjects.selectObject(this.survey.currentPage);
        }
        this.setModified();
        this.survey.render();
    };
    SurveyEditor.prototype.showLiveSurvey = function () {
        var _this = this;
        if (!this.surveyjsExample)
            return;
        var json = this.getSurveyJSON();
        if (json != null) {
            if (json.cookieName) {
                delete json.cookieName;
            }
            var survey = new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Survey"](json);
            var self = this;
            var surveyjsExampleResults = this.renderedElement.querySelector("#surveyjsExampleResults");
            var surveyjsExamplereRun = this.renderedElement.querySelector("#surveyjsExamplereRun");
            if (surveyjsExampleResults)
                surveyjsExampleResults.innerHTML = "";
            if (surveyjsExamplereRun)
                surveyjsExamplereRun.style.display = "none";
            survey.onComplete.add(function (sender) { if (surveyjsExampleResults)
                surveyjsExampleResults.innerHTML = _this.getLocString("ed.surveyResults") + JSON.stringify(survey.data); if (surveyjsExamplereRun)
                surveyjsExamplereRun.style.display = ""; });
            survey.render(this.surveyjsExample);
        }
        else {
            this.surveyjsExample.innerHTML = this.getLocString("ed.correctJSON");
        }
    };
    SurveyEditor.prototype.showSurveyEmbeding = function () {
        var json = this.getSurveyJSON();
        this.surveyEmbeding.json = json;
        this.surveyEmbeding.surveyId = this.surveyId;
        this.surveyEmbeding.surveyPostId = this.surveyPostId;
        this.surveyEmbeding.generateValidJSON = this.options && this.options.generateValidJSON;
        this.surveyEmbeding.show();
    };
    SurveyEditor.prototype.getSurveyJSON = function () {
        if (this.koIsShowDesigner())
            return new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"]().toJsonObject(this.survey);
        if (this.jsonEditor.isJsonCorrect)
            return new __WEBPACK_IMPORTED_MODULE_15_survey_knockout__["JsonObject"]().toJsonObject(this.jsonEditor.survey);
        return null;
    };
    SurveyEditor.prototype.createAnnotations = function (text, errors) {
        var annotations = new Array();
        for (var i = 0; i < errors.length; i++) {
            var error = errors[i];
            var annotation = { row: error.position.start.row, column: error.position.start.column, text: error.text, type: "error" };
            annotations.push(annotation);
        }
        return annotations;
    };
    Object.defineProperty(SurveyEditor.prototype, "alwaySaveTextInPropertyEditors", {
        //implements ISurveyObjectEditorOptions
        get: function () {
            return this.alwaySaveTextInPropertyEditorsValue;
        },
        set: function (value) {
            this.alwaySaveTextInPropertyEditorsValue = value;
        },
        enumerable: true,
        configurable: true
    });
    SurveyEditor.prototype.onItemValueAddedCallback = function (propertyName, itemValue) {
        var options = { propertyName: propertyName, newItem: itemValue };
        this.onItemValueAdded.fire(this, options);
    };
    SurveyEditor.prototype.onMatrixDropdownColumnAddedCallback = function (column) {
        var options = { newColumn: column };
        this.onMatrixColumnAdded.fire(this, options);
    };
    return SurveyEditor;
}());

SurveyEditor.defaultNewSurveyText = "{ pages: [ { name: 'page1'}] }";
__WEBPACK_IMPORTED_MODULE_15_survey_knockout__["Survey"].cssType = "bootstrap";


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editorLocalization__ = __webpack_require__(2);

var frenchTranslation = {
    //Strings in Editor
    ed: {
        addNewPage: 'Ajouter une page',
        correctJSON: 'SVP corriger le json',
        delSelObject: 'Supprimer l\'objet sélectionné',
        designer: 'Designer de questionnaire',
        embedSurvey: 'Intégrer le questionnaire',
        generateReadableJSON: 'Générer un JSON lisible',
        generateValidJSON: 'Générer un JSON valide',
        jsonEditor: 'Editer JSON',
        newPageName: 'page',
        newQuestionName: 'question',
        options: 'Options',
        redo: 'Rétablir',
        saveSurvey: 'Sauvegarder le questionnaire',
        surveyResults: 'Résultat du questionnaire: ',
        testSurvey: 'Tester le questionnaire',
        testSurveyAgain: 'Tester à nouveau le questionnaire',
        testSurveyWidth: 'Largeur du questionnaire: ',
        toolbox: 'Boite à outils',
        undo: 'Annuler'
    },
    //Embed window
    ew: {
        angular: 'Utiliser la version Angular',
        bootstrap: 'Pour Bootstrap framework',
        jquery: 'Utiliser la version jQuery',
        knockout: 'Utiliser la version Knockout',
        loadFromServer: 'Charger le JSON du questionnaire depuis un serveur',
        react: 'Utiliser la version React',
        showInWindow: 'Afficher le questionnaire dans une fenêtre',
        showOnPage: 'Afficher le questionnaire dans une page',
        standard: 'Pas de bootstrap',
        titleHtml: 'HTML',
        titleJavaScript: 'JavaScript',
        titleScript: 'Scripts et styles',
        vue: 'Utiliser la version Vue'
    },
    //Operators
    op: {
        contains: 'contient',
        empty: 'est vide',
        equal: 'égal',
        greater: 'supérieur',
        greaterorequal: 'supérieur ou égal',
        less: 'plus petit',
        lessorequal: 'plus petit ou égal',
        notcontains: 'ne contient pas',
        notempty: 'n\'est pas vide',
        notequal: 'n\'est pas égal'
    },
    //Properties
    p: {
        addRowText: 'Bouton ajouter une ligne',
        cellType: 'Type de cellule',
        choices: 'Choix',
        choicesByUrl: 'Choix par API',
        choicesOrder: 'Ordre des choix',
        clearInvisibleValues: 'Cacher les valeur invisibles',
        colCount: 'Nombre de colonnes',
        cols: 'Nombre de cols',
        columnColCount: 'Nombre de colonnes',
        columnMinWidth: 'Largeur minimale des colonnes',
        columns: 'Colonnes',
        commentText: 'Description champ commentaire',
        completeText: 'Texte questionnaire finalisé',
        completedHtml: 'Html questionnaire finalisé',
        cookieName: 'Nom du cookie',
        edit: 'Editer',
        focusFirstQuestionAutomatic: 'Focus sur la première question automatiquement',
        goNextPageAutomatic: 'Aller à la page suivante automatiquement',
        hasComment: 'Champs commentaire ?',
        hasOther: 'Choix autre ?',
        horizontalScroll: 'Scroll horizontal',
        imageHeight: 'Hauteur de l \'image',
        imageWidth: 'Largeur de l\'image',
        indent: 'Indentation',
        inputType: 'Type de champs',
        isAllRowRequired: 'Toutes les lignes sont-elle obligatoires ?',
        isRequired: 'Requis ?',
        itemSize: 'Nombre maximum de caractères',
        items: 'Items',
        locale: 'Langue',
        maxRateDescription: 'Description note maximum',
        maxSize: 'Taille maximum',
        minRateDescription: 'Description note minimum',
        minRowCount: 'Nombre de ligne minimal',
        mode: 'Mode d\'affichage',
        name: 'Nom',
        optionsCaption: 'Texte par défaut',
        otherErrorText: 'Texte Erreur champs autre',
        otherText: { name: 'Text autre', title: 'Champ commentaire ou choix autre' },
        pageNextText: 'Bouton page suivante',
        pagePrevText: 'Bouton page précédente',
        page_title: { name: 'titre', title: 'Titre de la page' },
        placeHolder: 'PlaceHolder (indice dans le champs)',
        questionStartIndex: 'Index de numérotation des question',
        questionTitleLocation: 'Emplacement titre question',
        questionTitleTemplate: { name: 'Template d\'affichage des question', title: 'Exemple: {no}) {title} {require}:' },
        rateValues: 'Barème',
        removeRowText: 'Bouton supprimer une ligne',
        requiredText: 'Texte pour les champs requis',
        rowCount: 'Nombre de lignes',
        rows: 'Nombre de ligne',
        sendResultOnPageNext: '',
        showCompletedPage: 'Voir la page formulaire complété ?',
        showNavigationButtons: 'Boutons de navigation',
        showPageNumbers: 'Numérotation des pages',
        showPageTitles: 'Titre des pages',
        showPreview: 'Voir la prévisualisation',
        showProgressBar: 'Barre de progression',
        showQuestionNumbers: 'Numérotation des questions',
        showTitle: 'Afficher le titre',
        size: 'Nombre maximum de caractères',
        startWithNewLine: 'Commencer avec une nouvelle ligne',
        storeDataAsText: 'Stocker les données comme du text',
        storeOthersAsComment: 'Sauvegarder choix autre comme commentaire',
        surveyId: 'Id du questionnaire',
        surveyPostId: 'Id POST questionnaire',
        survey_title: { name: 'titre', title: 'Il sera affiché sur chaque page.' },
        title: { name: 'Titre', title: 'Laissez vide, si meme texte que le "Nom"' },
        triggers: 'Déclencheurs',
        validators: 'Validateurs',
        visibleIf: 'Visible si ',
        width: 'Largeur'
    },
    //Property Editors
    pe: {
        addNew: 'Ajouter un nouveau',
        addRowText: 'Texte bouton ajouter une ligne',
        apply: 'Appliquer',
        cancel: 'Annuler',
        cellType: 'Type de cellule',
        choicesOrder: 'Sélectionner l\'ordre des choix',
        close: 'Fermer',
        colCount: 'Nombre de colonnes',
        columnEdit: 'Editer la colonne: {0}',
        createtrigger: 'Veuillez créer un déclencheur',
        delete: 'Supprimer',
        edit: 'Editer',
        editProperty: 'Editer la propriété "{0}"',
        empty: '<vide>',
        enterNewValue: 'Veuillez saisir la valeur.',
        expressionHelp: 'Veuillez entrer une expression booléenne. Elle doit retourner Vrai(true) pour garder la question/page visible. Par exemple: {question1} = "valeur1" or ({question2} = 3 and {question3} < 5)',
        fastEntry: 'Ajout rapide',
        formEntry: 'Ajout via formulaire',
        hasOther: 'Has other item',
        imageHeight: 'Hauteur de l\'image',
        imageWidth: 'Largeur de l\'image',
        inputType: 'Type de champ',
        isRequired: 'Est requis ?',
        items: '[ Elements: {0} ]',
        maxRateDescription: 'Description note maximum',
        maxSize: 'Taille maximum du fichier en octets',
        minRateDescription: 'Description note minimum',
        name: 'Nom',
        noquestions: 'Il n\'y a aucune question dans le questionnaire.',
        ok: 'OK',
        optionsCaption: 'Texte par défaut',
        placeHolder: 'PlaceHolder (indice dans le champs)',
        propertyIsEmpty: 'Veuillez entrer une valeur pour la propriété',
        qEditorTitle: 'Editer la question: {0}',
        removeAll: 'Tout supprimer',
        removeRowText: 'Texte bouton supprimer une ligne',
        required: 'Requis ?',
        reset: 'Réinitialiser',
        rowCount: 'Nombre de lignes',
        rows: 'Nombre de lignes',
        showPreview: 'L\'aperçu d\'image est-il affiché ?',
        startWithNewLine: 'Commencer avec une nouvelle ligne ?',
        storeDataAsText: 'Stocker le contenu du fichier dans le résultat JSON sous forme de texte',
        tabs: {
            choices: 'Choix',
            choicesByUrl: 'Choix depuis api web',
            columns: 'Colonnes',
            fileOptions: 'Options',
            general: 'Général',
            html: 'Editeur Html',
            matrixChoices: 'Choix par defaut',
            multipleTextItems: 'Text Inputs',
            rateValues: 'Barème',
            rows: 'Lignes',
            visibleIf: 'Visible Si'
        },
        testService: 'Tester le service',
        text: 'Texte',
        title: 'Titre',
        triggerCompleteText: 'Complete the survey if succeed.',
        triggerIsVariable: 'Ne placez pas la variable dans le résultat du questionnaire.',
        triggerMakePagesVisible: 'Rendre les pages visibles:',
        triggerMakeQuestionsVisible: 'Rendre les questions visibles:',
        triggerNotSet: 'Le déclencheur n\'est pas défini',
        triggerOn: 'On ',
        triggerRunIf: 'Exécuster si',
        triggerSetToName: 'Changer la valeur de: ',
        triggerSetValue: 'à: ',
        value: 'Valeur',
        verbChangePage: 'Changer de page ',
        verbChangeType: 'Changer le type ',
        visible: 'Est visible ?'
    },
    //questionTypes
    qt: {
        checkbox: 'Cases à cocher',
        comment: 'Commentaire',
        dropdown: 'Liste déroulante',
        file: 'Fichier',
        html: 'Html',
        matrix: 'Matice (choix unique)',
        matrixdropdown: 'Matrice (choix multiples)',
        matrixdynamic: 'Matrice (Lignes dynamiques)',
        multipletext: 'champ multilignes',
        radiogroup: 'Boutons radio',
        rating: 'Evaluation',
        text: 'Champ simple'
    },
    survey: {
        addToToolbox: 'Ajouter à la boîte à outils',
        copy: 'Copier',
        deleteQuestion: 'Supprimer la question',
        dropQuestion: 'Déposer votre question ici.'
    }
};
__WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].locales["fr"] = frenchTranslation;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editorLocalization__ = __webpack_require__(2);

var spanishTranslation;
__WEBPACK_IMPORTED_MODULE_0__editorLocalization__["a" /* editorLocalization */].locales["es"] = spanishTranslation;


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__);
/* unused harmony export SurveyDescription */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveysManager; });


var ServiceAPI = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](ServiceAPI, _super);
    function ServiceAPI(baseUrl, accessKey) {
        var _this = _super.call(this) || this;
        _this.baseUrl = baseUrl;
        _this.accessKey = accessKey;
        return _this;
    }
    ServiceAPI.prototype.getActiveSurveys = function (onLoad) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.baseUrl + '/getActive?accessKey=' + this.accessKey);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            var result = xhr.response ? JSON.parse(xhr.response) : null;
            onLoad(xhr.status == 200, result, xhr.response);
        };
        xhr.send();
    };
    ServiceAPI.prototype.createSurvey = function (name, onCreate) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.baseUrl + '/create?accessKey=' + this.accessKey + "&name=" + name);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            var result = xhr.response ? JSON.parse(xhr.response) : null;
            onCreate(xhr.status == 200, result, xhr.response);
        };
        xhr.send();
    };
    ServiceAPI.prototype.saveSurvey = function (id, json, onSave) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', this.baseUrl + '/changeJson?accessKey=' + this.accessKey);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.onload = function () {
            var result = xhr.response ? JSON.parse(xhr.response) : null;
            !!onSave && onSave(xhr.status == 200, result, xhr.response);
        };
        xhr.send(JSON.stringify({ Id: id, Json: json, Text: json }));
    };
    ServiceAPI.prototype.updateSurveyName = function (id, name, onUpdate) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.baseUrl + '/changeName/' + id + '?accessKey=' + this.accessKey + "&name=" + name);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onload = function () {
            var result = xhr.response ? JSON.parse(xhr.response) : null;
            !!onUpdate && onUpdate(xhr.status == 200, result, xhr.response);
        };
        xhr.send();
    };
    return ServiceAPI;
}(__WEBPACK_IMPORTED_MODULE_1_survey_knockout__["dxSurveyService"]));
var SurveyDescription = (function () {
    function SurveyDescription(name, createdAt, id, resultId, postId) {
        if (name === void 0) { name = ko.observable(""); }
        if (createdAt === void 0) { createdAt = new Date(Date.now()).toDateString(); }
        if (id === void 0) { id = ""; }
        if (resultId === void 0) { resultId = ""; }
        if (postId === void 0) { postId = ""; }
        this.name = name;
        this.createdAt = createdAt;
        this.id = id;
        this.resultId = resultId;
        this.postId = postId;
    }
    return SurveyDescription;
}());

var SurveysManager = (function () {
    function SurveysManager(baseUrl, accessKey, editor) {
        var _this = this;
        this.baseUrl = baseUrl;
        this.accessKey = accessKey;
        this.editor = editor;
        this.isEditMode = ko.observable(false);
        this.surveyId = ko.observable();
        this.surveys = ko.observableArray();
        this.currentSurvey = ko.observable();
        this.currentSurveyName = ko.observable("");
        this.isLoading = ko.observable(false);
        this.nameEditorKeypress = function (model, event) {
            if (event.keyCode === 13) {
                _this.edit(model, event);
            }
            else if (event.keyCode === 27) {
                _this.isEditMode(false);
            }
        };
        var hash = window.location.hash;
        if (hash.indexOf("#") === 0) {
            this.surveyId(hash.slice(1));
        }
        this.api = new ServiceAPI(baseUrl + "/api/MySurveys", accessKey);
        editor.isAutoSave = true;
        editor.showState = true;
        editor.saveSurveyFunc = function (saveNo, callback) {
            if (!editor.surveyId && !_this.surveyId()) {
                _this.addHandler(function (success) { return callback(saveNo, success); });
            }
            if (!!editor.surveyId || !!_this.surveyId()) {
                _this.api.saveSurvey(editor.surveyId || _this.surveyId(), editor.text, function (success) { return callback(saveNo, success); });
            }
        };
        this.surveys(this.getSurveys());
        if (!this.surveyId()) {
            this.currentSurvey(this.surveys()[0]);
        }
        else {
            var survey = this.surveys().filter(function (s) { return s.id === _this.surveyId(); })[0];
            if (!!survey) {
                this.currentSurvey(survey);
                this.surveyId(undefined);
            }
            else {
                editor.loadSurvey(this.surveyId());
            }
        }
        var onCurrentSurveyChanged = function (survey) {
            if (!!survey) {
                _this.surveyId(undefined);
                window.location.hash = "#" + survey.id;
                if (editor.surveyId === survey.id)
                    return;
                editor.loadSurvey(survey.id);
                editor.surveyId = survey.id;
                editor.surveyPostId = survey.postId;
            }
            else {
                if (!_this.surveyId()) {
                    editor.surveyId = "";
                    editor.surveyPostId = "";
                    window.location.hash = "";
                    editor.text = "";
                }
            }
        };
        this.currentSurvey.subscribe(onCurrentSurveyChanged);
        onCurrentSurveyChanged(this.currentSurvey());
        var currentSurveyCanBeAttached = ko.observable(false);
        ko.computed(function () {
            var survey = _this.currentSurvey();
            currentSurveyCanBeAttached(false);
            if (!!survey) {
                _this.api.updateSurveyName(survey.id, survey.name.peek(), function (success) {
                    currentSurveyCanBeAttached(success);
                });
            }
        });
        this.toolbarItem = {
            id: 'svd-attach-survey',
            template: 'attach-survey',
            visible: currentSurveyCanBeAttached,
            action: ko.computed(function () { return 'https://dxsurvey.com/Home/AttachSurvey/' + (_this.currentSurvey() && _this.currentSurvey().id); }),
            css: 'link-to-attach',
            innerCss: 'icon-cloud',
            title: 'Attach survey to your SurveyJS service account...'
        };
    }
    SurveysManager.prototype.getSurveys = function () {
        return JSON.parse(window.localStorage.getItem(SurveysManager.StorageKey) || "[]").map(function (item) {
            return new SurveyDescription(ko.observable(item.name), item.createdAt, item.id, item.resultId, item.postId);
        });
    };
    SurveysManager.prototype.setSurveys = function (surveys) {
        window.localStorage.setItem(SurveysManager.StorageKey, ko.toJSON(surveys));
    };
    SurveysManager.prototype.edit = function (model, event) {
        var survey = this.currentSurvey();
        if (!!survey) {
            if (this.isEditMode()) {
                survey.name(this.currentSurveyName());
                this.setSurveys(this.surveys());
                this.api.updateSurveyName(survey.id, survey.name());
                this.isEditMode(false);
            }
            else {
                this.currentSurveyName(survey.name());
                this.isEditMode(true);
                $(event.target).parents(".svd-manage").find("input").focus();
            }
        }
    };
    SurveysManager.prototype.addHandler = function (onAdd) {
        var _this = this;
        this.isLoading(true);
        this.api.createSurvey("NewSurvey", function (success, result, response) {
            var newSurveyDescription = new SurveyDescription(ko.observable(result.Name), result.CreatedAt, result.Id, result.ResultId, result.PostId);
            _this.surveys.push(newSurveyDescription);
            _this.setSurveys(_this.surveys());
            _this.editor.surveyId = result.Id;
            _this.editor.surveyPostId = result.PostId;
            _this.api.saveSurvey(result.Id, _this.editor.text);
            _this.currentSurvey(newSurveyDescription);
            _this.isLoading(false);
            onAdd && onAdd(success, result, response);
        });
    };
    SurveysManager.prototype.add = function () {
        this.addHandler();
    };
    SurveysManager.prototype.remove = function () {
        if (confirm("Do you really want to remove current survey?")) {
            this.surveys.remove(this.currentSurvey());
            this.setSurveys(this.surveys());
            this.currentSurvey(this.surveys()[0]);
        }
    };
    Object.defineProperty(SurveysManager.prototype, "cssEdit", {
        get: function () {
            return this.isEditMode() ? 'icon-saved' : 'icon-edit';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveysManager.prototype, "cssAdd", {
        get: function () {
            return !this.surveyId() ? 'icon-new' : 'icon-fork';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveysManager.prototype, "titleEdit", {
        get: function () {
            return this.isEditMode() ? 'Save survey name' : 'Edit survey name';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveysManager.prototype, "titleAdd", {
        get: function () {
            return !this.surveyId() ? 'Add new survey' : 'Fork this survey';
        },
        enumerable: true,
        configurable: true
    });
    return SurveysManager;
}());

SurveysManager.StorageKey = "mySurveys";


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyItemsEditor__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyItemValuesEditor; });





var SurveyPropertyItemValuesEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyItemValuesEditor, _super);
    function SurveyPropertyItemValuesEditor() {
        var _this = _super.call(this) || this;
        var self = _this;
        _this.koActiveView = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]("form");
        _this.koItemsText = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]("");
        _this.koActiveView.subscribe(function (newValue) {
            if (newValue == "form")
                self.updateItems(self.koItemsText());
            else
                self.koItemsText(self.getItemsText());
        });
        _this.changeToTextViewClick = function () { self.koActiveView("text"); };
        _this.changeToFormViewClick = function () { self.koActiveView("form"); };
        return _this;
    }
    Object.defineProperty(SurveyPropertyItemValuesEditor.prototype, "editorType", {
        get: function () { return "itemvalues"; },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyItemValuesEditor.prototype.hasError = function () {
        var result = false;
        for (var i = 0; i < this.koItems().length; i++) {
            var item = this.koItems()[i];
            item.koHasError(this.isValueEmpty(item.koValue()));
            result = result || item.koHasError();
        }
        return result;
    };
    SurveyPropertyItemValuesEditor.prototype.createNewEditorItem = function () {
        var itemValue = new __WEBPACK_IMPORTED_MODULE_4_survey_knockout__["ItemValue"](null);
        if (this.options) {
            this.options.onItemValueAddedCallback(this.editablePropertyName, itemValue);
        }
        return this.createEditorItem(itemValue);
    };
    SurveyPropertyItemValuesEditor.prototype.createEditorItem = function (item) {
        var itemValue = new __WEBPACK_IMPORTED_MODULE_4_survey_knockout__["ItemValue"](null);
        if (itemValue["setData"]) {
            itemValue["setData"](item);
        }
        else {
            if (item.value) {
                itemValue.value = item.value;
                if (item.text)
                    itemValue.text = item.text;
            }
            else {
                itemValue.value = item;
            }
        }
        var itemText = "";
        if (itemValue["locText"]) {
            itemText = itemValue["locText"]["getLocaleText"](this.locale);
        }
        if (!itemText && itemValue.hasText) {
            itemText = itemValue.text;
        }
        return { item: item, koValue: __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](itemValue.value), koText: __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](itemText), koHasError: __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false) };
    };
    SurveyPropertyItemValuesEditor.prototype.createItemFromEditorItem = function (editorItem) {
        var alwaySaveTextInPropertyEditors = this.options && this.options.alwaySaveTextInPropertyEditors;
        var text = editorItem.koText();
        if (!alwaySaveTextInPropertyEditors && editorItem.koText() == editorItem.koValue()) {
            text = null;
        }
        var itemValue = new __WEBPACK_IMPORTED_MODULE_4_survey_knockout__["ItemValue"](null);
        if (editorItem.item) {
            itemValue.setData(editorItem.item);
        }
        itemValue.value = editorItem.koValue();
        itemValue.locText.setLocaleText(this.locale, text);
        return itemValue;
    };
    SurveyPropertyItemValuesEditor.prototype.onBeforeApply = function () {
        if (this.koActiveView() != "form") {
            this.updateItems(this.koItemsText());
        }
        _super.prototype.onBeforeApply.call(this);
    };
    SurveyPropertyItemValuesEditor.prototype.updateItems = function (text) {
        var items = [];
        if (text) {
            var texts = text.split("\n");
            for (var i = 0; i < texts.length; i++) {
                if (!texts[i])
                    continue;
                var valueItem = new __WEBPACK_IMPORTED_MODULE_4_survey_knockout__["ItemValue"](texts[i]);
                var item = { value: valueItem.value, text: (valueItem.hasText ? valueItem.text : "") };
                items.push(item);
            }
        }
        this.koItems(this.getItemsFromValue(items));
    };
    SurveyPropertyItemValuesEditor.prototype.getItemsText = function () {
        var text = [];
        var items = this.koItems();
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (this.isValueEmpty(item.koValue()))
                continue;
            var itemText = item.koValue();
            if (item.koText())
                itemText += __WEBPACK_IMPORTED_MODULE_4_survey_knockout__["ItemValue"].Separator + item.koText();
            text.push(itemText);
        }
        return text.join("\n");
    };
    SurveyPropertyItemValuesEditor.prototype.isValueEmpty = function (val) {
        return !val;
    };
    return SurveyPropertyItemValuesEditor;
}(__WEBPACK_IMPORTED_MODULE_2__propertyItemsEditor__["a" /* SurveyPropertyItemsEditor */]));

__WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__["a" /* SurveyPropertyEditorBase */].registerEditor("itemvalues", function () { return new SurveyPropertyItemValuesEditor(); });


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyEditorBase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__questionEditors_questionEditor__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__propertyNestedPropertyEditor__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyDropdownColumnsEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SurveyPropertyMatrixDropdownColumnsItem; });







var SurveyPropertyDropdownColumnsEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyDropdownColumnsEditor, _super);
    function SurveyPropertyDropdownColumnsEditor() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SurveyPropertyDropdownColumnsEditor.prototype, "editorType", {
        get: function () { return "matrixdropdowncolumns"; },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyDropdownColumnsEditor.prototype.createNewEditorItem = function () {
        var newColumn = new __WEBPACK_IMPORTED_MODULE_6_survey_knockout__["MatrixDropdownColumn"]("");
        if (this.options) {
            this.options.onMatrixDropdownColumnAddedCallback(newColumn);
        }
        //newColumn.colOwner = TODO set colOwner.
        return new SurveyPropertyMatrixDropdownColumnsItem(newColumn, this.options);
    };
    SurveyPropertyDropdownColumnsEditor.prototype.createEditorItem = function (item) { return new SurveyPropertyMatrixDropdownColumnsItem(item, this.options); };
    SurveyPropertyDropdownColumnsEditor.prototype.createItemFromEditorItem = function (editorItem) { return editorItem.column; };
    return SurveyPropertyDropdownColumnsEditor;
}(__WEBPACK_IMPORTED_MODULE_5__propertyNestedPropertyEditor__["a" /* SurveyNestedPropertyEditor */]));

var SurveyPropertyMatrixDropdownColumnsItem = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyMatrixDropdownColumnsItem, _super);
    function SurveyPropertyMatrixDropdownColumnsItem(column, options) {
        if (options === void 0) { options = null; }
        var _this = _super.call(this) || this;
        _this.column = column;
        _this.options = options;
        _this.cellTypeChoices = _this.getPropertyChoices("cellType");
        _this.koName = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](column.name);
        _this.koCellType = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](column.cellType);
        _this.koTitle = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](column.name === column.title ? "" : column.title);
        _this.koIsRequired = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](_this.column.isRequired);
        _this.koHasError = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](false);
        var self = _this;
        _this.koCanEdit = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () { return self.koCellType() != "default"; });
        _this.koEditorName = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () { return __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.columnEdit")["format"](self.koName()); });
        return _this;
    }
    SurveyPropertyMatrixDropdownColumnsItem.prototype.createSurveyQuestionEditor = function () { return new __WEBPACK_IMPORTED_MODULE_3__questionEditors_questionEditor__["b" /* SurveyQuestionEditor */](this.column, null, "matrixdropdowncolumn@" + this.koCellType(), this.options); };
    SurveyPropertyMatrixDropdownColumnsItem.prototype.hasError = function () {
        if (_super.prototype.hasError.call(this))
            return true;
        this.koHasError(!this.koName());
        return this.koHasError();
    };
    SurveyPropertyMatrixDropdownColumnsItem.prototype.apply = function () {
        _super.prototype.apply.call(this);
        this.column.name = this.koName();
        this.column.title = this.koTitle();
        this.column.cellType = this.koCellType();
        this.column.isRequired = this.koIsRequired();
    };
    SurveyPropertyMatrixDropdownColumnsItem.prototype.getPropertyChoices = function (propetyName) {
        var properties = __WEBPACK_IMPORTED_MODULE_6_survey_knockout__["JsonObject"].metaData.getProperties("matrixdropdowncolumn");
        for (var i = 0; i < properties.length; i++) {
            if (properties[i].name == propetyName)
                return properties[i].choices;
        }
        return [];
    };
    return SurveyPropertyMatrixDropdownColumnsItem;
}(__WEBPACK_IMPORTED_MODULE_5__propertyNestedPropertyEditor__["b" /* SurveyNestedPropertyEditorItem */]));

__WEBPACK_IMPORTED_MODULE_2__propertyEditorBase__["a" /* SurveyPropertyEditorBase */].registerEditor("matrixdropdowncolumns", function () { return new SurveyPropertyDropdownColumnsEditor(); });


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyModalEditor__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyResultfullEditor; });






var SurveyPropertyResultfullEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyResultfullEditor, _super);
    function SurveyPropertyResultfullEditor() {
        var _this = _super.call(this) || this;
        _this.koUrl = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        _this.koPath = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        _this.koValueName = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        _this.koTitleName = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        _this.createSurvey();
        var self = _this;
        _this.koUrl.subscribe(function (newValue) { self.question.choicesByUrl.url = newValue; self.run(); });
        _this.koPath.subscribe(function (newValue) { self.question.choicesByUrl.path = newValue; self.run(); });
        _this.koValueName.subscribe(function (newValue) { self.question.choicesByUrl.valueName = newValue; self.run(); });
        _this.koTitleName.subscribe(function (newValue) { self.question.choicesByUrl.titleName = newValue; self.run(); });
        return _this;
    }
    Object.defineProperty(SurveyPropertyResultfullEditor.prototype, "editorType", {
        get: function () { return "restfull"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyPropertyResultfullEditor.prototype, "restfullValue", {
        get: function () { return this.value; },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyResultfullEditor.prototype.getValueText = function (value) {
        if (!value || !value.url)
            return __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.empty");
        var str = value.url;
        if (str.length > 20) {
            str = str.substr(0, 20) + "...";
        }
        return str;
    };
    SurveyPropertyResultfullEditor.prototype.onValueChanged = function () {
        var val = this.restfullValue;
        this.koUrl(val ? val.url : "");
        this.koPath(val ? val.path : "");
        this.koValueName(val ? val.valueName : "");
        this.koTitleName(val ? val.titleName : "");
    };
    SurveyPropertyResultfullEditor.prototype.onBeforeApply = function () {
        var val = new __WEBPACK_IMPORTED_MODULE_5_survey_knockout__["ChoicesRestfull"]();
        val.url = this.koUrl();
        val.path = this.koPath();
        val.valueName = this.koValueName();
        val.titleName = this.koTitleName();
        this.setValueCore(val);
    };
    SurveyPropertyResultfullEditor.prototype.run = function () {
        this.question.choicesByUrl.run();
    };
    SurveyPropertyResultfullEditor.prototype.createSurvey = function () {
        this.survey = new __WEBPACK_IMPORTED_MODULE_5_survey_knockout__["Survey"]();
        this.survey.showNavigationButtons = false;
        this.survey.showQuestionNumbers = "off";
        var page = this.survey.addNewPage("page1");
        this.question = page.addNewQuestion("dropdown", "q1");
        this.question.title = __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.testService");
        this.question.choices = [];
    };
    return SurveyPropertyResultfullEditor;
}(__WEBPACK_IMPORTED_MODULE_2__propertyModalEditor__["a" /* SurveyPropertyModalEditor */]));

__WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__["a" /* SurveyPropertyEditorBase */].registerEditor("restfull", function () { return new SurveyPropertyResultfullEditor(); });


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__propertyEditorBase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__surveyHelper__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questionEditors_questionEditor__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__propertyNestedPropertyEditor__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_survey_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyTextItemsEditor; });
/* unused harmony export SurveyPropertyTextItemsItem */








var SurveyPropertyTextItemsEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyTextItemsEditor, _super);
    function SurveyPropertyTextItemsEditor() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SurveyPropertyTextItemsEditor.prototype, "editorType", {
        get: function () { return "textitems"; },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyTextItemsEditor.prototype.createNewEditorItem = function () {
        var newItem = new __WEBPACK_IMPORTED_MODULE_6_survey_knockout__["MultipleTextItem"](this.getNewName());
        //newColumn.colOwner = TODO set colOwner.
        return new SurveyPropertyTextItemsItem(newItem);
    };
    SurveyPropertyTextItemsEditor.prototype.createEditorItem = function (item) { return new SurveyPropertyTextItemsItem(item); };
    SurveyPropertyTextItemsEditor.prototype.createItemFromEditorItem = function (editorItem) { return editorItem.item; };
    SurveyPropertyTextItemsEditor.prototype.getNewName = function () {
        var objs = [];
        var items = this.koItems();
        for (var i = 0; i < items.length; i++) {
            objs.push({ name: items[i].koName() });
        }
        return __WEBPACK_IMPORTED_MODULE_2__surveyHelper__["b" /* SurveyHelper */].getNewName(objs, "text");
    };
    return SurveyPropertyTextItemsEditor;
}(__WEBPACK_IMPORTED_MODULE_5__propertyNestedPropertyEditor__["a" /* SurveyNestedPropertyEditor */]));

var SurveyPropertyTextItemsItem = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyTextItemsItem, _super);
    function SurveyPropertyTextItemsItem(item) {
        var _this = _super.call(this) || this;
        _this.item = item;
        _this.koName = __WEBPACK_IMPORTED_MODULE_7_knockout__["observable"](item.name);
        _this.koTitle = __WEBPACK_IMPORTED_MODULE_7_knockout__["observable"](item.name === item.title ? "" : item.title);
        _this.koIsRequired = __WEBPACK_IMPORTED_MODULE_7_knockout__["observable"](_this.item.isRequired);
        _this.koHasError = __WEBPACK_IMPORTED_MODULE_7_knockout__["observable"](false);
        var self = _this;
        _this.koEditorName = __WEBPACK_IMPORTED_MODULE_7_knockout__["computed"](function () { return __WEBPACK_IMPORTED_MODULE_3__editorLocalization__["a" /* editorLocalization */].getString("pe.itemEdit")["format"](self.koName()); });
        return _this;
    }
    SurveyPropertyTextItemsItem.prototype.createSurveyQuestionEditor = function () { return new __WEBPACK_IMPORTED_MODULE_4__questionEditors_questionEditor__["b" /* SurveyQuestionEditor */](this.item, null, "multipletextitem"); };
    SurveyPropertyTextItemsItem.prototype.hasError = function () {
        if (_super.prototype.hasError.call(this))
            return true;
        this.koHasError(!this.koName());
        return this.koHasError();
    };
    SurveyPropertyTextItemsItem.prototype.apply = function () {
        _super.prototype.apply.call(this);
        this.item.name = this.koName();
        this.item.title = this.koTitle();
        this.item.isRequired = this.koIsRequired();
    };
    return SurveyPropertyTextItemsItem;
}(__WEBPACK_IMPORTED_MODULE_5__propertyNestedPropertyEditor__["b" /* SurveyNestedPropertyEditorItem */]));

__WEBPACK_IMPORTED_MODULE_1__propertyEditorBase__["a" /* SurveyPropertyEditorBase */].registerEditor("textitems", function () { return new SurveyPropertyTextItemsEditor(); });


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyItemsEditor__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editorLocalization__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyTriggersEditor; });
/* unused harmony export SurveyPropertyTrigger */
/* unused harmony export SurveyPropertyVisibleTrigger */
/* unused harmony export SurveyPropertySetValueTrigger */
/* unused harmony export SurveyPropertyTriggerObjects */






var SurveyPropertyTriggersEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyTriggersEditor, _super);
    function SurveyPropertyTriggersEditor() {
        var _this = _super.call(this) || this;
        _this.availableTriggers = [];
        _this.triggerClasses = [];
        var self = _this;
        _this.onDeleteClick = function () { self.koItems.remove(self.koSelected()); };
        _this.onAddClick = function (triggerType) { self.addItem(triggerType); };
        _this.koSelected = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](null);
        _this.koPages = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        _this.koQuestions = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"]();
        _this.triggerClasses = __WEBPACK_IMPORTED_MODULE_5_survey_knockout__["JsonObject"].metaData.getChildrenClasses("surveytrigger", true);
        _this.availableTriggers = _this.getAvailableTriggers();
        return _this;
    }
    Object.defineProperty(SurveyPropertyTriggersEditor.prototype, "editorType", {
        get: function () { return "triggers"; },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyTriggersEditor.prototype.onValueChanged = function () {
        if (this.object) {
            this.koPages(this.getNames(this.object.pages));
            this.koQuestions(this.getNames(this.object.getAllQuestions()));
        }
        _super.prototype.onValueChanged.call(this);
        if (this.koSelected) {
            this.koSelected(this.koItems().length > 0 ? this.koItems()[0] : null);
        }
    };
    SurveyPropertyTriggersEditor.prototype.addItem = function (triggerType) {
        var trigger = __WEBPACK_IMPORTED_MODULE_5_survey_knockout__["JsonObject"].metaData.createClass(triggerType);
        var triggerItem = this.createPropertyTrigger(trigger);
        this.koItems.push(triggerItem);
        this.koSelected(triggerItem);
    };
    SurveyPropertyTriggersEditor.prototype.createEditorItem = function (item) {
        var jsonObj = new __WEBPACK_IMPORTED_MODULE_5_survey_knockout__["JsonObject"]();
        var trigger = __WEBPACK_IMPORTED_MODULE_5_survey_knockout__["JsonObject"].metaData.createClass(item.getType());
        jsonObj.toObject(item, trigger);
        return this.createPropertyTrigger(trigger);
    };
    SurveyPropertyTriggersEditor.prototype.createItemFromEditorItem = function (editorItem) {
        var editorTrigger = editorItem;
        return editorTrigger.createTrigger();
    };
    SurveyPropertyTriggersEditor.prototype.getAvailableTriggers = function () {
        var result = [];
        for (var i = 0; i < this.triggerClasses.length; i++) {
            result.push(this.triggerClasses[i].name);
        }
        return result;
    };
    SurveyPropertyTriggersEditor.prototype.getNames = function (items) {
        var names = [];
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item["name"]) {
                names.push(item["name"]);
            }
        }
        return names;
    };
    SurveyPropertyTriggersEditor.prototype.createPropertyTrigger = function (trigger) {
        var triggerItem = null;
        if (trigger.getType() == "visibletrigger") {
            triggerItem = new SurveyPropertyVisibleTrigger(trigger, this.koPages, this.koQuestions);
        }
        if (trigger.getType() == "setvaluetrigger") {
            triggerItem = new SurveyPropertySetValueTrigger(trigger, this.koQuestions);
        }
        if (!triggerItem) {
            triggerItem = new SurveyPropertyTrigger(trigger);
        }
        return triggerItem;
    };
    return SurveyPropertyTriggersEditor;
}(__WEBPACK_IMPORTED_MODULE_2__propertyItemsEditor__["a" /* SurveyPropertyItemsEditor */]));

var SurveyPropertyTrigger = (function () {
    function SurveyPropertyTrigger(trigger) {
        this.trigger = trigger;
        this.operators = ["empty", "notempty", "equal", "notequal", "contains", "notcontains", "greater", "less", "greaterorequal", "lessorequal"];
        this.availableOperators = [];
        this.createOperators();
        this.triggerType = trigger.getType();
        this.koType = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](this.triggerType);
        this.koName = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](trigger.name);
        this.koOperator = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](trigger.operator);
        this.koValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](trigger.value);
        var self = this;
        this.koRequireValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () { return self.koOperator() != "empty" && self.koOperator() != "notempty"; });
        this.koIsValid = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () { if (self.koName() && (!self.koRequireValue() || self.koValue()))
            return true; return false; });
        this.koText = __WEBPACK_IMPORTED_MODULE_1_knockout__["computed"](function () { self.koName(); self.koOperator(); self.koValue(); return self.getText(); });
    }
    SurveyPropertyTrigger.prototype.createTrigger = function () {
        var trigger = __WEBPACK_IMPORTED_MODULE_5_survey_knockout__["JsonObject"].metaData.createClass(this.triggerType);
        trigger.name = this.koName();
        trigger.operator = this.koOperator();
        trigger.value = this.koValue();
        return trigger;
    };
    SurveyPropertyTrigger.prototype.createOperators = function () {
        for (var i = 0; i < this.operators.length; i++) {
            var name = this.operators[i];
            this.availableOperators.push({ name: name, text: __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("op." + name) });
        }
    };
    SurveyPropertyTrigger.prototype.getText = function () {
        if (!this.koIsValid())
            return __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.triggerNotSet");
        return __WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.triggerRunIf") + " '" + this.koName() + "' " + this.getOperatorText() + this.getValueText();
    };
    SurveyPropertyTrigger.prototype.getOperatorText = function () {
        var op = this.koOperator();
        for (var i = 0; i < this.availableOperators.length; i++) {
            if (this.availableOperators[i].name == op)
                return this.availableOperators[i].text;
        }
        return op;
    };
    SurveyPropertyTrigger.prototype.getValueText = function () {
        if (!this.koRequireValue())
            return "";
        return " " + this.koValue();
    };
    return SurveyPropertyTrigger;
}());

var SurveyPropertyVisibleTrigger = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyVisibleTrigger, _super);
    function SurveyPropertyVisibleTrigger(trigger, koPages, koQuestions) {
        var _this = _super.call(this, trigger) || this;
        _this.trigger = trigger;
        _this.pages = new SurveyPropertyTriggerObjects(__WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.triggerMakePagesVisible"), koPages(), trigger.pages);
        _this.questions = new SurveyPropertyTriggerObjects(__WEBPACK_IMPORTED_MODULE_4__editorLocalization__["a" /* editorLocalization */].getString("pe.triggerMakeQuestionsVisible"), koQuestions(), trigger.questions);
        return _this;
    }
    SurveyPropertyVisibleTrigger.prototype.createTrigger = function () {
        var trigger = _super.prototype.createTrigger.call(this);
        trigger.pages = this.pages.koChoosen();
        trigger.questions = this.questions.koChoosen();
        return trigger;
    };
    return SurveyPropertyVisibleTrigger;
}(SurveyPropertyTrigger));

var SurveyPropertySetValueTrigger = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertySetValueTrigger, _super);
    function SurveyPropertySetValueTrigger(trigger, koQuestions) {
        var _this = _super.call(this, trigger) || this;
        _this.trigger = trigger;
        _this.koQuestions = koQuestions;
        _this.kosetToName = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](trigger.setToName);
        _this.kosetValue = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](trigger.setValue);
        _this.koisVariable = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](trigger.isVariable);
        return _this;
    }
    SurveyPropertySetValueTrigger.prototype.createTrigger = function () {
        var trigger = _super.prototype.createTrigger.call(this);
        trigger.setToName = this.kosetToName();
        trigger.setValue = this.kosetValue();
        trigger.isVariable = this.koisVariable();
        return trigger;
    };
    return SurveyPropertySetValueTrigger;
}(SurveyPropertyTrigger));

var SurveyPropertyTriggerObjects = (function () {
    function SurveyPropertyTriggerObjects(title, allObjects, choosenObjects) {
        this.title = title;
        this.koChoosen = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"](choosenObjects);
        var array = [];
        for (var i = 0; i < allObjects.length; i++) {
            var item = allObjects[i];
            if (choosenObjects.indexOf(item) < 0) {
                array.push(item);
            }
        }
        this.koObjects = __WEBPACK_IMPORTED_MODULE_1_knockout__["observableArray"](array);
        this.koSelected = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        this.koChoosenSelected = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"]();
        var self = this;
        this.onDeleteClick = function () { self.deleteItem(); };
        this.onAddClick = function () { self.addItem(); };
    }
    SurveyPropertyTriggerObjects.prototype.deleteItem = function () {
        this.changeItems(this.koChoosenSelected(), this.koChoosen, this.koObjects);
    };
    SurveyPropertyTriggerObjects.prototype.addItem = function () {
        this.changeItems(this.koSelected(), this.koObjects, this.koChoosen);
    };
    SurveyPropertyTriggerObjects.prototype.changeItems = function (item, removedFrom, addTo) {
        removedFrom.remove(item);
        addTo.push(item);
        removedFrom.sort();
        addTo.sort();
    };
    return SurveyPropertyTriggerObjects;
}());

__WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__["a" /* SurveyPropertyEditorBase */].registerEditor("triggers", function () { return new SurveyPropertyTriggersEditor(); });


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__propertyItemsEditor__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objectEditor__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_survey_knockout__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_survey_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_survey_knockout__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPropertyValidatorsEditor; });
/* unused harmony export SurveyPropertyValidatorItem */






var SurveyPropertyValidatorsEditor = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](SurveyPropertyValidatorsEditor, _super);
    function SurveyPropertyValidatorsEditor() {
        var _this = _super.call(this) || this;
        _this.availableValidators = [];
        _this.validatorClasses = [];
        var self = _this;
        _this.selectedObjectEditor = new __WEBPACK_IMPORTED_MODULE_4__objectEditor__["a" /* SurveyObjectEditor */]();
        _this.selectedObjectEditor.onPropertyValueChanged.add(function (sender, options) {
            self.onPropertyValueChanged(options.property, options.object, options.newValue);
        });
        _this.koSelected = __WEBPACK_IMPORTED_MODULE_1_knockout__["observable"](null);
        _this.koSelected.subscribe(function (newValue) { self.selectedObjectEditor.selectedObject = newValue != null ? newValue.validator : null; });
        _this.validatorClasses = __WEBPACK_IMPORTED_MODULE_5_survey_knockout__["JsonObject"].metaData.getChildrenClasses("surveyvalidator", true);
        _this.availableValidators = _this.getAvailableValidators();
        _this.onDeleteClick = function () { self.koItems.remove(self.koSelected()); };
        _this.onAddClick = function (validatorType) { self.addItem(validatorType); };
        return _this;
    }
    Object.defineProperty(SurveyPropertyValidatorsEditor.prototype, "editorType", {
        get: function () { return "validators"; },
        enumerable: true,
        configurable: true
    });
    SurveyPropertyValidatorsEditor.prototype.onValueChanged = function () {
        _super.prototype.onValueChanged.call(this);
        if (this.koSelected) {
            this.koSelected(this.koItems().length > 0 ? this.koItems()[0] : null);
        }
    };
    SurveyPropertyValidatorsEditor.prototype.createEditorItem = function (item) {
        var jsonObj = new __WEBPACK_IMPORTED_MODULE_5_survey_knockout__["JsonObject"]();
        var validator = __WEBPACK_IMPORTED_MODULE_5_survey_knockout__["JsonObject"].metaData.createClass(item.getType());
        jsonObj.toObject(item, validator);
        return new SurveyPropertyValidatorItem(validator);
    };
    SurveyPropertyValidatorsEditor.prototype.createItemFromEditorItem = function (editorItem) {
        var item = editorItem;
        return item.validator;
    };
    SurveyPropertyValidatorsEditor.prototype.addItem = function (validatorType) {
        var newValidator = new SurveyPropertyValidatorItem(__WEBPACK_IMPORTED_MODULE_5_survey_knockout__["JsonObject"].metaData.createClass(validatorType));
        this.koItems.push(newValidator);
        this.koSelected(newValidator);
    };
    SurveyPropertyValidatorsEditor.prototype.getAvailableValidators = function () {
        var result = [];
        for (var i = 0; i < this.validatorClasses.length; i++) {
            result.push(this.validatorClasses[i].name);
        }
        return result;
    };
    SurveyPropertyValidatorsEditor.prototype.onPropertyValueChanged = function (property, obj, newValue) {
        if (this.koSelected() == null)
            return;
        this.koSelected().validator[property.name] = newValue;
    };
    return SurveyPropertyValidatorsEditor;
}(__WEBPACK_IMPORTED_MODULE_2__propertyItemsEditor__["a" /* SurveyPropertyItemsEditor */]));

var SurveyPropertyValidatorItem = (function () {
    function SurveyPropertyValidatorItem(validator) {
        this.validator = validator;
        this.text = validator.getType();
    }
    return SurveyPropertyValidatorItem;
}());

__WEBPACK_IMPORTED_MODULE_3__propertyEditorBase__["a" /* SurveyPropertyEditorBase */].registerEditor("validators", function () { return new SurveyPropertyValidatorsEditor(); });


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_37__;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "<div class=\"svd_container\">\n    <ul class=\"navbar-default container-fluid nav nav-tabs svd_menu\">\n        <li data-bind=\"css: {active: koViewType() == 'designer'}\"><a href=\"#\" data-bind=\"click:selectDesignerClick, text: $root.getLocString('ed.designer')\"></a></li>\n        <li data-bind=\"visible: showJSONEditorTab, css: {active: koViewType() == 'editor'}\"><a href=\"#\" data-bind=\"click:selectEditorClick, text: $root.getLocString('ed.jsonEditor')\"></a></li>\n        <li data-bind=\"visible: showTestSurveyTab, css: {active: koViewType() == 'test'}\"><a href=\"#\" data-bind=\"click:selectTestClick, text: $root.getLocString('ed.testSurvey')\"></a></li>\n        <li data-bind=\"visible: showEmbededSurveyTab, css: {active: koViewType() == 'embed'}\"><a href=\"#\" data-bind=\"click:selectEmbedClick, text: $root.getLocString('ed.embedSurvey')\"></a></li>\n\n        <!-- ko foreach: toolbarItems -->\n        <li class=\"svd_actions\" data-bind=\"css: $data.css, visible: visible, attr: { id: id }\">\n            <!-- ko template: { name: $data.template || 'svd-toolbar-button', data: $data.data || $data } -->\n            <!-- /ko -->\n        </li>\n        <!-- /ko -->\n    </ul>\n\n    <div class=\"panel svd_content\">\n        <div class=\"row svd_survey_designer\"  data-bind=\"visible: koViewType() == 'designer'\">\n            <div class=\"col-lg-2 col-md-2 col-sm-1 col-xs-1 panel panel-default svd_toolbox\">\n                <div class=\"btn-group-vertical\" style=\"width:100%;padding-right:2px\">\n                    <!-- ko foreach: toolbox.koItems -->\n                    <div class=\"btn btn-default\" style=\"text-align:left; margin:1px;min-height:37px; width:100%\" draggable=\"true\" data-bind=\"click: $root.clickToolboxItem, event:{dragstart: function(el, e) { $root.draggingToolboxItem($data, e); return true;}, dragend: function(el, e) { $root.dragEnd(); }}\">\n                        <span data-bind=\"css: iconName, attr: {title: title}\"></span>\n                        <span class=\"svd_toolbox_item_text hidden-sm hidden-xs\" data-bind=\"text:title\"></span>\n                    </div>\n                    <!-- /ko  -->\n                </div>\n            </div>\n            <div class=\"col-lg-7 col-md-7 col-sm-8 col-xs-11 svd_editors\">\n                <div class=\"svd_pages_editor\" data-bind=\"template: { name: 'pageeditor', data: pagesEditor }\"></div>\n                <div class=\"svd_questions_editor\" id=\"scrollableDiv\" data-bind=\"style: {height: koDesignerHeight}\">\n                    <div id=\"surveyjs\"></div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-sm-3 hidden-xs panel panel-default svd_properties\">\n                <div class=\"panel-heading input-group\">\n                    <div class=\"custom-select\">\n                        <select id=\"objectSelector\" class=\"form-control\" data-bind=\"options: koObjects, optionsText: 'text', value: koSelectedObject\"></select>\n                    </div>\n                    <div class=\"input-group-btn\">\n                        <button class=\"btn btn-default\" type=\"button\" data-bind=\"enable: koCanDeleteObject, click: deleteCurrentObject, attr: { title: $root.getLocString('ed.delSelObject')}\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n                    </div>\n                </div>\n                <div class=\"svd_object_editor\" data-bind=\"style: {height: koDesignerHeight}\">\n                    <div data-bind=\"template: { name: 'objecteditor', data: selectedObjectEditor }\"></div>\n                </div>\n                <div class=\"panel-footer\" data-bind=\"visible:surveyVerbs.koHasVerbs\">\n                    <div data-bind=\"template: { name: 'objectverbs', data: surveyVerbs }\"></div>\n                </div>\n            </div>\n        </div>\n\n        <div data-bind=\"visible: koViewType() == 'editor'\">\n            <div data-bind=\"template: { name: 'jsoneditor', data: jsonEditor }\"></div>\n        </div>\n\n        <div id=\"surveyjsTest\" data-bind=\"visible: koViewType() == 'test', style: {width: koTestSurveyWidth}\">\n            <div id=\"surveyjsExample\"></div>\n            <div id=\"surveyjsExampleResults\"></div>\n            <button id=\"surveyjsExamplereRun\" data-bind=\"click:selectTestClick, text: $root.getLocString('ed.testSurveyAgain')\" style=\"display:none\">Test Again</button>\n        </div>\n\n        <div id=\"surveyjsEmbed\" data-bind=\"visible: koViewType() == 'embed'\">\n            <div data-bind=\"template: { name: 'surveyembeding', data: surveyEmbeding }\"></div>\n        </div>\n    </div>\n    <div data-bind=\"template: { name: 'questioneditor', data: questionEditorWindow }\"></div>\n</div>";

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"jsoneditor\">\n    <div data-bind=\"visible: !hasAceEditor\">\n        <textarea class=\"svd_json_editor_area\" data-bind=\"textInput:koText\"></textarea>\n        <!-- ko foreach: koErrors -->\n        <div>\n            <span>Error: </span><span data-bind=\"text: text\"></span>\n        </div>\n        <!-- /ko  -->\n    </div>\n    <div id=\"surveyjsJSONEditor\" class=\"svd_json_editor\"></div>\n</script>";

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"surveys-manage\">\n    <div class=\"svd-manage\">\n        <div class=\"svd-manage-mask\" data-bind=\"visible: isLoading\"></div>\n        <div class=\"svd-manage-control\">\n            <select class=\"svd-manage-select\" data-bind=\"visible: !isEditMode(), options: surveys,\n                        optionsText: 'name',\n                        value: currentSurvey,\n                        optionsCaption: 'Choose survey to edit or start editing and survey will be saved automatically...'\"></select>\n            <input type=\"text\" class=\"svd-manage-name\" data-bind=\"visible: isEditMode, value: currentSurveyName, event: { keyup: nameEditorKeypress }\"/>\n        </div>\n        <div class=\"svd-manage-buttons\">\n            <span class=\"icon\" data-bind=\"visible: currentSurvey, click: edit, css: cssEdit, attr: { title: titleEdit }\"></span>\n            <span class=\"icon\" data-bind=\"visible: !isEditMode(), click: add, css: cssAdd, attr: { title: titleAdd }\"></span>\n            <span class=\"icon icon-delete\" title=\"Delete current survey\" data-bind=\"visible: !isEditMode() && !surveyId() && currentSurvey(), click:remove\"></span>\n        </div>\n    </div>\n</script>\n<script type=\"text/html\" id=\"attach-survey\">\n    <a target=\"_blank\" href=\"#\" data-bind=\"attr: { href: action, title: title }\"><span class=\"icon\" data-bind=\"css: innerCss\"></span><span data-bind=\"text: title\"></span></a>\n</script>\n";

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"objecteditor\">\n    <table class=\"table svd_table-nowrap\">\n        <tbody data-bind=\"foreach: koProperties\">\n            <tr data-bind=\"click: $parent.changeActiveProperty($data), css: {'active': $parent.koActiveProperty() == $data}\">\n                <td data-bind=\"text: displayName, attr: {title: title}\" width=\"50%\"></td>\n                <td width=\"50%\">\n                    <span data-bind=\"text: koText, visible: $parent.koActiveProperty() != $data || disabled, attr: {title: koText}\" style=\"text-overflow:ellipsis;white-space:nowrap;overflow:hidden\"></span>\n                    <div data-bind=\"visible: $parent.koActiveProperty() == $data && !disabled\">\n                        <!-- ko template: { name: 'propertyeditor-' + editorType, data: $data } -->\n                        <!-- /ko -->\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n</script>";

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"objectverbs\">\n    <!-- ko foreach: koVerbs -->\n        <div class=\"row\">\n            <div class=\"input-group\">\n                <span  class=\"input-group-addon\" data-bind=\"text:text\"></span>\n                <select class=\"form-control\" data-bind=\"options: koItems, optionsText: 'text', optionsValue:'value', value: koSelectedItem\"></select>\n            </div>\n        </div>\n    <!-- /ko  -->\n</script>";

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"pageeditor\">\n    <ul class=\"nav nav-tabs\" data-bind=\"tabs:true\">\n        <!-- ko foreach: koPages -->\n        <li data-bind=\"css: {active: koSelected()},event:{\n           keydown:function(el, e){ $parent.keyDown(el, e); },\n           dragstart:function(el, e){ $parent.dragStart(el); return true; },\n           dragover:function(el, e){ $parent.dragOver(el);},\n           dragend:function(el, e){ $parent.dragEnd();},\n           drop:function(el, e){ $parent.dragDrop(el);}\n         }\"> \n            <a class=\"svd_page_nav\" href=\"#\" data-bind=\"click:$parent.selectPageClick\">\n                <span data-bind=\"text: title\"></span>\n            </a>\n        </li>\n        <!-- /ko  -->\n        <li><button class=\"btn btn-default svd_add_new_page_btn\" data-bind=\"click:addNewPageClick, attr: {title:  $root.getLocString('ed.addNewPage')}\" ><span class=\"glyphicon glyphicon-plus\"></span></button></li>\n    </ul>\n</script>";

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-boolean\">\n    <input class=\"form-control\" type=\"checkbox\" data-bind=\"checked: koValue\" />\n</script>";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-dropdown\">\n    <div class=\"custom-select\">\n        <select class=\"form-control\" data-bind=\"value: koValue, options: choices\"  style=\"width:100%\"></select>\n    </div>\n</script>";

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-expression\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"propertyeditorcontent-expression\">\n    <div>\n        <textarea class=\"form-control\" data-bind=\"value:koValue\" style=\"width:100%\" rows=\"8\" autofocus=\"autofocus\"></textarea>\n        <span data-bind=\"text:$root.getLocString('pe.expressionHelp')\" style=\"white-space:normal\"></span>\n    </div>\n</script>\n";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-html\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"propertyeditorcontent-html\">\n    <textarea class=\"form-control\" data-bind=\"value:koValue\" style=\"width:100%\" rows=\"10\" autofocus=\"autofocus\"></textarea>\n</script>\n";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-itemvalues\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n<script type=\"text/html\" class=\"btn-xs\" id=\"propertyeditorcontent-itemvalues\">\n    <div style=\"margin-bottom:3px\">\n        <button class=\"btn-xs\" data-bind=\"css: {'btn btn-primary':koActiveView() == 'form', 'btn-link':koActiveView() != 'form'}, click:changeToFormViewClick, text: $root.getLocString('pe.formEntry')\"></button>\n        <button class=\"btn-xs\" data-bind=\"css: {'btn btn-primary':koActiveView() != 'form', 'btn-link':koActiveView() == 'form'}, click:changeToTextViewClick, text: $root.getLocString('pe.fastEntry')\"></button>\n    </div>\n    <div data-bind=\"visible:koActiveView() == 'form'\" style=\"overflow-y: auto; overflow-x:hidden; max-height:400px;min-height:200px\">\n        <table class=\"table\" >\n            <thead>\n                <tr>\n                    <th></th>\n                    <th data-bind=\"text: $root.getLocString('pe.value')\"></th>\n                    <th data-bind=\"text: $root.getLocString('pe.text')\"></th>\n                    <th></th>\n                </tr>\n            </thead>\n            <tbody>\n                <!-- ko foreach: koItems -->\n                <tr>\n                    <td>\n                        <div class=\"btn-group\" role=\"group\">\n                            <button type=\"button\" class=\"btn btn-xs\" data-bind=\"visible: $index() > 0, click: $parent.onMoveUpClick\"><span class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"true\"></span></button>\n                            <button type=\"button\" class=\"btn btn-xs\" style=\"float:none\" data-bind=\"visible: $index() < $parent.koItems().length - 1, click: $parent.onMoveDownClick\"><span class=\"glyphicon glyphicon-arrow-down\" aria-hidden=\"true\"></span></button>\n                        </div>\n                    </td>\n                    <td>\n                        <input type=\"text\" class=\"form-control\" data-bind=\"value:koValue\" style=\"width:200px\" />\n                        <div class=\"alert alert-danger no-padding\" role=\"alert\" data-bind=\"visible:koHasError, text: $root.getLocString('pe.enterNewValue')\"></div>\n                    </td>\n                    <td><input type=\"text\" class=\"form-control\" data-bind=\"value:koText\" style=\"width:200px\" /></td>\n                    <td><button type=\"button\" class=\"btn btn-xs\" data-bind=\"click: $parent.onDeleteClick\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></button></td>\n                </tr>\n                <!-- /ko -->\n            </tbody>\n        </table>\n    </div>\n    <div class=\"row btn-toolbar\" data-bind=\"visible:koActiveView() == 'form'\">\n        <input type=\"button\" class=\"btn btn-success\" data-bind=\"click: onAddClick, value: $root.getLocString('pe.addNew')\" />\n        <input type=\"button\" class=\"btn btn-danger\" data-bind=\"click: onClearClick, value: $root.getLocString('pe.removeAll')\" />\n    </div>\n    <div data-bind=\"visible:koActiveView() != 'form'\">\n        <textarea class=\"form-control\" data-bind=\"textInput: koItemsText\" style=\"overflow-y: auto; overflow-x:hidden; max-height:400px; min-height:250px; width:100%\"></textarea>\n    </div>\n</script>\n";

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-matrixdropdowncolumns\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditorcontent-matrixdropdowncolumns\">\n    <table class=\"table\" data-bind=\"visible: koIsList\">\n        <thead>\n            <tr>\n                <th data-bind=\"text: $root.getLocString('pe.required')\"></th>\n                <th data-bind=\"text: $root.getLocString('pe.cellType')\"></th>\n                <th data-bind=\"text: $root.getLocString('pe.name')\"></th>\n                <th data-bind=\"text: $root.getLocString('pe.title')\"></th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            <!-- ko foreach: koItems -->\n            <tr>\n                <td>\n                    <input type=\"checkbox\" data-bind=\"checked: koIsRequired\" />\n                    <button type=\"button\" class=\"btn\" data-bind=\"visible: koCanEdit, click: $parent.onEditItemClick\">\n                        <span class=\"glyphicon glyphicon-edit\"></span>\n                    </button>\n                </td>\n                <td>\n                    <select class=\"form-control\" data-bind=\"options: cellTypeChoices, value: koCellType\"  style=\"width:110px\"></select>\n                </td>\n                <td>\n                    <input type=\"text\" class=\"form-control\" data-bind=\"value:koName\" style=\"width:100px\" />\n                    <div class=\"alert alert-danger no-padding\" role=\"alert\" data-bind=\"visible:koHasError, text: $root.getLocString('pe.enterNewValue')\"></div>\n                </td>\n                <td><input type=\"text\" class=\"form-control\" data-bind=\"value:koTitle\" style=\"width:120px\" /></td>\n                <td><button type=\"button\" class=\"btn\" data-bind=\"click: $parent.onDeleteClick\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></button></td>\n            </tr>\n            <!-- /ko -->\n            <tr>\n                <td colspan=\"5\">\n                    <div class=\"row btn-toolbar\">\n                        <input type=\"button\" class=\"btn btn-success\" data-bind=\"click: onAddClick, value: $root.getLocString('pe.addNew')\"/>\n                        <input type=\"button\" class=\"btn btn-danger\" data-bind=\"click: onClearClick, value: $root.getLocString('pe.removeAll')\" />\n                    </div>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n     <!-- ko if: !koIsList() -->\n        <!-- ko template: { name: \"propertyeditorcontent-nested\", data: $data } -->\n        <!-- /ko -->\n    <!-- /ko -->\n</script>\n";

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-modal\">\n    <div class=\"input-group\" data-bind=\"visible:!editor.isEditable\">\n        <a data-toggle=\"modal\" data-bind=\"attr: {'data-target' : modalNameTarget}\"><span data-bind=\"text: koText\"></span></a>\n        <div class=\"input-group-btn\">\n            <button class=\"btn btn-default\" data-toggle=\"modal\" style=\"padding: 2px;\" data-bind=\"attr: {'data-target' : modalNameTarget}\">\n                <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span>\n            </button>\n        </div>\n    </div>\n    <div class=\"input-group\" data-bind=\"visible:editor.isEditable\" style=\"display:table\">\n        <input class=\"form-control\" type=\"text\" data-bind=\"value: koValue\" style=\"display:table-cell; width:100%\" />\n        <div class=\"input-group-btn\">\n            <button type=\"button\" class=\"btn btn-default\" style=\"display:table-cell; padding: 2px;\"  data-toggle=\"modal\" data-bind=\"attr: {'data-target' : modalNameTarget}\">\n                <span class=\"glyphicon glyphicon-edit\" aria-hidden=\"true\"></span>\n            </button>\n        </div>\n    </div>\n\n    <div data-bind=\"attr: {id : modalName}\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\" data-bind=\"text:editor.title\"></h4>\n                </div>  \n                <div class=\"modal-body svd_notopbottompaddings\">\n                    <!-- ko template: { name: 'propertyeditorcontent-' + editorType, data: editor } -->\n                    <!-- /ko -->\n                </div>\n                <div class=\"modal-footer\">\n                    <input type=\"button\" class=\"btn btn-primary\" data-bind=\"click: editor.onApplyClick, value: $root.getLocString('pe.apply')\" style=\"width:100px\" />\n                    <input type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" data-bind=\"click: editor.onApplyClick, value: $root.getLocString('pe.ok')\" style=\"width:100px\" />\n                    <input type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" data-bind=\"click: editor.onResetClick, value: $root.getLocString('pe.cancel')\" style=\"width:100px\" />\n                </div>\n            </div>\n        </div>\n    </div>\n</script>\n";

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditorcontent-nested\">\n    <div style=\"padding: 5px\">\n        <button type=\"button\" class=\"btn\" data-bind=\"click: onCancelEditItemClick\">\n            <span class=\"glyphicon glyphicon-list-alt\"></span>\n        </button>\n        <span data-bind=\"text: koEditItem().koEditorName\"></span>\n    </div>\n    <!-- ko template: { name: \"questioneditor-content\", data: koEditItem().itemEditor } -->\n    <!-- /ko -->\n</script>";

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-number\">\n    <input class=\"form-control\" type=\"number\" data-bind=\"value: koValue\" style=\"width:100%\" />\n</script>";

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-restfull\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"propertyeditorcontent-restfull\">\n    <form>\n        <div class=\"form-group\">\n            <label for=\"url\">Url:</label>\n            <input id=\"url\" type=\"text\" data-bind=\"value:koUrl\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"path\">Path:</label>\n            <input id=\"path\" type=\"text\" data-bind=\"value:koPath\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"valueName\">valueName:</label>\n            <input id=\"valueName\" type=\"text\" data-bind=\"value:koValueName\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"titleName\">titleName:</label>\n            <input id=\"titleName\" type=\"text\" data-bind=\"value:koTitleName\" class=\"form-control\" />\n        </div>\n        <div class=\"form-group\">\n            <label for=\"titleName\"><span data-bind=\"text:$root.getLocString('pe.testService')\"></span></label>\n            <select class=\"form-control\" data-bind=\"options: question.koVisibleChoices, optionsText: 'text', optionsValue: 'value', optionsCaption: question.optionsCaption\"></select>\n        </div>\n    </form>\n</script>\n";

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-string\">\n    <input class=\"form-control\" type=\"text\" data-bind=\"value: koValue\" style=\"width:100%\" />\n</script>";

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-text\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n\n<script type=\"text/html\" id=\"propertyeditorcontent-text\">\n    <textarea class=\"form-control\" data-bind=\"value:koValue\" style=\"width:100%\" rows=\"10\" autofocus=\"autofocus\"></textarea>\n</script>\n";

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-textitems\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditorcontent-textitems\">\n<div class=\"panel\">\n    <table class=\"table\" data-bind=\"visible: koIsList\">\n        <thead>\n            <tr>\n                <th data-bind=\"text: $root.getLocString('pe.isRequired')\"></th>\n                <th data-bind=\"text: $root.getLocString('pe.name')\"></th>\n                <th data-bind=\"text: $root.getLocString('pe.title')\"></th>\n                <th></th>\n            </tr>\n        </thead>\n        <tbody>\n            <!-- ko foreach: koItems -->\n            <tr>\n                <td>\n                    <input type=\"checkbox\" data-bind=\"checked: koIsRequired\" />\n                    <button type=\"button\" class=\"btn\" data-bind=\"click: $parent.onEditItemClick\">\n                        <span class=\"glyphicon glyphicon-edit\"></span>\n                    </button>\n                </td>\n                <td><input type=\"text\" class=\"form-control\" data-bind=\"value:koName\" style=\"width:180px\" /></td>\n                <td><input type=\"text\" class=\"form-control\" data-bind=\"value:koTitle\" style=\"width:180px\" /></td>\n                <td><button type=\"button\" class=\"btn\" data-bind=\"click: $parent.onDeleteClick\"><span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span></button></td>\n            </tr>\n            <!-- /ko -->\n            <tr>\n                <td colspan=\"4\">\n                    <input type=\"button\" class=\"btn btn-success\" data-bind=\"click: onAddClick, value: $root.getLocString('pe.addNew')\"/>\n                    <input type=\"button\" class=\"btn btn-danger\" data-bind=\"click: onClearClick, value: $root.getLocString('pe.removeAll')\" />\n                </td>\n            </tr>\n        </tbody>\n    </table>\n     <!-- ko if: !koIsList() -->\n        <!-- ko template: { name: \"propertyeditorcontent-nested\", data: $data } -->\n        <!-- /ko -->\n    <!-- /ko -->\n</div>\n</script>";

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-triggers\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditorcontent-triggers\">\n<div class=\"panel\">\n    <div class=\"row\" style=\"margin-bottom:10px\">\n        <div class=\"col-lg-12\">\n            <div class=\"input-group form-inline\">\n                <div class=\"input-group-btn\">\n                    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <span class=\"glyphicon glyphicon-plus\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu\">\n                        <!-- ko foreach: availableTriggers -->\n                        <li><a data-bind=\"click: $parent.onAddClick\"><span data-bind=\"text:$data\"></span></a></li>\n                        <!-- /ko  -->\n                    </ul>\n                </div>\n                <select class=\"form-control\" data-bind=\"options: koItems, optionsText: 'koText', value: koSelected\"></select>\n                <span class=\"input-group-btn\">\n                    <button type=\"button\" data-bind=\"enable: koSelected() != null, click: onDeleteClick\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n                </span>\n            </div>\n        </div>\n    </div>\n    <div data-bind=\"visible: koSelected() == null\">\n        <div data-bind=\"visible: koQuestions().length == 0, text: $root.getLocString('pe.noquestions')\"></div>\n        <div data-bind=\"visible: koQuestions().length > 0, text: $root.getLocString('pe.createtrigger')\"></div>\n    </div>\n    <div data-bind=\"visible: koSelected() != null\">\n        <div data-bind=\"with: koSelected\">\n            <div class=\"row\"  style=\"margin-bottom:10px\">\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group  form-inline\">\n                        <div class=\"form-group\">\n                            <span class=\"input-group\" data-bind=\"text: $root.getLocString('pe.triggerOn')\"></span>\n                        </div>\n                        <div class=\"form-group\">\n                            <select class=\"form-control\" data-bind=\"options:$parent.koQuestions, value: koName\"></select>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group\">\n                        <select class=\"form-control\" data-bind=\"options:availableOperators, optionsValue: 'name', optionsText: 'text', value:koOperator\"></select>\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group\">\n                        <input class=\"form-control\" type=\"text\" data-bind=\"visible: koRequireValue, value:koValue\" />\n                    </div>\n                </div>\n            </div>\n            <!-- ko if: koType() == 'visibletrigger' -->\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-sm-6\">\n                    <!-- ko template: { name: 'propertyeditor-triggersitems', data: pages } -->\n                    <!-- /ko -->\n                </div>\n                <div class=\"col-lg-6 col-sm-6\">\n                    <!-- ko template: { name: 'propertyeditor-triggersitems', data: questions } -->\n                    <!-- /ko -->\n                </div>\n            </div>\n            <!-- /ko -->\n            <!-- ko if: koType() == 'completetrigger' -->\n            <div class=\"row\">\n               <div style=\"margin: 10px\" data-bind=\"text: $root.getLocString('pe.triggerCompleteText')\"></div>\n            </div>\n            <!-- /ko -->\n            <!-- ko if: koType() == 'setvaluetrigger' -->\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group form-inline\">\n                        <div>\n                            <span data-bind=\"text: $root.getLocString('pe.triggerSetToName')\"></span>\n                        </div>\n                        <input class=\"form-control\" type=\"text\" data-bind=\"value:kosetToName\" />\n                    </div>\n                </div>\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group form-inline\">\n                        <div>\n                            <span data-bind=\"text: $root.getLocString('pe.triggerSetValue')\"></span>\n                        </div>\n                        <input class=\"form-control\" type=\"text\" data-bind=\"value:kosetValue\" />\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-lg-4 col-sm-4\">\n                    <div class=\"input-group\">\n                        <input type=\"checkbox\" data-bind=\"checked: koisVariable\" /> <span data-bind=\"text: $root.getLocString('pe.triggerIsVariable')\"></span>\n                    </div>\n                </div>\n                <div class=\"col-lg-8 col-sm-8\">\n                </div>\n            </div>\n            <!-- /ko -->\n        </div>\n    </div>\n</div>\n</script>";

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-triggersitems\">\n    <div class=\"panel no-margins no-padding\">\n        <div data-bind=\"text: title\" style=\"margin-bottom:10px\"></div>\n        <div class=\"input-group\">\n            <select class=\"form-control\" multiple=\"multiple\" data-bind=\"options:koChoosen, value: koChoosenSelected\"></select>\n            <span class=\"input-group-btn\" style=\"vertical-align:top\">\n                <button type=\"button\" data-bind=\"enable: koChoosenSelected() != null, click: onDeleteClick\" class=\"btn\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n            </span>\n        </div>\n        <div class=\"input-group\" style=\"margin-top:5px\">\n            <select class=\"form-control\" data-bind=\"options:koObjects, value: koSelected\"></select>\n            <span class=\"input-group-btn\">\n                <button type=\"button\" class=\"btn btn-default\" data-bind=\"enable: koSelected() != null, click: onAddClick\" class=\"btn btn-success\"><span class=\"glyphicon glyphicon-plus\"></span></button>\n            </span>\n        </div>\n    </div>\n</script>";

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"propertyeditor-validators\">\n    <!-- ko template: { name: 'propertyeditor-modal', data: $data } --><!-- /ko -->\n</script>\n<script type=\"text/html\" id=\"propertyeditorcontent-validators\">\n<div class=\"panel\">\n    <div class=\"row\" style=\"margin-bottom:10px\">\n        <div class=\"col-lg-12\">\n            <div class=\"input-group form-inline\">\n                <div class=\"input-group-btn\">\n                    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <span class=\"glyphicon glyphicon-plus\"></span>\n                    </button>\n                    <ul class=\"dropdown-menu\">\n                        <!-- ko foreach: availableValidators -->\n                        <li><a href=\"#\" data-bind=\"click: $parent.onAddClick\"><span data-bind=\"text:$data\"></span></a></li>\n                        <!-- /ko  -->\n                    </ul>\n                </div>\n                <select class=\"form-control\" data-bind=\"options: koItems, optionsText: 'text', value: koSelected\"></select>\n                <span class=\"input-group-btn\">\n                    <button type=\"button\" data-bind=\"enable: koSelected() != null, click: onDeleteClick\" class=\"btn\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n                </span>\n            </div>\n        </div>\n    </div>\n    <div data-bind=\"template: { name: 'objecteditor', data: selectedObjectEditor }\"></div>\n</div>\n</script>";

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"questioneditor-content\">\n    <ul class=\"nav nav-tabs\" data-bind=\"foreach: koTabs\">\n        <li role=\"presentation\" data-bind=\"css: {active: $parent.koActiveTab() == $data.name}, click: $parent.onTabClick\"><a><span data-bind=\"text:$data.title\"></span></a></li>\n    </ul>               \n    <!-- ko foreach: koTabs -->\n    <div data-bind=\"visible:$parent.koActiveTab() == $data.name\" style=\"margin-top:5px\">\n        <!-- ko template: { name: $data.htmlTemplate, data: $data.templateObject } -->\n        <!-- /ko -->\n    </div>\n    <!-- /ko  -->\n</script>";

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"questioneditor\">\n    <div id=\"surveyquestioneditorwindow\" class=\"modal fade\" role=\"dialog\"data-bind=\"with:koEditor\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\" data-bind=\"text:koTitle\"></h4>\n                </div>  \n                <div class=\"modal-body svd_notopbottompaddings\">\n                    <!-- ko template: { name: \"questioneditor-content\", data: $data } -->\n                    <!-- /ko -->\n                </div>\n                <div class=\"modal-footer\">\n                    <input type=\"button\" class=\"btn btn-primary\" data-bind=\"click: onApplyClick, value: $root.getLocString('pe.apply')\" style=\"width:100px\" />\n                    <input type=\"button\" class=\"btn btn-default\" data-bind=\"click: onOkClick, value: $root.getLocString('pe.ok')\" style=\"width:100px\" />\n                    <input type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" data-bind=\"click: onResetClick, value: $root.getLocString('pe.cancel')\" style=\"width:100px\" />\n                </div>\n            </div>\n        </div>\n    </div>\n</script>\n";

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"questioneditortab-general\">\n    <div>\n        <!-- ko foreach: properties.rows -->\n        <div class=\"form-group\">\n            <!-- ko foreach: properties -->\n                    <div class=\"alert alert-danger\" role=\"alert\" data-bind=\"visible:koHasError\">\n                        <span class=\"glyphicon glyphicon-exclamation-sign\" aria-hidden=\"true\"></span>\n                        <span class=\"sr-only\">Error:</span>\n                        <span  data-bind=\"text:koErrorText\"></span>\n                    </div>            \n                    <!-- ko if: editType != 'check' -->\n                        <label data-bind=\"text:title\"></label>\n                    <!-- /ko -->\n                    <!-- ko if: editType == 'text' -->\n                        <input type=\"text\" class=\"form-control\" data-bind=\"value: koValue, disable: disabled\" />\n                    <!-- /ko -->\n                    <!-- ko if: editType == 'textarea' -->\n                        <textarea type=\"text\" rows=\"2\" class=\"form-control\" data-bind=\"value: koValue, disable: disabled\"></textarea>\n                    <!-- /ko -->\n                    <!-- ko if: editType == 'check' -->\n                        <span class=\"checkbox-inline\"><input type=\"checkbox\" data-bind=\"checked: koValue, disable: disabled\"><label data-bind=\"text:title\"></label></span>\n                    <!-- /ko -->\n                    <!-- ko if: editType == 'dropdown' -->\n                        <select class=\"form-control\"  data-bind=\"value: koValue, options: choices, disable: disabled\"></select>\n                    <!-- /ko -->\n            <!-- /ko  -->\n        </div>\n        <!-- /ko  -->\n    </div>\n</script>\n";

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"surveyembeding\">\n    <div class=\"row\">\n        <select data-bind=\"value:koLibraryVersion\">\n            <option value=\"angular\" data-bind=\"text: $root.getLocString('ew.angular')\"></option>\n            <option value=\"jquery\" data-bind=\"text: $root.getLocString('ew.jquery')\"></option>\n            <option value=\"knockout\" data-bind=\"text: $root.getLocString('ew.knockout')\"></option>\n            <option value=\"react\" data-bind=\"text: $root.getLocString('ew.react')\"></option>\n            <option value=\"vue\" data-bind=\"text: $root.getLocString('ew.vue')\"></option>\n        </select>\n        <select data-bind=\"value:koScriptUsing\">\n            <option value=\"bootstrap\" data-bind=\"text: $root.getLocString('ew.bootstrap')\"></option>\n            <option value=\"standard\" data-bind=\"text: $root.getLocString('ew.standard')\"></option>\n        </select>\n        <select data-bind=\"value:koShowAsWindow\">\n            <option value=\"page\" data-bind=\"text: $root.getLocString('ew.showOnPage')\"></option>\n            <option value=\"window\" data-bind=\"text: $root.getLocString('ew.showInWindow')\"></option>\n        </select>\n        <label class=\"checkbox-inline\" data-bind=\"visible:koHasIds\">\n            <input type=\"checkbox\" data-bind=\"checked:koLoadSurvey\" />\n            <span data-bind=\"text: $root.getLocString('ew.loadFromServer')\"></span>\n        </label>\n    </div>\n    <div class=\"panel\">\n        <div class=\"panel-heading\" data-bind=\"text: $root.getLocString('ew.titleScript')\"></div>\n        <div data-bind=\"visible:hasAceEditor\">\n            <div id=\"surveyEmbedingHead\" style=\"height:70px;width:100%\"></div>\n        </div>\n        <textarea data-bind=\"visible:!hasAceEditor, text: koHeadText\" style=\"height:70px;width:100%\"></textarea>\n    </div>\n    <div class=\"panel\" data-bind=\"visible: koVisibleHtml\">\n        <div class=\"panel-heading\"  data-bind=\"text: $root.getLocString('ew.titleHtml')\"></div>\n        <div data-bind=\"visible:hasAceEditor\">\n            <div id=\"surveyEmbedingBody\" style=\"height:30px;width:100%\"></div>\n        </div>\n        <textarea data-bind=\"visible:!hasAceEditor, text: koBodyText\" style=\"height:30px;width:100%\"></textarea>\n    </div>\n    <div class=\"panel\">\n        <div class=\"panel-heading\"  data-bind=\"text: $root.getLocString('ew.titleJavaScript')\"></div>\n        <div data-bind=\"visible:hasAceEditor\">\n            <div id=\"surveyEmbedingJava\" style=\"height:300px;width:100%\"></div>\n        </div>\n        <textarea data-bind=\"visible:!hasAceEditor, text: koJavaText\" style=\"height:300px;width:100%\"></textarea>\n    </div>\n</script>";

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "<script type=\"text/html\" id=\"svd-toolbar-button\">\n    <button type=\"button\" class=\"btn btn-primary\" data-bind=\"enable: $data.enabled || true, click: action, css: $data.innerCss\"><span data-bind=\"text: title\"></span></button>\n</script>\n<script type=\"text/html\" id=\"svd-toolbar-options\">\n    <div class=\"btn-group inline\">\n        <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            <span data-bind=\"text: title\"></span>\n            <span class=\"caret\"></span>\n        </button>\n        <ul class=\"dropdown-menu\">\n            <!-- ko foreach: items -->\n            <li data-bind=\"css: $data.css\"><a href=\"#\" data-bind=\"click: action, text: title\"></a></li>\n            <!-- /ko -->\n        </ul>\n    </div>\n</script>\n<script type=\"text/html\" id=\"svd-toolbar-state\">\n    <span class=\"icon\" data-bind=\"css: innerCss\"></span>\n    <span data-bind=\"text: title\"></span>\n</script>";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = "" + __webpack_require__(38) + "\n" + __webpack_require__(39) + "\n" + __webpack_require__(41) + "\n" + __webpack_require__(42) + "\n" + __webpack_require__(43) + "\n" + __webpack_require__(63) + "\n" + __webpack_require__(61) + "\n" + __webpack_require__(60) + "\n" + __webpack_require__(62) + "\n" + __webpack_require__(44) + "\n" + __webpack_require__(45) + "\n" + __webpack_require__(47) + "\n" + __webpack_require__(46) + "\n" + __webpack_require__(48) + "\n" + __webpack_require__(51) + "\n" + __webpack_require__(49) + "\n" + __webpack_require__(50) + "\n" + __webpack_require__(52) + "\n" + __webpack_require__(53) + "\n" + __webpack_require__(54) + "\n" + __webpack_require__(55) + "\n" + __webpack_require__(56) + "\n" + __webpack_require__(57) + "\n" + __webpack_require__(58) + "\n" + __webpack_require__(59) + "\n\n" + __webpack_require__(40) + "\n" + __webpack_require__(64) + "";

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_knockout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_knockout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__textWorker__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyJSONEditor; });


var SurveyJSONEditor = (function () {
    function SurveyJSONEditor() {
        this.isProcessingImmediately = false;
        this.timeoutId = -1;
        this.koText = __WEBPACK_IMPORTED_MODULE_0_knockout__["observable"]("");
        this.koErrors = __WEBPACK_IMPORTED_MODULE_0_knockout__["observableArray"]();
        var self = this;
        this.koText.subscribe(function (newValue) {
            self.onJsonEditorChanged();
        });
    }
    SurveyJSONEditor.prototype.init = function () {
        if (!this.hasAceEditor)
            return;
        this.aceEditor = ace.edit("surveyjsJSONEditor");
        var self = this;
        //TODO add event to change ace theme and mode
        //this.aceEditor.setTheme("ace/theme/monokai");
        //this.aceEditor.session.setMode("ace/mode/json");
        this.aceEditor.setShowPrintMargin(false);
        this.aceEditor.getSession().on("change", function () {
            self.onJsonEditorChanged();
        });
        this.aceEditor.getSession().setUseWorker(true);
        __WEBPACK_IMPORTED_MODULE_1__textWorker__["a" /* SurveyTextWorker */].newLineChar = this.aceEditor.session.doc.getNewLineCharacter();
    };
    Object.defineProperty(SurveyJSONEditor.prototype, "hasAceEditor", {
        get: function () { return typeof ace !== "undefined"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyJSONEditor.prototype, "text", {
        get: function () {
            if (!this.hasAceEditor)
                return this.koText();
            return this.aceEditor.getValue();
        },
        set: function (value) {
            this.isProcessingImmediately = true;
            this.koText(value);
            if (this.aceEditor) {
                this.aceEditor.setValue(value);
                this.aceEditor.renderer.updateFull(true);
            }
            this.processJson(value);
            this.isProcessingImmediately = false;
        },
        enumerable: true,
        configurable: true
    });
    SurveyJSONEditor.prototype.show = function (value) {
        this.text = value;
        if (this.aceEditor) {
            this.aceEditor.focus();
        }
    };
    Object.defineProperty(SurveyJSONEditor.prototype, "isJsonCorrect", {
        get: function () {
            this.textWorker = new __WEBPACK_IMPORTED_MODULE_1__textWorker__["a" /* SurveyTextWorker */](this.text);
            return this.textWorker.isJsonCorrect;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SurveyJSONEditor.prototype, "survey", {
        get: function () { return this.textWorker.survey; },
        enumerable: true,
        configurable: true
    });
    SurveyJSONEditor.prototype.onJsonEditorChanged = function () {
        if (this.timeoutId > -1) {
            clearTimeout(this.timeoutId);
        }
        if (this.isProcessingImmediately) {
            this.timeoutId = -1;
        }
        else {
            var self = this;
            this.timeoutId = setTimeout(function () {
                self.timeoutId = -1;
                self.processJson(self.text);
            }, SurveyJSONEditor.updateTextTimeout);
        }
    };
    SurveyJSONEditor.prototype.processJson = function (text) {
        this.textWorker = new __WEBPACK_IMPORTED_MODULE_1__textWorker__["a" /* SurveyTextWorker */](text);
        if (this.aceEditor) {
            this.aceEditor.getSession().setAnnotations(this.createAnnotations(text, this.textWorker.errors));
        }
        else {
            this.koErrors(this.textWorker.errors);
        }
    };
    SurveyJSONEditor.prototype.createAnnotations = function (text, errors) {
        var annotations = new Array();
        for (var i = 0; i < errors.length; i++) {
            var error = errors[i];
            var annotation = { row: error.position.start.row, column: error.position.start.column, text: error.text, type: "error" };
            annotations.push(annotation);
        }
        return annotations;
    };
    return SurveyJSONEditor;
}());

SurveyJSONEditor.updateTextTimeout = 1000;


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dragdrophelper__ = __webpack_require__(13);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropHelper", function() { return __WEBPACK_IMPORTED_MODULE_3__dragdrophelper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyEditorBase", function() { return __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyStringPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyDropdownPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyBooleanPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyNumberPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_4__propertyEditors_propertyEditorBase__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__propertyEditors_propertyTextItemsEditor__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyTextItemsEditor", function() { return __WEBPACK_IMPORTED_MODULE_5__propertyEditors_propertyTextItemsEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__propertyEditors_propertyItemsEditor__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyItemsEditor", function() { return __WEBPACK_IMPORTED_MODULE_6__propertyEditors_propertyItemsEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__propertyEditors_propertyItemValuesEditor__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyItemValuesEditor", function() { return __WEBPACK_IMPORTED_MODULE_7__propertyEditors_propertyItemValuesEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__propertyEditors_propertyNestedPropertyEditor__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyNestedPropertyEditor", function() { return __WEBPACK_IMPORTED_MODULE_8__propertyEditors_propertyNestedPropertyEditor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyNestedPropertyEditorItem", function() { return __WEBPACK_IMPORTED_MODULE_8__propertyEditors_propertyNestedPropertyEditor__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__propertyEditors_propertyMatrixDropdownColumnsEditor__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyDropdownColumnsEditor", function() { return __WEBPACK_IMPORTED_MODULE_9__propertyEditors_propertyMatrixDropdownColumnsEditor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyMatrixDropdownColumnsItem", function() { return __WEBPACK_IMPORTED_MODULE_9__propertyEditors_propertyMatrixDropdownColumnsEditor__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__propertyEditors_propertyModalEditor__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyModalEditor", function() { return __WEBPACK_IMPORTED_MODULE_10__propertyEditors_propertyModalEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__propertyEditors_propertyRestfullEditor__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyResultfullEditor", function() { return __WEBPACK_IMPORTED_MODULE_11__propertyEditors_propertyRestfullEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__propertyEditors_propertyTriggersEditor__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyTriggersEditor", function() { return __WEBPACK_IMPORTED_MODULE_12__propertyEditors_propertyTriggersEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__propertyEditors_propertyValidatorsEditor__ = __webpack_require__(35);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyValidatorsEditor", function() { return __WEBPACK_IMPORTED_MODULE_13__propertyEditors_propertyValidatorsEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__surveyObjects__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyObjects", function() { return __WEBPACK_IMPORTED_MODULE_14__surveyObjects__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__editorLocalization__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "editorLocalization", function() { return __WEBPACK_IMPORTED_MODULE_15__editorLocalization__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__questionEditors_questionEditorGeneralProperties__ = __webpack_require__(18);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorGeneralProperties", function() { return __WEBPACK_IMPORTED_MODULE_16__questionEditors_questionEditorGeneralProperties__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorGeneralRow", function() { return __WEBPACK_IMPORTED_MODULE_16__questionEditors_questionEditorGeneralProperties__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorGeneralProperty", function() { return __WEBPACK_IMPORTED_MODULE_16__questionEditors_questionEditorGeneralProperties__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__questionEditors_questionEditorDefinition__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorDefinition", function() { return __WEBPACK_IMPORTED_MODULE_17__questionEditors_questionEditorDefinition__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__questionEditors_questionEditor__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPropertyEditorShowWindow", function() { return __WEBPACK_IMPORTED_MODULE_18__questionEditors_questionEditor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditor", function() { return __WEBPACK_IMPORTED_MODULE_18__questionEditors_questionEditor__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorTabGeneral", function() { return __WEBPACK_IMPORTED_MODULE_18__questionEditors_questionEditor__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyQuestionEditorTabProperty", function() { return __WEBPACK_IMPORTED_MODULE_18__questionEditors_questionEditor__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__questionToolbox__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionToolbox", function() { return __WEBPACK_IMPORTED_MODULE_19__questionToolbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__objectProperty__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyObjectProperty", function() { return __WEBPACK_IMPORTED_MODULE_20__objectProperty__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__objectEditor__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyObjectEditor", function() { return __WEBPACK_IMPORTED_MODULE_21__objectEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pagesEditor__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyPagesEditor", function() { return __WEBPACK_IMPORTED_MODULE_22__pagesEditor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__textWorker__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyTextWorker", function() { return __WEBPACK_IMPORTED_MODULE_23__textWorker__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__surveyHelper__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ObjType", function() { return __WEBPACK_IMPORTED_MODULE_24__surveyHelper__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyHelper", function() { return __WEBPACK_IMPORTED_MODULE_24__surveyHelper__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__surveyEmbedingWindow__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyEmbedingWindow", function() { return __WEBPACK_IMPORTED_MODULE_25__surveyEmbedingWindow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__objectVerbs__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyVerbs", function() { return __WEBPACK_IMPORTED_MODULE_26__objectVerbs__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyVerbItem", function() { return __WEBPACK_IMPORTED_MODULE_26__objectVerbs__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyVerbChangeTypeItem", function() { return __WEBPACK_IMPORTED_MODULE_26__objectVerbs__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyVerbChangePageItem", function() { return __WEBPACK_IMPORTED_MODULE_26__objectVerbs__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__undoredo__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyUndoRedo", function() { return __WEBPACK_IMPORTED_MODULE_27__undoredo__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "UndoRedoItem", function() { return __WEBPACK_IMPORTED_MODULE_27__undoredo__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__surveyjsObjects__ = __webpack_require__(22);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyForDesigner", function() { return __WEBPACK_IMPORTED_MODULE_28__surveyjsObjects__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__editor__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyEditor", function() { return __WEBPACK_IMPORTED_MODULE_29__editor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__manage__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SurveysManager", function() { return __WEBPACK_IMPORTED_MODULE_30__manage__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__localization_french__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__localization_spanish__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Version", function() { return Version; });
// styles

var Version;
Version = "" + "0.12.16";

global["jQuery"] = __WEBPACK_IMPORTED_MODULE_1_jquery__;





























//editorLocalization



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(36)))

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyYWUxNTU1MDQ0MDVlNDM1NmU3NSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwia29cIixcImNvbW1vbmpzMlwiOlwia25vY2tvdXRcIixcImNvbW1vbmpzXCI6XCJrbm9ja291dFwiLFwiYW1kXCI6XCJrbm9ja291dFwifSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiU3VydmV5XCIsXCJjb21tb25qczJcIjpcInN1cnZleS1rbm9ja291dFwiLFwiY29tbW9uanNcIjpcInN1cnZleS1rbm9ja291dFwiLFwiYW1kXCI6XCJzdXJ2ZXkta25vY2tvdXRcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvckxvY2FsaXphdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50cmllcy9oZWxwZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlFZGl0b3JCYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zdXJ2ZXlIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1zRWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25FZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdEVkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5TW9kYWxFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU5lc3RlZFByb3BlcnR5RWRpdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy90ZXh0V29ya2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9qc29uNS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhZ2Ryb3BoZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdFByb3BlcnR5LnRzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RWZXJicy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXNFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbkVkaXRvckRlZmluaXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0aWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9xdWVzdGlvblRvb2xib3gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleUVtYmVkaW5nV2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9zdXJ2ZXlPYmplY3RzLnRzIiwid2VicGFjazovLy8uL3NyYy9zdXJ2ZXlqc09iamVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3VuZG9yZWRvLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJqUXVlcnlcIixcImNvbW1vbmpzMlwiOlwianF1ZXJ5XCIsXCJjb21tb25qc1wiOlwianF1ZXJ5XCIsXCJhbWRcIjpcImpxdWVyeVwifSIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9mcmVuY2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xvY2FsaXphdGlvbi9zcGFuaXNoLnRzIiwid2VicGFjazovLy8uL3NyYy9tYW5hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU1hdHJpeERyb3Bkb3duQ29sdW1uc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5UmVzdGZ1bGxFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVRleHRJdGVtc0VkaXRvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5VHJpZ2dlcnNFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVZhbGlkYXRvcnNFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiYm9vdHN0cmFwXCIsXCJjb21tb25qczJcIjpcImJvb3RzdHJhcFwiLFwiY29tbW9uanNcIjpcImJvb3RzdHJhcFwiLFwiYW1kXCI6XCJib290c3RyYXBcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9pbmRleC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvanNvbmVkaXRvci5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvbWFuYWdlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9vYmplY3RlZGl0b3IuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL29iamVjdHZlcmJzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wYWdlZWRpdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItYm9vbGVhbi5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWRyb3Bkb3duLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItZXhwcmVzc2lvbi5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWh0bWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1pdGVtdmFsdWVzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItbWF0cml4ZHJvcGRvd25jb2x1bW5zLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItbW9kYWwuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1uZXN0ZWQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1udW1iZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1yZXN0ZnVsbC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXN0cmluZy5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXRleHQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci10ZXh0aXRlbXMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci10cmlnZ2Vycy5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXRyaWdnZXJzaXRlbXMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci12YWxpZGF0b3JzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25lZGl0b3ItY29udGVudC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uZWRpdG9yLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25lZGl0b3J0YWItZ2VuZXJhbC5odG1sIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvc3VydmV5ZW1iZWRpbmcuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL3Rvb2xiYXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL2VudHJ5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N1cnZleUpTT05FZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJpZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBLCtDOzs7Ozs7QUNBQSwrQzs7Ozs7Ozs7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RyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQixLQUFLLEdBQUc7Z0JBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLEtBQUssR0FBRztnQkFDSixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsTUFBTSxDQUFDLFFBQVEsQ0FB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SSxPQUFlLENBQUM7QUFDM0IsT0FBTyxHQUFHLEtBQUcsU0FBcUIsQ0FBQztBQUVGO0FBQ2pDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxvQ0FBTSxDQUFDO0FBQ1A7QUFFOEI7QUFJRjtBQUMwQztBQUNSO0FBQ1U7QUFDK0I7QUFFeEQ7QUFDZTtBQUNRO0FBQ0Y7QUFDSTtBQUM1QztBQUVVO0FBRXFIO0FBQ25GO0FBQzZFO0FBRXJIO0FBQ0k7QUFDSjtBQUNGO0FBQ0Y7QUFDTztBQUNPO0FBQ2tEO0FBQ3REO0FBQ0w7QUFDYjtBQUVFO0FBRXpDLG9CQUFvQjtBQUNZO0FBQ0MiLCJmaWxlIjoiLi9wYWNrYWdlL3N1cnZleWVkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImtub2Nrb3V0XCIpLCByZXF1aXJlKFwic3VydmV5LWtub2Nrb3V0XCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwiYm9vdHN0cmFwXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiU3VydmV5RWRpdG9yXCIsIFtcImtub2Nrb3V0XCIsIFwic3VydmV5LWtub2Nrb3V0XCIsIFwianF1ZXJ5XCIsIFwiYm9vdHN0cmFwXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlN1cnZleUVkaXRvclwiXSA9IGZhY3RvcnkocmVxdWlyZShcImtub2Nrb3V0XCIpLCByZXF1aXJlKFwic3VydmV5LWtub2Nrb3V0XCIpLCByZXF1aXJlKFwianF1ZXJ5XCIpLCByZXF1aXJlKFwiYm9vdHN0cmFwXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJTdXJ2ZXlFZGl0b3JcIl0gPSBmYWN0b3J5KHJvb3RbXCJrb1wiXSwgcm9vdFtcIlN1cnZleVwiXSwgcm9vdFtcImpRdWVyeVwiXSwgcm9vdFtcImJvb3RzdHJhcFwiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMjRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8zN19fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDY3KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyYWUxNTU1MDQ0MDVlNDM1NmU3NSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwia29cIixcImNvbW1vbmpzMlwiOlwia25vY2tvdXRcIixcImNvbW1vbmpzXCI6XCJrbm9ja291dFwiLFwiYW1kXCI6XCJrbm9ja291dFwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIlN1cnZleVwiLFwiY29tbW9uanMyXCI6XCJzdXJ2ZXkta25vY2tvdXRcIixcImNvbW1vbmpzXCI6XCJzdXJ2ZXkta25vY2tvdXRcIixcImFtZFwiOlwic3VydmV5LWtub2Nrb3V0XCJ9XG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB2YXIgZWRpdG9yTG9jYWxpemF0aW9uID0ge1xuICAgIGN1cnJlbnRMb2NhbGU6IFwiXCIsXG4gICAgbG9jYWxlczoge30sXG4gICAgZ2V0U3RyaW5nOiBmdW5jdGlvbiAoc3RyTmFtZTogc3RyaW5nLCBsb2NhbGU6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgaWYgKCFsb2NhbGUpIGxvY2FsZSA9IHRoaXMuY3VycmVudExvY2FsZTtcbiAgICAgICAgdmFyIGxvYyA9IGxvY2FsZSA/IHRoaXMubG9jYWxlc1tsb2NhbGVdIDogZGVmYXVsdFN0cmluZ3M7XG4gICAgICAgIGlmICghbG9jKSBsb2MgPSBkZWZhdWx0U3RyaW5ncztcbiAgICAgICAgdmFyIHBhdGggPSBzdHJOYW1lLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciBvYmogPSBsb2M7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgb2JqID0gb2JqW3BhdGhbaV1dO1xuICAgICAgICAgICAgaWYgKCFvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAobG9jID09PSBkZWZhdWx0U3RyaW5ncykgcmV0dXJuIHBhdGhbaV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nKHN0ck5hbWUsIFwiZW5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9LFxuICAgIGdldFByb3BlcnR5TmFtZTogZnVuY3Rpb24gKHN0ck5hbWU6IHN0cmluZywgbG9jYWw6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuZ2V0UHJvcGVydHkoc3RyTmFtZSwgbG9jYWwpO1xuICAgICAgICBpZiAob2JqW1wibmFtZVwiXSkgcmV0dXJuIG9ialtcIm5hbWVcIl07XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfSxcbiAgICBnZXRQcm9wZXJ0eVRpdGxlOiBmdW5jdGlvbiAoc3RyTmFtZTogc3RyaW5nLCBsb2NhbDogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICB2YXIgb2JqID0gdGhpcy5nZXRQcm9wZXJ0eShzdHJOYW1lLCBsb2NhbCk7XG4gICAgICAgIGlmIChvYmpbXCJ0aXRsZVwiXSkgcmV0dXJuIG9ialtcInRpdGxlXCJdO1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9LFxuICAgIGdldFByb3BlcnR5OiBmdW5jdGlvbiAoc3RyTmFtZTogc3RyaW5nLCBsb2NhbDogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICB2YXIgb2JqID0gdGhpcy5nZXRTdHJpbmcoXCJwLlwiICsgc3RyTmFtZSwgbG9jYWwpO1xuICAgICAgICBpZiAob2JqICE9PSBzdHJOYW1lKSByZXR1cm4gb2JqO1xuICAgICAgICB2YXIgcG9zID0gc3RyTmFtZS5pbmRleE9mKCdfJyk7XG4gICAgICAgIGlmIChwb3MgPCAtMSkgcmV0dXJuIG9iajtcbiAgICAgICAgc3RyTmFtZSA9IHN0ck5hbWUuc3Vic3RyKHBvcyArIDEpO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTdHJpbmcoXCJwLlwiICsgc3RyTmFtZSwgbG9jYWwpO1xuICAgIH0sXG4gICAgZ2V0TG9jYWxlczogZnVuY3Rpb24gKCk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICB2YXIgcmVzID0gW107XG4gICAgICAgIHJlcy5wdXNoKFwiXCIpO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGhpcy5sb2NhbGVzKSB7XG4gICAgICAgICAgICByZXMucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxufTtcblxuZXhwb3J0IHZhciBkZWZhdWx0U3RyaW5ncyA9IHtcbiAgICAvL3N1cnZleSB0ZW1wbGF0ZXNcbiAgICBzdXJ2ZXk6IHtcbiAgICAgICAgZHJvcFF1ZXN0aW9uOiBcIlBsZWFzZSBkcm9wIGEgcXVlc3Rpb24gaGVyZS5cIixcbiAgICAgICAgY29weTogXCJDb3B5XCIsXG4gICAgICAgIGFkZFRvVG9vbGJveDogXCJBZGQgdG8gdG9vbGJveFwiLFxuICAgICAgICBkZWxldGVQYW5lbDogXCJEZWxldGUgUGFuZWxcIixcbiAgICAgICAgZGVsZXRlUXVlc3Rpb246IFwiRGVsZXRlIFF1ZXN0aW9uXCJcbiAgICB9LFxuICAgIC8vcXVlc3Rpb25UeXBlc1xuICAgIHF0OiB7XG4gICAgICAgIGNoZWNrYm94OiBcIkNoZWNrYm94XCIsXG4gICAgICAgIGNvbW1lbnQ6IFwiQ29tbWVudFwiLFxuICAgICAgICBkcm9wZG93bjogXCJEcm9wZG93blwiLFxuICAgICAgICBmaWxlOiBcIkZpbGVcIixcbiAgICAgICAgaHRtbDogXCJIdG1sXCIsXG4gICAgICAgIG1hdHJpeDogXCJNYXRyaXggKHNpbmdsZSBjaG9pY2UpXCIsXG4gICAgICAgIG1hdHJpeGRyb3Bkb3duOiBcIk1hdHJpeCAobXVsdGlwbGUgY2hvaWNlKVwiLFxuICAgICAgICBtYXRyaXhkeW5hbWljOiBcIk1hdHJpeCAoZHluYW1pYyByb3dzKVwiLFxuICAgICAgICBtdWx0aXBsZXRleHQ6IFwiTXVsdGlwbGUgVGV4dFwiLFxuICAgICAgICBwYW5lbDogXCJQYW5lbFwiLFxuICAgICAgICByYWRpb2dyb3VwOiBcIlJhZGlvZ3JvdXBcIixcbiAgICAgICAgcmF0aW5nOiBcIlJhdGluZ1wiLFxuICAgICAgICB0ZXh0OiBcIlNpbmdsZSBJbnB1dFwiXG4gICAgfSxcbiAgICAvL1N0cmluZ3MgaW4gRWRpdG9yXG4gICAgZWQ6IHtcbiAgICAgICAgYWRkTmV3UGFnZTogXCJBZGQgTmV3IFBhZ2VcIixcbiAgICAgICAgbmV3UGFnZU5hbWU6IFwicGFnZVwiLFxuICAgICAgICBuZXdRdWVzdGlvbk5hbWU6IFwicXVlc3Rpb25cIixcbiAgICAgICAgbmV3UGFuZWxOYW1lOiBcInBhbmVsXCIsXG4gICAgICAgIHRlc3RTdXJ2ZXk6IFwiVGVzdCBTdXJ2ZXlcIixcbiAgICAgICAgdGVzdFN1cnZleUFnYWluOiBcIlRlc3QgU3VydmV5IEFnYWluXCIsXG4gICAgICAgIHRlc3RTdXJ2ZXlXaWR0aDogXCJTdXJ2ZXkgd2lkdGg6IFwiLFxuICAgICAgICBlbWJlZFN1cnZleTogXCJFbWJlZCBTdXJ2ZXlcIixcbiAgICAgICAgc2F2ZVN1cnZleTogXCJTYXZlIFN1cnZleVwiLFxuICAgICAgICBkZXNpZ25lcjogXCJTdXJ2ZXkgRGVzaWduZXJcIixcbiAgICAgICAganNvbkVkaXRvcjogXCJKU09OIEVkaXRvclwiLFxuICAgICAgICB1bmRvOiBcIlVuZG9cIixcbiAgICAgICAgcmVkbzogXCJSZWRvXCIsXG4gICAgICAgIG9wdGlvbnM6IFwiT3B0aW9uc1wiLFxuICAgICAgICBnZW5lcmF0ZVZhbGlkSlNPTjogXCJHZW5lcmF0ZSBWYWxpZCBKU09OXCIsXG4gICAgICAgIGdlbmVyYXRlUmVhZGFibGVKU09OOiBcIkdlbmVyYXRlIFJlYWRhYmxlIEpTT05cIixcbiAgICAgICAgdG9vbGJveDogXCJUb29sYm94XCIsXG4gICAgICAgIGRlbFNlbE9iamVjdDogXCJEZWxldGUgc2VsZWN0ZWQgb2JqZWN0XCIsXG4gICAgICAgIGNvcnJlY3RKU09OOiBcIlBsZWFzZSBjb3JyZWN0IEpTT04uXCIsXG4gICAgICAgIHN1cnZleVJlc3VsdHM6IFwiU3VydmV5IFJlc3VsdDogXCJcbiAgICB9LFxuICAgIC8vUHJvcGVydHkgRWRpdG9yc1xuICAgIHBlOiB7XG4gICAgICAgIGFwcGx5OiBcIkFwcGx5XCIsXG4gICAgICAgIG9rOiBcIk9LXCIsXG4gICAgICAgIGNhbmNlbDogXCJDYW5jZWxcIixcbiAgICAgICAgcmVzZXQ6IFwiUmVzZXRcIixcbiAgICAgICAgY2xvc2U6IFwiQ2xvc2VcIixcbiAgICAgICAgZGVsZXRlOiBcIkRlbGV0ZVwiLFxuICAgICAgICBhZGROZXc6IFwiQWRkIE5ld1wiLFxuICAgICAgICByZW1vdmVBbGw6IFwiUmVtb3ZlIEFsbFwiLFxuICAgICAgICBlZGl0OiBcIkVkaXRcIixcbiAgICAgICAgZW1wdHk6IFwiPGVtcHR5PlwiLFxuICAgICAgICBmYXN0RW50cnk6IFwiRmFzdCBFbnRyeVwiLFxuICAgICAgICBmb3JtRW50cnk6IFwiRm9ybSBFbnRyeVwiLFxuICAgICAgICB0ZXN0U2VydmljZTogXCJUZXN0IHRoZSBzZXJ2aWNlXCIsXG4gICAgICAgIGV4cHJlc3Npb25IZWxwOiBcIlBsZWFzZSBlbnRlciBhIGJvb2xlYW4gZXhwcmVzc2lvbi4gSXQgc2hvdWxkIHJldHVybiB0cnVlIHRvIGtlZXAgdGhlIHF1ZXN0aW9uL3BhZ2UgdmlzaWJsZS4gRm9yIGV4YW1wbGU6IHtxdWVzdGlvbjF9ID0gJ3ZhbHVlMScgb3IgKHtxdWVzdGlvbjJ9ID0gMyBhbmQge3F1ZXN0aW9uM30gPCA1KVwiLFxuXG4gICAgICAgIHByb3BlcnR5SXNFbXB0eTogXCJQbGVhc2UgZW50ZXIgdmFsdWUgaW50byB0aGUgcHJvcGVydHlcIixcbiAgICAgICAgdmFsdWU6IFwiVmFsdWVcIixcbiAgICAgICAgdGV4dDogXCJUZXh0XCIsXG4gICAgICAgIHJlcXVpcmVkOiBcIlJlcXVpcmVkP1wiLFxuICAgICAgICBjb2x1bW5FZGl0OiBcIkVkaXQgY29sdW1uOiB7MH1cIixcbiAgICAgICAgaXRlbUVkaXQ6IFwiRWRpdCBpdGVtOiB7MH1cIixcbiAgICAgICAgXG4gICAgICAgIGhhc090aGVyOiBcIkhhcyBvdGhlciBpdGVtXCIsXG4gICAgICAgIG5hbWU6IFwiTmFtZVwiLFxuICAgICAgICB0aXRsZTogXCJUaXRsZVwiLFxuICAgICAgICBjZWxsVHlwZTogXCJDZWxsIHR5cGVcIixcbiAgICAgICAgY29sQ291bnQ6IFwiQ29sdW1uIGNvdW50XCIsXG4gICAgICAgIGNob2ljZXNPcmRlcjogXCJTZWxlY3QgY2hvaWNlcyBvcmRlclwiLFxuICAgICAgICB2aXNpYmxlOiBcIklzIHZpc2libGU/XCIsXG4gICAgICAgIGlzUmVxdWlyZWQ6IFwiSXMgcmVxdWlyZWQ/XCIsXG4gICAgICAgIHN0YXJ0V2l0aE5ld0xpbmU6IFwiSXMgc3RhcnQgd2l0aCBuZXcgbGluZT9cIixcbiAgICAgICAgcm93czogXCJSb3cgY291bnRcIixcbiAgICAgICAgcGxhY2VIb2xkZXI6IFwiSW5wdXQgcGxhY2UgaG9sZGVyXCIsXG4gICAgICAgIHNob3dQcmV2aWV3OiBcIklzIGltYWdlIHByZXZpZXcgc2hvd24/XCIsXG4gICAgICAgIHN0b3JlRGF0YUFzVGV4dDogXCJTdG9yZSBmaWxlIGNvbnRlbnQgaW4gSlNPTiByZXN1bHQgYXMgdGV4dFwiLFxuICAgICAgICBtYXhTaXplOiBcIk1heGltdW0gZmlsZSBzaXplIGluIGJ5dGVzXCIsXG4gICAgICAgIGltYWdlSGVpZ2h0OiBcIkltYWdlIGhlaWdodFwiLFxuICAgICAgICBpbWFnZVdpZHRoOiBcIkltYWdlIHdpZHRoXCIsXG4gICAgICAgIHJvd0NvdW50OiBcIlJvdyBjb3VudFwiLCBcbiAgICAgICAgYWRkUm93VGV4dDogXCJBZGQgcm93IGJ1dHRvbiB0ZXh0XCIsIFxuICAgICAgICByZW1vdmVSb3dUZXh0OiBcIlJlbW92ZSByb3cgYnV0dG9uIHRleHRcIixcbiAgICAgICAgbWluUmF0ZURlc2NyaXB0aW9uOiBcIk1pbmltdW0gcmF0ZSBkZXNjcmlwdGlvblwiLCBcbiAgICAgICAgbWF4UmF0ZURlc2NyaXB0aW9uOiBcIk1heGltdW0gcmF0ZSBkZXNjcmlwdGlvblwiLFxuICAgICAgICBpbnB1dFR5cGU6IFwiSW5wdXQgdHlwZVwiLFxuICAgICAgICBvcHRpb25zQ2FwdGlvbjogXCJPcHRpb25zIGNhcHRpb25cIixcblxuICAgICAgICBxRWRpdG9yVGl0bGU6IFwiRWRpdCBxdWVzdGlvbjogezB9XCIsXG4gICAgICAgIHRhYnM6IHtcbiAgICAgICAgICAgIGdlbmVyYWw6IFwiR2VuZXJhbFwiLFxuICAgICAgICAgICAgZmlsZU9wdGlvbnM6IFwiT3B0aW9uc1wiLFxuICAgICAgICAgICAgaHRtbDogXCJIdG1sIEVkaXRvclwiLFxuICAgICAgICAgICAgY29sdW1uczogXCJDb2x1bW5zXCIsXG4gICAgICAgICAgICByb3dzOiBcIlJvd3NcIixcbiAgICAgICAgICAgIGNob2ljZXM6IFwiQ2hvaWNlc1wiLFxuICAgICAgICAgICAgdmlzaWJsZUlmOiBcIlZpc2libGUgSWZcIixcbiAgICAgICAgICAgIHJhdGVWYWx1ZXM6IFwiUmF0ZSBWYWx1ZXNcIixcbiAgICAgICAgICAgIGNob2ljZXNCeVVybDogXCJDaG9pY2VzIGZyb20gV2ViXCIsXG4gICAgICAgICAgICBtYXRyaXhDaG9pY2VzOiBcIkRlZmF1bHQgQ2hvaWNlc1wiLFxuICAgICAgICAgICAgbXVsdGlwbGVUZXh0SXRlbXM6IFwiVGV4dCBJbnB1dHNcIixcbiAgICAgICAgICAgIHZhbGlkYXRvcnM6IFwiVmFsaWRhdG9yc1wiXG4gICAgICAgIH0sXG5cbiAgICAgICAgZWRpdFByb3BlcnR5OiBcIkVkaXQgcHJvcGVydHkgJ3swfSdcIixcbiAgICAgICAgaXRlbXM6IFwiWyBJdGVtczogezB9IF1cIixcblxuICAgICAgICBlbnRlck5ld1ZhbHVlOiBcIlBsZWFzZSwgZW50ZXIgdGhlIHZhbHVlLlwiLFxuICAgICAgICBub3F1ZXN0aW9uczogXCJUaGVyZSBpcyBubyBhbnkgcXVlc3Rpb24gaW4gdGhlIHN1cnZleS5cIixcbiAgICAgICAgY3JlYXRldHJpZ2dlcjogXCJQbGVhc2UgY3JlYXRlIGEgdHJpZ2dlclwiLFxuICAgICAgICB0cmlnZ2VyT246IFwiT24gXCIsXG4gICAgICAgIHRyaWdnZXJNYWtlUGFnZXNWaXNpYmxlOiBcIk1ha2UgcGFnZXMgdmlzaWJsZTpcIixcbiAgICAgICAgdHJpZ2dlck1ha2VRdWVzdGlvbnNWaXNpYmxlOiBcIk1ha2UgcXVlc3Rpb25zIHZpc2libGU6XCIsXG4gICAgICAgIHRyaWdnZXJDb21wbGV0ZVRleHQ6IFwiQ29tcGxldGUgdGhlIHN1cnZleSBpZiBzdWNjZWVkLlwiLFxuICAgICAgICB0cmlnZ2VyTm90U2V0OiBcIlRoZSB0cmlnZ2VyIGlzIG5vdCBzZXRcIixcbiAgICAgICAgdHJpZ2dlclJ1bklmOiBcIlJ1biBpZlwiLFxuICAgICAgICB0cmlnZ2VyU2V0VG9OYW1lOiBcIkNoYW5nZSB2YWx1ZSBvZjogXCIsXG4gICAgICAgIHRyaWdnZXJTZXRWYWx1ZTogXCJ0bzogXCIsXG4gICAgICAgIHRyaWdnZXJJc1ZhcmlhYmxlOiBcIkRvIG5vdCBwdXQgdGhlIHZhcmlhYmxlIGludG8gdGhlIHN1cnZleSByZXN1bHQuXCIsXG4gICAgICAgIHZlcmJDaGFuZ2VUeXBlOiBcIkNoYW5nZSB0eXBlIFwiLFxuICAgICAgICB2ZXJiQ2hhbmdlUGFnZTogXCJDaGFuZ2UgcGFnZSBcIlxuICAgIH0sXG4gICAgLy9PcGVyYXRvcnNcbiAgICBvcDoge1xuICAgICAgICBlbXB0eTogXCJpcyBlbXB0eVwiLFxuICAgICAgICBub3RlbXB0eTogXCJpcyBub3QgZW1wdHlcIixcbiAgICAgICAgZXF1YWw6IFwiZXF1YWxzXCIsXG4gICAgICAgIG5vdGVxdWFsOiBcIm5vdCBlcXVhbHNcIixcbiAgICAgICAgY29udGFpbnM6IFwiY29udGFpbnNcIixcbiAgICAgICAgbm90Y29udGFpbnM6IFwibm90IGNvbnRhaW5zXCIsXG4gICAgICAgIGdyZWF0ZXI6IFwiZ3JlYXRlclwiLFxuICAgICAgICBsZXNzOiBcImxlc3NcIixcbiAgICAgICAgZ3JlYXRlcm9yZXF1YWw6IFwiZ3JlYXRlciBvciBlcXVhbHNcIixcbiAgICAgICAgbGVzc29yZXF1YWw6IFwiTGVzcyBvciBFcXVhbHNcIlxuICAgIH0sXG4gICAgLy9FbWJlZCB3aW5kb3dcbiAgICBldzoge1xuICAgICAgICBhbmd1bGFyOiBcIlVzZSBBbmd1bGFyIHZlcnNpb25cIixcbiAgICAgICAganF1ZXJ5OiBcIlVzZSBqUXVlcnkgdmVyc2lvblwiLFxuICAgICAgICBrbm9ja291dDogXCJVc2UgS25vY2tvdXQgdmVyc2lvblwiLFxuICAgICAgICByZWFjdDogXCJVc2UgUmVhY3QgdmVyc2lvblwiLFxuICAgICAgICB2dWU6IFwiVXNlIFZ1ZSB2ZXJzaW9uXCIsXG4gICAgICAgIGJvb3RzdHJhcDogXCJGb3IgYm9vdHN0cmFwIGZyYW1ld29ya1wiLFxuICAgICAgICBzdGFuZGFyZDogXCJObyBib290c3RyYXBcIixcbiAgICAgICAgc2hvd09uUGFnZTogXCJTaG93IHN1cnZleSBvbiBhIHBhZ2VcIixcbiAgICAgICAgc2hvd0luV2luZG93OiBcIlNob3cgc3VydmV5IGluIGEgd2luZG93XCIsXG4gICAgICAgIGxvYWRGcm9tU2VydmVyOiBcIkxvYWQgU3VydmV5IEpTT04gZnJvbSBzZXJ2ZXJcIixcbiAgICAgICAgdGl0bGVTY3JpcHQ6IFwiU2NyaXB0cyBhbmQgc3R5bGVzXCIsXG4gICAgICAgIHRpdGxlSHRtbDogXCJIVE1MXCIsXG4gICAgICAgIHRpdGxlSmF2YVNjcmlwdDogXCJKYXZhU2NyaXB0XCJcbiAgICB9LFxuICAgIC8vUHJvcGVydGllc1xuICAgIHA6IHtcbiAgICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICAgIHRpdGxlOiB7IG5hbWU6IFwidGl0bGVcIiwgdGl0bGU6IFwiTGVhdmUgaXQgZW1wdHksIGlmIGl0IGlzIHRoZSBzYW1lIGFzICdOYW1lJ1wiIH0sXG4gICAgICAgIHN1cnZleV90aXRsZTogeyBuYW1lOiBcInRpdGxlXCIsIHRpdGxlOiBcIkl0IHdpbGwgYmUgc2hvd24gb24gZXZlcnkgcGFnZS5cIiB9LFxuICAgICAgICBwYWdlX3RpdGxlOiB7IG5hbWU6IFwidGl0bGVcIiwgdGl0bGU6IFwiUGFnZSB0aXRsZVwiIH1cbiAgICB9XG59O1xuXG5lZGl0b3JMb2NhbGl6YXRpb24ubG9jYWxlc1tcImVuXCJdID0gZGVmYXVsdFN0cmluZ3M7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VkaXRvckxvY2FsaXphdGlvbi50cyIsImV4cG9ydCB2YXIgX19hc3NpZ24gPSBPYmplY3RbXCJhc3NpZ25cIl0gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRhcmdldFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKHRoaXNDbGFzcywgYmFzZUNsYXNzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiYXNlQ2xhc3MpIGlmIChiYXNlQ2xhc3MuaGFzT3duUHJvcGVydHkocCkpIHRoaXNDbGFzc1twXSA9IGJhc2VDbGFzc1twXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IHRoaXNDbGFzczsgfVxuICAgIHRoaXNDbGFzcy5wcm90b3R5cGUgPSBiYXNlQ2xhc3MgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGJhc2VDbGFzcykgOiAoX18ucHJvdG90eXBlID0gYmFzZUNsYXNzLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW50cmllcy9oZWxwZXJzLnRzIiwiaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJU3VydmV5T2JqZWN0RWRpdG9yT3B0aW9ucyB7XG4gICAgYWx3YXlTYXZlVGV4dEluUHJvcGVydHlFZGl0b3JzOiBib29sZWFuO1xuICAgIG9uSXRlbVZhbHVlQWRkZWRDYWxsYmFjayhwcm9wZXJ0eU5hbWU6IHN0cmluZywgaXRlbVZhbHVlOiBTdXJ2ZXkuSXRlbVZhbHVlKTtcbiAgICBvbk1hdHJpeERyb3Bkb3duQ29sdW1uQWRkZWRDYWxsYmFjayhjb2x1bW46IFN1cnZleS5NYXRyaXhEcm9wZG93bkNvbHVtbik7XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2Uge1xuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdEVkaXRvcjogc3RyaW5nID0gXCJzdHJpbmdcIjtcbiAgICBwcml2YXRlIHN0YXRpYyBlZGl0b3JSZWdpc3RlcmVkTGlzdCA9IHt9O1xuICAgIHB1YmxpYyBzdGF0aWMgcmVnaXN0ZXJFZGl0b3IobmFtZTogc3RyaW5nLCBjcmVhdG9yOiAoKSA9PiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UpIHtcbiAgICAgICAgU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLmVkaXRvclJlZ2lzdGVyZWRMaXN0W25hbWVdID0gY3JlYXRvcjtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBjcmVhdGVFZGl0b3IoZWRpdG9yVHlwZTogc3RyaW5nLCBmdW5jOiAobmV3VmFsdWU6IGFueSkgPT4gYW55KTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHtcbiAgICAgICAgdmFyIGNyZWF0b3IgPSBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UuZWRpdG9yUmVnaXN0ZXJlZExpc3RbZWRpdG9yVHlwZV07XG4gICAgICAgIGlmICghY3JlYXRvcikgY3JlYXRvciA9IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5lZGl0b3JSZWdpc3RlcmVkTGlzdFtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UuZGVmYXVsdEVkaXRvcl07XG4gICAgICAgIHZhciBwcm9wZXJ0eUVkaXRvciA9IGNyZWF0b3IoKTtcbiAgICAgICAgcHJvcGVydHlFZGl0b3Iub25DaGFuZ2VkID0gZnVuYztcbiAgICAgICAgcmV0dXJuIHByb3BlcnR5RWRpdG9yO1xuICAgIH1cblxuICAgIHByaXZhdGUgdmFsdWVfOiBhbnkgPSBudWxsO1xuICAgIHB1YmxpYyBvcHRpb25zOiBJU3VydmV5T2JqZWN0RWRpdG9yT3B0aW9ucyA9IG51bGw7XG4gICAgcHVibGljIG9uQ2hhbmdlZDogKG5ld1ZhbHVlOiBhbnkpID0+IGFueTtcbiAgICBwdWJsaWMgb25HZXRMb2NhbGU6ICgpID0+IHN0cmluZztcbiAgICBwdWJsaWMgZWRpdGFibGVQcm9wZXJ0eU5hbWU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHRocm93IFwiZWRpdG9yVHlwZSBpcyBub3QgZGVmaW5lZFwiOyB9XG4gICAgcHVibGljIGdldFZhbHVlVGV4dCh2YWx1ZTogYW55KTogc3RyaW5nIHsgcmV0dXJuIHZhbHVlOyB9XG4gICAgcHVibGljIGdldCB2YWx1ZSgpOiBhbnkgeyByZXR1cm4gdGhpcy52YWx1ZV87IH1cbiAgICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLmdldENvcnJlY3RlZFZhbHVlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZUNvcmUodmFsdWUpO1xuICAgICAgICB0aGlzLm9uVmFsdWVDaGFuZ2VkKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgbG9jYWxlKCkgOiBzdHJpbmcgeyBcbiAgICAgICAgaWYodGhpcy5vbkdldExvY2FsZSkgcmV0dXJuIHRoaXMub25HZXRMb2NhbGUoKTtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBzZXRWYWx1ZUNvcmUodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLnZhbHVlXyA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0VGl0bGUodmFsdWU6IHN0cmluZykgeyB9XG4gICAgcHVibGljIHNldE9iamVjdCh2YWx1ZTogYW55KSB7IH1cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRDb3JyZWN0ZWRWYWx1ZSh2YWx1ZTogYW55KTogYW55IHsgIHJldHVybiB2YWx1ZTsgIH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlTdHJpbmdQcm9wZXJ0eUVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJzdHJpbmdcIjsgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleURyb3Bkb3duUHJvcGVydHlFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwiZHJvcGRvd25cIjsgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleUJvb2xlYW5Qcm9wZXJ0eUVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJib29sZWFuXCI7IH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlOdW1iZXJQcm9wZXJ0eUVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJudW1iZXJcIjsgfVxufVxuXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJzdHJpbmdcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5U3RyaW5nUHJvcGVydHlFZGl0b3IoKTsgfSk7XG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJkcm9wZG93blwiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlEcm9wZG93blByb3BlcnR5RWRpdG9yKCk7IH0pO1xuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwiYm9vbGVhblwiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlCb29sZWFuUHJvcGVydHlFZGl0b3IoKTsgfSk7XG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJudW1iZXJcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5TnVtYmVyUHJvcGVydHlFZGl0b3IoKTsgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUVkaXRvckJhc2UudHMiLCJpbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgZW51bSBPYmpUeXBlIHsgVW5rbm93biwgU3VydmV5LCBQYWdlLCBQYW5lbCwgUXVlc3Rpb24gfVxuZXhwb3J0IGNsYXNzIFN1cnZleUhlbHBlciB7XG4gICAgcHVibGljIHN0YXRpYyBnZXROZXdQYWdlTmFtZShvYmpzOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIHJldHVybiBTdXJ2ZXlIZWxwZXIuZ2V0TmV3TmFtZShvYmpzLCBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZWQubmV3UGFnZU5hbWVcIikpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldE5ld1F1ZXN0aW9uTmFtZShvYmpzOiBBcnJheTxhbnk+KSB7XG4gICAgICAgIHJldHVybiBTdXJ2ZXlIZWxwZXIuZ2V0TmV3TmFtZShvYmpzLCBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwiZWQubmV3UXVlc3Rpb25OYW1lXCIpKTtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXROZXdQYW5lbE5hbWUob2JqczogQXJyYXk8YW55Pikge1xuICAgICAgICByZXR1cm4gU3VydmV5SGVscGVyLmdldE5ld05hbWUob2JqcywgZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcImVkLm5ld1BhbmVsTmFtZVwiKSk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmV3TmFtZShvYmpzOiBBcnJheTxhbnk+LCBiYXNlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgdmFyIGhhc2ggPSB7fTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmpzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBoYXNoW29ianNbaV0ubmFtZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBudW0gPSAxO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKCFoYXNoW2Jhc2VOYW1lICsgbnVtLnRvU3RyaW5nKCldKSBicmVhaztcbiAgICAgICAgICAgIG51bSsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiYXNlTmFtZSArIG51bS50b1N0cmluZygpO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIGdldE9iamVjdFR5cGUob2JqOiBhbnkpOiBPYmpUeXBlIHtcbiAgICAgICAgaWYgKCFvYmogfHwgIW9ialtcImdldFR5cGVcIl0pIHJldHVybiBPYmpUeXBlLlVua25vd247XG4gICAgICAgIGlmIChvYmouZ2V0VHlwZSgpID09IFwicGFnZVwiKSByZXR1cm4gT2JqVHlwZS5QYWdlO1xuICAgICAgICBpZiAob2JqLmdldFR5cGUoKSA9PSBcInBhbmVsXCIpIHJldHVybiBPYmpUeXBlLlBhbmVsO1xuICAgICAgICBpZiAob2JqLmdldFR5cGUoKSA9PSBcInN1cnZleVwiKSByZXR1cm4gT2JqVHlwZS5TdXJ2ZXk7XG4gICAgICAgIGlmIChvYmpbXCJuYW1lXCJdKSByZXR1cm4gT2JqVHlwZS5RdWVzdGlvbjtcbiAgICAgICAgcmV0dXJuIE9ialR5cGUuVW5rbm93bjtcbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXRPYmplY3ROYW1lKG9iajogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKG9ialtcIm5hbWVcIl0pIHJldHVybiBvYmpbXCJuYW1lXCJdO1xuICAgICAgICB2YXIgb2JqVHlwZSA9IFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9iaik7XG4gICAgICAgIGlmIChvYmpUeXBlICE9IE9ialR5cGUuUGFnZSkgcmV0dXJuIFwiXCI7XG4gICAgICAgIHZhciBkYXRhID0gPFN1cnZleS5TdXJ2ZXk+KDxTdXJ2ZXkuUGFnZT5vYmopLmRhdGE7XG4gICAgICAgIHZhciBpbmRleCA9IGRhdGEucGFnZXMuaW5kZXhPZig8U3VydmV5LlBhZ2U+b2JqKTtcbiAgICAgICAgcmV0dXJuIFwiW1BhZ2UgXCIgKyAoaW5kZXggKyAxKSArIFwiXVwiO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3VydmV5SGVscGVyLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5TW9kYWxFZGl0b3J9IGZyb20gXCIuL3Byb3BlcnR5TW9kYWxFZGl0b3JcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlNb2RhbEVkaXRvciB7XG4gICAgcHVibGljIGtvSXRlbXM6IGFueTtcbiAgICBwdWJsaWMgb25EZWxldGVDbGljazogYW55O1xuICAgIHB1YmxpYyBvbk1vdmVVcENsaWNrOiBhbnk7XG4gICAgcHVibGljIG9uTW92ZURvd25DbGljazogYW55O1xuICAgIHB1YmxpYyBvbkFkZENsaWNrOiBhbnk7XG4gICAgcHVibGljIG9uQ2xlYXJDbGljazogYW55O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMua29JdGVtcyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLnZhbHVlID0gW107XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgc2VsZi5vbkRlbGV0ZUNsaWNrID0gZnVuY3Rpb24gKGl0ZW0pIHsgc2VsZi5rb0l0ZW1zLnJlbW92ZShpdGVtKTsgfTtcbiAgICAgICAgc2VsZi5vbkNsZWFyQ2xpY2sgPSBmdW5jdGlvbiAoaXRlbSkgeyBzZWxmLmtvSXRlbXMucmVtb3ZlQWxsKCk7IH07XG4gICAgICAgIHNlbGYub25BZGRDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5BZGRJdGVtKCk7IH07XG4gICAgICAgIHNlbGYub25Nb3ZlVXBDbGljayA9IGZ1bmN0aW9uIChpdGVtKSB7IHNlbGYubW92ZVVwKGl0ZW0pOyB9O1xuICAgICAgICBzZWxmLm9uTW92ZURvd25DbGljayA9IGZ1bmN0aW9uIChpdGVtKSB7IHNlbGYubW92ZURvd24oaXRlbSk7IH07XG4gICAgfVxuICAgIHB1YmxpYyBnZXRWYWx1ZVRleHQodmFsdWU6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIHZhciBsZW4gPSB2YWx1ZSA/IHZhbHVlLmxlbmd0aCA6IDA7XG4gICAgICAgIHJldHVybiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUuaXRlbXNcIilbXCJmb3JtYXRcIl0obGVuKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldENvcnJlY3RlZFZhbHVlKHZhbHVlOiBhbnkpOiBhbnkge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW107XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIEFkZEl0ZW0oKSB7XG4gICAgICAgIHRoaXMua29JdGVtcy5wdXNoKHRoaXMuY3JlYXRlTmV3RWRpdG9ySXRlbSgpKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG1vdmVVcChpdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGFyciA9IHRoaXMua29JdGVtcygpO1xuICAgICAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMSkgcmV0dXJuO1xuICAgICAgICBhcnJbaW5kZXhdID0gYXJyW2luZGV4IC0gMV07XG4gICAgICAgIGFycltpbmRleCAtIDFdID0gaXRlbTtcbiAgICAgICAgdGhpcy5rb0l0ZW1zKGFycik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBtb3ZlRG93bihpdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGFyciA9IHRoaXMua29JdGVtcygpO1xuICAgICAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSBhcnIubGVuZ3RoIC0gMSkgcmV0dXJuO1xuICAgICAgICBhcnJbaW5kZXhdID0gYXJyW2luZGV4ICsgMV07XG4gICAgICAgIGFycltpbmRleCArIDFdID0gaXRlbTtcbiAgICAgICAgdGhpcy5rb0l0ZW1zKGFycik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5rb0l0ZW1zKHRoaXMuZ2V0SXRlbXNGcm9tVmFsdWUoKSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldEl0ZW1zRnJvbVZhbHVlKHZhbHVlOiBhbnkgPSBudWxsKTogQXJyYXk8YW55PiB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICBpZighdmFsdWUpIHZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaXRlbXMucHVzaCh0aGlzLmNyZWF0ZUVkaXRvckl0ZW0odmFsdWVbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkJlZm9yZUFwcGx5KCkge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgdmFyIGludGVybmFsSXRlbXMgPSB0aGlzLmtvSXRlbXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnRlcm5hbEl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKHRoaXMuY3JlYXRlSXRlbUZyb21FZGl0b3JJdGVtKGludGVybmFsSXRlbXNbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFZhbHVlQ29yZShpdGVtcyk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVOZXdFZGl0b3JJdGVtKCk6IGFueSB7IHRocm93IFwiT3ZlcnJpZGUgJ2NyZWF0ZU5ld0VkaXRvckl0ZW0nIG1ldGhvZFwiOyB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVkaXRvckl0ZW0oaXRlbTogYW55KSB7IHJldHVybiBpdGVtOyB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUl0ZW1Gcm9tRWRpdG9ySXRlbShlZGl0b3JJdGVtOiBhbnkpIHsgIHJldHVybiBlZGl0b3JJdGVtOyAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlJdGVtc0VkaXRvci50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0ICogYXMgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlNb2RhbEVkaXRvcn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU1vZGFsRWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZSwgSVN1cnZleU9iamVjdEVkaXRvck9wdGlvbnN9ICBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCB7U3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUHJvcGVydHksIFN1cnZleVF1ZXN0aW9uRWRpdG9yR2VuZXJhbFJvdywgU3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUHJvcGVydGllc30gZnJvbSBcIi4vcXVlc3Rpb25FZGl0b3JHZW5lcmFsUHJvcGVydGllc1wiO1xuaW1wb3J0IHtTdXJ2ZXlRdWVzdGlvbkVkaXRvckRlZmluaXRpb259IGZyb20gXCIuL3F1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvblwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5RWRpdG9yU2hvd1dpbmRvdyB7XG4gICAga29WaXNpYmxlOiBhbnk7XG4gICAga29FZGl0b3I6IGFueTtcbiAgICBwdWJsaWMgb25DYW5TaG93UHJvcGVydHlDYWxsYmFjazogKG9iamVjdDogYW55LCBwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSkgPT4gYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5rb1Zpc2libGUgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5rb0VkaXRvciA9IGtvLm9ic2VydmFibGUobnVsbCk7XG4gICAgfVxuICAgIHB1YmxpYyBzaG93KHF1ZXN0aW9uQmFzZTogU3VydmV5LlF1ZXN0aW9uQmFzZSwgb25DaGFuZ2VkOiAocXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpID0+IGFueSwgb3B0aW9uczogSVN1cnZleU9iamVjdEVkaXRvck9wdGlvbnMgPSBudWxsKSB7XG4gICAgICAgIHZhciBlZGl0b3IgPSBuZXcgU3VydmV5UXVlc3Rpb25FZGl0b3IocXVlc3Rpb25CYXNlLCB0aGlzLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2ssIG51bGwsIG9wdGlvbnMpO1xuICAgICAgICBlZGl0b3Iub25DaGFuZ2VkID0gb25DaGFuZ2VkO1xuXG4gICAgICAgIHRoaXMua29FZGl0b3IoZWRpdG9yKTtcbiAgICAgICAgdGhpcy5rb1Zpc2libGUodHJ1ZSk7XG4gICAgICAgIGpRdWVyeShcIiNzdXJ2ZXlxdWVzdGlvbmVkaXRvcndpbmRvd1wiKS5tb2RhbChcInNob3dcIik7XG4gICAgICAgIGVkaXRvci5vbkhpZGVXaW5kb3cgPSBmdW5jdGlvbigpIHtqUXVlcnkoXCIjc3VydmV5cXVlc3Rpb25lZGl0b3J3aW5kb3dcIikubW9kYWwoXCJoaWRlXCIpO307XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UXVlc3Rpb25Qcm9wZXJ0aWVzIHtcbiAgICBwcml2YXRlIHByb3BlcnRpZXM6IEFycmF5PFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHk+O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBvYmo6IFN1cnZleS5CYXNlLCBwdWJsaWMgb25DYW5TaG93UHJvcGVydHlDYWxsYmFjazogKG9iamVjdDogYW55LCBwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSkgPT4gYm9vbGVhbikge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRQcm9wZXJ0aWVzKHRoaXMub2JqLmdldFR5cGUoKSk7IFxuICAgIH1cbiAgICBwdWJsaWMgZ2V0UHJvcGVydHkocHJvcGVydHlOYW1lOiBzdHJpbmcpOiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5IHtcbiAgICAgICAgdmFyIHByb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BlcnRpZXNbaV0ubmFtZSA9PSBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllc1tpXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihwcm9wZXJ0eSAmJiBwcm9wZXJ0eVtcInZpc2libGVcIl0gPT09IGZhbHNlKSBwcm9wZXJ0eSA9IG51bGw7XG4gICAgICAgIGlmIChwcm9wZXJ0eSAmJiB0aGlzLm9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrKHRoaXMub2JqLCBwcm9wZXJ0eSkpIHByb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcGVydHk7XG4gICAgfSBcbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uRWRpdG9yIHtcbiAgICBwcm90ZWN0ZWQgcHJvcGVydGllczogU3VydmV5UXVlc3Rpb25Qcm9wZXJ0aWVzO1xuICAgIHB1YmxpYyBvbkNoYW5nZWQ6IChvYmo6IFN1cnZleS5CYXNlKSA9PiBhbnk7XG4gICAgcHVibGljIG9uSGlkZVdpbmRvdzogKCk9PiBhbnk7XG4gICAgcHVibGljIG9uT2tDbGljazogYW55O1xuICAgIHB1YmxpYyBvbkFwcGx5Q2xpY2s6IGFueTtcbiAgICBwdWJsaWMgb25SZXNldENsaWNrOiBhbnk7XG4gICAga29UYWJzOiBhbnk7IGtvQWN0aXZlVGFiOiBhbnk7IGtvVGl0bGU6IGFueTtcbiAgICBvblRhYkNsaWNrOiBhbnk7XG4gICAgY29uc3RydWN0b3IocHVibGljIG9iajogU3VydmV5LkJhc2UsIHB1YmxpYyBvbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrOiAob2JqZWN0OiBhbnksIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5KSA9PiBib29sZWFuLCBcbiAgICAgICAgcHVibGljIGNsYXNzTmFtZTogc3RyaW5nID0gbnVsbCwgcHVibGljIG9wdGlvbnM6IElTdXJ2ZXlPYmplY3RFZGl0b3JPcHRpb25zID0gbnVsbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmKCF0aGlzLmNsYXNzTmFtZSkgdGhpcy5jbGFzc05hbWUgPSB0aGlzLm9iai5nZXRUeXBlKCk7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IG5ldyBTdXJ2ZXlRdWVzdGlvblByb3BlcnRpZXMob2JqLCBvbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrKTtcbiAgICAgICAgc2VsZi5vbkFwcGx5Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuYXBwbHkoKTsgfTtcbiAgICAgICAgc2VsZi5vbk9rQ2xpY2sgPSBmdW5jdGlvbigpIHtzZWxmLmFwcGx5KCk7IGlmKCFzZWxmLmhhc0Vycm9yKCkgJiYgc2VsZi5vbkhpZGVXaW5kb3cpIHNlbGYub25IaWRlV2luZG93KCk7IH07XG4gICAgICAgIHNlbGYub25SZXNldENsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLnJlc2V0KCk7IH07XG4gICAgICAgIHRoaXMub25UYWJDbGljayA9IGZ1bmN0aW9uICh0YWIpIHsgc2VsZi5rb0FjdGl2ZVRhYih0YWIubmFtZSk7IH07XG4gICAgICAgIHZhciB0YWJzID0gdGhpcy5idWlsZFRhYnMoKTtcbiAgICAgICAgdGhpcy5rb0FjdGl2ZVRhYiA9IGtvLm9ic2VydmFibGUodGFic1swXS5uYW1lKTtcbiAgICAgICAgdGhpcy5rb1RhYnMgPSBrby5vYnNlcnZhYmxlQXJyYXkodGFicyk7XG4gICAgICAgIHRoaXMua29UaXRsZSA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgaWYodGhpcy5vYmpbXCJuYW1lXCJdKSB7XG4gICAgICAgICAgICB0aGlzLmtvVGl0bGUoZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnFFZGl0b3JUaXRsZVwiKVtcImZvcm1hdFwiXSh0aGlzLm9ialtcIm5hbWVcIl0pKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciB0YWJzID0gdGhpcy5rb1RhYnMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGFic1tpXS5oYXNFcnJvcigpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5rb0FjdGl2ZVRhYih0YWJzW2ldLm5hbWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB2YXIgdGFicyA9IHRoaXMua29UYWJzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGFic1tpXS5yZXNldCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBhcHBseSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzRXJyb3IoKSkgcmV0dXJuO1xuICAgICAgICB2YXIgdGFicyA9IHRoaXMua29UYWJzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGFic1tpXS5hcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9uQ2hhbmdlZCkge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZWQodGhpcy5vYmopO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgYnVpbGRUYWJzKCk6IEFycmF5PFN1cnZleVF1ZXN0aW9uRWRpdG9yVGFiQmFzZT4ge1xuICAgICAgICB2YXIgdGFicyA9IFtdO1xuICAgICAgICB2YXIgcHJvcGVydGllcyA9IG5ldyBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0aWVzKHRoaXMub2JqLCBTdXJ2ZXlRdWVzdGlvbkVkaXRvckRlZmluaXRpb24uZ2V0UHJvcGVydGllcyh0aGlzLmNsYXNzTmFtZSksIHRoaXMub25DYW5TaG93UHJvcGVydHlDYWxsYmFjayk7XG4gICAgICAgIHRhYnMucHVzaChuZXcgU3VydmV5UXVlc3Rpb25FZGl0b3JUYWJHZW5lcmFsKHRoaXMub2JqLCBwcm9wZXJ0aWVzKSk7XG4gICAgICAgIHRoaXMuYWRkUHJvcGVydGllc1RhYnModGFicyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGFic1tpXS5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrID0gdGhpcy5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YWJzO1xuICAgIH1cbiAgICBwcml2YXRlIGFkZFByb3BlcnRpZXNUYWJzKHRhYnM6IEFycmF5PFN1cnZleVF1ZXN0aW9uRWRpdG9yVGFiQmFzZT4pIHtcbiAgICAgICAgdmFyIHRhYk5hbWVzID0gU3VydmV5UXVlc3Rpb25FZGl0b3JEZWZpbml0aW9uLmdldFRhYnModGhpcy5jbGFzc05hbWUpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYk5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdGFiSXRlbSA9IHRhYk5hbWVzW2ldO1xuICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzLmdldFByb3BlcnR5KHRhYkl0ZW0ubmFtZSk7XG4gICAgICAgICAgICBpZiAoIXByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciBlZGl0b3JUYWIgPSBuZXcgU3VydmV5UXVlc3Rpb25FZGl0b3JUYWJQcm9wZXJ0eSh0aGlzLm9iaiwgcHJvcGVydHksIHRoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICBpZiAodGFiSXRlbS50aXRsZSkgZWRpdG9yVGFiLnRpdGxlID0gdGFiSXRlbS50aXRsZTtcbiAgICAgICAgICAgIHRhYnMucHVzaChlZGl0b3JUYWIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UXVlc3Rpb25FZGl0b3JUYWJCYXNlIHtcbiAgICBwcml2YXRlIHRpdGxlVmFsdWU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb2JqOiBTdXJ2ZXkuQmFzZSkge1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHsgcmV0dXJuIFwibmFtZVwiOyB9XG4gICAgcHVibGljIGdldCB0aXRsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMudGl0bGVWYWx1ZSkgcmV0dXJuIHRoaXMudGl0bGVWYWx1ZTtcbiAgICAgICAgdmFyIHN0ciA9IGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS50YWJzLlwiICsgdGhpcy5uYW1lKTtcbiAgICAgICAgcmV0dXJuIHN0ciA/IHN0ciA6IHRoaXMubmFtZTtcbiAgICB9XG4gICAgcHVibGljIHNldCB0aXRsZSh2YWx1ZTogc3RyaW5nKSB7IHRoaXMudGl0bGVWYWx1ZSA9IHZhbHVlOyB9XG4gICAgcHVibGljIGdldCBodG1sVGVtcGxhdGUoKTogc3RyaW5nIHsgcmV0dXJuIFwicXVlc3Rpb25lZGl0b3J0YWItXCIgKyB0aGlzLm5hbWU7IH1cbiAgICBwdWJsaWMgZ2V0IHRlbXBsYXRlT2JqZWN0KCk6IGFueSB7IHJldHVybiB0aGlzOyB9XG4gICAgcHVibGljIGhhc0Vycm9yKCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cbiAgICBwdWJsaWMgcmVzZXQoKSB7IH1cbiAgICBwdWJsaWMgYXBwbHkoKSB7IH1cbiAgICBwcm90ZWN0ZWQgZ2V0VmFsdWUocHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHkpOiBhbnkge1xuXHRpZihwcm9wZXJ0eVtcImdldFByb3BlcnR5VmFsdWVcIl0pIHJldHVybiBwcm9wZXJ0eVtcImdldFByb3BlcnR5VmFsdWVcIl0odGhpcy5vYmopOyAvL1RPRE8gbWFrZSB0aGUgb25seSBjYWxsXG4gICAgICAgIGlmIChwcm9wZXJ0eS5oYXNUb1VzZUdldFZhbHVlKSByZXR1cm4gcHJvcGVydHkuZ2V0VmFsdWUodGhpcy5vYmopO1xuICAgICAgICByZXR1cm4gdGhpcy5vYmpbcHJvcGVydHkubmFtZV07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UXVlc3Rpb25FZGl0b3JUYWJHZW5lcmFsIGV4dGVuZHMgU3VydmV5UXVlc3Rpb25FZGl0b3JUYWJCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb2JqOiBTdXJ2ZXkuQmFzZSwgcHVibGljIHByb3BlcnRpZXM6IFN1cnZleVF1ZXN0aW9uRWRpdG9yR2VuZXJhbFByb3BlcnRpZXMgPSBudWxsKSB7XG4gICAgICAgIHN1cGVyKG9iaik7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXMgPyBwcm9wZXJ0aWVzIDogbmV3IFN1cnZleVF1ZXN0aW9uRWRpdG9yR2VuZXJhbFByb3BlcnRpZXMob2JqLCBTdXJ2ZXlRdWVzdGlvbkVkaXRvckRlZmluaXRpb24uZ2V0UHJvcGVydGllcyhvYmouZ2V0VHlwZSgpKSwgbnVsbCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgbmFtZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJnZW5lcmFsXCI7IH1cbiAgICBwdWJsaWMgZ2V0IGh0bWxUZW1wbGF0ZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJxdWVzdGlvbmVkaXRvcnRhYi1nZW5lcmFsXCI7IH1cbiAgICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnByb3BlcnRpZXMuaGFzRXJyb3IoKTsgfSBcbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllcy5yZXNldCgpO1xuICAgIH1cbiAgICBwdWJsaWMgYXBwbHkoKSB7XG4gICAgICAgIHRoaXMucHJvcGVydGllcy5hcHBseSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uRWRpdG9yVGFiUHJvcGVydHkgZXh0ZW5kcyBTdXJ2ZXlRdWVzdGlvbkVkaXRvclRhYkJhc2Uge1xuICAgIHByaXZhdGUgcHJvcGVydHlFZGl0b3JWYWx1ZTogU3VydmV5UHJvcGVydHlNb2RhbEVkaXRvcjtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb2JqOiBTdXJ2ZXkuQmFzZSwgcHVibGljIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5LCBwdWJsaWMgb3B0aW9uczogSVN1cnZleU9iamVjdEVkaXRvck9wdGlvbnMgPSBudWxsKSB7XG4gICAgICAgIHN1cGVyKG9iaik7XG4gICAgICAgIHRoaXMucHJvcGVydHlFZGl0b3JWYWx1ZSA9IDxTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yPlN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5jcmVhdGVFZGl0b3IodGhpcy5wcm9wZXJ0eS50eXBlLCBudWxsKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnByb3BlcnR5RWRpdG9yVmFsdWUub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMucHJvcGVydHlFZGl0b3JWYWx1ZS5vbkdldExvY2FsZSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gc2VsZi5kb09uR2V0TG9jYWxlKCkgfTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eUVkaXRvclZhbHVlLnZhbHVlID0gdGhpcy5nZXRWYWx1ZSh0aGlzLnByb3BlcnR5KTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eUVkaXRvclZhbHVlLmVkaXRhYmxlUHJvcGVydHlOYW1lID0gdGhpcy5wcm9wZXJ0eS5uYW1lO1xuICAgIH1cbiAgICBwcml2YXRlIGRvT25HZXRMb2NhbGUoKTogc3RyaW5nIHtcbiAgICAgICAgaWYodGhpcy5vYmogJiYgdGhpcy5vYmpbXCJnZXRMb2NhbGVcIl0pIHJldHVybiB0aGlzLm9ialtcImdldExvY2FsZVwiXSgpO1xuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLnByb3BlcnR5Lm5hbWU7IH1cbiAgICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnByb3BlcnR5RWRpdG9yLmhhc0Vycm9yKCk7IH1cbiAgICBwdWJsaWMgZ2V0IGh0bWxUZW1wbGF0ZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtXCIgKyB0aGlzLnByb3BlcnR5LnR5cGU7IH1cbiAgICBwdWJsaWMgZ2V0IHRlbXBsYXRlT2JqZWN0KCk6IGFueSB7IHJldHVybiB0aGlzLnByb3BlcnR5RWRpdG9yOyB9XG4gICAgcHVibGljIGdldCBwcm9wZXJ0eUVkaXRvcigpOiBTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yIHsgcmV0dXJuIHRoaXMucHJvcGVydHlFZGl0b3JWYWx1ZTsgfVxuICAgIHB1YmxpYyByZXNldCgpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eUVkaXRvclZhbHVlLnZhbHVlID0gdGhpcy5nZXRWYWx1ZSh0aGlzLnByb3BlcnR5KTtcbiAgICB9XG4gICAgcHVibGljIGFwcGx5KCkge1xuICAgICAgICB0aGlzLnByb3BlcnR5RWRpdG9yLmFwcGx5KCk7XG4gICAgICAgIHRoaXMub2JqW3RoaXMucHJvcGVydHkubmFtZV0gPSB0aGlzLnByb3BlcnR5RWRpdG9yVmFsdWUudmFsdWU7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25FZGl0b3IudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7U3VydmV5T2JqZWN0UHJvcGVydHl9IGZyb20gXCIuL29iamVjdFByb3BlcnR5XCI7XG5pbXBvcnQge0lTdXJ2ZXlPYmplY3RFZGl0b3JPcHRpb25zfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5T2JqZWN0RWRpdG9yIHtcbiAgICBwcml2YXRlIHNlbGVjdGVkT2JqZWN0VmFsdWU6IGFueTtcbiAgICBwdWJsaWMga29Qcm9wZXJ0aWVzOiBhbnk7XG4gICAgcHVibGljIGtvQWN0aXZlUHJvcGVydHk6IGFueTtcbiAgICBwdWJsaWMga29IYXNPYmplY3Q6IGFueTtcbiAgICBwdWJsaWMgb25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZDogU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleU9iamVjdEVkaXRvciwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleU9iamVjdEVkaXRvciwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25DYW5TaG93UHJvcGVydHlDYWxsYmFjazogKG9iamVjdDogYW55LCBwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSkgPT4gYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwcm9wZXJ0eUVkaXRvck9wdGlvbnM6IElTdXJ2ZXlPYmplY3RFZGl0b3JPcHRpb25zID0gbnVsbCkge1xuICAgICAgICB0aGlzLmtvUHJvcGVydGllcyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLmtvQWN0aXZlUHJvcGVydHkgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMua29IYXNPYmplY3QgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWRPYmplY3QoKTogYW55IHsgcmV0dXJuIHRoaXMuc2VsZWN0ZWRPYmplY3RWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgc2VsZWN0ZWRPYmplY3QodmFsdWU6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9iamVjdFZhbHVlID09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMua29IYXNPYmplY3QodmFsdWUgIT0gbnVsbCk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3RWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVByb3BlcnRpZXMoKTtcbiAgICAgICAgdGhpcy51cGRhdGVQcm9wZXJ0aWVzT2JqZWN0KCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXRQcm9wZXJ0eUVkaXRvcihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSB0aGlzLmtvUHJvcGVydGllcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2ldLm5hbWUgPT0gbmFtZSkgcmV0dXJuIHByb3BlcnRpZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHB1YmxpYyBjaGFuZ2VBY3RpdmVQcm9wZXJ0eShwcm9wZXJ0eTogU3VydmV5T2JqZWN0UHJvcGVydHkpIHtcbiAgICAgICAgdGhpcy5rb0FjdGl2ZVByb3BlcnR5KHByb3BlcnR5KTtcbiAgICB9XG4gICAgcHVibGljIE9iamVjdENoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUHJvcGVydGllc09iamVjdCgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgdXBkYXRlUHJvcGVydGllcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkT2JqZWN0IHx8ICF0aGlzLnNlbGVjdGVkT2JqZWN0LmdldFR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMua29Qcm9wZXJ0aWVzKFtdKTtcbiAgICAgICAgICAgIHRoaXMua29BY3RpdmVQcm9wZXJ0eShudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJvcGVydGllcyA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmdldFByb3BlcnRpZXModGhpcy5zZWxlY3RlZE9iamVjdC5nZXRUeXBlKCkpO1xuICAgICAgICBwcm9wZXJ0aWVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLm5hbWUgPT0gYi5uYW1lKSByZXR1cm4gMDtcbiAgICAgICAgICAgIGlmIChhLm5hbWUgPiBiLm5hbWUpIHJldHVybiAxO1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIG9iamVjdFByb3BlcnRpZXMgPSBbXTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgcHJvcEV2ZW50ID0gKHByb3BlcnR5OiBTdXJ2ZXlPYmplY3RQcm9wZXJ0eSwgbmV3VmFsdWU6IGFueSkgPT4ge1xuICAgICAgICAgICAgc2VsZi5vblByb3BlcnR5VmFsdWVDaGFuZ2VkLmZpcmUodGhpcywgeyBwcm9wZXJ0eTogcHJvcGVydHkucHJvcGVydHksIG9iamVjdDogcHJvcGVydHkub2JqZWN0LCBuZXdWYWx1ZTogbmV3VmFsdWUgfSk7XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNhblNob3dQcm9wZXJ0eShwcm9wZXJ0aWVzW2ldKSkgY29udGludWU7XG4gICAgICAgICAgICB2YXIgb2JqZWN0UHJvcGVydHkgPSBuZXcgU3VydmV5T2JqZWN0UHJvcGVydHkocHJvcGVydGllc1tpXSwgcHJvcEV2ZW50LCB0aGlzLnByb3BlcnR5RWRpdG9yT3B0aW9ucyk7XG4gICAgICAgICAgICB2YXIgbG9jTmFtZSA9IHRoaXMuc2VsZWN0ZWRPYmplY3QuZ2V0VHlwZSgpICsgJ18nICsgcHJvcGVydGllc1tpXS5uYW1lO1xuICAgICAgICAgICAgb2JqZWN0UHJvcGVydHkuZGlzcGxheU5hbWUgPSBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0UHJvcGVydHlOYW1lKGxvY05hbWUpO1xuICAgICAgICAgICAgdmFyIHRpdGxlID0gZWRpdG9yTG9jYWxpemF0aW9uLmdldFByb3BlcnR5VGl0bGUobG9jTmFtZSk7XG4gICAgICAgICAgICBpZiAoIXRpdGxlKSB0aXRsZSA9IG9iamVjdFByb3BlcnR5LmRpc3BsYXlOYW1lO1xuICAgICAgICAgICAgb2JqZWN0UHJvcGVydHkudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgICAgIG9iamVjdFByb3BlcnRpZXMucHVzaChvYmplY3RQcm9wZXJ0eSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb1Byb3BlcnRpZXMob2JqZWN0UHJvcGVydGllcyk7XG4gICAgICAgIHRoaXMua29BY3RpdmVQcm9wZXJ0eSh0aGlzLmdldFByb3BlcnR5RWRpdG9yKFwibmFtZVwiKSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjYW5TaG93UHJvcGVydHkocHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHkpOiBib29sZWFuIHtcbiAgICAgICAgaWYocHJvcGVydHlbXCJ2aXNpYmxlXCJdID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrKSByZXR1cm4gdGhpcy5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrKHRoaXMuc2VsZWN0ZWRPYmplY3QsIHByb3BlcnR5KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCB1cGRhdGVQcm9wZXJ0aWVzT2JqZWN0KCkge1xuICAgICAgICB2YXIgcHJvcGVydGllcyA9IHRoaXMua29Qcm9wZXJ0aWVzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcHJvcGVydGllc1tpXS5vYmplY3QgPSB0aGlzLnNlbGVjdGVkT2JqZWN0O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vYmplY3RFZGl0b3IudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5TW9kYWxFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2Uge1xuICAgIHB1YmxpYyBvYmplY3Q6IGFueTtcbiAgICBwdWJsaWMgdGl0bGU6IGFueTtcbiAgICBwdWJsaWMgb25BcHBseUNsaWNrOiBhbnk7XG4gICAgcHVibGljIG9uUmVzZXRDbGljazogYW55O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRpdGxlID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNlbGYub25BcHBseUNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmFwcGx5KCk7IH07XG4gICAgICAgIHNlbGYub25SZXNldENsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLnJlc2V0KCk7IH07XG4gICAgfVxuICAgIHB1YmxpYyBzZXRUaXRsZSh2YWx1ZTogc3RyaW5nKSB7IHRoaXMudGl0bGUodmFsdWUpOyB9XG4gICAgcHVibGljIGhhc0Vycm9yKCk6IGJvb2xlYW4geyByZXR1cm4gZmFsc2U7IH1cbiAgICBwcm90ZWN0ZWQgb25CZWZvcmVBcHBseSgpIHsgfVxuICAgIHByaXZhdGUgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0T2JqZWN0KHZhbHVlOiBhbnkpIHsgdGhpcy5vYmplY3QgPSB2YWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgaXNFZGl0YWJsZSgpOiBib29sZWFuIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgcHVibGljIGFwcGx5KCkge1xuICAgICAgICBpZiAodGhpcy5oYXNFcnJvcigpKSByZXR1cm47XG4gICAgICAgIHRoaXMub25CZWZvcmVBcHBseSgpO1xuICAgICAgICBpZiAodGhpcy5vbkNoYW5nZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2VkKHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlUZXh0RWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlNb2RhbEVkaXRvciB7XG4gICAgcHVibGljIGtvVmFsdWU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtvVmFsdWUgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJ0ZXh0XCI7IH1cbiAgICBwdWJsaWMgZ2V0IGlzRWRpdGFibGUoKTogYm9vbGVhbiB7IHJldHVybiB0cnVlOyB9XG4gICAgcHVibGljIGdldFZhbHVlVGV4dCh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF2YWx1ZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBzdHIgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPiAyMCkge1xuICAgICAgICAgICAgc3RyID0gc3RyLnN1YnN0cigwLCAyMCkgKyBcIi4uLlwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvblZhbHVlQ2hhbmdlZCgpIHtcbiAgICAgICAgdGhpcy5rb1ZhbHVlKHRoaXMudmFsdWUpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25CZWZvcmVBcHBseSgpIHtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZUNvcmUodGhpcy5rb1ZhbHVlKCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5SHRtbEVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5VGV4dEVkaXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJodG1sXCI7IH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5RXhwcmVzc2lvbkVkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5VGV4dEVkaXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJleHByZXNzaW9uXCI7IH1cbn1cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwidGV4dFwiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eVRleHRFZGl0b3IoKTsgfSk7XG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJodG1sXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5SHRtbEVkaXRvcigpOyB9KTtcblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcImV4cHJlc3Npb25cIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlFeHByZXNzaW9uRWRpdG9yKCk7IH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU1vZGFsRWRpdG9yLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5SXRlbXNFZGl0b3J9IGZyb20gXCIuL3Byb3BlcnR5SXRlbXNFZGl0b3JcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JCYXNlfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcbmltcG9ydCB7U3VydmV5UXVlc3Rpb25FZGl0b3J9IGZyb20gXCIuLi9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25FZGl0b3JcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlJdGVtVmFsdWVzRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eUl0ZW1WYWx1ZXNFZGl0b3JcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5TmVzdGVkUHJvcGVydHlFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yIHtcbiAgICBrb0VkaXRJdGVtOiBhbnk7IGtvSXNMaXN0OiBhbnk7XG4gICAgb25FZGl0SXRlbUNsaWNrOiBhbnk7IG9uQ2FuY2VsRWRpdEl0ZW1DbGljazogYW55O1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMua29FZGl0SXRlbSA9IGtvLm9ic2VydmFibGUobnVsbCk7XG4gICAgICAgIHRoaXMua29Jc0xpc3QgPSBrby5vYnNlcnZhYmxlKHRydWUpO1xuICAgICAgICB0aGlzLmtvRWRpdEl0ZW0uc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBcbiAgICAgICAgICAgIHNlbGYua29Jc0xpc3Qoc2VsZi5rb0VkaXRJdGVtKCkgPT0gbnVsbCk7IFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5vbkVkaXRJdGVtQ2xpY2sgPSBmdW5jdGlvbiAoaXRlbSkgeyBzZWxmLmtvRWRpdEl0ZW0oaXRlbSk7IH07XG4gICAgICAgIHRoaXMub25DYW5jZWxFZGl0SXRlbUNsaWNrID0gZnVuY3Rpb24gKCkgeyBcbiAgICAgICAgICAgIHZhciBlZGl0SXRlbSA9IHNlbGYua29FZGl0SXRlbSgpO1xuICAgICAgICAgICAgaWYoZWRpdEl0ZW0uaXRlbUVkaXRvciAmJiBlZGl0SXRlbS5pdGVtRWRpdG9yLmhhc0Vycm9yKCkpIHJldHVybjtcbiAgICAgICAgICAgIHNlbGYua29FZGl0SXRlbShudWxsKTsgXG4gICAgICAgIH07XG4gICAgfVxuICAgIHB1YmxpYyBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMua29JdGVtcygpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQgfHwgdGhpcy5rb0l0ZW1zKClbaV0uaGFzRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25CZWZvcmVBcHBseSgpIHtcbiAgICAgICAgc3VwZXIub25CZWZvcmVBcHBseSgpO1xuICAgICAgICB2YXIgaW50ZXJuYWxJdGVtcyA9IHRoaXMua29JdGVtcygpO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaW50ZXJuYWxJdGVtcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIGludGVybmFsSXRlbXNbaV0uYXBwbHkoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleU5lc3RlZFByb3BlcnR5RWRpdG9ySXRlbSB7XG4gICAgcHJpdmF0ZSBpdGVtRWRpdG9yVmFsdWU6IFN1cnZleVF1ZXN0aW9uRWRpdG9yO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGl0ZW1FZGl0b3IoKTogU3VydmV5UXVlc3Rpb25FZGl0b3Ige1xuICAgICAgICBpZighdGhpcy5pdGVtRWRpdG9yVmFsdWUpIHRoaXMuaXRlbUVkaXRvclZhbHVlID0gdGhpcy5jcmVhdGVTdXJ2ZXlRdWVzdGlvbkVkaXRvcigpO1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtRWRpdG9yVmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyBoYXNFcnJvcigpOiBib29sZWFuIHtcbiAgICAgICAgaWYodGhpcy5pdGVtRWRpdG9yVmFsdWUgJiYgdGhpcy5pdGVtRWRpdG9yVmFsdWUuaGFzRXJyb3IoKSkgcmV0dXJuIHRydWU7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZVN1cnZleVF1ZXN0aW9uRWRpdG9yKCkgeyByZXR1cm4gbnVsbDsgfVxuICAgIHB1YmxpYyBhcHBseSgpIHtcbiAgICAgICAgaWYodGhpcy5pdGVtRWRpdG9yVmFsdWUpIHRoaXMuaXRlbUVkaXRvclZhbHVlLmFwcGx5KCk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU5lc3RlZFByb3BlcnR5RWRpdG9yLnRzIiwiaW1wb3J0IHtTdXJ2ZXlKU09ONX0gZnJvbSBcIi4vanNvbjVcIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmNsYXNzIFRleHRQYXJzZXJQcm9wZXJ5IHtcbiAgICBpc0ZvdW5kOiBib29sZWFuO1xuICAgIHByb3BlcnRpZXNDb3VudDogbnVtYmVyO1xuICAgIHN0YXJ0OiBudW1iZXI7XG4gICAgZW5kOiBudW1iZXI7XG4gICAgdmFsdWVTdGFydDogbnVtYmVyO1xuICAgIHZhbHVlRW5kOiBudW1iZXI7XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlUZXh0V29ya2VyIHtcbiAgICBwdWJsaWMgc3RhdGljIG5ld0xpbmVDaGFyOiBzdHJpbmc7XG4gICAgcHVibGljIGVycm9yczogQXJyYXk8YW55PjtcbiAgICBwcml2YXRlIHN1cnZleVZhbHVlOiBTdXJ2ZXkuU3VydmV5O1xuICAgIHByaXZhdGUganNvblZhbHVlOiBhbnk7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlPYmplY3RzOiBBcnJheTxhbnk+O1xuICAgIHByaXZhdGUgaXNTdXJ2ZXlBc1BhZ2U6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGV4dDogc3RyaW5nKSB7XG4gICAgICAgIGlmICghdGhpcy50ZXh0IHx8IHRoaXMudGV4dC50cmltKCkgPT0gXCJcIikge1xuICAgICAgICAgICAgdGhpcy50ZXh0ID0gXCJ7fVwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJyb3JzID0gW107XG4gICAgICAgIHRoaXMucHJvY2VzcygpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN1cnZleSgpOiBTdXJ2ZXkuU3VydmV5IHsgcmV0dXJuIHRoaXMuc3VydmV5VmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IGlzSnNvbkNvcnJlY3QoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLnN1cnZleVZhbHVlICE9IG51bGw7IH1cbiAgICBwcm90ZWN0ZWQgcHJvY2VzcygpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuanNvblZhbHVlID0gbmV3IFN1cnZleUpTT041KDEpLnBhcnNlKHRoaXMudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ycy5wdXNoKHsgcG9zOiB7IHN0YXJ0OiBlcnJvci5hdCwgZW5kOiAtMSB9LCB0ZXh0OiBlcnJvci5tZXNzYWdlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmpzb25WYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUpzb25Qb3NpdGlvbnModGhpcy5qc29uVmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZSA9IG5ldyBTdXJ2ZXkuU3VydmV5KHRoaXMuanNvblZhbHVlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN1cnZleVZhbHVlLmpzb25FcnJvcnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXJ2ZXlWYWx1ZS5qc29uRXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJvciA9IHRoaXMuc3VydmV5VmFsdWUuanNvbkVycm9yc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMucHVzaCh7IHBvczogeyBzdGFydDogZXJyb3IuYXQsIGVuZDogLTEgfSwgdGV4dDogZXJyb3IuZ2V0RnVsbERlc2NyaXB0aW9uKCkgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cyA9IHRoaXMuY3JlYXRlU3VydmV5T2JqZWN0cygpO1xuICAgICAgICB0aGlzLnNldEVkaXRvclBvc2l0aW9uQnlDaGFydEF0KHRoaXMuc3VydmV5T2JqZWN0cyk7XG4gICAgICAgIHRoaXMuc2V0RWRpdG9yUG9zaXRpb25CeUNoYXJ0QXQodGhpcy5lcnJvcnMpO1xuICAgIH1cbiAgICBwcml2YXRlIHVwZGF0ZUpzb25Qb3NpdGlvbnMoanNvbk9iajogYW55KSB7XG4gICAgICAgIGpzb25PYmpbXCJwb3NcIl1bXCJzZWxmXCJdID0ganNvbk9iajtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGpzb25PYmopIHtcbiAgICAgICAgICAgIHZhciBvYmogPSBqc29uT2JqW2tleV07XG4gICAgICAgICAgICBpZiAob2JqICYmIG9ialtcInBvc1wiXSkge1xuICAgICAgICAgICAgICAgIGpzb25PYmpbXCJwb3NcIl1ba2V5XSA9IG9ialtcInBvc1wiXTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUpzb25Qb3NpdGlvbnMob2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVN1cnZleU9iamVjdHMoKTogQXJyYXk8YW55PiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5VmFsdWUgPT0gbnVsbCkgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgdGhpcy5pc1N1cnZleUFzUGFnZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3VydmV5VmFsdWUucGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXlWYWx1ZS5wYWdlc1tpXTtcbiAgICAgICAgICAgIGlmIChpID09IDAgJiYgIXBhZ2VbXCJwb3NcIl0pIHtcbiAgICAgICAgICAgICAgICBwYWdlW1wicG9zXCJdID0gdGhpcy5zdXJ2ZXlWYWx1ZVtcInBvc1wiXTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU3VydmV5QXNQYWdlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhZ2UpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYWdlLnF1ZXN0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhZ2UucXVlc3Rpb25zW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIHNldEVkaXRvclBvc2l0aW9uQnlDaGFydEF0KG9iamVjdHM6IGFueVtdKSB7XG4gICAgICAgIGlmIChvYmplY3RzID09IG51bGwgfHwgb2JqZWN0cy5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSB7IHJvdzogMCwgY29sdW1uOiAwIH07XG4gICAgICAgIHZhciBhdE9iamVjdHNBcnJheSA9IHRoaXMuZ2V0QXRBcnJheShvYmplY3RzKTtcbiAgICAgICAgdmFyIHN0YXJ0QXQ6IG51bWJlciA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXRPYmplY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBhdCA9IGF0T2JqZWN0c0FycmF5W2ldLmF0O1xuICAgICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmdldFBvc3Rpb25CeUNoYXJ0QXQocG9zaXRpb24sIHN0YXJ0QXQsIGF0KTtcbiAgICAgICAgICAgIHZhciBvYmogPSBhdE9iamVjdHNBcnJheVtpXS5vYmo7XG4gICAgICAgICAgICBpZiAoIW9iai5wb3NpdGlvbikgb2JqLnBvc2l0aW9uID0ge307XG4gICAgICAgICAgICBpZiAoYXQgPT0gb2JqLnBvcy5zdGFydCkge1xuICAgICAgICAgICAgICAgIG9iai5wb3NpdGlvbi5zdGFydCA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYXQgPT0gb2JqLnBvcy5lbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqLnBvc2l0aW9uLmVuZCA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXJ0QXQgPSBhdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGdldFBvc3Rpb25CeUNoYXJ0QXQoc3RhcnRQb3NpdGlvbjogYW55LCBzdGFydEF0OiBudW1iZXIsIGF0OiBudW1iZXIpOiBhbnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0geyByb3c6IHN0YXJ0UG9zaXRpb24ucm93LCBjb2x1bW46IHN0YXJ0UG9zaXRpb24uY29sdW1uIH07XG4gICAgICAgIHZhciBjdXJDaGFyID0gc3RhcnRBdDtcbiAgICAgICAgd2hpbGUgKGN1ckNoYXIgPCBhdCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGV4dC5jaGFyQXQoY3VyQ2hhcikgPT0gU3VydmV5VGV4dFdvcmtlci5uZXdMaW5lQ2hhcikge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5yb3crKztcbiAgICAgICAgICAgICAgICByZXN1bHQuY29sdW1uID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmNvbHVtbisrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VyQ2hhcisrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0QXRBcnJheShvYmplY3RzOiBhbnlbXSk6IGFueVtdIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvYmogPSBvYmplY3RzW2ldO1xuICAgICAgICAgICAgdmFyIHBvcyA9IG9iai5wb3M7XG4gICAgICAgICAgICBpZiAoIXBvcykgY29udGludWU7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7IGF0OiBwb3Muc3RhcnQsIG9iajogb2JqIH0pO1xuICAgICAgICAgICAgaWYgKHBvcy5lbmQgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goeyBhdDogcG9zLmVuZCwgb2JqOiBvYmogfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdC5zb3J0KChlbDEsIGVsMikgPT4ge1xuICAgICAgICAgICAgaWYgKGVsMS5hdCA+IGVsMi5hdCkgcmV0dXJuIDE7XG4gICAgICAgICAgICBpZiAoZWwxLmF0IDwgZWwyLmF0KSByZXR1cm4gLTE7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXh0V29ya2VyLnRzIiwiLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIEpTT041LCBodHRwOi8vanNvbjUub3JnL1xuLy8gVGhlIG1vZGlmaWNhdGlvbiBmb3IgZ2V0dGluZyBvYmplY3QgYW5kIHByb3BlcnRpZXMgbG9jYXRpb24gJ2F0JyB3ZXJlIG1hZGVuLlxuXG5leHBvcnQgY2xhc3MgU3VydmV5SlNPTjUge1xuICAgIHB1YmxpYyBzdGF0aWMgcG9zaXRpb25OYW1lID0gXCJwb3NcIjtcbiAgICBwcml2YXRlIHN0YXRpYyBlc2NhcGVlID0ge1xuICAgICAgICBcIidcIjogXCInXCIsXG4gICAgICAgICdcIic6ICdcIicsXG4gICAgICAgICdcXFxcJzogJ1xcXFwnLFxuICAgICAgICAnLyc6ICcvJyxcbiAgICAgICAgJ1xcbic6ICcnLCAgICAgICAvLyBSZXBsYWNlIGVzY2FwZWQgbmV3bGluZXMgaW4gc3RyaW5ncyB3LyBlbXB0eSBzdHJpbmdcbiAgICAgICAgYjogJ1xcYicsXG4gICAgICAgIGY6ICdcXGYnLFxuICAgICAgICBuOiAnXFxuJyxcbiAgICAgICAgcjogJ1xccicsXG4gICAgICAgIHQ6ICdcXHQnXG4gICAgfTtcbiAgICBwcml2YXRlIHN0YXRpYyB3cyA9IFtcbiAgICAgICAgJyAnLFxuICAgICAgICAnXFx0JyxcbiAgICAgICAgJ1xccicsXG4gICAgICAgICdcXG4nLFxuICAgICAgICAnXFx2JyxcbiAgICAgICAgJ1xcZicsXG4gICAgICAgICdcXHhBMCcsXG4gICAgICAgICdcXHVGRUZGJ1xuICAgIF07XG4gICAgcHJpdmF0ZSBlbmRBdDogbnVtYmVyO1xuICAgIHByaXZhdGUgYXQ6IG51bWJlcjsgICAgIC8vIFRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBjaGFyYWN0ZXJcbiAgICBwcml2YXRlIGNoOiBhbnk7ICAgICAvLyBUaGUgY3VycmVudCBjaGFyYWN0ZXJcbiAgICBwcml2YXRlIHRleHQ6IHN0cmluZztcbiAgICBwcml2YXRlIHBhcnNlVHlwZTogbnVtYmVyOyAvLyAwIC0gc3RhZGFyZCwgMSAtIGdldCBpbmZvcm1hdGlvbiBhYm91dCBvYmplY3RzLCAyIC0gZ2V0IGluZm9ybWF0aW9uIGFib3V0IGFsbCBwcm9wZXJ0aWVzXG4gICAgY29uc3RydWN0b3IocGFyc2VUeXBlOiBudW1iZXIgPSAwKSB7XG4gICAgICAgIHRoaXMucGFyc2VUeXBlID0gcGFyc2VUeXBlO1xuICAgIH1cbiAgICBwdWJsaWMgcGFyc2Uoc291cmNlOiBhbnksIHJldml2ZXI6IGFueSA9IG51bGwsIHN0YXJ0RnJvbTogbnVtYmVyID0gMCwgZW5kQXQ6IG51bWJlciA9IC0xKTogYW55IHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICB0aGlzLnRleHQgPSBTdHJpbmcoc291cmNlKTtcbiAgICAgICAgdGhpcy5hdCA9IHN0YXJ0RnJvbTtcbiAgICAgICAgdGhpcy5lbmRBdCA9IGVuZEF0O1xuICAgICAgICB0aGlzLmNoID0gJyAnO1xuICAgICAgICByZXN1bHQgPSB0aGlzLnZhbHVlKCk7XG4gICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgaWYgKHRoaXMuY2gpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJTeW50YXggZXJyb3JcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHJldml2ZXIgZnVuY3Rpb24sIHdlIHJlY3Vyc2l2ZWx5IHdhbGsgdGhlIG5ldyBzdHJ1Y3R1cmUsXG4gICAgICAgIC8vIHBhc3NpbmcgZWFjaCBuYW1lL3ZhbHVlIHBhaXIgdG8gdGhlIHJldml2ZXIgZnVuY3Rpb24gZm9yIHBvc3NpYmxlXG4gICAgICAgIC8vIHRyYW5zZm9ybWF0aW9uLCBzdGFydGluZyB3aXRoIGEgdGVtcG9yYXJ5IHJvb3Qgb2JqZWN0IHRoYXQgaG9sZHMgdGhlIHJlc3VsdFxuICAgICAgICAvLyBpbiBhbiBlbXB0eSBrZXkuIElmIHRoZXJlIGlzIG5vdCBhIHJldml2ZXIgZnVuY3Rpb24sIHdlIHNpbXBseSByZXR1cm4gdGhlXG4gICAgICAgIC8vIHJlc3VsdC5cblxuICAgICAgICByZXR1cm4gdHlwZW9mIHJldml2ZXIgPT09ICdmdW5jdGlvbicgPyAoZnVuY3Rpb24gd2Fsayhob2xkZXIsIGtleSkge1xuICAgICAgICAgICAgdmFyIGssIHYsIHZhbHVlID0gaG9sZGVyW2tleV07XG4gICAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGZvciAoayBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdiA9IHdhbGsodmFsdWUsIGspO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlW2tdID0gdjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHZhbHVlW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldml2ZXIuY2FsbChob2xkZXIsIGtleSwgdmFsdWUpO1xuICAgICAgICB9ICh7ICcnOiByZXN1bHQgfSwgJycpKSA6IHJlc3VsdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBlcnJvcihtOiBzdHJpbmcpIHtcbiAgICAgICAgLy8gQ2FsbCBlcnJvciB3aGVuIHNvbWV0aGluZyBpcyB3cm9uZy5cbiAgICAgICAgdmFyIGVycm9yID0gbmV3IFN5bnRheEVycm9yKCk7XG4gICAgICAgIGVycm9yLm1lc3NhZ2UgPSBtO1xuICAgICAgICBlcnJvcltcImF0XCJdID0gdGhpcy5hdDtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIHByaXZhdGUgbmV4dChjOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIC8vIElmIGEgYyBwYXJhbWV0ZXIgaXMgcHJvdmlkZWQsIHZlcmlmeSB0aGF0IGl0IG1hdGNoZXMgdGhlIGN1cnJlbnQgY2hhcmFjdGVyLlxuICAgICAgICBpZiAoYyAmJiBjICE9PSB0aGlzLmNoKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiRXhwZWN0ZWQgJ1wiICsgYyArIFwiJyBpbnN0ZWFkIG9mICdcIiArIHRoaXMuY2ggKyBcIidcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IHRoZSB0aGlzLm5leHQgY2hhcmFjdGVyLiBXaGVuIHRoZXJlIGFyZSBubyBtb3JlIGNoYXJhY3RlcnMsXG4gICAgICAgIC8vIHJldHVybiB0aGUgZW1wdHkgc3RyaW5nLlxuICAgICAgICB0aGlzLmNoID0gdGhpcy5jaGFydEF0KCk7XG4gICAgICAgIHRoaXMuYXQgKz0gMTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2g7XG4gICAgfVxuICAgIHByaXZhdGUgcGVlaygpIHtcbiAgICAgICAgLy8gR2V0IHRoZSB0aGlzLm5leHQgY2hhcmFjdGVyIHdpdGhvdXQgY29uc3VtaW5nIGl0IG9yXG4gICAgICAgIC8vIGFzc2lnbmluZyBpdCB0byB0aGUgdGhpcy5jaCB2YXJhaWJsZS5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhcnRBdCgpO1xuICAgIH1cbiAgICBwcml2YXRlIGNoYXJ0QXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVuZEF0ID4gLTEgJiYgdGhpcy5hdCA+PSB0aGlzLmVuZEF0KSByZXR1cm4gJyc7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQuY2hhckF0KHRoaXMuYXQpO1xuICAgIH1cbiAgICBwcml2YXRlIGlkZW50aWZpZXIoKSB7XG4gICAgICAgIC8vIFBhcnNlIGFuIGlkZW50aWZpZXIuIE5vcm1hbGx5LCByZXNlcnZlZCB3b3JkcyBhcmUgZGlzYWxsb3dlZCBoZXJlLCBidXQgd2VcbiAgICAgICAgLy8gb25seSB1c2UgdGhpcyBmb3IgdW5xdW90ZWQgb2JqZWN0IGtleXMsIHdoZXJlIHJlc2VydmVkIHdvcmRzIGFyZSBhbGxvd2VkLFxuICAgICAgICAvLyBzbyB3ZSBkb24ndCBjaGVjayBmb3IgdGhvc2UgaGVyZS4gUmVmZXJlbmNlczpcbiAgICAgICAgLy8gLSBodHRwOi8vZXM1LmdpdGh1Yi5jb20vI3g3LjZcbiAgICAgICAgLy8gLSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9Db3JlX0phdmFTY3JpcHRfMS41X0d1aWRlL0NvcmVfTGFuZ3VhZ2VfRmVhdHVyZXMjVmFyaWFibGVzXG4gICAgICAgIC8vIC0gaHR0cDovL2RvY3N0b3JlLm1pay51YS9vcmVsbHkvd2VicHJvZy9qc2NyaXB0L2NoMDJfMDcuaHRtXG4gICAgICAgIC8vIFRPRE8gSWRlbnRpZmllcnMgY2FuIGhhdmUgVW5pY29kZSBcImxldHRlcnNcIiBpbiB0aGVtOyBhZGQgc3VwcG9ydCBmb3IgdGhvc2UuXG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmNoO1xuXG4gICAgICAgIC8vIElkZW50aWZpZXJzIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciwgXyBvciAkLlxuICAgICAgICBpZiAoKHRoaXMuY2ggIT09ICdfJyAmJiB0aGlzLmNoICE9PSAnJCcpICYmXG4gICAgICAgICAgICAodGhpcy5jaCA8ICdhJyB8fCB0aGlzLmNoID4gJ3onKSAmJlxuICAgICAgICAgICAgKHRoaXMuY2ggPCAnQScgfHwgdGhpcy5jaCA+ICdaJykpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJCYWQgaWRlbnRpZmllclwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN1YnNlcXVlbnQgY2hhcmFjdGVycyBjYW4gY29udGFpbiBkaWdpdHMuXG4gICAgICAgIHdoaWxlICh0aGlzLm5leHQoKSAmJiAoXG4gICAgICAgIHRoaXMuY2ggPT09ICdfJyB8fCB0aGlzLmNoID09PSAnJCcgfHxcbiAgICAgICAgKHRoaXMuY2ggPj0gJ2EnICYmIHRoaXMuY2ggPD0gJ3onKSB8fFxuICAgICAgICAodGhpcy5jaCA+PSAnQScgJiYgdGhpcy5jaCA8PSAnWicpIHx8XG4gICAgICAgICh0aGlzLmNoID49ICcwJyAmJiB0aGlzLmNoIDw9ICc5JykpKSB7XG4gICAgICAgICAgICBrZXkgKz0gdGhpcy5jaDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICAgIHByaXZhdGUgbnVtYmVyKCkge1xuXG4gICAgICAgIC8vIFBhcnNlIGEgbnVtYmVyIHZhbHVlLlxuXG4gICAgICAgIHZhciBudW1iZXIsXG4gICAgICAgICAgICBzaWduID0gJycsXG4gICAgICAgICAgICBzdHJpbmcgPSAnJyxcbiAgICAgICAgICAgIGJhc2UgPSAxMDtcblxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJy0nIHx8IHRoaXMuY2ggPT09ICcrJykge1xuICAgICAgICAgICAgc2lnbiA9IHRoaXMuY2g7XG4gICAgICAgICAgICB0aGlzLm5leHQodGhpcy5jaCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdXBwb3J0IGZvciBJbmZpbml0eSAoY291bGQgdHdlYWsgdG8gYWxsb3cgb3RoZXIgd29yZHMpOlxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ0knKSB7XG4gICAgICAgICAgICBudW1iZXIgPSB0aGlzLndvcmQoKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbnVtYmVyICE9PSAnbnVtYmVyJyB8fCBpc05hTihudW1iZXIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcignVW5leHBlY3RlZCB3b3JkIGZvciBudW1iZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAoc2lnbiA9PT0gJy0nKSA/IC1udW1iZXIgOiBudW1iZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdXBwb3J0IGZvciBOYU5cbiAgICAgICAgaWYgKHRoaXMuY2ggPT09ICdOJykge1xuICAgICAgICAgICAgbnVtYmVyID0gdGhpcy53b3JkKCk7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKG51bWJlcikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKCdleHBlY3RlZCB3b3JkIHRvIGJlIE5hTicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWdub3JlIHNpZ24gYXMgLU5hTiBhbHNvIGlzIE5hTlxuICAgICAgICAgICAgcmV0dXJuIG51bWJlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNoID09PSAnMCcpIHtcbiAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ3gnIHx8IHRoaXMuY2ggPT09ICdYJykge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIGJhc2UgPSAxNjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jaCA+PSAnMCcgJiYgdGhpcy5jaCA8PSAnOScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKCdPY3RhbCBsaXRlcmFsJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKGJhc2UpIHtcbiAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2ggPj0gJzAnICYmIHRoaXMuY2ggPD0gJzknKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICcuJykge1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gJy4nO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5uZXh0KCkgJiYgdGhpcy5jaCA+PSAnMCcgJiYgdGhpcy5jaCA8PSAnOScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAnZScgfHwgdGhpcy5jaCA9PT0gJ0UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICctJyB8fCB0aGlzLmNoID09PSAnKycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSB0aGlzLmNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2ggPj0gJzAnICYmIHRoaXMuY2ggPD0gJzknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gdGhpcy5jaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxNjpcbiAgICAgICAgICAgICAgICB3aGlsZSAodGhpcy5jaCA+PSAnMCcgJiYgdGhpcy5jaCA8PSAnOScgfHwgdGhpcy5jaCA+PSAnQScgJiYgdGhpcy5jaCA8PSAnRicgfHwgdGhpcy5jaCA+PSAnYScgJiYgdGhpcy5jaCA8PSAnZicpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IHRoaXMuY2g7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaWduID09PSAnLScpIHtcbiAgICAgICAgICAgIG51bWJlciA9IC1zdHJpbmc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBudW1iZXIgPSArc3RyaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0Zpbml0ZShudW1iZXIpKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiQmFkIG51bWJlclwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBzdHJpbmcoKSB7XG5cbiAgICAgICAgLy8gUGFyc2UgYSBzdHJpbmcgdmFsdWUuXG5cbiAgICAgICAgdmFyIGhleCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBzdHJpbmcgPSAnJyxcbiAgICAgICAgICAgIGRlbGltLCAgICAgIC8vIGRvdWJsZSBxdW90ZSBvciBzaW5nbGUgcXVvdGVcbiAgICAgICAgICAgIHVmZmZmO1xuXG4gICAgICAgIC8vIFdoZW4gcGFyc2luZyBmb3Igc3RyaW5nIHZhbHVlcywgd2UgbXVzdCBsb29rIGZvciAnIG9yIFwiIGFuZCBcXCBjaGFyYWN0ZXJzLlxuXG4gICAgICAgIGlmICh0aGlzLmNoID09PSAnXCInIHx8IHRoaXMuY2ggPT09IFwiJ1wiKSB7XG4gICAgICAgICAgICBkZWxpbSA9IHRoaXMuY2g7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gZGVsaW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHJpbmc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAndScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVmZmZmID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZXggPSBwYXJzZUludCh0aGlzLm5leHQoKSwgMTYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNGaW5pdGUoaGV4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWZmZmYgPSB1ZmZmZiAqIDE2ICsgaGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodWZmZmYpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2ggPT09ICdcXHInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCkgPT09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIFN1cnZleUpTT041LmVzY2FwZWVbdGhpcy5jaF0gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3VydmV5SlNPTjUuZXNjYXBlZVt0aGlzLmNoXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNoID09PSAnXFxuJykge1xuICAgICAgICAgICAgICAgICAgICAvLyB1bmVzY2FwZWQgbmV3bGluZXMgYXJlIGludmFsaWQ7IHNlZTpcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FzZWVtay9qc29uNS9pc3N1ZXMvMjRcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyB0aGlzIGZlZWxzIHNwZWNpYWwtY2FzZWQ7IGFyZSB0aGVyZSBvdGhlclxuICAgICAgICAgICAgICAgICAgICAvLyBpbnZhbGlkIHVuZXNjYXBlZCBjaGFycz9cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IHRoaXMuY2g7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJyb3IoXCJCYWQgc3RyaW5nXCIpO1xuICAgIH1cbiAgICBwcml2YXRlIGlubGluZUNvbW1lbnQoKSB7XG5cbiAgICAgICAgLy8gU2tpcCBhbiBpbmxpbmUgY29tbWVudCwgYXNzdW1pbmcgdGhpcyBpcyBvbmUuIFRoZSBjdXJyZW50IGNoYXJhY3RlciBzaG91bGRcbiAgICAgICAgLy8gYmUgdGhlIHNlY29uZCAvIGNoYXJhY3RlciBpbiB0aGUgLy8gcGFpciB0aGF0IGJlZ2lucyB0aGlzIGlubGluZSBjb21tZW50LlxuICAgICAgICAvLyBUbyBmaW5pc2ggdGhlIGlubGluZSBjb21tZW50LCB3ZSBsb29rIGZvciBhIG5ld2xpbmUgb3IgdGhlIGVuZCBvZiB0aGUgdGV4dC5cblxuICAgICAgICBpZiAodGhpcy5jaCAhPT0gJy8nKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiTm90IGFuIGlubGluZSBjb21tZW50XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ1xcbicgfHwgdGhpcy5jaCA9PT0gJ1xccicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKHRoaXMuY2gpO1xuICAgIH1cbiAgICBwcml2YXRlIGJsb2NrQ29tbWVudCgpIHtcblxuICAgICAgICAvLyBTa2lwIGEgYmxvY2sgY29tbWVudCwgYXNzdW1pbmcgdGhpcyBpcyBvbmUuIFRoZSBjdXJyZW50IGNoYXJhY3RlciBzaG91bGQgYmVcbiAgICAgICAgLy8gdGhlICogY2hhcmFjdGVyIGluIHRoZSAvKiBwYWlyIHRoYXQgYmVnaW5zIHRoaXMgYmxvY2sgY29tbWVudC5cbiAgICAgICAgLy8gVG8gZmluaXNoIHRoZSBibG9jayBjb21tZW50LCB3ZSBsb29rIGZvciBhbiBlbmRpbmcgKi8gcGFpciBvZiBjaGFyYWN0ZXJzLFxuICAgICAgICAvLyBidXQgd2UgYWxzbyB3YXRjaCBmb3IgdGhlIGVuZCBvZiB0ZXh0IGJlZm9yZSB0aGUgY29tbWVudCBpcyB0ZXJtaW5hdGVkLlxuXG4gICAgICAgIGlmICh0aGlzLmNoICE9PSAnKicpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJOb3QgYSBibG9jayBjb21tZW50XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5jaCA9PT0gJyonKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCcqJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICcvJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB3aGlsZSAodGhpcy5jaCk7XG5cbiAgICAgICAgdGhpcy5lcnJvcihcIlVudGVybWluYXRlZCBibG9jayBjb21tZW50XCIpO1xuICAgIH1cbiAgICBwcml2YXRlIGNvbW1lbnQoKSB7XG5cbiAgICAgICAgLy8gU2tpcCBhIGNvbW1lbnQsIHdoZXRoZXIgaW5saW5lIG9yIGJsb2NrLWxldmVsLCBhc3N1bWluZyB0aGlzIGlzIG9uZS5cbiAgICAgICAgLy8gQ29tbWVudHMgYWx3YXlzIGJlZ2luIHdpdGggYSAvIGNoYXJhY3Rlci5cblxuICAgICAgICBpZiAodGhpcy5jaCAhPT0gJy8nKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9yKFwiTm90IGEgY29tbWVudFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubmV4dCgnLycpO1xuXG4gICAgICAgIGlmICh0aGlzLmNoID09PSAnLycpIHtcbiAgICAgICAgICAgIHRoaXMuaW5saW5lQ29tbWVudCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2ggPT09ICcqJykge1xuICAgICAgICAgICAgdGhpcy5ibG9ja0NvbW1lbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoXCJVbnJlY29nbml6ZWQgY29tbWVudFwiKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHdoaXRlKCkge1xuXG4gICAgICAgIC8vIFNraXAgd2hpdGVzcGFjZSBhbmQgY29tbWVudHMuXG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSdyZSBkZXRlY3RpbmcgY29tbWVudHMgYnkgb25seSBhIHNpbmdsZSAvIGNoYXJhY3Rlci5cbiAgICAgICAgLy8gVGhpcyB3b3JrcyBzaW5jZSByZWd1bGFyIGV4cHJlc3Npb25zIGFyZSBub3QgdmFsaWQgSlNPTig1KSwgYnV0IHRoaXMgd2lsbFxuICAgICAgICAvLyBicmVhayBpZiB0aGVyZSBhcmUgb3RoZXIgdmFsaWQgdmFsdWVzIHRoYXQgYmVnaW4gd2l0aCBhIC8gY2hhcmFjdGVyIVxuXG4gICAgICAgIHdoaWxlICh0aGlzLmNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21tZW50KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFN1cnZleUpTT041LndzLmluZGV4T2YodGhpcy5jaCkgPj0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSB3b3JkKCk6IGFueSB7XG5cbiAgICAgICAgLy8gdHJ1ZSwgZmFsc2UsIG9yIG51bGwuXG5cbiAgICAgICAgc3dpdGNoICh0aGlzLmNoKSB7XG4gICAgICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ3QnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ3InKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ3UnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ2UnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGNhc2UgJ2YnOlxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnZicpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnYScpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgncycpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGNhc2UgJ24nOlxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnbicpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgndScpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnbCcpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnbCcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgY2FzZSAnSSc6XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdJJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCduJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdmJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdpJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCduJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdpJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCd0Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCd5Jyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEluZmluaXR5O1xuICAgICAgICAgICAgY2FzZSAnTic6XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdOJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdhJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCdOJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE5hTjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9yKFwiVW5leHBlY3RlZCAnXCIgKyB0aGlzLmNoICsgXCInXCIpO1xuICAgIH1cbiAgICBwcml2YXRlIGFycmF5KCkge1xuXG4gICAgICAgIC8vIFBhcnNlIGFuIGFycmF5IHZhbHVlLlxuXG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuXG4gICAgICAgIGlmICh0aGlzLmNoID09PSAnWycpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgnWycpO1xuICAgICAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2gpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ10nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnXScpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXk7ICAgLy8gUG90ZW50aWFsbHkgZW1wdHkgYXJyYXlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRVM1IGFsbG93cyBvbWl0dGluZyBlbGVtZW50cyBpbiBhcnJheXMsIGUuZy4gWyxdIGFuZFxuICAgICAgICAgICAgICAgIC8vIFssbnVsbF0uIFdlIGRvbid0IGFsbG93IHRoaXMgaW4gSlNPTjUuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2ggPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFwiTWlzc2luZyBhcnJheSBlbGVtZW50XCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFycmF5LnB1c2godGhpcy52YWx1ZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gY29tbWEgYWZ0ZXIgdGhpcyB2YWx1ZSwgdGhpcyBuZWVkcyB0b1xuICAgICAgICAgICAgICAgIC8vIGJlIHRoZSBlbmQgb2YgdGhlIGFycmF5LlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoICE9PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCddJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCcsJyk7XG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXJyb3IoXCJCYWQgYXJyYXlcIik7XG4gICAgfVxuICAgIHByaXZhdGUgb2JqZWN0KCkge1xuXG4gICAgICAgIC8vIFBhcnNlIGFuIG9iamVjdCB2YWx1ZS5cblxuICAgICAgICB2YXIga2V5LFxuICAgICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgICBpc0ZpcnN0UHJvcGVydHkgPSB0cnVlLFxuICAgICAgICAgICAgb2JqZWN0ID0ge307XG4gICAgICAgIGlmICh0aGlzLnBhcnNlVHlwZSA+IDApIHtcbiAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdID0geyBzdGFydDogdGhpcy5hdCAtIDEgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ3snKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoJ3snKTtcbiAgICAgICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5hdCAtIDE7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5jaCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoID09PSAnfScpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VUeXBlID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV0uZW5kID0gc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCd9Jyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7ICAgLy8gUG90ZW50aWFsbHkgZW1wdHkgb2JqZWN0XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gS2V5cyBjYW4gYmUgdW5xdW90ZWQuIElmIHRoZXkgYXJlLCB0aGV5IG5lZWQgdG8gYmVcbiAgICAgICAgICAgICAgICAvLyB2YWxpZCBKUyBpZGVudGlmaWVycy5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaCA9PT0gJ1wiJyB8fCB0aGlzLmNoID09PSBcIidcIikge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLnN0cmluZygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHRoaXMuaWRlbnRpZmllcigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJzZVR5cGUgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdW2tleV0gPSB7IHN0YXJ0OiBzdGFydCwgdmFsdWVTdGFydDogdGhpcy5hdCB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoJzonKTtcbiAgICAgICAgICAgICAgICBvYmplY3Rba2V5XSA9IHRoaXMudmFsdWUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJzZVR5cGUgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ID0gdGhpcy5hdCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdFtTdXJ2ZXlKU09ONS5wb3NpdGlvbk5hbWVdW2tleV0udmFsdWVFbmQgPSBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV1ba2V5XS5lbmQgPSBzdGFydDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gY29tbWEgYWZ0ZXIgdGhpcyBwYWlyLCB0aGlzIG5lZWRzIHRvIGJlXG4gICAgICAgICAgICAgICAgLy8gdGhlIGVuZCBvZiB0aGUgb2JqZWN0LlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoICE9PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VUeXBlID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV1ba2V5XS52YWx1ZUVuZC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0W1N1cnZleUpTT041LnBvc2l0aW9uTmFtZV1ba2V5XS5lbmQtLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJzZVR5cGUgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXS5lbmQgPSB0aGlzLmF0IC0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoJ30nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFyc2VUeXBlID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXVtrZXldLnZhbHVlRW5kLS07XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNGaXJzdFByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RbU3VydmV5SlNPTjUucG9zaXRpb25OYW1lXVtrZXldLmVuZC0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgnLCcpO1xuICAgICAgICAgICAgICAgIHRoaXMud2hpdGUoKTtcbiAgICAgICAgICAgICAgICBpc0ZpcnN0UHJvcGVydHkgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVycm9yKFwiQmFkIG9iamVjdFwiKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB2YWx1ZSgpOiBhbnkge1xuXG4gICAgICAgIC8vIFBhcnNlIGEgSlNPTiB2YWx1ZS4gSXQgY291bGQgYmUgYW4gb2JqZWN0LCBhbiBhcnJheSwgYSBzdHJpbmcsIGEgbnVtYmVyLFxuICAgICAgICAvLyBvciBhIHdvcmQuXG5cbiAgICAgICAgdGhpcy53aGl0ZSgpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuY2gpIHtcbiAgICAgICAgICAgIGNhc2UgJ3snOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9iamVjdCgpO1xuICAgICAgICAgICAgY2FzZSAnWyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXJyYXkoKTtcbiAgICAgICAgICAgIGNhc2UgJ1wiJzpcbiAgICAgICAgICAgIGNhc2UgXCInXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RyaW5nKCk7XG4gICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgY2FzZSAnLic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubnVtYmVyKCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoID49ICcwJyAmJiB0aGlzLmNoIDw9ICc5JyA/IHRoaXMubnVtYmVyKCkgOiB0aGlzLndvcmQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVwbGFjZXI6IGFueTtcbiAgICBwcml2YXRlIGluZGVudFN0cjogc3RyaW5nO1xuICAgIHByaXZhdGUgb2JqU3RhY2s7XG5cbiAgICBwdWJsaWMgc3RyaW5naWZ5KG9iajogYW55LCByZXBsYWNlcjogYW55ID0gbnVsbCwgc3BhY2U6IGFueSA9IG51bGwpIHtcbiAgICAgICAgaWYgKHJlcGxhY2VyICYmICh0eXBlb2YgKHJlcGxhY2VyKSAhPT0gXCJmdW5jdGlvblwiICYmICF0aGlzLmlzQXJyYXkocmVwbGFjZXIpKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXBsYWNlciBtdXN0IGJlIGEgZnVuY3Rpb24gb3IgYW4gYXJyYXknKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcGxhY2VyID0gcmVwbGFjZXI7XG4gICAgICAgIHRoaXMuaW5kZW50U3RyID0gdGhpcy5nZXRJbmRlbnQoc3BhY2UpO1xuICAgICAgICB0aGlzLm9ialN0YWNrID0gW107XG4gICAgICAgIC8vIHNwZWNpYWwgY2FzZS4uLndoZW4gdW5kZWZpbmVkIGlzIHVzZWQgaW5zaWRlIG9mXG4gICAgICAgIC8vIGEgY29tcG91bmQgb2JqZWN0L2FycmF5LCByZXR1cm4gbnVsbC5cbiAgICAgICAgLy8gYnV0IHdoZW4gdG9wLWxldmVsLCByZXR1cm4gdW5kZWZpbmVkXG4gICAgICAgIHZhciB0b3BMZXZlbEhvbGRlciA9IHsgXCJcIjogb2JqIH07XG4gICAgICAgIGlmIChvYmogPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVwbGFjZWRWYWx1ZU9yVW5kZWZpbmVkKHRvcExldmVsSG9sZGVyLCAnJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJuYWxTdHJpbmdpZnkodG9wTGV2ZWxIb2xkZXIsICcnLCB0cnVlKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRJbmRlbnQoc3BhY2U6IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGlmIChzcGFjZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzcGFjZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBzcGFjZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNwYWNlID09PSBcIm51bWJlclwiICYmIHNwYWNlID49IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYWtlSW5kZW50KFwiIFwiLCBzcGFjZSwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0UmVwbGFjZWRWYWx1ZU9yVW5kZWZpbmVkKGhvbGRlcjogYW55LCBrZXk6IGFueSwgaXNUb3BMZXZlbDogYm9vbGVhbikge1xuICAgICAgICB2YXIgdmFsdWUgPSBob2xkZXJba2V5XTtcblxuICAgICAgICAvLyBSZXBsYWNlIHRoZSB2YWx1ZSB3aXRoIGl0cyB0b0pTT04gdmFsdWUgZmlyc3QsIGlmIHBvc3NpYmxlXG4gICAgICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS50b0pTT04gJiYgdHlwZW9mIHZhbHVlLnRvSlNPTiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvSlNPTigpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIHVzZXItc3VwcGxpZWQgcmVwbGFjZXIgaWYgYSBmdW5jdGlvbiwgY2FsbCBpdC4gSWYgaXQncyBhbiBhcnJheSwgY2hlY2sgb2JqZWN0cycgc3RyaW5nIGtleXMgZm9yXG4gICAgICAgIC8vIHByZXNlbmNlIGluIHRoZSBhcnJheSAocmVtb3ZpbmcgdGhlIGtleS92YWx1ZSBwYWlyIGZyb20gdGhlIHJlc3VsdGluZyBKU09OIGlmIHRoZSBrZXkgaXMgbWlzc2luZykuXG4gICAgICAgIGlmICh0eXBlb2YgKHRoaXMucmVwbGFjZXIpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlcGxhY2VyLmNhbGwoaG9sZGVyLCBrZXksIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlcGxhY2VyKSB7XG4gICAgICAgICAgICBpZiAoaXNUb3BMZXZlbCB8fCB0aGlzLmlzQXJyYXkoaG9sZGVyKSB8fCB0aGlzLnJlcGxhY2VyLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc1dvcmRDaGFyKGNoYXI6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGNoYXIgPj0gJ2EnICYmIGNoYXIgPD0gJ3onKSB8fFxuICAgICAgICAgICAgKGNoYXIgPj0gJ0EnICYmIGNoYXIgPD0gJ1onKSB8fFxuICAgICAgICAgICAgKGNoYXIgPj0gJzAnICYmIGNoYXIgPD0gJzknKSB8fFxuICAgICAgICAgICAgY2hhciA9PT0gJ18nIHx8IGNoYXIgPT09ICckJztcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzV29yZFN0YXJ0KGNoYXI6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gKGNoYXIgPj0gJ2EnICYmIGNoYXIgPD0gJ3onKSB8fFxuICAgICAgICAgICAgKGNoYXIgPj0gJ0EnICYmIGNoYXIgPD0gJ1onKSB8fFxuICAgICAgICAgICAgY2hhciA9PT0gJ18nIHx8IGNoYXIgPT09ICckJztcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzV29yZChrZXk6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodHlwZW9mIGtleSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaXNXb3JkU3RhcnQoa2V5WzBdKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpID0gMSwgbGVuZ3RoID0ga2V5Lmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1dvcmRDaGFyKGtleVtpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIHBvbHlmaWxsc1xuICAgIHByaXZhdGUgaXNBcnJheShvYmo6IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNEYXRlKG9iajogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNOYU4odmFsOiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInICYmIHZhbCAhPT0gdmFsO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tGb3JDaXJjdWxhcihvYmo6IGFueSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMub2JqU3RhY2subGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9ialN0YWNrW2ldID09PSBvYmopIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ29udmVydGluZyBjaXJjdWxhciBzdHJ1Y3R1cmUgdG8gSlNPTlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIG1ha2VJbmRlbnQoc3RyOiBzdHJpbmcsIG51bTogbnVtYmVyLCBub05ld0xpbmU6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBpZiAoIXN0cikge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW5kZW50YXRpb24gbm8gbW9yZSB0aGFuIDEwIGNoYXJzXG4gICAgICAgIGlmIChzdHIubGVuZ3RoID4gMTApIHtcbiAgICAgICAgICAgIHN0ciA9IHN0ci5zdWJzdHJpbmcoMCwgMTApO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGluZGVudCA9IG5vTmV3TGluZSA/IFwiXCIgOiBcIlxcblwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgICAgICBpbmRlbnQgKz0gc3RyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluZGVudDtcbiAgICB9XG5cbiAgICAvLyBDb3BpZWQgZnJvbSBDcm9rZm9yZCdzIGltcGxlbWVudGF0aW9uIG9mIEpTT05cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2RvdWdsYXNjcm9ja2ZvcmQvSlNPTi1qcy9ibG9iL2UzOWRiNGI3ZTYyNDlmMDRhMTk1ZTdkZDA4NDBlNjEwY2M5ZTk0MWUvanNvbjIuanMjTDE5NVxuICAgIC8vIEJlZ2luXG4gICAgcHJpdmF0ZSBzdGF0aWMgY3ggPSAvW1xcdTAwMDBcXHUwMGFkXFx1MDYwMC1cXHUwNjA0XFx1MDcwZlxcdTE3YjRcXHUxN2I1XFx1MjAwYy1cXHUyMDBmXFx1MjAyOC1cXHUyMDJmXFx1MjA2MC1cXHUyMDZmXFx1ZmVmZlxcdWZmZjAtXFx1ZmZmZl0vZztcbiAgICBwcml2YXRlIHN0YXRpYyBlc2NhcGFibGUgPSAvW1xcXFxcXFwiXFx4MDAtXFx4MWZcXHg3Zi1cXHg5ZlxcdTAwYWRcXHUwNjAwLVxcdTA2MDRcXHUwNzBmXFx1MTdiNFxcdTE3YjVcXHUyMDBjLVxcdTIwMGZcXHUyMDI4LVxcdTIwMmZcXHUyMDYwLVxcdTIwNmZcXHVmZWZmXFx1ZmZmMC1cXHVmZmZmXS9nO1xuICAgIHByaXZhdGUgc3RhdGljIG1ldGEgPSB7IC8vIHRhYmxlIG9mIGNoYXJhY3RlciBzdWJzdGl0dXRpb25zXG4gICAgICAgICdcXGInOiAnXFxcXGInLFxuICAgICAgICAnXFx0JzogJ1xcXFx0JyxcbiAgICAgICAgJ1xcbic6ICdcXFxcbicsXG4gICAgICAgICdcXGYnOiAnXFxcXGYnLFxuICAgICAgICAnXFxyJzogJ1xcXFxyJyxcbiAgICAgICAgJ1wiJzogJ1xcXFxcIicsXG4gICAgICAgICdcXFxcJzogJ1xcXFxcXFxcJ1xuICAgIH07XG4gICAgcHJpdmF0ZSBlc2NhcGVTdHJpbmcoc3RyOiBzdHJpbmcpIHtcblxuICAgICAgICAvLyBJZiB0aGUgc3RyaW5nIGNvbnRhaW5zIG5vIGNvbnRyb2wgY2hhcmFjdGVycywgbm8gcXVvdGUgY2hhcmFjdGVycywgYW5kIG5vXG4gICAgICAgIC8vIGJhY2tzbGFzaCBjaGFyYWN0ZXJzLCB0aGVuIHdlIGNhbiBzYWZlbHkgc2xhcCBzb21lIHF1b3RlcyBhcm91bmQgaXQuXG4gICAgICAgIC8vIE90aGVyd2lzZSB3ZSBtdXN0IGFsc28gcmVwbGFjZSB0aGUgb2ZmZW5kaW5nIGNoYXJhY3RlcnMgd2l0aCBzYWZlIGVzY2FwZVxuICAgICAgICAvLyBzZXF1ZW5jZXMuXG4gICAgICAgIFN1cnZleUpTT041LmVzY2FwYWJsZS5sYXN0SW5kZXggPSAwO1xuICAgICAgICByZXR1cm4gU3VydmV5SlNPTjUuZXNjYXBhYmxlLnRlc3Qoc3RyKSA/ICdcIicgKyBzdHIucmVwbGFjZShTdXJ2ZXlKU09ONS5lc2NhcGFibGUsIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgICB2YXIgYyA9IFN1cnZleUpTT041Lm1ldGFbYV07XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIGMgPT09ICdzdHJpbmcnID9cbiAgICAgICAgICAgICAgICBjIDpcbiAgICAgICAgICAgICdcXFxcdScgKyAoJzAwMDAnICsgYS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTQpO1xuICAgICAgICB9KSArICdcIicgOiAnXCInICsgc3RyICsgJ1wiJztcbiAgICB9XG4gICAgLy8gRW5kXG5cbiAgICBwcml2YXRlIGludGVybmFsU3RyaW5naWZ5KGhvbGRlcjogYW55LCBrZXk6IGFueSwgaXNUb3BMZXZlbDogYm9vbGVhbikge1xuICAgICAgICB2YXIgYnVmZmVyLCByZXM7XG5cbiAgICAgICAgLy8gUmVwbGFjZSB0aGUgdmFsdWUsIGlmIG5lY2Vzc2FyeVxuICAgICAgICB2YXIgb2JqX3BhcnQgPSB0aGlzLmdldFJlcGxhY2VkVmFsdWVPclVuZGVmaW5lZChob2xkZXIsIGtleSwgaXNUb3BMZXZlbCk7XG5cbiAgICAgICAgaWYgKG9ial9wYXJ0ICYmICF0aGlzLmlzRGF0ZShvYmpfcGFydCkpIHtcbiAgICAgICAgICAgIC8vIHVuYm94IG9iamVjdHNcbiAgICAgICAgICAgIC8vIGRvbid0IHVuYm94IGRhdGVzLCBzaW5jZSB3aWxsIHR1cm4gaXQgaW50byBudW1iZXJcbiAgICAgICAgICAgIG9ial9wYXJ0ID0gb2JqX3BhcnQudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIG9ial9wYXJ0KSB7XG4gICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBvYmpfcGFydC50b1N0cmluZygpO1xuXG4gICAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKG9ial9wYXJ0KSB8fCAhaXNGaW5pdGUob2JqX3BhcnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm51bGxcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9ial9wYXJ0LnRvU3RyaW5nKCk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lc2NhcGVTdHJpbmcob2JqX3BhcnQudG9TdHJpbmcoKSk7XG5cbiAgICAgICAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgICAgICAgICBpZiAob2JqX3BhcnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibnVsbFwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0FycmF5KG9ial9wYXJ0KSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRm9yQ2lyY3VsYXIob2JqX3BhcnQpO1xuICAgICAgICAgICAgICAgICAgICBidWZmZXIgPSBcIltcIjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpTdGFjay5wdXNoKG9ial9wYXJ0KTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ial9wYXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXMgPSB0aGlzLmludGVybmFsU3RyaW5naWZ5KG9ial9wYXJ0LCBpLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gdGhpcy5tYWtlSW5kZW50KHRoaXMuaW5kZW50U3RyLCB0aGlzLm9ialN0YWNrLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzID09PSBudWxsIHx8IHR5cGVvZiByZXMgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gXCJudWxsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSByZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IG9ial9wYXJ0Lmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWZmZXIgKz0gXCIsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaW5kZW50U3RyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IFwiXFxuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpTdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IHRoaXMubWFrZUluZGVudCh0aGlzLmluZGVudFN0ciwgdGhpcy5vYmpTdGFjay5sZW5ndGgsIHRydWUpICsgXCJdXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZvckNpcmN1bGFyKG9ial9wYXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyID0gXCJ7XCI7XG4gICAgICAgICAgICAgICAgICAgIHZhciBub25FbXB0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ialN0YWNrLnB1c2gob2JqX3BhcnQpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9ial9wYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqX3BhcnQuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmludGVybmFsU3RyaW5naWZ5KG9ial9wYXJ0LCBwcm9wLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNUb3BMZXZlbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyICs9IHRoaXMubWFrZUluZGVudCh0aGlzLmluZGVudFN0ciwgdGhpcy5vYmpTdGFjay5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25FbXB0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wS2V5ID0gdGhpcy5pc1dvcmQocHJvcCkgPyBwcm9wIDogdGhpcy5lc2NhcGVTdHJpbmcocHJvcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciArPSBwcm9wS2V5ICsgXCI6XCIgKyAodGhpcy5pbmRlbnRTdHIgPyAnICcgOiAnJykgKyB2YWx1ZSArIFwiLFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ialN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobm9uRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9IGJ1ZmZlci5zdWJzdHJpbmcoMCwgYnVmZmVyLmxlbmd0aCAtIDEpICsgdGhpcy5tYWtlSW5kZW50KHRoaXMuaW5kZW50U3RyLCB0aGlzLm9ialN0YWNrLmxlbmd0aCkgKyBcIn1cIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlciA9ICd7fSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgLy8gZnVuY3Rpb25zIGFuZCB1bmRlZmluZWQgc2hvdWxkIGJlIGlnbm9yZWRcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qc29uNS50cyIsImltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBEcmFnRHJvcFRhcmdldEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYWdlOiBTdXJ2ZXkuUGFnZSwgcHVibGljIHRhcmdldDogYW55LCBwdWJsaWMgc291cmNlOiBhbnkpIHtcblxuICAgIH1cbiAgICBwdWJsaWMgbW92ZVRvKGRlc3RpbmF0aW9uOiBhbnksIGlzQm90dG9tOiBib29sZWFuLCBpc0VkZ2U6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW4ge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZGVzdDogXCIgKyBkZXN0aW5hdGlvbi5uYW1lICsgXCIsIGlzQm90dG9tOlwiICsgaXNCb3R0b20gKyBcIiwgaXNFZGdlOlwiICsgaXNFZGdlKTtcbiAgICAgICAgaXNFZGdlID0gaXNFZGdlIHx8ICFkZXN0aW5hdGlvbi5pc1BhbmVsO1xuICAgICAgICBpZihkZXN0aW5hdGlvbiA9PT0gdGhpcy50YXJnZXQpIHJldHVybiAhdGhpcy50YXJnZXQuaXNQYW5lbDtcbiAgICAgICAgdmFyIGRlc3RJbmZvID0gdGhpcy5maW5kSW5mbyhkZXN0aW5hdGlvbiwgaXNFZGdlKTtcbiAgICAgICAgaWYoIWRlc3RJbmZvKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRhcmdldEluZm8gPSB0aGlzLmZpbmRJbmZvKHRoaXMudGFyZ2V0LCB0cnVlKTtcbiAgICAgICAgdGhpcy51cGRhdGVJbmZvKGRlc3RJbmZvLCBpc0JvdHRvbSwgaXNFZGdlKTtcbiAgICAgICAgaWYodGhpcy5pc0luZm9FcXVhbHModGFyZ2V0SW5mbywgZGVzdEluZm8pKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgdGhpcy5jbGVhckJ5SW5mbyh0YXJnZXRJbmZvKTtcbiAgICAgICAgZGVzdEluZm8gPSB0aGlzLmZpbmRJbmZvKGRlc3RpbmF0aW9uLCBpc0VkZ2UpO1xuICAgICAgICBpZighZGVzdEluZm8pIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy51cGRhdGVJbmZvKGRlc3RJbmZvLCBpc0JvdHRvbSwgaXNFZGdlKTtcbiAgICAgICAgaWYoIXRoaXMuY2FuTW92ZShkZXN0SW5mbykpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy5hZGRJbmZvKGRlc3RJbmZvKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHB1YmxpYyBkb0Ryb3AoKSB7XG4gICAgICAgIHZhciBkZXN0SW5mbyA9IHRoaXMuZmluZEluZm8odGhpcy50YXJnZXQpO1xuICAgICAgICBpZighZGVzdEluZm8pIHJldHVybjtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRJbmRleEJ5SW5mbyhkZXN0SW5mbyk7XG4gICAgICAgIGRlc3RJbmZvLnBhbmVsLmFkZEVsZW1lbnQodGhpcy5nZXROZXdUYXJnZXRFbGVtZW50KCksIGluZGV4KTsgXG4gICAgICAgIGlmKHRoaXMuc291cmNlKSB7XG4gICAgICAgICAgICB2YXIgc3JjSW5mbyA9IHRoaXMuZmluZEluZm8odGhpcy5zb3VyY2UsIHRydWUpO1xuICAgICAgICAgICAgdmFyIHBhbmVsID0gc3JjSW5mbyA/IHNyY0luZm8ucGFuZWwgOiB0aGlzLnBhZ2U7XG4gICAgICAgICAgICBwYW5lbC5yZW1vdmVFbGVtZW50KHRoaXMuc291cmNlKTsgXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGNsZWFyKCkge1xuICAgICAgICB0aGlzLmNsZWFyQnlJbmZvKHRoaXMuZmluZEluZm8odGhpcy50YXJnZXQsIHRydWUpKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRJbmRleEJ5SW5mbyhpbmZvOiBhbnkpIHtcbiAgICAgICAgaWYoIWluZm8pIHJldHVybiAwO1xuICAgICAgICB2YXIgcm93cyA9IGluZm8ucGFuZWwua29Sb3dzKCk7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBpbmZvLnJJbmRleDsgaSArKykge1xuICAgICAgICAgICAgaW5kZXggKz0gcm93c1tpXVtcImtvRWxlbWVudHNcIl0oKS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZGV4ICsgaW5mby5lbEluZGV4O1xuICAgIH1cbiAgICBwcml2YXRlIGNhbk1vdmUoZGVzdEluZm86IGFueSkgOiBib29sZWFuIHtcbiAgICAgICAgaWYodGhpcy50YXJnZXQuaXNQYW5lbCAmJiBkZXN0SW5mby5lbGVtZW50KSB7XG4gICAgICAgICAgICBpZih0aGlzLnRhcmdldCA9PSBkZXN0SW5mby5lbGVtZW50IHx8IHRoaXMudGFyZ2V0LmNvbnRhaW5zRWxlbWVudChkZXN0SW5mby5lbGVtZW50KSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYodGhpcy5zb3VyY2UgJiYgKHRoaXMuc291cmNlID09IGRlc3RJbmZvLmVsZW1lbnQgfHwgdGhpcy5zb3VyY2UuY29udGFpbnNFbGVtZW50KGRlc3RJbmZvLmVsZW1lbnQpKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLnNvdXJjZSkgcmV0dXJuIHRydWU7XG4gICAgICAgIHZhciBzcmNJbmZvID0gdGhpcy5maW5kSW5mbyh0aGlzLnNvdXJjZSk7XG4gICAgICAgIGlmKHNyY0luZm8gPT0gbnVsbCB8fCBzcmNJbmZvLnBhbmVsICE9IGRlc3RJbmZvLnBhbmVsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgdmFyIHNyY0luZGV4ID0gdGhpcy5nZXRJbmRleEJ5SW5mbyhzcmNJbmZvKTtcbiAgICAgICAgdmFyIGRlc3RJbmRleCA9IHRoaXMuZ2V0SW5kZXhCeUluZm8oZGVzdEluZm8pO1xuICAgICAgICB2YXIgZGlmZiA9IGRlc3RJbmRleCAtIHNyY0luZGV4O1xuICAgICAgICByZXR1cm4gZGlmZiA8IDAgfHwgZGlmZiA+IDE7XG4gICAgfVxuICAgIHByaXZhdGUgaXNMYXN0RWxlbWVudEluUm93KGluZm86IGFueSkge1xuICAgICAgICByZXR1cm4gaW5mby5lbEluZGV4ID09IGluZm8ucGFuZWxbXCJrb1Jvd3NcIl0oKVtpbmZvLnJJbmRleF1bXCJrb0VsZW1lbnRzXCJdKCkubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVJbmZvKGluZm86IGFueSwgaXNCb3R0b206IGJvb2xlYW4sIGlzRWRnZTogYm9vbGVhbikge1xuICAgICAgICBpZihpbmZvLnJJbmRleCA8IDApIHJldHVybjsgXG4gICAgICAgIGlmKHRoaXMudGFyZ2V0LnN0YXJ0V2l0aE5ld0xpbmUpIHtcbiAgICAgICAgICAgIGlmKGlzQm90dG9tKSBpbmZvLnJJbmRleCArKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmKGlzQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgaW5mby5lbEluZGV4ICsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihpbmZvLmVsSW5kZXggPT0gMCAmJiBpbmZvLnJJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaW5mby5ySW5kZXggLS07XG4gICAgICAgICAgICAgICAgICAgIGluZm8uZWxJbmRleCA9IGluZm8ucGFuZWxbXCJrb1Jvd3NcIl0oKVtpbmZvLnJJbmRleF1bXCJrb0VsZW1lbnRzXCJdKCkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGFkZEluZm8oaW5mbzogYW55KSB7XG4gICAgICAgIGlmKHRoaXMudGFyZ2V0LmlzUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnBhcmVudCA9IGluZm8ucGFuZWw7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy50YXJnZXQuc3RhcnRXaXRoTmV3TGluZSB8fCBpbmZvLmVsSW5kZXggPCAxIFxuICAgICAgICAgICAgfHwgaW5mby5ySW5kZXggPCAwIHx8IGluZm8uckluZGV4ID49IGluZm8ucGFuZWwua29Sb3dzKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLkFkZEluZm9Bc1JvdyhpbmZvKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciByb3cgPSBpbmZvLnBhbmVsLmtvUm93cygpW2luZm8uckluZGV4XTtcbiAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IHJvd1tcImtvRWxlbWVudHNcIl0oKTtcbiAgICAgICAgICAgIGlmKGluZm8uZWxJbmRleCA8IGVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzLnNwbGljZShpbmZvLmVsSW5kZXgsIDAsIHRoaXMudGFyZ2V0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaCh0aGlzLnRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb3dbXCJrb0VsZW1lbnRzXCJdKGVsZW1lbnRzKTtcbiAgICAgICAgICAgIHJvdy51cGRhdGVWaXNpYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBBZGRJbmZvQXNSb3coaW5mbzogYW55KSB7XG4gICAgICAgIHZhciByb3cgPSBuZXcgU3VydmV5LlF1ZXN0aW9uUm93KGluZm8ucGFuZWwpO1xuICAgICAgICByb3cuYWRkRWxlbWVudCh0aGlzLnRhcmdldCk7XG4gICAgICAgIHZhciByb3dzID0gaW5mby5wYW5lbC5rb1Jvd3MoKTtcbiAgICAgICAgaWYoaW5mby5ySW5kZXggPj0gMCAmJiBpbmZvLnJJbmRleCA8IGluZm8ucGFuZWwua29Sb3dzKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICByb3dzLnNwbGljZShpbmZvLnJJbmRleCwgMCwgcm93KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJvd3MucHVzaChyb3cpO1xuICAgICAgIH1cbiAgICAgICBpbmZvLnBhbmVsLmtvUm93cyhyb3dzKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjbGVhckJ5SW5mbyhpbmZvOiBhbnkpIHtcbiAgICAgICAgaWYoaW5mbyA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIHZhciByb3dzID0gaW5mby5wYW5lbC5rb1Jvd3MoKTtcbiAgICAgICAgaWYoaW5mby5ySW5kZXggPCAwIHx8IGluZm8uckluZGV4ID49IHJvd3MubGVuZ3RoKSByZXR1cm47XG4gICAgICAgIHZhciByb3cgPSByb3dzW2luZm8uckluZGV4XTtcbiAgICAgICAgdmFyIGVsZW1lbnRzID0gcm93W1wia29FbGVtZW50c1wiXSgpOyBcbiAgICAgICAgaWYocm93W1wia29FbGVtZW50c1wiXSgpLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLnNwbGljZShpbmZvLmVsSW5kZXgsIDEpO1xuICAgICAgICAgICAgcm93W1wia29FbGVtZW50c1wiXShlbGVtZW50cyk7XG4gICAgICAgICAgICByb3cudXBkYXRlVmlzaWJsZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcm93cy5zcGxpY2UoaW5mby5ySW5kZXgsIDEpO1xuICAgICAgICAgICAgaW5mby5wYW5lbC5rb1Jvd3Mocm93cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBpc0luZm9FcXVhbHMoYTogYW55LCBiOiBhbnkpIDogYm9vbGVhbiB7XG4gICAgICAgIGlmKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGEucGFuZWwgPT09IGIucGFuZWwgJiYgYS5ySW5kZXggPT09IGIuckluZGV4ICYmIGEuZWxJbmRleCA9PT0gYi5lbEluZGV4O1xuICAgIH1cbiAgICBwcml2YXRlIGZpbmRJbmZvKGVsOiBhbnksIGlzRWRnZTogYm9vbGVhbiA9IGZhbHNlKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZEluZm9JblBhbmVsKHRoaXMucGFnZSwgZWwsIGlzRWRnZSk7XG4gICAgfVxuICAgIFxuICAgIHByaXZhdGUgZmluZEluZm9JblBhbmVsKHBhbmVsOiBTdXJ2ZXkuUGFuZWxNb2RlbEJhc2UsIGVsOiBhbnksIGlzRWRnZTogYm9vbGVhbik6IGFueSB7XG4gICAgICAgIGlmKGVsID09IHBhbmVsKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gcGFuZWw7XG4gICAgICAgICAgICBpZihwYW5lbC5wYXJlbnQgJiYgKGlzRWRnZSB8fCB0aGlzLnRhcmdldC5pc1BhbmVsKSkge1xuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhbmVsLnBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IHBhbmVsOiBwYXJlbnQsIHJJbmRleDogMCwgZWxJbmRleDogMCwgZWxlbWVudDogcGFuZWwgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcm93cyA9IHBhbmVsW1wia29Sb3dzXCJdKCk7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgdmFyIHJvdyA9IHJvd3NbaV07XG4gICAgICAgICAgICB2YXIgZWxlbWVudHMgPSByb3dbXCJrb0VsZW1lbnRzXCJdKCk7XG4gICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgZWxlbWVudHMubGVuZ3RoOyBqICsrKSB7XG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudHNbal0uaXNQYW5lbCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzID0gdGhpcy5maW5kSW5mb0luUGFuZWwoZWxlbWVudHNbal0sIGVsLCBpc0VkZ2UpO1xuICAgICAgICAgICAgICAgICAgICBpZihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lbGVtZW50ID09IGVsZW1lbnRzW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLnJJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVsSW5kZXggPSBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihlbGVtZW50c1tqXSA9PSBlbCkgcmV0dXJuIHsgcGFuZWw6IHBhbmVsLCBySW5kZXg6IGksIGVsSW5kZXg6IGosIGVsZW1lbnQ6IGVsZW1lbnRzW2pdIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0TmV3VGFyZ2V0RWxlbWVudCgpOiBhbnkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuY3JlYXRlQ2xhc3ModGhpcy50YXJnZXQuZ2V0VHlwZSgpKTtcbiAgICAgICAgdmFyIGpzb24gPSBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b0pzb25PYmplY3QodGhpcy50YXJnZXQpO1xuICAgICAgICBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b09iamVjdChqc29uLCByZXN1bHQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIERyYWdEcm9wSGVscGVyIHtcbiAgICBwdWJsaWMgc3RhdGljIGVkZ2VIZWlnaHQ6IG51bWJlciA9IDIwO1xuICAgIHN0YXRpYyBkYXRhU3RhcnQ6IHN0cmluZyA9IFwic3VydmV5anMsXCI7XG4gICAgc3RhdGljIGRyYWdEYXRhOiBhbnkgPSB7dGV4dDogXCJcIiwganNvbjogbnVsbCB9O1xuICAgIHN0YXRpYyBwcmV2RXZlbnQgPSB7IGVsZW1lbnQ6IG51bGwsIHg6IC0xLCB5OiAtMSB9O1xuICAgIHByaXZhdGUgb25Nb2RpZmllZENhbGxiYWNrOiAoKSA9PiBhbnk7XG4gICAgcHJpdmF0ZSBzY3JvbGxhYmxlRWxlbWVudDogSFRNTEVsZW1lbnQgPSBudWxsO1xuICAgIHByaXZhdGUgZGRUYXJnZXQ6IERyYWdEcm9wVGFyZ2V0RWxlbWVudCA9IG51bGw7XG4gICAgcHJpdmF0ZSBwcmV2Q29vcmRpbmF0ZXM6IHt4OiBudW1iZXIsIHk6IG51bWJlcn07XG4gICAgc3RhdGljIGNvdW50ZXI6IG51bWJlciAgPSAxO1xuICAgIHByaXZhdGUgaWQ6IG51bWJlciA9IERyYWdEcm9wSGVscGVyLmNvdW50ZXIgKys7XG4gICAgY29uc3RydWN0b3IocHVibGljIGRhdGE6IFN1cnZleS5JU3VydmV5LCBvbk1vZGlmaWVkQ2FsbGJhY2s6ICgpID0+IGFueSwgcGFyZW50OiBIVE1MRWxlbWVudCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2sgPSBvbk1vZGlmaWVkQ2FsbGJhY2s7XG4gICAgICAgIHRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQgPSBwYXJlbnQgJiYgPEhUTUxFbGVtZW50PnBhcmVudC5xdWVyeVNlbGVjdG9yKFwiI3Njcm9sbGFibGVEaXZcIik7XG4gICAgICAgIHRoaXMucHJldkNvb3JkaW5hdGVzID0ge3g6IC0xLCB5OiAtMX1cbiAgICB9XG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5LlN1cnZleSB7IHJldHVybiA8U3VydmV5LlN1cnZleT50aGlzLmRhdGE7IH1cbiAgICBwdWJsaWMgc3RhcnREcmFnUXVlc3Rpb24oZXZlbnQ6IERyYWdFdmVudCwgZWxlbWVudDogYW55KSB7XG4gICAgICAgIHZhciBqc29uID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9Kc29uT2JqZWN0KGVsZW1lbnQpO1xuICAgICAgICBqc29uW1widHlwZVwiXSA9IGVsZW1lbnQuZ2V0VHlwZSgpO1xuICAgICAgICB0aGlzLnByZXBhcmVEYXRhKGV2ZW50LCBlbGVtZW50Lm5hbWUsIGpzb24pO1xuICAgICAgICB0aGlzLmRkVGFyZ2V0LnNvdXJjZSA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIHB1YmxpYyBzdGFydERyYWdUb29sYm94SXRlbShldmVudDogRHJhZ0V2ZW50LCBlbGVtZW50TmFtZTogc3RyaW5nLCBlbGVtZW50SnNvbjogYW55KSB7XG4gICAgICAgIHRoaXMucHJlcGFyZURhdGEoZXZlbnQsICBlbGVtZW50TmFtZSwgZWxlbWVudEpzb24pO1xuICAgIH1cbiAgICBwdWJsaWMgaXNTdXJ2ZXlEcmFnZ2luZyhldmVudDogRHJhZ0V2ZW50KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghZXZlbnQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmdldERhdGEoZXZlbnQpLnRleHQ7XG4gICAgICAgIHJldHVybiBkYXRhICYmIGRhdGEuaW5kZXhPZihEcmFnRHJvcEhlbHBlci5kYXRhU3RhcnQpID09IDA7XG4gICAgfVxuICAgIHB1YmxpYyBkb0RyYWdEcm9wT3ZlcihldmVudDogRHJhZ0V2ZW50LCBlbGVtZW50OiBhbnksIGlzRWRnZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGV2ZW50ID0gdGhpcy5nZXRFdmVudChldmVudCk7XG4gICAgICAgIGlmKHRoaXMuaXNTYW1lQ29vcmRpbmF0ZXMoZXZlbnQpKSByZXR1cm47XG4gICAgICAgIHRoaXMuY2hlY2tTY3JvbGxZKGV2ZW50KTtcbiAgICAgICAgaWYgKCFlbGVtZW50IHx8ICF0aGlzLmlzU3VydmV5RHJhZ2dpbmcoZXZlbnQpIHx8IHRoaXMuaXNTYW1lUGxhY2UoZXZlbnQsIGVsZW1lbnQpKSByZXR1cm47XG4gICAgICAgIHZhciBib3R0b21JbmZvID0gdGhpcy5pc0JvdHRvbShldmVudCwgZWxlbWVudCk7XG4gICAgICAgIGlzRWRnZSA9IGVsZW1lbnQuaXNQYW5lbCA/IGlzRWRnZSAmJiBib3R0b21JbmZvLmlzRWRnZSA6IHRydWU7XG4gICAgICAgIGlmKGVsZW1lbnQuaXNQYW5lbCAmJiAhaXNFZGdlICYmIGVsZW1lbnQuZWxlbWVudHMubGVuZ3RoID4gMCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmRkVGFyZ2V0Lm1vdmVUbyhlbGVtZW50LCBib3R0b21JbmZvLmlzQm90dG9tLCBpc0VkZ2UpO1xuICAgIH1cbiAgICBwdWJsaWMgZW5kKCkge1xuICAgICAgICBpZih0aGlzLmRkVGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmRkVGFyZ2V0LmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1Njcm9sbFN0b3AgPSB0cnVlO1xuICAgICAgICB0aGlzLmNsZWFyRGF0YSgpO1xuICAgIH1cbiAgICBwdWJsaWMgZG9Ecm9wKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTdXJ2ZXlEcmFnZ2luZyhldmVudCkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmRkVGFyZ2V0LmRvRHJvcCgpO1xuICAgICAgICAgICAgaWYodGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2spIHRoaXMub25Nb2RpZmllZENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbmQoKTtcbiAgICB9XG4gICAgcHVibGljIGRvTGVhdmVQYWdlKGV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAgICAgdGhpcy5kZFRhcmdldC5jbGVhcigpO1xuICAgIH1cbiAgICBwdWJsaWMgc2Nyb2xsVG9FbGVtZW50KGVsOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAoIXRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQgfHwgIWVsKSByZXR1cm47XG4gICAgICAgIGVsLnNjcm9sbEludG9WaWV3KGZhbHNlKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVUYXJnZXRFbGVtZW50KGVsZW1lbnROYW1lOiBzdHJpbmcsIGpzb246IGFueSk6IGFueSB7XG4gICAgICAgIGlmICghZWxlbWVudE5hbWUgfHwgIWpzb24pIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgdGFyZ2V0RWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRhcmdldEVsZW1lbnQgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5jcmVhdGVDbGFzcyhqc29uW1widHlwZVwiXSk7XG4gICAgICAgIG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvT2JqZWN0KGpzb24sIHRhcmdldEVsZW1lbnQpO1xuICAgICAgICB0YXJnZXRFbGVtZW50Lm5hbWUgPSBlbGVtZW50TmFtZTtcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5zZXREYXRhKHRoaXMuc3VydmV5KTtcbiAgICAgICAgdGFyZ2V0RWxlbWVudC5yZW5kZXJXaWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICB0YXJnZXRFbGVtZW50W1wia29Jc0RyYWdnaW5nXCJdKHRydWUpO1xuICAgICAgICByZXR1cm4gdGFyZ2V0RWxlbWVudDtcbiAgICB9XG4gICAgcHJpdmF0ZSBpc0JvdHRvbShldmVudDogRHJhZ0V2ZW50LCBzdXJ2ZXlFbDogYW55KTogYW55IHtcbiAgICAgICAgZXZlbnQgPSB0aGlzLmdldEV2ZW50KGV2ZW50KTtcbiAgICAgICAgdmFyIGhlaWdodCA9IDxudW1iZXI+ZXZlbnQuY3VycmVudFRhcmdldFtcImNsaWVudEhlaWdodFwiXTtcbiAgICAgICAgdmFyIHkgPSBldmVudC5vZmZzZXRZO1xuICAgICAgICBpZiAoZXZlbnQuaGFzT3duUHJvcGVydHkoJ2xheWVyWCcpKSB7XG4gICAgICAgICAgICB5ID0gZXZlbnQubGF5ZXJZIC0gPG51bWJlcj5ldmVudC5jdXJyZW50VGFyZ2V0W1wib2Zmc2V0VG9wXCJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgaXNCb3R0b206IHkgPiBoZWlnaHQgLyAyLCBpc0VkZ2U6IHkgPD0gRHJhZ0Ryb3BIZWxwZXIuZWRnZUhlaWdodCB8fCBoZWlnaHQgLSB5IDw9IERyYWdEcm9wSGVscGVyLmVkZ2VIZWlnaHR9O1xuICAgIH1cbiAgICBwcml2YXRlIGlzU2FtZUNvb3JkaW5hdGVzKGV2ZW50OiBEcmFnRXZlbnQpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIHJlcyA9IE1hdGguYWJzKGV2ZW50LnBhZ2VYIC0gdGhpcy5wcmV2Q29vcmRpbmF0ZXMueCkgPiA1IHx8IE1hdGguYWJzKGV2ZW50LnBhZ2VZIC0gdGhpcy5wcmV2Q29vcmRpbmF0ZXMueSkgPiA1O1xuICAgICAgICBpZihyZXMpIHtcbiAgICAgICAgICAgIHRoaXMucHJldkNvb3JkaW5hdGVzLnggPSBldmVudC5wYWdlWDtcbiAgICAgICAgICAgIHRoaXMucHJldkNvb3JkaW5hdGVzLnkgPSBldmVudC5wYWdlWTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gIXJlcztcbiAgICB9XG4gICAgcHJpdmF0ZSBpc1NhbWVQbGFjZShldmVudDogRHJhZ0V2ZW50LCBlbGVtZW50OiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIHByZXYgPSBEcmFnRHJvcEhlbHBlci5wcmV2RXZlbnQ7XG4gICAgICAgIGlmIChwcmV2LmVsZW1lbnQgIT0gZWxlbWVudCB8fCBNYXRoLmFicyhldmVudC5jbGllbnRYIC0gcHJldi54KSA+IDUgfHwgTWF0aC5hYnMoZXZlbnQuY2xpZW50WSAtIHByZXYueSkgPiA1KSB7XG4gICAgICAgICAgICBwcmV2LmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgcHJldi54ID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgICAgIHByZXYueSA9IGV2ZW50LmNsaWVudFk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHByaXZhdGUgaXNTY3JvbGxTdG9wOiBib29sZWFuID0gdHJ1ZTtcbiAgICBwcml2YXRlIHN0YXRpYyBTY3JvbGxEZWxheTogbnVtYmVyID0gMzA7XG4gICAgcHJpdmF0ZSBzdGF0aWMgU2Nyb2xsT2Zmc2V0OiBudW1iZXIgPSAxMDA7XG4gICAgcHJpdmF0ZSBjaGVja1Njcm9sbFkoZTogRHJhZ0V2ZW50KSB7XG4gICAgICAgIGlmICghdGhpcy5zY3JvbGxhYmxlRWxlbWVudCkgcmV0dXJuO1xuICAgICAgICB2YXIgeSA9IHRoaXMuZ2V0U2Nyb2xsYWJsZUVsZW1lbnRQb3NZKGUpO1xuICAgICAgICBpZiAoeSA8IDApIHJldHVybjtcbiAgICAgICAgdGhpcy5pc1Njcm9sbFN0b3AgPSB0cnVlO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gPG51bWJlcj50aGlzLnNjcm9sbGFibGVFbGVtZW50W1wiY2xpZW50SGVpZ2h0XCJdO1xuICAgICAgICBpZiAoeSA8IERyYWdEcm9wSGVscGVyLlNjcm9sbE9mZnNldCAmJiB5ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxTdG9wID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRvU2Nyb2xsWSgtMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhlaWdodCAtIHkgPCBEcmFnRHJvcEhlbHBlci5TY3JvbGxPZmZzZXQgJiYgaGVpZ2h0ID49IHkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxTdG9wID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRvU2Nyb2xsWSgxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGRvU2Nyb2xsWShzdGVwOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIGVsID0gdGhpcy5zY3JvbGxhYmxlRWxlbWVudDtcbiAgICAgICAgdmFyIHNjcm9sbFkgPSBlbC5zY3JvbGxUb3AgKyBzdGVwO1xuICAgICAgICBpZiAoc2Nyb2xsWSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuaXNTY3JvbGxTdG9wID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbC5zY3JvbGxUb3AgPSBzY3JvbGxZO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5pc1Njcm9sbFN0b3ApIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyBzZWxmLmRvU2Nyb2xsWShzdGVwKSB9LCBEcmFnRHJvcEhlbHBlci5TY3JvbGxEZWxheSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRTY3JvbGxhYmxlRWxlbWVudFBvc1koZTogRHJhZ0V2ZW50KTogbnVtYmVyIHtcbiAgICAgICAgaWYgKCF0aGlzLnNjcm9sbGFibGVFbGVtZW50IHx8ICFlLmN1cnJlbnRUYXJnZXQpIHJldHVybiAtMTtcbiAgICAgICAgdmFyIGVsID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgICB2YXIgb2Zmc2V0VG9wID0gMDtcbiAgICAgICAgd2hpbGUoZWwgJiYgZWwgIT0gdGhpcy5zY3JvbGxhYmxlRWxlbWVudCkge1xuICAgICAgICAgICAgb2Zmc2V0VG9wICs9IDxudW1iZXI+ZWxbXCJvZmZzZXRUb3BcIl07XG4gICAgICAgICAgICBlbCA9IGVsW1wib2Zmc2V0UGFyZW50XCJdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlLm9mZnNldFkgKyA8bnVtYmVyPmUuY3VycmVudFRhcmdldFtcIm9mZnNldFRvcFwiXSAtIHRoaXMuc2Nyb2xsYWJsZUVsZW1lbnQub2Zmc2V0VG9wIC0gdGhpcy5zY3JvbGxhYmxlRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0RXZlbnQoZXZlbnQ6IERyYWdFdmVudCk6IERyYWdFdmVudCB7XG4gICAgICAgIHJldHVybiBldmVudFtcIm9yaWdpbmFsRXZlbnRcIl0gPyBldmVudFtcIm9yaWdpbmFsRXZlbnRcIl0gOiBldmVudDtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRZKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IDA7XG5cbiAgICAgICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSAoZWxlbWVudC5vZmZzZXRUb3AgLSBlbGVtZW50LnNjcm9sbFRvcCArIGVsZW1lbnQuY2xpZW50VG9wKTtcbiAgICAgICAgICAgIGVsZW1lbnQgPSA8SFRNTEVsZW1lbnQ+ZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBwcmVwYXJlRGF0YShldmVudDogRHJhZ0V2ZW50LCBlbGVtZW50TmFtZTogc3RyaW5nLCBqc29uKSB7XG4gICAgICAgIHZhciBzdHIgPSBEcmFnRHJvcEhlbHBlci5kYXRhU3RhcnQgKyBcInF1ZXN0aW9ubmFtZTpcIiArIGVsZW1lbnROYW1lO1xuICAgICAgICB0aGlzLnNldERhdGEoZXZlbnQsIHN0cik7XG4gICAgICAgIHZhciB0YXJnZXRFbGVtZW50ID0gdGhpcy5jcmVhdGVUYXJnZXRFbGVtZW50KGVsZW1lbnROYW1lLCBqc29uKTtcbiAgICAgICAgdGhpcy5kZFRhcmdldCA9IG5ldyBEcmFnRHJvcFRhcmdldEVsZW1lbnQoPFN1cnZleS5QYWdlPnRoaXMuc3VydmV5LmN1cnJlbnRQYWdlLCB0YXJnZXRFbGVtZW50LCBudWxsKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXREYXRhKGV2ZW50OiBEcmFnRXZlbnQsIHRleHQ6IHN0cmluZykge1xuICAgICAgICBpZiAoZXZlbnRbXCJvcmlnaW5hbEV2ZW50XCJdKSB7XG4gICAgICAgICAgICBldmVudCA9IGV2ZW50W1wib3JpZ2luYWxFdmVudFwiXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuc2V0RGF0YShcIlRleHRcIiwgdGV4dCk7XG4gICAgICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9IFwiY29weVwiO1xuICAgICAgICB9XG4gICAgICAgIERyYWdEcm9wSGVscGVyLmRyYWdEYXRhID0geyB0ZXh0OiB0ZXh0IH07XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0RGF0YShldmVudDogRHJhZ0V2ZW50KTogYW55IHtcbiAgICAgICAgaWYgKGV2ZW50W1wib3JpZ2luYWxFdmVudFwiXSkge1xuICAgICAgICAgICAgZXZlbnQgPSBldmVudFtcIm9yaWdpbmFsRXZlbnRcIl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmRhdGFUcmFuc2Zlcikge1xuICAgICAgICAgICAgdmFyIHRleHQgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcIlRleHRcIik7XG4gICAgICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgICAgICAgIERyYWdEcm9wSGVscGVyLmRyYWdEYXRhLnRleHQgPSB0ZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBEcmFnRHJvcEhlbHBlci5kcmFnRGF0YTtcbiAgICB9XG4gICAgcHJpdmF0ZSBjbGVhckRhdGEoKSB7XG4gICAgICAgIC8vdGhpcy5kZFRhcmdldCA9IG51bGw7XG4gICAgICAgIERyYWdEcm9wSGVscGVyLmRyYWdEYXRhID0ge3RleHQ6IFwiXCIsIGpzb246IG51bGx9O1xuICAgICAgICB2YXIgcHJldiA9IERyYWdEcm9wSGVscGVyLnByZXZFdmVudDtcbiAgICAgICAgcHJldi5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgcHJldi54ID0gLTE7XG4gICAgICAgIHByZXYueSA9IC0xO1xuICAgICAgICB0aGlzLnByZXZDb29yZGluYXRlcy54ID0gLTE7XG4gICAgICAgIHRoaXMucHJldkNvb3JkaW5hdGVzLnkgPSAtMTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2RyYWdkcm9waGVscGVyLnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZSwgSVN1cnZleU9iamVjdEVkaXRvck9wdGlvbnN9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eUVkaXRvckJhc2VcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBkZWNsYXJlIHR5cGUgU3VydmV5T25Qcm9wZXJ0eUNoYW5nZWRDYWxsYmFjayA9IChwcm9wZXJ0eTogU3VydmV5T2JqZWN0UHJvcGVydHksIG5ld1ZhbHVlOiBhbnkpID0+IHZvaWQ7XG5cblxuZXhwb3J0IGNsYXNzIFN1cnZleU9iamVjdFByb3BlcnR5IHtcbiAgICBwcml2YXRlIG9iamVjdFZhbHVlOiBhbnk7XG4gICAgcHJpdmF0ZSBpc1ZhbHVlVXBkYXRpbmc6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBvblByb3BlcnR5Q2hhbmdlZDogU3VydmV5T25Qcm9wZXJ0eUNoYW5nZWRDYWxsYmFjaztcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBkaXNwbGF5TmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuICAgIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICBwdWJsaWMga29WYWx1ZTogYW55O1xuICAgIHB1YmxpYyBrb1RleHQ6IGFueTtcbiAgICBwdWJsaWMgbW9kYWxOYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIG1vZGFsTmFtZVRhcmdldDogc3RyaW5nO1xuICAgIHB1YmxpYyBrb0lzRGVmYXVsdDogYW55O1xuICAgIHB1YmxpYyBlZGl0b3I6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZTtcbiAgICBwdWJsaWMgZWRpdG9yVHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBiYXNlRWRpdG9yVHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBjaG9pY2VzOiBBcnJheTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5LCBvblByb3BlcnR5Q2hhbmdlZDogU3VydmV5T25Qcm9wZXJ0eUNoYW5nZWRDYWxsYmFjayA9IG51bGwsIHByb3BlcnR5RWRpdG9yT3B0aW9uczogSVN1cnZleU9iamVjdEVkaXRvck9wdGlvbnMgPSBudWxsKSB7XG4gICAgICAgIHRoaXMub25Qcm9wZXJ0eUNoYW5nZWQgPSBvblByb3BlcnR5Q2hhbmdlZDtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5wcm9wZXJ0eS5uYW1lO1xuICAgICAgICB0aGlzLmRpc2FibGVkID0gcHJvcGVydHlbXCJyZWFkT25seVwiXTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmNob2ljZXMgPSBwcm9wZXJ0eS5jaG9pY2VzO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZWRpdG9yVHlwZSA9IHByb3BlcnR5LnR5cGU7XG4gICAgICAgIC8vVE9ET1xuICAgICAgICBpZiAodGhpcy5jaG9pY2VzICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdG9yVHlwZSA9IFwiZHJvcGRvd25cIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb25JdGVtQ2hhbmdlZCA9IGZ1bmN0aW9uIChuZXdWYWx1ZTogYW55KSB7IHNlbGYub25BcHBseUVkaXRvclZhbHVlKG5ld1ZhbHVlKTsgfTtcbiAgICAgICAgdGhpcy5lZGl0b3IgPSBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UuY3JlYXRlRWRpdG9yKHRoaXMuZWRpdG9yVHlwZSwgb25JdGVtQ2hhbmdlZCk7XG4gICAgICAgIHRoaXMuZWRpdG9yLm9uR2V0TG9jYWxlID0gdGhpcy5kb09uR2V0TG9jYWxlO1xuICAgICAgICB0aGlzLmVkaXRvci5vcHRpb25zID0gcHJvcGVydHlFZGl0b3JPcHRpb25zO1xuICAgICAgICB0aGlzLmVkaXRvci5lZGl0YWJsZVByb3BlcnR5TmFtZSA9IHRoaXMucHJvcGVydHkubmFtZTtcbiAgICAgICAgdGhpcy5lZGl0b3JUeXBlID0gdGhpcy5lZGl0b3IuZWRpdG9yVHlwZTtcbiAgICAgICAgdGhpcy5tb2RhbE5hbWUgPSBcIm1vZGVsRWRpdG9yXCIgKyB0aGlzLmVkaXRvclR5cGUgKyB0aGlzLm5hbWU7XG4gICAgICAgIHRoaXMubW9kYWxOYW1lVGFyZ2V0ID0gXCIjXCIgKyB0aGlzLm1vZGFsTmFtZTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5vbmtvVmFsdWVDaGFuZ2VkKG5ld1ZhbHVlKTsgfSk7XG4gICAgICAgIHRoaXMua29UZXh0ID0ga28uY29tcHV0ZWQoKCkgPT4geyByZXR1cm4gc2VsZi5nZXRWYWx1ZVRleHQoc2VsZi5rb1ZhbHVlKCkpOyB9KTtcbiAgICAgICAgdGhpcy5rb0lzRGVmYXVsdCA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYucHJvcGVydHkuaXNEZWZhdWx0VmFsdWUoc2VsZi5rb1ZhbHVlKCkpOyB9KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBkb09uR2V0TG9jYWxlKCk6IHN0cmluZyB7XG4gICAgICAgIGlmKHRoaXMub2JqZWN0ICYmIHRoaXMub2JqZWN0W1wiZ2V0TG9jYWxlXCJdKSByZXR1cm4gdGhpcy5vYmplY3QuZ2V0TG9jYWxlKCk7XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IG9iamVjdCgpOiBhbnkgeyByZXR1cm4gdGhpcy5vYmplY3RWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgb2JqZWN0KHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5vYmplY3RWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCB1cGRhdGVWYWx1ZSgpIHtcbiAgICAgICAgdGhpcy5pc1ZhbHVlVXBkYXRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmtvVmFsdWUodGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgICAgdGhpcy5lZGl0b3Iuc2V0T2JqZWN0KHRoaXMub2JqZWN0KTtcbiAgICAgICAgdGhpcy5lZGl0b3Iuc2V0VGl0bGUoZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLmVkaXRQcm9wZXJ0eVwiKVtcImZvcm1hdFwiXSh0aGlzLnByb3BlcnR5Lm5hbWUpKTtcbiAgICAgICAgdGhpcy51cGRhdGVFZGl0b3JEYXRhKHRoaXMua29WYWx1ZSgpKTtcbiAgICAgICAgdGhpcy5pc1ZhbHVlVXBkYXRpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBpc0FwcGx5aW5nTmV3VmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIG9uQXBwbHlFZGl0b3JWYWx1ZShuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIHRoaXMuaXNBcHBseWluZ05ld1ZhbHVlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgdGhpcy5pc0FwcGx5aW5nTmV3VmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gICAgcHJpdmF0ZSBvbmtvVmFsdWVDaGFuZ2VkKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzQXBwbHlpbmdOZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVFZGl0b3JEYXRhKG5ld1ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vYmplY3QgPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBpZiAodGhpcy5nZXRWYWx1ZSgpID09IG5ld1ZhbHVlKSByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLm9uUHJvcGVydHlDaGFuZ2VkICE9IG51bGwgJiYgIXRoaXMuaXNWYWx1ZVVwZGF0aW5nKSB0aGlzLm9uUHJvcGVydHlDaGFuZ2VkKHRoaXMsIG5ld1ZhbHVlKTtcbiAgICB9XG4gICAgcHJpdmF0ZSB1cGRhdGVFZGl0b3JEYXRhKG5ld1ZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5lZGl0b3IudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGdldFZhbHVlKCk6IGFueSB7XG5cdGlmKHRoaXMucHJvcGVydHlbXCJnZXRQcm9wZXJ0eVZhbHVlXCJdKSByZXR1cm4gdGhpcy5wcm9wZXJ0eVtcImdldFByb3BlcnR5VmFsdWVcIl0odGhpcy5vYmplY3QpOyAvL1RPRE8gbWFrZSB0aGUgb25seSBjYWxsXG4gICAgICAgIGlmICh0aGlzLnByb3BlcnR5Lmhhc1RvVXNlR2V0VmFsdWUpIHJldHVybiB0aGlzLnByb3BlcnR5LmdldFZhbHVlKHRoaXMub2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0W3RoaXMubmFtZV07XG4gICAgfVxuICAgIHByb3RlY3RlZCBnZXRWYWx1ZVRleHQodmFsdWU6IGFueSk6IHN0cmluZyB7IHJldHVybiB0aGlzLmVkaXRvci5nZXRWYWx1ZVRleHQodmFsdWUpOyB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL29iamVjdFByb3BlcnR5LnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQge1N1cnZleUhlbHBlciwgT2JqVHlwZX0gZnJvbSBcIi4vc3VydmV5SGVscGVyXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5VmVyYnMge1xuICAgIHByaXZhdGUgc3VydmV5VmFsdWU6IFN1cnZleS5TdXJ2ZXk7XG4gICAgcHJpdmF0ZSBvYmpWYWx1ZTogYW55O1xuICAgIHByaXZhdGUgY2hvaWNlc0NsYXNzZXM6IEFycmF5PHN0cmluZz47XG4gICAga29WZXJiczogYW55O1xuICAgIGtvSGFzVmVyYnM6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb25Nb2RpZmllZENhbGxiYWNrOiAoKSA9PiBhbnkpIHtcbiAgICAgICAgdGhpcy5rb1ZlcmJzID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMua29IYXNWZXJicyA9IGtvLm9ic2VydmFibGUoKTtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRDaGlsZHJlbkNsYXNzZXMoXCJzZWxlY3RiYXNlXCIsIHRydWUpO1xuICAgICAgICB0aGlzLmNob2ljZXNDbGFzc2VzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VzQ2xhc3Nlcy5wdXNoKGNsYXNzZXNbaV0ubmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5LlN1cnZleSB7IHJldHVybiB0aGlzLnN1cnZleVZhbHVlOyB9XG4gICAgcHVibGljIHNldCBzdXJ2ZXkodmFsdWU6IFN1cnZleS5TdXJ2ZXkpIHtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5ID09IHZhbHVlKSByZXR1cm47XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgcHVibGljIGdldCBvYmooKTogYW55IHsgcmV0dXJuIHRoaXMub2JqVmFsdWUgfVxuICAgIHB1YmxpYyBzZXQgb2JqKHZhbHVlOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMub2JqVmFsdWUgPT0gdmFsdWUpIHJldHVybjtcbiAgICAgICAgdGhpcy5vYmpWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmJ1aWxkVmVyYnMoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBidWlsZFZlcmJzKCkge1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgdmFyIG9ialR5cGUgPSBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZSh0aGlzLm9iaik7XG4gICAgICAgIGlmIChvYmpUeXBlID09IE9ialR5cGUuUXVlc3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBxdWVzdGlvbiA9IDxTdXJ2ZXkuUXVlc3Rpb25CYXNlPnRoaXMub2JqO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3VydmV5LnBhZ2VzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKG5ldyBTdXJ2ZXlWZXJiQ2hhbmdlUGFnZUl0ZW0odGhpcy5zdXJ2ZXksIHF1ZXN0aW9uLCB0aGlzLm9uTW9kaWZpZWRDYWxsYmFjaykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2hvaWNlc0NsYXNzZXMuaW5kZXhPZihxdWVzdGlvbi5nZXRUeXBlKCkpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKG5ldyBTdXJ2ZXlWZXJiQ2hhbmdlVHlwZUl0ZW0odGhpcy5zdXJ2ZXksIHF1ZXN0aW9uLCB0aGlzLm9uTW9kaWZpZWRDYWxsYmFjaykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMua29WZXJicyhhcnJheSk7XG4gICAgICAgIHRoaXMua29IYXNWZXJicyhhcnJheS5sZW5ndGggPiAwKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU3VydmV5VmVyYkl0ZW0ge1xuICAgIGtvSXRlbXM6IGFueTtcbiAgICBrb1NlbGVjdGVkSXRlbTogYW55O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBzdXJ2ZXk6IFN1cnZleS5TdXJ2ZXksIHB1YmxpYyBxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSwgcHVibGljIG9uTW9kaWZpZWRDYWxsYmFjazogKCkgPT4gYW55KSB7XG4gICAgICAgIHRoaXMua29JdGVtcyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWRJdGVtID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHRleHQoKTogc3RyaW5nIHsgcmV0dXJuIFwiXCI7IH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlWZXJiQ2hhbmdlVHlwZUl0ZW0gZXh0ZW5kcyBTdXJ2ZXlWZXJiSXRlbSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHN1cnZleTogU3VydmV5LlN1cnZleSwgcHVibGljIHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlLCBwdWJsaWMgb25Nb2RpZmllZENhbGxiYWNrOiAoKSA9PiBhbnkpIHtcbiAgICAgICAgc3VwZXIoc3VydmV5LCBxdWVzdGlvbiwgb25Nb2RpZmllZENhbGxiYWNrKTtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5nZXRDaGlsZHJlbkNsYXNzZXMoXCJzZWxlY3RiYXNlXCIsIHRydWUpO1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKHsgdmFsdWU6IGNsYXNzZXNbaV0ubmFtZSwgdGV4dDogZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInF0LlwiICsgY2xhc3Nlc1tpXS5uYW1lKSB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvSXRlbXMoYXJyYXkpO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWRJdGVtKHF1ZXN0aW9uLmdldFR5cGUoKSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkSXRlbS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuY2hhbmdlVHlwZShuZXdWYWx1ZSk7IH0pO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHRleHQoKTogc3RyaW5nIHsgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS52ZXJiQ2hhbmdlVHlwZVwiKTsgfVxuICAgIHByaXZhdGUgY2hhbmdlVHlwZShxdWVzdGlvblR5cGU6IHN0cmluZykge1xuICAgICAgICBpZiAocXVlc3Rpb25UeXBlID09IHRoaXMucXVlc3Rpb24uZ2V0VHlwZSgpKSByZXR1cm47XG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXkuZ2V0UGFnZUJ5UXVlc3Rpb24odGhpcy5xdWVzdGlvbik7XG4gICAgICAgIHZhciBpbmRleCA9IHBhZ2UucXVlc3Rpb25zLmluZGV4T2YodGhpcy5xdWVzdGlvbik7XG4gICAgICAgIHZhciBuZXdRdWVzdGlvbiA9IFN1cnZleS5RdWVzdGlvbkZhY3RvcnkuSW5zdGFuY2UuY3JlYXRlUXVlc3Rpb24ocXVlc3Rpb25UeXBlLCB0aGlzLnF1ZXN0aW9uLm5hbWUpO1xuICAgICAgICB2YXIganNvbk9iaiA9IG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpO1xuICAgICAgICB2YXIganNvbiA9IGpzb25PYmoudG9Kc29uT2JqZWN0KHRoaXMucXVlc3Rpb24pO1xuICAgICAgICBqc29uT2JqLnRvT2JqZWN0KGpzb24sIG5ld1F1ZXN0aW9uKTtcbiAgICAgICAgcGFnZS5yZW1vdmVRdWVzdGlvbih0aGlzLnF1ZXN0aW9uKTtcbiAgICAgICAgcGFnZS5hZGRRdWVzdGlvbihuZXdRdWVzdGlvbiwgaW5kZXgpO1xuICAgICAgICBpZiAodGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2spIHRoaXMub25Nb2RpZmllZENhbGxiYWNrKCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFN1cnZleVZlcmJDaGFuZ2VQYWdlSXRlbSBleHRlbmRzIFN1cnZleVZlcmJJdGVtIHtcbiAgICBwcml2YXRlIHByZXZQYWdlOiBTdXJ2ZXkuUGFnZTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgc3VydmV5OiBTdXJ2ZXkuU3VydmV5LCBwdWJsaWMgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UsIHB1YmxpYyBvbk1vZGlmaWVkQ2FsbGJhY2s6ICgpID0+IGFueSkge1xuICAgICAgICBzdXBlcihzdXJ2ZXksIHF1ZXN0aW9uLCBvbk1vZGlmaWVkQ2FsbGJhY2spO1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1cnZleS5wYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnN1cnZleS5wYWdlc1tpXTtcbiAgICAgICAgICAgIGFycmF5LnB1c2goeyB2YWx1ZTogcGFnZSwgdGV4dDogU3VydmV5SGVscGVyLmdldE9iamVjdE5hbWUocGFnZSkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb0l0ZW1zKGFycmF5KTtcbiAgICAgICAgdGhpcy5wcmV2UGFnZSA9IDxTdXJ2ZXkuUGFnZT50aGlzLnN1cnZleS5nZXRQYWdlQnlRdWVzdGlvbihxdWVzdGlvbik7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZEl0ZW0odGhpcy5wcmV2UGFnZSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkSXRlbS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuY2hhbmdlUGFnZShuZXdWYWx1ZSk7IH0pO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHRleHQoKTogc3RyaW5nIHsgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS52ZXJiQ2hhbmdlUGFnZVwiKTsgfVxuICAgIHByaXZhdGUgY2hhbmdlUGFnZShuZXdQYWdlOiBTdXJ2ZXkuUGFnZSkge1xuICAgICAgICBpZiAobmV3UGFnZSA9PSBudWxsIHx8IG5ld1BhZ2UgPT0gdGhpcy5wcmV2UGFnZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnByZXZQYWdlLnJlbW92ZVF1ZXN0aW9uKHRoaXMucXVlc3Rpb24pO1xuICAgICAgICBuZXdQYWdlLmFkZFF1ZXN0aW9uKHRoaXMucXVlc3Rpb24pO1xuICAgICAgICBpZiAodGhpcy5vbk1vZGlmaWVkQ2FsbGJhY2spIHRoaXMub25Nb2RpZmllZENhbGxiYWNrKCk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vYmplY3RWZXJicy50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlIZWxwZXJ9IGZyb20gXCIuL3N1cnZleUhlbHBlclwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGRlY2xhcmUgdHlwZSBTdXJ2ZXlBZGROZXdQYWdlQ2FsbGJhY2sgPSAoKSA9PiB2b2lkO1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBTdXJ2ZXlTZWxlY3RQYWdlQ2FsbGJhY2sgPSAocGFnZTogU3VydmV5LlBhZ2UpID0+IHZvaWQ7XG5leHBvcnQgZGVjbGFyZSB0eXBlIFN1cnZleU1vdmVQYWdlQ2FsbGJhY2sgPSAoaW5kZXhGcm9tOiBudW1iZXIsIGluZGV4VG86IG51bWJlcikgPT4gdm9pZDtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVBhZ2VzRWRpdG9yIHtcbiAgICBzdXJ2ZXlWYWx1ZTogU3VydmV5LlN1cnZleTtcbiAgICBrb1BhZ2VzOiBhbnk7XG4gICAga29Jc1ZhbGlkOiBhbnk7XG4gICAgc2VsZWN0UGFnZUNsaWNrOiBhbnk7XG4gICAgb25BZGROZXdQYWdlQ2FsbGJhY2s6IFN1cnZleUFkZE5ld1BhZ2VDYWxsYmFjaztcbiAgICBvblNlbGVjdFBhZ2VDYWxsYmFjazogU3VydmV5U2VsZWN0UGFnZUNhbGxiYWNrO1xuICAgIG9uRGVsZXRlUGFnZUNhbGxiYWNrOiBTdXJ2ZXlTZWxlY3RQYWdlQ2FsbGJhY2s7XG4gICAgb25Nb3ZlUGFnZUNhbGxiYWNrOiBTdXJ2ZXlNb3ZlUGFnZUNhbGxiYWNrO1xuICAgIGRyYWdnaW5nUGFnZTogYW55ID0gbnVsbDtcbiAgICBkcmFnU3RhcnQ6IGFueTsgZHJhZ092ZXI6IGFueTsgZHJhZ0VuZDogYW55OyBkcmFnRHJvcDogYW55OyBrZXlEb3duOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3RvcihvbkFkZE5ld1BhZ2VDYWxsYmFjazogU3VydmV5QWRkTmV3UGFnZUNhbGxiYWNrID0gbnVsbCwgb25TZWxlY3RQYWdlQ2FsbGJhY2s6IFN1cnZleVNlbGVjdFBhZ2VDYWxsYmFjayA9IG51bGwsXG4gICAgICAgICAgICAgICAgb25Nb3ZlUGFnZUNhbGxiYWNrOiBTdXJ2ZXlNb3ZlUGFnZUNhbGxiYWNrID0gbnVsbCwgb25EZWxldGVQYWdlQ2FsbGJhY2s6IFN1cnZleVNlbGVjdFBhZ2VDYWxsYmFjayA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5rb1BhZ2VzID0ga28ub2JzZXJ2YWJsZUFycmF5KCk7XG4gICAgICAgIHRoaXMua29Jc1ZhbGlkID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMub25BZGROZXdQYWdlQ2FsbGJhY2sgPSBvbkFkZE5ld1BhZ2VDYWxsYmFjaztcbiAgICAgICAgdGhpcy5vblNlbGVjdFBhZ2VDYWxsYmFjayA9IG9uU2VsZWN0UGFnZUNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9uTW92ZVBhZ2VDYWxsYmFjayA9IG9uTW92ZVBhZ2VDYWxsYmFjaztcbiAgICAgICAgdGhpcy5vbkRlbGV0ZVBhZ2VDYWxsYmFjayA9IG9uRGVsZXRlUGFnZUNhbGxiYWNrO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuc2VsZWN0UGFnZUNsaWNrID0gZnVuY3Rpb24ocGFnZUl0ZW0pIHtcbiAgICAgICAgICAgIGlmIChzZWxmLm9uU2VsZWN0UGFnZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5vblNlbGVjdFBhZ2VDYWxsYmFjayhwYWdlSXRlbS5wYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5rZXlEb3duID0gZnVuY3Rpb24gKGVsOiBhbnksIGU6IEtleWJvYXJkRXZlbnQpIHsgc2VsZi5vbktleURvd24oZWwsIGUpOyB9XG4gICAgICAgIHRoaXMuZHJhZ1N0YXJ0ID0gZnVuY3Rpb24gKGVsOiBhbnkpIHsgc2VsZi5kcmFnZ2luZ1BhZ2UgPSBlbDsgfTtcbiAgICAgICAgdGhpcy5kcmFnT3ZlciA9IGZ1bmN0aW9uIChlbDogYW55KSB7ICB9O1xuICAgICAgICB0aGlzLmRyYWdFbmQgPSBmdW5jdGlvbiAoKSB7IHNlbGYuZHJhZ2dpbmdQYWdlID0gbnVsbDsgfTtcbiAgICAgICAgdGhpcy5kcmFnRHJvcCA9IGZ1bmN0aW9uIChlbDogYW55KSB7IHNlbGYubW92ZURyYWdnaW5nUGFnZVRvKGVsKTsgfTtcbiAgICB9XG4gICAgcHVibGljIGdldCBzdXJ2ZXkoKTogU3VydmV5LlN1cnZleSB7IHJldHVybiB0aGlzLnN1cnZleVZhbHVlOyB9XG4gICAgcHVibGljIHNldCBzdXJ2ZXkodmFsdWU6IFN1cnZleS5TdXJ2ZXkpIHtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmtvSXNWYWxpZCh0aGlzLnN1cnZleVZhbHVlICE9IG51bGwpO1xuICAgICAgICB0aGlzLnVwZGF0ZVBhZ2VzKCk7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRTZWxlY3RlZFBhZ2UocGFnZTogU3VydmV5LlBhZ2UpIHtcbiAgICAgICAgdmFyIHBhZ2VzID0gdGhpcy5rb1BhZ2VzKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhZ2VzW2ldLmtvU2VsZWN0ZWQocGFnZXNbaV0ucGFnZSA9PSBwYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgYWRkTmV3UGFnZUNsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5vbkFkZE5ld1BhZ2VDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5vbkFkZE5ld1BhZ2VDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyByZW1vdmVQYWdlKHBhZ2U6IFN1cnZleS5QYWdlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0SW5kZXhCeVBhZ2UocGFnZSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmtvUGFnZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgY2hhbmdlTmFtZShwYWdlOiBTdXJ2ZXkuUGFnZSkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldEluZGV4QnlQYWdlKHBhZ2UpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5rb1BhZ2VzKClbaW5kZXhdLnRpdGxlKFN1cnZleUhlbHBlci5nZXRPYmplY3ROYW1lKHBhZ2UpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0SW5kZXhCeVBhZ2UocGFnZTogU3VydmV5LlBhZ2UpOiBudW1iZXIge1xuICAgICAgICB2YXIgcGFnZXMgPSB0aGlzLmtvUGFnZXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHBhZ2VzW2ldLnBhZ2UgPT0gcGFnZSkgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25LZXlEb3duKGVsOiBhbnksIGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMua29QYWdlcygpLmxlbmd0aCA8PSAxKSByZXR1cm47XG4gICAgICAgIHZhciBwYWdlcyA9IHRoaXMua29QYWdlcygpO1xuICAgICAgICB2YXIgcGFnZUluZGV4ID0gLTE7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwYWdlc1tpXS5wYWdlICYmIHBhZ2VzW2ldLmtvU2VsZWN0ZWQoKSkge1xuICAgICAgICAgICAgICAgIHBhZ2VJbmRleCA9IGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhZ2VJbmRleCA8IDApIHJldHVybjtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PSA0NiAmJiB0aGlzLm9uRGVsZXRlUGFnZUNhbGxiYWNrKSB0aGlzLm9uRGVsZXRlUGFnZUNhbGxiYWNrKGVsLnBhZ2UpO1xuICAgICAgICBpZiAoKGUua2V5Q29kZSA9PSAzNyB8fCBlLmtleUNvZGUgPT0gMzkpICYmIHRoaXMub25TZWxlY3RQYWdlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgIHBhZ2VJbmRleCArPSAoZS5rZXlDb2RlID09IDM3ID8gLTEgOiAxKTtcbiAgICAgICAgICAgIGlmIChwYWdlSW5kZXggPCAwKSBwYWdlSW5kZXggPSBwYWdlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgaWYgKHBhZ2VJbmRleCA+PSBwYWdlcy5sZW5ndGgpIHBhZ2VJbmRleCA9IDA7XG4gICAgICAgICAgICB2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VJbmRleF0ucGFnZTtcbiAgICAgICAgICAgIHRoaXMub25TZWxlY3RQYWdlQ2FsbGJhY2socGFnZSk7XG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGVkUGFnZShwYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgdXBkYXRlUGFnZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnN1cnZleVZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMua29QYWdlcyhbXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhZ2VzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXJ2ZXlWYWx1ZS5wYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhZ2UgPSB0aGlzLnN1cnZleVZhbHVlLnBhZ2VzW2ldO1xuICAgICAgICAgICAgcGFnZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGtvLm9ic2VydmFibGUoU3VydmV5SGVscGVyLmdldE9iamVjdE5hbWUocGFnZSkpLCBwYWdlOiBwYWdlLCBrb1NlbGVjdGVkOiBrby5vYnNlcnZhYmxlKGZhbHNlKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb1BhZ2VzKHBhZ2VzKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBtb3ZlRHJhZ2dpbmdQYWdlVG8odG9QYWdlOiBhbnkpIHtcbiAgICAgICAgaWYgKHRvUGFnZSA9PSBudWxsIHx8IHRvUGFnZSA9PSB0aGlzLmRyYWdnaW5nUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZ1BhZ2UgPSBudWxsO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRyYWdnaW5nUGFnZSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMua29QYWdlcygpLmluZGV4T2YodGhpcy5kcmFnZ2luZ1BhZ2UpO1xuICAgICAgICB2YXIgaW5kZXhUbyA9IHRoaXMua29QYWdlcygpLmluZGV4T2YodG9QYWdlKTtcbiAgICAgICAgaWYgKHRoaXMub25Nb3ZlUGFnZUNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLm9uTW92ZVBhZ2VDYWxsYmFjayhpbmRleCwgaW5kZXhUbyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzRWRpdG9yLnRzIiwiaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbiB7XG4gICAgcHVibGljIHN0YXRpYyBkZWZpbml0aW9uOiBhbnkgPSB7XG4gICAgICAgIFwicXVlc3Rpb25iYXNlXCIgOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJuYW1lXCIsIFwidGl0bGVcIiwge25hbWU6IFwidmlzaWJsZVwiLCBjYXRlZ29yeTogXCJjaGVja3NcIn0sIHtuYW1lOiBcImlzUmVxdWlyZWRcIiwgY2F0ZWdvcnk6IFwiY2hlY2tzXCJ9LCB7bmFtZTogXCJzdGFydFdpdGhOZXdMaW5lXCIsIGNhdGVnb3J5OiBcImNoZWNrc1wifSBdLFxuICAgICAgICAgICAgdGFiczogW3tuYW1lOiBcInZpc2libGVJZlwiLCBpbmRleDogMTAwfV1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb21tZW50XCI6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcInJvd3NcIiwgXCJwbGFjZUhvbGRlclwiXVxuICAgICAgICB9LFxuICAgICAgICBcImZpbGVcIjoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW3tuYW1lOiBcInNob3dQcmV2aWV3XCIsIGNhdGVnb3J5OiBcImltYWdlQ2hlY2tzXCJ9LCB7bmFtZTogXCJzdG9yZURhdGFBc1RleHRcIiwgY2F0ZWdvcnk6IFwiaW1hZ2VDaGVja3NcIn0sIFwibWF4U2l6ZVwiLCBcImltYWdlSGVpZ2h0XCIsIFwiaW1hZ2VXaWR0aFwiXVxuICAgICAgICB9LFxuICAgICAgICBcImh0bWxcIjoge1xuICAgICAgICAgICAgdGFiczogW3tuYW1lOiBcImh0bWxcIiwgaW5kZXg6IDEwfV1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXRyaXhkcm9wZG93bmJhc2VcIjoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW1wiY2VsbFR5cGVcIl0sXG4gICAgICAgICAgICB0YWJzOiBbe25hbWU6IFwiY29sdW1uc1wiLCBpbmRleDogMTB9LCB7bmFtZTogXCJyb3dzXCIsIGluZGV4OiAxMX0sIHtuYW1lOiBcImNob2ljZXNcIiwgaW5kZXg6IDEyfV1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXRyaXhkeW5hbWljXCI6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcInJvd0NvdW50XCIsIFwiYWRkUm93VGV4dFwiLCBcInJlbW92ZVJvd1RleHRcIl1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtYXRyaXhcIjoge1xuICAgICAgICAgICAgdGFiczogW3tuYW1lOiBcImNvbHVtbnNcIiwgaW5kZXg6IDEwfSwge25hbWU6IFwicm93c1wiLCBpbmRleDogMTF9XVxuICAgICAgICB9LFxuICAgICAgICBcIm11bHRpcGxldGV4dFwiOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJjb2xDb3VudFwiXSxcbiAgICAgICAgICAgIHRhYnM6IFt7bmFtZTogXCJpdGVtc1wiLCBpbmRleDogMTB9XVxuICAgICAgICB9LFxuICAgICAgICBcInJhdGluZ1wiIDoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW1wibWluUmF0ZURlc2NyaXB0aW9uXCIsIFwibWF4UmF0ZURlc2NyaXB0aW9uXCJdLFxuICAgICAgICAgICAgdGFiczogW3tuYW1lOiBcInJhdGVWYWx1ZXNcIiwgaW5kZXg6IDEwfV1cbiAgICAgICAgfSxcbiAgICAgICAgXCJzZWxlY3RiYXNlXCIgOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJoYXNPdGhlclwiLCBcImNob2ljZXNPcmRlclwiLCBcImNvbENvdW50XCJdLFxuICAgICAgICAgICAgdGFiczogW3tuYW1lOiBcImNob2ljZXNcIiwgaW5kZXg6IDEwfSwge25hbWU6IFwiY2hvaWNlc0J5VXJsXCIsIGluZGV4OiAxMX1dXG4gICAgICAgIH0sXG4gICAgICAgIFwiZHJvcGRvd25cIjoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW1wib3B0aW9uc0NhcHRpb25cIl1cbiAgICAgICAgfSxcbiAgICAgICAgXCJ0ZXh0XCIgOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJpbnB1dFR5cGVcIiwgXCJwbGFjZUhvbGRlclwiXVxuICAgICAgICB9LFxuICAgICAgICBcIm1hdHJpeGRyb3Bkb3duY29sdW1uQGNoZWNrYm94XCIgOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJoYXNPdGhlclwiLCBcImNob2ljZXNPcmRlclwiLCBcImNvbENvdW50XCJdLFxuICAgICAgICAgICAgdGFiczogW3tuYW1lOiBcImNob2ljZXNcIiwgaW5kZXg6IDEwfSwge25hbWU6IFwiY2hvaWNlc0J5VXJsXCIsIGluZGV4OiAxMX1dXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF0cml4ZHJvcGRvd25jb2x1bW5AcmFkaW9ncm91cFwiIDoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW1wiaGFzT3RoZXJcIiwgXCJjaG9pY2VzT3JkZXJcIiwgXCJjb2xDb3VudFwiXSxcbiAgICAgICAgICAgIHRhYnM6IFt7bmFtZTogXCJjaG9pY2VzXCIsIGluZGV4OiAxMH0sIHtuYW1lOiBcImNob2ljZXNCeVVybFwiLCBpbmRleDogMTF9XVxuICAgICAgICB9LFxuICAgICAgICBcIm1hdHJpeGRyb3Bkb3duY29sdW1uQGRyb3Bkb3duXCIgOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJoYXNPdGhlclwiLCBcImNob2ljZXNPcmRlclwiLCBcIm9wdGlvbnNDYXB0aW9uXCJdLFxuICAgICAgICAgICAgdGFiczogW3tuYW1lOiBcImNob2ljZXNcIiwgaW5kZXg6IDEwfSwge25hbWU6IFwiY2hvaWNlc0J5VXJsXCIsIGluZGV4OiAxMX1dXG4gICAgICAgIH0sXG4gICAgICAgIFwibWF0cml4ZHJvcGRvd25jb2x1bW5AdGV4dFwiIDoge1xuICAgICAgICAgICAgcHJvcGVydGllczogW1wiaW5wdXRUeXBlXCIsIFwicGxhY2VIb2xkZXJcIl0sXG4gICAgICAgICAgICB0YWJzOiBbe25hbWU6IFwidmFsaWRhdG9yc1wiLCBpbmRleDogMTB9XVxuICAgICAgICB9LFxuICAgICAgICBcIm1hdHJpeGRyb3Bkb3duY29sdW1uQGNvbW1lbnRcIiA6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcInBsYWNlSG9sZGVyXCJdLFxuICAgICAgICAgICAgdGFiczogW3tuYW1lOiBcInZhbGlkYXRvcnNcIiwgaW5kZXg6IDEwfV1cbiAgICAgICAgfSxcbiAgICAgICAgXCJtdWx0aXBsZXRleHRpdGVtXCI6IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcImlucHV0VHlwZVwiLCBcInBsYWNlSG9sZGVyXCJdLFxuICAgICAgICAgICAgdGFiczogW3tuYW1lOiBcInZhbGlkYXRvcnNcIiwgaW5kZXg6IDEwfV1cbiAgICAgICAgfSxcbiAgICAgICAgXCJwYW5lbFwiOiB7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBbXCJuYW1lXCIsIFwidGl0bGVcIiwge25hbWU6IFwidmlzaWJsZVwiLCBjYXRlZ29yeTogXCJjaGVja3NcIn0gXSxcbiAgICAgICAgICAgIHRhYnM6IFt7bmFtZTogXCJ2aXNpYmxlSWZcIiwgaW5kZXg6IDEwMH1dXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHN0YXRpYyBnZXRQcm9wZXJ0aWVzKGNsYXNzTmFtZTogc3RyaW5nKTogQXJyYXk8YW55PiB7XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gW107XG4gICAgICAgIHZhciBhbGxEZWZpbml0aW9ucyA9IFN1cnZleVF1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbi5nZXRBbGxEZWZpbml0aW9uc0J5Q2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgICAgZm9yKHZhciBpID0gYWxsRGVmaW5pdGlvbnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpIC0tKSB7XG4gICAgICAgICAgICB2YXIgZGVmID0gYWxsRGVmaW5pdGlvbnNbaV07XG4gICAgICAgICAgICBpZihkZWYucHJvcGVydGllcykge1xuICAgICAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCBkZWYucHJvcGVydGllcy5sZW5ndGg7IGogKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKGRlZi5wcm9wZXJ0aWVzW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VGFicyhjbGFzc05hbWU6IHN0cmluZyk6IEFycmF5PGFueT4ge1xuICAgICAgICB2YXIgdGFicyA9IFtdO1xuICAgICAgICB2YXIgYWxsRGVmaW5pdGlvbnMgPSBTdXJ2ZXlRdWVzdGlvbkVkaXRvckRlZmluaXRpb24uZ2V0QWxsRGVmaW5pdGlvbnNCeUNsYXNzKGNsYXNzTmFtZSk7XG4gICAgICAgIGZvcih2YXIgaSA9IGFsbERlZmluaXRpb25zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtLSkge1xuICAgICAgICAgICAgdmFyIGRlZiA9IGFsbERlZmluaXRpb25zW2ldO1xuICAgICAgICAgICAgaWYoZGVmLnRhYnMpIHtcbiAgICAgICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgZGVmLnRhYnMubGVuZ3RoOyBqICsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhYnMucHVzaChkZWYudGFic1tqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRhYnMuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5pbmRleCA8IGIuaW5kZXggPyAtMSA6IChhLmluZGV4ID4gYi5pbmRleCA/IDEgOiAwKTsgfSk7XG4gICAgICAgIHJldHVybiB0YWJzO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0QWxsRGVmaW5pdGlvbnNCeUNsYXNzKGNsYXNzTmFtZTogc3RyaW5nKSA6IEFycmF5PGFueT4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGlmKGNsYXNzTmFtZS5pbmRleE9mKCdAJykgPiAtMSAmJiBTdXJ2ZXlRdWVzdGlvbkVkaXRvckRlZmluaXRpb24uZGVmaW5pdGlvbltjbGFzc05hbWVdKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChTdXJ2ZXlRdWVzdGlvbkVkaXRvckRlZmluaXRpb24uZGVmaW5pdGlvbltjbGFzc05hbWVdKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgdmFyIG1ldGFDbGFzcyA9IDxTdXJ2ZXkuSnNvbk1ldGFkYXRhQ2xhc3M+U3VydmV5Lkpzb25PYmplY3QubWV0YURhdGFbXCJmaW5kQ2xhc3NcIl0oY2xhc3NOYW1lKTtcbiAgICAgICAgICAgIGlmICghbWV0YUNsYXNzKSBicmVhaztcbiAgICAgICAgICAgIGlmKFN1cnZleVF1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbi5kZWZpbml0aW9uW21ldGFDbGFzcy5uYW1lXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFN1cnZleVF1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbi5kZWZpbml0aW9uW21ldGFDbGFzcy5uYW1lXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGFzc05hbWUgPSBtZXRhQ2xhc3MucGFyZW50TmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbkVkaXRvckRlZmluaXRpb24udHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5cblxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uRWRpdG9yR2VuZXJhbFByb3BlcnR5IHtcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuICAgIHB1YmxpYyBlZGl0VHlwZTogc3RyaW5nO1xuICAgIHB1YmxpYyBkaXNhYmxlZDogYm9vbGVhbjtcbiAgICBwdWJsaWMgY2hvaWNlczogQXJyYXk8YW55PiA9IFtdO1xuICAgIGtvVmFsdWU6IGFueTsga29FcnJvclRleHQ6IGFueTsga29IYXNFcnJvcjogYW55O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBvYmo6IFN1cnZleS5CYXNlLCBwdWJsaWMgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHksIHB1YmxpYyBpc1JlcXVpcmVkOiBib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gcHJvcGVydHkubmFtZTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHByb3BlcnR5W1wicmVhZE9ubHlcIl07XG4gICAgICAgIHRoaXMuZWRpdFR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgaWYocHJvcGVydHkudHlwZSA9PSBcInRleHRcIikgdGhpcy5lZGl0VHlwZSA9IFwidGV4dGFyZWFcIjtcbiAgICAgICAgaWYocHJvcGVydHkudHlwZSA9PSBcImJvb2xlYW5cIikgdGhpcy5lZGl0VHlwZSA9IFwiY2hlY2tcIjtcbiAgICAgICAgaWYocHJvcGVydHkuY2hvaWNlcykge1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VzID0gcHJvcGVydHkuY2hvaWNlcztcbiAgICAgICAgICAgIHRoaXMuZWRpdFR5cGUgPSBcImRyb3Bkb3duXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb1ZhbHVlID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmtvRXJyb3JUZXh0ID0ga28ub2JzZXJ2YWJsZShcIlwiKTtcbiAgICAgICAgdGhpcy5rb0hhc0Vycm9yID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUuXCIgKyB0aGlzLm5hbWUpO1xuICAgICAgICBpZighdGhpcy50aXRsZSkgdGhpcy50aXRsZSA9IHRoaXMubmFtZTtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cbiAgICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciBpc0Vycm9yID0gdGhpcy5pc1JlcXVpcmVkICYmICh0aGlzLmtvVmFsdWUoKSAhPT0gZmFsc2UpICYmICF0aGlzLmtvVmFsdWUoKTtcbiAgICAgICAgdGhpcy5rb0Vycm9yVGV4dChpc0Vycm9yID8gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnByb3BlcnR5SXNFbXB0eVwiKTogXCJcIik7XG4gICAgICAgIHRoaXMua29IYXNFcnJvcihpc0Vycm9yKTtcbiAgICAgICAgcmV0dXJuIGlzRXJyb3I7XG4gICAgfVxuICAgIHB1YmxpYyBhcHBseSgpIHtcbiAgICAgICAgdGhpcy5vYmpbdGhpcy5uYW1lXSA9IHRoaXMua29WYWx1ZSgpO1xuICAgIH1cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMua29WYWx1ZSh0aGlzLmdldFZhbHVlKCkpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFZhbHVlKCk6IGFueSB7XG5cdGlmKHRoaXMucHJvcGVydHlbXCJnZXRQcm9wZXJ0eVZhbHVlXCJdKSByZXR1cm4gdGhpcy5wcm9wZXJ0eVtcImdldFByb3BlcnR5VmFsdWVcIl0odGhpcy5vYmopOyAvL1RPRE8gbWFrZSB0aGUgb25seSBjYWxsXG4gICAgICAgIGlmICh0aGlzLnByb3BlcnR5Lmhhc1RvVXNlR2V0VmFsdWUpIHJldHVybiB0aGlzLnByb3BlcnR5LmdldFZhbHVlKHRoaXMub2JqKTtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqW3RoaXMubmFtZV07XG4gICAgfVxuXG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxSb3cge1xuICAgIHB1YmxpYyBjYXRlZ29yeTogc3RyaW5nO1xuICAgIHB1YmxpYyBwcm9wZXJ0aWVzOiBBcnJheTxTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0eT4gPSBbXTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgb2JqOiBTdXJ2ZXkuQmFzZSwgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHksIGlzUHJvcGVydHlSZXF1aXJlZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuYWRkUHJvcGVydHkocHJvcGVydHksIGlzUHJvcGVydHlSZXF1aXJlZCk7XG4gICAgfVxuICAgIHB1YmxpYyBhZGRQcm9wZXJ0eShwcm9wZXJ0eTogYW55LCBpc1Byb3BlcnR5UmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMucHVzaChuZXcgU3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUHJvcGVydHkodGhpcy5vYmosIHByb3BlcnR5LCBpc1Byb3BlcnR5UmVxdWlyZWQpKTtcbiAgICB9XG4gICAgcHVibGljIGhhc0Vycm9yKCkgOiBib29sZWFuIHtcbiAgICAgICAgdmFyIGlzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIGlzRXJyb3IgPSB0aGlzLnByb3BlcnRpZXNbaV0uaGFzRXJyb3IoKSB8fCBpc0Vycm9yO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0Vycm9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVF1ZXN0aW9uRWRpdG9yR2VuZXJhbFByb3BlcnRpZXMge1xuICAgIHByaXZhdGUgcHJvcGVydGllczogQXJyYXk8U3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eT47XG4gICAgcHJpdmF0ZSBvbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrOiAob2JqZWN0OiBhbnksIHByb3BlcnR5OiBTdXJ2ZXkuSnNvbk9iamVjdFByb3BlcnR5KSA9PiBib29sZWFuO1xuICAgIHB1YmxpYyByb3dzOiBBcnJheTxTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxSb3c+ID0gW107XG4gICAgY29uc3RydWN0b3IocHVibGljIG9iajogU3VydmV5LkJhc2UsIHByb3BlcnRpZXM6IEFycmF5PGFueT4sIG9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2s6IChvYmplY3Q6IGFueSwgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHkpID0+IGJvb2xlYW4gPSBudWxsKSB7XG4gICAgICAgIHRoaXMub25DYW5TaG93UHJvcGVydHlDYWxsYmFjayA9IG9uQ2FuU2hvd1Byb3BlcnR5Q2FsbGJhY2s7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmdldFByb3BlcnRpZXModGhpcy5vYmouZ2V0VHlwZSgpKTsgXG4gICAgICAgIHRoaXMuYnVpbGRSb3dzKHByb3BlcnRpZXMpO1xuICAgIH1cbiAgICBwdWJsaWMgYXBwbHkoKSB7XG4gICAgICAgIHRoaXMuYXBwbHlPclJlc2V0KHRydWUpO1xuICAgIH1cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuYXBwbHlPclJlc2V0KGZhbHNlKTtcbiAgICB9XG4gICAgcHVibGljIGhhc0Vycm9yKCkgOiBib29sZWFuIHtcbiAgICAgICAgdmFyIGlzRXJyb3IgPSBmYWxzZTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMucm93cy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIGlzRXJyb3IgPSB0aGlzLnJvd3NbaV0uaGFzRXJyb3IoKSB8fCBpc0Vycm9yO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc0Vycm9yO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgYXBwbHlPclJlc2V0KGlzQXBwbHk6IGJvb2xlYW4pIHtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMucm93cy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCB0aGlzLnJvd3NbaV0ucHJvcGVydGllcy5sZW5ndGg7IGogKyspIHtcbiAgICAgICAgICAgICAgICBpZihpc0FwcGx5KSB0aGlzLnJvd3NbaV0ucHJvcGVydGllc1tqXS5hcHBseSgpO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5yb3dzW2ldLnByb3BlcnRpZXNbal0ucmVzZXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgYnVpbGRSb3dzKHByb3BlcnRpZXMpIHtcbiAgICAgICAgdmFyIHJlcXVpcmVkUHJvcGVydGllczogQXJyYXk8c3RyaW5nPiA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmdldFJlcXVpcmVkUHJvcGVydGllcyh0aGlzLm9iai5nZXRUeXBlKCkpO1xuICAgICAgICBpZighcmVxdWlyZWRQcm9wZXJ0aWVzKSByZXF1aXJlZFByb3BlcnRpZXMgPSBbXTtcbiAgICAgICAgZm9yKHZhciBpID0gMCA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmdldE5hbWUocHJvcGVydGllc1tpXSk7XG4gICAgICAgICAgICB2YXIganNvblByb3BlcnR5ID0gdGhpcy5nZXRQcm9wZXJ0eShuYW1lKTtcbiAgICAgICAgICAgIGlmKCFqc29uUHJvcGVydHkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIGlzUHJvcGVydHlSZXF1aXJlZDogYm9vbGVhbiA9IHJlcXVpcmVkUHJvcGVydGllcy5pbmRleE9mKG5hbWUpID4gLTE7XG4gICAgICAgICAgICB2YXIgcm93ID0gdGhpcy5nZXRSb3dCeUNhdGVnb3J5KHByb3BlcnRpZXNbaV0uY2F0ZWdvcnkpO1xuICAgICAgICAgICAgaWYocm93KSByb3cuYWRkUHJvcGVydHkoanNvblByb3BlcnR5LCBpc1Byb3BlcnR5UmVxdWlyZWQpO1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm93ID0gbmV3IFN1cnZleVF1ZXN0aW9uRWRpdG9yR2VuZXJhbFJvdyh0aGlzLm9iaiwganNvblByb3BlcnR5LCBpc1Byb3BlcnR5UmVxdWlyZWQpO1xuICAgICAgICAgICAgICAgIGlmKHByb3BlcnRpZXNbaV0uY2F0ZWdvcnkpIHJvdy5jYXRlZ29yeSA9IHByb3BlcnRpZXNbaV0uY2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3dzLnB1c2gocm93KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHByb3BlcnRpZXNbaV0udGl0bGUpIHtcbiAgICAgICAgICAgICAgICByb3cucHJvcGVydGllc1tyb3cucHJvcGVydGllcy5sZW5ndGggLSAxXS50aXRsZSA9IHByb3BlcnRpZXNbaV0udGl0bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgIH1cbiAgIHByaXZhdGUgZ2V0TmFtZShwcm9wOiBhbnkpOiBzdHJpbmcge1xuICAgICAgIGlmKCFwcm9wKSByZXR1cm4gbnVsbDtcbiAgICAgICAgaWYodHlwZW9mIHByb3AgPT09IFwic3RyaW5nXCIpIHJldHVybiBwcm9wO1xuICAgICAgICBpZihwcm9wLm5hbWUpIHJldHVybiBwcm9wLm5hbWU7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgfVxuICAgcHJpdmF0ZSBnZXRSb3dCeUNhdGVnb3J5KGNhdGVnb3J5OiBzdHJpbmcpIHtcbiAgICAgICBpZighY2F0ZWdvcnkpIHJldHVybiBudWxsO1xuICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLnJvd3MubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgIGlmKHRoaXMucm93c1tpXS5jYXRlZ29yeSA9PSBjYXRlZ29yeSkgcmV0dXJuIHRoaXMucm93c1tpXTtcbiAgICAgICB9XG4gICAgICAgcmV0dXJuIG51bGw7XG4gICB9XG4gICBwcml2YXRlIGdldFByb3BlcnR5KHByb3BlcnR5TmFtZTogc3RyaW5nKTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSB7XG4gICAgICAgaWYoIXByb3BlcnR5TmFtZSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wZXJ0aWVzW2ldLm5hbWUgPT0gcHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXNbaV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9UT0RPIGNvZGUgZHVwbGljYXRpb24uIFRoaXMgY29kZSBpcyBpbiAzIHBsYWNlcyBhbHJlYWR5LCBkbyByZWZhY3RvcmluZy5cbiAgICAgICAgaWYocHJvcGVydHkgJiYgcHJvcGVydHlbXCJ2aXNpYmxlXCJdID09PSBmYWxzZSkgcHJvcGVydHkgPSBudWxsO1xuICAgICAgICBpZiAocHJvcGVydHkgJiYgdGhpcy5vbkNhblNob3dQcm9wZXJ0eUNhbGxiYWNrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMub25DYW5TaG93UHJvcGVydHlDYWxsYmFjayh0aGlzLm9iaiwgcHJvcGVydHkpKSBwcm9wZXJ0eSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3BlcnR5O1xuICAgIH0gXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uRWRpdG9yR2VuZXJhbFByb3BlcnRpZXMudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVF1ZXN0aW9uVG9vbGJveEl0ZW0ge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBpY29uTmFtZTogc3RyaW5nO1xuICAgIGpzb246IGFueTtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGlzQ29waWVkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgUXVlc3Rpb25Ub29sYm94IHtcbiAgICBwdWJsaWMgb3JkZXJlZFF1ZXN0aW9ucyA9IFtcInRleHRcIiwgXCJjaGVja2JveFwiLCBcInJhZGlvZ3JvdXBcIiwgXCJkcm9wZG93blwiLCBcImNvbW1lbnRcIiwgXCJyYXRpbmdcIiwgXCJodG1sXCJdO1xuICAgIHB1YmxpYyBjb3BpZWRJdGVtTWF4Q291bnQ6IG51bWJlciA9IDM7XG4gICAgcHJpdmF0ZSBpdGVtc1ZhbHVlOiBBcnJheTxJUXVlc3Rpb25Ub29sYm94SXRlbT4gPSBbXTtcblxuICAgIGtvSXRlbXM6IGFueTtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihzdXBwb3J0ZWRRdWVzdGlvbnM6IEFycmF5PHN0cmluZz4gPSBudWxsKSB7XG4gICAgICAgIHRoaXMua29JdGVtcyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZURlZmF1bHRJdGVtcyhzdXBwb3J0ZWRRdWVzdGlvbnMpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGpzb25UZXh0KCkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5pdGVtc1ZhbHVlKTtcbiAgICB9XG4gICAgcHVibGljIHNldCBqc29uVGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuaXRlbXNWYWx1ZSA9ICh2YWx1ZSkgPyBKU09OLnBhcnNlKHZhbHVlKSA6IFtdO1xuICAgICAgICB0aGlzLm9uSXRlbXNDaGFuZ2VkKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgY29waWVkSnNvblRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMuY29waWVkSXRlbXMpO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IGNvcGllZEpzb25UZXh0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIG5ld0l0ZW1zID0gKHZhbHVlKSA/IEpTT04ucGFyc2UodmFsdWUpIDogW107XG4gICAgICAgIHRoaXMuY2xlYXJDb3BpZWRJdGVtcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXdJdGVtc1tpXS5pc0NvcGllZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmFkZEl0ZW0obmV3SXRlbXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaXRlbXMoKTogQXJyYXk8SVF1ZXN0aW9uVG9vbGJveEl0ZW0+IHsgcmV0dXJuIHRoaXMuaXRlbXNWYWx1ZTsgfVxuICAgIHB1YmxpYyBnZXQgY29waWVkSXRlbXMoKTogQXJyYXk8SVF1ZXN0aW9uVG9vbGJveEl0ZW0+IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaXRlbXNWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXNWYWx1ZVtpXS5pc0NvcGllZCkgcmVzdWx0LnB1c2godGhpcy5pdGVtc1ZhbHVlW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwdWJsaWMgYWRkSXRlbXMoaXRlbXM6IEFycmF5PElRdWVzdGlvblRvb2xib3hJdGVtPiwgY2xlYXJBbGw6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBpZiAoY2xlYXJBbGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJJdGVtcygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25JdGVtc0NoYW5nZWQoKTtcbiAgICB9XG4gICAgcHVibGljIGFkZENvcGllZEl0ZW0ocXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSB7IG5hbWU6IHF1ZXN0aW9uLm5hbWUsIHRpdGxlOiBxdWVzdGlvbi5uYW1lLCBpc0NvcGllZDogdHJ1ZSwgaWNvbk5hbWU6IFwiaWNvbi1kZWZhdWx0XCIsIGpzb246IHRoaXMuZ2V0UXVlc3Rpb25KU09OKHF1ZXN0aW9uKSB9O1xuICAgICAgICBpZiAodGhpcy5yZXBsYWNlSXRlbShpdGVtKSkgcmV0dXJuO1xuICAgICAgICB2YXIgY29waWVkID0gdGhpcy5jb3BpZWRJdGVtcztcbiAgICAgICAgaWYgKHRoaXMuY29waWVkSXRlbU1heENvdW50ID4gMCAmJiBjb3BpZWQubGVuZ3RoID09IHRoaXMuY29waWVkSXRlbU1heENvdW50KSB0aGlzLnJlbW92ZUl0ZW0oY29waWVkW3RoaXMuY29waWVkSXRlbU1heENvdW50IC0gMV0ubmFtZSk7XG4gICAgICAgIHRoaXMuYWRkSXRlbShpdGVtKTtcbiAgICB9XG4gICAgcHVibGljIGFkZEl0ZW0oaXRlbTogSVF1ZXN0aW9uVG9vbGJveEl0ZW0pIHtcbiAgICAgICAgdGhpcy5pdGVtc1ZhbHVlLnB1c2goaXRlbSk7XG4gICAgICAgIHRoaXMub25JdGVtc0NoYW5nZWQoKTtcbiAgICB9XG4gICAgcHVibGljIHJlcGxhY2VJdGVtKGl0ZW06IElRdWVzdGlvblRvb2xib3hJdGVtKTogYm9vbGVhbiB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaW5kZXhPZihpdGVtLm5hbWUpO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXRlbXNWYWx1ZVtpbmRleF0gPSBpdGVtO1xuICAgICAgICB0aGlzLm9uSXRlbXNDaGFuZ2VkKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleE9mKG5hbWUpO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRoaXMuaXRlbXNWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLm9uSXRlbXNDaGFuZ2VkKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBwdWJsaWMgY2xlYXJJdGVtcygpIHtcbiAgICAgICAgdGhpcy5pdGVtc1ZhbHVlID0gW107XG4gICAgICAgIHRoaXMub25JdGVtc0NoYW5nZWQoKTtcbiAgICB9XG4gICAgcHVibGljIGNsZWFyQ29waWVkSXRlbXMoKSB7XG4gICAgICAgIHZhciByZW1vdmVkSXRlbXMgPSB0aGlzLmNvcGllZEl0ZW1zO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlbW92ZWRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVJdGVtKHJlbW92ZWRJdGVtc1tpXS5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25JdGVtc0NoYW5nZWQoKSB7XG4gICAgICAgIHRoaXMua29JdGVtcyh0aGlzLml0ZW1zVmFsdWUpO1xuICAgIH1cbiAgICBwcml2YXRlIGluZGV4T2YobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pdGVtc1ZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc1ZhbHVlW2ldLm5hbWUgPT0gbmFtZSkgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZURlZmF1bHRJdGVtcyhzdXBwb3J0ZWRRdWVzdGlvbnM6IEFycmF5PHN0cmluZz4pIHtcbiAgICAgICAgdmFyIHF1ZXN0aW9ucyA9IHRoaXMuZ2V0UXVlc3Rpb25UeXBlcyhzdXBwb3J0ZWRRdWVzdGlvbnMpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHF1ZXN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBxdWVzdGlvbnNbaV07XG4gICAgICAgICAgICB2YXIgcXVlc3Rpb24gPSBTdXJ2ZXkuRWxlbWVudEZhY3RvcnkuSW5zdGFuY2UuY3JlYXRlRWxlbWVudChuYW1lLCBcInExXCIpO1xuICAgICAgICAgICAgaWYoIXF1ZXN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcXVlc3Rpb24gPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5jcmVhdGVDbGFzcyhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBqc29uID0gdGhpcy5nZXRRdWVzdGlvbkpTT04ocXVlc3Rpb24pO1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSB7IG5hbWU6IG5hbWUsIGljb25OYW1lOiAnaWNvbi0nICsgbmFtZSwgdGl0bGU6IGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoJ3F0LicgKyBuYW1lKSwganNvbjoganNvbiwgaXNDb3BpZWQ6IGZhbHNlIH07XG4gICAgICAgICAgICB0aGlzLml0ZW1zVmFsdWUucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uSXRlbXNDaGFuZ2VkKCk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0UXVlc3Rpb25KU09OKHF1ZXN0aW9uOiBhbnkpOiBhbnkge1xuICAgICAgICB2YXIganNvbiA9IG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdChxdWVzdGlvbik7XG4gICAgICAgIGpzb24udHlwZSA9IHF1ZXN0aW9uLmdldFR5cGUoKTtcbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0UXVlc3Rpb25UeXBlcyhzdXBwb3J0ZWRRdWVzdGlvbnM6IEFycmF5PHN0cmluZz4pOiBzdHJpbmdbXSB7XG4gICAgICAgIHZhciBhbGxUeXBlcyA9IFN1cnZleS5FbGVtZW50RmFjdG9yeS5JbnN0YW5jZS5nZXRBbGxUeXBlcygpO1xuICAgICAgICBpZiAoIXN1cHBvcnRlZFF1ZXN0aW9ucyB8fCBzdXBwb3J0ZWRRdWVzdGlvbnMubGVuZ3RoID09IDApIHN1cHBvcnRlZFF1ZXN0aW9ucyA9IGFsbFR5cGVzO1xuICAgICAgICB2YXIgcXVlc3Rpb25zID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5vcmRlcmVkUXVlc3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IHRoaXMub3JkZXJlZFF1ZXN0aW9uc1tpXTtcbiAgICAgICAgICAgIGlmIChzdXBwb3J0ZWRRdWVzdGlvbnMuaW5kZXhPZihuYW1lKSA+IC0xICYmIGFsbFR5cGVzLmluZGV4T2YobmFtZSkgPiAtMSkgcXVlc3Rpb25zLnB1c2gobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdXBwb3J0ZWRRdWVzdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gc3VwcG9ydGVkUXVlc3Rpb25zW2ldO1xuICAgICAgICAgICAgaWYgKHF1ZXN0aW9ucy5pbmRleE9mKHN1cHBvcnRlZFF1ZXN0aW9uc1tpXSkgPCAwICYmIGFsbFR5cGVzLmluZGV4T2YobmFtZSkgPiAtMSkgcXVlc3Rpb25zLnB1c2gobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHF1ZXN0aW9ucztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcXVlc3Rpb25Ub29sYm94LnRzIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlKU09ONX0gZnJvbSBcIi4vanNvbjVcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleUVtYmVkaW5nV2luZG93IHtcbiAgICBwcml2YXRlIGpzb25WYWx1ZTogYW55O1xuICAgIHByaXZhdGUgc3VydmV5RW1iZWRpbmdIZWFkOiBBY2VBamF4LkVkaXRvcjtcbiAgICBwcml2YXRlIHN1cnZleUVtYmVkaW5nSmF2YTogQWNlQWpheC5FZGl0b3I7XG4gICAgcHJpdmF0ZSBzdXJ2ZXlFbWJlZGluZ0JvZHk6IEFjZUFqYXguRWRpdG9yO1xuICAgIGtvSGVhZFRleHQ6IGFueTtcbiAgICBrb0JvZHlUZXh0OiBhbnk7XG4gICAga29KYXZhVGV4dDogYW55O1xuICAgIHB1YmxpYyBzdXJ2ZXlJZDogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgc3VydmV5UG9zdElkOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBnZW5lcmF0ZVZhbGlkSlNPTjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBzdXJ2ZXlKU1ZlcnNpb246IHN0cmluZyA9IFN1cnZleS5WZXJzaW9uO1xuICAgIHB1YmxpYyBzdXJ2ZXlDRE5QYXRoOiBzdHJpbmcgPSBcImh0dHBzOi8vc3VydmV5anMuYXp1cmVlZGdlLm5ldC9cIjtcbiAgICBrb1Nob3dBc1dpbmRvdzogYW55O1xuICAgIGtvU2NyaXB0VXNpbmc6IGFueTtcbiAgICBrb0hhc0lkczogYW55O1xuICAgIGtvTG9hZFN1cnZleTogYW55O1xuICAgIGtvTGlicmFyeVZlcnNpb246IGFueTtcbiAgICBrb1Zpc2libGVIdG1sOiBhbnk7XG4gICAgcHJpdmF0ZSBwbGF0Zm9ybVN1cnZleUpTUHJlZml4ID0ge1xuICAgICAgICBcImFuZ3VsYXJcIjogXCJhbmd1bGFyXCIsXG4gICAgICAgIFwianF1ZXJ5XCI6IFwianF1ZXJ5XCIsXG4gICAgICAgIFwia25vY2tvdXRcIjogXCJrb1wiLFxuICAgICAgICBcInJlYWN0XCI6IFwicmVhY3RcIixcbiAgICAgICAgXCJ2dWVcIjogXCJ2dWVcIlxuICAgIH1cbiAgICBwcml2YXRlIHBsYXRmb3JtSlNvblBhZ2UgPSB7XG4gICAgICAgIFwiYW5ndWxhclwiOiBcIkBDb21wb25lbnQoe1xcbiAgc2VsZWN0b3I6ICduZy1hcHAnLFxcbiAgICAgICAgdGVtcGxhdGU6IFxcbiAgICAgICAgPGRpdiBpZD0nc3VydmV5RWxlbWVudCc+PC9kaXY+XFxcIixcXG59KVxcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xcbiAgICBuZ09uSW5pdCgpIHtcXG4gICAgICAgIHZhciBzdXJ2ZXkgPSBuZXcgU3VydmV5Lk1vZGVsKHN1cnZleUpTT04pO1xcbiAgICAgICAgc3VydmV5Lm9uQ29tcGxldGUuYWRkKHNlbmREYXRhVG9TZXJ2ZXIpO1xcbiAgICAgICBTdXJ2ZXkuU3VydmV5TkcucmVuZGVyKFxcXCJzdXJ2ZXlFbGVtZW50XFxcIiwgeyBtb2RlbDogc3VydmV5IH0pO1xcbiAgICB9XFxufVwiLFxuICAgICAgICBcImpxdWVyeVwiOiBcInZhciBzdXJ2ZXkgPSBuZXcgU3VydmV5Lk1vZGVsKHN1cnZleUpTT04pO1xcbiQoXFxcIiNzdXJ2ZXlDb250YWluZXJcXFwiKS5TdXJ2ZXkoe1xcbiAgICBtb2RlbDogc3VydmV5LFxcbiAgICBvbkNvbXBsZXRlOiBzZW5kRGF0YVRvU2VydmVyXFxufSk7XCIsXG4gICAgICAgIFwia25vY2tvdXRcIjogXCJ2YXIgc3VydmV5ID0gbmV3IFN1cnZleS5Nb2RlbChzdXJ2ZXlKU09OLCBcXFwic3VydmV5Q29udGFpbmVyXFxcIik7XFxuc3VydmV5Lm9uQ29tcGxldGUuYWRkKHNlbmREYXRhVG9TZXJ2ZXIpO1wiLFxuICAgICAgICBcInJlYWN0XCI6IFwiUmVhY3RET00ucmVuZGVyKFxcbiAgICA8U3VydmV5LlN1cnZleSBqc29uPXsgc3VydmV5SlNPTiB9IG9uQ29tcGxldGU9eyBzZW5kRGF0YVRvU2VydmVyIH0gLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxcXCJzdXJ2ZXlDb250YWluZXJcXFwiKSk7XCIsXG4gICAgICAgIFwidnVlXCI6IFwidmFyIHN1cnZleSA9IG5ldyBTdXJ2ZXkuTW9kZWwoc3VydmV5SlNPTik7XFxubmV3IFZ1ZSh7IGVsOiAnI3N1cnZleUNvbnRhaW5lcicsIGRhdGE6IHsgc3VydmV5OiBzdXJ2ZXkgfSB9KTtcIlxuICAgIH07XG4gICAgcHJpdmF0ZSBwbGF0Zm9ybUpTb25XaW5kb3cgPSB7XG4gICAgICAgIFwiYW5ndWxhclwiOiBcIkBDb21wb25lbnQoe1xcbiAgc2VsZWN0b3I6ICduZy1hcHAnLFxcbiAgICAgICAgdGVtcGxhdGU6IFxcbiAgICAgICAgPGRpdiBpZD0nc3VydmV5RWxlbWVudCc+PC9kaXY+XFxcIixcXG59KVxcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xcbiAgICBuZ09uSW5pdCgpIHtcXG4gICAgICAgIHZhciBzdXJ2ZXkgPSBuZXcgU3VydmV5Lk1vZGVsKHN1cnZleUpTT04pO1xcbiAgICAgICAgc3VydmV5Lm9uQ29tcGxldGUuYWRkKHNlbmREYXRhVG9TZXJ2ZXIpO1xcbiAgICAgICBTdXJ2ZXkuU3VydmV5V2luZG93TkcucmVuZGVyKFxcXCJzdXJ2ZXlFbGVtZW50XFxcIiwgeyBtb2RlbDogc3VydmV5IH0pO1xcbiAgICB9XFxufVwiLFxuICAgICAgICBcImpxdWVyeVwiOiBcInZhciBzdXJ2ZXkgPSBuZXcgU3VydmV5Lk1vZGVsKHN1cnZleUpTT04pO1xcbiQoXFxcIiNzdXJ2ZXlDb250YWluZXJcXFwiKS5TdXJ2ZXlXaW5kb3coe1xcbiAgICBtb2RlbDogc3VydmV5LFxcbiAgICBvbkNvbXBsZXRlOiBzZW5kRGF0YVRvU2VydmVyXFxufSk7XCIsXG4gICAgICAgIFwia25vY2tvdXRcIjogXCJ2YXIgc3VydmV5ID0gbmV3IFN1cnZleS5Nb2RlbChzdXJ2ZXlKU09OKTtcXG5zdXJ2ZXlXaW5kb3cuc2hvdygpO1xcbnN1cnZleS5vbkNvbXBsZXRlLmFkZChzZW5kRGF0YVRvU2VydmVyKTtcIixcbiAgICAgICAgXCJyZWFjdFwiOiBcIlJlYWN0RE9NLnJlbmRlcihcXG4gICAgPFN1cnZleS5TdXJ2ZXlXaW5kb3cganNvbj17IHN1cnZleUpTT04gfSBvbkNvbXBsZXRlPXsgc2VuZERhdGFUb1NlcnZlciB9IC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcXFwic3VydmV5Q29udGFpbmVyXFxcIikpO1wiLFxuICAgICAgICBcInZ1ZVwiOiBcIlwiXG4gICAgfTtcbiAgICBwcml2YXRlIHBsYXRmb3JtSHRtbG9uUGFnZSA9IHtcbiAgICAgICAgXCJhbmd1bGFyXCI6IFwiPG5nLWFwcD48L25nLWFwcD5cIixcbiAgICAgICAgXCJqcXVlcnlcIjogXCI8ZGl2IGlkPVxcXCJzdXJ2ZXlDb250YWluZXJcXFwiPjwvZGl2PlwiLFxuICAgICAgICBcImtub2Nrb3V0XCI6IFwiPGRpdiBpZD1cXFwic3VydmV5Q29udGFpbmVyXFxcIj48L2Rpdj5cIixcbiAgICAgICAgXCJyZWFjdFwiOiBcIjxkaXYgaWQ9XFxcInN1cnZleUNvbnRhaW5lclxcXCI+PC9kaXY+XCIsXG4gICAgICAgIFwidnVlXCI6IFwiPGRpdiBpZD1cXFwic3VydmV5Q29udGFpbmVyXFxcIj48c3VydmV5IDpzdXJ2ZXk9XFxcInN1cnZleVxcXCI+PC9zdXJ2ZXk+PC9kaXY+XCJcbiAgICB9O1xuICAgIHByaXZhdGUgcGxhdGZvcm1IdG1sb25XaW5kb3cgPSB7XG4gICAgICAgIFwiYW5ndWxhclwiOiBcIjxuZy1hcHA+PC9uZy1hcHA+XCIsXG4gICAgICAgIFwianF1ZXJ5XCI6IFwiPGRpdiBpZD1cXFwic3VydmV5Q29udGFpbmVyXFxcIj48L2Rpdj5cIixcbiAgICAgICAgXCJrbm9ja291dFwiOiBcIlwiLFxuICAgICAgICBcInJlYWN0XCI6IFwiPGRpdiBpZD1cXFwic3VydmV5Q29udGFpbmVyXFxcIj48L2Rpdj5cIixcbiAgICAgICAgXCJ2dWVcIjogXCI8ZGl2IGlkPSdzdXJ2ZXlDb250YWluZXInPjxzdXJ2ZXktd2luZG93IDpzdXJ2ZXk9J3N1cnZleSc+PC9zdXJ2ZXktd2luZG93PjwvZGl2PlwiXG4gICAgfTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmtvTGlicmFyeVZlcnNpb24gPSBrby5vYnNlcnZhYmxlKFwianF1ZXJ5XCIpO1xuICAgICAgICB0aGlzLmtvU2hvd0FzV2luZG93ID0ga28ub2JzZXJ2YWJsZShcInBhZ2VcIik7XG4gICAgICAgIHRoaXMua29TY3JpcHRVc2luZyA9IGtvLm9ic2VydmFibGUoXCJib290c3RyYXBcIik7XG4gICAgICAgIHRoaXMua29IYXNJZHMgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5rb0xvYWRTdXJ2ZXkgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcblxuICAgICAgICB0aGlzLmtvSGVhZFRleHQgPSBrby5vYnNlcnZhYmxlKFwiXCIpO1xuICAgICAgICB0aGlzLmtvSmF2YVRleHQgPSBrby5vYnNlcnZhYmxlKFwiXCIpO1xuICAgICAgICB0aGlzLmtvQm9keVRleHQgPSBrby5vYnNlcnZhYmxlKFwiXCIpO1xuXG4gICAgICAgIHRoaXMua29WaXNpYmxlSHRtbCA9IGtvLmNvbXB1dGVkKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYua29TaG93QXNXaW5kb3coKSA9PSBcInBhZ2VcIiB8fCBzZWxmLnBsYXRmb3JtSHRtbG9uV2luZG93W3NlbGYua29MaWJyYXJ5VmVyc2lvbigpXSAhPSBcIlwiOyB9KTtcbiAgICAgICAgdGhpcy5rb0xpYnJhcnlWZXJzaW9uLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5zZXRIZWFkVGV4dCgpOyBzZWxmLnNldEphdmFUZXN0KCk7IHNlbGYuc2V0Qm9keVRleHQoKTsgfSk7XG4gICAgICAgIHRoaXMua29TaG93QXNXaW5kb3cuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnNldEphdmFUZXN0KCk7IHNlbGYuc2V0Qm9keVRleHQoKTsgfSk7XG4gICAgICAgIHRoaXMua29TY3JpcHRVc2luZy5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYuc2V0SGVhZFRleHQoKTsgc2VsZi5zZXRKYXZhVGVzdCgpOyB9KTtcbiAgICAgICAgdGhpcy5rb0xvYWRTdXJ2ZXkuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnNldEphdmFUZXN0KCk7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nSGVhZCA9IG51bGw7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQganNvbigpOiBhbnkgeyByZXR1cm4gdGhpcy5qc29uVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IGpzb24odmFsdWU6IGFueSkgeyB0aGlzLmpzb25WYWx1ZSA9IHZhbHVlOyB9XG4gICAgcHVibGljIGdldCBoYXNBY2VFZGl0b3IoKTogYm9vbGVhbiB7IHJldHVybiB0eXBlb2YgYWNlICE9PSBcInVuZGVmaW5lZFwiOyB9XG4gICAgcHVibGljIHNob3coKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0FjZUVkaXRvciAmJiB0aGlzLnN1cnZleUVtYmVkaW5nSGVhZCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nSGVhZCA9IHRoaXMuY3JlYXRlRWRpdG9yKFwic3VydmV5RW1iZWRpbmdIZWFkXCIpO1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZ0JvZHkgPSB0aGlzLmNyZWF0ZUVkaXRvcihcInN1cnZleUVtYmVkaW5nQm9keVwiKTtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmdKYXZhID0gdGhpcy5jcmVhdGVFZGl0b3IoXCJzdXJ2ZXlFbWJlZGluZ0phdmFcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb0hhc0lkcyh0aGlzLnN1cnZleUlkICYmIHRoaXMuc3VydmV5UG9zdElkKTtcbiAgICAgICAgdGhpcy5zZXRCb2R5VGV4dCgpO1xuICAgICAgICB0aGlzLnNldEhlYWRUZXh0KCk7XG4gICAgICAgIHRoaXMuc2V0SmF2YVRlc3QoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXRCb2R5VGV4dCgpIHtcbiAgICAgICAgdGhpcy5zZXRUZXh0VG9FZGl0b3IodGhpcy5zdXJ2ZXlFbWJlZGluZ0JvZHksIHRoaXMua29Cb2R5VGV4dCwgdGhpcy5wbGF0Zm9ybUh0bWxvblBhZ2VbdGhpcy5rb0xpYnJhcnlWZXJzaW9uKCldKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXQgZ2V0Q0ROUGF0aCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5zdXJ2ZXlDRE5QYXRoICsgdGhpcy5zdXJ2ZXlKU1ZlcnNpb24gKyBcIi9cIjsgfVxuICAgIHByaXZhdGUgc2V0SGVhZFRleHQoKSB7XG4gICAgICAgIHZhciBzdHIgPSBcIjwhLS0gWW91ciBwbGF0Zm9ybSAoXCIgKyB0aGlzLmtvTGlicmFyeVZlcnNpb24oKSArIFwiKSBzY3JpcHRzLiAtLT5cXG5cIjtcbiAgICAgICAgaWYgKHRoaXMua29TY3JpcHRVc2luZygpICE9IFwiYm9vdHN0cmFwXCIpIHtcbiAgICAgICAgICAgIHN0ciArPSBcIlxcbjxsaW5rIGhyZWY9XFxcIlwiICsgdGhpcy5nZXRDRE5QYXRoICsgIFwic3VydmV5LmNzc1xcXCIgdHlwZT1cXFwidGV4dC9jc3NcXFwiIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgLz5cIjtcbiAgICAgICAgfVxuICAgICAgICBzdHIgKz0gXCJcXG48c2NyaXB0IHNyYz1cXFwiXCIgKyB0aGlzLmdldENETlBhdGggKyAgIFwic3VydmV5LlwiICsgdGhpcy5wbGF0Zm9ybVN1cnZleUpTUHJlZml4W3RoaXMua29MaWJyYXJ5VmVyc2lvbigpXSArICBcIiAubWluLmpzXFxcIj48L3NjcmlwdD5cIjtcblxuICAgICAgICB0aGlzLnNldFRleHRUb0VkaXRvcih0aGlzLnN1cnZleUVtYmVkaW5nSGVhZCwgdGhpcy5rb0hlYWRUZXh0LCBzdHIpO1xuICAgIH1cbiAgICBwcml2YXRlIHNldEphdmFUZXN0KCkge1xuICAgICAgICB0aGlzLnNldFRleHRUb0VkaXRvcih0aGlzLnN1cnZleUVtYmVkaW5nSmF2YSwgdGhpcy5rb0phdmFUZXh0LCB0aGlzLmdldEphdmFUZXh0KCkpO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZUVkaXRvcihlbGVtZW50TmFtZTogc3RyaW5nKTogQWNlQWpheC5FZGl0b3Ige1xuICAgICAgICB2YXIgZWRpdG9yID0gYWNlLmVkaXQoZWxlbWVudE5hbWUpO1xuICAgICAgICBlZGl0b3Iuc2V0VGhlbWUoXCJhY2UvdGhlbWUvbW9ub2thaVwiKTtcbiAgICAgICAgZWRpdG9yLnNlc3Npb24uc2V0TW9kZShcImFjZS9tb2RlL2pzb25cIik7XG4gICAgICAgIGVkaXRvci5zZXRTaG93UHJpbnRNYXJnaW4oZmFsc2UpO1xuICAgICAgICBlZGl0b3IucmVuZGVyZXIuc2V0U2hvd0d1dHRlcihmYWxzZSk7XG4gICAgICAgIGVkaXRvci5zZXRSZWFkT25seSh0cnVlKTtcbiAgICAgICAgcmV0dXJuIGVkaXRvcjtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRKYXZhVGV4dCgpOiBzdHJpbmcge1xuICAgICAgICB2YXIgaXNPblBhZ2UgPSB0aGlzLmtvU2hvd0FzV2luZG93KCkgPT0gXCJwYWdlXCI7XG4gICAgICAgIHZhciBzdHIgPSB0aGlzLmdldFNhdmVGdW5jKCkgKyBcIlxcblxcblwiO1xuICAgICAgICBzdHIgKz0gaXNPblBhZ2UgPyB0aGlzLnBsYXRmb3JtSlNvblBhZ2VbdGhpcy5rb0xpYnJhcnlWZXJzaW9uKCldIDogdGhpcy5wbGF0Zm9ybUpTb25XaW5kb3dbdGhpcy5rb0xpYnJhcnlWZXJzaW9uKCldO1xuICAgICAgICB2YXIganNvblRleHQgPSBcInZhciBzdXJ2ZXlKU09OID0gXCIgKyB0aGlzLmdldEpzb25UZXh0KCkgKyBcIlxcblxcblwiO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTZXRDc3MoKSArIFwiXFxuXCIgKyBqc29uVGV4dCArIHN0cjtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRTZXRDc3MoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMua29TY3JpcHRVc2luZygpICE9IFwiYm9vdHN0cmFwXCIpIHJldHVybiBcIlwiO1xuICAgICAgICByZXR1cm4gXCJTdXJ2ZXkuU3VydmV5LmNzc1R5cGUgPSBcXFwiYm9vdHN0cmFwXFxcIjtcXG5cIjtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRTYXZlRnVuYygpIHtcbiAgICAgICAgcmV0dXJuIFwiZnVuY3Rpb24gc2VuZERhdGFUb1NlcnZlcihzdXJ2ZXkpIHtcXG5cIiArIHRoaXMuZ2V0U2F2ZUZ1bmNDb2RlKCkgKyBcIlxcbn1cIjtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRTYXZlRnVuY0NvZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmtvSGFzSWRzKCkpIHJldHVybiBcIiAgICBzdXJ2ZXkuc2VuZFJlc3VsdCgnXCIgKyB0aGlzLnN1cnZleVBvc3RJZCArIFwiJyk7XCI7XG4gICAgICAgIHJldHVybiBcIiAgICAvL3NlbmQgQWpheCByZXF1ZXN0IHRvIHlvdXIgd2ViIHNlcnZlci5cXG4gICAgYWxlcnQoXFxcIlRoZSByZXN1bHRzIGFyZTpcXFwiICsgSlNPTi5zdHJpbmdpZnkocy5kYXRhKSk7XCI7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0SnNvblRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMua29IYXNJZHMoKSAmJiB0aGlzLmtvTG9hZFN1cnZleSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ7IHN1cnZleUlkOiAnXCIgKyB0aGlzLnN1cnZleUlkICsgXCInfVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdlbmVyYXRlVmFsaWRKU09OKSByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcy5qc29uKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdXJ2ZXlKU09ONSgpLnN0cmluZ2lmeSh0aGlzLmpzb24pO1xuICAgIH1cbiAgICBwcml2YXRlIHNldFRleHRUb0VkaXRvcihlZGl0b3I6IEFjZUFqYXguRWRpdG9yLCBrb1RleHQ6IGFueSwgdGV4dDogc3RyaW5nKSB7XG4gICAgICAgIGlmIChlZGl0b3IpIGVkaXRvci5zZXRWYWx1ZSh0ZXh0KTtcbiAgICAgICAgaWYgKGtvVGV4dCkga29UZXh0KHRleHQpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3VydmV5RW1iZWRpbmdXaW5kb3cudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7U3VydmV5SGVscGVyLCBPYmpUeXBlfSBmcm9tIFwiLi9zdXJ2ZXlIZWxwZXJcIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlPYmplY3RJdGVtIHtcbiAgICBwdWJsaWMgdmFsdWU6IFN1cnZleS5CYXNlO1xuICAgIHB1YmxpYyB0ZXh0OiBhbnk7XG4gICAgcHVibGljIGxldmVsOiBudW1iZXIgPSAwO1xufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5T2JqZWN0cyB7XG4gICAgcHVibGljIHN0YXRpYyBpbnRlbmQ6IHN0cmluZyA9IFwiLlwiO1xuICAgIHN1cnZleVZhbHVlOiBTdXJ2ZXkuU3VydmV5O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGtvT2JqZWN0czogYW55LCBwdWJsaWMga29TZWxlY3RlZDogYW55KSB7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc3VydmV5KCk6IFN1cnZleS5TdXJ2ZXkgeyByZXR1cm4gdGhpcy5zdXJ2ZXlWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgc3VydmV5KHZhbHVlOiBTdXJ2ZXkuU3VydmV5KSB7XG4gICAgICAgIGlmICh0aGlzLnN1cnZleSA9PSB2YWx1ZSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMucmVidWlsZCgpO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkUGFnZShwYWdlOiBTdXJ2ZXkuUGFnZU1vZGVsKSB7XG4gICAgICAgIHRoaXMuYWRkRWxlbWVudChwYWdlLCBudWxsKTtcbiAgICB9XG4gICAgcHVibGljIGFkZEVsZW1lbnQoZWxlbWVudDogYW55LCBwYXJlbnQ6IGFueSkge1xuICAgICAgICB2YXIgcGFyZW50SW5kZXggPSBwYXJlbnQgIT0gbnVsbCA/IHRoaXMuZ2V0SXRlbUluZGV4KHBhcmVudCkgOiAwO1xuICAgICAgICBpZiAocGFyZW50SW5kZXggPCAwKSByZXR1cm47XG4gICAgICAgIHZhciBlbGVtZW50cyA9IHBhcmVudCAhPSBudWxsID8gcGFyZW50LmVsZW1lbnRzIDogdGhpcy5zdXJ2ZXkucGFnZXM7XG4gICAgICAgIHZhciBlbGVtZW50SW5kZXggPSBlbGVtZW50cy5pbmRleE9mKGVsZW1lbnQpO1xuICAgICAgICB2YXIgbmV3SW5kZXggPSBlbGVtZW50SW5kZXggKyAxICsgcGFyZW50SW5kZXg7XG4gICAgICAgIGlmKGVsZW1lbnRJbmRleCA+IDApIHtcbiAgICAgICAgICAgIHZhciBwcmV2RWxlbWVudCA9IGVsZW1lbnRzW2VsZW1lbnRJbmRleCAtIDFdO1xuICAgICAgICAgICAgbmV3SW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChwcmV2RWxlbWVudCkgKyB0aGlzLmdldEFsbEVsZW1lbnRDb3VudChwcmV2RWxlbWVudCkgKyAxO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpdGVtID0gdGhpcy5jcmVhdGVJdGVtKGVsZW1lbnQsIHRoaXMua29PYmplY3RzKClbcGFyZW50SW5kZXhdKTtcbiAgICAgICAgdGhpcy5hZGRJdGVtKGl0ZW0sIG5ld0luZGV4KTtcbiAgICAgICAgaWYoZWxlbWVudC5lbGVtZW50cykge1xuICAgICAgICAgICAgdmFyIG9ianMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuYnVpbGRFbGVtZW50cyhvYmpzLCBlbGVtZW50LmVsZW1lbnRzLCBpdGVtKTtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBvYmpzLmxlbmd0aDsgaSArKyl7XG4gICAgICAgICAgICAgICAgdGhpcy5rb09iamVjdHMuc3BsaWNlKG5ld0luZGV4ICsgMSArIGksIDAsIG9ianNbaV0pOyAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMua29TZWxlY3RlZChpdGVtKTtcbiAgICB9XG4gICAgcHVibGljIHNlbGVjdE9iamVjdChvYmo6IFN1cnZleS5CYXNlKSB7XG4gICAgICAgIHZhciBvYmpzID0gdGhpcy5rb09iamVjdHMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmpzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAob2Jqc1tpXS52YWx1ZSA9PSBvYmopIHtcbiAgICAgICAgICAgICAgICB0aGlzLmtvU2VsZWN0ZWQob2Jqc1tpXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyByZW1vdmVPYmplY3Qob2JqOiBTdXJ2ZXkuQmFzZSkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmdldEl0ZW1JbmRleChvYmopO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSByZXR1cm47XG4gICAgICAgIHZhciBjb3VudFRvUmVtb3ZlID0gMSArIHRoaXMuZ2V0QWxsRWxlbWVudENvdW50KG9iaik7XG4gICAgICAgIHRoaXMua29PYmplY3RzLnNwbGljZShpbmRleCwgY291bnRUb1JlbW92ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBuYW1lQ2hhbmdlZChvYmo6IFN1cnZleS5CYXNlKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuZ2V0SXRlbUluZGV4KG9iaik7XG4gICAgICAgIGlmIChpbmRleCA8IDApIHJldHVybjtcbiAgICAgICAgdGhpcy5rb09iamVjdHMoKVtpbmRleF0udGV4dCh0aGlzLmdldFRleHQodGhpcy5rb09iamVjdHMoKVtpbmRleF0pKTtcbiAgICB9XG4gICAgcHVibGljIHNlbGVjdE5leHRRdWVzdGlvbihpc1VwOiBib29sZWFuKSB7XG4gICAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMuZ2V0U2VsZWN0ZWRRdWVzdGlvbigpO1xuICAgICAgICB2YXIgaXRlbUluZGV4ID0gdGhpcy5nZXRJdGVtSW5kZXgocXVlc3Rpb24pO1xuICAgICAgICBpZiAoaXRlbUluZGV4IDwgMCkgcmV0dXJuIHF1ZXN0aW9uO1xuICAgICAgICB2YXIgb2JqcyA9IHRoaXMua29PYmplY3RzKCk7XG4gICAgICAgIHZhciBuZXdJdGVtSW5kZXggPSBpdGVtSW5kZXggKyAoaXNVcCA/IC0xIDogMSk7XG4gICAgICAgIGlmIChuZXdJdGVtSW5kZXggPCBvYmpzLmxlbmd0aCAmJiBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZShvYmpzW25ld0l0ZW1JbmRleF0udmFsdWUpID09IE9ialR5cGUuUXVlc3Rpb24pIHtcbiAgICAgICAgICAgIGl0ZW1JbmRleCA9IG5ld0l0ZW1JbmRleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld0l0ZW1JbmRleCA9IGl0ZW1JbmRleDtcbiAgICAgICAgICAgIHdoaWxlIChuZXdJdGVtSW5kZXggPCBvYmpzLmxlbmd0aCAmJiBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZShvYmpzW25ld0l0ZW1JbmRleF0udmFsdWUpID09IE9ialR5cGUuUXVlc3Rpb24pIHtcbiAgICAgICAgICAgICAgICBpdGVtSW5kZXggPSBuZXdJdGVtSW5kZXg7XG4gICAgICAgICAgICAgICAgbmV3SXRlbUluZGV4ICs9IChpc1VwID8gMSA6IC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvU2VsZWN0ZWQob2Jqc1tpdGVtSW5kZXhdKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRBbGxFbGVtZW50Q291bnQoZWxlbWVudDogYW55KSB7XG4gICAgICAgIGlmKCFlbGVtZW50LmVsZW1lbnRzKSByZXR1cm4gMDtcbiAgICAgICAgdmFyIHJlcyA9IDA7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBlbGVtZW50LmVsZW1lbnRzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgICAgcmVzICs9IDEgKyB0aGlzLmdldEFsbEVsZW1lbnRDb3VudChlbGVtZW50LmVsZW1lbnRzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFNlbGVjdGVkUXVlc3Rpb24oKTogU3VydmV5LlF1ZXN0aW9uQmFzZSB7XG4gICAgICAgIGlmICghdGhpcy5rb1NlbGVjdGVkKCkpIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgb2JqID0gdGhpcy5rb1NlbGVjdGVkKCkudmFsdWU7XG4gICAgICAgIGlmICghb2JqKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9iaikgPT0gT2JqVHlwZS5RdWVzdGlvbiA/IDxTdXJ2ZXkuUXVlc3Rpb25CYXNlPihvYmopIDogbnVsbDtcblxuICAgIH1cbiAgICBwcml2YXRlIGFkZEl0ZW0oaXRlbTogU3VydmV5T2JqZWN0SXRlbSwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZiAoaW5kZXggPiB0aGlzLmtvT2JqZWN0cygpLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5rb09iamVjdHMucHVzaChpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMua29PYmplY3RzLnNwbGljZShpbmRleCwgMCwgaXRlbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSByZWJ1aWxkKCkge1xuICAgICAgICB2YXIgb2JqcyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5zdXJ2ZXkgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5rb09iamVjdHMob2Jqcyk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdE9iamVjdChudWxsKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcm9vdCA9IHRoaXMuY3JlYXRlSXRlbSh0aGlzLnN1cnZleSwgbnVsbCk7XG4gICAgICAgIG9ianMucHVzaChyb290KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnN1cnZleS5wYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhZ2UgPSA8U3VydmV5LlBhZ2U+dGhpcy5zdXJ2ZXkucGFnZXNbaV07XG4gICAgICAgICAgICB2YXIgcGFnZUl0ZW0gPSB0aGlzLmNyZWF0ZUl0ZW0ocGFnZSwgcm9vdCk7XG4gICAgICAgICAgICBvYmpzLnB1c2gocGFnZUl0ZW0pO1xuICAgICAgICAgICAgdGhpcy5idWlsZEVsZW1lbnRzKG9ianMsIHBhZ2UuZWxlbWVudHMsIHBhZ2VJdGVtKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvT2JqZWN0cyhvYmpzKTtcbiAgICAgICAgdGhpcy5zZWxlY3RPYmplY3QodGhpcy5zdXJ2ZXkpXG4gICAgfVxuICAgIHByaXZhdGUgYnVpbGRFbGVtZW50cyhvYmpzOiBBcnJheTxhbnk+LCBlbGVtZW50czogQXJyYXk8U3VydmV5LklFbGVtZW50PiwgcGFyZW50SXRlbTogU3VydmV5T2JqZWN0SXRlbSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSBlbGVtZW50c1tpXTtcbiAgICAgICAgICAgIGlmKGVsLmlzUGFuZWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFuZWxJdGVtID0gdGhpcy5jcmVhdGVJdGVtKDxTdXJ2ZXkuUGFuZWw+ZWwsIHBhcmVudEl0ZW0pO1xuICAgICAgICAgICAgICAgIG9ianMucHVzaChwYW5lbEl0ZW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRFbGVtZW50cyhvYmpzLCAoPFN1cnZleS5QYW5lbD5lbCkuZWxlbWVudHMsIHBhbmVsSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmpzLnB1c2godGhpcy5jcmVhdGVJdGVtKDxTdXJ2ZXkuUXVlc3Rpb25CYXNlPmVsLCBwYXJlbnRJdGVtKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVJdGVtKHZhbHVlOiBTdXJ2ZXkuQmFzZSwgcGFyZW50OiBTdXJ2ZXlPYmplY3RJdGVtKSB7XG4gICAgICAgIHZhciBpdGVtID0gbmV3IFN1cnZleU9iamVjdEl0ZW0oKTtcbiAgICAgICAgaXRlbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBpdGVtLmxldmVsID0gcGFyZW50ICE9IG51bGwgPyBwYXJlbnQubGV2ZWwgKyAxIDogMDtcbiAgICAgICAgaXRlbS50ZXh0ID0ga28ub2JzZXJ2YWJsZSh0aGlzLmdldFRleHQoaXRlbSkpO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRJdGVtSW5kZXgodmFsdWU6IFN1cnZleS5CYXNlKTogbnVtYmVyIHtcbiAgICAgICAgdmFyIG9ianMgPSB0aGlzLmtvT2JqZWN0cygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9ianMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChvYmpzW2ldLnZhbHVlID09IHZhbHVlKSByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0VGV4dChpdGVtOiBTdXJ2ZXlPYmplY3RJdGVtKTogc3RyaW5nIHtcbiAgICAgICAgaWYoaXRlbS5sZXZlbCA9PSAwKSByZXR1cm4gXCJTdXJ2ZXlcIjtcbiAgICAgICAgdmFyIGludGVuZCA9IFN1cnZleU9iamVjdHMuaW50ZW5kO1xuICAgICAgICBmb3IodmFyIGkgPSAxOyBpIDwgaXRlbS5sZXZlbDsgaSArKykge1xuICAgICAgICAgICAgaW50ZW5kICs9IFN1cnZleU9iamVjdHMuaW50ZW5kO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnRlbmQgKyBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0TmFtZShpdGVtLnZhbHVlKTtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N1cnZleU9iamVjdHMudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlGb3JEZXNpZ25lciBleHRlbmRzIFN1cnZleS5TdXJ2ZXkge1xuICAgIHByaXZhdGUgc2VsZWN0ZWRFbGVtZW50VmFsdWU6IGFueTtcbiAgICBlZGl0UXVlc3Rpb25DbGljazogYW55OyBjb3B5UXVlc3Rpb25DbGljazogYW55OyBmYXN0Q29weVF1ZXN0aW9uQ2xpY2s6IGFueTsgZGVsZXRlQ3VycmVudE9iamVjdENsaWNrOiBhbnk7XG4gICAgcHVibGljICBvblNlbGVjdGVkRWxlbWVudENoYW5nZWQ6IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25FZGl0UXVlc3Rpb246IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25Db3B5UXVlc3Rpb246IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25GYXN0Q29weVF1ZXN0aW9uOiBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgcHVibGljIG9uRGVsZXRlQ3VycmVudE9iamVjdDogU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIGNvbnN0cnVjdG9yKGpzb25PYmo6IGFueSA9IG51bGwsIHJlbmRlcmVkRWxlbWVudDogYW55ID0gbnVsbCwgY3NzOiBhbnkgPSBudWxsKSB7XG4gICAgICAgIHN1cGVyKGpzb25PYmosIHJlbmRlcmVkRWxlbWVudCwgY3NzKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnNldERlc2lnbk1vZGUodHJ1ZSk7XG4gICAgICAgIHRoaXMub25BZnRlclJlbmRlclBhZ2UuYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgb3B0aW9ucy5wYWdlW1wib25BZnRlclJlbmRlclBhZ2VcIl0ob3B0aW9ucy5odG1sRWxlbWVudCk7IH0pO1xuICAgICAgICB0aGlzLm9uQWZ0ZXJSZW5kZXJRdWVzdGlvbi5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBvcHRpb25zLnF1ZXN0aW9uW1wib25BZnRlclJlbmRlclF1ZXN0aW9uXCJdKG9wdGlvbnMuaHRtbEVsZW1lbnQpOyB9KTtcbiAgICAgICAgdGhpcy5vbkFmdGVyUmVuZGVyUGFuZWwuYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgb3B0aW9ucy5wYW5lbFtcIm9uQWZ0ZXJSZW5kZXJQYW5lbFwiXShvcHRpb25zLmh0bWxFbGVtZW50KTsgfSk7XG4gICAgICAgIHRoaXMuZWRpdFF1ZXN0aW9uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25FZGl0UXVlc3Rpb24uZmlyZShzZWxmLCBudWxsKTsgfTtcbiAgICAgICAgdGhpcy5jb3B5UXVlc3Rpb25DbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vbkNvcHlRdWVzdGlvbi5maXJlKHNlbGYsIG51bGwpOyB9O1xuICAgICAgICB0aGlzLmZhc3RDb3B5UXVlc3Rpb25DbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5vbkZhc3RDb3B5UXVlc3Rpb24uZmlyZShzZWxmLCBudWxsKTsgfTtcbiAgICAgICAgdGhpcy5kZWxldGVDdXJyZW50T2JqZWN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYub25EZWxldGVDdXJyZW50T2JqZWN0LmZpcmUoc2VsZiwgbnVsbCk7IH1cbiAgICB9XG4gICAgcHVibGljIGdldCBzZWxlY3RlZEVsZW1lbnQoKTogYW55IHtyZXR1cm4gdGhpcy5zZWxlY3RlZEVsZW1lbnRWYWx1ZTt9XG4gICAgcHVibGljIHNldCBzZWxlY3RlZEVsZW1lbnQodmFsdWU6IGFueSkge1xuICAgICAgICBpZiAodmFsdWUgPT0gdGhpcy5zZWxlY3RlZEVsZW1lbnRWYWx1ZSkgcmV0dXJuO1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnNlbGVjdGVkRWxlbWVudFZhbHVlO1xuICAgICAgICB0aGlzLnNlbGVjdGVkRWxlbWVudFZhbHVlID0gdmFsdWU7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPSBudWxsICYmIG9sZFZhbHVlW1wib25TZWxlY3RlZEVsZW1lbnRDaGFuZ2VkXCJdKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZVtcIm9uU2VsZWN0ZWRFbGVtZW50Q2hhbmdlZFwiXSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRWxlbWVudFZhbHVlICE9IG51bGwgJiYgdGhpcy5zZWxlY3RlZEVsZW1lbnRWYWx1ZVtcIm9uU2VsZWN0ZWRFbGVtZW50Q2hhbmdlZFwiXSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEVsZW1lbnRWYWx1ZVtcIm9uU2VsZWN0ZWRFbGVtZW50Q2hhbmdlZFwiXSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25TZWxlY3RlZEVsZW1lbnRDaGFuZ2VkLmZpcmUodGhpcywgeyAnb2xkRWxlbWVudCc6IG9sZFZhbHVlLCAnbmV3RWxlbWVudCc6IHZhbHVlIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0RWRpdG9yTG9jU3RyaW5nKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyh2YWx1ZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwYW5lbEJhc2VPbkNyZWF0aW5nKHNlbGY6IGFueSkge1xuICAgIHNlbGYuZHJhZ0VudGVyQ291bnRlciA9IDA7XG4gICAgc2VsZi5lbXB0eUVsZW1lbnQgPSBudWxsO1xuICAgIHNlbGYua29Sb3dzLnN1YnNjcmliZShmdW5jdGlvbihjaGFuZ2VzKSB7XG4gICAgICAgIGlmKHNlbGYuZW1wdHlFbGVtZW50KSB7XG4gICAgICAgICAgICBzZWxmLmVtcHR5RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gc2VsZi5rb1Jvd3MoKS5sZW5ndGggPiAwID8gXCJub25lXCIgOiBcIlwiO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGVsZW1lbnRPbkNyZWF0aW5nKHNlbGY6IGFueSwgY2xhc3NOYW1lOiBzdHJpbmcpIHtcbiAgICBzZWxmLmRyYWdEcm9wSGVscGVyVmFsdWUgPSBudWxsO1xuICAgIHNlbGYuZHJhZ0Ryb3BIZWxwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChzZWxmLmRyYWdEcm9wSGVscGVyVmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgc2VsZi5kcmFnRHJvcEhlbHBlclZhbHVlID0gc2VsZi5kYXRhW1wiZHJhZ0Ryb3BIZWxwZXJcIl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGYuZHJhZ0Ryb3BIZWxwZXJWYWx1ZTtcbiAgICB9O1xuICAgIHNlbGYucmVuZGVyZWRFbGVtZW50ID0gbnVsbDtcbiAgICBzZWxmLmFkZG9uc0VsZW1lbnQgPSBudWxsO1xuICAgIHNlbGYua29Jc0RyYWdnaW5nID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgc2VsZi5rb0lzU2VsZWN0ZWQgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICBzZWxmLmtvSXNEcmFnZ2luZy5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IFxuICAgICAgICBpZihzZWxmLnJlbmRlcmVkRWxlbWVudCkge1xuICAgICAgICAgICAgc2VsZi5yZW5kZXJlZEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG5ld1ZhbHVlID8gMC40IDogMTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHNlbGYua29Jc1NlbGVjdGVkLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgXG4gICAgICAgIGlmKHNlbGYucmVuZGVyZWRFbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgbmV3Q2xhc3MgPSBjbGFzc05hbWU7XG4gICAgICAgICAgICBpZihuZXdWYWx1ZSkgbmV3Q2xhc3MgKz0gXCIgc3ZkX3Ffc2VsZWN0ZWQgXCI7XG4gICAgICAgICAgICBzZWxmLnJlbmRlcmVkRWxlbWVudC5jbGFzc05hbWUgPSBuZXdDbGFzcztcbiAgICAgICAgfVxuICAgICAgICBpZihzZWxmLmFkZG9uc0VsZW1lbnQpIHtcbiAgICAgICAgICAgIHNlbGYuYWRkb25zRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gbmV3VmFsdWUgPyBcIlwiOiBcIm5vbmVcIjsgICAgXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRW1wdHlQYW5lbEVsZW1lbnQocm9vdDogSFRNTEVsZW1lbnQsIGRyYWdEcm9wSGVscGVyOiBhbnksIHNlbGY6IGFueSk6IEhUTUxFbGVtZW50IHtcbiAgICB2YXIgZURpdjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVEaXYuY2xhc3NOYW1lID0gXCJ3ZWxsXCI7XG4gICAgZURpdi5vbmRyYWdvdmVyID0gZnVuY3Rpb24oZSkgeyBcbiAgICAgICAgZHJhZ0Ryb3BIZWxwZXIuZG9EcmFnRHJvcE92ZXIoZSwgc2VsZik7XG4gICAgfTtcbiAgICB2YXIgZVNwYW46IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGVTcGFuLnRleHRDb250ZW50ID0gc2VsZi5kYXRhLmdldEVkaXRvckxvY1N0cmluZygnc3VydmV5LmRyb3BRdWVzdGlvbicpO1xuICAgIGVEaXYuYXBwZW5kQ2hpbGQoZVNwYW4pO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQoZURpdik7XG4gICAgcmV0dXJuIGVEaXY7XG59XG5cbmNvbnN0IHF1ZXN0aW9uX2Rlc2lnbl9jbGFzczogc3RyaW5nID0gXCJzdmRfcXVlc3Rpb24gd2VsbCB3ZWxsLXNtIHN2ZF9xX2Rlc2lnbl9ib3JkZXJcIjtcbmNvbnN0IHBhbmVsX2Rlc2lnbl9jbGFzczogc3RyaW5nID0gXCJzdmRfcXVlc3Rpb24gd2VsbCB3ZWxsLXNtIHN2ZF9xX2Rlc2lnbl9ib3JkZXJcIjtcblxuZnVuY3Rpb24gY3JlYXRlUXVlc3Rpb25EZXNpZ25JdGVtKG9uQ2xpY2s6IGFueSwgdGV4dDogc3RyaW5nKTogSFRNTExJRWxlbWVudCB7XG4gICAgdmFyIHJlcyA9IDxIVE1MTElFbGVtZW50PmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB2YXIgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG4uaW5uZXJUZXh0ID0gdGV4dDtcbiAgICBidG4ub25jbGljayA9IG9uQ2xpY2s7XG4gICAgYnRuLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi14c1wiO1xuICAgIHJlcy5hcHBlbmRDaGlsZChidG4pO1xuICAgIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRBZGRvbnMoZGF0YTogYW55LCBpc1BhbmVsOiBib29sZWFuKTogSFRNTEVsZW1lbnQge1xuICAgIHZhciBtYWluOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbi5jbGFzc05hbWUgPSBcInN2ZF9xdWVzdGlvbl9tZW51IGJ0bi1ncm91cFwiO1xuICAgIG1haW5bXCJyb2xlXCJdID0gXCJncm91cFwiO1xuICAgIHZhciBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICBidG4uY2xhc3NOYW1lID0gXCJidG4gYnRuLXByaW1hcnkgIGJ0bi14c1wiO1xuICAgIGJ0bi5vbmNsaWNrID0gZnVuY3Rpb24oZSkgeyBkYXRhLmVkaXRRdWVzdGlvbkNsaWNrKCk7fTtcbiAgICB2YXIgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uaW5uZXJUZXh0ID0gXCJFZGl0XCI7IC8vVE9ET1xuICAgIGJ0bi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgYnRuLmNsYXNzTmFtZSA9IFwiYnRuIGJ0bi1wcmltYXJ5ICBidG4teHMgZHJvcGRvd24tdG9nZ2xlXCI7XG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImRhdGEtdG9nZ2xlXCIsIFwiZHJvcGRvd25cIik7XG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImFyaWEtaGFzcG9wdXBcIiwgXCJ0cnVlXCIpO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XG4gICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4uY2xhc3NOYW1lID0gXCJnbHlwaGljb24gZ2x5cGhpY29uLW9wdGlvbi1ob3Jpem9udGFsXCI7XG4gICAgYnRuLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB2YXIgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgdWwuY2xhc3NOYW1lID0gXCJkcm9wZG93bi1tZW51XCI7XG4gICAgdWwuYXBwZW5kQ2hpbGQoY3JlYXRlUXVlc3Rpb25EZXNpZ25JdGVtKGRhdGEuY29weVF1ZXN0aW9uQ2xpY2ssIGRhdGEuZ2V0RWRpdG9yTG9jU3RyaW5nKCdzdXJ2ZXkuYWRkVG9Ub29sYm94JykpKTtcbiAgICB1bC5hcHBlbmRDaGlsZChjcmVhdGVRdWVzdGlvbkRlc2lnbkl0ZW0oZGF0YS5mYXN0Q29weVF1ZXN0aW9uQ2xpY2ssIGRhdGEuZ2V0RWRpdG9yTG9jU3RyaW5nKCdzdXJ2ZXkuY29weScpKSk7XG4gICAgdmFyIGRlbGV0ZUxvY2FsZU5hbWUgPSBpc1BhbmVsID8gJ3N1cnZleS5kZWxldGVQYW5lbCcgOiAnc3VydmV5LmRlbGV0ZVF1ZXN0aW9uJztcbiAgICB1bC5hcHBlbmRDaGlsZChjcmVhdGVRdWVzdGlvbkRlc2lnbkl0ZW0oZGF0YS5kZWxldGVDdXJyZW50T2JqZWN0Q2xpY2ssIGRhdGEuZ2V0RWRpdG9yTG9jU3RyaW5nKGRlbGV0ZUxvY2FsZU5hbWUpKSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh1bCk7XG4gICAgcmV0dXJuIG1haW47XG59XG5cbi8vdmFyIGxhc3RFbGVtZW50T25DbGljazogSFRNTEVsZW1lbnQgPSBudWxsO1xuXG5mdW5jdGlvbiBlbGVtZW50T25BZnRlclJlbmRlcmluZyhlbDogYW55LCBzZWxmOiBhbnksIGNsYXNzTmFtZTogc3RyaW5nLCBpc1BhbmVsOiBib29sZWFuLCBkaXNhYmxlOiBib29sZWFuKSB7XG4gICAgc2VsZi5yZW5kZXJlZEVsZW1lbnQgPSBlbDtcbiAgICB2YXIgbmV3Q2xhc3MgPSBjbGFzc05hbWU7XG4gICAgaWYoc2VsZi5rb0lzU2VsZWN0ZWQoKSkgbmV3Q2xhc3MgKz0gXCIgc3ZkX3Ffc2VsZWN0ZWRcIjtcbiAgICBcbiAgICBlbC5jbGFzc05hbWUgPSBuZXdDbGFzcztcbiAgICBlbC5zdHlsZS5vcGFjaXR5ID0gc2VsZi5rb0lzRHJhZ2dpbmcoKSA/IDAuNCA6IDE7XG4gICAgZWwuZHJhZ2dhYmxlID0gdHJ1ZTtcbiAgICBlbC5vbmRyYWdvdmVyID0gZnVuY3Rpb24oZSl7IFxuICAgICAgICBpZighZVtcIm1hcmtFdmVudFwiXSkge1xuICAgICAgICAgICAgZVtcIm1hcmtFdmVudFwiXSA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLmRyYWdEcm9wSGVscGVyKCkuZG9EcmFnRHJvcE92ZXIoZSwgc2VsZiwgdHJ1ZSk7IFxuICAgICAgICB9XG4gICAgfTtcbiAgICBlbC5vbmRyb3AgPSBmdW5jdGlvbihlKXsgXG4gICAgICAgIGlmKCFlW1wibWFya0V2ZW50XCJdKSB7XG4gICAgICAgICAgICBlW1wibWFya0V2ZW50XCJdID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYuZHJhZ0Ryb3BIZWxwZXIoKS5kb0Ryb3AoZSk7IFxuICAgICAgICB9XG4gICAgfTtcbiAgICBlbC5vbmRyYWdzdGFydCA9IGZ1bmN0aW9uIChlKSB7IFxuICAgICAgICBpZighZVtcIm1hcmtFdmVudFwiXSkge1xuICAgICAgICAgICAgZVtcIm1hcmtFdmVudFwiXSA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLmRyYWdEcm9wSGVscGVyKCkuc3RhcnREcmFnUXVlc3Rpb24oZSwgc2VsZik7IFxuICAgICAgICB9XG4gICAgfTtcbiAgICBlbC5vbmRyYWdlbmQgPSBmdW5jdGlvbiAoZSkgeyBcbiAgICAgICAgc2VsZi5kcmFnRHJvcEhlbHBlcigpLmVuZCgpOyBcbiAgICB9O1xuICAgIGVsLm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7IFxuICAgICAgICBpZighZVtcIm1hcmtFdmVudFwiXSkge1xuICAgICAgICAgICAgZVtcIm1hcmtFdmVudFwiXSA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLmRhdGFbXCJzZWxlY3RlZEVsZW1lbnRcIl0gPSBzZWxmOyBcbiAgICAgICAgfVxuICAgIH07XG4gICAgZWwub25rZXlkb3duID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZihlLndpdGNoID09IDQ2KSBzZWxmLmRhdGEuZGVsZXRlQ3VycmVudE9iamVjdENsaWNrKCk7IFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYoZGlzYWJsZSkge1xuICAgICAgICB2YXIgY2hpbGRzID0gZWwuY2hpbGROb2RlcztcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGNoaWxkcy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIGlmKGNoaWxkc1tpXS5zdHlsZSkgY2hpbGRzW2ldLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZWxmLmFkZG9uc0VsZW1lbnQgPSBjcmVhdGVFbGVtZW50QWRkb25zKHNlbGYuZGF0YSwgaXNQYW5lbCk7XG4gICAgc2VsZi5hZGRvbnNFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBzZWxmLmtvSXNTZWxlY3RlZCgpID8gXCJcIjogXCJub25lXCI7ICAgIFxuICAgIGVsLmFwcGVuZENoaWxkKHNlbGYuYWRkb25zRWxlbWVudCk7XG59XG5cblN1cnZleS5QYWdlLnByb3RvdHlwZVtcIm9uQ3JlYXRpbmdcIl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcGFuZWxCYXNlT25DcmVhdGluZyh0aGlzKTtcbn07XG5cblN1cnZleS5QYWdlLnByb3RvdHlwZVtcIm9uQWZ0ZXJSZW5kZXJQYWdlXCJdID0gZnVuY3Rpb24oZWwpIHtcbiAgICBpZighdGhpcy5kYXRhLmlzRGVzaWduTW9kZSkgcmV0dXJuO1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICB2YXIgZHJhZ0Ryb3BIZWxwZXIgPSB0aGlzLmRhdGFbXCJkcmFnRHJvcEhlbHBlclwiXTtcbiAgICB0aGlzLmRyYWdFbnRlckNvdW50ZXIgPSAwO1xuICAgIGVsLm9uZHJhZ2VudGVyID0gZnVuY3Rpb24gKGUpIHsgXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXG4gICAgICAgIHNlbGYuZHJhZ0VudGVyQ291bnRlcisrOyBcbiAgICB9O1xuICAgIGVsLm9uZHJhZ2xlYXZlID0gZnVuY3Rpb24gKGUpIHsgXG4gICAgICAgIHNlbGYuZHJhZ0VudGVyQ291bnRlci0tOyBcbiAgICAgICAgaWYgKHNlbGYuZHJhZ0VudGVyQ291bnRlciA9PT0gMCkgXG4gICAgICAgICAgICBkcmFnRHJvcEhlbHBlci5kb0xlYXZlUGFnZShlKTsgXG4gICAgfTtcbiAgICBlbC5vbmRyYWdvdmVyID0gZnVuY3Rpb24oZSl7IHJldHVybiBmYWxzZTsgfTtcbiAgICBlbC5vbmRyb3AgPSBmdW5jdGlvbihlKXsgZHJhZ0Ryb3BIZWxwZXIuZG9Ecm9wKGUpOyB9O1xuICAgIGlmKHRoaXMuZWxlbWVudHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgdGhpcy5lbXB0eUVsZW1lbnQgPSBhZGRFbXB0eVBhbmVsRWxlbWVudChlbCwgZHJhZ0Ryb3BIZWxwZXIsIHNlbGYpO1xuICAgIH1cbn1cblxuU3VydmV5LlBhbmVsLnByb3RvdHlwZVtcIm9uQ3JlYXRpbmdcIl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcGFuZWxCYXNlT25DcmVhdGluZyh0aGlzKTtcbiAgICBlbGVtZW50T25DcmVhdGluZyh0aGlzLCBwYW5lbF9kZXNpZ25fY2xhc3MpO1xufTtcblxuU3VydmV5LlBhbmVsLnByb3RvdHlwZVtcIm9uQWZ0ZXJSZW5kZXJQYW5lbFwiXSA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgaWYoIXRoaXMuZGF0YS5pc0Rlc2lnbk1vZGUpIHJldHVybjtcbiAgICB2YXIgcm93cyA9IHRoaXMua29Sb3dzKCk7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmKHRoaXMuZWxlbWVudHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgdGhpcy5lbXB0eUVsZW1lbnQgPSBhZGRFbXB0eVBhbmVsRWxlbWVudChlbCwgc2VsZi5kcmFnRHJvcEhlbHBlcigpLCBzZWxmKTtcbiAgICB9XG4gICAgZWxlbWVudE9uQWZ0ZXJSZW5kZXJpbmcoZWwsIHRoaXMsIHBhbmVsX2Rlc2lnbl9jbGFzcywgdHJ1ZSwgdGhpcy5rb0lzRHJhZ2dpbmcoKSk7XG59XG5cblN1cnZleS5QYW5lbC5wcm90b3R5cGVbXCJvblNlbGVjdGVkRWxlbWVudENoYW5nZWRcIl0gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5kYXRhID09IG51bGwpIHJldHVybjtcbiAgICB0aGlzLmtvSXNTZWxlY3RlZCh0aGlzLmRhdGFbXCJzZWxlY3RlZEVsZW1lbnRWYWx1ZVwiXSA9PSB0aGlzKTtcbn07XG5cblN1cnZleS5RdWVzdGlvbkJhc2UucHJvdG90eXBlW1wib25DcmVhdGluZ1wiXSA9IGZ1bmN0aW9uICgpIHtcbiAgICBlbGVtZW50T25DcmVhdGluZyh0aGlzLCBxdWVzdGlvbl9kZXNpZ25fY2xhc3MpO1xufTtcblxuU3VydmV5LlF1ZXN0aW9uQmFzZS5wcm90b3R5cGVbXCJvbkFmdGVyUmVuZGVyUXVlc3Rpb25cIl0gPSBmdW5jdGlvbihlbCkge1xuICAgIGlmKCF0aGlzLmRhdGEuaXNEZXNpZ25Nb2RlKSByZXR1cm47XG4gICAgZWxlbWVudE9uQWZ0ZXJSZW5kZXJpbmcoZWwsIHRoaXMsIHF1ZXN0aW9uX2Rlc2lnbl9jbGFzcywgZmFsc2UsIHRydWUpO1xufTtcblxuU3VydmV5LlF1ZXN0aW9uQmFzZS5wcm90b3R5cGVbXCJvblNlbGVjdGVkRWxlbWVudENoYW5nZWRcIl0gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5kYXRhID09IG51bGwpIHJldHVybjtcbiAgICB0aGlzLmtvSXNTZWxlY3RlZCh0aGlzLmRhdGFbXCJzZWxlY3RlZEVsZW1lbnRWYWx1ZVwiXSA9PSB0aGlzKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N1cnZleWpzT2JqZWN0cy50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVVuZG9SZWRvIHtcbiAgICBwcml2YXRlIGl0ZW1zOiBBcnJheTxVbmRvUmVkb0l0ZW0+O1xuICAgIHByaXZhdGUgaW5kZXg6IG51bWJlciA9IC0xO1xuICAgIHB1YmxpYyBrb0NhblVuZG86IGFueTsga29DYW5SZWRvOiBhbnk7XG4gICAgcHVibGljIG1heGltdW1Db3VudDogbnVtYmVyID0gMTA7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5rb0NhblVuZG8gPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5rb0NhblJlZG8gPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICB9XG4gICAgcHVibGljIGNsZWFyKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMua29DYW5VbmRvKGZhbHNlKTtcbiAgICAgICAgdGhpcy5rb0NhblJlZG8oZmFsc2UpO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0Q3VycmVudChzdXJ2ZXk6IFN1cnZleS5TdXJ2ZXksIHNlbGVjdGVkT2JqTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciBpdGVtID0gbmV3IFVuZG9SZWRvSXRlbSgpO1xuICAgICAgICBpdGVtLnN1cnZleUpTT04gPSBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b0pzb25PYmplY3Qoc3VydmV5KTtcbiAgICAgICAgaXRlbS5zZWxlY3RlZE9iak5hbWUgPSBzZWxlY3RlZE9iak5hbWU7XG4gICAgICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLnNwbGljZSh0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB0aGlzLnJlbW92ZU9sZERhdGEoKTtcbiAgICAgICAgdGhpcy5pbmRleCA9IHRoaXMuaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgdGhpcy51cGRhdGVDYW5VbmRvUmVkbygpO1xuICAgIH1cbiAgICBwdWJsaWMgdW5kbygpOiBVbmRvUmVkb0l0ZW0ge1xuICAgICAgICBpZiAoIXRoaXMuY2FuVW5kbykgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiB0aGlzLmRvVW5kb1JlZG8oLTEpO1xuICAgIH1cbiAgICBwdWJsaWMgcmVkbygpOiBVbmRvUmVkb0l0ZW0gIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhblJlZG8pIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gdGhpcy5kb1VuZG9SZWRvKDEpO1xuICAgIH1cbiAgICBwcml2YXRlIHVwZGF0ZUNhblVuZG9SZWRvKCkge1xuICAgICAgICB0aGlzLmtvQ2FuVW5kbyh0aGlzLmNhblVuZG8pO1xuICAgICAgICB0aGlzLmtvQ2FuUmVkbyh0aGlzLmNhblJlZG8pO1xuICAgIH1cbiAgICBwcml2YXRlIGRvVW5kb1JlZG8oZEluZGV4OiBudW1iZXIpOiBVbmRvUmVkb0l0ZW0ge1xuICAgICAgICB0aGlzLmluZGV4ICs9IGRJbmRleDtcbiAgICAgICAgdGhpcy51cGRhdGVDYW5VbmRvUmVkbygpO1xuICAgICAgICByZXR1cm4gdGhpcy5pbmRleCA+PSAwICYmIHRoaXMuaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aCA/IHRoaXMuaXRlbXNbdGhpcy5pbmRleF0gOiBudWxsO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGNhblVuZG8oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmluZGV4ID49IDEgJiYgdGhpcy5pbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0IGNhblJlZG8oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLmxlbmd0aCA+IDEgJiYgdGhpcy5pbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoIC0gMTtcbiAgICB9XG4gICAgcHJpdmF0ZSByZW1vdmVPbGREYXRhKCkge1xuICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggLSAxIDwgdGhpcy5tYXhpbXVtQ291bnQpIHJldHVybjtcbiAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoMCwgdGhpcy5pdGVtcy5sZW5ndGggLSB0aGlzLm1heGltdW1Db3VudCAtIDEpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVuZG9SZWRvSXRlbSB7XG4gICAgc3VydmV5SlNPTjogYW55O1xuICAgIHNlbGVjdGVkT2JqTmFtZTogc3RyaW5nO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91bmRvcmVkby50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8yNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcImpRdWVyeVwiLFwiY29tbW9uanMyXCI6XCJqcXVlcnlcIixcImNvbW1vbmpzXCI6XCJqcXVlcnlcIixcImFtZFwiOlwianF1ZXJ5XCJ9XG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQge1N1cnZleU9iamVjdEVkaXRvcn0gZnJvbSBcIi4vb2JqZWN0RWRpdG9yXCI7XG5pbXBvcnQge0lTdXJ2ZXlPYmplY3RFZGl0b3JPcHRpb25zfSBmcm9tIFwiLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5pbXBvcnQge1N1cnZleVBhZ2VzRWRpdG9yfSBmcm9tIFwiLi9wYWdlc0VkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlFbWJlZGluZ1dpbmRvd30gZnJvbSBcIi4vc3VydmV5RW1iZWRpbmdXaW5kb3dcIjtcbmltcG9ydCB7U3VydmV5T2JqZWN0c30gZnJvbSBcIi4vc3VydmV5T2JqZWN0c1wiO1xuaW1wb3J0IHtTdXJ2ZXlWZXJic30gZnJvbSBcIi4vb2JqZWN0VmVyYnNcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JTaG93V2luZG93fSBmcm9tIFwiLi9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25FZGl0b3JcIjtcbmltcG9ydCB7U3VydmV5SlNPTkVkaXRvcn0gZnJvbSBcIi4vc3VydmV5SlNPTkVkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlUZXh0V29ya2VyfSBmcm9tIFwiLi90ZXh0V29ya2VyXCJcbmltcG9ydCB7U3VydmV5VW5kb1JlZG8sIFVuZG9SZWRvSXRlbX0gZnJvbSBcIi4vdW5kb3JlZG9cIjtcbmltcG9ydCB7U3VydmV5SGVscGVyLCBPYmpUeXBlfSBmcm9tIFwiLi9zdXJ2ZXlIZWxwZXJcIjtcbmltcG9ydCB7RHJhZ0Ryb3BIZWxwZXJ9IGZyb20gXCIuL2RyYWdkcm9waGVscGVyXCI7XG5pbXBvcnQge1F1ZXN0aW9uVG9vbGJveH0gZnJvbSBcIi4vcXVlc3Rpb25Ub29sYm94XCI7XG5pbXBvcnQge1N1cnZleUpTT041fSBmcm9tIFwiLi9qc29uNVwiO1xudmFyIHRlbXBsYXRlRWRpdG9ySHRtbCA9IHJlcXVpcmUoXCJodG1sLWxvYWRlcj9pbnRlcnBvbGF0ZSF2YWwtbG9hZGVyIS4vdGVtcGxhdGVzL2VudHJ5Lmh0bWxcIik7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlGb3JEZXNpZ25lcn0gZnJvbSBcIi4vc3VydmV5anNPYmplY3RzXCJcblxuZXhwb3J0IGludGVyZmFjZSBJVG9vbGJhckl0ZW0ge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgdmlzaWJsZTogS25vY2tvdXRPYnNlcnZhYmxlPGJvb2xlYW4+IHwgYm9vbGVhbjtcbiAgICB0aXRsZTogS25vY2tvdXRPYnNlcnZhYmxlPHN0cmluZz4gfCBzdHJpbmc7XG4gICAgZW5hYmxlZD86IEtub2Nrb3V0T2JzZXJ2YWJsZTxib29sZWFuPiB8IGJvb2xlYW47XG4gICAgYWN0aW9uPzogKCkgPT4gdm9pZDtcbiAgICBjc3M/OiBLbm9ja291dE9ic2VydmFibGU8c3RyaW5nPiB8IHN0cmluZztcbiAgICBpbm5lckNzcz86IEtub2Nrb3V0T2JzZXJ2YWJsZTxzdHJpbmc+IHwgc3RyaW5nO1xuICAgIGRhdGE/OiBhbnk7XG4gICAgdGVtcGxhdGU/OiBzdHJpbmc7XG4gICAgaXRlbXM/OiBLbm9ja291dE9ic2VydmFibGVBcnJheTxJVG9vbGJhckl0ZW0+O1xufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5RWRpdG9yIGltcGxlbWVudHMgSVN1cnZleU9iamVjdEVkaXRvck9wdGlvbnMge1xuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdE5ld1N1cnZleVRleHQ6IHN0cmluZyA9IFwieyBwYWdlczogWyB7IG5hbWU6ICdwYWdlMSd9XSB9XCI7XG4gICAgcHJpdmF0ZSByZW5kZXJlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgc3VydmV5anM6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgc3VydmV5anNFeGFtcGxlOiBIVE1MRWxlbWVudDtcblxuICAgIHByaXZhdGUganNvbkVkaXRvcjogU3VydmV5SlNPTkVkaXRvcjtcbiAgICBwcml2YXRlIHNlbGVjdGVkT2JqZWN0RWRpdG9yOiBTdXJ2ZXlPYmplY3RFZGl0b3I7XG4gICAgcHJpdmF0ZSBxdWVzdGlvbkVkaXRvcldpbmRvdzogU3VydmV5UHJvcGVydHlFZGl0b3JTaG93V2luZG93O1xuICAgIHByaXZhdGUgcGFnZXNFZGl0b3I6IFN1cnZleVBhZ2VzRWRpdG9yO1xuICAgIHByaXZhdGUgc3VydmV5RW1iZWRpbmc6IFN1cnZleUVtYmVkaW5nV2luZG93O1xuICAgIHByaXZhdGUgc3VydmV5T2JqZWN0czogU3VydmV5T2JqZWN0cztcbiAgICBwcml2YXRlIHRvb2xib3hWYWx1ZTogUXVlc3Rpb25Ub29sYm94O1xuICAgIHByaXZhdGUgc3VydmV5VmVyYnM6IFN1cnZleVZlcmJzO1xuICAgIHByaXZhdGUgdW5kb1JlZG86IFN1cnZleVVuZG9SZWRvO1xuICAgIHByaXZhdGUgc3VydmV5VmFsdWU6IFN1cnZleUZvckRlc2lnbmVyO1xuICAgIHByaXZhdGUgc2F2ZVN1cnZleUZ1bmNWYWx1ZTogKG5vOiBudW1iZXIsIG9uU2F2ZUNhbGxiYWNrOiAobm86IG51bWJlciwgaXNTdWNjZXNzOiBib29sZWFuKSA9PiB2b2lkKSA9PiB2b2lkO1xuICAgIHByaXZhdGUgb3B0aW9uczogYW55O1xuICAgIHByaXZhdGUgc3RhdGVWYWx1ZTogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIGRyYWdEcm9wSGVscGVyOiBEcmFnRHJvcEhlbHBlciA9IG51bGw7XG4gICAgcHJpdmF0ZSBzaG93SlNPTkVkaXRvclRhYlZhbHVlOiBib29sZWFuO1xuICAgIHByaXZhdGUgc2hvd1Rlc3RTdXJ2ZXlUYWJWYWx1ZTogYm9vbGVhbjtcbiAgICBwcml2YXRlIHNob3dFbWJlZGVkU3VydmV5VGFiVmFsdWU6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBzZWxlY3QyOiBhbnkgPSBudWxsO1xuICAgIHByaXZhdGUgYWx3YXlTYXZlVGV4dEluUHJvcGVydHlFZGl0b3JzVmFsdWU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHB1YmxpYyBzdXJ2ZXlJZDogc3RyaW5nID0gbnVsbDtcbiAgICBwdWJsaWMgc3VydmV5UG9zdElkOiBzdHJpbmcgPSBudWxsO1xuICAgIHB1YmxpYyBnZW5lcmF0ZVZhbGlkSlNPTkNoYW5nZWRDYWxsYmFjazogKGdlbmVyYXRlVmFsaWRKU09OOiBib29sZWFuKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBvbkNhblNob3dQcm9wZXJ0eTogU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleUVkaXRvciwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4gPSBuZXcgU3VydmV5LkV2ZW50PChzZW5kZXI6IFN1cnZleUVkaXRvciwgb3B0aW9uczogYW55KSA9PiBhbnksIGFueT4oKTtcbiAgICBwdWJsaWMgb25RdWVzdGlvbkFkZGVkOiBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHB1YmxpYyBvbkl0ZW1WYWx1ZUFkZGVkOiBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHB1YmxpYyBvbk1hdHJpeENvbHVtbkFkZGVkOiBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PiA9IG5ldyBTdXJ2ZXkuRXZlbnQ8KHNlbmRlcjogU3VydmV5RWRpdG9yLCBvcHRpb25zOiBhbnkpID0+IGFueSwgYW55PigpO1xuICAgIHB1YmxpYyBvblBhbmVsQWRkZWQ6IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXlFZGl0b3IsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXlFZGl0b3IsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAgcHVibGljIG9uTW9kaWZpZWQ6IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXlFZGl0b3IsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+ID0gbmV3IFN1cnZleS5FdmVudDwoc2VuZGVyOiBTdXJ2ZXlFZGl0b3IsIG9wdGlvbnM6IGFueSkgPT4gYW55LCBhbnk+KCk7XG4gICAga29BdXRvU2F2ZSA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuICAgIHB1YmxpYyBnZXQgaXNBdXRvU2F2ZSgpIHsgcmV0dXJuIHRoaXMua29BdXRvU2F2ZSgpO31cbiAgICBwdWJsaWMgc2V0IGlzQXV0b1NhdmUobmV3VmFsKSB7IHRoaXMua29BdXRvU2F2ZShuZXdWYWwpOyB9XG4gICAga29TaG93U3RhdGUgPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICBwdWJsaWMgZ2V0IHNob3dTdGF0ZSgpIHsgcmV0dXJuIHRoaXMua29TaG93U3RhdGUoKTt9XG4gICAgcHVibGljIHNldCBzaG93U3RhdGUobmV3VmFsKSB7IHRoaXMua29TaG93U3RhdGUobmV3VmFsKTsgfVxuXG4gICAga29Jc1Nob3dEZXNpZ25lcjogYW55O1xuICAgIGtvVmlld1R5cGU6IGFueTtcbiAgICBrb0NhbkRlbGV0ZU9iamVjdDogYW55O1xuICAgIGtvT2JqZWN0czogYW55OyBrb1NlbGVjdGVkT2JqZWN0OiBhbnk7XG4gICAga29TaG93U2F2ZUJ1dHRvbjogYW55O1xuICAgIGtvR2VuZXJhdGVWYWxpZEpTT046IGFueTsga29TaG93T3B0aW9uczogYW55OyBrb1Rlc3RTdXJ2ZXlXaWR0aDogYW55OyBrb0Rlc2lnbmVySGVpZ2h0OiBhbnk7XG4gICAgc2VsZWN0RGVzaWduZXJDbGljazogYW55OyBzZWxlY3RFZGl0b3JDbGljazogYW55OyBzZWxlY3RUZXN0Q2xpY2s6IGFueTsgc2VsZWN0RW1iZWRDbGljazogYW55O1xuICAgIGdlbmVyYXRlVmFsaWRKU09OQ2xpY2s6IGFueTsgZ2VuZXJhdGVSZWFkYWJsZUpTT05DbGljazogYW55O1xuICAgIGRvVW5kb0NsaWNrOiBhbnk7IGRvUmVkb0NsaWNrOiBhbnk7XG4gICAgZGVsZXRlT2JqZWN0Q2xpY2s6IGFueTtcbiAgICBrb1N0YXRlID0ga28ub2JzZXJ2YWJsZShcIlwiKTtcbiAgICBydW5TdXJ2ZXlDbGljazogYW55OyBlbWJlZGluZ1N1cnZleUNsaWNrOiBhbnk7XG4gICAgc2F2ZUJ1dHRvbkNsaWNrOiBhbnk7XG4gICAgZHJhZ2dpbmdUb29sYm94SXRlbTogYW55OyBjbGlja1Rvb2xib3hJdGVtOiBhbnk7XG4gICAgZHJhZ0VuZDogYW55O1xuXG4gICAgY29uc3RydWN0b3IocmVuZGVyZWRFbGVtZW50OiBhbnkgPSBudWxsLCBvcHRpb25zOiBhbnkgPSBudWxsKSB7XG5cbiAgICAgICAgdGhpcy5rb1Nob3dPcHRpb25zID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmtvR2VuZXJhdGVWYWxpZEpTT04gPSBrby5vYnNlcnZhYmxlKHRydWUpO1xuICAgICAgICB0aGlzLmtvRGVzaWduZXJIZWlnaHQgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5rb0NhbkRlbGV0ZU9iamVjdCA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLmtvU2hvd1NhdmVCdXR0b24gPSBrby5vYnNlcnZhYmxlKGZhbHNlKTtcbiAgICAgICAgdGhpcy5rb1Rlc3RTdXJ2ZXlXaWR0aCA9IGtvLm9ic2VydmFibGUoXCIxMDAlXCIpO1xuICAgICAgICB0aGlzLnNhdmVCdXR0b25DbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5kb1NhdmUoKTsgfTtcbiAgICAgICAgdGhpcy5rb09iamVjdHMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkT2JqZWN0ID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWRPYmplY3Quc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnNlbGVjdGVkT2JqZWN0Q2hhbmdlZChuZXdWYWx1ZSAhPSBudWxsID8gbmV3VmFsdWUudmFsdWUgOiBudWxsKTsgfSk7XG4gICAgICAgIHRoaXMua29HZW5lcmF0ZVZhbGlkSlNPTi5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXNlbGYub3B0aW9ucykgc2VsZi5vcHRpb25zID0ge307XG4gICAgICAgICAgICBzZWxmLm9wdGlvbnMuZ2VuZXJhdGVWYWxpZEpTT04gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIGlmIChzZWxmLmdlbmVyYXRlVmFsaWRKU09OQ2hhbmdlZENhbGxiYWNrKSBzZWxmLmdlbmVyYXRlVmFsaWRKU09OQ2hhbmdlZENhbGxiYWNrKG5ld1ZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cyA9IG5ldyBTdXJ2ZXlPYmplY3RzKHRoaXMua29PYmplY3RzLCB0aGlzLmtvU2VsZWN0ZWRPYmplY3QpO1xuICAgICAgICB0aGlzLnVuZG9SZWRvID0gbmV3IFN1cnZleVVuZG9SZWRvKCk7XG5cbiAgICAgICAgdGhpcy5zdXJ2ZXlWZXJicyA9IG5ldyBTdXJ2ZXlWZXJicyhmdW5jdGlvbiAoKSB7IHNlbGYuc2V0TW9kaWZpZWQoKTsgfSk7XG5cbiAgICAgICAgdGhpcy5zZWxlY3RlZE9iamVjdEVkaXRvciA9IG5ldyBTdXJ2ZXlPYmplY3RFZGl0b3IodGhpcyk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3Iub25DYW5TaG93UHJvcGVydHlDYWxsYmFjayA9IGZ1bmN0aW9uIChvYmplY3Q6IGFueSwgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHkpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLm9uQ2FuU2hvd09iamVjdFByb3BlcnR5KG9iamVjdCwgcHJvcGVydHkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3Iub25Qcm9wZXJ0eVZhbHVlQ2hhbmdlZC5hZGQoKHNlbmRlciwgb3B0aW9ucykgPT4ge1xuICAgICAgICAgICAgc2VsZi5vblByb3BlcnR5VmFsdWVDaGFuZ2VkKG9wdGlvbnMucHJvcGVydHksIG9wdGlvbnMub2JqZWN0LCBvcHRpb25zLm5ld1ZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucXVlc3Rpb25FZGl0b3JXaW5kb3cgPSBuZXcgU3VydmV5UHJvcGVydHlFZGl0b3JTaG93V2luZG93KCk7XG4gICAgICAgIHRoaXMucXVlc3Rpb25FZGl0b3JXaW5kb3cub25DYW5TaG93UHJvcGVydHlDYWxsYmFjayA9IGZ1bmN0aW9uIChvYmplY3Q6IGFueSwgcHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHkpIHtcbiAgICAgICAgICAgIHJldHVybiBzZWxmLm9uQ2FuU2hvd09iamVjdFByb3BlcnR5KG9iamVjdCwgcHJvcGVydHkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFnZXNFZGl0b3IgPSBuZXcgU3VydmV5UGFnZXNFZGl0b3IoKCkgPT4geyBzZWxmLmFkZFBhZ2UoKTsgfSwgKHBhZ2U6IFN1cnZleS5QYWdlKSA9PiB7IHNlbGYuc3VydmV5T2JqZWN0cy5zZWxlY3RPYmplY3QocGFnZSk7IH0sXG4gICAgICAgICAgICAoaW5kZXhGcm9tOiBudW1iZXIsIGluZGV4VG86IG51bWJlcikgPT4geyBzZWxmLm1vdmVQYWdlKGluZGV4RnJvbSwgaW5kZXhUbyk7IH0sIChwYWdlOiBTdXJ2ZXkuUGFnZSkgPT4geyBzZWxmLmRlbGV0ZUN1cnJlbnRPYmplY3QoKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmcgPSBuZXcgU3VydmV5RW1iZWRpbmdXaW5kb3coKTtcbiAgICAgICAgdGhpcy50b29sYm94VmFsdWUgPSBuZXcgUXVlc3Rpb25Ub29sYm94KHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMucXVlc3Rpb25UeXBlcyA/IHRoaXMub3B0aW9ucy5xdWVzdGlvblR5cGVzIDogbnVsbCk7XG5cbiAgICAgICAgdGhpcy5rb1ZpZXdUeXBlID0ga28ub2JzZXJ2YWJsZShcImRlc2lnbmVyXCIpO1xuICAgICAgICB0aGlzLmtvSXNTaG93RGVzaWduZXIgPSBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmtvVmlld1R5cGUoKSA9PSBcImRlc2lnbmVyXCI7IH0pO1xuICAgICAgICB0aGlzLnNlbGVjdERlc2lnbmVyQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuc2hvd0Rlc2lnbmVyKCk7IH07XG4gICAgICAgIHRoaXMuc2VsZWN0RWRpdG9yQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuc2hvd0pzb25FZGl0b3IoKTsgfTtcbiAgICAgICAgdGhpcy5zZWxlY3RUZXN0Q2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYuc2hvd1Rlc3RTdXJ2ZXkoKTsgfTtcbiAgICAgICAgdGhpcy5zZWxlY3RFbWJlZENsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLnNob3dFbWJlZEVkaXRvcigpOyB9O1xuICAgICAgICB0aGlzLmdlbmVyYXRlVmFsaWRKU09OQ2xpY2sgPSBmdW5jdGlvbiAoKSB7IHNlbGYua29HZW5lcmF0ZVZhbGlkSlNPTih0cnVlKTsgfTtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVJlYWRhYmxlSlNPTkNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmtvR2VuZXJhdGVWYWxpZEpTT04oZmFsc2UpOyB9O1xuICAgICAgICB0aGlzLnJ1blN1cnZleUNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLnNob3dMaXZlU3VydmV5KCk7IH07XG4gICAgICAgIHRoaXMuZW1iZWRpbmdTdXJ2ZXlDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5zaG93U3VydmV5RW1iZWRpbmcoKTsgfTtcbiAgICAgICAgdGhpcy5kZWxldGVPYmplY3RDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5kZWxldGVDdXJyZW50T2JqZWN0KCk7IH07XG4gICAgICAgIHRoaXMuZHJhZ2dpbmdUb29sYm94SXRlbSA9IGZ1bmN0aW9uIChpdGVtLCBlKSB7IHNlbGYuZG9EcmFnZ2luZ1Rvb2xib3hJdGVtKGl0ZW0uanNvbiwgZSk7IH07XG4gICAgICAgIHRoaXMuY2xpY2tUb29sYm94SXRlbSA9IGZ1bmN0aW9uIChpdGVtKSB7IHNlbGYuZG9DbGlja1Rvb2xib3hJdGVtKGl0ZW0uanNvbik7IH07XG4gICAgICAgIHRoaXMuZHJhZ0VuZCA9IGZ1bmN0aW9uIChpdGVtLCBlKSB7IHNlbGYuZHJhZ0Ryb3BIZWxwZXIuZW5kKCk7IH07XG5cbiAgICAgICAgdGhpcy5kb1VuZG9DbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5kb1VuZG9SZWRvKHNlbGYudW5kb1JlZG8udW5kbygpKTsgfTtcbiAgICAgICAgdGhpcy5kb1JlZG9DbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5kb1VuZG9SZWRvKHNlbGYudW5kb1JlZG8ucmVkbygpKTsgfTtcblxuICAgICAgICB0aGlzLmpzb25FZGl0b3IgPSBuZXcgU3VydmV5SlNPTkVkaXRvcigpO1xuXG4gICAgICAgIGlmIChyZW5kZXJlZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKHJlbmRlcmVkRWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRleHQgPSBcIlwiO1xuXG4gICAgICAgIHRoaXMudG9vbGJhckl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgaWQ6ICdzdmQtdW5kbycsXG4gICAgICAgICAgICB2aXNpYmxlOiB0aGlzLmtvSXNTaG93RGVzaWduZXIsXG4gICAgICAgICAgICBlbmFibGVkOiB0aGlzLnVuZG9SZWRvLmtvQ2FuVW5kbyxcbiAgICAgICAgICAgIGFjdGlvbjogdGhpcy5kb1VuZG9DbGljayxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLmdldExvY1N0cmluZygnZWQudW5kbycpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRvb2xiYXJJdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiAnc3ZkLXJlZG8nLFxuICAgICAgICAgICAgdmlzaWJsZTogdGhpcy5rb0lzU2hvd0Rlc2lnbmVyLFxuICAgICAgICAgICAgZW5hYmxlZDogdGhpcy51bmRvUmVkby5rb0NhblJlZG8sXG4gICAgICAgICAgICBhY3Rpb246IHRoaXMuZG9SZWRvQ2xpY2ssXG4gICAgICAgICAgICB0aXRsZTogdGhpcy5nZXRMb2NTdHJpbmcoJ2VkLnJlZG8nKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50b29sYmFySXRlbXMucHVzaCh7XG4gICAgICAgICAgICBpZDogJ3N2ZC1vcHRpb25zJyxcbiAgICAgICAgICAgIHZpc2libGU6IGtvLmNvbXB1dGVkKCgpID0+IHRoaXMua29Jc1Nob3dEZXNpZ25lcigpICYmIHRoaXMua29TaG93T3B0aW9ucygpKSxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLmdldExvY1N0cmluZygnZWQub3B0aW9ucycpLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdzdmQtdG9vbGJhci1vcHRpb25zJyxcbiAgICAgICAgICAgIGl0ZW1zOiBrby5vYnNlcnZhYmxlQXJyYXkoW1xuICAgICAgICAgICAgICAgIHsgaWQ6ICdzdmQtdmFsaWQtanNvbicsIHZpc2libGU6IHRydWUsIGNzczoga28uY29tcHV0ZWQoKCkgPT4gKHRoaXMua29HZW5lcmF0ZVZhbGlkSlNPTigpID8gJ2FjdGl2ZScgOiAnJykpLCBhY3Rpb246IHRoaXMuZ2VuZXJhdGVWYWxpZEpTT05DbGljaywgdGl0bGU6IHRoaXMuZ2V0TG9jU3RyaW5nKCdlZC5nZW5lcmF0ZVZhbGlkSlNPTicpIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogJ3N2ZC1yZWFkYWJsZS1qc29uJywgdmlzaWJsZTogdHJ1ZSwgY3NzOiBrby5jb21wdXRlZCgoKSA9PiAoIXRoaXMua29HZW5lcmF0ZVZhbGlkSlNPTigpID8gJ2FjdGl2ZScgOiAnJykpLCBhY3Rpb246IHRoaXMuZ2VuZXJhdGVSZWFkYWJsZUpTT05DbGljaywgdGl0bGU6IHRoaXMuZ2V0TG9jU3RyaW5nKCdlZC5nZW5lcmF0ZVJlYWRhYmxlSlNPTicpIH1cbiAgICAgICAgICAgIF0pXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnRvb2xiYXJJdGVtcy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiAnc3ZkLXRlc3QnLFxuICAgICAgICAgICAgdmlzaWJsZToga28uY29tcHV0ZWQoKCkgPT4gdGhpcy5rb1ZpZXdUeXBlKCkgPT09ICd0ZXN0JyksXG4gICAgICAgICAgICB0aXRsZToga28uY29tcHV0ZWQoKCkgPT4gdGhpcy5nZXRMb2NTdHJpbmcoJ2VkLnRlc3RTdXJ2ZXlXaWR0aCcpICsgJyAnICsgdGhpcy5rb1Rlc3RTdXJ2ZXlXaWR0aCgpKSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnc3ZkLXRvb2xiYXItb3B0aW9ucycsXG4gICAgICAgICAgICBpdGVtczoga28ub2JzZXJ2YWJsZUFycmF5KFtcbiAgICAgICAgICAgICAgICB7IGlkOiAnc3ZkLTEwMC1qc29uJywgdmlzaWJsZTogdHJ1ZSwgYWN0aW9uOiAoKSA9PiB0aGlzLmtvVGVzdFN1cnZleVdpZHRoKCcxMDAlJyksIHRpdGxlOiAnMTAwJScgfSxcbiAgICAgICAgICAgICAgICB7IGlkOiAnc3ZkLTEyMDBweC1qc29uJywgdmlzaWJsZTogdHJ1ZSwgYWN0aW9uOiAoKSA9PiB0aGlzLmtvVGVzdFN1cnZleVdpZHRoKCcxMjAwcHgnKSwgdGl0bGU6ICcxMjAwcHgnIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogJ3N2ZC0xMDAwcHgtanNvbicsIHZpc2libGU6IHRydWUsIGFjdGlvbjogKCkgPT4gdGhpcy5rb1Rlc3RTdXJ2ZXlXaWR0aCgnMTAwMHB4JyksIHRpdGxlOiAnMTAwMHB4JyB9LFxuICAgICAgICAgICAgICAgIHsgaWQ6ICdzdmQtODAwcHgtanNvbicsIHZpc2libGU6IHRydWUsIGFjdGlvbjogKCkgPT4gdGhpcy5rb1Rlc3RTdXJ2ZXlXaWR0aCgnODAwcHgnKSwgdGl0bGU6ICc4MDBweCcgfSxcbiAgICAgICAgICAgICAgICB7IGlkOiAnc3ZkLTYwMHB4LWpzb24nLCB2aXNpYmxlOiB0cnVlLCBhY3Rpb246ICgpID0+IHRoaXMua29UZXN0U3VydmV5V2lkdGgoJzYwMHB4JyksIHRpdGxlOiAnNjAwcHgnIH0sXG4gICAgICAgICAgICAgICAgeyBpZDogJ3N2ZC00MDBweC1qc29uJywgdmlzaWJsZTogdHJ1ZSwgYWN0aW9uOiAoKSA9PiB0aGlzLmtvVGVzdFN1cnZleVdpZHRoKCc0MDBweCcpLCB0aXRsZTogJzQwMHB4JyB9LFxuICAgICAgICAgICAgXSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudG9vbGJhckl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgaWQ6ICdzdmQtc2F2ZScsXG4gICAgICAgICAgICB2aXNpYmxlOiB0aGlzLmtvU2hvd1NhdmVCdXR0b24sXG4gICAgICAgICAgICBhY3Rpb246IHRoaXMuc2F2ZUJ1dHRvbkNsaWNrLFxuICAgICAgICAgICAgaW5uZXJDc3M6ICdzdmRfc2F2ZV9idG4nLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0TG9jU3RyaW5nKCdlZC5zYXZlU3VydmV5JylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudG9vbGJhckl0ZW1zLnB1c2goe1xuICAgICAgICAgICAgaWQ6ICdzdmQtc3RhdGUnLFxuICAgICAgICAgICAgdmlzaWJsZTogdGhpcy5rb1Nob3dTdGF0ZSxcbiAgICAgICAgICAgIGNzczogJ3N2ZF9zdGF0ZScsXG4gICAgICAgICAgICBpbm5lckNzczoga28uY29tcHV0ZWQoKCkgPT4gJ2ljb24tJyArIHRoaXMua29TdGF0ZSgpKSxcbiAgICAgICAgICAgIHRpdGxlOiBrby5jb21wdXRlZCgoKSA9PiB0aGlzLmtvU3RhdGUoKSAmJiAodGhpcy5rb1N0YXRlKCkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLmtvU3RhdGUoKS5zbGljZSgxKSkpLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdzdmQtdG9vbGJhci1zdGF0ZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSkge1xuICAgICAgICBpZighb3B0aW9ucykgb3B0aW9ucyA9IHsgZ2VuZXJhdGVWYWxpZEpTT046IHRydWUgfTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5zaG93SlNPTkVkaXRvclRhYlZhbHVlID0gdHlwZW9mIChvcHRpb25zLnNob3dKU09ORWRpdG9yVGFiKSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLnNob3dKU09ORWRpdG9yVGFiIDogdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93VGVzdFN1cnZleVRhYlZhbHVlID0gdHlwZW9mIChvcHRpb25zLnNob3dUZXN0U3VydmV5VGFiKSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLnNob3dUZXN0U3VydmV5VGFiIDogdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93RW1iZWRlZFN1cnZleVRhYlZhbHVlID0gdHlwZW9mIChvcHRpb25zLnNob3dFbWJlZGVkU3VydmV5VGFiKSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLnNob3dFbWJlZGVkU3VydmV5VGFiIDogZmFsc2U7XG4gICAgICAgIHRoaXMua29TaG93T3B0aW9ucyh0eXBlb2YgKG9wdGlvbnMuc2hvd09wdGlvbnMpICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMuc2hvd09wdGlvbnMgOiBmYWxzZSk7XG4gICAgICAgIHRoaXMua29HZW5lcmF0ZVZhbGlkSlNPTih0aGlzLm9wdGlvbnMuZ2VuZXJhdGVWYWxpZEpTT04pO1xuICAgICAgICB0aGlzLmlzQXV0b1NhdmUgPSB0eXBlb2YgKG9wdGlvbnMuaXNBdXRvU2F2ZSkgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5pc0F1dG9TYXZlIDogZmFsc2U7XG4gICAgICAgIGlmKG9wdGlvbnMuZGVzaWduZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMua29EZXNpZ25lckhlaWdodChvcHRpb25zLmRlc2lnbmVySGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgICBpZihvcHRpb25zLm9iamVjdHNJbnRlbmQpIHtcbiAgICAgICAgICAgIFN1cnZleU9iamVjdHMuaW50ZW5kID0gb3B0aW9ucy5vYmplY3RzSW50ZW5kO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMua29EZXNpZ25lckhlaWdodCgpXG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc3VydmV5KCk6IFN1cnZleUZvckRlc2lnbmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VydmV5VmFsdWU7XG4gICAgfVxuICAgIHB1YmxpYyByZW5kZXIoZWxlbWVudDogYW55ID0gbnVsbCwgb3B0aW9uczogYW55ID0gbnVsbCkge1xuICAgICAgICBpZiAob3B0aW9ucykgdGhpcy5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50ID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlZEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQgPSB0aGlzLnJlbmRlcmVkRWxlbWVudDtcbiAgICAgICAgaWYgKCFlbGVtZW50KSByZXR1cm47XG4gICAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gdGVtcGxhdGVFZGl0b3JIdG1sO1xuICAgICAgICBzZWxmLmFwcGx5QmluZGluZygpO1xuICAgIH1cbiAgICBwdWJsaWMgbG9hZFN1cnZleShzdXJ2ZXlJZDogc3RyaW5nKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgbmV3IFN1cnZleS5keFN1cnZleVNlcnZpY2UoKS5sb2FkU3VydmV5KHN1cnZleUlkLCBmdW5jdGlvbiAoc3VjY2VzczogYm9vbGVhbiwgcmVzdWx0OiBzdHJpbmcsIHJlc3BvbnNlOiBhbnkpIHtcbiAgICAgICAgICAgIGlmIChzdWNjZXNzICYmIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHNlbGYudGV4dCA9IEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHRleHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmtvSXNTaG93RGVzaWduZXIoKSkgcmV0dXJuIHRoaXMuZ2V0U3VydmV5VGV4dEZyb21EZXNpZ25lcigpO1xuICAgICAgICByZXR1cm4gdGhpcy5qc29uRWRpdG9yLnRleHQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgdGV4dCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlVGV4dCh2YWx1ZSwgdHJ1ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBjaGFuZ2VUZXh0KHZhbHVlOiBzdHJpbmcsIGNsZWFyU3RhdGUgPSBmYWxzZSkge1xuICAgICAgICB2YXIgdGV4dFdvcmtlciA9IG5ldyBTdXJ2ZXlUZXh0V29ya2VyKHZhbHVlKTtcbiAgICAgICAgaWYgKHRleHRXb3JrZXIuaXNKc29uQ29ycmVjdCkge1xuICAgICAgICAgICAgdGhpcy5pbml0U3VydmV5KG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdCh0ZXh0V29ya2VyLnN1cnZleSkpO1xuICAgICAgICAgICAgdGhpcy5zaG93RGVzaWduZXIoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0VW5kb1JlZG9DdXJyZW50U3RhdGUoY2xlYXJTdGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFRleHRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmtvVmlld1R5cGUoXCJlZGl0b3JcIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCB0b29sYm94KCk6IFF1ZXN0aW9uVG9vbGJveCB7IHJldHVybiB0aGlzLnRvb2xib3hWYWx1ZTsgfVxuICAgIHB1YmxpYyB0b29sYmFySXRlbXMgPSBrby5vYnNlcnZhYmxlQXJyYXk8SVRvb2xiYXJJdGVtPigpO1xuICAgIHB1YmxpYyBnZXQgY3VzdG9tVG9vbGJveFF1ZXN0aW9uTWF4Q291bnQoKTogbnVtYmVyIHsgcmV0dXJuIHRoaXMudG9vbGJveC5jb3BpZWRJdGVtTWF4Q291bnQ7IH1cbiAgICBwdWJsaWMgc2V0IGN1c3RvbVRvb2xib3hRdWVzdGlvbk1heENvdW50KHZhbHVlOiBudW1iZXIpIHsgdGhpcy50b29sYm94LmNvcGllZEl0ZW1NYXhDb3VudCA9IHZhbHVlOyB9XG4gICAgcHVibGljIGdldCBzdGF0ZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5zdGF0ZVZhbHVlOyB9XG4gICAgcHJvdGVjdGVkIHNldFN0YXRlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zdGF0ZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMua29TdGF0ZSh0aGlzLnN0YXRlKTtcbiAgICB9XG4gICAgc2F2ZU5vOiBudW1iZXIgPSAwO1xuICAgIHByb3RlY3RlZCBkb1NhdmUoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXCJzYXZpbmdcIik7XG4gICAgICAgIGlmICh0aGlzLnNhdmVTdXJ2ZXlGdW5jKSB7XG4gICAgICAgICAgICB0aGlzLnNhdmVObysrO1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5zYXZlU3VydmV5RnVuYyh0aGlzLnNhdmVObyxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBkb1NhdmVDYWxsYmFjayhubzogbnVtYmVyLCBpc1N1Y2Nlc3M6IGJvb2xlYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZShcInNhdmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5zYXZlTm8gPT0gbm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1N1Y2Nlc3MpIHNlbGYuc2V0U3RhdGUoXCJzYXZlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZWxzZSBUT0RPXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgc2V0TW9kaWZpZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoXCJtb2RpZmllZFwiKTtcbiAgICAgICAgdGhpcy5zZXRVbmRvUmVkb0N1cnJlbnRTdGF0ZSgpO1xuICAgICAgICB0aGlzLm9uTW9kaWZpZWQuZmlyZSh0aGlzLCBudWxsKTtcbiAgICAgICAgdGhpcy5pc0F1dG9TYXZlICYmIHRoaXMuZG9TYXZlKCk7XG4gICAgfVxuICAgIHByaXZhdGUgc2V0VW5kb1JlZG9DdXJyZW50U3RhdGUoY2xlYXJTdGF0ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChjbGVhclN0YXRlKSB7XG4gICAgICAgICAgICB0aGlzLnVuZG9SZWRvLmNsZWFyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNlbE9iaiA9IHRoaXMua29TZWxlY3RlZE9iamVjdCgpID8gdGhpcy5rb1NlbGVjdGVkT2JqZWN0KCkudmFsdWUgOiBudWxsO1xuICAgICAgICB0aGlzLnVuZG9SZWRvLnNldEN1cnJlbnQodGhpcy5zdXJ2ZXlWYWx1ZSwgc2VsT2JqID8gc2VsT2JqLm5hbWUgOiBudWxsKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBzYXZlU3VydmV5RnVuYygpIHsgcmV0dXJuIHRoaXMuc2F2ZVN1cnZleUZ1bmNWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgc2F2ZVN1cnZleUZ1bmModmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLnNhdmVTdXJ2ZXlGdW5jVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5rb1Nob3dTYXZlQnV0dG9uKHZhbHVlICE9IG51bGwgJiYgIXRoaXMuaXNBdXRvU2F2ZSk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgc2hvd09wdGlvbnMoKSB7IHJldHVybiB0aGlzLmtvU2hvd09wdGlvbnMoKTsgfVxuICAgIHB1YmxpYyBzZXQgc2hvd09wdGlvbnModmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5rb1Nob3dPcHRpb25zKHZhbHVlKTsgfVxuICAgIHB1YmxpYyBnZXQgc2hvd0pTT05FZGl0b3JUYWIoKSB7IHJldHVybiB0aGlzLnNob3dKU09ORWRpdG9yVGFiVmFsdWU7IH1cbiAgICBwdWJsaWMgc2V0IHNob3dKU09ORWRpdG9yVGFiKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuc2hvd0pTT05FZGl0b3JUYWJWYWx1ZSA9IHZhbHVlOyB9XG4gICAgcHVibGljIGdldCBzaG93VGVzdFN1cnZleVRhYigpIHsgcmV0dXJuIHRoaXMuc2hvd1Rlc3RTdXJ2ZXlUYWJWYWx1ZTsgfVxuICAgIHB1YmxpYyBzZXQgc2hvd1Rlc3RTdXJ2ZXlUYWIodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5zaG93VGVzdFN1cnZleVRhYlZhbHVlID0gdmFsdWU7IH1cbiAgICBwdWJsaWMgZ2V0IHNob3dFbWJlZGVkU3VydmV5VGFiKCkgeyByZXR1cm4gdGhpcy5zaG93RW1iZWRlZFN1cnZleVRhYlZhbHVlOyB9XG4gICAgcHVibGljIHNldCBzaG93RW1iZWRlZFN1cnZleVRhYih2YWx1ZTogYm9vbGVhbikgeyB0aGlzLnNob3dFbWJlZGVkU3VydmV5VGFiVmFsdWUgPSB2YWx1ZTsgfVxuXG4gICAgcHJvdGVjdGVkIG9uQ2FuU2hvd09iamVjdFByb3BlcnR5KG9iamVjdDogYW55LCBwcm9wZXJ0eTogU3VydmV5Lkpzb25PYmplY3RQcm9wZXJ0eSk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHsgb2JqOiBvYmplY3QsIHByb3BlcnR5OiBwcm9wZXJ0eSwgY2FuU2hvdzogdHJ1ZSB9O1xuICAgICAgICB0aGlzLm9uQ2FuU2hvd1Byb3BlcnR5LmZpcmUodGhpcywgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmNhblNob3c7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRUZXh0VmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmpzb25FZGl0b3IudGV4dCA9IHZhbHVlO1xuICAgIH1cbiAgICBwdWJsaWMgYWRkUGFnZSgpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBTdXJ2ZXlIZWxwZXIuZ2V0TmV3UGFnZU5hbWUodGhpcy5zdXJ2ZXkucGFnZXMpO1xuICAgICAgICB2YXIgcGFnZSA9IDxTdXJ2ZXkuUGFnZT50aGlzLnN1cnZleVZhbHVlLmFkZE5ld1BhZ2UobmFtZSk7XG4gICAgICAgIHRoaXMuYWRkUGFnZVRvVUkocGFnZSk7XG4gICAgICAgIHRoaXMuc2V0TW9kaWZpZWQoKTtcbiAgICB9XG4gICAgcHVibGljIGdldExvY1N0cmluZyhzdHI6IHN0cmluZykgeyByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhzdHIpOyB9XG4gICAgcHJpdmF0ZSBtb3ZlUGFnZShpbmRleEZyb206IG51bWJlciwgaW5kZXhUbzogbnVtYmVyKSB7XG4gICAgICAgIHZhciBwYWdlID0gPFN1cnZleS5QYWdlPnRoaXMuc3VydmV5LnBhZ2VzW2luZGV4RnJvbV07XG4gICAgICAgIHRoaXMuc3VydmV5LnBhZ2VzLnNwbGljZShpbmRleEZyb20sIDEpO1xuICAgICAgICB0aGlzLnN1cnZleS5wYWdlcy5zcGxpY2UoaW5kZXhUbywgMCwgcGFnZSk7XG4gICAgICAgIHRoaXMucGFnZXNFZGl0b3Iuc3VydmV5ID0gdGhpcy5zdXJ2ZXk7XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5zZWxlY3RPYmplY3QocGFnZSlcbiAgICAgICAgdGhpcy5zZXRNb2RpZmllZCgpO1xuICAgIH1cbiAgICBwcml2YXRlIGFkZFBhZ2VUb1VJKHBhZ2U6IFN1cnZleS5QYWdlKSB7XG4gICAgICAgIHRoaXMucGFnZXNFZGl0b3Iuc3VydmV5ID0gdGhpcy5zdXJ2ZXlWYWx1ZTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLmFkZFBhZ2UocGFnZSk7XG4gICAgfVxuICAgIHByaXZhdGUgZG9PblF1ZXN0aW9uQWRkZWQocXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkJhc2UsIHBhcmVudFBhbmVsOiBhbnkpIHtcbiAgICAgICAgdmFyIHBhZ2UgPSA8U3VydmV5LlBhZ2U+dGhpcy5zdXJ2ZXkuZ2V0UGFnZUJ5RWxlbWVudChxdWVzdGlvbik7XG4gICAgICAgIHZhciBvcHRpb25zID0geyBxdWVzdGlvbjogcXVlc3Rpb24sIHBhZ2U6IHBhZ2UgfTtcbiAgICAgICAgdGhpcy5vblF1ZXN0aW9uQWRkZWQuZmlyZSh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLmFkZEVsZW1lbnQocXVlc3Rpb24sIHBhcmVudFBhbmVsKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkucmVuZGVyKCk7XG4gICAgfVxuICAgIHByaXZhdGUgZG9PbkVsZW1lbnRSZW1vdmVkKHF1ZXN0aW9uOiBTdXJ2ZXkuUXVlc3Rpb25CYXNlKSB7XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5yZW1vdmVPYmplY3QocXVlc3Rpb24pO1xuICAgICAgICB0aGlzLnN1cnZleS5yZW5kZXIoKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBkb09uUGFuZWxBZGRlZChwYW5lbDogU3VydmV5LlBhbmVsLCBwYXJlbnRQYW5lbDogYW55KSB7XG4gICAgICAgIHZhciBwYWdlID0gPFN1cnZleS5QYWdlPnRoaXMuc3VydmV5LmdldFBhZ2VCeUVsZW1lbnQocGFuZWwpO1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHsgcGFuZWw6IHBhbmVsLCBwYWdlOiBwYWdlIH07XG4gICAgICAgIHRoaXMub25QYW5lbEFkZGVkLmZpcmUodGhpcywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5hZGRFbGVtZW50KHBhbmVsLCBwYXJlbnRQYW5lbCk7XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcigpO1xuICAgIH1cbiAgICBwcml2YXRlIG9uUHJvcGVydHlWYWx1ZUNoYW5nZWQocHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHksIG9iajogYW55LCBuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIHZhciBpc0RlZmF1bHQgPSBwcm9wZXJ0eS5pc0RlZmF1bHRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIG9ialtwcm9wZXJ0eS5uYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgICBpZiAocHJvcGVydHkubmFtZSA9PSBcIm5hbWVcIikge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLm5hbWVDaGFuZ2VkKG9iaik7XG4gICAgICAgICAgICBpZiAoU3VydmV5SGVscGVyLmdldE9iamVjdFR5cGUob2JqKSA9PSBPYmpUeXBlLlBhZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLmNoYW5nZU5hbWUoPFN1cnZleS5QYWdlPm9iaik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRNb2RpZmllZCgpO1xuICAgICAgICAvL1RPRE8gYWRkIGEgZmxhZyB0byBhIHByb3BlcnR5LCBtYXkgY2hhbmdlIG90aGVyIHByb3BlcnRpZXNcbiAgICAgICAgaWYocHJvcGVydHkubmFtZSA9PSBcImxvY2FsZVwiIHx8IHByb3BlcnR5Lm5hbWUgPT0gXCJoYXNDb21tZW50XCIgfHwgcHJvcGVydHkubmFtZSA9PSBcImhhc090aGVyXCIpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3IuT2JqZWN0Q2hhbmdlZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcigpO1xuICAgIH1cbiAgICBwcml2YXRlIGRvVW5kb1JlZG8oaXRlbTogVW5kb1JlZG9JdGVtKSB7XG4gICAgICAgIHRoaXMuaW5pdFN1cnZleShpdGVtLnN1cnZleUpTT04pO1xuICAgICAgICBpZiAoaXRlbS5zZWxlY3RlZE9iak5hbWUpIHtcbiAgICAgICAgICAgIHZhciBzZWxPYmogPSB0aGlzLmZpbmRPYmpCeU5hbWUoaXRlbS5zZWxlY3RlZE9iak5hbWUpO1xuICAgICAgICAgICAgaWYgKHNlbE9iaikge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5zZWxlY3RPYmplY3Qoc2VsT2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKFwibW9kaWZpZWRcIik7XG4gICAgICAgIHRoaXMuaXNBdXRvU2F2ZSAmJiB0aGlzLmRvU2F2ZSgpO1xuICAgIH1cbiAgICBwcml2YXRlIGZpbmRPYmpCeU5hbWUobmFtZTogc3RyaW5nKTogU3VydmV5LkJhc2Uge1xuICAgICAgICB2YXIgcGFnZSA9IHRoaXMuc3VydmV5LmdldFBhZ2VCeU5hbWUobmFtZSk7XG4gICAgICAgIGlmIChwYWdlKSByZXR1cm4gcGFnZTtcbiAgICAgICAgdmFyIHF1ZXN0aW9uID0gPFN1cnZleS5RdWVzdGlvbkJhc2U+dGhpcy5zdXJ2ZXkuZ2V0UXVlc3Rpb25CeU5hbWUobmFtZSk7XG4gICAgICAgIGlmIChxdWVzdGlvbikgcmV0dXJuIHF1ZXN0aW9uO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcHJpdmF0ZSBjYW5Td2l0Y2hWaWV3VHlwZShuZXdUeXBlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKG5ld1R5cGUgJiYgdGhpcy5rb1ZpZXdUeXBlKCkgPT0gbmV3VHlwZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5rb1ZpZXdUeXBlKCkgPT0gXCJkZXNpZ25lclwiKSB7XG4gICAgICAgICAgICB0aGlzLmpzb25FZGl0b3IudGV4dCA9IHRoaXMuZ2V0U3VydmV5VGV4dEZyb21EZXNpZ25lcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmtvVmlld1R5cGUoKSAhPSBcImVkaXRvclwiKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKCF0aGlzLmpzb25FZGl0b3IuaXNKc29uQ29ycmVjdCkge1xuICAgICAgICAgICAgYWxlcnQodGhpcy5nZXRMb2NTdHJpbmcoXCJlZC5jb3JyZWN0SlNPTlwiKSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0U3VydmV5KG5ldyBTdXJ2ZXkuSnNvbk9iamVjdCgpLnRvSnNvbk9iamVjdCh0aGlzLmpzb25FZGl0b3Iuc3VydmV5KSk7XG4gICAgICAgIHRoaXMuc2V0TW9kaWZpZWQoKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHB1YmxpYyBzaG93RGVzaWduZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Td2l0Y2hWaWV3VHlwZShcImRlc2lnbmVyXCIpKSByZXR1cm47XG4gICAgICAgIHRoaXMua29WaWV3VHlwZShcImRlc2lnbmVyXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgc2hvd0pzb25FZGl0b3IoKSB7XG4gICAgICAgIGlmICh0aGlzLmtvVmlld1R5cGUoKSA9PSBcImVkaXRvclwiKSByZXR1cm47XG4gICAgICAgIHRoaXMuanNvbkVkaXRvci5zaG93KHRoaXMuZ2V0U3VydmV5VGV4dEZyb21EZXNpZ25lcigpKTtcbiAgICAgICAgdGhpcy5rb1ZpZXdUeXBlKFwiZWRpdG9yXCIpO1xuICAgIH1cbiAgICBwdWJsaWMgc2hvd1Rlc3RTdXJ2ZXkoKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Td2l0Y2hWaWV3VHlwZShudWxsKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnNob3dMaXZlU3VydmV5KCk7XG4gICAgICAgIHRoaXMua29WaWV3VHlwZShcInRlc3RcIik7XG4gICAgfVxuICAgIHB1YmxpYyBzaG93RW1iZWRFZGl0b3IoKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Td2l0Y2hWaWV3VHlwZShcImVtYmVkXCIpKSByZXR1cm47XG4gICAgICAgIHRoaXMuc2hvd1N1cnZleUVtYmVkaW5nKCk7XG4gICAgICAgIHRoaXMua29WaWV3VHlwZShcImVtYmVkXCIpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFN1cnZleVRleHRGcm9tRGVzaWduZXIoKSB7XG4gICAgICAgIHZhciBqc29uID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9Kc29uT2JqZWN0KHRoaXMuc3VydmV5KTtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuZ2VuZXJhdGVWYWxpZEpTT04pIHJldHVybiBKU09OLnN0cmluZ2lmeShqc29uLCBudWxsLCAxKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdXJ2ZXlKU09ONSgpLnN0cmluZ2lmeShqc29uLCBudWxsLCAxKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZWxlY3RlZE9iamVjdENoYW5nZWQob2JqOiBTdXJ2ZXkuQmFzZSkge1xuICAgICAgICB2YXIgY2FuRGVsZXRlT2JqZWN0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPYmplY3RFZGl0b3Iuc2VsZWN0ZWRPYmplY3QgPSBvYmo7XG4gICAgICAgIHRoaXMuc3VydmV5VmVyYnMub2JqID0gb2JqO1xuICAgICAgICB2YXIgb2JqVHlwZSA9IFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9iaik7XG4gICAgICAgIGlmIChvYmpUeXBlID09IE9ialR5cGUuUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2UgPSA8U3VydmV5LlBhZ2U+b2JqO1xuICAgICAgICAgICAgY2FuRGVsZXRlT2JqZWN0ID0gdGhpcy5zdXJ2ZXkucGFnZXMubGVuZ3RoID4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqVHlwZSA9PSBPYmpUeXBlLlF1ZXN0aW9uIHx8IG9ialR5cGUgPT0gT2JqVHlwZS5QYW5lbCkge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXkuc2VsZWN0ZWRFbGVtZW50ID0gb2JqO1xuICAgICAgICAgICAgY2FuRGVsZXRlT2JqZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlID0gdGhpcy5zdXJ2ZXkuZ2V0UGFnZUJ5UXVlc3Rpb24odGhpcy5zdXJ2ZXkuc2VsZWN0ZWRFbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5LnNlbGVjdGVkRWxlbWVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb0NhbkRlbGV0ZU9iamVjdChjYW5EZWxldGVPYmplY3QpO1xuICAgICAgICAvL1NlbGVjdDIgd29yay1hcm91bmRcbiAgICAgICAgaWYodGhpcy5zZWxlY3QyKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSA8SFRNTEVsZW1lbnQ+dGhpcy5yZW5kZXJlZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWxlY3QyLW9iamVjdFNlbGVjdG9yLWNvbnRhaW5lclwiKTsgLy9UT0RPXG4gICAgICAgICAgICBpZihlbCkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5zdXJ2ZXlPYmplY3RzLmtvU2VsZWN0ZWQoKTtcbiAgICAgICAgICAgICAgICBpZihpdGVtICYmIGl0ZW0udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBlbC5pbm5lclRleHQgPSBpdGVtLnRleHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBhcHBseUJpbmRpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbmRlcmVkRWxlbWVudCA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGtvLmNsZWFuTm9kZSh0aGlzLnJlbmRlcmVkRWxlbWVudCk7XG4gICAgICAgIGtvLmFwcGx5QmluZGluZ3ModGhpcywgdGhpcy5yZW5kZXJlZEVsZW1lbnQpO1xuICAgICAgICB0aGlzLnN1cnZleWpzID0gPEhUTUxFbGVtZW50PnRoaXMucmVuZGVyZWRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VydmV5anNcIik7XG4gICAgICAgIGlmICh0aGlzLnN1cnZleWpzKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnN1cnZleWpzLm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PSA0Nikgc2VsZi5kZWxldGVRdWVzdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT0gMzggfHwgZS5rZXlDb2RlID09IDQwKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0UXVlc3Rpb24oZS5rZXlDb2RlID09IDM4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VydmV5anNFeGFtcGxlID0gPEhUTUxFbGVtZW50PnRoaXMucmVuZGVyZWRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VydmV5anNFeGFtcGxlXCIpO1xuXG4gICAgICAgIHRoaXMuaW5pdFN1cnZleShuZXcgU3VydmV5SlNPTjUoKS5wYXJzZShTdXJ2ZXlFZGl0b3IuZGVmYXVsdE5ld1N1cnZleVRleHQpKTtcbiAgICAgICAgdGhpcy5zZXRVbmRvUmVkb0N1cnJlbnRTdGF0ZSh0cnVlKTtcblxuICAgICAgICB0aGlzLmpzb25FZGl0b3IuaW5pdCgpO1xuICAgICAgICBpZihqUXVlcnkgJiYgalF1ZXJ5KClbXCJzZWxlY3QyXCJdKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdDIgPSBqUXVlcnkoXCIjb2JqZWN0U2VsZWN0b3JcIilbXCJzZWxlY3QyXCJdKCk7XG4gICAgICAgICAgICBqUXVlcnkoXCIjb2JqZWN0U2VsZWN0b3JcIikud2lkdGgoXCIxMDAlXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgaW5pdFN1cnZleShqc29uOiBhbnkpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlID0gbmV3IFN1cnZleUZvckRlc2lnbmVyKCk7XG4gICAgICAgIHRoaXMuZHJhZ0Ryb3BIZWxwZXIgPSBuZXcgRHJhZ0Ryb3BIZWxwZXIoPFN1cnZleS5JU3VydmV5PnRoaXMuc3VydmV5LCBmdW5jdGlvbiAoKSB7IHNlbGYuc2V0TW9kaWZpZWQoKSB9LCB0aGlzLnJlbmRlcmVkRWxlbWVudCk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWVbXCJzZXRKc29uT2JqZWN0XCJdKGpzb24pOyAvL1RPRE9cbiAgICAgICAgaWYgKHRoaXMuc3VydmV5VmFsdWUuaXNFbXB0eSkge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZVtcInNldEpzb25PYmplY3RcIl0obmV3IFN1cnZleUpTT041KCkucGFyc2UoU3VydmV5RWRpdG9yLmRlZmF1bHROZXdTdXJ2ZXlUZXh0KSk7IC8vVE9ET1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWVbXCJkcmFnRHJvcEhlbHBlclwiXSA9IHRoaXMuZHJhZ0Ryb3BIZWxwZXI7XG4gICAgICAgIHRoaXMuc3VydmV5LnJlbmRlcih0aGlzLnN1cnZleWpzKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLnN1cnZleSA9IHRoaXMuc3VydmV5O1xuICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLnN1cnZleSA9IHRoaXMuc3VydmV5O1xuICAgICAgICB0aGlzLnBhZ2VzRWRpdG9yLnNldFNlbGVjdGVkUGFnZSg8U3VydmV5LlBhZ2U+dGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2UpO1xuICAgICAgICB0aGlzLnN1cnZleVZlcmJzLnN1cnZleSA9IHRoaXMuc3VydmV5O1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlLm9uU2VsZWN0ZWRFbGVtZW50Q2hhbmdlZC5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBzZWxmLnN1cnZleU9iamVjdHMuc2VsZWN0T2JqZWN0KHNlbmRlcltcInNlbGVjdGVkRWxlbWVudFwiXSk7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlLm9uRWRpdFF1ZXN0aW9uLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYuc2hvd1F1ZXN0aW9uRWRpdG9yKHNlbGYua29TZWxlY3RlZE9iamVjdCgpLnZhbHVlKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUub25Db3B5UXVlc3Rpb24uYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5hZGRDdXN0b21Ub29sYm94UXVlc3Rpb24oc2VsZi5rb1NlbGVjdGVkT2JqZWN0KCkudmFsdWUpOyB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZS5vbkZhc3RDb3B5UXVlc3Rpb24uYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5mYXN0Q29weVF1ZXN0aW9uKHNlbGYua29TZWxlY3RlZE9iamVjdCgpLnZhbHVlKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUub25EZWxldGVDdXJyZW50T2JqZWN0LmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYuZGVsZXRlQ3VycmVudE9iamVjdCgpOyB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZS5vblByb2Nlc3NIdG1sLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IG9wdGlvbnMuaHRtbCA9IHNlbGYucHJvY2Vzc0h0bWwob3B0aW9ucy5odG1sKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUub25DdXJyZW50UGFnZUNoYW5nZWQuYWRkKChzZW5kZXI6IFN1cnZleS5TdXJ2ZXksIG9wdGlvbnMpID0+IHsgc2VsZi5wYWdlc0VkaXRvci5zZXRTZWxlY3RlZFBhZ2UoPFN1cnZleS5QYWdlPnNlbmRlci5jdXJyZW50UGFnZSk7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlLm9uUXVlc3Rpb25BZGRlZC5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBzZWxmLmRvT25RdWVzdGlvbkFkZGVkKG9wdGlvbnMucXVlc3Rpb24sIG9wdGlvbnMucGFyZW50UGFuZWwpOyB9KTtcbiAgICAgICAgdGhpcy5zdXJ2ZXlWYWx1ZS5vblF1ZXN0aW9uUmVtb3ZlZC5hZGQoKHNlbmRlcjogU3VydmV5LlN1cnZleSwgb3B0aW9ucykgPT4geyBzZWxmLmRvT25FbGVtZW50UmVtb3ZlZChvcHRpb25zLnF1ZXN0aW9uKTsgfSk7XG4gICAgICAgIHRoaXMuc3VydmV5VmFsdWUub25QYW5lbEFkZGVkLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYuZG9PblBhbmVsQWRkZWQob3B0aW9ucy5wYW5lbCwgb3B0aW9ucy5wYXJlbnRQYW5lbCk7IH0pO1xuICAgICAgICB0aGlzLnN1cnZleVZhbHVlLm9uUGFuZWxSZW1vdmVkLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5LCBvcHRpb25zKSA9PiB7IHNlbGYuZG9PbkVsZW1lbnRSZW1vdmVkKG9wdGlvbnMucGFuZWwpOyB9KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBwcm9jZXNzSHRtbChodG1sOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIWh0bWwpIHJldHVybiBodG1sO1xuICAgICAgICB2YXIgc2NyaXB0UmVnRXggPSAvPHNjcmlwdFxcYltePF0qKD86KD8hPFxcL3NjcmlwdD4pPFtePF0qKSo8XFwvc2NyaXB0Pi9naTtcbiAgICAgICAgd2hpbGUgKHNjcmlwdFJlZ0V4LnRlc3QoaHRtbCkpIHtcbiAgICAgICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2Uoc2NyaXB0UmVnRXgsIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICBwcml2YXRlIGRvRHJhZ2dpbmdUb29sYm94SXRlbShqc29uOiBhbnksIGUpIHtcbiAgICAgICAgdGhpcy5kcmFnRHJvcEhlbHBlci5zdGFydERyYWdUb29sYm94SXRlbShlLCB0aGlzLmdldE5ld05hbWUoanNvbltcInR5cGVcIl0pLCBqc29uKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBuZXdRdWVzdGlvbnM6IEFycmF5PGFueT4gPSBbXTtcbiAgICBwcml2YXRlIG5ld1BhbmVsczogQXJyYXk8YW55PiA9IFtdO1xuICAgIHByaXZhdGUgZG9DbGlja1Rvb2xib3hJdGVtKGpzb246IGFueSkge1xuICAgICAgICB2YXIgbmV3RWxlbWVudCA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmNyZWF0ZUNsYXNzKGpzb25bXCJ0eXBlXCJdKTtcbiAgICAgICAgbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9PYmplY3QoanNvbiwgbmV3RWxlbWVudCk7XG4gICAgICAgIHRoaXMubmV3UXVlc3Rpb25zID0gW107XG4gICAgICAgIHRoaXMubmV3UGFuZWxzID0gW107XG4gICAgICAgIHRoaXMuc2V0TmV3TmFtZXMobmV3RWxlbWVudCk7XG4gICAgICAgIHRoaXMuZG9DbGlja1F1ZXN0aW9uQ29yZShuZXdFbGVtZW50KTtcbiAgICB9XG4gICAgcHJpdmF0ZSBzZXROZXdOYW1lcyhlbGVtZW50OiBTdXJ2ZXkuSUVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5uYW1lID0gdGhpcy5nZXROZXdOYW1lKGVsZW1lbnRbXCJnZXRUeXBlXCJdKCkpO1xuICAgICAgICBpZihlbGVtZW50LmlzUGFuZWwpIHtcbiAgICAgICAgICAgIHRoaXMubmV3UGFuZWxzLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgcGFuZWwgPSA8U3VydmV5LlBhbmVsPmVsZW1lbnQ7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcGFuZWwuZWxlbWVudHMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXROZXdOYW1lcyhwYW5lbC5lbGVtZW50c1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5ld1F1ZXN0aW9ucy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0TmV3TmFtZSh0eXBlOiBzdHJpbmcpIDogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHR5cGUgPT0gXCJwYW5lbFwiID8gdGhpcy5nZXROZXdQYW5lbE5hbWUoKSA6IHRoaXMuZ2V0TmV3UXVlc3Rpb25OYW1lKCk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0TmV3UXVlc3Rpb25OYW1lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBTdXJ2ZXlIZWxwZXIuZ2V0TmV3UXVlc3Rpb25OYW1lKHRoaXMuZ2V0QWxsUXVlc3Rpb25zKCkpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldE5ld1BhbmVsTmFtZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gU3VydmV5SGVscGVyLmdldE5ld1BhbmVsTmFtZSh0aGlzLmdldEFsbFBhbmVscygpKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRBbGxRdWVzdGlvbnMoKTogQXJyYXk8YW55PiB7XG4gICAgICAgIHZhciByZXN1bHQgPSAgdGhpcy5zdXJ2ZXkuZ2V0QWxsUXVlc3Rpb25zKCk7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLm5ld1F1ZXN0aW9ucy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMubmV3UXVlc3Rpb25zW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIGdldEFsbFBhbmVscygpOiBBcnJheTxhbnk+IHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5zdXJ2ZXkucGFnZXMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFBhbmVscyh0aGlzLnN1cnZleS5wYWdlc1tpXSwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5uZXdQYW5lbHMubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLm5ld1BhbmVsc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcHJpdmF0ZSBhZGRQYW5lbHMocGFuZWw6IGFueSwgcmVzdWx0OiBBcnJheTxhbnk+KSB7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBwYW5lbC5lbGVtZW50cy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAgIGlmKCFwYW5lbC5lbGVtZW50c1tpXS5pc1BhbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhbmVsLmVsZW1lbnRzW2ldKTtcbiAgICAgICAgICAgIHRoaXMuYWRkUGFuZWxzKHBhbmVsLmVsZW1lbnRzW2ldLCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZG9DbGlja1F1ZXN0aW9uQ29yZShxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xuICAgICAgICB2YXIgcGFnZSA9IHRoaXMuc3VydmV5LmN1cnJlbnRQYWdlO1xuICAgICAgICB2YXIgaW5kZXggPSAtMTtcbiAgICAgICAgaWYgKHRoaXMuc3VydmV5LnNlbGVjdGVkRWxlbWVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICBpbmRleCA9IHBhZ2UucXVlc3Rpb25zLmluZGV4T2YodGhpcy5zdXJ2ZXkuc2VsZWN0ZWRFbGVtZW50KSArIDE7XG4gICAgICAgIH1cbiAgICAgICAgcGFnZS5hZGRRdWVzdGlvbihxdWVzdGlvbiwgaW5kZXgpO1xuICAgICAgICBpZih0aGlzLnJlbmRlcmVkRWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5kcmFnRHJvcEhlbHBlci5zY3JvbGxUb0VsZW1lbnQoPEhUTUxFbGVtZW50PnRoaXMucmVuZGVyZWRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjXCIrcXVlc3Rpb24uaWQpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldE1vZGlmaWVkKCk7XG4gICAgfVxuICAgIHByaXZhdGUgZGVsZXRlUXVlc3Rpb24oKSB7XG4gICAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMuZ2V0U2VsZWN0ZWRPYmpBc1F1ZXN0aW9uKCk7XG4gICAgICAgIGlmIChxdWVzdGlvbikge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVDdXJyZW50T2JqZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBzZWxlY3RRdWVzdGlvbihpc1VwOiBib29sZWFuKSB7XG4gICAgICAgIHZhciBxdWVzdGlvbiA9IHRoaXMuZ2V0U2VsZWN0ZWRPYmpBc1F1ZXN0aW9uKCk7XG4gICAgICAgIGlmIChxdWVzdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXlPYmplY3RzLnNlbGVjdE5leHRRdWVzdGlvbihpc1VwKVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0U2VsZWN0ZWRPYmpBc1F1ZXN0aW9uKCk6IFN1cnZleS5RdWVzdGlvbkJhc2Uge1xuICAgICAgICB2YXIgb2JqID0gdGhpcy5rb1NlbGVjdGVkT2JqZWN0KCkudmFsdWU7XG4gICAgICAgIGlmICghb2JqKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIFN1cnZleUhlbHBlci5nZXRPYmplY3RUeXBlKG9iaikgPT0gT2JqVHlwZS5RdWVzdGlvbiA/IDxTdXJ2ZXkuUXVlc3Rpb25CYXNlPihvYmopOiBudWxsO1xuICAgIH1cbiAgICBwcml2YXRlIGRlbGV0ZUN1cnJlbnRPYmplY3QoKSB7XG4gICAgICAgIHRoaXMuZGVsZXRlT2JqZWN0KHRoaXMua29TZWxlY3RlZE9iamVjdCgpLnZhbHVlKTtcbiAgICB9XG4gICAgcHVibGljIHNob3dRdWVzdGlvbkVkaXRvcihxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMucXVlc3Rpb25FZGl0b3JXaW5kb3cuc2hvdyhxdWVzdGlvbiwgZnVuY3Rpb24gKHF1ZXN0aW9uKSB7IHNlbGYub25RdWVzdGlvbkVkaXRvckNoYW5nZWQocXVlc3Rpb24pOyB9LCB0aGlzKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBvblF1ZXN0aW9uRWRpdG9yQ2hhbmdlZChxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xuICAgICAgICB0aGlzLnN1cnZleU9iamVjdHMubmFtZUNoYW5nZWQocXVlc3Rpb24pO1xuICAgICAgICB0aGlzLnNlbGVjdGVkT2JqZWN0RWRpdG9yLk9iamVjdENoYW5nZWQoKTtcbiAgICAgICAgdGhpcy5zZXRNb2RpZmllZCgpO1xuICAgICAgICB0aGlzLnN1cnZleS5yZW5kZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGFkZEN1c3RvbVRvb2xib3hRdWVzdGlvbihxdWVzdGlvbjogU3VydmV5LlF1ZXN0aW9uQmFzZSkge1xuICAgICAgICB0aGlzLnRvb2xib3guYWRkQ29waWVkSXRlbShxdWVzdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIGZhc3RDb3B5UXVlc3Rpb24ocXVlc3Rpb246IFN1cnZleS5CYXNlKSB7XG4gICAgICAgIHZhciBqc29uID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCkudG9Kc29uT2JqZWN0KHF1ZXN0aW9uKTtcbiAgICAgICAganNvbi50eXBlID0gcXVlc3Rpb24uZ2V0VHlwZSgpO1xuICAgICAgICB0aGlzLmRvQ2xpY2tUb29sYm94SXRlbSgganNvbiApO1xuICAgIH1cblxuICAgIHByaXZhdGUgZGVsZXRlT2JqZWN0KG9iajogYW55KSB7XG4gICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5yZW1vdmVPYmplY3Qob2JqKTtcbiAgICAgICAgdmFyIG9ialR5cGUgPSBTdXJ2ZXlIZWxwZXIuZ2V0T2JqZWN0VHlwZShvYmopO1xuICAgICAgICBpZiAob2JqVHlwZSA9PSBPYmpUeXBlLlBhZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5LnJlbW92ZVBhZ2Uob2JqKTtcbiAgICAgICAgICAgIHRoaXMucGFnZXNFZGl0b3IucmVtb3ZlUGFnZShvYmopO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2UucmVtb3ZlRWxlbWVudChvYmopO1xuICAgICAgICAgICAgdGhpcy5zdXJ2ZXkuc2VsZWN0ZWRFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5T2JqZWN0cy5zZWxlY3RPYmplY3QodGhpcy5zdXJ2ZXkuY3VycmVudFBhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0TW9kaWZpZWQoKTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkucmVuZGVyKCk7XG4gICAgfVxuICAgIHByaXZhdGUgc2hvd0xpdmVTdXJ2ZXkoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdXJ2ZXlqc0V4YW1wbGUpIHJldHVybjtcbiAgICAgICAgdmFyIGpzb24gPSB0aGlzLmdldFN1cnZleUpTT04oKTtcbiAgICAgICAgaWYgKGpzb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGpzb24uY29va2llTmFtZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBqc29uLmNvb2tpZU5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3VydmV5ID0gbmV3IFN1cnZleS5TdXJ2ZXkoanNvbik7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgc3VydmV5anNFeGFtcGxlUmVzdWx0cyA9IDxIVE1MRWxlbWVudD50aGlzLnJlbmRlcmVkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1cnZleWpzRXhhbXBsZVJlc3VsdHNcIik7XG4gICAgICAgICAgICB2YXIgc3VydmV5anNFeGFtcGxlcmVSdW4gPSA8SFRNTEVsZW1lbnQ+dGhpcy5yZW5kZXJlZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdXJ2ZXlqc0V4YW1wbGVyZVJ1blwiKTtcbiAgICAgICAgICAgIGlmIChzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzKSBzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBpZiAoc3VydmV5anNFeGFtcGxlcmVSdW4pIHN1cnZleWpzRXhhbXBsZXJlUnVuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHN1cnZleS5vbkNvbXBsZXRlLmFkZCgoc2VuZGVyOiBTdXJ2ZXkuU3VydmV5KSA9PiB7IGlmIChzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzKSBzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzLmlubmVySFRNTCA9IHRoaXMuZ2V0TG9jU3RyaW5nKFwiZWQuc3VydmV5UmVzdWx0c1wiKSArIEpTT04uc3RyaW5naWZ5KHN1cnZleS5kYXRhKTsgaWYgKHN1cnZleWpzRXhhbXBsZXJlUnVuKSBzdXJ2ZXlqc0V4YW1wbGVyZVJ1bi5zdHlsZS5kaXNwbGF5ID0gXCJcIjsgfSk7XG4gICAgICAgICAgICBzdXJ2ZXkucmVuZGVyKHRoaXMuc3VydmV5anNFeGFtcGxlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5anNFeGFtcGxlLmlubmVySFRNTCA9IHRoaXMuZ2V0TG9jU3RyaW5nKFwiZWQuY29ycmVjdEpTT05cIik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBzaG93U3VydmV5RW1iZWRpbmcoKSB7XG4gICAgICAgIHZhciBqc29uID0gdGhpcy5nZXRTdXJ2ZXlKU09OKCk7XG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmcuanNvbiA9IGpzb247XG4gICAgICAgIHRoaXMuc3VydmV5RW1iZWRpbmcuc3VydmV5SWQgPSB0aGlzLnN1cnZleUlkO1xuICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nLnN1cnZleVBvc3RJZCA9IHRoaXMuc3VydmV5UG9zdElkO1xuICAgICAgICB0aGlzLnN1cnZleUVtYmVkaW5nLmdlbmVyYXRlVmFsaWRKU09OID0gdGhpcy5vcHRpb25zICYmIHRoaXMub3B0aW9ucy5nZW5lcmF0ZVZhbGlkSlNPTjtcbiAgICAgICAgdGhpcy5zdXJ2ZXlFbWJlZGluZy5zaG93KCk7XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0U3VydmV5SlNPTigpOiBhbnkge1xuICAgICAgICBpZiAodGhpcy5rb0lzU2hvd0Rlc2lnbmVyKCkpIHJldHVybiBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b0pzb25PYmplY3QodGhpcy5zdXJ2ZXkpO1xuICAgICAgICBpZiAodGhpcy5qc29uRWRpdG9yLmlzSnNvbkNvcnJlY3QpIHJldHVybiBuZXcgU3VydmV5Lkpzb25PYmplY3QoKS50b0pzb25PYmplY3QodGhpcy5qc29uRWRpdG9yLnN1cnZleSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZUFubm90YXRpb25zKHRleHQ6IHN0cmluZywgZXJyb3JzOiBhbnlbXSk6IEFjZUFqYXguQW5ub3RhdGlvbltdIHtcbiAgICAgICAgdmFyIGFubm90YXRpb25zID0gbmV3IEFycmF5PEFjZUFqYXguQW5ub3RhdGlvbj4oKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBlcnJvciA9IGVycm9yc1tpXTtcbiAgICAgICAgICAgIHZhciBhbm5vdGF0aW9uOiBBY2VBamF4LkFubm90YXRpb24gPSB7IHJvdzogZXJyb3IucG9zaXRpb24uc3RhcnQucm93LCBjb2x1bW46IGVycm9yLnBvc2l0aW9uLnN0YXJ0LmNvbHVtbiwgdGV4dDogZXJyb3IudGV4dCwgdHlwZTogXCJlcnJvclwiIH07XG4gICAgICAgICAgICBhbm5vdGF0aW9ucy5wdXNoKGFubm90YXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbm5vdGF0aW9ucztcbiAgICB9XG4gICAgLy9pbXBsZW1lbnRzIElTdXJ2ZXlPYmplY3RFZGl0b3JPcHRpb25zXG4gICAgZ2V0IGFsd2F5U2F2ZVRleHRJblByb3BlcnR5RWRpdG9ycygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWx3YXlTYXZlVGV4dEluUHJvcGVydHlFZGl0b3JzVmFsdWU7ICBcbiAgICB9XG4gICAgc2V0IGFsd2F5U2F2ZVRleHRJblByb3BlcnR5RWRpdG9ycyh2YWx1ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmFsd2F5U2F2ZVRleHRJblByb3BlcnR5RWRpdG9yc1ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIG9uSXRlbVZhbHVlQWRkZWRDYWxsYmFjayhwcm9wZXJ0eU5hbWU6IHN0cmluZywgaXRlbVZhbHVlOiBTdXJ2ZXkuSXRlbVZhbHVlKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge3Byb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lLCBuZXdJdGVtOiBpdGVtVmFsdWV9O1xuICAgICAgICB0aGlzLm9uSXRlbVZhbHVlQWRkZWQuZmlyZSh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgb25NYXRyaXhEcm9wZG93bkNvbHVtbkFkZGVkQ2FsbGJhY2soY29sdW1uOiBTdXJ2ZXkuTWF0cml4RHJvcGRvd25Db2x1bW4pIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7bmV3Q29sdW1uOiBjb2x1bW59O1xuICAgICAgICB0aGlzLm9uTWF0cml4Q29sdW1uQWRkZWQuZmlyZSh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG59XG5cblN1cnZleS5TdXJ2ZXkuY3NzVHlwZSA9IFwiYm9vdHN0cmFwXCI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VkaXRvci50cyIsImltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZWRpdG9yTG9jYWxpemF0aW9uXCJcblxudmFyIGZyZW5jaFRyYW5zbGF0aW9uID0ge1xuICAvL1N0cmluZ3MgaW4gRWRpdG9yXG4gIGVkOiB7XG4gICAgYWRkTmV3UGFnZTogJ0Fqb3V0ZXIgdW5lIHBhZ2UnLFxuICAgIGNvcnJlY3RKU09OOiAnU1ZQIGNvcnJpZ2VyIGxlIGpzb24nLFxuICAgIGRlbFNlbE9iamVjdDogJ1N1cHByaW1lciBsXFwnb2JqZXQgc8OpbGVjdGlvbm7DqScsXG4gICAgZGVzaWduZXI6ICdEZXNpZ25lciBkZSBxdWVzdGlvbm5haXJlJyxcbiAgICBlbWJlZFN1cnZleTogJ0ludMOpZ3JlciBsZSBxdWVzdGlvbm5haXJlJyxcbiAgICBnZW5lcmF0ZVJlYWRhYmxlSlNPTjogJ0fDqW7DqXJlciB1biBKU09OIGxpc2libGUnLFxuICAgIGdlbmVyYXRlVmFsaWRKU09OOiAnR8OpbsOpcmVyIHVuIEpTT04gdmFsaWRlJyxcbiAgICBqc29uRWRpdG9yOiAnRWRpdGVyIEpTT04nLFxuICAgIG5ld1BhZ2VOYW1lOiAncGFnZScsXG4gICAgbmV3UXVlc3Rpb25OYW1lOiAncXVlc3Rpb24nLFxuICAgIG9wdGlvbnM6ICdPcHRpb25zJyxcbiAgICByZWRvOiAnUsOpdGFibGlyJyxcbiAgICBzYXZlU3VydmV5OiAnU2F1dmVnYXJkZXIgbGUgcXVlc3Rpb25uYWlyZScsXG4gICAgc3VydmV5UmVzdWx0czogJ1LDqXN1bHRhdCBkdSBxdWVzdGlvbm5haXJlOiAnLFxuICAgIHRlc3RTdXJ2ZXk6ICdUZXN0ZXIgbGUgcXVlc3Rpb25uYWlyZScsXG4gICAgdGVzdFN1cnZleUFnYWluOiAnVGVzdGVyIMOgIG5vdXZlYXUgbGUgcXVlc3Rpb25uYWlyZScsXG4gICAgdGVzdFN1cnZleVdpZHRoOiAnTGFyZ2V1ciBkdSBxdWVzdGlvbm5haXJlOiAnLFxuICAgIHRvb2xib3g6ICdCb2l0ZSDDoCBvdXRpbHMnLFxuICAgIHVuZG86ICdBbm51bGVyJ1xuICB9LFxuICAvL0VtYmVkIHdpbmRvd1xuICBldzoge1xuICAgIGFuZ3VsYXI6ICdVdGlsaXNlciBsYSB2ZXJzaW9uIEFuZ3VsYXInLFxuICAgIGJvb3RzdHJhcDogJ1BvdXIgQm9vdHN0cmFwIGZyYW1ld29yaycsXG4gICAganF1ZXJ5OiAnVXRpbGlzZXIgbGEgdmVyc2lvbiBqUXVlcnknLFxuICAgIGtub2Nrb3V0OiAnVXRpbGlzZXIgbGEgdmVyc2lvbiBLbm9ja291dCcsXG4gICAgbG9hZEZyb21TZXJ2ZXI6ICdDaGFyZ2VyIGxlIEpTT04gZHUgcXVlc3Rpb25uYWlyZSBkZXB1aXMgdW4gc2VydmV1cicsXG4gICAgcmVhY3Q6ICdVdGlsaXNlciBsYSB2ZXJzaW9uIFJlYWN0JyxcbiAgICBzaG93SW5XaW5kb3c6ICdBZmZpY2hlciBsZSBxdWVzdGlvbm5haXJlIGRhbnMgdW5lIGZlbsOqdHJlJyxcbiAgICBzaG93T25QYWdlOiAnQWZmaWNoZXIgbGUgcXVlc3Rpb25uYWlyZSBkYW5zIHVuZSBwYWdlJyxcbiAgICBzdGFuZGFyZDogJ1BhcyBkZSBib290c3RyYXAnLFxuICAgIHRpdGxlSHRtbDogJ0hUTUwnLFxuICAgIHRpdGxlSmF2YVNjcmlwdDogJ0phdmFTY3JpcHQnLFxuICAgIHRpdGxlU2NyaXB0OiAnU2NyaXB0cyBldCBzdHlsZXMnLFxuICAgIHZ1ZTogJ1V0aWxpc2VyIGxhIHZlcnNpb24gVnVlJ1xuICB9LFxuICAvL09wZXJhdG9yc1xuICBvcDoge1xuICAgIGNvbnRhaW5zOiAnY29udGllbnQnLFxuICAgIGVtcHR5OiAnZXN0IHZpZGUnLFxuICAgIGVxdWFsOiAnw6lnYWwnLFxuICAgIGdyZWF0ZXI6ICdzdXDDqXJpZXVyJyxcbiAgICBncmVhdGVyb3JlcXVhbDogJ3N1cMOpcmlldXIgb3Ugw6lnYWwnLFxuICAgIGxlc3M6ICdwbHVzIHBldGl0JyxcbiAgICBsZXNzb3JlcXVhbDogJ3BsdXMgcGV0aXQgb3Ugw6lnYWwnLFxuICAgIG5vdGNvbnRhaW5zOiAnbmUgY29udGllbnQgcGFzJyxcbiAgICBub3RlbXB0eTogJ25cXCdlc3QgcGFzIHZpZGUnLFxuICAgIG5vdGVxdWFsOiAnblxcJ2VzdCBwYXMgw6lnYWwnXG4gIH0sXG4gIC8vUHJvcGVydGllc1xuICBwOiB7XG4gICAgYWRkUm93VGV4dDonQm91dG9uIGFqb3V0ZXIgdW5lIGxpZ25lJyxcbiAgICBjZWxsVHlwZTogJ1R5cGUgZGUgY2VsbHVsZScsXG4gICAgY2hvaWNlczogJ0Nob2l4JyxcbiAgICBjaG9pY2VzQnlVcmw6ICdDaG9peCBwYXIgQVBJJyxcbiAgICBjaG9pY2VzT3JkZXI6ICdPcmRyZSBkZXMgY2hvaXgnLFxuICAgIGNsZWFySW52aXNpYmxlVmFsdWVzOiAnQ2FjaGVyIGxlcyB2YWxldXIgaW52aXNpYmxlcycsXG4gICAgY29sQ291bnQ6ICdOb21icmUgZGUgY29sb25uZXMnLFxuICAgIGNvbHM6ICdOb21icmUgZGUgY29scycsXG4gICAgY29sdW1uQ29sQ291bnQ6ICdOb21icmUgZGUgY29sb25uZXMnLFxuICAgIGNvbHVtbk1pbldpZHRoOiAnTGFyZ2V1ciBtaW5pbWFsZSBkZXMgY29sb25uZXMnLFxuICAgIGNvbHVtbnM6ICdDb2xvbm5lcycsXG4gICAgY29tbWVudFRleHQ6ICdEZXNjcmlwdGlvbiBjaGFtcCBjb21tZW50YWlyZScsXG4gICAgY29tcGxldGVUZXh0OiAnVGV4dGUgcXVlc3Rpb25uYWlyZSBmaW5hbGlzw6knLFxuICAgIGNvbXBsZXRlZEh0bWw6ICdIdG1sIHF1ZXN0aW9ubmFpcmUgZmluYWxpc8OpJyxcbiAgICBjb29raWVOYW1lOiAnTm9tIGR1IGNvb2tpZScsXG4gICAgZWRpdDogJ0VkaXRlcicsXG4gICAgZm9jdXNGaXJzdFF1ZXN0aW9uQXV0b21hdGljOiAnRm9jdXMgc3VyIGxhIHByZW1pw6hyZSBxdWVzdGlvbiBhdXRvbWF0aXF1ZW1lbnQnLFxuICAgIGdvTmV4dFBhZ2VBdXRvbWF0aWM6ICdBbGxlciDDoCBsYSBwYWdlIHN1aXZhbnRlIGF1dG9tYXRpcXVlbWVudCcsXG4gICAgaGFzQ29tbWVudDogJ0NoYW1wcyBjb21tZW50YWlyZSA/JyxcbiAgICBoYXNPdGhlcjogJ0Nob2l4IGF1dHJlID8nLFxuICAgIGhvcml6b250YWxTY3JvbGw6ICdTY3JvbGwgaG9yaXpvbnRhbCcsXG4gICAgaW1hZ2VIZWlnaHQ6ICdIYXV0ZXVyIGRlIGwgXFwnaW1hZ2UnLFxuICAgIGltYWdlV2lkdGg6ICdMYXJnZXVyIGRlIGxcXCdpbWFnZScsXG4gICAgaW5kZW50OiAnSW5kZW50YXRpb24nLFxuICAgIGlucHV0VHlwZTogJ1R5cGUgZGUgY2hhbXBzJyxcbiAgICBpc0FsbFJvd1JlcXVpcmVkOiAnVG91dGVzIGxlcyBsaWduZXMgc29udC1lbGxlIG9ibGlnYXRvaXJlcyA/JyxcbiAgICBpc1JlcXVpcmVkOiAnUmVxdWlzID8nLFxuICAgIGl0ZW1TaXplOiAnTm9tYnJlIG1heGltdW0gZGUgY2FyYWN0w6hyZXMnLFxuICAgIGl0ZW1zOiAnSXRlbXMnLFxuICAgIGxvY2FsZTogJ0xhbmd1ZScsXG4gICAgbWF4UmF0ZURlc2NyaXB0aW9uOiAnRGVzY3JpcHRpb24gbm90ZSBtYXhpbXVtJyxcbiAgICBtYXhTaXplOiAnVGFpbGxlIG1heGltdW0nLFxuICAgIG1pblJhdGVEZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIG5vdGUgbWluaW11bScsXG4gICAgbWluUm93Q291bnQ6ICdOb21icmUgZGUgbGlnbmUgbWluaW1hbCcsXG4gICAgbW9kZTogJ01vZGUgZFxcJ2FmZmljaGFnZScsXG4gICAgbmFtZTogJ05vbScsXG4gICAgb3B0aW9uc0NhcHRpb246ICdUZXh0ZSBwYXIgZMOpZmF1dCcsXG4gICAgb3RoZXJFcnJvclRleHQ6ICdUZXh0ZSBFcnJldXIgY2hhbXBzIGF1dHJlJyxcbiAgICBvdGhlclRleHQ6IHsgbmFtZTogJ1RleHQgYXV0cmUnLCB0aXRsZTogJ0NoYW1wIGNvbW1lbnRhaXJlIG91IGNob2l4IGF1dHJlJyB9LFxuICAgIHBhZ2VOZXh0VGV4dDogJ0JvdXRvbiBwYWdlIHN1aXZhbnRlJyxcbiAgICBwYWdlUHJldlRleHQ6ICdCb3V0b24gcGFnZSBwcsOpY8OpZGVudGUnLFxuICAgIHBhZ2VfdGl0bGU6IHsgbmFtZTogJ3RpdHJlJywgdGl0bGU6ICdUaXRyZSBkZSBsYSBwYWdlJyB9LFxuICAgIHBsYWNlSG9sZGVyOiAnUGxhY2VIb2xkZXIgKGluZGljZSBkYW5zIGxlIGNoYW1wcyknLFxuICAgIHF1ZXN0aW9uU3RhcnRJbmRleDogJ0luZGV4IGRlIG51bcOpcm90YXRpb24gZGVzIHF1ZXN0aW9uJyxcbiAgICBxdWVzdGlvblRpdGxlTG9jYXRpb246ICdFbXBsYWNlbWVudCB0aXRyZSBxdWVzdGlvbicsXG4gICAgcXVlc3Rpb25UaXRsZVRlbXBsYXRlOiB7IG5hbWU6ICdUZW1wbGF0ZSBkXFwnYWZmaWNoYWdlIGRlcyBxdWVzdGlvbicsIHRpdGxlOiAnRXhlbXBsZToge25vfSkge3RpdGxlfSB7cmVxdWlyZX06JyB9LFxuICAgIHJhdGVWYWx1ZXM6ICdCYXLDqG1lJyxcbiAgICByZW1vdmVSb3dUZXh0OiAnQm91dG9uIHN1cHByaW1lciB1bmUgbGlnbmUnLFxuICAgIHJlcXVpcmVkVGV4dDogJ1RleHRlIHBvdXIgbGVzIGNoYW1wcyByZXF1aXMnLFxuICAgIHJvd0NvdW50OidOb21icmUgZGUgbGlnbmVzJyxcbiAgICByb3dzOidOb21icmUgZGUgbGlnbmUnLFxuICAgIHNlbmRSZXN1bHRPblBhZ2VOZXh0OiAnJyxcbiAgICBzaG93Q29tcGxldGVkUGFnZTogJ1ZvaXIgbGEgcGFnZSBmb3JtdWxhaXJlIGNvbXBsw6l0w6kgPycsXG4gICAgc2hvd05hdmlnYXRpb25CdXR0b25zOiAnQm91dG9ucyBkZSBuYXZpZ2F0aW9uJyxcbiAgICBzaG93UGFnZU51bWJlcnM6ICdOdW3DqXJvdGF0aW9uIGRlcyBwYWdlcycsXG4gICAgc2hvd1BhZ2VUaXRsZXM6ICdUaXRyZSBkZXMgcGFnZXMnLFxuICAgIHNob3dQcmV2aWV3OiAnVm9pciBsYSBwcsOpdmlzdWFsaXNhdGlvbicsXG4gICAgc2hvd1Byb2dyZXNzQmFyOiAnQmFycmUgZGUgcHJvZ3Jlc3Npb24nLFxuICAgIHNob3dRdWVzdGlvbk51bWJlcnM6ICdOdW3DqXJvdGF0aW9uIGRlcyBxdWVzdGlvbnMnLFxuICAgIHNob3dUaXRsZTogJ0FmZmljaGVyIGxlIHRpdHJlJyxcbiAgICBzaXplOiAnTm9tYnJlIG1heGltdW0gZGUgY2FyYWN0w6hyZXMnLFxuICAgIHN0YXJ0V2l0aE5ld0xpbmU6ICdDb21tZW5jZXIgYXZlYyB1bmUgbm91dmVsbGUgbGlnbmUnLFxuICAgIHN0b3JlRGF0YUFzVGV4dDogJ1N0b2NrZXIgbGVzIGRvbm7DqWVzIGNvbW1lIGR1IHRleHQnLFxuICAgIHN0b3JlT3RoZXJzQXNDb21tZW50OiAnU2F1dmVnYXJkZXIgY2hvaXggYXV0cmUgY29tbWUgY29tbWVudGFpcmUnLFxuICAgIHN1cnZleUlkOiAnSWQgZHUgcXVlc3Rpb25uYWlyZScsXG4gICAgc3VydmV5UG9zdElkOiAnSWQgUE9TVCBxdWVzdGlvbm5haXJlJyxcbiAgICBzdXJ2ZXlfdGl0bGU6IHsgbmFtZTogJ3RpdHJlJywgdGl0bGU6ICdJbCBzZXJhIGFmZmljaMOpIHN1ciBjaGFxdWUgcGFnZS4nIH0sXG4gICAgdGl0bGU6IHsgbmFtZTogJ1RpdHJlJywgdGl0bGU6ICdMYWlzc2V6IHZpZGUsIHNpIG1lbWUgdGV4dGUgcXVlIGxlIFwiTm9tXCInIH0sXG4gICAgdHJpZ2dlcnM6ICdEw6ljbGVuY2hldXJzJyxcbiAgICB2YWxpZGF0b3JzOiAnVmFsaWRhdGV1cnMnLFxuICAgIHZpc2libGVJZjogJ1Zpc2libGUgc2kgJyxcbiAgICB3aWR0aDogJ0xhcmdldXInXG4gIH0sXG4gIC8vUHJvcGVydHkgRWRpdG9yc1xuICBwZToge1xuICAgIGFkZE5ldzogJ0Fqb3V0ZXIgdW4gbm91dmVhdScsXG4gICAgYWRkUm93VGV4dDogJ1RleHRlIGJvdXRvbiBham91dGVyIHVuZSBsaWduZScsXG4gICAgYXBwbHk6ICdBcHBsaXF1ZXInLFxuICAgIGNhbmNlbDogJ0FubnVsZXInLFxuICAgIGNlbGxUeXBlOiAnVHlwZSBkZSBjZWxsdWxlJyxcbiAgICBjaG9pY2VzT3JkZXI6ICdTw6lsZWN0aW9ubmVyIGxcXCdvcmRyZSBkZXMgY2hvaXgnLFxuICAgIGNsb3NlOiAnRmVybWVyJyxcbiAgICBjb2xDb3VudDogJ05vbWJyZSBkZSBjb2xvbm5lcycsXG4gICAgY29sdW1uRWRpdDogJ0VkaXRlciBsYSBjb2xvbm5lOiB7MH0nLFxuICAgIGNyZWF0ZXRyaWdnZXI6ICdWZXVpbGxleiBjcsOpZXIgdW4gZMOpY2xlbmNoZXVyJyxcbiAgICBkZWxldGU6ICdTdXBwcmltZXInLFxuICAgIGVkaXQ6ICdFZGl0ZXInLFxuICAgIGVkaXRQcm9wZXJ0eTogJ0VkaXRlciBsYSBwcm9wcmnDqXTDqSBcInswfVwiJyxcbiAgICBlbXB0eTogJzx2aWRlPicsXG4gICAgZW50ZXJOZXdWYWx1ZTogJ1ZldWlsbGV6IHNhaXNpciBsYSB2YWxldXIuJyxcbiAgICBleHByZXNzaW9uSGVscDogJ1ZldWlsbGV6IGVudHJlciB1bmUgZXhwcmVzc2lvbiBib29sw6llbm5lLiBFbGxlIGRvaXQgcmV0b3VybmVyIFZyYWkodHJ1ZSkgcG91ciBnYXJkZXIgbGEgcXVlc3Rpb24vcGFnZSB2aXNpYmxlLiBQYXIgZXhlbXBsZToge3F1ZXN0aW9uMX0gPSBcInZhbGV1cjFcIiBvciAoe3F1ZXN0aW9uMn0gPSAzIGFuZCB7cXVlc3Rpb24zfSA8IDUpJyxcbiAgICBmYXN0RW50cnk6ICdBam91dCByYXBpZGUnLFxuICAgIGZvcm1FbnRyeTogJ0Fqb3V0IHZpYSBmb3JtdWxhaXJlJyxcbiAgICBoYXNPdGhlcjogJ0hhcyBvdGhlciBpdGVtJyxcbiAgICBpbWFnZUhlaWdodDogJ0hhdXRldXIgZGUgbFxcJ2ltYWdlJyxcbiAgICBpbWFnZVdpZHRoOiAnTGFyZ2V1ciBkZSBsXFwnaW1hZ2UnLFxuICAgIGlucHV0VHlwZTogJ1R5cGUgZGUgY2hhbXAnLFxuICAgIGlzUmVxdWlyZWQ6ICdFc3QgcmVxdWlzID8nLFxuICAgIGl0ZW1zOiAnWyBFbGVtZW50czogezB9IF0nLFxuICAgIG1heFJhdGVEZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uIG5vdGUgbWF4aW11bScsXG4gICAgbWF4U2l6ZTogJ1RhaWxsZSBtYXhpbXVtIGR1IGZpY2hpZXIgZW4gb2N0ZXRzJyxcbiAgICBtaW5SYXRlRGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbiBub3RlIG1pbmltdW0nLFxuICAgIG5hbWU6ICdOb20nLFxuICAgIG5vcXVlc3Rpb25zOiAnSWwgblxcJ3kgYSBhdWN1bmUgcXVlc3Rpb24gZGFucyBsZSBxdWVzdGlvbm5haXJlLicsXG4gICAgb2s6ICdPSycsXG4gICAgb3B0aW9uc0NhcHRpb246ICdUZXh0ZSBwYXIgZMOpZmF1dCcsXG4gICAgcGxhY2VIb2xkZXI6ICdQbGFjZUhvbGRlciAoaW5kaWNlIGRhbnMgbGUgY2hhbXBzKScsXG4gICAgcHJvcGVydHlJc0VtcHR5OiAnVmV1aWxsZXogZW50cmVyIHVuZSB2YWxldXIgcG91ciBsYSBwcm9wcmnDqXTDqScsXG4gICAgcUVkaXRvclRpdGxlOiAnRWRpdGVyIGxhIHF1ZXN0aW9uOiB7MH0nLFxuICAgIHJlbW92ZUFsbDogJ1RvdXQgc3VwcHJpbWVyJyxcbiAgICByZW1vdmVSb3dUZXh0OiAnVGV4dGUgYm91dG9uIHN1cHByaW1lciB1bmUgbGlnbmUnLFxuICAgIHJlcXVpcmVkOiAnUmVxdWlzID8nLFxuICAgIHJlc2V0OiAnUsOpaW5pdGlhbGlzZXInLFxuICAgIHJvd0NvdW50OiAnTm9tYnJlIGRlIGxpZ25lcycsXG4gICAgcm93czogJ05vbWJyZSBkZSBsaWduZXMnLFxuICAgIHNob3dQcmV2aWV3OiAnTFxcJ2FwZXLDp3UgZFxcJ2ltYWdlIGVzdC1pbCBhZmZpY2jDqSA/JyxcbiAgICBzdGFydFdpdGhOZXdMaW5lOiAnQ29tbWVuY2VyIGF2ZWMgdW5lIG5vdXZlbGxlIGxpZ25lID8nLFxuICAgIHN0b3JlRGF0YUFzVGV4dDogJ1N0b2NrZXIgbGUgY29udGVudSBkdSBmaWNoaWVyIGRhbnMgbGUgcsOpc3VsdGF0IEpTT04gc291cyBmb3JtZSBkZSB0ZXh0ZScsXG4gICAgdGFiczoge1xuICAgICAgY2hvaWNlczogJ0Nob2l4JyxcbiAgICAgIGNob2ljZXNCeVVybDogJ0Nob2l4IGRlcHVpcyBhcGkgd2ViJyxcbiAgICAgIGNvbHVtbnM6ICdDb2xvbm5lcycsXG4gICAgICBmaWxlT3B0aW9uczogJ09wdGlvbnMnLFxuICAgICAgZ2VuZXJhbDogJ0fDqW7DqXJhbCcsXG4gICAgICBodG1sOiAnRWRpdGV1ciBIdG1sJyxcbiAgICAgIG1hdHJpeENob2ljZXM6ICdDaG9peCBwYXIgZGVmYXV0JyxcbiAgICAgIG11bHRpcGxlVGV4dEl0ZW1zOiAnVGV4dCBJbnB1dHMnLFxuICAgICAgcmF0ZVZhbHVlczogJ0JhcsOobWUnLFxuICAgICAgcm93czogJ0xpZ25lcycsXG4gICAgICB2aXNpYmxlSWY6ICdWaXNpYmxlIFNpJ1xuICAgIH0sXG4gICAgdGVzdFNlcnZpY2U6ICdUZXN0ZXIgbGUgc2VydmljZScsXG4gICAgdGV4dDogJ1RleHRlJyxcbiAgICB0aXRsZTogJ1RpdHJlJyxcbiAgICB0cmlnZ2VyQ29tcGxldGVUZXh0OiAnQ29tcGxldGUgdGhlIHN1cnZleSBpZiBzdWNjZWVkLicsXG4gICAgdHJpZ2dlcklzVmFyaWFibGU6ICdOZSBwbGFjZXogcGFzIGxhIHZhcmlhYmxlIGRhbnMgbGUgcsOpc3VsdGF0IGR1IHF1ZXN0aW9ubmFpcmUuJyxcbiAgICB0cmlnZ2VyTWFrZVBhZ2VzVmlzaWJsZTogJ1JlbmRyZSBsZXMgcGFnZXMgdmlzaWJsZXM6JyxcbiAgICB0cmlnZ2VyTWFrZVF1ZXN0aW9uc1Zpc2libGU6ICdSZW5kcmUgbGVzIHF1ZXN0aW9ucyB2aXNpYmxlczonLFxuICAgIHRyaWdnZXJOb3RTZXQ6ICdMZSBkw6ljbGVuY2hldXIgblxcJ2VzdCBwYXMgZMOpZmluaScsXG4gICAgdHJpZ2dlck9uOiAnT24gJyxcbiAgICB0cmlnZ2VyUnVuSWY6ICdFeMOpY3VzdGVyIHNpJyxcbiAgICB0cmlnZ2VyU2V0VG9OYW1lOiAnQ2hhbmdlciBsYSB2YWxldXIgZGU6ICcsXG4gICAgdHJpZ2dlclNldFZhbHVlOiAnw6A6ICcsXG4gICAgdmFsdWU6ICdWYWxldXInLFxuICAgIHZlcmJDaGFuZ2VQYWdlOiAnQ2hhbmdlciBkZSBwYWdlICcsXG4gICAgdmVyYkNoYW5nZVR5cGU6ICdDaGFuZ2VyIGxlIHR5cGUgJyxcbiAgICB2aXNpYmxlOiAnRXN0IHZpc2libGUgPydcbiAgfSxcbiAgLy9xdWVzdGlvblR5cGVzXG4gIHF0OiB7XG4gICAgY2hlY2tib3g6ICdDYXNlcyDDoCBjb2NoZXInLFxuICAgIGNvbW1lbnQ6ICdDb21tZW50YWlyZScsXG4gICAgZHJvcGRvd246ICdMaXN0ZSBkw6lyb3VsYW50ZScsXG4gICAgZmlsZTogJ0ZpY2hpZXInLFxuICAgIGh0bWw6ICdIdG1sJyxcbiAgICBtYXRyaXg6ICdNYXRpY2UgKGNob2l4IHVuaXF1ZSknLFxuICAgIG1hdHJpeGRyb3Bkb3duOiAnTWF0cmljZSAoY2hvaXggbXVsdGlwbGVzKScsXG4gICAgbWF0cml4ZHluYW1pYzogJ01hdHJpY2UgKExpZ25lcyBkeW5hbWlxdWVzKScsXG4gICAgbXVsdGlwbGV0ZXh0OiAnY2hhbXAgbXVsdGlsaWduZXMnLFxuICAgIHJhZGlvZ3JvdXA6ICdCb3V0b25zIHJhZGlvJyxcbiAgICByYXRpbmc6ICdFdmFsdWF0aW9uJyxcbiAgICB0ZXh0OiAnQ2hhbXAgc2ltcGxlJ1xuICB9LFxuICBzdXJ2ZXk6IHtcbiAgICBhZGRUb1Rvb2xib3g6ICdBam91dGVyIMOgIGxhIGJvw650ZSDDoCBvdXRpbHMnLFxuICAgIGNvcHk6ICdDb3BpZXInLFxuICAgIGRlbGV0ZVF1ZXN0aW9uOiAnU3VwcHJpbWVyIGxhIHF1ZXN0aW9uJyxcbiAgICBkcm9wUXVlc3Rpb246ICdEw6lwb3NlciB2b3RyZSBxdWVzdGlvbiBpY2kuJ1xuICB9XG59O1xuXG5lZGl0b3JMb2NhbGl6YXRpb24ubG9jYWxlc1tcImZyXCJdID0gZnJlbmNoVHJhbnNsYXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbG9jYWxpemF0aW9uL2ZyZW5jaC50cyIsImltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5cbnZhciBzcGFuaXNoVHJhbnNsYXRpb246IHtcbiAgICAvLyBzdHJpbmdzIGZvciBzdXJ2ZXkgdGVtcGxhdGVzXG4gICAgc3VydmV5OiB7XG4gICAgICAgIGRyb3BRdWVzdGlvbjogXCJQb3IgZmF2b3IgY29sb3F1ZSB1bmEgcHJlZ3VudGEgYXF1w61cIixcbiAgICAgICAgY29weTogXCJDb3BpYXJcIixcbiAgICAgICAgYWRkVG9Ub29sYm94OiBcIkFncmVnYXIgYWwgdG9vbGJveFwiLFxuICAgICAgICBkZWxldGVQYW5lbDogXCJFbGltaW5hciBwYW5lbFwiLFxuICAgICAgICBkZWxldGVRdWVzdGlvbjogXCJFbGltaW5hciBwcmVndW50YVwiLFxuICAgIH0sXG4gICAgLy8gc3RyaW5ncyBmb3IgcXVlc3Rpb24gdHlwZXNcbiAgICBxdDoge1xuICAgICAgICBjaGVja2JveDogXCJDaGVja2JveFwiLFxuICAgICAgICBjb21tZW50OiBcIkNvbWVudGFyaW9cIixcbiAgICAgICAgZHJvcGRvd246IFwiRHJvcGRvd25cIixcbiAgICAgICAgZmlsZTogXCJBcmNoaXZvXCIsXG4gICAgICAgIGh0bWw6IFwiSHRtbFwiLFxuICAgICAgICBtYXRyaXg6IFwiTWF0cml6IChvcGNpw7NuIMO6bmljYSlcIixcbiAgICAgICAgbWF0cml4ZHJvcGRvd246IFwiTWF0cml6IChvcGNpw7NuIG11bHRpcGxlKVwiLFxuICAgICAgICBtYXRyaXhkeW5hbWljOiBcIk1hdHJpeiAoZmlsYXMgZGluw6FtaWNhcylcIixcbiAgICAgICAgbXVsdGlwbGV0ZXh0OiBcIlRleHRvIG11bHRpcGxlXCIsXG4gICAgICAgIHBhbmVsOiBcIlBhbmVsXCIsXG4gICAgICAgIHJhZGlvZ3JvdXA6IFwiUmFkaW9ncm91cFwiLFxuICAgICAgICByYXRpbmc6IFwiUmF0aW5nXCIsXG4gICAgICAgIHRleHQ6IFwiVGV4dG8gc2ltcGxlXCIsXG4gICAgfSxcbiAgICAvLyBzdHJpbmdzIGZvciBlZGl0b3JcbiAgICBlZDoge1xuICAgICAgICBhZGROZXdQYWdlOiBcIkFncmVnYXIgbnVldmEgcMOhZ2luYVwiLFxuICAgICAgICBuZXdQYWdlTmFtZTogXCJwYWdpbmFcIixcbiAgICAgICAgbmV3UXVlc3Rpb25OYW1lOiBcInByZWd1bnRhXCIsXG4gICAgICAgIG5ld1BhbmVsTmFtZTogXCJwYW5lbFwiLFxuICAgICAgICB0ZXN0U3VydmV5OiBcIlByb2JhciBlbmN1ZXN0YVwiLFxuICAgICAgICB0ZXN0U3VydmV5QWdhaW46IFwiUHJvYmFyIGVuY3Vlc3RhIGRlIG51ZXZvXCIsXG4gICAgICAgIHRlc3RTdXJ2ZXlXaWR0aDogXCJBbmNobyBkZSBsYSBlbmN1ZXN0YTogXCIsXG4gICAgICAgIGVtYmVkU3VydmV5OiBcIkVtYmViZXIgZW5jdWVzdGFcIixcbiAgICAgICAgc2F2ZVN1cnZleTogXCJHdWFyZGFyIGVuY3Vlc3RhXCIsXG4gICAgICAgIGRlc2lnbmVyOiBcIkRpc2XDsWFkb3IgZGUgZW5jdWVzdGFcIixcbiAgICAgICAganNvbkVkaXRvcjogXCJFZGl0YXIgSlNPTlwiLFxuICAgICAgICB1bmRvOiBcIkRlc2hhY2VyXCIsXG4gICAgICAgIHJlZG86IFwiUmVoYWNlclwiLFxuICAgICAgICBvcHRpb25zOiBcIk9wY2lvbmVzXCIsXG4gICAgICAgIGdlbmVyYXRlVmFsaWRKU09OOiBcIkdlbmVyYXIgSlNPTiB2w6FsaWRvXCIsXG4gICAgICAgIGdlbmVyYXRlUmVhZGFibGVKU09OOiBcIkdlbmVyYXIgSlNPTiBsZWdpYmxlXCIsXG4gICAgICAgIHRvb2xib3g6IFwiVG9vbGJveFwiLFxuICAgICAgICBkZWxTZWxPYmplY3Q6IFwiRWxpbWluYXIgb2JqZWN0byBzZWxlY2Npb25hZG9cIixcbiAgICAgICAgY29ycmVjdEpTT046IFwiUG9yIGZhdm9yLCBjb3JyaWdlIHR1IEpTT05cIixcbiAgICAgICAgc3VydmV5UmVzdWx0czogXCJSZXN1bHRhZG9zIGRlIGVuY3Vlc3RhOiBcIixcbiAgICB9LFxuICAgIC8vIHN0cmluZ3MgZm9yIHByb3BlcnR5IGVkaXRvcnNcbiAgICBwZToge1xuICAgICAgICBhcHBseTogXCJBcGxpY2FyXCIsXG4gICAgICAgIG9rOiBcIkFjZXB0YXJcIixcbiAgICAgICAgY2FuY2VsOiBcIkNhbmNlbGFyXCIsXG4gICAgICAgIHJlc2V0OiBcIlJlaW5pY2lhclwiLFxuICAgICAgICBjbG9zZTogXCJDZXJyYXJcIixcbiAgICAgICAgZGVsZXRlOiBcIkVsaW1pbmFyXCIsXG4gICAgICAgIGFkZE5ldzogXCJBZ3JlZ2FyIG51ZXZvXCIsXG4gICAgICAgIHJlbW92ZUFsbDogXCJFbGltaW5hciB0b2RvXCIsXG4gICAgICAgIGVkaXQ6IFwiRWRpdGFyXCIsXG4gICAgICAgIGVtcHR5OiBcIjx2YWNpbz5cIixcbiAgICAgICAgZmFzdEVudHJ5OiBcIkVudHJhZGEgcsOhcGlkYVwiLFxuICAgICAgICBmb3JtRW50cnk6IFwiRW50cmFkYSBjb24gZm9ybXVsYXJpb1wiLFxuICAgICAgICB0ZXN0U2VydmljZTogXCJQcm9iYXIgZWwgc2VydmljaW9cIixcbiAgICAgICAgZXhwcmVzc2lvbkhlbHA6IFwiUG9yIGZhdm9yIGluZ3Jlc2EgdW5hIGV4cHJlc2nDs24gYm9vbGVhbmEuIERlYmUgcmV0b3JuYXIgdmVyZGFkZXJvIHBhcmEgbWFudGVuZXIgbGEgcHJlZ3VudGEvcMOhZ2luYSB2aXNpYmxlLiBQb3IgZWplbXBsbzoge3ByZWd1bnRhMX0gPSAndmFsb3IxJyBvciAoe3ByZWd1bnRhMn0gPSAzIGFuZCB7cHJlZ3VudGEzfSA8IDUpXCIsXG4gICAgICAgIHByb3BlcnR5SXNFbXB0eTogXCJQb3IgZmF2b3IgaW5ncmVzYSB1biB2YWxvciBkZW50cm8gZGUgbGEgcHJvcGllZGFkXCIsXG4gICAgICAgIHZhbHVlOiBcIlZhbG9yXCIsXG4gICAgICAgIHRleHQ6IFwiVGV4dG9cIixcbiAgICAgICAgcmVxdWlyZWQ6IFwiwr9SZXF1ZXJpZG8/XCIsXG4gICAgICAgIGNvbHVtbkVkaXQ6IFwiRWRpdGFyIGNvbHVtbmE6IHswfVwiLFxuICAgICAgICBpdGVtRWRpdDogXCJFZGl0YXIgaXRlbTogezB9XCIsXG4gICAgICAgIGhhc090aGVyOiBcIlRpZW5lIG90cm8gaXRlbVwiLFxuICAgICAgICBuYW1lOiBcIk5vbWJyZVwiLFxuICAgICAgICB0aXRsZTogXCJUw610dWxvXCIsXG4gICAgICAgIGNlbGxUeXBlOiBcIlRpcG8gZGUgY2VsZGFcIixcbiAgICAgICAgY29sQ291bnQ6IFwiQ29udGVvIGRlIGNvbHVtbmFzXCIsXG4gICAgICAgIGNob2ljZXNPcmRlcjogXCJTZWxlY2Npb25hciBvcmRlbiBkZSBvcGNpb25lc1wiLFxuICAgICAgICB2aXNpYmxlOiBcIsK/RXMgdmlzaWJsZT9cIixcbiAgICAgICAgaXNSZXF1aXJlZDogXCLCv0VzIHJlcXVlcmlkbz9cIixcbiAgICAgICAgc3RhcnRXaXRoTmV3TGluZTogXCLCv0VtcGV6YXIgZW4gdW5hIG51ZXZhIGxpbmVhP1wiLFxuICAgICAgICByb3dzOiBcIkNvbnRlbyBkZSBmaWxhc1wiLFxuICAgICAgICBwbGFjZUhvbGRlcjogXCJUZXh0byBkZSByZWZlcmVuY2lhXCIsXG4gICAgICAgIHNob3dQcmV2aWV3OiBcIsK/TW9zdHJhciB2aXN0YSBwcmV2aWEgZGUgbGEgaW1hZ2VuP1wiLFxuICAgICAgICBzdG9yZURhdGFBc1RleHQ6IFwiR3VhcmRhciBlbCBjb250ZW5pZG8gZGVsIGFyY2hpdm8gZW4gdW4gSlNPTiBjb21vIHRleHRvXCIsXG4gICAgICAgIG1heFNpemU6IFwiVGFtYcOxbyBtw6F4aW1vIGRlbCBhcmNoaXZvIGVuIGJ5dGVzXCIsXG4gICAgICAgIGltYWdlSGVpZ2h0OiBcIkFsdHVyYSBkZSBsYSBpbWFnZW5cIixcbiAgICAgICAgaW1hZ2VXaWR0aDogXCJBbmNobyBkZSBsYSBpbWFnZW5cIixcbiAgICAgICAgcm93Q291bnQ6IFwiQ29udGVvIGRlIGZpbGFzXCIsXG4gICAgICAgIGFkZFJvd1RleHQ6IFwiVGV4dG8gZGVsIGJvdMOzbiBwYXJhIGFncmVnYXIgZmlsYXNcIixcbiAgICAgICAgcmVtb3ZlUm93VGV4dDogXCJUZXh0byBkZWwgYm90w7NuIHBhcmEgZWxpbWluYXIgZmlsYXNcIixcbiAgICAgICAgbWluUmF0ZURlc2NyaXB0aW9uOiBcIkRlc2NyaXBjacOzbiBkZSBjYWxpZmljYWNpw7NuIG3DrW5pbWFcIixcbiAgICAgICAgbWF4UmF0ZURlc2NyaXB0aW9uOiBcIkRlc2NyaXBjacOzbiBkZSBjYWxpZmljYWNpw7NuIG3DoXhpbWFcIixcbiAgICAgICAgaW5wdXRUeXBlOiBcIlRpcG8gZGUgZW50cmFkYVwiLFxuICAgICAgICBvcHRpb25zQ2FwdGlvbjogXCJUw610dWxvIGRlIG9wY2nDs25cIixcbiAgICAgICAgcUVkaXRvclRpdGxlOiBcIkVkaXRhciBwcmVndW50YTogezB9XCIsXG4gICAgICAgIHRhYnM6IHtcbiAgICAgICAgICAgIGdlbmVyYWw6IFwiR2VuZXJhbFwiLFxuICAgICAgICAgICAgZmlsZU9wdGlvbnM6IFwiT3BjaW9uZXNcIixcbiAgICAgICAgICAgIGh0bWw6IFwiRWRpdG9yIGRlIEh0bWxcIixcbiAgICAgICAgICAgIGNvbHVtbnM6IFwiQ29sdW1uYXNcIixcbiAgICAgICAgICAgIHJvd3M6IFwiRmlsYXNcIixcbiAgICAgICAgICAgIGNob2ljZXM6IFwiT3BjaW9uZXNcIixcbiAgICAgICAgICAgIHZpc2libGVJZjogXCJWaXNpYmxlIHNpXCIsXG4gICAgICAgICAgICByYXRlVmFsdWVzOiBcIlZhbG9yZXMgZGUgY2FsaWZpY2FjacOzblwiLFxuICAgICAgICAgICAgY2hvaWNlc0J5VXJsOiBcIk9wY2lvbmVzIGRlc2RlIGxhIFdlYlwiLFxuICAgICAgICAgICAgbWF0cml4Q2hvaWNlczogXCJPcGNpb25lcyBwb3IgZGVmZWN0b1wiLFxuICAgICAgICAgICAgbXVsdGlwbGVUZXh0SXRlbXM6IFwiRW50cmFkYXMgZGUgdGV4dG9cIixcbiAgICAgICAgICAgIHZhbGlkYXRvcnM6IFwiVmFsaWRhZG9yZXNcIlxuICAgICAgICB9LFxuICAgICAgICBlZGl0UHJvcGVydHk6IFwiRWRpdGFyIHByb3BpZWRhZCAnezB9J1wiLFxuICAgICAgICBpdGVtczogXCJbIEl0ZW1zOiB7MH0gXVwiLFxuICAgICAgICBlbnRlck5ld1ZhbHVlOiBcIlBvciBmYXZvciwgaW5ncmVzYSBlbCB2YWxvci5cIixcbiAgICAgICAgbm9xdWVzdGlvbnM6IFwiTm8gaGF5IG5pbmd1bmEgcHJlZ3VudGEgZW4gbGEgZW5jdWVzdGEuXCIsXG4gICAgICAgIGNyZWF0ZXRyaWdnZXI6IFwiUG9yIGZhdm9yLCBjcmVhIHVuIGRpc3BhcmFkb3JcIixcbiAgICAgICAgdHJpZ2dlck9uOiBcIkVuY2VuZGlkbyBcIixcbiAgICAgICAgdHJpZ2dlck1ha2VQYWdlc1Zpc2libGU6IFwiSGFjZXIgdmlzaWJsZXMgbGFzIHDDoWdpbmFzOlwiLFxuICAgICAgICB0cmlnZ2VyTWFrZVF1ZXN0aW9uc1Zpc2libGU6IFwiSGFjZXIgdmlzaWJsZXMgbGFzIHByZWd1bnRhczpcIixcbiAgICAgICAgdHJpZ2dlckNvbXBsZXRlVGV4dDogXCJDb21wbGV0YXIgbGEgZW5jdWVzdGEsIHNpIHRpZW5lIMOpeGl0by5cIixcbiAgICAgICAgdHJpZ2dlck5vdFNldDogXCJFbCBkaXNwYXJhZG9yIG5vIGVzdMOhIHByZXBhcmFkb1wiLFxuICAgICAgICB0cmlnZ2VyUnVuSWY6IFwiRWplY3V0YXIgc2lcIixcbiAgICAgICAgdHJpZ2dlclNldFRvTmFtZTogXCJDYW1iaWFyIGVsIHZhbG9yIGRlOiBcIixcbiAgICAgICAgdHJpZ2dlclNldFZhbHVlOiBcImE6IFwiLFxuICAgICAgICB0cmlnZ2VySXNWYXJpYWJsZTogXCJObyBjb2xvY2FyIGxhIHZhcmlhYmxlIGVuIGVsIHJlc3VsdGFkbyBkZSBsYSBlbmN1ZXN0YVwiLFxuICAgICAgICB2ZXJiQ2hhbmdlVHlwZTogXCJDYW1iaWFyIHRpcG8gXCIsXG4gICAgICAgIHZlcmJDaGFuZ2VQYWdlOiBcIkNhbWJpYXIgcMOhZ2luYSBcIlxuICAgIH0sXG4gICAgLy8gc3RyaW5ncyBmb3Igb3BlcmF0b3JzXG4gICAgb3A6IHtcbiAgICAgICAgZW1wdHk6IFwiZXN0YSB2YWPDrW9cIixcbiAgICAgICAgbm90ZW1wdHk6IFwibm8gZXN0YSB2YWPDrW9cIixcbiAgICAgICAgZXF1YWw6IFwiZXMgaWd1YWwgYVwiLFxuICAgICAgICBub3RlcXVhbDogXCJubyBlcyBpZ3VhbCBhXCIsXG4gICAgICAgIGNvbnRhaW5zOiBcImNvbnRpZW5lXCIsXG4gICAgICAgIG5vdGNvbnRhaW5zOiBcIm5vIGNvbnRpZW5lXCIsXG4gICAgICAgIGdyZWF0ZXI6IFwibWF5b3JcIixcbiAgICAgICAgbGVzczogXCJtZW5vclwiLFxuICAgICAgICBncmVhdGVyb3JlcXVhbDogXCJtYXlvciBvIGlndWFsXCIsXG4gICAgICAgIGxlc3NvcmVxdWFsOiBcIm1lbm9yIG8gaWd1YWxcIlxuICAgIH0sXG4gICAgLy8gc3RyaW5ncyBmb3IgZW1iZWQgd2luZG93XG4gICAgZXc6IHtcbiAgICAgICAgYW5ndWxhcjogXCJVc2FyIHZlcnNpw7NuIHBhcmEgQW5ndWxhclwiLFxuICAgICAgICBqcXVlcnk6IFwiVXNhciB2ZXJzacOzbiBwYXJhIGpRdWVyeVwiLFxuICAgICAgICBrbm9ja291dDogXCJVc2FyIHZlcnNpw7NuIHBhcmEgS25vY2tvdXRcIixcbiAgICAgICAgcmVhY3Q6IFwiVXNhciB2ZXJzacOzbiBwYXJhIFJlYWN0XCIsXG4gICAgICAgIHZ1ZTogXCJVc2FyIHZlcnNpw7NuIHBhcmEgVnVlXCIsXG4gICAgICAgIGJvb3RzdHJhcDogXCJQYXJhIGJvb3RzdHJhcCBmcmFtZXdvcmtcIixcbiAgICAgICAgc3RhbmRhcmQ6IFwiTm8gYm9vdHN0cmFwXCIsXG4gICAgICAgIHNob3dPblBhZ2U6IFwiTW9zdHJhciBlbmN1ZXN0YSBlbiB1bmEgcMOhZ2luYVwiLFxuICAgICAgICBzaG93SW5XaW5kb3c6IFwiTW9zdHJhciBlbmN1ZXN0YSBlbiB1bmEgdmVudGFuYVwiLFxuICAgICAgICBsb2FkRnJvbVNlcnZlcjogXCJDYXJnYXIgU3VydmV5IEpTT04gZGVzZGUgZWwgc2Vydmlkb3JcIixcbiAgICAgICAgdGl0bGVTY3JpcHQ6IFwiU2NyaXB0cyB5IGVzdGlsb3NcIixcbiAgICAgICAgdGl0bGVIdG1sOiBcIkhUTUxcIixcbiAgICAgICAgdGl0bGVKYXZhU2NyaXB0OiBcIkphdmFTY3JpcHRcIlxuICAgIH0sXG4gICAgLy8gc3RyaW5ncyBvZiBwcm9wZXJ0aWVzXG4gICAgcDoge1xuICAgICAgICBuYW1lOiBcIm5vbWJyZVwiLFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgbmFtZTogXCJ0aXR1bG9cIixcbiAgICAgICAgICAgIHRpdGxlOiBcIkRlamFsbyB2YWNpbywgc2kgZXMgZWwgbWlzbW8gcXVlICdOb21icmUnXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHN1cnZleV90aXRsZToge1xuICAgICAgICAgICAgbmFtZTogXCJ0aXR1bG9cIixcbiAgICAgICAgICAgIHRpdGxlOiBcIlPDqSBtb3N0cmFyw6EgZW4gY2FkYSBww6FnaW5hLlwiXG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2VfdGl0bGU6IHtcbiAgICAgICAgICAgIG5hbWU6IFwidGl0dWxvXCIsXG4gICAgICAgICAgICB0aXRsZTogXCJUw610dWxvIGRlIHDDoWdpbmFcIlxuICAgICAgICB9LFxuICAgIH1cbn07XG5cbmVkaXRvckxvY2FsaXphdGlvbi5sb2NhbGVzW1wiZXNcIl0gPSBzcGFuaXNoVHJhbnNsYXRpb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbG9jYWxpemF0aW9uL3NwYW5pc2gudHMiLCJpbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuaW1wb3J0IHsgU3VydmV5RWRpdG9yIH0gZnJvbSBcIi4vZWRpdG9yXCI7XG5cbmNsYXNzIFNlcnZpY2VBUEkgZXh0ZW5kcyBTdXJ2ZXkuZHhTdXJ2ZXlTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhc2VVcmw6IHN0cmluZywgcHJpdmF0ZSBhY2Nlc3NLZXk6IHN0cmluZykge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBY3RpdmVTdXJ2ZXlzKG9uTG9hZDogKHN1Y2Nlc3M6IGJvb2xlYW4sIHJlc3VsdDogc3RyaW5nLCByZXNwb25zZTogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oJ0dFVCcsIHRoaXMuYmFzZVVybCArICcvZ2V0QWN0aXZlP2FjY2Vzc0tleT0nICsgdGhpcy5hY2Nlc3NLZXkpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHhoci5yZXNwb25zZSA/IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKSA6IG51bGw7XG4gICAgICAgICAgICBvbkxvYWQoeGhyLnN0YXR1cyA9PSAyMDAsIHJlc3VsdCwgeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgfTtcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9XG4gICAgcHVibGljIGNyZWF0ZVN1cnZleShuYW1lOiBzdHJpbmcsIG9uQ3JlYXRlOiAoc3VjY2VzczogYm9vbGVhbiwgcmVzdWx0OiBzdHJpbmcsIHJlc3BvbnNlOiBhbnkpID0+IHZvaWQpIHtcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB4aHIub3BlbignR0VUJywgdGhpcy5iYXNlVXJsICsgJy9jcmVhdGU/YWNjZXNzS2V5PScgKyB0aGlzLmFjY2Vzc0tleSArIFwiJm5hbWU9XCIgKyBuYW1lKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB4aHIucmVzcG9uc2UgPyBKU09OLnBhcnNlKHhoci5yZXNwb25zZSkgOiBudWxsXG4gICAgICAgICAgICBvbkNyZWF0ZSh4aHIuc3RhdHVzID09IDIwMCwgcmVzdWx0LCB4aHIucmVzcG9uc2UpO1xuICAgICAgICB9O1xuICAgICAgICB4aHIuc2VuZCgpO1xuICAgIH1cbiAgICBwdWJsaWMgc2F2ZVN1cnZleShpZDogc3RyaW5nLCBqc29uOiBzdHJpbmcsIG9uU2F2ZT86IChzdWNjZXNzOiBib29sZWFuLCByZXN1bHQ6IHN0cmluZywgcmVzcG9uc2U6IGFueSkgPT4gdm9pZCkge1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKCdQT1NUJywgdGhpcy5iYXNlVXJsICsgJy9jaGFuZ2VKc29uP2FjY2Vzc0tleT0nICsgdGhpcy5hY2Nlc3NLZXkpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOFwiKTtcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB4aHIucmVzcG9uc2UgPyBKU09OLnBhcnNlKHhoci5yZXNwb25zZSkgOiBudWxsO1xuICAgICAgICAgICAgISFvblNhdmUgJiYgb25TYXZlKHhoci5zdGF0dXMgPT0gMjAwLCByZXN1bHQsIHhoci5yZXNwb25zZSk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KHsgSWQ6IGlkLCBKc29uOiBqc29uLCBUZXh0OiBqc29uIH0pKTtcbiAgICB9XG4gICAgcHVibGljIHVwZGF0ZVN1cnZleU5hbWUoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBvblVwZGF0ZT86IChzdWNjZXNzOiBib29sZWFuLCByZXN1bHQ6IHN0cmluZywgcmVzcG9uc2U6IGFueSkgPT4gdm9pZCkge1xuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB0aGlzLmJhc2VVcmwgKyAnL2NoYW5nZU5hbWUvJyArIGlkICsgJz9hY2Nlc3NLZXk9JyArIHRoaXMuYWNjZXNzS2V5ICsgXCImbmFtZT1cIiArIG5hbWUpO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHhoci5yZXNwb25zZSA/IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKSA6IG51bGw7XG4gICAgICAgICAgICAhIW9uVXBkYXRlICYmIG9uVXBkYXRlKHhoci5zdGF0dXMgPT0gMjAwLCByZXN1bHQsIHhoci5yZXNwb25zZSk7XG4gICAgICAgIH07XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN1cnZleUluZm8ge1xuICAgIG5hbWU6IEtub2Nrb3V0T2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIGlkOiBzdHJpbmc7XG4gICAgcG9zdElkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlEZXNjcmlwdGlvbiBpbXBsZW1lbnRzIElTdXJ2ZXlJbmZvIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZSA9IGtvLm9ic2VydmFibGUoXCJcIiksIHB1YmxpYyBjcmVhdGVkQXQgPSBuZXcgRGF0ZShEYXRlLm5vdygpKS50b0RhdGVTdHJpbmcoKSwgcHVibGljIGlkID0gXCJcIiwgcHVibGljIHJlc3VsdElkID0gXCJcIiwgcHVibGljIHBvc3RJZCA9IFwiXCIpIHtcbiAgICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIFN1cnZleXNNYW5hZ2VyIHtcbiAgICBzdGF0aWMgU3RvcmFnZUtleSA9IFwibXlTdXJ2ZXlzXCI7XG4gICAgcHJpdmF0ZSBhcGk6IFNlcnZpY2VBUEk7XG5cbiAgICBnZXRTdXJ2ZXlzKCk6IEFycmF5PFN1cnZleURlc2NyaXB0aW9uPiB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShTdXJ2ZXlzTWFuYWdlci5TdG9yYWdlS2V5KSB8fCBcIltdXCIpLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgU3VydmV5RGVzY3JpcHRpb24oa28ub2JzZXJ2YWJsZTxzdHJpbmc+KGl0ZW0ubmFtZSksIGl0ZW0uY3JlYXRlZEF0LCBpdGVtLmlkLCBpdGVtLnJlc3VsdElkLCBpdGVtLnBvc3RJZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldFN1cnZleXMoc3VydmV5czogQXJyYXk8SVN1cnZleUluZm8+KSB7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShTdXJ2ZXlzTWFuYWdlci5TdG9yYWdlS2V5LCBrby50b0pTT04oc3VydmV5cykpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFzZVVybDogc3RyaW5nLCBwcml2YXRlIGFjY2Vzc0tleTogc3RyaW5nLCBwcml2YXRlIGVkaXRvcjogU3VydmV5RWRpdG9yKSB7XG4gICAgICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgICAgIGlmKGhhc2guaW5kZXhPZihcIiNcIikgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3VydmV5SWQoaGFzaC5zbGljZSgxKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hcGkgPSBuZXcgU2VydmljZUFQSShiYXNlVXJsICsgXCIvYXBpL015U3VydmV5c1wiLCBhY2Nlc3NLZXkpO1xuXG4gICAgICAgIGVkaXRvci5pc0F1dG9TYXZlID0gdHJ1ZTtcbiAgICAgICAgZWRpdG9yLnNob3dTdGF0ZSA9IHRydWU7XG4gICAgICAgIGVkaXRvci5zYXZlU3VydmV5RnVuYyA9IChzYXZlTm8sIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgICAgICBpZighZWRpdG9yLnN1cnZleUlkICYmICF0aGlzLnN1cnZleUlkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEhhbmRsZXIoc3VjY2VzcyA9PiBjYWxsYmFjayhzYXZlTm8sIHN1Y2Nlc3MpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCEhZWRpdG9yLnN1cnZleUlkIHx8ICEhdGhpcy5zdXJ2ZXlJZCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcGkuc2F2ZVN1cnZleShlZGl0b3Iuc3VydmV5SWQgfHwgdGhpcy5zdXJ2ZXlJZCgpLCBlZGl0b3IudGV4dCwgc3VjY2VzcyA9PiBjYWxsYmFjayhzYXZlTm8sIHN1Y2Nlc3MpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN1cnZleXModGhpcy5nZXRTdXJ2ZXlzKCkpO1xuICAgICAgICBpZighdGhpcy5zdXJ2ZXlJZCgpKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdXJ2ZXkodGhpcy5zdXJ2ZXlzKClbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHN1cnZleSA9IHRoaXMuc3VydmV5cygpLmZpbHRlcihzID0+IHMuaWQgPT09IHRoaXMuc3VydmV5SWQoKSlbMF07XG4gICAgICAgICAgICBpZighIXN1cnZleSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN1cnZleShzdXJ2ZXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3VydmV5SWQodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVkaXRvci5sb2FkU3VydmV5KHRoaXMuc3VydmV5SWQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9uQ3VycmVudFN1cnZleUNoYW5nZWQgPSAoc3VydmV5OiBJU3VydmV5SW5mbykgPT4ge1xuICAgICAgICAgICAgaWYoISFzdXJ2ZXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN1cnZleUlkKHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIiNcIiArIHN1cnZleS5pZDtcbiAgICAgICAgICAgICAgICBpZihlZGl0b3Iuc3VydmV5SWQgPT09IHN1cnZleS5pZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGVkaXRvci5sb2FkU3VydmV5KHN1cnZleS5pZCk7XG4gICAgICAgICAgICAgICAgZWRpdG9yLnN1cnZleUlkID0gc3VydmV5LmlkO1xuICAgICAgICAgICAgICAgIGVkaXRvci5zdXJ2ZXlQb3N0SWQgPSBzdXJ2ZXkucG9zdElkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuc3VydmV5SWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBlZGl0b3Iuc3VydmV5SWQgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBlZGl0b3Iuc3VydmV5UG9zdElkID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBlZGl0b3IudGV4dCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFN1cnZleS5zdWJzY3JpYmUob25DdXJyZW50U3VydmV5Q2hhbmdlZCk7XG4gICAgICAgIG9uQ3VycmVudFN1cnZleUNoYW5nZWQodGhpcy5jdXJyZW50U3VydmV5KCkpO1xuICAgICAgICBcbiAgICAgICAgdmFyIGN1cnJlbnRTdXJ2ZXlDYW5CZUF0dGFjaGVkID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgICAgIGtvLmNvbXB1dGVkKCgpID0+IHtcbiAgICAgICAgICAgIHZhciBzdXJ2ZXkgPSB0aGlzLmN1cnJlbnRTdXJ2ZXkoKTtcbiAgICAgICAgICAgIGN1cnJlbnRTdXJ2ZXlDYW5CZUF0dGFjaGVkKGZhbHNlKTtcbiAgICAgICAgICAgIGlmKCEhc3VydmV5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcGkudXBkYXRlU3VydmV5TmFtZShzdXJ2ZXkuaWQsIHN1cnZleS5uYW1lLnBlZWsoKSwgc3VjY2VzcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRTdXJ2ZXlDYW5CZUF0dGFjaGVkKHN1Y2Nlc3MpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy50b29sYmFySXRlbSA9IHtcbiAgICAgICAgICAgIGlkOiAnc3ZkLWF0dGFjaC1zdXJ2ZXknLFxuICAgICAgICAgICAgdGVtcGxhdGU6ICdhdHRhY2gtc3VydmV5JyxcbiAgICAgICAgICAgIHZpc2libGU6IGN1cnJlbnRTdXJ2ZXlDYW5CZUF0dGFjaGVkLFxuICAgICAgICAgICAgYWN0aW9uOiBrby5jb21wdXRlZCgoKSA9PiAnaHR0cHM6Ly9keHN1cnZleS5jb20vSG9tZS9BdHRhY2hTdXJ2ZXkvJyArICh0aGlzLmN1cnJlbnRTdXJ2ZXkoKSAmJiB0aGlzLmN1cnJlbnRTdXJ2ZXkoKS5pZCkpLFxuICAgICAgICAgICAgY3NzOiAnbGluay10by1hdHRhY2gnLFxuICAgICAgICAgICAgaW5uZXJDc3M6ICdpY29uLWNsb3VkJyxcbiAgICAgICAgICAgIHRpdGxlOiAnQXR0YWNoIHN1cnZleSB0byB5b3VyIFN1cnZleUpTIHNlcnZpY2UgYWNjb3VudC4uLidcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdG9vbGJhckl0ZW07XG5cbiAgICBpc0VkaXRNb2RlID0ga28ub2JzZXJ2YWJsZShmYWxzZSk7XG4gICAgZWRpdChtb2RlbCwgZXZlbnQpIHtcbiAgICAgICAgdmFyIHN1cnZleSA9IHRoaXMuY3VycmVudFN1cnZleSgpO1xuICAgICAgICBpZighIXN1cnZleSkge1xuICAgICAgICAgICAgaWYodGhpcy5pc0VkaXRNb2RlKCkpIHtcbiAgICAgICAgICAgICAgICBzdXJ2ZXkubmFtZSh0aGlzLmN1cnJlbnRTdXJ2ZXlOYW1lKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3VydmV5cyh0aGlzLnN1cnZleXMoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcGkudXBkYXRlU3VydmV5TmFtZShzdXJ2ZXkuaWQsIHN1cnZleS5uYW1lKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNFZGl0TW9kZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdXJ2ZXlOYW1lKHN1cnZleS5uYW1lKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNFZGl0TW9kZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkucGFyZW50cyhcIi5zdmQtbWFuYWdlXCIpLmZpbmQoXCJpbnB1dFwiKS5mb2N1cygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRIYW5kbGVyKG9uQWRkPzogKHN1Y2Nlc3M6IGJvb2xlYW4sIHJlc3VsdDogc3RyaW5nLCByZXNwb25zZTogYW55KSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuaXNMb2FkaW5nKHRydWUpO1xuICAgICAgICB0aGlzLmFwaS5jcmVhdGVTdXJ2ZXkoXCJOZXdTdXJ2ZXlcIiwgKHN1Y2Nlc3M6IGJvb2xlYW4sIHJlc3VsdDogYW55LCByZXNwb25zZTogYW55KSA9PiB7XG5cbiAgICAgICAgICAgIHZhciBuZXdTdXJ2ZXlEZXNjcmlwdGlvbiA9IG5ldyBTdXJ2ZXlEZXNjcmlwdGlvbihrby5vYnNlcnZhYmxlKHJlc3VsdC5OYW1lKSwgcmVzdWx0LkNyZWF0ZWRBdCwgcmVzdWx0LklkLCByZXN1bHQuUmVzdWx0SWQsIHJlc3VsdC5Qb3N0SWQpXG4gICAgICAgICAgICB0aGlzLnN1cnZleXMucHVzaChuZXdTdXJ2ZXlEZXNjcmlwdGlvbik7XG4gICAgICAgICAgICB0aGlzLnNldFN1cnZleXModGhpcy5zdXJ2ZXlzKCkpO1xuICAgICAgICAgICAgdGhpcy5lZGl0b3Iuc3VydmV5SWQgPSByZXN1bHQuSWQ7XG4gICAgICAgICAgICB0aGlzLmVkaXRvci5zdXJ2ZXlQb3N0SWQgPSByZXN1bHQuUG9zdElkO1xuICAgICAgICAgICAgdGhpcy5hcGkuc2F2ZVN1cnZleShyZXN1bHQuSWQsIHRoaXMuZWRpdG9yLnRleHQpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3VydmV5KG5ld1N1cnZleURlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIG9uQWRkICYmIG9uQWRkKHN1Y2Nlc3MsIHJlc3VsdCwgcmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGQoKSB7XG4gICAgICAgIHRoaXMuYWRkSGFuZGxlcigpO1xuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgaWYoY29uZmlybShcIkRvIHlvdSByZWFsbHkgd2FudCB0byByZW1vdmUgY3VycmVudCBzdXJ2ZXk/XCIpKSB7XG4gICAgICAgICAgICB0aGlzLnN1cnZleXMucmVtb3ZlKHRoaXMuY3VycmVudFN1cnZleSgpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3VydmV5cyh0aGlzLnN1cnZleXMoKSk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdXJ2ZXkodGhpcy5zdXJ2ZXlzKClbMF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3VydmV5SWQgPSBrby5vYnNlcnZhYmxlPHN0cmluZz4oKTtcbiAgICBzdXJ2ZXlzID0ga28ub2JzZXJ2YWJsZUFycmF5PElTdXJ2ZXlJbmZvPigpO1xuICAgIGN1cnJlbnRTdXJ2ZXkgPSBrby5vYnNlcnZhYmxlPElTdXJ2ZXlJbmZvPigpO1xuICAgIGN1cnJlbnRTdXJ2ZXlOYW1lID0ga28ub2JzZXJ2YWJsZTxzdHJpbmc+KFwiXCIpO1xuICAgIGlzTG9hZGluZyA9IGtvLm9ic2VydmFibGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gICAgZ2V0IGNzc0VkaXQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0VkaXRNb2RlKCkgPyAnaWNvbi1zYXZlZCcgOiAnaWNvbi1lZGl0JztcbiAgICB9XG4gICAgZ2V0IGNzc0FkZCAoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5zdXJ2ZXlJZCgpID8gJ2ljb24tbmV3JyA6ICdpY29uLWZvcmsnO1xuICAgIH1cbiAgICBnZXQgdGl0bGVFZGl0ICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNFZGl0TW9kZSgpID8gJ1NhdmUgc3VydmV5IG5hbWUnIDogJ0VkaXQgc3VydmV5IG5hbWUnO1xuICAgIH1cbiAgICBnZXQgdGl0bGVBZGQgKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuc3VydmV5SWQoKSA/ICdBZGQgbmV3IHN1cnZleScgOiAnRm9yayB0aGlzIHN1cnZleSc7XG4gICAgfVxuICAgIG5hbWVFZGl0b3JLZXlwcmVzcyA9IChtb2RlbCwgZXZlbnQpID0+IHtcbiAgICAgICAgaWYoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHRoaXMuZWRpdChtb2RlbCwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFZGl0TW9kZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hbmFnZS50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eUl0ZW1zRWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZX0gZnJvbSBcIi4vcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5pbXBvcnQgKiBhcyBTdXJ2ZXkgZnJvbSBcInN1cnZleS1rbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlJdGVtVmFsdWVzRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlJdGVtc0VkaXRvciB7XG4gICAga29BY3RpdmVWaWV3OiBhbnk7XG4gICAga29JdGVtc1RleHQ6IGFueTtcbiAgICBjaGFuZ2VUb1RleHRWaWV3Q2xpY2s6IGFueTtcbiAgICBjaGFuZ2VUb0Zvcm1WaWV3Q2xpY2s6IGFueTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmtvQWN0aXZlVmlldyA9IGtvLm9ic2VydmFibGUoXCJmb3JtXCIpO1xuICAgICAgICB0aGlzLmtvSXRlbXNUZXh0ID0ga28ub2JzZXJ2YWJsZShcIlwiKTtcbiAgICAgICAgdGhpcy5rb0FjdGl2ZVZpZXcuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09IFwiZm9ybVwiKSBzZWxmLnVwZGF0ZUl0ZW1zKHNlbGYua29JdGVtc1RleHQoKSk7XG4gICAgICAgICAgICBlbHNlIHNlbGYua29JdGVtc1RleHQoc2VsZi5nZXRJdGVtc1RleHQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoYW5nZVRvVGV4dFZpZXdDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5rb0FjdGl2ZVZpZXcoXCJ0ZXh0XCIpOyB9O1xuICAgICAgICB0aGlzLmNoYW5nZVRvRm9ybVZpZXdDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5rb0FjdGl2ZVZpZXcoXCJmb3JtXCIpOyB9O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwiaXRlbXZhbHVlc1wiOyB9XG4gICAgcHVibGljIGhhc0Vycm9yKCk6IGJvb2xlYW4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5rb0l0ZW1zKCkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5rb0l0ZW1zKClbaV07XG4gICAgICAgICAgICBpdGVtLmtvSGFzRXJyb3IodGhpcy5pc1ZhbHVlRW1wdHkoaXRlbS5rb1ZhbHVlKCkpKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCB8fCBpdGVtLmtvSGFzRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlTmV3RWRpdG9ySXRlbSgpOiBhbnkgeyBcbiAgICAgICAgdmFyIGl0ZW1WYWx1ZSA9IG5ldyBTdXJ2ZXkuSXRlbVZhbHVlKG51bGwpO1xuICAgICAgICBpZih0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbkl0ZW1WYWx1ZUFkZGVkQ2FsbGJhY2sodGhpcy5lZGl0YWJsZVByb3BlcnR5TmFtZSwgaXRlbVZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVFZGl0b3JJdGVtKGl0ZW1WYWx1ZSk7IFxuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlRWRpdG9ySXRlbShpdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGl0ZW1WYWx1ZSA9IG5ldyBTdXJ2ZXkuSXRlbVZhbHVlKG51bGwpO1xuICAgICAgICBpZiggaXRlbVZhbHVlW1wic2V0RGF0YVwiXSkge1xuICAgICAgICAgICAgaXRlbVZhbHVlW1wic2V0RGF0YVwiXShpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaXRlbVZhbHVlLnZhbHVlID0gaXRlbS52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZihpdGVtLnRleHQpIGl0ZW1WYWx1ZS50ZXh0ID0gaXRlbS50ZXh0O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtVmFsdWUudmFsdWUgPSBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHZhciBpdGVtVGV4dCA9IFwiXCI7XG4gICAgICAgIGlmKGl0ZW1WYWx1ZVtcImxvY1RleHRcIl0pIHsgXG4gICAgICAgICAgICBpdGVtVGV4dCA9IGl0ZW1WYWx1ZVtcImxvY1RleHRcIl1bXCJnZXRMb2NhbGVUZXh0XCJdKHRoaXMubG9jYWxlKTsgXG4gICAgICAgIH1cbiAgICAgICAgaWYoIWl0ZW1UZXh0ICYmIGl0ZW1WYWx1ZS5oYXNUZXh0KSB7XG4gICAgICAgICAgICBpdGVtVGV4dCA9IGl0ZW1WYWx1ZS50ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IGl0ZW06IGl0ZW0sIGtvVmFsdWU6IGtvLm9ic2VydmFibGUoaXRlbVZhbHVlLnZhbHVlKSwga29UZXh0OiBrby5vYnNlcnZhYmxlKGl0ZW1UZXh0KSwga29IYXNFcnJvcjoga28ub2JzZXJ2YWJsZShmYWxzZSkgfTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUl0ZW1Gcm9tRWRpdG9ySXRlbShlZGl0b3JJdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGFsd2F5U2F2ZVRleHRJblByb3BlcnR5RWRpdG9ycyA9IHRoaXMub3B0aW9ucyAmJiB0aGlzLm9wdGlvbnMuYWx3YXlTYXZlVGV4dEluUHJvcGVydHlFZGl0b3JzO1xuICAgICAgICB2YXIgdGV4dCA9IGVkaXRvckl0ZW0ua29UZXh0KCk7XG4gICAgICAgIGlmICghYWx3YXlTYXZlVGV4dEluUHJvcGVydHlFZGl0b3JzICYmIGVkaXRvckl0ZW0ua29UZXh0KCkgPT0gZWRpdG9ySXRlbS5rb1ZhbHVlKCkpIHtcbiAgICAgICAgICAgIHRleHQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpdGVtVmFsdWUgPSBuZXcgU3VydmV5Lkl0ZW1WYWx1ZShudWxsKTtcbiAgICAgICAgaWYoZWRpdG9ySXRlbS5pdGVtKSB7XG4gICAgICAgICAgICBpdGVtVmFsdWUuc2V0RGF0YShlZGl0b3JJdGVtLml0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW1WYWx1ZS52YWx1ZSA9IGVkaXRvckl0ZW0ua29WYWx1ZSgpO1xuICAgICAgICBpdGVtVmFsdWUubG9jVGV4dC5zZXRMb2NhbGVUZXh0KHRoaXMubG9jYWxlLCB0ZXh0KTtcbiAgICAgICAgcmV0dXJuIGl0ZW1WYWx1ZTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uQmVmb3JlQXBwbHkoKSB7XG4gICAgICAgIGlmICh0aGlzLmtvQWN0aXZlVmlldygpICE9IFwiZm9ybVwiKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUl0ZW1zKHRoaXMua29JdGVtc1RleHQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIub25CZWZvcmVBcHBseSgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgdXBkYXRlSXRlbXModGV4dDogc3RyaW5nKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgICAgdmFyIHRleHRzID0gdGV4dC5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRleHRzW2ldKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVJdGVtID0gbmV3IFN1cnZleS5JdGVtVmFsdWUodGV4dHNbaV0pO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0geyB2YWx1ZTogdmFsdWVJdGVtLnZhbHVlLCB0ZXh0OiAodmFsdWVJdGVtLmhhc1RleHQgPyB2YWx1ZUl0ZW0udGV4dCA6IFwiXCIpIH07XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmtvSXRlbXModGhpcy5nZXRJdGVtc0Zyb21WYWx1ZShpdGVtcykpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgZ2V0SXRlbXNUZXh0KCk6IHN0cmluZyB7XG4gICAgICAgIHZhciB0ZXh0ID0gW107XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMua29JdGVtcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWx1ZUVtcHR5KGl0ZW0ua29WYWx1ZSgpKSkgY29udGludWU7XG4gICAgICAgICAgICB2YXIgaXRlbVRleHQgPSBpdGVtLmtvVmFsdWUoKTtcbiAgICAgICAgICAgIGlmIChpdGVtLmtvVGV4dCgpKSBpdGVtVGV4dCArPSBTdXJ2ZXkuSXRlbVZhbHVlLlNlcGFyYXRvciArIGl0ZW0ua29UZXh0KCk7XG4gICAgICAgICAgICB0ZXh0LnB1c2goaXRlbVRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXh0LmpvaW4oXCJcXG5cIik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBpc1ZhbHVlRW1wdHkodmFsOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuICF2YWw7XG4gICAgfVxufVxuXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJpdGVtdmFsdWVzXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5SXRlbVZhbHVlc0VkaXRvcigpOyB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5SXRlbVZhbHVlc0VkaXRvci50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eUl0ZW1zRWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZX0gZnJvbSBcIi4vcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5pbXBvcnQge1N1cnZleVF1ZXN0aW9uRWRpdG9yfSBmcm9tIFwiLi4vcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uRWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5SXRlbVZhbHVlc0VkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlJdGVtVmFsdWVzRWRpdG9yXCI7XG5pbXBvcnQge2VkaXRvckxvY2FsaXphdGlvbn0gZnJvbSBcIi4uL2VkaXRvckxvY2FsaXphdGlvblwiO1xuaW1wb3J0IHtTdXJ2ZXlOZXN0ZWRQcm9wZXJ0eUVkaXRvciwgU3VydmV5TmVzdGVkUHJvcGVydHlFZGl0b3JJdGVtfSBmcm9tIFwiLi9wcm9wZXJ0eU5lc3RlZFByb3BlcnR5RWRpdG9yXCJcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eURyb3Bkb3duQ29sdW1uc0VkaXRvciBleHRlbmRzIFN1cnZleU5lc3RlZFByb3BlcnR5RWRpdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcIm1hdHJpeGRyb3Bkb3duY29sdW1uc1wiOyB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZU5ld0VkaXRvckl0ZW0oKTogYW55IHsgXG4gICAgICAgIHZhciBuZXdDb2x1bW4gPSBuZXcgU3VydmV5Lk1hdHJpeERyb3Bkb3duQ29sdW1uKFwiXCIpO1xuICAgICAgICBpZih0aGlzLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5vbk1hdHJpeERyb3Bkb3duQ29sdW1uQWRkZWRDYWxsYmFjayhuZXdDb2x1bW4pO1xuICAgICAgICB9XG4gICAgICAgIC8vbmV3Q29sdW1uLmNvbE93bmVyID0gVE9ETyBzZXQgY29sT3duZXIuXG4gICAgICAgIHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNJdGVtKG5ld0NvbHVtbiwgdGhpcy5vcHRpb25zKTsgXG4gICAgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVFZGl0b3JJdGVtKGl0ZW06IGFueSkgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5TWF0cml4RHJvcGRvd25Db2x1bW5zSXRlbShpdGVtLCB0aGlzLm9wdGlvbnMpOyB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUl0ZW1Gcm9tRWRpdG9ySXRlbShlZGl0b3JJdGVtOiBhbnkpIHsgIHJldHVybiBlZGl0b3JJdGVtLmNvbHVtbjsgfVxufVxuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNJdGVtIGV4dGVuZHMgU3VydmV5TmVzdGVkUHJvcGVydHlFZGl0b3JJdGVtIHtcbiAgICBrb05hbWU6IGFueTsga29UaXRsZTogYW55OyBrb0NlbGxUeXBlOiBhbnk7ICBrb0lzUmVxdWlyZWQ6IGFueTtcbiAgICBrb0VkaXRvck5hbWU6IGFueTsga29IYXNFcnJvcjogYW55OyBrb0NhbkVkaXQ6IGFueTsgXG4gICAgcHVibGljIG9uU2hvd0Nob2ljZXNDbGljazogYW55O1xuICAgIHB1YmxpYyBjZWxsVHlwZUNob2ljZXM6IEFycmF5PGFueT47XG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbHVtbjogU3VydmV5Lk1hdHJpeERyb3Bkb3duQ29sdW1uLCBwdWJsaWMgb3B0aW9ucyA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jZWxsVHlwZUNob2ljZXMgPSB0aGlzLmdldFByb3BlcnR5Q2hvaWNlcyhcImNlbGxUeXBlXCIpO1xuICAgICAgICB0aGlzLmtvTmFtZSA9IGtvLm9ic2VydmFibGUoY29sdW1uLm5hbWUpO1xuICAgICAgICB0aGlzLmtvQ2VsbFR5cGUgPSBrby5vYnNlcnZhYmxlKGNvbHVtbi5jZWxsVHlwZSk7XG4gICAgICAgIHRoaXMua29UaXRsZSA9IGtvLm9ic2VydmFibGUoY29sdW1uLm5hbWUgPT09IGNvbHVtbi50aXRsZSA/IFwiXCIgOiBjb2x1bW4udGl0bGUpO1xuICAgICAgICB0aGlzLmtvSXNSZXF1aXJlZCA9IGtvLm9ic2VydmFibGUodGhpcy5jb2x1bW4uaXNSZXF1aXJlZCk7XG4gICAgICAgIHRoaXMua29IYXNFcnJvciA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5rb0NhbkVkaXQgPSBrby5jb21wdXRlZChmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmtvQ2VsbFR5cGUoKSAhPSBcImRlZmF1bHRcIjsgfSk7XG4gICAgICAgIHRoaXMua29FZGl0b3JOYW1lID0ga28uY29tcHV0ZWQoZnVuY3Rpb24oKSB7IHJldHVybiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUuY29sdW1uRWRpdFwiKVtcImZvcm1hdFwiXShzZWxmLmtvTmFtZSgpKTt9KTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZVN1cnZleVF1ZXN0aW9uRWRpdG9yKCkgeyByZXR1cm4gbmV3IFN1cnZleVF1ZXN0aW9uRWRpdG9yKHRoaXMuY29sdW1uLCBudWxsLCBcIm1hdHJpeGRyb3Bkb3duY29sdW1uQFwiICsgdGhpcy5rb0NlbGxUeXBlKCksIHRoaXMub3B0aW9ucyk7IH1cbiAgICBwdWJsaWMgaGFzRXJyb3IoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmKHN1cGVyLmhhc0Vycm9yKCkpIHJldHVybiB0cnVlO1xuICAgICAgICB0aGlzLmtvSGFzRXJyb3IoIXRoaXMua29OYW1lKCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5rb0hhc0Vycm9yKCk7XG4gICAgfVxuICAgIHB1YmxpYyBhcHBseSgpIHtcbiAgICAgICAgc3VwZXIuYXBwbHkoKTtcbiAgICAgICAgdGhpcy5jb2x1bW4ubmFtZSA9IHRoaXMua29OYW1lKCk7XG4gICAgICAgIHRoaXMuY29sdW1uLnRpdGxlID0gdGhpcy5rb1RpdGxlKCk7XG4gICAgICAgIHRoaXMuY29sdW1uLmNlbGxUeXBlID0gdGhpcy5rb0NlbGxUeXBlKCk7XG4gICAgICAgIHRoaXMuY29sdW1uLmlzUmVxdWlyZWQgPSB0aGlzLmtvSXNSZXF1aXJlZCgpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldFByb3BlcnR5Q2hvaWNlcyhwcm9wZXR5TmFtZTogc3RyaW5nKTogQXJyYXk8YW55PiB7XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZ2V0UHJvcGVydGllcyhcIm1hdHJpeGRyb3Bkb3duY29sdW1uXCIpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzW2ldLm5hbWUgPT0gcHJvcGV0eU5hbWUpIHJldHVybiBwcm9wZXJ0aWVzW2ldLmNob2ljZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn1cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwibWF0cml4ZHJvcGRvd25jb2x1bW5zXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5RHJvcGRvd25Db2x1bW5zRWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNFZGl0b3IudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlNb2RhbEVkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlNb2RhbEVkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVJlc3VsdGZ1bGxFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlQcm9wZXJ0eU1vZGFsRWRpdG9yIHtcbiAgICBrb1VybDogYW55OyBrb1BhdGg6IGFueTsga29WYWx1ZU5hbWU6IGFueTsga29UaXRsZU5hbWU6IGFueTsgXG4gICAgcHVibGljIHN1cnZleTogU3VydmV5LlN1cnZleTtcbiAgICBwdWJsaWMgcXVlc3Rpb246IFN1cnZleS5RdWVzdGlvbkRyb3Bkb3duO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMua29VcmwgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMua29QYXRoID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmtvVmFsdWVOYW1lID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmtvVGl0bGVOYW1lID0ga28ub2JzZXJ2YWJsZSgpO1xuICAgICAgICB0aGlzLmNyZWF0ZVN1cnZleSgpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMua29Vcmwuc3Vic2NyaWJlKGZ1bmN0aW9uIChuZXdWYWx1ZSkgeyBzZWxmLnF1ZXN0aW9uLmNob2ljZXNCeVVybC51cmwgPSBuZXdWYWx1ZTsgc2VsZi5ydW4oKTsgfSk7XG4gICAgICAgIHRoaXMua29QYXRoLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5xdWVzdGlvbi5jaG9pY2VzQnlVcmwucGF0aCA9IG5ld1ZhbHVlOyBzZWxmLnJ1bigpOyB9KTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlTmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYucXVlc3Rpb24uY2hvaWNlc0J5VXJsLnZhbHVlTmFtZSA9IG5ld1ZhbHVlOyBzZWxmLnJ1bigpOyB9KTtcbiAgICAgICAgdGhpcy5rb1RpdGxlTmFtZS5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7IHNlbGYucXVlc3Rpb24uY2hvaWNlc0J5VXJsLnRpdGxlTmFtZSA9IG5ld1ZhbHVlOyBzZWxmLnJ1bigpOyB9KTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInJlc3RmdWxsXCI7IH1cbiAgICBwdWJsaWMgZ2V0IHJlc3RmdWxsVmFsdWUoKSB7IHJldHVybiA8U3VydmV5LkNob2ljZXNSZXN0ZnVsbD50aGlzLnZhbHVlOyB9XG4gICAgcHVibGljIGdldFZhbHVlVGV4dCh2YWx1ZTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF2YWx1ZSB8fCAhdmFsdWUudXJsKSByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLmVtcHR5XCIpO1xuICAgICAgICB2YXIgc3RyID0gdmFsdWUudXJsO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA+IDIwKSB7XG4gICAgICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKDAsIDIwKSArIFwiLi4uXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICB2YXIgdmFsID0gdGhpcy5yZXN0ZnVsbFZhbHVlO1xuICAgICAgICB0aGlzLmtvVXJsKHZhbCA/IHZhbC51cmwgOiBcIlwiKTtcbiAgICAgICAgdGhpcy5rb1BhdGgodmFsID8gdmFsLnBhdGggOiBcIlwiKTtcbiAgICAgICAgdGhpcy5rb1ZhbHVlTmFtZSh2YWwgPyB2YWwudmFsdWVOYW1lIDogXCJcIik7XG4gICAgICAgIHRoaXMua29UaXRsZU5hbWUodmFsID8gdmFsLnRpdGxlTmFtZSA6IFwiXCIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25CZWZvcmVBcHBseSgpIHtcbiAgICAgICAgdmFyIHZhbCA9IG5ldyBTdXJ2ZXkuQ2hvaWNlc1Jlc3RmdWxsKCk7XG4gICAgICAgIHZhbC51cmwgPSB0aGlzLmtvVXJsKCk7XG4gICAgICAgIHZhbC5wYXRoID0gdGhpcy5rb1BhdGgoKTtcbiAgICAgICAgdmFsLnZhbHVlTmFtZSA9IHRoaXMua29WYWx1ZU5hbWUoKTtcbiAgICAgICAgdmFsLnRpdGxlTmFtZSA9IHRoaXMua29UaXRsZU5hbWUoKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZUNvcmUodmFsKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBydW4oKSB7XG4gICAgICAgIHRoaXMucXVlc3Rpb24uY2hvaWNlc0J5VXJsLnJ1bigpO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVN1cnZleSgpIHtcbiAgICAgICAgdGhpcy5zdXJ2ZXkgPSBuZXcgU3VydmV5LlN1cnZleSgpO1xuICAgICAgICB0aGlzLnN1cnZleS5zaG93TmF2aWdhdGlvbkJ1dHRvbnMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zdXJ2ZXkuc2hvd1F1ZXN0aW9uTnVtYmVycyA9IFwib2ZmXCI7XG4gICAgICAgIHZhciBwYWdlID0gdGhpcy5zdXJ2ZXkuYWRkTmV3UGFnZShcInBhZ2UxXCIpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uID0gPFN1cnZleS5RdWVzdGlvbkRyb3Bkb3duPnBhZ2UuYWRkTmV3UXVlc3Rpb24oXCJkcm9wZG93blwiLCBcInExXCIpO1xuICAgICAgICB0aGlzLnF1ZXN0aW9uLnRpdGxlID0gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnRlc3RTZXJ2aWNlXCIpXG4gICAgICAgIHRoaXMucXVlc3Rpb24uY2hvaWNlcyA9IFtdO1xuICAgIH1cbn1cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwicmVzdGZ1bGxcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlSZXN1bHRmdWxsRWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlSZXN0ZnVsbEVkaXRvci50cyIsImltcG9ydCB7U3VydmV5UHJvcGVydHlJdGVtc0VkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlJdGVtc0VkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuaW1wb3J0IHtTdXJ2ZXlIZWxwZXJ9IGZyb20gXCIuLi9zdXJ2ZXlIZWxwZXJcIjtcbmltcG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5pbXBvcnQge1N1cnZleVF1ZXN0aW9uRWRpdG9yfSBmcm9tIFwiLi4vcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uRWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleU5lc3RlZFByb3BlcnR5RWRpdG9yLCBTdXJ2ZXlOZXN0ZWRQcm9wZXJ0eUVkaXRvckl0ZW19IGZyb20gXCIuL3Byb3BlcnR5TmVzdGVkUHJvcGVydHlFZGl0b3JcIlxuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcbmltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuXG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlUZXh0SXRlbXNFZGl0b3IgZXh0ZW5kcyBTdXJ2ZXlOZXN0ZWRQcm9wZXJ0eUVkaXRvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZWRpdG9yVHlwZSgpOiBzdHJpbmcgeyByZXR1cm4gXCJ0ZXh0aXRlbXNcIjsgfVxuICAgIHByb3RlY3RlZCBjcmVhdGVOZXdFZGl0b3JJdGVtKCk6IGFueSB7IFxuICAgICAgICB2YXIgbmV3SXRlbSA9IG5ldyBTdXJ2ZXkuTXVsdGlwbGVUZXh0SXRlbSh0aGlzLmdldE5ld05hbWUoKSk7XG4gICAgICAgIC8vbmV3Q29sdW1uLmNvbE93bmVyID0gVE9ETyBzZXQgY29sT3duZXIuXG4gICAgICAgIHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlUZXh0SXRlbXNJdGVtKG5ld0l0ZW0pOyBcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVkaXRvckl0ZW0oaXRlbTogYW55KSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlUZXh0SXRlbXNJdGVtKGl0ZW0pOyB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUl0ZW1Gcm9tRWRpdG9ySXRlbShlZGl0b3JJdGVtOiBhbnkpIHsgIHJldHVybiBlZGl0b3JJdGVtLml0ZW07IH1cblxuICAgIHByaXZhdGUgZ2V0TmV3TmFtZSgpOiBzdHJpbmcge1xuICAgICAgICB2YXIgb2JqcyA9IFtdO1xuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmtvSXRlbXMoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgb2Jqcy5wdXNoKHsgbmFtZTogaXRlbXNbaV0ua29OYW1lKCkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN1cnZleUhlbHBlci5nZXROZXdOYW1lKG9ianMsIFwidGV4dFwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVRleHRJdGVtc0l0ZW0gZXh0ZW5kcyBTdXJ2ZXlOZXN0ZWRQcm9wZXJ0eUVkaXRvckl0ZW0ge1xuICAgIGtvTmFtZTogYW55OyBrb1RpdGxlOiBhbnk7ICBrb0lzUmVxdWlyZWQ6IGFueTtcbiAgICBrb0VkaXRvck5hbWU6IGFueTsga29IYXNFcnJvcjogYW55O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpdGVtOiBTdXJ2ZXkuTXVsdGlwbGVUZXh0SXRlbSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtvTmFtZSA9IGtvLm9ic2VydmFibGUoaXRlbS5uYW1lKTtcbiAgICAgICAgdGhpcy5rb1RpdGxlID0ga28ub2JzZXJ2YWJsZShpdGVtLm5hbWUgPT09IGl0ZW0udGl0bGUgPyBcIlwiIDogaXRlbS50aXRsZSk7XG4gICAgICAgIHRoaXMua29Jc1JlcXVpcmVkID0ga28ub2JzZXJ2YWJsZSh0aGlzLml0ZW0uaXNSZXF1aXJlZCk7XG4gICAgICAgIHRoaXMua29IYXNFcnJvciA9IGtvLm9ic2VydmFibGUoZmFsc2UpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5rb0VkaXRvck5hbWUgPSBrby5jb21wdXRlZChmdW5jdGlvbigpIHsgcmV0dXJuIGVkaXRvckxvY2FsaXphdGlvbi5nZXRTdHJpbmcoXCJwZS5pdGVtRWRpdFwiKVtcImZvcm1hdFwiXShzZWxmLmtvTmFtZSgpKTt9KTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZVN1cnZleVF1ZXN0aW9uRWRpdG9yKCkgeyByZXR1cm4gbmV3IFN1cnZleVF1ZXN0aW9uRWRpdG9yKHRoaXMuaXRlbSwgbnVsbCwgXCJtdWx0aXBsZXRleHRpdGVtXCIpOyB9XG4gICAgcHVibGljIGhhc0Vycm9yKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZihzdXBlci5oYXNFcnJvcigpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgdGhpcy5rb0hhc0Vycm9yKCF0aGlzLmtvTmFtZSgpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMua29IYXNFcnJvcigpO1xuICAgIH1cbiAgICBwdWJsaWMgYXBwbHkoKSB7XG4gICAgICAgIHN1cGVyLmFwcGx5KCk7XG4gICAgICAgIHRoaXMuaXRlbS5uYW1lID0gdGhpcy5rb05hbWUoKTtcbiAgICAgICAgdGhpcy5pdGVtLnRpdGxlID0gdGhpcy5rb1RpdGxlKCk7XG4gICAgICAgIHRoaXMuaXRlbS5pc1JlcXVpcmVkID0gdGhpcy5rb0lzUmVxdWlyZWQoKTtcbiAgICB9XG59XG5cblxuU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlLnJlZ2lzdGVyRWRpdG9yKFwidGV4dGl0ZW1zXCIsIGZ1bmN0aW9uICgpOiBTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UgeyByZXR1cm4gbmV3IFN1cnZleVByb3BlcnR5VGV4dEl0ZW1zRWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlUZXh0SXRlbXNFZGl0b3IudHMiLCJpbXBvcnQgKiBhcyBrbyBmcm9tIFwia25vY2tvdXRcIjtcbmltcG9ydCB7U3VydmV5UHJvcGVydHlJdGVtc0VkaXRvcn0gZnJvbSBcIi4vcHJvcGVydHlJdGVtc0VkaXRvclwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2V9IGZyb20gXCIuL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuaW1wb3J0IHtlZGl0b3JMb2NhbGl6YXRpb259IGZyb20gXCIuLi9lZGl0b3JMb2NhbGl6YXRpb25cIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJzRWRpdG9yIGV4dGVuZHMgU3VydmV5UHJvcGVydHlJdGVtc0VkaXRvciB7XG4gICAga29RdWVzdGlvbnM6IGFueTsga29QYWdlczogYW55O1xuICAgIHB1YmxpYyBrb1NlbGVjdGVkOiBhbnk7XG4gICAgcHVibGljIGF2YWlsYWJsZVRyaWdnZXJzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgcHJpdmF0ZSB0cmlnZ2VyQ2xhc3NlczogQXJyYXk8U3VydmV5Lkpzb25NZXRhZGF0YUNsYXNzPiA9IFtdO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMub25EZWxldGVDbGljayA9IGZ1bmN0aW9uICgpIHsgc2VsZi5rb0l0ZW1zLnJlbW92ZShzZWxmLmtvU2VsZWN0ZWQoKSk7IH07XG4gICAgICAgIHRoaXMub25BZGRDbGljayA9IGZ1bmN0aW9uICh0cmlnZ2VyVHlwZSkgeyBzZWxmLmFkZEl0ZW0odHJpZ2dlclR5cGUpOyB9O1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWQgPSBrby5vYnNlcnZhYmxlKG51bGwpO1xuICAgICAgICB0aGlzLmtvUGFnZXMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdGhpcy5rb1F1ZXN0aW9ucyA9IGtvLm9ic2VydmFibGVBcnJheSgpO1xuICAgICAgICB0aGlzLnRyaWdnZXJDbGFzc2VzID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZ2V0Q2hpbGRyZW5DbGFzc2VzKFwic3VydmV5dHJpZ2dlclwiLCB0cnVlKTtcbiAgICAgICAgdGhpcy5hdmFpbGFibGVUcmlnZ2VycyA9IHRoaXMuZ2V0QXZhaWxhYmxlVHJpZ2dlcnMoKTtcbiAgICB9XG4gICAgcHVibGljIGdldCBlZGl0b3JUeXBlKCk6IHN0cmluZyB7IHJldHVybiBcInRyaWdnZXJzXCI7IH1cbiAgICBwcm90ZWN0ZWQgb25WYWx1ZUNoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLm9iamVjdCkge1xuICAgICAgICAgICAgdGhpcy5rb1BhZ2VzKHRoaXMuZ2V0TmFtZXMoKDxTdXJ2ZXkuU3VydmV5PnRoaXMub2JqZWN0KS5wYWdlcykpO1xuICAgICAgICAgICAgdGhpcy5rb1F1ZXN0aW9ucyh0aGlzLmdldE5hbWVzKCg8U3VydmV5LlN1cnZleT50aGlzLm9iamVjdCkuZ2V0QWxsUXVlc3Rpb25zKCkpKTtcbiAgICAgICAgfVxuICAgICAgICBzdXBlci5vblZhbHVlQ2hhbmdlZCgpO1xuICAgICAgICBpZiAodGhpcy5rb1NlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmtvU2VsZWN0ZWQodGhpcy5rb0l0ZW1zKCkubGVuZ3RoID4gMCA/IHRoaXMua29JdGVtcygpWzBdIDogbnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGFkZEl0ZW0odHJpZ2dlclR5cGU6IHN0cmluZykge1xuICAgICAgICB2YXIgdHJpZ2dlciA9IFN1cnZleS5Kc29uT2JqZWN0Lm1ldGFEYXRhLmNyZWF0ZUNsYXNzKHRyaWdnZXJUeXBlKTtcbiAgICAgICAgdmFyIHRyaWdnZXJJdGVtID0gdGhpcy5jcmVhdGVQcm9wZXJ0eVRyaWdnZXIodHJpZ2dlcik7XG4gICAgICAgIHRoaXMua29JdGVtcy5wdXNoKHRyaWdnZXJJdGVtKTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkKHRyaWdnZXJJdGVtKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVkaXRvckl0ZW0oaXRlbTogYW55KSB7XG4gICAgICAgIHZhciBqc29uT2JqID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCk7XG4gICAgICAgIHZhciB0cmlnZ2VyID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuY3JlYXRlQ2xhc3MoaXRlbS5nZXRUeXBlKCkpO1xuICAgICAgICBqc29uT2JqLnRvT2JqZWN0KGl0ZW0sIHRyaWdnZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVQcm9wZXJ0eVRyaWdnZXIoPFN1cnZleS5TdXJ2ZXlUcmlnZ2VyPnRyaWdnZXIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgY3JlYXRlSXRlbUZyb21FZGl0b3JJdGVtKGVkaXRvckl0ZW06IGFueSkge1xuICAgICAgICB2YXIgZWRpdG9yVHJpZ2dlciA9IDxTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXI+ZWRpdG9ySXRlbTtcbiAgICAgICAgcmV0dXJuIGVkaXRvclRyaWdnZXIuY3JlYXRlVHJpZ2dlcigpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEF2YWlsYWJsZVRyaWdnZXJzKCk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50cmlnZ2VyQ2xhc3Nlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy50cmlnZ2VyQ2xhc3Nlc1tpXS5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIGdldE5hbWVzKGl0ZW1zOiBBcnJheTxhbnk+KTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHZhciBuYW1lcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgaWYgKGl0ZW1bXCJuYW1lXCJdKSB7XG4gICAgICAgICAgICAgICAgbmFtZXMucHVzaChpdGVtW1wibmFtZVwiXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5hbWVzO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZVByb3BlcnR5VHJpZ2dlcih0cmlnZ2VyOiBTdXJ2ZXkuU3VydmV5VHJpZ2dlcik6IFN1cnZleVByb3BlcnR5VHJpZ2dlciB7XG4gICAgICAgIHZhciB0cmlnZ2VySXRlbSA9IG51bGw7XG4gICAgICAgIGlmICh0cmlnZ2VyLmdldFR5cGUoKSA9PSBcInZpc2libGV0cmlnZ2VyXCIpIHtcbiAgICAgICAgICAgIHRyaWdnZXJJdGVtID0gbmV3IFN1cnZleVByb3BlcnR5VmlzaWJsZVRyaWdnZXIoPFN1cnZleS5TdXJ2ZXlUcmlnZ2VyVmlzaWJsZT50cmlnZ2VyLCB0aGlzLmtvUGFnZXMsIHRoaXMua29RdWVzdGlvbnMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmlnZ2VyLmdldFR5cGUoKSA9PSBcInNldHZhbHVldHJpZ2dlclwiKSB7XG4gICAgICAgICAgICB0cmlnZ2VySXRlbSA9IG5ldyBTdXJ2ZXlQcm9wZXJ0eVNldFZhbHVlVHJpZ2dlcig8U3VydmV5LlN1cnZleVRyaWdnZXJTZXRWYWx1ZT50cmlnZ2VyLCB0aGlzLmtvUXVlc3Rpb25zKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRyaWdnZXJJdGVtKSB7XG4gICAgICAgICAgICB0cmlnZ2VySXRlbSA9IG5ldyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXIodHJpZ2dlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRyaWdnZXJJdGVtO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXIge1xuICAgIHByaXZhdGUgb3BlcmF0b3JzID0gW1wiZW1wdHlcIiwgXCJub3RlbXB0eVwiLCBcImVxdWFsXCIsIFwibm90ZXF1YWxcIiwgXCJjb250YWluc1wiLCBcIm5vdGNvbnRhaW5zXCIsIFwiZ3JlYXRlclwiLCBcImxlc3NcIiwgXCJncmVhdGVyb3JlcXVhbFwiLCBcImxlc3NvcmVxdWFsXCJdO1xuICAgIHByaXZhdGUgdHJpZ2dlclR5cGU6IHN0cmluZztcbiAgICBhdmFpbGFibGVPcGVyYXRvcnMgPSBbXTtcbiAgICBrb05hbWU6IGFueTsga29PcGVyYXRvcjogYW55OyBrb1ZhbHVlOiBhbnk7IGtvVHlwZTogYW55O1xuICAgIGtvVGV4dDogYW55OyBrb0lzVmFsaWQ6IGFueTsga29SZXF1aXJlVmFsdWU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0cmlnZ2VyOiBTdXJ2ZXkuU3VydmV5VHJpZ2dlcikge1xuICAgICAgICB0aGlzLmNyZWF0ZU9wZXJhdG9ycygpO1xuICAgICAgICB0aGlzLnRyaWdnZXJUeXBlID0gdHJpZ2dlci5nZXRUeXBlKCk7XG4gICAgICAgIHRoaXMua29UeXBlID0ga28ub2JzZXJ2YWJsZSh0aGlzLnRyaWdnZXJUeXBlKTtcbiAgICAgICAgdGhpcy5rb05hbWUgPSBrby5vYnNlcnZhYmxlKHRyaWdnZXIubmFtZSk7XG4gICAgICAgIHRoaXMua29PcGVyYXRvciA9IGtvLm9ic2VydmFibGUodHJpZ2dlci5vcGVyYXRvcik7XG4gICAgICAgIHRoaXMua29WYWx1ZSA9IGtvLm9ic2VydmFibGUodHJpZ2dlci52YWx1ZSk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5rb1JlcXVpcmVWYWx1ZSA9IGtvLmNvbXB1dGVkKCgpID0+IHsgcmV0dXJuIHNlbGYua29PcGVyYXRvcigpICE9IFwiZW1wdHlcIiAmJiBzZWxmLmtvT3BlcmF0b3IoKSAhPSBcIm5vdGVtcHR5XCI7IH0pO1xuICAgICAgICB0aGlzLmtvSXNWYWxpZCA9IGtvLmNvbXB1dGVkKCgpID0+IHsgaWYgKHNlbGYua29OYW1lKCkgJiYgKCFzZWxmLmtvUmVxdWlyZVZhbHVlKCkgfHwgc2VsZi5rb1ZhbHVlKCkpKSByZXR1cm4gdHJ1ZTsgcmV0dXJuIGZhbHNlOyB9KTtcbiAgICAgICAgdGhpcy5rb1RleHQgPSBrby5jb21wdXRlZCgoKSA9PiB7IHNlbGYua29OYW1lKCk7IHNlbGYua29PcGVyYXRvcigpOyBzZWxmLmtvVmFsdWUoKTsgcmV0dXJuIHNlbGYuZ2V0VGV4dCgpOyB9KTtcbiAgICB9XG4gICAgcHVibGljIGNyZWF0ZVRyaWdnZXIoKTogU3VydmV5LlN1cnZleVRyaWdnZXIge1xuICAgICAgICB2YXIgdHJpZ2dlciA9IDxTdXJ2ZXkuU3VydmV5VHJpZ2dlcj5TdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5jcmVhdGVDbGFzcyh0aGlzLnRyaWdnZXJUeXBlKTtcbiAgICAgICAgdHJpZ2dlci5uYW1lID0gdGhpcy5rb05hbWUoKTtcbiAgICAgICAgdHJpZ2dlci5vcGVyYXRvciA9IHRoaXMua29PcGVyYXRvcigpO1xuICAgICAgICB0cmlnZ2VyLnZhbHVlID0gdGhpcy5rb1ZhbHVlKCk7XG4gICAgICAgIHJldHVybiB0cmlnZ2VyO1xuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZU9wZXJhdG9ycygpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wZXJhdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLm9wZXJhdG9yc1tpXTtcbiAgICAgICAgICAgIHRoaXMuYXZhaWxhYmxlT3BlcmF0b3JzLnB1c2goeyBuYW1lOiBuYW1lLCB0ZXh0OiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwib3AuXCIgKyBuYW1lKSB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGdldFRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF0aGlzLmtvSXNWYWxpZCgpKSByZXR1cm4gZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnRyaWdnZXJOb3RTZXRcIik7XG4gICAgICAgIHJldHVybiBlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUudHJpZ2dlclJ1bklmXCIpICsgXCIgJ1wiICsgdGhpcy5rb05hbWUoKSArIFwiJyBcIiArIHRoaXMuZ2V0T3BlcmF0b3JUZXh0KCkgKyB0aGlzLmdldFZhbHVlVGV4dCgpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldE9wZXJhdG9yVGV4dCgpOiBzdHJpbmcge1xuICAgICAgICB2YXIgb3AgPSB0aGlzLmtvT3BlcmF0b3IoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmF2YWlsYWJsZU9wZXJhdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXZhaWxhYmxlT3BlcmF0b3JzW2ldLm5hbWUgPT0gb3ApIHJldHVybiB0aGlzLmF2YWlsYWJsZU9wZXJhdG9yc1tpXS50ZXh0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvcDtcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRWYWx1ZVRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF0aGlzLmtvUmVxdWlyZVZhbHVlKCkpIHJldHVybiBcIlwiO1xuICAgICAgICByZXR1cm4gXCIgXCIgKyB0aGlzLmtvVmFsdWUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVZpc2libGVUcmlnZ2VyIGV4dGVuZHMgU3VydmV5UHJvcGVydHlUcmlnZ2VyIHtcbiAgICBwdWJsaWMgcGFnZXM6IFN1cnZleVByb3BlcnR5VHJpZ2dlck9iamVjdHM7XG4gICAgcHVibGljIHF1ZXN0aW9uczogU3VydmV5UHJvcGVydHlUcmlnZ2VyT2JqZWN0cztcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHJpZ2dlcjogU3VydmV5LlN1cnZleVRyaWdnZXJWaXNpYmxlLCBrb1BhZ2VzOiBhbnksIGtvUXVlc3Rpb25zOiBhbnkpIHtcbiAgICAgICAgc3VwZXIodHJpZ2dlcik7XG4gICAgICAgIHRoaXMucGFnZXMgPSBuZXcgU3VydmV5UHJvcGVydHlUcmlnZ2VyT2JqZWN0cyhlZGl0b3JMb2NhbGl6YXRpb24uZ2V0U3RyaW5nKFwicGUudHJpZ2dlck1ha2VQYWdlc1Zpc2libGVcIiksIGtvUGFnZXMoKSwgdHJpZ2dlci5wYWdlcyk7XG4gICAgICAgIHRoaXMucXVlc3Rpb25zID0gbmV3IFN1cnZleVByb3BlcnR5VHJpZ2dlck9iamVjdHMoZWRpdG9yTG9jYWxpemF0aW9uLmdldFN0cmluZyhcInBlLnRyaWdnZXJNYWtlUXVlc3Rpb25zVmlzaWJsZVwiKSwga29RdWVzdGlvbnMoKSwgdHJpZ2dlci5xdWVzdGlvbnMpO1xuICAgIH1cbiAgICBwdWJsaWMgY3JlYXRlVHJpZ2dlcigpOiBTdXJ2ZXkuU3VydmV5VHJpZ2dlciB7XG4gICAgICAgIHZhciB0cmlnZ2VyID0gPFN1cnZleS5TdXJ2ZXlUcmlnZ2VyVmlzaWJsZT5zdXBlci5jcmVhdGVUcmlnZ2VyKCk7XG4gICAgICAgIHRyaWdnZXIucGFnZXMgPSB0aGlzLnBhZ2VzLmtvQ2hvb3NlbigpO1xuICAgICAgICB0cmlnZ2VyLnF1ZXN0aW9ucyA9IHRoaXMucXVlc3Rpb25zLmtvQ2hvb3NlbigpO1xuICAgICAgICByZXR1cm4gdHJpZ2dlcjtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlQcm9wZXJ0eVNldFZhbHVlVHJpZ2dlciBleHRlbmRzIFN1cnZleVByb3BlcnR5VHJpZ2dlciB7XG4gICAga29RdWVzdGlvbnM6IGFueTsga29zZXRUb05hbWU6IGFueTsga29zZXRWYWx1ZTogYW55OyBrb2lzVmFyaWFibGU6IGFueTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdHJpZ2dlcjogU3VydmV5LlN1cnZleVRyaWdnZXJTZXRWYWx1ZSwga29RdWVzdGlvbnM6IGFueSkge1xuICAgICAgICBzdXBlcih0cmlnZ2VyKTtcbiAgICAgICAgdGhpcy5rb1F1ZXN0aW9ucyA9IGtvUXVlc3Rpb25zO1xuICAgICAgICB0aGlzLmtvc2V0VG9OYW1lID0ga28ub2JzZXJ2YWJsZSh0cmlnZ2VyLnNldFRvTmFtZSk7XG4gICAgICAgIHRoaXMua29zZXRWYWx1ZSA9IGtvLm9ic2VydmFibGUodHJpZ2dlci5zZXRWYWx1ZSk7XG4gICAgICAgIHRoaXMua29pc1ZhcmlhYmxlID0ga28ub2JzZXJ2YWJsZSh0cmlnZ2VyLmlzVmFyaWFibGUpO1xuICAgIH1cbiAgICBwdWJsaWMgY3JlYXRlVHJpZ2dlcigpOiBTdXJ2ZXkuU3VydmV5VHJpZ2dlciB7XG4gICAgICAgIHZhciB0cmlnZ2VyID0gPFN1cnZleS5TdXJ2ZXlUcmlnZ2VyU2V0VmFsdWU+c3VwZXIuY3JlYXRlVHJpZ2dlcigpO1xuICAgICAgICB0cmlnZ2VyLnNldFRvTmFtZSA9IHRoaXMua29zZXRUb05hbWUoKTtcbiAgICAgICAgdHJpZ2dlci5zZXRWYWx1ZSA9IHRoaXMua29zZXRWYWx1ZSgpO1xuICAgICAgICB0cmlnZ2VyLmlzVmFyaWFibGUgPSB0aGlzLmtvaXNWYXJpYWJsZSgpO1xuICAgICAgICByZXR1cm4gdHJpZ2dlcjtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU3VydmV5UHJvcGVydHlUcmlnZ2VyT2JqZWN0cyB7XG4gICAga29PYmplY3RzOiBhbnk7XG4gICAga29DaG9vc2VuOiBhbnk7XG4gICAga29TZWxlY3RlZDogYW55O1xuICAgIGtvQ2hvb3NlblNlbGVjdGVkOiBhbnk7XG4gICAgcHVibGljIG9uRGVsZXRlQ2xpY2s6IGFueTtcbiAgICBwdWJsaWMgb25BZGRDbGljazogYW55O1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0aXRsZTogc3RyaW5nLCBhbGxPYmplY3RzOiBBcnJheTxzdHJpbmc+LCBjaG9vc2VuT2JqZWN0czogQXJyYXk8c3RyaW5nPikge1xuICAgICAgICB0aGlzLmtvQ2hvb3NlbiA9IGtvLm9ic2VydmFibGVBcnJheShjaG9vc2VuT2JqZWN0cyk7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbE9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gYWxsT2JqZWN0c1tpXTtcbiAgICAgICAgICAgIGlmIChjaG9vc2VuT2JqZWN0cy5pbmRleE9mKGl0ZW0pIDwgMCkge1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5rb09iamVjdHMgPSBrby5vYnNlcnZhYmxlQXJyYXkoYXJyYXkpO1xuICAgICAgICB0aGlzLmtvU2VsZWN0ZWQgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHRoaXMua29DaG9vc2VuU2VsZWN0ZWQgPSBrby5vYnNlcnZhYmxlKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5vbkRlbGV0ZUNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmRlbGV0ZUl0ZW0oKTsgfTtcbiAgICAgICAgdGhpcy5vbkFkZENsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmFkZEl0ZW0oKTsgfVxuICAgIH1cbiAgICBwcml2YXRlIGRlbGV0ZUl0ZW0oKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlSXRlbXModGhpcy5rb0Nob29zZW5TZWxlY3RlZCgpLCB0aGlzLmtvQ2hvb3NlbiwgdGhpcy5rb09iamVjdHMpO1xuICAgIH1cbiAgICBwcml2YXRlIGFkZEl0ZW0oKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlSXRlbXModGhpcy5rb1NlbGVjdGVkKCksIHRoaXMua29PYmplY3RzLCB0aGlzLmtvQ2hvb3Nlbik7XG4gICAgfVxuICAgIHByaXZhdGUgY2hhbmdlSXRlbXMoaXRlbTogc3RyaW5nLCByZW1vdmVkRnJvbTogYW55LCBhZGRUbzogYW55KSB7XG4gICAgICAgIHJlbW92ZWRGcm9tLnJlbW92ZShpdGVtKTtcbiAgICAgICAgYWRkVG8ucHVzaChpdGVtKTtcbiAgICAgICAgcmVtb3ZlZEZyb20uc29ydCgpO1xuICAgICAgICBhZGRUby5zb3J0KCk7XG4gICAgfVxufVxuXG5TdXJ2ZXlQcm9wZXJ0eUVkaXRvckJhc2UucmVnaXN0ZXJFZGl0b3IoXCJ0cmlnZ2Vyc1wiLCBmdW5jdGlvbiAoKTogU3VydmV5UHJvcGVydHlFZGl0b3JCYXNlIHsgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eVRyaWdnZXJzRWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlUcmlnZ2Vyc0VkaXRvci50cyIsImltcG9ydCAqIGFzIGtvIGZyb20gXCJrbm9ja291dFwiO1xuaW1wb3J0IHtTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yfSBmcm9tIFwiLi9wcm9wZXJ0eUl0ZW1zRWRpdG9yXCI7XG5pbXBvcnQge1N1cnZleVByb3BlcnR5RWRpdG9yQmFzZX0gZnJvbSBcIi4vcHJvcGVydHlFZGl0b3JCYXNlXCI7XG5pbXBvcnQge1N1cnZleU9iamVjdEVkaXRvcn0gZnJvbSBcIi4uL29iamVjdEVkaXRvclwiO1xuaW1wb3J0ICogYXMgU3VydmV5IGZyb20gXCJzdXJ2ZXkta25vY2tvdXRcIjtcblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5VmFsaWRhdG9yc0VkaXRvciBleHRlbmRzIFN1cnZleVByb3BlcnR5SXRlbXNFZGl0b3Ige1xuICAgIHByaXZhdGUgc2VsZWN0ZWRPYmplY3RFZGl0b3I6IFN1cnZleU9iamVjdEVkaXRvcjtcbiAgICBwdWJsaWMga29TZWxlY3RlZDogYW55O1xuICAgIHB1YmxpYyBhdmFpbGFibGVWYWxpZGF0b3JzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgcHJpdmF0ZSB2YWxpZGF0b3JDbGFzc2VzOiBBcnJheTxTdXJ2ZXkuSnNvbk1ldGFkYXRhQ2xhc3M+ID0gW107XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9iamVjdEVkaXRvciA9IG5ldyBTdXJ2ZXlPYmplY3RFZGl0b3IoKTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE9iamVjdEVkaXRvci5vblByb3BlcnR5VmFsdWVDaGFuZ2VkLmFkZCgoc2VuZGVyLCBvcHRpb25zKSA9PiB7XG4gICAgICAgICAgICBzZWxmLm9uUHJvcGVydHlWYWx1ZUNoYW5nZWQob3B0aW9ucy5wcm9wZXJ0eSwgb3B0aW9ucy5vYmplY3QsIG9wdGlvbnMubmV3VmFsdWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkID0ga28ub2JzZXJ2YWJsZShudWxsKTtcbiAgICAgICAgdGhpcy5rb1NlbGVjdGVkLnN1YnNjcmliZShmdW5jdGlvbiAobmV3VmFsdWUpIHsgc2VsZi5zZWxlY3RlZE9iamVjdEVkaXRvci5zZWxlY3RlZE9iamVjdCA9IG5ld1ZhbHVlICE9IG51bGwgPyBuZXdWYWx1ZS52YWxpZGF0b3IgOiBudWxsOyB9KTtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JDbGFzc2VzID0gU3VydmV5Lkpzb25PYmplY3QubWV0YURhdGEuZ2V0Q2hpbGRyZW5DbGFzc2VzKFwic3VydmV5dmFsaWRhdG9yXCIsIHRydWUpO1xuICAgICAgICB0aGlzLmF2YWlsYWJsZVZhbGlkYXRvcnMgPSB0aGlzLmdldEF2YWlsYWJsZVZhbGlkYXRvcnMoKTtcbiAgICAgICAgdGhpcy5vbkRlbGV0ZUNsaWNrID0gZnVuY3Rpb24gKCkgeyBzZWxmLmtvSXRlbXMucmVtb3ZlKHNlbGYua29TZWxlY3RlZCgpKTsgfTtcbiAgICAgICAgdGhpcy5vbkFkZENsaWNrID0gZnVuY3Rpb24gKHZhbGlkYXRvclR5cGUpIHsgc2VsZi5hZGRJdGVtKHZhbGlkYXRvclR5cGUpOyB9O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGVkaXRvclR5cGUoKTogc3RyaW5nIHsgcmV0dXJuIFwidmFsaWRhdG9yc1wiOyB9XG4gICAgcHJvdGVjdGVkIG9uVmFsdWVDaGFuZ2VkKCkge1xuICAgICAgICBzdXBlci5vblZhbHVlQ2hhbmdlZCgpO1xuICAgICAgICBpZiAodGhpcy5rb1NlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmtvU2VsZWN0ZWQodGhpcy5rb0l0ZW1zKCkubGVuZ3RoID4gMCA/IHRoaXMua29JdGVtcygpWzBdIDogbnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUVkaXRvckl0ZW0oaXRlbTogYW55KSB7XG4gICAgICAgIHZhciBqc29uT2JqID0gbmV3IFN1cnZleS5Kc29uT2JqZWN0KCk7XG4gICAgICAgIHZhciB2YWxpZGF0b3IgPSBTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5jcmVhdGVDbGFzcyhpdGVtLmdldFR5cGUoKSk7XG4gICAgICAgIGpzb25PYmoudG9PYmplY3QoaXRlbSwgdmFsaWRhdG9yKTtcbiAgICAgICAgcmV0dXJuIG5ldyBTdXJ2ZXlQcm9wZXJ0eVZhbGlkYXRvckl0ZW0odmFsaWRhdG9yKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIGNyZWF0ZUl0ZW1Gcm9tRWRpdG9ySXRlbShlZGl0b3JJdGVtOiBhbnkpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSA8U3VydmV5UHJvcGVydHlWYWxpZGF0b3JJdGVtPmVkaXRvckl0ZW07XG4gICAgICAgIHJldHVybiBpdGVtLnZhbGlkYXRvcjtcbiAgICB9XG4gICAgcHJpdmF0ZSBhZGRJdGVtKHZhbGlkYXRvclR5cGU6IHN0cmluZykge1xuICAgICAgICB2YXIgbmV3VmFsaWRhdG9yID0gbmV3IFN1cnZleVByb3BlcnR5VmFsaWRhdG9ySXRlbShTdXJ2ZXkuSnNvbk9iamVjdC5tZXRhRGF0YS5jcmVhdGVDbGFzcyh2YWxpZGF0b3JUeXBlKSk7XG4gICAgICAgIHRoaXMua29JdGVtcy5wdXNoKG5ld1ZhbGlkYXRvcik7XG4gICAgICAgIHRoaXMua29TZWxlY3RlZChuZXdWYWxpZGF0b3IpO1xuICAgIH1cbiAgICBwcml2YXRlIGdldEF2YWlsYWJsZVZhbGlkYXRvcnMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnZhbGlkYXRvckNsYXNzZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMudmFsaWRhdG9yQ2xhc3Nlc1tpXS5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBwcml2YXRlIG9uUHJvcGVydHlWYWx1ZUNoYW5nZWQocHJvcGVydHk6IFN1cnZleS5Kc29uT2JqZWN0UHJvcGVydHksIG9iajogYW55LCBuZXdWYWx1ZTogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLmtvU2VsZWN0ZWQoKSA9PSBudWxsKSByZXR1cm47XG4gICAgICAgIHRoaXMua29TZWxlY3RlZCgpLnZhbGlkYXRvcltwcm9wZXJ0eS5uYW1lXSA9IG5ld1ZhbHVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN1cnZleVByb3BlcnR5VmFsaWRhdG9ySXRlbSB7XG4gICAgcHVibGljIHRleHQ6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdmFsaWRhdG9yOiBTdXJ2ZXkuU3VydmV5VmFsaWRhdG9yKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHZhbGlkYXRvci5nZXRUeXBlKCk7XG4gICAgfVxufVxuXG5cblN1cnZleVByb3BlcnR5RWRpdG9yQmFzZS5yZWdpc3RlckVkaXRvcihcInZhbGlkYXRvcnNcIiwgZnVuY3Rpb24gKCk6IFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSB7IHJldHVybiBuZXcgU3VydmV5UHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yKCk7IH0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yLnRzIiwidmFyIGc7XHJcblxyXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxyXG5nID0gKGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiB0aGlzO1xyXG59KSgpO1xyXG5cclxudHJ5IHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcclxuXHRnID0gZyB8fCBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCkgfHwgKDEsZXZhbCkoXCJ0aGlzXCIpO1xyXG59IGNhdGNoKGUpIHtcclxuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxyXG5cdGlmKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpXHJcblx0XHRnID0gd2luZG93O1xyXG59XHJcblxyXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXHJcbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXHJcbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZztcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMzdfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJib290c3RyYXBcIixcImNvbW1vbmpzMlwiOlwiYm9vdHN0cmFwXCIsXCJjb21tb25qc1wiOlwiYm9vdHN0cmFwXCIsXCJhbWRcIjpcImJvb3RzdHJhcFwifVxuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInN2ZF9jb250YWluZXJcXFwiPlxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdmJhci1kZWZhdWx0IGNvbnRhaW5lci1mbHVpZCBuYXYgbmF2LXRhYnMgc3ZkX21lbnVcXFwiPlxcbiAgICAgICAgPGxpIGRhdGEtYmluZD1cXFwiY3NzOiB7YWN0aXZlOiBrb1ZpZXdUeXBlKCkgPT0gJ2Rlc2lnbmVyJ31cXFwiPjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6c2VsZWN0RGVzaWduZXJDbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdlZC5kZXNpZ25lcicpXFxcIj48L2E+PC9saT5cXG4gICAgICAgIDxsaSBkYXRhLWJpbmQ9XFxcInZpc2libGU6IHNob3dKU09ORWRpdG9yVGFiLCBjc3M6IHthY3RpdmU6IGtvVmlld1R5cGUoKSA9PSAnZWRpdG9yJ31cXFwiPjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6c2VsZWN0RWRpdG9yQ2xpY2ssIHRleHQ6ICRyb290LmdldExvY1N0cmluZygnZWQuanNvbkVkaXRvcicpXFxcIj48L2E+PC9saT5cXG4gICAgICAgIDxsaSBkYXRhLWJpbmQ9XFxcInZpc2libGU6IHNob3dUZXN0U3VydmV5VGFiLCBjc3M6IHthY3RpdmU6IGtvVmlld1R5cGUoKSA9PSAndGVzdCd9XFxcIj48YSBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOnNlbGVjdFRlc3RDbGljaywgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdlZC50ZXN0U3VydmV5JylcXFwiPjwvYT48L2xpPlxcbiAgICAgICAgPGxpIGRhdGEtYmluZD1cXFwidmlzaWJsZTogc2hvd0VtYmVkZWRTdXJ2ZXlUYWIsIGNzczoge2FjdGl2ZToga29WaWV3VHlwZSgpID09ICdlbWJlZCd9XFxcIj48YSBocmVmPVxcXCIjXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOnNlbGVjdEVtYmVkQ2xpY2ssIHRleHQ6ICRyb290LmdldExvY1N0cmluZygnZWQuZW1iZWRTdXJ2ZXknKVxcXCI+PC9hPjwvbGk+XFxuXFxuICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHRvb2xiYXJJdGVtcyAtLT5cXG4gICAgICAgIDxsaSBjbGFzcz1cXFwic3ZkX2FjdGlvbnNcXFwiIGRhdGEtYmluZD1cXFwiY3NzOiAkZGF0YS5jc3MsIHZpc2libGU6IHZpc2libGUsIGF0dHI6IHsgaWQ6IGlkIH1cXFwiPlxcbiAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJGRhdGEudGVtcGxhdGUgfHwgJ3N2ZC10b29sYmFyLWJ1dHRvbicsIGRhdGE6ICRkYXRhLmRhdGEgfHwgJGRhdGEgfSAtLT5cXG4gICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgIDwvbGk+XFxuICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgPC91bD5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgc3ZkX2NvbnRlbnRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93IHN2ZF9zdXJ2ZXlfZGVzaWduZXJcXFwiICBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvVmlld1R5cGUoKSA9PSAnZGVzaWduZXInXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMiBjb2wtbWQtMiBjb2wtc20tMSBjb2wteHMtMSBwYW5lbCBwYW5lbC1kZWZhdWx0IHN2ZF90b29sYm94XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYnRuLWdyb3VwLXZlcnRpY2FsXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJTtwYWRkaW5nLXJpZ2h0OjJweFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHRvb2xib3gua29JdGVtcyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgc3R5bGU9XFxcInRleHQtYWxpZ246bGVmdDsgbWFyZ2luOjFweDttaW4taGVpZ2h0OjM3cHg7IHdpZHRoOjEwMCVcXFwiIGRyYWdnYWJsZT1cXFwidHJ1ZVxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHJvb3QuY2xpY2tUb29sYm94SXRlbSwgZXZlbnQ6e2RyYWdzdGFydDogZnVuY3Rpb24oZWwsIGUpIHsgJHJvb3QuZHJhZ2dpbmdUb29sYm94SXRlbSgkZGF0YSwgZSk7IHJldHVybiB0cnVlO30sIGRyYWdlbmQ6IGZ1bmN0aW9uKGVsLCBlKSB7ICRyb290LmRyYWdFbmQoKTsgfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwiY3NzOiBpY29uTmFtZSwgYXR0cjoge3RpdGxlOiB0aXRsZX1cXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic3ZkX3Rvb2xib3hfaXRlbV90ZXh0IGhpZGRlbi1zbSBoaWRkZW4teHNcXFwiIGRhdGEtYmluZD1cXFwidGV4dDp0aXRsZVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAgLS0+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy03IGNvbC1tZC03IGNvbC1zbS04IGNvbC14cy0xMSBzdmRfZWRpdG9yc1xcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInN2ZF9wYWdlc19lZGl0b3JcXFwiIGRhdGEtYmluZD1cXFwidGVtcGxhdGU6IHsgbmFtZTogJ3BhZ2VlZGl0b3InLCBkYXRhOiBwYWdlc0VkaXRvciB9XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic3ZkX3F1ZXN0aW9uc19lZGl0b3JcXFwiIGlkPVxcXCJzY3JvbGxhYmxlRGl2XFxcIiBkYXRhLWJpbmQ9XFxcInN0eWxlOiB7aGVpZ2h0OiBrb0Rlc2lnbmVySGVpZ2h0fVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJzdXJ2ZXlqc1xcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy0zIGNvbC1tZC0zIGNvbC1zbS0zIGhpZGRlbi14cyBwYW5lbCBwYW5lbC1kZWZhdWx0IHN2ZF9wcm9wZXJ0aWVzXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicGFuZWwtaGVhZGluZyBpbnB1dC1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjdXN0b20tc2VsZWN0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVxcXCJvYmplY3RTZWxlY3RvclxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJvcHRpb25zOiBrb09iamVjdHMsIG9wdGlvbnNUZXh0OiAndGV4dCcsIHZhbHVlOiBrb1NlbGVjdGVkT2JqZWN0XFxcIj48L3NlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1iaW5kPVxcXCJlbmFibGU6IGtvQ2FuRGVsZXRlT2JqZWN0LCBjbGljazogZGVsZXRlQ3VycmVudE9iamVjdCwgYXR0cjogeyB0aXRsZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdlZC5kZWxTZWxPYmplY3QnKX1cXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdmRfb2JqZWN0X2VkaXRvclxcXCIgZGF0YS1iaW5kPVxcXCJzdHlsZToge2hlaWdodDoga29EZXNpZ25lckhlaWdodH1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInRlbXBsYXRlOiB7IG5hbWU6ICdvYmplY3RlZGl0b3InLCBkYXRhOiBzZWxlY3RlZE9iamVjdEVkaXRvciB9XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWZvb3RlclxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOnN1cnZleVZlcmJzLmtvSGFzVmVyYnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInRlbXBsYXRlOiB7IG5hbWU6ICdvYmplY3R2ZXJicycsIGRhdGE6IHN1cnZleVZlcmJzIH1cXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvVmlld1R5cGUoKSA9PSAnZWRpdG9yJ1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInRlbXBsYXRlOiB7IG5hbWU6ICdqc29uZWRpdG9yJywgZGF0YToganNvbkVkaXRvciB9XFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGRpdiBpZD1cXFwic3VydmV5anNUZXN0XFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvVmlld1R5cGUoKSA9PSAndGVzdCcsIHN0eWxlOiB7d2lkdGg6IGtvVGVzdFN1cnZleVdpZHRofVxcXCI+XFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwic3VydmV5anNFeGFtcGxlXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJzdXJ2ZXlqc0V4YW1wbGVSZXN1bHRzXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVxcXCJzdXJ2ZXlqc0V4YW1wbGVyZVJ1blxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazpzZWxlY3RUZXN0Q2xpY2ssIHRleHQ6ICRyb290LmdldExvY1N0cmluZygnZWQudGVzdFN1cnZleUFnYWluJylcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmVcXFwiPlRlc3QgQWdhaW48L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGRpdiBpZD1cXFwic3VydmV5anNFbWJlZFxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb1ZpZXdUeXBlKCkgPT0gJ2VtYmVkJ1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInRlbXBsYXRlOiB7IG5hbWU6ICdzdXJ2ZXllbWJlZGluZycsIGRhdGE6IHN1cnZleUVtYmVkaW5nIH1cXFwiPjwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGRhdGEtYmluZD1cXFwidGVtcGxhdGU6IHsgbmFtZTogJ3F1ZXN0aW9uZWRpdG9yJywgZGF0YTogcXVlc3Rpb25FZGl0b3JXaW5kb3cgfVxcXCI+PC9kaXY+XFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL2luZGV4Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcImpzb25lZGl0b3JcXFwiPlxcbiAgICA8ZGl2IGRhdGEtYmluZD1cXFwidmlzaWJsZTogIWhhc0FjZUVkaXRvclxcXCI+XFxuICAgICAgICA8dGV4dGFyZWEgY2xhc3M9XFxcInN2ZF9qc29uX2VkaXRvcl9hcmVhXFxcIiBkYXRhLWJpbmQ9XFxcInRleHRJbnB1dDprb1RleHRcXFwiPjwvdGV4dGFyZWE+XFxuICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGtvRXJyb3JzIC0tPlxcbiAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICA8c3Bhbj5FcnJvcjogPC9zcGFuPjxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogdGV4dFxcXCI+PC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8IS0tIC9rbyAgLS0+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGlkPVxcXCJzdXJ2ZXlqc0pTT05FZGl0b3JcXFwiIGNsYXNzPVxcXCJzdmRfanNvbl9lZGl0b3JcXFwiPjwvZGl2Plxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9qc29uZWRpdG9yLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInN1cnZleXMtbWFuYWdlXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic3ZkLW1hbmFnZVxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdmQtbWFuYWdlLW1hc2tcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTogaXNMb2FkaW5nXFxcIj48L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInN2ZC1tYW5hZ2UtY29udHJvbFxcXCI+XFxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwic3ZkLW1hbmFnZS1zZWxlY3RcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTogIWlzRWRpdE1vZGUoKSwgb3B0aW9uczogc3VydmV5cyxcXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zVGV4dDogJ25hbWUnLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjdXJyZW50U3VydmV5LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNDYXB0aW9uOiAnQ2hvb3NlIHN1cnZleSB0byBlZGl0IG9yIHN0YXJ0IGVkaXRpbmcgYW5kIHN1cnZleSB3aWxsIGJlIHNhdmVkIGF1dG9tYXRpY2FsbHkuLi4nXFxcIj48L3NlbGVjdD5cXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcInN2ZC1tYW5hZ2UtbmFtZVxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBpc0VkaXRNb2RlLCB2YWx1ZTogY3VycmVudFN1cnZleU5hbWUsIGV2ZW50OiB7IGtleXVwOiBuYW1lRWRpdG9yS2V5cHJlc3MgfVxcXCIvPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdmQtbWFuYWdlLWJ1dHRvbnNcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGN1cnJlbnRTdXJ2ZXksIGNsaWNrOiBlZGl0LCBjc3M6IGNzc0VkaXQsIGF0dHI6IHsgdGl0bGU6IHRpdGxlRWRpdCB9XFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb25cXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTogIWlzRWRpdE1vZGUoKSwgY2xpY2s6IGFkZCwgY3NzOiBjc3NBZGQsIGF0dHI6IHsgdGl0bGU6IHRpdGxlQWRkIH1cXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbiBpY29uLWRlbGV0ZVxcXCIgdGl0bGU9XFxcIkRlbGV0ZSBjdXJyZW50IHN1cnZleVxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiAhaXNFZGl0TW9kZSgpICYmICFzdXJ2ZXlJZCgpICYmIGN1cnJlbnRTdXJ2ZXkoKSwgY2xpY2s6cmVtb3ZlXFxcIj48L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9zY3JpcHQ+XFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJhdHRhY2gtc3VydmV5XFxcIj5cXG4gICAgPGEgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiYXR0cjogeyBocmVmOiBhY3Rpb24sIHRpdGxlOiB0aXRsZSB9XFxcIj48c3BhbiBjbGFzcz1cXFwiaWNvblxcXCIgZGF0YS1iaW5kPVxcXCJjc3M6IGlubmVyQ3NzXFxcIj48L3NwYW4+PHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiB0aXRsZVxcXCI+PC9zcGFuPjwvYT5cXG48L3NjcmlwdD5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvbWFuYWdlLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcIm9iamVjdGVkaXRvclxcXCI+XFxuICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGUgc3ZkX3RhYmxlLW5vd3JhcFxcXCI+XFxuICAgICAgICA8dGJvZHkgZGF0YS1iaW5kPVxcXCJmb3JlYWNoOiBrb1Byb3BlcnRpZXNcXFwiPlxcbiAgICAgICAgICAgIDx0ciBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50LmNoYW5nZUFjdGl2ZVByb3BlcnR5KCRkYXRhKSwgY3NzOiB7J2FjdGl2ZSc6ICRwYXJlbnQua29BY3RpdmVQcm9wZXJ0eSgpID09ICRkYXRhfVxcXCI+XFxuICAgICAgICAgICAgICAgIDx0ZCBkYXRhLWJpbmQ9XFxcInRleHQ6IGRpc3BsYXlOYW1lLCBhdHRyOiB7dGl0bGU6IHRpdGxlfVxcXCIgd2lkdGg9XFxcIjUwJVxcXCI+PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkIHdpZHRoPVxcXCI1MCVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiBrb1RleHQsIHZpc2libGU6ICRwYXJlbnQua29BY3RpdmVQcm9wZXJ0eSgpICE9ICRkYXRhIHx8IGRpc2FibGVkLCBhdHRyOiB7dGl0bGU6IGtvVGV4dH1cXFwiIHN0eWxlPVxcXCJ0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW5cXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiAkcGFyZW50LmtvQWN0aXZlUHJvcGVydHkoKSA9PSAkZGF0YSAmJiAhZGlzYWJsZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3Byb3BlcnR5ZWRpdG9yLScgKyBlZGl0b3JUeXBlLCBkYXRhOiAkZGF0YSB9IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgIDwvdGJvZHk+XFxuICAgIDwvdGFibGU+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL29iamVjdGVkaXRvci5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJvYmplY3R2ZXJic1xcXCI+XFxuICAgIDwhLS0ga28gZm9yZWFjaDoga29WZXJicyAtLT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiAgY2xhc3M9XFxcImlucHV0LWdyb3VwLWFkZG9uXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6dGV4dFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczoga29JdGVtcywgb3B0aW9uc1RleHQ6ICd0ZXh0Jywgb3B0aW9uc1ZhbHVlOid2YWx1ZScsIHZhbHVlOiBrb1NlbGVjdGVkSXRlbVxcXCI+PC9zZWxlY3Q+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPCEtLSAva28gIC0tPlxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9vYmplY3R2ZXJicy5odG1sXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwYWdlZWRpdG9yXFxcIj5cXG4gICAgPHVsIGNsYXNzPVxcXCJuYXYgbmF2LXRhYnNcXFwiIGRhdGEtYmluZD1cXFwidGFiczp0cnVlXFxcIj5cXG4gICAgICAgIDwhLS0ga28gZm9yZWFjaDoga29QYWdlcyAtLT5cXG4gICAgICAgIDxsaSBkYXRhLWJpbmQ9XFxcImNzczoge2FjdGl2ZToga29TZWxlY3RlZCgpfSxldmVudDp7XFxuICAgICAgICAgICBrZXlkb3duOmZ1bmN0aW9uKGVsLCBlKXsgJHBhcmVudC5rZXlEb3duKGVsLCBlKTsgfSxcXG4gICAgICAgICAgIGRyYWdzdGFydDpmdW5jdGlvbihlbCwgZSl7ICRwYXJlbnQuZHJhZ1N0YXJ0KGVsKTsgcmV0dXJuIHRydWU7IH0sXFxuICAgICAgICAgICBkcmFnb3ZlcjpmdW5jdGlvbihlbCwgZSl7ICRwYXJlbnQuZHJhZ092ZXIoZWwpO30sXFxuICAgICAgICAgICBkcmFnZW5kOmZ1bmN0aW9uKGVsLCBlKXsgJHBhcmVudC5kcmFnRW5kKCk7fSxcXG4gICAgICAgICAgIGRyb3A6ZnVuY3Rpb24oZWwsIGUpeyAkcGFyZW50LmRyYWdEcm9wKGVsKTt9XFxuICAgICAgICAgfVxcXCI+IFxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJzdmRfcGFnZV9uYXZcXFwiIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6JHBhcmVudC5zZWxlY3RQYWdlQ2xpY2tcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6IHRpdGxlXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgPC9saT5cXG4gICAgICAgIDwhLS0gL2tvICAtLT5cXG4gICAgICAgIDxsaT48YnV0dG9uIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHQgc3ZkX2FkZF9uZXdfcGFnZV9idG5cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6YWRkTmV3UGFnZUNsaWNrLCBhdHRyOiB7dGl0bGU6ICAkcm9vdC5nZXRMb2NTdHJpbmcoJ2VkLmFkZE5ld1BhZ2UnKX1cXFwiID48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXFxcIj48L3NwYW4+PC9idXR0b24+PC9saT5cXG4gICAgPC91bD5cXG48L3NjcmlwdD5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcGFnZWVkaXRvci5odG1sXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci1ib29sZWFuXFxcIj5cXG4gICAgPGlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHR5cGU9XFxcImNoZWNrYm94XFxcIiBkYXRhLWJpbmQ9XFxcImNoZWNrZWQ6IGtvVmFsdWVcXFwiIC8+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1ib29sZWFuLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLWRyb3Bkb3duXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY3VzdG9tLXNlbGVjdFxcXCI+XFxuICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6IGtvVmFsdWUsIG9wdGlvbnM6IGNob2ljZXNcXFwiICBzdHlsZT1cXFwid2lkdGg6MTAwJVxcXCI+PC9zZWxlY3Q+XFxuICAgIDwvZGl2Plxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItZHJvcGRvd24uaHRtbFxuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3ItZXhwcmVzc2lvblxcXCI+XFxuICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3Byb3BlcnR5ZWRpdG9yLW1vZGFsJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT5cXG48L3NjcmlwdD5cXG5cXG48c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yY29udGVudC1leHByZXNzaW9uXFxcIj5cXG4gICAgPGRpdj5cXG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvVmFsdWVcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIiByb3dzPVxcXCI4XFxcIiBhdXRvZm9jdXM9XFxcImF1dG9mb2N1c1xcXCI+PC90ZXh0YXJlYT5cXG4gICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDokcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmV4cHJlc3Npb25IZWxwJylcXFwiIHN0eWxlPVxcXCJ3aGl0ZS1zcGFjZTpub3JtYWxcXFwiPjwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuPC9zY3JpcHQ+XFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1leHByZXNzaW9uLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLWh0bWxcXFwiPlxcbiAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvci1tb2RhbCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+XFxuPC9zY3JpcHQ+XFxuXFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtaHRtbFxcXCI+XFxuICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvVmFsdWVcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDAlXFxcIiByb3dzPVxcXCIxMFxcXCIgYXV0b2ZvY3VzPVxcXCJhdXRvZm9jdXNcXFwiPjwvdGV4dGFyZWE+XFxuPC9zY3JpcHQ+XFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1odG1sLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLWl0ZW12YWx1ZXNcXFwiPlxcbiAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvci1tb2RhbCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+XFxuPC9zY3JpcHQ+XFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGNsYXNzPVxcXCJidG4teHNcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtaXRlbXZhbHVlc1xcXCI+XFxuICAgIDxkaXYgc3R5bGU9XFxcIm1hcmdpbi1ib3R0b206M3B4XFxcIj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0bi14c1xcXCIgZGF0YS1iaW5kPVxcXCJjc3M6IHsnYnRuIGJ0bi1wcmltYXJ5Jzprb0FjdGl2ZVZpZXcoKSA9PSAnZm9ybScsICdidG4tbGluayc6a29BY3RpdmVWaWV3KCkgIT0gJ2Zvcm0nfSwgY2xpY2s6Y2hhbmdlVG9Gb3JtVmlld0NsaWNrLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmZvcm1FbnRyeScpXFxcIj48L2J1dHRvbj5cXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0bi14c1xcXCIgZGF0YS1iaW5kPVxcXCJjc3M6IHsnYnRuIGJ0bi1wcmltYXJ5Jzprb0FjdGl2ZVZpZXcoKSAhPSAnZm9ybScsICdidG4tbGluayc6a29BY3RpdmVWaWV3KCkgPT0gJ2Zvcm0nfSwgY2xpY2s6Y2hhbmdlVG9UZXh0Vmlld0NsaWNrLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmZhc3RFbnRyeScpXFxcIj48L2J1dHRvbj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOmtvQWN0aXZlVmlldygpID09ICdmb3JtJ1xcXCIgc3R5bGU9XFxcIm92ZXJmbG93LXk6IGF1dG87IG92ZXJmbG93LXg6aGlkZGVuOyBtYXgtaGVpZ2h0OjQwMHB4O21pbi1oZWlnaHQ6MjAwcHhcXFwiPlxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZVxcXCIgPlxcbiAgICAgICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLnZhbHVlJylcXFwiPjwvdGg+XFxuICAgICAgICAgICAgICAgICAgICA8dGggZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLnRleHQnKVxcXCI+PC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxcbiAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDwvdGhlYWQ+XFxuICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGtvSXRlbXMgLS0+XFxuICAgICAgICAgICAgICAgIDx0cj5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXBcXFwiIHJvbGU9XFxcImdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXhzXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6ICRpbmRleCgpID4gMCwgY2xpY2s6ICRwYXJlbnQub25Nb3ZlVXBDbGlja1xcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tYXJyb3ctdXBcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi14c1xcXCIgc3R5bGU9XFxcImZsb2F0Om5vbmVcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTogJGluZGV4KCkgPCAkcGFyZW50LmtvSXRlbXMoKS5sZW5ndGggLSAxLCBjbGljazogJHBhcmVudC5vbk1vdmVEb3duQ2xpY2tcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWFycm93LWRvd25cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L3NwYW4+PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvVmFsdWVcXFwiIHN0eWxlPVxcXCJ3aWR0aDoyMDBweFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJhbGVydCBhbGVydC1kYW5nZXIgbm8tcGFkZGluZ1xcXCIgcm9sZT1cXFwiYWxlcnRcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTprb0hhc0Vycm9yLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmVudGVyTmV3VmFsdWUnKVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvVGV4dFxcXCIgc3R5bGU9XFxcIndpZHRoOjIwMHB4XFxcIiAvPjwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXhzXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50Lm9uRGVsZXRlQ2xpY2tcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPjwvdGQ+XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICA8L3RhYmxlPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicm93IGJ0bi10b29sYmFyXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6a29BY3RpdmVWaWV3KCkgPT0gJ2Zvcm0nXFxcIj5cXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IG9uQWRkQ2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmFkZE5ldycpXFxcIiAvPlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBvbkNsZWFyQ2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLnJlbW92ZUFsbCcpXFxcIiAvPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6a29BY3RpdmVWaWV3KCkgIT0gJ2Zvcm0nXFxcIj5cXG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInRleHRJbnB1dDoga29JdGVtc1RleHRcXFwiIHN0eWxlPVxcXCJvdmVyZmxvdy15OiBhdXRvOyBvdmVyZmxvdy14OmhpZGRlbjsgbWF4LWhlaWdodDo0MDBweDsgbWluLWhlaWdodDoyNTBweDsgd2lkdGg6MTAwJVxcXCI+PC90ZXh0YXJlYT5cXG4gICAgPC9kaXY+XFxuPC9zY3JpcHQ+XFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1pdGVtdmFsdWVzLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLW1hdHJpeGRyb3Bkb3duY29sdW1uc1xcXCI+XFxuICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3Byb3BlcnR5ZWRpdG9yLW1vZGFsJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT5cXG48L3NjcmlwdD5cXG48c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yY29udGVudC1tYXRyaXhkcm9wZG93bmNvbHVtbnNcXFwiPlxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvSXNMaXN0XFxcIj5cXG4gICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0aCBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUucmVxdWlyZWQnKVxcXCI+PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5jZWxsVHlwZScpXFxcIj48L3RoPlxcbiAgICAgICAgICAgICAgICA8dGggZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLm5hbWUnKVxcXCI+PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS50aXRsZScpXFxcIj48L3RoPlxcbiAgICAgICAgICAgICAgICA8dGg+PC90aD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgPC90aGVhZD5cXG4gICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGtvSXRlbXMgLS0+XFxuICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGRhdGEtYmluZD1cXFwiY2hlY2tlZDoga29Jc1JlcXVpcmVkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG5cXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZToga29DYW5FZGl0LCBjbGljazogJHBhcmVudC5vbkVkaXRJdGVtQ2xpY2tcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLWVkaXRcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczogY2VsbFR5cGVDaG9pY2VzLCB2YWx1ZToga29DZWxsVHlwZVxcXCIgIHN0eWxlPVxcXCJ3aWR0aDoxMTBweFxcXCI+PC9zZWxlY3Q+XFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvTmFtZVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMHB4XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYWxlcnQgYWxlcnQtZGFuZ2VyIG5vLXBhZGRpbmdcXFwiIHJvbGU9XFxcImFsZXJ0XFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6a29IYXNFcnJvciwgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5lbnRlck5ld1ZhbHVlJylcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICA8dGQ+PGlucHV0IHR5cGU9XFxcInRleHRcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6a29UaXRsZVxcXCIgc3R5bGU9XFxcIndpZHRoOjEyMHB4XFxcIiAvPjwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZD48YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0blxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogJHBhcmVudC5vbkRlbGV0ZUNsaWNrXFxcIj48c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmFzaFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj48L2J1dHRvbj48L3RkPlxcbiAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cXFwiNVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3cgYnRuLXRvb2xiYXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IG9uQWRkQ2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmFkZE5ldycpXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGFuZ2VyXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBvbkNsZWFyQ2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLnJlbW92ZUFsbCcpXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgIDwvdGJvZHk+XFxuICAgIDwvdGFibGU+XFxuICAgICA8IS0tIGtvIGlmOiAha29Jc0xpc3QoKSAtLT5cXG4gICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogXFxcInByb3BlcnR5ZWRpdG9yY29udGVudC1uZXN0ZWRcXFwiLCBkYXRhOiAkZGF0YSB9IC0tPlxcbiAgICAgICAgPCEtLSAva28gLS0+XFxuICAgIDwhLS0gL2tvIC0tPlxcbjwvc2NyaXB0PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItbWF0cml4ZHJvcGRvd25jb2x1bW5zLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLW1vZGFsXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTohZWRpdG9yLmlzRWRpdGFibGVcXFwiPlxcbiAgICAgICAgPGEgZGF0YS10b2dnbGU9XFxcIm1vZGFsXFxcIiBkYXRhLWJpbmQ9XFxcImF0dHI6IHsnZGF0YS10YXJnZXQnIDogbW9kYWxOYW1lVGFyZ2V0fVxcXCI+PHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiBrb1RleHRcXFwiPjwvc3Bhbj48L2E+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS10b2dnbGU9XFxcIm1vZGFsXFxcIiBzdHlsZT1cXFwicGFkZGluZzogMnB4O1xcXCIgZGF0YS1iaW5kPVxcXCJhdHRyOiB7J2RhdGEtdGFyZ2V0JyA6IG1vZGFsTmFtZVRhcmdldH1cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1lZGl0XFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOmVkaXRvci5pc0VkaXRhYmxlXFxcIiBzdHlsZT1cXFwiZGlzcGxheTp0YWJsZVxcXCI+XFxuICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZToga29WYWx1ZVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6dGFibGUtY2VsbDsgd2lkdGg6MTAwJVxcXCIgLz5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OnRhYmxlLWNlbGw7IHBhZGRpbmc6IDJweDtcXFwiICBkYXRhLXRvZ2dsZT1cXFwibW9kYWxcXFwiIGRhdGEtYmluZD1cXFwiYXR0cjogeydkYXRhLXRhcmdldCcgOiBtb2RhbE5hbWVUYXJnZXR9XFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tZWRpdFxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG4gICAgPGRpdiBkYXRhLWJpbmQ9XFxcImF0dHI6IHtpZCA6IG1vZGFsTmFtZX1cXFwiIGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZGlhbG9nXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiPiZ0aW1lczs8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiIGRhdGEtYmluZD1cXFwidGV4dDplZGl0b3IudGl0bGVcXFwiPjwvaDQ+XFxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHkgc3ZkX25vdG9wYm90dG9tcGFkZGluZ3NcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiAncHJvcGVydHllZGl0b3Jjb250ZW50LScgKyBlZGl0b3JUeXBlLCBkYXRhOiBlZGl0b3IgfSAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGVkaXRvci5vbkFwcGx5Q2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmFwcGx5JylcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDBweFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGVkaXRvci5vbkFwcGx5Q2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLm9rJylcXFwiIHN0eWxlPVxcXCJ3aWR0aDoxMDBweFxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGRhdGEtZGlzbWlzcz1cXFwibW9kYWxcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGVkaXRvci5vblJlc2V0Q2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmNhbmNlbCcpXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwcHhcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2Plxcbjwvc2NyaXB0PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItbW9kYWwuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3Jjb250ZW50LW5lc3RlZFxcXCI+XFxuICAgIDxkaXYgc3R5bGU9XFxcInBhZGRpbmc6IDVweFxcXCI+XFxuICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0blxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogb25DYW5jZWxFZGl0SXRlbUNsaWNrXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1saXN0LWFsdFxcXCI+PC9zcGFuPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6IGtvRWRpdEl0ZW0oKS5rb0VkaXRvck5hbWVcXFwiPjwvc3Bhbj5cXG4gICAgPC9kaXY+XFxuICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogXFxcInF1ZXN0aW9uZWRpdG9yLWNvbnRlbnRcXFwiLCBkYXRhOiBrb0VkaXRJdGVtKCkuaXRlbUVkaXRvciB9IC0tPlxcbiAgICA8IS0tIC9rbyAtLT5cXG48L3NjcmlwdD5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLW5lc3RlZC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci1udW1iZXJcXFwiPlxcbiAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwibnVtYmVyXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOiBrb1ZhbHVlXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwJVxcXCIgLz5cXG48L3NjcmlwdD5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLW51bWJlci5odG1sXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci1yZXN0ZnVsbFxcXCI+XFxuICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3Byb3BlcnR5ZWRpdG9yLW1vZGFsJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT5cXG48L3NjcmlwdD5cXG5cXG48c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yY29udGVudC1yZXN0ZnVsbFxcXCI+XFxuICAgIDxmb3JtPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwidXJsXFxcIj5Vcmw6PC9sYWJlbD5cXG4gICAgICAgICAgICA8aW5wdXQgaWQ9XFxcInVybFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1VybFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cXFwicGF0aFxcXCI+UGF0aDo8L2xhYmVsPlxcbiAgICAgICAgICAgIDxpbnB1dCBpZD1cXFwicGF0aFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1BhdGhcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIC8+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInZhbHVlTmFtZVxcXCI+dmFsdWVOYW1lOjwvbGFiZWw+XFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJ2YWx1ZU5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6a29WYWx1ZU5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIC8+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInRpdGxlTmFtZVxcXCI+dGl0bGVOYW1lOjwvbGFiZWw+XFxuICAgICAgICAgICAgPGlucHV0IGlkPVxcXCJ0aXRsZU5hbWVcXFwiIHR5cGU9XFxcInRleHRcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6a29UaXRsZU5hbWVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIC8+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XFxcInRpdGxlTmFtZVxcXCI+PHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiRyb290LmdldExvY1N0cmluZygncGUudGVzdFNlcnZpY2UnKVxcXCI+PC9zcGFuPjwvbGFiZWw+XFxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcIm9wdGlvbnM6IHF1ZXN0aW9uLmtvVmlzaWJsZUNob2ljZXMsIG9wdGlvbnNUZXh0OiAndGV4dCcsIG9wdGlvbnNWYWx1ZTogJ3ZhbHVlJywgb3B0aW9uc0NhcHRpb246IHF1ZXN0aW9uLm9wdGlvbnNDYXB0aW9uXFxcIj48L3NlbGVjdD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Zvcm0+XFxuPC9zY3JpcHQ+XFxuXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1yZXN0ZnVsbC5odG1sXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci1zdHJpbmdcXFwiPlxcbiAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZToga29WYWx1ZVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiIC8+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1zdHJpbmcuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3ItdGV4dFxcXCI+XFxuICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3Byb3BlcnR5ZWRpdG9yLW1vZGFsJywgZGF0YTogJGRhdGEgfSAtLT48IS0tIC9rbyAtLT5cXG48L3NjcmlwdD5cXG5cXG48c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yY29udGVudC10ZXh0XFxcIj5cXG4gICAgPHRleHRhcmVhIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6a29WYWx1ZVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMCVcXFwiIHJvd3M9XFxcIjEwXFxcIiBhdXRvZm9jdXM9XFxcImF1dG9mb2N1c1xcXCI+PC90ZXh0YXJlYT5cXG48L3NjcmlwdD5cXG5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXRleHQuaHRtbFxuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3ItdGV4dGl0ZW1zXFxcIj5cXG4gICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiAncHJvcGVydHllZGl0b3ItbW9kYWwnLCBkYXRhOiAkZGF0YSB9IC0tPjwhLS0gL2tvIC0tPlxcbjwvc2NyaXB0PlxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3Jjb250ZW50LXRleHRpdGVtc1xcXCI+XFxuPGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiPlxcbiAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvSXNMaXN0XFxcIj5cXG4gICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0aCBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUuaXNSZXF1aXJlZCcpXFxcIj48L3RoPlxcbiAgICAgICAgICAgICAgICA8dGggZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLm5hbWUnKVxcXCI+PC90aD5cXG4gICAgICAgICAgICAgICAgPHRoIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS50aXRsZScpXFxcIj48L3RoPlxcbiAgICAgICAgICAgICAgICA8dGg+PC90aD5cXG4gICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgPC90aGVhZD5cXG4gICAgICAgIDx0Ym9keT5cXG4gICAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGtvSXRlbXMgLS0+XFxuICAgICAgICAgICAgPHRyPlxcbiAgICAgICAgICAgICAgICA8dGQ+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGRhdGEtYmluZD1cXFwiY2hlY2tlZDoga29Jc1JlcXVpcmVkXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG5cXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQub25FZGl0SXRlbUNsaWNrXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1lZGl0XFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPjxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvTmFtZVxcXCIgc3R5bGU9XFxcIndpZHRoOjE4MHB4XFxcIiAvPjwvdGQ+XFxuICAgICAgICAgICAgICAgIDx0ZD48aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1RpdGxlXFxcIiBzdHlsZT1cXFwid2lkdGg6MTgwcHhcXFwiIC8+PC90ZD5cXG4gICAgICAgICAgICAgICAgPHRkPjxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiAkcGFyZW50Lm9uRGVsZXRlQ2xpY2tcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXRyYXNoXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPjwvdGQ+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVxcXCI0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IG9uQWRkQ2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmFkZE5ldycpXFxcIi8+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IG9uQ2xlYXJDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZygncGUucmVtb3ZlQWxsJylcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgPC90cj5cXG4gICAgICAgIDwvdGJvZHk+XFxuICAgIDwvdGFibGU+XFxuICAgICA8IS0tIGtvIGlmOiAha29Jc0xpc3QoKSAtLT5cXG4gICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogXFxcInByb3BlcnR5ZWRpdG9yY29udGVudC1uZXN0ZWRcXFwiLCBkYXRhOiAkZGF0YSB9IC0tPlxcbiAgICAgICAgPCEtLSAva28gLS0+XFxuICAgIDwhLS0gL2tvIC0tPlxcbjwvZGl2Plxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdGV4dGl0ZW1zLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLXRyaWdnZXJzXFxcIj5cXG4gICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiAncHJvcGVydHllZGl0b3ItbW9kYWwnLCBkYXRhOiAkZGF0YSB9IC0tPjwhLS0gL2tvIC0tPlxcbjwvc2NyaXB0PlxcbjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicHJvcGVydHllZGl0b3Jjb250ZW50LXRyaWdnZXJzXFxcIj5cXG48ZGl2IGNsYXNzPVxcXCJwYW5lbFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgc3R5bGU9XFxcIm1hcmdpbi1ib3R0b206MTBweFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtbGctMTJcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwIGZvcm0taW5saW5lXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0IGRyb3Bkb3duLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWhhc3BvcHVwPVxcXCJ0cnVlXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1xcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDogYXZhaWxhYmxlVHJpZ2dlcnMgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQub25BZGRDbGlja1xcXCI+PHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiRkYXRhXFxcIj48L3NwYW4+PC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJvcHRpb25zOiBrb0l0ZW1zLCBvcHRpb25zVGV4dDogJ2tvVGV4dCcsIHZhbHVlOiBrb1NlbGVjdGVkXFxcIj48L3NlbGVjdD5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgZGF0YS1iaW5kPVxcXCJlbmFibGU6IGtvU2VsZWN0ZWQoKSAhPSBudWxsLCBjbGljazogb25EZWxldGVDbGlja1xcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+PC9idXR0b24+XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvU2VsZWN0ZWQoKSA9PSBudWxsXFxcIj5cXG4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb1F1ZXN0aW9ucygpLmxlbmd0aCA9PSAwLCB0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLm5vcXVlc3Rpb25zJylcXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvUXVlc3Rpb25zKCkubGVuZ3RoID4gMCwgdGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5jcmVhdGV0cmlnZ2VyJylcXFwiPjwvZGl2PlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvU2VsZWN0ZWQoKSAhPSBudWxsXFxcIj5cXG4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ3aXRoOiBrb1NlbGVjdGVkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICBzdHlsZT1cXFwibWFyZ2luLWJvdHRvbToxMHB4XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTQgY29sLXNtLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgIGZvcm0taW5saW5lXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygncGUudHJpZ2dlck9uJylcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBkYXRhLWJpbmQ9XFxcIm9wdGlvbnM6JHBhcmVudC5rb1F1ZXN0aW9ucywgdmFsdWU6IGtvTmFtZVxcXCI+PC9zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy00IGNvbC1zbS00XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczphdmFpbGFibGVPcGVyYXRvcnMsIG9wdGlvbnNWYWx1ZTogJ25hbWUnLCBvcHRpb25zVGV4dDogJ3RleHQnLCB2YWx1ZTprb09wZXJhdG9yXFxcIj48L3NlbGVjdD5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTQgY29sLXNtLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6IGtvUmVxdWlyZVZhbHVlLCB2YWx1ZTprb1ZhbHVlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwhLS0ga28gaWY6IGtvVHlwZSgpID09ICd2aXNpYmxldHJpZ2dlcicgLS0+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTYgY29sLXNtLTZcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBrbyB0ZW1wbGF0ZTogeyBuYW1lOiAncHJvcGVydHllZGl0b3ItdHJpZ2dlcnNpdGVtcycsIGRhdGE6IHBhZ2VzIH0gLS0+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy02IGNvbC1zbS02XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJ3Byb3BlcnR5ZWRpdG9yLXRyaWdnZXJzaXRlbXMnLCBkYXRhOiBxdWVzdGlvbnMgfSAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICA8IS0tIGtvIGlmOiBrb1R5cGUoKSA9PSAnY29tcGxldGV0cmlnZ2VyJyAtLT5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XFxcIm1hcmdpbjogMTBweFxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLnRyaWdnZXJDb21wbGV0ZVRleHQnKVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgPCEtLSBrbyBpZjoga29UeXBlKCkgPT0gJ3NldHZhbHVldHJpZ2dlcicgLS0+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTQgY29sLXNtLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgZm9ybS1pbmxpbmVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS50cmlnZ2VyU2V0VG9OYW1lJylcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgdHlwZT1cXFwidGV4dFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb3NldFRvTmFtZVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTQgY29sLXNtLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAgZm9ybS1pbmxpbmVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS50cmlnZ2VyU2V0VmFsdWUnKVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvc2V0VmFsdWVcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTQgY29sLXNtLTRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgZGF0YS1iaW5kPVxcXCJjaGVja2VkOiBrb2lzVmFyaWFibGVcXFwiIC8+IDxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS50cmlnZ2VySXNWYXJpYWJsZScpXFxcIj48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbC1sZy04IGNvbC1zbS04XFxcIj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9kaXY+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci10cmlnZ2Vycy5odG1sXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvci10cmlnZ2Vyc2l0ZW1zXFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwicGFuZWwgbm8tbWFyZ2lucyBuby1wYWRkaW5nXFxcIj5cXG4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ0ZXh0OiB0aXRsZVxcXCIgc3R5bGU9XFxcIm1hcmdpbi1ib3R0b206MTBweFxcXCI+PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCI+XFxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBtdWx0aXBsZT1cXFwibXVsdGlwbGVcXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczprb0Nob29zZW4sIHZhbHVlOiBrb0Nob29zZW5TZWxlY3RlZFxcXCI+PC9zZWxlY3Q+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCIgc3R5bGU9XFxcInZlcnRpY2FsLWFsaWduOnRvcFxcXCI+XFxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBkYXRhLWJpbmQ9XFxcImVuYWJsZToga29DaG9vc2VuU2VsZWN0ZWQoKSAhPSBudWxsLCBjbGljazogb25EZWxldGVDbGlja1xcXCIgY2xhc3M9XFxcImJ0blxcXCI+PHNwYW4gY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIj48L3NwYW4+PC9idXR0b24+XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cFxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6NXB4XFxcIj5cXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwib3B0aW9uczprb09iamVjdHMsIHZhbHVlOiBrb1NlbGVjdGVkXFxcIj48L3NlbGVjdD5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaW5wdXQtZ3JvdXAtYnRuXFxcIj5cXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiIGRhdGEtYmluZD1cXFwiZW5hYmxlOiBrb1NlbGVjdGVkKCkgIT0gbnVsbCwgY2xpY2s6IG9uQWRkQ2xpY2tcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXN1Y2Nlc3NcXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci10cmlnZ2Vyc2l0ZW1zLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInByb3BlcnR5ZWRpdG9yLXZhbGlkYXRvcnNcXFwiPlxcbiAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6ICdwcm9wZXJ0eWVkaXRvci1tb2RhbCcsIGRhdGE6ICRkYXRhIH0gLS0+PCEtLSAva28gLS0+XFxuPC9zY3JpcHQ+XFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJwcm9wZXJ0eWVkaXRvcmNvbnRlbnQtdmFsaWRhdG9yc1xcXCI+XFxuPGRpdiBjbGFzcz1cXFwicGFuZWxcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiIHN0eWxlPVxcXCJtYXJnaW4tYm90dG9tOjEwcHhcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sLWxnLTEyXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbnB1dC1ncm91cCBmb3JtLWlubGluZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlucHV0LWdyb3VwLWJ0blxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBkcm9wZG93bi10b2dnbGVcXFwiIGRhdGEtdG9nZ2xlPVxcXCJkcm9wZG93blxcXCIgYXJpYS1oYXNwb3B1cD1cXFwidHJ1ZVxcXCIgYXJpYS1leHBhbmRlZD1cXFwiZmFsc2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJkcm9wZG93bi1tZW51XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IGF2YWlsYWJsZVZhbGlkYXRvcnMgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6ICRwYXJlbnQub25BZGRDbGlja1xcXCI+PHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiRkYXRhXFxcIj48L3NwYW4+PC9hPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJvcHRpb25zOiBrb0l0ZW1zLCBvcHRpb25zVGV4dDogJ3RleHQnLCB2YWx1ZToga29TZWxlY3RlZFxcXCI+PC9zZWxlY3Q+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpbnB1dC1ncm91cC1idG5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGRhdGEtYmluZD1cXFwiZW5hYmxlOiBrb1NlbGVjdGVkKCkgIT0gbnVsbCwgY2xpY2s6IG9uRGVsZXRlQ2xpY2tcXFwiIGNsYXNzPVxcXCJidG5cXFwiPjxzcGFuIGNsYXNzPVxcXCJnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZVxcXCI+PC9zcGFuPjwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ0ZW1wbGF0ZTogeyBuYW1lOiAnb2JqZWN0ZWRpdG9yJywgZGF0YTogc2VsZWN0ZWRPYmplY3RFZGl0b3IgfVxcXCI+PC9kaXY+XFxuPC9kaXY+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci12YWxpZGF0b3JzLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInF1ZXN0aW9uZWRpdG9yLWNvbnRlbnRcXFwiPlxcbiAgICA8dWwgY2xhc3M9XFxcIm5hdiBuYXYtdGFic1xcXCIgZGF0YS1iaW5kPVxcXCJmb3JlYWNoOiBrb1RhYnNcXFwiPlxcbiAgICAgICAgPGxpIHJvbGU9XFxcInByZXNlbnRhdGlvblxcXCIgZGF0YS1iaW5kPVxcXCJjc3M6IHthY3RpdmU6ICRwYXJlbnQua29BY3RpdmVUYWIoKSA9PSAkZGF0YS5uYW1lfSwgY2xpY2s6ICRwYXJlbnQub25UYWJDbGlja1xcXCI+PGE+PHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiRkYXRhLnRpdGxlXFxcIj48L3NwYW4+PC9hPjwvbGk+XFxuICAgIDwvdWw+ICAgICAgICAgICAgICAgXFxuICAgIDwhLS0ga28gZm9yZWFjaDoga29UYWJzIC0tPlxcbiAgICA8ZGl2IGRhdGEtYmluZD1cXFwidmlzaWJsZTokcGFyZW50LmtvQWN0aXZlVGFiKCkgPT0gJGRhdGEubmFtZVxcXCIgc3R5bGU9XFxcIm1hcmdpbi10b3A6NXB4XFxcIj5cXG4gICAgICAgIDwhLS0ga28gdGVtcGxhdGU6IHsgbmFtZTogJGRhdGEuaHRtbFRlbXBsYXRlLCBkYXRhOiAkZGF0YS50ZW1wbGF0ZU9iamVjdCB9IC0tPlxcbiAgICAgICAgPCEtLSAva28gLS0+XFxuICAgIDwvZGl2PlxcbiAgICA8IS0tIC9rbyAgLS0+XFxuPC9zY3JpcHQ+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvdGVtcGxhdGVzL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbmVkaXRvci1jb250ZW50Lmh0bWxcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInF1ZXN0aW9uZWRpdG9yXFxcIj5cXG4gICAgPGRpdiBpZD1cXFwic3VydmV5cXVlc3Rpb25lZGl0b3J3aW5kb3dcXFwiIGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiByb2xlPVxcXCJkaWFsb2dcXFwiZGF0YS1iaW5kPVxcXCJ3aXRoOmtvRWRpdG9yXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZ1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIj4mdGltZXM7PC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6a29UaXRsZVxcXCI+PC9oND5cXG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtYm9keSBzdmRfbm90b3Bib3R0b21wYWRkaW5nc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIHRlbXBsYXRlOiB7IG5hbWU6IFxcXCJxdWVzdGlvbmVkaXRvci1jb250ZW50XFxcIiwgZGF0YTogJGRhdGEgfSAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IG9uQXBwbHlDbGljaywgdmFsdWU6ICRyb290LmdldExvY1N0cmluZygncGUuYXBwbHknKVxcXCIgc3R5bGU9XFxcIndpZHRoOjEwMHB4XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdFxcXCIgZGF0YS1iaW5kPVxcXCJjbGljazogb25Pa0NsaWNrLCB2YWx1ZTogJHJvb3QuZ2V0TG9jU3RyaW5nKCdwZS5vaycpXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwcHhcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIiBkYXRhLWRpc21pc3M9XFxcIm1vZGFsXFxcIiBkYXRhLWJpbmQ9XFxcImNsaWNrOiBvblJlc2V0Q2xpY2ssIHZhbHVlOiAkcm9vdC5nZXRMb2NTdHJpbmcoJ3BlLmNhbmNlbCcpXFxcIiBzdHlsZT1cXFwid2lkdGg6MTAwcHhcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2Plxcbjwvc2NyaXB0PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25lZGl0b3IuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwicXVlc3Rpb25lZGl0b3J0YWItZ2VuZXJhbFxcXCI+XFxuICAgIDxkaXY+XFxuICAgICAgICA8IS0tIGtvIGZvcmVhY2g6IHByb3BlcnRpZXMucm93cyAtLT5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDogcHJvcGVydGllcyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImFsZXJ0IGFsZXJ0LWRhbmdlclxcXCIgcm9sZT1cXFwiYWxlcnRcXFwiIGRhdGEtYmluZD1cXFwidmlzaWJsZTprb0hhc0Vycm9yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ2x5cGhpY29uIGdseXBoaWNvbi1leGNsYW1hdGlvbi1zaWduXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzci1vbmx5XFxcIj5FcnJvcjo8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gIGRhdGEtYmluZD1cXFwidGV4dDprb0Vycm9yVGV4dFxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGlmOiBlZGl0VHlwZSAhPSAnY2hlY2snIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBkYXRhLWJpbmQ9XFxcInRleHQ6dGl0bGVcXFwiPjwvbGFiZWw+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gaWY6IGVkaXRUeXBlID09ICd0ZXh0JyAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgZGF0YS1iaW5kPVxcXCJ2YWx1ZToga29WYWx1ZSwgZGlzYWJsZTogZGlzYWJsZWRcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gaWY6IGVkaXRUeXBlID09ICd0ZXh0YXJlYScgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHR5cGU9XFxcInRleHRcXFwiIHJvd3M9XFxcIjJcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGRhdGEtYmluZD1cXFwidmFsdWU6IGtvVmFsdWUsIGRpc2FibGU6IGRpc2FibGVkXFxcIj48L3RleHRhcmVhPlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIGtvIGlmOiBlZGl0VHlwZSA9PSAnY2hlY2snIC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjaGVja2JveC1pbmxpbmVcXFwiPjxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgZGF0YS1iaW5kPVxcXCJjaGVja2VkOiBrb1ZhbHVlLCBkaXNhYmxlOiBkaXNhYmxlZFxcXCI+PGxhYmVsIGRhdGEtYmluZD1cXFwidGV4dDp0aXRsZVxcXCI+PC9sYWJlbD48L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIC9rbyAtLT5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ga28gaWY6IGVkaXRUeXBlID09ICdkcm9wZG93bicgLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiAgZGF0YS1iaW5kPVxcXCJ2YWx1ZToga29WYWx1ZSwgb3B0aW9uczogY2hvaWNlcywgZGlzYWJsZTogZGlzYWJsZWRcXFwiPjwvc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgPCEtLSAva28gLS0+XFxuICAgICAgICAgICAgPCEtLSAva28gIC0tPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8IS0tIC9rbyAgLS0+XFxuICAgIDwvZGl2Plxcbjwvc2NyaXB0PlxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25lZGl0b3J0YWItZ2VuZXJhbC5odG1sXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJzdXJ2ZXllbWJlZGluZ1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxuICAgICAgICA8c2VsZWN0IGRhdGEtYmluZD1cXFwidmFsdWU6a29MaWJyYXJ5VmVyc2lvblxcXCI+XFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwiYW5ndWxhclxcXCIgZGF0YS1iaW5kPVxcXCJ0ZXh0OiAkcm9vdC5nZXRMb2NTdHJpbmcoJ2V3LmFuZ3VsYXInKVxcXCI+PC9vcHRpb24+XFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwianF1ZXJ5XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcuanF1ZXJ5JylcXFwiPjwvb3B0aW9uPlxcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XFxcImtub2Nrb3V0XFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcua25vY2tvdXQnKVxcXCI+PC9vcHRpb24+XFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwicmVhY3RcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdldy5yZWFjdCcpXFxcIj48L29wdGlvbj5cXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJ2dWVcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdldy52dWUnKVxcXCI+PC9vcHRpb24+XFxuICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgIDxzZWxlY3QgZGF0YS1iaW5kPVxcXCJ2YWx1ZTprb1NjcmlwdFVzaW5nXFxcIj5cXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJib290c3RyYXBcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdldy5ib290c3RyYXAnKVxcXCI+PC9vcHRpb24+XFxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cXFwic3RhbmRhcmRcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdldy5zdGFuZGFyZCcpXFxcIj48L29wdGlvbj5cXG4gICAgICAgIDwvc2VsZWN0PlxcbiAgICAgICAgPHNlbGVjdCBkYXRhLWJpbmQ9XFxcInZhbHVlOmtvU2hvd0FzV2luZG93XFxcIj5cXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJwYWdlXFxcIiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcuc2hvd09uUGFnZScpXFxcIj48L29wdGlvbj5cXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVxcXCJ3aW5kb3dcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdldy5zaG93SW5XaW5kb3cnKVxcXCI+PC9vcHRpb24+XFxuICAgICAgICA8L3NlbGVjdD5cXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiY2hlY2tib3gtaW5saW5lXFxcIiBkYXRhLWJpbmQ9XFxcInZpc2libGU6a29IYXNJZHNcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgZGF0YS1iaW5kPVxcXCJjaGVja2VkOmtvTG9hZFN1cnZleVxcXCIgLz5cXG4gICAgICAgICAgICA8c3BhbiBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcubG9hZEZyb21TZXJ2ZXInKVxcXCI+PC9zcGFuPlxcbiAgICAgICAgPC9sYWJlbD5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiIGRhdGEtYmluZD1cXFwidGV4dDogJHJvb3QuZ2V0TG9jU3RyaW5nKCdldy50aXRsZVNjcmlwdCcpXFxcIj48L2Rpdj5cXG4gICAgICAgIDxkaXYgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOmhhc0FjZUVkaXRvclxcXCI+XFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwic3VydmV5RW1iZWRpbmdIZWFkXFxcIiBzdHlsZT1cXFwiaGVpZ2h0OjcwcHg7d2lkdGg6MTAwJVxcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDx0ZXh0YXJlYSBkYXRhLWJpbmQ9XFxcInZpc2libGU6IWhhc0FjZUVkaXRvciwgdGV4dDoga29IZWFkVGV4dFxcXCIgc3R5bGU9XFxcImhlaWdodDo3MHB4O3dpZHRoOjEwMCVcXFwiPjwvdGV4dGFyZWE+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbFxcXCIgZGF0YS1iaW5kPVxcXCJ2aXNpYmxlOiBrb1Zpc2libGVIdG1sXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiICBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcudGl0bGVIdG1sJylcXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6aGFzQWNlRWRpdG9yXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJzdXJ2ZXlFbWJlZGluZ0JvZHlcXFwiIHN0eWxlPVxcXCJoZWlnaHQ6MzBweDt3aWR0aDoxMDAlXFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPHRleHRhcmVhIGRhdGEtYmluZD1cXFwidmlzaWJsZTohaGFzQWNlRWRpdG9yLCB0ZXh0OiBrb0JvZHlUZXh0XFxcIiBzdHlsZT1cXFwiaGVpZ2h0OjMwcHg7d2lkdGg6MTAwJVxcXCI+PC90ZXh0YXJlYT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsLWhlYWRpbmdcXFwiICBkYXRhLWJpbmQ9XFxcInRleHQ6ICRyb290LmdldExvY1N0cmluZygnZXcudGl0bGVKYXZhU2NyaXB0JylcXFwiPjwvZGl2PlxcbiAgICAgICAgPGRpdiBkYXRhLWJpbmQ9XFxcInZpc2libGU6aGFzQWNlRWRpdG9yXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJzdXJ2ZXlFbWJlZGluZ0phdmFcXFwiIHN0eWxlPVxcXCJoZWlnaHQ6MzAwcHg7d2lkdGg6MTAwJVxcXCI+PC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDx0ZXh0YXJlYSBkYXRhLWJpbmQ9XFxcInZpc2libGU6IWhhc0FjZUVkaXRvciwgdGV4dDoga29KYXZhVGV4dFxcXCIgc3R5bGU9XFxcImhlaWdodDozMDBweDt3aWR0aDoxMDAlXFxcIj48L3RleHRhcmVhPlxcbiAgICA8L2Rpdj5cXG48L3NjcmlwdD5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy90ZW1wbGF0ZXMvc3VydmV5ZW1iZWRpbmcuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzY3JpcHQgdHlwZT1cXFwidGV4dC9odG1sXFxcIiBpZD1cXFwic3ZkLXRvb2xiYXItYnV0dG9uXFxcIj5cXG4gICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiIGRhdGEtYmluZD1cXFwiZW5hYmxlOiAkZGF0YS5lbmFibGVkIHx8IHRydWUsIGNsaWNrOiBhY3Rpb24sIGNzczogJGRhdGEuaW5uZXJDc3NcXFwiPjxzcGFuIGRhdGEtYmluZD1cXFwidGV4dDogdGl0bGVcXFwiPjwvc3Bhbj48L2J1dHRvbj5cXG48L3NjcmlwdD5cXG48c2NyaXB0IHR5cGU9XFxcInRleHQvaHRtbFxcXCIgaWQ9XFxcInN2ZC10b29sYmFyLW9wdGlvbnNcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJidG4tZ3JvdXAgaW5saW5lXFxcIj5cXG4gICAgICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5IGRyb3Bkb3duLXRvZ2dsZVxcXCIgZGF0YS10b2dnbGU9XFxcImRyb3Bkb3duXFxcIiBhcmlhLWhhc3BvcHVwPVxcXCJ0cnVlXFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJmYWxzZVxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiB0aXRsZVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJldFxcXCI+PC9zcGFuPlxcbiAgICAgICAgPC9idXR0b24+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcbiAgICAgICAgICAgIDwhLS0ga28gZm9yZWFjaDogaXRlbXMgLS0+XFxuICAgICAgICAgICAgPGxpIGRhdGEtYmluZD1cXFwiY3NzOiAkZGF0YS5jc3NcXFwiPjxhIGhyZWY9XFxcIiNcXFwiIGRhdGEtYmluZD1cXFwiY2xpY2s6IGFjdGlvbiwgdGV4dDogdGl0bGVcXFwiPjwvYT48L2xpPlxcbiAgICAgICAgICAgIDwhLS0gL2tvIC0tPlxcbiAgICAgICAgPC91bD5cXG4gICAgPC9kaXY+XFxuPC9zY3JpcHQ+XFxuPHNjcmlwdCB0eXBlPVxcXCJ0ZXh0L2h0bWxcXFwiIGlkPVxcXCJzdmQtdG9vbGJhci1zdGF0ZVxcXCI+XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uXFxcIiBkYXRhLWJpbmQ9XFxcImNzczogaW5uZXJDc3NcXFwiPjwvc3Bhbj5cXG4gICAgPHNwYW4gZGF0YS1iaW5kPVxcXCJ0ZXh0OiB0aXRsZVxcXCI+PC9zcGFuPlxcbjwvc2NyaXB0PlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3RlbXBsYXRlcy90b29sYmFyLmh0bWxcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJcIiArIHJlcXVpcmUoJy4vaW5kZXguaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vanNvbmVkaXRvci5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9vYmplY3RlZGl0b3IuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vb2JqZWN0dmVyYnMuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcGFnZWVkaXRvci5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9zdXJ2ZXllbWJlZGluZy5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9xdWVzdGlvbkVkaXRvcnMvcXVlc3Rpb25lZGl0b3IuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uZWRpdG9yLWNvbnRlbnQuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uZWRpdG9ydGFiLWdlbmVyYWwuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWJvb2xlYW4uaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLWRyb3Bkb3duLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1odG1sLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1leHByZXNzaW9uLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1pdGVtdmFsdWVzLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci1uZXN0ZWQuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLW1hdHJpeGRyb3Bkb3duY29sdW1ucy5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItbW9kYWwuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLW51bWJlci5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItcmVzdGZ1bGwuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5ZWRpdG9yLXN0cmluZy5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdGV4dC5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdGV4dGl0ZW1zLmh0bWwnKSArIFwiXFxuXCIgKyByZXF1aXJlKCcuL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eWVkaXRvci10cmlnZ2Vycy5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdHJpZ2dlcnNpdGVtcy5odG1sJykgKyBcIlxcblwiICsgcmVxdWlyZSgnLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHllZGl0b3ItdmFsaWRhdG9ycy5odG1sJykgKyBcIlxcblxcblwiICsgcmVxdWlyZSgnLi9tYW5hZ2UuaHRtbCcpICsgXCJcXG5cIiArIHJlcXVpcmUoJy4vdG9vbGJhci5odG1sJykgKyBcIlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9odG1sLWxvYWRlcj9pbnRlcnBvbGF0ZSEuL34vdmFsLWxvYWRlciEuL3NyYy90ZW1wbGF0ZXMvZW50cnkuaHRtbFxuLy8gbW9kdWxlIGlkID0gNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMga28gZnJvbSBcImtub2Nrb3V0XCI7XG5pbXBvcnQge1N1cnZleVRleHRXb3JrZXJ9IGZyb20gXCIuL3RleHRXb3JrZXJcIjtcbmltcG9ydCAqIGFzIFN1cnZleSBmcm9tIFwic3VydmV5LWtub2Nrb3V0XCI7XG5cbmV4cG9ydCBjbGFzcyBTdXJ2ZXlKU09ORWRpdG9yIHtcbiAgICBwdWJsaWMgc3RhdGljIHVwZGF0ZVRleHRUaW1lb3V0OiBudW1iZXIgPSAxMDAwO1xuXG4gICAgcHJpdmF0ZSBpc1Byb2Nlc3NpbmdJbW1lZGlhdGVseTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgYWNlRWRpdG9yOiBBY2VBamF4LkVkaXRvcjtcbiAgICBwcml2YXRlIHRleHRXb3JrZXI6IFN1cnZleVRleHRXb3JrZXI7XG4gICAga29UZXh0OiBhbnk7XG4gICAga29FcnJvcnM6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmtvVGV4dCA9IGtvLm9ic2VydmFibGUoXCJcIik7XG4gICAgICAgIHRoaXMua29FcnJvcnMgPSBrby5vYnNlcnZhYmxlQXJyYXkoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmtvVGV4dC5zdWJzY3JpYmUoZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBzZWxmLm9uSnNvbkVkaXRvckNoYW5nZWQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBpbml0KCkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzQWNlRWRpdG9yKSByZXR1cm47XG4gICAgICAgIHRoaXMuYWNlRWRpdG9yID0gYWNlLmVkaXQoXCJzdXJ2ZXlqc0pTT05FZGl0b3JcIik7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgLy9UT0RPIGFkZCBldmVudCB0byBjaGFuZ2UgYWNlIHRoZW1lIGFuZCBtb2RlXG4gICAgICAgIC8vdGhpcy5hY2VFZGl0b3Iuc2V0VGhlbWUoXCJhY2UvdGhlbWUvbW9ub2thaVwiKTtcbiAgICAgICAgLy90aGlzLmFjZUVkaXRvci5zZXNzaW9uLnNldE1vZGUoXCJhY2UvbW9kZS9qc29uXCIpO1xuICAgICAgICB0aGlzLmFjZUVkaXRvci5zZXRTaG93UHJpbnRNYXJnaW4oZmFsc2UpO1xuICAgICAgICB0aGlzLmFjZUVkaXRvci5nZXRTZXNzaW9uKCkub24oXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5vbkpzb25FZGl0b3JDaGFuZ2VkKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFjZUVkaXRvci5nZXRTZXNzaW9uKCkuc2V0VXNlV29ya2VyKHRydWUpO1xuICAgICAgICBTdXJ2ZXlUZXh0V29ya2VyLm5ld0xpbmVDaGFyID0gdGhpcy5hY2VFZGl0b3Iuc2Vzc2lvbi5kb2MuZ2V0TmV3TGluZUNoYXJhY3RlcigpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGhhc0FjZUVkaXRvcigpOiBib29sZWFuIHsgcmV0dXJuIHR5cGVvZiBhY2UgIT09IFwidW5kZWZpbmVkXCI7IH1cbiAgICBwdWJsaWMgZ2V0IHRleHQoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0FjZUVkaXRvcikgcmV0dXJuIHRoaXMua29UZXh0KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFjZUVkaXRvci5nZXRWYWx1ZSgpO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHRleHQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmlzUHJvY2Vzc2luZ0ltbWVkaWF0ZWx5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5rb1RleHQodmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5hY2VFZGl0b3IpIHtcbiAgICAgICAgICAgIHRoaXMuYWNlRWRpdG9yLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuYWNlRWRpdG9yLnJlbmRlcmVyLnVwZGF0ZUZ1bGwodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9jZXNzSnNvbih2YWx1ZSk7XG4gICAgICAgIHRoaXMuaXNQcm9jZXNzaW5nSW1tZWRpYXRlbHkgPSBmYWxzZTtcbiAgICB9XG4gICAgcHVibGljIHNob3codmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRleHQgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuYWNlRWRpdG9yKSB7XG4gICAgICAgICAgICB0aGlzLmFjZUVkaXRvci5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaXNKc29uQ29ycmVjdCgpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy50ZXh0V29ya2VyID0gbmV3IFN1cnZleVRleHRXb3JrZXIodGhpcy50ZXh0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dFdvcmtlci5pc0pzb25Db3JyZWN0O1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN1cnZleSgpOiBTdXJ2ZXkuU3VydmV5IHsgcmV0dXJuIHRoaXMudGV4dFdvcmtlci5zdXJ2ZXk7IH1cbiAgICBwcml2YXRlIHRpbWVvdXRJZDogbnVtYmVyID0gLTE7XG4gICAgcHJpdmF0ZSBvbkpzb25FZGl0b3JDaGFuZ2VkKCk6IGFueSB7XG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXRJZCA+IC0xKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0SWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzUHJvY2Vzc2luZ0ltbWVkaWF0ZWx5KSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZCA9IC0xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnRpbWVvdXRJZCA9IC0xO1xuICAgICAgICAgICAgICAgIHNlbGYucHJvY2Vzc0pzb24oc2VsZi50ZXh0KTtcbiAgICAgICAgICAgIH0sIFN1cnZleUpTT05FZGl0b3IudXBkYXRlVGV4dFRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgcHJvY2Vzc0pzb24odGV4dDogc3RyaW5nKTogYW55IHtcbiAgICAgICAgdGhpcy50ZXh0V29ya2VyID0gbmV3IFN1cnZleVRleHRXb3JrZXIodGV4dCk7XG4gICAgICAgIGlmICh0aGlzLmFjZUVkaXRvcikge1xuICAgICAgICAgICAgdGhpcy5hY2VFZGl0b3IuZ2V0U2Vzc2lvbigpLnNldEFubm90YXRpb25zKHRoaXMuY3JlYXRlQW5ub3RhdGlvbnModGV4dCwgdGhpcy50ZXh0V29ya2VyLmVycm9ycykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5rb0Vycm9ycyh0aGlzLnRleHRXb3JrZXIuZXJyb3JzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNyZWF0ZUFubm90YXRpb25zKHRleHQ6IHN0cmluZywgZXJyb3JzOiBhbnlbXSk6IEFjZUFqYXguQW5ub3RhdGlvbltdIHtcbiAgICAgICAgdmFyIGFubm90YXRpb25zID0gbmV3IEFycmF5PEFjZUFqYXguQW5ub3RhdGlvbj4oKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBlcnJvciA9IGVycm9yc1tpXTtcbiAgICAgICAgICAgIHZhciBhbm5vdGF0aW9uOiBBY2VBamF4LkFubm90YXRpb24gPSB7IHJvdzogZXJyb3IucG9zaXRpb24uc3RhcnQucm93LCBjb2x1bW46IGVycm9yLnBvc2l0aW9uLnN0YXJ0LmNvbHVtbiwgdGV4dDogZXJyb3IudGV4dCwgdHlwZTogXCJlcnJvclwiIH07XG4gICAgICAgICAgICBhbm5vdGF0aW9ucy5wdXNoKGFubm90YXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbm5vdGF0aW9ucztcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N1cnZleUpTT05FZGl0b3IudHMiLCIvLyBzdHlsZXNcbmltcG9ydCBcIi4uL21haW4uc2Nzc1wiO1xuXG5leHBvcnQgbGV0IFZlcnNpb246IHN0cmluZztcblZlcnNpb24gPSBgJHtwcm9jZXNzLmVudi5WRVJTSU9OfWA7XG5cbmltcG9ydCAqIGFzIGpRdWVyeSBmcm9tIFwianF1ZXJ5XCI7XG5nbG9iYWxbXCJqUXVlcnlcIl0gPSBqUXVlcnk7XG5pbXBvcnQgXCJib290c3RyYXBcIjtcblxuZXhwb3J0IHtEcmFnRHJvcEhlbHBlcn0gZnJvbSBcIi4uL2RyYWdkcm9waGVscGVyXCI7XG5leHBvcnQge1xuICAgIFN1cnZleVByb3BlcnR5RWRpdG9yQmFzZSwgU3VydmV5U3RyaW5nUHJvcGVydHlFZGl0b3IsXG4gICAgU3VydmV5RHJvcGRvd25Qcm9wZXJ0eUVkaXRvciwgU3VydmV5Qm9vbGVhblByb3BlcnR5RWRpdG9yLCBTdXJ2ZXlOdW1iZXJQcm9wZXJ0eUVkaXRvclxufSBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5RWRpdG9yQmFzZVwiO1xuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eVRleHRJdGVtc0VkaXRvcn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVRleHRJdGVtc0VkaXRvclwiO1xuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eUl0ZW1zRWRpdG9yfSBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5SXRlbXNFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlJdGVtVmFsdWVzRWRpdG9yfSBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5SXRlbVZhbHVlc0VkaXRvclwiO1xuZXhwb3J0IHtTdXJ2ZXlOZXN0ZWRQcm9wZXJ0eUVkaXRvciwgU3VydmV5TmVzdGVkUHJvcGVydHlFZGl0b3JJdGVtfSBmcm9tIFwiLi4vcHJvcGVydHlFZGl0b3JzL3Byb3BlcnR5TmVzdGVkUHJvcGVydHlFZGl0b3JcIlxuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eURyb3Bkb3duQ29sdW1uc0VkaXRvciwgU3VydmV5UHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNJdGVtfVxuICAgIGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlNYXRyaXhEcm9wZG93bkNvbHVtbnNFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlNb2RhbEVkaXRvcn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eU1vZGFsRWRpdG9yXCI7XG5leHBvcnQge1N1cnZleVByb3BlcnR5UmVzdWx0ZnVsbEVkaXRvcn0gZnJvbSBcIi4uL3Byb3BlcnR5RWRpdG9ycy9wcm9wZXJ0eVJlc3RmdWxsRWRpdG9yXCI7XG5leHBvcnQge1N1cnZleVByb3BlcnR5VHJpZ2dlcnNFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlUcmlnZ2Vyc0VkaXRvclwiO1xuZXhwb3J0IHtTdXJ2ZXlQcm9wZXJ0eVZhbGlkYXRvcnNFZGl0b3J9IGZyb20gXCIuLi9wcm9wZXJ0eUVkaXRvcnMvcHJvcGVydHlWYWxpZGF0b3JzRWRpdG9yXCI7XG5leHBvcnQge1N1cnZleU9iamVjdHN9IGZyb20gXCIuLi9zdXJ2ZXlPYmplY3RzXCI7XG5cbmV4cG9ydCB7ZWRpdG9yTG9jYWxpemF0aW9ufSBmcm9tIFwiLi4vZWRpdG9yTG9jYWxpemF0aW9uXCI7XG5cbmV4cG9ydCB7U3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUHJvcGVydGllcywgU3VydmV5UXVlc3Rpb25FZGl0b3JHZW5lcmFsUm93LCBTdXJ2ZXlRdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0eX0gZnJvbSBcIi4uL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbkVkaXRvckdlbmVyYWxQcm9wZXJ0aWVzXCI7XG5leHBvcnQge1N1cnZleVF1ZXN0aW9uRWRpdG9yRGVmaW5pdGlvbn0gZnJvbSBcIi4uL3F1ZXN0aW9uRWRpdG9ycy9xdWVzdGlvbkVkaXRvckRlZmluaXRpb25cIjtcbmV4cG9ydCB7U3VydmV5UHJvcGVydHlFZGl0b3JTaG93V2luZG93LCBTdXJ2ZXlRdWVzdGlvbkVkaXRvciwgU3VydmV5UXVlc3Rpb25FZGl0b3JUYWJHZW5lcmFsLCBTdXJ2ZXlRdWVzdGlvbkVkaXRvclRhYlByb3BlcnR5fSBmcm9tIFwiLi4vcXVlc3Rpb25FZGl0b3JzL3F1ZXN0aW9uRWRpdG9yXCI7XG5cbmV4cG9ydCB7UXVlc3Rpb25Ub29sYm94fSBmcm9tIFwiLi4vcXVlc3Rpb25Ub29sYm94XCI7XG5leHBvcnQge1N1cnZleU9iamVjdFByb3BlcnR5fSBmcm9tIFwiLi4vb2JqZWN0UHJvcGVydHlcIjtcbmV4cG9ydCB7U3VydmV5T2JqZWN0RWRpdG9yfSBmcm9tIFwiLi4vb2JqZWN0RWRpdG9yXCI7XG5leHBvcnQge1N1cnZleVBhZ2VzRWRpdG9yfSBmcm9tIFwiLi4vcGFnZXNFZGl0b3JcIjtcbmV4cG9ydCB7U3VydmV5VGV4dFdvcmtlcn0gZnJvbSBcIi4uL3RleHRXb3JrZXJcIjtcbmV4cG9ydCB7T2JqVHlwZSwgU3VydmV5SGVscGVyfSBmcm9tIFwiLi4vc3VydmV5SGVscGVyXCI7XG5leHBvcnQge1N1cnZleUVtYmVkaW5nV2luZG93fSBmcm9tIFwiLi4vc3VydmV5RW1iZWRpbmdXaW5kb3dcIjtcbmV4cG9ydCB7U3VydmV5VmVyYnMsIFN1cnZleVZlcmJJdGVtLCBTdXJ2ZXlWZXJiQ2hhbmdlVHlwZUl0ZW0sIFN1cnZleVZlcmJDaGFuZ2VQYWdlSXRlbX0gZnJvbSBcIi4uL29iamVjdFZlcmJzXCI7XG5leHBvcnQge1N1cnZleVVuZG9SZWRvLCBVbmRvUmVkb0l0ZW19IGZyb20gXCIuLi91bmRvcmVkb1wiO1xuZXhwb3J0IHtTdXJ2ZXlGb3JEZXNpZ25lcn0gZnJvbSBcIi4uL3N1cnZleWpzT2JqZWN0c1wiXG5leHBvcnQge1N1cnZleUVkaXRvcn0gZnJvbSBcIi4uL2VkaXRvclwiO1xuXG5leHBvcnQge1N1cnZleXNNYW5hZ2VyfSBmcm9tIFwiLi4vbWFuYWdlXCI7XG5cbi8vZWRpdG9yTG9jYWxpemF0aW9uXG5pbXBvcnQgJy4uL2xvY2FsaXphdGlvbi9mcmVuY2gnO1xuaW1wb3J0ICcuLi9sb2NhbGl6YXRpb24vc3BhbmlzaCc7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbnRyaWVzL2luZGV4LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==