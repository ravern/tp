
    var pageVueRenderFn = function noop (a, b, c) {};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"acknowledgements"}},[_c('strong',[_v("Acknowledgements")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#acknowledgements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',{attrs:{"list":"","here":"","sources":"","of":"","all":"","reusedadapted":"","ideas,":"","code,":"","documentation,":"","and":"","third-party":"","libraries":"","--":"","include":"","links":"","to":"","the":"","original":"","source":"","as":"","well":""}})])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"setting-up-getting-started"}},[_c('strong',[_v("Setting up, getting started")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-up-getting-started","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Refer to the guide "),_c('a',{attrs:{"href":"/tp/SettingUp.html"}},[_c('em',[_v("Setting up and getting started")])]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"design"}},[_c('strong',[_v("Design")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-primary",attrs:{"markdown":"span"}},[_c('p',[_v("💡 "),_c('strong',[_v("Tip:")]),_v(" The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".puml")]),_v(" files used to create diagrams in this document "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("docs/diagrams")]),_v(" folder. Refer to the "),_c('a',{attrs:{"href":"https://se-education.org/guides/tutorials/plantUml.html"}},[_c('em',[_v("PlantUML Tutorial")]),_v(" at se-edu/guides")]),_v(" to learn how to create and edit diagrams.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"architecture"}},[_v("Architecture"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#architecture","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('em',[_c('strong',[_v("Architecture Diagram")])]),_v(" given above explains the high-level design of the App.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Main components of the architecture")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Main")])]),_v(" (consisting of classes "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/Main.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Main")])]),_v(" and "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/MainApp.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainApp")])]),_v(") is in charge of the app launch and shut down.")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("At app launch, it initializes the other components in the correct sequence, and connects them up with each other.")]),_v(" "),_c('li',[_v("At shut down, it shuts down the other components and invokes cleanup methods where necessary.")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"#ui-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")])])]),_v(": The UI of the App.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#logic-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")])])]),_v(": The command executor.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#model-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")])])]),_v(": Holds the data of the App in memory.")]),_v(" "),_c('li',[_c('a',{attrs:{"href":"#storage-component"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")])])]),_v(": Reads data from, and writes data to, the hard disk.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"#common-classes"}},[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Commons")])])]),_v(" represents a collection of classes used by multiple other components.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("How the architecture components interact with each other")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('em',[_v("Sequence Diagram")]),_v(" below shows how the components interact with each other for the scenario where the user issues the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 1")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("defines its "),_c('em',[_v("API")]),_v(" in an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("interface")]),_v(" with the same name as the Component.")]),_v(" "),_c('li',[_v("implements its functionality using a concrete "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("{Component Name}Manager")]),_v(" class (which follows the corresponding API "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("interface")]),_v(" mentioned in the previous point.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("For example, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component defines its API in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic.java")]),_v(" interface and implements its functionality using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager.java")]),_v(" class which follows the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" interface. Other components interact with a given component through its interface rather than the concrete class (reason: to prevent outside component's being coupled to the implementation of a component), as illustrated in the (partial) class diagram below.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"ui-component"}},[_v("UI component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#ui-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('strong',[_v("API")]),_v(" of this component is specified in "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/ui/Ui.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Ui.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/UiClassDiagram.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/UiClassDiagram.png","alt":"Structure of the UI Component"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The UI consists of a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")]),_v(" that is made up of parts e.g."),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommandBox")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ResultDisplay")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PersonListPanel")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("StatusBarFooter")]),_v(" etc. All these, including the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")]),_v(", inherit from the abstract "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UiPart")]),_v(" class which captures the commonalities between classes that represent parts of the visible GUI.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" component uses the JavaFx UI framework. The layout of these UI parts are defined in matching "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v(".fxml")]),_v(" files that are in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("src/main/resources/view")]),_v(" folder. For example, the layout of the "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/ui/MainWindow.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow")])]),_v(" is specified in "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/resources/view/MainWindow.fxml"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow.fxml")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("executes user commands using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component.")]),_v(" "),_c('li',[_v("listens for changes to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" data so that the UI can be updated with the modified data.")]),_v(" "),_c('li',[_v("keeps a reference to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component, because the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" relies on the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" to execute commands.")]),_v(" "),_c('li',[_v("depends on some classes in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component, as it displays "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" object residing in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"logic-component"}},[_v("Logic component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#logic-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("API")]),_v(" : "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/logic/Logic.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Here's a (partial) class diagram of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The sequence diagram below illustrates the interactions within the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component, taking "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute(\"delete 1\")")]),_v(" API call as an example.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/DeleteSequenceDiagram.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/DeleteSequenceDiagram.png","alt":"Interactions Inside the Logic Component for the `delete 1` Command"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("How the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component works:")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("When "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" is called upon to execute a command, it is passed to an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" object which in turn creates a parser that matches the command (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommandParser")]),_v(") and uses it to parse the command.")]),_v(" "),_c('li',[_v("This results in a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" object (more precisely, an object of one of its subclasses e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommand")]),_v(") which is executed by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager")]),_v(".")]),_v(" "),_c('li',[_v("The command can communicate with the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" when it is executed (e.g. to delete a person).")]),_v(" "),_c('li',[_v("The result of the command execution is encapsulated as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommandResult")]),_v(" object which is returned back from "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Here are the other classes in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" (omitted from the class diagram above) that are used for parsing a user command:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("When called upon to parse a user command, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" class creates an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommandParser")]),_v(" ("),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZ")]),_v(" is a placeholder for the specific command name e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommandParser")]),_v(") which uses the other classes shown above to parse the user command and create a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommand")]),_v(" object (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommand")]),_v(") which the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser")]),_v(" returns back as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" object.")]),_v(" "),_c('li',[_v("All "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("XYZCommandParser")]),_v(" classes (e.g., "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddCommandParser")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("DeleteCommandParser")]),_v(", ...) inherit from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Parser")]),_v(" interface so that they can be treated similarly where possible e.g, during testing.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"model-component"}},[_v("Model component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#model-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("API")]),_v(" : "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/model/Model.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("stores the address book data i.e., all "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" objects (which are contained in a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UniquePersonList")]),_v(" object).")]),_v(" "),_c('li',[_v("stores the currently 'selected' "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" objects (e.g., results of a search query) as a separate "),_c('em',[_v("filtered")]),_v(" list which is exposed to outsiders as an unmodifiable "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ObservableList<Person>")]),_v(" that can be 'observed' e.g. the UI can be bound to this list so that the UI automatically updates when the data in the list change.")]),_v(" "),_c('li',[_v("stores a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UserPref")]),_v(" object that represents the user’s preferences. This is exposed to the outside as a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ReadOnlyUserPref")]),_v(" objects.")]),_v(" "),_c('li',[_v("does not depend on any of the other three components (as the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" represents data entities of the domain, they should make sense on their own without depending on other components)")])])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-info",attrs:{"markdown":"span"}},[_v(":information_source: **Note:** An alternative (arguably, a more OOP) model is given below. It has a `Tag` list in the `AddressBook`, which `Person` references. This allows `AddressBook` to only require one `Tag` object per unique tag, instead of each `Person` needing their own `Tag` objects."),_c('br'),_v(" "),_c('img',{attrs:{"src":"/tp/images/BetterModelClassDiagram.png","width":"450"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"storage-component"}},[_v("Storage component"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#storage-component","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("API")]),_v(" : "),_c('a',{attrs:{"href":"https://github.com/se-edu/addressbook-level3/tree/master/src/main/java/seedu/address/storage/Storage.java"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage.java")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" component,")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("can save both address book data and user preference data in JSON format, and read them back into corresponding objects.")]),_v(" "),_c('li',[_v("inherits from both "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookStorage")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UserPrefStorage")]),_v(", which means it can be treated as either one (if only the functionality of only one is needed).")]),_v(" "),_c('li',[_v("depends on some classes in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component (because the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" component's job is to save/retrieve objects that belong to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(")")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"common-classes"}},[_v("Common classes"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#common-classes","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Classes used by multiple components are in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("seedu.addressbook.commons")]),_v(" package.")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"implementation"}},[_c('strong',[_v("Implementation")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"proposed-undo-redo-feature"}},[_v("[Proposed] Undo/redo feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#proposed-undo-redo-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"proposed-implementation"}},[_v("Proposed Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#proposed-implementation","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The proposed undo/redo mechanism is facilitated by "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VersionedAddressBook")]),_v(". It extends "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBook")]),_v(" with an undo/redo history, stored internally as an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(". Additionally, it implements the following operations:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VersionedAddressBook#commit()")]),_v(" — Saves the current address book state in its history.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VersionedAddressBook#undo()")]),_v(" — Restores the previous address book state from its history.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VersionedAddressBook#redo()")]),_v(" — Restores a previously undone address book state from its history.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("These operations are exposed in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" interface as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#undoAddressBook()")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#redoAddressBook()")]),_v(" respectively.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 1. The user launches the application for the first time. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("VersionedAddressBook")]),_v(" will be initialized with the initial address book state, and the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" pointing to that single address book state.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/UndoRedoState0.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/UndoRedoState0.png","alt":"UndoRedoState0"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 2. The user executes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 5")]),_v(" command to delete the 5th person in the address book. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(" command calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(", causing the modified state of the address book after the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 5")]),_v(" command executes to be saved in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(", and the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" is shifted to the newly inserted address book state.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/UndoRedoState1.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/UndoRedoState1.png","alt":"UndoRedoState1"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 3. The user executes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/David …​")]),_v(" to add a new person. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add")]),_v(" command also calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(", causing another modified address book state to be saved into the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/UndoRedoState2.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/UndoRedoState2.png","alt":"UndoRedoState2"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 4. The user now decides that adding the person was a mistake, and decides to undo that action by executing the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undo")]),_v(" command. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("undo")]),_v(" command will call "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#undoAddressBook()")]),_v(", which will shift the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" once to the left, pointing it to the previous address book state, and restores the address book to that state.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/UndoRedoState3.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/UndoRedoState3.png","alt":"UndoRedoState3"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/UndoSequenceDiagram.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/UndoSequenceDiagram.png","alt":"UndoSequenceDiagram"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("redo")]),_v(" command does the opposite — it calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#redoAddressBook()")]),_v(", which shifts the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" once to the right, pointing to the previously undone state, and restores the address book to that state.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 5. The user then decides to execute the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(". Commands that do not modify the address book, such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(", will usually not call "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#undoAddressBook()")]),_v(" or "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#redoAddressBook()")]),_v(". Thus, the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(" remains unchanged.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/UndoRedoState4.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/UndoRedoState4.png","alt":"UndoRedoState4"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 6. The user executes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("clear")]),_v(", which calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#commitAddressBook()")]),_v(". Since the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" is not pointing at the end of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("addressBookStateList")]),_v(", all address book states after the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("currentStatePointer")]),_v(" will be purged. Reason: It no longer makes sense to redo the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("add n/David …​")]),_v(" command. This is the behavior that most modern desktop applications follow.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/UndoRedoState5.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/UndoRedoState5.png","alt":"UndoRedoState5"}})])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"proposed-hide-unhide-feature"}},[_v("[Proposed] Hide/unhide feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#proposed-hide-unhide-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"proposed-implementation-2"}},[_v("Proposed Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#proposed-implementation-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("HideCommand#execute()")]),_v(" — Hides the specified applicant from the list.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UnhideCommand#execute()")]),_v(" — Unhides the specified applicant from the list.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UnhideAllCommand#execute()")]),_v(" — Unhides all hidden applicants.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ListHiddenCommand#execute()")]),_v(" — Displays a list of all hidden applicants.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 2. The user decides to hide the 3rd applicant in the applicant list by executing hide 3. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("hide")]),_v(" command calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#setPerson()")]),_v(" to replace the applicant with a hidden version.  "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#updateFilteredPersonList()")]),_v(" to update the list of applicants displayed in the UI to exclude the hidden applicant.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 3. The user executes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list hidden")]),_v(" to view all hidden applicants. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list hidden")]),_v(" command calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#updateFilteredPersonList()")]),_v(" to update the list of applicants displayed in the UI to include only hidden applicants.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 4. The user decides to unhide the 1st applicant in the hidden applicant list by executing unhide 1. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("hide")]),_v(" command calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#setPerson()")]),_v(" to replace the hidden applicant with a non-hidden version. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unhide")]),_v(" command calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#updateFilteredPersonList()")]),_v(" to update the list of applicants displayed in the UI to include the unhidden applicant.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 5. Alternatively, the user can choose to unhide all hidden applicants by executing unhide all. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unhide all")]),_v(" command creates a copy of the model and calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#updateFilteredPersonList()")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#getFilteredPersonList()")]),_v(" on that model to receive a list of hidden applicants. It then replaces every hidden person in the original model with a non-hidden version by calling "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#setPerson()")]),_v(". The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unhide all")]),_v(" command calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#updateFilteredPersonList()")]),_v(" to update the list of applicants displayed in the UI to include all unhidden applicants.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/HideSequenceDiagram.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/HideSequenceDiagram.png","alt":"HideSequenceDiagram"}})])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"bookmark-unbookmark-feature"}},[_v("Bookmark/Unbookmark feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#bookmark-unbookmark-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-2"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-2","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("BookmarkCommand#execute()")]),_v(" — Bookmarks a specified applicant.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UnbookmarkCommand#execute()")]),_v(" — Unbookmarks a specified applicant.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ListBookmarkedCommand#execute()")]),_v(" — Displays a list of all bookmarked applicants.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 2. The user executes "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bookmark 5")]),_v(" command to bookmark the 5th applicant in TAfinder. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bookmark")]),_v(" command calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#setPerson()")]),_v(", resulting in a copy of the original applicant, now modified to be bookmarked, being stored in the list of applicants after the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("bookmark 5")]),_v(" command executes. Additionally, the UI is updated to indicate that the applicant is now bookmarked via the bookmark flag.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 3. After bookmarking a number of applicants, the user now decides that bookmarking the 2nd applicant was a mistake, and decides to unbookmark them by executing the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unbookmark 2")]),_v(" command. The unbookmark command will call "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#setPerson()")]),_v(", resulting in a copy of the original applicant, now modified to be unbookmarked, being stored in the list of applicants after the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("unbookmark 2")]),_v(" command executes. Once again, the UI is updated to indicate that the applicant is now unbookmarked via the bookmark flag.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 4. The user then decides to view all bookmarked applicants by executing the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list-bookmarked")]),_v(" command. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list-bookmarked")]),_v(" command calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#updateFilteredPersonList()")]),_v(", which updates the list of applicants presented in the UI to only include bookmarked applicants.")])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"compare-feature"}},[_v("Compare feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#compare-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-3"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-3","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The compare mechanism allows users to compare two distinct TA applicants in the TAfinder app. The compare mechanism is mainly facilitated by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CompareCommand")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CompareCommandParser")]),_v(", and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CompareWindow")]),_v(" classes. It extends the abstract class "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" with an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(" functionality, to facilitate the execution of the command. Specifically, the compare feature is implemented through the following components and operations:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CompareCommand")]),_v(" — Core component responsible for executing the comparison of two TA applicants in the list.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" — Represents the TA applicants with their respective fields, such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Gpa")]),_v(", to be used for comparison.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CompareCommandParser")]),_v(" — Contains the functionalities for user input parsing. It ensures that user input is valid as a compare command by meeting specific requirements.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CompareWindow")]),_v(" — Main User Interface (UI) for after a compare command is successfully executed. It will display the content of the two TA applicants side by side.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 1. The user enters the compare command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("compare 1 2")]),_v(" to compare the first and second applicants in the existing list. The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CompareCommandParser")]),_v(" is invoked to parse the user's input.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 2. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CompareCommandParser")]),_v(" will then invoke "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ParserUtil")]),_v(" for parsing of the indices and check for index errors. If indices are invalid, the system will generate an error message. The error message will be displayed to the user, providing clear feedback about the issue and the specific constraints that are not met.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 3. If indices are valid, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CompareCommand#execute()")]),_v(" fetches the two intended applicants from the currently visible list and ensures that both indexes do not point to the same applicant.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 4. Then, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CompareCommand#execute()")]),_v(" creates a new "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CompareWindow")]),_v(" instance which is immediately shown, with the two applicants' information passed to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CompareWindow")]),_v(", in the form of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" model.")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/CompareSequenceDiagram.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/CompareSequenceDiagram.png","alt":"CompareSequenceDiagram"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 5. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CompareWindow")]),_v(" handles the GUI presentation aspects, in the form of a pop-up window. It uses the JavaFX "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("GridPane")]),_v(" layout to display the respective "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" attributes side-by-side.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The following activity diagram summarizes what happens when a user executes a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("compare")]),_v(" command:")])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/CompareActivityDiagram.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/CompareActivityDiagram.png","alt":"CompareActivityDiagram"}})])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"proposed-comment-feature"}},[_v("[Proposed] Comment feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#proposed-comment-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-4"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-4","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The comment command allows users to insert a comment on TA applicants in TAfinder app.\nThe comment mechanism is mainly facilitated by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommentCommand")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommentCommandParser")]),_v(" classes. It extends the abstract class "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" with an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(" functionality, to facilitate the execution of the command. Specifically, the comment feature is implemented through the following components and operations:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommentCommand")]),_v(" — Core component responsible for executing the adding of comments to a TA applicant in the list.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommentCommand#execute")]),_v(" — Adds the comment to the specific applicant in the list.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommentCommandParser")]),_v(" — Contains the functionalities for user input parsing. It ensures that user input is valid as a compare command by meeting specific requirements.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 2. The user decides to comment on the 3rd applicant in the applicant list with "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hardworking")]),_v(" as the comment by executing "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("comment 3 Hardworking")]),_v(". The "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommentCommmandParser")]),_v(" is invoked to parse the user's input.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 3. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommmentCommandParser")]),_v(" will then invoke ParserUtil for parsing of the index and check for index errors. If the index is invalid, the system will generate an error message. The error message will be displayed to the user, providing clear feedback about the issue and the specific constraints that are not met.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 4. If the index is valid, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommentCommand#execute()")]),_v(" fetches the intended applicant from the currently visible list and adds the comment "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Hardworking")]),_v(" to the applicant with the corresponding index. The adding of comment is destructive, meaning if the specified applicant has an existing comment, it will be overwritten.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 5. Then, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommentCommand#execute()")]),_v(" updates "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model#setModel")]),_v(" with the updated Person. Displaying the updated applicant list with the comment added.")])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"design-considerations"}},[_v("Design considerations"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#design-considerations","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Aspect: Comparison GUI:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('strong',[_v("Alternative 1 (current choice):")]),_v(" Compare two applicants in one pop-up window.")]),_v(" "),_c('ul',[_c('li',[_v("Pros:\n"),_c('ol',[_c('li',[_v("Easier to implement the pop-up window")]),_v(" "),_c('li',[_v("Able to avoid over-dependencies within the UI component.")])])]),_v(" "),_c('li',[_v("Cons: Design may not be uniform with main window.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Alternative 2:")]),_v(" Compare two applicants in the main window.")]),_v(" "),_c('ul',[_c('li',[_v("Pros:\n"),_c('ol',[_c('li',[_v("Easy view of information.")])])]),_v(" "),_c('li',[_v("Cons:\n"),_c('ol',[_c('li',[_v("Difficult to implement the UI change when a compare command is inputted, as whole window needs to be modified.")]),_v(" "),_c('li',[_v("Inconvenient to refer back to list of applicants if needed.")])])])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Alternative 3:")]),_v(" Compare multiple (two or more) applicants.")]),_v(" "),_c('ul',[_c('li',[_v("Pros: More convenient to choose between applicants.")]),_v(" "),_c('li',[_v("Cons: Harder to implement the UI.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"attach-feature"}},[_v("Attach feature"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#attach-feature","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"implementation-5"}},[_v("Implementation"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#implementation-5","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("The attach feature allows users to attach files to TA applicants in the app. Attaching files "),_c('em',[_v("copies")]),_v(" these files into the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data")]),_v(" directory and adds a reference to those files to that "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" model. This means that even if the original files are deleted, TAfinder would still have access to the copies of those files.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("The attachment mechanism is mainly facilitated by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AttachCommand")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AttachCommandParser")]),_v(", and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Attachment")]),_v(" classes. It extends the abstract class "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Command")]),_v(" with an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(" functionality, to facilitate the execution of the command. Specifically, the compare feature is implemented through the following components and operations:")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AttachCommand")]),_v(" — Core component responsible for executing the comparison of two TA applicants in the list.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AttachCommandParser")]),_v(" — Contains the functionalities for user input parsing. It ensures that user input is valid as an attach command by meeting specific requirements.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" — Represents the TA applicants with their respective fields, such as "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Attachment")]),_v(", to attach files to.")]),_v(" "),_c('li',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Attachment")]),_v(" — Represents a reference to a file. This can be a file that has been \"attached\" to a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(", or just a file within the file system of the computer.")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 1. The user enters the compare command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("attach 1 f/Downloads/resume.pdf f/Downloads/cv.txt")]),_v(" to attach the files "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("resume.pdf")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("cv.txt")]),_v(" in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Downloads")]),_v(" directory to the first user in the visible list.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 2. "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AttachCommandParser")]),_v(" will then invoke "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ParserUtil")]),_v(" for parsing of the index and check for index errors, and then parses the file paths to check for any invalid path characters. If index is invalid or the file path contains invalid path characters, the system will generate an error message. The error message will be displayed to the user, providing clear feedback about the issue and the specific constraints that are not met.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 3. If indices are valid, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AttachCommand#execute()")]),_v(" fetches the intended applicant from the currently visible list.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Step 4. Then, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AttachCommand#execute()")]),_v(" copies each attachment into the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data")]),_v(" directory, to the path "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("data/attachments/{student number}/{filename}")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"documentation-logging-testing-configuration-dev-ops"}},[_c('strong',[_v("Documentation, logging, testing, configuration, dev-ops")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#documentation-logging-testing-configuration-dev-ops","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('a',{attrs:{"href":"/tp/Documentation.html"}},[_v("Documentation guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/Testing.html"}},[_v("Testing guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/Logging.html"}},[_v("Logging guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/Configuration.html"}},[_v("Configuration guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"/tp/DevOps.html"}},[_v("DevOps guide")])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-requirements"}},[_c('strong',[_v("Appendix: Requirements")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-requirements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"product-scope"}},[_v("Product scope"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#product-scope","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Target user profile")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("University Professors")]),_v(", specifically:\n"),_c('ul',[_c('li',[_v("Tech-savvy")]),_v(" "),_c('li',[_v("Within NUS SoC")]),_v(" "),_c('li',[_v("Responsible for selecting student TAs")]),_v(" "),_c('li',[_v("Managing a significant number of TA applicants")]),_v(" "),_c('li',[_v("Can type fast")]),_v(" "),_c('li',[_v("Prefers typing over all other means of input")])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Value proposition")]),_v(":")])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_c('strong',[_v("Efficient TA Selection:")])]),_v(" "),_c('ul',[_c('li',[_v("Simplify the process of identifying and selecting qualified TAs within NUS SoC. Find the most suitable TAs from a diverse pool of applicants efficiently.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Enhanced Convenience:")])]),_v(" "),_c('ul',[_c('li',[_v("Conveniently connect with students and potential TAs, streamlining communication and making the TA selection process smoother.")])])]),_v(" "),_c('li',[_c('p',[_c('strong',[_v("Effective Evaluation:")])]),_v(" "),_c('ul',[_c('li',[_v("Assess TA applicants based on a range of holistic rubrics, including grades, student life involvement, past TA experiences, etc.")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"user-stories"}},[_v("User Stories"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#user-stories","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"high-priority-must-have"}},[_v("High Priority (Must-Have)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#high-priority-must-have","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("As a...")]),_v(" "),_c('th',[_v("I want to...")]),_v(" "),_c('th',[_v("So that I can...")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("add a TA applicant and details to the list")]),_v(" "),_c('td',[_v("see the TA applicant in the list")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("hide a TA applicant from the list")]),_v(" "),_c('td',[_v("narrow down the list of applicants for review")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("edit the details of a TA applicant")]),_v(" "),_c('td',[_v("keep their information up-to-date or correct errors")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("click to view the full details of a TA applicant")]),_v(" "),_c('td',[_v("determine if they’re a fit for the position accordingly")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("search for a specific TA applicant by name or details")]),_v(" "),_c('td',[_v("easily find their information without scrolling")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("delete a TA applicant")]),_v(" "),_c('td',[_v("remove entries that are no longer needed")])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"medium-priority-nice-to-have"}},[_v("Medium Priority (Nice-to-Have)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#medium-priority-nice-to-have","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("As a...")]),_v(" "),_c('th',[_v("I want to...")]),_v(" "),_c('th',[_v("So that I can...")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("NUS SOC professor who wants the best for my students")]),_v(" "),_c('td',[_v("sort TA applicants by grades or other factors")]),_v(" "),_c('td',[_v("find the best TA applicant for my module")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("add comments/notes for myself on a TA applicant")]),_v(" "),_c('td',[_v("refer to them when comparing applicants")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("export the list of TA applicants to a spreadsheet")]),_v(" "),_c('td',[_v("easily share the list with colleagues or refer to it offline")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("compare between two TA applicants on the same screen")]),_v(" "),_c('td',[_v("make a final decision on selecting the TA for my module")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("rate and provide feedback on TA applicants after interviews or assessments")]),_v(" "),_c('td',[_v("collaborate with colleagues on the hiring decision.")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("attach files (e.g., resumes) to TA applicant profiles")]),_v(" "),_c('td',[_v("keep all pertinent information in one place.")])])])])])}
},function anonymous(
) {
with(this){return _c('h4',{attrs:{"id":"low-priority-unlikely-to-have"}},[_v("Low Priority (Unlikely to Have)"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#low-priority-unlikely-to-have","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"table-responsive"},[_c('table',{staticClass:"markbind-table table table-bordered table-striped"},[_c('thead',[_c('tr',[_c('th',[_v("As a...")]),_v(" "),_c('th',[_v("I want to...")]),_v(" "),_c('th',[_v("So that I can...")])])]),_v(" "),_c('tbody',[_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("set up automated notifications for when new TA applicants apply")]),_v(" "),_c('td',[_v("stay informed without constantly checking the list.")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("send TA applicants invitations and reminders")]),_v(" "),_c('td',[_v("schedule interviews with TA applicants directly through the system.")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("track the progress and performance of hired TAs throughout the semester")]),_v(" "),_c('td',[_v("provide feedback and assess their contributions.")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("filter applicants by availability and schedule")]),_v(" "),_c('td',[_v("match them with suitable time slots for my module")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("set up automatic reminders for TA performance evaluations")]),_v(" "),_c('td',[_v("stay organized and proactive in managing my teaching assistants.")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("track the number of applicants for each TA position")]),_v(" "),_c('td',[_v("gauge the level of interest and competition for specific roles.")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("archive or store past TA applicant data")]),_v(" "),_c('td',[_v("reference them in future semesters or academic years.")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("sort the list of TA applicants by their application status")]),_v(" "),_c('td',[_v("streamline the selection process.")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("archive previous TA applicant profiles")]),_v(" "),_c('td',[_v("maintain a historical record of applicants.")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("create and manage multiple TA applicant lists")]),_v(" "),_c('td',[_v("keep information organized for different modules or terms.")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("batch process approvals or rejections of TA applications")]),_v(" "),_c('td',[_v("save time during the selection process.")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("access a help feature within the platform")]),_v(" "),_c('td',[_v("understand how to use different functionalities efficiently.")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("customize the appearance and layout of the TA applicant list")]),_v(" "),_c('td',[_v("enhance the user experience.")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("flag TA applicants for further review")]),_v(" "),_c('td',[_v("remember to revisit certain profiles as the process continues.")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("generate reports summarizing TA applicant data")]),_v(" "),_c('td',[_v("easier overview and presentation to department heads or committees.")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("retrieve deleted or archived TA applicant data")]),_v(" "),_c('td',[_v("recover information if needed.")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("access a log of all actions performed on the system")]),_v(" "),_c('td',[_v("enhance security and accountability.")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("receive recommendations on TA applicants based on AI analysis")]),_v(" "),_c('td',[_v("facilitate a smarter selection process.")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("import a spreadsheet of TA applicants to my module")]),_v(" "),_c('td',[_v("save time by not adding them individually")])]),_v(" "),_c('tr',[_c('td',[_v("NUS SOC professor")]),_v(" "),_c('td',[_v("search for a TA applicant using an identifier")]),_v(" "),_c('td',[_v("contact the TA directly if needed")])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('em',[_v("{More to be added}")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"use-cases"}},[_v("Use cases"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#use-cases","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("(For all use cases below, the "),_c('strong',[_v("System")]),_v(" is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("TAfinder")]),_v(" and the "),_c('strong',[_v("Actor")]),_v(" is "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("NUS SOC professor")]),_v(", unless specified otherwise)")])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("UC01 - Edit an applicant")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Preconditions:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("User is logged into the system.")]),_v(" "),_c('li',[_v("There is at least one applicant in the list.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to edit an applicant's information.")])]),_v(" "),_c('li',[_c('p',[_v("System requests the index of the applicant to edit.")])]),_v(" "),_c('li',[_c('p',[_v("User specifies the index and information.")])]),_v(" "),_c('li',[_c('p',[_v("System validates the input.")])]),_v(" "),_c('li',[_c('p',[_v("System updates the applicant's information.")])]),_v(" "),_c('li',[_c('p',[_v("System shows the updated list of applicants.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("4a. The given index or information is invalid.")]),_v(" "),_c('ul',[_c('li',[_c('p',[_v("4a1. System shows an error message.")]),_v(" "),_c('p',[_v("Use case resumes at step 2.")])])])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("UC02 - Compare Two Applicants")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Preconditions:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_v("User is logged into the system.")]),_v(" "),_c('li',[_v("There are at least two applicants in the list.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("MSS")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("User requests to compare two applicants.")])]),_v(" "),_c('li',[_c('p',[_v("System requests the indices of the first and second applicants to compare.")])]),_v(" "),_c('li',[_c('p',[_v("User specifies the indices.")])]),_v(" "),_c('li',[_c('p',[_v("System validates the input.")])]),_v(" "),_c('li',[_c('p',[_v("System retrieves the information of both applicants.")]),_v(" "),_c('p',[_v("Use case ends.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('strong',[_v("Extensions:")])])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('p',[_v("4a. The given indices are missing or invalid.")]),_v(" "),_c('ul',[_c('li',[_v("4a1. System shows an error message")])]),_v(" "),_c('p',[_v("Use case resumes at step 2.")])])])}
},function anonymous(
) {
with(this){return _c('p',[_c('em',[_v("{More to be added}")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"non-functional-requirements"}},[_v("Non-Functional Requirements"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#non-functional-requirements","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Should work on any "),_c('em',[_v("mainstream OS")]),_v(" as long as it has Java "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("11")]),_v(" or above installed.")]),_v(" "),_c('li',[_v("Should be able to hold up to 1000 persons without a noticeable sluggishness in performance for typical usage.")]),_v(" "),_c('li',[_v("A user with above average typing speed for regular English text (i.e. not code, not system admin commands) should be able to accomplish most of the tasks faster using commands than using the mouse.")]),_v(" "),_c('li',[_v("Should be able to process user inputs in at most 100 milliseconds.")]),_v(" "),_c('li',[_v("Should have intuitive and easy-to-use commands that corresponds closely to their use cases (i.e. 'add' to add an item).")]),_v(" "),_c('li',[_v("Non-trivial methods and classes should be well-documented.")]),_v(" "),_c('li',[_v("Should provide a comprehensive help section accessible to professors for all the different features.")])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"glossary"}},[_v("Glossary"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#glossary","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ul',[_c('li',[_c('strong',[_v("Mainstream OS")]),_v(": Windows, Linux, Unix, OS-X")]),_v(" "),_c('li',[_c('strong',[_v("TA (Teaching Assistant)")]),_v(": A graduate or undergraduate student who assists a professor in teaching activities, such as grading, leading discussions or conducting tutorials.")]),_v(" "),_c('li',[_c('strong',[_v("NUS professor")]),_v(": A faculty member at the National University of Singapore (NUS) responsible for teaching and academic activities.")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"appendix-instructions-for-manual-testing"}},[_c('strong',[_v("Appendix: Instructions for manual testing")]),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#appendix-instructions-for-manual-testing","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"launch-and-shutdown"}},[_v("Launch and shutdown"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#launch-and-shutdown","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Initial launch")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Download the jar file and copy into an empty folder")])]),_v(" "),_c('li',[_c('p',[_v("Double-click the jar file Expected: Shows the GUI with a set of sample contacts. The window size may not be optimum.")])])])]),_v(" "),_c('li',[_c('p',[_v("Saving window preferences")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Resize the window to an optimum size. Move the window to a different location. Close the window.")])]),_v(" "),_c('li',[_c('p',[_v("Re-launch the app by double-clicking the jar file."),_c('br'),_v("\nExpected: The most recent window size and location is retained.")])])])]),_v(" "),_c('li',[_c('p',[_c('em',[_v("{ more test cases …​ }")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"deleting-a-person"}},[_v("Deleting a person"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#deleting-a-person","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Deleting a person while all persons are being shown")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Prerequisites: List all persons using the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("list")]),_v(" command. Multiple persons in the list.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 1")]),_c('br'),_v("\nExpected: First contact is deleted from the list. Details of the deleted contact shown in the status message. Timestamp in the status bar is updated.")])]),_v(" "),_c('li',[_c('p',[_v("Test case: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete 0")]),_c('br'),_v("\nExpected: No person is deleted. Error details shown in the status message. Status bar remains the same.")])]),_v(" "),_c('li',[_c('p',[_v("Other incorrect delete commands to try: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete x")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("...")]),_v(" (where x is larger than the list size)"),_c('br'),_v("\nExpected: Similar to previous.")])])])]),_v(" "),_c('li',[_c('p',[_c('em',[_v("{ more test cases …​ }")])])])])}
},function anonymous(
) {
with(this){return _c('h3',{attrs:{"id":"saving-data"}},[_v("Saving data"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#saving-data","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("Dealing with missing/corrupted data files")]),_v(" "),_c('ol',[_c('li',[_c('em',[_v("{explain how to simulate a missing/corrupted file, and the expected behavior}")])])])]),_v(" "),_c('li',[_c('p',[_c('em',[_v("{ more test cases …​ }")])])])])}
}];
  