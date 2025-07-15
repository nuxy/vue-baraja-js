/**
 *  Vue BarajaJS
 *  A plugin for spreading items in a card-like fashion.
 *
 *  Copyright 2021-2025, Marc S. Brooks (https://mbrooks.info)
 *  Licensed under the MIT license:
 *  http://www.opensource.org/licenses/mit-license.php
 */

'use strict';

import {ref} from 'vue';
import Baraja from 'baraja-js';
import 'baraja-js/dist/baraja.min.css';

/**
 * Provides Vue Component wrapper.
 */
export default {
  setup() {
    const elRef = ref(null);

    return {elRef};
  },

  mounted() {
    this.baraja = new Baraja(
      this.$el,
      this.options
    );
  },

  data() {
    return {
      baraja: null
    };
  },

  watch: {
    fan(newVal, oldVal) {
      if (!Object.is(newVal, oldVal)) {
        this.baraja.fan(newVal);
      }
    },
    add(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.baraja.add(newVal);
      }
    },
    close(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.baraja.close();
      }
    },
    last(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.baraja.last();
      }
    },
    next(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.baraja.next();
      }
    }
  },

  props: {
    id: {
      default: 'baraja-js',
      type: String
    },
    options: {
      default: () => ({}),
      type: Object
    },
    fan: {
      default: () => ({}),
      type: Object
    },
    add: {
      default: '',
      type: String
    },
    close: {
      default: false,
      type: Boolean
    },
    last: {
      default: false,
      type: Boolean
    },
    next: {
      default: false,
      type: Boolean
    }
  },

  template: `
    <ul v-bind:id="id" class="baraja-container" ref="wrapper">
      <slot :child="this.$slots.default" />
    </ul>
  `
};
