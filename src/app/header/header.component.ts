import { Component, Output, EventEmitter  } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
    @Output() messageEvent = new EventEmitter<string>();
    public message: any = [];
    public results: Array<Users> = [];
    private requestTimer = null;
    public users: Array<Users> = [
        {
            name:"Robert",
            surname:"De Niro",
            age:60
        },

        {
            name:"Olivya",
            surname:"Dun",
            age:25
        },

        {
            name:"Alen",
            surname:"Delon",
            age:60
        },

        {
            name:"Mike",
            surname:"Suares",
            age:23
        },

        {
            name:"Jack",
            surname:"Sunders",
            age:58
        },

        {
            name:"Leon",
            surname:"Wilsher",
            age:45
        }
    ];

    public search(value:string):void{
        if(this.requestTimer !== null){
            clearTimeout(this.requestTimer);
        }


        this.requestTimer = setTimeout(()=> {
            console.log("searched");
            if (value.length === 0){
                this.results = [];
            } else {
                this.results = this.users.filter((el)=>{
                    return el.name.toUpperCase().indexOf(value.toUpperCase()) > -1;
                });

                this.message = this.results;
                this.sendMessage();
            }
        }, 400);
    }

    sendMessage(){
        this.messageEvent.emit(this.message);
    }
}

interface Users {
    name:string;
    surname:string;
    age:number;
}