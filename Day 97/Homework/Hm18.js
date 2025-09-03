function allEmailsValid(emails) {
    return emails.every(email => email.includes("@"));
}

const emails = ["test@example.com", "hello@world.com"];
console.log(allEmailsValid(emails));

const emails2 = ["invalidemail.com", "user@domain.com"];
console.log(allEmailsValid(emails2)); 