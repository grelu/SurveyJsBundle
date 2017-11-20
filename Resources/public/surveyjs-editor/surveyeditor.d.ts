/*Type definitions for Surveyjs Editor JavaScript library v0.96.0
(c) Devsoft Baltic O� - http://surveyjs.io/
Github - https://github.com/surveyjs/editor
License: (http://editor.surveyjs.io/license.html)
*/
// Dependencies for this module:
//   ../../../survey-knockout

import * as Survey from "survey-knockout";

import "../utils/ddmenu.scss";
import "../main.scss";
export let Version: string;
import '../localization/french';
import '../localization/spanish';
import '../localization/portuguese';
import '../localization/italian';
import '../localization/simplified-chinese';
import '../localization/persian';

export declare class DragDropTargetElement {
    page: Survey.Page;
    target: any;
    source: any;
    constructor(page: Survey.Page, target: any, source: any);
    moveTo(destination: any, isBottom: boolean, isEdge?: boolean): boolean;
    doDrop(): void;
    clear(): void;
}
export declare class DragDropHelper {
    data: Survey.ISurvey;
    static edgeHeight: number;
    static dataStart: string;
    static dragData: any;
    static prevEvent: {
        element: any;
        x: number;
        y: number;
    };
    static counter: number;
    constructor(data: Survey.ISurvey, onModifiedCallback: () => any, parent?: HTMLElement);
    readonly survey: Survey.Survey;
    startDragQuestion(event: DragEvent, element: any): void;
    startDragToolboxItem(event: DragEvent, elementName: string, elementJson: any): void;
    isSurveyDragging(event: DragEvent): boolean;
    doDragDropOver(event: DragEvent, element: any, isEdge?: boolean): void;
    end(): void;
    doDrop(event: DragEvent): void;
    doLeavePage(event: DragEvent): void;
    scrollToElement(el: HTMLElement): void;
}

export interface ISurveyObjectEditorOptions {
    alwaySaveTextInPropertyEditors: boolean;
    showApplyButtonInEditors: boolean;
    onItemValueAddedCallback(propertyName: string, itemValue: Survey.ItemValue): any;
    onMatrixDropdownColumnAddedCallback(column: Survey.MatrixDropdownColumn): any;
    onSetPropertyEditorOptionsCallback(propertyName: string, obj: Survey.Base, editorOptions: any): any;
    onGetErrorTextOnValidationCallback(propertyName: string, obj: Survey.Base, value: any): string;
    onValueChangingCallback(options: any): any;
    onPropertyEditorObjectSetCallback(propertyName: string, obj: Survey.Base, editor: SurveyPropertyEditorBase): any;
}
export declare class SurveyPropertyEditorBase implements Survey.ILocalizableOwner {
    koValue: any;
    koText: any;
    koIsDefault: any;
    koHasError: any;
    koErrorText: any;
    showDisplayName: boolean;
    onChanged: (newValue: any) => any;
    onGetLocale: () => string;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly property: Survey.JsonObjectProperty;
    readonly editablePropertyName: string;
    readonly readOnly: boolean;
    readonly alwaysShowEditor: boolean;
    readonly title: string;
    displayName: string;
    readonly showDisplayNameOnTop: boolean;
    readonly canShowDisplayNameOnTop: boolean;
    readonly contentTemplateName: string;
    readonly isModal: boolean;
    object: any;
    getValueText(value: any): string;
    editingValue: any;
    hasError(): boolean;
    protected checkForErrors(): boolean;
    readonly isRequired: boolean;
    protected setIsRequired(): void;
    protected setTitleAndDisplayName(): void;
    protected onBeforeApply(): void;
    apply(): void;
    readonly locale: string;
    getLocale(): string;
    getMarkdownHtml(text: string): string;
    options: ISurveyObjectEditorOptions;
    protected onOptionsChanged(): void;
    protected setValueCore(value: any): void;
    setObject(value: any): void;
    protected createEditorOptions(): any;
    protected onSetEditorOptions(editorOptions: any): void;
    protected onValueChanged(): void;
    protected getCorrectedValue(value: any): any;
    protected updateValue(): void;
    protected getValue(): any;
}

export declare class SurveyPropertyCustomEditor extends SurveyPropertyEditorBase {
    onValueChangedCallback: (newValue: any) => void;
    constructor(property: Survey.JsonObjectProperty, widgetJSON?: any);
    readonly editorType: string;
    readonly widgetJSON: any;
    protected onValueChanged(): void;
    protected readonly widgetRender: any;
    protected doAfterRender(elements: any, con: any): void;
}

export declare class SurveyPropertyEditorFactory {
    static defaultEditor: string;
    static registerEditor(name: string, creator: (property: Survey.JsonObjectProperty) => SurveyPropertyEditorBase, editableClassName?: string): void;
    static registerCustomEditor(name: string, widgetJSON: any): void;
    static createEditor(property: Survey.JsonObjectProperty, func: (newValue: any) => any): SurveyPropertyEditorBase;
}
export declare class SurveyStringPropertyEditor extends SurveyPropertyEditorBase {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
}
export declare class SurveyDropdownPropertyEditor extends SurveyPropertyEditorBase {
    koChoices: any;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    getValueText(value: any): string;
}
export declare class SurveyBooleanPropertyEditor extends SurveyPropertyEditorBase {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly alwaysShowEditor: boolean;
    readonly canShowDisplayNameOnTop: boolean;
    getValueText(value: any): string;
}
export declare class SurveyNumberPropertyEditor extends SurveyPropertyEditorBase {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    protected getCorrectedValue(value: any): any;
}

export declare class SurveyPropertyTextItemsEditor extends SurveyNestedPropertyEditor {
    isTitleVisible: boolean;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    protected createNewEditorItem(): any;
    protected createEditorItem(item: any): SurveyPropertyTextItemsItem;
    protected createItemFromEditorItem(editorItem: any): any;
}
export declare class SurveyPropertyTextItemsItem extends SurveyNestedPropertyEditorItem {
    item: Survey.MultipleTextItem;
    koName: any;
    koTitle: any;
    koIsRequired: any;
    koEditorName: any;
    koHasError: any;
    constructor(item: Survey.MultipleTextItem);
    protected createSurveyQuestionEditor(): SurveyQuestionEditor;
    hasError(): boolean;
    apply(): void;
}

