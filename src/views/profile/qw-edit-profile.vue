<template>
  <div class="qw-edit-profile">
    <div class="edit-profile">
      <ValidationObserver tag="form" ref="validator">
        <qw-validation-input
          v-model="form.display_name"
          custom-class="is-flex-grow-2"
          horizontal
          name="display name"
          placeholder="Your display name"
          label="Display name"
          rules="required|minmax:3,20"
        />
        <b-field horizontal label="Gender" custom-class="is-flex-grow-2">
          <b-dropdown aria-role="list" v-model="selectedGenderIndex">
            <button
              class="button is-primary is-outlined"
              slot="trigger"
              type="button"
              @click.prevent
            >
              <span>{{ selectedGender.name }}</span>
              <b-icon icon="chevron-down"></b-icon>
            </button>
            <b-dropdown-item
              :value="index"
              v-for="(gender, index) in listGenders"
              :key="gender.id"
              :focusable="false"
            >
              {{ gender.name }}
            </b-dropdown-item>
          </b-dropdown>
        </b-field>
        <b-field
          label="Date of birth"
          horizontal
          type="is-primary"
          custom-class="is-flex-grow-2"
        >
          <b-datepicker
            icon="calendar-today"
            v-model="form.date_of_birth"
            editable
            size="is-small"
          ></b-datepicker>
        </b-field>
        <b-field
          horizontal
          label=""
          class="field-submit"
          custom-class="is-flex-grow-2"
        >
          <b-button native-type="submit" type="is-primary">Update</b-button>
        </b-field>
      </ValidationObserver>
    </div>
    <div class="upload-picture">
      <label class="label">Upload avatar</label>
      <b-field class="file is-primary" :class="{ 'has-name': !!file }">
        <b-upload
          v-model="file"
          class="file-label"
          accept="image/*"
          @input="onImageLoaded"
        >
          <span class="file-cta">
            <b-icon class="file-icon" icon="upload"></b-icon>
            <span class="file-label">Click to upload</span>
          </span>
          <span class="file-name" v-if="file">
            {{ file.name }}
          </span>
        </b-upload>
      </b-field>
      <figure class="image-display b-image-wrapper image">
        <img ref="image-display" :src="form.avatar_url" />
      </figure>
      <!-- <b-image ref="image-display" :src="form.avatar_url" class="is-140x140" /> -->
    </div>
  </div>
</template>

<script>
import { ValidationObserver } from "vee-validate";
import { QwValidationInput } from "@/components";

export default {
  name: "QwEditProfile",
  components: {
    QwValidationInput,
    ValidationObserver
  },
  data: () => ({
    listGenders: [
      { id: 1, name: "Male" },
      { id: 2, name: "Female" },
      { id: 3, name: "Unknown" }
    ],
    selectedGenderIndex: 0,
    form: {
      display_name: "",
      gender: null,
      date_of_birth: null,
      avatar_url:
        "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png"
    },
    file: null
  }),
  computed: {
    selectedGender() {
      return this.listGenders[this.selectedGenderIndex];
    }
  },
  methods: {
    onImageLoaded(file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        if (e.target.result) {
          this.$refs["image-display"].src = e.target.result;
        }
      }.bind(this);
      reader.readAsDataURL(file);
    }
  }
};
</script>

<style scoped lang="scss">
form {
  > * {
    &:not(:last-child) {
      margin-bottom: 0.75rem;
    }

    &.field-submit {
      margin-top: 1.5rem;
    }
  }
}

.qw-edit-profile {
  display: flex;
  flex-direction: column;

  .upload-picture {
    margin-top: 2rem;
  }
  @include from($desktop) {
    flex-direction: row;

    .upload-picture {
      margin-top: 0;

      > .label {
        display: none;
      }
    }
  }
}

.edit-profile,
.upload-picture {
  flex-grow: 1;
}

.edit-profile {
  margin-right: 2rem;
}

.image-display {
  max-width: 200px;
}
</style>
