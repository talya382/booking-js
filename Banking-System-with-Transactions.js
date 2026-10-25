class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount) {
    if (amount <= 0) {
      console.log("Deposit must be positive");
      return;
    }
    this.balance += amount;
  }
  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error("Insufficient funds");
    }
    this.balance -= amount;
  }
}

class Bank {
  constructor() {
    this.account = [];
  }
  addAccount(account) {
    this.account.push(account);
  }
  transfer(fromName, toName, amount) {
    let from = null;
    let to = null;
    for (const acount of this.account) {
      if (acount.owner === fromName) from = acount;
      if (acount.owner === toName) to = acount;
    }

    if (!from || !to) {
      throw new Error("Account not found");
    }
    from.withdraw(amount);
    to.deposit(amount);
  }
  showBalances(){
    this.account.forEach((acc)=>{
        console.log(`${acc.owner}:${acc.balance}`);
    })
  }
}
const B=new Bank();
B.addAccount(new BankAccount("Alice", 2000));
B.addAccount(new BankAccount("Bob", 500));
B.transfer('Alice','Bob',1000)
B.showBalances();