export declare class SurveyPropertyItemsEditor extends SurveyPropertyModalEditor {
    koItems: any;
    onDeleteClick: any;
    onMoveUpClick: any;
    onMoveDownClick: any;
    onAddClick: any;
    onClearClick: any;
    koAllowAddRemoveItems: any;
    constructor(property: Survey.JsonObjectProperty);
    getValueText(value: any): string;
    protected getCorrectedValue(value: any): any;
    protected createEditorOptions(): any;
    protected onSetEditorOptions(editorOptions: any): void;
    protected AddItem(): void;
    protected moveUp(item: any): void;
    protected moveDown(item: any): void;
    protected onValueChanged(): void;
    protected getItemsFromValue(value?: any): Array<any>;
    protected onBeforeApply(): void;
    protected createNewEditorItem(): any;
    protected createEditorItem(item: any): any;
    protected createItemFromEditorItem(editorItem: any): any;
}

export declare class SurveyPropertyItemValuesEditor extends SurveyPropertyItemsEditor {
    koActiveView: any;
    koItemsText: any;
    koShowTextView: any;
    changeToTextViewClick: any;
    changeToFormViewClick: any;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly columns: Array<SurveyPropertyItemValuesEditorColumn>;
    protected checkForErrors(): boolean;
    protected createColumns(): Array<SurveyPropertyItemValuesEditorColumn>;
    protected getProperties(): Array<Survey.JsonObjectProperty>;
    protected createEditorOptions(): any;
    protected onSetEditorOptions(editorOptions: any): void;
    protected createNewEditorItem(): any;
    protected createEditorItem(item: any): any;
    protected createItemFromEditorItem(editorItem: any): Survey.ItemValue;
    protected onBeforeApply(): void;
    protected updateItems(text: string): void;
    protected getItemsText(): string;
}
export declare class SurveyPropertyItemValuesEditorColumn {
    property: Survey.JsonObjectProperty;
    constructor(property: Survey.JsonObjectProperty);
    readonly text: string;
}
export declare class SurveyPropertyItemValuesEditorItem {
    item: Survey.ItemValue;
    columns: Array<SurveyPropertyItemValuesEditorColumn>;
    constructor(item: Survey.ItemValue, columns: Array<SurveyPropertyItemValuesEditorColumn>);
    readonly cells: Array<SurveyPropertyItemValuesEditorCell>;
    readonly hasError: boolean;
}
export declare class SurveyPropertyItemValuesEditorCell {
    item: Survey.ItemValue;
    column: SurveyPropertyItemValuesEditorColumn;
    constructor(item: Survey.ItemValue, column: SurveyPropertyItemValuesEditorColumn);
    readonly property: Survey.JsonObjectProperty;
    readonly objectProperty: SurveyObjectProperty;
    readonly editor: SurveyPropertyEditorBase;
    readonly koValue: any;
    value: any;
    readonly hasError: boolean;
}

export declare class SurveyPropertyMultipleValuesEditor extends SurveyPropertyModalEditor {
    koItems: any;
    koEditingValue: any;
    constructor(property: Survey.JsonObjectProperty);
    getValueText(value: any): string;
    setObject(value: any): void;
    protected updateValue(): void;
    protected onBeforeApply(): void;
    readonly editorType: string;
}

export declare class SurveyNestedPropertyEditor extends SurveyPropertyItemsEditor {
    koEditItem: any;
    koIsList: any;
    onEditItemClick: any;
    onCancelEditItemClick: any;
    constructor(property: Survey.JsonObjectProperty);
    protected checkForErrors(): boolean;
    protected onBeforeApply(): void;
}
export declare class SurveyNestedPropertyEditorItem {
    constructor();
    readonly itemEditor: SurveyQuestionEditor;
    hasError(): boolean;
    protected createSurveyQuestionEditor(): any;
    apply(): void;
}

export declare class SurveyPropertyDropdownColumnsEditor extends SurveyNestedPropertyEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    protected createNewEditorItem(): any;
    protected createEditorItem(item: any): SurveyPropertyMatrixDropdownColumnsItem;
    protected createItemFromEditorItem(editorItem: any): any;
}
export declare class SurveyPropertyMatrixDropdownColumnsItem extends SurveyNestedPropertyEditorItem {
    column: Survey.MatrixDropdownColumn;
    options: any;
    koName: any;
    koTitle: any;
    koCellType: any;
    koIsRequired: any;
    koEditorName: any;
    koHasError: any;
    koCanEdit: any;
    onShowChoicesClick: any;
    cellTypeChoices: Array<any>;
    constructor(column: Survey.MatrixDropdownColumn, options?: any);
    protected createSurveyQuestionEditor(): SurveyQuestionEditor;
    hasError(): boolean;
    apply(): void;
}

export declare class SurveyPropertyModalEditorCustomWidget {
    json: any;
    constructor(json: any);
    afterRender(editor: SurveyPropertyModalEditor, el: HTMLElement): void;
    destroy(editor: SurveyPropertyModalEditor, el: HTMLElement): void;
}
export declare class SurveyPropertyModalEditor extends SurveyPropertyEditorBase {
    static registerCustomWidget(editorType: string, json: any): void;
    static getCustomWidget(editorType: string): SurveyPropertyModalEditorCustomWidget;
    editingObject: any;
    onApplyClick: any;
    onOkClick: any;
    onResetClick: any;
    onShowModal: any;
    onHideModal: any;
    modalName: string;
    modalNameTarget: string;
    koShowApplyButton: any;
    koTitleCaption: any;
    koAfterRender: any;
    constructor(property: Survey.JsonObjectProperty);
    readonly isModal: boolean;
    protected onOptionsChanged(): void;
    setObject(value: any): void;
    readonly isEditable: boolean;
    protected afterRender(elements: any, con: any): void;
}
export declare class SurveyPropertyTextEditor extends SurveyPropertyModalEditor {
    koTextValue: any;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly isEditable: boolean;
    getValueText(value: any): string;
    protected onValueChanged(): void;
    protected onBeforeApply(): void;
}
export declare class SurveyPropertyHtmlEditor extends SurveyPropertyTextEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
}
export declare class SurveyPropertyExpressionEditor extends SurveyPropertyTextEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
}
export declare class SurveyPropertyConditionEditor extends SurveyPropertyTextEditor {
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
}

