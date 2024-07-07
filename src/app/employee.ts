

export class Employee {
  id : number;
  firstname : string;
  lastname : string;
  email : string;

  public constructor(){
    this.id = 0;
    this.firstname = "Sipho";
    this.lastname = "Mkhize";
    this.email = "sihpomkhize@gmail.com";
  }

  //Setters
  public setID(id : number) : void{
    this.id = id;
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
