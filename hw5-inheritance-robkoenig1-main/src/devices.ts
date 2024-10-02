/*
# Problem 5) Devices

In this problem, you will create simple classes to represent devices and their operating systems.
Operating Systems are used to manage files, so we will use the `ColorfulFile` class from the previous problem.
We aren't going to explicitly tell you what relationships to define between the classes, but there is a correct way to do it.

5.1. Define a class named `OperatingSystem`. The class should have a protected field:
    - `files` (ColorfulFile array) that defaults to an empty array.
    - `emptyFile` (ColorfulFile) that defaults to a new ColorfulFile with the name "EMPTY" and empty contents.
5.2. Define a void method named `addFile` that takes a filename and contents and adds a new ColorfulFile to the files array.
5.3. Define a method named `openFile` that takes a filename and returns the ColorfulFile with that name, or the emptyFile if the given filename cannot be found.
5.4. Define a class named `Device`. The class should have at least two public fields: `name` (string) and `weight` (number).
5.5. Define a class named `Phone`. A Phone has a name and weight.

    The Phone should use the `OperatingSystem` class to manage files. The `Phone` class should have a constructor
    that sets up the operating system with some initial files:
    - "contacts.txt" with the contents "Ada\nBabbage\nCaptain"
        **NOTE**: Everyone can know these fuzzy friends: https://i.imgur.com/o8sq7on.jpeg
    - "history.log" with empty contents

    You'll need to implement at least the following methods in the `Phone` class:
    - addContact(contact: string): void
        Appends the given contact to the contacts file (with a newline between each entry)
    - getHistory(): string
        Returns the contents of the history file
    - sendText(contact: string, message: string): boolean
        Sends a message to the given contact and appends the message to the history file (with a new line after each entry). 
            "Sent text to CONTACT: MESSAGE\n"
        Returns true if the contact exists in the contacts file and the history file is not the "EMPTY" file, and false otherwise.

    We're being a little vague with the details here, but you should be able to figure out what to do based on the 
    descriptions and the tests. If you're not sure, check the tests to see what the expected output is.
    A big part of our learning goal here is for you to judge what relationships should exist between the classes!
    Which ones extend, and which ones compose?
*/
import { ColorfulFile } from "./files";