export declare class SurveyPropertyResultfullEditor extends SurveyPropertyModalEditor {
    koItems: any;
    survey: Survey.Survey;
    question: Survey.QuestionDropdown;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    readonly restfullValue: any;
    getValueText(value: any): string;
    protected onValueChanged(): void;
    protected onBeforeApply(): void;
}
export declare class SurveyPropertyResultfullEditorItem {
    name: string;
    onValueChanged: (item: SurveyPropertyResultfullEditorItem) => any;
    koValue: any;
    constructor(name: string, val: string, onValueChanged: (item: SurveyPropertyResultfullEditorItem) => any);
    setValue(val: string): void;
}

export declare class SurveyPropertyDefaultValueEditor extends SurveyPropertyModalEditor {
    survey: Survey.Survey;
    question: Survey.Question;
    constructor(property: Survey.JsonObjectProperty);
    getValueText(value: any): string;
    setObject(value: any): void;
    protected updateValue(): void;
    protected onBeforeApply(): void;
    readonly editorType: string;
}

export declare class SurveyPropertyTriggersEditor extends SurveyPropertyItemsEditor {
    koElements: any;
    koQuestions: any;
    koPages: any;
    koSelected: any;
    koTriggers: any;
    availableTriggers: Array<string>;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    protected onValueChanged(): void;
    protected createEditorItem(item: any): SurveyPropertyTrigger;
    protected createItemFromEditorItem(editorItem: any): Survey.SurveyTrigger;
}
export declare class SurveyPropertyTrigger {
    trigger: Survey.SurveyTrigger;
    availableOperators: any[];
    koName: any;
    koOperator: any;
    koValue: any;
    koType: any;
    koText: any;
    koIsValid: any;
    koRequireValue: any;
    constructor(trigger: Survey.SurveyTrigger);
    createTrigger(): Survey.SurveyTrigger;
}
export declare class SurveyPropertyVisibleTrigger extends SurveyPropertyTrigger {
    trigger: Survey.SurveyTriggerVisible;
    pages: SurveyPropertyTriggerObjects;
    questions: SurveyPropertyTriggerObjects;
    constructor(trigger: Survey.SurveyTriggerVisible, koPages: any, koQuestions: any);
    createTrigger(): Survey.SurveyTrigger;
}
export declare class SurveyPropertySetValueTrigger extends SurveyPropertyTrigger {
    trigger: Survey.SurveyTriggerSetValue;
    koQuestions: any;
    kosetToName: any;
    kosetValue: any;
    koisVariable: any;
    constructor(trigger: Survey.SurveyTriggerSetValue, koQuestions: any);
    createTrigger(): Survey.SurveyTrigger;
}
export declare class SurveyPropertyTriggerObjects {
    title: string;
    koObjects: any;
    koChoosen: any;
    koSelected: any;
    koChoosenSelected: any;
    onDeleteClick: any;
    onAddClick: any;
    constructor(title: string, allObjects: Array<string>, choosenObjects: Array<string>);
}

export declare class SurveyPropertyValidatorsEditor extends SurveyPropertyItemsEditor {
    koSelected: any;
    koValidators: any;
    availableValidators: Array<string>;
    constructor(property: Survey.JsonObjectProperty);
    readonly editorType: string;
    protected onValueChanged(): void;
    protected createEditorItem(item: any): SurveyPropertyValidatorItem;
    protected createItemFromEditorItem(editorItem: any): Survey.SurveyValidator;
}
export declare class SurveyPropertyValidatorItem {
    validator: Survey.SurveyValidator;
    text: string;
    constructor(validator: Survey.SurveyValidator);
}

export declare class SurveyObjectItem {
    value: Survey.Base;
    text: any;
    level: number;
}
export declare class SurveyObjects {
    koObjects: any;
    koSelected: any;
    static intend: string;
    surveyValue: Survey.Survey;
    constructor(koObjects: any, koSelected: any);
    survey: Survey.Survey;
    addPage(page: Survey.PageModel): void;
    addElement(element: any, parent: any): void;
    selectObject(obj: Survey.Base): void;
    getSelectedObjectPage(obj?: Survey.Base): Survey.Page;
    removeObject(obj: Survey.Base): void;
    nameChanged(obj: Survey.Base): void;
    selectNextQuestion(isUp: boolean): Survey.QuestionBase;
}

