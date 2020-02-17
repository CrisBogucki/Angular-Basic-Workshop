class MyClass {
    name: string;
    age: number;

    add (a:number, b:number) : number {
      return a+b;
    };

    print (msg: string): void {
        console.log(`This message {string}`);
    }
}

export class MyClassModules extends MyClass {

}


