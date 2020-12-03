<template>
  <div class="qw-page-description">
    <div>
      <b-carousel
        :indicator="false"
        pause-info-type="is-secondary"
        icon-size="is-large"
        with-carousel-list
      >
        <b-carousel-item v-for="content in contents" :key="content.id">
          <div class="qw-showcase">
            <div class="showcase-image">
              <b-image
                class="box box-shadow-primary-light-br border-radius"
                :src="currentItem.image"
              />
            </div>
            <div class="showcase-content">
              <p
                class="showcase-title is-size-4 has-text-weight-bold has-text-centered"
              >
                {{ currentItem.title }}
              </p>
              <p class="showcase-description is-size-5 has-text-centered">
                {{ currentItem.description }}
              </p>
            </div>
          </div>
        </b-carousel-item>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "QwPageDescription",
  data: () => ({
    contents: [
      {
        title: "Title A",
        description:
          "ply dummy text of the printing and typesetting industry.\
          Lorem Ipsum has been the industry's",
        image:
          "https://www.elegantthemes.com/blog/wp-content/uploads/2019/04/change-wordpress-thumbnail-size-featured-image.jpg"
      },
      {
        title: "Title B",
        description:
          "ply dummy text of the printing and typesetting industry.\
          Lorem Ipsum has been the industry's",
        image:
          "https://www.elegantthemes.com/blog/wp-content/uploads/2019/04/change-wordpress-thumbnail-size-featured-image.jpg"
      },
      {
        title: "Title C",
        description:
          "ply dummy text of the printing and typesetting industry.\
          Lorem Ipsum has been the industry's",
        image:
          "https://www.elegantthemes.com/blog/wp-content/uploads/2019/04/change-wordpress-thumbnail-size-featured-image.jpg"
      }
    ],
    current: 0
  }),
  computed: {
    currentItem() {
      return this.contents[this.current];
    }
  }
};
</script>

<style scoped lang="scss">
@include box-shadow-hover("primary-light", "br", 20px, 20px);

.qw-page-description {
  border-radius: none;
}

.qw-showcase {
  .showcase-image {
    display: flex;
    justify-content: center;

    > .b-image-wrapper {
      padding: 0;
      max-width: 700px;
    }
  }

  .showcase-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
  }
}
</style>
