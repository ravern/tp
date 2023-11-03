
    var pageVueRenderFn = function noop (a, b, c) {};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('blockquote',[_c('p',[_v("Indeed, the ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code as part of the effort to write new code. …​[Therefore,] making it easy to read makes it easier to write.")]),_v(" "),_c('p',[_v("—  Robert C. Martin Clean Code: A Handbook of Agile Software Craftsmanship")])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"before-we-start"}},[_v("Before we start"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#before-we-start","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/ArchitectureDiagram.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/ArchitectureDiagram.png","alt":"ArchitectureDiagram"}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Note how the diagram shows only the execution flows "),_c('em',[_v("between")]),_v(" the main components. That is, it does not show details of the execution path "),_c('em',[_v("inside")]),_v(" each component. By hiding those details, the diagram aims to inform the reader about the overall execution path of a command without overwhelming the reader with too much details. In this tutorial, you aim to find those omitted details so that you get a more in-depth understanding of how the code works.")])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_v("Read the "),_c('a',{attrs:{"href":"/tp/DeveloperGuide.html#architecture"}},[_c('em',[_v("Architecture")]),_v(" section of the DG")])]),_v(" "),_c('li',[_v("Set up the project in Intellij IDEA")]),_v(" "),_c('li',[_v("Learn basic debugging features of Intellij IDEA\n"),_c('ul',[_c('li',[_v("If you are using a different IDE, we'll leave it to you to figure out the equivalent feature to use in your IDE.")]),_v(" "),_c('li',[_v("If you are not using an IDE, we'll let you figure out how to achieve the same using your coding toolchain.")])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"setting-a-breakpoint"}},[_v("Setting a breakpoint"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#setting-a-breakpoint","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("As you know, the first step of debugging is to put in a breakpoint where you want the debugger to pause the execution. For example, if you are trying to understand how the App starts up, you would put a breakpoint in the first statement of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("main")]),_v(" method.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("In our case, we would want to begin the tracing at the very point where the App start processing user input (i.e., somewhere in the UI component), and then trace through how the execution proceeds through the UI component. However, the execution path through a GUI is often somewhat obscure due to various "),_c('em',[_v("event-driven mechanisms")]),_v(" used by GUI frameworks, which happens to be the case here too. Therefore, let us put the breakpoint where the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" transfers control to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component.")])}
},function anonymous(
) {
with(this){return _c('p',[_v("According to the sequence diagram you saw earlier (and repeated above for reference), the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" component yields control to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component through a method named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(". Searching through the code base for an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute()")]),_v(" method that belongs to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component yields a promising candidate in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("seedu.address.logic.Logic")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-primary",attrs:{"markdown":"span"}},[_c('p',[_v("💡 "),_c('strong',[_v("Intellij Tip:")]),_v(" The "),_c('a',{attrs:{"href":"https://www.jetbrains.com/help/idea/searching-everywhere.html"}},[_v("'"),_c('strong',[_v("Search Everywhere")]),_v("' feature")]),_v(" can be used here. In particular, the '"),_c('strong',[_v("Find Symbol")]),_v("' ('Symbol' here refers to methods, variables, classes etc.) variant of that feature is quite useful here as we are looking for a "),_c('em',[_v("method")]),_v(" named "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(", not simply the text "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute")]),_v(".")])])}
},function anonymous(
) {
with(this){return _c('p',[_v("A quick look at the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("seedu.address.logic.Logic")]),_v(" (an extract given below) confirms that this indeed might be what we’re looking for.")])}
},function anonymous(
) {
with(this){return _c('pre',[_c('code',{pre:true,attrs:{"class":"hljs java"}},[_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("public")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-class"}},[_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("interface")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("Logic")]),_v(" ")]),_v("{\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("/**")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("     * Executes the command and returns the result.")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("     * "),_c('span',{pre:true,attrs:{"class":"hljs-doctag"}},[_v("@param")]),_v(" commandText The command as entered by the user.")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("     * "),_c('span',{pre:true,attrs:{"class":"hljs-doctag"}},[_v("@return")]),_v(" the result of the command execution.")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("     * "),_c('span',{pre:true,attrs:{"class":"hljs-doctag"}},[_v("@throws")]),_v(" CommandException If an error occurs during command execution.")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("     * "),_c('span',{pre:true,attrs:{"class":"hljs-doctag"}},[_v("@throws")]),_v(" ParseException If an error occurs during parsing.")]),_v("\n")]),_c('span',[_c('span',{pre:true,attrs:{"class":"hljs-comment"}},[_v("     */")]),_v("\n")]),_c('span',[_v("    "),_c('span',{pre:true,attrs:{"class":"hljs-function"}},[_v("CommandResult "),_c('span',{pre:true,attrs:{"class":"hljs-title"}},[_v("execute")]),_c('span',{pre:true,attrs:{"class":"hljs-params"}},[_v("(String commandText)")]),_v(" "),_c('span',{pre:true,attrs:{"class":"hljs-keyword"}},[_v("throws")]),_v(" CommandException, ParseException")]),_v(";\n")]),_c('span',[_v("...\n")]),_c('span',[_v("}\n")])])])}
},function anonymous(
) {
with(this){return _c('p',[_v("But apparently, this is an interface, not a concrete implementation.\nThat should be fine because the "),_c('a',{attrs:{"href":"/tp/DeveloperGuide.html#architecture"}},[_v("Architecture section of the Developer Guide")]),_v(" tells us that components interact through interfaces. Here's the relevant diagram:")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Next, let's find out which statement(s) in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" code is calling this method, thus transferring control from the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-primary",attrs:{"markdown":"span"}},[_c('p',[_v("💡 "),_c('strong',[_v("Intellij Tip:")]),_v(" The "),_c('a',{attrs:{"href":"https://www.jetbrains.com/help/idea/find-highlight-usages.html#find-usages"}},[_v("'"),_c('strong',[_v("Find Usages")]),_v("' feature")]),_v(" can find from which parts of the code a class/method/variable is being used.")])])}
},function anonymous(
) {
with(this){return _c('p',[_c('a',{attrs:{"href":"/tp/images/tracing/FindUsages.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/tracing/FindUsages.png","alt":"`Find Usages` tool window. `Edit` \\> `Find` \\> `Find Usages`."}})])])}
},function anonymous(
) {
with(this){return _c('p',[_v("Bingo! "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow#executeCommand()")]),_v(" seems to be exactly what we’re looking for!")])}
},function anonymous(
) {
with(this){return _c('p',[_v("Now let’s set the breakpoint. First, double-click the item to reach the corresponding code. Once there, click on the left gutter to set a breakpoint, as shown below.\n"),_c('a',{attrs:{"href":"/tp/images/tracing/LeftGutter.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/tracing/LeftGutter.png","alt":"LeftGutter"}})])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"tracing-the-execution-path"}},[_v("Tracing the execution path"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tracing-the-execution-path","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('p',[_v("Recall from the User Guide that the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_v(" command has the format: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit INDEX [n/NAME] [p/PHONE] [e/EMAIL] [a/ADDRESS] [t/TAG]…​")]),_v(" For this tutorial we will be issuing the command "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1 n/Alice Yeoh")]),_v(".")])}
},function anonymous(
) {
with(this){return _c('div',{staticClass:"alert alert-primary",attrs:{"markdown":"span"}},[_c('p',[_v("💡 "),_c('strong',[_v("Tip:")]),_v(" Over the course of the debugging session, you will encounter every major component in the application. Try to keep track of what happens inside the component and where the execution transfers to another component.")])])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("To start the debugging session, simply "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Run")]),_v(" > "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Debug Main")])])]),_v(" "),_c('li',[_c('p',[_v("When the GUI appears, enter "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1 n/Alice Yeoh")]),_v(" into the command box and press "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Enter")]),_v(".")])]),_v(" "),_c('li',[_c('p',[_v("The Debugger tool window should show up and show something like this:"),_c('br'),_v(" "),_c('a',{attrs:{"href":"/tp/images/tracing/DebuggerStep1.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/tracing/DebuggerStep1.png","alt":"DebuggerStep1"}})])])]),_v(" "),_c('li',[_c('p',[_v("Use the "),_c('em',[_v("Show execution point")]),_v(" feature to jump to the line of code that we stopped at:"),_c('br'),_v(" "),_c('a',{attrs:{"href":"/tp/images/tracing/ShowExecutionPoint.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/tracing/ShowExecutionPoint.png","alt":"ShowExecutionPoint"}})]),_c('br'),_v(" "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommandResult commandResult = logic.execute(commandText);")]),_v(" is the line that you end up at (i.e., the place where we put the breakpoint).")])]),_v(" "),_c('li',[_c('p',[_v("We are interested in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("logic.execute(commandText)")]),_v(" portion of that line so let’s "),_c('em',[_v("Step in")]),_v(" into that method call:"),_c('br'),_v(" "),_c('a',{attrs:{"href":"/tp/images/tracing/StepInto.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/tracing/StepInto.png","alt":"StepInto"}})])])]),_v(" "),_c('li',[_c('p',[_v("We end up in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager#execute()")]),_v(" (not "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic#execute")]),_v(" -- but this is expected because we know the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute()")]),_v(" method in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" interface is actually implemented by the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager")]),_v(" class). Let’s take a look at the body of the method. Given below is the same code, with additional explanatory comments.")]),_v(" "),_c('p',[_c('strong',[_v("LogicManager#execute().")])]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("@Override\n")]),_c('span',[_v("public CommandResult execute(String commandText)\n")]),_c('span',[_v("        throws CommandException, ParseException {\n")]),_c('span',[_v("\n")]),_c('span',[_v("     //Logging, safe to ignore\n")]),_c('span',[_v("     logger.info(\"----------------[USER COMMAND][\" + commandText + \"]\");\n")]),_c('span',[_v("\n")]),_c('span',[_v("     CommandResult commandResult;\n")]),_c('span',[_v("     //Parse user input from String to a Command\n")]),_c('span',[_v("     Command command = addressBookParser.parseCommand(commandText);\n")]),_c('span',[_v("     //Executes the Command and stores the result\n")]),_c('span',[_v("     commandResult = command.execute(model);\n")]),_c('span',[_v("\n")]),_c('span',[_v("     try {\n")]),_c('span',[_v("         //We can deduce that the previous line of code modifies model in some way\n")]),_c('span',[_v("         // since it's being stored here.\n")]),_c('span',[_v("         storage.saveAddressBook(model.getAddressBook());\n")]),_c('span',[_v("     } catch (IOException ioe) {\n")]),_c('span',[_v("         throw new CommandException(FILE_OPS_ERROR_MESSAGE + ioe, ioe);\n")]),_c('span',[_v("     }\n")]),_c('span',[_v("\n")]),_c('span',[_v("     return commandResult;\n")]),_c('span',[_v(" }\n")])])])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager#execute()")]),_v(" appears to delegate most of the heavy lifting to other components. Let’s take a closer look at each one.")])]),_v(" "),_c('li',[_c('p',[_c('em',[_v("Step over")]),_v(" the logging code since it is of no interest to us now.\n"),_c('a',{attrs:{"href":"/tp/images/tracing/StepOver.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/tracing/StepOver.png","alt":"StepOver"}})])])]),_v(" "),_c('li',[_c('p',[_c('em',[_v("Step into")]),_v(" the line where user input in parsed from a String to a Command, which should bring you to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("AddressBookParser#parseCommand()")]),_v(" method (partial code given below):")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("public Command parseCommand(String userInput) throws ParseException {\n")]),_c('span',[_v("    ...\n")]),_c('span',[_v("    final String commandWord = matcher.group(\"commandWord\");\n")]),_c('span',[_v("    final String arguments = matcher.group(\"arguments\");\n")]),_c('span',[_v("    ...\n")])])])]),_v(" "),_c('li',[_c('p',[_c('em',[_v("Step over")]),_v(" the statements in that method until you reach the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("switch")]),_v(" statement. The 'Variables' window now shows the value of both "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("commandWord")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("arguments")]),_v(":"),_c('br'),_v(" "),_c('a',{attrs:{"href":"/tp/images/tracing/Variables.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/tracing/Variables.png","alt":"Variables"}})])])]),_v(" "),_c('li',[_c('p',[_v("We see that the value of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("commandWord")]),_v(" is now "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_v(" but "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("arguments")]),_v(" is still not processed in any meaningful way.")])]),_v(" "),_c('li',[_c('p',[_v("Stepping through the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("switch")]),_v(" block, we end up at a call to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditCommandParser().parse()")]),_v(" as expected (because the command we typed is an edit command).")]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("...\n")]),_c('span',[_v("case EditCommand.COMMAND_WORD:\n")]),_c('span',[_v("    return new EditCommandParser().parse(arguments);\n")]),_c('span',[_v("...\n")])])])]),_v(" "),_c('li',[_c('p',[_v("Let’s see what "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditCommandParser#parse()")]),_v(" does by stepping into it. You might have to click the 'step into' button multiple times here because there are two method calls in that statement: "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditCommandParser()")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("parse()")]),_v(".")]),_v(" "),_c('div',{staticClass:"alert alert-primary",attrs:{"markdown":"span"}},[_v(":bulb: **Intellij Tip:** Sometimes, you might end up stepping into functions that are not of interest. Simply use the `step out` button to get out of them!\n")])]),_v(" "),_c('li',[_c('p',[_v("Stepping through the method shows that it calls "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ArgumentTokenizer#tokenize()")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ParserUtil#parseIndex()")]),_v(" to obtain the arguments and index required.")])]),_v(" "),_c('li',[_c('p',[_v("The rest of the method seems to exhaustively check for the existence of each possible parameter of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_v(" command and store any possible changes in an "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditPersonDescriptor")]),_v(". Recall that we can verify the contents of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("editPersonDesciptor")]),_v(" through the 'Variables' window."),_c('br'),_v(" "),_c('a',{attrs:{"href":"/tp/images/tracing/EditCommand.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/tracing/EditCommand.png","alt":"EditCommand"}})])])]),_v(" "),_c('li',[_c('p',[_v("As you just traced through some code involved in parsing a command, you can take a look at this class diagram to see where the various parsing-related classes you encountered fit into the design of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component.\n"),_c('img',{attrs:{"src":"/tp/images/ParserClasses.png","width":"600"}})])]),_v(" "),_c('li',[_c('p',[_v("Let’s continue stepping through until we return to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager#execute()")]),_v(".")]),_v(" "),_c('p',[_v("The sequence diagram below shows the details of the execution path through the Logic component. Does the execution path you traced in the code so far match the diagram?"),_c('br'),_v(" "),_c('a',{attrs:{"href":"/tp/images/tracing/LogicSequenceDiagram.png","target":"_self"}},[_c('img',{staticClass:"img-fluid",attrs:{"src":"/tp/images/tracing/LogicSequenceDiagram.png","alt":"Tracing an `edit` command through the Logic component"}})])])]),_v(" "),_c('li',[_c('p',[_v("Now, step over until you read the statement that calls the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute()")]),_v(" method of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditCommand")]),_v(" object received, and step into that "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("execute()")]),_v(" method (partial code given below):")]),_v(" "),_c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditCommand#execute()")]),_v(":")])]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("@Override\n")]),_c('span',[_v("public CommandResult execute(Model model) throws CommandException {\n")]),_c('span',[_v("    ...\n")]),_c('span',[_v("    Person personToEdit = lastShownList.get(index.getZeroBased());\n")]),_c('span',[_v("    Person editedPerson = createEditedPerson(personToEdit, editPersonDescriptor);\n")]),_c('span',[_v("    if (!personToEdit.isSamePerson(editedPerson) && model.hasPerson(editedPerson)) {\n")]),_c('span',[_v("        throw new CommandException(MESSAGE_DUPLICATE_PERSON);\n")]),_c('span',[_v("    }\n")]),_c('span',[_v("    model.setPerson(personToEdit, editedPerson);\n")]),_c('span',[_v("    model.updateFilteredPersonList(PREDICATE_SHOW_ALL_PERSONS);\n")]),_c('span',[_v("    return new CommandResult(String.format(MESSAGE_EDIT_PERSON_SUCCESS, editedPerson));\n")]),_c('span',[_v("}\n")])])])]),_v(" "),_c('li',[_c('p',[_v("As suspected, "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("command#execute()")]),_v(" does indeed make changes to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("model")]),_v(" object. Specifically,")]),_v(" "),_c('ul',[_c('li',[_v("it uses the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("setPerson()")]),_v(" method (defined in the interface "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" and implemented in "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ModelManager")]),_v(" as per the usual pattern) to update the person data.")]),_v(" "),_c('li',[_v("it uses the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("updateFilteredPersonList")]),_v(" method to ask the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" to populate the 'filtered list' with "),_c('em',[_v("all")]),_v(" persons."),_c('br'),_v("\nFYI, The 'filtered list' is the list of persons resulting from the most recent operation that will be shown to the user immediately after. For the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit")]),_v(" command, we populate it with all the persons so that the user can see the edited person along with all other persons. If this was a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("find")]),_v(" command, we would be setting that list to contain the search results instead."),_c('br'),_v("\nTo provide some context, given below is the class diagram of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component. See if you can figure out where the 'filtered list' of persons is being tracked.\n"),_c('img',{attrs:{"src":"/tp/images/ModelClassDiagram.png","width":"450"}}),_c('br')]),_v(" "),_c('li',[_v("💡 This may be a good time to read through the "),_c('a',{attrs:{"href":"/tp/DeveloperGuide.html#model-component"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Model")]),_v(" component section of the DG")])])])]),_v(" "),_c('li',[_c('p',[_v("As you step through the rest of the statements in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("EditCommand#execute()")]),_v(" method, you'll see that it creates a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("CommandResult")]),_v(" object (containing information about the result of the execution) and returns it."),_c('br'),_v("\nAdvancing the debugger by one more step should take you back to the middle of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager#execute()")]),_v(" method."),_c('br')])]),_v(" "),_c('li',[_c('p',[_v("Given that you have already seen quite a few classes in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component in action, see if you can identify in this partial class diagram some of the classes you've encountered so far, and see how they fit into the class structure of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component:\n"),_c('img',{attrs:{"src":"/tp/images/LogicClassDiagram.png","width":"550"}})]),_v(" "),_c('ul',[_c('li',[_v("💡 This may be a good time to read through the "),_c('a',{attrs:{"href":"/tp/DeveloperGuide.html#logic-component"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Logic")]),_v(" component section of the DG")])])])]),_v(" "),_c('li',[_c('p',[_v("Similar to before, you can step over/into statements in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager#execute()")]),_v(" method to examine how the control is transferred to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" component and what happens inside that component.")]),_v(" "),_c('div',{staticClass:"alert alert-primary",attrs:{"markdown":"span"}},[_v(":bulb: **Intellij Tip:** When trying to step into a statement such as `storage.saveAddressBook(model.getAddressBook())` which contains multiple method calls, Intellij will let you choose (by clicking) which one you want to step into.\n")])]),_v(" "),_c('li',[_c('p',[_v("As you step through the code inside the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" component, you will eventually arrive at the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("JsonAddressBook#saveAddressBook()")]),_v(" method which calls the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("JsonSerializableAddressBook")]),_v(" constructor, to create an object that can be "),_c('em',[_v("serialized")]),_v(" (i.e., stored in storage medium) in JSON format. That constructor is given below (with added line breaks for easier readability):")]),_v(" "),_c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("JsonSerializableAddressBook")]),_v(" constructor:")])]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("/**\n")]),_c('span',[_v(" * Converts a given {@code ReadOnlyAddressBook} into this class for Jackson use.\n")]),_c('span',[_v(" *\n")]),_c('span',[_v(" * @param source future changes to this will not affect the created\n")]),_c('span',[_v(" * {@code JsonSerializableAddressBook}.\n")]),_c('span',[_v(" */\n")]),_c('span',[_v("public JsonSerializableAddressBook(ReadOnlyAddressBook source) {\n")]),_c('span',[_v("    persons.addAll(\n")]),_c('span',[_v("        source.getPersonList()\n")]),_c('span',[_v("              .stream()\n")]),_c('span',[_v("              .map(JsonAdaptedPerson::new)\n")]),_c('span',[_v("              .collect(Collectors.toList()));\n")]),_c('span',[_v("}\n")])])])]),_v(" "),_c('li',[_c('p',[_v("It appears that a "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("JsonAdaptedPerson")]),_v(" is created for each "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")]),_v(" and then added to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("JsonSerializableAddressBook")]),_v(".\nThis is because regular Java objects need to go through an "),_c('em',[_v("adaptation")]),_v(" for them to be suitable to be saved in JSON format.")])]),_v(" "),_c('li',[_c('p',[_v("While you are stepping through the classes in the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" component, here is the component's class diagram to help you understand how those classes fit into the structure of the component."),_c('br'),_v(" "),_c('img',{attrs:{"src":"/tp/images/StorageClassDiagram.png","width":"550"}})]),_v(" "),_c('ul',[_c('li',[_v("💡 This may be a good time to read through the "),_c('a',{attrs:{"href":"/tp/DeveloperGuide.html#storage-component"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Storage")]),_v(" component section of the DG")])])])]),_v(" "),_c('li',[_c('p',[_v("We can continue to step through until you reach the end of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("LogicManager#execute()")]),_v(" method and return to the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow#executeCommand()")]),_v(" method (the place where we put the original breakpoint).")])]),_v(" "),_c('li',[_c('p',[_v("Stepping into "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("resultDisplay.setFeedbackToUser(commandResult.getFeedbackToUser());")]),_v(", we end up in:")]),_v(" "),_c('p',[_c('strong',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("ResultDisplay#setFeedbackToUser()")])])]),_v(" "),_c('pre',[_c('code',{pre:true,attrs:{"class":"hljs"}},[_c('span',[_v("public void setFeedbackToUser(String feedbackToUser) {\n")]),_c('span',[_v("    requireNonNull(feedbackToUser);\n")]),_c('span',[_v("    resultDisplay.setText(feedbackToUser);\n")]),_c('span',[_v("}\n")])])])]),_v(" "),_c('li',[_c('p',[_v("Finally, you can step through until you reach the end of"),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MainWindow#executeCommand()")]),_v("."),_c('br'),_v("\n💡 This may be a good time to read through the "),_c('a',{attrs:{"href":"/tp/DeveloperGuide.html#ui-component"}},[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("UI")]),_v(" component section of the DG")])])])])}
},function anonymous(
) {
with(this){return _c('h2',{attrs:{"id":"conclusion"}},[_v("Conclusion"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#conclusion","onclick":"event.stopPropagation()"}})])}
},function anonymous(
) {
with(this){return _c('ol',[_c('li',[_c('p',[_v("In this tutorial, we traced the \"happy path\" (i.e., no errors). What\ndo you think will happen if we traced the following commands\ninstead? What exceptions do you think will be thrown (if any), where\nwill the exceptions be thrown and where will they be handled?")]),_v(" "),_c('ol',[_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("redit 1 n/Alice Yu")])])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 0 n/Alice Yu")])])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1 n/Alex Yeoh")])])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1")])])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1 n/アリス ユー")])])]),_v(" "),_c('li',[_c('p',[_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("edit 1 t/one t/two t/three t/one")])])])])]),_v(" "),_c('li',[_c('p',[_v("What components will you have to modify to perform the following\nenhancements to the application?")]),_v(" "),_c('ol',[_c('li',[_c('p',[_v("Make command words case-insensitive")])]),_v(" "),_c('li',[_c('p',[_v("Allow "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("delete")]),_v(" to remove more than one index at a time")])]),_v(" "),_c('li',[_c('p',[_v("Save the address book in the CSV format instead")])]),_v(" "),_c('li',[_c('p',[_v("Add a new command")])]),_v(" "),_c('li',[_c('p',[_v("Add a new field to "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("Person")])])]),_v(" "),_c('li',[_c('p',[_v("Add a new entity to the address book")])])])])])}
}];
  