export declare var editorLocalization: {
    currentLocale: string;
    locales: {};
    getString: (strName: string, locale?: string) => any;
    getPropertyName: (strName: string, locale?: string) => any;
    getPropertyTitle: (strName: string, locale?: string) => any;
    getProperty: (strName: string, locale?: string) => any;
    getPropertyValue: (value: any, locale?: string) => any;
    getValidatorName: (name: string, locale?: string) => any;
    getTriggerName: (name: string, locale?: string) => any;
    getLocale(locale: string): any;
    getValueInternal(value: any, prefix: string, locale?: string): any;
    getLocales: () => string[];
};
export declare var defaultStrings: {
    survey: {
        edit: string;
        dropQuestion: string;
        copy: string;
        addToToolbox: string;
        deletePanel: string;
        deleteQuestion: string;
    };
    qt: {
        checkbox: string;
        comment: string;
        dropdown: string;
        file: string;
        html: string;
        matrix: string;
        matrixdropdown: string;
        matrixdynamic: string;
        multipletext: string;
        panel: string;
        paneldynamic: string;
        radiogroup: string;
        rating: string;
        text: string;
        boolean: string;
        expression: string;
    };
    ed: {
        survey: string;
        addNewPage: string;
        newPageName: string;
        newQuestionName: string;
        newPanelName: string;
        testSurvey: string;
        testSurveyAgain: string;
        testSurveyWidth: string;
        embedSurvey: string;
        saveSurvey: string;
        designer: string;
        jsonEditor: string;
        undo: string;
        redo: string;
        options: string;
        generateValidJSON: string;
        generateReadableJSON: string;
        toolbox: string;
        delSelObject: string;
        correctJSON: string;
        surveyResults: string;
    };
    pe: {
        apply: string;
        ok: string;
        cancel: string;
        reset: string;
        close: string;
        delete: string;
        addNew: string;
        removeAll: string;
        edit: string;
        empty: string;
        fastEntry: string;
        formEntry: string;
        testService: string;
        conditionHelp: string;
        expressionHelp: string;
        propertyIsEmpty: string;
        value: string;
        text: string;
        required: string;
        columnEdit: string;
        itemEdit: string;
        hasOther: string;
        name: string;
        title: string;
        cellType: string;
        colCount: string;
        choicesOrder: string;
        visible: string;
        isRequired: string;
        startWithNewLine: string;
        rows: string;
        placeHolder: string;
        showPreview: string;
        storeDataAsText: string;
        maxSize: string;
        imageHeight: string;
        imageWidth: string;
        rowCount: string;
        addRowText: string;
        removeRowText: string;
        minRateDescription: string;
        maxRateDescription: string;
        inputType: string;
        optionsCaption: string;
        qEditorTitle: string;
        tabs: {
            general: string;
            fileOptions: string;
            html: string;
            columns: string;
            rows: string;
            choices: string;
            visibleIf: string;
            rateValues: string;
            choicesByUrl: string;
            matrixChoices: string;
            multipleTextItems: string;
            validators: string;
        };
        editProperty: string;
        items: string;
        enterNewValue: string;
        noquestions: string;
        createtrigger: string;
        triggerOn: string;
        triggerMakePagesVisible: string;
        triggerMakeQuestionsVisible: string;
        triggerCompleteText: string;
        triggerNotSet: string;
        triggerRunIf: string;
        triggerSetToName: string;
        triggerSetValue: string;
        triggerIsVariable: string;
        verbChangeType: string;
        verbChangePage: string;
    };
    pv: {
        true: string;
        false: string;
        ar: string;
        cz: string;
        da: string;
        de: string;
        en: string;
        es: string;
        fi: string;
        fr: string;
        gr: string;
        hu: string;
        it: string;
        is: string;
        lv: string;
        nl: string;
        pl: string;
        pt: string;
        ro: string;
        ru: string;
        sv: string;
        tr: string;
        "zh-cn": string;
    };
    op: {
        empty: string;
        notempty: string;
        equal: string;
        notequal: string;
        contains: string;
        notcontains: string;
        greater: string;
        less: string;
        greaterorequal: string;
        lessorequal: string;
    };
    ew: {
        angular: string;
        jquery: string;
        knockout: string;
        react: string;
        vue: string;
        bootstrap: string;
        standard: string;
        showOnPage: string;
        showInWindow: string;
        loadFromServer: string;
        titleScript: string;
        titleHtml: string;
        titleJavaScript: string;
    };
    validators: {
        answercountvalidator: string;
        emailvalidator: string;
        numericvalidator: string;
        regexvalidator: string;
        textvalidator: string;
    };
    triggers: {
        completetrigger: string;
        setvaluetrigger: string;
        visibletrigger: string;
    };
    p: {
        name: string;
        title: {
            name: string;
            title: string;
        };
        survey_title: {
            name: string;
            title: string;
        };
        page_title: {
            name: string;
            title: string;
        };
    };
};

export declare class SurveyQuestionEditorGeneralProperty {
    obj: Survey.Base;
    property: Survey.JsonObjectProperty;
    koValue: any;
    koErrorText: any;
    koHasError: any;
    constructor(obj: Survey.Base, property: Survey.JsonObjectProperty, displayName: string, options?: ISurveyObjectEditorOptions);
    readonly objectProperty: SurveyObjectProperty;
    readonly editor: SurveyPropertyEditorBase;
    hasError(): boolean;
    apply(): void;
    reset(): void;
}
export declare class SurveyQuestionEditorGeneralRow {
    obj: Survey.Base;
    category: string;
    properties: Array<SurveyQuestionEditorGeneralProperty>;
    constructor(obj: Survey.Base);
    addProperty(property: any, displayName: string, options: ISurveyObjectEditorOptions): void;
    hasError(): boolean;
}
export declare class SurveyQuestionEditorGeneralProperties {
    obj: Survey.Base;
    options: ISurveyObjectEditorOptions;
    rows: Array<SurveyQuestionEditorGeneralRow>;
    constructor(obj: Survey.Base, properties: Array<any>, onCanShowPropertyCallback?: (object: any, property: Survey.JsonObjectProperty) => boolean, options?: ISurveyObjectEditorOptions);
    apply(): void;
    reset(): void;
    hasError(): boolean;
    protected applyOrReset(isApply: boolean): void;
    protected buildRows(properties: any): void;
}

export declare class SurveyQuestionEditorDefinition {
    static definition: any;
    static getProperties(className: string): Array<any>;
    static getTabs(className: string): Array<any>;
    static getAllDefinitionsByClass(className: string): Array<any>;
}

