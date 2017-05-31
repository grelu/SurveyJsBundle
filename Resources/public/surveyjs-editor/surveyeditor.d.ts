/*Type definitions for Surveyjs Editor JavaScript library v0.12.16
(c) Devsoft Baltic O� - http://surveyjs.io/
Github - https://github.com/surveyjs/editor
License: (http://editor.surveyjs.io/license.html)
*/
// Dependencies for this module:
//   ../../../survey-knockout

import * as Survey from "survey-knockout";

import "../main.scss";
export let Version: string;
import "bootstrap";
import '../localization/french';
import '../localization/spanish';

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
    onItemValueAddedCallback(propertyName: string, itemValue: Survey.ItemValue): any;
    onMatrixDropdownColumnAddedCallback(column: Survey.MatrixDropdownColumn): any;
}
export declare class SurveyPropertyEditorBase {
    static defaultEditor: string;
    static registerEditor(name: string, creator: () => SurveyPropertyEditorBase): void;
    static createEditor(editorType: string, func: (newValue: any) => any): SurveyPropertyEditorBase;
    options: ISurveyObjectEditorOptions;
    onChanged: (newValue: any) => any;
    onGetLocale: () => string;
    editablePropertyName: string;
    constructor();
    readonly editorType: string;
    getValueText(value: any): string;
    value: any;
    readonly locale: string;
    protected setValueCore(value: any): void;
    setTitle(value: string): void;
    setObject(value: any): void;
    protected onValueChanged(): void;
    protected getCorrectedValue(value: any): any;
}
export declare class SurveyStringPropertyEditor extends SurveyPropertyEditorBase {
    constructor();
    readonly editorType: string;
}
export declare class SurveyDropdownPropertyEditor extends SurveyPropertyEditorBase {
    constructor();
    readonly editorType: string;
}
export declare class SurveyBooleanPropertyEditor extends SurveyPropertyEditorBase {
    constructor();
    readonly editorType: string;
}
export declare class SurveyNumberPropertyEditor extends SurveyPropertyEditorBase {
    constructor();
    readonly editorType: string;
}

export declare class SurveyPropertyTextItemsEditor extends SurveyNestedPropertyEditor {
    constructor();
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
    constructor();
    getValueText(value: any): string;
    protected getCorrectedValue(value: any): any;
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
    changeToTextViewClick: any;
    changeToFormViewClick: any;
    constructor();
    readonly editorType: string;
    hasError(): boolean;
    protected createNewEditorItem(): any;
    protected createEditorItem(item: any): {
        item: any;
        koValue: KnockoutObservable<any>;
        koText: KnockoutObservable<string>;
        koHasError: KnockoutObservable<boolean>;
    };
    protected createItemFromEditorItem(editorItem: any): Survey.ItemValue;
    protected onBeforeApply(): void;
    protected updateItems(text: string): void;
    protected getItemsText(): string;
    protected isValueEmpty(val: any): boolean;
}

