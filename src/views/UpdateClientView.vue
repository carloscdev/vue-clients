<script setup>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import ClientService from '../services/client.service';
import { FormKit } from '@formkit/vue';
import Title from '../components/UI/Title.vue';

defineProps({
  title: {
    type: String,
    required: true
  }
})

const route = useRoute();
const router = useRouter();
const handleSubmit = (data) => {
  data.id = route.params.id;
  data.state = formData.value.state;
  ClientService.updateClient(route.params.id, data);
  router.push({ name: 'clients' });
}

const formData = ref({});

onMounted(() => {
  const response = ClientService.getClient(route.params.id)
  formData.value = response;
})
</script>

<template>
  <div>
    <Title :title="title" />
    <div>
      <div class="max-w-[1080px] w-[95%] mx-auto mt-10">
        <FormKit
          type="form"
          submit-label="Save Changes"
          incomplete-message="An error has occurred, please check the form."
          @submit="handleSubmit"
          :value="formData"
        >
          <FormKit
            type="text"
            label="Name *"
            name="name"
            placeholder="Jhon"
            validation="required"
            :validation-messages="{ required: 'Complete the name field' }"
            v-model="formData.name"
          />
          <FormKit
            type="text"
            label="Lastname *"
            name="lastname"
            placeholder="Doe"
            validation="required"
            :validation-messages="{ required: 'Complete the lastname field' }"
            v-model="formData.lastname"
          />
          <FormKit
            type="email"
            label="Email *"
            name="email"
            placeholder="example@mail.com"
            validation="required|email"
            :validation-messages="{ required: 'Complete the email field', email: 'Enter a valid email' }"
            v-model="formData.email"
          />
          <FormKit
            type="text"
            label="Phone"
            name="phone"
            placeholder="xxx-xxx-xxx"
            validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{3}$/"
            :validation-messages="{ matches: 'Enter a valid phone number' }"
            v-model="formData.phone"
          />
          <FormKit
            type="text"
            label="Company"
            name="company"
            placeholder="Google"
            v-model="formData.company"
          />
          <FormKit
            type="text"
            label="Position"
            name="job"
            placeholder="Developer"
            v-model="formData.job"
          />
        </FormKit>
      </div>
    </div>
  </div>
</template>

<style>
.formkit-wrapper {
  min-width: 100%;
}
</style>