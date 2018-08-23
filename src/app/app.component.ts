import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
    public message: Array<any> = [];
    public image: string = null;
    public sliderInterval = null;
    public activeIndex: number = 0;
    public sliderData: Array<SliderItemModel> = [
        {
            id:1,
            image:'../assets/images/robert.jpg',
            title:"Robert De Niro"

        },
        {
            id:2,
            image:'../assets/images/alen.jpg',
            title:"Alen Delon"

        },
        {
            id:3,
            image:'../assets/images/teron.jpg',
            title:"Sharliz Teron"

        }
    ];

    public changeColor(clickedSlider:SliderItemModel ){
        this.image = clickedSlider.image;

        if(this.sliderInterval !== null){
            clearInterval(this.sliderInterval)
            this.startInterval();
        }

        this.activeIndex = clickedSlider.id - 1;
    };

    private startInterval(): void{
        this.sliderInterval = setInterval(()=>{
            this.image = this.sliderData[this.activeIndex].image;
            this.activeIndex += 1;

            if(this.activeIndex >= this.sliderData.length){
                this.activeIndex = 0;
            }
        },3000);
    };

    constructor() { }

    ngOnInit() {
        this.startInterval();
    }

    reciveMessage($event){
      this.message = $event;
    }
}
interface SliderItemModel {
    id:number;
    image:string;
    title:string;
}