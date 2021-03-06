import emitter from '../methods/emitter';

export default {
  data() {
    return {
      favorite: JSON.parse(localStorage.getItem('favorite')) || [],
    };
  },
  methods: {
    toggleFavorite(id) {
      const favoriteIndex = this.favorite.findIndex((item) => item === id);
      if (favoriteIndex === -1) {
        this.favorite.push(id);
        this.successFire('加入收藏');
      } else {
        this.favorite.splice(favoriteIndex, 1);
        this.warningFire('取消收藏');
      }
      emitter.emit('emit-favorite', this.favorite.length);
    },
  },
  watch: {
    favorite: {
      handler() {
        localStorage.setItem('favorite', JSON.stringify(this.favorite));
      },
      deep: true,
    },
  },
};
