package seedu.address.logic.parser;

import static seedu.address.logic.Messages.MESSAGE_INVALID_COMMAND_FORMAT;

import seedu.address.commons.core.index.Index;
import seedu.address.logic.commands.UnhideCommand;
import seedu.address.logic.parser.exceptions.ParseException;



/**
 * Parses input arguments and creates a new UnhideCommand object.
 */
public class UnhideCommandParser implements Parser<UnhideCommand> {

    /**
     * Parses the given {@code String} of arguments in the context of the UnhideCommand
     * and returns a UnhideCommand object for execution.
     *
     * @throws ParseException if the user input does not conform to the expected format
     */
    public UnhideCommand parse(String args) throws ParseException {
        try {
            Index index = ParserUtil.parseIndex(args);
            return new UnhideCommand(index);
        } catch (ParseException pe) {
            throw new ParseException(String.format(MESSAGE_INVALID_COMMAND_FORMAT, UnhideCommand.MESSAGE_USAGE), pe);
        }
    }
}