export declare class SurveyPropertyEditorShowWindow {
    koVisible: any;
    koEditor: any;
    onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean;
    constructor();
    show(questionBase: Survey.QuestionBase, onChanged: (question: Survey.QuestionBase) => any, options?: ISurveyObjectEditorOptions): void;
}
export declare class SurveyQuestionProperties {
    obj: Survey.Base;
    onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean;
    constructor(obj: Survey.Base, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean);
    getProperty(propertyName: string): Survey.JsonObjectProperty;
}
export declare class SurveyQuestionEditor {
    obj: Survey.Base;
    onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean;
    className: string;
    options: ISurveyObjectEditorOptions;
    protected properties: SurveyQuestionProperties;
    onChanged: (obj: Survey.Base) => any;
    onHideWindow: () => any;
    onOkClick: any;
    onApplyClick: any;
    onResetClick: any;
    koTabs: any;
    koActiveTab: any;
    koTitle: any;
    koShowApplyButton: any;
    onTabClick: any;
    constructor(obj: Survey.Base, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean, className?: string, options?: ISurveyObjectEditorOptions);
    hasError(): boolean;
    reset(): void;
    apply(): void;
}
export declare class SurveyQuestionEditorTabBase {
    obj: Survey.Base;
    koAfterRender: any;
    constructor(obj: Survey.Base);
    readonly name: string;
    title: string;
    readonly htmlTemplate: string;
    readonly templateObject: any;
    hasError(): boolean;
    reset(): void;
    apply(): void;
    protected getValue(property: Survey.JsonObjectProperty): any;
}
export declare class SurveyQuestionEditorTabGeneral extends SurveyQuestionEditorTabBase {
    obj: Survey.Base;
    properties: SurveyQuestionEditorGeneralProperties;
    constructor(obj: Survey.Base, properties?: SurveyQuestionEditorGeneralProperties);
    readonly name: string;
    readonly htmlTemplate: string;
    hasError(): boolean;
    reset(): void;
    apply(): void;
}
export declare class SurveyQuestionEditorTabProperty extends SurveyQuestionEditorTabBase {
    obj: Survey.Base;
    property: Survey.JsonObjectProperty;
    options: ISurveyObjectEditorOptions;
    constructor(obj: Survey.Base, property: Survey.JsonObjectProperty, options?: ISurveyObjectEditorOptions);
    readonly name: string;
    hasError(): boolean;
    readonly htmlTemplate: string;
    readonly templateObject: any;
    readonly propertyEditor: SurveyPropertyModalEditor;
    reset(): void;
    apply(): void;
}

/**
    * The Toolbox item description
    */
export interface IQuestionToolboxItem {
        /**
            * An unique name
            */
        name: string;
        /**
            * Icon name
            */
        iconName: string;
        /**
            * The JSON that used to create a new question/panel. The 'type' attribute is requried.
            */
        json: any;
        /**
            * Toolbox item title
            */
        title: string;
        /**
            * True, if an end user added this item into Toolbox from the survey
            */
        isCopied: boolean;
}
/**
    * The list of Toolbox items.
    */
export declare class QuestionToolbox {
        /**
            * Modify this array to change the toolbox items order.
            */
        orderedQuestions: string[];
        /**
            * The maximum number of copied toolbox items. If an user adding copiedItemMaxCount + 1 item, the first added item will be removed.
            */
        copiedItemMaxCount: number;
        koItems: any;
        constructor(supportedQuestions?: Array<string>);
        /**
            * The Array of Toolbox items as Text JSON.
            */
        jsonText: string;
        /**
            * The Array of copied Toolbox items as Text JSON.
            */
        copiedJsonText: string;
        /**
            * The Array of Toolbox items
            */
        readonly items: Array<IQuestionToolboxItem>;
        /**
            * The Array of copied Toolbox items
            */
        readonly copiedItems: Array<IQuestionToolboxItem>;
        /**
            * Add toolbox items into the Toolbox
            * @param items the list of new items
            * @param clearAll set it to true to clear all previous items.
            */
        addItems(items: Array<IQuestionToolboxItem>, clearAll?: boolean): void;
        /**
            * Add a copied Question into Toolbox
            * @param question a copied Survey.Question
            */
        addCopiedItem(question: Survey.QuestionBase): void;
        /**
            * Add a toolbox item
            * @param item the toolbox item description
            * @see IQuestionToolboxItem
            */
        addItem(item: IQuestionToolboxItem): void;
        /**
            * Add a new toolbox item, add delete the old item with the same name
            * @param item the toolbox item description
            * @see IQuestionToolboxItem
            */
        replaceItem(item: IQuestionToolboxItem): boolean;
        /**
            * Remove a toolbox item by it's name
            * @param name toolbox item name
            * @see IQuestionToolboxItem
            */
        removeItem(name: string): boolean;
        /**
            * Remove all toolbox items.
            */
        clearItems(): void;
        /**
            * Remove all copied toolbox items.
            */
        clearCopiedItems(): void;
        protected onItemsChanged(): void;
}

export declare type SurveyOnPropertyChangedCallback = (property: SurveyObjectProperty, newValue: any) => void;
export declare class SurveyObjectProperty {
    property: Survey.JsonObjectProperty;
    name: string;
    disabled: boolean;
    editor: SurveyPropertyEditorBase;
    editorType: string;
    baseEditorType: string;
    koIsShowEditor: any;
    constructor(property: Survey.JsonObjectProperty, onPropertyChanged?: SurveyOnPropertyChangedCallback, propertyEditorOptions?: ISurveyObjectEditorOptions);
    readonly displayName: string;
    readonly title: string;
    isActive: boolean;
    readonly koValue: any;
    readonly koText: any;
    readonly koIsDefault: any;
    object: any;
    protected onEditorValueChanged(newValue: any): void;
}

export declare class SurveyObjectEditor {
    propertyEditorOptions: ISurveyObjectEditorOptions;
    koProperties: any;
    koActiveProperty: any;
    koHasObject: any;
    onPropertyValueChanged: Survey.Event<(sender: SurveyObjectEditor, options: any) => any, any>;
    onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean;
    constructor(propertyEditorOptions?: ISurveyObjectEditorOptions);
    selectedObject: any;
    getPropertyEditor(name: string): any;
    changeActiveProperty(property: SurveyObjectProperty): void;
    objectChanged(): void;
    protected updateProperties(): void;
    protected canShowProperty(property: Survey.JsonObjectProperty): boolean;
    protected updatePropertiesObject(): void;
}

export declare type SurveyAddNewPageCallback = () => void;
export declare type SurveySelectPageCallback = (page: Survey.Page) => void;
export declare type SurveyMovePageCallback = (indexFrom: number, indexTo: number) => void;
export declare class SurveyPagesEditor {
    surveyValue: Survey.Survey;
    koPages: any;
    koIsValid: any;
    selectPageClick: any;
    onAddNewPageCallback: SurveyAddNewPageCallback;
    onSelectPageCallback: SurveySelectPageCallback;
    onDeletePageCallback: SurveySelectPageCallback;
    onMovePageCallback: SurveyMovePageCallback;
    draggingPage: any;
    dragStart: any;
    dragOver: any;
    dragEnd: any;
    dragDrop: any;
    keyDown: any;
    constructor(onAddNewPageCallback?: SurveyAddNewPageCallback, onSelectPageCallback?: SurveySelectPageCallback, onMovePageCallback?: SurveyMovePageCallback, onDeletePageCallback?: SurveySelectPageCallback);
    survey: Survey.Survey;
    setSelectedPage(page: Survey.Page): void;
    addNewPageClick(): void;
    removePage(page: Survey.Page): void;
    changeName(page: Survey.Page): void;
    protected getIndexByPage(page: Survey.Page): number;
    protected onKeyDown(el: any, e: KeyboardEvent): void;
    protected updatePages(): void;
}

