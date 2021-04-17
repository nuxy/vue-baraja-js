import * as Vue from 'vue';
import BarajaJS from '../dist/vue-baraja';

/* eslint-disable max-len */
const cards = [
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/1.jpg',
    title: 'Coco Loko',
    details: 'Total bicycle rights in blog four loko raw denim ex, helvetica sapiente odio placeat.'
  },
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/2.jpg',
    title: 'Vermouth Land',
    details: 'Velit chambray fugiat, enim aesthetic esse ullamco typewriter.'
  },
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/3.jpg',
    title: 'Electrodynamics',
    details: 'Before they sold out PBR magna jean shorts non seitan ea. Dolor wolf pop-up.',
    addItems: true
  },
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/4.jpg',
    title: 'Retinal Bliss',
    details: 'Locavore vero ad, before they sold out food truck bushwick helvetica.'
  },
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/5.jpg',
    title: 'Disco Fever',
    details: 'Cillum laboris consequat, qui elit retro next level skateboard freegan hella.'
  },
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/6.jpg',
    title: 'Serenity',
    details: 'Truffaut wes anderson hoodie 3 wolf moon labore, fugiat lomo iphone eiusmod vegan.'
  },
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/7.jpg',
    title: 'Dark Honor',
    details: 'Chillwave mustache pinterest, marfa seitan umami id farm-to-table iphone.',
    addItems: true
  },
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/8.jpg',
    title: 'Nested Happiness',
    details: 'Minim post-ironic banksy american apparel iphone wayfarers.',
    addItems: true
  },
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/9.jpg',
    title: 'Lobster Maker',
    details: 'Far deference cupidatat non proident escape, he could greatest mister uninspired.'
  },
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/10.jpg',
    title: 'Cherry Country',
    details: 'Sint vinyl Austin street art odd future id trust fund, terry richardson cray.'
  },
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/11.jpg',
    title: 'Future Dynamo',
    details: 'Delicacy omnis nice, well upright, would loral sed quia small dream.'
  },
  {
    imageSrc: 'https://nuxy.github.io/baraja-js/images/12.jpg',
    title: 'Breaking Bad',
    details: 'French it rain adipisci necessary textile war ullam corporis time.'
  }
];
/* eslint-enable max-len */

