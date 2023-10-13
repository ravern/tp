package seedu.address.model.util;

import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import seedu.address.model.AddressBook;
import seedu.address.model.ReadOnlyAddressBook;
import seedu.address.model.person.Attachment;
import seedu.address.model.person.Email;
import seedu.address.model.person.Gpa;
import seedu.address.model.person.Name;
import seedu.address.model.person.Person;
import seedu.address.model.person.Phone;
import seedu.address.model.tag.Tag;

/**
 * Contains utility methods for populating {@code AddressBook} with sample data.
 */
public class SampleDataUtil {
    public static Person[] getSamplePersons() {
        return new Person[] {
            new Person(new Name("Alex Yeoh"), new Phone("87438807"), new Email("alexyeoh@example.com"),
                new Gpa(4.2),
                getTagSet("pastTA"),
                getAttachments("data/attachments/tmp.json")),
            new Person(new Name("Bernice Yu"), new Phone("99272758"), new Email("berniceyu@example.com"),
                new Gpa(5.0),
                getTagSet("pastTA", "deansList"),
                getAttachments("data/attachments/tmp.json")),
            new Person(new Name("Charlotte Oliveiro"), new Phone("93210283"), new Email("charlotte@example.com"),
                new Gpa(3.6),
                getTagSet("pastTA"),
                getAttachments("data/attachments/tmp.json")),
            new Person(new Name("David Li"), new Phone("91031282"), new Email("lidavid@example.com"),
                new Gpa(4.71),
                getTagSet("pastTA"),
                getAttachments("data/attachments/tmp.json")),
            new Person(new Name("Irfan Ibrahim"), new Phone("92492021"), new Email("irfan@example.com"),
                new Gpa(3.67),
                getTagSet("topInModule"),
                getAttachments("data/attachments/tmp.json")),
            new Person(new Name("Roy Balakrishnan"), new Phone("92624417"), new Email("royb@example.com"),
                new Gpa(4.3),
                getTagSet("pastTA"),
                getAttachments("data/attachments/tmp.json"))
        };
    }

    public static ReadOnlyAddressBook getSampleAddressBook() {
        AddressBook sampleAb = new AddressBook();
        for (Person samplePerson : getSamplePersons()) {
            sampleAb.addPerson(samplePerson);
        }
        return sampleAb;
    }

    /**
     * Returns a tag set containing the list of strings given.
     */
    public static Set<Tag> getTagSet(String... strings) {
        return Arrays.stream(strings)
                .map(Tag::new)
                .collect(Collectors.toSet());
    }

    /**
     * Returns an attachment list containing the list of strings given.
     */
    public static List<Attachment> getAttachments(String... strings) {
        return Arrays.stream(strings)
                .map(Attachment::new)
                .collect(Collectors.toList());
    }

}