export declare class SurveyTextWorker {
    text: string;
    static newLineChar: string;
    errors: Array<any>;
    constructor(text: string);
    readonly survey: Survey.Survey;
    readonly isJsonCorrect: boolean;
    protected process(): void;
}

export declare enum ObjType {
    Unknown = 0,
    Survey = 1,
    Page = 2,
    Panel = 3,
    Question = 4,
}
export declare class SurveyHelper {
    static getNewPageName(objs: Array<any>): string;
    static getNewQuestionName(objs: Array<any>): string;
    static getNewPanelName(objs: Array<any>): string;
    static getNewName(objs: Array<any>, baseName: string): string;
    static getObjectType(obj: any): ObjType;
    static getObjectName(obj: any): string;
    static getElements(element: any, includeHidden?: boolean): Array<any>;
    static isPropertyVisible(obj: any, property: Survey.JsonObjectProperty, onCanShowPropertyCallback?: (object: any, property: Survey.JsonObjectProperty) => boolean): boolean;
}

export declare class SurveyEmbedingWindow {
    koHeadText: any;
    koBodyText: any;
    koJavaText: any;
    surveyId: string;
    surveyPostId: string;
    generateValidJSON: boolean;
    surveyJSVersion: string;
    surveyCDNPath: string;
    koShowAsWindow: any;
    koScriptUsing: any;
    koHasIds: any;
    koLoadSurvey: any;
    koLibraryVersion: any;
    koVisibleHtml: any;
    constructor();
    json: any;
    readonly hasAceEditor: boolean;
    show(): void;
}

export declare class SurveyVerbs {
    onModifiedCallback: () => any;
    koVerbs: any;
    koHasVerbs: any;
    constructor(onModifiedCallback: () => any);
    survey: Survey.Survey;
    obj: any;
}
export declare class SurveyVerbItem {
    survey: Survey.Survey;
    question: Survey.QuestionBase;
    onModifiedCallback: () => any;
    koItems: any;
    koSelectedItem: any;
    constructor(survey: Survey.Survey, question: Survey.QuestionBase, onModifiedCallback: () => any);
    readonly text: string;
}
export declare class SurveyVerbChangeTypeItem extends SurveyVerbItem {
    survey: Survey.Survey;
    question: Survey.QuestionBase;
    onModifiedCallback: () => any;
    constructor(survey: Survey.Survey, question: Survey.QuestionBase, onModifiedCallback: () => any);
    readonly text: string;
}
export declare class SurveyVerbChangePageItem extends SurveyVerbItem {
    survey: Survey.Survey;
    question: Survey.QuestionBase;
    onModifiedCallback: () => any;
    constructor(survey: Survey.Survey, question: Survey.QuestionBase, onModifiedCallback: () => any);
    readonly text: string;
}

export declare class SurveyUndoRedo {
    koCanUndo: any;
    koCanRedo: any;
    maximumCount: number;
    constructor();
    clear(): void;
    setCurrent(survey: Survey.Survey, selectedObjName: string): void;
    undo(): UndoRedoItem;
    redo(): UndoRedoItem;
    protected readonly canUndo: boolean;
    protected readonly canRedo: boolean;
}
export declare class UndoRedoItem {
    surveyJSON: any;
    selectedObjName: string;
}

export interface ISurveyObjectMenuItem {
    name: string;
    text: string;
    onClick: (obj: Survey.Base) => any;
}
export declare class SurveyForDesigner extends Survey.Survey {
    editQuestionClick: any;
    onSelectedElementChanged: Survey.Event<(sender: Survey.Survey, options: any) => any, any>;
    onEditButtonClick: Survey.Event<(sender: Survey.Survey, options: any) => any, any>;
    onGetMenuItems: Survey.Event<(sender: Survey.Survey, options: any) => any, any>;
    constructor(jsonObj?: any, renderedElement?: any, css?: any);
    getMenuItems(obj: Survey.Base): Array<ISurveyObjectMenuItem>;
    selectedElement: any;
    getEditorLocString(value: string): string;
}

export declare class Extentions {
    static registerCustomPropertyEditor(name: string, widgetJSON: any): void;
    static registerPropertyEditor(name: string, creator: (property: Survey.JsonObjectProperty) => SurveyPropertyEditorBase): void;
}

/**
    * The toolbar item description
    */
export interface IToolbarItem {
        /**
            * Unique string id
            */
        id: string;
        /**
            * Set this property to false to make the toolbar item invisible.
            */
        visible: KnockoutObservable<boolean> | boolean;
        /**
            * Toolbar item title
            */
        title: KnockoutObservable<string> | string;
        /**
            * Set this property to false to disable the toolbar item.
            */
        enabled?: KnockoutObservable<boolean> | boolean;
        /**
            * A callback that calls on toolbar item click.
            */
        action?: () => void;
        /**
            * css class
            */
        css?: KnockoutObservable<string> | string;
        innerCss?: KnockoutObservable<string> | string;
        data?: any;
        template?: string;
        items?: KnockoutObservableArray<IToolbarItem>;
}
/**
    * Survey Editor is WYSIWYG editor.
    */
