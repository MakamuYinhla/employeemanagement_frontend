

export class Employee {
  firstname : string;
  lastname : string;
  email : string;

  public constructor(firstname:string, lastname : string, email : string){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }

  public setFirstName(firstname : string) : void{
    this.firstname = firstname;
  }
  public setLastName(lastname : string) : void{
    this.lastname = lastname;
  }
  public setEmail(email : string) : void{
    this.email = email;
  }

}
