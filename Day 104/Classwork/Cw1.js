class Bank {
    constructor(username) {
    this.username = username; 
    this.balance = 0;        
    }

    deposit(amount) {
    this.balance += amount; 
    console.log(`${this.username}-ის ახალი ბალანსია: ${this.balance}`);
    }
}

const user1 = new Bank("Misho");

user1.deposit(100);  
user1.deposit(50);   