export declare class SurveyEditor implements ISurveyObjectEditorOptions {
        static defaultNewSurveyText: string;
        /**
            * This property is assign to the survey.surveyId property on showing in the "Embed Survey" tab.
            * @see showEmbededSurveyTab
            */
        surveyId: string;
        /**
            * This property is assign to the survey.surveyPostId property on showing in the "Embed Survey" tab.
            * @see showEmbededSurveyTab
            */
        surveyPostId: string;
        /**
            * This callback is called on changing "Generate Valid JSON" option.
            */
        generateValidJSONChangedCallback: (generateValidJSON: boolean) => void;
        /**
            * The event is called before showing a property in the Property Grid or in Question Editor.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.obj the survey object, Survey, Page, Panel or Question
            * <br/> options.property the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties.
            * <br/> options.canShow a boolean value. It is true by default. Set it false to hide the property from the Property Grid or in Question Editor
            */
        onCanShowProperty: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * The event is called on adding a new question into the survey. Typically, when a user dropped a Question from the Question Toolbox into designer Survey area.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.question a new added survey question. Survey.QuestionBase object
            * <br/> options.page the survey Page object where question has been added.
            */
        onQuestionAdded: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * The event is called on adding a new Survey.ItemValue object. It uses as an element in choices array in Radiogroup, checkbox and dropdown questions or Matrix columns and rows properties.
            * Use this event, to set ItemValue.value and ItemValue.text properties by default or set a value to the custom property.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.property  the object property (Survey.JsonObjectProperty object). It has name, className, type, visible, readOnly and other properties.
            * <br/> options.newItem a new created Survey.ItemValue object.
            */
        onItemValueAdded: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * The event is called when a user adds a new column into MatrixDropdown or MatrixDynamic questions. Use it to set some properties of Survey.MatrixDropdownColumn by default, for example name or a custom property.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.newColumn a new created Survey.MatrixDropdownColumn object.
            */
        onMatrixColumnAdded: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * The event is called on adding a new panel into the survey.  Typically, when a user dropped a Panel from the Question Toolbox into designer Survey area.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.panel a new added survey panel. Survey.Panel object
            * <br/> options.page the survey Page object where question has been added.
            */
        onPanelAdded: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * The event is called on adding a new page into the survey.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.page the new survey Page object.
            */
        onPageAdded: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * The event is called when a survey is changed in the designer. A new page/question/page is added or existing is removed, a property is changed and so on.
            * <br/> sender the survey editor object that fires the event
            */
        onModified: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * The event is fired when the Survey Editor is initialized and a survey object (Survey.Survey) is created.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.survey  the survey object showing in the editor.
            */
        onDesignerSurveyCreated: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * The event is fired when the Survey Editor runs the survey in the test mode.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.survey  the survey object showing in the "Test survey" tab.
            */
        onTestSurveyCreated: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * Use this event to control Property Editors UI.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.obj  the survey object which property is edited in the Property Editor.
            * <br/> options.propertyName  the name of the edited property.
            * <br/> options.editorOptions  options that can be changed.
            * <br/> options.editorOptions.allowAddRemoveItems a boolean property, true by default. Set it false to disable add/remove items in array properties. For example 'choices', 'columns', 'rows'.
            * <br/> options.editorOptions.showTextView a boolean property, true by default. Set it false to disable "Fast Entry" tab for "choices" property.
            */
        onSetPropertyEditorOptions: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * Use this event to show a custom error in the Question Editor on pressing Apply or OK buttons, if the values are not set correctly. The error will be displayed under the property editor.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.obj  the survey object which property is edited in the Property Editor.
            * <br/> options.propertyName  the name of the edited property.
            * <br/> options.value the property value.
            * <br/> options.error the error you want to display. Set the empty string (the default value) or null if there is no errors.
            * @see onPropertyValueChanging
            */
        onPropertyValidationCustomError: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * Use this event to change the value entered in the property editor. You may call a validation, so an end user sees the error immediately
            * <br/> sender the survey editor object that fires the event
            * <br/> options.obj  the survey object which property is edited in the Property Editor.
            * <br/> options.propertyName  the name of the edited property.
            * <br/> options.value the property value.
            * <br/> options.newValue set the corrected value into this property. Leave it null if you are ok with the entered value.
            * <br/> options.doValidation set the value to true to call the property validation. If there is an error, the user sees it immediately.
            * @see onPropertyValidationCustomError
            */
        onPropertyValueChanging: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * Use this event to change the value entered in the property editor. You may call a validation, so an end user sees the error immediately
            * <br/> sender the survey editor object that fires the event
            * <br/> options.obj  the survey object which property is edited in the Property Editor.
            * <br/> options.propertyName  the name of the edited property.
            * <br/> options.editor the instance of Property Editor.
            * @see onPropertyValueChanging
            */
        onPropertyEditorObjectAssign: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        /**
            * Use this event to add/remove/modify the element (question/panel) menu items.
            * <br/> sender the survey editor object that fires the event
            * <br/> options.obj  the survey object which property is edited in the Property Editor.
            * <br/> options.items the list of menu items. It has two requried fields: text and onClick: function(obj: Survey.Base) {} and optional name field.
            */
        onDefineElementMenuItems: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
        koAutoSave: KnockoutObservable<boolean>;
        /**
            * A boolean property, false by default. Set it to true to call protected doSave method automatically on survey changing.
            */
        isAutoSave: boolean;
        koShowState: KnockoutObservable<boolean>;
        /**
            * A boolean property, false by default. Set it to true to show the state in the toolbar (saving/saved).
            */
        showState: boolean;
        koIsShowDesigner: any;
        koViewType: any;
        koCanDeleteObject: any;
        koObjects: any;
        koSelectedObject: any;
        koShowSaveButton: any;
        koGenerateValidJSON: any;
        koShowOptions: any;
        koShowPropertyGrid: any;
        koTestSurveyWidth: any;
        koDesignerHeight: any;
        koShowPagesToolbox: any;
        selectDesignerClick: any;
        selectEditorClick: any;
        selectTestClick: any;
        selectEmbedClick: any;
        generateValidJSONClick: any;
        generateReadableJSONClick: any;
        doUndoClick: any;
        doRedoClick: any;
        deleteObjectClick: any;
        koState: KnockoutObservable<string>;
        runSurveyClick: any;
        embedingSurveyClick: any;
        saveButtonClick: any;
        draggingToolboxItem: any;
        clickToolboxItem: any;
        dragEnd: any;
        /**
            * The Survey Editor constructor.
            * @param renderedElement HtmlElement or html element id where Survey Editor will be rendered
            * @param options Survey Editor options. The following options are available: showJSONEditorTab, showTestSurveyTab, showEmbededSurveyTab, showPropertyGrid, questionTypes, showOptions, generateValidJSON, isAutoSave, designerHeight.
            */
        constructor(renderedElement?: any, options?: any);
        protected setOptions(options: any): void;
        /**
            * The editing survey object (Survey.Survey)
            */
        readonly survey: SurveyForDesigner;
        readonly selectedObjectEditor: SurveyObjectEditor;
        /**
            * Call this method to render the survey editor.
            * @param element HtmlElement or html element id where Survey Editor will be rendered
            * @param options Survey Editor options. The following options are available: showJSONEditorTab, showTestSurveyTab, showEmbededSurveyTab, showOptions, generateValidJSON, isAutoSave, designerHeight.
            */
        render(element?: any, options?: any): void;
        loadSurvey(surveyId: string): void;
        /**
            * The Survey JSON as a text. Use it to get Survey JSON or change it.
            */
        text: string;
        /**
            * Set JSON as text  into survey. Clear undo/redo states optionally.
            * @param value JSON as text
            * @param clearState default false. Set this parameter to true to clear undo/redo states.
            */
        changeText(value: string, clearState?: boolean): void;
        /**
            * Toolbox object. Contains information about Question toolbox items.
            * @see QuestionToolbox
            */
        readonly toolbox: QuestionToolbox;
        /**
            * The list of toolbar items. You may add/remove/replace them.
            * @see IToolbarItem
            */
        toolbarItems: KnockoutObservableArray<IToolbarItem>;
        /**
            * Get and set the maximum of copied questions/panels in the toolbox. The default value is 3
            */
        customToolboxQuestionMaxCount: number;
        /**
            * Returns the Editor state. It may return empty string or "saving" and "saved".
            */
        readonly state: string;
        protected setState(value: string): void;
        saveNo: number;
        protected doSave(): void;
        protected setModified(): void;
        /**
            * Assign to this property a function that will be called on clicking the 'Save' button or on any change if isAutoSave equals true.
            * @see isAutoSave
            */
        saveSurveyFunc: any;
        /**
            * Set it to true to show "Options" menu and to false to hide the menu
            */
        showOptions: boolean;
        /**
            * Set it to false to hide the Property Grid on the right. It allows to edit the properties of the selected object (question/panel/page/survey).
            */
        showPropertyGrid: boolean;
        /**
            * Set it to true to show "JSON Editor" tab and to false to hide the tab
            */
        showJSONEditorTab: boolean;
        /**
            * Set it to true to show "Test Survey" tab and to false to hide the tab
            */
        showTestSurveyTab: boolean;
        /**
            * Set it to true to show "Embed Survey" tab and to false to hide the tab
            */
        showEmbededSurveyTab: boolean;
        /**
            * Set it to true to activate RTL support
            */
        isRTL: boolean;
        protected onCanShowObjectProperty(object: any, property: Survey.JsonObjectProperty): boolean;
        /**
            * Add a new page into the editing survey.
            */
        addPage(): void;
        /**
            * Returns the localized string by it's id
            * @param str the string id.
            */
        getLocString(str: string): any;
        /**
            * Make a "Survey Designer" tab active.
            */
        showDesigner(): void;
        /**
            * Make a "JSON Editor" tab active.
            */
        showJsonEditor(): void;
        /**
            * Make a "Test Survey" tab active.
            */
        showTestSurvey(): void;
        /**
            * Make a Embed Survey" tab active.
            */
        showEmbedEditor(): void;
        /**
            * Show the Question Editor dialog.
            * @param question The Survey.Question object
            */
        showQuestionEditor(question: Survey.QuestionBase): void;
        /**
            * Add a question into Toolbox object
            * @param question an added Survey.Question
            * @see toolbox
            */
        addCustomToolboxQuestion(question: Survey.QuestionBase): void;
        /**
            * Copy a question to the active page
            * @param question A copied Survey.Question
            */
        fastCopyQuestion(question: Survey.Base): void;
        alwaySaveTextInPropertyEditors: boolean;
        showApplyButtonInEditors: boolean;
        onItemValueAddedCallback(propertyName: string, itemValue: Survey.ItemValue): void;
        onMatrixDropdownColumnAddedCallback(column: Survey.MatrixDropdownColumn): void;
        onSetPropertyEditorOptionsCallback(propertyName: string, obj: Survey.Base, editorOptions: any): void;
        onGetErrorTextOnValidationCallback(propertyName: string, obj: Survey.Base, value: any): string;
        onValueChangingCallback(options: any): void;
        onPropertyEditorObjectSetCallback(propertyName: string, obj: Survey.Base, editor: SurveyPropertyEditorBase): void;
}