export declare class SurveyNestedPropertyEditor extends SurveyPropertyItemsEditor {
    koEditItem: any;
    koIsList: any;
    onEditItemClick: any;
    onCancelEditItemClick: any;
    constructor();
    hasError(): boolean;
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
    constructor();
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

export declare class SurveyPropertyModalEditor extends SurveyPropertyEditorBase {
    object: any;
    title: any;
    onApplyClick: any;
    onResetClick: any;
    constructor();
    setTitle(value: string): void;
    hasError(): boolean;
    protected onBeforeApply(): void;
    setObject(value: any): void;
    readonly isEditable: boolean;
    apply(): void;
}
export declare class SurveyPropertyTextEditor extends SurveyPropertyModalEditor {
    koValue: any;
    constructor();
    readonly editorType: string;
    readonly isEditable: boolean;
    getValueText(value: any): string;
    protected onValueChanged(): void;
    protected onBeforeApply(): void;
}
export declare class SurveyPropertyHtmlEditor extends SurveyPropertyTextEditor {
    constructor();
    readonly editorType: string;
}
export declare class SurveyPropertyExpressionEditor extends SurveyPropertyTextEditor {
    constructor();
    readonly editorType: string;
}

export declare class SurveyPropertyResultfullEditor extends SurveyPropertyModalEditor {
    koUrl: any;
    koPath: any;
    koValueName: any;
    koTitleName: any;
    survey: Survey.Survey;
    question: Survey.QuestionDropdown;
    constructor();
    readonly editorType: string;
    readonly restfullValue: Survey.ChoicesRestfull;
    getValueText(value: any): string;
    protected onValueChanged(): void;
    protected onBeforeApply(): void;
}

export declare class SurveyPropertyTriggersEditor extends SurveyPropertyItemsEditor {
    koQuestions: any;
    koPages: any;
    koSelected: any;
    availableTriggers: Array<string>;
    constructor();
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
    availableValidators: Array<string>;
    constructor();
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
    removeObject(obj: Survey.Base): void;
    nameChanged(obj: Survey.Base): void;
    selectNextQuestion(isUp: boolean): Survey.QuestionBase;
}

export declare var editorLocalization: {
    currentLocale: string;
    locales: {};
    getString: (strName: string, locale?: string) => any;
    getPropertyName: (strName: string, local?: string) => any;
    getPropertyTitle: (strName: string, local?: string) => any;
    getProperty: (strName: string, local?: string) => any;
    getLocales: () => string[];
};
export declare var defaultStrings: {
    survey: {
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
        radiogroup: string;
        rating: string;
        text: string;
    };
    ed: {
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
    isRequired: boolean;
    name: string;
    title: string;
    editType: string;
    disabled: boolean;
    choices: Array<any>;
    koValue: any;
    koErrorText: any;
    koHasError: any;
    constructor(obj: Survey.Base, property: Survey.JsonObjectProperty, isRequired?: boolean);
    hasError(): boolean;
    apply(): void;
    reset(): void;
}
export declare class SurveyQuestionEditorGeneralRow {
    obj: Survey.Base;
    category: string;
    properties: Array<SurveyQuestionEditorGeneralProperty>;
    constructor(obj: Survey.Base, property: Survey.JsonObjectProperty, isPropertyRequired?: boolean);
    addProperty(property: any, isPropertyRequired?: boolean): void;
    hasError(): boolean;
}
export declare class SurveyQuestionEditorGeneralProperties {
    obj: Survey.Base;
    rows: Array<SurveyQuestionEditorGeneralRow>;
    constructor(obj: Survey.Base, properties: Array<any>, onCanShowPropertyCallback?: (object: any, property: Survey.JsonObjectProperty) => boolean);
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
    onTabClick: any;
    constructor(obj: Survey.Base, onCanShowPropertyCallback: (object: any, property: Survey.JsonObjectProperty) => boolean, className?: string, options?: ISurveyObjectEditorOptions);
    hasError(): boolean;
    reset(): void;
    apply(): void;
}
export declare class SurveyQuestionEditorTabBase {
    obj: Survey.Base;
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

export interface IQuestionToolboxItem {
    name: string;
    iconName: string;
    json: any;
    title: string;
    isCopied: boolean;
}
export declare class QuestionToolbox {
    orderedQuestions: string[];
    copiedItemMaxCount: number;
    koItems: any;
    constructor(supportedQuestions?: Array<string>);
    jsonText: string;
    copiedJsonText: string;
    readonly items: Array<IQuestionToolboxItem>;
    readonly copiedItems: Array<IQuestionToolboxItem>;
    addItems(items: Array<IQuestionToolboxItem>, clearAll?: boolean): void;
    addCopiedItem(question: Survey.QuestionBase): void;
    addItem(item: IQuestionToolboxItem): void;
    replaceItem(item: IQuestionToolboxItem): boolean;
    removeItem(name: string): boolean;
    clearItems(): void;
    clearCopiedItems(): void;
    protected onItemsChanged(): void;
}

export declare type SurveyOnPropertyChangedCallback = (property: SurveyObjectProperty, newValue: any) => void;
export declare class SurveyObjectProperty {
    property: Survey.JsonObjectProperty;
    name: string;
    displayName: string;
    title: string;
    disabled: boolean;
    koValue: any;
    koText: any;
    modalName: string;
    modalNameTarget: string;
    koIsDefault: any;
    editor: SurveyPropertyEditorBase;
    editorType: string;
    baseEditorType: string;
    choices: Array<any>;
    constructor(property: Survey.JsonObjectProperty, onPropertyChanged?: SurveyOnPropertyChangedCallback, propertyEditorOptions?: ISurveyObjectEditorOptions);
    object: any;
    protected updateValue(): void;
    protected getValue(): any;
    protected getValueText(value: any): string;
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
    ObjectChanged(): void;
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

export declare class SurveyForDesigner extends Survey.Survey {
    editQuestionClick: any;
    copyQuestionClick: any;
    fastCopyQuestionClick: any;
    deleteCurrentObjectClick: any;
    onSelectedElementChanged: Survey.Event<(sender: Survey.Survey, options: any) => any, any>;
    onEditQuestion: Survey.Event<(sender: Survey.Survey, options: any) => any, any>;
    onCopyQuestion: Survey.Event<(sender: Survey.Survey, options: any) => any, any>;
    onFastCopyQuestion: Survey.Event<(sender: Survey.Survey, options: any) => any, any>;
    onDeleteCurrentObject: Survey.Event<(sender: Survey.Survey, options: any) => any, any>;
    constructor(jsonObj?: any, renderedElement?: any, css?: any);
    selectedElement: any;
    getEditorLocString(value: string): string;
}

export interface IToolbarItem {
    id: string;
    visible: KnockoutObservable<boolean> | boolean;
    title: KnockoutObservable<string> | string;
    enabled?: KnockoutObservable<boolean> | boolean;
    action?: () => void;
    css?: KnockoutObservable<string> | string;
    innerCss?: KnockoutObservable<string> | string;
    data?: any;
    template?: string;
    items?: KnockoutObservableArray<IToolbarItem>;
}
export declare class SurveyEditor implements ISurveyObjectEditorOptions {
    static defaultNewSurveyText: string;
    surveyId: string;
    surveyPostId: string;
    generateValidJSONChangedCallback: (generateValidJSON: boolean) => void;
    onCanShowProperty: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
    onQuestionAdded: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
    onItemValueAdded: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
    onMatrixColumnAdded: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
    onPanelAdded: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
    onModified: Survey.Event<(sender: SurveyEditor, options: any) => any, any>;
    koAutoSave: KnockoutObservable<boolean>;
    isAutoSave: boolean;
    koShowState: KnockoutObservable<boolean>;
    showState: boolean;
    koIsShowDesigner: any;
    koViewType: any;
    koCanDeleteObject: any;
    koObjects: any;
    koSelectedObject: any;
    koShowSaveButton: any;
    koGenerateValidJSON: any;
    koShowOptions: any;
    koTestSurveyWidth: any;
    koDesignerHeight: any;
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
    constructor(renderedElement?: any, options?: any);
    protected setOptions(options: any): void;
    readonly survey: SurveyForDesigner;
    render(element?: any, options?: any): void;
    loadSurvey(surveyId: string): void;
    text: string;
    changeText(value: string, clearState?: boolean): void;
    readonly toolbox: QuestionToolbox;
    toolbarItems: KnockoutObservableArray<IToolbarItem>;
    customToolboxQuestionMaxCount: number;
    readonly state: string;
    protected setState(value: string): void;
    saveNo: number;
    protected doSave(): void;
    protected setModified(): void;
    saveSurveyFunc: any;
    showOptions: boolean;
    showJSONEditorTab: boolean;
    showTestSurveyTab: boolean;
    showEmbededSurveyTab: boolean;
    protected onCanShowObjectProperty(object: any, property: Survey.JsonObjectProperty): boolean;
    addPage(): void;
    getLocString(str: string): any;
    showDesigner(): void;
    showJsonEditor(): void;
    showTestSurvey(): void;
    showEmbedEditor(): void;
    showQuestionEditor(question: Survey.QuestionBase): void;
    addCustomToolboxQuestion(question: Survey.QuestionBase): void;
    fastCopyQuestion(question: Survey.Base): void;
    alwaySaveTextInPropertyEditors: boolean;
    onItemValueAddedCallback(propertyName: string, itemValue: Survey.ItemValue): void;
    onMatrixDropdownColumnAddedCallback(column: Survey.MatrixDropdownColumn): void;
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

