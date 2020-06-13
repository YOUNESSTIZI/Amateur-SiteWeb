import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-product',
  templateUrl: './carousel-product.component.html',
  styleUrls: ['./carousel-product.component.scss']
})
export class CarouselProductComponent implements OnInit {
  itemsPerSlide = 5;
  singleSlideOffset = true;

  slides = [
    {image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
    {image: 'https://www.slrlounge.com/wp-content/uploads/2019/11/Sea-Thru-Underwater-Photography-Algorithm-SLR-Lounge_0001-1000x675.jpg'},
    {image: 'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    {image: 'https://www.sea-doo.com/content/sea-doo/en_us/_jcr_content/root/heroblock_1697882525.coreimg.100.0.jpeg/1585848294135/my20-family-group-lineup.jpeg?imwidth=2048'},
    {image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
    {image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
    {image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
    {image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
    {image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'},
    {image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
