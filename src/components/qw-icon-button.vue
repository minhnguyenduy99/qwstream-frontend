<template>
  <div>
    <button>
      <b-image
        style="width: 100px; height: 100px"
        ratio="1by1"
        src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png"
        rounded
      />
    </button>
  </div>
</template>

<script>
export default {
  name: "QWIconButton",
  props: {
    src: String
  }
};
</script>