const app = Vue.createApp({
  data() {
    return {
      cards: cards,
      add: null,
      fan: {},
      last: false,
      next: false,
      close: false
    };
  },

  methods: {

    // Fan right
    fanEvent() {
      this.fan = {
        direction: 'right',
        easing: 'ease-out',
        origin: {
          x: 25,
          y: 100
        },
        speed: 500,
        range: 90,
        center: true
      };
    },

    // Fan left
    fan2Event() {
      this.fan = {
        direction: 'left',
        easing: 'ease-out',
        origin: {
          x: 75,
          y: 100
        },
        speed: 500,
        range: 90,
        center: true
      };
    },

    // Fan right (asym.)
    fan3Event() {
      this.fan = {
        direction: 'right',
        easing: 'ease-out',
        origin: {
          minX: 20,
          maxX: 80,
          y: 100
        },
        speed: 500,
        range: 90,
        translation: 60,
        center: true
      };
    },

    // Fan left (asym.)
    fan4Event() {
      this.fan = {
        direction: 'left',
        easing: 'ease-out',
        origin: {
          minX: 20,
          maxX: 80,
          y: 100
        },
        speed: 500,
        range: 90,
        translation: 60,
        center: true
      };
    },

    // Rotated spread (horizontal)
    fan5Event() {
      this.fan = {
        direction: 'right',
        easing: 'ease-out',
        origin: {
          x: 50, y: 200
        },
        speed: 500,
        range: 100,
        center: true
      };
    },

    // Rotated spread (vertical)
    fan6Event() {
      this.fan = {
        direction: 'left',
        easing: 'ease-out',
        origin: {
          x: 200,
          y: 50
        },
        speed: 500,
        range: 80,
        center: true
      };
    },

    // Linear spread right
    fan7Event() {
      this.fan = {
        direction: 'right',
        easing: 'ease-out',
        origin: {
          x: 50,
          y: 200
        },
        speed: 500,
        range: 20,
        translation: 300,
        center: false
      };
    },

    // Linear spread left
    fan8Event() {
      this.fan = {
        direction: 'left',
        easing: 'ease-out',
        origin: {
          x: 50,
          y: 200
        },
        speed: 500,
        range: 20,
        translation : 300,
        center: false
      };
    },

    // Linear spread right (irregular)
    fan9Event() {
      this.fan = {
        direction: 'right',
        easing: 'ease-out',
        origin: {
          x: 50,
          y: 200
        },
        speed: 500,
        range: 20,
        translation: 300,
        center: false,
        scatter: true
      };
    },

    // Linear spread left (irregular)
    fan10Event() {
      this.fan = {
        direction: 'left',
        easing: 'ease-out',
        origin: {
          x: 50,
          y: 200
        },
        speed: 500,
        range: 20,
        translation: 300,
        center: false,
        scatter: true
      };
    },

    // Other 1
    fanOther1Event() {
      this.fan = {
        direction: 'left',
        easing: 'ease-out',
        origin: {
          x: 25,
          y: 100
        },
        speed: 500,
        range: 130,
        center: false
      };
    },

    // Other 2
    fanOther2Event() {
      this.fan = {
        direction: 'left',
        easing: 'ease-out',
        origin: {
          x: 50,
          y: 90
        },
        speed: 500,
        range: 360,
        center: false
      };
    },

    // Other 3
    fanOther3Event() {
      this.fan = {
        direction: 'left',
        easing: 'ease-out',
        origin: {
          x: 50,
          y: 100
        },
        speed: 500,
        range: 330,
        center: true
      };
    },

    // Other 4
    fanOther4Event() {
      this.fan = {
        direction: 'right',
        easing: 'ease-out',
        origin: {
          minX: 20,
          maxX: 80,
          y: 100
        },
        speed: 500,
        range: 90,
        translation: 60,
        center: true,
        scatter: true
      };
    },

    addEvent() {
      let html = '';

      this.cards.forEach(({imageSrc, title, details, addItems}) => {
        if (addItems) {
          html += `
            <li>
              <img src="${imageSrc}" alt="${title}" />
              <h4>${title}</h4>
              <p>${details}</p>
            </li>
          `;
        }
      });

      this.add = html;
    },

    closeEvent() {
      this.close = !this.close;
    },

    lastEvent() {
      this.last = !this.last;
    },

    nextEvent() {
      this.next = !this.next;
    }
  },

  /* eslint-disable */
  template: `
    <nav class="actions">
      <span id="nav-fan" v-on:click="fanEvent">
        Fan right
      </span>

      <span id="nav-fan2" v-on:click="fan2Event">
        Fan left
      </span>

      <span id="nav-fan3" v-on:click="fan3Event">
        Fan right (asym.)
      </span>

      <span id="nav-fan4" v-on:click="fan4Event">
        Fan left (asym.)
      </span>

      <span id="nav-fan5" v-on:click="fan5Event">
        Rotated spread (horizontal)
      </span>

      <span id="nav-fan6" v-on:click="fan6Event">
        Rotated spread (vertical)
      </span>

      <span id="nav-fan7" v-on:click="fan7Event">
        Linear spread right
      </span>

      <span id="nav-fan8" v-on:click="fan8Event">
        Linear spread left
      </span>

      <span id="nav-fan9" v-on:click="fan9Event">
        Linear spread right (irregular)
      </span>

      <span id="nav-fan10" v-on:click="fan10Event">
        Linear spread left (irregular)
      </span>

      <span id="nav-fanOther1" v-on:click="fanOther1Event">
        other
      </span>

      <span id="nav-fanOther2" v-on:click="fanOther2Event">
        other
      </span>

      <span id="nav-fanOther3" v-on:click="fanOther3Event">
        other
      </span>

      <span id="nav-fanOther4" v-on:click="fanOther4Event">
        other...
      </span>

      <span id="add" v-on:click="addEvent">
        Add items
      </span>
    </nav>

    <div class="baraja-demo">
      <baraja-js id="baraja-el" v-bind:fan="fan" v-bind:add="add" v-bind:close="close" v-bind:last="last" v-bind:next="next">
        <li v-for="({imageSrc, title, details}, index) in cards" :key="index">
          <img v-bind:src="imageSrc" v-bind:alt="title" />
          <h4>{{title}}</h4>
          <p>{{details}}</p>
        </li>
      </baraja-js>
    </div>

    <nav class="actions light">
      <span id="nav-prev" v-on:click="lastEvent">
        &lt;
      </span>

      <span id="nav-next" v-on:click="nextEvent">
        &gt;
      </span>

      <span id="close" v-on:click="closeEvent">
        close
      </span>
    </nav>
  `
  /* eslint-enable */
});

app.component('baraja-js', BarajaJS).mount('#main');