export interface ISurveyInfo {
    name: KnockoutObservable<string>;
    id: string;
    postId: string;
}
export declare class SurveyDescription implements ISurveyInfo {
    name: KnockoutObservable<string>;
    createdAt: string;
    id: string;
    resultId: string;
    postId: string;
    constructor(name?: KnockoutObservable<string>, createdAt?: string, id?: string, resultId?: string, postId?: string);
}
export declare class SurveysManager {
    static serviceUrlPath: string;
    static StorageKey: string;
    getSurveys(): Array<SurveyDescription>;
    setSurveys(surveys: Array<ISurveyInfo>): void;
    constructor(baseUrl: string, accessKey: string, editor: SurveyEditor);
    toolbarItem: any;
    isEditMode: KnockoutObservable<boolean>;
    edit(model: any, event: any): void;
    addHandler(onAdd?: (success: boolean, result: string, response: any) => void): void;
    add(): void;
    remove(): void;
    surveyId: KnockoutObservable<string>;
    surveys: KnockoutObservableArray<ISurveyInfo>;
    currentSurvey: KnockoutObservable<ISurveyInfo>;
    currentSurveyName: KnockoutObservable<string>;
    isLoading: KnockoutObservable<boolean>;
    readonly cssEdit: string;
    readonly cssAdd: string;
    readonly titleEdit: string;
    readonly titleAdd: string;
    nameEditorKeypress: (model: any, event: any) => void;
}

